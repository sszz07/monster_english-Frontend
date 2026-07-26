import React, { useEffect, useState, useCallback } from 'react';
import apiClient, { API_BASE_URL } from "@/api";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import { IoLocationSharp } from "react-icons/io5";


interface Place {
    id: number;
    placeName: string;
    description?: string;
    thumbnailUrl?: string;
}

const EnglishPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [places, setPlaces] = useState<Place[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { label: "All", min: 0, max: 9999 },
        { label: "G1", min: 1, max: 10 },
        { label: "G2", min: 11, max: 20 },
        { label: "G3", min: 21, max: 30 },
        { label: "G4", min: 31, max: 40 },
        { label: "G5", min: 41, max: 50 },
        { label: "G6", min: 51, max: 60 },
    ];

    const colors = ['#e4e4e472'];

    const fetchPlaces = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await apiClient.get<Place[]>('/api/places/getPlaces');
            setPlaces(response.data);
        } catch (error) {
            console.error(error);
            crossPlatformAlert('Error', '데이터 로드 실패');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => { fetchPlaces(); }, [fetchPlaces]);

    const handlePlaceClick = async (
        e: React.MouseEvent<HTMLDivElement>,
        id: number,
        name: string
    ) => {
        console.log("handlePlaceClick called", id);
        e.stopPropagation();

        const width = 1200;
        const height = 900;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        const url = `${window.location.origin}/english/${id}?placeName=${encodeURIComponent(name)}`;

        window.open(
            url,
            `place_popup_${id}`,
            `width=${width}, height=${height}, top=${top}, left=${left}, resizable=yes`
        );

        try {
            await apiClient.post(`/api/place-click-records/places/${id}`);
        } catch (err) {
            console.error("Click record failed:", err);
        }
    };

    const formatName = (name: string) => name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replace(/_/g, " ") : "";

    const getImageUrl = (url: string) => {
        if (!url) return "";
        return url.startsWith("http") ? url : `${API_BASE_URL}${url}`;
    };

    // 카드 렌더링 로직이 중복되므로 함수로 분리
    const renderPlaceCard = (item: Place) => {
        const accentColor = colors[item.id % colors.length];
        return (
            <div
                key={item.id}
                onClick={(e) => handlePlaceClick(e, item.id, item.placeName)}
                className="bg-white rounded-2xl p-2 flex flex-col items-center justify-center border-2 border-transparent shadow-sm hover:shadow-lg hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer aspect-[1.25] overflow-hidden relative"
                style={{ borderColor: accentColor }}
            >
                {item.thumbnailUrl ? (
                    <img
                        src={getImageUrl(item.thumbnailUrl)}
                        alt={item.placeName}
                        className="w-[90%] h-2/3 object-cover mb-2 rounded-2xl"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                ) : (
                    <IoLocationSharp size={32} color={accentColor} className="mb-2 opacity-80" />
                )}

                {item.thumbnailUrl && (
                    <IoLocationSharp size={32} color={accentColor} className="mb-2 opacity-80 hidden" />
                )}

                <h3 className="text-sm md:text-base font-black text-[#34495E] text-center break-words line-clamp-2 px-2">
                    {formatName(item.placeName)}
                </h3>
            </div>
        );
    };

    // 현재 선택된 카테고리에 따라 데이터 필터링
    const getFilteredPlaces = () => {
        const currentCategory = categories.find(c => c.label === activeCategory);
        if (!currentCategory || activeCategory === "All") return places;
        return places.filter(place => place.id >= currentCategory.min && place.id <= currentCategory.max);
    };

    return (
        <div className="max-w-[1280px] min-w-[800px] min-h-screen bg-white mx-auto p-5 pb-20">
            <div className="text-center py-5 animate-fade-in-down">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] mb-2">Where to go?</h1>
                <p className="text-[#7F8C8D]">Select a place for learning english!</p>
            </div>

            {/* 필터 버튼 영역 */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto">
                {categories.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => setActiveCategory(cat.label)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-bold transition-all duration-300
                            ${activeCategory === cat.label
                                ? "bg-[#2C3E50] text-white shadow-md scale-105"
                                : "bg-white text-[#7F8C8D] hover:bg-gray-100 border border-gray-200"
                            }
                        `}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="text-center mt-20 text-[#7F8C8D]">Loading...</div>
            ) : (
                <div className="max-w-[1800px] mx-auto">
                    {activeCategory === "All" ? (
                        categories
                            .filter(cat => cat.label !== "All")
                            .map((cat) => {
                                // 카테고리에 속하는 장소들 필터링
                                const catPlaces = places.filter(p => p.id >= cat.min && p.id <= cat.max);

                                // 해당 레벨에 장소가 없으면 렌더링 X
                                if (catPlaces.length === 0) return null;

                                return (
                                    <div key={cat.label} className="mb-12 animate-fade-in-up">
                                        {/* 카테고리 라벨 */}
                                        <div className="flex items-center mb-4 px-4">
                                            <div className="px-8 py-2 rounded-full text-sm font-bold bg-[#2C3E50] text-white shadow-md">
                                                {cat.label}
                                            </div>
                                            <div className="h-[1px] bg-gray-300 flex-grow ml-4"></div>
                                        </div>

                                        {/* 해당 카테고리의 그리드 */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                            {catPlaces.map(renderPlaceCard)}
                                        </div>
                                    </div>
                                );
                            })
                    ) : (
                        // 특정 카테고리 선택 시 -> 해당 그리드만 노출
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {getFilteredPlaces().length > 0 ? (
                                getFilteredPlaces().map(renderPlaceCard)
                            ) : (
                                <div className="col-span-full text-center py-20 text-gray-400">
                                    Places are not ready
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EnglishPage;


