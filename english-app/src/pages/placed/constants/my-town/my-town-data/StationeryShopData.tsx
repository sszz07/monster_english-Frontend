import stationeryImg from "@/assets/image/places/my-town/Stationery Shop.png";

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
    // 1. 바인더 (영역 크기 축소 및 겹침 방지)
    {
      wordKey: "binder",
      korean: "바인더",
      audioUrl: "/audio/stationery/binder.mp3",
      videoPath: "/video/stationery/Binder.mp4",
      sentence: "The binder is thick and blue. She puts her papers in the binder.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '5.0%', width: '10.0%', height: '10.0%' },
      points: "8.0,4.5 24.0,4.5 24.0,13.5 8.0,13.5"
    },
    // 2. 폴더 (영역 크기 축소 및 위치 명확화)
    {
      wordKey: "folder",
      korean: "폴더(서류철)",
      audioUrl: "/audio/stationery/folder.mp3",
      videoPath: "/video/stationery/Folder.mp4",
      sentence: "The folder is thin and yellow. He keeps his drawings in the folder.",
      imageType: "stationery",
      targetStyle: { top: '25.0%', left: '5.0%', width: '8.0%', height: '8.0%' },
      points: "8.0,22.5 20.8,22.5 20.8,29.7 8.0,29.7"
    },
    // 3. 클립보드 (주변 사물과 겹치지 않게 축소)
    {
      wordKey: "clipboard",
      korean: "클립보드",
      audioUrl: "/audio/stationery/clipboard.mp3",
      videoPath: "/video/stationery/Clipboard.mp4",
      sentence: "The clipboard is flat and hard. She writes on the clipboard.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '25.0%', width: '10.0%', height: '10.0%' },
      points: "40.0,4.5 56.0,4.5 56.0,13.5 40.0,13.5"
    },
    // 4. 호치키스/스테이플러
    {
      wordKey: "stapler",
      korean: "스테이플러(호치키스)",
      audioUrl: "/audio/stationery/stapler.mp3",
      videoPath: "/video/stationery/Stapler.mp4",
      sentence: "The stapler is heavy and black. He uses the stapler.",
      imageType: "stationery",
      targetStyle: { top: '45.0%', left: '20.0%', width: '5.0%', height: '5.0%' },
      points: "32.0,40.5 40.0,40.5 40.0,45.0 32.0,45.0"
    },
    // 5. 테이프
    {
      wordKey: "tape",
      korean: "테이프",
      audioUrl: "/audio/stationery/tape.mp3",
      videoPath: "/video/stationery/Tape.mp4",
      sentence: "The tape is clear and sticky. She puts tape on the paper.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '2.0%', width: '6.0%', height: '8.0%' },
      points: "3.2,49.5 12.8,49.5 12.8,56.7 3.2,56.7"
    },
    // 6. 클립
    {
      wordKey: "clip",
      korean: "클립",
      audioUrl: "/audio/stationery/clip.mp3",
      videoPath: "/video/stationery/Clip.mp4",
      sentence: "The clip is small and silver. He puts a clip on the papers.",
      imageType: "stationery",
      targetStyle: { top: '65.0%', left: '22.0%', width: '6.0%', height: '6.0%' },
      points: "35.2,58.5 44.8,58.5 44.8,63.9 35.2,63.9"
    },
    // 7. 풀
    {
      wordKey: "glue",
      korean: "풀",
      audioUrl: "/audio/stationery/glue.mp3",
      videoPath: "/video/stationery/Glue.mp4",
      sentence: "The glue is wet and sticky. She uses glue for her project.",
      imageType: "stationery",
      targetStyle: { top: '58.0%', left: '12.0%', width: '6.0%', height: '6.0%' },
      points: "19.2,52.2 28.8,52.2 28.8,57.6 19.2,57.6"
    },
    // 8. 계산기
    {
      wordKey: "calculator",
      korean: "계산기",
      audioUrl: "/audio/stationery/calculator.mp3",
      videoPath: "/video/stationery/Calculator.mp4",
      sentence: "The calculator is small and useful. He uses the calculator.",
      imageType: "stationery",
      targetStyle: { top: '75.0%', left: '35.0%', width: '8.0%', height: '8.0%' },
      points: "56.0,67.5 68.8,67.5 68.8,74.7 56.0,74.7"
    },
    // 9. 미술용 붓
    {
      wordKey: "paintbrush",
      korean: "미술용 붓",
      audioUrl: "/audio/stationery/paintbrush.mp3",
      videoPath: "/video/stationery/Paintbrush.mp4",
      sentence: "The paintbrush is soft and thin. She paints a flower with a paintbrush.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '45.0%', width: '4.0%', height: '8.0%' },
      points: "72.0,49.5 78.4,49.5 78.4,56.7 72.0,56.7"
    },
    // 10. 팔레트
    {
      wordKey: "palette",
      korean: "팔레트",
      audioUrl: "/audio/stationery/palette.mp3",
      videoPath: "/video/stationery/Palette.mp4",
      sentence: "The palette is colorful and flat. He mixes colors on the palette.",
      imageType: "stationery",
      targetStyle: { top: '68.0%', left: '48.0%', width: '8.0%', height: '8.0%' },
      points: "76.8,61.2 89.6,61.2 89.6,68.4 76.8,68.4"
    },
    // 11. 캔버스/도화지
    {
      wordKey: "canvas",
      korean: "도화지(캔버스)",
      audioUrl: "/audio/stationery/canvas.mp3",
      videoPath: "/video/stationery/Canvas.mp4",
      sentence: "The canvas is white and smooth. She draws a picture on the canvas.",
      imageType: "stationery",
      targetStyle: { top: '55.0%', left: '55.0%', width: '8.0%', height: '8.0%' },
      points: "88.0,49.5 100.8,49.5 100.8,56.7 88.0,56.7"
    },
    // 12. 점토
    {
      wordKey: "clay",
      korean: "점토(찰흙)",
      audioUrl: "/audio/stationery/clay.mp3",
      videoPath: "/video/stationery/Clay.mp4",
      sentence: "The clay is soft and brown. He makes a ball with clay.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '50.0%', width: '6.0%', height: '6.0%' },
      points: "80.0,4.5 89.6,4.5 89.6,9.9 80.0,9.9"
    },
    // 13. 스케치북
    {
      wordKey: "sketchbook",
      korean: "스케치북",
      audioUrl: "/audio/stationery/sketchbook.mp3",
      videoPath: "/video/stationery/Sketchbook.mp4",
      sentence: "The sketchbook is clean and blank. She draws a tree in her sketchbook.",
      imageType: "stationery",
      targetStyle: { top: '80.0%', left: '50.0%', width: '10.0%', height: '8.0%' },
      points: "80.0,72.0 96.0,72.0 96.0,79.2 80.0,79.2"
    },
    // 14. 봉투
    {
      wordKey: "envelope",
      korean: "봉투",
      audioUrl: "/audio/stationery/envelope.mp3",
      videoPath: "/video/stationery/Envelope.mp4",
      sentence: "The envelope is white and flat. He puts the letter in the envelope.",
      imageType: "stationery",
      targetStyle: { top: '70.0%', left: '66.0%', width: '8.0%', height: '8.0%' },
      points: "105.6,63.0 118.4,63.0 118.4,70.2 105.6,70.2"
    },
    // 15. 엽서
    {
      wordKey: "postcard",
      korean: "엽서",
      audioUrl: "/audio/stationery/postcard.mp3",
      videoPath: "/video/stationery/Postcard.mp4",
      sentence: "The postcard is small and pretty. She sends a postcard.",
      imageType: "stationery",
      targetStyle: { top: '65.0%', left: '80.0%', width: '8.0%', height: '8.0%' },
      points: "128.0,58.5 140.8,58.5 140.8,65.7 128.0,65.7"
    },
    // 16. 스티커
    {
      wordKey: "sticker",
      korean: "스티커",
      audioUrl: "/audio/stationery/sticker.mp3",
      videoPath: "/video/stationery/Sticker.mp4",
      sentence: "The sticker is bright and shiny. He puts a sticker on his notebook.",
      imageType: "stationery",
      targetStyle: { top: '82.0%', left: '18.0%', width: '8.0%', height: '8.0%' },
      points: "28.8,73.8 41.6,73.8 41.6,81.0 28.8,81.0"
    },
    // 17. 다이어리/일기장
    {
      wordKey: "diary",
      korean: "다이어리(일기장)",
      audioUrl: "/audio/stationery/diary.mp3",
      videoPath: "/video/stationery/Diary.mp4",
      sentence: "The diary is small and private. She writes in her diary every night.",
      imageType: "stationery",
      targetStyle: { top: '82.0%', left: '5.0%', width: '8.0%', height: '8.0%' },
      points: "8.0,73.8 20.8,73.8 20.8,81.0 8.0,81.0"
    },
    // 18. 달력
    {
      wordKey: "calendar",
      korean: "달력",
      audioUrl: "/audio/stationery/calendar.mp3",
      videoPath: "/video/stationery/Calendar.mp4",
      sentence: "The calendar is big and colorful. He checks the calendar.",
      imageType: "stationery",
      targetStyle: { top: '5.0%', left: '65.0%', width: '6.0%', height: '10.0%' },
      points: "104.0,4.5 113.6,4.5 113.6,13.5 104.0,13.5"
    },
    // 19. 잉크/물감
    {
      wordKey: "ink",
      korean: "잉크(물감)",
      audioUrl: "/audio/stationery/ink.mp3",
      videoPath: "/video/stationery/Ink.mp4",
      sentence: "The ink is dark and wet. She fills the pen with ink.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '68.0%', width: '8.0%', height: '6.0%' },
      points: "108.8,54.0 121.6,54.0 121.6,59.4 108.8,59.4"
    },
    // 20. 도장
    {
      wordKey: "stamp",
      korean: "도장(스탬프)",
      audioUrl: "/audio/stationery/stamp.mp3",
      videoPath: "/video/stationery/Stamp.mp4",
      sentence: "The stamp is small and square. He puts a stamp on the envelope.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '88.0%', width: '6.0%', height: '6.0%' },
      points: "140.8,54.0 150.4,54.0 150.4,59.4 140.8,59.4"
    },
    // 21. 자석
    {
      wordKey: "magnet",
      korean: "자석",
      audioUrl: "/audio/stationery/magnet.mp3",
      videoPath: "/video/stationery/Magnet.mp4",
      sentence: "The magnet is strong and round. She sticks a magnet on the board.",
      imageType: "stationery",
      targetStyle: { top: '72.0%', left: '12.0%', width: '6.0%', height: '6.0%' },
      points: "19.2,64.8 28.8,64.8 28.8,70.2 19.2,70.2"
    },
    // 22. 연필깎이/펀치
    {
      wordKey: "sharpener",
      korean: "연필깎이",
      audioUrl: "/audio/stationery/sharpener.mp3",
      videoPath: "/video/stationery/Sharpener.mp4",
      sentence: "The sharpener is small and red. He uses the sharpener.",
      imageType: "stationery",
      targetStyle: { top: '30.0%', left: '28.0%', width: '6.0%', height: '6.0%' },
      points: "44.8,27.0 54.4,27.0 54.4,32.4 44.8,32.4"
    },
    // 23. 붓/솔
    {
      wordKey: "brush",
      korean: "붓(솔)",
      audioUrl: "/audio/stationery/brush.mp3",
      videoPath: "/video/stationery/Brush.mp4",
      sentence: "The brush is soft and wide. She cleans the palette with a brush.",
      imageType: "stationery",
      targetStyle: { top: '38.0%', left: '42.0%', width: '4.0%', height: '6.0%' },
      points: "67.2,34.2 73.6,34.2 73.6,39.6 67.2,39.6"
    },
    // 24. 필통/케이스
    {
      wordKey: "case",
      korean: "케이스(필통)",
      audioUrl: "/audio/stationery/case.mp3",
      videoPath: "/video/stationery/Case.mp4",
      sentence: "The case is hard and zippered. He keeps his pencils in the case.",
      imageType: "stationery",
      targetStyle: { top: '60.0%', left: '32.0%', width: '6.0%', height: '8.0%' },
      points: "51.2,54.0 60.8,54.0 60.8,61.2 51.2,61.2"
    }
  ]
};