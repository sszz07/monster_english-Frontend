import React, { useEffect, useState, useRef } from 'react';
import Footer from "@/components/common/Footer";
import apiClient, { API_BASE_URL } from "@/api";
import placeMainImg from "@/assets/image/main/place_main.png";
import situationMainImg from "@/assets/image/main/situation_main.png";
import vocaMainImg from "@/assets/image/main/voca_main.png";
import { useUserStore } from "@/store/userStore.ts";
import { useNavigate } from 'react-router-dom';
interface Place {
    id: number;
    placeName: string;
    description?: string;
    thumbnailUrl?: string;
}

const HomePage = () => {
    const { token } = useUserStore();
    const navigate = useNavigate();

    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [isLoadingPlaces, setIsLoadingPlaces] = useState(true);
    const [places, setPlaces] = useState<Place[]>([]);

    // 슬라이더 관련 상태
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // 클릭/드래그 구분용 상태
    const [mouseDownX, setMouseDownX] = useState(0);

    const sliderItems = [
        {
            title: "Places",
            image: placeMainImg,
            desc: "메타버스로 구현된 실제 공간을 탐험하세요.",
            link: "/placed"
        },
        {
            title: "Situation",
            image: situationMainImg,
            desc: "50가지 이상의 실전 상황별 회화 연습.",
            link: "/situations"
        },
        {
            title: "Genre",
            image: vocaMainImg,
            desc: "주제별 필수 어휘를 체계적으로 습득.",
            link: "/voca"
        },
    ];

    // 데이터 패칭
    useEffect(() => {
        const fetchData = async () => {
            if (!token) return;
            try {
                const response = await apiClient.get<Place[]>('/api/places/getPlaces');
                setPlaces(response.data.slice(0, 8));
            } catch (error: any) {
                console.error("❌ 호출 실패", error);
            } finally {
                setIsLoadingPlaces(false);
            }
        };
        fetchData();
    }, [token]);

    // 푸터 가시성 로직
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            setIsFooterVisible(scrollPosition >= documentHeight - 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 슬라이더 드래그 시작
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        const currentStartX = e.pageX - sliderRef.current.offsetLeft;
        setStartX(currentStartX);
        setMouseDownX(e.pageX); // 클릭 시작 지점 저장
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    // 슬라이더 드래그 중
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    // 슬라이더 드래그 종료 및 클릭 판정
    const handleMouseUpOrLeave = (e: React.MouseEvent, link?: string) => {
        if (!isDown) return;

        // 클릭 판정: 마우스를 뗀 지점과 누른 지점의 차이가 5px 미만이면 클릭으로 간주
        const mouseUpX = e.pageX;
        const diff = Math.abs(mouseUpX - mouseDownX);

        setIsDown(false);

        // link가 존재하고 차이가 작을 때만 이동
        if (link && diff < 5) {
            navigate(link);
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
            <div className="bg-[#f5f5f7] py-10 sm:py-14 md:py-16">
                <div
                    ref={sliderRef}
                    className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
                    style={{ scrollPadding: '0 10vw' }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={(e) => handleMouseUpOrLeave(e)}
                    onMouseUp={(e) => handleMouseUpOrLeave(e)}
                >
                    <div className="flex gap-8 sm:gap-12 px-[10vw] w-max min-w-full md:justify-center">
                        {sliderItems.map((item) => (
                            <div
                                key={item.title}
                                // 개별 카드 영역에서 MouseUp이 발생했을 때만 링크 이동 로직 실행
                                onMouseUp={(e) => handleMouseUpOrLeave(e, item.link)}
                                className="snap-center shrink-0 w-[70vw] sm:w-[50vw] md:w-[40vw] xl:w-[700px] rounded-[28px] md:rounded-[36px] bg-white p-6 sm:p-10 shadow-lg mb-10 select-none border border-gray-100 flex flex-col cursor-pointer hover:shadow-xl transition-shadow"
                            >
                                <div className="flex flex-col gap-1.5 mb-6">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm sm:text-base font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="relative w-full overflow-hidden rounded-xl md:rounded-[24px] aspect-[16/9] bg-gray-100 shadow-inner">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        draggable="false"
                                    />
                                </div>

                            </div>
                        ))}
                        
                        <div className="shrink-0 w-[10vw] h-1 md:hidden" aria-hidden="true" />
                    </div>
                </div>
            </div>

            <footer className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out ${isFooterVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-2xl">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default HomePage;