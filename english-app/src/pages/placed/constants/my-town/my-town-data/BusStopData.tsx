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
    // 1. 버스 정류장 (쉘터 상단 전면의 정류장 간판 프레임)
    {
      wordKey: "bus_stop",
      korean: "버스 정류장",
      audioUrl: "/audio/busstop/bus_stop.mp3",
      videoPath: "/video/busstop/BusStop.mp4",
      sentence: "People are waiting for the bus at the bus stop.",
      imageType: "busstop",
      targetStyle: { top: '14.0%', left: '32.0%', width: '18.0%', height: '7.0%' },
      points: "51.2,12.6 80.0,12.6 80.0,18.9 51.2,18.9"
    },
    // 2. 노선 (쉘터 왼쪽의 런던 지하철 스타일 노선도)
    {
      wordKey: "route",
      korean: "노선",
      audioUrl: "/audio/busstop/route.mp3",
      videoPath: "/video/busstop/Route.mp4",
      sentence: "I check the bus route to find my way.",
      imageType: "busstop",
      targetStyle: { top: '23.0%', left: '29.0%', width: '10.0%', height: '24.0%' },
      points: "46.4,20.7 62.4,20.7 62.4,42.3 46.4,42.3"
    },
    // 3. 운전기사 (오른쪽의 초록색 몬스터 바리스타/기사 얼굴 및 운전석)
    {
      wordKey: "driver",
      korean: "운전기사",
      audioUrl: "/audio/busstop/driver.mp3",
      videoPath: "/video/busstop/Driver.mp4",
      sentence: "The driver says hello to the passengers.",
      imageType: "busstop",
      targetStyle: { top: '22.0%', left: '88.0%', width: '10.5%', height: '27.0%' },
      points: "140.8,19.8 157.6,19.8 157.6,44.1 140.8,44.1"
    },
    // 4. 승객 (버스 앞 여자아이 얼굴과 상반신 위쪽)
    {
      wordKey: "passenger",
      korean: "승객",
      audioUrl: "/audio/busstop/passenger.mp3",
      videoPath: "/video/busstop/Passenger.mp4",
      sentence: "A passenger is getting on the bus.",
      imageType: "busstop",
      targetStyle: { top: '37.0%', left: '64.0%', width: '8.0%', height: '10.5%' },
      points: "102.4,33.3 115.2,33.3 115.2,42.7 102.4,42.7"
    },
    // 5. 요금 (승객 손 오른쪽의 버스 문 안쪽 단말기 화면 구역)
    {
      wordKey: "fare",
      korean: "요금",
      audioUrl: "/audio/busstop/fare.mp3",
      videoPath: "/video/busstop/Fare.mp4",
      sentence: "I pay the bus fare when I get on.",
      imageType: "busstop",
      targetStyle: { top: '48.5%', left: '71.0%', width: '4.0%', height: '5.5%' },
      points: "113.6,43.6 120.0,43.6 120.0,48.6 113.6,48.6"
    },
    // 6. 교통카드(카드) (여자아이가 내미는 손과 카드)
    {
      wordKey: "card",
      korean: "카드(교통카드)",
      audioUrl: "/audio/busstop/card.mp3",
      videoPath: "/video/busstop/Card.mp4",
      sentence: "Tag your card to pay for the ride.",
      imageType: "busstop",
      targetStyle: { top: '47.0%', left: '66.0%', width: '5.5%', height: '6.5%' },
      points: "105.6,42.3 114.4,42.3 114.4,48.1 105.6,48.1"
    },
    // 7. 줄 (정류장 가운데에 줄 서 있는 아이들)
    {
      wordKey: "line",
      korean: "줄",
      audioUrl: "/audio/busstop/line.mp3",
      videoPath: "/video/busstop/Line.mp4",
      sentence: "People stand in a line to wait for the bus.",
      imageType: "busstop",
      targetStyle: { top: '56.0%', left: '46.0%', width: '13.0%', height: '24.0%' },
      points: "73.6,50.4 94.4,50.4 94.4,72.0 73.6,72.0"
    },
    // 8. 시간표 (오른쪽 기둥의 시간표 안내판)
    {
      wordKey: "schedule",
      korean: "시간표",
      audioUrl: "/audio/busstop/schedule.mp3",
      videoPath: "/video/busstop/Schedule.mp4",
      sentence: "Look at the schedule to see the bus time.",
      imageType: "busstop",
      targetStyle: { top: '27.0%', left: '52.0%', width: '5.5%', height: '13.0%' },
      points: "83.2,24.3 92.0,24.3 92.0,36.0 83.2,36.0"
    },
    // 9. 벤치 (앉아 있는 의자 좌판)
    {
      wordKey: "bench",
      korean: "벤치(의자)",
      audioUrl: "/audio/busstop/bench.mp3",
      videoPath: "/video/busstop/Bench.mp4",
      sentence: "A boy is sitting on the bench.",
      imageType: "busstop",
      targetStyle: { top: '60.0%', left: '30.0%', width: '16.0%', height: '7.5%' },
      points: "48.0,54.0 73.6,54.0 73.6,60.7 48.0,60.7"
    },
    // 10. 지붕 (정류장의 어두운색 반투명 지붕)
    {
      wordKey: "roof",
      korean: "지붕",
      audioUrl: "/audio/busstop/roof.mp3",
      videoPath: "/video/busstop/Roof.mp4",
      sentence: "The bus stop roof keeps us safe from the rain.",
      imageType: "busstop",
      targetStyle: { top: '4.0%', left: '26.0%', width: '33.0%', height: '10.0%' },
      points: "41.6,3.6 94.4,3.6 94.4,12.6 41.6,12.6"
    },
    // 11. 비가림막(쉘터) (쉘터 왼쪽 측면 유리 프레임 기둥)
    {
      wordKey: "shelter",
      korean: "비가림막(쉘터)",
      audioUrl: "/audio/busstop/shelter.mp3",
      videoPath: "/video/busstop/Shelter.mp4",
      sentence: "We can stay warm inside the bus shelter.",
      imageType: "busstop",
      targetStyle: { top: '18.0%', left: '24.0%', width: '5.0%', height: '42.0%' },
      points: "38.4,16.2 46.4,16.2 46.4,54.0 38.4,54.0"
    },
    // 12. 표지판 (오른쪽 뒤편의 파란색 BUS STOP 스탠드형 표지판)
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/busstop/sign.mp3",
      videoPath: "/video/busstop/Sign.mp4",
      sentence: "The sign shows the bus number.",
      imageType: "busstop",
      targetStyle: { top: '13.0%', left: '67.0%', width: '6.5%', height: '14.0%' },
      points: "107.2,11.7 117.6,11.7 117.6,24.3 107.2,24.3"
    },
    // 13. 도로 (버스 하단 오른쪽의 순수 아스팔트 노면)
    {
      wordKey: "road",
      korean: "도로",
      audioUrl: "/audio/busstop/road.mp3",
      videoPath: "/video/busstop/Road.mp4",
      sentence: "The bus drives safely on the road.",
      imageType: "busstop",
      targetStyle: { top: '78.0%', left: '68.0%', width: '28.0%', height: '18.0%' },
      points: "108.8,70.2 153.6,70.2 153.6,86.4 108.8,86.4"
    },
    // 14. 교통 (멀리 보이는 차량들)
    {
      wordKey: "traffic",
      korean: "교통(차량들)",
      audioUrl: "/audio/busstop/traffic.mp3",
      videoPath: "/video/busstop/Traffic.mp4",
      sentence: "There is a lot of traffic on the street today.",
      imageType: "busstop",
      targetStyle: { top: '22.0%', left: '60.0%', width: '9.0%', height: '9.0%' },
      points: "96.0,19.8 110.4,19.8 110.4,27.9 96.0,27.9"
    },
    // 15. 좌석 (기사 왼쪽 창가에 아이들이 앉아 있는 노란/녹색 좌석)
    {
      wordKey: "seat",
      korean: "좌석",
      audioUrl: "/audio/busstop/seat.mp3",
      videoPath: "/video/busstop/Seat.mp4",
      sentence: "I find an empty seat on the bus.",
      imageType: "busstop",
      targetStyle: { top: '30.0%', left: '80.0%', width: '7.5%', height: '19.0%' },
      points: "128.0,27.0 140.0,27.0 140.0,44.1 128.0,44.1"
    },
    // 16. 서 있는 곳 (아이들이 없는 왼쪽 하단 보도블록 빈 공간)
    {
      wordKey: "standing_area",
      korean: "서 있는 곳(입석 구역)",
      audioUrl: "/audio/busstop/standing_area.mp3",
      videoPath: "/video/busstop/StandingArea.mp4",
      sentence: "When seats are full, people stay in the standing area.",
      imageType: "busstop",
      targetStyle: { top: '78.0%', left: '26.0%', width: '18.0%', height: '15.0%' },
      points: "41.6,70.2 70.4,70.2 70.4,83.7 41.6,83.7"
    },
    // 17. 배낭 (정류장 왼쪽 바닥에 놓인 주황색 가방)
    {
      wordKey: "backpack",
      korean: "배낭",
      audioUrl: "/audio/busstop/backpack.mp3",
      videoPath: "/video/busstop/Backpack.mp4",
      sentence: "The student carries a heavy backpack.",
      imageType: "busstop",
      targetStyle: { top: '69.0%', left: '25.0%', width: '6.5%', height: '9.5%' },
      points: "40.0,62.1 50.4,62.1 50.4,70.6 40.0,70.6"
    },
    // 18. 지도 (쉘터 왼쪽 패널 중앙의 확대 지도 영역)
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/busstop/map.mp3",
      videoPath: "/video/busstop/Map.mp4",
      sentence: "Look at the map to see where to go.",
      imageType: "busstop",
      targetStyle: { top: '46.0%', left: '29.0%', width: '9.5%', height: '11.0%' },
      points: "46.4,41.4 61.6,41.4 61.6,51.3 46.4,51.3"
    },
    // 19. 환승 (쉘터 가운데 주황색 인포메이션 보드)
    {
      wordKey: "transfer",
      korean: "환승",
      audioUrl: "/audio/busstop/transfer.mp3",
      videoPath: "/video/busstop/Transfer.mp4",
      sentence: "You can transfer to another bus here.",
      imageType: "busstop",
      targetStyle: { top: '28.0%', left: '42.5%', width: '6.5%', height: '15.0%' },
      points: "68.0,25.2 78.4,25.2 78.4,38.7 68.0,38.7"
    },
    // 20. 도착 (정차한 버스 앞 범퍼 및 헤드라이트)
    {
      wordKey: "arrival",
      korean: "도착",
      audioUrl: "/audio/busstop/arrival.mp3",
      videoPath: "/video/busstop/Arrival.mp4",
      sentence: "The digital screen shows the bus arrival time.",
      imageType: "busstop",
      targetStyle: { top: '62.0%', left: '78.0%', width: '14.0%', height: '12.0%' },
      points: "124.8,55.8 147.2,55.8 147.2,66.6 124.8,66.6"
    },
    // 21. 출발 (도로 멀리 떠나가는 자동차)
    {
      wordKey: "departure",
      korean: "출발",
      audioUrl: "/audio/busstop/departure.mp3",
      videoPath: "/video/busstop/Departure.mp4",
      sentence: "The bus departure is in five minutes.",
      imageType: "busstop",
      targetStyle: { top: '24.0%', left: '69.0%', width: '4.5%', height: '6.0%' },
      points: "110.4,21.6 117.6,21.6 117.6,27.0 110.4,27.0"
    },
    // 22. 벨 (정류장 지붕 가운데 매달린 노란색 종/벨)
    {
      wordKey: "bell",
      korean: "하차벨(벨)",
      audioUrl: "/audio/busstop/bell.mp3",
      videoPath: "/video/busstop/Bell.mp4",
      sentence: "Press the bell when you want to get off.",
      imageType: "busstop",
      targetStyle: { top: '15.0%', left: '51.5%', width: '3.5%', height: '5.5%' },
      points: "82.4,13.5 88.0,13.5 88.0,18.4 82.4,18.4"
    },
    // 23. 손잡이 (창가 좌석과 기사 사이의 노란색 수직 손잡이 기둥)
    {
      wordKey: "handrail",
      korean: "손잡이",
      audioUrl: "/audio/busstop/handrail.mp3",
      videoPath: "/video/busstop/Handrail.mp4",
      sentence: "Hold the handrail tight while the bus is moving.",
      imageType: "busstop",
      targetStyle: { top: '20.0%', left: '85.5%', width: '3.0%', height: '22.0%' },
      points: "136.8,18.0 141.6,18.0 141.6,37.8 136.8,37.8"
    },
    // 24. 창문 (버스 상단 전면 유리창)
    {
      wordKey: "window",
      korean: "창문",
      audioUrl: "/audio/busstop/window.mp3",
      videoPath: "/video/busstop/Window.mp4",
      sentence: "I look outside through the bus window.",
      imageType: "busstop",
      targetStyle: { top: '12.0%', left: '81.0%', width: '14.0%', height: '9.0%' },
      points: "129.6,10.8 152.0,10.8 152.0,18.9 129.6,18.9"
    },
    // 25. 거울 (버스의 왼쪽 사이드미러)
    {
      wordKey: "mirror",
      korean: "거울(백미러)",
      audioUrl: "/audio/busstop/mirror.mp3",
      videoPath: "/video/busstop/Mirror.mp4",
      sentence: "The driver checks the mirror before driving.",
      imageType: "busstop",
      targetStyle: { top: '32.0%', left: '72.5%', width: '3.5%', height: '8.5%' },
      points: "116.0,28.8 121.6,28.8 121.6,36.4 116.0,36.4"
    }
  ] 
};