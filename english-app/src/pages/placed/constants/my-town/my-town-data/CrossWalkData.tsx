import crosswalkImg from "@/assets/image/places/my-town/Crosswalk.png"; //[cite: 5]

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
  // "crosswalk" 타입을 추가했습니다.
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
    // 1. 횡단보도 (도로 위의 하얀색 줄무늬 영역 전체)[cite: 5]
    {
      wordKey: "crosswalk",
      korean: "횡단보도",
      audioUrl: "/audio/crosswalk/crosswalk.mp3",
      videoPath: "/video/crosswalk/Crosswalk.mp4",
      sentence: "We must cross the street at the crosswalk.",
      imageType: "crosswalk",
      targetStyle: { top: '40.0%', left: '25.0%', width: '45.0%', height: '40.0%' },
      points: "40.0,36.0 112.0,36.0 112.0,72.0 40.0,72.0"
    },
    // 2. 신호등(보행자 신호기) (오른쪽 위의 주황색 테두리 박스)[cite: 5]
    {
      wordKey: "signal",
      korean: "신호등(신호기)",
      audioUrl: "/audio/crosswalk/signal.mp3",
      videoPath: "/video/crosswalk/Signal.mp4",
      sentence: "Wait for the pedestrian signal to turn green.",
      imageType: "crosswalk",
      targetStyle: { top: '15.0%', left: '55.0%', width: '12.0%', height: '20.0%' },
      points: "88.0,13.5 107.2,13.5 107.2,31.5 88.0,31.5"
    },
    // 3. 불빛 (신호등 안의 걷는 사람 모양 파란 불빛)[cite: 5]
    {
      wordKey: "light",
      korean: "불빛",
      audioUrl: "/audio/crosswalk/light.mp3",
      videoPath: "/video/crosswalk/Light.mp4",
      sentence: "The green light means you can go.",
      imageType: "crosswalk",
      targetStyle: { top: '18.0%', left: '61.0%', width: '4.0%', height: '12.0%' },
      points: "97.6,16.2 104.0,16.2 104.0,27.0 97.6,27.0"
    },
    // 4. 보행자 (횡단보도를 건너고 있는 배낭 멘 소년)[cite: 5]
    {
      wordKey: "pedestrian",
      korean: "보행자",
      audioUrl: "/audio/crosswalk/pedestrian.mp3",
      videoPath: "/video/crosswalk/Pedestrian.mp4",
      sentence: "The driver stops for the pedestrian.",
      imageType: "crosswalk",
      targetStyle: { top: '45.0%', left: '68.0%', width: '8.0%', height: '35.0%' },
      points: "108.8,40.5 121.6,40.5 121.6,72.0 108.8,72.0"
    },
    // 5. 줄무늬 (가로지르는 하얀 횡단보도 선들 중 하나)[cite: 5]
    {
      wordKey: "stripes",
      korean: "줄무늬",
      audioUrl: "/audio/crosswalk/stripes.mp3",
      videoPath: "/video/crosswalk/Stripes.mp4",
      sentence: "The crosswalk has white stripes.",
      imageType: "crosswalk",
      targetStyle: { top: '50.0%', left: '35.0%', width: '25.0%', height: '8.0%' },
      points: "56.0,45.0 96.0,45.0 96.0,52.2 56.0,52.2"
    },
    // 6. 도로 (자동차가 다니는 아스팔트 길)[cite: 5]
    {
      wordKey: "road",
      korean: "도로",
      audioUrl: "/audio/crosswalk/road.mp3",
      videoPath: "/video/crosswalk/Road.mp4",
      sentence: "Cars drive fast on the road.",
      imageType: "crosswalk",
      targetStyle: { top: '35.0%', left: '0.0%', width: '100.0%', height: '65.0%' },
      points: "0.0,31.5 160.0,31.5 160.0,90.0 0.0,90.0"
    },
    // 7. 거리/길 (도로와 주변 풍경을 포괄하는 중앙 위쪽 영역)[cite: 5]
    {
      wordKey: "street",
      korean: "거리(길)",
      audioUrl: "/audio/crosswalk/street.mp3",
      videoPath: "/video/crosswalk/Street.mp4",
      sentence: "There are many cars on the street today.",
      imageType: "crosswalk",
      targetStyle: { top: '20.0%', left: '30.0%', width: '40.0%', height: '40.0%' },
      points: "48.0,18.0 112.0,18.0 112.0,54.0 48.0,54.0"
    },
    // 8. 자동차 (왼쪽 아래 화면에 걸친 파란색 자동차)[cite: 5]
    {
      wordKey: "car",
      korean: "자동차",
      audioUrl: "/audio/crosswalk/car.mp3",
      videoPath: "/video/crosswalk/Car.mp4",
      sentence: "The blue car stops before the crosswalk.",
      imageType: "crosswalk",
      targetStyle: { top: '60.0%', left: '0.0%', width: '25.0%', height: '40.0%' },
      points: "0.0,54.0 40.0,54.0 40.0,90.0 0.0,90.0"
    },
    // 9. 운전자 (왼쪽 아래 파란 차 안의 사람)[cite: 5]
    {
      wordKey: "driver",
      korean: "운전자",
      audioUrl: "/audio/crosswalk/driver.mp3",
      videoPath: "/video/crosswalk/Driver.mp4",
      sentence: "The driver looks at the pedestrians safely.",
      imageType: "crosswalk",
      targetStyle: { top: '75.0%', left: '2.0%', width: '8.0%', height: '15.0%' },
      points: "3.2,67.5 16.0,67.5 16.0,81.0 3.2,81.0"
    },
    // 10. 버튼 (신호등 기둥 아래 노란색 보행자 버튼)[cite: 5]
    {
      wordKey: "button",
      korean: "버튼",
      audioUrl: "/audio/crosswalk/button.mp3",
      videoPath: "/video/crosswalk/Button.mp4",
      sentence: "Push the button to cross the street.",
      imageType: "crosswalk",
      targetStyle: { top: '65.0%', left: '52.0%', width: '4.0%', height: '10.0%' },
      points: "83.2,58.5 89.6,58.5 89.6,67.5 83.2,67.5"
    },
    // 11. 기둥 (신호등이 매달려 있는 굵은 회색 전봇대)[cite: 5]
    {
      wordKey: "pole",
      korean: "기둥",
      audioUrl: "/audio/crosswalk/pole.mp3",
      videoPath: "/video/crosswalk/Pole.mp4",
      sentence: "The traffic light is on a tall pole.",
      imageType: "crosswalk",
      targetStyle: { top: '5.0%', left: '49.0%', width: '6.0%', height: '90.0%' },
      points: "78.4,4.5 88.0,4.5 88.0,85.5 78.4,85.5"
    },
    // 12. 연석(인도 턱) (도로와 인도를 구분하는 회색 경계턱)[cite: 5]
    {
      wordKey: "curb",
      korean: "연석(인도 턱)",
      audioUrl: "/audio/crosswalk/curb.mp3",
      videoPath: "/video/crosswalk/Curb.mp4",
      sentence: "Stand behind the curb before you cross.",
      imageType: "crosswalk",
      targetStyle: { top: '40.0%', left: '5.0%', width: '30.0%', height: '10.0%' },
      points: "8.0,36.0 56.0,36.0 56.0,45.0 8.0,45.0"
    },
    // 13. 인도/보도 (초록 몬스터와 아이들이 서 있는 길)[cite: 5]
    {
      wordKey: "sidewalk",
      korean: "인도(보도)",
      audioUrl: "/audio/crosswalk/sidewalk.mp3",
      videoPath: "/video/crosswalk/Sidewalk.mp4",
      sentence: "We walk safely on the sidewalk.",
      imageType: "crosswalk",
      targetStyle: { top: '30.0%', left: '0.0%', width: '35.0%', height: '15.0%' },
      points: "0.0,27.0 56.0,27.0 56.0,40.5 0.0,40.5"
    },
    // 14. 자전거 (오른쪽 아래 자전거를 탄 소년)[cite: 5]
    {
      wordKey: "bicycle",
      korean: "자전거",
      audioUrl: "/audio/crosswalk/bicycle.mp3",
      videoPath: "/video/crosswalk/Bicycle.mp4",
      sentence: "The boy rides his bicycle carefully.",
      imageType: "crosswalk",
      targetStyle: { top: '50.0%', left: '83.0%', width: '15.0%', height: '35.0%' },
      points: "132.8,45.0 156.8,45.0 156.8,76.5 132.8,76.5"
    },
    // 15. 스쿠터/킥보드 (오른쪽 파란 킥보드를 탄 헬멧 쓴 소녀)[cite: 5]
    {
      wordKey: "scooter",
      korean: "스쿠터(킥보드)",
      audioUrl: "/audio/crosswalk/scooter.mp3",
      videoPath: "/video/crosswalk/Scooter.mp4",
      sentence: "She pushes her scooter across the street.",
      imageType: "crosswalk",
      targetStyle: { top: '60.0%', left: '75.0%', width: '10.0%', height: '20.0%' },
      points: "120.0,54.0 136.0,54.0 136.0,72.0 120.0,72.0"
    },
    // 16. 유모차 (우산 쓴 엄마가 밀고 있는 보라색 유모차)[cite: 5]
    {
      wordKey: "stroller",
      korean: "유모차",
      audioUrl: "/audio/crosswalk/stroller.mp3",
      videoPath: "/video/crosswalk/Stroller.mp4",
      sentence: "The mom is pushing a baby in the stroller.",
      imageType: "crosswalk",
      targetStyle: { top: '45.0%', left: '62.0%', width: '8.0%', height: '25.0%' },
      points: "99.2,40.5 112.0,40.5 112.0,63.0 99.2,63.0"
    },
    // 17. 배낭 (길을 건너는 소년의 갈색 등가방)[cite: 5]
    {
      wordKey: "backpack",
      korean: "배낭",
      audioUrl: "/audio/crosswalk/backpack.mp3",
      videoPath: "/video/crosswalk/Backpack.mp4",
      sentence: "The student carries a heavy backpack.",
      imageType: "crosswalk",
      targetStyle: { top: '55.0%', left: '71.0%', width: '5.0%', height: '12.0%' },
      points: "113.6,49.5 121.6,49.5 121.6,60.3 113.6,60.3"
    },
    // 18. 우산 (여성이 들고 있는 보라색 우산)[cite: 5]
    {
      wordKey: "umbrella",
      korean: "우산",
      audioUrl: "/audio/crosswalk/umbrella.mp3",
      videoPath: "/video/crosswalk/Umbrella.mp4",
      sentence: "Hold your umbrella to block the sun.",
      imageType: "crosswalk",
      targetStyle: { top: '30.0%', left: '72.0%', width: '12.0%', height: '15.0%' },
      points: "115.2,27.0 134.4,27.0 134.4,40.5 115.2,40.5"
    },
    // 19. 표지판 (파란 차 옆 인도에 세워진 네모난 횡단보도 표지판)[cite: 5]
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/crosswalk/sign.mp3",
      videoPath: "/video/crosswalk/Sign.mp4",
      sentence: "Look at the sign before crossing.",
      imageType: "crosswalk",
      targetStyle: { top: '70.0%', left: '28.0%', width: '6.0%', height: '15.0%' },
      points: "44.8,63.0 54.4,63.0 54.4,76.5 44.8,76.5"
    },
    // 20. 선/라인 (도로의 정지선 등 하얀 경계선)[cite: 5]
    {
      wordKey: "line",
      korean: "선(라인)",
      audioUrl: "/audio/crosswalk/line.mp3",
      videoPath: "/video/crosswalk/Line.mp4",
      sentence: "Cars must stop behind the white line.",
      imageType: "crosswalk",
      targetStyle: { top: '75.0%', left: '20.0%', width: '25.0%', height: '15.0%' },
      points: "32.0,67.5 72.0,67.5 72.0,81.0 32.0,81.0"
    },
    // 21. 안전 (초록색 몬스터가 안전 지도를 들고 서 있는 모습)[cite: 5]
    {
      wordKey: "safety",
      korean: "안전",
      audioUrl: "/audio/crosswalk/safety.mp3",
      videoPath: "/video/crosswalk/Safety.mp4",
      sentence: "Safety comes first when crossing the street.",
      imageType: "crosswalk",
      targetStyle: { top: '15.0%', left: '15.0%', width: '10.0%', height: '30.0%' },
      points: "24.0,13.5 40.0,13.5 40.0,40.5 24.0,40.5"
    },
    // 22. 경고 (뒤편 길의 깃발형 노란색 경고 표지판)[cite: 5]
    {
      wordKey: "warning",
      korean: "경고",
      audioUrl: "/audio/crosswalk/warning.mp3",
      videoPath: "/video/crosswalk/Warning.mp4",
      sentence: "The yellow sign gives a warning to drivers.",
      imageType: "crosswalk",
      targetStyle: { top: '14.0%', left: '45.0%', width: '4.0%', height: '5.0%' },
      points: "72.0,12.6 78.4,12.6 78.4,17.1 72.0,17.1"
    },
    // 23. 모서리/코너 (아이들이 서 있는 인도 끝 점자블록 코너)[cite: 5]
    {
      wordKey: "corner",
      korean: "모서리(코너)",
      audioUrl: "/audio/crosswalk/corner.mp3",
      videoPath: "/video/crosswalk/Corner.mp4",
      sentence: "Wait at the corner of the street.",
      imageType: "crosswalk",
      targetStyle: { top: '45.0%', left: '21.0%', width: '12.0%', height: '5.0%' },
      points: "33.6,40.5 52.8,40.5 52.8,45.0 33.6,45.0"
    },
    // 24. 호각 (뒤쪽 표지판 기둥에 매달린 은색 호각)[cite: 5]
    {
      wordKey: "whistle",
      korean: "호각(휘파람)",
      audioUrl: "/audio/crosswalk/whistle.mp3",
      videoPath: "/video/crosswalk/Whistle.mp4",
      sentence: "The crossing guard blows the whistle.",
      imageType: "crosswalk",
      targetStyle: { top: '21.0%', left: '35.0%', width: '2.0%', height: '5.0%' },
      points: "56.0,18.9 59.2,18.9 59.2,23.4 56.0,23.4"
    },
    // 25. 조끼 (뒤쪽 기둥에 걸려있는 노란색 안전 조끼)[cite: 5]
    {
      wordKey: "vest",
      korean: "조끼",
      audioUrl: "/audio/crosswalk/vest.mp3",
      videoPath: "/video/crosswalk/Vest.mp4",
      sentence: "Wear a yellow vest so cars can see you.",
      imageType: "crosswalk",
      targetStyle: { top: '19.0%', left: '37.0%', width: '5.0%', height: '10.0%' },
      points: "59.2,17.1 67.2,17.1 67.2,26.1 59.2,26.1"
    }
  ]
};