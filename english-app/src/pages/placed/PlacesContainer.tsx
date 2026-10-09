import React, { useState, useEffect, useRef } from "react";

// 타입 임포트
import type { PlaceDataType, RegionData } from "@/pages/placed/constants/my-house/my-house-data/types";

// 수평 분리한 핵심 모드 컨테이너 임포트
import GameContainer from "./GameContainer";

interface AdventureContainerProps {
  placeData: PlaceDataType;
}

export default function AdventureContainer({ placeData }: AdventureContainerProps) {
  const { placeTitle, bgImage, masterRegions, placeKey } = placeData;

  // 컨트롤 상태 관리
  const [currentMode, setCurrentMode] = useState<"explore" | "game">("explore");
  const [hintOn, setHintOn] = useState<boolean>(false);
  const [hoveredTarget, setHoveredTarget] = useState<string | null>(null);
  const [activeClickedTarget, setActiveClickedTarget] = useState<string | null>(null);
  const [videoTarget, setVideoTarget] = useState<RegionData | null>(null);
  const [showBubble, setShowBubble] = useState<boolean>(false);
  const [clickedSet, setClickedSet] = useState<Set<string>>(new Set());

  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const bubbleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalWords = masterRegions.length;
  const clickedCount = clickedSet.size;
  const isGameUnlocked = clickedCount >= totalWords && totalWords > 0;

  // 오디오 시스템 제어 핸들러
  const stopCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }
  };

  const playSentenceAudios = (wordKey: string) => {
    stopCurrentAudio();
    if (!wordKey) return;
    const cleanTargetId = wordKey.replace(/_/g, "").toLowerCase();

    const folderName = `${placeKey}Sentence`;
    const firstAudio = new Audio(`/audio/${folderName}/${cleanTargetId}1.mp3`);
    currentAudioRef.current = firstAudio;

    firstAudio.play()
      .then(() => {
        firstAudio.onended = () => {
          const secondAudio = new Audio(`/audio/${folderName}/${cleanTargetId}2.mp3`);
          currentAudioRef.current = secondAudio;
          secondAudio.play().catch(() => { });
          secondAudio.onended = () => {
            currentAudioRef.current = null;
          };
        };
      })
      .catch(() => { });
  };

  // ==================== 🔍 EXPLORER MODE 전용 핸들러 ====================
  const handleExploreTargetClick = (targetId: string) => {
    setClickedSet(prev => new Set(prev).add(targetId));

    if (activeClickedTarget === targetId && showBubble) {
      const foundRegion = masterRegions.find(r => r.wordKey === targetId);
      if (foundRegion) {
        setVideoTarget(foundRegion);
        setShowBubble(false);
      }
      return;
    }
    const region = masterRegions.find(r => r.wordKey === targetId);
    if (region) {
      const audio = new Audio(region.audioUrl);
      audio.play().catch(err => console.log(err));
    }
    setActiveClickedTarget(targetId);
    setShowBubble(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => setShowBubble(false), 4000);
  };

  const getPolygonCenter = (pointsStr: string) => {
    if (!pointsStr) return { x: 50, y: 50 };
    const pairs = pointsStr.trim().split(/\s+/);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    pairs.forEach(p => {
      const [xStr, yStr] = p.split(",");
      const cx = parseFloat(xStr); const cy = parseFloat(yStr);
      if (cx < minX) minX = cx; if (cx > maxX) maxX = cx;
      if (cy < minY) minY = cy; if (cy > maxY) maxY = cy;
    });
    return { x: ((minX + maxX) / 2 / 160) * 100, y: ((minY + maxY) / 2 / 90) * 100 };
  };

  const centerCoords = activeClickedTarget ? getPolygonCenter(masterRegions.find(r => r.wordKey === activeClickedTarget)?.points || "") : { x: 50, y: 50 };
  const currentExploreWord = activeClickedTarget ? masterRegions.find(r => r.wordKey === activeClickedTarget) : null;

  useEffect(() => {
    return () => {
      if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
      stopCurrentAudio();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 w-full relative"
      style={{ background: "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)" }}>

      {/* 장소 기반 동적 대타이틀 */}
      <div className="text-center pt-24 mb-6">
        <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">{placeTitle}</h1>
      </div>

      {/* 모드 전환 탭 토글러 */}
      <div className="flex gap-4 bg-white/40 backdrop-blur-md p-1.5 rounded-full shadow-inner border border-white/40 mb-8">
        <button onClick={() => { stopCurrentAudio(); setCurrentMode("explore"); }} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${currentMode === "explore" ? "bg-[#4CAF50] text-white shadow-md scale-105" : "text-emerald-800 hover:bg-white/30"}`}>🔍 Explorer</button>
        <button
          disabled={!isGameUnlocked}
          onClick={() => {
            stopCurrentAudio();
            setCurrentMode("game");
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${!isGameUnlocked
              ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
              : currentMode === "game"
                ? "bg-[#4CAF50] text-white shadow-md scale-105"
                : "text-emerald-800 hover:bg-white/30"
            }`}
        >
          {isGameUnlocked
            ? "🎮 Game Mode"
            : `🔒 Game Mode (${clickedCount}/${totalWords})`}
        </button>
      </div>

      {/* ==================== 1. EXPLORER MODE ==================== */}
      {currentMode === "explore" && (
        <div className="w-full max-w-[1000px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white flex flex-col gap-4 relative">
          <div className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100">
            <img src={bgImage} alt="Base Map" className={`w-full h-full object-cover select-none transition-all duration-300 ${hintOn ? "brightness-[0.2] blur-[1px]" : "brightness-100"}`} />

            {/* SVG 폴리곤 맵 오버레이 */}
            <svg viewBox="0 0 160 90" className="absolute inset-0 w-full h-full">
              {masterRegions.map((region) => {
                const isFound = clickedSet.has(region.wordKey);
                const isLit = hintOn || hoveredTarget === region.wordKey || activeClickedTarget === region.wordKey;
                
                return (
                  <polygon
                    key={region.wordKey}
                    points={region.points}
                    // 이미 찾은 단어는 연한 초록색으로 표시
                    fill={isFound ? "#4CAF50" : "white"}
                    fillOpacity={isFound ? "0.25" : isLit ? "0.2" : "0.001"}
                    onMouseEnter={() => setHoveredTarget(region.wordKey)}
                    onMouseLeave={() => setHoveredTarget(null)}
                    onClick={() => handleExploreTargetClick(region.wordKey)}
                    className={`cursor-pointer transition-all duration-200 stroke-[0.15] ${
                      isLit
                        ? "stroke-yellow-400 stroke-[0.3]"
                        : isFound
                          ? "stroke-emerald-400"
                          : "stroke-transparent"
                    }`}
                  />
                );
              })}
            </svg>

            {/* 🌟 완료된 단어 및 힌트 켜졌을 때 지도 위에 항상 떠있는 단어 라벨 배지 */}
            <div className="absolute inset-0 pointer-events-none">
              {masterRegions.map((region) => {
                const isFound = clickedSet.has(region.wordKey);
                const showBadge = isFound || hintOn;
                if (!showBadge) return null;

                const center = getPolygonCenter(region.points);
                return (
                  <div
                    key={`badge-${region.wordKey}`}
                    style={{ left: `${center.x}%`, top: `${center.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300"
                  >
                    <button
                      onClick={() => handleExploreTargetClick(region.wordKey)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-black tracking-tight shadow-md border flex items-center gap-1 backdrop-blur-sm whitespace-nowrap transition-transform hover:scale-110 active:scale-95 ${
                        isFound
                          ? "bg-white/95 text-emerald-800 border-emerald-400"
                          : "bg-amber-500/90 text-white border-amber-200"
                      }`}
                    >
                      <span>{isFound ? "✔" : "🔍"}</span>
                      <span>{region.wordKey.replace(/_/g, " ")}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* 터치형 정보 말풍선 큰 버블 컴포넌트 */}
            {currentExploreWord && showBubble && (
              <div className="absolute z-30 pointer-events-auto" style={{ left: `${centerCoords.x}%`, top: `${centerCoords.y}%` }}>
                <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border-[3px] border-[#7CB342] -translate-x-1/2 -translate-y-[140%] cursor-pointer whitespace-nowrap animate-bounce"
                  onClick={() => { setVideoTarget(currentExploreWord); setShowBubble(false); }}>
                  <span className="text-[#388E3C] font-black tracking-wide text-base">{currentExploreWord.wordKey.replace(/_/g, " ")}</span>
                  <span className="text-xs text-gray-400 ml-1.5 font-bold">🎬 재생</span>
                </div>
              </div>
            )}
          </div>

          {/* 하단 제어 및 게이지 바 */}
          <div className="flex justify-between items-center pt-2 px-2 gap-4">
            <div className="flex-grow flex flex-col gap-1">
              <div className="w-full bg-white rounded-full h-3 border overflow-hidden p-[1px]"><div className="bg-[#A7DCF0] h-full rounded-full transition-all" style={{ width: `${(clickedSet.size / totalWords) * 100}%` }} /></div>
              <span className="text-xs font-bold text-gray-500">Voca Progress: {clickedSet.size} / {totalWords}</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setHintOn(!hintOn)} className={`font-black text-sm px-5 py-3 rounded-xl shadow-sm ${hintOn ? "bg-amber-500 text-white" : "bg-white text-amber-600 border border-amber-200"}`}>{hintOn ? "💡  On" : "✨ Hint"}</button>
              <button
                disabled={!isGameUnlocked} 
                onClick={() => {
                  stopCurrentAudio();
                  setCurrentMode("game");
                }}
                className={`font-black text-sm px-6 py-3 rounded-xl shadow-sm transition-all ${isGameUnlocked
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white animate-bounce cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none opacity-60"
                  }`}
              >
                {isGameUnlocked
                  ? "🎮 Game Ready"
                  : `🔒 Locked (${clickedCount}/${totalWords})`}
              </button>
            </div>
          </div>

          {/* 테스트 및 학습 상태 확인용 단어 체크리스트 뷰 */}
          <div className="mt-2 p-4 bg-white/70 rounded-2xl border border-amber-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-800">
                📝 Word Checklist ({clickedCount}/{totalWords})
              </span>
              <span className="text-[11px] text-gray-400 font-medium">
                *단어를 누르면 해당 위치가 강조되고 바로 완료 처리됩니다.
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
              {masterRegions.map((region) => {
                const isCompleted = clickedSet.has(region.wordKey);
                return (
                  <button
                    key={region.wordKey}
                    onClick={() => handleExploreTargetClick(region.wordKey)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                      isCompleted
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200 line-through opacity-65"
                        : "bg-white text-orange-600 border-orange-200 shadow-sm hover:bg-orange-50 scale-100 hover:scale-105"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-emerald-500" : "bg-orange-500 animate-pulse"}`} />
                    {region.wordKey.replace(/_/g, " ")}
                    {isCompleted ? "✔" : ""}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================== 2. GAME MODE ==================== */}
      {currentMode === "game" && (
        <GameContainer key={placeKey} placeData={placeData} />
      )}

      {/* ==================== 🎬 미디어 비디오 학습 모달 ==================== */}
      {videoTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#FFFBF0] rounded-[40px] border-8 border-white p-6 max-w-3xl w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-[#4B9343] capitalize">{videoTarget.wordKey.replace(/_/g, " ")}</h2>
              <button
                onClick={() => {
                  stopCurrentAudio();
                  setVideoTarget(null);
                }}
                className="w-8 h-8 rounded-full border flex items-center justify-center font-bold text-gray-400 bg-white shadow-sm hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-inner">
              <video
                src={videoTarget.videoPath}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            {/* 오디오 가이드 문장 리스트 */}
            <div className="flex flex-col gap-2 bg-white/60 border p-4 rounded-xl shadow-inner">
              {videoTarget.sentence.split('.').map((s) => s.trim()).filter(Boolean).map((sentenceStr, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm">
                  <span className="font-bold text-sm text-gray-700">“{sentenceStr}.”</span>
                  <button onClick={() => playSentenceAudios(videoTarget.wordKey)} className="bg-[#4CAF50] hover:bg-[#43A047] text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-[0_3px_0_#2E7D32]">🔊 Listen</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}