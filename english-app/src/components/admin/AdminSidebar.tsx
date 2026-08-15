import { NavLink } from "react-router-dom";
// @ts-ignore
import { useUIStore } from "@/store/uiStore";

const menuItems = [
    { name: '회원리스트', href: '/admin/permitList' },
];

const AdminSidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useUIStore();

    const handleMenuClick = () => {
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    return (
        <>
            {/* 모바일 오버레이 */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/*왼쪽 사이드바 추후에 개발 예정*/}
            {/*<aside */}
            {/*    className={`*/}
            {/*        fixed md:sticky top-0 left-0 h-full w-64 bg-gray-50 border-r border-gray-200 */}
            {/*        transform transition-transform duration-300 ease-in-out z-40*/}
            {/*        pt-16 md:pt-0*/}
            {/*        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} */}
            {/*        md:translate-x-0 */}
            {/*        md:h-[calc(100vh-64px)] md:top-16*/}
            {/*    `}*/}
            {/*>*/}
            {/*    <nav className="flex flex-col p-4 space-y-1">*/}
            {/*        {menuItems.map((item) => (*/}
            {/*            <NavLink*/}
            {/*                key={item.name}*/}
            {/*                to={item.href}*/}
            {/*                onClick={handleMenuClick}*/}
            {/*                className={({ isActive }) => `*/}
            {/*                    block px-4 py-3 rounded-lg text-center font-semibold transition-colors              */}
            {/*                `}*/}
            {/*            >*/}
            {/*                {item.name}*/}
            {/*            </NavLink>*/}
            {/*        ))}*/}
            {/*    </nav>*/}
            {/*</aside>*/}
        </>
    );
};

export default AdminSidebar;
