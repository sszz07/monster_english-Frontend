import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/common/Footer";

// 로컬 이미지 임포트
import adventureWorld from "@/assets/image/places/adventureWorld.png";
import dreamLand from "@/assets/image/places/dreamLand.png";
import explore from "@/assets/image/places/explore.png";
import fatacyNature from "@/assets/image/places/fatacyNature.png";
import myHouse from "@/assets/image/places/myHouse.png";
import myTown from "@/assets/image/places/myTown.png";

// place 객체의 타입을 규격화하는 인터페이스 정의
interface PlaceItem {
    id: number;
    name: string;
    img: string;
    path: string;
}

const PlacesPage: React.FC = () => {
    const navigate = useNavigate();

    const staticPlaces: PlaceItem[] = [
        // id 1번인 My House의 경우 /my-house-main 경로로 이동하도록 설정
        { id: 1, name: "My House", img: myHouse, path: "/placed/house/houseMain" },
        { id: 2, name: "My Town", img: myTown, path: "/placed/town/townMain" },
        { id: 3, name: "Fantasy Nature", img: fatacyNature, path: "/english/3" },
        { id: 4, name: "Adventure World", img: adventureWorld, path: "/english/4" },
        { id: 5, name: "Dream Land", img: dreamLand, path: "/english/5" },
        { id: 6, name: "Explore", img: explore, path: "/english/6" },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <div className="max-w-[1600px] mx-auto pt-24 px-6 sm:px-10 flex-grow w-full">
                <div className="mb-16 text-center">
                    <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
                        Select Theme
                    </h1>
                    <p className="text-gray-400 text-xl font-medium">원하시는 테마를 클릭하세요.</p>
                </div>

                {/* lg:grid-cols-3 으로 수정하여 큰 화면에서 한 줄에 3개씩(3x2 구조) 배치되도록 함 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
                    {staticPlaces.map((place: PlaceItem) => (
                        <div
                            key={place.id}
                            // path 값에 따라 동적으로 이동
                            onClick={() => navigate(`${place.path}?placeName=${place.name}`)}
                            className="group relative aspect-square rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-50"
                        >
                            <img
                                src={place.img}
                                alt={place.name}
                                className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlacesPage;