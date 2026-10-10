import policeStationImg from "@/assets/image/places/fantasy-nature/Police station.jpg";

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
  imageType?: string; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const policeStationData: PlaceDataType = {
  placeKey: "police_station",
  placeTitle: "Police Station Word Adventure",
  bgImage: policeStationImg,
  masterRegions: [
    // 1. 경찰관
    {
      wordKey: "police_officer", korean: "경찰관",
      audioUrl: "/audio/policestation/police_officer.mp3", videoPath: "/video/policestation/police_officer.mp4",
      sentence: "The police officer is brave and strong at the station. Becoming a police officer is her dream for the future.",
      targetStyle: { top: '28.0%', left: '68.0%', width: '8.0%', height: '12.0%' },
      points: "108.8,25.2 121.6,25.2 121.6,36.0 108.8,36.0"
    },
    // 2. 순찰차
    {
      wordKey: "patrol_car", korean: "순찰차",
      audioUrl: "/audio/policestation/patrol_car.mp3", videoPath: "/video/policestation/patrol_car.mp4",
      sentence: "The patrol car is fast and loud on the road. Riding in a patrol car is exciting for young visitors.",
      targetStyle: { top: '38.0%', left: '28.0%', width: '10.0%', height: '8.0%' },
      points: "44.8,34.2 60.8,34.2 60.8,41.4 44.8,41.4"
    },
    // 3. 배지
    {
      wordKey: "badge", korean: "배지",
      audioUrl: "/audio/policestation/badge.mp3", videoPath: "/video/policestation/badge.mp4",
      sentence: "The badge is shiny and round on his chest. Wearing a badge at the station shows you are an officer.",
      targetStyle: { top: '51.0%', left: '74.0%', width: '3.0%', height: '4.0%' },
      points: "118.4,45.9 123.2,45.9 123.2,49.5 118.4,49.5"
    },
    // 4. 조서/보고서
    {
      wordKey: "report", korean: "조서/보고서",
      audioUrl: "/audio/policestation/report.mp3", videoPath: "/video/policestation/report.mp4",
      sentence: "The report is long and detailed on the desk. Writing a report after every case is the officer's duty.",
      targetStyle: { top: '68.0%', left: '41.5%', width: '4.0%', height: '8.0%' },
      points: "66.4,61.2 72.8,61.2 72.8,68.4 66.4,68.4"
    },
    // 5. 사건
    {
      wordKey: "case", korean: "사건",
      audioUrl: "/audio/policestation/case.mp3", videoPath: "/video/policestation/case.mp4",
      sentence: "The case is difficult and serious at the station. Solving a difficult case takes a lot of time and effort.",
      targetStyle: { top: '75.0%', left: '30.0%', width: '5.0%', height: '8.0%' },
      points: "48.0,67.5 56.0,67.5 56.0,74.7 48.0,74.7"
    },
    // 6. 형사/탐정
    {
      wordKey: "detective", korean: "형사/탐정",
      audioUrl: "/audio/policestation/detective.mp3", videoPath: "/video/policestation/detective.mp4",
      sentence: "The detective is clever and calm in the office. The detective enjoys gathering clues from the crime scene.",
      targetStyle: { top: '53.0%', left: '56.0%', width: '5.0%', height: '8.0%' },
      points: "89.6,47.7 97.6,47.7 97.6,54.9 89.6,54.9"
    },
    // 7. 제복
    {
      wordKey: "uniform", korean: "제복",
      audioUrl: "/audio/policestation/uniform.mp3", videoPath: "/video/policestation/uniform.mp4",
      sentence: "The uniform is dark blue and neat on the officer. Wearing a uniform every day is part of the officer's job.",
      targetStyle: { top: '55.0%', left: '20.0%', width: '5.0%', height: '8.0%' },
      points: "32.0,49.5 40.0,49.5 40.0,56.7 32.0,56.7"
    },
    // 8. 무전기
    {
      wordKey: "radio", korean: "무전기",
      audioUrl: "/audio/policestation/radio.mp3", videoPath: "/video/policestation/radio.mp4",
      sentence: "The radio is loud and clear on his shoulder. Using a radio helps officers communicate across the city.",
      targetStyle: { top: '46.0%', left: '77.5%', width: '2.5%', height: '5.0%' },
      points: "124.0,41.4 128.0,41.4 128.0,45.9 124.0,45.9"
    },
    // 9. 수갑
    {
      wordKey: "handcuffs", korean: "수갑",
      audioUrl: "/audio/policestation/handcuffs.mp3", videoPath: "/video/policestation/handcuffs.mp4",
      sentence: "The handcuffs are cold and tight on the suspect. Carrying handcuffs on the belt is part of the uniform.",
      targetStyle: { top: '72.0%', left: '75.0%', width: '3.0%', height: '8.0%' },
      points: "120.0,64.8 124.8,64.8 124.8,72.0 120.0,72.0"
    },
    // 10. 증거
    {
      wordKey: "evidence", korean: "증거",
      audioUrl: "/audio/policestation/evidence.mp3", videoPath: "/video/policestation/evidence.mp4",
      sentence: "The evidence is important and fragile in the bag. Collecting evidence at the crime scene is the detective's job.",
      targetStyle: { top: '66.0%', left: '91.0%', width: '6.0%', height: '8.0%' },
      points: "145.6,59.4 155.2,59.4 155.2,66.6 145.6,66.6"
    },
    // 11. 목격자
    {
      wordKey: "witness", korean: "목격자",
      audioUrl: "/audio/policestation/witness.mp3", videoPath: "/video/policestation/witness.mp4",
      sentence: "The witness is nervous and quiet in the office. Listening to a witness carefully helps solve the case faster.",
      targetStyle: { top: '43.0%', left: '4.0%', width: '3.0%', height: '5.0%' },
      points: "6.4,38.7 11.2,38.7 11.2,43.2 6.4,43.2"
    },
    // 12. 범죄
    {
      wordKey: "crime", korean: "범죄",
      audioUrl: "/audio/policestation/crime.mp3", videoPath: "/video/policestation/crime.mp4",
      sentence: "The crime is serious and dangerous in the city. Reporting a crime to the police is everyone's responsibility.",
      targetStyle: { top: '32.0%', left: '82.0%', width: '3.0%', height: '12.0%' },
      points: "131.2,28.8 136.0,28.8 136.0,39.6 131.2,39.6"
    },
    // 13. 안전
    {
      wordKey: "safety", korean: "안전",
      audioUrl: "/audio/policestation/safety.mp3", videoPath: "/video/policestation/safety.mp4",
      sentence: "Safety is the most important rule in the community. Teaching safety rules to children is a big part of police work.",
      targetStyle: { top: '71.0%', left: '56.5%', width: '2.0%', height: '3.0%' },
      points: "90.4,63.9 93.6,63.9 93.6,66.6 90.4,66.6"
    },
    // 14. 긴급 상황
    {
      wordKey: "emergency", korean: "긴급 상황",
      audioUrl: "/audio/policestation/emergency.mp3", videoPath: "/video/policestation/emergency.mp4",
      sentence: "The emergency is loud and urgent on the radio. Responding to an emergency quickly is the officer's top priority.",
      targetStyle: { top: '34.0%', left: '31.0%', width: '4.0%', height: '3.0%' },
      points: "49.6,30.6 56.0,30.6 56.0,33.3 49.6,33.3"
    },
    // 15. CCTV
    {
      wordKey: "CCTV", korean: "CCTV/보안카메라",
      audioUrl: "/audio/policestation/cctv.mp3", videoPath: "/video/policestation/cctv.mp4",
      sentence: "The CCTV is high and clear on the wall. Checking CCTV footage helps detectives find important clues.",
      targetStyle: { top: '15.0%', left: '55.0%', width: '10.0%', height: '10.0%' },
      points: "88.0,13.5 104.0,13.5 104.0,22.5 88.0,22.5"
    },
    // 16. 책상
    {
      wordKey: "desk", korean: "책상",
      audioUrl: "/audio/policestation/desk.mp3", videoPath: "/video/policestation/desk.mp4",
      sentence: "The desk is wide and messy in the office. Sitting at the desk all day makes the officer tired.",
      targetStyle: { top: '70.0%', left: '20.0%', width: '6.0%', height: '5.0%' },
      points: "32.0,63.0 41.6,63.0 41.6,67.5 32.0,67.5"
    },
    // 17. 사무실
    {
      wordKey: "office", korean: "사무실",
      audioUrl: "/audio/policestation/office.mp3", videoPath: "/video/policestation/office.mp4",
      sentence: "The office is busy and noisy at the station. Working in the office requires strong focus and attention.",
      targetStyle: { top: '20.0%', left: '88.0%', width: '4.0%', height: '10.0%' },
      points: "140.8,18.0 147.2,18.0 147.2,27.0 140.8,27.0"
    },
    // 18. 용의자
    {
      wordKey: "suspect", korean: "용의자",
      audioUrl: "/audio/policestation/suspect.mp3", videoPath: "/video/policestation/suspect.mp4",
      sentence: "The suspect is quiet and nervous in the room. Questioning a suspect in the office takes patience and skill.",
      targetStyle: { top: '40.0%', left: '87.0%', width: '4.0%', height: '12.0%' },
      points: "139.2,36.0 145.6,36.0 145.6,46.8 139.2,46.8"
    },
    // 19. 체포하다
    {
      wordKey: "arrest", korean: "체포하다",
      audioUrl: "/audio/policestation/arrest.mp3", videoPath: "/video/policestation/arrest.mp4",
      sentence: "The arrest is serious and careful at the scene. Making an arrest outside is a dangerous part of police work.",
      targetStyle: { top: '38.0%', left: '93.0%', width: '4.0%', height: '12.0%' },
      points: "148.8,34.2 155.2,34.2 155.2,45.0 148.8,45.0"
    },
    // 20. 문서/서류
    {
      wordKey: "document", korean: "문서/서류",
      audioUrl: "/audio/policestation/document.mp3", videoPath: "/video/policestation/document.mp4",
      sentence: "The document is official and important on the desk. Signing a document at the station makes the case official.",
      targetStyle: { top: '73.0%', left: '80.0%', width: '4.0%', height: '10.0%' },
      points: "128.0,65.7 134.4,65.7 134.4,74.7 128.0,74.7"
    },
    // 21. 전화기
    {
      wordKey: "phone", korean: "전화기",
      audioUrl: "/audio/policestation/phone.mp3", videoPath: "/video/policestation/phone.mp4",
      sentence: "The phone is loud and busy on the desk. Answering the phone at the station is the officer's first task.",
      targetStyle: { top: '57.0%', left: '3.0%', width: '4.0%', height: '4.0%' },
      points: "4.8,51.3 11.2,51.3 11.2,54.9 4.8,54.9"
    },
    // 22. 열쇠
    {
      wordKey: "keys", korean: "열쇠",
      audioUrl: "/audio/policestation/keys.mp3", videoPath: "/video/policestation/keys.mp4",
      sentence: "The keys are heavy and loud on his belt. Keeping the keys on his belt is part of the uniform.",
      targetStyle: { top: '78.0%', left: '8.0%', width: '3.0%', height: '3.0%' },
      points: "12.8,70.2 17.6,70.2 17.6,72.9 12.8,72.9"
    },
    // 23. 지도
    {
      wordKey: "map", korean: "지도",
      audioUrl: "/audio/policestation/map.mp3", videoPath: "/video/policestation/map.mp4",
      sentence: "The map is large and detailed on the wall. Studying the map of the city helps officers patrol more safely.",
      targetStyle: { top: '28.0%', left: '2.0%', width: '6.0%', height: '10.0%' },
      points: "3.2,25.2 12.8,25.2 12.8,34.2 3.2,34.2"
    },
    // 24. 부츠/장화
    {
      wordKey: "boots", korean: "부츠/장화",
      audioUrl: "/audio/policestation/boots.mp3", videoPath: "/video/policestation/boots.mp4",
      sentence: "The boots are heavy and black on his feet. Wearing heavy boots all day makes the officer's feet tired.",
      targetStyle: { top: '90.0%', left: '56.0%', width: '4.0%', height: '6.0%' },
      points: "89.6,81.0 96.0,81.0 96.0,86.4 89.6,86.4"
    },
    // 25. 호각/호루라기
    {
      wordKey: "whistle", korean: "호각/호루라기",
      audioUrl: "/audio/policestation/whistle.mp3", videoPath: "/video/policestation/whistle.mp4",
      sentence: "The whistle is small and silver in her hand. Blowing a whistle in an emergency gets everyone's attention fast.",
      targetStyle: { top: '75.0%', left: '39.5%', width: '1.5%', height: '3.0%' },
      points: "63.2,67.5 65.6,67.5 65.6,70.2 63.2,70.2"
    }
  ]
};