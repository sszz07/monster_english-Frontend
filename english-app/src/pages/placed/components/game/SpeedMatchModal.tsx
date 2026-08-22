import React from "react";
import { Timer, X } from "lucide-react";

// index에서 통합 함수 및 타입 import
import { getPlaceImageUrl, PlaceTheme } from "../gameConstants";

interface SpeedOption {
  wordKey: string;
  imageUrl?: string;
  [key: string]: any;
}

interface SpeedMatchModalProps {
  currentQuestion: {
    wordKey: string;
  };
  score: number;
  timeLeft: number;
  speedOptions: SpeedOption[];
  speedFeedback: "correct" | "wrong" | null;
  selectedSpeedOption: string | null;
  theme?: PlaceTheme; // 'apartment' | 'house' 전달받기 (기본값 설정)
  handleSpeedOptionClick: (optionObj: SpeedOption) => void;
  closeGameModal: () => void;
}

export default function SpeedMatchModal({
  currentQuestion,
  score,
  timeLeft,
  speedOptions,
  speedFeedback,
  selectedSpeedOption,
  theme = "apartment", // 장소 테마 기본값
  handleSpeedOptionClick,
  closeGameModal,
}: SpeedMatchModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-5 relative">
        {/* 상단 헤더 영역 */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-pulse">⚡</span>
            <div>
              <h2 className="text-xl font-black text-amber-600">Speed Match</h2>
              <p className="text-xs text-gray-500 font-semibold">
                단어에 어울리는 이미지를 빠르게 선택하세요! 틀리면 -2초 차감됩니다.
              </p>
            </div>
          </div>
          <button
            onClick={closeGameModal}
            className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 점수 및 남은 시간 indicator */}
        <div className="flex gap-3 items-center">
          <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
            Correct <span className="text-amber-600 font-black">{score}</span>
          </span>

          <div
            className={`ml-auto flex items-center gap-1.5 border-2 px-4 py-1 rounded-full text-sm font-black transition-colors ${
              timeLeft <= 5
                ? "bg-rose-500 text-white border-rose-600 animate-bounce"
                : "bg-white text-rose-500 border-rose-200 shadow-sm"
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* 문제가 제시되는 메인 단어 박스 */}
        <div className="bg-white border-2 border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm relative min-h-[110px]">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-wide select-none">
            {currentQuestion.wordKey.replace(/_/g, " ")}
          </h2>

          {speedFeedback === "wrong" && (
            <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center pointer-events-none z-10">
              <span className="bg-rose-600 text-white font-black px-5 py-2 rounded-full shadow-md text-sm animate-ping">
                -2 Seconds Penalty! ⏱️
              </span>
            </div>
          )}
          {speedFeedback === "correct" && (
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center pointer-events-none z-10">
              <span className="bg-emerald-500 text-white font-black px-6 py-2 shadow-md text-sm rounded-full">
                ✨ Excellent Matching!
              </span>
            </div>
          )}
        </div>

        {/* 이미지 선택지 영역 (2x2 그리드) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {speedOptions.map((optionObj, idx) => {
            const isSelected = selectedSpeedOption === optionObj.wordKey;
            const isCorrectOption = optionObj.wordKey === currentQuestion.wordKey;

            let cardStyle =
              "bg-white border-4 border-gray-200 hover:border-amber-400 hover:shadow-lg";

            if (speedFeedback && isSelected) {
              cardStyle = isCorrectOption
                ? "border-emerald-500 bg-emerald-500 ring-4 ring-emerald-200 scale-[1.02]"
                : "border-rose-500 bg-rose-500 opacity-85 scale-[0.98]";
            }

            // 통합 함수를 호출해 theme('apartment' | 'house')에 맞춰 이미지 자동 조회
            const imgUrl = getPlaceImageUrl(theme, optionObj.wordKey, optionObj.imageUrl);

            return (
              <button
                key={`speed-opt-${idx}`}
                onClick={() => handleSpeedOptionClick(optionObj)}
                disabled={speedFeedback === "correct"}
                className={`group relative w-full h-40 sm:h-44 rounded-2xl transition-all overflow-hidden flex items-center justify-center border-2 ${cardStyle}`}
              >
                {/* 선택지 이미지 */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={optionObj.wordKey}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-xs text-gray-400 font-bold">
                      {optionObj.wordKey}
                    </span>
                  )}
                </div>

                {/* 정답/오답 Overlay */}
                {speedFeedback && isSelected && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 ${
                      isCorrectOption ? "bg-emerald-500/30" : "bg-rose-500/30"
                    }`}
                  >
                    <span className="text-white font-black text-2xl drop-shadow-md">
                      {isCorrectOption ? "⭕" : "❌"}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}