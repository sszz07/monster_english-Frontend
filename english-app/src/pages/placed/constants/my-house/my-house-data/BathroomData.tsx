import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const bathroomImg = ThemeImage.bathroom;

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

export const bathroomData: PlaceDataType = {
  placeKey: "bathroom",
  placeTitle: "Bathroom Word Adventure",
  bgImage: bathroomImg,
  masterRegions: [
    {
      wordKey: "toilet",
      korean: "변기",
      audioUrl: "/audio/bathroom/toilet.mp3",
      videoPath: "/video/bathroom/toilet.mp4",
      sentence: "The toilet is white. I flush the toilet.",
      targetStyle: { top: '58.0%', left: '6.0%', width: '14.0%', height: '16.0%' },
      points: "9.6,52.2 32.0,52.2 32.0,66.6 9.6,66.6"
    },
    {
      wordKey: "basin",
      korean: "세면대",
      audioUrl: "/audio/bathroom/basin.mp3",
      videoPath: "/video/bathroom/basin.mp4",
      sentence: "The basin is round. I wash my face in the basin.",
      targetStyle: { top: '52.0%', left: '77.0%', width: '12.0%', height: '6.0%' },
      points: "123.2,46.8 142.4,46.8 142.4,52.2 123.2,52.2"
    },
    {
      wordKey: "bathtub",
      korean: "욕조",
      audioUrl: "/audio/bathroom/bathtub.mp3",
      videoPath: "/video/bathroom/bathtub.mp4",
      sentence: "The bathtub is deep. She fills the bathtub with water.",
      targetStyle: { top: '56.0%', left: '32.0%', width: '22.0%', height: '14.0%' },
      points: "51.2,50.4 86.4,50.4 86.4,63.0 51.2,63.0"
    },
    {
      wordKey: "shower",
      korean: "샤워기(구역)",
      audioUrl: "/audio/bathroom/shower.mp3",
      videoPath: "/video/bathroom/shower.mp4",
      sentence: "The shower is warm. He takes a shower every morning.",
      targetStyle: { top: '19.0%', left: '31.0%', width: '3.0%', height: '14.0%' },
      points: "49.6,17.1 54.4,17.1 54.4,29.7 49.6,29.7"
    },
    {
      wordKey: "faucet",
      korean: "수도꼭지",
      audioUrl: "/audio/bathroom/faucet.mp3",
      videoPath: "/video/bathroom/faucet.mp4",
      sentence: "The faucet is shiny. I turn on the faucet.",
      targetStyle: { top: '46.0%', left: '78.0%', width: '4.0%', height: '5.0%' },
      points: "124.8,41.4 131.2,41.4 131.2,45.9 124.8,45.9"
    },
    {
      wordKey: "showerhead",
      korean: "샤워기 헤드",
      audioUrl: "/audio/bathroom/showerhead.mp3",
      videoPath: "/video/bathroom/showerhead.mp4",
      sentence: "The showerhead is round. Water comes from the showerhead.",
      targetStyle: { top: '12.0%', left: '32.0%', width: '8.0%', height: '6.0%' },
      points: "51.2,10.8 64.0,10.8 64.0,16.2 51.2,16.2"
    },
    {
      wordKey: "drain",
      korean: "배수구",
      audioUrl: "/audio/bathroom/drain.mp3",
      videoPath: "/video/bathroom/drain.mp4",
      sentence: "The drain is small. Water goes down the drain.",
      targetStyle: { top: '72.0%', left: '40.0%', width: '5.0%', height: '5.0%' },
      points: "64.0,64.8 72.0,64.8 72.0,69.3 64.0,69.3"
    },
    {
      wordKey: "mirror",
      korean: "거울",
      audioUrl: "/audio/bathroom/mirror.mp3",
      videoPath: "/video/bathroom/mirror.mp4",
      sentence: "The mirror is big. I look at myself in the mirror.",
      targetStyle: { top: '10.0%', left: '75.0%', width: '15.0%', height: '25.0%' },
      points: "120.0,9.0 144.0,9.0 144.0,31.5 120.0,31.5"
    },
    {
      wordKey: "vanity",
      korean: "세면대 수납장",
      audioUrl: "/audio/bathroom/vanity.mp3",
      videoPath: "/video/bathroom/vanity.mp4",
      sentence: "The vanity has many drawers. Mom keeps her things in the vanity.",
      targetStyle: { top: '68.0%', left: '68.0%', width: '25.0%', height: '20.0%' },
      points: "108.8,61.2 148.8,61.2 148.8,79.2 108.8,79.2"
    },
    {
      wordKey: "toilet_paper",
      korean: "화장지",
      audioUrl: "/audio/bathroom/toilet_paper.mp3",
      videoPath: "/video/bathroom/toilet_paper.mp4",
      sentence: "The toilet paper is soft. I use toilet paper every day.",
      targetStyle: { top: '48.0%', left: '5.0%', width: '8.0%', height: '6.0%' },
      points: "8.0,43.2 20.8,43.2 20.8,48.6 8.0,48.6"
    },
    {
      wordKey: "toothbrush",
      korean: "칫솔",
      audioUrl: "/audio/bathroom/toothbrush.mp3",
      videoPath: "/video/bathroom/toothbrush.mp4",
      sentence: "My toothbrush is blue. I brush my teeth with a toothbrush.",
      targetStyle: { top: '46.0%', left: '84.0%', width: '4.0%', height: '5.0%' },
      points: "134.4,41.4 140.8,41.4 140.8,45.9 134.4,45.9"
    },
    {
      wordKey: "soap",
      korean: "비누",
      audioUrl: "/audio/bathroom/soap.mp3",
      videoPath: "/video/bathroom/soap.mp4",
      sentence: "The soap smells good. We wash our hands with soap.",
      targetStyle: { top: '60.0%', left: '68.0%', width: '5.0%', height: '5.0%' },
      points: "108.8,54.0 116.8,54.0 116.8,58.5 108.8,58.5"
    },
    {
      wordKey: "shower_curtain",
      korean: "샤워 커튼",
      audioUrl: "/audio/bathroom/shower_curtain.mp3",
      videoPath: "/video/bathroom/shower_curtain.mp4",
      sentence: "The shower curtain is colorful. She closes the shower curtain.",
      targetStyle: { top: '10.0%', left: '56.0%', width: '9.0%', height: '44.0%' },
      points: "89.6,9.0 104.0,9.0 104.0,48.6 89.6,48.6"
    },
    {
      wordKey: "bath_mat",
      korean: "욕실 매트",
      audioUrl: "/audio/bathroom/bath_mat.mp3",
      videoPath: "/video/bathroom/bath_mat.mp4",
      sentence: "The bath mat is fluffy. I stand on the bath mat.",
      targetStyle: { top: '80.0%', left: '30.0%', width: '26.0%', height: '10.0%' },
      points: "48.0,72.0 89.6,72.0 89.6,81.0 48.0,81.0"
    },
    {
      wordKey: "toothpaste",
      korean: "치약",
      audioUrl: "/audio/bathroom/toothpaste.mp3",
      videoPath: "/video/bathroom/toothpaste.mp4",
      sentence: "The toothpaste is minty. I squeeze toothpaste on my brush.",
      targetStyle: { top: '46.0%', left: '89.0%', width: '4.0%', height: '5.0%' },
      points: "142.4,41.4 148.8,41.4 148.8,45.9 142.4,45.9"
    },
    {
      wordKey: "plunger",
      korean: "뚫어뻥",
      audioUrl: "/audio/bathroom/plunger.mp3",
      videoPath: "/video/bathroom/plunger.mp4",
      sentence: "The plunger is red. Dad uses the plunger.",
      targetStyle: { top: '76.0%', left: '2.0%', width: '5.0%', height: '12.0%' },
      points: "3.2,68.4 11.2,68.4 11.2,79.2 3.2,79.2"
    },
    {
      wordKey: "toilet_brush",
      korean: "변기 솔",
      audioUrl: "/audio/bathroom/toilet_brush.mp3",
      videoPath: "/video/bathroom/toilet_brush.mp4",
      sentence: "The toilet brush is in the corner. Mom cleans with the toilet brush.",
      targetStyle: { top: '76.0%', left: '8.0%', width: '5.0%', height: '12.0%' },
      points: "12.8,68.4 20.8,68.4 20.8,79.2 12.8,79.2"
    },
    {
      wordKey: "towel",
      korean: "수건",
      audioUrl: "/audio/bathroom/towel.mp3",
      videoPath: "/video/bathroom/towel.mp4",
      sentence: "The towel is dry. I dry my body with a towel.",
      targetStyle: { top: '25.0%', left: '66.0%', width: '7.0%', height: '15.0%' },
      points: "105.6,22.5 116.8,22.5 116.8,36.0 105.6,36.0"
    },
    // 19. 가글/구강청결제
    {
      wordKey: "mouthwash",
      korean: "가글/구강청결제",
      audioUrl: "/audio/bathroom/mouthwash.mp3",
      videoPath: "/video/bathroom/mouthwash.mp4",
      sentence: "The mouthwash is green. I rinse my mouth with mouthwash.",
      targetStyle: { top: '26.5%', left: '34.0%', width: '3.0%', height: '6.5%' },
      points: "54.4,23.85 59.2,23.85 59.2,29.7 54.4,29.7"
    },
    // 20. 샴푸
    {
      wordKey: "shampoo",
      korean: "샴푸",
      audioUrl: "/audio/bathroom/shampoo.mp3",
      videoPath: "/video/bathroom/shampoo.mp4",
      sentence: "The shampoo smells nice. I wash my hair with shampoo.",
      targetStyle: { top: '27.5%', left: '38.0%', width: '2.5%', height: '5.5%' },
      points: "60.8,24.75 64.8,24.75 64.8,29.7 60.8,29.7"
    },
    // 21. 린스/컨디셔너
    {
      wordKey: "conditioner",
      korean: "린스/컨디셔너",
      audioUrl: "/audio/bathroom/conditioner.mp3",
      videoPath: "/video/bathroom/conditioner.mp4",
      sentence: "The conditioner is smooth. She puts conditioner in her hair.",
      targetStyle: { top: '27.5%', left: '41.5%', width: '2.5%', height: '5.5%' },
      points: "66.4,24.75 70.4,24.75 70.4,29.7 66.4,29.7"
    },
    // 22. 바디워시
    {
      wordKey: "bodywash",
      korean: "바디워시",
      audioUrl: "/audio/bathroom/bodywash.mp3",
      videoPath: "/video/bathroom/bodywash.mp4",
      sentence: "The bodywash is bubbly. I use bodywash in the shower.",
      targetStyle: { top: '27.5%', left: '45.0%', width: '3.0%', height: '5.5%' },
      points: "72.0,24.75 76.8,24.75 76.8,29.7 72.0,29.7"
    },
    {
      wordKey: "razor",
      korean: "면도기",
      audioUrl: "/audio/bathroom/razor.mp3",
      videoPath: "/video/bathroom/razor.mp4",
      sentence: "The razor is sharp. Dad uses the razor.",
      targetStyle: { top: '60.0%', left: '75.0%', width: '4.0%', height: '5.0%' },
      points: "120.0,54.0 126.4,54.0 126.4,58.5 120.0,58.5"
    },
    {
      wordKey: "hairdryer",
      korean: "헤어드라이어",
      audioUrl: "/audio/bathroom/hairdryer.mp3",
      videoPath: "/video/bathroom/hairdryer.mp4",
      sentence: "The hairdryer is loud. Mom dries her hair with the hairdryer.",
      targetStyle: { top: '60.0%', left: '81.0%', width: '8.0%', height: '6.0%' },
      points: "129.6,54.0 142.4,54.0 142.4,59.4 129.6,59.4"
    }
  ]
};