import React, { useState, useEffect } from "react";
import { Trophy, Volume2, X } from "lucide-react";

interface BossChallengeModalProps {
  masterRegions: any[];
  closeGameModal: () => void;
}

export default function BossChallengeModal({ masterRegions, closeGameModal }: BossChallengeModalProps) {
  const [questions, setGameQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [selectedOpt, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (masterRegions.length === 0) return;
    // 무작위 10문제를 조립식 풀에서 서칭 및 셔플링
    const shuffledPool = [...masterRegions].sort(() => 0.5 - Math.random()).slice(0, 10);
    const generated = shuffledPool.map((item) => {
      const baseSentence = `I found the ${item.wordKey.replace(/_/g, " ")} in the building.`;
      return {
        wordKey: item.wordKey,
        audioUrl: item.audioUrl,
        sentence: baseSentence,
        blankSentence: baseSentence.replace(new RegExp(`\\b${item.wordKey.replace(/_/g, " ")}\\b`, "gi"), "______")
      };
    });
    setGameQuestions(generated);
    setCurrentIdx(0);
    setScore(0);
    setupStep(generated[0], masterRegions);
  }, [masterRegions]);

  const setupStep = (currentQ: any, pool: any[]) => {
    const correct = currentQ.wordKey;
    const choices = [correct];
    const filtered = pool.filter((p) => p.wordKey !== correct).sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
      if (filtered[i]) choices.push(filtered[i].wordKey);
    }
    setOptions(choices.sort(() => 0.5 - Math.random()));
    setSelectedOption(null);
    setFeedback(null);
    new Audio(currentQ.audioUrl).play().catch(() => {});
  };

  const handleOptionClick = (option: string) => {
    if (feedback) return;
    setSelectedOption(option);
    const curQ = questions[currentIdx];

    if (option === curQ.wordKey) {
      setScore((prev) => prev + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        const nextIdx = currentIdx + 1;
        setCurrentIdx(nextIdx);
        setupStep(questions[nextIdx], masterRegions);
      } else {
        alert(`Boss Challenge Finished! 🏆\nYour Ultimate Score: ${score + (option === curQ.wordKey ? 1 : 0)} / 10`);
        closeGameModal();
      }
    }, 1500);
  };

  if (questions.length === 0) return null;
  const currentQ = questions[currentIdx];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFDF6] rounded-[2.5rem] border-8 border-amber-400 shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Trophy className="w-7 h-7 text-amber-500 animate-bounce" />
            <div>
              <h2 className="text-2xl font-black text-amber-600 font-sans">Boss Ultimate Challenge</h2>
              <p className="text-xs text-gray-400 font-semibold font-sans">Clear 10 extreme hidden combination quizzes to conquer this theme!</p>
            </div>
          </div>
          <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 p-1.5 rounded-full"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex gap-2">
          <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Boss Progress {currentIdx + 1} / 10</span>
          <span className="bg-white border-2 border-amber-200 px-4 py-1.5 rounded-full text-xs font-black text-amber-600 shadow-sm">Score {score}</span>
          <button onClick={() => new Audio(currentQ.audioUrl).play()} className="ml-auto flex items-center gap-2 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-4 py-1.5 rounded-full text-xs font-black shadow-sm"><Volume2 className="w-4 h-4" />Sound</button>
        </div>

        {/* Master Box Question View */}
        <div className="bg-white border-4 border-amber-100 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm relative min-h-[120px]">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-wide text-center leading-relaxed">
            {feedback === "correct" ? currentQ.sentence : currentQ.blankSentence}
          </h2>
          {feedback === "correct" && <div className="absolute inset-0 bg-emerald-500/10 rounded-xl flex items-center justify-center font-black text-emerald-600 text-lg">Excellent Combo! ✨</div>}
          {feedback === "wrong" && <div className="absolute inset-0 bg-rose-500/10 rounded-xl flex items-center justify-center font-black text-rose-600 text-lg">Boss Resisted! ❌</div>}
        </div>

        {/* Choice Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {options.map((option, idx) => {
            const isSelected = selectedOpt === option;
            const isCorrect = option === currentQ.wordKey;
            let btnStyle = "bg-white border-2 border-gray-200 hover:border-amber-400 hover:shadow-md text-slate-800";
            if (feedback && isSelected) {
              btnStyle = isCorrect ? "bg-emerald-500 text-white border-emerald-600 shadow-md" : "bg-rose-500 text-white border-rose-600 opacity-80";
            } else if (feedback && isCorrect) {
              btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-800";
            }

            return (
              <button key={`boss-opt-${idx}`} onClick={() => handleOptionClick(option)} disabled={!!feedback} className={`w-full py-4 rounded-xl font-black text-xl tracking-wide transition-all border font-sans capitalize ${btnStyle}`}>
                {option.replace(/_/g, " ")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}