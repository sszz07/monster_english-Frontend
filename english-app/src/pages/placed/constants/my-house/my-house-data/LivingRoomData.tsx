

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
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/livingroom/clock.mp3",
      videoPath: "/video/livingroom/clock.mp4",
      sentence: "The clock is on the wall. It tells the time.",
      targetStyle: { top: '12.0%', left: '14.5%', width: '6.0%', height: '16.5%' },
      points: "23.2,10.8 32.8,10.8 32.8,25.6 23.2,25.6"
    },
    {
      wordKey: "tv",
      korean: "텔레비전",
      audioUrl: "/audio/livingroom/tv.mp3",
      videoPath: "/video/livingroom/tv.mp4",
      sentence: "I watch cartoons on the TV.",
      targetStyle: { top: '26.5%', left: '11.0%', width: '13.5%', height: '30.5%' },
      points: "17.6,23.8 39.2,23.8 39.2,51.3 17.6,51.3"
    },
    {
      wordKey: "vases",
      korean: "꽃병들",
      audioUrl: "/audio/livingroom/vases.mp3",
      videoPath: "/video/livingroom/vases.mp4",
      sentence: "The blue vases are very pretty.",
      targetStyle: { top: '62.5%', left: '2.5%', width: '19.5%', height: '33.0%' },
      points: "4.0,56.2 35.2,56.2 35.2,85.9 4.0,85.9"
    },
    {
      wordKey: "bookcase",
      korean: "책장",
      audioUrl: "/audio/livingroom/bookcase.mp3",
      videoPath: "/video/livingroom/bookcase.mp4",
      sentence: "There are many books in the bookcase.",
      targetStyle: { top: '16.5%', left: '23.5%', width: '23.0%', height: '43.0%' },
      points: "37.6,14.9 74.4,14.9 74.4,53.6 37.6,53.6"
    },
    {
      wordKey: "floorLamp",
      korean: "플로어 스탠드",
      audioUrl: "/audio/livingroom/floorLamp.mp3",
      videoPath: "/video/livingroom/floorLamp.mp4",
      sentence: "The floor lamp is tall and bright.",
      targetStyle: { top: '34.5%', left: '23.0%', width: '9.5%', height: '27.5%' },
      points: "36.8,31.0 52.0,31.0 52.0,55.8 36.8,55.8"
    },
    {
      wordKey: "sideTable",
      korean: "사이드 테이블",
      audioUrl: "/audio/livingroom/sideTable.mp3",
      videoPath: "/video/livingroom/sideTable.mp4",
      sentence: "The books are on the side table.",
      targetStyle: { top: '59.5%', left: '31.0%', width: '6.5%', height: '13.0%' },
      points: "49.6,53.5 60.0,53.5 60.0,65.2 49.6,65.2"
    },
    {
      wordKey: "chandelier",
      korean: "샹들리에",
      audioUrl: "/audio/livingroom/chandelier.mp3",
      videoPath: "/video/livingroom/chandelier.mp4",
      sentence: "The chandelier hangs from the ceiling.",
      targetStyle: { top: '7.5%', left: '43.5%', width: '14.0%', height: '18.0%' },
      points: "69.6,6.8 92.0,6.8 92.0,23.0 69.6,23.0"
    },
    {
      wordKey: "paintings",
      korean: "그림 액자",
      audioUrl: "/audio/livingroom/paintings.mp3",
      videoPath: "/video/livingroom/paintings.mp4",
      sentence: "The paintings are on the wall.",
      targetStyle: { top: '27.5%', left: '46.5%', width: '9.0%', height: '23.0%' },
      points: "74.4,24.7 88.8,24.7 88.8,45.4 74.4,45.4"
    },
    {
      wordKey: "plant",
      korean: "화분",
      audioUrl: "/audio/livingroom/plant.mp3",
      videoPath: "/video/livingroom/plant.mp4",
      sentence: "The green plant looks healthy.",
      targetStyle: { top: '52.5%', left: '47.5%', width: '8.0%', height: '17.5%' },
      points: "76.0,47.25 88.8,47.25 88.8,63.0 76.0,63.0"
    },
    {
      wordKey: "curtain",
      korean: "커튼",
      audioUrl: "/audio/livingroom/curtain.mp3",
      videoPath: "/video/livingroom/curtain.mp4",
      sentence: "Close the curtain to block the light.",
      targetStyle: { top: '18.0%', left: '53.0%', width: '24.5%', height: '38.0%' },
      points: "84.8,16.2 124.0,16.2 124.0,50.4 84.8,50.4"
    },
    {
      wordKey: "mirror",
      korean: "거울",
      audioUrl: "/audio/livingroom/mirror.mp3",
      videoPath: "/video/livingroom/mirror.mp4",
      sentence: "I can see myself in the mirror.",
      targetStyle: { top: '36.0%', left: '71.0%', width: '10.0%', height: '35.0%' },
      points: "113.6,32.4 129.6,32.4 129.6,63.9 113.6,63.9"
    },
    {
      wordKey: "airPurifier",
      korean: "공기청정기",
      audioUrl: "/audio/livingroom/airPurifier.mp3",
      videoPath: "/video/livingroom/airPurifier.mp4",
      sentence: "The air purifier cleans the air.",
      targetStyle: { top: '62.5%', left: '68.0%', width: '11.3%', height: '24.0%' },
      points: "108.8,56.2 126.88,56.2 126.88,77.85 108.8,77.85"
    },
    {
      wordKey: "fireplace",
      korean: "벽난로",
      audioUrl: "/audio/livingroom/fireplace.mp3",
      videoPath: "/video/livingroom/fireplace.mp4",
      sentence: "The fireplace keeps the room warm.",
      targetStyle: { top: '44.5%', left: '76.0%', width: '17.2%', height: '30.5%' },
      points: "121.6,40.1 149.1,40.1 149.1,67.5 121.6,67.5"
    },
    {
      wordKey: "massageChair",
      korean: "안마의자",
      audioUrl: "/audio/livingroom/massageChair.mp3",
      videoPath: "/video/livingroom/massageChair.mp4",
      sentence: "The massage chair is very comfortable.",
      targetStyle: { top: '52.0%', left: '80.5%', width: '18.0%', height: '44.5%' },
      points: "128.8,46.8 157.6,46.8 157.6,86.8 128.8,86.8"
    }
  ]
};