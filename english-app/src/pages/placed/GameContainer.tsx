import React, { useState, useEffect, useRef } from "react";
import { Search, Ear, Palette, FileText, Puzzle, Zap, Type, Layers, Image as ImageIcon, ArrowUpRight, Trophy } from "lucide-react";

// 데이터 및 타입 임포트
import { PlaceDataType, RegionData } from "@/pages/placed/constants/my-house/my-house-data/ApartmentData";

// 🌟 확장성을 위한 전체 장소 이미지 맵 (새 장소가 추가되면 여기에 이미지 등록만 하면 됩니다!)
import apartmentImg from '@/assets/image/places/house/apartment.png';
import houseImg from '@/assets/image/places/house/house.png';


// 장소 키(placeKey)별 이미지 레지스트리 맵
const PLACE_IMAGES: Record<string, string> = {
  apartment: apartmentImg,
  house: houseImg,
};


// 🌟 1~11번 독립형 미니 게임 모달 컴포넌트 전체 임포트 벨트
import FindPlaceModal from "./components/game/FindPlaceModal";
import ColorMagicModal from "./components/game/ColorMagicModal";
import FillBlankModal from "./components/game/FillBlankModal";
import SentenceBuilderModal from "./components/game/SentenceBuilderModal";
import SpeedMatchModal from "./components/game/SpeedMatchModal";
import SpellingCorrectModel from "./components/game/SpellingCorrectModel";
import MemoryCardModal from "./components/game/MemoryCardModal";
import PictureQuizModal from "./components/game/PictureQuizModal";
import InfiniteStairsModal from "./components/game/InfiniteStairsModal";
import BossChallengeModal from "./components/game/BossChallengeModal";

interface GameContainerProps {
  placeData: PlaceDataType;
  // 여러 장소의 이미지를 상위에서 통째로 받거나, 내부 PLACE_IMAGES 레지스트리를 조합하여 사용
  placeImages?: Record<string, string>; 
}

