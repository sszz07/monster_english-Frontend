import React from "react";
import { Volume2, X } from "lucide-react";

interface SentenceBuilderModalProps {
  currentQuestion?: {
    wordKey: string;
    meaning?: string;
    sentence?: string;
  };
  currentQuestionIdx?: number;
  assembledWords?: any[];
  shuffledChips?: any[];
  builderFeedback?: "correct" | "wrong" | null;
  playSentenceAudios?: (wordKey: string) => void;
  handleChipClick?: (chip: any) => void;
  handleAssembledClick?: (chip: any) => void;
  closeGameModal: () => void;
}

export default function SentenceBuilderModal({
  currentQuestion,
  currentQuestionIdx = 0,
  assembledWords = [],
  shuffledChips = [],
  builderFeedback,
  playSentenceAudios,
  handleChipClick,
  handleAssembledClick,
  closeGameModal,
}: SentenceBuilderModalProps) {
  // Target word display fallback
  const displayWordKey = currentQuestion?.wordKey || "hallway";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 font-sans">
      {/* Popup Modal Container */}
      <div className="bg-[#FAF7EB] rounded-[2.5rem] max-w-2xl w-full p-6 flex flex-col gap-5 relative shadow-2xl border-4 border-[#FFFDF6]">
        
        {/* Close Button (X) */}
        <button
          onClick={closeGameModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors bg-white p-1.5 rounded-full shadow-sm border border-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Title Section */}
        <div className="flex items-center gap-3 pr-10">
          <span className="text-3xl">🧩</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-[#437848] tracking-tight">
                Sentence Builder
              </h2>
              {/* Listen Button */}
              <button
                onClick={() => playSentenceAudios && playSentenceAudios(displayWordKey)}
                className="flex items-center gap-1.5 bg-[#FFAE34] hover:bg-[#E59A2B] text-slate-900 px-3.5 py-1 rounded-full text-xs font-black transition-all shadow-sm active:scale-95"
              >
                <Volume2 className="w-3.5 h-3.5 fill-slate-900" />
                <span>Listen</span>
              </button>
            </div>
            <p className="text-xs text-[#666666] font-bold mt-1">
              Tap the words in order to complete the sentence.
            </p>
          </div>
        </div>

        {/* Stage Info Badges */}
        <div className="flex gap-2.5 items-center">
          <div className="bg-white border-2 border-[#EADFC7] px-4 py-1.5 rounded-2xl text-xs font-bold text-gray-800 shadow-sm">
            Sentence <span className="font-black text-black ml-1">{currentQuestionIdx + 1}/4</span>
          </div>
          <div className="bg-white border-2 border-[#EADFC7] px-4 py-1.5 rounded-2xl text-xs font-black text-gray-800 shadow-sm capitalize">
            {displayWordKey.replace(/_/g, " ")}
          </div>
        </div>

        {/* 📥 1. Assembled Words Area (Dashed Box) */}
        <div className="w-full min-h-[90px] p-4 bg-white/60 border-2 border-dashed border-[#D6CBB5] rounded-2xl flex flex-wrap gap-2.5 items-center justify-start relative shadow-inner">
          {assembledWords.length === 0 ? (
            <span className="text-gray-400 font-medium text-xs ml-2 select-none pointer-events-none">
              Tap the word chips below to build the sentence...
            </span>
          ) : (
            assembledWords.map((chip) => (
              <button
                key={`assembled-${chip.id}`}
                onClick={() => handleAssembledClick && handleAssembledClick(chip)}
                disabled={!!builderFeedback}
                className="px-4 py-2 bg-white border-2 border-[#EADFC7] hover:border-orange-400 text-gray-900 font-bold rounded-2xl shadow-sm text-base transition-all active:scale-95"
              >
                {chip.word}
              </button>
            ))
          )}

          {/* Feedback Overlay */}
          {builderFeedback === "correct" && (
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center animate-pulse pointer-events-none">
              <span className="bg-[#46B36D] text-white font-black px-6 py-2 rounded-full shadow-md text-sm">
                ✨ Excellent Job!
              </span>
            </div>
          )}
          {builderFeedback === "wrong" && (
            <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center pointer-events-none">
              <span className="bg-rose-500 text-white font-black px-6 py-2 rounded-full shadow-md text-sm">
                ❌ Try Again!
              </span>
            </div>
          )}
        </div>

        {/* 📦 2. Scattered Word Chips Area */}
        <div className="flex flex-wrap gap-2.5 items-center justify-center min-h-[70px] pt-2">
          {shuffledChips.map((chip) => (
            <button
              key={`scat-${chip.id}`}
              onClick={() => handleChipClick && handleChipClick(chip)}
              disabled={!!builderFeedback}
              className="py-2.5 px-4 bg-white border-2 border-[#EADFC7] hover:border-emerald-500 active:scale-95 text-gray-900 font-bold text-lg rounded-2xl shadow-sm transition-all"
            >
              {chip.word}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}