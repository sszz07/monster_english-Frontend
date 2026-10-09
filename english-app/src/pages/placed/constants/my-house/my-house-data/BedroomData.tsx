import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const bedroomImg = ThemeImage.bedroom;
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
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const bedroomData: PlaceDataType = {
  placeKey: "bedroom",
  placeTitle: "Bedroom Word Adventure",
  bgImage: bedroomImg,
  masterRegions: [
    // 1. 침대 프레임
    {
      wordKey: "bed_frame",
      korean: "침대 프레임",
      audioUrl: "/audio/bedroom/bed_frame.mp3",
      videoPath: "/video/bedroom/bed_frame.mp4",
      sentence: "The bed frame is made of wood.",
      targetStyle: { top: '76.0%', left: '35.0%', width: '25.0%', height: '10.0%' },
      points: "56.0,68.4 96.0,68.4 96.0,77.4 56.0,77.4"
    },
    // 2. 매트리스 (침대프레임, 이불과 겹치지 않게 측면으로 분리)
    {
      wordKey: "mattress",
      korean: "매트리스",
      audioUrl: "/audio/bedroom/mattress.mp3",
      videoPath: "/video/bedroom/mattress.mp4",
      sentence: "The mattress is soft and cozy.",
      targetStyle: { top: '60.0%', left: '66.0%', width: '5.0%', height: '5.0%' },
      points: "105.6,54.0 113.6,54.0 113.6,58.5 105.6,58.5"
    },
    // 3. 침대 헤드보드
    {
      wordKey: "headboard",
      korean: "침대 헤드보드",
      audioUrl: "/audio/bedroom/headboard.mp3",
      videoPath: "/video/bedroom/headboard.mp4",
      sentence: "The headboard is behind the pillows.",
      targetStyle: { top: '43.0%', left: '50.0%', width: '15.0%', height: '5.0%' },
      points: "80.0,38.7 104.0,38.7 104.0,43.2 80.0,43.2"
    },
    // 4. 베개
    {
      wordKey: "pillow",
      korean: "베개",
      audioUrl: "/audio/bedroom/pillow.mp3",
      videoPath: "/video/bedroom/pillow.mp4",
      sentence: "I rest my head on the pillow.",
      targetStyle: { top: '50.0%', left: '52.0%', width: '8.0%', height: '5.0%' },
      points: "83.2,45.0 96.0,45.0 96.0,49.5 83.2,49.5"
    },
    // 5. 침대 시트
    {
      wordKey: "bedsheet",
      korean: "침대 시트",
      audioUrl: "/audio/bedroom/bedsheet.mp3",
      videoPath: "/video/bedroom/bedsheet.mp4",
      sentence: "The bedsheet is clean.",
      targetStyle: { top: '57.0%', left: '45.0%', width: '8.0%', height: '5.0%' },
      points: "72.0,51.3 84.8,51.3 84.8,55.8 72.0,55.8"
    },
    // 6. 이불
    {
      wordKey: "blanket",
      korean: "이불",
      audioUrl: "/audio/bedroom/blanket.mp3",
      videoPath: "/video/bedroom/blanket.mp4",
      sentence: "The blanket keeps me warm.",
      targetStyle: { top: '64.0%', left: '40.0%', width: '20.0%', height: '10.0%' },
      points: "64.0,57.6 96.0,57.6 96.0,66.6 64.0,66.6"
    },
    // 7. 협탁
    {
      wordKey: "bedside_table",
      korean: "협탁",
      audioUrl: "/audio/bedroom/bedside_table.mp3",
      videoPath: "/video/bedroom/bedside_table.mp4",
      sentence: "The clock is on the bedside table.",
      targetStyle: { top: '68.0%', left: '72.0%', width: '10.0%', height: '12.0%' },
      points: "115.2,61.2 131.2,61.2 131.2,72.0 115.2,72.0"
    },
    // 8. 옷장
    {
      wordKey: "closet",
      korean: "옷장",
      audioUrl: "/audio/bedroom/closet.mp3",
      videoPath: "/video/bedroom/closet.mp4",
      sentence: "My clothes are in the closet.",
      targetStyle: { top: '10.0%', left: '30.0%', width: '10.0%', height: '8.0%' },
      points: "48.0,9.0 64.0,9.0 64.0,16.2 48.0,16.2"
    },
    // 9. 서랍장
    {
      wordKey: "dresser",
      korean: "서랍장",
      audioUrl: "/audio/bedroom/dresser.mp3",
      videoPath: "/video/bedroom/dresser.mp4",
      sentence: "I put my socks in the dresser.",
      targetStyle: { top: '60.0%', left: '5.0%', width: '12.0%', height: '15.0%' },
      points: "8.0,54.0 27.2,54.0 27.2,67.5 8.0,67.5"
    },
    // 10. 화장대
    {
      wordKey: "vanity_table",
      korean: "화장대",
      audioUrl: "/audio/bedroom/vanity_table.mp3",
      videoPath: "/video/bedroom/vanity_table.mp4",
      sentence: "There is a mirror on the vanity table.",
      targetStyle: { top: '36.0%', left: '42.0%', width: '8.0%', height: '8.0%' },
      points: "67.2,32.4 80.0,32.4 80.0,39.6 67.2,39.6"
    },
    // 11. 옷걸이
    {
      wordKey: "hanger",
      korean: "옷걸이",
      audioUrl: "/audio/bedroom/hanger.mp3",
      videoPath: "/video/bedroom/hanger.mp4",
      sentence: "Hang your coat on the hanger.",
      targetStyle: { top: '22.0%', left: '20.0%', width: '4.0%', height: '4.0%' },
      points: "32.0,19.8 38.4,19.8 38.4,23.4 32.0,23.4"
    },
    // 12. 빨래 바구니
    {
      wordKey: "laundry_hamper",
      korean: "빨래 바구니",
      audioUrl: "/audio/bedroom/laundry_hamper.mp3",
      videoPath: "/video/bedroom/laundry_hamper.mp4",
      sentence: "Put dirty clothes in the laundry hamper.",
      targetStyle: { top: '65.0%', left: '23.0%', width: '6.0%', height: '12.0%' },
      points: "36.8,58.5 46.4,58.5 46.4,69.3 36.8,69.3"
    },
    // 13. 독서등 (협탁 위)
    {
      wordKey: "reading_lamp",
      korean: "독서등",
      audioUrl: "/audio/bedroom/reading_lamp.mp3",
      videoPath: "/video/bedroom/reading_lamp.mp4",
      sentence: "The reading lamp gives off warm light.",
      targetStyle: { top: '48.0%', left: '76.0%', width: '5.0%', height: '8.0%' },
      points: "121.6,43.2 129.6,43.2 129.6,50.4 121.6,50.4"
    },
    // 14. 취침등
    {
      wordKey: "night_light",
      korean: "취침등",
      audioUrl: "/audio/bedroom/night_light.mp3",
      videoPath: "/video/bedroom/night_light.mp4",
      sentence: "The night light is softly glowing.",
      targetStyle: { top: '57.0%', left: '72.0%', width: '3.0%', height: '4.0%' },
      points: "115.2,51.3 120.0,51.3 120.0,54.9 115.2,54.9"
    },
    // 15. 블라인드
    {
      wordKey: "blind",
      korean: "블라인드",
      audioUrl: "/audio/bedroom/blind.mp3",
      videoPath: "/video/bedroom/blind.mp4",
      sentence: "Pull down the blind at night.",
      targetStyle: { top: '10.0%', left: '60.0%', width: '15.0%', height: '15.0%' },
      points: "96.0,9.0 120.0,9.0 120.0,22.5 96.0,22.5"
    },
    // 16. 알람 시계
    {
      wordKey: "alarm_clock",
      korean: "알람 시계",
      audioUrl: "/audio/bedroom/alarm_clock.mp3",
      videoPath: "/video/bedroom/alarm_clock.mp4",
      sentence: "The alarm clock rings in the morning.",
      targetStyle: { top: '57.0%', left: '76.0%', width: '4.0%', height: '4.0%' },
      points: "121.6,51.3 128.0,51.3 128.0,54.9 121.6,54.9"
    },
    // 17. 실내화/슬리퍼
    {
      wordKey: "slippers",
      korean: "실내화/슬리퍼",
      audioUrl: "/audio/bedroom/slippers.mp3",
      videoPath: "/video/bedroom/slippers.mp4",
      sentence: "Wear slippers on the cold floor.",
      targetStyle: { top: '85.0%', left: '65.0%', width: '8.0%', height: '6.0%' },
      points: "104.0,76.5 116.8,76.5 116.8,81.9 104.0,81.9"
    },
    // 18. 가습기
    {
      wordKey: "humidifier",
      korean: "가습기",
      audioUrl: "/audio/bedroom/humidifier.mp3",
      videoPath: "/video/bedroom/humidifier.mp4",
      sentence: "The humidifier keeps the air moist.",
      targetStyle: { top: '20.0%', left: '80.0%', width: '6.0%', height: '8.0%' },
      points: "128.0,18.0 137.6,18.0 137.6,25.2 128.0,25.2"
    },
    // 19. 보석함
    {
      wordKey: "jewelry_box",
      korean: "보석함",
      audioUrl: "/audio/bedroom/jewelry_box.mp3",
      videoPath: "/video/bedroom/jewelry_box.mp4",
      sentence: "Rings are in the jewelry box.",
      targetStyle: { top: '45.0%', left: '45.0%', width: '4.0%', height: '4.0%' },
      points: "72.0,40.5 78.4,40.5 78.4,44.1 72.0,44.1"
    },
    // 20. 전신 거울
    {
      wordKey: "full_length_mirror",
      korean: "전신 거울",
      audioUrl: "/audio/bedroom/full_length_mirror.mp3",
      videoPath: "/video/bedroom/full_length_mirror.mp4",
      sentence: "I check my clothes in the full-length mirror.",
      targetStyle: { top: '30.0%', left: '86.0%', width: '6.0%', height: '35.0%' },
      points: "137.6,27.0 147.2,27.0 147.2,58.5 137.6,58.5"
    },
    // 21. 안대 (수정: 소년의 얼굴/눈 위치로 정확히 변경)
    {
      wordKey: "eye_mask",
      korean: "안대",
      audioUrl: "/audio/bedroom/eye_mask.mp3",
      videoPath: "/video/bedroom/eye_mask.mp4",
      sentence: "I wear an eye mask to sleep well.",
      targetStyle: { top: '52.0%', left: '64.0%', width: '4.0%', height: '4.0%' },
      points: "102.4,46.8 108.8,46.8 108.8,50.4 102.4,50.4"
    },
    // 22. 셔츠
    {
      wordKey: "shirt",
      korean: "셔츠",
      audioUrl: "/audio/bedroom/shirt.mp3",
      videoPath: "/video/bedroom/shirt.mp4",
      sentence: "A white shirt is hanging in the closet.",
      targetStyle: { top: '28.0%', left: '18.0%', width: '4.0%', height: '12.0%' },
      points: "28.8,25.2 35.2,25.2 35.2,36.0 28.8,36.0"
    },
    // 23. 청바지 (수정: 셔츠 옆쪽의 옷장 내부 실제 청바지 위치로 변경)
    {
      wordKey: "jeans",
      korean: "청바지",
      audioUrl: "/audio/bedroom/jeans.mp3",
      videoPath: "/video/bedroom/jeans.mp4",
      sentence: "Blue jeans hang beside the shirt.",
      targetStyle: { top: '28.0%', left: '23.0%', width: '4.0%', height: '12.0%' },
      points: "36.8,25.2 43.2,25.2 43.2,36.0 36.8,36.0"
    },
    // 24. 바지
    {
      wordKey: "pants",
      korean: "바지",
      audioUrl: "/audio/bedroom/pants.mp3",
      videoPath: "/video/bedroom/pants.mp4",
      sentence: "Folded pants are on the stack.",
      targetStyle: { top: '80.0%', left: '14.0%', width: '8.0%', height: '10.0%' },
      points: "22.4,72.0 35.2,72.0 35.2,81.0 22.4,81.0"
    },
    // 25. 코트
    {
      wordKey: "coat",
      korean: "코트",
      audioUrl: "/audio/bedroom/coat.mp3",
      videoPath: "/video/bedroom/coat.mp4",
      sentence: "A warm coat is hanging on the rack.",
      targetStyle: { top: '35.0%', left: '94.0%', width: '5.0%', height: '30.0%' },
      points: "150.4,31.5 158.4,31.5 158.4,58.5 150.4,58.5"
    }
  ]
};