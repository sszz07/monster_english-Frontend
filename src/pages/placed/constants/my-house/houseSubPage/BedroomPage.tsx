import React, {useState} from "react";
import BedroomImg from '@/assets/image/places/house/bedroom.png';

const BedroomPage: React.FC = () => {
    // 탐색 모드 vs 게임 모드 탭 상태 관리
    const [mode, setMode] = useState<"explore" | "game">("explore");
    // 힌트 켜짐/꺼짐 상태 관리
    const [hintOn, setHintOn] = useState<boolean>(false);
    // 탐색 완료한 단어 수 상태 관리 (예시 데이터)
    const [exploredCount, setExploredCount] = useState<number>(0);
    const totalWords = 24;

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
                    Bedroom Word Adventure
                </h1>
            </div>

            {/* 2. 모드 전환 탭 버튼 */}
            <div className="flex gap-4 bg-white/40 backdrop-blur-md p-1.5 rounded-full shadow-inner border border-white/40 mb-8">
                <button
                    onClick={() => setMode("explore")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${
                        mode === "explore"
                            ? "bg-[#4CAF50] text-white shadow-md scale-105"
                            : "text-emerald-800 hover:bg-white/30"
                    }`}
                >
                    🔍 Explorer
                </button>
                <button
                    onClick={() => setMode("game")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${
                        mode === "game"
                            ? "bg-[#4CAF50] text-white shadow-md scale-105"
                            : "text-gray-400 bg-white/20 cursor-not-allowed" // 디자인의 잠금 형태 반영
                    }`}
                    disabled={true} // 디자인 기획에 따라 잠금 처리 시 사용
                >
                    🎮 Game
                </button>
            </div>

            {/* 3. 메인 인터랙티브 보드 판넬 */}
            <div className="w-full max-w-[900px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-4 border-white flex flex-col gap-4">


                {/* 4. 이미지 프레임 구역 (오버레이 타겟 컴포넌트) */}
                <div className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100 group">
                    {/* 실무 적용 시 src={apartmentMainImg} 형태로 바인딩하세요 */}
                    <img
                        src={BedroomImg} // 임시 고화질 빌딩 이미지 배치
                        alt="Apartment Adventure Base"
                        className="w-full h-full object-cover select-none"
                    />

                    {/* 투명 오버레이 레이어 (여기에 추후 자동차, 엘리베이터 등 absolute 좌표 찍기) */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* 예시 인터랙티브 영역 (전 단계 마우스 이벤트 응용 구역) */}
                        <div className="absolute top-[20%] left-[30%] w-[15%] h-[20%] pointer-events-auto cursor-pointer group/item">
                            {/* 이 위치에 단어 히트박스 배치 작업 가능 */}
                        </div>
                    </div>
                </div>

                {/* 5. 보드 하단 프로그레스바 및 게임 시작 구역 */}
                <div className="flex justify-between items-center pt-2 px-2 gap-6">
                    {/* 게이지 바 레이아웃 */}
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

                    {/* 게임 시작하기 버튼 */}
                    <button className="bg-[#FFD180] text-[#E65100] font-black text-sm px-6 py-3.5 rounded-2xl shadow-md hover:bg-[#FFE082] transition-transform active:scale-95 flex items-center gap-2 whitespace-nowrap">
                        Game Start
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BedroomPage;