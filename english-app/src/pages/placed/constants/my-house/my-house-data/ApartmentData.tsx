/***/
import apartmentImg from '@/assets/image/places/house/apartment.png';

// 🌟 TypeScript 타입 안정성을 위한 장소 데이터 인터페이스 정의
export interface RegionData {
  wordKey: string;
  korean: string;
  audioUrl: string;
  videoPath: string;
  sentence: string;
  sentenceAudioUrl1?: string;
  sentenceAudioUrl2?: string;
  targetStyle: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  points: string; // SVG 폴리곤 렌더링용 포인트 데이터
  imageType?: "apartment" | "house"; // 👈 이미지 구분용 타입 추가
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const apartmentData: PlaceDataType = {
  placeKey: "apartment",
  placeTitle: "Apartment Word Adventure",
  bgImage: apartmentImg,
  masterRegions: [
    {
      wordKey: "elevator",
      korean: "엘리베이터",
      audioUrl: "/audio/apartment/elevator.mp3",
      videoPath: "/video/apartment/elevator.mp4",
      sentenceAudioUrl1: "/audio/apartment/elevator-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/elevator-sentence2.mp3",
      sentence: "I take the elevator. The elevator is fast.",
      imageType: "apartment",
      targetStyle: { top: '8.7%', left: '56.0%', width: '12.3%', height: '24.0%' },
      points: "89.6,7.8 109.3,7.8 109.3,29.4 89.6,29.4"
    },
    {
      wordKey: "mailbox",
      korean: "우편함",
      audioUrl: "/audio/apartment/mailbox.mp3",
      videoPath: "/video/apartment/mailbox.mp4",
      sentenceAudioUrl1: "/audio/apartment/mailbox-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/mailbox-sentence2.mp3",
      sentence: "I have a mailbox. Mom checks the mailbox.",
      imageType: "apartment",
      targetStyle: { top: '50.8%', left: '30.8%', width: '17.5%', height: '33.7%' },
      points: "49.3,45.7 77.3,45.7 77.3,76.1 49.3,76.1"
    },
    {
      wordKey: "playground",
      korean: "놀이터",
      audioUrl: "/audio/apartment/playground.mp3",
      videoPath: "/video/apartment/playground.mp4",
      sentenceAudioUrl1: "/audio/apartment/playground-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/playground-sentence2.mp3",
      sentence: "The playground is fun. I play at the playground.",
      imageType: "apartment",
      targetStyle: { top: '64.5%', left: '82.0%', width: '16.5%', height: '18.0%' },
      points: "131.2,58.0 157.6,58.0 157.6,74.2 131.2,74.2"
    },
    {
      wordKey: "parking_lot",
      korean: "주차장",
      audioUrl: "/audio/apartment/parking lot.mp3",
      videoPath: "/video/apartment/parking_lot.mp4",
      sentenceAudioUrl1: "/audio/apartment/parking_lot-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/parking_lot-sentence2.mp3",
      sentence: "The parking lot is big. I see the parking lot.",
      imageType: "apartment",
      targetStyle: { top: '68.0%', left: '1.0%', width: '30.0%', height: '25.0%' },
      points: "1.6,65.7 48,61.2 49.6,74.7 16,83.7 1.6,83.7"
    },
    {
      wordKey: "recycling_area",
      korean: "분리수거장",
      audioUrl: "/audio/apartment/recycling area.mp3",
      videoPath: "/video/apartment/recycling_area.mp4",
      sentenceAudioUrl1: "/audio/apartment/recycling_area-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/recycling_area-sentence2.mp3",
      sentence: "I go to the recycling area. The recycling area is clean.",
      imageType: "apartment",
      targetStyle: { top: '70.3%', left: '70.5%', width: '14.5%', height: '14.2%' },
      points: "112.8,63.2 136.0,63.2 136.0,76.1 112.8,76.1"
    },
    {
      wordKey: "security_office",
      korean: "경비실",
      audioUrl: "/audio/apartment/security office.mp3",
      videoPath: "/video/apartment/security_office.mp4",
      sentenceAudioUrl1: "/audio/apartment/security_office-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/security_office-sentence2.mp3",
      sentence: "The guard is at the security office. I visit the security office.",
      imageType: "apartment",
      targetStyle: { top: '72.5%', left: '56.5%', width: '20.0%', height: '25.5%' },
      points: "90.4,65.2 122.4,65.2 122.4,88.2 90.4,88.2"
    },
    {
      wordKey: "gym",
      korean: "체육관(헬스장)",
      audioUrl: "/audio/apartment/gym.mp3",
      videoPath: "/video/apartment/gym.mp4",
      sentenceAudioUrl1: "/audio/apartment/gym-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/gym-sentence2.mp3",
      sentence: "The gym is on the first floor. Dad uses the gym.",
      imageType: "apartment",
      targetStyle: { top: '83.5%', left: '79.5%', width: '19.0%', height: '14.0%' },
      points: "127.2,75.1 157.6,75.1 157.6,87.8 127.2,87.8"
    },
    {
      wordKey: "entrance",
      korean: "입구",
      audioUrl: "/audio/apartment/entrance.mp3",
      videoPath: "/video/apartment/entrance.mp4",
      sentenceAudioUrl1: "/audio/apartment/entrance-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/entrance-sentence2.mp3",
      sentence: "The entrance is big. I use the entrance.",
      imageType: "apartment",
      targetStyle: { top: '44.2%', left: '67.8%', width: '10.0%', height: '19.3%' },
      points: "108.5,39.8 124.5,39.8 124.5,57.1 108.5,57.1"
    },
    {
      wordKey: "terrace",
      korean: "테라스",
      audioUrl: "/audio/apartment/terrace.mp3",
      videoPath: "/video/apartment/terrace.mp4",
      sentenceAudioUrl1: "/audio/apartment/terrace-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/terrace-sentence2.mp3",
      sentence: "The terrace is nice. I sit on the terrace.",
      imageType: "apartment",
      targetStyle: { top: '23.7%', left: '84.7%', width: '14.8%', height: '21.3%' },
      points: "135.5,21.3 159.2,21.3 159.2,40.5 135.5,40.5"
    },
    {
      wordKey: "rooftop",
      korean: "옥상",
      audioUrl: "/audio/apartment/rooftop.mp3",
      videoPath: "/video/apartment/rooftop.mp4",
      sentenceAudioUrl1: "/audio/apartment/rooftop-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/rooftop-sentence2.mp3",
      sentence: "The rooftop is high. I go to the rooftop.",
      imageType: "apartment",
      targetStyle: { top: '11.0%', left: '88.2%', width: '11.3%', height: '12.5%' },
      points: "141.1,9.9 159.2,9.9 159.2,21.1 141.1,21.1"
    },
    {
      wordKey: "building",
      korean: "건물",
      audioUrl: "/audio/apartment/building.mp3",
      videoPath: "/video/apartment/building.mp4",
      sentenceAudioUrl1: "/audio/apartment/building-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/building-sentence2.mp3",
      sentence: "This is a big building. I live in the building.",
      imageType: "apartment",
      targetStyle: { top: '4.5%', left: '31.2%', width: '25.3%', height: '37.0%' },
      points: "49.9,4.1 90.4,5.9 90.4,37.4 49.9,35.6"
    },
    {
      wordKey: "balcony",
      korean: "발코니(베란다)",
      audioUrl: "/audio/apartment/balcony.mp3",
      videoPath: "/video/apartment/balcony.mp4",
      sentenceAudioUrl1: "/audio/apartment/balcony-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/balcony-sentence2.mp3",
      sentence: "We have a balcony. The balcony is small.",
      imageType: "apartment",
      targetStyle: { top: '12.5%', left: '66.5%', width: '13.0%', height: '21.0%' },
      points: "106.4,11.3 127.2,11.3 127.2,30.2 106.4,30.2"
    },
    {
      wordKey: "unit",
      korean: "세대(우리집)",
      audioUrl: "/audio/apartment/unit.mp3",
      videoPath: "/video/apartment/unit.mp4",
      sentenceAudioUrl1: "/audio/apartment/unit-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/unit-sentence2.mp3",
      sentence: "I live in unit 101. My unit is cozy.",
      imageType: "apartment",
      targetStyle: { top: '2.0%', left: '12.0%', width: '8.5%', height: '17.0%' },
      points: "19.2,1.8 32.8,1.8 32.8,17.1 19.2,17.1"
    },
    {
      wordKey: "wall",
      korean: "벽",
      audioUrl: "/audio/apartment/wall.mp3",
      videoPath: "/video/apartment/wall.mp4",
      sentenceAudioUrl1: "/audio/apartment/wall-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/wall-sentence2.mp3",
      sentence: "The wall is white. I touch the wall.",
      imageType: "apartment",
      targetStyle: { top: '3.2%', left: '22.2%', width: '7.4%', height: '36.3%' },
      points: "35.5,2.9 47.3,2.9 47.3,35.6 35.5,35.6"
    },
    {
      wordKey: "basement",
      korean: "지하",
      audioUrl: "/audio/apartment/basement.mp3",
      videoPath: "/video/apartment/basement.mp4",
      sentenceAudioUrl1: "/audio/apartment/basement-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/basement-sentence2.mp3",
      sentence: "Dad parks in the basement. The basement is dark.",
      imageType: "apartment",
      targetStyle: { top: '43.5%', left: '2.5%', width: '11.3%', height: '26.5%' },
      points: "4.0,39.1 22.0,39.1 22.0,63.0 4.0,63.0"
    },
    {
      wordKey: "hallway",
      korean: "복도",
      audioUrl: "/audio/apartment/hallway.mp3",
      videoPath: "/video/apartment/hallway.mp4",
      sentenceAudioUrl1: "/audio/apartment/hallway-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/hallway-sentence2.mp3",
      sentence: "The hallway is bright. I walk in the hallway.",
      imageType: "apartment",
      targetStyle: { top: '40.5%', left: '46.5%', width: '8.0%', height: '14.0%' },
      points: "74.4,36.4 87.2,36.4 87.2,49.0 74.4,49.0"
    },
    {
      wordKey: "column",
      korean: "기둥",
      audioUrl: "/audio/apartment/column.mp3",
      videoPath: "/video/apartment/column.mp4",
      sentenceAudioUrl1: "/audio/apartment/column-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/column-sentence2.mp3",
      sentence: "I see a column. The column is tall.",
      imageType: "apartment",
      targetStyle: { top: '29.5%', left: '56.2%', width: '5.0%', height: '30.0%' },
      points: "89.9,26.5 97.9,26.5 97.9,53.5 89.9,53.5"
    },
    {
      wordKey: "logo",
      korean: "로고",
      audioUrl: "/audio/apartment/logo.mp3",
      videoPath: "/video/apartment/logo.mp4",
      sentenceAudioUrl1: "/audio/apartment/logo-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/logo-sentence2.mp3",
      sentence: "I see the logo. The logo is on the wall.",
      imageType: "apartment",
      targetStyle: { top: '30.5%', left: '68.2%', width: '9.6%', height: '14.0%' },
      points: "109.1,27.4 124.4,27.4 124.4,40.0 109.1,40.0"
    },
    {
      wordKey: "intercom",
      korean: "인터폰",
      audioUrl: "/audio/apartment/intercom.mp3",
      videoPath: "/video/apartment/intercom.mp4",
      sentenceAudioUrl1: "/audio/apartment/intercom-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/intercom-sentence2.mp3",
      sentence: "I press the intercom. The intercom is on the wall.",
      imageType: "apartment",
      targetStyle: { top: '47.5%', left: '75.0%', width: '3.5%', height: '9.0%' },
      points: "120.0,42.7 125.6,42.7 125.6,50.8 120.0,50.8"
    },
    {
      wordKey: "loading_zone",
      korean: "하역구역",
      audioUrl: "/audio/apartment/loading zone.mp3",
      videoPath: "/video/apartment/loading_zone.mp4",
      sentenceAudioUrl1: "/audio/apartment/loading_zone-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/loading_zone-sentence2.mp3",
      sentence: "I see the loading zone. The truck is at the loading zone.",
      imageType: "apartment",
      targetStyle: { top: '58.0%', left: '73.5%', width: '11.0%', height: '12.5%' },
      points: "117.6,52.2 135.2,52.2 135.2,63.4 117.6,63.4"
    },
    {
      wordKey: "lobby",
      korean: "로비",
      audioUrl: "/audio/apartment/lobby.mp3",
      videoPath: "/video/apartment/lobby.mp4",
      sentenceAudioUrl1: "/audio/apartment/lobby-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/lobby-sentence2.mp3",
      sentence: "The lobby is clean. We are in the lobby.",
      imageType: "apartment",
      targetStyle: { top: '42.0%', left: '85.0%', width: '14.0%', height: '24.5%' },
      points: "136.0,37.8 158.4,37.8 158.4,59.8 136.0,59.8"
    },
    {
      wordKey: "garden",
      korean: "정원",
      audioUrl: "/audio/apartment/garden.mp3",
      videoPath: "/video/apartment/garden.mp4",
      sentenceAudioUrl1: "/audio/apartment/garden-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/garden-sentence2.mp3",
      sentence: "The garden is pretty. I like the garden.",
      imageType: "apartment",
      targetStyle: { top: '65.5%', left: '53.0%', width: '6.5%', height: '6.5%' },
      points: "84.8,58.9 95.2,58.9 95.2,64.8 84.8,64.8"
    },
    {
      wordKey: "stairs",
      korean: "계단",
      audioUrl: "/audio/apartment/stairs.mp3",
      videoPath: "/video/apartment/stairs.mp4",
      sentenceAudioUrl1: "/audio/apartment/stairs-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/stairs-sentence2.mp3",
      sentence: "He is going up the stairs.",
      imageType: "apartment",
      targetStyle: { top: '60.0%', left: '67.5%', width: '7.0%', height: '6.0%' },
      points: "108.0,54.0 119.2,54.0 119.2,59.4 108.0,59.4"
    },
    {
      wordKey: "window",
      korean: "창문",
      audioUrl: "/audio/apartment/window.mp3",
      videoPath: "/video/apartment/window.mp4",
      sentenceAudioUrl1: "/audio/apartment/window-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/window-sentence2.mp3",
      sentence: "I open the window. The window is clean.",
      imageType: "apartment",
      targetStyle: { top: '17.5%', left: '2.2%', width: '19.3%', height: '20.8%' },
      points: "3.5,15.7 34.4,19.6 33.9,34.4 3.2,31.0"
    },
    {
      wordKey: "walking_path",
      korean: "산책로",
      audioUrl: "/audio/apartment/walking path.mp3",
      videoPath: "/video/apartment/walking_path.mp4",
      sentenceAudioUrl1: "/audio/apartment/walking_path-sentence.mp3",
      sentenceAudioUrl2: "/audio/apartment/walking_path-sentence2.mp3",
      sentence: "I walk on the walking path.",
      imageType: "apartment",
      targetStyle: { top: '81.0%', left: '25.0%', width: '27.0%', height: '16.0%' },
      points: "52.0,72.9 83.2,72.9 74.4,87.3 40.0,87.3"
    }
  ]
};