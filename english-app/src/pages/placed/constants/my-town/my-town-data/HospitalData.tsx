import hospitalImg from "@/assets/image/places/my-town/Hospital(clinic).png"; //[cite: 12]

export interface RegionData {
  wordKey: string;
  korean: string;
  audioUrl: string;
  videoPath: string;
  sentence: string;
  targetStyle: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  points: string; 
  // "hospital" 타입을 추가했습니다.
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway" | "crosswalk" | "stationery" | "supermarket" | "pharmacy" | "hospital"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const hospitalData: PlaceDataType = {
  placeKey: "hospital",
  placeTitle: "Hospital Word Adventure",
  bgImage: hospitalImg,
  masterRegions: [
    // 1. 의사 (오른쪽 뒤 진료실 문 앞의 초록색 몬스터 의사)[cite: 12]
    {
      wordKey: "doctor",
      korean: "의사",
      audioUrl: "/audio/hospital/doctor.mp3",
      videoPath: "/video/hospital/Doctor.mp4",
      sentence: "The doctor helps you when you are sick.",
      imageType: "hospital",
      targetStyle: { top: '20.0%', left: '60.0%', width: '12.0%', height: '28.0%' },
      points: "96.0,18.0 115.2,18.0 115.2,43.2 96.0,43.2"
    },
    // 2. 간호사 (카운터 가운데 앉아있는 간호사)[cite: 12]
    {
      wordKey: "nurse",
      korean: "간호사",
      audioUrl: "/audio/hospital/nurse.mp3",
      videoPath: "/video/hospital/Nurse.mp4",
      sentence: "The nurse is very kind and helpful.",
      imageType: "hospital",
      targetStyle: { top: '35.0%', left: '28.0%', width: '12.0%', height: '30.0%' },
      points: "44.8,31.5 64.0,31.5 64.0,58.5 44.8,58.5"
    },
    // 3. 환자 (오른쪽에서 블록 장난감을 가지고 노는 여자아이)[cite: 12]
    {
      wordKey: "patient",
      korean: "환자",
      audioUrl: "/audio/hospital/patient.mp3",
      videoPath: "/video/hospital/Patient.mp4",
      sentence: "The little patient is waiting to see the doctor.",
      imageType: "hospital",
      targetStyle: { top: '40.0%', left: '85.0%', width: '10.0%', height: '30.0%' },
      points: "136.0,36.0 152.0,36.0 152.0,63.0 136.0,63.0"
    },
    // 4. 대기실 (오른쪽 앞 파란색 의자가 있는 공간)[cite: 12]
    {
      wordKey: "waiting_room",
      korean: "대기실",
      audioUrl: "/audio/hospital/waiting_room.mp3",
      videoPath: "/video/hospital/WaitingRoom.mp4",
      sentence: "Please sit in the waiting room until your turn.",
      imageType: "hospital",
      targetStyle: { top: '70.0%', left: '75.0%', width: '25.0%', height: '30.0%' },
      points: "120.0,63.0 160.0,63.0 160.0,90.0 120.0,90.0"
    },
    // 5. 병원/의원 (중앙 접수대 카운터 영역 전체)[cite: 12]
    {
      wordKey: "clinic",
      korean: "병원(의원)",
      audioUrl: "/audio/hospital/clinic.mp3",
      videoPath: "/video/hospital/Clinic.mp4",
      sentence: "I go to the clinic when I have a cold.",
      imageType: "hospital",
      targetStyle: { top: '50.0%', left: '20.0%', width: '60.0%', height: '50.0%' },
      points: "32.0,45.0 128.0,45.0 128.0,90.0 32.0,90.0"
    },
    // 6. 응급 (왼쪽 위 벽에 붙은 빨간색 emergency 간판)[cite: 12]
    {
      wordKey: "emergency",
      korean: "응급",
      audioUrl: "/audio/hospital/emergency.mp3",
      videoPath: "/video/hospital/Emergency.mp4",
      sentence: "Go to the emergency room if it is very serious.",
      imageType: "hospital",
      targetStyle: { top: '2.0%', left: '8.0%', width: '15.0%', height: '10.0%' },
      points: "12.8,1.8 36.8,1.8 36.8,10.8 12.8,10.8"
    },
    // 7. 구급차 (간호사 왼쪽 진열장의 장난감 구급차)[cite: 12]
    {
      wordKey: "ambulance",
      korean: "구급차",
      audioUrl: "/audio/hospital/ambulance.mp3",
      videoPath: "/video/hospital/Ambulance.mp4",
      sentence: "The ambulance drives fast to the hospital.",
      imageType: "hospital",
      targetStyle: { top: '38.0%', left: '2.0%', width: '8.0%', height: '10.0%' },
      points: "3.2,34.2 16.0,34.2 16.0,43.2 3.2,43.2"
    },
    // 8. 체온계 (간호사 뒤쪽 책상 위에 있는 하얀 체온계)[cite: 12]
    {
      wordKey: "thermometer",
      korean: "체온계",
      audioUrl: "/audio/hospital/thermometer.mp3",
      videoPath: "/video/hospital/Thermometer.mp4",
      sentence: "The nurse uses a thermometer to check your fever.",
      imageType: "hospital",
      targetStyle: { top: '42.0%', left: '12.0%', width: '8.0%', height: '5.0%' },
      points: "19.2,37.8 32.0,37.8 32.0,42.3 19.2,42.3"
    },
    // 9. 약 (왼쪽 앞 카운터 위에 쌓여 있는 약 상자들)[cite: 12]
    {
      wordKey: "medicine",
      korean: "약",
      audioUrl: "/audio/hospital/medicine.mp3",
      videoPath: "/video/hospital/Medicine.mp4",
      sentence: "You need to take your medicine on time.",
      imageType: "hospital",
      targetStyle: { top: '70.0%', left: '0.0%', width: '25.0%', height: '25.0%' },
      points: "0.0,63.0 40.0,63.0 40.0,85.5 0.0,85.5"
    },
    // 10. 알약 (painkiller 상자 앞면에 그려진 주황색 알약 그림)[cite: 12]
    {
      wordKey: "pill",
      korean: "알약",
      audioUrl: "/audio/hospital/pill.mp3",
      videoPath: "/video/hospital/Pill.mp4",
      sentence: "Swallow the small pill with water.",
      imageType: "hospital",
      targetStyle: { top: '85.0%', left: '6.0%', width: '4.0%', height: '8.0%' },
      points: "9.6,76.5 16.0,76.5 16.0,83.7 9.6,83.7"
    },
    // 11. 주사 (간호사 뒤쪽 선반의 주사기들)[cite: 12]
    {
      wordKey: "injection",
      korean: "주사",
      audioUrl: "/audio/hospital/injection.mp3",
      videoPath: "/video/hospital/Injection.mp4",
      sentence: "The injection will pinch just a little bit.",
      imageType: "hospital",
      targetStyle: { top: '48.0%', left: '15.0%', width: '4.0%', height: '8.0%' },
      points: "24.0,43.2 30.4,43.2 30.4,50.4 24.0,50.4"
    },
    // 12. 붕대 (간호사 뒤 주사기 옆의 붕대 상자들)[cite: 12]
    {
      wordKey: "bandage",
      korean: "붕대",
      audioUrl: "/audio/hospital/bandage.mp3",
      videoPath: "/video/hospital/Bandage.mp4",
      sentence: "We will put a soft bandage on your knee.",
      imageType: "hospital",
      targetStyle: { top: '50.0%', left: '19.0%', width: '4.0%', height: '8.0%' },
      points: "30.4,45.0 36.8,45.0 36.8,52.2 30.4,52.2"
    },
    // 13. 깁스 (우측 하단 선반 안쪽의 하얀색 롤 모양 의료 용품)[cite: 12]
    {
      wordKey: "cast",
      korean: "깁스",
      audioUrl: "/audio/hospital/cast.mp3",
      videoPath: "/video/hospital/Cast.mp4",
      sentence: "He wore a cast on his broken arm.",
      imageType: "hospital",
      targetStyle: { top: '88.0%', left: '65.0%', width: '5.0%', height: '10.0%' },
      points: "104.0,79.2 112.0,79.2 112.0,88.2 104.0,88.2"
    },
    // 14. 엑스레이 (간호사 뒤쪽 벽에 걸린 폐 엑스레이 사진)[cite: 12]
    {
      wordKey: "x_ray",
      korean: "엑스레이(X선)",
      audioUrl: "/audio/hospital/x_ray.mp3",
      videoPath: "/video/hospital/X_Ray.mp4",
      sentence: "The doctor looks at the X-ray of your bones.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '26.0%', width: '10.0%', height: '15.0%' },
      points: "41.6,13.5 57.6,13.5 57.6,27.0 41.6,27.0"
    },
    // 15. 건강 검진 (오른쪽 패드를 들고 차트를 확인하는 안경 쓴 여성)[cite: 12]
    {
      wordKey: "checkup",
      korean: "건강 검진",
      audioUrl: "/audio/hospital/checkup.mp3",
      videoPath: "/video/hospital/Checkup.mp4",
      sentence: "I go to the doctor for a yearly checkup.",
      imageType: "hospital",
      targetStyle: { top: '30.0%', left: '74.0%', width: '8.0%', height: '30.0%' },
      points: "118.4,27.0 131.2,27.0 131.2,54.0 118.4,54.0"
    },
    // 16. 청진기 (의사 몬스터 목에 걸려있는 청진기)[cite: 12]
    {
      wordKey: "stethoscope",
      korean: "청진기",
      audioUrl: "/audio/hospital/stethoscope.mp3",
      videoPath: "/video/hospital/Stethoscope.mp4",
      sentence: "The doctor listens to my heart with a stethoscope.",
      imageType: "hospital",
      targetStyle: { top: '30.0%', left: '63.0%', width: '4.0%', height: '10.0%' },
      points: "100.8,27.0 107.2,27.0 107.2,36.0 100.8,36.0"
    },
    // 17. 혈압 (의사 방 옆 벽에 달린 혈압/심박수 모니터 화면)[cite: 12]
    {
      wordKey: "blood_pressure",
      korean: "혈압",
      audioUrl: "/audio/hospital/blood_pressure.mp3",
      videoPath: "/video/hospital/BloodPressure.mp4",
      sentence: "The nurse will measure your blood pressure.",
      imageType: "hospital",
      targetStyle: { top: '20.0%', left: '49.0%', width: '6.0%', height: '10.0%' },
      points: "78.4,18.0 88.0,18.0 88.0,27.0 78.4,27.0"
    },
    // 18. 마스크 (오른쪽 아래 선반에 있는 푸른 계열의 상자)[cite: 12]
    {
      wordKey: "mask",
      korean: "마스크",
      audioUrl: "/audio/hospital/mask.mp3",
      videoPath: "/video/hospital/Mask.mp4",
      sentence: "Wear a mask to stop germs from spreading.",
      imageType: "hospital",
      targetStyle: { top: '80.0%', left: '70.0%', width: '5.0%', height: '8.0%' },
      points: "112.0,72.0 120.0,72.0 120.0,79.2 112.0,79.2"
    },
    // 19. 장갑 (진료실 문 옆 벽에 매달려 있는 파란색 장갑들)[cite: 12]
    {
      wordKey: "gloves",
      korean: "장갑",
      audioUrl: "/audio/hospital/gloves.mp3",
      videoPath: "/video/hospital/Gloves.mp4",
      sentence: "The doctor wears clean gloves to stay safe.",
      imageType: "hospital",
      targetStyle: { top: '30.0%', left: '56.0%', width: '4.0%', height: '10.0%' },
      points: "89.6,27.0 96.0,27.0 96.0,36.0 89.6,36.0"
    },
    // 20. 수술 (진료실 문 위에 있는 operation 초록색 간판)[cite: 12]
    {
      wordKey: "operation",
      korean: "수술",
      audioUrl: "/audio/hospital/operation.mp3",
      videoPath: "/video/hospital/Operation.mp4",
      sentence: "The doctor is doing a small operation.",
      imageType: "hospital",
      targetStyle: { top: '8.0%', left: '62.0%', width: '10.0%', height: '5.0%' },
      points: "99.2,7.2 115.2,7.2 115.2,11.7 99.2,11.7"
    },
    // 21. 건강 (오른쪽 벽에 크게 붙은 Medical Information Board)[cite: 12]
    {
      wordKey: "health",
      korean: "건강",
      audioUrl: "/audio/hospital/health.mp3",
      videoPath: "/video/hospital/Health.mp4",
      sentence: "Eating apples is good for your health.",
      imageType: "hospital",
      targetStyle: { top: '12.0%', left: '82.0%', width: '15.0%', height: '25.0%' },
      points: "131.2,10.8 155.2,10.8 155.2,33.3 131.2,33.3"
    },
    // 22. 예약 (간호사 옆 벽의 Patient waiting list 예약자 명단)[cite: 12]
    {
      wordKey: "appointment",
      korean: "예약",
      audioUrl: "/audio/hospital/appointment.mp3",
      videoPath: "/video/hospital/Appointment.mp4",
      sentence: "I have an appointment to see the doctor at two o'clock.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '17.0%', width: '8.0%', height: '20.0%' },
      points: "27.2,13.5 40.0,13.5 40.0,31.5 27.2,31.5"
    },
    // 23. 증상 (오른쪽 벽의 Treatment chart / 증상 기록판)[cite: 12]
    {
      wordKey: "symptoms",
      korean: "증상",
      audioUrl: "/audio/hospital/symptoms.mp3",
      videoPath: "/video/hospital/Symptoms.mp4",
      sentence: "Tell the doctor about your cold symptoms.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '74.0%', width: '6.0%', height: '15.0%' },
      points: "118.4,13.5 128.0,13.5 128.0,27.0 118.4,27.0"
    },
    // 24. 치료 (카운터의 진료용 모니터와 금전등록기 영역)[cite: 12]
    {
      wordKey: "treatment",
      korean: "치료",
      audioUrl: "/audio/hospital/treatment.mp3",
      videoPath: "/video/hospital/Treatment.mp4",
      sentence: "Rest is the best treatment for a fever.",
      imageType: "hospital",
      targetStyle: { top: '45.0%', left: '52.0%', width: '12.0%', height: '20.0%' },
      points: "83.2,40.5 102.4,40.5 102.4,58.5 83.2,58.5"
    },
    // 25. 약국 (병원 안의 약을 처방해주는 전면 카운터 구역 전체)[cite: 12]
    {
      wordKey: "pharmacy",
      korean: "약국",
      audioUrl: "/audio/hospital/pharmacy.mp3",
      videoPath: "/video/hospital/Pharmacy.mp4",
      sentence: "We buy our medicine at the pharmacy.",
      imageType: "hospital",
      targetStyle: { top: '60.0%', left: '30.0%', width: '40.0%', height: '35.0%' },
      points: "48.0,54.0 112.0,54.0 112.0,85.5 48.0,85.5"
    }
  ]
};