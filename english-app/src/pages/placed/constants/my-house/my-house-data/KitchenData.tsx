import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const kitchenImg = ThemeImage.kitchen;
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
  points: string; // SVG 폴리곤 렌더링용 포인트 데이터
  imageType?: "apartment" | "house" | "kitchen"; // 주방 타입 확장
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const kitchenData: PlaceDataType = {
  placeKey: "kitchen",
  placeTitle: "Kitchen Word Adventure",
  bgImage: kitchenImg,
  masterRegions: [
    {
      wordKey: "refrigerator",
      korean: "냉장고",
      audioUrl: "/audio/kitchen/refrigerator.mp3",
      videoPath: "/video/kitchen/refrigerator.mp4",
      sentence: "The refrigerator is cold. I open the refrigerator.",
      imageType: "kitchen",
      targetStyle: { top: '31.8%', left: '24.5%', width: '11.0%', height: '37.7%' },
      points: "39.2,28.6 56.8,28.6 56.8,62.5 39.2,62.5"
    },
    {
      wordKey: "plate",
      korean: "접시",
      audioUrl: "/audio/kitchen/plate.mp3",
      videoPath: "/video/kitchen/plate.mp4",
      sentence: "The food is on the plate.",
      imageType: "kitchen",
      targetStyle: { top: '59.5%', left: '19.5%', width: '7.3%', height: '7.0%' },
      points: "31.2,53.5 42.8,53.5 42.8,59.8 31.2,59.8"
    },
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: "/audio/kitchen/oven.mp3",
      videoPath: "/video/kitchen/oven.mp4",
      sentence: "We bake bread in the oven.",
      imageType: "kitchen",
      targetStyle: { top: '38.5%', left: '36.5%', width: '8.0%', height: '18.0%' },
      points: "58.4,34.7 71.2,34.7 71.2,50.9 58.4,50.9"
    },
    {
      wordKey: "rangeHood",
      korean: "레인지 후드",
      audioUrl: "/audio/kitchen/range_hood.mp3",
      videoPath: "/video/kitchen/range_hood.mp4",
      sentence: "The range hood cleans the air.",
      imageType: "kitchen",
      targetStyle: { top: '26.5%', left: '44.0%', width: '12.5%', height: '12.5%' },
      points: "70.4,23.9 90.4,23.9 90.4,35.1 70.4,35.1"
    },
    {
      wordKey: "stove",
      korean: "가스레인지/조리기",
      audioUrl: "/audio/kitchen/stove.mp3",
      videoPath: "/video/kitchen/stove.mp4",
      sentence: "Mom cooks dinner on the stove.",
      imageType: "kitchen",
      targetStyle: { top: '49.0%', left: '45.0%', width: '10.5%', height: '10.5%' },
      points: "72.0,44.1 88.8,44.1 88.8,53.6 72.0,53.6"
    },
    {
      wordKey: "pot",
      korean: "냄비",
      audioUrl: "/audio/kitchen/pot.mp3",
      videoPath: "/video/kitchen/pot.mp4",
      sentence: "The soup is boiling in the pot.",
      imageType: "kitchen",
      targetStyle: { top: '47.0%', left: '49.2%', width: '6.6%', height: '8.5%' },
      points: "78.7,42.3 89.3,42.3 89.3,50.0 78.7,50.0"
    },
    {
      wordKey: "cuttingBoard",
      korean: "도마",
      audioUrl: "/audio/kitchen/cutting_board.mp3",
      videoPath: "/video/kitchen/cutting_board.mp4",
      sentence: "I chop vegetables on the cutting board.",
      imageType: "kitchen",
      targetStyle: { top: '44.5%', left: '56.5%', width: '4.0%', height: '10.0%' },
      points: "90.4,40.1 96.8,40.1 96.8,49.1 90.4,49.1"
    },
    {
      wordKey: "dishes",
      korean: "식기류/접시들",
      audioUrl: "/audio/kitchen/dishes.mp3",
      videoPath: "/video/kitchen/dishes.mp4",
      sentence: "I stack the clean dishes.",
      imageType: "kitchen",
      targetStyle: { top: '56.2%', left: '55.2%', width: '5.3%', height: '5.0%' },
      points: "88.3,50.5 96.8,50.5 96.8,55.1 88.3,55.1"
    },
    {
      wordKey: "microwave",
      korean: "전자레인지",
      audioUrl: "/audio/kitchen/microwave.mp3",
      videoPath: "/video/kitchen/microwave.mp4",
      sentence: "I warm up food in the microwave.",
      imageType: "kitchen",
      targetStyle: { top: '31.0%', left: '56.5%', width: '8.0%', height: '10.5%' },
      points: "90.4,27.9 103.2,27.9 103.2,37.4 90.4,37.4"
    },
    {
      wordKey: "electricKettle",
      korean: "전기포트",
      audioUrl: "/audio/kitchen/electric_kettle.mp3",
      videoPath: "/video/kitchen/electric_kettle.mp4",
      sentence: "The electric kettle boils water quickly.",
      imageType: "kitchen",
      targetStyle: { top: '46.5%', left: '70.0%', width: '5.8%', height: '8.5%' },
      points: "112.0,41.9 121.3,41.9 121.3,49.5 112.0,49.5"
    },
    {
      wordKey: "blender",
      korean: "믹서기",
      audioUrl: "/audio/kitchen/blender.mp3",
      videoPath: "/video/kitchen/blender.mp4",
      sentence: "We make juice with the blender.",
      imageType: "kitchen",
      targetStyle: { top: '43.5%', left: '78.5%', width: '5.0%', height: '12.0%' },
      points: "125.6,39.2 133.6,39.2 133.6,50.0 125.6,50.0"
    },
    {
      wordKey: "faucet",
      korean: "수전/수도꼭지",
      audioUrl: "/audio/kitchen/faucet.mp3",
      videoPath: "/video/kitchen/faucet.mp4",
      sentence: "Water flows from the faucet.",
      imageType: "kitchen",
      targetStyle: { top: '45.5%', left: '83.5%', width: '4.5%', height: '10.5%' },
      points: "133.6,41.0 140.8,41.0 140.8,50.4 133.6,50.4"
    },
    {
      wordKey: "dishwasher",
      korean: "식기세척기",
      audioUrl: "/audio/kitchen/dishwasher.mp3",
      videoPath: "/video/kitchen/dishwasher.mp4",
      sentence: "The dishwasher cleans all the plates.",
      imageType: "kitchen",
      targetStyle: { top: '57.5%', left: '81.5%', width: '8.0%', height: '29.0%' },
      points: "130.4,51.8 143.2,51.8 143.2,77.9 130.4,77.9"
    },
    {
      wordKey: "cabinet",
      korean: "수납장/찬장",
      audioUrl: "/audio/kitchen/cabinet.mp3",
      videoPath: "/video/kitchen/cabinet.mp4",
      sentence: "Cups are inside the cabinet.",
      imageType: "kitchen",
      targetStyle: { top: '6.0%', left: '85.5%', width: '9.5%', height: '37.5%' },
      points: "136.8,5.4 152.0,5.4 152.0,39.2 136.8,39.2"
    },
    {
      wordKey: "roastedChicken",
      korean: "로스트 치킨",
      audioUrl: "/audio/kitchen/roasted_chicken.mp3",
      videoPath: "/video/kitchen/roasted_chicken.mp4",
      sentence: "The roasted chicken smells delicious.",
      imageType: "kitchen",
      targetStyle: { top: '58.5%', left: '27.0%', width: '9.2%', height: '9.0%' },
      points: "43.2,52.6 57.9,52.6 57.9,60.8 43.2,60.8"
    },
    {
      wordKey: "tableMug",
      korean: "머그컵",
      audioUrl: "/audio/kitchen/table_mug.mp3",
      videoPath: "/video/kitchen/table_mug.mp4",
      sentence: "Hot cocoa is in the mug.",
      imageType: "kitchen",
      targetStyle: { top: '59.5%', left: '36.8%', width: '2.2%', height: '4.5%' },
      points: "58.8,53.5 62.4,53.5 62.4,57.6 58.8,57.6"
    },
    {
      wordKey: "utensils",
      korean: "조리도구",
      audioUrl: "/audio/kitchen/utensils.mp3",
      videoPath: "/video/kitchen/utensils.mp4",
      sentence: "We use utensils to cook and eat.",
      imageType: "kitchen",
      targetStyle: { top: '44.5%', left: '62.8%', width: '2.7%', height: '10.0%' },
      points: "100.5,40.1 104.8,40.1 104.8,49.1 100.5,49.1"
    },
    {
      wordKey: "knifeBlock",
      korean: "칼꽂이 블록",
      audioUrl: "/audio/kitchen/knife_block.mp3",
      videoPath: "/video/kitchen/knife_block.mp4",
      sentence: "Knives are stored safely in the knife block.",
      imageType: "kitchen",
      targetStyle: { top: '53.5%', left: '59.2%', width: '5.3%', height: '9.0%' },
      points: "94.7,48.2 103.2,48.2 103.2,56.3 94.7,56.3"
    },
    {
      wordKey: "sink",
      korean: "싱크대",
      audioUrl: "/audio/kitchen/sink.mp3",
      videoPath: "/video/kitchen/sink.mp4",
      sentence: "I wash my hands in the sink.",
      imageType: "kitchen",
      targetStyle: { top: '53.5%', left: '76.5%', width: '10.3%', height: '11.0%' },
      points: "122.4,48.2 138.9,48.2 138.9,58.1 122.4,58.1"
    },
    {
      wordKey: "wallKnife",
      korean: "벽걸이 칼",
      audioUrl: "/audio/kitchen/wall_knife.mp3",
      videoPath: "/video/kitchen/wall_knife.mp4",
      sentence: "A knife is hanging on the wall.",
      imageType: "kitchen",
      targetStyle: { top: '48.5%', left: '59.5%', width: '5.5%', height: '3.0%' },
      points: "95.2,43.6 104.0,43.6 104.0,46.3 95.2,46.3"
    }
  ]
};