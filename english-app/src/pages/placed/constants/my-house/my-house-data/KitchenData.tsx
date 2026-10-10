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
  points: string; 
  imageType?: "apartment" | "house" | "kitchen"; 
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
    // 1. 냉장고
    {
      wordKey: "refrigerator",
      korean: "냉장고",
      audioUrl: "/audio/kitchen/refrigerator.mp3",
      videoPath: "/video/kitchen/refrigerator.mp4",
      sentence: "The fridge is big. I open the refrigerator.",
      imageType: "kitchen",
      targetStyle: { top: '32.0%', left: '23.0%', width: '9.0%', height: '24.0%' },
      points: "36.8,28.8 51.2,28.8 51.2,50.4 36.8,50.4"
    },
    // 2. 접시
    {
      wordKey: "plate",
      korean: "접시",
      audioUrl: "/audio/kitchen/plate.mp3",
      videoPath: "/video/kitchen/plate.mp4",
      sentence: "The plate is round. I put food on the plate.",
      imageType: "kitchen",
      targetStyle: { top: '64.0%', left: '19.0%', width: '5.0%', height: '3.0%' },
      points: "30.4,57.6 38.4,57.6 38.4,60.3 30.4,60.3"
    },
    // 3. 로스트 치킨
    {
      wordKey: "roastedChicken",
      korean: "로스트 치킨",
      audioUrl: "/audio/kitchen/roasted_chicken.mp3",
      videoPath: "/video/kitchen/roasted_chicken.mp4",
      sentence: "The roasted chicken smells delicious.",
      imageType: "kitchen",
      targetStyle: { top: '61.0%', left: '26.0%', width: '7.0%', height: '5.0%' },
      points: "41.6,54.9 52.8,54.9 52.8,59.4 41.6,59.4"
    },
    // 4. 머그컵
    {
      wordKey: "tableMug",
      korean: "머그컵",
      audioUrl: "/audio/kitchen/table_mug.mp3",
      videoPath: "/video/kitchen/table_mug.mp4",
      sentence: "The mug is warm. Dad drinks coffee in a mug.",
      imageType: "kitchen",
      targetStyle: { top: '61.0%', left: '35.0%', width: '3.0%', height: '4.0%' },
      points: "56.0,54.9 60.8,54.9 60.8,58.5 56.0,58.5"
    },
    // 5. 오븐
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: "/audio/kitchen/oven.mp3",
      videoPath: "/video/kitchen/oven.mp4",
      sentence: "The oven is warm. Mom bakes in the oven.",
      imageType: "kitchen",
      targetStyle: { top: '39.0%', left: '36.0%', width: '7.0%', height: '14.0%' },
      points: "57.6,35.1 68.8,35.1 68.8,47.7 57.6,47.7"
    },
    // 6. 레인지 후드
    {
      wordKey: "rangeHood",
      korean: "레인지 후드",
      audioUrl: "/audio/kitchen/range_hood.mp3",
      videoPath: "/video/kitchen/range_hood.mp4",
      sentence: "The range hood is silver. We have a range hood.",
      imageType: "kitchen",
      targetStyle: { top: '25.0%', left: '45.0%', width: '11.0%', height: '7.0%' },
      points: "72.0,22.5 89.6,22.5 89.6,28.8 72.0,28.8"
    },
    // 7. 냄비
    {
      wordKey: "pot",
      korean: "냄비",
      audioUrl: "/audio/kitchen/pot.mp3",
      videoPath: "/video/kitchen/pot.mp4",
      sentence: "The pot is full. Mom boils water in the pot.",
      imageType: "kitchen",
      targetStyle: { top: '48.0%', left: '46.0%', width: '4.0%', height: '4.0%' },
      points: "73.6,43.2 80.0,43.2 80.0,46.8 73.6,46.8"
    },
    // 8. 가스레인지/조리기
    {
      wordKey: "stove",
      korean: "가스레인지/조리기",
      audioUrl: "/audio/kitchen/stove.mp3",
      videoPath: "/video/kitchen/stove.mp4",
      sentence: "The stove is hot. Mom cooks on the stove.",
      imageType: "kitchen",
      targetStyle: { top: '53.0%', left: '46.0%', width: '9.0%', height: '16.0%' },
      points: "73.6,47.7 88.0,47.7 88.0,62.1 73.6,62.1"
    },
    // 9. 도마
    {
      wordKey: "cuttingBoard",
      korean: "도마",
      audioUrl: "/audio/kitchen/cutting_board.mp3",
      videoPath: "/video/kitchen/cutting_board.mp4",
      sentence: "The cutting board is clean. I put vegetables on the cutting board.",
      imageType: "kitchen",
      targetStyle: { top: '50.0%', left: '56.0%', width: '3.0%', height: '2.0%' },
      points: "89.6,45.0 94.4,45.0 94.4,46.8 89.6,46.8"
    },
    // 10. 식기류/접시들
    {
      wordKey: "dishes",
      korean: "식기류/접시들",
      audioUrl: "/audio/kitchen/dishes.mp3",
      videoPath: "/video/kitchen/dishes.mp4",
      sentence: "The silverware is clean. I set out the silverware.",
      imageType: "kitchen",
      targetStyle: { top: '56.0%', left: '56.0%', width: '4.0%', height: '5.0%' },
      points: "89.6,50.4 96.0,50.4 96.0,54.9 89.6,54.9"
    },
    // 11. 벽걸이 칼
    {
      wordKey: "wallKnife",
      korean: "벽걸이 칼",
      audioUrl: "/audio/kitchen/wall_knife.mp3",
      videoPath: "/video/kitchen/wall_knife.mp4",
      sentence: "The kitchen knife is sharp. Mom uses the kitchen knife.",
      imageType: "kitchen",
      targetStyle: { top: '43.0%', left: '61.0%', width: '2.0%', height: '5.0%' },
      points: "97.6,38.7 100.8,38.7 100.8,43.2 97.6,43.2"
    },
    // 12. 칼꽂이 블록
    {
      wordKey: "knifeBlock",
      korean: "칼꽂이 블록",
      audioUrl: "/audio/kitchen/knife_block.mp3",
      videoPath: "/video/kitchen/knife_block.mp4",
      sentence: "Knives are stored safely in the knife block.",
      imageType: "kitchen",
      targetStyle: { top: '59.0%', left: '61.0%', width: '3.0%', height: '4.0%' },
      points: "97.6,53.1 102.4,53.1 102.4,56.7 97.6,56.7"
    },
    // 13. 조리도구
    {
      wordKey: "utensils",
      korean: "조리도구",
      audioUrl: "/audio/kitchen/utensils.mp3",
      videoPath: "/video/kitchen/utensils.mp4",
      sentence: "The tongs are useful. Dad uses the tongs.",
      imageType: "kitchen",
      targetStyle: { top: '43.0%', left: '64.0%', width: '3.0%', height: '6.0%' },
      points: "102.4,38.7 107.2,38.7 107.2,44.1 102.4,44.1"
    },
    // 14. 전자레인지
    {
      wordKey: "microwave",
      korean: "전자레인지",
      audioUrl: "/audio/kitchen/microwave.mp3",
      videoPath: "/video/kitchen/microwave.mp4",
      sentence: "The microwave is fast. I heat my food in the microwave.",
      imageType: "kitchen",
      targetStyle: { top: '32.0%', left: '57.0%', width: '6.0%', height: '8.0%' },
      points: "91.2,28.8 100.8,28.8 100.8,36.0 91.2,36.0"
    },
    // 15. 전기포트 (수정: 믹서기 좌측의 하얀색 기기 위치로 정확히 분리)
    {
      wordKey: "electricKettle",
      korean: "전기포트",
      audioUrl: "/audio/kitchen/electric_kettle.mp3",
      videoPath: "/video/kitchen/electric_kettle.mp4",
      sentence: "The electric kettle boils water quickly.",
      imageType: "kitchen",
      targetStyle: { top: '48.0%', left: '71.0%', width: '4.0%', height: '6.0%' },
      points: "113.6,43.2 120.0,43.2 120.0,48.6 113.6,48.6"
    },
    // 16. 믹서기 (수정: 싱크대 수전 바로 왼쪽 코너의 유리 믹서기 위치로 정확히 이동)
    {
      wordKey: "blender",
      korean: "믹서기",
      audioUrl: "/audio/kitchen/blender.mp3",
      videoPath: "/video/kitchen/blender.mp4",
      sentence: "We make juice with the blender.",
      imageType: "kitchen",
      targetStyle: { top: '45.0%', left: '79.0%', width: '3.0%', height: '9.0%' },
      points: "126.4,40.5 131.2,40.5 131.2,48.6 126.4,48.6"
    },
    // 17. 수전/수도꼭지
    {
      wordKey: "faucet",
      korean: "수전/수도꼭지",
      audioUrl: "/audio/kitchen/faucet.mp3",
      videoPath: "/video/kitchen/faucet.mp4",
      sentence: "The faucet is shiny. I turn on the tap.",
      imageType: "kitchen",
      targetStyle: { top: '47.0%', left: '84.0%', width: '4.0%', height: '8.0%' },
      points: "134.4,42.3 140.8,42.3 140.8,49.5 134.4,49.5"
    },
    // 18. 싱크대
    {
      wordKey: "sink",
      korean: "싱크대",
      audioUrl: "/audio/kitchen/sink.mp3",
      videoPath: "/video/kitchen/sink.mp4",
      sentence: "The kitchen sink is deep. I wash my hands in the kitchen sink.",
      imageType: "kitchen",
      targetStyle: { top: '55.0%', left: '78.0%', width: '10.0%', height: '6.0%' },
      points: "124.8,49.5 140.8,49.5 140.8,54.9 124.8,54.9"
    },
    // 19. 식기세척기
    {
      wordKey: "dishwasher",
      korean: "식기세척기",
      audioUrl: "/audio/kitchen/dishwasher.mp3",
      videoPath: "/video/kitchen/dishwasher.mp4",
      sentence: "The dishwasher is loud. Dad uses the dishwasher.",
      imageType: "kitchen",
      targetStyle: { top: '61.0%', left: '74.0%', width: '9.0%', height: '18.0%' },
      points: "118.4,54.9 132.8,54.9 132.8,71.1 118.4,71.1"
    },
    // 20. 수납장/찬장
    {
      wordKey: "cabinet",
      korean: "수납장/찬장",
      audioUrl: "/audio/kitchen/cabinet.mp3",
      videoPath: "/video/kitchen/cabinet.mp4",
      sentence: "The cabinet is full. Mom opens the cabinet.",
      imageType: "kitchen",
      targetStyle: { top: '10.0%', left: '88.0%', width: '10.0%', height: '30.0%' },
      points: "140.8,9.0 156.8,9.0 156.8,36.0 140.8,36.0"
    }
  ]
};