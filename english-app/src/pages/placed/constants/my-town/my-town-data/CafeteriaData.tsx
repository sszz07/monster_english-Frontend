import cafeteriaImg from "@/assets/image/places/my-town/Cafeteria.png";

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
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const cafeteriaData: PlaceDataType = {
  placeKey: "cafeteria",
  placeTitle: "Cafeteria Word Adventure",
  bgImage: cafeteriaImg,
  masterRegions: [
    // 1. 바리스타 (카운터 뒤의 초록색 몬스터 바리스타)
    {
      wordKey: "barista",
      korean: "바리스타",
      audioUrl: "/audio/cafeteria/barista.mp3",
      videoPath: "/video/cafeteria/Barista.mp4",
      sentence: "The barista makes delicious coffee.",
      imageType: "cafeteria",
      targetStyle: { top: '15.0%', left: '20.0%', width: '20.0%', height: '45.0%' },
      points: "32.0,13.5 64.0,13.5 64.0,54.0 32.0,54.0"
    },
    // 2. 라떼 (잔의 하단 몸통 및 받침 영역으로 조정하여 우유 거품과 분리)
    {
      wordKey: "latte",
      korean: "라떼",
      audioUrl: "/audio/cafeteria/latte.mp3",
      videoPath: "/video/cafeteria/Latte.mp4",
      sentence: "I ordered a warm latte with milk.",
      imageType: "cafeteria",
      targetStyle: { top: '89.5%', left: '17.5%', width: '9.0%', height: '8.5%' },
      points: "28.0,80.5 42.4,80.5 42.4,88.2 28.0,88.2"
    },
    // 3. 에스프레소 (커피 머신 아래 작은 흰색 에스프레소 잔)
    {
      wordKey: "espresso",
      korean: "에스프레소",
      audioUrl: "/audio/cafeteria/espresso.mp3",
      videoPath: "/video/cafeteria/Espresso.mp4",
      sentence: "Espresso is a very strong and dark coffee.",
      imageType: "cafeteria",
      targetStyle: { top: '65.0%', left: '15.0%', width: '5.0%', height: '5.0%' },
      points: "24.0,58.5 32.0,58.5 32.0,63.0 24.0,63.0"
    },
    // 4. 카푸치노 (몬스터 앞쪽 투명한 유리잔에 담긴 커피)
    {
      wordKey: "cappuccino",
      korean: "카푸치노",
      audioUrl: "/audio/cafeteria/cappuccino.mp3",
      videoPath: "/video/cafeteria/Cappuccino.mp4",
      sentence: "A cappuccino has a lot of fluffy foam.",
      imageType: "cafeteria",
      targetStyle: { top: '70.0%', left: '29.0%', width: '5.0%', height: '12.0%' },
      points: "46.4,63.0 54.4,63.0 54.4,73.8 46.4,73.8"
    },
    // 5. 우유 거품 (라떼 잔 상단 표면의 하트 거품 영역)
    {
      wordKey: "milk_foam",
      korean: "우유 거품",
      audioUrl: "/audio/cafeteria/milk_foam.mp3",
      videoPath: "/video/cafeteria/MilkFoam.mp4",
      sentence: "I love the sweet milk foam on top.",
      imageType: "cafeteria",
      targetStyle: { top: '84.0%', left: '18.0%', width: '8.0%', height: '6.0%' },
      points: "28.8,75.6 41.6,75.6 41.6,81.0 28.8,81.0"
    },
    // 6. 컵 (머신 위에 쌓여 있는 하얀색 커피잔들)
    {
      wordKey: "cup",
      korean: "컵",
      audioUrl: "/audio/cafeteria/cup.mp3",
      videoPath: "/video/cafeteria/Cup.mp4",
      sentence: "The coffee is poured into a clean cup.",
      imageType: "cafeteria",
      targetStyle: { top: '40.0%', left: '5.0%', width: '8.0%', height: '10.0%' },
      points: "8.0,36.0 20.8,36.0 20.8,45.0 8.0,45.0"
    },
    // 7. 머그잔 (머신 위 파란색 머그잔)
    {
      wordKey: "mug",
      korean: "머그잔",
      audioUrl: "/audio/cafeteria/mug.mp3",
      videoPath: "/video/cafeteria/Mug.mp4",
      sentence: "I drink hot chocolate from a big mug.",
      imageType: "cafeteria",
      targetStyle: { top: '40.0%', left: '13.0%', width: '5.0%', height: '8.0%' },
      points: "20.8,36.0 28.8,36.0 28.8,43.2 20.8,43.2"
    },
    // 8. 빨대 (카운터 중앙에 꽂혀있는 빨대들)
    {
      wordKey: "straw",
      korean: "빨대",
      audioUrl: "/audio/cafeteria/straw.mp3",
      videoPath: "/video/cafeteria/Straw.mp4",
      sentence: "Use a straw to drink your cold juice.",
      imageType: "cafeteria",
      targetStyle: { top: '55.0%', left: '29.0%', width: '4.0%', height: '10.0%' },
      points: "46.4,49.5 52.8,49.5 52.8,58.5 46.4,58.5"
    },
    // 9. 얼음 (여자아이 앞 분홍색 아이스 음료수)
    {
      wordKey: "ice",
      korean: "얼음",
      audioUrl: "/audio/cafeteria/ice.mp3",
      videoPath: "/video/cafeteria/Ice.mp4",
      sentence: "Put some ice in the glass to make it cold.",
      imageType: "cafeteria",
      targetStyle: { top: '40.0%', left: '58.0%', width: '3.0%', height: '6.0%' },
      points: "92.8,36.0 97.6,36.0 97.6,41.4 92.8,41.4"
    },
    // 10. 시럽 (왼쪽 앞 카운터에 놓인 소스 병들)
    {
      wordKey: "syrup",
      korean: "시럽",
      audioUrl: "/audio/cafeteria/syrup.mp3",
      videoPath: "/video/cafeteria/Syrup.mp4",
      sentence: "Add some sweet syrup to your drink.",
      imageType: "cafeteria",
      targetStyle: { top: '85.0%', left: '5.0%', width: '8.0%', height: '15.0%' },
      points: "8.0,76.5 20.8,76.5 20.8,90.0 8.0,90.0"
    },
    // 11. 페이스트리 (가운데 쟁반 위의 크루아상 빵 - 클릭 영역 확보)
    {
      wordKey: "pastry",
      korean: "페이스트리(빵)",
      audioUrl: "/audio/cafeteria/pastry.mp3",
      videoPath: "/video/cafeteria/Pastry.mp4",
      sentence: "The warm pastry smells delicious.",
      imageType: "cafeteria",
      targetStyle: { top: '70.0%', left: '39.0%', width: '9.0%', height: '10.0%' },
      points: "62.4,63.0 76.8,63.0 76.8,72.0 62.4,72.0"
    },
    // 12. 쿠키 (검은색 쟁반에 놓인 초코칩 쿠키들)
    {
      wordKey: "cookie",
      korean: "쿠키",
      audioUrl: "/audio/cafeteria/cookie.mp3",
      videoPath: "/video/cafeteria/Cookie.mp4",
      sentence: "I want a chocolate chip cookie.",
      imageType: "cafeteria",
      targetStyle: { top: '58.0%', left: '43.0%', width: '10.0%', height: '5.0%' },
      points: "68.8,52.2 84.8,52.2 84.8,56.7 68.8,56.7"
    },
    // 13. 케이크 (가운데 쟁반 위의 조각 케이크)
    {
      wordKey: "cake",
      korean: "케이크",
      audioUrl: "/audio/cafeteria/cake.mp3",
      videoPath: "/video/cafeteria/Cake.mp4",
      sentence: "Let's eat a slice of strawberry cake.",
      imageType: "cafeteria",
      targetStyle: { top: '65.0%', left: '49.0%', width: '7.0%', height: '9.0%' },
      points: "78.4,58.5 89.6,58.5 89.6,66.6 78.4,66.6"
    },
    // 14. 샌드위치 (오른쪽 쟁반 위의 샌드위치)
    {
      wordKey: "sandwich",
      korean: "샌드위치",
      audioUrl: "/audio/cafeteria/sandwich.mp3",
      videoPath: "/video/cafeteria/Sandwich.mp4",
      sentence: "This sandwich has fresh lettuce and tomatoes.",
      imageType: "cafeteria",
      targetStyle: { top: '61.0%', left: '59.0%', width: '10.0%', height: '8.0%' },
      points: "94.4,54.9 110.4,54.9 110.4,62.1 94.4,62.1"
    },
    // 15. 계산대(카운터) (물건이 없는 카운터 앞면 수납장 부분)
    {
      wordKey: "counter",
      korean: "계산대(카운터)",
      audioUrl: "/audio/cafeteria/counter.mp3",
      videoPath: "/video/cafeteria/Counter.mp4",
      sentence: "You can order your food at the counter.",
      imageType: "cafeteria",
      targetStyle: { top: '75.0%', left: '45.0%', width: '38.0%', height: '22.0%' },
      points: "72.0,67.5 132.8,67.5 132.8,87.3 72.0,87.3"
    },
    // 16. 메뉴판 (왼쪽 벽에 걸려있는 큰 메뉴판들)
    {
      wordKey: "menu_board",
      korean: "메뉴판",
      audioUrl: "/audio/cafeteria/menu_board.mp3",
      videoPath: "/video/cafeteria/MenuBoard.mp4",
      sentence: "Look at the menu board to choose a drink.",
      imageType: "cafeteria",
      targetStyle: { top: '0.0%', left: '0.0%', width: '40.0%', height: '20.0%' },
      points: "0.0,0.0 64.0,0.0 64.0,18.0 0.0,18.0"
    },
    // 17. 대기 번호 (남자아이가 들고 있는 번호표 종이)
    {
      wordKey: "order_number",
      korean: "대기 번호",
      audioUrl: "/audio/cafeteria/order_number.mp3",
      videoPath: "/video/cafeteria/OrderNumber.mp4",
      sentence: "Wait until they call your order number.",
      imageType: "cafeteria",
      targetStyle: { top: '30.0%', left: '38.0%', width: '6.0%', height: '10.0%' },
      points: "60.8,27.0 70.4,27.0 70.4,36.0 60.8,36.0"
    },
    // 18. 냅킨 (카운터 위의 검은색 냅킨 꽂이)
    {
      wordKey: "napkin",
      korean: "냅킨",
      audioUrl: "/audio/cafeteria/napkin.mp3",
      videoPath: "/video/cafeteria/Napkin.mp4",
      sentence: "Wipe your mouth with a napkin.",
      imageType: "cafeteria",
      targetStyle: { top: '60.0%', left: '34.0%', width: '6.0%', height: '8.0%' },
      points: "54.4,54.0 64.0,54.0 64.0,61.2 54.4,61.2"
    },
    // 19. 쟁반 (빵과 케이크를 가리지 않도록 쟁반의 비어있는 앞쪽 테두리로 축소)
    {
      wordKey: "tray",
      korean: "쟁반",
      audioUrl: "/audio/cafeteria/tray.mp3",
      videoPath: "/video/cafeteria/Tray.mp4",
      sentence: "Carry your food safely on the tray.",
      imageType: "cafeteria",
      targetStyle: { top: '78.5%', left: '42.0%', width: '13.0%', height: '5.5%' },
      points: "67.2,70.6 88.0,70.6 88.0,75.6 67.2,75.6"
    },
    // 20. 믹서기 (오른쪽 카운터에 놓인 블렌더)
    {
      wordKey: "blender",
      korean: "믹서기(블렌더)",
      audioUrl: "/audio/cafeteria/blender.mp3",
      videoPath: "/video/cafeteria/Blender.mp4",
      sentence: "The blender mixes the fruit into a smoothie.",
      imageType: "cafeteria",
      targetStyle: { top: '27.0%', left: '76.0%', width: '6.0%', height: '18.0%' },
      points: "121.6,24.3 131.2,24.3 131.2,40.5 121.6,40.5"
    },
    // 21. 휘핑크림 (믹서기 옆 파란색 크림 캔)
    {
      wordKey: "whipped_cream",
      korean: "휘핑크림",
      audioUrl: "/audio/cafeteria/whipped_cream.mp3",
      videoPath: "/video/cafeteria/WhippedCream.mp4",
      sentence: "Put some whipped cream on top of the cake.",
      imageType: "cafeteria",
      targetStyle: { top: '40.0%', left: '82.0%', width: '3.0%', height: '10.0%' },
      points: "131.2,36.0 136.0,36.0 136.0,45.0 131.2,45.0"
    },
    // 22. 차 (오른쪽 끝 차 상자 진열대)
    {
      wordKey: "tea",
      korean: "차(티)",
      audioUrl: "/audio/cafeteria/tea.mp3",
      videoPath: "/video/cafeteria/Tea.mp4",
      sentence: "My mom likes to drink green tea.",
      imageType: "cafeteria",
      targetStyle: { top: '33.0%', left: '85.0%', width: '8.0%', height: '18.0%' },
      points: "136.0,29.7 148.8,29.7 148.8,45.9 136.0,45.9"
    },
    // 23. 초콜릿 (오른쪽 끝 초콜릿 디스펜서 머신)
    {
      wordKey: "chocolate",
      korean: "초콜릿",
      audioUrl: "/audio/cafeteria/chocolate.mp3",
      videoPath: "/video/cafeteria/Chocolate.mp4",
      sentence: "I love sweet chocolate drinks.",
      imageType: "cafeteria",
      targetStyle: { top: '30.0%', left: '93.0%', width: '7.0%', height: '20.0%' },
      points: "148.8,27.0 160.0,27.0 160.0,45.0 148.8,45.0"
    },
    // 24. 영수증 (계산기(포스기)에서 나오는 영수증 종이)
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/cafeteria/receipt.mp3",
      videoPath: "/video/cafeteria/Receipt.mp4",
      sentence: "The cashier gives you a receipt after you pay.",
      imageType: "cafeteria",
      targetStyle: { top: '55.0%', left: '76.0%', width: '4.0%', height: '8.0%' },
      points: "121.6,49.5 128.0,49.5 128.0,56.7 121.6,56.7"
    },
    // 25. 손님 (주문을 기다리는 파란 옷의 남자아이)
    {
      wordKey: "customer",
      korean: "손님",
      audioUrl: "/audio/cafeteria/customer.mp3",
      videoPath: "/video/cafeteria/Customer.mp4",
      sentence: "The customer is waiting to order a drink.",
      imageType: "cafeteria",
      targetStyle: { top: '20.0%', left: '40.0%', width: '10.0%', height: '35.0%' },
      points: "64.0,18.0 80.0,18.0 80.0,49.5 64.0,49.5"
    }
  ]
};