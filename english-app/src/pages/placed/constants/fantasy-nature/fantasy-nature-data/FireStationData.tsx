import firestationImg from "@/assets/image/places/fantasy-nature/Fire Station.jpg";

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

export const fireStationData: PlaceDataType = {
  placeKey: "firestation",
  placeTitle: "Fire Station Word Adventure",
  bgImage: firestationImg,
  masterRegions: [
    // 1. 소방관 (유니폼과 겹치지 않게 몬스터의 얼굴 부분으로 타이트하게 축소)
    {
      wordKey: "firefighter",
      korean: "소방관",
      audioUrl: "/audio/firestation/firefighter.mp3",
      videoPath: "/video/firestation/firefighter.mp4",
      sentence: "The firefighter is brave and strong at the station. Becoming a firefighter is his biggest dream for the future.",
      targetStyle: { top: '20.0%', left: '60.0%', width: '10.0%', height: '15.0%' },
      points: "96.0,18.0 112.0,18.0 112.0,31.5 96.0,31.5"
    },
    // 2. 호스 (좌측 바닥에 둥글게 말려있는 호스에만 정확히 맞춤)
    {
      wordKey: "hose",
      korean: "호스",
      audioUrl: "/audio/firestation/hose.mp3",
      videoPath: "/video/firestation/hose.mp4",
      sentence: "The hose is long and heavy on the truck. Holding a hose during a fire requires a lot of strength.",
      targetStyle: { top: '73.0%', left: '19.0%', width: '10.0%', height: '6.0%' },
      points: "30.4,65.7 46.4,65.7 46.4,71.1 30.4,71.1"
    },
    // 3. 사다리 (우측 벽에 기대어 있는 사다리)
    {
      wordKey: "ladder",
      korean: "사다리",
      audioUrl: "/audio/firestation/ladder.mp3",
      videoPath: "/video/firestation/ladder.mp4",
      sentence: "The ladder is tall and metal on the fire truck. Climbing a ladder to rescue people is very dangerous work.",
      targetStyle: { top: '35.0%', left: '81.0%', width: '4.0%', height: '15.0%' },
      points: "129.6,31.5 136.0,31.5 136.0,45.0 129.6,45.0"
    },
    // 4. 헬멧 (좌측 하단 테이블 위의 빨간 헬멧)
    {
      wordKey: "helmet",
      korean: "헬멧",
      audioUrl: "/audio/firestation/helmet.mp3",
      videoPath: "/video/firestation/helmet.mp4",
      sentence: "The helmet is hard and red on his head. Wearing a helmet protects the firefighter from falling debris.",
      targetStyle: { top: '75.0%', left: '0.0%', width: '6.0%', height: '10.0%' },
      points: "0.0,67.5 9.6,67.5 9.6,76.5 0.0,76.5"
    },
    // 5. 부츠/장화 (소방관의 좌측 발 부분)
    {
      wordKey: "boots",
      korean: "부츠/장화",
      audioUrl: "/audio/firestation/boots.mp3",
      videoPath: "/video/firestation/boots.mp4",
      sentence: "The boots are heavy and black on her feet. Putting on boots quickly at the station is part of daily training.",
      targetStyle: { top: '85.0%', left: '70.0%', width: '5.0%', height: '8.0%' },
      points: "112.0,76.5 120.0,76.5 120.0,83.7 112.0,83.7"
    },
    // 6. 유니폼/제복 (소방관의 몸통/가슴 부분)
    {
      wordKey: "uniform",
      korean: "유니폼/제복",
      audioUrl: "/audio/firestation/uniform.mp3",
      videoPath: "/video/firestation/uniform.mp4",
      sentence: "The uniform is thick and fireproof on the firefighter. Wearing a fireproof uniform keeps the firefighter safe from flames.",
      targetStyle: { top: '50.0%', left: '62.0%', width: '10.0%', height: '10.0%' },
      points: "99.2,45.0 115.2,45.0 115.2,54.0 99.2,54.0"
    },
    // 7. 소방차 (글자와 겹치지 않게 트럭 전면부 그릴로 축소)
    {
      wordKey: "fire_truck",
      korean: "소방차",
      audioUrl: "/audio/firestation/fire_truck.mp3",
      videoPath: "/video/firestation/fire_truck.mp4",
      sentence: "The fire truck is huge and red in the garage. Riding on a fire truck is every young child's dream.",
      targetStyle: { top: '40.0%', left: '18.0%', width: '8.0%', height: '10.0%' },
      points: "28.8,36.0 41.6,36.0 41.6,45.0 28.8,45.0"
    },
    // 8. 사이렌 (소방차 지붕 위 빨간 경광등)
    {
      wordKey: "siren",
      korean: "사이렌",
      audioUrl: "/audio/firestation/siren.mp3",
      videoPath: "/video/firestation/siren.mp4",
      sentence: "The siren is loud and sharp on top of the truck. Hearing the siren on the road means an emergency is happening.",
      targetStyle: { top: '23.0%', left: '21.0%', width: '5.0%', height: '4.0%' },
      points: "33.6,20.7 41.6,20.7 41.6,24.3 33.6,24.3"
    },
    // 9. 연기 (좌측 상단 열린 셔터 밖 하늘 구역)
    {
      wordKey: "smoke",
      korean: "연기",
      audioUrl: "/audio/firestation/smoke.mp3",
      videoPath: "/video/firestation/smoke.mp4",
      sentence: "The smoke is dark and thick above the building. Breathing in smoke during a fire is extremely dangerous.",
      targetStyle: { top: '15.0%', left: '10.0%', width: '8.0%', height: '8.0%' },
      points: "16.0,13.5 28.8,13.5 28.8,20.7 16.0,20.7"
    },
    // 10. 불 (소화기를 들고 있는 소년)
    {
      wordKey: "fire",
      korean: "불",
      audioUrl: "/audio/firestation/fire.mp3",
      videoPath: "/video/firestation/fire.mp4",
      sentence: "The fire is hot and fast in the building. Stopping a fire before it spreads saves many lives.",
      targetStyle: { top: '45.0%', left: '40.0%', width: '6.0%', height: '15.0%' },
      points: "64.0,40.5 73.6,40.5 73.6,54.0 64.0,54.0"
    },
    // 11. 구조 (메모를 적고 있는 소녀)
    {
      wordKey: "rescue",
      korean: "구조",
      audioUrl: "/audio/firestation/rescue.mp3",
      videoPath: "/video/firestation/rescue.mp4",
      sentence: "The rescue is difficult and urgent at the scene. Practicing rescue skills at the station is the firefighter's daily routine.",
      targetStyle: { top: '45.0%', left: '30.0%', width: '6.0%', height: '15.0%' },
      points: "48.0,40.5 57.6,40.5 57.6,54.0 48.0,54.0"
    },
    // 12. 소화기 (우측 바닥에 세워진 빨간 소화기)
    {
      wordKey: "extinguisher",
      korean: "소화기",
      audioUrl: "/audio/firestation/extinguisher.mp3",
      videoPath: "/video/firestation/extinguisher.mp4",
      sentence: "The extinguisher is heavy and red near the door. Using a fire extinguisher correctly can stop a small fire.",
      targetStyle: { top: '60.0%', left: '83.0%', width: '4.0%', height: '12.0%' },
      points: "132.8,54.0 139.2,54.0 139.2,64.8 132.8,64.8"
    },
    // 13. 장갑 (소방관이 들어올린 우측 주황색 장갑)
    {
      wordKey: "gloves",
      korean: "장갑",
      audioUrl: "/audio/firestation/gloves.mp3",
      videoPath: "/video/firestation/gloves.mp4",
      sentence: "The gloves are thick and fireproof on her hands. Wearing gloves during a rescue protects the firefighter's hands.",
      targetStyle: { top: '50.0%', left: '52.0%', width: '5.0%', height: '6.0%' },
      points: "83.2,45.0 91.2,45.0 91.2,50.4 83.2,50.4"
    },
    // 14. 마스크 (우측 벽 선반 위에 놓인 노란색 마스크 장비)
    {
      wordKey: "mask",
      korean: "마스크",
      audioUrl: "/audio/firestation/mask.mp3",
      videoPath: "/video/firestation/mask.mp4",
      sentence: "The mask is tight and clear on his face. Putting on a mask before entering a smoky building is essential.",
      targetStyle: { top: '27.0%', left: '93.0%', width: '4.0%', height: '6.0%' },
      points: "148.8,24.3 155.2,24.3 155.2,29.7 148.8,29.7"
    },
    // 15. 산소 탱크 (소방차 측면 칸막이 안에 있는 빨간 탱크들)
    {
      wordKey: "oxygen_tank",
      korean: "산소 탱크",
      audioUrl: "/audio/firestation/oxygen_tank.mp3",
      videoPath: "/video/firestation/oxygen_tank.mp4",
      sentence: "The oxygen tank is heavy and silver on his back. Carrying an oxygen tank into a fire helps the firefighter breathe.",
      targetStyle: { top: '40.0%', left: '47.0%', width: '5.0%', height: '8.0%' },
      points: "75.2,36.0 83.2,36.0 83.2,43.2 75.2,43.2"
    },
    // 16. 응급/비상 (좌측 셔터 옆 벽에 붙은 빨간색 비상벨 버튼)
    {
      wordKey: "emergency",
      korean: "응급/비상",
      audioUrl: "/audio/firestation/emergency.mp3",
      videoPath: "/video/firestation/emergency.mp4",
      sentence: "The emergency is sudden and serious in the city. Responding to an emergency within seconds is the firefighter's goal.",
      targetStyle: { top: '42.0%', left: '6.5%', width: '2.0%', height: '5.0%' },
      points: "10.4,37.8 13.6,37.8 13.6,42.3 10.4,42.3"
    },
    // 17. 소방서 (소방차 측면에 적힌 'FIRE STATION' 글자만 정확히)
    {
      wordKey: "station",
      korean: "소방서",
      audioUrl: "/audio/firestation/station.mp3",
      videoPath: "/video/firestation/station.mp4",
      sentence: "The station is clean and ready for any emergency. Living at the fire station during shifts is part of the job.",
      targetStyle: { top: '40.0%', left: '28.0%', width: '6.0%', height: '4.0%' },
      points: "44.8,36.0 54.4,36.0 54.4,39.6 44.8,39.6"
    },
    // 18. 종/벨 (우측 상단 벽에 매달린 금관 종)
    {
      wordKey: "bell",
      korean: "종/벨",
      audioUrl: "/audio/firestation/bell.mp3",
      videoPath: "/video/firestation/bell.mp4",
      sentence: "The bell is loud and clear on the station wall. Ringing the bell at the station signals the start of an emergency.",
      targetStyle: { top: '10.0%', left: '78.0%', width: '5.0%', height: '10.0%' },
      points: "124.8,9.0 132.8,9.0 132.8,18.0 124.8,18.0"
    },
    // 19. 안전 (우측 끝 상단 벽에 붙은 'SAFETY' 포스터)
    {
      wordKey: "safety",
      korean: "안전",
      audioUrl: "/audio/firestation/safety.mp3",
      videoPath: "/video/firestation/safety.mp4",
      sentence: "Safety is the most important rule at the fire station. Practicing safety drills at school helps everyone stay calm in emergencies.",
      targetStyle: { top: '6.0%', left: '92.0%', width: '5.0%', height: '12.0%' },
      points: "147.2,5.4 155.2,5.4 155.2,16.2 147.2,16.2"
    },
    // 20. 물 (우측 하단 수조통에 담긴 물)
    {
      wordKey: "water",
      korean: "물",
      audioUrl: "/audio/firestation/water.mp3",
      videoPath: "/video/firestation/water.mp4",
      sentence: "The water is cold and powerful from the hose. Spraying water on a fire from a distance keeps firefighters safe.",
      targetStyle: { top: '85.0%', left: '85.0%', width: '10.0%', height: '8.0%' },
      points: "136.0,76.5 152.0,76.5 152.0,83.7 136.0,83.7"
    },
    // 21. 소화전 (좌측 끝 바닥에 있는 빨간 소화전)
    {
      wordKey: "hydrant",
      korean: "소화전",
      audioUrl: "/audio/firestation/hydrant.mp3",
      videoPath: "/video/firestation/hydrant.mp4",
      sentence: "The hydrant is red and short on the street corner. Connecting the hose to the hydrant takes skill and speed.",
      targetStyle: { top: '57.0%', left: '4.5%', width: '4.0%', height: '12.0%' },
      points: "7.2,51.3 13.6,51.3 13.6,62.1 7.2,62.1"
    },
    // 22. 도끼 (우측 벽 하단에 걸린 빨간 도끼)
    {
      wordKey: "axe",
      korean: "도끼",
      audioUrl: "/audio/firestation/axe.mp3",
      videoPath: "/video/firestation/axe.mp4",
      sentence: "The axe is sharp and heavy in the firefighter's hand. Swinging an axe to break down a door saves trapped people.",
      targetStyle: { top: '55.0%', left: '93.0%', width: '2.5%', height: '5.0%' },
      points: "148.8,49.5 152.8,49.5 152.8,54.0 148.8,54.0"
    },
    // 23. 조명/전등 (천장 가운데에 달린 전등)
    {
      wordKey: "light",
      korean: "조명/전등",
      audioUrl: "/audio/firestation/light.mp3",
      videoPath: "/video/firestation/light.mp4",
      sentence: "The light is bright and flashing on the fire truck. Flashing the light on the truck warns drivers to clear the road.",
      targetStyle: { top: '2.0%', left: '50.0%', width: '5.0%', height: '6.0%' },
      points: "80.0,1.8 88.0,1.8 88.0,7.2 80.0,7.2"
    },
    // 24. 헬멧 턱끈 (좌측 하단 테이블 위 하얀색 헬멧)
    {
      wordKey: "helmet_strap",
      korean: "헬멧 턱끈",
      audioUrl: "/audio/firestation/helmet_strap.mp3",
      videoPath: "/video/firestation/helmet_strap.mp4",
      sentence: "The helmet strap is tight and secure under his chin. Fastening the helmet strap before entering a fire is very important.",
      targetStyle: { top: '75.0%', left: '7.5%', width: '6.0%', height: '10.0%' },
      points: "12.0,67.5 21.6,67.5 21.6,76.5 12.0,76.5"
    },
    // 25. 밧줄 (우측 벽에 둥글게 말려 걸려있는 밧줄)
    {
      wordKey: "rope",
      korean: "밧줄",
      audioUrl: "/audio/firestation/rope.mp3",
      videoPath: "/video/firestation/rope.mp4",
      sentence: "The rope is long and strong in the rescue bag. Throwing a rope to someone in danger is a key rescue skill.",
      targetStyle: { top: '38.0%', left: '94.0%', width: '3.5%', height: '15.0%' },
      points: "150.4,34.2 156.0,34.2 156.0,47.7 150.4,47.7"
    }
  ]
};