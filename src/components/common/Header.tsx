import { CircleUserRound, LucideLogOut, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

const Header = () => {
    // isLoggedIn, logout과 함께 user 객체 구조분해 할당
    const { isLoggedIn, logout, user } = useUserStore();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    // 대소문자 혼선 방지 및 트리밍(공백 제거)으로 확실하게 대문자 변환
    const userRole = user?.role?.trim().toUpperCase();


    const handleLogoutClick = () => {
        setShowLogoutModal(true); // 팝업창을 엽니다.
    };


    const handleConfirmLogout = () => {
        logout();
        setIsMenuOpen(false);
        setShowLogoutModal(false); // 팝업창을 닫습니다.
        navigate('/');
    };

    const closeMenu = () => setIsMenuOpen(false);

    // 확실하게 STUDENT가 아니고 TEACHER나 ADMIN인 경우에만 참이 되도록 설정
    const showAdminMenu = isLoggedIn && (userRole === 'TEACHER' || userRole === 'ADMIN');

    return (
        <header className="w-[1270px] flex flex-row justify-between items-center px-5 h-20 bg-white border-b border-gray-200">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to="/" onClick={closeMenu} className='flex items-end gap-4'>
                    <img
                        src="/logo.png"
                        alt="MonsterEdu"
                        className="w-[100px] h-[70px] object-contain"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-10 w-full justify-end mr-7 items-center">
                <Link to="/main/about" className="text-lg font-bold text-gray-700 hover:text-blue-500">About</Link>

                {/* 💡 계산된 showAdminMenu 조건에 따라 Admin 관리자 버튼 노출 */}
                {showAdminMenu && (
                    <Link to="/admin/userList" className="text-lg font-bold text-red-600 hover:text-red-700 border border-red-200 bg-red-50 px-3 py-1 rounded-md transition-colors">
                        Admin
                    </Link>
                )}
            </nav>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-4">
                {isLoggedIn ? (
                    <div className='flex items-center gap-x-3'>
                        {/* TEACHER나 ADMIN인 경우 관리자 승인 페이지 링크 노출 */}
                        {userRole === 'ADMIN' || userRole === 'TEACHER' ? (
                            <Link to="/admin/permitList" className="text-sm font-medium rounded-full border p-2 text-gray-700 bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-600">
                                <CircleUserRound size={25} />
                            </Link>
                        ) : (
                            <Link to="/user/todayGoal" className="text-sm font-medium text-gray-700 rounded-full border p-2 hover:bg-gray-100 hover:text-blue-500">
                                <CircleUserRound size={25} />
                            </Link>
                        )}
                        <button
                            onClick={handleLogoutClick}
                            className="
                                flex items-center gap-2
                                px-5 py-2
                                rounded-full
                                border border-gray-300
                                text-gray-700 text-sm font-medium
                                hover:bg-gray-100 hover:text-red-500
                                transition
                            "
                        >
                            <LucideLogOut size={20} />
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/auth/login"
                              className="
                                flex items-center gap-2
                                px-5 py-2
                                rounded-full
                                border border-gray-300
                                text-gray-700 text-sm font-medium
                                hover:bg-gray-100 hover:text-blue-500
                                transition
                            ">
                            Login
                        </Link>
                        <Link to="/auth/signup" className="
                                flex items-center gap-2
                                px-5 py-2
                                rounded-full
                                border border-gray-300
                                text-gray-700 text-sm font-medium
                                hover:bg-gray-100 hover:text-red-500
                                transition
                            ">
                            SignUp
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-8 h-8 text-black" />
            </button>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMenu}></div>

                    {/* Drawer */}
                    <div className="relative w-64 bg-white h-full shadow-xl flex flex-col p-5">
                        <div className="flex justify-end mb-5">
                            <button onClick={closeMenu}>
                                <X className="w-8 h-8 text-black" />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Link to="/main/about" onClick={closeMenu} className="text-xl font-medium text-center">About</Link>
                            <Link to="/main/english" onClick={closeMenu} className="text-xl font-medium text-center">English</Link>
                            <Link to="/main/genreLab" onClick={closeMenu} className="text-xl font-medium text-center">Genre Lab</Link>
                            <Link to="/main/games" onClick={closeMenu} className="text-xl font-medium text-center">Games</Link>
                            <Link to="/main/store" onClick={closeMenu} className="text-xl font-medium text-center">Store</Link>
                            <Link to="/main/board" onClick={closeMenu} className="text-xl font-medium text-center">Board</Link>

                            {/* [모바일] Admin 메뉴 분기 적용 */}
                            {showAdminMenu && (
                                <Link to="/admin/userList" onClick={closeMenu} className="text-xl font-bold text-center text-red-600 bg-red-50 py-2 rounded-md">
                                    Admin 관리
                                </Link>
                            )}

                            <hr className="border-gray-200 my-2" />

                            {isLoggedIn ? (
                                <>
                                    {userRole === 'ADMIN' || userRole === 'TEACHER' ? (
                                        <Link to="/admin/permitList" onClick={closeMenu} className="text-xl font-medium text-center text-blue-600">
                                            ManagerPage
                                        </Link>
                                    ) : (
                                        <Link to="/user/todayGoal" onClick={closeMenu} className="text-xl font-medium text-center">
                                            MyPage
                                        </Link>
                                    )}
                                    <Link to="/user/cart" onClick={closeMenu} className="text-xl font-medium text-center">Cart</Link>

                                    <button onClick={handleLogoutClick} className="text-xl font-medium text-center text-red-500 pt-4">Logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/auth/login" onClick={closeMenu} className="text-xl font-medium text-center">Login</Link>
                                    <Link to="/auth/signup" onClick={closeMenu} className="text-xl font-medium text-center">Signup</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 로그아웃 모달 팝업창 */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="w-80 rounded-lg bg-white p-6 shadow-xl text-center">
                        <h3 className="text-base font-semibold text-gray-800 mb-7">
                            로그아웃 하시겠습니까?
                        </h3>
                        <div className="flex justify-center gap-3">
                            {/* No 버튼 */}
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="flex-1 py-2 px-4 rounded-md border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                취소
                            </button>
                            {/* Yes 버튼 */}
                            <button
                                onClick={handleConfirmLogout}
                                className="flex-1 py-3 px-7 rounded-md bg-red-500 text-sm font-medium text-white hover:bg-red-600 transition-colors"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;