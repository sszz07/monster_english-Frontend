import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getPlaceImageUrl, PlaceTheme } from "../gameConstants";

interface PictureQuizModalProps {
  currentQuestion: {
    wordKey: string;
    imageUrl?: string;
    [key: string]: any;
  };
  currentQuestionIdx: number;
  score: number;
  closeGameModal: () => void;
  optionsPool: any[];
  theme?: PlaceTheme; // 'apartment' | 'house' 지원
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
}

export default function PictureQuizModal({
  currentQuestion,
  currentQuestionIdx,
  score,
  closeGameModal,
  optionsPool,
  theme = "apartment",
  onCorrectAnswer,
  onWrongAnswer,
}: PictureQuizModalProps) {
  const [choices, setChoices] = useState<string[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    if (!currentQuestion) return;

    const correctWord = currentQuestion.wordKey;
    const items = [correctWord];
    const filtered = optionsPool
      .filter((o) => o.wordKey !== correctWord)
      .sort(() => 0.5 - Math.random());

    for (let i = 0; i < 3; i++) {
      if (filtered[i]) items.push(filtered[i].wordKey);
    }

    setChoices(items.sort(() => 0.5 - Math.random()));
    setSelectedChoice(null);
    setFeedback(null);
  }, [currentQuestion, optionsPool]);

  const handleChoiceClick = (word: string) => {
    if (feedback) return;
    setSelectedChoice(word);

    if (word === currentQuestion.wordKey) {
      setFeedback("correct");
      onCorrectAnswer();
    } else {
      setFeedback("wrong");
      onWrongAnswer();
    }
  };

  const activeImage = getPlaceImageUrl(theme, currentQuestion.wordKey, currentQuestion.imageUrl);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
        {/* 상단 헤더 */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-black text-emerald-700">🖼️ Picture Quiz</h2>
            <p className="text-xs text-gray-400 font-semibold font-sans mt-0.5">
              Look at the picture and choose the matching English name!
            </p>
          </div>
          <button
            onClick={closeGameModal}
            className="text-gray-400 hover:text-gray-600 bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 진행 상태 및 점수 바 */}
        <div className="flex gap-2">
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
            Question <span className="text-emerald-600 font-black">{currentQuestionIdx + 1} / 5</span>
          </span>
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm">
            Score <span className="font-black">{score}</span>
          </span>
        </div>

        {/* 메인 이미지 박스 */}
        <div className="w-full h-52 sm:h-60 bg-white rounded-2xl overflow-hidden relative flex items-center justify-center shadow-inner border-2 border-gray-100">
          {activeImage ? (
            <img
              src={activeImage}
              alt={currentQuestion.wordKey}
              className="w-full h-full object-contain p-4 select-none pointer-events-none"
            />
          ) : (
            <span className="text-sm font-bold text-gray-400">No Image Available</span>
          )}

          {feedback === "correct" && (
            <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[1px] flex items-center justify-center text-emerald-700 font-black text-2xl animate-bounce">
              ✨ Correct!
            </div>
          )}
          {feedback === "wrong" && (
            <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-[1px] flex items-center justify-center text-rose-600 font-black text-2xl animate-ping">
              ❌ Try Again!
            </div>
          )}
        </div>

        {/* 4지선다 텍스트 선택지 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-1">
          {choices.map((word, index) => {
            const isSelected = selectedChoice === word;
            const isCorrect = word === currentQuestion.wordKey;
            let style =
              "bg-white border-2 border-gray-200 text-slate-800 hover:border-emerald-300 hover:shadow-md";

            if (feedback && isSelected) {
              style = isCorrect
                ? "bg-emerald-500 text-white border-emerald-600 shadow-md"
                : "bg-rose-500 text-white border-rose-600 opacity-80";
            } else if (feedback && isCorrect) {
              style = "bg-emerald-100 border-emerald-300 text-emerald-800";
            }

            return (
              <button
                key={index}
                onClick={() => handleChoiceClick(word)}
                disabled={!!feedback}
                className={`py-3.5 px-4 rounded-2xl font-black text-lg capitalize transition-all active:scale-[0.98] border shadow-sm ${style}`}
              >
                {word.replace(/_/g, " ")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}