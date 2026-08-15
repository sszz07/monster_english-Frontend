import React, { useState, useEffect } from "react";
import { Volume2, X } from "lucide-react";

interface SpellingCorrectModelProps {
  currentQuestion: { wordKey: string; audioUrl: string };
  currentQuestionIdx: number;
  score: number;
  closeGameModal: () => void;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
}

export default function SpellingCorrectModel({
  currentQuestion,
  currentQuestionIdx,
  score,
  closeGameModal,
  onCorrectAnswer,
  onWrongAnswer
}: SpellingCorrectModelProps) {
  const targetWord = currentQuestion.wordKey.toUpperCase();
  const [shuffledLetters, setShuffledLetters] = useState<{ id: string; letter: string }[]>([]);
  const [userLetters, setUserLetters] = useState<{ id: string; letter: string }[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    const letters = targetWord.split("").map((l, i) => ({ id: `${l}-${i}`, letter: l }));
    setShuffledLetters([...letters].sort(() => 0.5 - Math.random()));
    setUserLetters([]);
    setFeedback(null);
    new Audio(currentQuestion.audioUrl).play().catch(() => {});
  }, [currentQuestion]);

  const handleLetterClick = (item: { id: string; letter: string }) => {
    if (feedback) return;
    setShuffledLetters((prev) => prev.filter((l) => l.id !== item.id));
    const nextUserLetters = [...userLetters, item];
    setUserLetters(nextUserLetters);

    if (nextUserLetters.length === targetWord.length) {
      const resultWord = nextUserLetters.map((l) => l.letter).join("");
      if (resultWord === targetWord) {
        setFeedback("correct");
        onCorrectAnswer();
      } else {
        setFeedback("wrong");
        onWrongAnswer();
        setTimeout(() => {
          const letters = targetWord.split("").map((l, i) => ({ id: `${l}-${i}`, letter: l }));
          setShuffledLetters([...letters].sort(() => 0.5 - Math.random()));
          setUserLetters([]);
          setFeedback(null);
        }, 1200);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-5 relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-black text-indigo-600">Spelling Bee</h2>
            <p className="text-xs text-gray-400 font-semibold">Listen to the word and assemble the correct spelling.</p>
          </div>
          <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 p-1.5 rounded-full"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex gap-2">
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">Stage {currentQuestionIdx + 1} / 5</span>
          <span className="bg-white border px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 shadow-sm">Score {score}</span>
          <button onClick={() => new Audio(currentQuestion.audioUrl).play()} className="ml-auto flex items-center gap-1.5 bg-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-sm"><Volume2 className="w-3.5 h-3.5" />Listen</button>
        </div>

        {/* Answer Board */}
        <div className="w-full min-h-[80px] bg-white border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 p-4 relative shadow-inner">
          {userLetters.map((item, idx) => (
            <span key={idx} className="w-12 h-12 bg-indigo-50 border-2 border-indigo-200 rounded-xl flex items-center justify-center text-xl font-black text-indigo-700 select-none animate-fade-in">{item.letter}</span>
          ))}
          {userLetters.length === 0 && <span className="text-gray-300 font-bold text-sm">Select the characters below...</span>}
          {feedback === "correct" && <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center font-black text-emerald-600">Perfect! ✨</div>}
          {feedback === "wrong" && <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center font-black text-rose-600">Wrong Order! ❌</div>}
        </div>

        {/* Shuffled Letter Area */}
        <div className="bg-white border rounded-2xl p-6 min-h-[90px] flex flex-wrap gap-3 items-center justify-center shadow-sm">
          {shuffledLetters.map((item) => (
            <button key={item.id} onClick={() => handleLetterClick(item)} disabled={!!feedback} className="w-14 h-14 bg-white border-2 border-gray-200 hover:border-indigo-400 hover:shadow-md active:scale-95 text-gray-800 font-black text-2xl rounded-2xl shadow-sm transition-all flex items-center justify-center">{item.letter}</button>
          ))}
        </div>
      </div>
    </div>
  );
}