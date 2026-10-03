import busStop from "@/assets/image/places/my-town/Bus Stop.png";

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
  imageType?: "apartment" | "house" | "bakery" | "busstop"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

const busStopImg = busStop;

export const busStopData: PlaceDataType = {
  placeKey: "busstop",
  placeTitle: "Bus Stop Word Adventure",
  bgImage: busStopImg,
  masterRegions: [
    // 1. 버스 정류장 (가운데 유리 쉘터 구조물 전체)
    {
      wordKey: "bus_stop",
      korean: "버스 정류장",
      audioUrl: "/audio/busstop/bus_stop.mp3",
      videoPath: "/video/busstop/BusStop.mp4",
      sentence: "People are waiting for the bus at the bus stop.",
      imageType: "busstop",
      targetStyle: { top: '5.0%', left: '25.0%', width: '35.0%', height: '65.0%' },
      points: "40.0,4.5 96.0,4.5 96.0,63.0 40.0,63.0"
    },
    // 2. 노선 (쉘터 왼쪽의 런던 지하철 느낌의 노선도)
    {
      wordKey: "route",
      korean: "노선",
      audioUrl: "/audio/busstop/route.mp3",
      videoPath: "/video/busstop/Route.mp4",
      sentence: "I check the bus route to find my way.",
      imageType: "busstop",
      targetStyle: { top: '20.0%', left: '28.0%', width: '12.0%', height: '35.0%' },
      points: "44.8,18.0 64.0,18.0 64.0,49.5 44.8,49.5"
    },
    // 3. 운전기사 (버스 운전석의 초록색 몬스터)
    {
      wordKey: "driver",
      korean: "운전기사",
      audioUrl: "/audio/busstop/driver.mp3",
      videoPath: "/video/busstop/Driver.mp4",
      sentence: "The driver says hello to the passengers.",
      imageType: "busstop",
      targetStyle: { top: '35.0%', left: '85.0%', width: '12.0%', height: '20.0%' },
      points: "136.0,31.5 155.2,31.5 155.2,49.5 136.0,49.5"
    },
    // 4. 승객 (버스문 앞에서 카드를 건네는 여자아이)
    {
      wordKey: "passenger",
      korean: "승객",
      audioUrl: "/audio/busstop/passenger.mp3",
      videoPath: "/video/busstop/Passenger.mp4",
      sentence: "A passenger is getting on the bus.",
      imageType: "busstop",
      targetStyle: { top: '40.0%', left: '65.0%', width: '10.0%', height: '22.0%' },
      points: "104.0,36.0 120.0,36.0 120.0,55.8 104.0,55.8"
    },
    // 5. 요금 (여자아이가 단말기 쪽에 카드를 대는 동작 주변)
    {
      wordKey: "fare",
      korean: "요금",
      audioUrl: "/audio/busstop/fare.mp3",
      videoPath: "/video/busstop/Fare.mp4",
      sentence: "I pay the bus fare when I get on.",
      imageType: "busstop",
      targetStyle: { top: '48.0%', left: '65.0%', width: '5.0%', height: '5.0%' },
      points: "104.0,43.2 112.0,43.2 112.0,47.7 104.0,47.7"
    },
    // 6. 교통카드(카드) (여자아이가 들고 있는 초록색 카드)
    {
      wordKey: "card",
      korean: "카드(교통카드)",
      audioUrl: "/audio/busstop/card.mp3",
      videoPath: "/video/busstop/Card.mp4",
      sentence: "Tag your card to pay for the ride.",
      imageType: "busstop",
      targetStyle: { top: '49.0%', left: '66.0%', width: '2.0%', height: '3.0%' },
      points: "105.6,44.1 108.8,44.1 108.8,46.8 105.6,46.8"
    },
    // 7. 줄 (정류장 가운데에 서 있는 아이들 무리)
    {
      wordKey: "line",
      korean: "줄",
      audioUrl: "/audio/busstop/line.mp3",
      videoPath: "/video/busstop/Line.mp4",
      sentence: "People stand in a line to wait for the bus.",
      imageType: "busstop",
      targetStyle: { top: '55.0%', left: '45.0%', width: '15.0%', height: '30.0%' },
      points: "72.0,49.5 96.0,49.5 96.0,76.5 72.0,76.5"
    },
    // 8. 시간표 (정류장 오른쪽 기둥의 SCHEDULE 보드)
    {
      wordKey: "schedule",
      korean: "시간표",
      audioUrl: "/audio/busstop/schedule.mp3",
      videoPath: "/video/busstop/Schedule.mp4",
      sentence: "Look at the schedule to see the bus time.",
      imageType: "busstop",
      targetStyle: { top: '25.0%', left: '51.0%', width: '6.0%', height: '15.0%' },
      points: "81.6,22.5 91.2,22.5 91.2,36.0 81.6,36.0"
    },
    // 9. 벤치 (남자아이가 앉아있는 나무 의자)
    {
      wordKey: "bench",
      korean: "벤치(의자)",
      audioUrl: "/audio/busstop/bench.mp3",
      videoPath: "/video/busstop/Bench.mp4",
      sentence: "A boy is sitting on the bench.",
      imageType: "busstop",
      targetStyle: { top: '58.0%', left: '28.0%', width: '25.0%', height: '10.0%' },
      points: "44.8,52.2 84.8,52.2 84.8,61.2 44.8,61.2"
    },
    // 10. 지붕 (정류장의 어두운색 반투명 지붕)
    {
      wordKey: "roof",
      korean: "지붕",
      audioUrl: "/audio/busstop/roof.mp3",
      videoPath: "/video/busstop/Roof.mp4",
      sentence: "The bus stop roof keeps us safe from the rain.",
      imageType: "busstop",
      targetStyle: { top: '3.0%', left: '25.0%', width: '38.0%', height: '15.0%' },
      points: "40.0,2.7 100.8,2.7 100.8,16.2 40.0,16.2"
    },
    // 11. 비가림막(쉘터) (지붕과 유리를 포함한 구조물 전반)
    {
      wordKey: "shelter",
      korean: "비가림막(쉘터)",
      audioUrl: "/audio/busstop/shelter.mp3",
      videoPath: "/video/busstop/Shelter.mp4",
      sentence: "We can stay warm inside the bus shelter.",
      imageType: "busstop",
      targetStyle: { top: '5.0%', left: '25.0%', width: '35.0%', height: '65.0%' },
      points: "40.0,4.5 96.0,4.5 96.0,63.0 40.0,63.0"
    },
    // 12. 표지판 (오른쪽 뒤편의 파란색 BUS STOP 스탠드형 표지판)
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/busstop/sign.mp3",
      videoPath: "/video/busstop/Sign.mp4",
      sentence: "The sign shows the bus number.",
      imageType: "busstop",
      targetStyle: { top: '12.0%', left: '67.0%', width: '7.0%', height: '15.0%' },
      points: "107.2,10.8 118.4,10.8 118.4,24.3 107.2,24.3"
    },
    // 13. 도로 (버스 오른쪽 바퀴 밑으로 이어진 넓은 아스팔트 길)
    {
      wordKey: "road",
      korean: "도로",
      audioUrl: "/audio/busstop/road.mp3",
      videoPath: "/video/busstop/Road.mp4",
      sentence: "The bus drives safely on the road.",
      imageType: "busstop",
      targetStyle: { top: '60.0%', left: '60.0%', width: '40.0%', height: '40.0%' },
      points: "96.0,54.0 160.0,54.0 160.0,90.0 96.0,90.0"
    },
    // 14. 교통 (저 멀리 길 위에 보이는 자동차들)
    {
      wordKey: "traffic",
      korean: "교통(차량들)",
      audioUrl: "/audio/busstop/traffic.mp3",
      videoPath: "/video/busstop/Traffic.mp4",
      sentence: "There is a lot of traffic on the street today.",
      imageType: "busstop",
      targetStyle: { top: '22.0%', left: '60.0%', width: '12.0%', height: '10.0%' },
      points: "96.0,19.8 115.2,19.8 115.2,28.8 96.0,28.8"
    },
    // 15. 좌석 (버스 안 유리창으로 보이는 노란색 좌석)
    {
      wordKey: "seat",
      korean: "좌석",
      audioUrl: "/audio/busstop/seat.mp3",
      videoPath: "/video/busstop/Seat.mp4",
      sentence: "I find an empty seat on the bus.",
      imageType: "busstop",
      targetStyle: { top: '40.0%', left: '85.0%', width: '5.0%', height: '5.0%' },
      points: "136.0,36.0 144.0,36.0 144.0,40.5 136.0,40.5"
    },
    // 16. 서 있는 곳 (정류장 앞 아이들이 서 있는 보도블록 전체)
    {
      wordKey: "standing_area",
      korean: "서 있는 곳(입석 구역)",
      audioUrl: "/audio/busstop/standing_area.mp3",
      videoPath: "/video/busstop/StandingArea.mp4",
      sentence: "When seats are full, people stay in the standing area.",
      imageType: "busstop",
      targetStyle: { top: '65.0%', left: '20.0%', width: '50.0%', height: '35.0%' },
      points: "32.0,58.5 112.0,58.5 112.0,90.0 32.0,90.0"
    },
    // 17. 배낭 (정류장 왼쪽 바닥에 놓여있는 주황색 가방)
    {
      wordKey: "backpack",
      korean: "배낭",
      audioUrl: "/audio/busstop/backpack.mp3",
      videoPath: "/video/busstop/Backpack.mp4",
      sentence: "The student carries a heavy backpack.",
      imageType: "busstop",
      targetStyle: { top: '68.0%', left: '25.0%', width: '8.0%', height: '12.0%' },
      points: "40.0,61.2 52.8,61.2 52.8,72.0 40.0,72.0"
    },
    // 18. 지도 (쉘터 왼쪽 패널의 노선 지도)
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/busstop/map.mp3",
      videoPath: "/video/busstop/Map.mp4",
      sentence: "Look at the map to see where to go.",
      imageType: "busstop",
      targetStyle: { top: '20.0%', left: '28.0%', width: '12.0%', height: '35.0%' },
      points: "44.8,18.0 64.0,18.0 64.0,49.5 44.8,49.5"
    },
    // 19. 환승 (쉘터 가운데의 주황색 인포메이션 보드)
    {
      wordKey: "transfer",
      korean: "환승",
      audioUrl: "/audio/busstop/transfer.mp3",
      videoPath: "/video/busstop/Transfer.mp4",
      sentence: "You can transfer to another bus here.",
      imageType: "busstop",
      targetStyle: { top: '26.0%', left: '42.0%', width: '7.0%', height: '18.0%' },
      points: "67.2,23.4 78.4,23.4 78.4,39.6 67.2,39.6"
    },
    // 20. 도착 (정차하려고 다가온 버스의 전면부 헤드라이트 쪽)
    {
      wordKey: "arrival",
      korean: "도착",
      audioUrl: "/audio/busstop/arrival.mp3",
      videoPath: "/video/busstop/Arrival.mp4",
      sentence: "The digital screen shows the bus arrival time.",
      imageType: "busstop",
      targetStyle: { top: '60.0%', left: '75.0%', width: '25.0%', height: '25.0%' },
      points: "120.0,54.0 160.0,54.0 160.0,76.5 120.0,76.5"
    },
    // 21. 출발 (도로 멀리 떠나가고 있는 핑크색 자동차)
    {
      wordKey: "departure",
      korean: "출발",
      audioUrl: "/audio/busstop/departure.mp3",
      videoPath: "/video/busstop/Departure.mp4",
      sentence: "The bus departure is in five minutes.",
      imageType: "busstop",
      targetStyle: { top: '24.0%', left: '69.0%', width: '5.0%', height: '7.0%' },
      points: "110.4,21.6 118.4,21.6 118.4,27.9 110.4,27.9"
    },
    // 22. 벨 (정류장 지붕 가운데 매달려 있는 노란색 종)
    {
      wordKey: "bell",
      korean: "하차벨(벨)",
      audioUrl: "/audio/busstop/bell.mp3",
      videoPath: "/video/busstop/Bell.mp4",
      sentence: "Press the bell when you want to get off.",
      imageType: "busstop",
      targetStyle: { top: '15.0%', left: '51.0%', width: '4.0%', height: '6.0%' },
      points: "81.6,13.5 88.0,13.5 88.0,18.9 81.6,18.9"
    },
    // 23. 손잡이 (버스 앞유리 너머로 보이는 노란색 수직 기둥들)
    {
      wordKey: "handrail",
      korean: "손잡이",
      audioUrl: "/audio/busstop/handrail.mp3",
      videoPath: "/video/busstop/Handrail.mp4",
      sentence: "Hold the handrail tight while the bus is moving.",
      imageType: "busstop",
      targetStyle: { top: '25.0%', left: '82.0%', width: '4.0%', height: '18.0%' },
      points: "131.2,22.5 137.6,22.5 137.6,38.7 131.2,38.7"
    },
    // 24. 창문 (버스의 전면 대형 유리창)
    {
      wordKey: "window",
      korean: "창문",
      audioUrl: "/audio/busstop/window.mp3",
      videoPath: "/video/busstop/Window.mp4",
      sentence: "I look outside through the bus window.",
      imageType: "busstop",
      targetStyle: { top: '30.0%', left: '78.0%', width: '20.0%', height: '25.0%' },
      points: "124.8,27.0 156.8,27.0 156.8,49.5 124.8,49.5"
    },
    // 25. 거울 (버스의 왼쪽 바깥으로 튀어나온 검은색 사이드미러)
    {
      wordKey: "mirror",
      korean: "거울(백미러)",
      audioUrl: "/audio/busstop/mirror.mp3",
      videoPath: "/video/busstop/Mirror.mp4",
      sentence: "The driver checks the mirror before driving.",
      imageType: "busstop",
      targetStyle: { top: '32.0%', left: '72.0%', width: '4.0%', height: '10.0%' },
      points: "115.2,28.8 121.6,28.8 121.6,37.8 115.2,37.8"
    }
  ]
};