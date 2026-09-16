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
      sentence: "I flush the toilet.",
      targetStyle: { top: '57.0%', left: '3.5%', width: '20.0%', height: '38.5%' },
      points: "5.6,51.3 37.6,51.3 37.6,85.9 5.6,85.9"
    },
    {
      wordKey: "basin",
      korean: "세면대",
      audioUrl: "/audio/bathroom/basin.mp3",
      videoPath: "/video/bathroom/basin.mp4",
      sentence: "The basin is white and clean.",
      targetStyle: { top: '52.5%', left: '74.5%', width: '14.5%', height: '9.0%' },
      points: "119.2,47.25 142.4,47.25 142.4,55.3 119.2,55.3"
    },
    {
      wordKey: "bathtub",
      korean: "욕조",
      audioUrl: "/audio/bathroom/bathtub.mp3",
      videoPath: "/video/bathroom/bathtub.mp4",
      sentence: "I take a warm bath in the bathtub.",
      targetStyle: { top: '54.5%', left: '33.5%', width: '31.5%', height: '26.0%' },
      points: "53.6,49.0 104.0,49.0 104.0,72.4 53.6,72.4"
    },
    {
      wordKey: "shower",
      korean: "샤워기(구역)",
      audioUrl: "/audio/bathroom/shower.mp3",
      videoPath: "/video/bathroom/shower.mp4",
      sentence: "I take a shower every morning.",
      targetStyle: { top: '10.5%', left: '32.0%', width: '10.0%', height: '38.0%' },
      points: "51.2,9.45 67.2,9.45 67.2,43.6 51.2,43.6"
    },
    {
      wordKey: "faucet",
      korean: "수도꼭지",
      audioUrl: "/audio/bathroom/faucet.mp3",
      videoPath: "/video/bathroom/faucet.mp4",
      sentence: "Turn off the faucet after washing.",
      targetStyle: { top: '46.5%', left: '82.5%', width: '5.0%', height: '8.5%' },
      points: "132.0,41.8 140.0,41.8 140.0,49.5 132.0,49.5"
    },
    {
      wordKey: "showerhead",
      korean: "샤워기 헤드",
      audioUrl: "/audio/bathroom/showerhead.mp3",
      videoPath: "/video/bathroom/showerhead.mp4",
      sentence: "Water comes out of the showerhead.",
      targetStyle: { top: '14.5%', left: '34.5%', width: '5.5%', height: '7.5%' },
      points: "55.2,13.0 64.0,13.0 64.0,19.8 55.2,19.8"
    },
    {
      wordKey: "drain",
      korean: "배수구",
      audioUrl: "/audio/bathroom/drain.mp3",
      videoPath: "/video/bathroom/drain.mp4",
      sentence: "Water goes down the drain.",
      targetStyle: { top: '80.0%', left: '46.0%', width: '4.5%', height: '2.5%' },
      points: "73.6,72.0 80.8,72.0 80.8,74.25 73.6,74.25"
    },
    {
      wordKey: "mirror",
      korean: "거울",
      audioUrl: "/audio/bathroom/mirror.mp3",
      videoPath: "/video/bathroom/mirror.mp4",
      sentence: "I look at myself in the mirror.",
      targetStyle: { top: '7.5%', left: '82.5%', width: '15.0%', height: '40.0%' },
      points: "132.0,6.75 156.0,6.75 156.0,42.75 132.0,42.75"
    },
    {
      wordKey: "vanity",
      korean: "세면대 수납장",
      audioUrl: "/audio/bathroom/vanity.mp3",
      videoPath: "/video/bathroom/vanity.mp4",
      sentence: "The soap is on the vanity.",
      targetStyle: { top: '60.0%', left: '69.5%', width: '27.0%', height: '36.5%' },
      points: "111.2,54.0 154.4,54.0 154.4,86.8 111.2,86.8"
    },
    {
      wordKey: "toilet_paper",
      korean: "화장지",
      audioUrl: "/audio/bathroom/toilet_paper.mp3",
      videoPath: "/video/bathroom/toilet_paper.mp4",
      sentence: "We need more toilet paper.",
      targetStyle: { top: '59.5%', left: '15.0%', width: '5.5%', height: '8.5%' },
      points: "24.0,53.5 32.8,53.5 32.8,61.2 24.0,61.2"
    },
    {
      wordKey: "toothbrush",
      korean: "칫솔",
      audioUrl: "/audio/bathroom/toothbrush.mp3",
      videoPath: "/video/bathroom/toothbrush.mp4",
      sentence: "I use a toothbrush to clean my teeth.",
      targetStyle: { top: '44.0%', left: '67.5%', width: '6.0%', height: '5.0%' },
      points: "108.0,39.6 117.6,39.6 117.6,44.1 108.0,44.1"
    },
    {
      wordKey: "soap",
      korean: "비누",
      audioUrl: "/audio/bathroom/soap.mp3",
      videoPath: "/video/bathroom/soap.mp4",
      sentence: "Wash your hands with soap.",
      targetStyle: { top: '56.5%', left: '72.0%', width: '3.5%', height: '2.5%' },
      points: "115.2,50.8 120.8,50.8 120.8,53.1 115.2,53.1"
    },
    {
      wordKey: "shower_curtain",
      korean: "샤워 커튼",
      audioUrl: "/audio/bathroom/shower_curtain.mp3",
      videoPath: "/video/bathroom/shower_curtain.mp4",
      sentence: "Close the shower curtain.",
      targetStyle: { top: '9.5%', left: '54.5%', width: '13.5%', height: '67.0%' },
      points: "87.2,8.5 108.8,8.5 108.8,68.8 87.2,68.8"
    },
    {
      wordKey: "bath_mat",
      korean: "욕실 매트",
      audioUrl: "/audio/bathroom/bath_mat.mp3",
      videoPath: "/video/bathroom/bath_mat.mp4",
      sentence: "Step on the bath mat.",
      targetStyle: { top: '78.5%', left: '28.5%', width: '30.0%', height: '12.5%' },
      points: "45.6,70.6 93.6,70.6 93.6,81.9 45.6,81.9"
    },
    {
      wordKey: "toothpaste",
      korean: "치약",
      audioUrl: "/audio/bathroom/toothpaste.mp3",
      videoPath: "/video/bathroom/toothpaste.mp4",
      sentence: "Put toothpaste on your brush.",
      targetStyle: { top: '51.0%', left: '94.5%', width: '2.5%', height: '6.5%' },
      points: "151.2,45.9 155.2,45.9 155.2,51.7 151.2,51.7"
    },
    {
      wordKey: "plunger",
      korean: "뚫어뻥",
      audioUrl: "/audio/bathroom/plunger.mp3",
      videoPath: "/video/bathroom/plunger.mp4",
      sentence: "Use the plunger for the toilet.",
      targetStyle: { top: '75.0%', left: '1.0%', width: '7.5%', height: '22.0%' },
      points: "1.6,67.5 13.6,67.5 13.6,87.3 1.6,87.3"
    },
    {
      wordKey: "toilet_brush",
      korean: "변기 솔",
      audioUrl: "/audio/bathroom/toilet_brush.mp3",
      videoPath: "/video/bathroom/toilet_brush.mp4",
      sentence: "Clean the toilet with a brush.",
      targetStyle: { top: '76.5%', left: '6.0%', width: '4.5%', height: '20.0%' },
      points: "9.6,68.8 16.8,68.8 16.8,86.8 9.6,86.8"
    },
    {
      wordKey: "towel",
      korean: "수건",
      audioUrl: "/audio/bathroom/towel.mp3",
      videoPath: "/video/bathroom/towel.mp4",
      sentence: "Dry your hands with a towel.",
      targetStyle: { top: '26.5%', left: '66.5%', width: '9.5%', height: '18.0%' },
      points: "106.4,23.8 121.6,23.8 121.6,40.0 106.4,40.0"
    },
    {
      wordKey: "mouthwash",
      korean: "가글/구강청결제",
      audioUrl: "/audio/bathroom/mouthwash.mp3",
      videoPath: "/video/bathroom/mouthwash.mp4",
      sentence: "Use mouthwash for fresh breath.",
      targetStyle: { top: '30.5%', left: '35.5%', width: '3.0%', height: '7.5%' },
      points: "56.8,27.4 61.6,27.4 61.6,34.2 56.8,34.2"
    },
    {
      wordKey: "shampoo",
      korean: "샴푸",
      audioUrl: "/audio/bathroom/shampoo.mp3",
      videoPath: "/video/bathroom/shampoo.mp4",
      sentence: "Wash your hair with shampoo.",
      targetStyle: { top: '30.0%', left: '39.0%', width: '2.5%', height: '7.5%' },
      points: "62.4,27.0 66.4,27.0 66.4,33.7 62.4,33.7"
    },
    {
      wordKey: "conditioner",
      korean: "린스/컨디셔너",
      audioUrl: "/audio/bathroom/conditioner.mp3",
      videoPath: "/video/bathroom/conditioner.mp4",
      sentence: "I use conditioner after shampoo.",
      targetStyle: { top: '30.0%', left: '41.0%', width: '2.5%', height: '7.5%' },
      points: "65.6,27.0 69.6,27.0 69.6,33.7 65.6,33.7"
    },
    {
      wordKey: "bodywash",
      korean: "바디워시",
      audioUrl: "/audio/bathroom/bodywash.mp3",
      videoPath: "/video/bathroom/bodywash.mp4",
      sentence: "I use bodywash to wash my body.",
      targetStyle: { top: '48.0%', left: '48.5%', width: '3.0%', height: '6.5%' },
      points: "77.6,43.2 82.4,43.2 82.4,49.0 77.6,49.0"
    },
    {
      wordKey: "razor",
      korean: "면도기",
      audioUrl: "/audio/bathroom/razor.mp3",
      videoPath: "/video/bathroom/razor.mp4",
      sentence: "Dad uses a razor to shave.",
      targetStyle: { top: '61.5%', left: '79.5%', width: '5.0%', height: '3.0%' },
      points: "127.2,55.3 135.2,55.3 135.2,58.0 127.2,58.0"
    },
    {
      wordKey: "hairdryer",
      korean: "헤어드라이어",
      audioUrl: "/audio/bathroom/hairdryer.mp3",
      videoPath: "/video/bathroom/hairdryer.mp4",
      sentence: "I dry my hair with a hairdryer.",
      targetStyle: { top: '59.0%', left: '85.0%', width: '10.0%', height: '7.5%' },
      points: "136.0,53.1 152.0,53.1 152.0,59.8 136.0,59.8"
    }
  ]
};