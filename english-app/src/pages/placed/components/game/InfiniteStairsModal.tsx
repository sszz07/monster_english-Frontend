import React, { useState, useEffect, useCallback } from "react";
import balconyImg from "@/assets/image/places/game/apartment/Balcony.png";
import basementImg from "@/assets/image/places/game/apartment/Basement.png";
import buildingImg from "@/assets/image/places/game/apartment/Building.png";
import columnImg from "@/assets/image/places/game/apartment/Column.png";
import elevatorImg from "@/assets/image/places/game/apartment/Elevator.png";
import entranceImg from "@/assets/image/places/game/apartment/Entrance.png";
import gardenImg from "@/assets/image/places/game/apartment/Garden.png";
import gymImg from "@/assets/image/places/game/apartment/Gym.png";
import hallwayImg from "@/assets/image/places/game/apartment/Hallway.png";
import intercormImg from "@/assets/image/places/game/apartment/Intercorm.png";
import loadingZoneImg from "@/assets/image/places/game/apartment/Loading zone.png";
import lobbyImg from "@/assets/image/places/game/apartment/Lobby.png";
import logoImg from "@/assets/image/places/game/apartment/logo.png";
import mailboxImg from "@/assets/image/places/game/apartment/Mailbox.png";
import parkingLotImg from "@/assets/image/places/game/apartment/Parking lot.png";
import playgroundImg from "@/assets/image/places/game/apartment/Playground.png";
import recyclingAreaImg from "@/assets/image/places/game/apartment/Recycling area.png";
import rooftopImg from "@/assets/image/places/game/apartment/Rooftop.png";
import securityOfficeImg from "@/assets/image/places/game/apartment/Security office.png";
import stairsImg from "@/assets/image/places/game/apartment/Stairs.png";
import terraceImg from "@/assets/image/places/game/apartment/Terrace.png";
import unitImg from "@/assets/image/places/game/apartment/Unit.png";
import walkingPathImg from "@/assets/image/places/game/apartment/Walking path.png";
import wallImg from "@/assets/image/places/game/apartment/Wall.png";
import windowImg from "@/assets/image/places/game/apartment/Window.png";

// 1. 단어 키(wordKey) ↔ 로컬 이미지 매핑
const IMAGE_ASSETS: Record<string, string> = {
  balcony: balconyImg,
  basement: basementImg,
  building: buildingImg,
  column: columnImg,
  elevator: elevatorImg,
  entrance: entranceImg,
  garden: gardenImg,
  gym: gymImg,
  hallway: hallwayImg,
  intercorm: intercormImg,
  loadingzone: loadingZoneImg,
  loading_zone: loadingZoneImg,
  lobby: lobbyImg,
  logo: logoImg,
  mailbox: mailboxImg,
  parkinglot: parkingLotImg,
  parking_lot: parkingLotImg,
  playground: playgroundImg,
  recyclingarea: recyclingAreaImg,
  recycling_area: recyclingAreaImg,
  rooftop: rooftopImg,
  securityoffice: securityOfficeImg,
  security_office: securityOfficeImg,
  stairs: stairsImg,
  terrace: terraceImg,
  unit: unitImg,
  walkingpath: walkingPathImg,
  walking_path: walkingPathImg,
  wall: wallImg,
  window: windowImg,
};

// 2. wordKey를 입력받아 local asset 이미지 경로를 찾는 헬퍼 함수
const getImageUrl = (wordKey: string): string => {
  if (!wordKey) return "";
  const key = wordKey.toLowerCase().replace(/[\s_]+/g, "");
  return IMAGE_ASSETS[key] || "";
};

interface RegionItem {
  wordKey: string;
  meaning?: string;
  imageUrl?: string;
  [key: string]: any;
}

// 3. Mock Data (기본 데이터)
const mockRegions: RegionItem[] = [
  { wordKey: "loading_zone", meaning: "하역구역" },
  { wordKey: "security_office", meaning: "경비실" },
  { wordKey: "parking_lot", meaning: "주차장" },
  { wordKey: "hallway", meaning: "복도" },
  { wordKey: "elevator", meaning: "승강기" },
  { wordKey: "rooftop", meaning: "옥상" },
  { wordKey: "gym", meaning: "체육관" },
  { wordKey: "building", meaning: "건물" },
  { wordKey: "intercorm", meaning: "인터폰" },
];

