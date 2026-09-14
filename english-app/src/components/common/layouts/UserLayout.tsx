import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "@/components/user/UserHeader"; // 경로 확인
import UserSidebar from "@/components/user/UserSidebar"; // 경로 확인
import { useUIStore } from "@/store/uiStore";

const UserLayout = () => {
    const { isSidebarOpen, toggleSidebar } = useUIStore();

    // 모바일에서 화면 크기가 커지면 사이드바 상태 초기화
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isSidebarOpen) {
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarOpen]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <UserHeader />

            <div className="flex flex-1 relative">
                {/* 사이드바 */}
                <UserSidebar />

                {/* 메인 콘텐츠 영역 */}
                <main className="flex-1 w-full bg-[#f8f9fa] overflow-y-auto">
                    {/* 렌더링될 때 패딩주기 */}
                    <div className="p-4 md:p-6 w-full max-w-5xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserLayout;
