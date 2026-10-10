import zooImg from "@/assets/image/places/fantasy-nature/Zoo.jpg";

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

export const zooData: PlaceDataType = {
  placeKey: "zoo",
  placeTitle: "Zoo Word Adventure",
  bgImage: zooImg,
  masterRegions: [
    {
      wordKey: "lion",
      korean: "사자",
      audioUrl: "/audio/zoo/lion.mp3",
      videoPath: "/video/zoo/Lion.mp4",
      sentence: "The lion stands proud with a majestic mane.",
      imageType: "zoo",
      targetStyle: { top: '29.0%', left: '13.0%', width: '3.0%', height: '5.0%' },
      points: "20.8,29.0 25.6,29.0 25.6,34.0 20.8,34.0"
    },
    {
      wordKey: "tiger",
      korean: "호랑이",
      audioUrl: "/audio/zoo/tiger.mp3",
      videoPath: "/video/zoo/Tiger.mp4",
      sentence: "The orange tiger has bold black stripes.",
      imageType: "zoo",
      targetStyle: { top: '34.0%', left: '29.0%', width: '3.0%', height: '4.0%' },
      points: "46.4,34.0 51.2,34.0 51.2,38.0 46.4,38.0"
    },
    {
      wordKey: "bear",
      korean: "곰",
      audioUrl: "/audio/zoo/bear.mp3",
      videoPath: "/video/zoo/Bear.mp4",
      sentence: "The brown bear sits right in front of its cave.",
      imageType: "zoo",
      targetStyle: { top: '29.0%', left: '36.0%', width: '3.0%', height: '4.0%' },
      points: "57.6,29.0 62.4,29.0 62.4,33.0 57.6,33.0"
    },
    {
      wordKey: "monkey",
      korean: "원숭이",
      audioUrl: "/audio/zoo/monkey.mp3",
      videoPath: "/video/zoo/Monkey.mp4",
      sentence: "The playful monkey hangs playfully from the vine.",
      imageType: "zoo",
      targetStyle: { top: '8.0%', left: '62.0%', width: '3.0%', height: '4.0%' },
      points: "99.2,8.0 104.0,8.0 104.0,12.0 99.2,12.0"
    },
    {
      wordKey: "giraffe",
      korean: "기린",
      audioUrl: "/audio/zoo/giraffe.mp3",
      videoPath: "/video/zoo/Giraffe.mp4",
      sentence: "The tall giraffe stretches its neck to reach the leaves.",
      imageType: "zoo",
      targetStyle: { top: '9.0%', left: '69.0%', width: '3.0%', height: '4.0%' },
      points: "110.4,9.0 115.2,9.0 115.2,13.0 110.4,13.0"
    },
    {
      wordKey: "zebra",
      korean: "얼룩말",
      audioUrl: "/audio/zoo/zebra.mp3",
      videoPath: "/video/zoo/Zebra.mp4",
      sentence: "The zebra walks gracefully in black and white stripes.",
      imageType: "zoo",
      targetStyle: { top: '25.0%', left: '75.0%', width: '3.0%', height: '4.0%' },
      points: "120.0,25.0 124.8,25.0 124.8,29.0 120.0,29.0"
    },
    {
      wordKey: "elephant",
      korean: "코끼리",
      audioUrl: "/audio/zoo/elephant.mp3",
      videoPath: "/video/zoo/Elephant.mp4",
      sentence: "The elephant has a long trunk and big ears.",
      imageType: "zoo",
      targetStyle: { top: '36.0%', left: '83.0%', width: '2.0%', height: '4.0%' },
      points: "132.8,36.0 136.0,36.0 136.0,40.0 132.8,40.0"
    },
    {
      wordKey: "hippo",
      korean: "하마",
      audioUrl: "/audio/zoo/hippo.mp3",
      videoPath: "/video/zoo/Hippo.mp4",
      sentence: "The chubby hippo stays cool in the water pool.",
      imageType: "zoo",
      targetStyle: { top: '48.0%', left: '67.0%', width: '4.0%', height: '4.0%' },
      points: "107.2,48.0 113.6,48.0 113.6,52.0 107.2,52.0"
    },
    {
      wordKey: "rhino",
      korean: "코뿔소",
      audioUrl: "/audio/zoo/rhino.mp3",
      videoPath: "/video/zoo/Rhino.mp4",
      sentence: "The strong rhino has two pointed horns on its nose.",
      imageType: "zoo",
      targetStyle: { top: '46.0%', left: '87.0%', width: '2.0%', height: '4.0%' },
      points: "139.2,46.0 142.4,46.0 142.4,50.0 139.2,50.0"
    },
    {
      wordKey: "penguin",
      korean: "펭귄",
      audioUrl: "/audio/zoo/penguin.mp3",
      videoPath: "/video/zoo/Penguin.mp4",
      sentence: "Cute penguins waddle on the icy platform.",
      imageType: "zoo",
      targetStyle: { top: '55.0%', left: '6.0%', width: '2.0%', height: '4.0%' },
      points: "9.6,55.0 12.8,55.0 12.8,59.0 9.6,59.0"
    },
    {
      wordKey: "seal",
      korean: "물개",
      audioUrl: "/audio/zoo/seal.mp3",
      videoPath: "/video/zoo/Seal.mp4",
      sentence: "The sleek seal claps happily by the pool.",
      imageType: "zoo",
      targetStyle: { top: '62.0%', left: '15.0%', width: '2.0%', height: '3.0%' },
      points: "24.0,62.0 27.2,62.0 27.2,65.0 24.0,65.0"
    },
    {
      wordKey: "dolphin",
      korean: "돌고래",
      audioUrl: "/audio/zoo/dolphin.mp3",
      videoPath: "/video/zoo/Dolphin.mp4",
      sentence: "The dolphin leaps cheerfully above the pool.",
      imageType: "zoo",
      targetStyle: { top: '52.0%', left: '19.0%', width: '3.0%', height: '3.0%' },
      points: "30.4,52.0 35.2,52.0 35.2,55.0 30.4,55.0"
    },
    {
      wordKey: "cage",
      korean: "우리(철창)",
      audioUrl: "/audio/zoo/cage.mp3",
      videoPath: "/video/zoo/Cage.mp4",
      sentence: "A small animal stays secure inside the metal cage.",
      imageType: "zoo",
      targetStyle: { top: '60.0%', left: '33.0%', width: '3.0%', height: '4.0%' },
      points: "52.8,60.0 57.6,60.0 57.6,64.0 52.8,64.0"
    },
    {
      wordKey: "habitat",
      korean: "서식지",
      audioUrl: "/audio/zoo/habitat.mp3",
      videoPath: "/video/zoo/Habitat.mp4",
      sentence: "Each animal lives in a carefully designed habitat.",
      imageType: "zoo",
      targetStyle: { top: '48.0%', left: '9.0%', width: '3.0%', height: '3.0%' },
      points: "14.4,48.0 19.2,48.0 19.2,51.0 14.4,51.0"
    },
    {
      wordKey: "trainer",
      korean: "조련사(사육사)",
      audioUrl: "/audio/zoo/trainer.mp3",
      videoPath: "/video/zoo/Trainer.mp4",
      sentence: "The gentle trainer checks on the health of the animals.",
      imageType: "zoo",
      targetStyle: { top: '65.0%', left: '53.0%', width: '3.0%', height: '4.0%' },
      points: "84.8,65.0 89.6,65.0 89.6,69.0 84.8,69.0"
    },
    {
      wordKey: "visitor",
      korean: "관람객",
      audioUrl: "/audio/zoo/visitor.mp3",
      videoPath: "/video/zoo/Visitor.mp4",
      sentence: "Eager visitors explore every corner of the zoo.",
      imageType: "zoo",
      targetStyle: { top: '61.0%', left: '41.0%', width: '3.0%', height: '4.0%' },
      points: "65.6,61.0 70.4,61.0 70.4,65.0 65.6,65.0"
    },
    {
      wordKey: "map",
      korean: "안내도(지도)",
      audioUrl: "/audio/zoo/map.mp3",
      videoPath: "/video/zoo/Map.mp4",
      sentence: "The illustrated zoo map guides you around the park.",
      imageType: "zoo",
      targetStyle: { top: '86.0%', left: '32.0%', width: '4.0%', height: '4.0%' },
      points: "51.2,86.0 57.6,86.0 57.6,90.0 51.2,90.0"
    },
    // 완벽 수정: 소년의 손에 들린 작은 티켓 위치로 정확하게 이동 및 축소
  {
      wordKey: "ticket",
      korean: "입장권(티켓)",
      audioUrl: "/audio/zoo/ticket.mp3",
      videoPath: "/video/zoo/Ticket.mp4",
      sentence: "Present your admission ticket at the front gate.",
      imageType: "zoo",
      targetStyle: { top: '55.5%', left: '51.0%', width: '2.5%', height: '2.5%' },
      points: "81.6,55.5 85.6,55.5 85.6,58.0 81.6,58.0"
    },
    {
      wordKey: "feedingTime",
      korean: "먹이 주는 시간",
      audioUrl: "/audio/zoo/feedingtime.mp3",
      videoPath: "/video/zoo/FeedingTime.mp4",
      sentence: "Check the sign to see the animals' feeding time.",
      imageType: "zoo",
      targetStyle: { top: '86.0%', left: '6.0%', width: '3.0%', height: '4.0%' },
      points: "9.6,86.0 14.4,86.0 14.4,90.0 9.6,90.0"
    },
    {
      wordKey: "snake",
      korean: "뱀",
      audioUrl: "/audio/zoo/snake.mp3",
      videoPath: "/video/zoo/Snake.mp4",
      sentence: "A green snake coils silently around the branch.",
      imageType: "zoo",
      targetStyle: { top: '68.0%', left: '71.0%', width: '3.0%', height: '3.0%' },
      points: "113.6,68.0 118.4,68.0 118.4,71.0 113.6,71.0"
    },
    {
      wordKey: "reptileHouse",
      korean: "파충류관",
      audioUrl: "/audio/zoo/reptilehouse.mp3",
      videoPath: "/video/zoo/ReptileHouse.mp4",
      sentence: "The glass reptile house stays warm and humid.",
      imageType: "zoo",
      targetStyle: { top: '62.0%', left: '76.0%', width: '3.0%', height: '3.0%' },
      points: "121.6,62.0 126.4,62.0 126.4,65.0 121.6,65.0"
    },
    {
      wordKey: "birdhouse",
      korean: "새집",
      audioUrl: "/audio/zoo/birdhouse.mp3",
      videoPath: "/video/zoo/Birdhouse.mp4",
      sentence: "Colorful parrots perch outside the cute birdhouse.",
      imageType: "zoo",
      targetStyle: { top: '76.0%', left: '80.0%', width: '2.0%', height: '3.0%' },
      points: "128.0,76.0 131.2,76.0 131.2,79.0 128.0,79.0"
    },
    {
      wordKey: "entrance",
      korean: "입구",
      audioUrl: "/audio/zoo/entrance.mp3",
      videoPath: "/video/zoo/Entrance.mp4",
      sentence: "Walk through the grand entrance to enter the zoo.",
      imageType: "zoo",
      targetStyle: { top: '12.0%', left: '48.0%', width: '4.0%', height: '4.0%' },
      points: "76.8,12.0 83.2,12.0 83.2,16.0 76.8,16.0"
    },
    {
      wordKey: "souvenir",
      korean: "기념품(가판대)",
      audioUrl: "/audio/zoo/souvenir.mp3",
      videoPath: "/video/zoo/Souvenir.mp4",
      sentence: "Buy cute plush toys and souvenirs at the shop.",
      imageType: "zoo",
      targetStyle: { top: '72.0%', left: '91.0%', width: '4.0%', height: '4.0%' },
      points: "145.6,72.0 152.0,72.0 152.0,76.0 145.6,76.0"
    }
  ]
};