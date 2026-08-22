// import React, { useState, useEffect, useRef } from 'react';
// import { Search, Gamepad2, Award, Ear, Palette, FileText, Puzzle, Zap, Type, Layers, Image as ImageIcon, ArrowUpRight, Trophy, X, Volume2, Timer } from 'lucide-react';

// import apartmentImg from '@/assets/image/places/house/apartment.png';

// export default function ApartmentWordAdventure() {
//   const [activeView, setActiveView] = useState('dashboard'); 
//   const [currentMode, setCurrentMode] = useState('game'); 
//   const [selectedGame, setSelectedGame] = useState(null);
  
//   // Game progress state management
//   const [gameQuestions, setGameQuestions] = useState([]); 
//   const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
//   const [score, setScore] = useState(0);
//   const [gameFeedback, setGameFeedback] = useState(null); // 'correct', 'wrong', null
//   const [isPlaying, setIsPlaying] = useState(false); // Audio playback state

//   // 🎨 Game 3 (Color Magic) exclusive state
//   const [coloredWords, setColoredWords] = useState([]); 
//   const [colorMagicFeedback, setColorMagicFeedback] = useState(null); 

//   // 📝 Game 4 (Fill in the Blank) exclusive state
//   const [blankOptions, setBlankOptions] = useState([]); 
//   const [blankFeedback, setBlankFeedback] = useState(null); 
//   const [selectedOption, setSelectedOption] = useState(null); 

//   // 🧩 Game 5 (Sentence Builder) exclusive state
//   const [shuffledChips, setShuffledChips] = useState([]); 
//   const [assembledWords, setAssembledWords] = useState([]); 
//   const [builderFeedback, setBuilderFeedback] = useState(null); 

//   // ⚡ Game 6 (Speed Match) exclusive state
//   const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
//   const [speedOptions, setSpeedOptions] = useState([]); 
//   const [speedFeedback, setSpeedFeedback] = useState(null); // 'correct', 'wrong'
//   const [selectedSpeedOption, setSelectedSpeedOption] = useState(null);

//   // Ref management to prevent audio overlap and control playback
//   const currentAudioRef = useRef(null);
//   const timerIntervalRef = useRef(null);

//   // Cards data array
//   const cards = [
//     { id: 1, gameKey: 'find_place', title: 'Find the Place', desc: 'Listen to "Where is the elevator?" and tap the picture!', icon: <Search className="w-6 h-6 text-slate-700" /> },
//     { id: 2, gameKey: 'listen_find', title: 'Listen & Find', desc: 'Listen to the sentence and find the correct word in the picture.', icon: <Ear className="w-6 h-6 text-amber-500" /> },
//     { id: 3, gameKey: 'color_magic', title: 'Color Magic', desc: 'Guess the word to bring the black and white picture to life!', icon: <Palette className="w-6 h-6 text-purple-500" /> },
//     { id: 4, gameKey: 'fill_blank', title: 'Fill in the Blank', desc: 'Choose the correct word to complete the sentence.', icon: <FileText className="w-6 h-6 text-blue-500" /> },
//     { id: 5, gameKey: 'sentence_builder', title: 'Sentence Builder', desc: 'Tap the scattered words in order to build a full sentence!', icon: <Puzzle className="w-6 h-6 text-green-500" /> },
//     { id: 6, gameKey: 'speed_match', title: 'Speed Match', desc: 'Quickly match the English words with their meanings within 30 seconds!', icon: <Zap className="w-6 h-6 text-yellow-500" /> },
//     { id: 7, title: 'Spelling Bee', desc: 'Listen to the word and tap the letters to complete the spelling.', icon: <Type className="w-6 h-6 text-indigo-500" /> },
//     { id: 8, title: 'Memory Cards', desc: 'Flip the cards and match the English words with their meanings.', icon: <Layers className="w-6 h-6 text-rose-500" /> },
//     { id: 9, title: 'Picture Quiz', desc: 'Look at the puzzle piece of a scene and choose the right word.', icon: <ImageIcon className="w-6 h-6 text-emerald-500" /> },
//     { id: 10, title: 'Infinite Stairs', desc: 'Look at the meaning and step on the correct word to climb up endlessly!', icon: <ArrowUpRight className="w-6 h-6 text-orange-500" /> },
//     { id: 11, title: 'Boss Challenge', desc: '10 questions of various types! The ultimate challenge.', icon: <Trophy className="w-6 h-6 text-amber-600" />, isBoss: true },
//   ];

