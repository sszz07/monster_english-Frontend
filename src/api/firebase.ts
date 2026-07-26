// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. DB(Firestore) 기능 임포트
import { getStorage } from "firebase/storage";     // 2. Storage(이미지) 기능 임포트
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXVicUR_bZS6MXL0QX5a1iNM1SpCAa1Yc",
    authDomain: "monster-english-a89f9.firebaseapp.com",
    projectId: "monster-english-a89f9",
    databaseURL: "https://monster-english-a89f9-default-rtdb.firebaseio.com",
    storageBucket: "monster-english-a89f9.firebasestorage.app",
    messagingSenderId: "829566528986",
    appId: "1:829566528986:web:09dc8e7fa6e97ab0e2e4e3",
    measurementId: "G-X0YX98E9DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 서비스 인스턴스 생성 및 내보내기 (다른 파일에서 가져다 쓸 수 있게 함)
export const auth = getAuth(app);
auth.languageCode = 'ko';
// auth.useDeviceLanguage();
export const db = getFirestore(app);       // 3. DB 인스턴스 생성
export const storage = getStorage(app);    // 4. Storage 인스턴스 생성
export const realTime = getDatabase(app);