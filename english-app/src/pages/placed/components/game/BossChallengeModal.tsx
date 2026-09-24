import React, { useState, useEffect, useRef } from "react";
import { Trophy, Volume2, X, Heart, Shield, RotateCcw, Flame } from "lucide-react";

interface BossChallengeModalProps {
  masterRegions: any[];
  closeGameModal: () => void;
}

export default function BossChallengeModal({ masterRegions, closeGameModal }: BossChallengeModalProps) {
  const wordPool = React.useMemo(() => {
    return Array.isArray(masterRegions) ? masterRegions.slice(0, 10) : [];
  }, [masterRegions]);

  const MAX_BOSS_HP = 100;
  const ATTACK_TIMER_MS = 4500;

  const [bossHp, setBossHp] = useState(MAX_BOSS_HP);
  const [playerHearts, setPlayerHearts] = useState(3);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<"deflect" | "hit" | null>(null);
  const [gameState, setGameState] = useState<"playing" | "victory" | "gameover">("playing");
  const [timerProgress, setTimerProgress] = useState(0);

  // 실행 중 중복 피격/반사 방지 플래그
  const isProcessingRef = useRef(false);
  const timeoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 게임 초기화
  const initGame = () => {
    if (wordPool.length === 0) return;
    const shuffled = [...wordPool].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIdx(0);
    setBossHp(MAX_BOSS_HP);
    setPlayerHearts(3);
    setGameState("playing");
    setFeedback(null);
    setTimerProgress(0);
    isProcessingRef.current = false;
    setupRound(shuffled[0], wordPool);
  };

  useEffect(() => {
    initGame();
    return () => {
      if (timeoutTimerRef.current) clearTimeout(timeoutTimerRef.current);
    };
  }, [wordPool]);

  // 라운드별 보기 세팅
  const setupRound = (currentWord: any, pool: any[]) => {
    if (!currentWord) return;
    isProcessingRef.current = false;
    setFeedback(null);
    setTimerProgress(0);

    const choices = [currentWord];
    const wrongList = pool.filter((w) => w.wordKey !== currentWord.wordKey).sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
      if (wrongList[i]) choices.push(wrongList[i]);
    }
    setOptions(choices.sort(() => 0.5 - Math.random()));

    if (currentWord.audioUrl) {
      new Audio(currentWord.audioUrl).play().catch(() => {});
    }
  };

  // 🌟 실시간 탄환 이동 타이머 (상태 업데이터 밖에서 안전하게 처리)
  useEffect(() => {
    if (gameState !== "playing" || feedback !== null || questions.length === 0) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed / ATTACK_TIMER_MS) * 100;

      if (progress >= 100) {
        clearInterval(interval);
        setTimerProgress(100);
        handleTimeOut();
      } else {
        setTimerProgress(progress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIdx, gameState, feedback, questions]);

  // 시간 초과 시 피격
  const handleTimeOut = () => {
    if (isProcessingRef.current) return;
    applyDamageToPlayer();
  };

  // 🌟 피격 처리 (중복 방지 및 안전한 인덱스 전환)
  const applyDamageToPlayer = () => {
    if (isProcessingRef.current) return;
    isProcessingRef.current = true;

    setFeedback("hit");
    const nextHearts = playerHearts - 1;
    setPlayerHearts(nextHearts);

    timeoutTimerRef.current = setTimeout(() => {
      if (nextHearts <= 0) {
        setGameState("gameover");
      } else {
        const nextIdx = (currentIdx + 1) % questions.length;
        setCurrentIdx(nextIdx);
        setupRound(questions[nextIdx], wordPool);
      }
    }, 900);
  };

  // 실드 선택
  const handleShieldSelect = (selectedWordKey: string) => {
    if (isProcessingRef.current || feedback !== null || gameState !== "playing") return;

    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const isCorrect = selectedWordKey === currentQ.wordKey;

    if (isCorrect) {
      isProcessingRef.current = true;
      setFeedback("deflect");
      const nextHp = Math.max(0, bossHp - 20);
      setBossHp(nextHp);

      timeoutTimerRef.current = setTimeout(() => {
        if (nextHp <= 0) {
          setGameState("victory");
        } else {
          const nextIdx = (currentIdx + 1) % questions.length;
          setCurrentIdx(nextIdx);
          setupRound(questions[nextIdx], wordPool);
        }
      }, 900);
    } else {
      applyDamageToPlayer();
    }
  };

  // 데이터 검증 및 방어 코드
  if (questions.length === 0 || !questions[currentIdx]) return null;
  const currentQ = questions[currentIdx];

  const cleanWord = (currentQ.wordKey || "").replace(/_/g, " ");
  const sentenceDisplay = currentQ.sentence
    ? currentQ.sentence.replace(new RegExp(`\\b${cleanWord}\\b`, "gi"), "_______")
    : `Find: [ ${cleanWord.slice(0, 2)}... ]`;

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border-4 border-amber-500/80 rounded-3xl w-full max-w-2xl p-6 flex flex-col gap-4 shadow-2xl relative text-white overflow-hidden">
        
        {/* 상단 헤더 */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-black text-cyan-400 tracking-wider">WORD SHIELD BREAKER</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-6 h-6 ${
                    i < playerHearts ? "text-rose-500 fill-rose-500 drop-shadow" : "text-slate-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={closeGameModal}
              className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 보스 상태 및 체력 바 */}
        <div className="flex flex-col items-center gap-1 bg-slate-800/90 p-3 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3">
            <span className={`text-4xl transition-transform ${feedback === "deflect" ? "scale-125 rotate-12" : ""}`}>
              🐲
            </span>
            <div className="text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dread Dragon Boss</span>
              <p className="text-xs text-rose-400 font-extrabold">HP {bossHp} / {MAX_BOSS_HP}</p>
            </div>
          </div>
          <div className="w-full bg-slate-950 h-4 rounded-full overflow-hidden border border-slate-700 relative mt-1">
            <div
              className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 h-full transition-all duration-300"
              style={{ width: `${(bossHp / MAX_BOSS_HP) * 100}%` }}
            />
          </div>
        </div>

        {/* 배틀 필드 */}
        {gameState === "playing" && (
          <div className="flex flex-col gap-4">
            <div className="relative bg-slate-950 border-2 border-slate-800 rounded-2xl h-40 flex flex-col justify-between p-4 overflow-hidden shadow-inner">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1 text-orange-400"><Flame className="w-4 h-4" /> BOSS ATTACK</span>
                <span className="flex items-center gap-1 text-cyan-400"><Shield className="w-4 h-4" /> PLAYER DEFENSE</span>
              </div>

              {/* 투사체 트랙 */}
              <div className="relative w-full h-14 flex items-center">
                <div className="absolute left-0 right-0 h-1 bg-slate-800 rounded-full" />
                
                <div
                  className="absolute flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-3 py-1.5 rounded-2xl shadow-lg border border-yellow-300 transition-all duration-75 max-w-[75%]"
                  style={{ left: `calc(${Math.min(timerProgress, 72)}%)` }}
                >
                  <Flame className="w-4 h-4 flex-shrink-0 animate-spin" />
                  <span className="text-xs tracking-tight line-clamp-2">
                    {sentenceDisplay}
                  </span>
                </div>

                <div className="absolute right-0 w-3.5 h-12 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </div>

              <div className="flex justify-between items-center z-10">
                <span className="text-[11px] text-slate-400">Select the matching shield before the fireball strikes!</span>
                <button
                  onClick={() => currentQ.audioUrl && new Audio(currentQ.audioUrl).play()}
                  className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full shadow"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Sound
                </button>
              </div>

              {feedback === "deflect" && (
                <div className="absolute inset-0 bg-cyan-500/20 backdrop-blur-[2px] flex items-center justify-center text-cyan-300 font-black text-2xl tracking-widest animate-pulse z-20">
                  ⚡ SHIELD REFLECT! (-20 HP)
                </div>
              )}
              {feedback === "hit" && (
                <div className="absolute inset-0 bg-rose-600/30 backdrop-blur-[2px] flex items-center justify-center text-rose-300 font-black text-2xl tracking-widest animate-bounce z-20">
                  💥 SHIELD BROKEN! (-1 HEART)
                </div>
              )}
            </div>

            {/* 선택지 버튼 */}
            <div className="grid grid-cols-2 gap-3">
              {options.map((opt) => (
                <button
                  key={opt.wordKey}
                  onClick={() => handleShieldSelect(opt.wordKey)}
                  disabled={isProcessingRef.current || !!feedback}
                  className="group relative py-4 px-3 rounded-2xl font-black text-lg bg-slate-800/90 hover:bg-cyan-600 hover:border-cyan-300 text-slate-100 border-2 border-slate-700 transition-all active:scale-95 capitalize shadow-md flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                  <span>{(opt.wordKey || "").replace(/_/g, " ")}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 승리 화면 */}
        {gameState === "victory" && (
          <div className="flex flex-col items-center justify-center p-8 gap-4 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
            <h3 className="text-3xl font-black text-amber-400">BOSS SHIELD MASTER!</h3>
            <p className="text-slate-300">You successfully defeated the Dragon Boss with perfect defense!</p>
            <button
              onClick={closeGameModal}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              Claim Rewards & Close
            </button>
          </div>
        )}

        {/* 패배 화면 */}
        {gameState === "gameover" && (
          <div className="flex flex-col items-center justify-center p-8 gap-4 text-center">
            <span className="text-5xl">🛡️💥</span>
            <h3 className="text-3xl font-black text-rose-500">DEFENSE FAILED</h3>
            <p className="text-slate-300">Your shield has been destroyed. Would you like to try again?</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={initGame}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-600"
              >
                <RotateCcw className="w-4 h-4" /> Retry
              </button>
              <button
                onClick={closeGameModal}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all"
              >
                Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}