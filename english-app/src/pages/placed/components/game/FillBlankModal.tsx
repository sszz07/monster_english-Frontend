import React from "react";
import { Volume2, X } from "lucide-react";

interface FillBlankModalProps {
  currentQuestion: {
    wordKey: string;
    sentence: string;
    displaySentence: string;
  };
  currentQuestionIdx: number;
  score: number;
  blankOptions: string[];
  blankFeedback: "correct" | "wrong" | null;
  selectedOption: string | null;
  playSentenceAudios: (wordKey: string) => void;
  handleBlankOptionClick: (option: string) => void;
  closeGameModal: () => void;
}

export default function FillBlankModal({
  currentQuestion,
  currentQuestionIdx,
  score,
  blankOptions,
  blankFeedback,
  selectedOption,
  playSentenceAudios,
  handleBlankOptionClick,
  closeGameModal,
}: FillBlankModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-5 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <div>
              <h2 className="text-xl font-black text-emerald-700 font-sans">Fill in the Blank</h2>
              <p className="text-xs text-gray-500 font-semibold font-sans">Listen to the sentence and choose the correct word to fill in the blank.</p>
            </div>
          </div>
          <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-3">
          <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm font-sans">
            Question <span className="text-[#46B36D] font-black">{currentQuestionIdx + 1} / 5</span>
          </span>
          <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm font-sans">
            Correct <span className="font-black">{score}</span>
          </span>
          <button 
            onClick={() => playSentenceAudios(currentQuestion.wordKey)}
            className="ml-auto flex items-center gap-2 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-5 py-1.5 rounded-full text-sm font-black transition-all shadow-sm active:scale-95 font-sans"
          >
            <Volume2 className="w-4 h-4" />
            <span>Sentence</span>
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200/80 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm relative min-h-[120px]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-wide text-center leading-relaxed">
            {blankFeedback === 'correct' ? currentQuestion.sentence : currentQuestion.displaySentence}
          </h2>
          {blankFeedback === 'correct' && (
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="bg-emerald-500 text-white font-black px-6 py-2.5 rounded-full shadow-md text-base">✨ Well Done!</span>
            </div>
          )}
          {blankFeedback === 'wrong' && (
            <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center">
              <span className="bg-rose-500 text-white font-black px-6 py-2.5 rounded-full shadow-md text-base">❌ Oops! Incorrect</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blankOptions.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrectOption = option === currentQuestion.wordKey;
            let cardStyle = "bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md";
            if (blankFeedback && isSelected) {
              cardStyle = isCorrectOption ? "bg-emerald-500 text-white border-emerald-600 scale-[1.02] shadow-md" : "bg-rose-500 text-white border-rose-600 scale-[0.98] opacity-80";
            } else if (blankFeedback && !isSelected && isCorrectOption) {
              cardStyle = "bg-emerald-200 border-emerald-400 text-emerald-800";
            }

            return (
              <button
                key={`choice-${idx}`}
                onClick={() => handleBlankOptionClick(option)}
                disabled={!!blankFeedback}
                className={`w-full py-5 rounded-2xl font-black text-xl md:text-2xl tracking-wide transition-all shadow-sm flex flex-col items-center justify-center border font-sans ${cardStyle}`}
              >
                <span>{option.replace(/_/g, " ")}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}