import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import AdminLayout from './components/layouts/AdminLayout';
import SignupPage from './pages/auth/SignupPage';
import ConfirmPasswordPage from './pages/auth/ConfirmPassword';
import WithdrawPage from './pages/auth/WithdrawPage';
import EditProfilePage from './pages/auth/EditProfilePage';
import EnglishPage from './pages/main/EnglishPage';
import PlacePage from './pages/placed/Place';
import CheckoutPage from './pages/user/CheckoutPage';
import AboutPage from './pages/main/AboutPage';
import TermsService from './pages/policy/TermsService';
import TermsPrivacy from './pages/policy/TermsPrivacy';
import AdminPlaceSetter from './utils/imageminer/AdminPlaceSetter';
import GenreLab from './pages/main/GenreLab';
import PrivacyPage from './pages/auth/PrivacyPage';
import FindPasswordPage from "./pages/auth/FindPasswordPage";
import RootLayout from "@/components/RootLayout.tsx";
import SplashScreen from './components/common/SplashScreen';
import UserList from "@/pages/admin/UserList";
import MyHousePage from "@/pages/placed/constants/my-house/HouseMain";
import MyTownPage from "@/pages/placed/constants/my-town/TownMain";



import ApartmentGame from '@/pages/placed/constants/my-house/houseGamePage/ApartmentGame';

function App() {
    return (
        <>
            <SplashScreen />

            {/* 라우트 전체 이 정표*/}
            <Routes>
                {/* RootLayout이 헤더 및 전역 권한 체크 담당 
                /는 메인을 의미한다. path는 주소를 의미하고 element는 프로젝트의 파일 위치를 의미한다
                */}
                <Route path="/" element={<RootLayout />}>

                    {/* Home */}
                    <Route index element={<HomePage />} />

                    {/* Auth */}
                    <Route path="auth">
                        <Route path="login" element={<LoginPage />} />
                        <Route path="find-password" element={<FindPasswordPage />} />
                        <Route path="signup" element={<SignupPage />} />
                        <Route path="privacy" element={<PrivacyPage />} />
                        <Route
                            path="confirm-edit"
                            element={<ConfirmPasswordPage nextPath="/auth/edit-profile" subtitle="Please enter your password for edit" />}
                        />
                        <Route path="edit-profile" element={<EditProfilePage />} />
                        <Route
                            path="confirm-withdraw"
                            element={<ConfirmPasswordPage nextPath="/auth/withdraw" subtitle="Please enter your password for withdraw" />}
                        />
                        <Route path="withdraw" element={<WithdrawPage />} />
                    </Route>

                    {/* 메인 메뉴 */}
                    <Route path="main">
                        {/* 학원 소개 */}
                        <Route path="about" element={<AboutPage />} />

                        {/* 게시판 */}

                        {/* 영어 학습 */}
                        <Route path="english" element={<EnglishPage />} />
                        <Route path="genreLab" element={<GenreLab />} />


                    </Route>

                    {/* 장소 */}
                    <Route path="placed">
                        {/* /placed 접속 시 Place.tsx를 보여줌 */}
                        <Route path="" element={<PlacePage />} />
                        {/* /placed/about 접속 시 MyHouse.tsx를 보여줌 (기존 AboutPage 역할) */}
                        <Route path="house/houseMain" element={<MyHousePage />} />
                        <Route path="town/townMain" element={<MyTownPage />} />

                        {/* House 및 세부 공간들 */}
                        <Route path="house/houseSubPage">
                            
                     
                            

                        </Route>
                        <Route path="house/houseGamePage">
                            <Route path="apartmentGame" element={< ApartmentGame/>} />
                        </Route>

                        <Route path="town/townMain" element={<MyTownPage />} />
                    </Route>





                    {/* Admin Routes */}
                    <Route path="admin" element={<AdminLayout />}>

                        {/* 회원 관리 */}
                        <Route path="userList" element={<UserList />} />

                    </Route>



                    {/* English Detail */}

                    <Route path="user/checkout" element={<CheckoutPage />} />
                    {/* 정책 */}
                    <Route path="policy/service" element={<TermsService />} />
                    <Route path="policy/privacy" element={<TermsPrivacy />} />

                    {/* 404 Not Found */}
                    <Route path="*" element={
                        <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
                            <h1 className="text-6xl font-bold text-gray-300">404</h1>
                            <p className="text-xl text-gray-500 mt-4">Page Not Found</p>
                        </div>
                    } />

                    {/* todo: 위치 설정 페이지 제거 */}
                    <Route path="miner" element={<AdminPlaceSetter />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