export default function GameContainer({ placeData, placeImages }: GameContainerProps) {
  const { bgImage, masterRegions } = placeData;

  // 상위에서 넘겨준 placeImages가 있으면 우선 사용하고, 없으면 기본 PLACE_IMAGES 사용
  const activePlaceImages = {
    ...PLACE_IMAGES,
    ...placeImages,
    // 현재 진입한 장소의 기본 배경 이미지도 자동 등록
    [placeData.placeKey]: bgImage 
  };

  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [gameQuestions, setGameQuestions] = useState<any[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameFeedback, setGameFeedback] = useState<"correct" | "wrong" | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [coloredWords, setColoredWords] = useState<string[]>([]);
  const [colorMagicFeedback, setColorMagicFeedback] = useState<"correct" | "wrong" | null>(null);
  const [blankOptions, setBlankOptions] = useState<string[]>([]);
  const [blankFeedback, setBlankFeedback] = useState<"correct" | "wrong" | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shuffledChips, setShuffledChips] = useState<any[]>([]);
  const [assembledWords, setAssembledWords] = useState<any[]>([]);
  const [builderFeedback, setBuilderFeedback] = useState<"correct" | "wrong" | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [speedOptions, setSpeedOptions] = useState<any[]>([]);
  const [speedFeedback, setSpeedFeedback] = useState<"correct" | "wrong" | null>(null);
  const [selectedSpeedOption, setSelectedSpeedOption] = useState<string | null>(null);

  
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 11개 게임 대시보드 카드 목록
  const cards = [
    { id: 1, gameKey: 'find_place', title: 'Find the Place', desc: 'Listen to the word and tap the picture!', icon: <Search className="w-6 h-6 text-slate-700" /> },
    { id: 2, gameKey: 'listen_find', title: 'Listen & Find', desc: 'Listen to the sentence and find the correct word in the picture.', icon: <Ear className="w-6 h-6 text-amber-500" /> },
    { id: 3, gameKey: 'color_magic', title: 'Color Magic', desc: 'Guess the word to bring the black and white picture to life!', icon: <Palette className="w-6 h-6 text-purple-500" /> },
    { id: 4, gameKey: 'fill_blank', title: 'Fill in the Blank', desc: 'Choose the correct word to complete the sentence.', icon: <FileText className="w-6 h-6 text-blue-500" /> },
    { id: 5, gameKey: 'sentence_builder', title: 'Sentence Builder', desc: 'Tap the scattered words in order to build a full sentence!', icon: <Puzzle className="w-6 h-6 text-green-500" /> },
    { id: 6, gameKey: 'speed_match', title: 'Speed Match', desc: 'Quickly match the English words with their alternatives within 30 seconds!', icon: <Zap className="w-6 h-6 text-yellow-500" /> },
    { id: 7, gameKey: 'spelling_bee', title: 'Spelling Bee', desc: 'Listen to the word and assemble the correct spelling chips.', icon: <Type className="w-6 h-6 text-indigo-500" /> },
    { id: 8, gameKey: 'memory_cards', title: 'Memory Cards', desc: 'Flip the cards and find the matching English name and audio sound pairs.', icon: <Layers className="w-6 h-6 text-rose-500" /> },
    { id: 9, gameKey: 'picture_quiz', title: 'Picture Quiz', desc: 'Look at the hidden image piece and discover the matching name.', icon: <ImageIcon className="w-6 h-6 text-emerald-500" /> },
    { id: 10, gameKey: 'infinite_stairs', title: 'Infinite Stairs', desc: 'Listen to the audio sound and step on the matching name button!', icon: <ArrowUpRight className="w-6 h-6 text-orange-500" /> },
    { id: 11, gameKey: 'boss_challenge', title: 'Boss Challenge', desc: 'Clear 10 extreme hidden combination quizzes to conquer this stage!', icon: <Trophy className="w-6 h-6 text-amber-600" /> },
  ];

  // 문장 풀 생성
  const sentenceQuestionsPool = masterRegions.map((item) => {
    const rawSentence = item.sentence || `I am walking down the ${item.wordKey.replace(/_/g, " ")}.`;
    return {
      wordKey: item.wordKey,
      meaning: item.meaning || item.korean || item.wordKey.replace(/_/g, " "),
      sentence: rawSentence,
      displaySentence: rawSentence.replace(new RegExp(`\\b${item.wordKey.replace(/_/g, " ")}\\b`, 'gi'), "______")
    };
  });

  
  const stopCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }
    setIsPlaying(false);
  };

  const playAudio = (url: string) => {
    stopCurrentAudio();
    if (!url) return;
    setIsPlaying(true);
    const audio = new Audio(url);
    currentAudioRef.current = audio;
    audio.play().catch(err => console.log(err));
    audio.onended = () => setIsPlaying(false);
  };

  const playSentenceAudios = (wordKey: string) => {
    stopCurrentAudio();
    if (!wordKey) return;
    setIsPlaying(true);
    const cleanTargetId = wordKey.replace(/_/g, "");
    const firstAudio = new Audio(`/audio/apartmentSentence/${cleanTargetId}1.mp3`);
    currentAudioRef.current = firstAudio;

    firstAudio.play()
      .then(() => {
        firstAudio.onended = () => {
          const secondAudio = new Audio(`/audio/apartmentSentence/${cleanTargetId}2.mp3`);
          currentAudioRef.current = secondAudio;
          secondAudio.play().catch(() => setIsPlaying(false));
          secondAudio.onended = () => {
            setIsPlaying(false);
            currentAudioRef.current = null;
          };
        };
      })
      .catch(() => setIsPlaying(false));
  };

  const triggerAudio = (question: any, forceGameKey = null) => {
    if (!question) return;
    const activeGameKey = forceGameKey || selectedGame?.gameKey;
    if (activeGameKey === 'listen_find' || activeGameKey === 'fill_blank' || activeGameKey === 'sentence_builder') {
      playSentenceAudios(question.wordKey);
    } else {
      playAudio(question.audioUrl);
    }
  };

  const generateMultipleChoices = (correctWord: string, pool: RegionData[]) => {
    const correctObj = pool.find(item => item.wordKey === correctWord)!;
    const choices = [correctObj];
    const filteredPool = pool.filter(item => item.wordKey !== correctWord);
    const shuffledPool = [...filteredPool].sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
      if (shuffledPool[i]) choices.push(shuffledPool[i]);
    }
    return choices.sort(() => 0.5 - Math.random());
  };

  const setupSentenceBuilderQuestion = (question: any) => {
    if (!question || !question.sentence) return;
    const cleanedText = question.sentence.replace(/[.]/g, ' .');
    const wordList = cleanedText.split(/\s+/).filter((w: string) => w.length > 0);
    const structuredWords = wordList.map((w: string, idx: number) => ({ id: `${w}-${idx}`, word: w }));
    setShuffledChips([...structuredWords].sort(() => 0.5 - Math.random()));
    setAssembledWords([]);
  };

  // ==================== [Sentence Builder 핸들러] ====================
  const handleChipClick = (chip: any) => {
    if (builderFeedback) return;

    const nextAssembled = [...assembledWords, chip];
    const nextShuffled = shuffledChips.filter((c) => c.id !== chip.id);

    setAssembledWords(nextAssembled);
    setShuffledChips(nextShuffled);

    if (nextShuffled.length === 0) {
      const currentQuestion = gameQuestions[currentQuestionIdx];
      const builtSentence = nextAssembled.map((c) => c.word).join(" ");
      const targetSentence = (currentQuestion?.sentence || "")
        .replace(/[.]/g, " .")
        .trim();

      if (builtSentence === targetSentence) {
        setBuilderFeedback("correct");
        setScore((prev) => prev + 1);

        setTimeout(() => {
          setBuilderFeedback(null);
          if (currentQuestionIdx < gameQuestions.length - 1) {
            const nextIdx = currentQuestionIdx + 1;
            setCurrentQuestionIdx(nextIdx);
            setupSentenceBuilderQuestion(gameQuestions[nextIdx]);
            playSentenceAudios(gameQuestions[nextIdx].wordKey);
          } else {
            alert(`Amazing! 🎉 You built all sentences!`);
            closeGameModal();
          }
        }, 1200);
      } else {
        setBuilderFeedback("wrong");
        setTimeout(() => {
          setBuilderFeedback(null);
        }, 1000);
      }
    }
  };

  const handleAssembledClick = (chip: any) => {
    if (builderFeedback) return;
    setAssembledWords((prev) => prev.filter((c) => c.id !== chip.id));
    setShuffledChips((prev) => [...prev, chip]);
  };

  // ==================== [🎮 게임 구동 프로세서 통합본] ====================
  const startNewGame = (card: any) => {
    stopCurrentAudio();
    clearInterval(timerIntervalRef.current!);
    setSelectedGame(card);

    if (['memory_cards', 'infinite_stairs', 'boss_challenge'].includes(card.gameKey)) {
      return;
    }

    const shuffled = [...masterRegions].sort(() => 0.5 - Math.random());
    
    if (card.gameKey === 'color_magic') {
      setGameQuestions(shuffled);
      setCurrentQuestionIdx(0);
      setColoredWords([]);
      setColorMagicFeedback(null);
      setTimeout(() => { playAudio(shuffled[0].audioUrl); }, 400);
    } else if (card.gameKey === 'fill_blank') {
      const shuffledPool = [...sentenceQuestionsPool].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffledPool.slice(0, 5);
      setGameQuestions(selectedQuestions);
      setCurrentQuestionIdx(0);
      setScore(0);
      setBlankFeedback(null);
      setSelectedOption(null);
      setBlankOptions(generateMultipleChoices(selectedQuestions[0].wordKey, masterRegions).map(o => o.wordKey));
      setTimeout(() => { playSentenceAudios(selectedQuestions[0].wordKey); }, 400);
    } else if (card.gameKey === 'sentence_builder') {
      const shuffledPool = [...sentenceQuestionsPool].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffledPool.slice(0, 4);
      setGameQuestions(selectedQuestions);
      setCurrentQuestionIdx(0);
      setScore(0);
      setBuilderFeedback(null);
      setupSentenceBuilderQuestion(selectedQuestions[0]);
      setTimeout(() => { playSentenceAudios(selectedQuestions[0].wordKey); }, 400);
    } else if (card.gameKey === 'speed_match') {
      setGameQuestions(shuffled);
      setCurrentQuestionIdx(0);
      setScore(0);
      setTimeLeft(30);
      setSpeedFeedback(null);
      setSelectedSpeedOption(null);
      setSpeedOptions(generateMultipleChoices(shuffled[0].wordKey, masterRegions));

      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current!);
            alert(`Time is up! ⏱️ Game Over!\nYour Score: ${score}`);
            closeGameModal();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      const selectedQuestions = shuffled.slice(0, 5);
      setGameQuestions(selectedQuestions);
      setCurrentQuestionIdx(0);
      setScore(0);
      setGameFeedback(null);
      setTimeout(() => { triggerAudio(selectedQuestions[0], card.gameKey); }, 400);
    }
  };

  const currentQuestion = gameQuestions[currentQuestionIdx];

  // ==================== [핸들러 브릿지 패키지] ====================
  const handleSpeedOptionClick = (selectedOptionObj: any) => {
    if (speedFeedback) return;
    setSelectedSpeedOption(selectedOptionObj.wordKey);

    if (selectedOptionObj.wordKey === currentQuestion.wordKey) {
      setScore(prev => prev + 1);
      setSpeedFeedback('correct');
      setTimeout(() => {
        setSpeedFeedback(null);
        setSelectedSpeedOption(null);
        if (currentQuestionIdx < gameQuestions.length - 1) {
          const nextIdx = currentQuestionIdx + 1;
          setCurrentQuestionIdx(nextIdx);
          setSpeedOptions(generateMultipleChoices(gameQuestions[nextIdx].wordKey, masterRegions));
        } else {
          clearInterval(timerIntervalRef.current!);
          alert(`Incredible! 🎉 You matched all words!\nFinal Score: ${score + 1}`);
          closeGameModal();
        }
      }, 800);
    } else {
      setSpeedFeedback('wrong');
      setTimeLeft(prev => Math.max(0, prev - 2));
      setTimeout(() => {
        setSpeedFeedback(null);
        setSelectedSpeedOption(null);
      }, 800);
    }
  };

  const handleModalSuccessFeedback = () => {
    setScore(prev => prev + 1);
    setTimeout(() => {
      if (currentQuestionIdx < gameQuestions.length - 1) {
        setCurrentQuestionIdx(prev => prev + 1);
      } else {
        alert("Wonderful! Stage Perfect Cleared! ✨");
        closeGameModal();
      }
    }, 1200);
  };

  const handleBlankOptionClick = (option: string) => {
    if (blankFeedback) return;
    setSelectedOption(option);
    if (option === currentQuestion.wordKey) { setScore(prev => prev + 1); setBlankFeedback('correct'); }
    else { setBlankFeedback('wrong'); }

    setTimeout(() => {
      setBlankFeedback(null);
      setSelectedOption(null);
      if (currentQuestionIdx < gameQuestions.length - 1) {
        const nextIdx = currentQuestionIdx + 1;
        setCurrentQuestionIdx(nextIdx);
        setBlankOptions(generateMultipleChoices(gameQuestions[nextIdx].wordKey, masterRegions).map(o => o.wordKey));
        playSentenceAudios(gameQuestions[nextIdx].wordKey);
      } else {
        alert(`Game Over! 🎉 Final Score: ${score + (option === currentQuestion.wordKey ? 1 : 0)} / 5`);
        closeGameModal();
      }
    }, 1500);
  };

  const handleColorMagicTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (colorMagicFeedback) return;
    stopCurrentAudio();
    setColorMagicFeedback('correct');
    const currentWord = currentQuestion.wordKey;
    if (!coloredWords.includes(currentWord)) { setColoredWords(prev => [...prev, currentWord]); }

    setTimeout(() => {
      setColorMagicFeedback(null);
      if (currentQuestionIdx < gameQuestions.length - 1) {
        const nextIdx = currentQuestionIdx + 1;
        setCurrentQuestionIdx(nextIdx);
        playAudio(currentQuestion.audioUrl);
      } else {
        alert("Wonderful! 🎨 You brought all places to life with colors!");
        closeGameModal();
      }
    }, 1500);
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gameFeedback) return;
    stopCurrentAudio();
    setScore(prev => prev + 1);
    setGameFeedback('correct');

    setTimeout(() => {
      setGameFeedback(null);
      if (currentQuestionIdx < 4 && currentQuestionIdx < gameQuestions.length - 1) {
        const nextIdx = currentQuestionIdx + 1;
        setCurrentQuestionIdx(nextIdx);
        triggerAudio(gameQuestions[nextIdx]);
      } else {
        alert(`Congratulations! 🎉 Stage Cleared!\nScore: ${score + 1} / 5`);
        closeGameModal();
      }
    }, 1500);
  };

  const closeGameModal = () => {
    stopCurrentAudio();
    clearInterval(timerIntervalRef.current!);
    setSelectedGame(null);
    setGameQuestions([]);
    setCurrentQuestionIdx(0);
    setScore(0);
    setGameFeedback(null);
    setColoredWords([]);
    setColorMagicFeedback(null);
    setBlankOptions([]);
    setBlankFeedback(null);
    setSelectedOption(null);
    setShuffledChips([]);
    setAssembledWords([]);
    setBuilderFeedback(null);
    setSpeedOptions([]);
    setSpeedFeedback(null);
    setSelectedSpeedOption(null);
  };

  useEffect(() => {
    return () => clearInterval(timerIntervalRef.current!);
  }, []);

  return (
    <div className="w-full max-w-5xl bg-[#FFFDF6] rounded-[2.5rem] border-4 border-white shadow-xl p-6 md:p-8 animate-fade-in">
      {/* 🎮 카드 그리드 레이아웃 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => startNewGame(card)}
            className="relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5 select-none"
          >
            <div>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black text-white mb-4 bg-[#46B36D]">
                {card.id}
              </span>
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-lg font-black mb-1.5 text-gray-900">{card.title}</h3>
              <p className="text-xs font-semibold leading-relaxed text-gray-400">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== 🛠️ 1~11번 모달 연동 허브 ==================== */}
      {selectedGame && (currentQuestion || ['memory_cards', 'infinite_stairs', 'boss_challenge'].includes(selectedGame.gameKey)) && (
        <>
          {(selectedGame.gameKey === 'find_place' || selectedGame.gameKey === 'listen_find') && (
            <FindPlaceModal
              selectedGame={selectedGame} currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx}
              score={score} isPlaying={isPlaying} gameFeedback={gameFeedback} triggerAudio={triggerAudio}
              handleTargetClick={handleTargetClick} handleBackgroundClick={() => setGameFeedback('wrong')}
              closeGameModal={closeGameModal} apartmentImg={bgImage}
            />
          )}

          {selectedGame.gameKey === 'color_magic' && (
            <ColorMagicModal
              currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx} gameQuestions={gameQuestions}
              coloredWords={coloredWords} colorMagicFeedback={colorMagicFeedback} playAudio={playAudio}
              handleColorMagicTargetClick={handleColorMagicTargetClick} handleColorMagicBackgroundClick={() => setColorMagicFeedback('wrong')}
              closeGameModal={closeGameModal} masterRegions={masterRegions} apartmentImg={bgImage}
            />
          )}

          {selectedGame.gameKey === 'fill_blank' && (
            <FillBlankModal
              currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx} score={score}
              blankOptions={blankOptions} blankFeedback={blankFeedback} selectedOption={selectedOption}
              playSentenceAudios={playSentenceAudios} handleBlankOptionClick={handleBlankOptionClick} closeGameModal={closeGameModal}
            />
          )}

          {selectedGame.gameKey === 'sentence_builder' && (
            <SentenceBuilderModal
              currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx}
              assembledWords={assembledWords} shuffledChips={shuffledChips} builderFeedback={builderFeedback}
              playSentenceAudios={playSentenceAudios} handleChipClick={handleChipClick} handleAssembledClick={handleAssembledClick}
              closeGameModal={closeGameModal}
            />
          )}

          {selectedGame.gameKey === 'speed_match' && (
            <SpeedMatchModal
              currentQuestion={currentQuestion} score={score} timeLeft={timeLeft} speedOptions={speedOptions}
              speedFeedback={speedFeedback} selectedSpeedOption={selectedSpeedOption}
              handleSpeedOptionClick={handleSpeedOptionClick} closeGameModal={closeGameModal}
            />
          )}

          {selectedGame.gameKey === 'spelling_bee' && (
            <SpellingCorrectModel
              currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx} score={score}
              closeGameModal={closeGameModal} onCorrectAnswer={handleModalSuccessFeedback} onWrongAnswer={() => {}}
            />
          )}

          {selectedGame.gameKey === 'memory_cards' && (
            <MemoryCardModal
              masterRegions={masterRegions} closeGameModal={closeGameModal}
            />
          )}

          {/* 🌟 PictureQuizModal - 개별 Prop 대신 통째로 다국적/다장소 이미지 Object를 넘김 */}
          {selectedGame.gameKey === 'picture_quiz' && (
            <PictureQuizModal
              currentQuestion={currentQuestion} currentQuestionIdx={currentQuestionIdx} score={score}
              closeGameModal={closeGameModal} optionsPool={masterRegions} onCorrectAnswer={handleModalSuccessFeedback}
              onWrongAnswer={() => {}} placeImages={activePlaceImages} defaultImg={bgImage}
            />
          )}

          {selectedGame.gameKey === 'infinite_stairs' && (
            <InfiniteStairsModal
              masterRegions={masterRegions} closeGameModal={closeGameModal}
            />
          )}

          {selectedGame.gameKey === 'boss_challenge' && (
            <BossChallengeModal
              masterRegions={masterRegions} closeGameModal={closeGameModal}
            />
          )}
        </>
      )}
    </div>
  );
}