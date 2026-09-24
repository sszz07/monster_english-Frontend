import React, { useState, useEffect, useRef } from "react";

// 타입 임포트 (필요 시 경로 확인)
import type { PlaceDataType } from "@/pages/placed/constants/my-house/my-house-data/types";
import type { RegionData } from "@/pages/placed/constants/my-house/my-house-data/types";

// 1. 데이터 및 타입 임포트 (총 10개 장소 데이터)
import { apartmentData } from "@/pages/placed/constants/my-house/my-house-data/ApartmentData";
import { houseData } from "@/pages/placed/constants/my-house/my-house-data/HouseData";
import { kitchenData } from "@/pages/placed/constants/my-house/my-house-data/KitchenData";
import { livingRoomData } from "@/pages/placed/constants/my-house/my-house-data/LivingRoomData";
import { bathroomData } from "@/pages/placed/constants/my-house/my-house-data/BathroomData";
import { bedroomData } from "@/pages/placed/constants/my-house/my-house-data/BedroomData";
import { playgroundData } from "@/pages/placed/constants/my-house/my-house-data/PlaygroundData";
import { recyclingAreaData } from "@/pages/placed/constants/my-house/my-house-data/RecyclingData";
import { familyData } from "@/pages/placed/constants/my-house/my-house-data/FamilyData";
import { calendarData } from "@/pages/placed/constants/my-house/my-house-data/CalendarData";

// 수평 분리한 핵심 모드 컨테이너 임포트
import GameContainer from "./GameContainer";

interface AdventureContainerProps {
  placeData?: PlaceDataType;
}

// 🌟 장소 선택 타입 정의 (총 10개 장소 키)
type PlaceType =
  | "apartment"
  | "house"
  | "kitchen"
  | "livingroom"
  | "bathroom"
  | "bedroom"
  | "playground"
  | "recycling_area"
  | "family"
  | "calendar";

