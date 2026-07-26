import React from "react";
import { Volume2, X, Sparkles } from "lucide-react";

interface ColorMagicModalProps {
  currentQuestion: {
    wordKey: string;
    audioUrl: string;
    targetStyle: React.CSSProperties;
  };
  currentQuestionIdx: number;
  gameQuestions: any[];
  coloredWords: string[];
  colorMagicFeedback: "correct" | "wrong" | null;
  playAudio: (url: string) => void;
  handleColorMagicTargetClick: (e: React.MouseEvent) => void;
  handleColorMagicBackgroundClick: () => void;
  closeGameModal: () => void;
  masterRegions: any[];
  apartmentImg: string;
}

export default function ColorMagicModal({
  currentQuestion,
  currentQuestionIdx,
  gameQuestions,
  coloredWords,
  colorMagicFeedback,
  playAudio,
  handleColorMagicTargetClick,
  handleColorMagicBackgroundClick,
  closeGameModal,
  masterRegions,
  apartmentImg,
}: ColorMagicModalProps) {
  // 🎯 1. 전체 목표 개수 계산 (25개)
  const TOTAL_PUZZLE_PIECES = masterRegions?.length || gameQuestions?.length || 25;

  // 🎯 2. 25개를 모두 맞췄는지 판별 (중복 제외 개수가 25개 이상이거나, 마지막 문제까지 진행했을 때)
  const isAllColored =
    coloredWords.length >= TOTAL_PUZZLE_PIECES ||
    (gameQuestions.length > 0 && currentQuestionIdx >= gameQuestions.length);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={handleColorMagicBackgroundClick}
    >
      <div
        className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 헤더 */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <div>
              <h2 className="text-xl font-black text-emerald-700">
                Color Magic
              </h2>
              <p className="text-xs text-gray-500 font-medium">
                Listen to the word and find it in the picture to bring the matching piece to life!
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

        {/* 진행 상태 및 음성 재생 바 */}
        <div className="flex justify-between items-center bg-amber-50/50 p-3 rounded-2xl border border-amber-100/50">
          <span className="bg-[#46B36D] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {Math.min(coloredWords.length, TOTAL_PUZZLE_PIECES)} / {TOTAL_PUZZLE_PIECES} Colored
          </span>

          {!isAllColored && currentQuestion && (
            <button
              onClick={() => playAudio(currentQuestion.audioUrl)}
              className="flex items-center gap-2 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-4 py-1.5 rounded-full text-sm font-black transition-all shadow-sm active:scale-95 animate-bounce"
            >
              <Volume2 className="w-4 h-4" />
              <span className="tracking-wide text-xs">
                {currentQuestion.wordKey?.replace(/_/g, " ")}
              </span>
            </button>
          )}

          {isAllColored && (
            <span className="text-xs font-black text-emerald-600 flex items-center gap-1 animate-pulse">
              <Sparkles className="w-4 h-4" /> All 25 Completed!
            </span>
          )}
        </div>

        {/* 메인 이미지 캔버스 영역 */}
        <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-gray-200 cursor-crosshair bg-slate-100 flex items-center justify-center max-h-[50vh]">
          
          {/* 🖼️ [배경 통이미지] 
              isAllColored가 true가 되면 filter 효과를 아예 지워버려(grayscale-0, filter-none) 
              미세한 틈새나 라인 잔상 없이 통째로 100% 완벽한 선명 컬러로 변환됩니다. */}
          <img
            src={apartmentImg}
            alt="Apartment Game Map"
            className={`w-full h-auto max-h-full object-contain select-none pointer-events-none transition-all duration-1000 ${
              isAllColored
                ? "grayscale-0 filter-none brightness-100 contrast-100" 
                : "grayscale brightness-90"                            
            }`}
          />

          {/* 🧩 [진행 중 퍼즐 조각들]
              25개를 다 채우기 전까지는 clip-path로 조각조각 오려낸 이미지를 위에 겹쳐서 컬러로 보여줍니다.
              isAllColored === true가 되는 순간 이 조각 레이어들은 소멸하고 위 통이미지 1장만 깔끔하게 보입니다. */}
          {!isAllColored &&
            masterRegions.map((region) => {
              const isColored = coloredWords.includes(region.wordKey);
              if (!isColored || !region.targetStyle) return null;
              const { top, left, width, height } = region.targetStyle;
              return (
                <div
                  key={`color-patch-${region.wordKey}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    clipPath: `inset(${top} calc(100% - (${left} + ${width})) calc(100% - (${top} + ${height})) ${left})`,
                  }}
                  className="transition-all duration-500"
                >
                  <img
                    src={apartmentImg}
                    alt="Apartment Color Patch"
                    className="w-full h-auto max-h-full object-contain select-none pointer-events-none filter-none grayscale-0"
                  />
                </div>
              );
            })}

          {/* 🎯 [클릭 영역] 진행 중일 때만 표시 */}
          {!isAllColored && currentQuestion?.targetStyle && (
            <div
              onClick={handleColorMagicTargetClick}
              style={currentQuestion.targetStyle}
              className={`absolute rounded-xl transition-all ${
                colorMagicFeedback === "correct"
                  ? "border-4 border-amber-400 bg-amber-300/20 shadow-[0_0_20px_rgba(251,191,36,0.9)] scale-105"
                  : "border-2 border-transparent hover:border-amber-400/40"
              }`}
            />
          )}

          {/* 🏆 [25개 완료 축하 레이어] */}
          {isAllColored && (
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px] flex items-center justify-center pointer-events-none z-20 animate-in fade-in duration-700">
              <span className="bg-emerald-500 text-white font-black px-8 py-4 rounded-full text-xl shadow-2xl flex items-center gap-2 animate-bounce">
                <Sparkles className="w-6 h-6" /> 🎉 25 Picture Colors Completed! 🎉
              </span>
            </div>
          )}

          {/* ⭕ 단일 정답 피드백 */}
          {!isAllColored && colorMagicFeedback === "correct" && (
            <div className="absolute inset-0 bg-white/10 flex items-center justify-center pointer-events-none z-10">
              <span className="bg-emerald-500 text-white font-black px-6 py-3 rounded-full text-lg shadow-lg animate-bounce">
                ✨ Color Unlocked! ✨
              </span>
            </div>
          )}

          {/* ❌ 오답 피드백 */}
          {!isAllColored && colorMagicFeedback === "wrong" && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white font-black px-4 py-2 rounded-xl text-sm shadow-md animate-ping pointer-events-none z-10">
              ❌ Try again!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}