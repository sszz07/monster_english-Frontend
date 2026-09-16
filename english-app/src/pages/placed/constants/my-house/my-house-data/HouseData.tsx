
import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const houseImg = ThemeImage.house;
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
  points: string; // SVG 폴리곤 렌더링용 포인트 데이터 (160x90 기준)
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
    // 1. 굴뚝
    {
      wordKey: "chimney",
      korean: "굴뚝",
      audioUrl: "/audio/house/chimney.mp3",
      videoPath: "/video/house/Chimney.mp4",
      sentence: "Smoke comes froms chimney. The chimney is tall.",
      imageType: "house",
      targetStyle: { top: '10.0%', left: '19.0%', width: '8.0%', height: '22.0%' },
      points: "30.4,9.0 43.2,9.0 43.2,28.8 30.4,28.8"
    },
    // 2. 사다리 (지붕 위)
    {
      wordKey: "ladder",
      korean: "사다리",
      audioUrl: "/audio/house/ladder.mp3",
      videoPath: "/video/house/Ladder.mp4",
      sentence: "The ladder is on the roof. Dad uses the ladder often.",
      imageType: "house",
      targetStyle: { top: '8.0%', left: '30.0%', width: '9.0%', height: '19.0%' },
      points: "48.0,7.2 62.4,7.2 62.4,24.3 48.0,24.3"
    },
    // 3. 천창 (지붕 중앙 창문)
    {
      wordKey: "skylight",
      korean: "천창(지붕 창문)",
      audioUrl: "/audio/house/skylight.mp3",
      videoPath: "/video/house/Skylight.mp4",
      sentence: "The skylight is bright. I see the skylight.",
      imageType: "house",
      targetStyle: { top: '12.0%', left: '42.5%', width: '8.5%', height: '10.5%' },
      points: "68.0,10.8 81.6,10.8 81.6,20.2 68.0,20.2"
    },
    // 4. 다락방 창문 (지붕 박공 작은 창)
    {
      wordKey: "attic",
      korean: "다락방 창문",
      audioUrl: "/audio/house/attic.mp3",
      videoPath: "/video/house/Attic.mp4",
      sentence: "The attic is dark. we play at the attic.",
      imageType: "house",
      targetStyle: { top: '14.0%', left: '63.5%', width: '6.0%', height: '8.5%' },
      points: "101.6,12.6 111.2,12.6 111.2,20.2 101.6,20.2"
    },
    // 5. 2층 주방
    {
      wordKey: "kitchen",
      korean: "주방",
      audioUrl: "/audio/house/kitchen.mp3",
      videoPath: "/video/house/Kitchen.mp4",
      sentence: "Mom cooks in the kitchen. The kitchen is busy.",
      imageType: "house",
      targetStyle: { top: '27.0%', left: '60.0%', width: '10.5%', height: '19.0%' },
      points: "96.0,24.3 112.8,24.3 112.8,41.4 96.0,41.4"
    },
    // 6. 식료품 저장실 (주방 수납장)
    {
      wordKey: "pantry",
      korean: "식료품 저장실",
      audioUrl: "/audio/house/pantry.mp3",
      videoPath: "/video/house/Pantry.mp4",
      sentence: "Mom open the pantry. The pantry is full.",
      imageType: "house",
      targetStyle: { top: '28.0%', left: '62.0%', width: '5.0%', height: '8.0%' },
      points: "99.2,25.2 107.2,25.2 107.2,32.4 99.2,32.4"
    },
    // 7. 욕실 (2층 주방 우측 욕실 공간)
    {
      wordKey: "bathroom",
      korean: "욕실",
      audioUrl: "/audio/house/bathroom.mp3",
      videoPath: "/video/house/Bathroom.mp4",
      sentence: "The bathroom is clean. I wash my hands in the bathroom.",
      imageType: "house",
      targetStyle: { top: '27.0%', left: '70.5%', width: '4.5%', height: '19.0%' },
      points: "112.8,24.3 120.0,24.3 120.0,41.4 112.8,41.4"
    },
    // 8. 세탁실 (욕실/세면대 세탁 공간)
    {
      wordKey: "laundryRoom",
      korean: "세탁실",
      audioUrl: "/audio/house/laundryroom.mp3", // 👈 laundryroom.mp3 일치
      videoPath: "/video/house/LaundryRoom.mp4",
      sentence: "The laundry room is small. I do laundry in the laundry room.",
      imageType: "house",
      targetStyle: { top: '44.0%', left: '79.0%', width: '5.0%', height: '18.0%' },
      points: "126.4,39.6 134.4,39.6 134.4,55.8 126.4,55.8"
    },
    // 9. 1층 거실
    {
      wordKey: "livingRoom",
      korean: "거실",
      audioUrl: "/audio/house/livingroom.mp3", // 👈 livingroom.mp3 일치
      videoPath: "/video/house/LivingRoom.mp4",
      sentence: "The living room is warm. we watch TV in the living room.",
      imageType: "house",
      targetStyle: { top: '48.0%', left: '25.0%', width: '15.0%', height: '20.0%' },
      points: "40.0,43.2 64.0,43.2 64.0,61.2 40.0,61.2"
    },
    // 10. 1층 침실
    {
      wordKey: "bedroom",
      korean: "침실",
      audioUrl: "/audio/house/bedroom.mp3",
      videoPath: "/video/house/Bedroom.mp4",
      sentence: "The bedroom is cozy. I sleep in my cozy bedroom.",
      imageType: "house",
      targetStyle: { top: '48.0%', left: '60.0%', width: '15.0%', height: '20.0%' },
      points: "96.0,43.2 120.0,43.2 120.0,61.2 96.0,61.2"
    },
    // 11. 현관 차양
    {
      wordKey: "awning",
      korean: "차양(차양막)",
      audioUrl: "/audio/house/awning.mp3",
      videoPath: "/video/house/Awning.mp4",
      sentence: "The awning is over the door. The awning is striped.",
      imageType: "house",
      targetStyle: { top: '39.0%', left: '42.0%', width: '12.0%', height: '13.0%' },
      points: "67.2,35.1 86.4,35.1 86.4,46.8 67.2,46.8"
    },
    // 12. 현관문
    {
      wordKey: "door",
      korean: "현관문",
      audioUrl: "/audio/house/door.mp3", // 👈 door.mp3 일치
      videoPath: "/video/house/Door.mp4",
      sentence: "The door is brown. I open the door with my brother.",
      imageType: "house",
      targetStyle: { top: '50.0%', left: '44.0%', width: '8.0%', height: '20.0%' },
      points: "70.4,45.0 83.2,45.0 83.2,63.0 70.4,63.0"
    },
    // 13. 문고리
    {
      wordKey: "doorknob",
      korean: "문고리",
      audioUrl: "/audio/house/doorknob.mp3",
      videoPath: "/video/house/Doorknob.mp4",
      sentence: "The doorknob is round. I turn the doorknob.",
      imageType: "house",
      targetStyle: { top: '58.0%', left: '49.5%', width: '2.5%', height: '5.5%' },
      points: "79.2,52.2 83.2,52.2 83.2,57.1 79.2,57.1"
    },
    // 14. 초인종
    {
      wordKey: "doorbell",
      korean: "초인종",
      audioUrl: "/audio/house/doorbell.mp3",
      videoPath: "/video/house/Doorbell.mp4",
      sentence: "I press the doorbell. The doorbell is loud.",
      imageType: "house",
      targetStyle: { top: '53.0%', left: '52.5%', width: '2.0%', height: '4.5%' },
      points: "84.0,47.7 87.2,47.7 87.2,51.8 84.0,51.8"
    },
    // 15. 우측 테라스/발코니
    {
      wordKey: "patio",
      korean: "베란다(테라스)",
      audioUrl: "/audio/house/patio.mp3",
      videoPath: "/video/house/Patio.mp4",
      sentence: "The patio is nice. I like the patio.",
      imageType: "house",
      targetStyle: { top: '44.0%', left: '84.0%', width: '8.0%', height: '19.0%' },
      points: "134.4,39.6 147.2,39.6 147.2,56.7 134.4,56.7"
    },
    // 16. 우측 야외 데크 (테이블과 의자)
    {
      wordKey: "deck",
      korean: "야외 데크",
      audioUrl: "/audio/house/deck.mp3",
      videoPath: "/video/house/Deck.mp4",
      sentence: "The deck is big. we sit on the deck.",
      imageType: "house",
      targetStyle: { top: '53.0%', left: '81.0%', width: '17.0%', height: '20.0%' },
      points: "129.6,47.7 156.8,47.7 156.8,65.7 129.6,65.7"
    },
    // 17. 좌측 아치 대문
    {
      wordKey: "gate",
      korean: "대문",
      audioUrl: "/audio/house/gate.mp3",
      videoPath: "/video/house/Gate.mp4",
      sentence: "The gate is open. I close the gate.",
      imageType: "house",
      targetStyle: { top: '42.0%', left: '3.0%', width: '11.0%', height: '28.0%' },
      points: "4.8,37.8 22.4,37.8 22.4,63.0 4.8,63.0"
    },
    // 18. 우편함
    {
      wordKey: "mailbox",
      korean: "우편함",
      audioUrl: "/audio/house/mailbox.mp3",
      videoPath: "/video/house/Mailbox.mp4",
      sentence: "The mailbox is red. There is a mail in the mailbox.",
      imageType: "house",
      targetStyle: { top: '68.0%', left: '62.5%', width: '8.0%', height: '17.0%' },
      points: "100.0,61.2 112.8,61.2 112.8,76.5 100.0,76.5"
    },
    // 19. 문패 번호 (우편함 3번)
    {
      wordKey: "Address",
      korean: "문패(주소 표지판)",
      audioUrl: "/audio/house/address.mp3", // 👈 address.mp3 일치
      videoPath: "/video/house/Address.mp4",
      sentence: "The address is 3. Three is my favorite number.",
      imageType: "house",
      targetStyle: { top: '75.0%', left: '65.0%', width: '4.0%', height: '6.0%' },
      points: "104.0,67.5 110.4,67.5 110.4,72.9 104.0,72.9"
    },
   // 20. 잔디밭 화단 (좌측 잔디밭 경계 꽃)
    {
      wordKey: "flowerbed",
      korean: "화단",
      audioUrl: "/audio/house/flowerbed.mp3",
      videoPath: "/video/house/Flowerbed.mp4",
      sentence: "The flowerbed is pretty. I water the flowerbed.",
      imageType: "house",
      targetStyle: { top: '72.0%', left: '26.0%', width: '8.5%', height: '11.0%' },
      points: "41.6,64.8 55.2,64.8 55.2,74.7 41.6,74.7"
    },
    // 21. 잔디밭
    {
      wordKey: "lawn",
      korean: "잔디밭",
      audioUrl: "/audio/house/lawn.mp3",
      videoPath: "/video/house/Lawn.mp4",
      sentence: "The lawn is green. I play in the lawn with my friends.",
      imageType: "house",
      targetStyle: { top: '77.0%', left: '33.0%', width: '9.0%', height: '8.5%' },
      points: "52.8,69.3 67.2,69.3 67.2,77.0 52.8,77.0"
    },
    // 22. 앞마당 목재 울타리
    {
      wordKey: "fence",
      korean: "울타리",
      audioUrl: "/audio/house/fence.mp3",
      videoPath: "/video/house/Fence.mp4",
      sentence: "we have a fence. The fence is white.",
      imageType: "house",
      targetStyle: { top: '80.0%', left: '51.5%', width: '46.0%', height: '18.0%' },
      points: "82.4,72.0 156.0,72.0 156.0,88.2 82.4,88.2"
    },

    // 23. 진입로 (우측 자동차 위치)
    {
      wordKey: "driveway",
      korean: "진입로(자동차)",
      audioUrl: "/audio/house/driveway.mp3",
      videoPath: "/video/house/Driveway.mp4",
      sentence: "Dad parks on the driveway. The driveway is long.",
      imageType: "house",
      targetStyle: { top: '71.0%', left: '88.0%', width: '10.5%', height: '17.5%' },
      points: "140.8,63.9 157.6,63.9 157.6,79.6 140.8,79.6"
    },
    // 24. 스프링클러
    {
      wordKey: "sprinkler",
      korean: "스프링클러",
      audioUrl: "/audio/house/sprinkler.mp3",
      videoPath: "/video/house/Sprinkler.mp4",
      sentence: "The sprinkler is on the grass.The springkler waters the lawn.",
      imageType: "house",
      targetStyle: { top: '68.0%', left: '38.5%', width: '5.0%', height: '7.0%' },
      points: "61.6,61.2 69.6,61.2 69.6,67.5 61.6,67.5"
    },
    // 25. 지하실 (하단 석조 기초벽)
    {
      wordKey: "cellar",
      korean: "지하실",
      audioUrl: "/audio/house/cellar.mp3",
      videoPath: "/video/house/Cellar.mp4",
      sentence: "we have a cellar.The cellar is cold.",
      imageType: "house",
      targetStyle: { top: '68.0%', left: '24.0%', width: '18.0%', height: '6.5%' },
      points: "38.4,61.2 67.2,61.2 67.2,67.1 38.4,67.1"
    }
  ]
};