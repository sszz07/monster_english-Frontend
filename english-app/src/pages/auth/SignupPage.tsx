import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "@/api";
// Firebase 연동 추가
import {auth, db, realTime} from "@/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import PermitCustomButton from "@/components/common/PosButtonProps";
import { isNotEmpty, validateEmail, validatePassword } from "@/utils/validators";
import { crossPlatformAlert } from "@/utils/crossPlatformAlert";
import { ref, set } from "firebase/database";
interface SignUpErrors {
    username?: string;
    loginId?: string;
    password?: string;
    passwordConfirm?: string;
    tel?: string;
    gender?: string;
    schoolLevel?: string;
    grade?: string;
    schoolName?: string;
    role?: string;
}

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [loginIdFront, setLoginId] = useState('');
    const [isIdChecked, setIsIdChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [tel, setTel] = useState('');
    const [errors, setErrors] = useState<SignUpErrors>({});
    const [gender, setGender] = useState('');
    const [schoolLevel, setSchoolLevel] = useState('');
    const [grade, setGrade] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [isSchoolLevelOpen, setIsSchoolLevelOpen] = useState(false);
    const [isGradeOpen, setIsGradeOpen] = useState(false);
    const [role, setRole] = useState("");
    const [agreePrivacy, setAgreePrivacy] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false); // 가입 완료 메시지 상태
    const navigate = useNavigate();
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginId(e.target.value);
        setIsIdChecked(false);
    };

    const checkDuplicateId = async () => {
        if (!emailRegEx.test(loginIdFront)) {
            setErrors(prev => ({ ...prev, loginId: "올바른 이메일 형식이 아닙니다." }));
            return;
        }

        setErrors(prev => ({ ...prev, loginId: "" }));

        if (!isNotEmpty(loginIdFront)) {
            crossPlatformAlert("알림", "아이디를 입력해주세요.");
            return;
        }
        if (loginIdFront.trim().length < 4) {
            crossPlatformAlert("알림", "아이디는 4자 이상이어야 합니다.");
            return;
        }

        try {
            const response = await apiClient.get(`/api/users/check-id?userId=${loginIdFront}`);
            if (response.data.isAvailable) {
                crossPlatformAlert("", "사용 가능한 아이디입니다.");
                setIsIdChecked(true);
            } else {
                crossPlatformAlert("실패", "이미 사용 중인 아이디입니다.");
                setIsIdChecked(false);
            }
        } catch (error) {
            console.error("ID Check Error:", error);
            crossPlatformAlert("에러", "중복 확인 중 오류가 발생했습니다.");
        }
    };

    const schoolLevelOptions = [
        { label: "초등", value: "elementary" },
        { label: "중등", value: "middle" },
        { label: "고등", value: "high" },
    ];

    const gradeOptions =
        schoolLevel === "elementary"
            ? ["1학년", "2학년", "3학년", "4학년", "5학년", "6학년"]
            : schoolLevel === "middle"
                ? ["1학년", "2학년", "3학년"]
                : schoolLevel === "high"
                    ? ["1학년", "2학년", "3학년"]
                    : [];

    const getSchoolLevelLabel = () => {
        if (schoolLevel === "elementary") return "초등";
        if (schoolLevel === "middle") return "중등";
        if (schoolLevel === "high") return "고등";
        return "학교급 선택";
    };

    const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        const digitsOnly = text.replace(/[^0-9]/g, '');
        if (digitsOnly.length > 11) return;
        let formattedTel = digitsOnly;
        if (digitsOnly.length > 3 && digitsOnly.length <= 7) {
            formattedTel = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
        } else if (digitsOnly.length > 7) {
            formattedTel = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7, 11)}`;
        }
        setTel(formattedTel);
    };

    const handleSignUp = async () => {
        if (isLoading) return;
        if (!isIdChecked) {
            crossPlatformAlert("알림", "아이디 중복 확인이 필요합니다.");
            return;
        }

        setIsLoading(true);
        setErrors({});
        const newErrors: SignUpErrors = {};

        if (!isNotEmpty(username)) {
            newErrors.username = "Please enter your name";
        } else if (username.trim().length < 2) {
            newErrors.username = "Name must be at least 2 characters";
        }

        if (!isNotEmpty(loginIdFront)) {
            newErrors.loginId = "Please enter your ID";
        } else if (loginIdFront.trim().length < 4) {
            newErrors.loginId = "ID must be at least 4 characters";
        }

        if (!validatePassword(password)) {
            newErrors.password = "Password must be 8 to 15 characters and include letters and numbers";
        }

        if (!isNotEmpty(passwordConfirm)) {
            newErrors.passwordConfirm = "Please confirm your password";
        } else if (password !== passwordConfirm) {
            newErrors.passwordConfirm = "The passwords do not match";
        }


        const telDigitsOnly = tel.replace(/[^0-9]/g, '');
        if (!telDigitsOnly) {
            newErrors.tel = "Please enter your contact number";
        } else if (telDigitsOnly.length < 10 || telDigitsOnly.length > 11) {
            newErrors.tel = "Check your contact number form";
        }

        if (!gender) newErrors.gender = "Please select your gender";
        if (!role) newErrors.role = "회원 유형을 선택해주세요.";

        if (role === "student") {
            if (!isNotEmpty(schoolName)) newErrors.schoolName = "Please enter your school name";
            if (!schoolLevel) newErrors.schoolLevel = "Please select school level";
            if (!grade) newErrors.grade = "Please select grade";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }

        if (!agreePrivacy) {
            console.warn("⚠️ 개인정보 동의 미체크");
            crossPlatformAlert("알림", "개인정보 수집 및 이용에 동의해주세요.");
            setIsLoading(false);
            return;
        }

        try {
            const virtualEmail = `${loginIdFront}`; // 만약 이메일 형식이 아니라면 @domain.com 등을 붙여야 Firebase Auth가 작동할 수 있습니다. 여기서는 기존 변수명을 유지할게요.
            const signupData = {
                username,
                loginId: virtualEmail,
                password,
                tel,
                gender,
                role,
                schoolName: role === "student" ? schoolName : null,
                schoolLevel: role === "student" ? schoolLevel : null,
                grade: (role === "student" && grade) ? parseInt(String(grade).replace(/[^0-9]/g, ""), 10) : null,
            };

            console.log("1️⃣ [Backend Request] /api/users/signup 전송 데이터:", signupData);

            // 단계 1: 자체 백엔드 API 호출
            const response = await apiClient.post('/api/users/signup', signupData);
            console.log("✅ [Backend Response] 서버 응답 성공:", response.status);

            if (response.status === 201 || response.status === 200) {
                console.log("2️⃣ [Firebase Auth] 계정 생성 시도: ", virtualEmail);

                // 단계 2: Firebase Auth 계정 생성
                const userCredential = await createUserWithEmailAndPassword(auth, virtualEmail, password);
                const firebaseUid = userCredential.user.uid;
                console.log("✅ [Firebase Auth] 생성 성공 UID:", firebaseUid);

                // 3️⃣ [Firebase Realtime Database] 데이터 저장 로직 추가 🚀
                console.log("3️⃣ [Firebase Realtime DB] 사용자 프로필 저장 시도...");

                await set(ref(realTime, `users/${firebaseUid}`), {
                    username: username,
                    loginId: virtualEmail,
                    tel: tel,
                    gender: gender,
                    role: role,
                    schoolName: role === "student" ? schoolName : null,
                    schoolLevel: role === "student" ? schoolLevel : null,
                    grade: signupData.grade, // 숫자로 파싱된 값 저장
                    createdAt: new Date().toISOString() // 가입일시 추가해두면 유용합니다
                });

                console.log("✅ [Firebase Realtime DB] 저장 성공");

                // 가입 완료 처리 및 페이지 이동
                setSignupSuccess(true);
                crossPlatformAlert("축하합니다!!! 회원가입이 완료 되었습니다!!!", "");

                setTimeout(() => {
                    console.log("🏃 [Navigation] 메인 페이지로 이동");
                    navigate('/', { replace: true });
                }, 1500);
            }
        }catch (error: any) {
            // 3. 에러 발생 시 상세 로깅
            console.error("❌ [ERROR 발생]");

            if (error.response) {
                // 서버가 응답을 보냈으나 2xx 범위를 벗어난 경우 (Spring Security 403, 500 등)
                console.error("서버 응답 에러 데이터 (Backend Error):", error.response.data);
                console.error("상태 코드:", error.response.status);
                console.error("헤더:", error.response.headers);

                // 만약 Spring Boot의 에러 메시지가 있다면 알림창에 표시
                const serverMsg = error.response.data.message || error.response.data.error || "서버 내부 오류";
                crossPlatformAlert("서버 에러", `코드: ${error.response.status}\n내용: ${serverMsg}`);

            } else if (error.request) {
                // 요청은 보냈으나 응답을 받지 못한 경우 (네트워크 에러, 서버 꺼짐)
                console.error("응답을 받지 못함 (Network Error):", error.request);
                crossPlatformAlert("네트워크 에러", "서버와 연결할 수 없습니다. 서버가 켜져 있는지 확인하세요.");

            } else if (error.code) {
                // Firebase 에러 등 특정 라이브러리 에러
                console.error("라이브러리/Firebase 에러 코드:", error.code);
                console.error("에러 메시지:", error.message);

                if (error.code === "auth/email-already-in-use") {
                    crossPlatformAlert("실패", "이미 등록된 계정입니다.");
                } else {
                    crossPlatformAlert("에러", `Firebase 에러: ${error.message}`);
                }
            } else {
                // 기타 설정 에러
                console.error("설정 에러:", error.message);
            }
        } finally {
            setIsLoading(false);
            console.log("🏁 [회원가입 프로세스 종료]");
        }
    };

    return (
        <div className="flex-1 flex flex-col justify-center items-center bg-cover bg-center"
             style={{ backgroundImage: "url('/auth-background.jpg')" }}>
            <div className="w-full max-w-[800px] bg-white rounded-lg p-8 shadow-lg my-10 relative">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">SignUp</h1>

                <div className="flex flex-col gap-1">
                    <div className="mb-2">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className={`flex-1 h-12 border rounded px-3 text-base outline-none focus:border-blue-500 ${isIdChecked ? "bg-gray-100 text-gray-500" : "bg-white"}`}
                                placeholder="Enter your ID"
                                value={loginIdFront}
                                onChange={handleIdChange}
                                readOnly={isIdChecked}
                            />
                            <button
                                onClick={checkDuplicateId}
                                disabled={isIdChecked}
                                className={`h-12 px-4 rounded transition-colors ${isIdChecked ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                            >
                                {isIdChecked ? "확인됨" : "중복확인"}
                            </button>
                        </div>
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.loginId}</div>
                    </div>

                    <div className="mb-2">
                        <input
                            type="password"
                            className="w-full h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.password}</div>
                    </div>

                    <div className="mb-2">
                        <input
                            type="password"
                            className="w-full h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500"
                            placeholder="Password check"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.passwordConfirm}</div>
                    </div>

                    <div className="mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <input
                                type="text"
                                className="w-full sm:flex-1 h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500"
                                placeholder="Enter your name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="flex gap-4 ml-1 sm:ml-4 h-12 items-center">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="w-4 h-4" />
                                    <span>Male</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="w-4 h-4" />
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.username || errors.gender}</div>
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            className="w-full h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500"
                            placeholder="Enter your contact number"
                            value={tel}
                            onChange={handleTelChange}
                            maxLength={13}
                        />
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.tel}</div>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-6 ml-1">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="role" value="student" checked={role === "student"} onChange={(e) => setRole(e.target.value)} className="w-4 h-4" />
                                <span className="font-medium text-gray-700">Student</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="role" value="teacher" checked={role === "teacher"} onChange={(e) => setRole(e.target.value)} className="w-4 h-4" />
                                <span className="font-medium text-gray-700">Teacher</span>
                            </label>
                        </div>
                        <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.role}</div>
                    </div>

                    {role === "student" && (
                        <div className="mb-2">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1">
                                    <input type="text" className="w-full h-12 border border-gray-300 rounded px-3 text-base outline-none focus:border-blue-500" placeholder="Enter your school name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                                    <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.schoolName}</div>
                                </div>
                                <div className="w-full sm:w-[150px] relative">
                                    <button type="button" onClick={() => { setIsSchoolLevelOpen(!isSchoolLevelOpen); setIsGradeOpen(false); }} className="w-full h-12 border border-gray-300 px-3 rounded flex items-center justify-between bg-white">
                                        <span className={schoolLevel ? "text-gray-900" : "text-gray-400"}>{getSchoolLevelLabel()}</span>
                                        <span>{isSchoolLevelOpen ? "▲" : "▼"}</span>
                                    </button>
                                    {isSchoolLevelOpen && (
                                        <div className="absolute z-10 w-full mt-1 border rounded bg-white shadow-lg overflow-hidden">
                                            {schoolLevelOptions.map((item) => (
                                                <button key={item.value} type="button" onClick={() => { setSchoolLevel(item.value); setGrade(""); setIsSchoolLevelOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-gray-50">{item.label}</button>
                                            ))}
                                        </div>
                                    )}
                                    <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.schoolLevel}</div>
                                </div>
                                <div className="w-full sm:w-[150px] relative">
                                    <button type="button" onClick={() => { if (!schoolLevel) return; setIsGradeOpen(!isGradeOpen); setIsSchoolLevelOpen(false); }} className={`w-full h-12 border rounded px-4 flex items-center justify-between ${!schoolLevel ? 'bg-gray-50' : 'bg-white'}`} disabled={!schoolLevel}>
                                        <span className={grade ? "text-gray-900" : "text-gray-400"}>{grade || "학년 선택"}</span>
                                        <span>{isGradeOpen ? "▲" : "▼"}</span>
                                    </button>
                                    {isGradeOpen && (
                                        <div className="absolute z-10 w-full mt-1 border rounded bg-white shadow-lg max-h-48 overflow-y-auto">
                                            {gradeOptions.map((item) => (
                                                <button key={item} type="button" onClick={() => { setGrade(item); setIsGradeOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-gray-50">{item}</button>
                                            ))}
                                        </div>
                                    )}
                                    <div className="h-4 mt-1 text-xs text-red-500 ml-1">{errors.grade}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-gray-50 rounded p-4 mb-4 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={agreePrivacy} onChange={(e) => setAgreePrivacy(e.target.checked)} className="w-5 h-5 rounded" />
                            <span className="text-gray-700 font-medium">개인정보 수집 및 이용 동의 <a href="/auth/privacy" target="_blank" className="text-blue-600 underline">[보기]</a></span>
                        </label>
                    </div>

                    <PermitCustomButton
                        title={isLoading ? "Processing..." : "Signup"}
                        onClick={handleSignUp}
                        className="w-full h-14 text-lg font-bold"
                        disabled={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
