import React, { useState } from "react";
import Footer from "@/components/common/Footer";

// 🌟 1. 통합 데이터 허브와 공통 타입 선언 임포트
import { ALL_PLACES_DATA, PlaceDataType } from "../index";

// 🌟 2. 팩에 담긴 데이터를 주입받아 게임을 실구동할 컨테이너 임포트
import AdventureContainer from "../../PlacesContainer";

import bakery from "@/assets/image/places/my-town/Bakery.png"; //[cite: 1]
import busStop from "@/assets/image/places/my-town/Bus stop.png"; //[cite: 1]
import cafeteria from "@/assets/image/places/my-town/Cafeteria.png"; //[cite: 1]
import classroom from "@/assets/image/places/my-town/Classroom.png"; //[cite: 1]
import crosswalk from "@/assets/image/places/my-town/Crosswalk.png"; //[cite: 1]
import hospital from "@/assets/image/places/my-town/Hospital(clinic).png"; //[cite: 1]
import pharmacy from "@/assets/image/places/my-town/Pharmacy.png"; //[cite: 1]
import stationeryShop from "@/assets/image/places/my-town/Stationery Shop.png"; //[cite: 1]
import subway from "@/assets/image/places/my-town/Subway.png"; //[cite: 1]
import supermarket from "@/assets/image/places/my-town/Supermarket.png"; //[cite: 1]
import { GameImage } from "@/assets/image/places/my-house/GameImage"; 

// 이미지 임포트
// const classroom = GameImage.houseGameAddress;
// const cafeteria = GameImage.houseGameAddress;
// const busStop = GameImage.houseGameAddress;
// const subway = GameImage.houseGameAddress;
// const crosswalk = GameImage.houseGameAddress;
// const stationeryShop = GameImage.houseGameAddress;
// const supermarket = GameImage.houseGameAddress;
// const pharmacy = GameImage.houseGameAddress;
// const hospital = GameImage.houseGameAddress;

// 데이터 매핑용 인터페이스 스펙 정의 (path 대신 placeKey 사용)
interface PlaceItem {
    id: number;
    name: string;
    img: string;
    placeKey: string; // index.ts 객체의 Key 이름과 100% 매치되어야 함
}

const MyTownPage: React.FC = () => {
    // 현재 선택되어 실행 중인 맵 데이터를 들고 있을 상태값 (null이면 메인 대시보드 표시)
    const [activePlaceData, setActivePlaceData] = useState<PlaceDataType | null>(null);

    // 상단 라인(1~5) 데이터 정의
    const topPlaces: PlaceItem[] = [
        { id: 1, name: "Classroom", img: classroom, placeKey: "classroom" },
        { id: 2, name: "Cafeteria", img: cafeteria, placeKey: "cafeteria" },
        { id: 3, name: "Bus Stop", img: busStop, placeKey: "busstop" },
        { id: 4, name: "Subway", img: subway, placeKey: "subway" },
        { id: 5, name: "Crosswalk", img: crosswalk, placeKey: "crosswalk" },
    ];

    // 하단 라인(6~10) 데이터 정의
    const bottomPlaces: PlaceItem[] = [
        { id: 6, name: "Stationery Shop", img: stationeryShop, placeKey: "stationery" },
        { id: 7, name: "Bakery", img: bakery, placeKey: "bakery" },
        { id: 8, name: "Supermarket", img: supermarket, placeKey: "supermarket" },
        { id: 9, name: "Pharmacy", img: pharmacy, placeKey: "pharmacy" },
        { id: 10, name: "Hospital", img: hospital, placeKey: "hospital" },
    ];

    // 카드 클릭 시 index 보관함 조회를 담당하는 핸들러 함수
    const handleCardClick = (item: PlaceItem) => {
        const targetData = ALL_PLACES_DATA[item.placeKey];
        if (targetData) {
            setActivePlaceData(targetData); // 상태값 변경 ➡️ 팩 꽂기 완료
        } else {
            alert(`"${item.name}" 데이터 파일이 아직 index.ts에 등록되지 않았습니다.`);
        }
    };

    // 공통 카드 컴포넌트 빌더 함수
    const renderCard = (item: PlaceItem) => (
        <button
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="group relative aspect-[16/11] rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 w-full block text-left animate-fadeIn"
        >
            <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-8">
                <h2 className="text-white text-2xl font-black tracking-tight leading-none group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                </h2>
            </div>
        </button>
    );

    // 🌟 조건부 렌더링 검사: 선택한 테마 데이터가 있다면 게임 플레이어로 토글 전환
    if (activePlaceData) {
        return (
            <div className="relative min-h-screen bg-white">
                {/* 메인 리스트로 안전하게 돌아갈 수 있는 뒤로가기 컨트롤러 */}
                <button
                    onClick={() => setActivePlaceData(null)}
                    className="absolute top-6 left-6 z-50 bg-white/90 hover:bg-white text-gray-800 font-bold px-6 py-3 rounded-full shadow-lg transition-all border border-gray-200 text-sm flex items-center gap-2"
                >
                    ⬅️ Back to Themes
                </button>
                
                {/* 꺼내온 테마 알맹이 데이터를 플레이어 엔진에 주입하여 실행합니다 */}
                <AdventureContainer placeData={activePlaceData} />
            </div>
        );
    }

    // 기본 대시보드 (아무것도 선택되지 않은 홈 상태)
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans relative animate-fadeIn">
            <div className="max-w-[1700px] mx-auto pt-24 px-6 sm:px-10 flex-grow w-full">
                <div className="mb-16 text-center">
                    <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
                        Select Town Theme
                    </h1>
                    <h2 className="text-gray-400 text-xl font-medium">방문하고 싶은 장소를 선택하세요.</h2>
                </div>

                <div className="flex flex-col gap-12 pb-32">
                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Public Spaces</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {topPlaces.map(renderCard)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Town Facilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {bottomPlaces.map(renderCard)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MyTownPage;