//   // 🌟 마스터 데이터에 스피드 퀴즈용 한글 뜻(korean) 추가 매핑 완료
//   const masterRegions = [
//     { wordKey: "elevator", korean: "엘리베이터", audioUrl: "/audio/apartment/elevator.mp3", targetStyle: { top: '8.7%', left: '56.0%', width: '12.3%', height: '24.0%' } },
//     { wordKey: "mailbox", korean: "우편함", audioUrl: "/audio/apartment/mailbox.mp3", targetStyle: { top: '50.8%', left: '30.8%', width: '17.5%', height: '33.7%' } },
//     { wordKey: "playground", korean: "놀이터", audioUrl: "/audio/apartment/playground.mp3", targetStyle: { top: '64.5%', left: '82.0%', width: '16.5%', height: '18.0%' } },
//     { wordKey: "parking_lot", korean: "주차장", audioUrl: "/audio/apartment/parking_lot.mp3", targetStyle: { top: '68.0%', left: '1.0%', width: '30.0%', height: '25.0%' } },
//     { wordKey: "recycling_area", korean: "분리수거장", audioUrl: "/audio/apartment/recycling_area.mp3", targetStyle: { top: '70.3%', left: '70.5%', width: '14.5%', height: '14.2%' } },
//     { wordKey: "security_office", korean: "경비실", audioUrl: "/audio/apartment/security_office.mp3", targetStyle: { top: '72.5%', left: '56.5%', width: '20.0%', height: '25.5%' } },
//     { wordKey: "gym", korean: "체육관(헬스장)", audioUrl: "/audio/apartment/gym.mp3", targetStyle: { top: '83.5%', left: '79.5%', width: '19.0%', height: '14.0%' } },
//     { wordKey: "entrance", korean: "입구", audioUrl: "/audio/apartment/entrance.mp3", targetStyle: { top: '44.2%', left: '67.8%', width: '10.0%', height: '19.3%' } },
//     { wordKey: "terrace", korean: "테라스", audioUrl: "/audio/apartment/terrace.mp3", targetStyle: { top: '23.7%', left: '84.7%', width: '14.8%', height: '21.3%' } },
//     { wordKey: "rooftop", korean: "옥상", audioUrl: "/audio/apartment/rooftop.mp3", targetStyle: { top: '11.0%', left: '88.2%', width: '11.3%', height: '12.5%' } },
//     { wordKey: "building", korean: "건물", audioUrl: "/audio/apartment/building.mp3", targetStyle: { top: '4.5%', left: '31.2%', width: '25.3%', height: '37.0%' } },
//     { wordKey: "balcony", korean: "발코니(베란다)", audioUrl: "/audio/apartment/balcony.mp3", targetStyle: { top: '12.5%', left: '66.5%', width: '13.0%', height: '21.0%' } },
//     { wordKey: "unit", korean: "세대(우리집)", audioUrl: "/audio/apartment/unit.mp3", targetStyle: { top: '2.0%', left: '12.0%', width: '8.5%', height: '17.0%' } },
//     { wordKey: "wall", korean: "벽", audioUrl: "/audio/apartment/wall.mp3", targetStyle: { top: '3.2%', left: '22.2%', width: '7.4%', height: '36.3%' } },
//     { wordKey: "basement", korean: "지하", audioUrl: "/audio/apartment/basement.mp3", targetStyle: { top: '43.5%', left: '2.5%', width: '11.3%', height: '26.5%' } },
//     { wordKey: "hallway", korean: "복도", audioUrl: "/audio/apartment/hallway.mp3", targetStyle: { top: '40.5%', left: '46.5%', width: '8.0%', height: '14.0%' } },
//     { wordKey: "column", korean: "기둥", audioUrl: "/audio/apartment/column.mp3", targetStyle: { top: '29.5%', left: '56.2%', width: '5.0%', height: '30.0%' } },
//     { wordKey: "logo", korean: "로고", audioUrl: "/audio/apartment/logo.mp3", targetStyle: { top: '30.5%', left: '68.2%', width: '9.6%', height: '14.0%' } },
//     { wordKey: "intercom", korean: "인터폰", audioUrl: "/audio/apartment/intercom.mp3", targetStyle: { top: '47.5%', left: '75.0%', width: '3.5%', height: '9.0%' } },
//     { wordKey: "loading_zone", korean: "하역구역", audioUrl: "/audio/apartment/loading_zone.mp3", targetStyle: { top: '58.0%', left: '73.5%', width: '11.0%', height: '12.5%' } },
//     { wordKey: "lobby", korean: "로비", audioUrl: "/audio/apartment/lobby.mp3", targetStyle: { top: '42.0%', left: '85.0%', width: '14.0%', height: '24.5%' } },
//     { wordKey: "garden", korean: "정원", audioUrl: "/audio/apartment/garden.mp3", targetStyle: { top: '65.5%', left: '53.0%', width: '6.5%', height: '6.5%' } },
//     { wordKey: "stairs", korean: "계단", audioUrl: "/audio/apartment/stairs.mp3", targetStyle: { top: '60.0%', left: '67.5%', width: '7.0%', height: '6.0%' } },
//     { wordKey: "window", korean: "창문", audioUrl: "/audio/apartment/window.mp3", targetStyle: { top: '17.5%', left: '2.2%', width: '19.3%', height: '20.8%' } },
//     { wordKey: "walking_path", korean: "산책로", audioUrl: "/audio/apartment/walking_path.mp3", targetStyle: { top: '81.0%', left: '25.0%', width: '27.0%', height: '16.0%' } }
//   ];

//   // Sentence patterns pool mapping
//   const sentenceQuestionsPool = masterRegions.map((item) => {
//     let sentence = `I see the ${item.wordKey.replace(/_/g, " ")}.`;
//     if (item.wordKey === "walking_path") sentence = "I walk on the walking path.";
//     else if (item.wordKey === "stairs") sentence = "He is going up the stairs.";
//     else if (item.wordKey === "elevator") sentence = "The elevator goes up and down.";
//     else if (item.wordKey === "mailbox") sentence = "Mom checks the mailbox.";
//     else if (item.wordKey === "playground") sentence = "I play at the playground.";
//     else if (item.wordKey === "window") sentence = "I open the window.";
//     else if (item.wordKey === "entrance") sentence = "I use the entrance.";

