import React, { useState, useEffect } from "react";
import { X, HelpCircle, Sparkles } from "lucide-react";

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

interface RegionItem {
  wordKey: string;
  meaning?: string;
  imageUrl?: string;
  [key: string]: any;
}

interface CardItem {
  id: number;
  matchId: string;
  type: "text" | "image";
  content: string; // text일 경우 단어, image일 경우 imageUrl
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryCardModalProps {
  masterRegions?: RegionItem[];
  closeGameModal: () => void;
}

// 목업 데이터 (masterRegions가 비어있을 경우 예시)
const mockRegions: RegionItem[] = [
  { wordKey: "window", imageUrl: "https://images.unsplash.com/photo-1503708994733-4fc50759f237?w=300" },
  { wordKey: "security_office", imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300" },
  { wordKey: "column", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300" },
  { wordKey: "rooftop", imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300" },
  { wordKey: "walking_path", imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=300" },
  { wordKey: "intercom", imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300" },
];

export default function MemoryCardModal({
  masterRegions = mockRegions,
  closeGameModal,
}: MemoryCardModalProps) {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (!masterRegions || masterRegions.length === 0) return;

    // 6개 장소를 무작위로 추출하여 [영어 텍스트 카드] + [이미지 카드] 쌍 생성
    const selectedPool = [...masterRegions].sort(() => 0.5 - Math.random()).slice(0, 6);
    let generatedCards: CardItem[] = [];

    selectedPool.forEach((item, idx) => {
      // 1. 영어 텍스트 카드
      generatedCards.push({
        id: idx * 2,
        matchId: item.wordKey,
        type: "text",
        content: item.wordKey.replace(/_/g, " "),
        isFlipped: false,
        isMatched: false,
      });

  
      // 2. 이미지 카드 생성 시
      generatedCards.push({
        id: idx * 2 + 1,
        matchId: item.wordKey,
        type: "image",
        content: item.imageUrl || getImageUrl(item.wordKey), // 👈 로컬 이미지를 fallback으로 연결!
        isFlipped: false,
        isMatched: false,
      });
    });

    // 카드 무작위 셔플
    setCards(generatedCards.sort(() => 0.5 - Math.random()));
    setSelectedCards([]);
    setMoves(0);
  }, [masterRegions]);

  const handleCardClick = (id: number) => {
    // 이미 2장이 선택되었거나, 이미 뒤집힌/맞춘 카드는 클릭 불가
    if (selectedCards.length >= 2 || cards.find((c) => c.id === id)?.isFlipped) return;

    // 카드 뒤집기
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)));
    const nextSelected = [...selectedCards, id];
    setSelectedCards(nextSelected);

    // 2장이 선택되었을 때 정답 확인
    if (nextSelected.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstId, secondId] = nextSelected;
      const firstCard = cards.find((c) => c.id === firstId)!;
      const secondCard = cards.find((c) => c.id === secondId)!;

      if (firstCard.matchId === secondCard.matchId) {
        // 🎯 정답 (매칭 성공)
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c))
          );
          setSelectedCards([]);
        }, 500);
      } else {
        // ❌ 오답 (다시 뒤집기)
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c))
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const getImageUrl = (wordKey: string): string => {
    const key = wordKey.toLowerCase().replace(/[\s_]+/g, "");
    return IMAGE_ASSETS[key] || "";
  };

  const isWin = cards.length > 0 && cards.every((c) => c.isMatched);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-4xl w-full p-6 flex flex-col gap-4 relative">

        {/* 상단 헤더 */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-black text-rose-600 flex items-center gap-2">
              🃏 Memory Cards
            </h2>
            <p className="text-xs text-gray-400 font-semibold font-sans mt-0.5">
              Flip the cards to match the English word with its corresponding image!
            </p>
          </div>
          <button
            onClick={closeGameModal}
            className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 시도 횟수 및 승리 메시지 */}
        <div className="flex items-center justify-between">
          <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
            Moves Count: <span className="text-rose-500 font-black text-sm ml-1">{moves}</span>
          </span>
          {isWin && (
            <span className="flex items-center gap-1.5 text-emerald-600 font-black animate-bounce text-sm bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4" /> Incredible Game Cleared! 🎉
            </span>
          )}
        </div>

        {/* 4x3 카드 그리드 */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5 my-2">
          {cards.map((card) => {
            const showContent = card.isFlipped || card.isMatched;
            return (
              <div
                key={card.id}
                onClick={() => !card.isMatched && handleCardClick(card.id)}
                className={`aspect-[4/3] rounded-2xl border-2 cursor-pointer flex flex-col items-center justify-center overflow-hidden font-sans text-center transition-all duration-300 select-none relative ${card.isMatched
                    ? "bg-emerald-50 border-emerald-200 opacity-60 pointer-events-none"
                    : showContent
                      ? card.type === "text"
                        ? "bg-white border-rose-300 shadow-sm p-3"
                        : "bg-amber-50 border-amber-300 shadow-sm"
                      : "bg-gradient-to-br from-rose-400 to-pink-500 border-rose-500 shadow-md hover:-translate-y-0.5 active:scale-95 p-3"
                  }`}
              >
                {card.isMatched ? (
                  // 맞춘 상태
                  <div className="flex flex-col items-center justify-center p-2 z-10">
                    <span className="text-emerald-700 font-black text-sm capitalize">
                      {card.matchId.replace(/_/g, " ")}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold mt-0.5 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Matched! ✓
                    </span>
                  </div>
                ) : showContent ? (
                  // 뒤집혀서 앞면이 보일 때
                  card.type === "text" ? (
                    // 1) 텍스트 카드
                    <span className="font-black text-base leading-tight text-slate-800 capitalize">
                      {card.content}
                    </span>
                  ) : (
                    // 2) 이미지 카드
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      {card.content ? (
                        <img
                          src={card.content}
                          alt="Memory Card"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                  )
                ) : (
                  // 뒷면 상태
                  <HelpCircle className="w-7 h-7 text-white/90" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}