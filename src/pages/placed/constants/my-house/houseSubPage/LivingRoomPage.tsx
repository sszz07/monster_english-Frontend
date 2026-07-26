import React, { useState } from "react";
import LivingRoomImg from '@/assets/image/places/house/livingroom.png';

// 🎯 거실 인터랙티브 타깃 유형 정의 (총 14개 구역 유지 및 신규 강조 구역 정밀 반영)
type LivingRoomTarget =
    | "clock" | "tv" | "vases" | "bookcase" | "floorLamp"
    | "sideTable"  // 🆕 6번: 체크된 안락의자 뒤 사이드 테이블 & 책 구역으로 변경
    | "chandelier" | "paintings" | "plant" | "curtain"
    | "mirror"     // 🆕 11번: 체크된 전신 거울 구역 정밀 최적화
    | "airPurifier" | "fireplace"
    | "massageChair" // 🆕 14번: 체크된 안마의자 및 하단 쿠션 구역 정밀 통합
    | null;

const LivingRoomPage: React.FC = () => {
    const [mode, setMode] = useState<"explore" | "game">("explore");
    const [hintOn, setHintOn] = useState<boolean>(false);
    const [hoveredTarget, setHoveredTarget] = useState<LivingRoomTarget>(null);
    const [exploredCount, setExploredCount] = useState<number>(0);
    const totalWords = 14;

    // --- 📐 16:9 뷰박스(160x90) 기준 정밀 타깃 다각형 좌표 세팅 ---

    // 1. 벽시계 (Clock)
    const clockClip = "polygon(14.5% 12.0%, 20.5% 12.0%, 20.5% 28.5%, 14.5% 28.5%)";
    const clockSvg = "23.2,10.8 32.8,10.8 32.8,25.6 23.2,25.6";

    // 2. TV
    const tvClip = "polygon(11.0% 26.5%, 24.5% 26.5%, 24.5% 57.0%, 11.0% 57.0%)";
    const tvSvg = "17.6,23.8 39.2,23.8 39.2,51.3 17.6,51.3";

    // 3. 도자기 병 세트 (Vases)
    const vasesClip = "polygon(2.5% 62.5%, 22.0% 62.5%, 22.0% 95.5%, 2.5% 95.5%)";
    const vasesSvg = "4.0,56.2 35.2,56.2 35.2,85.9 4.0,85.9";

    // 4. 책장 (Bookcase)
    const bookcaseClip = "polygon(23.5% 16.5%, 46.5% 16.5%, 46.5% 59.5%, 23.5% 59.5%)";
    const bookcaseSvg = "37.6,14.9 74.4,14.9 74.4,53.6 37.6,53.6";

    // 5. 장스탠드 조명 (Floor Lamp)
    const floorLampClip = "polygon(23.0% 34.5%, 32.5% 34.5%, 32.5% 62.0%, 23.0% 62.0%)";
    const floorLampSvg = "36.8,31.0 52.0,31.0 52.0,55.8 36.8,55.8";

    // 🔴 [신규 강조 체크 반영] 6. 사이드 테이블 & 책 (Side Table & Books)
    // 안락의자 뒤편에 강하게 체크된 작은 원형 테이블과 그 위의 책더미 구역입니다.
    const sideTableClip = "polygon(31.0% 59.5%, 37.5% 59.5%, 37.5% 72.5%, 31.0% 72.5%)";
    const sideTableSvg = "49.6,53.5 60.0,53.5 60.0,65.2 49.6,65.2";

    // 7. 샹들리에 조명 (Chandelier)
    const chandelierClip = "polygon(43.5% 7.5%, 57.5% 7.5%, 57.5% 25.5%, 43.5% 25.5%)";
    const chandelierSvg = "69.6,6.8 92.0,6.8 92.0,23.0 69.6,23.0";

    // 8. 액자 세트 (Paintings)
    const paintingsClip = "polygon(46.5% 27.5%, 55.5% 27.5%, 55.5% 50.5%, 46.5% 50.5%)";
    const paintingsSvg = "74.4,24.7 88.8,24.7 88.8,45.4 74.4,45.4";

    // 9. 화분 (Plant)
// [요청 반영] 윗부분을 기존 50.0%에서 52.5%로 아래로 내려 영역을 조금 줄임
    const plantClip = "polygon(47.5% 52.5%, 55.5% 52.5%, 55.5% 70.0%, 47.5% 70.0%)";
    const plantSvg = "76.0,47.25 88.8,47.25 88.8,63.0 76.0,63.0";

    // 10. 창문 커튼 (Curtain)
// [요청 반영] 상하좌우 모든 방향에 마진을 주어 조금씩 늘린 좌표셋
    const curtainClip = "polygon(53.0% 18.0%, 77.5% 18.0%, 77.5% 56.0%, 53.0% 56.0%)";
    const curtainSvg = "84.8,16.2 124.0,16.2 124.0,50.4 84.8,50.4";

    // 🔴 [신규 강조 체크 반영] 11. 전신 거울 (Mirror)
    // 소파 뒤 우측에 길게 테두리 쳐진 전신 거울 오브젝트 전체 영역입니다.
    const mirrorClip = "polygon(71.0% 36.0%, 81.0% 36.0%, 81.0% 71.0%, 71.0% 71.0%)";
    const mirrorSvg = "113.6,32.4 129.6,32.4 129.6,63.9 113.6,63.9";

    // 12. 공기청정기 (Air Purifier)
    const airPurifierClip = "polygon(68.0% 62.5%, 79.3% 62.5%, 79.3% 86.5%, 68.0% 86.5%)";
    const airPurifierSvg = "108.8,56.2 126.88,56.2 126.88,77.85 108.8,77.85";

    // 13. 벽난로 (Fireplace)
    const fireplaceClip = "polygon(76.0% 44.5%, 93.2% 44.5%, 93.2% 75.0%, 76.0% 75.0%)";
    const fireplaceSvg = "121.6,40.1 149.1,40.1 149.1,67.5 121.6,67.5";

    // 🔴 [신규 강조 체크 반영] 14. 안마의자 & 하단 바닥 쿠션 (Massage Chair & Floor Cushions)
    // 우측 하단에 거대하게 감싸듯 체크된 안마의자와 그 앞에 쌓여있는 쿠션 더미 전체 통합 구역입니다.
    const massageChairClip = "polygon(80.5% 52.0%, 98.5% 52.0%, 98.5% 96.5%, 80.5% 96.5%)";
    const massageChairSvg = "128.8,46.8 157.6,46.8 157.6,86.8 128.8,86.8";

    // --- 🌫️ 조명 및 이펙트 연산 함수 ---
    const isAnyLightOn = hintOn || hoveredTarget !== null;
    const baseBrightness = isAnyLightOn ? "brightness(0.25) blur(1px)" : "brightness(1) blur(0px)";

    let activeClipPath = "none";
    if (hoveredTarget === "clock") activeClipPath = clockClip;
    else if (hoveredTarget === "tv") activeClipPath = tvClip;
    else if (hoveredTarget === "vases") activeClipPath = vasesClip;
    else if (hoveredTarget === "bookcase") activeClipPath = bookcaseClip;
    else if (hoveredTarget === "floorLamp") activeClipPath = floorLampClip;
    else if (hoveredTarget === "sideTable") activeClipPath = sideTableClip;
    else if (hoveredTarget === "chandelier") activeClipPath = chandelierClip;
    else if (hoveredTarget === "paintings") activeClipPath = paintingsClip;
    else if (hoveredTarget === "plant") activeClipPath = plantClip;
    else if (hoveredTarget === "curtain") activeClipPath = curtainClip;
    else if (hoveredTarget === "mirror") activeClipPath = mirrorClip;
    else if (hoveredTarget === "airPurifier") activeClipPath = airPurifierClip;
    else if (hoveredTarget === "fireplace") activeClipPath = fireplaceClip;
    else if (hoveredTarget === "massageChair") activeClipPath = massageChairClip;

    const isTargetLit = (target: LivingRoomTarget) => hintOn || hoveredTarget === target;

    return (
        <div
            className="min-h-screen flex flex-col font-sans relative w-full items-center justify-start pb-16 selection:bg-blue-200"
            style={{
                background:
                    "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)",
            }}
        >
            {/* 1. 최상단 타이틀 */}
            <div className="text-center pt-12 mb-6">
                <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">
                    LivingRoom Word Adventure
                </h1>
            </div>

            {/* 2. 모드 셀렉터 */}
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

            {/* 3. 메인 디스플레이 보드 */}
            <div className="w-full max-w-[900px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white flex flex-col gap-4">

                {/* 4. 이미지 및 인터랙티브 포커스 프레임 */}
                <div className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100">

                    {/* 배경 레이어 (어두워지는 효과) */}
                    <div className="w-full h-full transition-all duration-500 ease-in-out" style={{ filter: baseBrightness }}>
                        <img src={LivingRoomImg} alt="Base" className="w-full h-full object-cover select-none" />
                    </div>

                    {/* 하이라이트 레이어 (선택 영역만 원래 밝기로 노출) */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300" style={{ opacity: isAnyLightOn ? 1 : 0 }}>
                        {hintOn ? (
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0" style={{ clipPath: clockClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: tvClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: vasesClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: bookcaseClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: floorLampClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: sideTableClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: chandelierClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: paintingsClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: plantClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: curtainClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: mirrorClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: airPurifierClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: fireplaceClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                                <div className="absolute inset-0" style={{ clipPath: massageChairClip }}><img src={LivingRoomImg} className="w-full h-full object-cover" /></div>
                            </div>
                        ) : (
                            <div className="w-full h-full" style={{ clipPath: activeClipPath }}>
                                <img src={LivingRoomImg} alt="Highlight" className="w-full h-full object-cover select-none" />
                            </div>
                        )}
                    </div>

                    {/* SVG 센서 매핑 영역 */}
                    <svg viewBox="0 0 160 90" className="absolute inset-0 w-full h-full pointer-events-none">

                        {/* 1. 벽시계 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("clock")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={clockSvg} fill="white" fillOpacity={isTargetLit("clock") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("clock") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("clock") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 2. TV */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("tv")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={tvSvg} fill="white" fillOpacity={isTargetLit("tv") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("tv") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("tv") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 3. 도자기 병 세트 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("vases")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={vasesSvg} fill="white" fillOpacity={isTargetLit("vases") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("vases") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("vases") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 4. 책장 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("bookcase")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={bookcaseSvg} fill="white" fillOpacity={isTargetLit("bookcase") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("bookcase") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("bookcase") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 5. 장스탠드 조명 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("floorLamp")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={floorLampSvg} fill="white" fillOpacity={isTargetLit("floorLamp") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("floorLamp") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("floorLamp") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 🔴 [신규 체크 터치 센서] 6. 안락의자 뒤 사이드 테이블 & 책 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("sideTable")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={sideTableSvg} fill="white" fillOpacity={isTargetLit("sideTable") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("sideTable") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("sideTable") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 7. 샹들리에 조명 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("chandelier")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={chandelierSvg} fill="white" fillOpacity={isTargetLit("chandelier") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("chandelier") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("chandelier") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 8. 액자 세트 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("paintings")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={paintingsSvg} fill="white" fillOpacity={isTargetLit("paintings") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("paintings") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("paintings") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 9. 화분 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("plant")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={plantSvg} fill="white" fillOpacity={isTargetLit("plant") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("plant") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("plant") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 10. 창문 커튼 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("curtain")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={curtainSvg} fill="white" fillOpacity={isTargetLit("curtain") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("curtain") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("curtain") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 🔴 [신규 체크 터치 센서] 11. 전신 거울 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("mirror")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={mirrorSvg} fill="white" fillOpacity={isTargetLit("mirror") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("mirror") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("mirror") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 12. 공기청정기 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("airPurifier")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={airPurifierSvg} fill="white" fillOpacity={isTargetLit("airPurifier") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("airPurifier") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("airPurifier") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 13. 壁난로 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("fireplace")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={fireplaceSvg} fill="white" fillOpacity={isTargetLit("fireplace") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("fireplace") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("fireplace") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                        {/* 🔴 [신규 체크 터치 센서] 14. 안마의자 & 쿠션 */}
                        <g className="pointer-events-auto cursor-pointer" onMouseEnter={() => setHoveredTarget("massageChair")} onMouseLeave={() => setHoveredTarget(null)}>
                            <polygon points={massageChairSvg} fill="white" fillOpacity={isTargetLit("massageChair") ? "0.1" : "0.001"} className={`transition-all duration-300 stroke-[0.6] ${isTargetLit("massageChair") ? "stroke-yellow-400" : "stroke-transparent"}`} style={{ filter: isTargetLit("massageChair") ? "drop-shadow(0px 0px 5px rgba(255,215,0,0.8))" : "none" }} />
                        </g>

                    </svg>
                </div>

                {/* 5. 보드 하단 스코어 / 컨트롤바 */}
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

export default LivingRoomPage;