//     return {
//       wordKey: item.wordKey,
//       sentence: sentence,
//       displaySentence: sentence.replace(new RegExp(`\\b${item.wordKey.replace(/_/g, " ")}\\b`, 'gi'), "______")
//     };
//   });

//   const listenFindQuestionsPool = masterRegions.slice(0, 10).map((item, idx) => ({
//     id: idx + 1,
//     wordKey: item.wordKey,
//     english: `This is the ${item.wordKey.replace(/_/g, " ")}.`,
//     targetStyle: item.targetStyle
//   }));

//   const findPlaceQuestionsPool = masterRegions.slice(0, 10);

//   useEffect(() => {
//     return () => {
//       stopCurrentAudio();
//       clearInterval(timerIntervalRef.current);
//     };
//   }, []);

//   const stopCurrentAudio = () => {
//     if (currentAudioRef.current) {
//       currentAudioRef.current.pause();
//       currentAudioRef.current = null;
//     }
//     setIsPlaying(false);
//   };

//   const playAudio = (url) => {
//     stopCurrentAudio();
//     if (!url) return;
//     setIsPlaying(true);
//     const audio = new Audio(url);
//     currentAudioRef.current = audio;
//     audio.play().catch(error => console.log("Audio play failed:", error));
//     audio.onended = () => setIsPlaying(false);
//   };

//   const playSentenceAudios = (wordKey) => {
//     stopCurrentAudio();
//     if (!wordKey) return;

//     setIsPlaying(true);
//     const cleanTargetId = wordKey.replace(/_/g, "");
//     const firstAudioPath = `/audio/apartmentSentence/${cleanTargetId}1.mp3`;
//     const secondAudioPath = `/audio/apartmentSentence/${cleanTargetId}2.mp3`;

//     const firstAudio = new Audio(firstAudioPath);
//     currentAudioRef.current = firstAudio;

//     firstAudio.play()
//       .then(() => {
//         firstAudio.onended = () => {
//           const secondAudio = new Audio(secondAudioPath);
//           currentAudioRef.current = secondAudio;
//           secondAudio.play().catch(err => setIsPlaying(false));
//           secondAudio.onended = () => {
//             setIsPlaying(false);
//             currentAudioRef.current = null;
//           };
//         };
//       })
//       .catch(error => {
//         setIsPlaying(false);
//       });
//   };

//   const triggerAudio = (question, forceGameKey = null) => {
//     if (!question) return;
//     const activeGameKey = forceGameKey || selectedGame?.gameKey;

//     if (activeGameKey === 'listen_find' || activeGameKey === 'fill_blank' || activeGameKey === 'sentence_builder') {
//       playSentenceAudios(question.wordKey);
//     } else {
//       playAudio(question.audioUrl);
//     }
//   };

//   // Generate 4 multiple choices helper (Returns complete object containing korean subtitles)
//   const generateMultipleChoices = (correctWord, pool) => {
//     const correctObj = pool.find(item => item.wordKey === correctWord);
//     const choices = [correctObj];
//     const filteredPool = pool.filter(item => item.wordKey !== correctWord);
//     const shuffledPool = [...filteredPool].sort(() => 0.5 - Math.random());
    
//     for (let i = 0; i < 3; i++) {
//       if (shuffledPool[i]) {
//         choices.push(shuffledPool[i]);
//       }
//     }
//     return choices.sort(() => 0.5 - Math.random());
//   };

//   const setupSentenceBuilderQuestion = (question) => {
//     const cleanedText = question.sentence.replace(/[.]/g, ' .');
//     const wordList = cleanedText.split(/\s+/).filter(w => w.length > 0);
//     const structuredWords = wordList.map((w, idx) => ({ id: `${w}-${idx}`, word: w }));
//     const shuffled = [...structuredWords].sort(() => 0.5 - Math.random());
//     setShuffledChips(shuffled);
//     setAssembledWords([]);
//   };

//   // Setup game start
//   const startNewGame = (card) => {
//     stopCurrentAudio();
//     clearInterval(timerIntervalRef.current);
//     setSelectedGame(card);

//     if (card.gameKey === 'color_magic') {
//       const shuffled = [...masterRegions].sort(() => 0.5 - Math.random());
//       setGameQuestions(shuffled);
//       setCurrentQuestionIdx(0);
//       setColoredWords([]); 
//       setColorMagicFeedback(null);
//       setTimeout(() => { playAudio(shuffled[0].audioUrl); }, 400);
//     } else if (card.gameKey === 'fill_blank') {
//       const shuffled = [...sentenceQuestionsPool].sort(() => 0.5 - Math.random());
//       const selectedQuestions = shuffled.slice(0, 5);
//       setGameQuestions(selectedQuestions);
//       setCurrentQuestionIdx(0);
//       setScore(0);
//       setBlankFeedback(null);
//       setSelectedOption(null);
//       // Fill in blank remains English choice arrays
//       const blankOpts = generateMultipleChoices(selectedQuestions[0].wordKey, masterRegions).map(o => o.wordKey);
//       setBlankOptions(blankOpts);
//       setTimeout(() => { playSentenceAudios(selectedQuestions[0].wordKey); }, 400);
//     } else if (card.gameKey === 'sentence_builder') {
//       const shuffled = [...sentenceQuestionsPool].sort(() => 0.5 - Math.random());
//       const selectedQuestions = shuffled.slice(0, 4);
//       setGameQuestions(selectedQuestions);
//       setCurrentQuestionIdx(0);
//       setScore(0);
//       setBuilderFeedback(null);
//       setupSentenceBuilderQuestion(selectedQuestions[0]);
//       setTimeout(() => { playSentenceAudios(selectedQuestions[0].wordKey); }, 400);
//     } else if (card.gameKey === 'speed_match') {
//       // ⚡ Speed Match Initial Setup
//       const shuffled = [...masterRegions].sort(() => 0.5 - Math.random());
//       setGameQuestions(shuffled);
//       setCurrentQuestionIdx(0);
//       setScore(0);
//       setTimeLeft(30);
//       setSpeedFeedback(null);
//       setSelectedSpeedOption(null);
//       setSpeedOptions(generateMultipleChoices(shuffled[0].wordKey, masterRegions));

