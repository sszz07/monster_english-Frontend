import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiClientWithFile = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

let isLogoutProcessing = false;


const responseInterceptor = (error: AxiosError) => {
    if (!error.response || !error.config) {
        console.error("[Response Interceptor] 네트워크 에러 또는 응답 없음:", error.message);
        return Promise.reject(error);
    }

    const { status } = error.response;
    const url = error.config.url;

    // 🔥 로그: 에러 상태값과 URL 확인
    console.error(`❌ [API Error] URL: ${url} | Status: ${status}`);

    const isLoginEndpoint = url?.includes('/api/auth/login');

    if (status === 401) {
        if (isLoginEndpoint) {
            console.log("ℹ️ 로그인 엔드포인트에서 401 발생: 아이디/비번 틀림으로 간주");
            return Promise.reject(error);
        }

        // 로그아웃 로직 실행 전 로그
        console.warn("🚫 인증되지 않은 접근(401)입니다. 로그아웃 프로세스를 시작합니다.");

        if (!isLogoutProcessing) {
            isLogoutProcessing = true;
            alert('세션이 만료되었습니다. 다시 로그인해주세요.');
            window.location.href = '/auth/login';

            setTimeout(() => { isLogoutProcessing = false; }, 1500);
        }
    }

    return Promise.reject(error);
};

apiClient.interceptors.response.use(
    (response) => response,
    responseInterceptor
);
apiClientWithFile.interceptors.response.use(
    (response) => response,
    responseInterceptor
);

export default apiClient;
