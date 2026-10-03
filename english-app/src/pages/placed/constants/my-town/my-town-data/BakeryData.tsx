import bakery from "@/assets/image/places/my-town/Bakery.png";

// (기존 RegionData, PlaceDataType 인터페이스는 동일하게 유지합니다)
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
    // 1. 천장 랙에 매달린 밀대
    {
      wordKey: "rollingPin",
      korean: "밀대",
      audioUrl: "/audio/bakery/rollingpin.mp3",
      videoPath: "/video/bakery/RollingPin.mp4",
      sentence: "The rolling pin is made of wood. I roll the dough.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '33.0%', width: '4.0%', height: '14.0%' },
      points: "52.8,10.8 59.2,10.8 59.2,23.4 52.8,23.4"
    },
    // 2. 천장 랙에 매달린 집게
    {
      wordKey: "tongs",
      korean: "집게",
      audioUrl: "/audio/bakery/tongs.mp3",
      videoPath: "/video/bakery/Tongs.mp4",
      sentence: "Use tongs to pick up the hot bread.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '26.0%', width: '4.0%', height: '12.0%' },
      points: "41.6,10.8 48.0,10.8 48.0,21.6 41.6,21.6"
    },
    // 3. 상단 선반의 버터
    {
      wordKey: "butter",
      korean: "버터",
      audioUrl: "/audio/bakery/butter.mp3",
      videoPath: "/video/bakery/Butter.mp4",
      sentence: "Butter makes the cake delicious and soft.",
      imageType: "bakery",
      targetStyle: { top: '26.0%', left: '13.0%', width: '7.0%', height: '5.0%' },
      points: "20.8,23.4 32.0,23.4 32.0,27.9 20.8,27.9"
    },
    // 4. 중간 선반의 밀가루 포대
    {
      wordKey: "flour",
      korean: "밀가루",
      audioUrl: "/audio/bakery/flour.mp3",
      videoPath: "/video/bakery/Flour.mp4",
      sentence: "We need flour to bake bread.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '17.0%', width: '5.0%', height: '8.0%' },
      points: "27.2,30.6 35.2,30.6 35.2,37.8 27.2,37.8"
    },
    // 5. 왼쪽 벽의 선반
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: "/audio/bakery/shelf.mp3",
      videoPath: "/video/bakery/Shelf.mp4",
      sentence: "The ingredients are on the shelf.",
      imageType: "bakery",
      targetStyle: { top: '25.0%', left: '12.0%', width: '12.0%', height: '22.0%' },
      points: "19.2,22.5 38.4,22.5 38.4,42.3 19.2,42.3"
    },
    // 6. 빵 반죽이 올려진 쟁반
    {
      wordKey: "tray",
      korean: "쟁반",
      audioUrl: "/audio/bakery/tray.mp3",
      videoPath: "/video/bakery/Tray.mp4",
      sentence: "Put the dough on the tray.",
      imageType: "bakery",
      targetStyle: { top: '53.0%', left: '1.0%', width: '16.0%', height: '8.0%' },
      points: "1.6,47.7 27.2,47.7 27.2,54.9 1.6,54.9"
    },
    // 7. 앞쪽 조리대/카운터
    {
      wordKey: "counter",
      korean: "조리대(카운터)",
      audioUrl: "/audio/bakery/counter.mp3",
      videoPath: "/video/bakery/Counter.mp4",
      sentence: "The baker rolls dough on the counter.",
      imageType: "bakery",
      targetStyle: { top: '65.0%', left: '5.0%', width: '38.0%', height: '35.0%' },
      points: "8.0,58.5 68.8,58.5 68.8,90.0 8.0,90.0"
    },
    // 8. 뒷벽의 오븐
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: "/audio/bakery/oven.mp3",
      videoPath: "/video/bakery/Oven.mp4",
      sentence: "The oven is very hot. We bake cookies in the oven.",
      imageType: "bakery",
      targetStyle: { top: '24.0%', left: '49.0%', width: '13.0%', height: '23.0%' },
      points: "78.4,21.6 99.2,21.6 99.2,42.3 78.4,42.3"
    },
    // 9. 오븐 앞의 스탠드 믹서
    {
      wordKey: "mixer",
      korean: "반죽기(믹서)",
      audioUrl: "/audio/bakery/mixer.mp3",
      videoPath: "/video/bakery/Mixer.mp4",
      sentence: "The mixer mixes the dough quickly.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '34.0%', width: '9.0%', height: '24.0%' },
      points: "54.4,30.6 68.8,30.6 68.8,52.2 54.4,52.2"
    },
    // 10. 믹서를 사용 중인 제빵사
    {
      wordKey: "baker",
      korean: "제빵사",
      audioUrl: "/audio/bakery/baker.mp3",
      videoPath: "/video/bakery/Baker.mp4",
      sentence: "The baker is making bread. He wears a white hat.",
      imageType: "bakery",
      targetStyle: { top: '29.0%', left: '42.0%', width: '6.0%', height: '27.0%' },
      points: "67.2,26.1 76.8,26.1 76.8,50.4 67.2,50.4"
    },
    // 11. 스탠드 위의 레시피 책
    {
      wordKey: "recipe",
      korean: "레시피(요리법)",
      audioUrl: "/audio/bakery/recipe.mp3",
      videoPath: "/video/bakery/Recipe.mp4",
      sentence: "The recipe book is open. I read the recipe.",
      imageType: "bakery",
      targetStyle: { top: '44.0%', left: '48.0%', width: '12.0%', height: '14.0%' },
      points: "76.8,39.6 96.0,39.6 96.0,52.2 76.8,52.2"
    },
    // 12. 잼 병들
    {
      wordKey: "jam",
      korean: "잼",
      audioUrl: "/audio/bakery/jam.mp3",
      videoPath: "/video/bakery/Jam.mp4",
      sentence: "The jam is sweet. I like strawberry jam.",
      imageType: "bakery",
      targetStyle: { top: '56.0%', left: '40.0%', width: '7.0%', height: '14.0%' },
      points: "64.0,50.4 75.2,50.4 75.2,63.0 64.0,63.0"
    },
    // 13. 크림 보울
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: "/audio/bakery/cream.mp3",
      videoPath: "/video/bakery/Cream.mp4",
      sentence: "The cream is soft and sweet.",
      imageType: "bakery",
      targetStyle: { top: '57.0%', left: '60.0%', width: '8.0%', height: '10.0%' },
      points: "96.0,51.3 108.8,51.3 108.8,60.3 96.0,60.3"
    },
    // 14. 샌드위치 (괴물 캐릭터 앞 진열)
    {
      wordKey: "sandwich",
      korean: "샌드위치",
      audioUrl: "/audio/bakery/sandwich.mp3",
      videoPath: "/video/bakery/Sandwich.mp4",
      sentence: "The sandwich has cheese and ham.",
      imageType: "bakery",
      targetStyle: { top: '60.0%', left: '71.0%', width: '8.0%', height: '9.0%' },
      points: "113.6,54.0 126.4,54.0 126.4,62.1 113.6,62.1"
    },
    // 15. 조각 케이크 (진열장 왼쪽)
    {
      wordKey: "cake",
      korean: "케이크",
      audioUrl: "/audio/bakery/cake.mp3",
      videoPath: "/video/bakery/Cake.mp4",
      sentence: "The cake looks yummy. It is a strawberry cake.",
      imageType: "bakery",
      targetStyle: { top: '68.0%', left: '50.0%', width: '9.0%', height: '11.0%' },
      points: "80.0,61.2 94.4,61.2 94.4,71.1 80.0,71.1"
    },
    // 16. 쿠키 (진열장 안)
    {
      wordKey: "cookie",
      korean: "쿠키",
      audioUrl: "/audio/bakery/cookie.mp3",
      videoPath: "/video/bakery/Cookie.mp4",
      sentence: "These are delicious chocolate chip cookies.",
      imageType: "bakery",
      targetStyle: { top: '74.0%', left: '62.0%', width: '8.0%', height: '8.0%' },
      points: "99.2,66.6 112.0,66.6 112.0,73.8 99.2,73.8"
    },
    // 17. 파이 (진열장 앞쪽 중앙)
    {
      wordKey: "pie",
      korean: "파이",
      audioUrl: "/audio/bakery/pie.mp3",
      videoPath: "/video/bakery/Pie.mp4",
      sentence: "I baked an apple pie. The pie is hot.",
      imageType: "bakery",
      targetStyle: { top: '79.0%', left: '58.0%', width: '11.0%', height: '11.0%' },
      points: "92.8,71.1 110.4,71.1 110.4,81.0 92.8,81.0"
    },
    // 18. 도넛 (진열장 오른쪽)
    {
      wordKey: "doughnut",
      korean: "도넛",
      audioUrl: "/audio/bakery/doughnut.mp3",
      videoPath: "/video/bakery/Doughnut.mp4",
      sentence: "The doughnut has pink icing.",
      imageType: "bakery",
      targetStyle: { top: '86.0%', left: '69.0%', width: '13.0%', height: '11.0%' },
      points: "110.4,77.4 131.2,77.4 131.2,87.3 110.4,87.3"
    },
    // 19. 머핀 (오른쪽 바구니 안)
    {
      wordKey: "muffin",
      korean: "머핀",
      audioUrl: "/audio/bakery/muffin.mp3",
      videoPath: "/video/bakery/Muffin.mp4",
      sentence: "I eat a chocolate muffin for dessert.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '83.0%', width: '13.0%', height: '14.0%' },
      points: "132.8,72.0 153.6,72.0 153.6,84.6 132.8,84.6"
    },
    // 20. 빵 (전체적인 빵 반죽과 빵)
    {
      wordKey: "bread",
      korean: "빵",
      audioUrl: "/audio/bakery/bread.mp3",
      videoPath: "/video/bakery/Bread.mp4",
      sentence: "The bakery smells like fresh bread.",
      imageType: "bakery",
      targetStyle: { top: '47.0%', left: '60.0%', width: '10.0%', height: '5.0%' },
      points: "96.0,42.3 112.0,42.3 112.0,46.8 96.0,46.8"
    }
  ]
};