//       // Active Timer Interval
//       timerIntervalRef.current = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timerIntervalRef.current);
//             alert(`Time is up! ⏱️ Game Over!\nYour Score: ${score}`);
//             closeGameModal();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       const pool = card.gameKey === 'listen_find' ? listenFindQuestionsPool : findPlaceQuestionsPool;
//       const shuffled = [...pool].sort(() => 0.5 - Math.random());
//       const selectedQuestions = shuffled.slice(0, 5); 
//       setGameQuestions(selectedQuestions);
//       setCurrentQuestionIdx(0);
//       setScore(0);
//       setGameFeedback(null);
//       setTimeout(() => { triggerAudio(selectedQuestions[0], card.gameKey); }, 400);
//     }
//   };

//   const currentQuestion = gameQuestions[currentQuestionIdx];

//   // ⚡ Speed Match Choice Action Handler
//   const handleSpeedOptionClick = (selectedOptionObj) => {
//     if (speedFeedback) return;
//     setSelectedSpeedOption(selectedOptionObj.wordKey);

//     if (selectedOptionObj.wordKey === currentQuestion.wordKey) {
//       setScore(prev => prev + 1);
//       setSpeedFeedback('correct');
      
//       setTimeout(() => {
//         setSpeedFeedback(null);
//         setSelectedSpeedOption(null);
//         if (currentQuestionIdx < gameQuestions.length - 1) {
//           const nextIdx = currentQuestionIdx + 1;
//           setCurrentQuestionIdx(nextIdx);
//           setSpeedOptions(generateMultipleChoices(gameQuestions[nextIdx].wordKey, masterRegions));
//         } else {
//           clearInterval(timerIntervalRef.current);
//           alert(`Incredible! 🎉 You matched all 25 words!\nFinal Score: ${score + 1}`);
//           closeGameModal();
//         }
//       }, 800);
//     } else {
//       setSpeedFeedback('wrong');
//       setTimeLeft(prev => Math.max(0, prev - 2)); // Deduct 2 seconds

//       setTimeout(() => {
//         setSpeedFeedback(null);
//         setSelectedSpeedOption(null);
//       }, 800);
//     }
//   };

//   // 🧩 Sentence Builder Auto Match System
//   useEffect(() => {
//     if (selectedGame?.gameKey !== 'sentence_builder' || !currentQuestion || shuffledChips.length > 0) return;
//     const assembledText = assembledWords.map(w => w.word).join(' ').replace(/\s+\./g, '.');
//     const isCorrect = assembledText === currentQuestion.sentence;
//     if (isCorrect) { setScore(prev => prev + 1); setBuilderFeedback('correct'); } 
//     else { setBuilderFeedback('wrong'); }

//     setTimeout(() => {
//       setBuilderFeedback(null);
//       if (currentQuestionIdx < gameQuestions.length - 1) {
//         const nextIdx = currentQuestionIdx + 1;
//         setCurrentQuestionIdx(nextIdx);
//         setupSentenceBuilderQuestion(gameQuestions[nextIdx]);
//         playSentenceAudios(gameQuestions[nextIdx].wordKey);
//       } else {
//         alert(`Congratulations! 🎉 You constructed all sentences!\nFinal Score: ${score + (isCorrect ? 1 : 0)} / 4`);
//         closeGameModal();
//       }
//     }, 1800);
//   }, [assembledWords, shuffledChips]);

//   // 🧩 Sentence Builder Interaction Hooks
//   const handleChipClick = (chip) => {
//     if (builderFeedback) return;
//     setShuffledChips(prev => prev.filter(c => c.id !== chip.id));
//     setAssembledWords(prev => [...prev, chip]);
//   };

//   const handleAssembledClick = (chip) => {
//     if (builderFeedback) return;
//     setAssembledWords(prev => prev.filter(c => c.id !== chip.id));
//     setShuffledChips(prev => [...prev, chip]);
//   };

//   // 📝 Fill in the Blank option handler
//   const handleBlankOptionClick = (option) => {
//     if (blankFeedback) return;
//     setSelectedOption(option);
//     if (option === currentQuestion.wordKey) { setScore(prev => prev + 1); setBlankFeedback('correct'); } 
//     else { setBlankFeedback('wrong'); }

