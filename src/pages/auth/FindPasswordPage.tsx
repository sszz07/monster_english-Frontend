import React, { useState } from "react";
import { auth } from "@/api/firebase"; // 파이어베이스 설정 불러오기
import { sendPasswordResetEmail } from "firebase/auth";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";

export default function FindPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            crossPlatformAlert("", "가입하신 이메일 주소를 입력해주세요.");
            return false;
        }
        if (!emailRegex.test(email)) {
            crossPlatformAlert("", "유효한 이메일 형식이 아닙니다.");
            return false;
        }
        return true;
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail()) return;

        try {
            setIsLoading(true);

            /**
             * [수정 핵심] 백엔드(apiClient) 확인 로직을 완전히 제거했습니다.
             * 이제 파이어베이스 인증 시스템에 직접 메일 발송을 요청합니다.
             */
            await sendPasswordResetEmail(auth, email);

            // 성공 시 알림
            crossPlatformAlert(
                "발송 완료",
                `${email}로 재설정 링크를 보냈습니다. 메일함(또는 스팸함)을 확인해주세요.`
            );
            setEmail("");

        } catch (error: any) {
            /**
             * [에러 처리] 파이어베이스 에러 코드에 따라 메시지를 출력합니다.
             * image_93edd7.png에서 보셨던 '등록되지 않은 이메일' 메시지는 여기서 처리됩니다.
             */
            console.error("Firebase Reset Error:", error.code);

            let errorMsg = "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
            if (error.code === "auth/user-not-found") {
                errorMsg = "파이어베이스에 등록되지 않은 이메일 주소입니다.";
            } else if (error.code === "auth/invalid-email") {
                errorMsg = "이메일 주소 형식이 올바르지 않습니다.";
            }

            crossPlatformAlert("실패", errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-slate-50 px-4 py-10 min-h-full">
            <div className="w-full max-w-[500px] bg-white rounded-[2rem] p-10 shadow-2xl border border-slate-100">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black mb-3 text-slate-900 tracking-tight">FORGOT PASSWORD?</h1>
                    <p className="text-slate-500 text-sm leading-relaxed px-2">
                        가입했던 이메일을 입력해주세요. <br/>이메일 링크 받으신 후 비밀번호 변경해주세요.
                    </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-6">
                    <div className="space-y-2">
                        <input
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-16 border border-slate-200 rounded-2xl px-6 text-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full h-16 text-white rounded-2xl text-xl font-bold transition-all shadow-lg ${
                            isLoading ? "bg-slate-300" : "bg-blue-400"
                        }`}
                    >
                        {isLoading ? "Sending..." : "SEND RESET LINK"}
                    </button>
                </form>
            </div>
        </div>
    );
}