import stationeryImg from "@/assets/image/places/my-town/Stationery Shop.png"; //[cite: 6]

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
  // "stationery" 타입을 추가했습니다.
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway" | "crosswalk" | "stationery"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const stationeryData: PlaceDataType = {
  placeKey: "stationery",
  placeTitle: "Stationery Shop Word Adventure",
  bgImage: stationeryImg,
  masterRegions: [
    // 1. 바인더 (왼쪽 위 선반의 두꺼운 서류철들)[cite: 6]
    {
      wordKey: "binder",
      korean: "바인더",
      audioUrl: "/audio/stationery/binder.mp3",
      videoPath: "/video/stationery/Binder.mp4",
      sentence: "I organize my papers in a binder.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '2.0%', width: '18.0%', height: '15.0%' },
      points: "3.2,4.5 32.0,4.5 32.0,18.0 3.2,18.0"
    },
    // 2. 폴더 (바인더 아래 선반의 색색깔 폴더들)[cite: 6]
    {
      wordKey: "folder",
      korean: "폴더(서류철)",
      audioUrl: "/audio/stationery/folder.mp3",
      videoPath: "/video/stationery/Folder.mp4",
      sentence: "Put the important document in the folder.",
      imageType: "stationery",
      targetStyle: { top: '25.0%', left: '2.0%', width: '10.0%', height: '10.0%' },
      points: "3.2,22.5 19.2,22.5 19.2,31.5 3.2,31.5"
    },
    // 3. 클립보드 (카운터 뒤 벽에 걸린 클립보드들)[cite: 6]
    {
      wordKey: "clipboard",
      korean: "클립보드",
      audioUrl: "/audio/stationery/clipboard.mp3",
      videoPath: "/video/stationery/Clipboard.mp4",
      sentence: "The teacher holds a clipboard.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '25.0%', width: '12.0%', height: '15.0%' },
      points: "40.0,4.5 59.2,4.5 59.2,18.0 40.0,18.0"
    },
    // 4. 호치키스/스테이플러 (왼쪽 선반 중간의 분홍색 기구)[cite: 6]
    {
      wordKey: "stapler",
      korean: "스테이플러(호치키스)",
      audioUrl: "/audio/stationery/stapler.mp3",
      videoPath: "/video/stationery/Stapler.mp4",
      sentence: "Use a stapler to join the pages.",
      imageType: "stationery",
      targetStyle: { top: '48.0%', left: '19.0%', width: '4.0%', height: '4.0%' },
      points: "30.4,43.2 36.8,43.2 36.8,46.8 30.4,46.8"
    },
    // 5. 테이프 (왼쪽 앞 테이블의 큰 투명 테이프)[cite: 6]
    {
      wordKey: "tape",
      korean: "테이프",
      audioUrl: "/audio/stationery/tape.mp3",
      videoPath: "/video/stationery/Tape.mp4",
      sentence: "I need some tape to wrap the gift.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '1.0%', width: '8.0%', height: '10.0%' },
      points: "1.6,49.5 14.4,49.5 14.4,58.5 1.6,58.5"
    },
    // 6. 클립 (카운터 아래 하단 선반의 알록달록한 클립 상자)[cite: 6]
    {
      wordKey: "clip",
      korean: "클립",
      audioUrl: "/audio/stationery/clip.mp3",
      videoPath: "/video/stationery/Clip.mp4",
      sentence: "A small clip holds the papers together.",
      imageType: "stationery",
      targetStyle: { top: '65.0%', left: '20.0%', width: '8.0%', height: '8.0%' },
      points: "32.0,58.5 44.8,58.5 44.8,65.7 32.0,65.7"
    },
    // 7. 풀 (테이프 옆 진열장의 딱풀들)[cite: 6]
    {
      wordKey: "glue",
      korean: "풀",
      audioUrl: "/audio/stationery/glue.mp3",
      videoPath: "/video/stationery/Glue.mp4",
      sentence: "I use glue to stick the pictures.",
      imageType: "stationery",
      targetStyle: { top: '58.0%', left: '11.0%', width: '8.0%', height: '8.0%' },
      points: "17.6,52.2 30.4,52.2 30.4,59.4 17.6,59.4"
    },
    // 8. 계산기 (가운데 앞 테이블의 회색 계산기)[cite: 6]
    {
      wordKey: "calculator",
      korean: "계산기",
      audioUrl: "/audio/stationery/calculator.mp3",
      videoPath: "/video/stationery/Calculator.mp4",
      sentence: "Use a calculator for hard math problems.",
      imageType: "stationery",
      targetStyle: { top: '72.0%', left: '40.0%', width: '10.0%', height: '10.0%' },
      points: "64.0,64.8 80.0,64.8 80.0,73.8 64.0,73.8"
    },
    // 9. 미술용 붓 (앞 테이블 연필꽂이의 붓들)[cite: 6]
    {
      wordKey: "paintbrush",
      korean: "미술용 붓",
      audioUrl: "/audio/stationery/paintbrush.mp3",
      videoPath: "/video/stationery/Paintbrush.mp4",
      sentence: "Dip the paintbrush in water first.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '45.0%', width: '5.0%', height: '10.0%' },
      points: "72.0,49.5 80.0,49.5 80.0,58.5 72.0,58.5"
    },
    // 10. 팔레트 (앞 테이블의 하얀색 팔레트)[cite: 6]
    {
      wordKey: "palette",
      korean: "팔레트",
      audioUrl: "/audio/stationery/palette.mp3",
      videoPath: "/video/stationery/Palette.mp4",
      sentence: "Mix the colors on the palette.",
      imageType: "stationery",
      targetStyle: { top: '70.0%', left: '49.0%', width: '12.0%', height: '10.0%' },
      points: "78.4,63.0 97.6,63.0 97.6,72.0 78.4,72.0"
    },
    // 11. 캔버스/도화지 (테이블 위의 하얀 도화지 뭉치)[cite: 6]
    {
      wordKey: "canvas",
      korean: "도화지(캔버스)",
      audioUrl: "/audio/stationery/canvas.mp3",
      videoPath: "/video/stationery/Canvas.mp4",
      sentence: "The artist paints on a blank canvas.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '55.0%', width: '10.0%', height: '10.0%' },
      points: "88.0,49.5 104.0,49.5 104.0,58.5 88.0,58.5"
    },
    // 12. 점토 (몬스터 뒤쪽 선반 위의 알록달록한 통들)[cite: 6]
    {
      wordKey: "clay",
      korean: "점토(찰흙)",
      audioUrl: "/audio/stationery/clay.mp3",
      videoPath: "/video/stationery/Clay.mp4",
      sentence: "We can make shapes with soft clay.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '50.0%', width: '8.0%', height: '8.0%' },
      points: "80.0,4.5 92.8,4.5 92.8,11.7 80.0,11.7"
    },
    // 13. 스케치북 (가운데 앞 테이블에 펼쳐진 스프링 스케치북)[cite: 6]
    {
      wordKey: "sketchbook",
      korean: "스케치북",
      audioUrl: "/audio/stationery/sketchbook.mp3",
      videoPath: "/video/stationery/Sketchbook.mp4",
      sentence: "I love drawing in my sketchbook.",
      imageType: "stationery",
      targetStyle: { top: '78.0%', left: '47.0%', width: '20.0%', height: '12.0%' },
      points: "75.2,70.2 107.2,70.2 107.2,81.0 75.2,81.0"
    },
    // 14. 봉투 (오른쪽 앞 테이블의 하얀 편지 봉투)[cite: 6]
    {
      wordKey: "envelope",
      korean: "봉투",
      audioUrl: "/audio/stationery/envelope.mp3",
      videoPath: "/video/stationery/Envelope.mp4",
      sentence: "Put the letter inside the envelope.",
      imageType: "stationery",
      targetStyle: { top: '70.0%', left: '66.0%', width: '15.0%', height: '12.0%' },
      points: "105.6,63.0 129.6,63.0 129.6,73.8 105.6,73.8"
    },
    // 15. 엽서 (봉투 옆에 놓인 그림 엽서)[cite: 6]
    {
      wordKey: "postcard",
      korean: "엽서",
      audioUrl: "/audio/stationery/postcard.mp3",
      videoPath: "/video/stationery/Postcard.mp4",
      sentence: "I sent a postcard from my trip.",
      imageType: "stationery",
      targetStyle: { top: '65.0%', left: '78.0%', width: '15.0%', height: '10.0%' },
      points: "124.8,58.5 148.8,58.5 148.8,67.5 124.8,67.5"
    },
    // 16. 스티커 (왼쪽 앞 알록달록한 동그라미 스티커판)[cite: 6]
    {
      wordKey: "sticker",
      korean: "스티커",
      audioUrl: "/audio/stationery/sticker.mp3",
      videoPath: "/video/stationery/Sticker.mp4",
      sentence: "Decorate your notebook with a sticker.",
      imageType: "stationery",
      targetStyle: { top: '80.0%', left: '14.0%', width: '10.0%', height: '12.0%' },
      points: "22.4,72.0 38.4,72.0 38.4,82.8 22.4,82.8"
    },
    // 17. 다이어리/일기장 (왼쪽 맨 앞의 갈색 수첩)[cite: 6]
    {
      wordKey: "diary",
      korean: "다이어리(일기장)",
      audioUrl: "/audio/stationery/diary.mp3",
      videoPath: "/video/stationery/Diary.mp4",
      sentence: "I write my secrets in my diary.",
      imageType: "stationery",
      targetStyle: { top: '82.0%', left: '2.0%', width: '12.0%', height: '15.0%' },
      points: "3.2,73.8 22.4,73.8 22.4,87.3 3.2,87.3"
    },
    // 18. 달력 (카운터 오른쪽 벽에 걸린 캘린더)[cite: 6]
    {
      wordKey: "calendar",
      korean: "달력",
      audioUrl: "/audio/stationery/calendar.mp3",
      videoPath: "/video/stationery/Calendar.mp4",
      sentence: "Check the date on the calendar.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '62.0%', width: '8.0%', height: '15.0%' },
      points: "99.2,4.5 112.0,4.5 112.0,18.0 99.2,18.0"
    },
    // 19. 잉크/물감 (도화지 옆 둥근 물감통들)[cite: 6]
    {
      wordKey: "ink",
      korean: "잉크(물감)",
      audioUrl: "/audio/stationery/ink.mp3",
      videoPath: "/video/stationery/Ink.mp4",
      sentence: "The pen needs more black ink.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '65.0%', width: '15.0%', height: '10.0%' },
      points: "104.0,54.0 128.0,54.0 128.0,63.0 104.0,63.0"
    },
    // 20. 도장 (오른쪽 롤 스탬프 및 마스킹 테이프 구역)[cite: 6]
    {
      wordKey: "stamp",
      korean: "도장(스탬프)",
      audioUrl: "/audio/stationery/stamp.mp3",
      videoPath: "/video/stationery/Stamp.mp4",
      sentence: "Press the stamp on the paper.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '85.0%', width: '10.0%', height: '8.0%' },
      points: "136.0,54.0 152.0,54.0 152.0,61.2 136.0,61.2"
    },
    // 21. 자석 (클립 박스 옆의 모양 자석들)[cite: 6]
    {
      wordKey: "magnet",
      korean: "자석",
      audioUrl: "/audio/stationery/magnet.mp3",
      videoPath: "/video/stationery/Magnet.mp4",
      sentence: "Put a magnet on the fridge.",
      imageType: "stationery",
      targetStyle: { top: '72.0%', left: '12.0%', width: '8.0%', height: '8.0%' },
      points: "19.2,64.8 32.0,64.8 32.0,72.0 19.2,72.0"
    },
    // 22. 연필깎이/펀치 (카운터 뒤 파란색 펀치/연필깎이 기구)[cite: 6]
    {
      wordKey: "sharpener",
      korean: "연필깎이",
      audioUrl: "/audio/stationery/sharpener.mp3",
      videoPath: "/video/stationery/Sharpener.mp4",
      sentence: "My pencil is broken, I need a sharpener.",
      imageType: "stationery",
      targetStyle: { top: '32.0%', left: '25.0%', width: '8.0%', height: '8.0%' },
      points: "40.0,28.8 52.8,28.8 52.8,36.0 40.0,36.0"
    },
    // 23. 붓/솔 (몬스터 책상 위 펜꽂이 안의 붓)[cite: 6]
    {
      wordKey: "brush",
      korean: "붓(솔)",
      audioUrl: "/audio/stationery/brush.mp3",
      videoPath: "/video/stationery/Brush.mp4",
      sentence: "Clean the dust with a soft brush.",
      imageType: "stationery",
      targetStyle: { top: '38.0%', left: '42.0%', width: '4.0%', height: '8.0%' },
      points: "67.2,34.2 73.6,34.2 73.6,41.4 67.2,41.4"
    },
    // 24. 필통/케이스 (카운터 아래 선반의 색연필 상자/케이스)[cite: 6]
    {
      wordKey: "case",
      korean: "케이스(필통)",
      audioUrl: "/audio/stationery/case.mp3",
      videoPath: "/video/stationery/Case.mp4",
      sentence: "I keep my pencils in a pencil case.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '34.0%', width: '8.0%', height: '10.0%' },
      points: "54.4,54.0 67.2,54.0 67.2,63.0 54.4,63.0"
    }
  ]
};