//     setTimeout(() => {
//       setBlankFeedback(null);
//       setSelectedOption(null);
//       if (currentQuestionIdx < gameQuestions.length - 1) {
//         const nextIdx = currentQuestionIdx + 1;
//         setCurrentQuestionIdx(nextIdx);
//         const nextBlankOpts = generateMultipleChoices(gameQuestions[nextIdx].wordKey, masterRegions).map(o => o.wordKey);
//         setBlankOptions(nextBlankOpts);
//         playSentenceAudios(gameQuestions[nextIdx].wordKey);
//       } else {
//         alert(`Game Over! 🎉 You cleared Fill in the Blank!\nFinal Score: ${score + (option === currentQuestion.wordKey ? 1 : 0)} / 5`);
//         closeGameModal();
//       }
//     }, 1500);
//   };

//   // 🎨 Color Magic core action hooks
//   const handleColorMagicTargetClick = (e) => {
//     e.stopPropagation();
//     if (colorMagicFeedback) return;
//     stopCurrentAudio();
//     setColorMagicFeedback('correct');
//     const currentWord = currentQuestion.wordKey;
//     if (!coloredWords.includes(currentWord)) { setColoredWords(prev => [...prev, currentWord]); }

//     setTimeout(() => {
//       setColorMagicFeedback(null);
//       if (currentQuestionIdx < gameQuestions.length - 1) {
//         const nextIdx = currentQuestionIdx + 1;
//         setCurrentQuestionIdx(nextIdx);
//         playAudio(gameQuestions[nextIdx].audioUrl);
//       } else {
//         alert("Wonderful! 🎨 You brought all 25 places to life with colors!");
//         closeGameModal();
//       }
//     }, 1500);
//   };

//   const handleColorMagicBackgroundClick = () => {
//     if (colorMagicFeedback) return;
//     setColorMagicFeedback('wrong');
//     setTimeout(() => setColorMagicFeedback(null), 1000);
//   };

//   // Standard modes click judges
//   const handleTargetClick = (e) => {
//     e.stopPropagation(); 
//     if (gameFeedback) return;
//     stopCurrentAudio();
//     setScore(prev => prev + 1);
//     setGameFeedback('correct');

//     setTimeout(() => {
//       setGameFeedback(null);
//       if (currentQuestionIdx < 4 && currentQuestionIdx < gameQuestions.length - 1) { 
//         const nextIdx = currentQuestionIdx + 1;
//         setCurrentQuestionIdx(nextIdx);
//         triggerAudio(gameQuestions[nextIdx]);
//       } else {
//         alert(`Congratulations! 🎉 You cleared the stage!\nScore: ${score + 1} / 5`);
//         closeGameModal();
//       }
//     }, 1500);
//   };

//   const handleBackgroundClick = () => {
//     if (gameFeedback) return;
//     setGameFeedback('wrong');
//     setTimeout(() => setGameFeedback(null), 1000);
//   };

//   const closeGameModal = () => {
//     stopCurrentAudio();
//     clearInterval(timerIntervalRef.current);
//     setSelectedGame(null);
//     setGameQuestions([]);
//     setCurrentQuestionIdx(0);
//     setScore(0);
//     setGameFeedback(null);
//     setColoredWords([]);
//     setColorMagicFeedback(null);
//     setBlankOptions([]);
//     setBlankFeedback(null);
//     setSelectedOption(null);
//     setShuffledChips([]);
//     setAssembledWords([]);
//     setBuilderFeedback(null);
//     setSpeedOptions([]);
//     setSpeedFeedback(null);
//     setSelectedSpeedOption(null);
//   };

//   return (
//     <div className="min-h-screen bg-[#E2F5EE] p-6 flex flex-col items-center font-sans">
//       {/* Navigation Bar */}
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-4 flex justify-between items-center mb-8">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-[#46B36D] rounded-xl flex items-center justify-center text-white font-bold text-xl">🦖</div>
//           <div>
//             <h1 className="text-xl font-black text-[#3B9C5E] leading-tight">Monster English</h1>
//             <p className="text-xs text-gray-400 font-medium tracking-wide">Place-Based Acquisition</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide drop-shadow-[0_4px_0_rgba(70,179,109,0.4)] mb-3">
//           Apartment Word Adventure
//         </h2>
//         <div className="flex justify-center gap-4 mt-4">
//           <button onClick={() => setCurrentMode('explore')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-all shadow-md ${currentMode === 'explore' ? 'bg-[#46B36D] text-white scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
//             <Search className="w-5 h-5" /> Explore Mode
//           </button>
//           <button onClick={() => setCurrentMode('game')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-all shadow-md ${currentMode === 'game' ? 'bg-[#46B36D] text-white scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
//             <Gamepad2 className="w-5 h-5" /> Game Mode
//           </button>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="w-full max-w-5xl bg-[#FFFDF6] rounded-[2.5rem] border-4 border-white shadow-xl p-6 md:p-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {cards.map((card) => (
//             <div 
//               key={card.id}
//               onClick={() => {
//                 if(card.gameKey === 'find_place' || card.gameKey === 'listen_find' || card.gameKey === 'color_magic' || card.gameKey === 'fill_blank' || card.gameKey === 'sentence_builder' || card.gameKey === 'speed_match') {
//                   startNewGame(card); 
//                 } else {
//                   setSelectedGame(card);
//                 }
//               }}
//               className="relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5"
//             >
//               <div>
//                 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black text-white mb-4 bg-[#46B36D]">{card.id}</span>
//                 <div className="mb-3">{card.icon}</div>
//                 <h3 className="text-lg font-black mb-1.5 text-gray-900">{card.title}</h3>
//                 <p className="text-xs font-semibold leading-relaxed text-gray-400">{card.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ==================== ⚡ Game 6: Speed Match Modal Popup ==================== */}
//       {selectedGame?.gameKey === 'speed_match' && currentQuestion && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-5 relative">
            
