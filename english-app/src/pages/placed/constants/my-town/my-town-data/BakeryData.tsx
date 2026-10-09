import bakery from "@/assets/image/places/my-town/Bakery.png";

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
  imageType?: "apartment" | "house" | "bakery"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

const bakeryImg = bakery;

export const bakeryData: PlaceDataType = {
  placeKey: "bakery",
  placeTitle: "Bakery Word Adventure",
  bgImage: bakeryImg,
  masterRegions: [
    // 1. 천장 랙에 매달린 밀대 (영역 축소)
    {
      wordKey: "rollingPin",
      korean: "밀대",
      audioUrl: "/audio/bakery/rollingpin.mp3",
      videoPath: "/video/bakery/RollingPin.mp4",
      sentence: "The rolling pin is made of wood. I roll the dough.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '33.0%', width: '3.0%', height: '8.0%' },
      points: "52.8,10.8 57.6,10.8 57.6,18.0 52.8,18.0"
    },
    // 2. 천장 랙에 매달린 집게 (영역 축소)
    {
      wordKey: "tongs",
      korean: "집게",
      audioUrl: "/audio/bakery/tongs.mp3",
      videoPath: "/video/bakery/Tongs.mp4",
      sentence: "Use tongs to pick up the hot bread.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '26.0%', width: '3.0%', height: '8.0%' },
      points: "41.6,10.8 46.4,10.8 46.4,18.0 41.6,18.0"
    },
    // 3. 상단 선반의 버터 (다른 물건과 겹치지 않게 축소)
    {
      wordKey: "butter",
      korean: "버터",
      audioUrl: "/audio/bakery/butter.mp3",
      videoPath: "/video/bakery/Butter.mp4",
      sentence: "Butter makes the cake delicious and soft.",
      imageType: "bakery",
      targetStyle: { top: '26.0%', left: '13.0%', width: '5.0%', height: '4.0%' },
      points: "20.8,23.4 28.8,23.4 28.8,27.0 20.8,27.0"
    },
    // 4. 중간 선반의 밀가루 포대
    {
      wordKey: "flour",
      korean: "밀가루",
      audioUrl: "/audio/bakery/flour.mp3",
      videoPath: "/video/bakery/Flour.mp4",
      sentence: "We need flour to bake bread.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '18.0%', width: '4.0%', height: '6.0%' },
      points: "28.8,30.6 35.2,30.6 35.2,36.0 28.8,36.0"
    },
    // 5. 왼쪽 벽의 선반 (버터, 밀가루와 겹치지 않도록 빈 공간으로 분리)
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: "/audio/bakery/shelf.mp3",
      videoPath: "/video/bakery/Shelf.mp4",
      sentence: "The ingredients are on the shelf.",
      imageType: "bakery",
      targetStyle: { top: '25.0%', left: '6.0%', width: '4.0%', height: '4.0%' },
      points: "9.6,22.5 16.0,22.5 16.0,26.1 9.6,26.1"
    },
    // 6. 빵 반죽이 올려진 쟁반 (조리대와 분리)
    {
      wordKey: "tray",
      korean: "쟁반",
      audioUrl: "/audio/bakery/tray.mp3",
      videoPath: "/video/bakery/Tray.mp4",
      sentence: "Put the dough on the tray.",
      imageType: "bakery",
      targetStyle: { top: '54.0%', left: '2.0%', width: '8.0%', height: '4.0%' },
      points: "3.2,48.6 16.0,48.6 16.0,52.2 3.2,52.2"
    },
    // 7. 앞쪽 조리대/카운터 (화면을 덮지 않게 좌측 하단 빈 바닥/카운터 구역으로 축소)
    {
      wordKey: "counter",
      korean: "조리대(카운터)",
      audioUrl: "/audio/bakery/counter.mp3",
      videoPath: "/video/bakery/Counter.mp4",
      sentence: "The baker rolls dough on the counter.",
      imageType: "bakery",
      targetStyle: { top: '85.0%', left: '5.0%', width: '10.0%', height: '5.0%' },
      points: "8.0,76.5 24.0,76.5 24.0,81.0 8.0,81.0"
    },
    // 8. 뒷벽의 오븐 (믹서 등과 분리되게 상단으로 축소)
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: "/audio/bakery/oven.mp3",
      videoPath: "/video/bakery/Oven.mp4",
      sentence: "The oven is very hot. We bake cookies in the oven.",
      imageType: "bakery",
      targetStyle: { top: '24.0%', left: '49.0%', width: '8.0%', height: '10.0%' },
      points: "78.4,21.6 91.2,21.6 91.2,30.6 78.4,30.6"
    },
    // 9. 오븐 앞의 스탠드 믹서
    {
      wordKey: "mixer",
      korean: "반죽기(믹서)",
      audioUrl: "/audio/bakery/mixer.mp3",
      videoPath: "/video/bakery/Mixer.mp4",
      sentence: "The mixer mixes the dough quickly.",
      imageType: "bakery",
      targetStyle: { top: '38.0%', left: '34.0%', width: '5.0%', height: '10.0%' },
      points: "54.4,34.2 62.4,34.2 62.4,43.2 54.4,43.2"
    },
    // 10. 믹서를 사용 중인 제빵사 (모자/얼굴 중심으로 축소)
    {
      wordKey: "baker",
      korean: "제빵사",
      audioUrl: "/audio/bakery/baker.mp3",
      videoPath: "/video/bakery/Baker.mp4",
      sentence: "The baker is making bread. He wears a white hat.",
      imageType: "bakery",
      targetStyle: { top: '29.0%', left: '42.0%', width: '4.0%', height: '6.0%' },
      points: "67.2,26.1 73.6,26.1 73.6,31.5 67.2,31.5"
    },
    // 11. 스탠드 위의 레시피 책
    {
      wordKey: "recipe",
      korean: "레시피(요리법)",
      audioUrl: "/audio/bakery/recipe.mp3",
      videoPath: "/video/bakery/Recipe.mp4",
      sentence: "The recipe book is open. I read the recipe.",
      imageType: "bakery",
      targetStyle: { top: '46.0%', left: '48.0%', width: '6.0%', height: '6.0%' },
      points: "76.8,41.4 86.4,41.4 86.4,46.8 76.8,46.8"
    },
    // 12. 잼 병들
    {
      wordKey: "jam",
      korean: "잼",
      audioUrl: "/audio/bakery/jam.mp3",
      videoPath: "/video/bakery/Jam.mp4",
      sentence: "The jam is sweet. I like strawberry jam.",
      imageType: "bakery",
      targetStyle: { top: '58.0%', left: '40.0%', width: '4.0%', height: '6.0%' },
      points: "64.0,52.2 70.4,52.2 70.4,57.6 64.0,57.6"
    },
    // 13. 크림 보울
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: "/audio/bakery/cream.mp3",
      videoPath: "/video/bakery/Cream.mp4",
      sentence: "The cream is soft and sweet.",
      imageType: "bakery",
      targetStyle: { top: '58.0%', left: '60.0%', width: '5.0%', height: '6.0%' },
      points: "96.0,52.2 104.0,52.2 104.0,57.6 96.0,57.6"
    },
    // 14. 샌드위치
    {
      wordKey: "sandwich",
      korean: "샌드위치",
      audioUrl: "/audio/bakery/sandwich.mp3",
      videoPath: "/video/bakery/Sandwich.mp4",
      sentence: "The sandwich has cheese and ham.",
      imageType: "bakery",
      targetStyle: { top: '60.0%', left: '72.0%', width: '5.0%', height: '6.0%' },
      points: "115.2,54.0 123.2,54.0 123.2,59.4 115.2,59.4"
    },
    // 15. 조각 케이크
    {
      wordKey: "cake",
      korean: "케이크",
      audioUrl: "/audio/bakery/cake.mp3",
      videoPath: "/video/bakery/Cake.mp4",
      sentence: "The cake looks yummy. It is a strawberry cake.",
      imageType: "bakery",
      targetStyle: { top: '68.0%', left: '50.0%', width: '6.0%', height: '6.0%' },
      points: "80.0,61.2 89.6,61.2 89.6,66.6 80.0,66.6"
    },
    // 16. 쿠키
    {
      wordKey: "cookie",
      korean: "쿠키",
      audioUrl: "/audio/bakery/cookie.mp3",
      videoPath: "/video/bakery/Cookie.mp4",
      sentence: "These are delicious chocolate chip cookies.",
      imageType: "bakery",
      targetStyle: { top: '74.0%', left: '62.0%', width: '4.0%', height: '4.0%' },
      points: "99.2,66.6 105.6,66.6 105.6,70.2 99.2,70.2"
    },
    // 17. 파이
    {
      wordKey: "pie",
      korean: "파이",
      audioUrl: "/audio/bakery/pie.mp3",
      videoPath: "/video/bakery/Pie.mp4",
      sentence: "I baked an apple pie. The pie is hot.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '58.0%', width: '6.0%', height: '6.0%' },
      points: "92.8,72.0 102.4,72.0 102.4,77.4 92.8,77.4"
    },
    // 18. 도넛
    {
      wordKey: "doughnut",
      korean: "도넛",
      audioUrl: "/audio/bakery/doughnut.mp3",
      videoPath: "/video/bakery/Doughnut.mp4",
      sentence: "The doughnut has pink icing.",
      imageType: "bakery",
      targetStyle: { top: '86.0%', left: '70.0%', width: '6.0%', height: '6.0%' },
      points: "112.0,77.4 121.6,77.4 121.6,82.8 112.0,82.8"
    },
    // 19. 머핀
    {
      wordKey: "muffin",
      korean: "머핀",
      audioUrl: "/audio/bakery/muffin.mp3",
      videoPath: "/video/bakery/Muffin.mp4",
      sentence: "I eat a chocolate muffin for dessert.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '84.0%', width: '6.0%', height: '6.0%' },
      points: "134.4,72.0 144.0,72.0 144.0,77.4 134.4,77.4"
    },
    // 20. 빵
    {
      wordKey: "bread",
      korean: "빵",
      audioUrl: "/audio/bakery/bread.mp3",
      videoPath: "/video/bakery/Bread.mp4",
      sentence: "The bakery smells like fresh bread.",
      imageType: "bakery",
      targetStyle: { top: '48.0%', left: '60.0%', width: '6.0%', height: '4.0%' },
      points: "96.0,43.2 105.6,43.2 105.6,46.8 96.0,46.8"
    }
  ]
};