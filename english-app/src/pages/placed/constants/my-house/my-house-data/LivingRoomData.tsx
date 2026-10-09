import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const livingRoomImg = ThemeImage.livingroom;
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

export const livingRoomData: PlaceDataType = {
  placeKey: "livingroom",
  placeTitle: "Living Room Word Adventure",
  bgImage: livingRoomImg,
  masterRegions: [
    // 1. 시계 (허공을 제외하고 시계 본체로만 축소)
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/livingroom/clock.mp3",
      videoPath: "/video/livingroom/clock.mp4",
      sentence: "The clock is on the wall. It tells the time.",
      targetStyle: { top: '12.0%', left: '14.0%', width: '5.0%', height: '5.0%' },
      points: "22.4,10.8 30.4,10.8 30.4,15.3 22.4,15.3"
    },
    // 2. 텔레비전
    {
      wordKey: "tv",
      korean: "텔레비전",
      audioUrl: "/audio/livingroom/tv.mp3",
      videoPath: "/video/livingroom/tv.mp4",
      sentence: "I watch cartoons on the TV.",
      targetStyle: { top: '30.0%', left: '10.0%', width: '10.0%', height: '10.0%' },
      points: "16.0,27.0 32.0,27.0 32.0,36.0 16.0,36.0"
    },
    // 3. 꽃병들
    {
      wordKey: "vases",
      korean: "꽃병들",
      audioUrl: "/audio/livingroom/vases.mp3",
      videoPath: "/video/livingroom/vases.mp4",
      sentence: "The blue vases are very pretty.",
      targetStyle: { top: '65.0%', left: '5.0%', width: '10.0%', height: '10.0%' },
      points: "8.0,58.5 24.0,58.5 24.0,67.5 8.0,67.5"
    },
    // 4. 책장 (플로어 램프, 테이블과 겹치지 않게 본체로 분리)
    {
      wordKey: "bookcase",
      korean: "책장",
      audioUrl: "/audio/livingroom/bookcase.mp3",
      videoPath: "/video/livingroom/bookcase.mp4",
      sentence: "There are many books in the bookcase.",
      targetStyle: { top: '20.0%', left: '32.0%', width: '10.0%', height: '15.0%' },
      points: "51.2,18.0 67.2,18.0 67.2,31.5 51.2,31.5"
    },
    // 5. 플로어 스탠드 (세로로 길게 뻗은 본체만 지정)
    {
      wordKey: "floorLamp",
      korean: "플로어 스탠드",
      audioUrl: "/audio/livingroom/floorLamp.mp3",
      videoPath: "/video/livingroom/floorLamp.mp4",
      sentence: "The floor lamp is tall and bright.",
      targetStyle: { top: '40.0%', left: '24.0%', width: '5.0%', height: '15.0%' },
      points: "38.4,36.0 46.4,36.0 46.4,49.5 38.4,49.5"
    },
    // 6. 사이드 테이블
    {
      wordKey: "sideTable",
      korean: "사이드 테이블",
      audioUrl: "/audio/livingroom/sideTable.mp3",
      videoPath: "/video/livingroom/sideTable.mp4",
      sentence: "The books are on the side table.",
      targetStyle: { top: '60.0%', left: '32.0%', width: '8.0%', height: '10.0%' },
      points: "51.2,54.0 64.0,54.0 64.0,63.0 51.2,63.0"
    },
    // 7. 샹들리에
    {
      wordKey: "chandelier",
      korean: "샹들리에",
      audioUrl: "/audio/livingroom/chandelier.mp3",
      videoPath: "/video/livingroom/chandelier.mp4",
      sentence: "The chandelier hangs from the ceiling.",
      targetStyle: { top: '5.0%', left: '45.0%', width: '10.0%', height: '10.0%' },
      points: "72.0,4.5 88.0,4.5 88.0,13.5 72.0,13.5"
    },
    // 8. 그림 액자
    {
      wordKey: "paintings",
      korean: "그림 액자",
      audioUrl: "/audio/livingroom/paintings.mp3",
      videoPath: "/video/livingroom/paintings.mp4",
      sentence: "The paintings are on the wall.",
      targetStyle: { top: '25.0%', left: '45.0%', width: '8.0%', height: '10.0%' },
      points: "72.0,22.5 84.8,22.5 84.8,31.5 72.0,31.5"
    },
    // 9. 화분
    {
      wordKey: "plant",
      korean: "화분",
      audioUrl: "/audio/livingroom/plant.mp3",
      videoPath: "/video/livingroom/plant.mp4",
      sentence: "The green plant looks healthy.",
      targetStyle: { top: '50.0%', left: '45.0%', width: '8.0%', height: '10.0%' },
      points: "72.0,45.0 84.8,45.0 84.8,54.0 72.0,54.0"
    },
    // 10. 커튼 (거울, 화분 등과 완전히 분리되도록 우측 창가로 이동)
    {
      wordKey: "curtain",
      korean: "커튼",
      audioUrl: "/audio/livingroom/curtain.mp3",
      videoPath: "/video/livingroom/curtain.mp4",
      sentence: "Close the curtain to block the light.",
      targetStyle: { top: '20.0%', left: '55.0%', width: '8.0%', height: '20.0%' },
      points: "88.0,18.0 100.8,18.0 100.8,36.0 88.0,36.0"
    },
    // 11. 거울
    {
      wordKey: "mirror",
      korean: "거울",
      audioUrl: "/audio/livingroom/mirror.mp3",
      videoPath: "/video/livingroom/mirror.mp4",
      sentence: "I can see myself in the mirror.",
      targetStyle: { top: '30.0%', left: '68.0%', width: '6.0%', height: '15.0%' },
      points: "108.8,27.0 118.4,27.0 118.4,40.5 108.8,40.5"
    },
    // 12. 공기청정기
    {
      wordKey: "airPurifier",
      korean: "공기청정기",
      audioUrl: "/audio/livingroom/airPurifier.mp3",
      videoPath: "/video/livingroom/airPurifier.mp4",
      sentence: "The air purifier cleans the air.",
      targetStyle: { top: '65.0%', left: '65.0%', width: '8.0%', height: '12.0%' },
      points: "104.0,58.5 116.8,58.5 116.8,69.3 104.0,69.3"
    },
    // 13. 벽난로
    {
      wordKey: "fireplace",
      korean: "벽난로",
      audioUrl: "/audio/livingroom/fireplace.mp3",
      videoPath: "/video/livingroom/fireplace.mp4",
      sentence: "The fireplace keeps the room warm.",
      targetStyle: { top: '40.0%', left: '78.0%', width: '10.0%', height: '15.0%' },
      points: "124.8,36.0 140.8,36.0 140.8,49.5 124.8,49.5"
    },
    // 14. 안마의자
    {
      wordKey: "massageChair",
      korean: "안마의자",
      audioUrl: "/audio/livingroom/massageChair.mp3",
      videoPath: "/video/livingroom/massageChair.mp4",
      sentence: "The massage chair is very comfortable.",
      targetStyle: { top: '60.0%', left: '85.0%', width: '10.0%', height: '20.0%' },
      points: "136.0,54.0 152.0,54.0 152.0,72.0 136.0,72.0"
    }
  ]
};