//             {/* Header */}
//             <div className="flex justify-between items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl animate-pulse">⚡</span>
//                 <div>
//                   <h2 className="text-xl font-black text-amber-600">Speed Match</h2>
//                   <p className="text-xs text-gray-500 font-semibold">Match words quickly! Incorrect answers penalize you with -2 seconds.</p>
//                 </div>
//               </div>
//               <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Status Status Bar Area */}
//             <div className="flex gap-3 items-center">
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
//                 Correct <span className="text-amber-600 font-black">{score}</span>
//               </span>

//               {/* Dynamic Warning Timer Module */}
//               <div className={`ml-auto flex items-center gap-1.5 border-2 px-4 py-1 rounded-full text-sm font-black transition-colors ${
//                 timeLeft <= 5 ? 'bg-rose-500 text-white border-rose-600 animate-bounce' : 'bg-white text-rose-500 border-rose-200 shadow-sm'
//               }`}>
//                 <Timer className="w-4 h-4" />
//                 <span>{timeLeft}s</span>
//               </div>
//             </div>

//             {/* Target Core Keyword Card Display (English Quiz Text) */}
//             <div className="bg-white border-2 border-gray-200/80 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm relative min-h-[110px]">
//               <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-wide select-none">
//                 {currentQuestion.wordKey.replace(/_/g, " ")}
//               </h2>

//               {/* Visual Instant Deducting Warning */}
//               {speedFeedback === 'wrong' && (
//                 <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center pointer-events-none">
//                   <span className="bg-rose-600 text-white font-black px-5 py-2 rounded-full shadow-md text-sm animate-ping">-2 Seconds Penalty! ⏱️</span>
//                 </div>
//               )}
//               {speedFeedback === 'correct' && (
//                 <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center pointer-events-none">
//                   <span className="bg-emerald-500 text-white font-black px-6 py-2 shadow-md text-sm">✨ Excellent Matching!</span>
//                 </div>
//               )}
//             </div>

//             {/* 🌟 4 Choices Grid (가리키는 보기를 한국어 뜻으로 수정 완료) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {speedOptions.map((optionObj, idx) => {
//                 const isSelected = selectedSpeedOption === optionObj.wordKey;
//                 const isCorrectOption = optionObj.wordKey === currentQuestion.wordKey;

//                 let cardStyle = "bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-md text-gray-800";
//                 if (speedFeedback && isSelected) {
//                   cardStyle = isCorrectOption 
//                     ? "bg-emerald-500 text-white border-emerald-600 scale-[1.01]"
//                     : "bg-rose-500 text-white border-rose-600 opacity-85 scale-[0.98]";
//                 }

//                 return (
//                   <button
//                     key={`speed-opt-${idx}`}
//                     onClick={() => handleSpeedOptionClick(optionObj)}
//                     disabled={speedFeedback === 'correct'}
//                     className={`w-full py-5 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-sm flex items-center justify-center border font-sans ${cardStyle}`}
//                   >
//                     {/* 영문 변수명 대신 매핑된 한글 뜻 출력 */}
//                     <span>{optionObj.korean}</span>
//                   </button>
//                 );
//               })}
//             </div>

//           </div>
//         </div>
//       )}

//       {/* ==================== 🧩 Game 5: Sentence Builder Modal ==================== */}
//       {selectedGame?.gameKey === 'sentence_builder' && currentQuestion && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
//             <div className="flex justify-between items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🧩</span>
//                 <div>
//                   <h2 className="text-xl font-black text-emerald-700">Sentence Builder</h2>
//                   <p className="text-xs text-gray-500 font-semibold">Tap the scattered words below in the correct order to assemble the sentence.</p>
//                 </div>
//               </div>
//               <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex gap-3 items-center">
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
//                 Sentence <span className="text-[#46B36D] font-black">{currentQuestionIdx + 1} / 4</span>
//               </span>
//               <span className="bg-white border-2 border-gray-150 px-4 py-1 rounded-full text-xs font-black text-gray-800 shadow-sm capitalize">
//                 {currentQuestion.wordKey.replace(/_/g, " ")}
//               </span>
//               <button 
//                 onClick={() => playSentenceAudios(currentQuestion.wordKey)}
//                 className="ml-auto flex items-center gap-1.5 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-4 py-1.5 rounded-full text-xs font-black transition-all shadow-sm active:scale-95"
//               >
//                 <Volume2 className="w-3.5 h-3.5" />
//                 <span>Listen</span>
//               </button>
//             </div>

//             <div className="w-full min-h-[100px] p-6 bg-white border-2 border-dashed border-gray-300 rounded-2xl flex flex-wrap gap-2.5 items-center justify-center relative shadow-sm">
//               {assembledWords.length === 0 ? (
//                 <span className="text-gray-400 font-semibold tracking-wide text-sm pointer-events-none select-none">
//                   Click the chips below to build the sentence...
//                 </span>
//               ) : (
//                 assembledWords.map((chip) => (
//                   <button
//                     key={`assembled-${chip.id}`}
//                     onClick={() => handleAssembledClick(chip)}
//                     disabled={!!builderFeedback}
//                     className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl shadow-sm text-lg transition-transform hover:scale-95"
//                   >
//                     {chip.word}
//                   </button>
//                 ))
//               )}

