import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/common/Footer";

import classroom from "@/assets/image/places/town/classroom.png";
import cafeteria from "@/assets/image/places/town/Cafeteria.png";
import busStop from "@/assets/image/places/town/Bus Stop.png";
import subway from "@/assets/image/places/town/Subway.png";
import crosswalk from "@/assets/image/places/town/Crosswalk.png";
import stationeryShop from "@/assets/image/places/town/Stationery Shop.png";
import bakery from "@/assets/image/places/town/Bakery.png";
import supermarket from "@/assets/image/places/town/Supermarket.png";
import pharmacy from "@/assets/image/places/town/Pharmacy.png";
import hospital from "@/assets/image/places/town/Hospital.png";

interface PlaceItem {
    id: number;
    name: string;
    img: string;
    path: string;
}

const MyTownPage: React.FC = () => {
    const navigate = useNavigate();

    // ★ 팝업(모달)에 띄울 현재 선택된 장소의 상태 관리
    const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);

    const topPlaces: PlaceItem[] = [
        { id: 1, name: "Classroom", img: classroom, path: "/placed/town/classroom" },
        { id: 2, name: "Cafeteria", img: cafeteria, path: "/placed/town/cafeteria" },
        { id: 3, name: "Bus Stop", img: busStop, path: "/placed/town/busstop" },
        { id: 4, name: "Subway", img: subway, path: "/placed/town/subway" },
        { id: 5, name: "Crosswalk", img: crosswalk, path: "/placed/town/crosswalk" },
    ];

    const bottomPlaces: PlaceItem[] = [
        { id: 6, name: "Stationery Shop", img: stationeryShop, path: "/placed/town/stationery" },
        { id: 7, name: "Bakery", img: bakery, path: "/placed/town/bakery" },
        { id: 8, name: "Supermarket", img: supermarket, path: "/placed/town/supermarket" },
        { id: 9, name: "Pharmacy", img: pharmacy, path: "/placed/town/pharmacy" },
        { id: 10, name: "Hospital", img: hospital, path: "/placed/town/hospital" },
    ];

    const renderCard = (item: PlaceItem) => (
        <div
            key={item.id}
            // ★ 클릭 시 바로 이동하는 대신 팝업이 뜨도록 상태 업데이트
            onClick={() => setSelectedPlace(item)}
            className="group relative aspect-[16/11] rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 w-full"
        >
            {/* 배경 이미지 */}
            <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* 어두운 오버레이 레이어 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

            {/* 텍스트 정보 */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-8">
                <h2 className="text-white text-2xl font-black tracking-tight leading-none group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                </h2>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans relative">
            <div className="max-w-[1700px] mx-auto pt-24 px-6 sm:px-10 flex-grow w-full">
                <div className="mb-16 text-center">
                    <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
                        Select Town Theme
                    </h1>
                    <p className="text-gray-400 text-xl font-medium">방문하고 싶은 장소를 선택하세요.</p>
                </div>

                <div className="flex flex-col gap-12 pb-32">
                    {/* 상단 라인: 1번 ~ 5번 */}
                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Public Spaces</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {topPlaces.map(renderCard)}
                        </div>
                    </div>

                    {/* 하단 라인: 6번 ~ 10번 */}
                    <div>
                        <h3 className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-4 pl-2">Town Facilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {bottomPlaces.map(renderCard)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* ★ 원본 크기 및 비율에 맞춘 타운 테마 팝업창 구역 */}
            {selectedPlace && (
                <div
                    onClick={() => setSelectedPlace(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-10 animate-fadeIn"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-transparent max-w-7xl w-full flex flex-col items-center justify-center transform transition-all duration-300 scale-100 animate-slideUp cursor-pointer"
                    >
                        {/* 이미지와 버튼들이 묶이는 relative 영역컨테이너 */}
                        <div className="relative max-w-full max-h-[85vh]">
                            {/* 원본 비율을 깨지 않고 화면 높이에 맞추는 최적화 이미지 */}
                            <img
                                src={selectedPlace.img}
                                alt={selectedPlace.name}
                                className="object-contain rounded-[30px] border-4 border-white/20 shadow-2xl"
                            />


                            {/* 이미지 내부 우측 상단에 딱 붙는 닫기(X) 버튼 */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // 카드 전체 클릭 이동 이벤트 방지
                                    setSelectedPlace(null);
                                }}
                                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors font-bold text-2xl shadow-lg border border-white/10"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyTownPage;