


import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const playgroundImg = ThemeImage.playground;
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

export const playgroundData: PlaceDataType = {
  placeKey: "playground",
  placeTitle: "Playground Word Adventure",
  bgImage: playgroundImg,
  masterRegions: [
    {
      wordKey: "slide",
      korean: "미끄럼틀",
      audioUrl: "/audio/playground/slide.mp3",
      videoPath: "/video/playground/slide.mp4",
      sentence: "She slides down the slide.",
      targetStyle: { top: '39.0%', left: '19.5%', width: '24.5%', height: '39.0%' },
      points: "31.2,35.1 70.4,35.1 70.4,70.2 31.2,70.2"
    },
    {
      wordKey: "swing",
      korean: "그네",
      audioUrl: "/audio/playground/swing.mp3",
      videoPath: "/video/playground/swing.mp4",
      sentence: "He is riding on the swing.",
      targetStyle: { top: '25.0%', left: '72.0%', width: '26.0%', height: '45.0%' },
      points: "115.2,22.5 156.8,22.5 156.8,63.0 115.2,63.0"
    },
    {
      wordKey: "seesaw",
      korean: "시소",
      audioUrl: "/audio/playground/seesaw.mp3",
      videoPath: "/video/playground/seesaw.mp4",
      sentence: "The seesaw goes up and down.",
      targetStyle: { top: '63.5%', left: '2.5%', width: '30.0%', height: '23.0%' },
      points: "4.0,57.15 52.0,57.15 52.0,77.85 4.0,77.85"
    },
    {
      wordKey: "merry_go_round",
      korean: "회전무대/뺑뺑이",
      audioUrl: "/audio/playground/merry_go_round.mp3",
      videoPath: "/video/playground/merry_go_round.mp4",
      sentence: "The merry-go-round turns around.",
      targetStyle: { top: '51.5%', left: '39.0%', width: '10.5%', height: '9.5%' },
      points: "62.4,46.35 79.2,46.35 79.2,54.9 62.4,54.9"
    },
    {
      wordKey: "jungle_gym",
      korean: "정글짐",
      audioUrl: "/audio/playground/jungle_gym.mp3",
      videoPath: "/video/playground/jungle_gym.mp4",
      sentence: "I climb up the jungle gym.",
      targetStyle: { top: '17.5%', left: '33.5%', width: '10.5%', height: '37.5%' },
      points: "53.6,15.75 70.4,15.75 70.4,49.5 53.6,49.5"
    },
    {
      wordKey: "monkey_bars",
      korean: "구름다리/철봉",
      audioUrl: "/audio/playground/monkey_bars.mp3",
      videoPath: "/video/playground/monkey_bars.mp4",
      sentence: "He hangs on the monkey bars.",
      targetStyle: { top: '27.0%', left: '42.0%', width: '14.5%', height: '25.0%' },
      points: "67.2,24.3 90.4,24.3 90.4,46.8 67.2,46.8"
    },
    {
      wordKey: "sandbox",
      korean: "모래사장",
      audioUrl: "/audio/playground/sandbox.mp3",
      videoPath: "/video/playground/sandbox.mp4",
      sentence: "They play in the sandbox.",
      targetStyle: { top: '70.5%', left: '0.0%', width: '38.5%', height: '28.5%' },
      points: "0,63.45 61.6,63.45 61.6,89.1 0,89.1"
    },
    {
      wordKey: "trampoline",
      korean: "트램펄린/방방이",
      audioUrl: "/audio/playground/trampoline.mp3",
      videoPath: "/video/playground/trampoline.mp4",
      sentence: "I jump on the trampoline.",
      targetStyle: { top: '66.5%', left: '64.0%', width: '14.5%', height: '6.5%' },
      points: "102.4,59.85 125.6,59.85 125.6,65.7 102.4,65.7"
    },
    {
      wordKey: "climbing_wall",
      korean: "클라이밍 월",
      audioUrl: "/audio/playground/climbing_wall.mp3",
      videoPath: "/video/playground/climbing_wall.mp4",
      sentence: "I climb up the climbing wall.",
      targetStyle: { top: '29.0%', left: '13.0%', width: '8.0%', height: '39.0%' },
      points: "20.8,26.1 33.6,26.1 33.6,61.2 20.8,61.2"
    },
    {
      wordKey: "bench",
      korean: "벤치",
      audioUrl: "/audio/playground/bench.mp3",
      videoPath: "/video/playground/bench.mp4",
      sentence: "Mom sits on the bench.",
      targetStyle: { top: '48.5%', left: '1.5%', width: '12.5%', height: '12.5%' },
      points: "2.4,43.65 22.4,43.65 22.4,54.9 2.4,54.9"
    },
    {
      wordKey: "drinking_fountain",
      korean: "음수대",
      audioUrl: "/audio/playground/drinking_fountain.mp3",
      videoPath: "/video/playground/drinking_fountain.mp4",
      sentence: "I drink water from the drinking fountain.",
      targetStyle: { top: '49.0%', left: '15.5%', width: '3.0%', height: '8.5%' },
      points: "24.8,44.1 29.6,44.1 29.6,51.75 24.8,51.75"
    },
    {
      wordKey: "trash_can",
      korean: "쓰레기통",
      audioUrl: "/audio/playground/trash_can.mp3",
      videoPath: "/video/playground/trash_can.mp4",
      sentence: "Put trash in the trash can.",
      targetStyle: { top: '53.5%', left: '59.5%', width: '4.5%', height: '12.0%' },
      points: "95.2,48.15 102.4,48.15 102.4,58.95 95.2,58.95"
    },
    {
      wordKey: "shade_structure",
      korean: "그늘집/트리하우스",
      audioUrl: "/audio/playground/shade_structure.mp3",
      videoPath: "/video/playground/shade_structure.mp4",
      sentence: "The shade structure keeps off the sun.",
      targetStyle: { top: '6.5%', left: '1.5%', width: '15.0%', height: '28.0%' },
      points: "2.4,5.85 26.4,5.85 26.4,31.05 2.4,31.05"
    },
    {
      wordKey: "stepping_stones",
      korean: "징검다리",
      audioUrl: "/audio/playground/stepping_stones.mp3",
      videoPath: "/video/playground/stepping_stones.mp4",
      sentence: "I step on the stepping stones.",
      targetStyle: { top: '78.5%', left: '44.0%', width: '21.0%', height: '18.0%' },
      points: "70.4,70.65 104.0,70.65 104.0,86.85 70.4,86.85"
    },
    {
      wordKey: "ladder",
      korean: "사다리",
      audioUrl: "/audio/playground/ladder.mp3",
      videoPath: "/video/playground/ladder.mp4",
      sentence: "Climb the ladder to go up.",
      targetStyle: { top: '40.0%', left: '36.5%', width: '4.5%', height: '16.0%' },
      points: "58.4,36.0 65.6,36.0 65.6,50.4 58.4,50.4"
    },
    {
      wordKey: "push_the_swing",
      korean: "그네 밀기",
      audioUrl: "/audio/playground/push_the_swing.mp3",
      videoPath: "/video/playground/push_the_swing.mp4",
      sentence: "Dad helps to push the swing.",
      targetStyle: { top: '36.5%', left: '78.0%', width: '11.0%', height: '30.0%' },
      points: "124.8,32.85 142.4,32.85 142.4,59.85 124.8,59.85"
    },
    {
      wordKey: "jump",
      korean: "점프하다",
      audioUrl: "/audio/playground/jump.mp3",
      videoPath: "/video/playground/jump.mp4",
      sentence: "I jump high into the air.",
      targetStyle: { top: '65.0%', left: '67.0%', width: '8.5%', height: '8.0%' },
      points: "107.2,58.5 120.8,58.5 120.8,65.7 107.2,65.7"
    },
    {
      wordKey: "crawl",
      korean: "기어가다",
      audioUrl: "/audio/playground/crawl.mp3",
      videoPath: "/video/playground/crawl.mp4",
      sentence: "Crawl through the tunnel.",
      targetStyle: { top: '32.0%', left: '44.0%', width: '8.5%', height: '10.0%' },
      points: "70.4,28.8 84.0,28.8 84.0,37.8 70.4,37.8"
    },
    {
      wordKey: "bucket",
      korean: "양동이",
      audioUrl: "/audio/playground/bucket.mp3",
      videoPath: "/video/playground/bucket.mp4",
      sentence: "The red bucket is full of sand.",
      targetStyle: { top: '79.0%', left: '7.5%', width: '4.5%', height: '8.5%' },
      points: "12.0,71.1 19.2,71.1 19.2,78.75 12.0,78.75"
    },
    {
      wordKey: "shovel",
      korean: "모래 삽",
      audioUrl: "/audio/playground/shovel.mp3",
      videoPath: "/video/playground/shovel.mp4",
      sentence: "I dig sand with a shovel.",
      targetStyle: { top: '78.5%', left: '8.0%', width: '2.0%', height: '4.5%' },
      points: "12.8,70.65 16.0,70.65 16.0,74.7 12.8,74.7"
    },
    {
      wordKey: "jump_rope",
      korean: "줄넘기",
      audioUrl: "/audio/playground/jump_rope.mp3",
      videoPath: "/video/playground/jump_rope.mp4",
      sentence: "Jump rope is good exercise.",
      targetStyle: { top: '53.0%', left: '67.0%', width: '6.5%', height: '8.5%' },
      points: "107.2,47.7 117.6,47.7 117.6,55.35 107.2,55.35"
    },
    {
      wordKey: "helmet",
      korean: "헬멧/안전모",
      audioUrl: "/audio/playground/helmet.mp3",
      videoPath: "/video/playground/helmet.mp4",
      sentence: "Always wear a helmet for safety.",
      targetStyle: { top: '54.0%', left: '71.5%', width: '3.0%', height: '4.5%' },
      points: "114.4,48.6 119.2,48.6 119.2,52.65 114.4,52.65"
    },
    {
      wordKey: "scooter",
      korean: "킥보드/스쿠터",
      audioUrl: "/audio/playground/scooter.mp3",
      videoPath: "/video/playground/scooter.mp4",
      sentence: "He rides a red scooter.",
      targetStyle: { top: '52.0%', left: '67.0%', width: '6.5%', height: '9.5%' },
      points: "107.2,46.8 117.6,46.8 117.6,55.35 107.2,55.35"
    }
  ]
};