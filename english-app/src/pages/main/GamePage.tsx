import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "@/components/common/Pagination";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";

const ITEMS_PER_PAGE = 4;

interface GameItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
    route: string;
    isReady: boolean;
}

const EDU_GAMES: GameItem[] = [
    { id: 1, title: "Mystery Word Cards", description: "Select a word by reading sentence", imageUrl: "/games/mysterycards.png", route: "/game/mysteryCards", isReady: true },
    { id: 2, title: "Falling Words", description: "Type the falling words", imageUrl: "/games/fallingwords.png", route: "/game/fallingWords", isReady: true },
    { id: 3, title: "Maze Adventure", description: "Escape a maze", imageUrl: "/games/mazeadventure.png", route: "/game/mazeAdventure", isReady: true },
    { id: 4, title: "Cross Word Puzzle", description: "Find words and type", imageUrl: "/games/crosswords.png", route: "/game/crossWordPuzzle", isReady: true },
];

const GamePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState<GameItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const fetchItems = useCallback(async (page: number) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            setItems(EDU_GAMES.slice(start, end));
            setTotalItems(EDU_GAMES.length);
        } catch (error) {
            crossPlatformAlert('오류', '목록 로드 실패');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => { fetchItems(currentPage); }, [currentPage, fetchItems]);

    // 새 창으로 게임 열기
    const handleItemClick = (game: GameItem) => {
        if (!game.isReady) return crossPlatformAlert("알림", "준비 중입니다.");

        // 창 크기 설정
        const width = 1200;
        const height = 950;
        
        // 화면 중앙 좌표 계산
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        // 전체 URL 생성 (현재 도메인 + 게임 라우트)
        const url = `${window.location.origin}${game.route}`;
        
        // 두 번째 인자(name)를 게임 ID별로 다르게 주어, 여러 게임을 동시에 켤 수 있게 함
        window.open(
            url, 
            `game_popup_${game.id}`, 
            `width=${width}, height=${height}, top=${top}, left=${left}, resizable=yes, scrollbars=no`
        );
    };

    return (
        <div className="mx-auto p-5 max-w-[1400px] bg-white">
            <div className="text-center py-10 animate-fade-in-down mb-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] mb-2">Which one you want to play?</h1>
                <p className="text-[#7F8C8D]">Select game for refresh!</p>
            </div>

            {isLoading ? (
                <div className="text-center mt-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {items.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md cursor-pointer transition-shadow"
                        >
                            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-xl font-bold">
                                {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" /> : "GAME"}
                            </div>
                            <div className="p-3">
                                <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{item.title}</h3>
                                <p className="text-sm text-gray-500 truncate">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GamePage;