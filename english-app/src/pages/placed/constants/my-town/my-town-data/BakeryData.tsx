import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";
import { Video } from "@/assets/image/places/my-house/Video";
import { WordAudio } from "@/assets/image/places/my-house/WordAudio";
const bakeryImg = ThemeImage.bakery; // 👈 테마 이미지 상수에 bakery 추가 필요

// 🌟 TypeScript 타입 안정성을 위한 장소 데이터 인터페이스 정의
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
  points: string; // SVG 폴리곤 렌더링용 포인트 데이터
  imageType?: "apartment" | "house" | "bakery"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const bakeryData: PlaceDataType = {
  placeKey: "bakery",
  placeTitle: "Bakery Word Adventure",
  bgImage: bakeryImg,
  masterRegions: [
    {
      wordKey: "bread",
      korean: "빵",
      audioUrl: WordAudio.bakeryWordAudioBread,
      videoPath: Video.bakeryVideoBread,
      sentence: "I smell fresh bread. The bread is soft.",
      imageType: "bakery",
      targetStyle: { top: '52.0%', left: '2.0%', width: '12.0%', height: '8.0%' },
      points: "3.2,46.8 22.4,46.8 22.4,54.0 3.2,54.0"
    },
    {
      wordKey: "cake",
      korean: "케이크",
      audioUrl: WordAudio.bakeryWordAudioCake,
      videoPath: Video.bakeryVideoCake,
      sentence: "The cake looks delicious. It is a sweet cake.",
      imageType: "bakery",
      targetStyle: { top: '68.0%', left: '51.0%', width: '8.0%', height: '8.0%' },
      points: "81.6,61.2 94.4,61.2 94.4,68.4 81.6,68.4"
    },
    {
      wordKey: "cookie",
      korean: "쿠키",
      audioUrl: WordAudio.bakeryWordAudioCookie,
      videoPath: Video.bakeryVideoCookie,
      sentence: "I want to eat a cookie. The cookies are on the tray.",
      imageType: "bakery",
      targetStyle: { top: '73.0%', left: '62.0%', width: '10.0%', height: '7.0%' },
      points: "99.2,65.7 115.2,65.7 115.2,72.0 99.2,72.0"
    },
    {
      wordKey: "pie",
      korean: "파이",
      audioUrl: WordAudio.bakeryWordAudioPie,
      videoPath: Video.bakeryVideoPie,
      sentence: "The pie is sweet. It is an apple pie.",
      imageType: "bakery",
      targetStyle: { top: '78.0%', left: '58.0%', width: '12.0%', height: '10.0%' },
      points: "92.8,70.2 112.0,70.2 112.0,79.2 92.8,79.2"
    },
    {
      wordKey: "doughnut",
      korean: "도넛",
      audioUrl: WordAudio.bakeryWordAudioDoughnut,
      videoPath: Video.bakeryVideoDoughnut,
      sentence: "The doughnut is round. I like doughnuts.",
      imageType: "bakery",
      targetStyle: { top: '78.0%', left: '71.0%', width: '11.0%', height: '9.0%' },
      points: "113.6,70.2 131.2,70.2 131.2,78.3 113.6,78.3"
    },
    {
      wordKey: "muffin",
      korean: "머핀",
      audioUrl: WordAudio.bakeryWordAudioMuffin,
      videoPath: Video.bakeryVideoMuffin,
      sentence: "She is holding a muffin. The muffin is warm.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '84.0%', width: '14.0%', height: '12.0%' },
      points: "134.4,72.0 156.8,72.0 156.8,82.8 134.4,82.8"
    },
    {
      wordKey: "sandwich",
      korean: "샌드위치",
      audioUrl: WordAudio.bakeryWordAudioSandwich,
      videoPath: Video.bakeryVideoSandwich,
      sentence: "This is a big sandwich. I make a sandwich.",
      imageType: "bakery",
      targetStyle: { top: '60.0%', left: '71.0%', width: '9.0%', height: '8.0%' },
      points: "113.6,54.0 128.0,54.0 128.0,61.2 113.6,61.2"
    },
    {
      wordKey: "flour",
      korean: "밀가루",
      audioUrl: WordAudio.bakeryWordAudioFlour,
      videoPath: Video.bakeryVideoFlour,
      sentence: "Flour is white. We need flour for baking.",
      imageType: "bakery",
      targetStyle: { top: '32.0%', left: '16.0%', width: '7.0%', height: '10.0%' },
      points: "25.6,28.8 36.8,28.8 36.8,37.8 25.6,37.8"
    },
    {
      wordKey: "sugar",
      korean: "설탕",
      audioUrl: WordAudio.bakeryWordAudioSugar,
      videoPath: Video.bakeryVideoSugar,
      sentence: "Sugar makes it sweet. He adds sugar.",
      imageType: "bakery",
      targetStyle: { top: '57.0%', left: '25.0%', width: '9.0%', height: '10.0%' },
      points: "40.0,51.3 54.4,51.3 54.4,60.3 40.0,60.3"
    },
    {
      wordKey: "butter",
      korean: "버터",
      audioUrl: WordAudio.bakeryWordAudioButter,
      videoPath: Video.bakeryVideoButter,
      sentence: "He uses butter. The butter is soft.",
      imageType: "bakery",
      targetStyle: { top: '25.0%', left: '13.0%', width: '8.0%', height: '5.0%' },
      points: "20.8,22.5 33.6,22.5 33.6,27.0 20.8,27.0"
    },
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: WordAudio.bakeryWordAudioOven,
      videoPath: Video.bakeryVideoOven,
      sentence: "The oven is hot. The bread is in the oven.",
      imageType: "bakery",
      targetStyle: { top: '23.0%', left: '50.0%', width: '11.0%', height: '18.0%' },
      points: "80.0,20.7 97.6,20.7 97.6,36.9 80.0,36.9"
    },
    {
      wordKey: "tray",
      korean: "쟁반",
      audioUrl: WordAudio.bakeryWordAudioTray,
      videoPath: Video.bakeryVideoTray,
      sentence: "The cookies are on the tray. He carries a tray.",
      imageType: "bakery",
      targetStyle: { top: '14.0%', left: '35.0%', width: '10.0%', height: '15.0%' },
      points: "56.0,12.6 72.0,12.6 72.0,26.1 56.0,26.1"
    },
    {
      wordKey: "rolling_pin",
      korean: "밀대",
      audioUrl: WordAudio.bakeryWordAudioRollingPin,
      videoPath: Video.bakeryVideoRollingPin,
      sentence: "I use a rolling pin. The rolling pin is wooden.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '30.0%', width: '4.0%', height: '18.0%' },
      points: "48.0,10.8 54.4,10.8 54.4,27.0 48.0,27.0"
    },
    {
      wordKey: "mixer",
      korean: "믹서기(반죽기)",
      audioUrl: WordAudio.bakeryWordAudioMixer,
      videoPath: Video.bakeryVideoMixer,
      sentence: "The mixer is mixing the dough. The mixer is loud.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '32.0%', width: '12.0%', height: '26.0%' },
      points: "51.2,30.6 70.4,30.6 70.4,54.0 51.2,54.0"
    },
    {
      wordKey: "icing",
      korean: "아이싱(설탕물)",
      audioUrl: WordAudio.bakeryWordAudioIcing,
      videoPath: Video.bakeryVideoIcing,
      sentence: "The icing is pink. The cake has icing.",
      imageType: "bakery",
      targetStyle: { top: '85.0%', left: '69.0%', width: '6.0%', height: '6.0%' },
      points: "110.4,76.5 120.0,76.5 120.0,81.9 110.4,81.9"
    },
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: WordAudio.bakeryWordAudioCream,
      videoPath: Video.bakeryVideoCream,
      sentence: "The cream is soft. I whip the cream.",
      imageType: "bakery",
      targetStyle: { top: '57.0%', left: '60.0%', width: '9.0%', height: '8.0%' },
      points: "96.0,51.3 110.4,51.3 110.4,58.5 96.0,58.5"
    },
    {
      wordKey: "chocolate",
      korean: "초콜릿",
      audioUrl: WordAudio.bakeryWordAudioChocolate,
      videoPath: Video.bakeryVideoChocolate,
      sentence: "I like chocolate. The chocolate is sweet.",
      imageType: "bakery",
      targetStyle: { top: '70.0%', left: '34.0%', width: '9.0%', height: '7.0%' },
      points: "54.4,63.0 68.8,63.0 68.8,69.3 54.4,69.3"
    },
    {
      wordKey: "jam",
      korean: "잼",
      audioUrl: WordAudio.bakeryWordAudioJam,
      videoPath: Video.bakeryVideoJam,
      sentence: "This is strawberry jam. I put jam on bread.",
      imageType: "bakery",
      targetStyle: { top: '55.0%', left: '89.0%', width: '5.0%', height: '9.0%' },
      points: "142.4,49.5 150.4,49.5 150.4,57.6 142.4,57.6"
    },
    {
      wordKey: "yeast",
      korean: "이스트(효모)",
      audioUrl: WordAudio.bakeryWordAudioYeast,
      videoPath: Video.bakeryVideoYeast,
      sentence: "Yeast makes the bread rise. We need yeast.",
      imageType: "bakery",
      targetStyle: { top: '44.0%', left: '12.0%', width: '6.0%', height: '6.0%' },
      points: "19.2,39.6 28.8,39.6 28.8,45.0 19.2,45.0"
    },
    {
      wordKey: "recipe",
      korean: "레시피(요리법)",
      audioUrl: WordAudio.bakeryWordAudioRecipe,
      videoPath: Video.bakeryVideoRecipe,
      sentence: "He reads the recipe. It is a good recipe.",
      imageType: "bakery",
      targetStyle: { top: '43.0%', left: '47.0%', width: '13.0%', height: '14.0%' },
      points: "75.2,38.7 96.0,38.7 96.0,51.3 75.2,51.3"
    },
    {
      wordKey: "tongs",
      korean: "집게",
      audioUrl: WordAudio.bakeryWordAudioTongs,
      videoPath: Video.bakeryVideoTongs,
      sentence: "I use tongs to pick up bread.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '26.0%', width: '4.0%', height: '15.0%' },
      points: "41.6,10.8 48.0,10.8 48.0,24.3 41.6,24.3"
    },
    {
      wordKey: "counter",
      korean: "카운터(조리대)",
      audioUrl: WordAudio.bakeryWordAudioCounter,
      videoPath: Video.bakeryVideoCounter,
      sentence: "The bread is on the counter. I wipe the counter.",
      imageType: "bakery",
      targetStyle: { top: '60.0%', left: '44.0%', width: '50.0%', height: '40.0%' },
      points: "70.4,54.0 150.4,54.0 150.4,90.0 70.4,90.0"
    },
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: WordAudio.bakeryWordAudioShelf,
      videoPath: Video.bakeryVideoShelf,
      sentence: "The ingredients are on the shelf. The shelf is high.",
      imageType: "bakery",
      targetStyle: { top: '20.0%', left: '10.0%', width: '15.0%', height: '30.0%' },
      points: "16.0,18.0 40.0,18.0 40.0,45.0 16.0,45.0"
    },
    {
      wordKey: "smell",
      korean: "냄새(향기)",
      audioUrl: WordAudio.bakeryWordAudioSmell,
      videoPath: Video.bakeryVideoSmell,
      sentence: "The bakery has a good smell. I like this smell.",
      imageType: "bakery",
      targetStyle: { top: '30.0%', left: '62.0%', width: '10.0%', height: '15.0%' },
      points: "99.2,27.0 115.2,27.0 115.2,40.5 99.2,40.5"
    },
    {
      wordKey: "baker",
      korean: "제빵사",
      audioUrl: WordAudio.bakeryWordAudioBaker,
      videoPath: Video.bakeryVideoBaker,
      sentence: "The baker makes bread. The baker is busy.",
      imageType: "bakery",
      targetStyle: { top: '30.0%', left: '41.0%', width: '8.0%', height: '26.0%' },
      points: "65.6,27.0 78.4,27.0 78.4,50.4 65.6,50.4"
    }
  ]
};