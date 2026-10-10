import crosswalkImg from "@/assets/image/places/my-town/Crosswalk.png";

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
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway" | "crosswalk"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const crosswalkData: PlaceDataType = {
  placeKey: "crosswalk",
  placeTitle: "Crosswalk Word Adventure",
  bgImage: crosswalkImg,
  masterRegions: [
    // 1. 횡단보도 (비어있는 중앙 하단 횡단보도 영역으로 축소 이동)
    {
      wordKey: "crosswalk",
      korean: "횡단보도",
      audioUrl: "/audio/crosswalk/crosswalk.mp3",
      videoPath: "/video/crosswalk/Crosswalk.mp4",
      sentence: "The crosswalk is wide and white. The children cross the crosswalk.",
      imageType: "crosswalk",
      targetStyle: { top: '60.0%', left: '30.0%', width: '15.0%', height: '10.0%' },
      points: "48.0,54.0 72.0,54.0 72.0,63.0 48.0,63.0"
    },
    // 2. 신호등(보행자 신호기) (불빛 영역과 겹치지 않도록 왼쪽 빨간 손 모양 구역으로만 축소)
    {
      wordKey: "signal",
      korean: "신호등(신호기)",
      audioUrl: "/audio/crosswalk/signal.mp3",
      videoPath: "/video/crosswalk/Signal.mp4",
      sentence: "The signal is bright and clear. She watches the signal.",
      imageType: "crosswalk",
      targetStyle: { top: '20.0%', left: '56.0%', width: '4.0%', height: '10.0%' },
      points: "89.6,18.0 96.0,18.0 96.0,27.0 89.6,27.0"
    },
    // 3. 불빛 (신호등 영역과 분리되도록 오른쪽 초록색 사람 불빛에만 맞춤)
    {
      wordKey: "light",
      korean: "불빛",
      audioUrl: "/audio/crosswalk/light.mp3",
      videoPath: "/video/crosswalk/Light.mp4",
      sentence: "The light is red and round. He waits for the green light.",
      imageType: "crosswalk",
      targetStyle: { top: '22.0%', left: '61.0%', width: '3.0%', height: '8.0%' },
      points: "97.6,19.8 102.4,19.8 102.4,27.0 97.6,27.0"
    },
    // 4. 보행자 (소년의 몸통 부분만 지정하여 가방과 분리)
    {
      wordKey: "pedestrian",
      korean: "보행자",
      audioUrl: "/audio/crosswalk/pedestrian.mp3",
      videoPath: "/video/crosswalk/Pedestrian.mp4",
      sentence: "The pedestrian is careful and slow. The pedestrian walks across the street.",
      imageType: "crosswalk",
      targetStyle: { top: '50.0%', left: '65.0%', width: '5.0%', height: '18.0%' },
      points: "104.0,45.0 112.0,45.0 112.0,61.2 104.0,61.2"
    },
    // 5. 줄무늬 (좌측 중앙의 빈 흰색 줄무늬 하나만)
    {
      wordKey: "stripes",
      korean: "줄무늬",
      audioUrl: "/audio/crosswalk/stripes.mp3",
      videoPath: "/video/crosswalk/Stripes.mp4",
      sentence: "The stripes are white and straight. She walks on the stripes.",
      imageType: "crosswalk",
      targetStyle: { top: '50.0%', left: '35.0%', width: '8.0%', height: '4.0%' },
      points: "56.0,45.0 68.8,45.0 68.8,48.6 56.0,48.6"
    },
    // 6. 도로 (신호등 앞 빈 아스팔트 바닥 구역)
    {
      wordKey: "road",
      korean: "도로",
      audioUrl: "/audio/crosswalk/road.mp3",
      videoPath: "/video/crosswalk/Road.mp4",
      sentence: "The road is wide and busy. The car stops on the road.",
      imageType: "crosswalk",
      targetStyle: { top: '82.0%', left: '45.0%', width: '12.0%', height: '8.0%' },
      points: "72.0,73.8 91.2,73.8 91.2,81.0 72.0,81.0"
    },
    // 7. 거리/길 (조끼/호각과 겹치지 않도록 우측 상단 배경 도로로 이동)
    {
      wordKey: "street",
      korean: "거리(길)",
      audioUrl: "/audio/crosswalk/street.mp3",
      videoPath: "/video/crosswalk/Street.mp4",
      sentence: "The street is long and noisy. He crosses the street carefully.",
      imageType: "crosswalk",
      targetStyle: { top: '25.0%', left: '75.0%', width: '10.0%', height: '8.0%' },
      points: "120.0,22.5 136.0,22.5 136.0,29.7 120.0,29.7"
    },
    // 8. 자동차 (운전자 창문과 겹치지 않도록 차량 앞범퍼 및 앞바퀴 쪽으로 분리)
    {
      wordKey: "car",
      korean: "자동차",
      audioUrl: "/audio/crosswalk/car.mp3",
      videoPath: "/video/crosswalk/Car.mp4",
      sentence: "The car is big and blue. The car stops at the crosswalk.",
      imageType: "crosswalk",
      targetStyle: { top: '85.0%', left: '15.0%', width: '8.0%', height: '10.0%' },
      points: "24.0,76.5 36.8,76.5 36.8,85.5 24.0,85.5"
    },
    // 9. 운전자 (파란 차 안의 운전자 창문 영역)
    {
      wordKey: "driver",
      korean: "운전자",
      audioUrl: "/audio/crosswalk/driver.mp3",
      videoPath: "/video/crosswalk/Driver.mp4",
      sentence: "The driver is careful and patient. The driver waits for the pedestrians.",
      imageType: "crosswalk",
      targetStyle: { top: '80.0%', left: '3.0%', width: '5.0%', height: '8.0%' },
      points: "4.8,72.0 12.8,72.0 12.8,79.2 4.8,79.2"
    },
    // 10. 버튼 (신호등 기둥 아래 보행자 작동 버튼)
    {
      wordKey: "button",
      korean: "버튼",
      audioUrl: "/audio/crosswalk/button.mp3",
      videoPath: "/video/crosswalk/Button.mp4",
      sentence: "The button is small and round. She pushes the button on the pole.",
      imageType: "crosswalk",
      targetStyle: { top: '68.0%', left: '54.0%', width: '3.0%', height: '6.0%' },
      points: "86.4,61.2 91.2,61.2 91.2,66.6 86.4,66.6"
    },
    // 11. 기둥 (버튼과 다른 오브젝트를 뺀 기둥 중간 부분)
    {
      wordKey: "pole",
      korean: "기둥",
      audioUrl: "/audio/crosswalk/pole.mp3",
      videoPath: "/video/crosswalk/Pole.mp4",
      sentence: "The pole is tall and metal. The signal light sits on the pole.",
      imageType: "crosswalk",
      targetStyle: { top: '40.0%', left: '52.0%', width: '3.0%', height: '25.0%' },
      points: "83.2,36.0 88.0,36.0 88.0,58.5 83.2,58.5"
    },
    // 12. 연석(인도 턱) (왼쪽 인도와 도로 경계 턱 일부)
    {
      wordKey: "curb",
      korean: "연석(인도 턱)",
      audioUrl: "/audio/crosswalk/curb.mp3",
      videoPath: "/video/crosswalk/Curb.mp4",
      sentence: "The curb is low and gray. He steps off the curb.",
      imageType: "crosswalk",
      targetStyle: { top: '40.0%', left: '8.0%', width: '10.0%', height: '4.0%' },
      points: "12.8,36.0 28.8,36.0 28.8,39.6 12.8,39.6"
    },
    // 13. 인도/보도 (몬스터 뒤쪽의 빈 인도 구역)
    {
      wordKey: "sidewalk",
      korean: "인도(보도)",
      audioUrl: "/audio/crosswalk/sidewalk.mp3",
      videoPath: "/video/crosswalk/Sidewalk.mp4",
      sentence: "The sidewalk is clean and safe. The children walk on the sidewalk.",
      imageType: "crosswalk",
      targetStyle: { top: '32.0%', left: '4.0%', width: '10.0%', height: '6.0%' },
      points: "6.4,28.8 22.4,28.8 22.4,34.2 6.4,34.2"
    },
    // 14. 자전거 (우측 하단 자전거 구역)
    {
      wordKey: "bicycle",
      korean: "자전거",
      audioUrl: "/audio/crosswalk/bicycle.mp3",
      videoPath: "/video/crosswalk/Bicycle.mp4",
      sentence: "The bicycle is fast and light. She rides her bicycle on the road.",
      imageType: "crosswalk",
      targetStyle: { top: '50.0%', left: '88.0%', width: '8.0%', height: '22.0%' },
      points: "140.8,45.0 153.6,45.0 153.6,64.8 140.8,64.8"
    },
    // 15. 스쿠터/킥보드 (킥보드를 탄 소녀의 구역)
    {
      wordKey: "scooter",
      korean: "스쿠터(킥보드)",
      audioUrl: "/audio/crosswalk/scooter.mp3",
      videoPath: "/video/crosswalk/Scooter.mp4",
      sentence: "The scooter is small and fun. He rides a scooter.",
      imageType: "crosswalk",
      targetStyle: { top: '60.0%', left: '78.0%', width: '6.0%', height: '16.0%' },
      points: "124.8,54.0 134.4,54.0 134.4,68.4 124.8,68.4"
    },
    // 16. 유모차 (보라색 유모차 본체 구역)
    {
      wordKey: "stroller",
      korean: "유모차",
      audioUrl: "/audio/crosswalk/stroller.mp3",
      videoPath: "/video/crosswalk/Stroller.mp4",
      sentence: "The stroller is white and wide. The mom pushes the stroller.",
      imageType: "crosswalk",
      targetStyle: { top: '48.0%', left: '58.0%', width: '6.0%', height: '12.0%' },
      points: "92.8,43.2 102.4,43.2 102.4,54.0 92.8,54.0"
    },
    // 17. 배낭 (소년의 머리를 피해 실제 갈색 가방 위치)
    {
      wordKey: "backpack",
      korean: "배낭",
      audioUrl: "/audio/crosswalk/backpack.mp3",
      videoPath: "/video/crosswalk/Backpack.mp4",
      sentence: "The backpack is green and heavy. She carries a backpack.",
      imageType: "crosswalk",
      targetStyle: { top: '60.0%', left: '71.0%', width: '5.0%', height: '10.0%' },
      points: "113.6,54.0 121.6,54.0 121.6,63.0 113.6,63.0"
    },
    // 18. 우산 (여성이 들고 있는 상단의 우산)
    {
      wordKey: "umbrella",
      korean: "우산",
      audioUrl: "/audio/crosswalk/umbrella.mp3",
      videoPath: "/video/crosswalk/Umbrella.mp4",
      sentence: "The umbrella is big and yellow. He holds an umbrella.",
      imageType: "crosswalk",
      targetStyle: { top: '33.0%', left: '71.0%', width: '10.0%', height: '10.0%' },
      points: "113.6,29.7 129.6,29.7 129.6,38.7 113.6,38.7"
    },
    // 19. 표지판 (파란 차 앞쪽 보행자 표지판 보드)
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/crosswalk/sign.mp3",
      videoPath: "/video/crosswalk/Sign.mp4",
      sentence: "The sign is yellow and tall. She reads the sign on the pole.",
      imageType: "crosswalk",
      targetStyle: { top: '70.0%', left: '28.0%', width: '5.0%', height: '10.0%' },
      points: "44.8,63.0 52.8,63.0 52.8,72.0 44.8,72.0"
    },
    // 20. 선/라인 (수정: 허공에서 아래로 내려 실제 하얀색 정지선 위치로 완벽히 일치시킴)
    {
      wordKey: "line",
      korean: "선(라인)",
      audioUrl: "/audio/crosswalk/line.mp3",
      videoPath: "/video/crosswalk/Line.mp4",
      sentence: "The line is white and straight. The children stand behind the line.",
      imageType: "crosswalk",
      targetStyle: { top: '86.0%', left: '30.0%', width: '12.0%', height: '4.0%' },
      points: "48.0,77.4 67.2,77.4 67.2,81.0 48.0,81.0"
    },
    // 21. 안전 (초록색 몬스터 몸체 구역)
    {
      wordKey: "safety",
      korean: "안전",
      audioUrl: "/audio/crosswalk/safety.mp3",
      videoPath: "/video/crosswalk/Safety.mp4",
      sentence: "Safety is important and serious. The teacher teaches safety rules.",
      imageType: "crosswalk",
      targetStyle: { top: '18.0%', left: '15.0%', width: '8.0%', height: '20.0%' },
      points: "24.0,16.2 36.8,16.2 36.8,34.2 24.0,34.2"
    },
    // 22. 경고 (뒤편의 노란색 다이아몬드 표지판)
    {
      wordKey: "warning",
      korean: "경고",
      audioUrl: "/audio/crosswalk/warning.mp3",
      videoPath: "/video/crosswalk/Warning.mp4",
      sentence: "The warning is loud and clear. The signal gives a warning.",
      imageType: "crosswalk",
      targetStyle: { top: '15.0%', left: '47.0%', width: '3.0%', height: '4.0%' },
      points: "75.2,13.5 80.0,13.5 80.0,17.1 75.2,17.1"
    },
    // 23. 모서리/코너 (점자블록이 있는 보도블록 끝부분)
    {
      wordKey: "corner",
      korean: "모서리(코너)",
      audioUrl: "/audio/crosswalk/corner.mp3",
      videoPath: "/video/crosswalk/Corner.mp4",
      sentence: "The corner is sharp and busy. He stops at the corner.",
      imageType: "crosswalk",
      targetStyle: { top: '45.0%', left: '22.0%', width: '5.0%', height: '4.0%' },
      points: "35.2,40.5 43.2,40.5 43.2,44.1 35.2,44.1"
    },
    // 24. 호각 (표지판 기둥에 걸린 은색 호각 부분 - 조끼와 분리)
    {
      wordKey: "whistle",
      korean: "호각(휘파람)",
      audioUrl: "/audio/crosswalk/whistle.mp3",
      videoPath: "/video/crosswalk/Whistle.mp4",
      sentence: "The whistle is loud and sharp. The guard blows a whistle.",
      imageType: "crosswalk",
      targetStyle: { top: '24.0%', left: '31.0%', width: '3.0%', height: '6.0%' },
      points: "49.6,21.6 54.4,21.6 54.4,27.0 49.6,27.0"
    },
    // 25. 조끼 (기둥에 걸려있는 노란색 조끼)
    {
      wordKey: "vest",
      korean: "조끼",
      audioUrl: "/audio/crosswalk/vest.mp3",
      videoPath: "/video/crosswalk/Vest.mp4",
      sentence: "The vest is bright and orange. She wears a safety vest.",
      imageType: "crosswalk",
      targetStyle: { top: '24.0%', left: '36.0%', width: '4.0%', height: '8.0%' },
      points: "57.6,21.6 64.0,21.6 64.0,28.8 57.6,28.8"
    }
  ]
};