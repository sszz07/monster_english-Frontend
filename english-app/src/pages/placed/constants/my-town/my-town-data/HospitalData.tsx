import hospitalImg from "@/assets/image/places/my-town/Hospital(clinic).png";

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
    // 1. 의사 (다른 간판들과 겹치지 않도록 적절히 축소 및 재배치)
    {
      wordKey: "doctor",
      korean: "의사",
      audioUrl: "/audio/hospital/doctor.mp3",
      videoPath: "/video/hospital/Doctor.mp4",
      sentence: "The doctor helps you when you are sick.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '58.0%', width: '12.0%', height: '25.0%' },
      points: "92.8,13.5 112.0,13.5 112.0,36.0 92.8,36.0"
    },
    // 2. 간호사
    {
      wordKey: "nurse",
      korean: "간호사",
      audioUrl: "/audio/hospital/nurse.mp3",
      videoPath: "/video/hospital/Nurse.mp4",
      sentence: "The nurse is very kind and helpful.",
      imageType: "hospital",
      targetStyle: { top: '35.0%', left: '28.0%', width: '12.0%', height: '20.0%' },
      points: "44.8,31.5 64.0,31.5 64.0,49.5 44.8,49.5"
    },
    // 3. 환자
    {
      wordKey: "patient",
      korean: "환자",
      audioUrl: "/audio/hospital/patient.mp3",
      videoPath: "/video/hospital/Patient.mp4",
      sentence: "The little patient is waiting to see the doctor.",
      imageType: "hospital",
      targetStyle: { top: '35.0%', left: '85.0%', width: '12.0%', height: '25.0%' },
      points: "136.0,31.5 155.2,31.5 155.2,54.0 136.0,54.0"
    },
    // 4. 대기실 (전체 바닥을 덮지 않도록 우측 하단 의자 구역으로 축소)
    {
      wordKey: "waiting_room",
      korean: "대기실",
      audioUrl: "/audio/hospital/waiting_room.mp3",
      videoPath: "/video/hospital/WaitingRoom.mp4",
      sentence: "Please sit in the waiting room until your turn.",
      imageType: "hospital",
      targetStyle: { top: '65.0%', left: '75.0%', width: '20.0%', height: '25.0%' },
      points: "120.0,58.5 152.0,58.5 152.0,81.0 120.0,81.0"
    },
    // 5. 병원/의원 (중앙 전체를 덮던 영역을 접수대 일부 공간으로 대폭 축소)
    {
      wordKey: "clinic",
      korean: "병원(의원)",
      audioUrl: "/audio/hospital/clinic.mp3",
      videoPath: "/video/hospital/Clinic.mp4",
      sentence: "I go to the clinic when I have a cold.",
      imageType: "hospital",
      targetStyle: { top: '60.0%', left: '20.0%', width: '15.0%', height: '15.0%' },
      points: "32.0,54.0 56.0,54.0 56.0,67.5 32.0,67.5"
    },
    // 6. 응급
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
    // 7. 구급차
    {
      wordKey: "ambulance",
      korean: "구급차",
      audioUrl: "/audio/hospital/ambulance.mp3",
      videoPath: "/video/hospital/Ambulance.mp4",
      sentence: "The ambulance drives fast to the hospital.",
      imageType: "hospital",
      targetStyle: { top: '35.0%', left: '2.0%', width: '10.0%', height: '8.0%' },
      points: "3.2,31.5 19.2,31.5 19.2,38.7 3.2,38.7"
    },
    // 8. 체온계
    {
      wordKey: "thermometer",
      korean: "체온계",
      audioUrl: "/audio/hospital/thermometer.mp3",
      videoPath: "/video/hospital/Thermometer.mp4",
      sentence: "The nurse uses a thermometer to check your fever.",
      imageType: "hospital",
      targetStyle: { top: '45.0%', left: '2.0%', width: '10.0%', height: '8.0%' },
      points: "3.2,40.5 19.2,40.5 19.2,47.7 3.2,47.7"
    },
    // 9. 약
    {
      wordKey: "medicine",
      korean: "약",
      audioUrl: "/audio/hospital/medicine.mp3",
      videoPath: "/video/hospital/Medicine.mp4",
      sentence: "You need to take your medicine on time.",
      imageType: "hospital",
      targetStyle: { top: '60.0%', left: '2.0%', width: '12.0%', height: '15.0%' },
      points: "3.2,54.0 22.4,54.0 22.4,67.5 3.2,67.5"
    },
    // 10. 알약
    {
      wordKey: "pill",
      korean: "알약",
      audioUrl: "/audio/hospital/pill.mp3",
      videoPath: "/video/hospital/Pill.mp4",
      sentence: "Swallow the small pill with water.",
      imageType: "hospital",
      targetStyle: { top: '78.0%', left: '2.0%', width: '12.0%', height: '12.0%' },
      points: "3.2,70.2 22.4,70.2 22.4,81.0 3.2,81.0"
    },
    // 11. 주사
    {
      wordKey: "injection",
      korean: "주사",
      audioUrl: "/audio/hospital/injection.mp3",
      videoPath: "/video/hospital/Injection.mp4",
      sentence: "The injection will pinch just a little bit.",
      imageType: "hospital",
      targetStyle: { top: '35.0%', left: '15.0%', width: '8.0%', height: '8.0%' },
      points: "24.0,31.5 36.8,31.5 36.8,38.7 24.0,38.7"
    },
    // 12. 붕대
    {
      wordKey: "bandage",
      korean: "붕대",
      audioUrl: "/audio/hospital/bandage.mp3",
      videoPath: "/video/hospital/Bandage.mp4",
      sentence: "We will put a soft bandage on your knee.",
      imageType: "hospital",
      targetStyle: { top: '45.0%', left: '15.0%', width: '8.0%', height: '8.0%' },
      points: "24.0,40.5 36.8,40.5 36.8,47.7 24.0,47.7"
    },
    // 13. 깁스
    {
      wordKey: "cast",
      korean: "깁스",
      audioUrl: "/audio/hospital/cast.mp3",
      videoPath: "/video/hospital/Cast.mp4",
      sentence: "He wore a cast on his broken arm.",
      imageType: "hospital",
      targetStyle: { top: '80.0%', left: '40.0%', width: '12.0%', height: '10.0%' },
      points: "64.0,72.0 83.2,72.0 83.2,81.0 64.0,81.0"
    },
    // 14. 엑스레이
    {
      wordKey: "x_ray",
      korean: "엑스레이(X선)",
      audioUrl: "/audio/hospital/x_ray.mp3",
      videoPath: "/video/hospital/X_Ray.mp4",
      sentence: "The doctor looks at the X-ray of your bones.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '25.0%', width: '15.0%', height: '15.0%' },
      points: "40.0,13.5 64.0,13.5 64.0,27.0 40.0,27.0"
    },
    // 15. 건강 검진
    {
      wordKey: "checkup",
      korean: "건강 검진",
      audioUrl: "/audio/hospital/checkup.mp3",
      videoPath: "/video/hospital/Checkup.mp4",
      sentence: "I go to the doctor for a yearly checkup.",
      imageType: "hospital",
      targetStyle: { top: '30.0%', left: '72.0%', width: '10.0%', height: '25.0%' },
      points: "115.2,27.0 131.2,27.0 131.2,49.5 115.2,49.5"
    },
    // 16. 청진기
    {
      wordKey: "stethoscope",
      korean: "청진기",
      audioUrl: "/audio/hospital/stethoscope.mp3",
      videoPath: "/video/hospital/Stethoscope.mp4",
      sentence: "The doctor listens to my heart with a stethoscope.",
      imageType: "hospital",
      targetStyle: { top: '42.0%', left: '60.0%', width: '8.0%', height: '8.0%' },
      points: "96.0,37.8 108.8,37.8 108.8,45.0 96.0,45.0"
    },
    // 17. 혈압
    {
      wordKey: "blood_pressure",
      korean: "혈압",
      audioUrl: "/audio/hospital/blood_pressure.mp3",
      videoPath: "/video/hospital/BloodPressure.mp4",
      sentence: "The nurse will measure your blood pressure.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '45.0%', width: '10.0%', height: '10.0%' },
      points: "72.0,13.5 88.0,13.5 88.0,22.5 72.0,22.5"
    },
    // 18. 마스크
    {
      wordKey: "mask",
      korean: "마스크",
      audioUrl: "/audio/hospital/mask.mp3",
      videoPath: "/video/hospital/Mask.mp4",
      sentence: "Wear a mask to stop germs from spreading.",
      imageType: "hospital",
      targetStyle: { top: '80.0%', left: '55.0%', width: '12.0%', height: '10.0%' },
      points: "88.0,72.0 107.2,72.0 107.2,81.0 88.0,81.0"
    },
    // 19. 장갑
    {
      wordKey: "gloves",
      korean: "장갑",
      audioUrl: "/audio/hospital/gloves.mp3",
      videoPath: "/video/hospital/Gloves.mp4",
      sentence: "The doctor wears clean gloves to stay safe.",
      imageType: "hospital",
      targetStyle: { top: '28.0%', left: '45.0%', width: '8.0%', height: '10.0%' },
      points: "72.0,25.2 84.8,25.2 84.8,34.2 72.0,34.2"
    },
    // 20. 수술
    {
      wordKey: "operation",
      korean: "수술",
      audioUrl: "/audio/hospital/operation.mp3",
      videoPath: "/video/hospital/Operation.mp4",
      sentence: "The doctor is doing a small operation.",
      imageType: "hospital",
      targetStyle: { top: '5.0%', left: '60.0%', width: '10.0%', height: '8.0%' },
      points: "96.0,4.5 112.0,4.5 112.0,11.7 96.0,11.7"
    },
    // 21. 건강
    {
      wordKey: "health",
      korean: "건강",
      audioUrl: "/audio/hospital/health.mp3",
      videoPath: "/video/hospital/Health.mp4",
      sentence: "Eating apples is good for your health.",
      imageType: "hospital",
      targetStyle: { top: '10.0%', left: '82.0%', width: '15.0%', height: '20.0%' },
      points: "131.2,9.0 155.2,9.0 155.2,27.0 131.2,27.0"
    },
    // 22. 예약
    {
      wordKey: "appointment",
      korean: "예약",
      audioUrl: "/audio/hospital/appointment.mp3",
      videoPath: "/video/hospital/Appointment.mp4",
      sentence: "I have an appointment to see the doctor at two o'clock.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '10.0%', width: '10.0%', height: '15.0%' },
      points: "16.0,13.5 32.0,13.5 32.0,27.0 16.0,27.0"
    },
    // 23. 증상
    {
      wordKey: "symptoms",
      korean: "증상",
      audioUrl: "/audio/hospital/symptoms.mp3",
      videoPath: "/video/hospital/Symptoms.mp4",
      sentence: "Tell the doctor about your cold symptoms.",
      imageType: "hospital",
      targetStyle: { top: '15.0%', left: '72.0%', width: '8.0%', height: '12.0%' },
      points: "115.2,13.5 128.0,13.5 128.0,24.3 115.2,24.3"
    },
    // 24. 치료
    {
      wordKey: "treatment",
      korean: "치료",
      audioUrl: "/audio/hospital/treatment.mp3",
      videoPath: "/video/hospital/Treatment.mp4",
      sentence: "Rest is the best treatment for a fever.",
      imageType: "hospital",
      targetStyle: { top: '45.0%', left: '45.0%', width: '12.0%', height: '12.0%' },
      points: "72.0,40.5 91.2,40.5 91.2,51.3 72.0,51.3"
    },
    // 25. 약국 (전체 카운터를 덮던 것을 약품 전달대 쪽 빈 공간으로 축소)
    {
      wordKey: "pharmacy",
      korean: "약국",
      audioUrl: "/audio/hospital/pharmacy.mp3",
      videoPath: "/video/hospital/Pharmacy.mp4",
      sentence: "We buy our medicine at the pharmacy.",
      imageType: "hospital",
      targetStyle: { top: '60.0%', left: '40.0%', width: '15.0%', height: '15.0%' },
      points: "64.0,54.0 88.0,54.0 88.0,67.5 64.0,67.5"
    }
  ]
};