interface InfiniteStairsModalProps {
  masterRegions?: RegionItem[];
  closeGameModal: () => void;
}

export default function InfiniteStairsModal({
  masterRegions = mockRegions,
  closeGameModal,
}: InfiniteStairsModalProps) {
  const activePool = masterRegions && masterRegions.length >= 8 ? masterRegions : mockRegions;

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(2);
  const [timeLeft, setTimeLeft] = useState(100);
  const [currentTarget, setCurrentTarget] = useState<{ imageUrl: string; wordKey: string } | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // 🦖 Dino position state
  const [dinoPosition, setDinoPosition] = useState<{ row: number; isLeft: boolean }>({
    row: -1,
    isLeft: true,
  });

  // 🎯 Generate question step (로컬 asset 경로 최우선 할당)
  const generateNewStep = useCallback((pool: RegionItem[]) => {
    if (!pool || pool.length < 8) return null;

    const targetIdx = Math.floor(Math.random() * pool.length);
    const target = pool[targetIdx];

    let altPool = pool.filter((_, idx) => idx !== targetIdx);
    altPool.sort(() => 0.5 - Math.random());
    const distractors = altPool.slice(0, 7).map((item) => item.wordKey);

    const newOptions = [...distractors, target.wordKey].sort(() => 0.5 - Math.random());

    // IMAGE_ASSETS에서 이미지 검색 -> 없으면 전달된 imageUrl 사용
    const finalImageUrl = getImageUrl(target.wordKey) || target.imageUrl || "";

    return {
      target: {
        imageUrl: finalImageUrl,
        wordKey: target.wordKey,
      },
      newOptions,
    };
  }, []);

  // Initialize game
  useEffect(() => {
    const step = generateNewStep(activePool);
    if (step) {
      setCurrentTarget(step.target);
      setOptions(step.newOptions);
    }
    setScore(0);
    setTimeLeft(100);
    setGameOver(false);
    setDinoPosition({ row: -1, isLeft: true });
  }, [activePool, generateNewStep]);

  // Timer logic
  useEffect(() => {
    if (gameOver || !currentTarget) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prev - 0.7;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gameOver, currentTarget]);

  // Game over alert
  useEffect(() => {
    if (gameOver) {
      if (score > highScore) setHighScore(score);
      alert(`Game Over! Total Climbed Steps: ${score}`);
      closeGameModal();
    }
  }, [gameOver, score, highScore, closeGameModal]);

  // Option click handler
  const handleOptionClick = (selectedWordKey: string, clickedIndex: number) => {
    if (!currentTarget || gameOver) return;

    if (selectedWordKey === currentTarget.wordKey) {
      // 🎯 Correct! -> Move Dino and increase score
      const targetRow = 3 - Math.floor(clickedIndex / 2);
      const isLeft = clickedIndex % 2 === 0;

      setDinoPosition({ row: targetRow, isLeft });
      setScore((prev) => prev + 1);
      setTimeLeft((prev) => Math.min(100, prev + 12));

      // Setup next step
      const step = generateNewStep(activePool);
      if (step) {
        setCurrentTarget(step.target);
        setOptions(step.newOptions);
      }
    } else {
      // ❌ Wrong! -> Time penalty
      setTimeLeft((prev) => Math.max(0, prev - 20));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-3 font-sans overflow-y-auto">
      {/* Popup Modal Container */}
      <div className="bg-[#FAF7EB] rounded-[2.5rem] max-w-[430px] w-full p-5 flex flex-col gap-3.5 relative shadow-2xl border-4 border-[#FFFDF6]">
        
        {/* Close Button */}
        <button
          onClick={closeGameModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 z-20"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title Section */}
        <div className="flex flex-col gap-0.5 pr-8">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🪜</span>
            <h2 className="text-xl font-black text-[#3A6B41] tracking-tight">Infinite Stairs</h2>
          </div>
          <p className="text-[11px] text-[#777777] font-semibold leading-tight">
            이미지를 보고 해당하는 영어 단어 발판을 밟으세요! <span className="text-gray-400 font-normal">— 틀리면 시간이 크게 줄어듭니다.</span>
          </p>
        </div>

        {/* Score & High Score */}
        <div className="flex justify-between items-center">
          <div className="bg-white border-2 border-[#EADFC7] px-3.5 py-1.5 rounded-xl text-gray-800 font-bold text-xs shadow-sm">
            Climbed Steps <span className="font-black text-sm text-black ml-1">{score}</span>
          </div>
          <div className="bg-white border-2 border-[#EADFC7] px-3.5 py-1.5 rounded-xl text-[#C06000] font-bold text-xs shadow-sm flex items-center gap-1">
            <span>🏆</span>
            <span>Best</span>
            <span className="font-black text-sm text-[#C06000] ml-0.5">{highScore}</span>
          </div>
        </div>

        {/* 🖼️ Question Image Box */}
        <div className="bg-white border-2 border-[#EADFC7] rounded-2xl p-2.5 shadow-sm min-h-[140px] flex flex-col justify-center items-center relative overflow-hidden group">
          {currentTarget?.imageUrl ? (
            <div 
              onClick={() => setIsImageZoomed(true)}
              className="relative w-full h-32 rounded-xl overflow-hidden cursor-pointer bg-gray-100"
            >
              <img
                src={currentTarget.imageUrl}
                alt="Target Question"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
                🔍 클릭해서 확대
              </div>
            </div>
          ) : (
            <div className="h-32 flex items-center justify-center text-gray-400 font-bold text-sm">
              이미지 불러오는 중...
            </div>
          )}
        </div>

        {/* Timer Bar */}
        <div className="w-full h-3 bg-white border border-[#DDD5C0] rounded-full p-0.5 overflow-hidden">
          <div
            style={{ width: `${timeLeft}%` }}
            className="h-full bg-[#7EC636] rounded-full transition-all duration-100 ease-linear"
          />
        </div>

        {/* 🎮 8 Platforms & Game Board */}
        <div className="bg-[#D1EAF5] border-2 border-[#BEE0F0] rounded-2xl p-3 flex flex-col justify-between gap-3 relative min-h-[360px]">
          
          {/* 8 Step Buttons */}
          <div className="grid grid-cols-2 gap-2.5 z-10">
            {options.map((optionKey, idx) => {
              const rowIdx = 3 - Math.floor(idx / 2);
              const isLeft = idx % 2 === 0;
              const isDinoHere = dinoPosition.row === rowIdx && dinoPosition.isLeft === isLeft;

              return (
                <div key={`${optionKey}-${idx}`} className="relative">
                  <button
                    onClick={() => handleOptionClick(optionKey, idx)}
                    className={`w-full py-3 px-2 bg-white border-b-4 border-[#DDD2BA] active:border-b-0 active:translate-y-1 hover:bg-[#FFFDF9] rounded-2xl text-[#222222] font-black text-base shadow-sm transition-all text-center tracking-tight relative ${
                      isDinoHere ? "ring-4 ring-[#7EC636] border-b-0 translate-y-1 bg-[#F4FCE8]" : ""
                    }`}
                  >
                    {optionKey.replace(/_/g, " ")}
                  </button>

                  {/* 🦖 Dino Jump Animation */}
                  {isDinoHere && (
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-30 animate-bounce pointer-events-none">
                      <span className="text-3xl filter drop-shadow">🦖</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom START Bar */}
          <div className="w-full h-11 bg-[#7EC636] border-2 border-[#6BB30B] rounded-2xl relative flex items-center px-3 shadow-inner mt-auto">
            <span className="font-black text-black/80 text-xs tracking-tight flex items-center gap-1">
              START 🏠
            </span>

            {/* Initial Dino Position */}
            {dinoPosition.row === -1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 z-20 animate-pulse">
                <span className="text-3xl filter drop-shadow">🦖</span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 🔍 이미지 확대 팝업 모달 */}
      {isImageZoomed && currentTarget?.imageUrl && (
        <div 
          onClick={() => setIsImageZoomed(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl animate-in fade-in zoom-in-95">
            <img
              src={currentTarget.imageUrl}
              alt="Zoomed Question"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center text-xs text-gray-500 font-bold mt-2 py-1">
              화면 아무 곳이나 터치하면 닫힙니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}