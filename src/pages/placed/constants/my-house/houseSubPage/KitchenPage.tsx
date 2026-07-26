import React, { useState } from "react";
import KitchenImg from '@/assets/image/places/house/kitchen.png';

// 🎯 주방 인터랙티브 타깃 유형 정의 (정밀 매칭용 타입 단어 추가)
type KitchenTarget =
    | "refrigerator" | "plate" | "oven" | "rangeHood" | "stove"
    | "pot" | "cuttingBoard" | "dishes" | "microwave" | "electricKettle"
    | "blender" | "faucet" | "dishwasher" | "cabinet"
    | "roastedChicken" | "tableMug" | "utensils" | "knifeBlock" | "sink"
    // 🆕 신규 추가: 벽면에 단독으로 걸린 칼
    | "wallKnife"
    | null;

const KitchenPage: React.FC = () => {
    const [mode, setMode] = useState<"explore" | "game">("explore");
    const [hintOn, setHintOn] = useState<boolean>(false);
    const [hoveredTarget, setHoveredTarget] = useState<KitchenTarget>(null);
    const [exploredCount, setExploredCount] = useState<number>(0);
    const totalWords = 20; // 추가 단어 반영하여 카운트 조정

    // --- 📐 16:9 뷰박스(160x90) 기준 정밀 타깃 다각형 좌표 세팅 ---

    // 🎯 [정밀 보정 1] 냉장고 및 하단 냉동고 서랍 전체 (Refrigerator)
    // 상단 도어뿐만 아니라 하단 서랍형 냉동고 라인까지 완전히 감싸도록 영역을 아래로 확장
    const refrigeratorClip = "polygon(24.5% 31.8%, 35.5% 31.8%, 35.5% 69.5%, 24.5% 69.5%)";
    const refrigeratorSvg = "39.2,28.6 56.8,28.6 56.8,62.5 39.2,62.5";

    // 🎯 [정밀 보정 2] 테이블 위 머그컵 (Table Mug)
    // 여백 없이 컵 본체와 손잡이 실루엣에만 딱 들어가도록 타이트하게 픽셀 스냅 적용
    const tableMugClip = "polygon(36.8% 59.5%, 39.0% 59.5%, 39.0% 64.0%, 36.8% 64.0%)";
    const tableMugSvg = "58.8,53.5 62.4,53.5 62.4,57.6 58.8,57.6";

    // 🎯 [정밀 보정 3] 아일랜드 식탁 위 bowl 접시들 (Dishes)
    // 뒤쪽 배치된 칼꽂이 블록을 침범하지 않고 쌓여 있는 볼 접시 면적만 칼같이 커팅
    const dishesClip = "polygon(55.2% 56.2%, 60.5% 56.2%, 60.5% 61.2%, 55.2% 61.2%)";
    const dishesSvg = "88.3,50.5 96.8,50.5 96.8,55.1 88.3,55.1";

    // 🆕 [신규 추가 구역] 벽면에 수평으로 길게 걸린 칼 (Wall Knife)
    const wallKnifeClip = "polygon(59.5% 48.5%, 65.0% 48.5%, 65.0% 51.5%, 59.5% 51.5%)";
    const wallKnifeSvg = "95.2,43.6 104.0,43.6 104.0,46.3 95.2,46.3";


    // [기존 및 나머지 인접 구역 좌표셋]
    const roastedChickenClip = "polygon(27.0% 58.5%, 36.2% 58.5%, 36.2% 67.5%, 27.0% 67.5%)";
    const roastedChickenSvg = "43.2,52.6 57.9,52.6 57.9,60.8 43.2,60.8";

    const utensilsClip = "polygon(62.8% 44.5%, 65.5% 44.5%, 65.5% 54.5%, 62.8% 54.5%)";
    const utensilsSvg = "100.5,40.1 104.8,40.1 104.8,49.1 100.5,49.1";

    const knifeBlockClip = "polygon(59.2% 53.5%, 64.5% 53.5%, 64.5% 62.5%, 59.2% 62.5%)";
    const knifeBlockSvg = "94.7,48.2 103.2,48.2 103.2,56.3 94.7,56.3";

    const sinkClip = "polygon(76.5% 53.5%, 86.8% 53.5%, 86.8% 64.5%, 76.5% 64.5%)";
    const sinkSvg = "122.4,48.2 138.9,48.2 138.9,58.1 122.4,58.1";

    const potClip = "polygon(49.2% 47.0%, 55.8% 47.0%, 55.8% 55.5%, 49.2% 55.5%)";
    const potSvg = "78.7,42.3 89.3,42.3 89.3,50.0 78.7,50.0";

    const plateClip = "polygon(19.5% 59.5%, 26.8% 59.5%, 26.8% 66.5%, 19.5% 66.5%)"; // 왼편 아이 앞 접시
    const plateSvg = "31.2,53.5 42.8,53.5 42.8,59.8 31.2,59.8";

    const ovenClip = "polygon(36.5% 38.5%, 44.5% 38.5%, 44.5% 56.5%, 36.5% 56.5%)";
    const ovenSvg = "58.4,34.7 71.2,34.7 71.2,50.9 58.4,50.9";
    const rangeHoodClip = "polygon(44.0% 26.5%, 56.5% 26.5%, 56.5% 39.0%, 44.0% 39.0%)";
    const rangeHoodSvg = "70.4,23.9 90.4,23.9 90.4,35.1 70.4,35.1";
    const stoveClip = "polygon(45.0% 49.0%, 55.5% 49.0%, 55.5% 59.5%, 45.0% 59.5%)";
    const stoveSvg = "72.0,44.1 88.8,44.1 88.8,53.6 72.0,53.6";
    const cuttingBoardClip = "polygon(56.5% 44.5%, 60.5% 44.5%, 60.5% 54.5%, 56.5% 54.5%)";
    const cuttingBoardSvg = "90.4,40.1 96.8,40.1 96.8,49.1 90.4,49.1";
    const microwaveClip = "polygon(56.5% 31.0%, 64.5% 31.0%, 64.5% 41.5%, 56.5% 41.5%)";
    const microwaveSvg = "90.4,27.9 103.2,27.9 103.2,37.4 90.4,37.4";
    const electricKettleClip = "polygon(70.0% 46.5%, 75.8% 46.5%, 75.8% 55.0%, 70.0% 55.0%)";
    const electricKettleSvg = "112.0,41.9 121.3,41.9 121.3,49.5 112.0,49.5";
    const blenderClip = "polygon(78.5% 43.5%, 83.5% 43.5%, 83.5% 55.5%, 78.5% 55.5%)";
    const blenderSvg = "125.6,39.2 133.6,39.2 133.6,50.0 125.6,50.0";
    const faucetClip = "polygon(83.5% 45.5%, 88.0% 45.5%, 88.0% 56.0%, 83.5% 56.0%)";
    const faucetSvg = "133.6,41.0 140.8,41.0 140.8,50.4 133.6,50.4";
    const dishwasherClip = "polygon(81.5% 57.5%, 89.5% 57.5%, 89.5% 86.5%, 81.5% 86.5%)";
    const dishwasherSvg = "130.4,51.8 143.2,51.8 143.2,77.9 130.4,77.9";
    const cabinetClip = "polygon(85.5% 6.0%, 95.0% 6.0%, 95.0% 43.5%, 85.5% 43.5%)";
    const cabinetSvg = "136.8,5.4 152.0,5.4 152.0,39.2 136.8,39.2";

    // --- 🌫️ 조명 및 이펙트 연산 시스템 ---
    const isAnyLightOn = hintOn || hoveredTarget !== null;
    const baseBrightness = isAnyLightOn ? "brightness(0.25) blur(1px)" : "brightness(1) blur(0px)";

    const clipPathMap: Record<NonNullable<KitchenTarget>, string> = {
        refrigerator: refrigeratorClip, plate: plateClip, oven: ovenClip, rangeHood: rangeHoodClip,
        stove: stoveClip, pot: potClip, cuttingBoard: cuttingBoardClip, dishes: dishesClip,
        microwave: microwaveClip, electricKettle: electricKettleClip, blender: blenderClip,
        faucet: faucetClip, dishwasher: dishwasherClip, cabinet: cabinetClip,
        roastedChicken: roastedChickenClip, tableMug: tableMugClip, utensils: utensilsClip,
        knifeBlock: knifeBlockClip, sink: sinkClip, wallKnife: wallKnifeClip
    };

    const activeClipPath = hoveredTarget ? clipPathMap[hoveredTarget] : "none";
    const isTargetLit = (target: KitchenTarget) => hintOn || hoveredTarget === target;

    const targets: { id: NonNullable<KitchenTarget>; points: string; clip: string }[] = [
        { id: "refrigerator", points: refrigeratorSvg, clip: refrigeratorClip },
        { id: "plate", points: plateSvg, clip: plateClip },
        { id: "oven", points: ovenSvg, clip: ovenClip },
        { id: "rangeHood", points: rangeHoodSvg, clip: rangeHoodClip },
        { id: "stove", points: stoveSvg, clip: stoveClip },
        { id: "pot", points: potSvg, clip: potClip },
        { id: "cuttingBoard", points: cuttingBoardSvg, clip: cuttingBoardClip },
        { id: "dishes", points: dishesSvg, clip: dishesClip },
        { id: "microwave", points: microwaveSvg, clip: microwaveClip },
        { id: "electricKettle", points: electricKettleSvg, clip: electricKettleClip },
        { id: "blender", points: blenderSvg, clip: blenderClip },
        { id: "faucet", points: faucetSvg, clip: faucetClip },
        { id: "dishwasher", points: dishwasherSvg, clip: dishwasherClip },
        { id: "cabinet", points: cabinetSvg, clip: cabinetClip },
        { id: "roastedChicken", points: roastedChickenSvg, clip: roastedChickenClip },
        { id: "tableMug", points: tableMugSvg, clip: tableMugClip },
        { id: "utensils", points: utensilsSvg, clip: utensilsClip },
        { id: "knifeBlock", points: knifeBlockSvg, clip: knifeBlockClip },
        { id: "sink", points: sinkSvg, clip: sinkClip },
        { id: "wallKnife", points: wallKnifeSvg, clip: wallKnifeClip },
    ];

    return (
        <div
            className="min-h-screen flex flex-col font-sans relative w-full items-center justify-start pb-16 selection:bg-blue-200"
            style={{
                background:
                    "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)",
            }}
        >
            <div className="text-center pt-12 mb-6">
                <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">
                    Kitchen Word Adventure
                </h1>
            </div>

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
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base text-gray-400 bg-white/20 cursor-not-allowed"
                    disabled={true}
                >
                    🎮 Game
                </button>
            </div>

            <div className="w-full max-w-[900px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white flex flex-col gap-4">
                <div className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100">
                    <div className="w-full h-full transition-all duration-500 ease-in-out" style={{ filter: baseBrightness }}>
                        <img src={KitchenImg} alt="Kitchen Base" className="w-full h-full object-cover select-none" />
                    </div>

                    <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300" style={{ opacity: isAnyLightOn ? 1 : 0 }}>
                        {hintOn ? (
                            <div className="relative w-full h-full">
                                {targets.map((t) => (
                                    <div key={t.id} className="absolute inset-0" style={{ clipPath: t.clip }}>
                                        <img src={KitchenImg} className="w-full h-full object-cover" alt="hint" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full h-full" style={{ clipPath: activeClipPath }}>
                                <img src={KitchenImg} alt="Highlight" className="w-full h-full object-cover select-none" />
                            </div>
                        )}
                    </div>

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
                                    className={`transition-all duration-300 stroke-[0.6] ${
                                        isTargetLit(target.id) ? "stroke-yellow-400" : "stroke-transparent"
                                    }`}
                                    style={{
                                        filter: isTargetLit(target.id) ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none",
                                    }}
                                />
                            </g>
                        ))}
                    </svg>
                </div>

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

export default KitchenPage;