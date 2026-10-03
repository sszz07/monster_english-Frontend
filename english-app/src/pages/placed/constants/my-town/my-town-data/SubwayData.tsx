import subwayImg from "@/assets/image/places/my-town/Subway.png"; //[cite: 4]

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
  // "subway" 타입을 추가했습니다.
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const subwayData: PlaceDataType = {
  placeKey: "subway",
  placeTitle: "Subway Word Adventure",
  bgImage: subwayImg,
  masterRegions: [
    // 1. 지하철 (오른쪽의 열차 전체)[cite: 4]
    {
      wordKey: "subway",
      korean: "지하철",
      audioUrl: "/audio/subway/subway.mp3",
      videoPath: "/video/subway/Subway.mp4",
      sentence: "I take the subway to go to the city.",
      imageType: "subway",
      targetStyle: { top: '5.0%', left: '60.0%', width: '40.0%', height: '90.0%' },
      points: "96.0,4.5 160.0,4.5 160.0,85.5 96.0,85.5"
    },
    // 2. 역 (지하철역 내부 천장과 배경 전반)[cite: 4]
    {
      wordKey: "station",
      korean: "역",
      audioUrl: "/audio/subway/station.mp3",
      videoPath: "/video/subway/Station.mp4",
      sentence: "The subway station is very busy.",
      imageType: "subway",
      targetStyle: { top: '0.0%', left: '0.0%', width: '100.0%', height: '20.0%' },
      points: "0.0,0.0 160.0,0.0 160.0,18.0 0.0,18.0"
    },
    // 3. 노선 (열차 겉면에 있는 여러 색깔의 선형 지도)[cite: 4]
    {
      wordKey: "line",
      korean: "노선",
      audioUrl: "/audio/subway/line.mp3",
      videoPath: "/video/subway/Line.mp4",
      sentence: "We need to take the green line.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '85.0%', width: '15.0%', height: '50.0%' },
      points: "136.0,22.5 160.0,22.5 160.0,67.5 136.0,67.5"
    },
    // 4. 기차/열차 (정차해 있는 지하철 열차칸)[cite: 4]
    {
      wordKey: "train",
      korean: "기차(열차)",
      audioUrl: "/audio/subway/train.mp3",
      videoPath: "/video/subway/Train.mp4",
      sentence: "The train is arriving right now.",
      imageType: "subway",
      targetStyle: { top: '10.0%', left: '65.0%', width: '35.0%', height: '80.0%' },
      points: "104.0,9.0 160.0,9.0 160.0,81.0 104.0,81.0"
    },
    // 5. 승강장 (가운데 노란색 안전선이 있는 플랫폼)[cite: 4]
    {
      wordKey: "platform",
      korean: "승강장(플랫폼)",
      audioUrl: "/audio/subway/platform.mp3",
      videoPath: "/video/subway/Platform.mp4",
      sentence: "Please wait safely on the platform.",
      imageType: "subway",
      targetStyle: { top: '50.0%', left: '55.0%', width: '10.0%', height: '50.0%' },
      points: "88.0,45.0 104.0,45.0 104.0,90.0 88.0,90.0"
    },
    // 6. 선로 (오른쪽 아래 열차 바퀴가 있는 길)[cite: 4]
    {
      wordKey: "track",
      korean: "선로",
      audioUrl: "/audio/subway/track.mp3",
      videoPath: "/video/subway/Track.mp4",
      sentence: "Never drop anything on the track.",
      imageType: "subway",
      targetStyle: { top: '80.0%', left: '70.0%', width: '10.0%', height: '10.0%' },
      points: "112.0,72.0 128.0,72.0 128.0,81.0 112.0,81.0"
    },
    // 7. 표 (왼쪽 앞의 티켓 자동 발매기)[cite: 4]
    {
      wordKey: "ticket",
      korean: "표(티켓)",
      audioUrl: "/audio/subway/ticket.mp3",
      videoPath: "/video/subway/Ticket.mp4",
      sentence: "You need a ticket to ride the subway.",
      imageType: "subway",
      targetStyle: { top: '40.0%', left: '23.0%', width: '8.0%', height: '35.0%' },
      points: "36.8,36.0 49.6,36.0 49.6,67.5 36.8,67.5"
    },
    // 8. 개찰구 (중앙에 있는 은색 게이트 통과 장치)[cite: 4]
    {
      wordKey: "gate",
      korean: "개찰구",
      audioUrl: "/audio/subway/gate.mp3",
      videoPath: "/video/subway/Gate.mp4",
      sentence: "Scan your card to open the gate.",
      imageType: "subway",
      targetStyle: { top: '45.0%', left: '33.0%', width: '10.0%', height: '20.0%' },
      points: "52.8,40.5 68.8,40.5 68.8,58.5 52.8,58.5"
    },
    // 9. 출구 (뒤편 배경의 STAIRS로 향하는 나가는 방향)[cite: 4]
    {
      wordKey: "exit",
      korean: "출구",
      audioUrl: "/audio/subway/exit.mp3",
      videoPath: "/video/subway/Exit.mp4",
      sentence: "Let's find the exit to go outside.",
      imageType: "subway",
      targetStyle: { top: '15.0%', left: '32.0%', width: '12.0%', height: '5.0%' },
      points: "51.2,13.5 70.4,13.5 70.4,18.0 51.2,18.0"
    },
    // 10. 입구 (뒤편 매표소가 있는 배경 구역)[cite: 4]
    {
      wordKey: "entrance",
      korean: "입구",
      audioUrl: "/audio/subway/entrance.mp3",
      videoPath: "/video/subway/Entrance.mp4",
      sentence: "We met at the station entrance.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '32.0%', width: '10.0%', height: '15.0%' },
      points: "51.2,22.5 67.2,22.5 67.2,36.0 51.2,36.0"
    },
    // 11. 승객 (배낭을 메고 서 있는 여자아이)[cite: 4]
    {
      wordKey: "passenger",
      korean: "승객",
      audioUrl: "/audio/subway/passenger.mp3",
      videoPath: "/video/subway/Passenger.mp4",
      sentence: "A passenger is waiting for the train.",
      imageType: "subway",
      targetStyle: { top: '45.0%', left: '10.0%', width: '5.0%', height: '20.0%' },
      points: "16.0,40.5 24.0,40.5 24.0,58.5 16.0,58.5"
    },
    // 12. 좌석 (열차 문 안으로 보이는 파란색 의자)[cite: 4]
    {
      wordKey: "seat",
      korean: "좌석",
      audioUrl: "/audio/subway/seat.mp3",
      videoPath: "/video/subway/Seat.mp4",
      sentence: "I found an empty seat inside.",
      imageType: "subway",
      targetStyle: { top: '45.0%', left: '73.0%', width: '5.0%', height: '15.0%' },
      points: "116.8,40.5 124.8,40.5 124.8,54.0 116.8,54.0"
    },
    // 13. 지도 (열차 겉면에 크게 붙어있는 노선도 맵)[cite: 4]
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/subway/map.mp3",
      videoPath: "/video/subway/Map.mp4",
      sentence: "Look at the map to find your station.",
      imageType: "subway",
      targetStyle: { top: '20.0%', left: '84.0%', width: '15.0%', height: '60.0%' },
      points: "134.4,18.0 158.4,18.0 158.4,72.0 134.4,72.0"
    },
    // 14. 표지판 (천장에 매달린 STAIRS 안내판)[cite: 4]
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/subway/sign.mp3",
      videoPath: "/video/subway/Sign.mp4",
      sentence: "The sign shows where to go.",
      imageType: "subway",
      targetStyle: { top: '15.0%', left: '3.0%', width: '12.0%', height: '6.0%' },
      points: "4.8,13.5 24.0,13.5 24.0,18.9 4.8,18.9"
    },
    // 15. 계단 (화면 왼쪽 끝의 올라가는 계단)[cite: 4]
    {
      wordKey: "stairs",
      korean: "계단",
      audioUrl: "/audio/subway/stairs.mp3",
      videoPath: "/video/subway/Stairs.mp4",
      sentence: "Walk down the stairs to the platform.",
      imageType: "subway",
      targetStyle: { top: '30.0%', left: '0.0%', width: '10.0%', height: '30.0%' },
      points: "0.0,27.0 16.0,27.0 16.0,54.0 0.0,54.0"
    },
    // 16. 엘리베이터 (시계 밑 금색 테두리의 엘리베이터 문)[cite: 4]
    {
      wordKey: "elevator",
      korean: "엘리베이터",
      audioUrl: "/audio/subway/elevator.mp3",
      videoPath: "/video/subway/Elevator.mp4",
      sentence: "Take the elevator if you have a heavy bag.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '20.0%', width: '7.0%', height: '30.0%' },
      points: "32.0,22.5 43.2,22.5 43.2,49.5 32.0,49.5"
    },
    // 17. 에스컬레이터 (배경 오른쪽 멀리 사람들이 내려오는 곳)[cite: 4]
    {
      wordKey: "escalator",
      korean: "에스컬레이터",
      audioUrl: "/audio/subway/escalator.mp3",
      videoPath: "/video/subway/Escalator.mp4",
      sentence: "Stand on the right side of the escalator.",
      imageType: "subway",
      targetStyle: { top: '30.0%', left: '50.0%', width: '8.0%', height: '15.0%' },
      points: "80.0,27.0 92.8,27.0 92.8,40.5 80.0,40.5"
    },
    // 18. 손잡이 (열차 안쪽 천장에 매달린 빨간색 삼각 손잡이)[cite: 4]
    {
      wordKey: "handle",
      korean: "손잡이",
      audioUrl: "/audio/subway/handle.mp3",
      videoPath: "/video/subway/Handle.mp4",
      sentence: "Hold the handle when the train moves.",
      imageType: "subway",
      targetStyle: { top: '30.0%', left: '77.0%', width: '3.0%', height: '5.0%' },
      points: "123.2,27.0 128.0,27.0 128.0,31.5 123.2,31.5"
    },
    // 19. 창문 (열차 겉면의 유리창)[cite: 4]
    {
      wordKey: "window",
      korean: "창문",
      audioUrl: "/audio/subway/window.mp3",
      videoPath: "/video/subway/Window.mp4",
      sentence: "I look outside the train window.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '67.0%', width: '5.0%', height: '20.0%' },
      points: "107.2,22.5 115.2,22.5 115.2,40.5 107.2,40.5"
    },
    // 20. 문 (열려 있는 열차 출입문)[cite: 4]
    {
      wordKey: "door",
      korean: "문",
      audioUrl: "/audio/subway/door.mp3",
      videoPath: "/video/subway/Door.mp4",
      sentence: "Please stand clear of the closing door.",
      imageType: "subway",
      targetStyle: { top: '20.0%', left: '73.0%', width: '8.0%', height: '60.0%' },
      points: "116.8,18.0 129.6,18.0 129.6,72.0 116.8,72.0"
    },
    // 21. 전등 (천장을 따라 길게 이어지는 하얀 조명)[cite: 4]
    {
      wordKey: "light",
      korean: "전등(조명)",
      audioUrl: "/audio/subway/light.mp3",
      videoPath: "/video/subway/Light.mp4",
      sentence: "The lights in the station are very bright.",
      imageType: "subway",
      targetStyle: { top: '0.0%', left: '40.0%', width: '20.0%', height: '15.0%' },
      points: "64.0,0.0 96.0,0.0 96.0,13.5 64.0,13.5"
    },
    // 22. 시계 (엘리베이터 위 벽에 걸린 둥근 벽시계)[cite: 4]
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/subway/clock.mp3",
      videoPath: "/video/subway/Clock.mp4",
      sentence: "I check the clock so I am not late.",
      imageType: "subway",
      targetStyle: { top: '10.0%', left: '20.0%', width: '6.0%', height: '10.0%' },
      points: "32.0,9.0 41.6,9.0 41.6,18.0 32.0,18.0"
    },
    // 23. 종/벨 (열차 문 옆 금색 종 장식/알림 장치)[cite: 4]
    {
      wordKey: "bell",
      korean: "종(벨)",
      audioUrl: "/audio/subway/bell.mp3",
      videoPath: "/video/subway/Bell.mp4",
      sentence: "The bell rings before the train leaves.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '81.0%', width: '2.0%', height: '5.0%' },
      points: "129.6,22.5 132.8,22.5 132.8,27.0 129.6,27.0"
    },
    // 24. 바닥 (화면 앞쪽 돌바닥 전체)[cite: 4]
    {
      wordKey: "floor",
      korean: "바닥",
      audioUrl: "/audio/subway/floor.mp3",
      videoPath: "/video/subway/Floor.mp4",
      sentence: "The station floor is clean.",
      imageType: "subway",
      targetStyle: { top: '60.0%', left: '10.0%', width: '40.0%', height: '40.0%' },
      points: "16.0,54.0 80.0,54.0 80.0,90.0 16.0,90.0"
    },
    // 25. 카드 (개찰구 교통카드를 찍는 패드 윗부분)[cite: 4]
    {
      wordKey: "card",
      korean: "카드",
      audioUrl: "/audio/subway/card.mp3",
      videoPath: "/video/subway/Card.mp4",
      sentence: "Tap your card here to enter.",
      imageType: "subway",
      targetStyle: { top: '55.0%', left: '35.0%', width: '3.0%', height: '3.0%' },
      points: "56.0,49.5 60.8,49.5 60.8,52.2 56.0,52.2"
    }
  ]
};