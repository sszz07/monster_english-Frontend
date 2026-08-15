import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. userId의 타입을 number에서 string으로 변경했습니다.
interface User {
    userId: string;
    username: string;
    email: string;
    tel: string;
    role: 'STUDENT' | 'TEACHER' | 'ADMIN';
}

interface UserState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
    checkTokenExpiry: () => void;
}

interface JwtPayload {
    exp: number;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isLoggedIn: false,

            checkTokenExpiry: () => {
                const { token } = get();
                if (!token) {
                    set({ isLoggedIn: false, user: null });
                    return;
                }
                try {
                    const decoded = jwtDecode<JwtPayload>(token);
                    const currentTime = Date.now() / 1000;
                    if (decoded.exp < currentTime) {
                        console.log("Token expired, logging out");
                        set({ user: null, token: null, isLoggedIn: false });
                    }
                } catch (err) {
                    set({ user: null, token: null, isLoggedIn: false });
                }
            },

            login: (userData, token) => set({
                user: userData,
                token: token,
                isLoggedIn: true,
            }),

            logout: () => set({
                user: null,
                token: null,
                isLoggedIn: false,
            }),
        }),
        {
            name: 'user-auth-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                state?.checkTokenExpiry();
            },
        }
    )
);
