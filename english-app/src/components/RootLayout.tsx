import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import Header from "@/components/common/Header"; // Header 컴포넌트 경로 확인 필요

const characterImages = [
    "/english/characters/monstersir1.png",
    "/english/characters/monstersir2.png",
    "/english/characters/student1.png",
    "/english/characters/student2.png",
    "/english/characters/student3.png",
    "/english/characters/student4.png",
    "/english/characters/student5.png",
    "/english/characters/student6.png",
    "/english/characters/student7.png",
    "/english/characters/student8.png",
    "/english/characters/student9.png",
    "/english/characters/student10.png",
    "/english/characters/sir_monster.png",
];

export default function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, user } = useUserStore();

    // Zustand 체크
    const [isHydrated, setIsHydrated] = useState(false);

    const headerRef = useRef<HTMLDivElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const unsub = (useUserStore as any).persist.onFinishHydration(() =>
            setIsHydrated(true)
        );
        if ((useUserStore as any).persist.hasHydrated()) setIsHydrated(true);
        return () => unsub();
    }, []);

    // 라우트 세그먼트 파싱
    const pathSegments = location.pathname.split("/");
    const rootSegment = pathSegments[1] || "main";
    const secondSegment = pathSegments[2];

    // 헤더 숨김 처리
    const hideHeaderRoutes = ["game", "english"];
    const shouldHideHeader = hideHeaderRoutes.includes(rootSegment);

    useEffect(() => {
        if (!isHydrated) return;

        const inAdminZone = rootSegment === "admin";
        const inUserZone =
            rootSegment === "user" ||
            (rootSegment === "auth" &&
                (secondSegment === "cart" || secondSegment === "place"));

        // 비로그인 접근 제한
        if (!isLoggedIn && (inAdminZone || inUserZone)) {
            navigate("/auth/login", { replace: true });
            return;
        }

        // 관리자 권한 제한
        // if (inAdminZone && user?.role !== "ADMIN") {
        //     alert("Permission required by admin");
        //     navigate(-1);
        //     return;
        // }
    }, [isHydrated, isLoggedIn, user, rootSegment, secondSegment, navigate]);

    // Header 높이 리사이즈
    useEffect(() => {
        const measure = () => {
            if (shouldHideHeader) {
                setHeaderHeight(0);
                return;
            }
            const h = headerRef.current?.getBoundingClientRect().height ?? 0;
            setHeaderHeight(Math.ceil(h));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [shouldHideHeader]);

    if (!isHydrated) return null;

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Header */}
            <div ref={headerRef} className="flex justify-center relative z-40">
                {!shouldHideHeader && <Header />}
            </div>

            {/* Page */}
            <main className="flex-1 flex flex-col relative z-10">
                <Outlet />
            </main>
        </div>
    );
}

