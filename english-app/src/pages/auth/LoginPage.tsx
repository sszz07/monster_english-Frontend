import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// 1. 필요한 Firebase 인스턴스 임포트 확인
import { auth, realTime } from "@/api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// 2. 리얼타임 DB 데이터 조회를 위한 ref, get 임포트
import { ref, get } from "firebase/database";
import { useUserStore } from "@/store/userStore";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import PermitCustomButton from "@/components/common/PosButtonProps.tsx";

const LoginPage = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useUserStore((state) => state.login);

  const handleLogin = async () => {
    if (!loginId || !password) {
      crossPlatformAlert("", "ID와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      // 회원가입 시 설정한 가상 이메일 규칙 도메인에 맞게 매칭
      const firebaseEmail = loginId.includes("@") ? loginId : `${loginId}@monster.com`;

      // [1] Firebase Auth 로그인 인증
      const userCredential = await signInWithEmailAndPassword(auth, firebaseEmail, password);
      const firebaseUser = userCredential.user;

      // [2] ID 토큰 가져오기
      const idToken = await firebaseUser.getIdToken();

      // [3] Firebase Realtime DB에서 회원가입 시 저장했던 유저 데이터 가져오기
      console.log("🔍 [Firebase Realtime DB] 유저 데이터 조회 중... UID:", firebaseUser.uid);
      const userRef = ref(realTime, `users/${firebaseUser.uid}`);
      const snapshot = await get(userRef);

      let userData = null;

      if (snapshot.exists()) {
        // DB에 유저 데이터가 존재하는 경우
        const dbData = snapshot.val();
        console.log("✅ [Firebase Realtime DB] 유저 데이터 로드 성공:", dbData);

        // 💡 [수정 포인트 1] DB에 저장된 실제 role 값을 읽어와 안전하게 대문자로 변환합니다.
        // 데이터가 없거나 형식이 이상할 경우를 대비해 기본값은 'STUDENT'로 설정합니다.
        const dbRole = dbData.role ? String(dbData.role).trim().toUpperCase() : "STUDENT";

        userData = {
          userId: firebaseUser.uid,
          username: dbData.username || loginId,
          email: firebaseUser.email || "",
          tel: dbData.tel || "",
          // 💡 하드코딩(삼항연산자)을 제거하고, 파이어베이스 DB에 저장된 실제 권한을 그대로 주입합니다!
          role: dbRole as 'STUDENT' | 'TEACHER' | 'ADMIN'
        };
      } else {
        // 방어 코드: Auth 계정은 있으나 실시간 DB에 데이터가 매칭되지 않는 예외 케이스
        console.warn("⚠️ [Firebase Realtime DB] 유저 데이터를 찾을 수 없습니다. 아이디 기반 추정을 시작합니다.");

        // 💡 [수정 포인트 2] 예외 상황 발생 시에도 아이디 문자열에 admin이 들어있다면 ADMIN 권한을 부여하도록 보완합니다.
        let userRole: 'STUDENT' | 'TEACHER' | 'ADMIN' = 'STUDENT';

        if (loginId.toLowerCase().includes("admin")) {
          userRole = 'ADMIN';
        } else if (loginId.toLowerCase().includes("teacher")) {
          userRole = 'TEACHER';
        }

        userData = {
          userId: firebaseUser.uid,
          username: firebaseUser.displayName || loginId,
          email: firebaseUser.email || "",
          tel: firebaseUser.phoneNumber || "",
          role: userRole
        };
      }

      // [4] Zustand 전역 스토어에 저장 후 메인 페이지 이동
      if (idToken && userData) {
        console.log("🚀 Zustand 스토어로 저장되는 최종 유저 데이터:", userData);
        login(userData, idToken);
        navigate("/", { replace: true });
      }

    } catch (error: any) {
      console.error("Firebase Login Error: ", error);
      let message = "네트워크 상태를 확인하거나 ID/비밀번호를 다시 확인해주세요.";

      if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/invalid-credential"
      ) {
        message = "아이디 또는 비밀번호가 올바르지 않습니다.";
      } else if (error.code === "auth/invalid-email") {
        message = "올바른 이메일 형식이 아닙니다.";
      }

      crossPlatformAlert("로그인 실패", message);
    }
  };

  const handleSecondaryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
      <div
          className="flex-1 h-screen flex justify-center items-center p-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/auth-background.jpg')" }}
      >
        <div className="w-full max-w-[400px] bg-white rounded-lg p-8 shadow-lg mb-60">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Login
          </h1>

          <div className="flex flex-col gap-5">
            <input
                type="text"
                className="h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                onKeyDown={handleSecondaryKeyDown}
            />

            <input
                type="password"
                className="h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleSecondaryKeyDown}
            />

            <div className="mt-2">
              <PermitCustomButton
                  title="Login"
                  onClick={handleLogin}
                  className="w-full"
              />
            </div>

            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <button
                  type="button"
                  onClick={() => navigate("/auth/find-password")}
                  className="hover:text-blue-500"
              >
                비밀번호 찾기
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;