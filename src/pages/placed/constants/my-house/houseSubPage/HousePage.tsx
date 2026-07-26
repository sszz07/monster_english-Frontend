import React, { useState } from "react";
import HousePageImg from '@/assets/image/places/house/house.png';

// 🎯 단독주택 인터랙티브 타깃 유형 정의
type InteractionTarget =
    | "chimney" | "ladder" | "atticWindow" | "kitchen" | "fence"
    | "gate" | "livingRoom" | "frontDoor" | "bedroom" | "mailbox" | "sink"
    | "flowerbed" | "lawn"
    | "skylight" | "awning" | "doorknob" | "patioFence"
    | "fencePost" | "houseNumber" | "lawnRight" | "drivewayCar" | "deckChair"
    // 🆕 신규 이미지 빨간 박스 체크 타깃 추가
    | "doorbell" | "patioDoor" | "deck"
    | null;

const HousePage: React.FC = () => {
    const [mode, setMode] = useState<"explore" | "game">("explore");
    const [hintOn, setHintOn] = useState<boolean>(false);
    const [hoveredTarget, setHoveredTarget] = useState<InteractionTarget>(null);
    const [exploredCount, setExploredCount] = useState<number>(0);
    const totalWords = 24;

    // --- 📐 1:1 매칭 좌표 데이터셋 정의 ($160 \times 90$ 비율 엄격 적용) ---

    // 🆕 1. 초인종 (Doorbell) - 현관문 우측 사각형 벨
    const doorbellClip = "polygon(51.8% 52.0%, 54.5% 52.0%, 54.5% 58.5%, 51.8% 58.5%)";
    const doorbellSvg = "82.9,46.8 87.2,46.8 87.2,52.7 82.9,52.7";

    // 🆕 2. 2층 우측 베란다 문 (Patio Door) - 테라스로 통하는 문
    const patioDoorClip = "polygon(83.0% 44.5%, 88.0% 44.5%, 88.0% 63.5%, 83.0% 63.5%)";
    const patioDoorSvg = "132.8,40.1 140.8,40.1 140.8,57.2 132.8,57.2";

    // 🆕 3. 우측 야외 테라스 전체 (Deck) - 테이블과 의자가 있는 우측 데크 공간 전체
    const deckClip = "polygon(79.5% 53.5%, 99.2% 53.5%, 99.2% 74.5%, 79.5% 74.5%)";
    const deckSvg = "127.2,48.2 158.7,48.2 158.7,67.1 127.2,67.1";


    // [기존 구역 데이터셋 유지 및 보정]
    const skylightClip = "polygon(42.5% 14.0%, 49.5% 14.0%, 49.5% 22.5%, 42.5% 22.5%)";
    const skylightSvg = "68.0,12.6 79.2,12.6 79.2,20.2 68.0,20.2";
    const awningClip = "polygon(40.5% 39.5%, 53.5% 39.5%, 53.5% 51.5%, 40.5% 51.5%)";
    const awningSvg = "64.8,35.5 85.6,35.5 85.6,46.3 64.8,46.3";
    const doorknobClip = "polygon(48.2% 58.0%, 51.2% 58.0%, 51.2% 65.0%, 48.2% 65.0%)";
    const doorknobSvg = "77.1,52.2 81.9,52.2 81.9,58.5 77.1,58.5";
    const patioFenceClip = "polygon(10.5% 52.5%, 24.5% 52.5%, 24.5% 73.0%, 10.5% 73.0%)";
    const patioFenceSvg = "16.8,47.2 39.2,47.2 39.2,65.7 16.8,65.7";
    const fencePostClip = "polygon(35.5% 81.0%, 38.8% 81.0%, 38.8% 98.0%, 35.5% 98.0%)";
    const fencePostSvg = "56.8,72.9 62.1,72.9 62.1,88.2 56.8,88.2";
    const houseNumberClip = "polygon(64.8% 78.5%, 69.5% 78.5%, 69.5% 87.0%, 64.8% 87.0%)";
    const houseNumberSvg = "103.7,70.6 111.2,70.6 111.2,78.3 103.7,78.3";
    const lawnRightClip = "polygon(71.5% 75.5%, 77.5% 75.5%, 77.5% 86.5%, 71.5% 86.5%)";
    const lawnRightSvg = "114.4,67.9 124.0,67.9 124.0,77.8 114.4,77.8";
    const drivewayCarClip = "polygon(87.5% 71.0%, 99.0% 71.0%, 99.0% 90.5%, 87.5% 90.5%)";
    const drivewayCarSvg = "140.0,63.9 158.4,63.9 158.4,81.4 140.0,81.4";
    const deckChairClip = "polygon(87.5% 42.5%, 98.5% 42.5%, 98.5% 69.5%, 87.5% 69.5%)";
    const deckChairSvg = "140.0,38.2 157.6,38.2 157.6,62.5 140.0,62.5";
    const chimneyClip = "polygon(18.5% 4.0%, 28.5% 4.0%, 28.5% 21.0%, 18.5% 21.0%)";
    const chimneySvg = "29.6,3.6 45.6,3.6 45.6,18.9 29.6,18.9";
    const ladderClip = "polygon(27.5% 5.0%, 39.5% 5.0%, 39.5% 30.5%, 27.5% 30.5%)";
    const ladderSvg = "44.0,4.5 63.2,4.5 63.2,27.5 44.0,27.5";
    const atticWindowClip = "polygon(61.0% 7.5%, 71.5% 7.5%, 71.5% 27.5%, 61.0% 27.5%)";
    const atticWindowSvg = "97.6,6.7 114.4,6.7 114.4,24.7 97.6,24.7";
    const kitchenClip = "polygon(56.8% 25.5%, 76.5% 25.5%, 76.5% 50.2%, 56.8% 50.2%)";
    const kitchenSvg = "90.9,23.0 122.4,23.0 122.4,45.2 90.9,45.2";
    const fenceClip = "polygon(40.5% 81.0%, 65.5% 81.0%, 65.5% 96.5%, 40.5% 96.5%)";
    const fenceSvg = "64.8,72.9 104.8,72.9 104.8,86.8 64.8,86.8";
    const gateClip = "polygon(2.5% 54.0%, 12.0% 54.0%, 12.0% 75.5%, 2.5% 75.5%)";
    const gateSvg = "4.0,48.6 19.2,48.6 19.2,68.0 4.0,68.0";
    const livingRoomClip = "polygon(24.5% 46.5%, 40.8% 46.5%, 40.8% 71.5%, 24.5% 71.5%)";
    const livingRoomSvg = "39.2,41.9 65.3,41.9 65.3,64.4 39.2,64.4";
    const frontDoorClip = "polygon(43.2% 49.5%, 51.5% 49.5%, 51.5% 72.2%, 43.2% 72.2%)";
    const frontDoorSvg = "69.1,44.6 82.4,44.6 82.4,65.0 69.1,65.0";
    const bedroomClip = "polygon(57.5% 47.5%, 75.5% 47.5%, 75.5% 72.5%, 57.5% 72.5%)";
    const bedroomSvg = "92.0,42.8 120.8,42.8 120.8,65.3 92.0,65.3";
    const mailboxClip = "polygon(61.2% 68.5%, 72.5% 68.5%, 72.5% 89.5%, 61.2% 89.5%)";
    const mailboxSvg = "97.9,61.7 116.0,61.7 116.0,80.6 97.9,80.6";
    const sinkClip = "polygon(77.2% 43.8%, 84.0% 43.8%, 84.0% 61.2%, 77.2% 61.2%)";
    const sinkSvg = "123.5,39.4 134.4,39.4 134.4,55.1 123.5,55.1";
    const flowerbedClip = "polygon(24.5% 72.8%, 35.8% 72.8%, 35.8% 85.5%, 24.5% 85.5%)";
    const flowerbedSvg = "39.2,65.5 57.3,65.5 57.3,77.0 39.2,77.0";
    const lawnClip = "polygon(34.8% 76.8%, 42.8% 76.8%, 42.8% 86.2%, 34.8% 86.2%)";
    const lawnSvg = "55.7,69.1 68.5,69.1 68.5,77.6 55.7,77.6";

    // --- 🌫️ 조명 시스템 상태 연산 ---
    const isAnyLightOn = hintOn || hoveredTarget !== null;
    const baseBrightness = isAnyLightOn ? "brightness(0.15) blur(2px)" : "brightness(1) blur(0px)";

    // 마우스 호버 시 활성화할 clipPath 계산식 매핑
    const clipPathMap: Record<NonNullable<InteractionTarget>, string> = {
        chimney: chimneyClip, ladder: ladderClip, atticWindow: atticWindowClip, kitchen: kitchenClip,
        fence: fenceClip, gate: gateClip, livingRoom: livingRoomClip, frontDoor: frontDoorClip,
        bedroom: bedroomClip, mailbox: mailboxClip, sink: sinkClip, flowerbed: flowerbedClip, lawn: lawnClip,
        skylight: skylightClip, awning: awningClip, doorknob: doorknobClip, deck: deckClip,
        patioFence: patioFenceClip, fencePost: fencePostClip, houseNumber: houseNumberClip,
        lawnRight: lawnRightClip, drivewayCar: drivewayCarClip, deckChair: deckChairClip,
        doorbell: doorbellClip, patioDoor: patioDoorClip
    };
    const activeClipPath = hoveredTarget ? clipPathMap[hoveredTarget] : "none";
    const isTargetLit = (target: InteractionTarget) => hintOn || hoveredTarget === target;

    // 대형화 루프 처리를 위한 데이터 배열 구조화
    const targets: { id: NonNullable<InteractionTarget>; points: string; clip: string }[] = [
        { id: "chimney", points: chimneySvg, clip: chimneyClip },
        { id: "ladder", points: ladderSvg, clip: ladderClip },
        { id: "atticWindow", points: atticWindowSvg, clip: atticWindowClip },
        { id: "kitchen", points: kitchenSvg, clip: kitchenClip },
        { id: "fence", points: fenceSvg, clip: fenceClip },
        { id: "gate", points: gateSvg, clip: gateClip },
        { id: "livingRoom", points: livingRoomSvg, clip: livingRoomClip },
        { id: "frontDoor", points: frontDoorSvg, clip: frontDoorClip },
        { id: "bedroom", points: bedroomSvg, clip: bedroomClip },
        { id: "mailbox", points: mailboxSvg, clip: mailboxClip },
        { id: "sink", points: sinkSvg, clip: sinkClip },
        { id: "flowerbed", points: flowerbedSvg, clip: flowerbedClip },
        { id: "lawn", points: lawnSvg, clip: lawnClip },
        { id: "skylight", points: skylightSvg, clip: skylightClip },
        { id: "awning", points: awningSvg, clip: awningClip },
        { id: "doorknob", points: doorknobSvg, clip: doorknobClip },
        { id: "deck", points: deckSvg, clip: deckClip },
        { id: "patioFence", points: patioFenceSvg, clip: patioFenceClip },
        { id: "fencePost", points: fencePostSvg, clip: fencePostClip },
        { id: "houseNumber", points: houseNumberSvg, clip: houseNumberClip },
        { id: "lawnRight", points: lawnRightSvg, clip: lawnRightClip },
        { id: "drivewayCar", points: drivewayCarSvg, clip: drivewayCarClip },
        { id: "deckChair", points: deckChairSvg, clip: deckChairClip },
        // 신규 타깃 주입
        { id: "doorbell", points: doorbellSvg, clip: doorbellClip },
        { id: "patioDoor", points: patioDoorSvg, clip: patioDoorClip },
    ];

    return (
        <div
            className="min-h-screen flex flex-col font-sans relative w-full items-center justify-start pb-16 selection:bg-blue-200"
            style={{
                background:
                    "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)",
            }}
        >
            {/* 1. 최상단 타이틀 영역 */}
            <div className="text-center pt-12 mb-6">
                <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">
                    House Word Adventure
                </h1>
            </div>

            {/* 2. 모드 전환 탭 버튼 */}
            <div className="flex gap-4 bg-white/40 backdrop-blur-md p-1.5 rounded-full shadow-inner border border-white/40 mb-8">
                <button
                    onClick={() => setMode("explore")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${
                        mode === "explore" ? "bg-[#4CAF50] text-white shadow-md scale-105" : "text-emerald-800 hover:bg-white/30"
                    }`}
                >
                    🔍 Explorer
                </button>
                <button
                    onClick={() => setMode("game")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 text-gray-400 bg-white/20 cursor-not-allowed`}
                    disabled={true}
                >
                    🎮 Game
                </button>
            </div>

            {/* 3. 메인 인터랙티브 보드 판넬 */}
            <div className="w-full max-w-[900px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white flex flex-col gap-4">

                {/* 4. 이미지 프레임 구역 */}
                <div className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100">

                    {/* 🌫️ [1번 레이어] 무대 소등판 배경 */}
                    <div
                        className="w-full h-full transition-all duration-500 ease-in-out"
                        style={{ filter: baseBrightness }}
                    >
                        <img src={HousePageImg} alt="Base" className="w-full h-full object-cover select-none" />
                    </div>

                    {/* 💡 [2번 레이어] 무대 조명판 */}
                    <div
                        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
                        style={{ opacity: isAnyLightOn ? 1 : 0 }}
                    >
                        {hintOn ? (
                            <div className="relative w-full h-full">
                                {targets.map((t) => (
                                    <div key={t.id} className="absolute inset-0" style={{ clipPath: t.clip }}>
                                        <img src={HousePageImg} className="w-full h-full object-cover" alt="hint" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full h-full" style={{ clipPath: activeClipPath }}>
                                <img src={HousePageImg} alt="Highlight" className="w-full h-full object-cover select-none" />
                            </div>
                        )}
                    </div>

                    {/* [3번 레이어: 마우스 이벤트 감지 SVG 코어] */}
                    <svg viewBox="0 0 160 90" className="absolute inset-0 w-full h-full pointer-events-none">
                        {targets.map((target) => (
                            <g
                                key={target.id}
                                className="pointer-events-auto cursor-pointer"
                                onMouseEnter={() => setHoveredTarget(target.id)}
                                onMouseLeave={() => setHoveredTarget(null)}
                            >
                                <polygon
                                    points={target.points}
                                    fill="white"
                                    fillOpacity={isTargetLit(target.id) ? "0.1" : "0.001"}
                                    className={`transition-all duration-300 stroke-[0.8] ${
                                        isTargetLit(target.id) ? "stroke-yellow-400" : "stroke-transparent"
                                    }`}
                                    style={{
                                        filter: isTargetLit(target.id) ? "drop-shadow(0px 0px 6px rgba(255, 215, 0, 1))" : "none",
                                    }}
                                />
                            </g>
                        ))}
                    </svg>
                </div>

                {/* 5. 보드 하단 영역 */}
                <div className="flex justify-between items-center pt-2 px-2 gap-4">
                    <div className="flex-grow flex flex-col gap-1.5">
                        <div className="w-full bg-white rounded-full h-3 border border-gray-150 p-[2px] overflow-hidden">
                            <div
                                className="bg-[#A7DCF0] h-full rounded-full transition-all duration-500"
                                style={{ width: `${(exploredCount / totalWords) * 100}%` }}
                            />
                        </div>
                        <span className="text-xs font-extrabold text-gray-500 pl-1">
                            Voca {exploredCount} / {totalWords}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setHintOn(!hintOn)}
                            className={`font-black text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 whitespace-nowrap
                                ${hintOn
                                ? "bg-amber-500 text-white ring-4 ring-amber-200"
                                : "bg-white text-amber-600 border border-amber-200 hover:bg-amber-50"
                            }`}
                        >
                            {hintOn ? "💡 Hint On" : "✨ Hint"}
                        </button>
                        <button className="bg-[#FFD180] text-[#E65100] font-black text-sm px-6 py-3.5 rounded-2xl shadow-md hover:bg-[#FFE082] transition-transform active:scale-95 flex items-center gap-2 whitespace-nowrap">
                            Game Start
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HousePage;