//               {builderFeedback === 'correct' && (
//                 <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center animate-pulse pointer-events-none">
//                   <span className="bg-emerald-500 text-white font-black px-6 py-2 rounded-full shadow-md text-sm">✨ Excellent Job!</span>
//                 </div>
//               )}
//               {builderFeedback === 'wrong' && (
//                 <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center pointer-events-none">
//                   <span className="bg-rose-500 text-white font-black px-6 py-2 rounded-full shadow-md text-sm">❌ Try Again!</span>
//                 </div>
//               )}
//             </div>

//             <div className="bg-white/50 border border-gray-150 rounded-2xl p-5 min-h-[90px] flex flex-wrap gap-3 items-center justify-center">
//               {shuffledChips.map((chip) => (
//                 <button
//                   key={`scat-${chip.id}`}
//                   onClick={() => handleChipClick(chip)}
//                   disabled={!!builderFeedback}
//                   className="px-5 py-3 bg-white border-2 border-gray-200/95 hover:border-emerald-300 hover:shadow-md text-gray-800 font-black text-xl rounded-2xl shadow-sm transition-all active:scale-95 flex items-center justify-center"
//                 >
//                   {chip.word}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ==================== 📝 Game 4: Fill in the Blank Modal ==================== */}
//       {selectedGame?.gameKey === 'fill_blank' && currentQuestion && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-5 relative">
//             <div className="flex justify-between items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">📝</span>
//                 <div>
//                   <h2 className="text-xl font-black text-emerald-700 font-sans">Fill in the Blank</h2>
//                   <p className="text-xs text-gray-500 font-semibold font-sans">Listen to the sentence and choose the correct word to fill in the blank.</p>
//                 </div>
//               </div>
//               <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex gap-3">
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm font-sans">
//                 Question <span className="text-[#46B36D] font-black">{currentQuestionIdx + 1} / 5</span>
//               </span>
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm font-sans">
//                 Correct <span className="font-black">{score}</span>
//               </span>
//               <button 
//                 onClick={() => playSentenceAudios(currentQuestion.wordKey)}
//                 className="ml-auto flex items-center gap-2 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-5 py-1.5 rounded-full text-sm font-black transition-all shadow-sm active:scale-95 font-sans"
//               >
//                 <Volume2 className="w-4 h-4" />
//                 <span>Sentence</span>
//               </button>
//             </div>

//             <div className="bg-white border-2 border-gray-200/80 rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm relative min-h-[120px]">
//               <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-wide text-center leading-relaxed">
//                 {blankFeedback === 'correct' ? currentQuestion.sentence : currentQuestion.displaySentence}
//               </h2>
//               {blankFeedback === 'correct' && (
//                 <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex items-center justify-center animate-pulse">
//                   <span className="bg-emerald-500 text-white font-black px-6 py-2.5 rounded-full shadow-md text-base">✨ Well Done!</span>
//                 </div>
//               )}
//               {blankFeedback === 'wrong' && (
//                 <div className="absolute inset-0 bg-rose-500/10 rounded-2xl flex items-center justify-center">
//                   <span className="bg-rose-500 text-white font-black px-6 py-2.5 rounded-full shadow-md text-base">❌ Oops! Incorrect</span>
//                 </div>
//               )}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {blankOptions.map((option, idx) => {
//                 const isSelected = selectedOption === option;
//                 const isCorrectOption = option === currentQuestion.wordKey;
//                 let cardStyle = "bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md";
//                 if (blankFeedback && isSelected) {
//                   cardStyle = isCorrectOption ? "bg-emerald-500 text-white border-emerald-600 scale-[1.02] shadow-md" : "bg-rose-500 text-white border-rose-600 scale-[0.98] opacity-80";
//                 } else if (blankFeedback && !isSelected && isCorrectOption) {
//                   cardStyle = "bg-emerald-200 border-emerald-400 text-emerald-800";
//                 }

//                 return (
//                   <button
//                     key={`choice-${idx}`}
//                     onClick={() => handleBlankOptionClick(option)}
//                     disabled={!!blankFeedback}
//                     className={`w-full py-5 rounded-2xl font-black text-xl md:text-2xl tracking-wide transition-all shadow-sm flex flex-col items-center justify-center border font-sans ${cardStyle}`}
//                   >
//                     <span>{option.replace(/_/g, " ")}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ==================== 🎨 Game 3: Color Magic Modal ==================== */}
//       {selectedGame?.gameKey === 'color_magic' && currentQuestion && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
//             <div className="flex justify-between items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🎨</span>
//                 <div>
//                   <h2 className="text-xl font-black text-emerald-700">Color Magic</h2>
//                   <p className="text-xs text-gray-500 font-medium">Listen to the word and find it in the picture to bring the matching piece to life!</p>
//                 </div>
//               </div>
//               <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex justify-between items-center bg-amber-50/50 p-3 rounded-2xl border border-amber-100/50">
//               <span className="bg-[#46B36D] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
//                 {currentQuestionIdx + 1} / {gameQuestions.length} Colored
//               </span>
//               <button 
//                 onClick={() => playAudio(currentQuestion.audioUrl)}
//                 className="flex items-center gap-2 bg-[#FFAE34] hover:bg-[#E59A2B] text-white px-4 py-1.5 rounded-full text-sm font-black transition-all shadow-sm active:scale-95 animate-bounce"
//               >
//                 <Volume2 className="w-4 h-4" />
//                 <span className="tracking-wide text-xs">{currentQuestion.wordKey.replace(/_/g, " ")}</span>
//               </button>
//             </div>

