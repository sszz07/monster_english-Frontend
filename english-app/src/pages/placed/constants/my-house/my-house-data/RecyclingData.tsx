import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const recyclingAreaImg = ThemeImage.recycling;
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
}

// 구조도 파악 데이터 / 이미지 / 
export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const recyclingAreaData: PlaceDataType = {
  placeKey: "recycling_area",
  placeTitle: "Recycling Area Word Adventure",
  bgImage: recyclingAreaImg,
  masterRegions: [
    {
      wordKey: "paper",
      korean: "종이",
      audioUrl: "/audio/recycling_area/paper.mp3",
      videoPath: "/video/recycling_area/paper.mp4",
      sentence: "Stack the paper neatly.",
      targetStyle: { top: '60.0%', left: '1.0%', width: '12.0%', height: '18.0%' },
      points: "1.6,54.0 20.8,54.0 20.8,70.2 1.6,70.2"
    },
    {
      wordKey: "glass",
      korean: "유리",
      audioUrl: "/audio/recycling_area/glass.mp3",
      videoPath: "/video/recycling_area/glass.mp4",
      sentence: "Put glass in the green bin.",
      targetStyle: { top: '40.0%', left: '41.0%', width: '13.0%', height: '38.0%' },
      points: "65.6,36.0 86.4,36.0 86.4,70.2 65.6,70.2"
    },
    {
      wordKey: "plastic",
      korean: "플라스틱",
      audioUrl: "/audio/recycling_area/plastic.mp3",
      videoPath: "/video/recycling_area/plastic.mp4",
      sentence: "Recycle plastic bottles in the blue bin.",
      targetStyle: { top: '41.0%', left: '50.0%', width: '18.0%', height: '42.0%' },
      points: "80.0,36.9 108.8,36.9 108.8,74.7 80.0,74.7"
    },
    {
      wordKey: "can",
      korean: "캔/통조림",
      audioUrl: "/audio/recycling_area/can.mp3",
      videoPath: "/video/recycling_area/can.mp4",
      sentence: "Crush the soda can before throwing it away.",
      targetStyle: { top: '79.0%', left: '41.0%', width: '13.0%', height: '16.0%' },
      points: "65.6,71.1 86.4,71.1 86.4,85.5 65.6,85.5"
    },
    {
      wordKey: "vinyl",
      korean: "비닐",
      audioUrl: "/audio/recycling_area/vinyl.mp3",
      videoPath: "/video/recycling_area/vinyl.mp4",
      sentence: "Collect clean vinyl bags together.",
      targetStyle: { top: '65.0%', left: '63.5%', width: '9.5%', height: '21.0%' },
      points: "101.6,58.5 116.8,58.5 116.8,77.4 101.6,77.4"
    },
    {
      wordKey: "bottle",
      korean: "병",
      audioUrl: "/audio/recycling_area/bottle.mp3",
      videoPath: "/video/recycling_area/bottle.mp4",
      sentence: "He holds a glass bottle.",
      targetStyle: { top: '35.0%', left: '26.5%', width: '6.0%', height: '22.0%' },
      points: "42.4,31.5 52.0,31.5 52.0,51.3 42.4,51.3"
    },
    {
      wordKey: "box",
      korean: "박스/상자",
      audioUrl: "/audio/recycling_area/box.mp3",
      videoPath: "/video/recycling_area/box.mp4",
      sentence: "Flatten the cardboard box.",
      targetStyle: { top: '68.0%', left: '18.5%', width: '20.0%', height: '24.0%' },
      points: "29.6,61.2 61.6,61.2 61.6,82.8 29.6,82.8"
    },
    {
      wordKey: "newspaper",
      korean: "신문",
      audioUrl: "/audio/recycling_area/newspaper.mp3",
      videoPath: "/video/recycling_area/newspaper.mp4",
      sentence: "Tie old newspapers with string.",
      targetStyle: { top: '62.0%', left: '13.0%', width: '10.5%', height: '16.0%' },
      points: "20.8,55.8 37.6,55.8 37.6,70.2 20.8,70.2"
    },
    {
      wordKey: "metal",
      korean: "금속/철",
      audioUrl: "/audio/recycling_area/metal.mp3",
      videoPath: "/video/recycling_area/metal.mp4",
      sentence: "Metal items go into the grey bin.",
      targetStyle: { top: '39.0%', left: '34.0%', width: '11.5%', height: '35.0%' },
      points: "54.4,35.1 72.8,35.1 72.8,66.6 54.4,66.6"
    },
    {
      wordKey: "clothes",
      korean: "옷/의류",
      audioUrl: "/audio/recycling_area/clothes.mp3",
      videoPath: "/video/recycling_area/clothes.mp4",
      sentence: "Donate old clothes in good condition.",
      targetStyle: { top: '34.0%', left: '63.5%', width: '9.5%', height: '23.0%' },
      points: "101.6,30.6 116.8,30.6 116.8,51.3 101.6,51.3"
    },
    {
      wordKey: "bin",
      korean: "수거함",
      audioUrl: "/audio/recycling_area/bin.mp3",
      videoPath: "/video/recycling_area/bin.mp4",
      sentence: "Throw trash into the correct bin.",
      targetStyle: { top: '38.0%', left: '27.5%', width: '11.0%', height: '32.0%' },
      points: "44.0,34.2 61.6,34.2 61.6,63.0 44.0,63.0"
    },
    {
      wordKey: "bag",
      korean: "가방/봉투",
      audioUrl: "/audio/recycling_area/bag.mp3",
      videoPath: "/video/recycling_area/bag.mp4",
      sentence: "Use a reusable shopping bag.",
      targetStyle: { top: '65.0%', left: '72.5%', width: '10.0%', height: '25.0%' },
      points: "116.0,58.5 132.0,58.5 132.0,81.0 116.0,81.0"
    },
    {
      wordKey: "trash_can",
      korean: "쓰레기통",
      audioUrl: "/audio/recycling_area/trash_can.mp3",
      videoPath: "/video/recycling_area/trash_can.mp4",
      sentence: "Keep the area around the trash can clean.",
      targetStyle: { top: '39.0%', left: '89.0%', width: '10.0%', height: '38.0%' },
      points: "142.4,35.1 158.4,35.1 158.4,69.3 142.4,69.3"
    },
    {
      wordKey: "basket",
      korean: "바구니",
      audioUrl: "/audio/recycling_area/basket.mp3",
      videoPath: "/video/recycling_area/basket.mp4",
      sentence: "Food waste goes into the green basket.",
      targetStyle: { top: '66.0%', left: '85.0%', width: '14.5%', height: '30.0%' },
      points: "136.0,59.4 159.2,59.4 159.2,86.4 136.0,86.4"
    },
    {
      wordKey: "cart",
      korean: "우유팩 수거함/수레",
      audioUrl: "/audio/recycling_area/cart.mp3",
      videoPath: "/video/recycling_area/cart.mp4",
      sentence: "Milk cartons are recycled separately.",
      targetStyle: { top: '54.0%', left: '83.5%', width: '7.0%', height: '25.0%' },
      points: "133.6,48.6 144.8,48.6 144.8,71.1 133.6,71.1"
    },
    {
      wordKey: "label",
      korean: "라벨/상표",
      audioUrl: "/audio/recycling_area/label.mp3",
      videoPath: "/video/recycling_area/label.mp4",
      sentence: "Remove the label before recycling.",
      targetStyle: { top: '62.0%', left: '52.0%', width: '8.0%', height: '14.0%' },
      points: "83.2,55.8 96.0,55.8 96.0,68.4 83.2,68.4"
    },
    {
      wordKey: "wash",
      korean: "씻다",
      audioUrl: "/audio/recycling_area/wash.mp3",
      videoPath: "/video/recycling_area/wash.mp4",
      sentence: "Wash the bottles cleanly before throwing them away.",
      targetStyle: { top: '35.0%', left: '54.0%', width: '7.0%', height: '18.0%' },
      points: "86.4,31.5 97.6,31.5 97.6,47.7 86.4,47.7"
    },
    {
      wordKey: "dry",
      korean: "말리다",
      audioUrl: "/audio/recycling_area/dry.mp3",
      videoPath: "/video/recycling_area/dry.mp4",
      sentence: "Dry plastic items after washing.",
      targetStyle: { top: '80.0%', left: '29.0%', width: '12.0%', height: '16.0%' },
      points: "46.4,72.0 65.6,72.0 65.6,86.4 46.4,86.4"
    },
    {
      wordKey: "empty",
      korean: "비우다",
      audioUrl: "/audio/recycling_area/empty.mp3",
      videoPath: "/video/recycling_area/empty.mp4",
      sentence: "Make sure the bottle is empty.",
      targetStyle: { top: '82.0%', left: '62.0%', width: '13.0%', height: '14.0%' },
      points: "99.2,73.8 120.0,73.8 120.0,86.4 99.2,86.4"
    },
    {
      wordKey: "separate",
      korean: "분리하다",
      audioUrl: "/audio/recycling_area/separate.mp3",
      videoPath: "/video/recycling_area/separate.mp4",
      sentence: "We separate garbage by type.",
      targetStyle: { top: '18.0%', left: '17.5%', width: '14.0%', height: '52.0%' },
      points: "28.0,16.2 50.4,16.2 50.4,63.0 28.0,63.0"
    },
    {
      wordKey: "throw",
      korean: "버리다",
      audioUrl: "/audio/recycling_area/throw.mp3",
      videoPath: "/video/recycling_area/throw.mp4",
      sentence: "Throw plastic into the blue bin.",
      targetStyle: { top: '11.0%', left: '54.0%', width: '19.0%', height: '60.0%' },
      points: "86.4,9.9 116.8,9.9 116.8,63.0 86.4,63.0"
    },
    {
      wordKey: "clean",
      korean: "깨끗한",
      audioUrl: "/audio/recycling_area/clean.mp3",
      videoPath: "/video/recycling_area/clean.mp4",
      sentence: "Only recycle clean glass jars.",
      targetStyle: { top: '77.0%', left: '50.5%', width: '5.5%', height: '15.0%' },
      points: "80.8,69.3 89.6,69.3 89.6,82.8 80.8,82.8"
    },
    {
      wordKey: "dirty",
      korean: "더러운",
      audioUrl: "/audio/recycling_area/dirty.mp3",
      videoPath: "/video/recycling_area/dirty.mp4",
      sentence: "Rinse dirty cans with water.",
      targetStyle: { top: '79.0%', left: '56.0%', width: '5.0%', height: '15.0%' },
      points: "89.6,71.1 97.6,71.1 97.6,84.6 89.6,84.6"
    },
    {
      wordKey: "full",
      korean: " 가득 찬",
      audioUrl: "/audio/recycling_area/full.mp3",
      videoPath: "/video/recycling_area/full.mp4",
      sentence: "The paper box is full.",
      targetStyle: { top: '50.0%', left: '0.5%', width: '17.0%', height: '26.0%' },
      points: "0.8,45.0 28.0,45.0 28.0,68.4 0.8,68.4"
    },
    {
      wordKey: "put",
      korean: "넣다/두다",
      audioUrl: "/audio/recycling_area/put.mp3",
      videoPath: "/video/recycling_area/put.mp4",
      sentence: "Put the bottle inside the bin.",
      targetStyle: { top: '37.0%', left: '54.0%', width: '8.0%', height: '17.0%' },
      points: "86.4,33.3 99.2,33.3 99.2,48.6 86.4,48.6"
    }
  ]
};