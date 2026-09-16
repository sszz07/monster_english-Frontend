import React, { useState } from "react";
import Footer from "@/components/common/Footer";

// 🌟 1. [index.ts] 통합 데이터 허브와 공통 타입 선언 임포트
import { ALL_PLACES_DATA, PlaceDataType } from "../index";

// 🌟 2. 팩에 담긴 데이터를 주입받아 게임을 실구동할 컨테이너 임포트
import AdventureContainer from "../../PlacesContainer";

import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage"; 

// 이미지 임포트
const apartmentImage = ThemeImage.apartment;
const houseImage = ThemeImage.house;
const livingroomImage = ThemeImage.livingroom;
const kitchenImage = ThemeImage.kitchen;
const bathroomImage = ThemeImage.bathroom;
const bedroomImage = ThemeImage.bedroom;
const playgroundImage = ThemeImage.playground;
const recyclingImage = ThemeImage.recycling;
const calendarImage = ThemeImage.calendar;
const familyImage = ThemeImage.family;
// 데이터 매핑용 인터페이스 스펙 정의
interface PlaceItem {
    id: number;
    name: string;
    img: string;
    placeKey: string; // index.ts 객체의 Key 이름과 100% 매치되어야 함
}

// 🌟 컴포넌트 이름을 요청하신 'HouseMain'으로 변경했습니다.
const HouseMain: React.FC = () => {
    // 현재 선택되어 실행 중인 맵 데이터를 들고 있을 상태값 (null이면 메인 대시보드 표시)
    const [activePlaceData, setActivePlaceData] = useState<PlaceDataType | null>(null);

    // 상단 라인(1~5) 데이터 정의
  // 상단 라인(1~5) 데이터 정의
    const topPlaces: PlaceItem[] = [
        { id: 1, name: "Apartment", img: apartmentImage, placeKey: "apartment" },
        { id: 2, name: "House", img: houseImage, placeKey: "house" },
        { id: 3, name: "Living Room", img: livingroomImage, placeKey: "livingroom" },
        { id: 4, name: "Kitchen", img: kitchenImage, placeKey: "kitchen" },
        { id: 5, name: "Bathroom", img: bathroomImage, placeKey: "bathroom" },
    ];

    // 하단 라인(6~10) 데이터 정의
    const bottomPlaces: PlaceItem[] = [
        { id: 6, name: "Bedroom", img: bedroomImage, placeKey: "bedroom" },
        { id: 7, name: "Playground", img: playgroundImage, placeKey: "playground" },
        { id: 8, name: "Recycling", img: recyclingImage, placeKey: "recycling" },
        { id: 9, name: "Calendar", img: calendarImage, placeKey: "calendar" },
        { id: 10, name: "Family", img: familyImage, placeKey: "family" },
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
                        Select House Theme
                    </h1>
                    <h2 className="text-gray-400 text-xl font-medium">원하시는 테마를 클릭하세요.</h2>
                </div>

                <div className="flex flex-col gap-12 pb-32">
                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Top Stages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {topPlaces.map(renderCard)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Bottom Stages</h3>
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

export default HouseMain;