//             <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-gray-200 cursor-crosshair bg-slate-100 flex items-center justify-center max-h-[50vh]">
//               <img src={apartmentImg} alt="Apartment Game Map grayscale" className="w-full h-auto max-h-full object-contain select-none pointer-events-none grayscale brightness-90" />
//               {masterRegions.map((region) => {
//                 const isColored = coloredWords.includes(region.wordKey);
//                 if (!isColored) return null;
//                 const { top, left, width, height } = region.targetStyle;
//                 return (
//                   <div
//                     key={`color-patch-${region.wordKey}`}
//                     style={{
//                       position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none',
//                       clipPath: `inset(${top} calc(100% - (${left} + ${width})) calc(100% - (${top} + ${height})) ${left})`
//                     }}
//                     className="transition-all duration-700"
//                   >
//                     <img src={apartmentImg} alt="Apartment Color Patch" className="w-full h-auto max-h-full object-contain select-none pointer-events-none grayscale-0" />
//                   </div>
//                 );
//               })}

//               <div
//                 onClick={handleColorMagicTargetClick}
//                 style={currentQuestion.targetStyle}
//                 className={`absolute rounded-xl transition-all ${colorMagicFeedback === 'correct' ? 'border-4 border-amber-400 bg-amber-300/20 shadow-[0_0_20px_rgba(251,191,36,0.9)] scale-105' : 'border-2 border-transparent hover:border-amber-400/40'}`}
//               />

//               {colorMagicFeedback === 'correct' && (
//                 <div className="absolute inset-0 bg-white/10 flex items-center justify-center pointer-events-none">
//                   <span className="bg-emerald-500 text-white font-black px-6 py-3 rounded-full text-lg shadow-lg animate-bounce">✨ Color Unlocked! ✨</span>
//                 </div>
//               )}
//               {colorMagicFeedback === 'wrong' && (
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white font-black px-4 py-2 rounded-xl text-sm shadow-md animate-ping pointer-events-none">❌ Try again!</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ==================== 🔍 Game 1 & Game 2 Modal ==================== */}
//       {selectedGame && (selectedGame.gameKey === 'find_place' || selectedGame.gameKey === 'listen_find') && currentQuestion && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-[#FFFDF6] rounded-[2rem] border-4 border-white shadow-2xl max-w-3xl w-full p-6 flex flex-col gap-4 relative">
//             <div className="flex justify-between items-start">
//               <div>
//                 <div className="flex items-center gap-2 text-[#46B36D] font-black text-xl mb-1">
//                   <span>{selectedGame.gameKey === 'listen_find' ? '👂 Listen & Find' : '🔍 Find the Place'}</span>
//                 </div>
//                 <p className="text-sm text-gray-500 font-medium">
//                   {selectedGame.gameKey === 'listen_find' ? 'Listen to the sentence and find the correct word in the picture.' : 'Listen to the target word and click the correct place on the map.'}
//                 </p>
//               </div>
//               <button onClick={closeGameModal} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex gap-2">
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">Question <span className="text-[#46B36D] font-black">{currentQuestionIdx + 1} / 5</span></span>
//               <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm">Correct <span className="font-black">{score}</span></span>
//             </div>

//             <div className="bg-white border-2 border-orange-100/70 rounded-2xl p-4 flex items-center gap-4 shadow-sm relative overflow-hidden">
//               <button onClick={() => triggerAudio(currentQuestion)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all flex-shrink-0 ${isPlaying ? 'bg-amber-400 text-white animate-pulse' : 'bg-[#46B36D] text-white hover:bg-[#3B9C5E] active:scale-95'}`}><Volume2 className="w-7 h-7" /></button>
//               <div>
//                 <span className="text-xs font-bold text-amber-600 block mb-0.5">🔊 Listen Carefully</span>
//                 <h2 className="text-lg font-black text-gray-800 tracking-tight leading-tight">Click the place mentioned in the audio!</h2>
//               </div>
//               {gameFeedback === 'correct' && <div className="absolute right-4 px-4 py-2 bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md animate-bounce">✨ That's correct!</div>}
//               {gameFeedback === 'wrong' && <div className="absolute right-4 px-4 py-2 bg-rose-500 text-white font-black text-sm rounded-xl shadow-md animate-ping">❌ Try again!</div>}
//             </div>

//             <div onClick={handleBackgroundClick} className="w-full relative rounded-2xl overflow-hidden shadow-md border border-gray-200 cursor-crosshair bg-slate-100 flex items-center justify-center max-h-[50vh]">
//               <img src={apartmentImg} alt="Apartment Game Map" className="w-full h-auto max-h-full object-contain select-none pointer-events-none" />
//               <div id="correct-target" onClick={handleTargetClick} style={currentQuestion.targetStyle} className={`absolute rounded-xl transition-all ${gameFeedback === 'correct' ? 'border-4 border-amber-400 bg-amber-300/30 shadow-[0_0_20px_rgba(251,191,36,0.9)] scale-105' : 'border-2 border-transparent hover:border-amber-400/40 hover:bg-amber-400/5'}`} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }