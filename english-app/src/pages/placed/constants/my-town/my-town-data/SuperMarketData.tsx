import supermarketImg from "@/assets/image/places/my-town/Supermarket.png";

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
    // 1. 카트 (겹치지 않는 선에서 최대한 넓게)
    {
      wordKey: "cart",
      korean: "카트",
      audioUrl: "/audio/supermarket/cart.mp3",
      videoPath: "/video/supermarket/Cart.mp4",
      sentence: "Put the groceries in the shopping cart.",
      imageType: "supermarket",
      targetStyle: { top: '60.0%', left: '70.0%', width: '14.0%', height: '25.0%' },
      points: "112.0,54.0 134.4,54.0 134.4,76.5 112.0,76.5"
    },
    // 2. 바구니 (클릭하기 편하게 가로/세로 확장)
    {
      wordKey: "basket",
      korean: "바구니",
      audioUrl: "/audio/supermarket/basket.mp3",
      videoPath: "/video/supermarket/Basket.mp4",
      sentence: "I carry a basket for a few items.",
      imageType: "supermarket",
      targetStyle: { top: '42.0%', left: '46.0%', width: '6.0%', height: '12.0%' },
      points: "73.6,37.8 83.2,37.8 83.2,48.6 73.6,48.6"
    },
    // 3. 계산원 (영수증, 가방과 분리하여 넉넉하게)
    {
      wordKey: "cashier",
      korean: "계산원",
      audioUrl: "/audio/supermarket/cashier.mp3",
      videoPath: "/video/supermarket/Cashier.mp4",
      sentence: "The cashier scans the items.",
      imageType: "supermarket",
      targetStyle: { top: '35.0%', left: '85.0%', width: '8.0%', height: '20.0%' },
      points: "136.0,31.5 148.8,31.5 148.8,49.5 136.0,49.5"
    },
    // 4. 영수증
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/supermarket/receipt.mp3",
      videoPath: "/video/supermarket/Receipt.mp4",
      sentence: "Take your receipt after paying.",
      imageType: "supermarket",
      targetStyle: { top: '56.0%', left: '94.0%', width: '5.0%', height: '8.0%' },
      points: "150.4,50.4 158.4,50.4 158.4,57.6 150.4,57.6"
    },
    // 5. 할인
    {
      wordKey: "discount",
      korean: "할인",
      audioUrl: "/audio/supermarket/discount.mp3",
      videoPath: "/video/supermarket/Discount.mp4",
      sentence: "I bought these apples at a discount.",
      imageType: "supermarket",
      targetStyle: { top: '60.0%', left: '42.0%', width: '8.0%', height: '12.0%' },
      points: "67.2,54.0 80.0,54.0 80.0,64.8 67.2,64.8"
    },
    // 6. 선반 (전체가 아닌 비어있는 하단 선반 일부로 재조정하여 중복 제거)
    {
      wordKey: "shelf",
      korean: "선반(진열장)",
      audioUrl: "/audio/supermarket/shelf.mp3",
      videoPath: "/video/supermarket/Shelf.mp4",
      sentence: "The cookies are on the top shelf.",
      imageType: "supermarket",
      targetStyle: { top: '30.0%', left: '69.0%', width: '10.0%', height: '12.0%' },
      points: "110.4,27.0 126.4,27.0 126.4,37.8 110.4,37.8"
    },
    // 7. 통로 (넓은 바닥 통로 영역 지정)
    {
      wordKey: "aisle",
      korean: "통로",
      audioUrl: "/audio/supermarket/aisle.mp3",
      videoPath: "/video/supermarket/Aisle.mp4",
      sentence: "We walk down the supermarket aisle.",
      imageType: "supermarket",
      targetStyle: { top: '58.0%', left: '21.0%', width: '15.0%', height: '15.0%' },
      points: "33.6,52.2 57.6,52.2 57.6,65.7 33.6,65.7"
    },
    // 8. 계산대 (다른 물건들이 올려지지 않은 계산대 데스크 하단부)
    {
      wordKey: "checkout",
      korean: "계산대",
      audioUrl: "/audio/supermarket/checkout.mp3",
      videoPath: "/video/supermarket/Checkout.mp4",
      sentence: "Please pay at the checkout counter.",
      imageType: "supermarket",
      targetStyle: { top: '75.0%', left: '20.0%', width: '25.0%', height: '15.0%' },
      points: "32.0,67.5 72.0,67.5 72.0,81.0 32.0,81.0"
    },
    // 9. 가격표 (과일과 겹치지 않게 분리)
    {
      wordKey: "price_tag",
      korean: "가격표",
      audioUrl: "/audio/supermarket/price_tag.mp3",
      videoPath: "/video/supermarket/PriceTag.mp4",
      sentence: "Check the price tag before you buy.",
      imageType: "supermarket",
      targetStyle: { top: '48.0%', left: '15.0%', width: '5.0%', height: '5.0%' },
      points: "24.0,43.2 32.0,43.2 32.0,47.7 24.0,47.7"
    },
    // 10. 바코드
    {
      wordKey: "barcode",
      korean: "바코드",
      audioUrl: "/audio/supermarket/barcode.mp3",
      videoPath: "/video/supermarket/Barcode.mp4",
      sentence: "The machine reads the barcode.",
      imageType: "supermarket",
      targetStyle: { top: '78.0%', left: '48.0%', width: '6.0%', height: '8.0%' },
      points: "76.8,70.2 86.4,70.2 86.4,77.4 76.8,77.4"
    },
    // 11. 유제품 (병과 겹치지 않게 넉넉히 분리)
    {
      wordKey: "dairy",
      korean: "유제품",
      audioUrl: "/audio/supermarket/dairy.mp3",
      videoPath: "/video/supermarket/Dairy.mp4",
      sentence: "Milk and cheese are in the dairy section.",
      imageType: "supermarket",
      targetStyle: { top: '8.0%', left: '34.0%', width: '10.0%', height: '20.0%' },
      points: "54.4,7.2 70.4,7.2 70.4,25.2 54.4,25.2"
    },
    // 12. 과자/간식
    {
      wordKey: "snacks",
      korean: "과자(간식)",
      audioUrl: "/audio/supermarket/snacks.mp3",
      videoPath: "/video/supermarket/Snacks.mp4",
      sentence: "Kids love eating sweet snacks.",
      imageType: "supermarket",
      targetStyle: { top: '10.0%', left: '50.0%', width: '8.0%', height: '15.0%' },
      points: "80.0,9.0 92.8,9.0 92.8,22.5 80.0,22.5"
    },
    // 13. 농산물 (과일/채소와 겹치지 않게 진열장 본체 윗부분으로 분리)
    {
      wordKey: "produce",
      korean: "농산물(청과물)",
      audioUrl: "/audio/supermarket/produce.mp3",
      videoPath: "/video/supermarket/Produce.mp4",
      sentence: "Buy fresh tomatoes in the produce section.",
      imageType: "supermarket",
      targetStyle: { top: '32.0%', left: '2.0%', width: '16.0%', height: '7.0%' },
      points: "3.2,28.8 28.8,28.8 28.8,35.1 3.2,35.1"
    },
    // 14. 과일
    {
      wordKey: "fruit",
      korean: "과일",
      audioUrl: "/audio/supermarket/fruit.mp3",
      videoPath: "/video/supermarket/Fruit.mp4",
      sentence: "Apples and bananas are healthy fruit.",
      imageType: "supermarket",
      targetStyle: { top: '40.0%', left: '2.0%', width: '12.0%', height: '8.0%' },
      points: "3.2,36.0 22.4,36.0 22.4,43.2 3.2,43.2"
    },
    // 15. 채소
    {
      wordKey: "vegetables",
      korean: "채소(야채)",
      audioUrl: "/audio/supermarket/vegetables.mp3",
      videoPath: "/video/supermarket/Vegetables.mp4",
      sentence: "Eat green vegetables every day.",
      imageType: "supermarket",
      targetStyle: { top: '55.0%', left: '2.0%', width: '12.0%', height: '10.0%' },
      points: "3.2,49.5 22.4,49.5 22.4,58.5 3.2,58.5"
    },
    // 16. 고기
    {
      wordKey: "meat",
      korean: "고기",
      audioUrl: "/audio/supermarket/meat.mp3",
      videoPath: "/video/supermarket/Meat.mp4",
      sentence: "We need some meat for dinner.",
      imageType: "supermarket",
      targetStyle: { top: '10.0%', left: '88.0%', width: '10.0%', height: '20.0%' },
      points: "140.8,9.0 156.8,9.0 156.8,27.0 140.8,27.0"
    },
    // 17. 해산물
    {
      wordKey: "seafood",
      korean: "해산물",
      audioUrl: "/audio/supermarket/seafood.mp3",
      videoPath: "/video/supermarket/Seafood.mp4",
      sentence: "I want to buy some fresh seafood.",
      imageType: "supermarket",
      targetStyle: { top: '35.0%', left: '39.0%', width: '8.0%', height: '20.0%' },
      points: "62.4,31.5 75.2,31.5 75.2,49.5 62.4,49.5"
    },
    // 18. 시리얼
    {
      wordKey: "cereal",
      korean: "시리얼",
      audioUrl: "/audio/supermarket/cereal.mp3",
      videoPath: "/video/supermarket/Cereal.mp4",
      sentence: "I eat cereal with milk for breakfast.",
      imageType: "supermarket",
      targetStyle: { top: '15.0%', left: '60.0%', width: '10.0%', height: '12.0%' },
      points: "96.0,13.5 112.0,13.5 112.0,24.3 96.0,24.3"
    },
    // 19. 주스
    {
      wordKey: "juice",
      korean: "주스",
      audioUrl: "/audio/supermarket/juice.mp3",
      videoPath: "/video/supermarket/Juice.mp4",
      sentence: "Orange juice is sweet and delicious.",
      imageType: "supermarket",
      targetStyle: { top: '12.0%', left: '72.0%', width: '10.0%', height: '15.0%' },
      points: "115.2,10.8 131.2,10.8 131.2,24.3 115.2,24.3"
    },
    // 20. 병
    {
      wordKey: "bottle",
      korean: "병",
      audioUrl: "/audio/supermarket/bottle.mp3",
      videoPath: "/video/supermarket/Bottle.mp4",
      sentence: "Can you get a bottle of water?",
      imageType: "supermarket",
      targetStyle: { top: '18.0%', left: '28.0%', width: '5.0%', height: '10.0%' },
      points: "44.8,16.2 52.8,16.2 52.8,25.2 44.8,25.2"
    },
    // 21. 캔
    {
      wordKey: "can",
      korean: "캔(통조림)",
      audioUrl: "/audio/supermarket/can.mp3",
      videoPath: "/video/supermarket/Can.mp4",
      sentence: "Open a can of soup for lunch.",
      imageType: "supermarket",
      targetStyle: { top: '28.0%', left: '58.0%', width: '5.0%', height: '8.0%' },
      points: "92.8,25.2 100.8,25.2 100.8,32.4 92.8,32.4"
    },
    // 22. 가방/봉투
    {
      wordKey: "bag",
      korean: "가방(봉투)",
      audioUrl: "/audio/supermarket/bag.mp3",
      videoPath: "/video/supermarket/Bag.mp4",
      sentence: "Pack the items in a paper bag.",
      imageType: "supermarket",
      targetStyle: { top: '48.0%', left: '76.0%', width: '6.0%', height: '10.0%' },
      points: "121.6,43.2 131.2,43.2 131.2,52.2 121.6,52.2"
    },
    // 23. 냉동고 (해산물과 분리하여 좌측 구역으로 넉넉히)
    {
      wordKey: "freezer",
      korean: "냉동고",
      audioUrl: "/audio/supermarket/freezer.mp3",
      videoPath: "/video/supermarket/Freezer.mp4",
      sentence: "Ice cream is kept in the freezer.",
      imageType: "supermarket",
      targetStyle: { top: '35.0%', left: '28.0%', width: '10.0%', height: '20.0%' },
      points: "44.8,31.5 60.8,31.5 60.8,49.5 44.8,49.5"
    },
    // 24. 손님 (가방, 줄 등과 겹치지 않게 크게 잡음)
    {
      wordKey: "customer",
      korean: "손님(고객)",
      audioUrl: "/audio/supermarket/customer.mp3",
      videoPath: "/video/supermarket/Customer.mp4",
      sentence: "The customer is waiting to pay.",
      imageType: "supermarket",
      targetStyle: { top: '42.0%', left: '60.0%', width: '8.0%', height: '25.0%' },
      points: "96.0,37.8 108.8,37.8 108.8,60.3 96.0,60.3"
    },
    // 25. 줄 (대기하는 여유 공간)
    {
      wordKey: "line",
      korean: "줄(대기줄)",
      audioUrl: "/audio/supermarket/line.mp3",
      videoPath: "/video/supermarket/Line.mp4",
      sentence: "Please stand in line at the checkout.",
      imageType: "supermarket",
      targetStyle: { top: '65.0%', left: '52.0%', width: '10.0%', height: '12.0%' },
      points: "83.2,58.5 99.2,58.5 99.2,69.3 83.2,69.3"
    }
  ]
};