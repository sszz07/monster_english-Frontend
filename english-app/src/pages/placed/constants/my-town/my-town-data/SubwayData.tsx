import subwayImg from "@/assets/image/places/my-town/Subway.png";

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
    // 1. 지하철 (기차 전체를 잡지 않고 열차 맨 위쪽 지붕 부분만 지정하여 겹침 방지)
    {
      wordKey: "subway",
      korean: "지하철",
      audioUrl: "/audio/subway/subway.mp3",
      videoPath: "/video/subway/Subway.mp4",
      sentence: "I take the subway to go to the city.",
      imageType: "subway",
      targetStyle: { top: '10.0%', left: '65.0%', width: '10.0%', height: '10.0%' },
      points: "104.0,9.0 120.0,9.0 120.0,18.0 104.0,18.0"
    },
    // 2. 역 (화면 전체가 아닌 우측 상단 아치형 천장 부분만 작게 지정)
    {
      wordKey: "station",
      korean: "역",
      audioUrl: "/audio/subway/station.mp3",
      videoPath: "/video/subway/Station.mp4",
      sentence: "The subway station is very busy.",
      imageType: "subway",
      targetStyle: { top: '0.0%', left: '60.0%', width: '20.0%', height: '8.0%' },
      points: "96.0,0.0 128.0,0.0 128.0,7.2 96.0,7.2"
    },
    // 3. 노선 (지도 전체가 아닌, 지도 안의 노선 그래픽에만 딱 맞게 축소)
    {
      wordKey: "line",
      korean: "노선",
      audioUrl: "/audio/subway/line.mp3",
      videoPath: "/video/subway/Line.mp4",
      sentence: "We need to take the green line.",
      imageType: "subway",
      targetStyle: { top: '35.0%', left: '88.0%', width: '8.0%', height: '35.0%' },
      points: "140.8,31.5 153.6,31.5 153.6,63.0 140.8,63.0"
    },
    // 4. 기차/열차 (문과 지도 사이의 금속 외벽 좁은 구역만 지정)
    {
      wordKey: "train",
      korean: "기차(열차)",
      audioUrl: "/audio/subway/train.mp3",
      videoPath: "/video/subway/Train.mp4",
      sentence: "The train is arriving right now.",
      imageType: "subway",
      targetStyle: { top: '60.0%', left: '80.0%', width: '4.0%', height: '20.0%' },
      points: "128.0,54.0 134.4,54.0 134.4,72.0 128.0,72.0"
    },
    // 5. 승강장 (노란색 점자블록 안전선 부분만 좁게 지정)
    {
      wordKey: "platform",
      korean: "승강장(플랫폼)",
      audioUrl: "/audio/subway/platform.mp3",
      videoPath: "/video/subway/Platform.mp4",
      sentence: "Please wait safely on the platform.",
      imageType: "subway",
      targetStyle: { top: '75.0%', left: '58.0%', width: '12.0%', height: '20.0%' },
      points: "92.8,67.5 112.0,67.5 112.0,85.5 92.8,85.5"
    },
    // 6. 선로 (가장 우측 아래 철로가 보이는 구역)
    {
      wordKey: "track",
      korean: "선로",
      audioUrl: "/audio/subway/track.mp3",
      videoPath: "/video/subway/Track.mp4",
      sentence: "Never drop anything on the track.",
      imageType: "subway",
      targetStyle: { top: '85.0%', left: '75.0%', width: '20.0%', height: '10.0%' },
      points: "120.0,76.5 152.0,76.5 152.0,85.5 120.0,85.5"
    },
    // 7. 표 (왼쪽 티켓 발매기 본체 - 카드 영역과 겹치지 않게 너비 축소)
    {
      wordKey: "ticket",
      korean: "표(티켓)",
      audioUrl: "/audio/subway/ticket.mp3",
      videoPath: "/video/subway/Ticket.mp4",
      sentence: "You need a ticket to ride the subway.",
      imageType: "subway",
      targetStyle: { top: '45.0%', left: '26.0%', width: '4.0%', height: '30.0%' },
      points: "41.6,40.5 48.0,40.5 48.0,67.5 41.6,67.5"
    },
    // 8. 개찰구 (발매기 우측의 은색 게이트)
    {
      wordKey: "gate",
      korean: "개찰구",
      audioUrl: "/audio/subway/gate.mp3",
      videoPath: "/video/subway/Gate.mp4",
      sentence: "Scan your card to open the gate.",
      imageType: "subway",
      targetStyle: { top: '52.0%', left: '36.0%', width: '8.0%', height: '15.0%' },
      points: "57.6,46.8 70.4,46.8 70.4,60.3 57.6,60.3"
    },
    // 9. 출구 (뒤쪽 천장의 우측 STAIRS 안내판 부분)
    {
      wordKey: "exit",
      korean: "출구",
      audioUrl: "/audio/subway/exit.mp3",
      videoPath: "/video/subway/Exit.mp4",
      sentence: "Let's find the exit to go outside.",
      imageType: "subway",
      targetStyle: { top: '18.0%', left: '31.0%', width: '10.0%', height: '5.0%' },
      points: "49.6,16.2 65.6,16.2 65.6,20.7 49.6,20.7"
    },
    // 10. 입구 (배경 뒤쪽에 위치한 TICKET 매표소 부스)
    {
      wordKey: "entrance",
      korean: "입구",
      audioUrl: "/audio/subway/entrance.mp3",
      videoPath: "/video/subway/Entrance.mp4",
      sentence: "We met at the station entrance.",
      imageType: "subway",
      targetStyle: { top: '28.0%', left: '32.0%', width: '10.0%', height: '15.0%' },
      points: "51.2,25.2 67.2,25.2 67.2,38.7 51.2,38.7"
    },
    // 11. 승객 (왼쪽에 서 있는 배낭 멘 여자아이)
    {
      wordKey: "passenger",
      korean: "승객",
      audioUrl: "/audio/subway/passenger.mp3",
      videoPath: "/video/subway/Passenger.mp4",
      sentence: "A passenger is waiting for the train.",
      imageType: "subway",
      targetStyle: { top: '45.0%', left: '9.0%', width: '6.0%', height: '22.0%' },
      points: "14.4,40.5 24.0,40.5 24.0,60.3 14.4,60.3"
    },
    // 12. 좌석 (열린 문틈으로 보이는 파란색 의자)
    {
      wordKey: "seat",
      korean: "좌석",
      audioUrl: "/audio/subway/seat.mp3",
      videoPath: "/video/subway/Seat.mp4",
      sentence: "I found an empty seat inside.",
      imageType: "subway",
      targetStyle: { top: '50.0%', left: '76.0%', width: '3.0%', height: '10.0%' },
      points: "121.6,45.0 126.4,45.0 126.4,54.0 121.6,54.0"
    },
    // 13. 지도 (전체 맵 중 상단의 LINE 글자가 있는 구역으로 축소)
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/subway/map.mp3",
      videoPath: "/video/subway/Map.mp4",
      sentence: "Look at the map to find your station.",
      imageType: "subway",
      targetStyle: { top: '20.0%', left: '85.0%', width: '12.0%', height: '10.0%' },
      points: "136.0,18.0 155.2,18.0 155.2,27.0 136.0,27.0"
    },
    // 14. 표지판 (천장에 매달린 좌측 STAIRS 표지판)
    {
      wordKey: "sign",
      korean: "표지판",
      audioUrl: "/audio/subway/sign.mp3",
      videoPath: "/video/subway/Sign.mp4",
      sentence: "The sign shows where to go.",
      imageType: "subway",
      targetStyle: { top: '16.0%', left: '3.0%', width: '12.0%', height: '8.0%' },
      points: "4.8,14.4 24.0,14.4 24.0,21.6 4.8,21.6"
    },
    // 15. 계단 (왼쪽 가장자리의 계단 구역)
    {
      wordKey: "stairs",
      korean: "계단",
      audioUrl: "/audio/subway/stairs.mp3",
      videoPath: "/video/subway/Stairs.mp4",
      sentence: "Walk down the stairs to the platform.",
      imageType: "subway",
      targetStyle: { top: '35.0%', left: '0.0%', width: '10.0%', height: '25.0%' },
      points: "0.0,31.5 16.0,31.5 16.0,54.0 0.0,54.0"
    },
    // 16. 엘리베이터 (엘리베이터의 문 부분만 좁게)
    {
      wordKey: "elevator",
      korean: "엘리베이터",
      audioUrl: "/audio/subway/elevator.mp3",
      videoPath: "/video/subway/Elevator.mp4",
      sentence: "Take the elevator if you have a heavy bag.",
      imageType: "subway",
      targetStyle: { top: '28.0%', left: '22.0%', width: '4.0%', height: '20.0%' },
      points: "35.2,25.2 41.6,25.2 41.6,43.2 35.2,43.2"
    },
    // 17. 에스컬레이터 (배경 뒤편의 에스컬레이터 계단 부분)
    {
      wordKey: "escalator",
      korean: "에스컬레이터",
      audioUrl: "/audio/subway/escalator.mp3",
      videoPath: "/video/subway/Escalator.mp4",
      sentence: "Stand on the right side of the escalator.",
      imageType: "subway",
      targetStyle: { top: '28.0%', left: '51.0%', width: '5.0%', height: '12.0%' },
      points: "81.6,25.2 89.6,25.2 89.6,36.0 81.6,36.0"
    },
    // 18. 손잡이 (열린 문 위쪽에 보이는 빨간색 삼각 손잡이)
    {
      wordKey: "handle",
      korean: "손잡이",
      audioUrl: "/audio/subway/handle.mp3",
      videoPath: "/video/subway/Handle.mp4",
      sentence: "Hold the handle when the train moves.",
      imageType: "subway",
      targetStyle: { top: '31.0%', left: '77.0%', width: '2.0%', height: '6.0%' },
      points: "123.2,27.9 126.4,27.9 126.4,33.3 123.2,33.3"
    },
    // 19. 창문 (열차 출입문 좌측에 있는 네모난 유리창)
    {
      wordKey: "window",
      korean: "창문",
      audioUrl: "/audio/subway/window.mp3",
      videoPath: "/video/subway/Window.mp4",
      sentence: "I look outside the train window.",
      imageType: "subway",
      targetStyle: { top: '30.0%', left: '68.0%', width: '4.0%', height: '15.0%' },
      points: "108.8,27.0 115.2,27.0 115.2,40.5 108.8,40.5"
    },
    // 20. 문 (열려 있는 열차 출입문의 우측 끝 모서리 부분)
    {
      wordKey: "door",
      korean: "문",
      audioUrl: "/audio/subway/door.mp3",
      videoPath: "/video/subway/Door.mp4",
      sentence: "Please stand clear of the closing door.",
      imageType: "subway",
      targetStyle: { top: '25.0%', left: '73.0%', width: '3.0%', height: '45.0%' },
      points: "116.8,22.5 121.6,22.5 121.6,63.0 116.8,63.0"
    },
    // 21. 전등 (중앙 천장에 달린 길쭉한 형광등 구역)
    {
      wordKey: "light",
      korean: "전등(조명)",
      audioUrl: "/audio/subway/light.mp3",
      videoPath: "/video/subway/Light.mp4",
      sentence: "The lights in the station are very bright.",
      imageType: "subway",
      targetStyle: { top: '5.0%', left: '50.0%', width: '10.0%', height: '5.0%' },
      points: "80.0,4.5 96.0,4.5 96.0,9.0 80.0,9.0"
    },
    // 22. 시계 (엘리베이터 위쪽의 둥근 벽시계)
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/subway/clock.mp3",
      videoPath: "/video/subway/Clock.mp4",
      sentence: "I check the clock so I am not late.",
      imageType: "subway",
      targetStyle: { top: '13.0%', left: '20.0%', width: '6.0%', height: '9.0%' },
      points: "32.0,11.7 41.6,11.7 41.6,19.8 32.0,19.8"
    },
    // 23. 종/벨 (지도 우측 상단에 있는 금색 종 장식)
    {
      wordKey: "bell",
      korean: "종(벨)",
      audioUrl: "/audio/subway/bell.mp3",
      videoPath: "/video/subway/Bell.mp4",
      sentence: "The bell rings before the train leaves.",
      imageType: "subway",
      targetStyle: { top: '26.0%', left: '82.0%', width: '2.0%', height: '4.0%' },
      points: "131.2,23.4 134.4,23.4 134.4,27.0 131.2,27.0"
    },
    // 24. 바닥 (중앙 앞쪽의 회색 벽돌 바닥 구역, 플랫폼 밖으로 격리)
    {
      wordKey: "floor",
      korean: "바닥",
      audioUrl: "/audio/subway/floor.mp3",
      videoPath: "/video/subway/Floor.mp4",
      sentence: "The station floor is clean.",
      imageType: "subway",
      targetStyle: { top: '80.0%', left: '20.0%', width: '25.0%', height: '15.0%' },
      points: "32.0,72.0 72.0,72.0 72.0,85.5 32.0,85.5"
    },
    // 25. 카드 (티켓 영역과 분리되도록 우측으로 미세 조정)
    {
      wordKey: "card",
      korean: "카드",
      audioUrl: "/audio/subway/card.mp3",
      videoPath: "/video/subway/Card.mp4",
      sentence: "Tap your card here to enter.",
      imageType: "subway",
      targetStyle: { top: '57.0%', left: '32.0%', width: '2.0%', height: '4.0%' },
      points: "51.2,51.3 54.4,51.3 54.4,54.9 51.2,54.9"
    }
  ]
};