export default function AdventureContainer({ placeData: initialPlaceData }: AdventureContainerProps) {
  // 🌟 현재 선택된 장소 데이터 상태
  const [selectedPlaceKey, setSelectedPlaceKey] = useState<PlaceType>(
    (initialPlaceData?.placeKey as PlaceType) || "apartment"
  );

  const placeDataMap: Record<PlaceType, PlaceDataType> = {
    apartment: apartmentData,
    house: houseData,
    kitchen: kitchenData,
    livingroom: livingRoomData,
    bathroom: bathroomData,
    bedroom: bedroomData,
    playground: playgroundData,
    recycling_area: recyclingAreaData,
    family: familyData,
    calendar: calendarData,
  };

  const placeData = placeDataMap[selectedPlaceKey] || apartmentData;
  const { placeTitle, bgImage, masterRegions } = placeData;

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

  
  const totalWords = masterRegions.length; // 총 단어 갯수
  const clickedCount = clickedSet.size; // 내가 클릭 한 단어 갯수
  const isGameUnlocked = clickedCount >= totalWords && totalWords > 0; // 내가 클릭한 단어 갯수가 더 크거나 총단어갯수보다 같거나 크면 게임모드 오픈
  //  장소 전환 시 이전 상태 클리어
  const handlePlaceChange = (key: PlaceType) => {
    stopCurrentAudio();
    setSelectedPlaceKey(key);
    setActiveClickedTarget(null);
    setHoveredTarget(null);
    setVideoTarget(null);
    setShowBubble(false);
    setHintOn(false);
    setClickedSet(new Set());
  };

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
    // 🌟 안전하게 소문자 변환 적용
    const cleanTargetId = wordKey.replace(/_/g, "").toLowerCase();

    const folderName = `${placeData.placeKey}Sentence`;
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

  // 언마운트 시 버블 타이머 및 오디오 클린업
  useEffect(() => {
    return () => {
      if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
      stopCurrentAudio();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-16 w-full relative"
      style={{ background: "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)" }}>

      {/* 1. 장소 선택 토글 버튼 (총 10개 장소) */}
      <div className="pt-8 flex gap-2.5 z-20 flex-wrap justify-center max-w-[1100px] px-4">
        {[
          { key: "apartment", label: "🏢 Apartment" },
          { key: "house", label: "🏡 House" },
          { key: "kitchen", label: "🍳 Kitchen" },
          { key: "livingroom", label: "📺 Living Room" },
          { key: "bathroom", label: "🛁 Bathroom" },
          { key: "bedroom", label: "🛏️ Bedroom" },
          { key: "playground", label: "🛝 Playground" },
          { key: "recycling_area", label: "♻️ Recycling" },
          { key: "family", label: "👨‍👩‍👧‍👦 Family" },
          { key: "calendar", label: "📅 Calendar" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => handlePlaceChange(item.key as PlaceType)}
            className={`px-4 py-2 rounded-full font-black text-xs shadow-md transition-all ${selectedPlaceKey === item.key
              ? "bg-[#2E7D32] text-white scale-105 border-2 border-white"
              : "bg-white/80 text-emerald-800 hover:bg-white"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 장소 기반 동적 대타이틀 표출 */}
      <div className="text-center pt-4 mb-6">
        <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">{placeTitle}</h1>
      </div>

      {/* 모드 전환 탭 토글러 */}
      <div className="flex gap-4 bg-white/40 backdrop-blur-md p-1.5 rounded-full shadow-inner border border-white/40 mb-8">
        <button onClick={() => { stopCurrentAudio(); setCurrentMode("explore"); }} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${currentMode === "explore" ? "bg-[#4CAF50] text-white shadow-md scale-105" : "text-emerald-800 hover:bg-white/30"}`}>🔍 Explorer</button>
        <button
          // disabled={!isGameUnlocked}
          onClick={() => {
            stopCurrentAudio();
            setCurrentMode("game");
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 
              "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
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
                const isLit = hintOn || hoveredTarget === region.wordKey || activeClickedTarget === region.wordKey;
                return (
                  <polygon
                    key={region.wordKey}
                    points={region.points}
                    fill="white"
                    fillOpacity={isLit ? "0.2" : "0.001"}
                    onMouseEnter={() => setHoveredTarget(region.wordKey)}
                    onMouseLeave={() => setHoveredTarget(null)}
                    onClick={() => handleExploreTargetClick(region.wordKey)}
                    className={`cursor-pointer transition-all duration-200 stroke-[0.1] ${isLit ? "stroke-yellow-400" : "stroke-transparent"}`}
                  />
                );
              })}
            </svg>

            {/* 터치형 정보 말풍선 버블 컴포넌트 */}
            {currentExploreWord && showBubble && (
              <div className="absolute z-30 pointer-events-auto" style={{ left: `${centerCoords.x}%`, top: `${centerCoords.y}%` }}>
                <div className="bg-white px-4 py-2 rounded-xl shadow-xl border-[3px] border-[#7CB342] -translate-x-1/2 -translate-y-[130%] cursor-pointer whitespace-nowrap"
                  onClick={() => { setVideoTarget(currentExploreWord); setShowBubble(false); }}>
                  <span className="text-[#388E3C] font-black tracking-wide text-base">{currentExploreWord.wordKey.replace(/_/g, " ")}</span>
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
        </div>
      )}

      {/* ==================== 2. GAME MODE ==================== */}
      {currentMode === "game" && (
        <GameContainer key={selectedPlaceKey} placeData={placeData} />
      )}

      {/* ==================== 🎬 미디어 비디오 학습 모달 ==================== */}
      {videoTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#FFFBF0] rounded-[40px] border-8 border-white p-6 max-w-3xl w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-[#4B9343] capitalize">{videoTarget.wordKey.replace(/_/g, " ")}</h2>
              <button
                onClick={() => {
                  stopCurrentAudio(); // 👈 닫을 때 오디오 정지
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
                playsInline  // 👈 인라인 재생
                onEnded={() => setClickedSet(p => new Set(p).add(videoTarget.wordKey))}
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
