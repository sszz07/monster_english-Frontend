import marketImg from "@/assets/image/places/fantasy-nature/Market.jpg";

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

export const marketData: PlaceDataType = {
  placeKey: "market",
  placeTitle: "Market Word Adventure",
  bgImage: marketImg,
  masterRegions: [
    // 1. 가판대 (좌측 상단의 천막 지붕 부분으로 한정)
    {
      wordKey: "stall",
      korean: "가판대",
      audioUrl: "/audio/market/stall.mp3",
      videoPath: "/video/market/stall.mp4",
      sentence: "The stall is colorful and busy in the market. Setting up a stall in the market early in the morning is tiring.",
      targetStyle: { top: '2.0%', left: '15.0%', width: '10.0%', height: '8.0%' },
      points: "24.0,1.8 40.0,1.8 40.0,9.0 24.0,9.0"
    },
    // 2. 상인 (좌측 과일 파는 남성 상인의 얼굴 부분)
    {
      wordKey: "vendor",
      korean: "상인",
      audioUrl: "/audio/market/vendor.mp3",
      videoPath: "/video/market/vendor.mp4",
      sentence: "The vendor is loud and friendly at the stall. The vendor enjoys calling out to shoppers in the crowded market.",
      targetStyle: { top: '35.0%', left: '7.0%', width: '4.0%', height: '7.0%' },
      points: "11.2,31.5 17.6,31.5 17.6,37.8 11.2,37.8"
    },
    // 3. 과일 (좌측 전경의 사과 무더기)
    {
      wordKey: "fruit",
      korean: "과일",
      audioUrl: "/audio/market/fruit.mp3",
      videoPath: "/video/market/fruit.mp4",
      sentence: "The fruit is fresh and sweet in the basket. Picking the ripest fruit from the stall takes a careful eye.",
      targetStyle: { top: '78.0%', left: '1.0%', width: '8.0%', height: '10.0%' },
      points: "1.6,70.2 14.4,70.2 14.4,79.2 1.6,79.2"
    },
    // 4. 채소 (좌측 수레에 담긴 초록색 채소)
    {
      wordKey: "vegetable",
      korean: "채소",
      audioUrl: "/audio/market/vegetable.mp3",
      videoPath: "/video/market/vegetable.mp4",
      sentence: "The vegetables are green and fresh on the cart. Buying vegetables at the local market is healthier than at a supermarket.",
      targetStyle: { top: '56.0%', left: '12.0%', width: '5.0%', height: '6.0%' },
      points: "19.2,50.4 27.2,50.4 27.2,55.8 19.2,55.8"
    },
    // 5. 고기 (좌측 배경에 매달린 고기)
    {
      wordKey: "meat",
      korean: "고기",
      audioUrl: "/audio/market/meat.mp3",
      videoPath: "/video/market/meat.mp4",
      sentence: "The meat is red and fresh at the butcher stall. Choosing fresh meat at the market requires knowing what to look for.",
      targetStyle: { top: '15.0%', left: '32.0%', width: '4.0%', height: '8.0%' },
      points: "51.2,13.5 57.6,13.5 57.6,20.7 51.2,20.7"
    },
    // 6. 생선 (중앙 좌측 얼음 위에 놓인 생선)
    {
      wordKey: "fish",
      korean: "생선",
      audioUrl: "/audio/market/fish.mp3",
      videoPath: "/video/market/fish.mp4",
      sentence: "The fish is cold and shiny on the ice tray. Smelling fresh fish at the market tells you if it is good quality.",
      targetStyle: { top: '43.0%', left: '25.0%', width: '6.0%', height: '6.0%' },
      points: "40.0,38.7 49.6,38.7 49.6,44.1 40.0,44.1"
    },
    // 7. 향신료 (우측 붉은/노란 가루가 담긴 포대)
    {
      wordKey: "spice",
      korean: "향신료",
      audioUrl: "/audio/market/spice.mp3",
      videoPath: "/video/market/spice.mp4",
      sentence: "The spice is strong and colorful in the big bowl. Sniffing different spices at the market is an amazing sensory experience.",
      targetStyle: { top: '56.0%', left: '75.0%', width: '4.0%', height: '8.0%' },
      points: "120.0,50.4 126.4,50.4 126.4,57.6 120.0,57.6"
    },
    // 8. 곡물 (향신료 옆의 갈색 곡물 포대)
    {
      wordKey: "grain",
      korean: "곡물",
      audioUrl: "/audio/market/grain.mp3",
      videoPath: "/video/market/grain.mp4",
      sentence: "The grain is dry and golden in the large sack. Scooping grain from a big bag at the market is satisfying.",
      targetStyle: { top: '51.0%', left: '80.0%', width: '3.0%', height: '6.0%' },
      points: "128.0,45.9 132.8,45.9 132.8,51.3 128.0,51.3"
    },
    // 9. 쌀 (우측 하얀색 쌀 포대)
    {
      wordKey: "rice",
      korean: "쌀",
      audioUrl: "/audio/market/rice.mp3",
      videoPath: "/video/market/rice.mp4",
      sentence: "The rice is white and clean in the open sack. Buying rice in bulk at the market saves a lot of money.",
      targetStyle: { top: '55.0%', left: '84.0%', width: '5.0%', height: '8.0%' },
      points: "134.4,49.5 142.4,49.5 142.4,56.7 134.4,56.7"
    },
    // 10. 차 (우측 전경 테이블 위의 찻잔들)
    {
      wordKey: "tea",
      korean: "차",
      audioUrl: "/audio/market/tea.mp3",
      videoPath: "/video/market/tea.mp4",
      sentence: "The tea is fragrant and warm in the vendor's cup. Tasting different teas at the market before buying is very helpful.",
      targetStyle: { top: '68.0%', left: '79.0%', width: '4.0%', height: '4.0%' },
      points: "126.4,61.2 132.8,61.2 132.8,64.8 126.4,64.8"
    },
    // 11. 바구니 (파란 옷을 입은 여성이 들고 있는 바구니)
    {
      wordKey: "basket",
      korean: "바구니",
      audioUrl: "/audio/market/basket.mp3",
      videoPath: "/video/market/basket.mp4",
      sentence: "The basket is wide and woven in the vendor's hand. Carrying a basket through the market is better than using a plastic bag.",
      targetStyle: { top: '80.0%', left: '21.0%', width: '5.0%', height: '7.0%' },
      points: "33.6,72.0 41.6,72.0 41.6,78.3 33.6,78.3"
    },
    // 12. 저울 (생선/고기 가판대 위에 매달린 둥근 저울)
    {
      wordKey: "scale",
      korean: "저울",
      audioUrl: "/audio/market/scale.mp3",
      videoPath: "/video/market/scale.mp4",
      sentence: "The scale is old and heavy on the vendor's table. Weighing fruit on the scale helps the vendor set the right price.",
      targetStyle: { top: '16.0%', left: '27.0%', width: '4.0%', height: '10.0%' },
      points: "43.2,14.4 49.6,14.4 49.6,23.4 43.2,23.4"
    },
    // 13. 가격표 (과일 무더기 옆의 'price' 표지판)
    {
      wordKey: "price",
      korean: "가격표",
      audioUrl: "/audio/market/price.mp3",
      videoPath: "/video/market/price.mp4",
      sentence: "The price is low and fair at this stall. Comparing prices at different stalls helps you find the best deal.",
      targetStyle: { top: '68.0%', left: '2.0%', width: '5.0%', height: '7.0%' },
      points: "3.2,61.2 11.2,61.2 11.2,67.5 3.2,67.5"
    },
    // 14. 흥정하다 (과일을 건네주는 상인의 손 부분)
    {
      wordKey: "bargain",
      korean: "흥정하다",
      audioUrl: "/audio/market/bargain.mp3",
      videoPath: "/video/market/bargain.mp4",
      sentence: "The bargain is exciting and rare at the market. Bargaining with vendors at the market is a fun cultural experience.",
      targetStyle: { top: '50.0%', left: '13.0%', width: '3.0%', height: '4.0%' },
      points: "20.8,45.0 25.6,45.0 25.6,48.6 20.8,48.6"
    },
    // 15. 쇼핑객/손님 (좌측 파란 옷을 입은 여성 손님의 얼굴 부분)
    {
      wordKey: "shopper",
      korean: "쇼핑객/손님",
      audioUrl: "/audio/market/shopper.mp3",
      videoPath: "/video/market/shopper.mp4",
      sentence: "The shopper is curious and careful at every stall. Talking to shoppers at the market makes selling much more enjoyable.",
      targetStyle: { top: '57.0%', left: '19.0%', width: '4.0%', height: '8.0%' },
      points: "30.4,51.3 36.8,51.3 36.8,58.5 30.4,58.5"
    },
    // 16. 카트/수레 (좌측 하단 손수레 몸체)
    {
      wordKey: "cart",
      korean: "카트/수레",
      audioUrl: "/audio/market/cart.mp3",
      videoPath: "/video/market/cart.mp4",
      sentence: "The cart is heavy and full of fresh produce. Pushing a heavy cart through the crowded market is exhausting work.",
      targetStyle: { top: '74.0%', left: '28.0%', width: '6.0%', height: '10.0%' },
      points: "44.8,66.6 54.4,66.6 54.4,75.6 44.8,75.6"
    },
    // 17. 가방/봉투 (중앙 소녀가 들고 있는 천 가방)
    {
      wordKey: "bag",
      korean: "가방/봉투",
      audioUrl: "/audio/market/bag.mp3",
      videoPath: "/video/market/bag.mp4",
      sentence: "The bag is large and eco-friendly in her hand. Bringing a reusable bag to the market is good for the environment.",
      targetStyle: { top: '76.0%', left: '37.0%', width: '5.0%', height: '8.0%' },
      points: "59.2,68.4 67.2,68.4 67.2,75.6 59.2,75.6"
    },
    // 18. 샘플/시식 (몬스터 캐릭터가 들고 있는 그릇)
    {
      wordKey: "sample",
      korean: "샘플/시식",
      audioUrl: "/audio/market/sample.mp3",
      videoPath: "/video/market/sample.mp4",
      sentence: "The sample is small and tasty on the wooden stick. Trying free samples at every stall is her favorite part of the market.",
      targetStyle: { top: '55.0%', left: '49.0%', width: '4.0%', height: '5.0%' },
      points: "78.4,49.5 84.8,49.5 84.8,54.0 78.4,54.0"
    },
    // 19. 현지 음식 (몬스터 뒤쪽 가판대의 채소/음식물)
    {
      wordKey: "local_food",
      korean: "현지 음식",
      audioUrl: "/audio/market/local_food.mp3",
      videoPath: "/video/market/local_food.mp4",
      sentence: "The local food is delicious and unique at every stall. Tasting local food at the market gives you a feel for the culture.",
      targetStyle: { top: '30.0%', left: '68.0%', width: '4.0%', height: '5.0%' },
      points: "108.8,27.0 115.2,27.0 115.2,31.5 108.8,31.5"
    },
    // 20. 수제/수공예 (우측 하단 점토로 빚은 수공예 그릇들)
    {
      wordKey: "handmade",
      korean: "수제/수공예",
      audioUrl: "/audio/market/handmade.mp3",
      videoPath: "/video/market/handmade.mp4",
      sentence: "The handmade items are beautiful and unique on the table. Buying handmade crafts at the market supports local artists directly.",
      targetStyle: { top: '85.0%', left: '81.0%', width: '5.0%', height: '8.0%' },
      points: "129.6,76.5 137.6,76.5 137.6,83.7 129.6,83.7"
    },
    // 21. 공예품 (우측 상단에 매달린 짠 가방/공예품들)
    {
      wordKey: "crafts",
      korean: "공예품",
      audioUrl: "/audio/market/crafts.mp3",
      videoPath: "/video/market/crafts.mp4",
      sentence: "The crafts are colorful and creative at the corner stall. Making crafts by hand and selling them at the market takes great skill.",
      targetStyle: { top: '10.0%', left: '90.0%', width: '6.0%', height: '12.0%' },
      points: "144.0,9.0 153.6,9.0 153.6,19.8 144.0,19.8"
    },
    // 22. 건어물/말린 음식 (우측 상단 'dried food' 표지 아래 매달린 것들)
    {
      wordKey: "dried_food",
      korean: "건어물/말린 음식",
      audioUrl: "/audio/market/dried_food.mp3",
      videoPath: "/video/market/dried_food.mp4",
      sentence: "The dried food is light and chewy in the bag. Storing dried food from the market keeps it fresh for a long time.",
      targetStyle: { top: '18.0%', left: '61.0%', width: '4.0%', height: '6.0%' },
      points: "97.6,16.2 104.0,16.2 104.0,21.6 97.6,21.6"
    },
    // 23. 약초/허브 (우측 상단 'herbs' 표지 아래 매달린 초록색 약초 묶음)
    {
      wordKey: "herbs",
      korean: "약초/허브",
      audioUrl: "/audio/market/herbs.mp3",
      videoPath: "/video/market/herbs.mp4",
      sentence: "The herbs are green and fragrant in the basket. Growing herbs at home after buying seeds at the market is rewarding.",
      targetStyle: { top: '15.0%', left: '72.0%', width: '5.0%', height: '8.0%' },
      points: "115.2,13.5 123.2,13.5 123.2,20.7 115.2,20.7"
    },
    // 24. 간식 (우측 빵과 간식이 있는 진열대)
    {
      wordKey: "snacks",
      korean: "간식",
      audioUrl: "/audio/market/snacks.mp3",
      videoPath: "/video/market/snacks.mp4",
      sentence: "The snacks are crispy and warm at the corner stall. Munching on snacks while walking through the market is really enjoyable.",
      targetStyle: { top: '35.0%', left: '87.0%', width: '4.0%', height: '6.0%' },
      points: "139.2,31.5 145.6,31.5 145.6,36.9 139.2,36.9"
    },
    // 25. 단것/과자 (우측 가장자리 진열대의 둥근 간식류)
    {
      wordKey: "sweets",
      korean: "단것/과자",
      audioUrl: "/audio/market/sweets.mp3",
      videoPath: "/video/market/sweets.mp4",
      sentence: "The sweets are soft and sticky on the tray. Resisting sweets at the market is almost impossible for most children.",
      targetStyle: { top: '40.0%', left: '94.0%', width: '4.0%', height: '6.0%' },
      points: "150.4,36.0 156.8,36.0 156.8,41.4 150.4,41.4"
    }
  ]
};