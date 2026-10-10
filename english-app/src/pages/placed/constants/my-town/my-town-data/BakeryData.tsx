import bakery from "@/assets/image/places/my-town/Bakery.png";

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
  imageType?: "apartment" | "house" | "bakery"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

const bakeryImg = bakery;

export const bakeryData: PlaceDataType = {
  placeKey: "bakery",
  placeTitle: "Bakery Word Adventure",
  bgImage: bakeryImg,
  masterRegions: [
    {
      wordKey: "bread",
      korean: "빵",
      audioUrl: "/audio/bakery/bread.mp3",
      videoPath: "/video/bakery/bread.mp4",
      sentence: "The bread is warm and soft. She buys a loaf of bread.",
      imageType: "bakery",
      targetStyle: { top: '48.0%', left: '60.0%', width: '6.0%', height: '4.0%' },
      points: "96.0,43.2 105.6,43.2 105.6,46.8 96.0,46.8"
    },
    {
      wordKey: "cake",
      korean: "케이크",
      audioUrl: "/audio/bakery/cake.mp3",
      videoPath: "/video/bakery/cake.mp4",
      sentence: "The cake is sweet and tall. He cuts the cake.",
      imageType: "bakery",
      targetStyle: { top: '68.0%', left: '50.0%', width: '6.0%', height: '6.0%' },
      points: "80.0,61.2 89.6,61.2 89.6,66.6 80.0,66.6"
    },
    {
      wordKey: "cookie",
      korean: "쿠키",
      audioUrl: "/audio/bakery/cookie.mp3",
      videoPath: "/video/bakery/cookie.mp4",
      sentence: "The cookie is round and crunchy. She eats a cookie.",
      imageType: "bakery",
      targetStyle: { top: '74.0%', left: '62.0%', width: '4.0%', height: '4.0%' },
      points: "99.2,66.6 105.6,66.6 105.6,70.2 99.2,70.2"
    },
    {
      wordKey: "pie",
      korean: "파이",
      audioUrl: "/audio/bakery/pie.mp3",
      videoPath: "/video/bakery/pie.mp4",
      sentence: "The pie is hot and golden. He takes a pie from the oven.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '58.0%', width: '6.0%', height: '6.0%' },
      points: "92.8,72.0 102.4,72.0 102.4,77.4 92.8,77.4"
    },
    {
      wordKey: "doughnut",
      korean: "도넛",
      audioUrl: "/audio/bakery/doughnut.mp3",
      videoPath: "/video/bakery/doughnut.mp4",
      sentence: "The doughnut is soft and sweet. She picks a doughnut from the tray.",
      imageType: "bakery",
      targetStyle: { top: '86.0%', left: '70.0%', width: '6.0%', height: '6.0%' },
      points: "112.0,77.4 121.6,77.4 121.6,82.8 112.0,82.8"
    },
    {
      wordKey: "muffin",
      korean: "머핀",
      audioUrl: "/audio/bakery/muffin.mp3",
      videoPath: "/video/bakery/muffin.mp4",
      sentence: "The muffin is fluffy and small. He eats a muffin.",
      imageType: "bakery",
      targetStyle: { top: '80.0%', left: '84.0%', width: '6.0%', height: '6.0%' },
      points: "134.4,72.0 144.0,72.0 144.0,77.4 134.4,77.4"
    },
    {
      wordKey: "sandwich",
      korean: "샌드위치",
      audioUrl: "/audio/bakery/sandwich.mp3",
      videoPath: "/video/bakery/sandwich.mp4",
      sentence: "The sandwich is thick and yummy. She makes a sandwich.",
      imageType: "bakery",
      targetStyle: { top: '60.0%', left: '72.0%', width: '5.0%', height: '6.0%' },
      points: "115.2,54.0 123.2,54.0 123.2,59.4 115.2,59.4"
    },
    {
      wordKey: "flour",
      korean: "밀가루",
      audioUrl: "/audio/bakery/flour.mp3",
      videoPath: "/video/bakery/flour.mp4",
      sentence: "The flour is white and powdery. He pours flour into the bowl.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '18.0%', width: '4.0%', height: '6.0%' },
      points: "28.8,30.6 35.2,30.6 35.2,36.0 28.8,36.0"
    },
    {
      wordKey: "sugar",
      korean: "설탕",
      audioUrl: "/audio/bakery/sugar.mp3",
      videoPath: "/video/bakery/sugar.mp4",
      sentence: "The sugar is white and sweet. She adds sugar to the dough.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '8.0%', width: '4.0%', height: '4.0%' },
      points: "12.8,30.6 19.2,30.6 19.2,34.2 12.8,34.2"
    },
    {
      wordKey: "butter",
      korean: "버터",
      audioUrl: "/audio/bakery/butter.mp3",
      videoPath: "/video/bakery/butter.mp4",
      sentence: "The butter is soft and yellow. He spreads butter on the bread.",
      imageType: "bakery",
      targetStyle: { top: '26.0%', left: '13.0%', width: '5.0%', height: '4.0%' },
      points: "20.8,23.4 28.8,23.4 28.8,27.0 20.8,27.0"
    },
    {
      wordKey: "oven",
      korean: "오븐",
      audioUrl: "/audio/bakery/oven.mp3",
      videoPath: "/video/bakery/oven.mp4",
      sentence: "The oven is hot and large. She puts the tray in the oven.",
      imageType: "bakery",
      targetStyle: { top: '24.0%', left: '49.0%', width: '8.0%', height: '10.0%' },
      points: "78.4,21.6 91.2,21.6 91.2,30.6 78.4,30.6"
    },
    {
      wordKey: "tray",
      korean: "쟁반",
      audioUrl: "/audio/bakery/tray.mp3",
      videoPath: "/video/bakery/tray.mp4",
      sentence: "The tray is flat and silver. He carries cookies on the tray.",
      imageType: "bakery",
      targetStyle: { top: '54.0%', left: '2.0%', width: '8.0%', height: '4.0%' },
      points: "3.2,48.6 16.0,48.6 16.0,52.2 3.2,52.2"
    },
    {
      wordKey: "rollingPin",
      korean: "밀대",
      audioUrl: "/audio/bakery/rolling_pin.mp3",
      videoPath: "/video/bakery/rolling_pin.mp4",
      sentence: "The rolling pin is long and smooth. She flattens the dough with a rolling pin.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '33.0%', width: '3.0%', height: '8.0%' },
      points: "52.8,10.8 57.6,10.8 57.6,18.0 52.8,18.0"
    },
    {
      wordKey: "mixer",
      korean: "반죽기(믹서)",
      audioUrl: "/audio/bakery/mixer.mp3",
      videoPath: "/video/bakery/mixer.mp4",
      sentence: "The mixer is loud and fast. He uses the mixer.",
      imageType: "bakery",
      targetStyle: { top: '38.0%', left: '34.0%', width: '5.0%', height: '10.0%' },
      points: "54.4,34.2 62.4,34.2 62.4,43.2 54.4,43.2"
    },
    {
      wordKey: "icing",
      korean: "아이싱(설탕공예)",
      audioUrl: "/audio/bakery/icing.mp3",
      videoPath: "/video/bakery/icing.mp4",
      sentence: "The icing is sweet and colorful. She puts icing on the cake.",
      imageType: "bakery",
      targetStyle: { top: '68.0%', left: '30.0%', width: '4.0%', height: '4.0%' },
      points: "48.0,61.2 54.4,61.2 54.4,64.8 48.0,64.8"
    },
    {
      wordKey: "cream",
      korean: "크림",
      audioUrl: "/audio/bakery/cream.mp3",
      videoPath: "/video/bakery/cream.mp4",
      sentence: "The cream is cold and fluffy. He adds cream on top.",
      imageType: "bakery",
      targetStyle: { top: '58.0%', left: '60.0%', width: '5.0%', height: '6.0%' },
      points: "96.0,52.2 104.0,52.2 104.0,57.6 96.0,57.6"
    },
    {
      wordKey: "chocolate",
      korean: "초콜릿",
      audioUrl: "/audio/bakery/chocolate.mp3",
      videoPath: "/video/bakery/chocolate.mp4",
      sentence: "The chocolate is dark and rich. She melts chocolate in the bowl.",
      imageType: "bakery",
      targetStyle: { top: '46.0%', left: '70.0%', width: '4.0%', height: '4.0%' },
      points: "112.0,41.4 118.4,41.4 118.4,45.0 112.0,45.0"
    },
    {
      wordKey: "jam",
      korean: "잼",
      audioUrl: "/audio/bakery/jam.mp3",
      videoPath: "/video/bakery/jam.mp4",
      sentence: "The jam is red and sweet. He spreads jam on the bread.",
      imageType: "bakery",
      targetStyle: { top: '58.0%', left: '40.0%', width: '4.0%', height: '6.0%' },
      points: "64.0,52.2 70.4,52.2 70.4,57.6 64.0,57.6"
    },
    {
      wordKey: "yeast",
      korean: "효모(이스트)",
      audioUrl: "/audio/bakery/yeast.mp3",
      videoPath: "/video/bakery/yeast.mp4",
      sentence: "The yeast is small and powerful. She adds yeast to the flour.",
      imageType: "bakery",
      targetStyle: { top: '34.0%', left: '26.0%', width: '4.0%', height: '4.0%' },
      points: "41.6,30.6 48.0,30.6 48.0,34.2 41.6,34.2"
    },
    {
      wordKey: "recipe",
      korean: "레시피(요리법)",
      audioUrl: "/audio/bakery/recipe.mp3",
      videoPath: "/video/bakery/recipe.mp4",
      sentence: "The recipe is long and detailed. He reads the recipe.",
      imageType: "bakery",
      targetStyle: { top: '46.0%', left: '48.0%', width: '6.0%', height: '6.0%' },
      points: "76.8,41.4 86.4,41.4 86.4,46.8 76.8,46.8"
    },
    {
      wordKey: "tongs",
      korean: "집게",
      audioUrl: "/audio/bakery/tongs.mp3",
      videoPath: "/video/bakery/tongs.mp4",
      sentence: "The tongs are long and silver. She picks up bread with tongs.",
      imageType: "bakery",
      targetStyle: { top: '12.0%', left: '26.0%', width: '3.0%', height: '8.0%' },
      points: "41.6,10.8 46.4,10.8 46.4,18.0 41.6,18.0"
    },
    {
      wordKey: "counter",
      korean: "조리대(카운터)",
      audioUrl: "/audio/bakery/counter.mp3",
      videoPath: "/video/bakery/counter.mp4",
      sentence: "The counter is wide and clean. He rolls the dough on the counter.",
      imageType: "bakery",
      targetStyle: { top: '85.0%', left: '5.0%', width: '10.0%', height: '5.0%' },
      points: "8.0,76.5 24.0,76.5 24.0,81.0 8.0,81.0"
    },
    {
      wordKey: "shelf",
      korean: "선반",
      audioUrl: "/audio/bakery/shelf.mp3",
      videoPath: "/video/bakery/shelf.mp4",
      sentence: "The shelf is full and wooden. She puts the bread on the shelf.",
      imageType: "bakery",
      targetStyle: { top: '25.0%', left: '6.0%', width: '4.0%', height: '4.0%' },
      points: "9.6,22.5 16.0,22.5 16.0,26.1 9.6,26.1"
    },
    {
      wordKey: "smell",
      korean: "냄새(향기)",
      audioUrl: "/audio/bakery/smell.mp3",
      videoPath: "/video/bakery/smell.mp4",
      sentence: "The smell is sweet and wonderful. The bakery has a great smell.",
      imageType: "bakery",
      targetStyle: { top: '10.0%', left: '80.0%', width: '4.0%', height: '4.0%' },
      points: "128.0,9.0 134.4,9.0 134.4,12.6 128.0,12.6"
    },
    {
      wordKey: "baker",
      korean: "제빵사",
      audioUrl: "/audio/bakery/baker.mp3",
      videoPath: "/video/bakery/baker.mp4",
      sentence: "The baker is skilled and cheerful. The baker makes fresh bread every morning.",
      imageType: "bakery",
      targetStyle: { top: '29.0%', left: '42.0%', width: '4.0%', height: '6.0%' },
      points: "67.2,26.1 73.6,26.1 73.6,31.5 67.2,31.5"
    }
  ]
};