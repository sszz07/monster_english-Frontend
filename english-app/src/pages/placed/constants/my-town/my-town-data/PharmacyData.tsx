import pharmacyImg from "@/assets/image/places/my-town/Pharmacy.png"; //[cite: 11]

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
  // "pharmacy" 타입을 추가했습니다.
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom" | "cafeteria" | "subway" | "crosswalk" | "stationery" | "supermarket" | "pharmacy"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const pharmacyData: PlaceDataType = {
  placeKey: "pharmacy",
  placeTitle: "Pharmacy Word Adventure",
  bgImage: pharmacyImg,
  masterRegions: [
    // 1. 약 (카운터 위의 진통제, 감기약 등의 약 상자들)[cite: 11]
    {
      wordKey: "medicine",
      korean: "약",
      audioUrl: "/audio/pharmacy/medicine.mp3",
      videoPath: "/video/pharmacy/Medicine.mp4",
      sentence: "Take this medicine after meals.",
      imageType: "pharmacy",
      targetStyle: { top: '70.0%', left: '15.0%', width: '15.0%', height: '15.0%' },
      points: "24.0,63.0 48.0,63.0 48.0,76.5 24.0,76.5"
    },
    // 2. 알약 (왼쪽 위 선반의 pill 상자들)[cite: 11]
    {
      wordKey: "pill",
      korean: "알약",
      audioUrl: "/audio/pharmacy/pill.mp3",
      videoPath: "/video/pharmacy/Pill.mp4",
      sentence: "Swallow the pill with a glass of water.",
      imageType: "pharmacy",
      targetStyle: { top: '5.0%', left: '5.0%', width: '8.0%', height: '10.0%' },
      points: "8.0,4.5 20.8,4.5 20.8,13.5 8.0,13.5"
    },
    // 3. 정제/알약 (왼쪽 선반의 tablet 상자들)[cite: 11]
    {
      wordKey: "tablet",
      korean: "정제(알약)",
      audioUrl: "/audio/pharmacy/tablet.mp3",
      videoPath: "/video/pharmacy/Tablet.mp4",
      sentence: "The doctor prescribed a tablet for my fever.",
      imageType: "pharmacy",
      targetStyle: { top: '20.0%', left: '5.0%', width: '10.0%', height: '10.0%' },
      points: "8.0,18.0 24.0,18.0 24.0,27.0 8.0,27.0"
    },
    // 4. 시럽 (왼쪽 중간 선반의 syrup 갈색 병들)[cite: 11]
    {
      wordKey: "syrup",
      korean: "시럽",
      audioUrl: "/audio/pharmacy/syrup.mp3",
      videoPath: "/video/pharmacy/Syrup.mp4",
      sentence: "Drink the strawberry syrup for your cough.",
      imageType: "pharmacy",
      targetStyle: { top: '35.0%', left: '5.0%', width: '12.0%', height: '10.0%' },
      points: "8.0,31.5 27.2,31.5 27.2,40.5 8.0,40.5"
    },
    // 5. 붕대/반창고 (왼쪽 아래 선반의 bandage 상자)[cite: 11]
    {
      wordKey: "bandage",
      korean: "붕대(반창고)",
      audioUrl: "/audio/pharmacy/bandage.mp3",
      videoPath: "/video/pharmacy/Bandage.mp4",
      sentence: "Put a bandage on your cut.",
      imageType: "pharmacy",
      targetStyle: { top: '50.0%', left: '15.0%', width: '6.0%', height: '10.0%' },
      points: "24.0,45.0 33.6,45.0 33.6,54.0 24.0,54.0"
    },
    // 6. 연고 (계산대 아래 선반의 연고/크림 상자)[cite: 11]
    {
      wordKey: "ointment",
      korean: "연고",
      audioUrl: "/audio/pharmacy/ointment.mp3",
      videoPath: "/video/pharmacy/Ointment.mp4",
      sentence: "Apply this ointment to heal the burn.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '60.0%', width: '6.0%', height: '10.0%' },
      points: "96.0,76.5 105.6,76.5 105.6,85.5 96.0,85.5"
    },
    // 7. 비타민 (카운터 위 vitamins 상자/통)[cite: 11]
    {
      wordKey: "vitamins",
      korean: "비타민",
      audioUrl: "/audio/pharmacy/vitamins.mp3",
      videoPath: "/video/pharmacy/Vitamins.mp4",
      sentence: "Vitamins help you stay healthy and strong.",
      imageType: "pharmacy",
      targetStyle: { top: '75.0%', left: '25.0%', width: '8.0%', height: '8.0%' },
      points: "40.0,67.5 52.8,67.5 52.8,74.7 40.0,74.7"
    },
    // 8. 처방전 (몬스터 약사가 들고 있는 책/종이)[cite: 11]
    {
      wordKey: "prescription",
      korean: "처방전",
      audioUrl: "/audio/pharmacy/prescription.mp3",
      videoPath: "/video/pharmacy/Prescription.mp4",
      sentence: "Give the prescription to the pharmacist.",
      imageType: "pharmacy",
      targetStyle: { top: '45.0%', left: '32.0%', width: '15.0%', height: '15.0%' },
      points: "51.2,40.5 75.2,40.5 75.2,54.0 51.2,54.0"
    },
    // 9. 약사 (가운데 서 있는 주황색 몬스터 약사)[cite: 11]
    {
      wordKey: "pharmacist",
      korean: "약사",
      audioUrl: "/audio/pharmacy/pharmacist.mp3",
      videoPath: "/video/pharmacy/Pharmacist.mp4",
      sentence: "The pharmacist explains how to take the medicine.",
      imageType: "pharmacy",
      targetStyle: { top: '15.0%', left: '25.0%', width: '20.0%', height: '50.0%' },
      points: "40.0,13.5 72.0,13.5 72.0,58.5 40.0,58.5"
    },
    // 10. 계산대 (약사와 금전등록기가 있는 나무 테이블)[cite: 11]
    {
      wordKey: "counter",
      korean: "계산대(카운터)",
      audioUrl: "/audio/pharmacy/counter.mp3",
      videoPath: "/video/pharmacy/Counter.mp4",
      sentence: "Please pay at the pharmacy counter.",
      imageType: "pharmacy",
      targetStyle: { top: '55.0%', left: '0.0%', width: '80.0%', height: '45.0%' },
      points: "0.0,49.5 128.0,49.5 128.0,90.0 0.0,90.0"
    },
    // 11. 영수증 (금전등록기에서 나온 하얀 종이)[cite: 11]
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/pharmacy/receipt.mp3",
      videoPath: "/video/pharmacy/Receipt.mp4",
      sentence: "Here is your receipt and change.",
      imageType: "pharmacy",
      targetStyle: { top: '55.0%', left: '62.0%', width: '3.0%', height: '6.0%' },
      points: "99.2,49.5 104.0,49.5 104.0,54.9 99.2,54.9"
    },
    // 12. 휴지 (카운터 왼쪽의 하얀 휴지갑들)[cite: 11]
    {
      wordKey: "tissue",
      korean: "휴지",
      audioUrl: "/audio/pharmacy/tissue.mp3",
      videoPath: "/video/pharmacy/Tissue.mp4",
      sentence: "Blow your nose with a soft tissue.",
      imageType: "pharmacy",
      targetStyle: { top: '65.0%', left: '5.0%', width: '10.0%', height: '10.0%' },
      points: "8.0,58.5 24.0,58.5 24.0,67.5 8.0,67.5"
    },
    // 13. 마스크 (선반 우측의 파란색/초록색 방역용품 상자)[cite: 11]
    {
      wordKey: "mask",
      korean: "마스크",
      audioUrl: "/audio/pharmacy/mask.mp3",
      videoPath: "/video/pharmacy/Mask.mp4",
      sentence: "Wear a mask to protect yourself from dust.",
      imageType: "pharmacy",
      targetStyle: { top: '30.0%', left: '55.0%', width: '5.0%', height: '8.0%' },
      points: "88.0,27.0 96.0,27.0 96.0,34.2 88.0,34.2"
    },
    // 14. 손소독제 (비타민 옆의 동그란 펌프형 통)[cite: 11]
    {
      wordKey: "sanitizer",
      korean: "손소독제",
      audioUrl: "/audio/pharmacy/sanitizer.mp3",
      videoPath: "/video/pharmacy/Sanitizer.mp4",
      sentence: "Use hand sanitizer to clean your hands.",
      imageType: "pharmacy",
      targetStyle: { top: '75.0%', left: '35.0%', width: '5.0%', height: '8.0%' },
      points: "56.0,67.5 64.0,67.5 64.0,74.7 56.0,74.7"
    },
    // 15. 체온계 (오른쪽 여자 손님이 들고 있는 물건)[cite: 11]
    {
      wordKey: "thermometer",
      korean: "체온계",
      audioUrl: "/audio/pharmacy/thermometer.mp3",
      videoPath: "/video/pharmacy/Thermometer.mp4",
      sentence: "The thermometer checks if you have a fever.",
      imageType: "pharmacy",
      targetStyle: { top: '45.0%', left: '80.0%', width: '4.0%', height: '5.0%' },
      points: "128.0,40.5 134.4,40.5 134.4,45.0 128.0,45.0"
    },
    // 16. 면봉 (왼쪽 아래 선반의 cotton 상자)[cite: 11]
    {
      wordKey: "cotton_swab",
      korean: "면봉",
      audioUrl: "/audio/pharmacy/cotton_swab.mp3",
      videoPath: "/video/pharmacy/CottonSwab.mp4",
      sentence: "Use a cotton swab gently.",
      imageType: "pharmacy",
      targetStyle: { top: '50.0%', left: '25.0%', width: '6.0%', height: '10.0%' },
      points: "40.0,45.0 49.6,45.0 49.6,54.0 40.0,54.0"
    },
    // 17. 진통제 (왼쪽 맨 앞 카운터의 painkiller 상자)[cite: 11]
    {
      wordKey: "painkiller",
      korean: "진통제",
      audioUrl: "/audio/pharmacy/painkiller.mp3",
      videoPath: "/video/pharmacy/Painkiller.mp4",
      sentence: "Take a painkiller if your head hurts.",
      imageType: "pharmacy",
      targetStyle: { top: '75.0%', left: '3.0%', width: '8.0%', height: '12.0%' },
      points: "4.8,67.5 17.6,67.5 17.6,78.3 4.8,78.3"
    },
    // 18. 감기약 (진통제 옆 파란색 cold medicine 상자)[cite: 11]
    {
      wordKey: "cold_medicine",
      korean: "감기약",
      audioUrl: "/audio/pharmacy/cold_medicine.mp3",
      videoPath: "/video/pharmacy/ColdMedicine.mp4",
      sentence: "This cold medicine helps stop your runny nose.",
      imageType: "pharmacy",
      targetStyle: { top: '72.0%', left: '18.0%', width: '8.0%', height: '12.0%' },
      points: "28.8,64.8 41.6,64.8 41.6,75.6 28.8,75.6"
    },
    // 19. 기침 사탕/목캔디 (카운터 하단 진열장의 작은 상자들)[cite: 11]
    {
      wordKey: "cough_drop",
      korean: "기침 사탕(목캔디)",
      audioUrl: "/audio/pharmacy/cough_drop.mp3",
      videoPath: "/video/pharmacy/CoughDrop.mp4",
      sentence: "Suck on a cough drop to soothe your throat.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '50.0%', width: '6.0%', height: '8.0%' },
      points: "80.0,76.5 89.6,76.5 89.6,83.7 80.0,83.7"
    },
    // 20. 크림 (카운터 하단 우측 선반의 cream 상자)[cite: 11]
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: "/audio/pharmacy/cream.mp3",
      videoPath: "/video/pharmacy/Cream.mp4",
      sentence: "Rub the cream on your dry skin.",
      imageType: "pharmacy",
      targetStyle: { top: '80.0%', left: '65.0%', width: '5.0%', height: '10.0%' },
      points: "104.0,72.0 112.0,72.0 112.0,81.0 104.0,81.0"
    },
    // 21. 알레르기 약 (약사 뒤쪽 선반의 초록색 상자)[cite: 11]
    {
      wordKey: "allergy",
      korean: "알레르기 약",
      audioUrl: "/audio/pharmacy/allergy.mp3",
      videoPath: "/video/pharmacy/Allergy.mp4",
      sentence: "Take allergy medicine when you sneeze a lot.",
      imageType: "pharmacy",
      targetStyle: { top: '20.0%', left: '55.0%', width: '5.0%', height: '8.0%' },
      points: "88.0,18.0 96.0,18.0 96.0,25.2 88.0,25.2"
    },
    // 22. 병 (선반 맨 위쪽의 갈색 시럽 병들)[cite: 11]
    {
      wordKey: "bottle",
      korean: "병",
      audioUrl: "/audio/pharmacy/bottle.mp3",
      videoPath: "/video/pharmacy/Bottle.mp4",
      sentence: "Shake the bottle before opening it.",
      imageType: "pharmacy",
      targetStyle: { top: '5.0%', left: '25.0%', width: '15.0%', height: '10.0%' },
      points: "40.0,4.5 64.0,4.5 64.0,13.5 40.0,13.5"
    },
    // 23. 포장/상자 (카운터 아래 선반의 다채로운 tablet 상자들)[cite: 11]
    {
      wordKey: "package",
      korean: "포장(상자)",
      audioUrl: "/audio/pharmacy/package.mp3",
      videoPath: "/video/pharmacy/Package.mp4",
      sentence: "Open the package to get the pills.",
      imageType: "pharmacy",
      targetStyle: { top: '88.0%', left: '40.0%', width: '8.0%', height: '10.0%' },
      points: "64.0,79.2 76.8,79.2 76.8,88.2 64.0,88.2"
    },
    // 24. 라벨/상표 (painkiller 상자 전면의 하얀색 라벨 스티커)[cite: 11]
    {
      wordKey: "label",
      korean: "라벨(상표)",
      audioUrl: "/audio/pharmacy/label.mp3",
      videoPath: "/video/pharmacy/Label.mp4",
      sentence: "Read the label carefully for instructions.",
      imageType: "pharmacy",
      targetStyle: { top: '78.0%', left: '4.0%', width: '6.0%', height: '5.0%' },
      points: "6.4,70.2 16.0,70.2 16.0,74.7 6.4,74.7"
    },
    // 25. 선반 (약사 뒤쪽에 약이 가득 찬 커다란 나무 진열장)[cite: 11]
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: "/audio/pharmacy/shelf.mp3",
      videoPath: "/video/pharmacy/Shelf.mp4",
      sentence: "There are many medicines on the shelf.",
      imageType: "pharmacy",
      targetStyle: { top: '0.0%', left: '0.0%', width: '60.0%', height: '60.0%' },
      points: "0.0,0.0 96.0,0.0 96.0,54.0 0.0,54.0"
    }
  ]
};