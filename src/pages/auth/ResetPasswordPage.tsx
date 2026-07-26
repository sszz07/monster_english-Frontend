import React, { useState, useEffect } from "react";
import { auth } from "@/api/firebase";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import { useSearchParams, useNavigate } from "react-router-dom"; // 혹은 Next.js의 useRouter

export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // URL에서 oobCode 추출 (Firebase가 메일 링크에 붙여주는 파라미터)
    const oobCode = searchParams.get("oobCode");

    const handleConfirmReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!oobCode) {
            crossPlatformAlert("오류", "유효하지 않은 접근입니다.");
            return;
        }
        if (newPassword.length < 6) {
            crossPlatformAlert("알림", "비밀번호는 6자리 이상이어야 합니다.");
            return;
        }

        try {
            setIsLoading(true);
            // 1. 코드가 유효한지 확인 (선택 사항이나 권장)
            await verifyPasswordResetCode(auth, oobCode);

            // 2. 실제 비밀번호 변경 실행
            await confirmPasswordReset(auth, oobCode, newPassword);

            crossPlatformAlert("성공", "비밀번호가 성공적으로 변경되었습니다.");
            navigate("/login"); // 로그인 페이지로 이동
        } catch (error: any) {
            console.error(error);
            crossPlatformAlert("오류", "링크가 만료되었거나 이미 사용되었습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // UI 코드는 기존 FindPasswordPage와 유사하게 구성
        <form onSubmit={handleConfirmReset}>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "변경 중..." : "비밀번호 변경 완료"}
            </button>
        </form>
    );
}