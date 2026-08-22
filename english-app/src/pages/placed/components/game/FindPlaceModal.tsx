  import React from "react";
  import { Volume2, X } from "lucide-react";

  interface FindPlaceModalProps {
    selectedGame: { gameKey: string };
    currentQuestion: {
      wordKey: string;
      targetStyle: React.CSSProperties;
    };
    currentQuestionIdx: number;
    score: number;
    isPlaying: boolean;
    gameFeedback: "correct" | "wrong" | null;
    triggerAudio: (question: any) => void;
    handleTargetClick: (e: React.MouseEvent) => void;
    handleBackgroundClick: () => void;
    closeGameModal: () => void;
    apartmentImg: string;
  }

  

  export default function FindPlaceModal({
    selectedGame,
    currentQuestion,
    currentQuestionIdx,
    score,
    isPlaying,
    gameFeedback,
    triggerAudio,
    handleTargetClick,
    handleBackgroundClick,
    closeGameModal,
    apartmentImg,
  }: FindPlaceModalProps) {
    return (
      
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-[#46B36D] font-black text-xl mb-1">
                <span>{selectedGame.gameKey === 'listen_find' ? '👂 Listen & Find' : '🔍 Find the Place'}</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {selectedGame.gameKey === 'listen_find' ? 'Listen to the sentence and find the correct word in the picture.' : 'Listen to the target word and click the correct place on the map.'}
              </p>
            </div>
            <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2">
            <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">Question <span className="text-[#46B36D] font-black">{currentQuestionIdx + 1} / 5</span></span>
            <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm">Correct <span className="font-black">{score}</span></span>
          </div>

          <div className="bg-white border-2 border-orange-100/70 rounded-2xl p-4 flex items-center gap-4 shadow-sm relative overflow-hidden">
            <button onClick={() => triggerAudio(currentQuestion)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all flex-shrink-0 ${isPlaying ? 'bg-amber-400 text-white animate-pulse' : 'bg-[#46B36D] text-white hover:bg-[#3B9C5E] active:scale-95'}`}><Volume2 className="w-7 h-7" /></button>
            <div>
              <span className="text-xs font-bold text-amber-600 block mb-0.5">🔊 Listen Carefully</span>
              <h2 className="text-lg font-black text-gray-800 tracking-tight leading-tight">Click the place mentioned in the audio!</h2>
            </div>
            {gameFeedback === 'correct' && <div className="absolute right-4 px-4 py-2 bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md animate-bounce">✨ That's correct!</div>}
            {gameFeedback === 'wrong' && <div className="absolute right-4 px-4 py-2 bg-rose-500 text-white font-black text-sm rounded-xl shadow-md animate-ping">❌ Try again!</div>}
          </div>

          <div onClick={handleBackgroundClick} className="w-full relative rounded-2xl overflow-hidden shadow-md border border-gray-200 cursor-crosshair bg-slate-100 flex items-center justify-center max-h-[50vh]">
            <img src={apartmentImg} alt="Apartment Game Map" className="w-full h-auto max-h-full object-contain select-none pointer-events-none" />
            <div id="correct-target" onClick={handleTargetClick} style={currentQuestion.targetStyle} className={`absolute rounded-xl transition-all ${gameFeedback === 'correct' ? 'border-4 border-amber-400 bg-amber-300/30 shadow-[0_0_20px_rgba(251,191,36,0.9)] scale-105' : 'border-2 border-transparent hover:border-amber-400/40 hover:bg-amber-400/5'}`} />
          </div>
        </div>
      </div>
    );
  }