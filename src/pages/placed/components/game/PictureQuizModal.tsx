import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface PictureQuizModalProps {
  currentQuestion: {
    wordKey: string;
    targetStyle: { top: string; left: string; width: string; height: string };
  };
  currentQuestionIdx: number;
  score: number;
  closeGameModal: () => void;
  optionsPool: any[];
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  apartmentImg: string;
}

export default function PictureQuizModal({
  currentQuestion,
  currentQuestionIdx,
  score,
  closeGameModal,
  optionsPool,
  onCorrectAnswer,
  onWrongAnswer,
  apartmentImg
}: PictureQuizModalProps) {
  const [choices, setChoices] = useState<string[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    const correctWord = currentQuestion.wordKey;
    const items = [correctWord];
    const filtered = optionsPool.filter((o) => o.wordKey !== correctWord).sort(() => 0.5 - Math.random());
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

  const { top, left, width, height } = currentQuestion.targetStyle;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-black text-emerald-700">Picture Quiz</h2>
            <p className="text-xs text-gray-400 font-semibold font-sans">Look at the cropped hidden image piece and discover the matching name.</p>
          </div>
          <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 p-1.5 rounded-full"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex gap-2">
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">Question {currentQuestionIdx + 1} / 5</span>
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm">Score {score}</span>
        </div>

        {/* Cropped Image Area */}
        <div className="w-full h-48 bg-slate-800 rounded-2xl overflow-hidden relative flex items-center justify-center shadow-inner border border-gray-100">
          <div
            className="w-full h-full transform scale-[1.8] origin-center transition-transform"
            style={{
              clipPath: `inset(${top} calc(100% - (${left} + ${width})) calc(100% - (${top} + ${height})) ${left})`,
              position: "absolute"
            }}
          >
            <img src={apartmentImg} alt="Quiz Piece" className="w-full h-full object-contain" />
          </div>
          {feedback === "correct" && <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[1px] flex items-center justify-center text-white font-black text-xl">Correct! ✨</div>}
          {feedback === "wrong" && <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-[1px] flex items-center justify-center text-white font-black text-xl">Try Again! ❌</div>}
        </div>

        {/* English Name Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {choices.map((word, index) => {
            const isSelected = selectedChoice === word;
            const isCorrect = word === currentQuestion.wordKey;
            let style = "bg-white border-2 border-gray-200 text-slate-800 hover:border-emerald-300 hover:shadow-md";
            if (feedback && isSelected) {
              style = isCorrect ? "bg-emerald-500 text-white border-emerald-600" : "bg-rose-500 text-white border-rose-600 opacity-80";
            } else if (feedback && isCorrect) {
              style = "bg-emerald-100 border-emerald-300 text-emerald-800";
            }

            return (
              <button key={index} onClick={() => handleChoiceClick(word)} disabled={!!feedback} className={`py-4 rounded-xl font-black text-xl capitalize transition-all active:scale-[0.99] border ${style}`}>
                {word.replace(/_/g, " ")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}