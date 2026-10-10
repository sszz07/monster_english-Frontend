import parkImg from "@/assets/image/places/fantasy-nature/Park.jpg";

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

export const parkData: PlaceDataType = {
  placeKey: "park",
  placeTitle: "Park Word Adventure",
  bgImage: parkImg,
  masterRegions: [
    // 1. 벤치 (우측 하단 앞쪽 벤치의 앉는 부분으로 타이트하게 축소)
    {
      wordKey: "bench",
      korean: "벤치",
      audioUrl: "/audio/park/bench.mp3",
      videoPath: "/video/park/bench.mp4",
      sentence: "The bench is old and wooden. She enjoys sitting on the bench.",
      targetStyle: { top: '80.0%', left: '68.0%', width: '10.0%', height: '10.0%' },
      points: "108.8,72.0 124.8,72.0 124.8,81.0 108.8,81.0"
    },
    // 2. 그네 (중앙 나무 그네의 줄과 의자 부분)
    {
      wordKey: "swing",
      korean: "그네",
      audioUrl: "/audio/park/swing.mp3",
      videoPath: "/video/park/swing.mp4",
      sentence: "The swing is fun and fast. Playing on the swing makes her happy.",
      targetStyle: { top: '45.0%', left: '42.0%', width: '5.0%', height: '10.0%' },
      points: "67.2,40.5 75.2,40.5 75.2,49.5 67.2,49.5"
    },
    // 3. 미끄럼틀 (그네 옆 미끄럼틀의 굽어진 통 부분)
    {
      wordKey: "slide",
      korean: "미끄럼틀",
      audioUrl: "/audio/park/slide.mp3",
      videoPath: "/video/park/slide.mp4",
      sentence: "The slide is long and shiny. He loves sliding down the slide.",
      targetStyle: { top: '45.0%', left: '54.0%', width: '3.0%', height: '10.0%' },
      points: "86.4,40.5 91.2,40.5 91.2,49.5 86.4,49.5"
    },
    // 4. 모래놀이터 (미끄럼틀 앞쪽 모래가 담긴 네모난 상자)
    {
      wordKey: "sandbox",
      korean: "모래놀이터",
      audioUrl: "/audio/park/sandbox.mp3",
      videoPath: "/video/park/sandbox.mp4",
      sentence: "The sandbox is wide and sandy. Playing in the sandbox is so much fun.",
      targetStyle: { top: '62.0%', left: '46.0%', width: '6.0%', height: '5.0%' },
      points: "73.6,55.8 83.2,55.8 83.2,60.3 73.6,60.3"
    },
    // 5. 잔디 (화면 중앙 하단 가장자리 빈 잔디밭)
    {
      wordKey: "grass",
      korean: "잔디",
      audioUrl: "/audio/park/grass.mp3",
      videoPath: "/video/park/grass.mp4",
      sentence: "The grass is soft and green. She likes running on the grass.",
      targetStyle: { top: '88.0%', left: '40.0%', width: '8.0%', height: '5.0%' },
      points: "64.0,79.2 76.8,79.2 76.8,83.7 64.0,83.7"
    },
    // 6. 나무 (몬스터 위쪽 가장 크고 굵은 나무 기둥 중간)
    {
      wordKey: "tree",
      korean: "나무",
      audioUrl: "/audio/park/tree.mp3",
      videoPath: "/video/park/tree.mp4",
      sentence: "The tree is tall and leafy. Climbing the tree is exciting for him.",
      targetStyle: { top: '30.0%', left: '65.0%', width: '5.0%', height: '15.0%' },
      points: "104.0,27.0 112.0,27.0 112.0,40.5 104.0,40.5"
    },
    // 7. 꽃 (우측 하단 모서리의 분홍색 꽃송이)
    {
      wordKey: "flower",
      korean: "꽃",
      audioUrl: "/audio/park/flower.mp3",
      videoPath: "/video/park/flower.mp4",
      sentence: "The flowers are pretty and colorful. She enjoys picking flowers in the park.",
      targetStyle: { top: '85.0%', left: '90.0%', width: '5.0%', height: '5.0%' },
      points: "144.0,76.5 152.0,76.5 152.0,81.0 144.0,81.0"
    },
    // 8. 나뭇잎 (나무에서 떨어지는 초록색 잎사귀 하나)
    {
      wordKey: "leaf",
      korean: "나뭇잎",
      audioUrl: "/audio/park/leaf.mp3",
      videoPath: "/video/park/leaf.mp4",
      sentence: "The leaf is dry and brown. He likes collecting leaves in the fall.",
      targetStyle: { top: '25.0%', left: '50.0%', width: '2.0%', height: '3.0%' },
      points: "80.0,22.5 83.2,22.5 83.2,25.2 80.0,25.2"
    },
    // 9. 새 (큰 나무 가지 위에 앉아 있는 파란 새)
    {
      wordKey: "bird",
      korean: "새",
      audioUrl: "/audio/park/bird.mp3",
      videoPath: "/video/park/bird.mp4",
      sentence: "The bird is small and yellow. Watching birds fly is fun for her.",
      targetStyle: { top: '20.0%', left: '58.0%', width: '2.0%', height: '3.0%' },
      points: "92.8,18.0 96.0,18.0 96.0,20.7 92.8,20.7"
    },
    // 10. 다람쥐 (좌측 연못가 울타리 위에 앉아 있는 다람쥐)
    {
      wordKey: "squirrel",
      korean: "다람쥐",
      audioUrl: "/audio/park/squirrel.mp3",
      videoPath: "/video/park/squirrel.mp4",
      sentence: "The squirrel is quick and fluffy. She loves watching squirrels in the tree.",
      targetStyle: { top: '55.0%', left: '2.0%', width: '4.0%', height: '8.0%' },
      points: "3.2,49.5 9.6,49.5 9.6,56.7 3.2,56.7"
    },
    // 11. 연못 (오리가 없는 좌측 물 표면 빈 공간)
    {
      wordKey: "pond",
      korean: "연못",
      audioUrl: "/audio/park/pond.mp3",
      videoPath: "/video/park/pond.mp4",
      sentence: "The pond is calm and clear. He enjoys sitting near the pond.",
      targetStyle: { top: '70.0%', left: '10.0%', width: '8.0%', height: '5.0%' },
      points: "16.0,63.0 28.8,63.0 28.8,67.5 16.0,67.5"
    },
    // 12. 오리 (연못 좌측에 떠 있는 노란 오리 장난감)
    {
      wordKey: "duck",
      korean: "오리",
      audioUrl: "/audio/park/duck.mp3",
      videoPath: "/video/park/duck.mp4",
      sentence: "The duck is white and round. Feeding ducks is her favorite activity.",
      targetStyle: { top: '68.0%', left: '19.0%', width: '3.0%', height: '4.0%' },
      points: "30.4,61.2 35.2,61.2 35.2,64.8 30.4,64.8"
    },
    // 13. 길/산책로 (연못 우측을 가로지르는 돌길 바닥)
    {
      wordKey: "path",
      korean: "길/산책로",
      audioUrl: "/audio/park/path.mp3",
      videoPath: "/video/park/path.mp4",
      sentence: "The path is long and straight. She likes walking along the path.",
      targetStyle: { top: '65.0%', left: '31.0%', width: '5.0%', height: '5.0%' },
      points: "49.6,58.5 57.6,58.5 57.6,63.0 49.6,63.0"
    },
    // 14. 분수 (좌측 배경의 하얀 분수대 기둥 부분)
    {
      wordKey: "fountain",
      korean: "분수",
      audioUrl: "/audio/park/fountain.mp3",
      videoPath: "/video/park/fountain.mp4",
      sentence: "The fountain is big and beautiful. He stops to look at the fountain.",
      targetStyle: { top: '42.0%', left: '26.0%', width: '4.0%', height: '10.0%' },
      points: "41.6,37.8 48.0,37.8 48.0,46.8 41.6,46.8"
    },
    // 15. 자전거 (좌측 배경 잔디밭에 세워진 파란 자전거)
    {
      wordKey: "bicycle",
      korean: "자전거",
      audioUrl: "/audio/park/bicycle.mp3",
      videoPath: "/video/park/bicycle.mp4",
      sentence: "The bicycle is fast and shiny. Riding a bicycle in the park is great.",
      targetStyle: { top: '50.0%', left: '8.0%', width: '5.0%', height: '5.0%' },
      points: "12.8,45.0 20.8,45.0 20.8,49.5 12.8,49.5"
    },
    // 16. 스쿠터/킥보드 (길 중앙에 있는 파란색 스쿠터)
    {
      wordKey: "scooter",
      korean: "스쿠터/킥보드",
      audioUrl: "/audio/park/scooter.mp3",
      videoPath: "/video/park/scooter.mp4",
      sentence: "The scooter is small and light. He enjoys riding his scooter on the path.",
      targetStyle: { top: '72.0%', left: '45.0%', width: '5.0%', height: '8.0%' },
      points: "72.0,64.8 80.0,64.8 80.0,72.0 72.0,72.0"
    },
    // 17. 조깅하는 사람 (좌측 배경 분수 근처를 뛰는 사람)
    {
      wordKey: "jogger",
      korean: "조깅하는 사람",
      audioUrl: "/audio/park/jogger.mp3",
      videoPath: "/video/park/jogger.mp4",
      sentence: "The jogger is fast and strong. The jogger practices running every morning.",
      targetStyle: { top: '48.0%', left: '17.0%', width: '2.0%', height: '5.0%' },
      points: "27.2,43.2 30.4,43.2 30.4,47.7 27.2,47.7"
    },
    // 18. 유모차 (길 위에 세워진 분홍색 유모차)
    {
      wordKey: "stroller",
      korean: "유모차",
      audioUrl: "/audio/park/stroller.mp3",
      videoPath: "/video/park/stroller.mp4",
      sentence: "The stroller is white and wide. The mom pushes the stroller along the path.",
      targetStyle: { top: '55.0%', left: '34.0%', width: '4.0%', height: '6.0%' },
      points: "54.4,49.5 60.8,49.5 60.8,54.9 54.4,54.9"
    },
    // 19. 피크닉/소풍 (연못 뒤 잔디밭에 깔린 돗자리와 바구니)
    {
      wordKey: "picnic",
      korean: "피크닉/소풍",
      audioUrl: "/audio/park/picnic.mp3",
      videoPath: "/video/park/picnic.mp4",
      sentence: "The picnic is fun and delicious. Having a picnic under the tree is wonderful.",
      targetStyle: { top: '58.0%', left: '12.0%', width: '6.0%', height: '5.0%' },
      points: "19.2,52.2 28.8,52.2 28.8,56.7 19.2,56.7"
    },
    // 20. 쓰레기통 (길 우측 가장자리에 있는 회색 쓰레기통)
    {
      wordKey: "trash_can",
      korean: "쓰레기통",
      audioUrl: "/audio/park/trash_can.mp3",
      videoPath: "/video/park/trash_can.mp4",
      sentence: "The trash can is big and black. He puts his trash in the trash can.",
      targetStyle: { top: '70.0%', left: '33.0%', width: '3.0%', height: '8.0%' },
      points: "52.8,63.0 57.6,63.0 57.6,70.2 52.8,70.2"
    },
    // 21. 그늘 (큰 나무 우측 아래에 짙게 깔린 그림자 영역)
    {
      wordKey: "shade",
      korean: "그늘",
      audioUrl: "/audio/park/shade.mp3",
      videoPath: "/video/park/shade.mp4",
      sentence: "The shade is cool and comfortable. Resting in the shade feels really good.",
      targetStyle: { top: '55.0%', left: '60.0%', width: '5.0%', height: '4.0%' },
      points: "96.0,49.5 104.0,49.5 104.0,53.1 96.0,53.1"
    },
    // 22. 구름 (좌측 상단 하늘에 떠 있는 둥근 흰 구름)
    {
      wordKey: "cloud",
      korean: "구름",
      audioUrl: "/audio/park/cloud.mp3",
      videoPath: "/video/park/cloud.mp4",
      sentence: "The clouds are white and fluffy. She enjoys watching clouds in the sky.",
      targetStyle: { top: '10.0%', left: '10.0%', width: '8.0%', height: '5.0%' },
      points: "16.0,9.0 28.8,9.0 28.8,13.5 16.0,13.5"
    },
    // 23. 바람 (연 위에 흩날리는 나뭇잎/바람결 구역)
    {
      wordKey: "wind",
      korean: "바람",
      audioUrl: "/audio/park/wind.mp3",
      videoPath: "/video/park/wind.mp4",
      sentence: "The wind is cool and strong. Feeling the wind on her face is refreshing.",
      targetStyle: { top: '15.0%', left: '40.0%', width: '3.0%', height: '3.0%' },
      points: "64.0,13.5 68.8,13.5 68.8,16.2 64.0,16.2"
    },
    // 24. 연 (하늘 중앙에 떠 있는 알록달록한 연)
    {
      wordKey: "kite",
      korean: "연",
      audioUrl: "/audio/park/kite.mp3",
      videoPath: "/video/park/kite.mp4",
      sentence: "The kite is bright and colorful. Flying a kite in the park is exciting.",
      targetStyle: { top: '20.0%', left: '28.0%', width: '6.0%', height: '10.0%' },
      points: "44.8,18.0 54.4,18.0 54.4,27.0 44.8,27.0"
    },
    // 25. 놀이터 (미끄럼틀/그네 구조물 상단의 나무 지붕 구역으로 축소)
    {
      wordKey: "playground",
      korean: "놀이터",
      audioUrl: "/audio/park/playground.mp3",
      videoPath: "/video/park/playground.mp4",
      sentence: "The playground is busy and loud. Playing at the playground makes children happy.",
      targetStyle: { top: '36.0%', left: '57.0%', width: '4.0%', height: '5.0%' },
      points: "91.2,32.4 97.6,32.4 97.6,36.9 91.2,36.9"
    }
  ]
};