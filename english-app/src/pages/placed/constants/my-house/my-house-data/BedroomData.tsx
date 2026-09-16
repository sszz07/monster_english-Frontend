
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
    {
      wordKey: "bed_frame",
      korean: "침대 프레임",
      audioUrl: "/audio/bedroom/bed_frame.mp3",
      videoPath: "/video/bedroom/bed_frame.mp4",
      sentence: "The bed frame is made of wood.",
      targetStyle: { top: '70.0%', left: '31.5%', width: '42.0%', height: '24.0%' },
      points: "50.4,63.0 117.6,63.0 117.6,84.6 50.4,84.6"
    },
    {
      wordKey: "mattress",
      korean: "매트리스",
      audioUrl: "/audio/bedroom/mattress.mp3",
      videoPath: "/video/bedroom/mattress.mp4",
      sentence: "The mattress is soft and cozy.",
      targetStyle: { top: '60.0%', left: '33.5%', width: '40.0%', height: '18.0%' },
      points: "53.6,54.0 117.6,54.0 117.6,70.2 53.6,70.2"
    },
    {
      wordKey: "headboard",
      korean: "침대 헤드보드",
      audioUrl: "/audio/bedroom/headboard.mp3",
      videoPath: "/video/bedroom/headboard.mp4",
      sentence: "The headboard is behind the pillows.",
      targetStyle: { top: '43.5%', left: '58.5%', width: '20.5%', height: '21.0%' },
      points: "93.6,39.15 126.4,39.15 126.4,58.05 93.6,58.05"
    },
    {
      wordKey: "pillow",
      korean: "베개",
      audioUrl: "/audio/bedroom/pillow.mp3",
      videoPath: "/video/bedroom/pillow.mp4",
      sentence: "I rest my head on the pillow.",
      targetStyle: { top: '51.0%', left: '55.0%', width: '20.0%', height: '13.5%' },
      points: "88.0,45.9 120.0,45.9 120.0,58.05 88.0,58.05"
    },
    {
      wordKey: "bedsheet",
      korean: "침대 시트",
      audioUrl: "/audio/bedroom/bedsheet.mp3",
      videoPath: "/video/bedroom/bedsheet.mp4",
      sentence: "The bedsheet is clean.",
      targetStyle: { top: '55.5%', left: '34.0%', width: '38.0%', height: '12.0%' },
      points: "54.4,49.95 115.2,49.95 115.2,60.75 54.4,60.75"
    },
    {
      wordKey: "blanket",
      korean: "이불",
      audioUrl: "/audio/bedroom/blanket.mp3",
      videoPath: "/video/bedroom/blanket.mp4",
      sentence: "The blanket keeps me warm.",
      targetStyle: { top: '56.0%', left: '33.0%', width: '36.5%', height: '28.0%' },
      points: "52.8,50.4 111.2,50.4 111.2,75.6 52.8,75.6"
    },
    {
      wordKey: "bedside_table",
      korean: "협탁",
      audioUrl: "/audio/bedroom/bedside_table.mp3",
      videoPath: "/video/bedroom/bedside_table.mp4",
      sentence: "The clock is on the bedside table.",
      targetStyle: { top: '65.5%', left: '72.5%', width: '15.5%', height: '22.0%' },
      points: "116.0,58.95 140.8,58.95 140.8,78.75 116.0,78.75"
    },
    {
      wordKey: "closet",
      korean: "옷장",
      audioUrl: "/audio/bedroom/closet.mp3",
      videoPath: "/video/bedroom/closet.mp4",
      sentence: "My clothes are in the closet.",
      targetStyle: { top: '9.5%', left: '19.0%', width: '28.5%', height: '63.5%' },
      points: "30.4,8.55 76.0,8.55 76.0,65.7 30.4,65.7"
    },
    {
      wordKey: "dresser",
      korean: "서랍장",
      audioUrl: "/audio/bedroom/dresser.mp3",
      videoPath: "/video/bedroom/dresser.mp4",
      sentence: "I put my socks in the dresser.",
      targetStyle: { top: '54.0%', left: '0.5%', width: '22.5%', height: '28.5%' },
      points: "0.8,48.6 36.8,48.6 36.8,74.25 0.8,74.25"
    },
    {
      wordKey: "vanity_table",
      korean: "화장대",
      audioUrl: "/audio/bedroom/vanity_table.mp3",
      videoPath: "/video/bedroom/vanity_table.mp4",
      sentence: "There is a mirror on the vanity table.",
      targetStyle: { top: '34.0%', left: '43.5%', width: '13.5%', height: '26.0%' },
      points: "69.6,30.6 91.2,30.6 91.2,54.0 69.6,54.0"
    },
    {
      wordKey: "hanger",
      korean: "옷걸이",
      audioUrl: "/audio/bedroom/hanger.mp3",
      videoPath: "/video/bedroom/hanger.mp4",
      sentence: "Hang your coat on the hanger.",
      targetStyle: { top: '22.0%', left: '20.0%', width: '6.5%', height: '7.5%' },
      points: "32.0,19.8 42.4,19.8 42.4,26.55 32.0,26.55"
    },
    {
      wordKey: "laundry_hamper",
      korean: "빨래 바구니",
      audioUrl: "/audio/bedroom/laundry_hamper.mp3",
      videoPath: "/video/bedroom/laundry_hamper.mp4",
      sentence: "Put dirty clothes in the laundry hamper.",
      targetStyle: { top: '59.5%', left: '22.5%', width: '6.5%', height: '18.5%' },
      points: "36.0,53.55 46.4,53.55 46.4,70.2 36.0,70.2"
    },
    {
      wordKey: "reading_lamp",
      korean: "독서등",
      audioUrl: "/audio/bedroom/reading_lamp.mp3",
      videoPath: "/video/bedroom/reading_lamp.mp4",
      sentence: "The reading lamp gives off warm light.",
      targetStyle: { top: '44.0%', left: '76.0%', width: '8.5%', height: '21.0%' },
      points: "121.6,39.6 135.2,39.6 135.2,58.5 121.6,58.5"
    },
    {
      wordKey: "night_light",
      korean: "취침등",
      audioUrl: "/audio/bedroom/night_light.mp3",
      videoPath: "/video/bedroom/night_light.mp4",
      sentence: "The night light is softly glowing.",
      targetStyle: { top: '58.5%', left: '81.0%', width: '4.0%', height: '7.5%' },
      points: "129.6,52.65 136.0,52.65 136.0,59.4 129.6,59.4"
    },
    {
      wordKey: "blind",
      korean: "블라인드",
      audioUrl: "/audio/bedroom/blind.mp3",
      videoPath: "/video/bedroom/blind.mp4",
      sentence: "Pull down the blind at night.",
      targetStyle: { top: '5.0%', left: '60.0%', width: '20.0%', height: '24.0%' },
      points: "96.0,4.5 128.0,4.5 128.0,26.1 96.0,26.1"
    },
    {
      wordKey: "alarm_clock",
      korean: "알람 시계",
      audioUrl: "/audio/bedroom/alarm_clock.mp3",
      videoPath: "/video/bedroom/alarm_clock.mp4",
      sentence: "The alarm clock rings in the morning.",
      targetStyle: { top: '58.0%', left: '76.5%', width: '4.0%', height: '8.0%' },
      points: "122.4,52.2 128.8,52.2 128.8,59.4 122.4,59.4"
    },
    {
      wordKey: "slippers",
      korean: "실내화/슬리퍼",
      audioUrl: "/audio/bedroom/slippers.mp3",
      videoPath: "/video/bedroom/slippers.mp4",
      sentence: "Wear slippers on the cold floor.",
      targetStyle: { top: '85.0%', left: '64.5%', width: '9.5%', height: '7.5%' },
      points: "103.2,76.5 118.4,76.5 118.4,83.25 103.2,83.25"
    },
    {
      wordKey: "humidifier",
      korean: "가습기",
      audioUrl: "/audio/bedroom/humidifier.mp3",
      videoPath: "/video/bedroom/humidifier.mp4",
      sentence: "The humidifier keeps the air moist.",
      targetStyle: { top: '18.5%', left: '81.5%', width: '5.5%', height: '13.0%' },
      points: "130.4,16.65 139.2,16.65 139.2,28.35 130.4,28.35"
    },
    {
      wordKey: "jewelry_box",
      korean: "보석함",
      audioUrl: "/audio/bedroom/jewelry_box.mp3",
      videoPath: "/video/bedroom/jewelry_box.mp4",
      sentence: "Rings are in the jewelry box.",
      targetStyle: { top: '45.0%', left: '46.5%', width: '4.5%', height: '6.5%' },
      points: "74.4,40.5 81.6,40.5 81.6,46.35 74.4,46.35"
    },
    {
      wordKey: "full_length_mirror",
      korean: "전신 거울",
      audioUrl: "/audio/bedroom/full_length_mirror.mp3",
      videoPath: "/video/bedroom/full_length_mirror.mp4",
      sentence: "I check my clothes in the full-length mirror.",
      targetStyle: { top: '26.0%', left: '82.5%', width: '12.0%', height: '68.0%' },
      points: "132.0,23.4 151.2,23.4 151.2,84.6 132.0,84.6"
    },
    {
      wordKey: "eye_mask",
      korean: "안대",
      audioUrl: "/audio/bedroom/eye_mask.mp3",
      videoPath: "/video/bedroom/eye_mask.mp4",
      sentence: "I wear an eye mask to sleep well.",
      targetStyle: { top: '64.5%', left: '77.0%', width: '4.5%', height: '3.0%' },
      points: "123.2,58.05 130.4,58.05 130.4,60.75 123.2,60.75"
    },
    {
      wordKey: "shirt",
      korean: "셔츠",
      audioUrl: "/audio/bedroom/shirt.mp3",
      videoPath: "/video/bedroom/shirt.mp4",
      sentence: "A white shirt is hanging in the closet.",
      targetStyle: { top: '23.0%', left: '20.0%', width: '5.0%', height: '22.0%' },
      points: "32.0,20.7 40.0,20.7 40.0,40.5 32.0,40.5"
    },
    {
      wordKey: "jeans",
      korean: "청바지",
      audioUrl: "/audio/bedroom/jeans.mp3",
      videoPath: "/video/bedroom/jeans.mp4",
      sentence: "Blue jeans hang beside the shirt.",
      targetStyle: { top: '25.0%', left: '23.0%', width: '4.0%', height: '26.0%' },
      points: "36.8,22.5 43.2,22.5 43.2,45.9 36.8,45.9"
    },
    {
      wordKey: "pants",
      korean: "바지",
      audioUrl: "/audio/bedroom/pants.mp3",
      videoPath: "/video/bedroom/pants.mp4",
      sentence: "Folded pants are on the stack.",
      targetStyle: { top: '77.5%', left: '14.5%', width: '13.0%', height: '14.0%' },
      points: "23.2,69.75 44.0,69.75 44.0,82.35 23.2,82.35"
    },
    {
      wordKey: "coat",
      korean: "코트",
      audioUrl: "/audio/bedroom/coat.mp3",
      videoPath: "/video/bedroom/coat.mp4",
      sentence: "A warm coat is hanging on the rack.",
      targetStyle: { top: '35.5%', left: '94.0%', width: '6.0%', height: '43.0%' },
      points: "150.4,31.95 160.0,31.95 160.0,70.65 150.4,70.65"
    }
  ]
};