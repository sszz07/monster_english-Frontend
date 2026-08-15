import houseImg from '@/assets/image/places/house/house.png';

// 🌟 TypeScript 타입 안정성을 위한 장소 데이터 인터페이스 정의
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
  imageType?: "apartment" | "house"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const houseData: PlaceDataType = {
  placeKey: "house",
  placeTitle: "House Word Adventure",
  bgImage: houseImg,
  masterRegions: [
    {
      wordKey: "chimney",
      korean: "굴뚝",
      audioUrl: "/audio/house/chimney.mp3",
      videoPath: "/video/house/chimney.mp4",
      sentence: "Smoke comes out of the chimney.",
      imageType: "house",
      targetStyle: { top: '4.0%', left: '18.5%', width: '10.0%', height: '17.0%' },
      points: "29.6,3.6 45.6,3.6 45.6,18.9 29.6,18.9"
    },
    {
      wordKey: "ladder",
      korean: "사다리",
      audioUrl: "/audio/house/ladder.mp3",
      videoPath: "/video/house/ladder.mp4",
      sentence: "I climb up the ladder.",
      imageType: "house",
      targetStyle: { top: '5.0%', left: '27.5%', width: '12.0%', height: '25.5%' },
      points: "44.0,4.5 63.2,4.5 63.2,27.5 44.0,27.5"
    },
    { //모델에서 인덱스
      wordKey: "atticWindow",
      korean: "다락방 창문",
      audioUrl: "/audio/house/attic_window.mp3",
      videoPath: "/video/house/attic_window.mp4",
      sentence: "I look out the attic window.",
      imageType: "house",
      targetStyle: { top: '7.5%', left: '61.0%', width: '10.5%', height: '20.0%' },
      points: "97.6,6.7 114.4,6.7 114.4,24.7 97.6,24.7"
    },
    {
      wordKey: "skylight",
      korean: "천창(지붕 창문)",
      audioUrl: "/audio/house/skylight.mp3",
      videoPath: "/video/house/skylight.mp4",
      sentence: "Sunlight comes through the skylight.",
      imageType: "house",
      targetStyle: { top: '14.0%', left: '42.5%', width: '7.0%', height: '8.5%' },
      points: "68.0,12.6 79.2,12.6 79.2,20.2 68.0,20.2"
    },
    {
      wordKey: "kitchen",
      korean: "주방",
      audioUrl: "/audio/house/kitchen.mp3",
      videoPath: "/video/house/kitchen.mp4",
      sentence: "Mom cooks dinner in the kitchen.",
      imageType: "house",
      targetStyle: { top: '25.5%', left: '56.8%', width: '19.7%', height: '24.7%' },
      points: "90.9,23.0 122.4,23.0 122.4,45.2 90.9,45.2"
    },
    {
      wordKey: "awning",
      korean: "차양(차양막)",
      audioUrl: "/audio/house/awning.mp3",
      videoPath: "/video/house/awning.mp4",
      sentence: "The awning blocks the bright sun.",
      imageType: "house",
      targetStyle: { top: '39.5%', left: '40.5%', width: '13.0%', height: '12.0%' },
      points: "64.8,35.5 85.6,35.5 85.6,46.3 64.8,46.3"
    },
    {
      wordKey: "deckChair",
      korean: "야외 의자",
      audioUrl: "/audio/house/deck_chair.mp3",
      videoPath: "/video/house/deck_chair.mp4",
      sentence: "I sit on the deck chair and relax.",
      imageType: "house",
      targetStyle: { top: '42.5%', left: '87.5%', width: '11.0%', height: '27.0%' },
      points: "140.0,38.2 157.6,38.2 157.6,62.5 140.0,62.5"
    },
    {
      wordKey: "sink",
      korean: "싱크대",
      audioUrl: "/audio/house/sink.mp3",
      videoPath: "/video/house/sink.mp4",
      sentence: "I wash my hands in the sink.",
      imageType: "house",
      targetStyle: { top: '43.8%', left: '77.2%', width: '6.8%', height: '17.4%' },
      points: "123.5,39.4 134.4,39.4 134.4,55.1 123.5,55.1"
    },
    {
      wordKey: "patioDoor",
      korean: "베란다 문",
      audioUrl: "/audio/house/patio_door.mp3",
      videoPath: "/video/house/patio_door.mp4",
      sentence: "Open the patio door to go outside.",
      imageType: "house",
      targetStyle: { top: '44.5%', left: '83.0%', width: '5.0%', height: '19.0%' },
      points: "132.8,40.1 140.8,40.1 140.8,57.2 132.8,57.2"
    },
    {
      wordKey: "livingRoom",
      korean: "거실",
      audioUrl: "/audio/house/living_room.mp3",
      videoPath: "/video/house/living_room.mp4",
      sentence: "We watch TV in the living room.",
      imageType: "house",
      targetStyle: { top: '46.5%', left: '24.5%', width: '16.3%', height: '25.0%' },
      points: "39.2,41.9 65.3,41.9 65.3,64.4 39.2,64.4"
    },
    {
      wordKey: "bedroom",
      korean: "침실",
      audioUrl: "/audio/house/bedroom.mp3",
      videoPath: "/video/house/bedroom.mp4",
      sentence: "I sleep in my cozy bedroom.",
      imageType: "house",
      targetStyle: { top: '47.5%', left: '57.5%', width: '18.0%', height: '25.0%' },
      points: "92.0,42.8 120.8,42.8 120.8,65.3 92.0,65.3"
    },
    {
      wordKey: "frontDoor",
      korean: "현관문",
      audioUrl: "/audio/house/front_door.mp3",
      videoPath: "/video/house/front_door.mp4",
      sentence: "I open the front door.",
      imageType: "house",
      targetStyle: { top: '49.5%', left: '43.2%', width: '8.3%', height: '22.7%' },
      points: "69.1,44.6 82.4,44.6 82.4,65.0 69.1,65.0"
    },
    {
      wordKey: "doorbell",
      korean: "초인종",
      audioUrl: "/audio/house/doorbell.mp3",
      videoPath: "/video/house/doorbell.mp4",
      sentence: "Ring the doorbell when you arrive.",
      imageType: "house",
      targetStyle: { top: '52.0%', left: '51.8%', width: '2.7%', height: '6.5%' },
      points: "82.9,46.8 87.2,46.8 87.2,52.7 82.9,52.7"
    },
    {
      wordKey: "patioFence",
      korean: "테라스 울타리",
      audioUrl: "/audio/house/patio_fence.mp3",
      videoPath: "/video/house/patio_fence.mp4",
      sentence: "The patio fence surrounds the porch.",
      imageType: "house",
      targetStyle: { top: '52.5%', left: '10.5%', width: '14.0%', height: '20.5%' },
      points: "16.8,47.2 39.2,47.2 39.2,65.7 16.8,65.7"
    },
    {
      wordKey: "deck",
      korean: "야외 데크",
      audioUrl: "/audio/house/deck.mp3",
      videoPath: "/video/house/deck.mp4",
      sentence: "We eat lunch on the outdoor deck.",
      imageType: "house",
      targetStyle: { top: '53.5%', left: '79.5%', width: '19.7%', height: '21.0%' },
      points: "127.2,48.2 158.7,48.2 158.7,67.1 127.2,67.1"
    },
    {
      wordKey: "gate",
      korean: "대문",
      audioUrl: "/audio/house/gate.mp3",
      videoPath: "/video/house/gate.mp4",
      sentence: "Please close the front gate.",
      imageType: "house",
      targetStyle: { top: '54.0%', left: '2.5%', width: '9.5%', height: '21.5%' },
      points: "4.0,48.6 19.2,48.6 19.2,68.0 4.0,68.0"
    },
    {
      wordKey: "doorknob",
      korean: "문고리",
      audioUrl: "/audio/house/doorknob.mp3",
      videoPath: "/video/house/doorknob.mp4",
      sentence: "Turn the doorknob to enter.",
      imageType: "house",
      targetStyle: { top: '58.0%', left: '48.2%', width: '3.0%', height: '7.0%' },
      points: "77.1,52.2 81.9,52.2 81.9,58.5 77.1,58.5"
    },
    {
      wordKey: "mailbox",
      korean: "우편함",
      audioUrl: "/audio/house/mailbox.mp3",
      videoPath: "/video/house/mailbox.mp4",
      sentence: "There is mail inside the mailbox.",
      imageType: "house",
      targetStyle: { top: '68.5%', left: '61.2%', width: '11.3%', height: '21.0%' },
      points: "97.9,61.7 116.0,61.7 116.0,80.6 97.9,80.6"
    },
    {
      wordKey: "drivewayCar",
      korean: "진입로 차",
      audioUrl: "/audio/house/driveway_car.mp3",
      videoPath: "/video/house/driveway_car.mp4",
      sentence: "The car is parked on the driveway.",
      imageType: "house",
      targetStyle: { top: '71.0%', left: '87.5%', width: '11.5%', height: '19.5%' },
      points: "140.0,63.9 158.4,63.9 158.4,81.4 140.0,81.4"
    },
    {
      wordKey: "flowerbed",
      korean: "화단",
      audioUrl: "/audio/house/flowerbed.mp3",
      videoPath: "/video/house/flowerbed.mp4",
      sentence: "Pretty flowers grow in the flowerbed.",
      imageType: "house",
      targetStyle: { top: '72.8%', left: '24.5%', width: '11.3%', height: '12.7%' },
      points: "39.2,65.5 57.3,65.5 57.3,77.0 39.2,77.0"
    },
    {
      wordKey: "lawnRight",
      korean: "우측 잔디밭",
      audioUrl: "/audio/house/lawn_right.mp3",
      videoPath: "/video/house/lawn_right.mp4",
      sentence: "The grass on the right lawn is green.",
      imageType: "house",
      targetStyle: { top: '75.5%', left: '71.5%', width: '6.0%', height: '11.0%' },
      points: "114.4,67.9 124.0,67.9 124.0,77.8 114.4,77.8"
    },
    {
      wordKey: "lawn",
      korean: "잔디밭",
      audioUrl: "/audio/house/lawn.mp3",
      videoPath: "/video/house/lawn.mp4",
      sentence: "I walk on the soft green lawn.",
      imageType: "house",
      targetStyle: { top: '76.8%', left: '34.8%', width: '8.0%', height: '9.4%' },
      points: "55.7,69.1 68.5,69.1 68.5,77.6 55.7,77.6"
    },
    {
      wordKey: "houseNumber",
      korean: "문패(주소 표지판)",
      audioUrl: "/audio/house/house_number.mp3",
      videoPath: "/video/house/house_number.mp4",
      sentence: "The house number is written on the wall.",
      imageType: "house",
      targetStyle: { top: '78.5%', left: '64.8%', width: '4.7%', height: '8.5%' },
      points: "103.7,70.6 111.2,70.6 111.2,78.3 103.7,78.3"
    },
    {
      wordKey: "fence",
      korean: "울타리",
      audioUrl: "/audio/house/fence.mp3",
      videoPath: "/video/house/fence.mp4",
      sentence: "The wooden fence goes around the yard.",
      imageType: "house",
      targetStyle: { top: '81.0%', left: '40.5%', width: '25.0%', height: '15.5%' },
      points: "64.8,72.9 104.8,72.9 104.8,86.8 64.8,86.8"
    },
    {
      wordKey: "fencePost",
      korean: "울타리 기둥",
      audioUrl: "/audio/house/fence_post.mp3",
      videoPath: "/video/house/fence_post.mp4",
      sentence: "The fence post supports the wooden fence.",
      imageType: "house",
      targetStyle: { top: '81.0%', left: '35.5%', width: '3.3%', height: '17.0%' },
      points: "56.8,72.9 62.1,72.9 62.1,88.2 56.8,88.2"
    }
  ]
};