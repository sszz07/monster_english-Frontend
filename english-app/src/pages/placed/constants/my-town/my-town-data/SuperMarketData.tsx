import supermarketImg from "@/assets/image/places/my-town/Supermarket.png"; //[cite: 10]

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
  // "supermarket" 타입을 추가했습니다.
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway" | "crosswalk" | "stationery" | "supermarket"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const supermarketData: PlaceDataType = {
  placeKey: "supermarket",
  placeTitle: "Supermarket Word Adventure",
  bgImage: supermarketImg,
  masterRegions: [
    // 1. 카트 (남자아이가 밀고 있는 쇼핑 카트)[cite: 10]
    {
      wordKey: "cart",
      korean: "카트",
      audioUrl: "/audio/supermarket/cart.mp3",
      videoPath: "/video/supermarket/Cart.mp4",
      sentence: "Put the groceries in the shopping cart.",
      imageType: "supermarket",
      targetStyle: { top: '60.0%', left: '70.0%', width: '15.0%', height: '25.0%' },
      points: "112.0,54.0 136.0,54.0 136.0,76.5 112.0,76.5"
    },
    // 2. 바구니 (매장 가운데 쌓여있는 갈색 쇼핑 바구니들)[cite: 10]
    {
      wordKey: "basket",
      korean: "바구니",
      audioUrl: "/audio/supermarket/basket.mp3",
      videoPath: "/video/supermarket/Basket.mp4",
      sentence: "I carry a basket for a few items.",
      imageType: "supermarket",
      targetStyle: { top: '42.0%', left: '48.0%', width: '6.0%', height: '15.0%' },
      points: "76.8,37.8 86.4,37.8 86.4,51.3 76.8,51.3"
    },
    // 3. 계산원 (오른쪽 계산대에서 일하는 직원)[cite: 10]
    {
      wordKey: "cashier",
      korean: "계산원",
      audioUrl: "/audio/supermarket/cashier.mp3",
      videoPath: "/video/supermarket/Cashier.mp4",
      sentence: "The cashier scans the items.",
      imageType: "supermarket",
      targetStyle: { top: '40.0%', left: '85.0%', width: '8.0%', height: '20.0%' },
      points: "136.0,36.0 148.8,36.0 148.8,54.0 136.0,54.0"
    },
    // 4. 영수증 (오른쪽 계산대 끝에 나오는 하얀 영수증 종이)[cite: 10]
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/supermarket/receipt.mp3",
      videoPath: "/video/supermarket/Receipt.mp4",
      sentence: "Take your receipt after paying.",
      imageType: "supermarket",
      targetStyle: { top: '58.0%', left: '92.0%', width: '5.0%', height: '8.0%' },
      points: "147.2,52.2 155.2,52.2 155.2,59.4 147.2,59.4"
    },
    // 5. 할인 (왼쪽 앞 포스기/계산대 모니터 화면)[cite: 10]
    {
      wordKey: "discount",
      korean: "할인",
      audioUrl: "/audio/supermarket/discount.mp3",
      videoPath: "/video/supermarket/Discount.mp4",
      sentence: "I bought these apples at a discount.",
      imageType: "supermarket",
      targetStyle: { top: '62.0%', left: '43.0%', width: '7.0%', height: '12.0%' },
      points: "68.8,55.8 80.0,55.8 80.0,66.6 68.8,66.6"
    },
    // 6. 선반 (오른쪽 시리얼과 주스가 진열된 긴 진열장)[cite: 10]
    {
      wordKey: "shelf",
      korean: "선반(진열장)",
      audioUrl: "/audio/supermarket/shelf.mp3",
      videoPath: "/video/supermarket/Shelf.mp4",
      sentence: "The cookies are on the top shelf.",
      imageType: "supermarket",
      targetStyle: { top: '15.0%', left: '58.0%', width: '20.0%', height: '35.0%' },
      points: "92.8,13.5 124.8,13.5 124.8,45.0 92.8,45.0"
    },
    // 7. 통로 (과일 매대와 냉동고 사이의 바닥 길)[cite: 10]
    {
      wordKey: "aisle",
      korean: "통로",
      audioUrl: "/audio/supermarket/aisle.mp3",
      videoPath: "/video/supermarket/Aisle.mp4",
      sentence: "We walk down the supermarket aisle.",
      imageType: "supermarket",
      targetStyle: { top: '40.0%', left: '25.0%', width: '15.0%', height: '20.0%' },
      points: "40.0,36.0 64.0,36.0 64.0,54.0 40.0,54.0"
    },
    // 8. 계산대 (매장 앞쪽 돌로 된 계산대 데스크 전체)[cite: 10]
    {
      wordKey: "checkout",
      korean: "계산대",
      audioUrl: "/audio/supermarket/checkout.mp3",
      videoPath: "/video/supermarket/Checkout.mp4",
      sentence: "Please pay at the checkout counter.",
      imageType: "supermarket",
      targetStyle: { top: '60.0%', left: '25.0%', width: '70.0%', height: '35.0%' },
      points: "40.0,54.0 152.0,54.0 152.0,85.5 40.0,85.5"
    },
    // 9. 가격표 (과일 진열장 앞쪽에 붙어있는 작은 라벨들)[cite: 10]
    {
      wordKey: "price_tag",
      korean: "가격표",
      audioUrl: "/audio/supermarket/price_tag.mp3",
      videoPath: "/video/supermarket/PriceTag.mp4",
      sentence: "Check the price tag before you buy.",
      imageType: "supermarket",
      targetStyle: { top: '50.0%', left: '10.0%', width: '8.0%', height: '5.0%' },
      points: "16.0,45.0 28.8,45.0 28.8,49.5 16.0,49.5"
    },
    // 10. 바코드 (포스기 앞 바코드 스캐너 기계)[cite: 10]
    {
      wordKey: "barcode",
      korean: "바코드",
      audioUrl: "/audio/supermarket/barcode.mp3",
      videoPath: "/video/supermarket/Barcode.mp4",
      sentence: "The machine reads the barcode.",
      imageType: "supermarket",
      targetStyle: { top: '80.0%', left: '48.0%', width: '5.0%', height: '5.0%' },
      points: "76.8,72.0 84.8,72.0 84.8,76.5 76.8,76.5"
    },
    // 11. 유제품 (뒤편 배경의 유리문 냉장고 구역)[cite: 10]
    {
      wordKey: "dairy",
      korean: "유제품",
      audioUrl: "/audio/supermarket/dairy.mp3",
      videoPath: "/video/supermarket/Dairy.mp4",
      sentence: "Milk and cheese are in the dairy section.",
      imageType: "supermarket",
      targetStyle: { top: '8.0%', left: '26.0%', width: '15.0%', height: '25.0%' },
      points: "41.6,7.2 65.6,7.2 65.6,29.7 41.6,29.7"
    },
    // 12. 과자/간식 (중앙 뒤쪽 snacks 간판이 있는 진열대)[cite: 10]
    {
      wordKey: "snacks",
      korean: "과자(간식)",
      audioUrl: "/audio/supermarket/snacks.mp3",
      videoPath: "/video/supermarket/Snacks.mp4",
      sentence: "Kids love eating sweet snacks.",
      imageType: "supermarket",
      targetStyle: { top: '10.0%', left: '52.0%', width: '8.0%', height: '15.0%' },
      points: "83.2,9.0 96.0,9.0 96.0,22.5 83.2,22.5"
    },
    // 13. 농산물 (왼쪽 과일과 채소가 있는 목재 진열대 전체)[cite: 10]
    {
      wordKey: "produce",
      korean: "농산물(청과물)",
      audioUrl: "/audio/supermarket/produce.mp3",
      videoPath: "/video/supermarket/Produce.mp4",
      sentence: "Buy fresh tomatoes in the produce section.",
      imageType: "supermarket",
      targetStyle: { top: '35.0%', left: '1.0%', width: '20.0%', height: '30.0%' },
      points: "1.6,31.5 33.6,31.5 33.6,58.5 1.6,58.5"
    },
    // 14. 과일 (농산물 코너 위쪽의 사과/오렌지 등)[cite: 10]
    {
      wordKey: "fruit",
      korean: "과일",
      audioUrl: "/audio/supermarket/fruit.mp3",
      videoPath: "/video/supermarket/Fruit.mp4",
      sentence: "Apples and bananas are healthy fruit.",
      imageType: "supermarket",
      targetStyle: { top: '42.0%', left: '3.0%', width: '15.0%', height: '10.0%' },
      points: "4.8,37.8 28.8,37.8 28.8,46.8 4.8,46.8"
    },
    // 15. 채소 (농산물 코너 아래쪽의 초록색 채소들)[cite: 10]
    {
      wordKey: "vegetables",
      korean: "채소(야채)",
      audioUrl: "/audio/supermarket/vegetables.mp3",
      videoPath: "/video/supermarket/Vegetables.mp4",
      sentence: "Eat green vegetables every day.",
      imageType: "supermarket",
      targetStyle: { top: '55.0%', left: '10.0%', width: '12.0%', height: '10.0%' },
      points: "16.0,49.5 35.2,49.5 35.2,58.5 16.0,58.5"
    },
    // 16. 고기 (오른쪽 뒤 고기/해산물 진열대의 붉은 팩 고기들)[cite: 10]
    {
      wordKey: "meat",
      korean: "고기",
      audioUrl: "/audio/supermarket/meat.mp3",
      videoPath: "/video/supermarket/Meat.mp4",
      sentence: "We need some meat for dinner.",
      imageType: "supermarket",
      targetStyle: { top: '10.0%', left: '88.0%', width: '10.0%', height: '25.0%' },
      points: "140.8,9.0 156.8,9.0 156.8,31.5 140.8,31.5"
    },
    // 17. 해산물 (매장 중앙의 하늘색 냉동/냉장 쇼케이스 안 내용물)[cite: 10]
    {
      wordKey: "seafood",
      korean: "해산물",
      audioUrl: "/audio/supermarket/seafood.mp3",
      videoPath: "/video/supermarket/Seafood.mp4",
      sentence: "I want to buy some fresh seafood.",
      imageType: "supermarket",
      targetStyle: { top: '35.0%', left: '33.0%', width: '15.0%', height: '20.0%' },
      points: "52.8,31.5 76.8,31.5 76.8,49.5 52.8,49.5"
    },
    // 18. 시리얼 (오른쪽 선반 위쪽의 시리얼 상자들)[cite: 10]
    {
      wordKey: "cereal",
      korean: "시리얼",
      audioUrl: "/audio/supermarket/cereal.mp3",
      videoPath: "/video/supermarket/Cereal.mp4",
      sentence: "I eat cereal with milk for breakfast.",
      imageType: "supermarket",
      targetStyle: { top: '15.0%', left: '62.0%', width: '10.0%', height: '10.0%' },
      points: "99.2,13.5 115.2,13.5 115.2,22.5 99.2,22.5"
    },
    // 19. 주스 (오른쪽 선반 중간의 알록달록한 주스 병들)[cite: 10]
    {
      wordKey: "juice",
      korean: "주스",
      audioUrl: "/audio/supermarket/juice.mp3",
      videoPath: "/video/supermarket/Juice.mp4",
      sentence: "Orange juice is sweet and delicious.",
      imageType: "supermarket",
      targetStyle: { top: '12.0%', left: '74.0%', width: '8.0%', height: '15.0%' },
      points: "118.4,10.8 131.2,10.8 131.2,24.3 118.4,24.3"
    },
    // 20. 병 (뒤쪽 유제품 냉장고 안의 병들)[cite: 10]
    {
      wordKey: "bottle",
      korean: "병",
      audioUrl: "/audio/supermarket/bottle.mp3",
      videoPath: "/video/supermarket/Bottle.mp4",
      sentence: "Can you get a bottle of water?",
      imageType: "supermarket",
      targetStyle: { top: '18.0%', left: '28.0%', width: '3.0%', height: '8.0%' },
      points: "44.8,16.2 49.6,16.2 49.6,23.4 44.8,23.4"
    },
    // 21. 캔 (간식 진열장 아래쪽 선반의 통조림/캔)[cite: 10]
    {
      wordKey: "can",
      korean: "캔(통조림)",
      audioUrl: "/audio/supermarket/can.mp3",
      videoPath: "/video/supermarket/Can.mp4",
      sentence: "Open a can of soup for lunch.",
      imageType: "supermarket",
      targetStyle: { top: '25.0%', left: '58.0%', width: '5.0%', height: '5.0%' },
      points: "92.8,22.5 100.8,22.5 100.8,27.0 92.8,27.0"
    },
    // 22. 가방/봉투 (오른쪽 계산대 위 점원 앞의 갈색 종이봉투)[cite: 10]
    {
      wordKey: "bag",
      korean: "가방(봉투)",
      audioUrl: "/audio/supermarket/bag.mp3",
      videoPath: "/video/supermarket/Bag.mp4",
      sentence: "Pack the items in a paper bag.",
      imageType: "supermarket",
      targetStyle: { top: '48.0%', left: '75.0%', width: '5.0%', height: '8.0%' },
      points: "120.0,43.2 128.0,43.2 128.0,50.4 120.0,50.4"
    },
    // 23. 냉동고 (매장 중앙의 커다란 냉동 평대 쇼케이스)[cite: 10]
    {
      wordKey: "freezer",
      korean: "냉동고",
      audioUrl: "/audio/supermarket/freezer.mp3",
      videoPath: "/video/supermarket/Freezer.mp4",
      sentence: "Ice cream is kept in the freezer.",
      imageType: "supermarket",
      targetStyle: { top: '32.0%', left: '28.0%', width: '20.0%', height: '25.0%' },
      points: "44.8,28.8 76.8,28.8 76.8,51.3 44.8,51.3"
    },
    // 24. 손님 (카트를 밀고 있는 오른쪽 남자아이)[cite: 10]
    {
      wordKey: "customer",
      korean: "손님(고객)",
      audioUrl: "/audio/supermarket/customer.mp3",
      videoPath: "/video/supermarket/Customer.mp4",
      sentence: "The customer is waiting to pay.",
      imageType: "supermarket",
      targetStyle: { top: '45.0%', left: '64.0%', width: '8.0%', height: '30.0%' },
      points: "102.4,40.5 115.2,40.5 115.2,67.5 102.4,67.5"
    },
    // 25. 줄 (계산 대기를 위해 여자아이 뒤에 남은 공간)[cite: 10]
    {
      wordKey: "line",
      korean: "줄(대기줄)",
      audioUrl: "/audio/supermarket/line.mp3",
      videoPath: "/video/supermarket/Line.mp4",
      sentence: "Please stand in line at the checkout.",
      imageType: "supermarket",
      targetStyle: { top: '70.0%', left: '50.0%', width: '15.0%', height: '10.0%' },
      points: "80.0,63.0 104.0,63.0 104.0,72.0 80.0,72.0"
    }
  ]
};