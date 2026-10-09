import pharmacyImg from "@/assets/image/places/my-town/Pharmacy.png";

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
    // 1. 약 (개별 약들과 겹치지 않도록 진통제 위쪽 빈 카운터 공간으로 배치)
    {
      wordKey: "medicine",
      korean: "약",
      audioUrl: "/audio/pharmacy/medicine.mp3",
      videoPath: "/video/pharmacy/Medicine.mp4",
      sentence: "Take this medicine after meals.",
      imageType: "pharmacy",
      targetStyle: { top: '62.0%', left: '14.0%', width: '8.0%', height: '8.0%' },
      points: "22.4,55.8 35.2,55.8 35.2,63.0 22.4,63.0"
    },
    // 2. 알약
    {
      wordKey: "pill",
      korean: "알약",
      audioUrl: "/audio/pharmacy/pill.mp3",
      videoPath: "/video/pharmacy/Pill.mp4",
      sentence: "Swallow the pill with a glass of water.",
      imageType: "pharmacy",
      targetStyle: { top: '5.0%', left: '5.0%', width: '8.0%', height: '8.0%' },
      points: "8.0,4.5 20.8,4.5 20.8,11.7 8.0,11.7"
    },
    // 3. 정제/알약
    {
      wordKey: "tablet",
      korean: "정제(알약)",
      audioUrl: "/audio/pharmacy/tablet.mp3",
      videoPath: "/video/pharmacy/Tablet.mp4",
      sentence: "The doctor prescribed a tablet for my fever.",
      imageType: "pharmacy",
      targetStyle: { top: '18.0%', left: '5.0%', width: '8.0%', height: '8.0%' },
      points: "8.0,16.2 20.8,16.2 20.8,23.4 8.0,23.4"
    },
    // 4. 시럽
    {
      wordKey: "syrup",
      korean: "시럽",
      audioUrl: "/audio/pharmacy/syrup.mp3",
      videoPath: "/video/pharmacy/Syrup.mp4",
      sentence: "Drink the strawberry syrup for your cough.",
      imageType: "pharmacy",
      targetStyle: { top: '32.0%', left: '5.0%', width: '8.0%', height: '8.0%' },
      points: "8.0,28.8 20.8,28.8 20.8,36.0 8.0,36.0"
    },
    // 5. 붕대/반창고
    {
      wordKey: "bandage",
      korean: "붕대(반창고)",
      audioUrl: "/audio/pharmacy/bandage.mp3",
      videoPath: "/video/pharmacy/Bandage.mp4",
      sentence: "Put a bandage on your cut.",
      imageType: "pharmacy",
      targetStyle: { top: '48.0%', left: '15.0%', width: '6.0%', height: '6.0%' },
      points: "24.0,43.2 33.6,43.2 33.6,48.6 24.0,48.6"
    },
    // 6. 연고
    {
      wordKey: "ointment",
      korean: "연고",
      audioUrl: "/audio/pharmacy/ointment.mp3",
      videoPath: "/video/pharmacy/Ointment.mp4",
      sentence: "Apply this ointment to heal the burn.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '58.0%', width: '6.0%', height: '8.0%' },
      points: "92.8,76.5 102.4,76.5 102.4,83.7 92.8,83.7"
    },
    // 7. 비타민 (수정: 본래의 위치인 카운터 중앙 좌측(left: 25%)으로 복구)
    {
      wordKey: "vitamins",
      korean: "비타민",
      audioUrl: "/audio/pharmacy/vitamins.mp3",
      videoPath: "/video/pharmacy/Vitamins.mp4",
      sentence: "Vitamins help you stay healthy and strong.",
      imageType: "pharmacy",
      targetStyle: { top: '72.0%', left: '25.0%', width: '8.0%', height: '8.0%' },
      points: "40.0,64.8 52.8,64.8 52.8,72.0 40.0,72.0"
    },
    // 8. 처방전
    {
      wordKey: "prescription",
      korean: "처방전",
      audioUrl: "/audio/pharmacy/prescription.mp3",
      videoPath: "/video/pharmacy/Prescription.mp4",
      sentence: "Give the prescription to the pharmacist.",
      imageType: "pharmacy",
      targetStyle: { top: '45.0%', left: '45.0%', width: '6.0%', height: '6.0%' },
      points: "72.0,40.5 81.6,40.5 81.6,45.9 72.0,45.9"
    },
    // 9. 약사
    {
      wordKey: "pharmacist",
      korean: "약사",
      audioUrl: "/audio/pharmacy/pharmacist.mp3",
      videoPath: "/video/pharmacy/Pharmacist.mp4",
      sentence: "The pharmacist explains how to take the medicine.",
      imageType: "pharmacy",
      targetStyle: { top: '15.0%', left: '35.0%', width: '8.0%', height: '12.0%' },
      points: "56.0,13.5 68.8,13.5 68.8,24.3 56.0,24.3"
    },
    // 10. 계산대
    {
      wordKey: "counter",
      korean: "계산대(카운터)",
      audioUrl: "/audio/pharmacy/counter.mp3",
      videoPath: "/video/pharmacy/Counter.mp4",
      sentence: "Please pay at the pharmacy counter.",
      imageType: "pharmacy",
      targetStyle: { top: '60.0%', left: '60.0%', width: '10.0%', height: '10.0%' },
      points: "96.0,54.0 112.0,54.0 112.0,63.0 96.0,63.0"
    },
    // 11. 영수증
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/pharmacy/receipt.mp3",
      videoPath: "/video/pharmacy/Receipt.mp4",
      sentence: "Here is your receipt and change.",
      imageType: "pharmacy",
      targetStyle: { top: '52.0%', left: '62.0%', width: '4.0%', height: '6.0%' },
      points: "99.2,46.8 105.6,46.8 105.6,52.2 99.2,52.2"
    },
    // 12. 휴지 (좌측 상단으로 겹치지 않게 조절)
    {
      wordKey: "tissue",
      korean: "휴지",
      audioUrl: "/audio/pharmacy/tissue.mp3",
      videoPath: "/video/pharmacy/Tissue.mp4",
      sentence: "Blow your nose with a soft tissue.",
      imageType: "pharmacy",
      targetStyle: { top: '62.0%', left: '4.0%', width: '8.0%', height: '8.0%' },
      points: "6.4,55.8 19.2,55.8 19.2,63.0 6.4,63.0"
    },
    // 13. 마스크
    {
      wordKey: "mask",
      korean: "마스크",
      audioUrl: "/audio/pharmacy/mask.mp3",
      videoPath: "/video/pharmacy/Mask.mp4",
      sentence: "Wear a mask to protect yourself from dust.",
      imageType: "pharmacy",
      targetStyle: { top: '32.0%', left: '55.0%', width: '6.0%', height: '6.0%' },
      points: "88.0,28.8 97.6,28.8 97.6,34.2 88.0,34.2"
    },
    // 14. 손소독제 (비타민 우측으로 명확하게 분리)
    {
      wordKey: "sanitizer",
      korean: "손소독제",
      audioUrl: "/audio/pharmacy/sanitizer.mp3",
      videoPath: "/video/pharmacy/Sanitizer.mp4",
      sentence: "Use hand sanitizer to clean your hands.",
      imageType: "pharmacy",
      targetStyle: { top: '72.0%', left: '35.0%', width: '8.0%', height: '8.0%' },
      points: "56.0,64.8 68.8,64.8 68.8,72.0 56.0,72.0"
    },
    // 15. 체온계
    {
      wordKey: "thermometer",
      korean: "체온계",
      audioUrl: "/audio/pharmacy/thermometer.mp3",
      videoPath: "/video/pharmacy/Thermometer.mp4",
      sentence: "The thermometer checks if you have a fever.",
      imageType: "pharmacy",
      targetStyle: { top: '45.0%', left: '80.0%', width: '8.0%', height: '8.0%' },
      points: "128.0,40.5 140.8,40.5 140.8,47.7 128.0,47.7"
    },
    // 16. 면봉
    {
      wordKey: "cotton_swab",
      korean: "면봉",
      audioUrl: "/audio/pharmacy/cotton_swab.mp3",
      videoPath: "/video/pharmacy/CottonSwab.mp4",
      sentence: "Use a cotton swab gently.",
      imageType: "pharmacy",
      targetStyle: { top: '48.0%', left: '25.0%', width: '6.0%', height: '6.0%' },
      points: "40.0,43.2 49.6,43.2 49.6,48.6 40.0,48.6"
    },
    // 17. 진통제 (좌측 정렬 유지)
    {
      wordKey: "painkiller",
      korean: "진통제",
      audioUrl: "/audio/pharmacy/painkiller.mp3",
      videoPath: "/video/pharmacy/Painkiller.mp4",
      sentence: "Take a painkiller if your head hurts.",
      imageType: "pharmacy",
      targetStyle: { top: '72.0%', left: '4.0%', width: '8.0%', height: '8.0%' },
      points: "6.4,64.8 19.2,64.8 19.2,72.0 6.4,72.0"
    },
    // 18. 감기약 (진통제와 비타민 사이)
    {
      wordKey: "cold_medicine",
      korean: "감기약",
      audioUrl: "/audio/pharmacy/cold_medicine.mp3",
      videoPath: "/video/pharmacy/ColdMedicine.mp4",
      sentence: "This cold medicine helps stop your runny nose.",
      imageType: "pharmacy",
      targetStyle: { top: '72.0%', left: '14.0%', width: '8.0%', height: '8.0%' },
      points: "22.4,64.8 35.2,64.8 35.2,72.0 22.4,72.0"
    },
    // 19. 기침 사탕/목캔디
    {
      wordKey: "cough_drop",
      korean: "기침 사탕(목캔디)",
      audioUrl: "/audio/pharmacy/cough_drop.mp3",
      videoPath: "/video/pharmacy/CoughDrop.mp4",
      sentence: "Suck on a cough drop to soothe your throat.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '48.0%', width: '6.0%', height: '8.0%' },
      points: "76.8,76.5 86.4,76.5 86.4,83.7 76.8,83.7"
    },
    // 20. 크림
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: "/audio/pharmacy/cream.mp3",
      videoPath: "/video/pharmacy/Cream.mp4",
      sentence: "Rub the cream on your dry skin.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '68.0%', width: '8.0%', height: '8.0%' },
      points: "108.8,76.5 121.6,76.5 121.6,83.7 108.8,83.7"
    },
    // 21. 알레르기 약
    {
      wordKey: "allergy",
      korean: "알레르기 약",
      audioUrl: "/audio/pharmacy/allergy.mp3",
      videoPath: "/video/pharmacy/Allergy.mp4",
      sentence: "Take allergy medicine when you sneeze a lot.",
      imageType: "pharmacy",
      targetStyle: { top: '20.0%', left: '55.0%', width: '6.0%', height: '6.0%' },
      points: "88.0,18.0 97.6,18.0 97.6,23.4 88.0,23.4"
    },
    // 22. 병
    {
      wordKey: "bottle",
      korean: "병",
      audioUrl: "/audio/pharmacy/bottle.mp3",
      videoPath: "/video/pharmacy/Bottle.mp4",
      sentence: "Shake the bottle before opening it.",
      imageType: "pharmacy",
      targetStyle: { top: '5.0%', left: '20.0%', width: '8.0%', height: '8.0%' },
      points: "32.0,4.5 44.8,4.5 44.8,11.7 32.0,11.7"
    },
    // 23. 포장/상자
    {
      wordKey: "package",
      korean: "포장(상자)",
      audioUrl: "/audio/pharmacy/package.mp3",
      videoPath: "/video/pharmacy/Package.mp4",
      sentence: "Open the package to get the pills.",
      imageType: "pharmacy",
      targetStyle: { top: '85.0%', left: '35.0%', width: '8.0%', height: '8.0%' },
      points: "56.0,76.5 68.8,76.5 68.8,83.7 56.0,83.7"
    },
    // 24. 라벨/상표 (진통제와 분리되도록 하단 배치)
    {
      wordKey: "label",
      korean: "라벨(상표)",
      audioUrl: "/audio/pharmacy/label.mp3",
      videoPath: "/video/pharmacy/Label.mp4",
      sentence: "Read the label carefully for instructions.",
      imageType: "pharmacy",
      targetStyle: { top: '82.0%', left: '4.0%', width: '8.0%', height: '6.0%' },
      points: "6.4,73.8 19.2,73.8 19.2,79.2 6.4,79.2"
    },
    // 25. 선반
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: "/audio/pharmacy/shelf.mp3",
      videoPath: "/video/pharmacy/Shelf.mp4",
      sentence: "There are many medicines on the shelf.",
      imageType: "pharmacy",
      targetStyle: { top: '5.0%', left: '45.0%', width: '8.0%', height: '8.0%' },
      points: "72.0,4.5 84.8,4.5 84.8,11.7 72.0,11.7"
    }
  ]
};