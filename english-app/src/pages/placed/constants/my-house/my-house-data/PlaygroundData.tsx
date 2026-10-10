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
    // 1. 미끄럼틀 (다른 영역과 겹치지 않게 본체로 축소)
    {
      wordKey: "slide",
      korean: "미끄럼틀",
      audioUrl: "/audio/playground/slide.mp3",
      videoPath: "/video/playground/slide.mp4",
      sentence: "The slide is tall. She goes down the slide.",
      targetStyle: { top: '40.0%', left: '20.0%', width: '8.0%', height: '15.0%' },
      points: "32.0,36.0 44.8,36.0 44.8,49.5 32.0,49.5"
    },
    // 2. 그네 (미는 사람과 겹치지 않게 우측으로 분리)
    {
      wordKey: "swing",
      korean: "그네",
      audioUrl: "/audio/playground/swing.mp3",
      videoPath: "/video/playground/swing.mp4",
      sentence: "The swing is fun. He pumps his legs on the swing.",
      targetStyle: { top: '25.0%', left: '88.0%', width: '8.0%', height: '15.0%' },
      points: "140.8,22.5 153.6,22.5 153.6,36.0 140.8,36.0"
    },
    // 3. 시소
    {
      wordKey: "seesaw",
      korean: "시소",
      audioUrl: "/audio/playground/seesaw.mp3",
      videoPath: "/video/playground/seesaw.mp4",
      sentence: "The seesaw goes up and down. We ride the seesaw together.",
      targetStyle: { top: '60.0%', left: '25.0%', width: '10.0%', height: '10.0%' },
      points: "40.0,54.0 56.0,54.0 56.0,63.0 40.0,63.0"
    },
    // 4. 회전무대/뺑뺑이
    {
      wordKey: "merry_go_round",
      korean: "회전무대/뺑뺑이",
      audioUrl: "/audio/playground/merry_go_round.mp3",
      videoPath: "/video/playground/merry_go_round.mp4",
      sentence: "The merry-go-round spins fast. I hold on to the merry-go-round.",
      targetStyle: { top: '51.0%', left: '39.0%', width: '8.0%', height: '8.0%' },
      points: "62.4,45.9 75.2,45.9 75.2,53.1 62.4,53.1"
    },
    // 5. 정글짐
    {
      wordKey: "jungle_gym",
      korean: "정글짐",
      audioUrl: "/audio/playground/jungle_gym.mp3",
      videoPath: "/video/playground/jungle_gym.mp4",
      sentence: "The jungle gym is colorful. Kids climb the jungle gym.",
      targetStyle: { top: '17.0%', left: '33.0%', width: '8.0%', height: '10.0%' },
      points: "52.8,15.3 65.6,15.3 65.6,24.3 52.8,24.3"
    },
    // 6. 구름다리/철봉
    {
      wordKey: "monkey_bars",
      korean: "구름다리/철봉",
      audioUrl: "/audio/playground/monkey_bars.mp3",
      videoPath: "/video/playground/monkey_bars.mp4",
      sentence: "The monkey bars are high. She swings across the monkey bars.",
      targetStyle: { top: '20.0%', left: '45.0%', width: '8.0%', height: '8.0%' },
      points: "72.0,18.0 84.8,18.0 84.8,25.2 72.0,25.2"
    },
    // 7. 모래사장 (시소 아래쪽으로 분리)
    {
      wordKey: "sandbox",
      korean: "모래사장",
      audioUrl: "/audio/playground/sandbox.mp3",
      videoPath: "/video/playground/sandbox.mp4",
      sentence: "The sandbox is full of sand. We build castles in the sandbox.",
      targetStyle: { top: '85.0%', left: '20.0%', width: '15.0%', height: '10.0%' },
      points: "32.0,76.5 56.0,76.5 56.0,85.5 32.0,85.5"
    },
    // 8. 트램펄린/방방이
    {
      wordKey: "trampoline",
      korean: "트램펄린/방방이",
      audioUrl: "/audio/playground/trampoline.mp3",
      videoPath: "/video/playground/trampoline.mp4",
      sentence: "The trampoline is bouncy. He jumps high on the trampoline.",
      targetStyle: { top: '75.0%', left: '62.0%', width: '10.0%', height: '8.0%' },
      points: "99.2,67.5 115.2,67.5 115.2,74.7 99.2,74.7"
    },
    // 9. 클라이밍 월
    {
      wordKey: "climbing_wall",
      korean: "클라이밍 월",
      audioUrl: "/audio/playground/climbing_wall.mp3",
      videoPath: "/video/playground/climbing_wall.mp4",
      sentence: "The climbing wall is steep. I climb up the climbing wall.",
      targetStyle: { top: '30.0%', left: '13.0%', width: '5.0%', height: '10.0%' },
      points: "20.8,27.0 28.8,27.0 28.8,36.0 20.8,36.0"
    },
    // 10. 벤치
    {
      wordKey: "bench",
      korean: "벤치",
      audioUrl: "/audio/playground/bench.mp3",
      videoPath: "/video/playground/bench.mp4",
      sentence: "The bench is wooden. Mom sits on the bench.",
      targetStyle: { top: '48.0%', left: '2.0%', width: '8.0%', height: '8.0%' },
      points: "3.2,43.2 16.0,43.2 16.0,50.4 3.2,50.4"
    },
    // 11. 음수대
    {
      wordKey: "drinking_fountain",
      korean: "음수대",
      audioUrl: "/audio/playground/drinking_fountain.mp3",
      videoPath: "/video/playground/drinking_fountain.mp4",
      sentence: "The drinking fountain is cold. I drink water from the drinking fountain.",
      targetStyle: { top: '48.0%', left: '12.0%', width: '4.0%', height: '6.0%' },
      points: "19.2,43.2 25.6,43.2 25.6,48.6 19.2,48.6"
    },
    // 12. 쓰레기통
    {
      wordKey: "trash_can",
      korean: "쓰레기통",
      audioUrl: "/audio/playground/trash_can.mp3",
      videoPath: "/video/playground/trash_can.mp4",
      sentence: "The trash can is green. I throw my wrapper in the trash can.",
      targetStyle: { top: '53.0%', left: '58.0%', width: '4.0%', height: '6.0%' },
      points: "92.8,47.7 99.2,47.7 99.2,53.1 92.8,53.1"
    },
    // 13. 그늘집/트리하우스
    {
      wordKey: "shade_structure",
      korean: "그늘집/트리하우스",
      audioUrl: "/audio/playground/shade_structure.mp3",
      videoPath: "/video/playground/shade_structure.mp4",
      sentence: "The shade structure blocks the sun. We rest under the shade structure.",
      targetStyle: { top: '10.0%', left: '5.0%', width: '10.0%', height: '10.0%' },
      points: "8.0,9.0 24.0,9.0 24.0,18.0 8.0,18.0"
    },
    // 14. 징검다리
    {
      wordKey: "stepping_stones",
      korean: "징검다리",
      audioUrl: "/audio/playground/stepping_stones.mp3",
      videoPath: "/video/playground/stepping_stones.mp4",
      sentence: "The stepping stones are round. I hop on the stepping stones.",
      targetStyle: { top: '85.0%', left: '45.0%', width: '10.0%', height: '8.0%' },
      points: "72.0,76.5 88.0,76.5 88.0,83.7 72.0,83.7"
    },
    // 15. 사다리
    {
      wordKey: "ladder",
      korean: "사다리",
      audioUrl: "/audio/playground/ladder.mp3",
      videoPath: "/video/playground/ladder.mp4",
      sentence: "The ladder goes up high. She climbs the ladder carefully.",
      targetStyle: { top: '40.0%', left: '34.0%', width: '4.0%', height: '8.0%' },
      points: "54.4,36.0 60.8,36.0 60.8,43.2 54.4,43.2"
    },
    // 16. 그네 밀기 (그네 본체와 분리되도록 좌측으로 배치)
    {
      wordKey: "push_the_swing",
      korean: "그네 밀기",
      audioUrl: "/audio/playground/push_the_swing.mp3",
      videoPath: "/video/playground/push_the_swing.mp4",
      sentence: "I push my friend on the swing. He pushes the merry-go-round.",
      targetStyle: { top: '36.0%', left: '78.0%', width: '8.0%', height: '15.0%' },
      points: "124.8,32.4 137.6,32.4 137.6,45.9 124.8,45.9"
    },
    // 17. 점프하다 (트램펄린 위쪽 허공으로 분리)
    {
      wordKey: "jump",
      korean: "점프하다",
      audioUrl: "/audio/playground/jump.mp3",
      videoPath: "/video/playground/jump.mp4",
      sentence: "We jump on the trampoline. She jumps over the stepping stones.",
      targetStyle: { top: '65.0%', left: '62.0%', width: '6.0%', height: '6.0%' },
      points: "99.2,58.5 108.8,58.5 108.8,63.9 99.2,63.9"
    },
    // 18. 기어가다 (철봉/구름다리 아래쪽으로 배치)
    {
      wordKey: "crawl",
      korean: "기어가다",
      audioUrl: "/audio/playground/crawl.mp3",
      videoPath: "/video/playground/crawl.mp4",
      sentence: "He crawls through the tunnel. I crawl under the jungle gym.",
      targetStyle: { top: '32.0%', left: '45.0%', width: '6.0%', height: '6.0%' },
      points: "72.0,28.8 81.6,28.8 81.6,34.2 72.0,34.2"
    },
    // 19. 양동이
    {
      wordKey: "bucket",
      korean: "양동이",
      audioUrl: "/audio/playground/bucket.mp3",
      videoPath: "/video/playground/bucket.mp4",
      sentence: "The bucket is red. I fill my bucket with sand.",
      targetStyle: { top: '80.0%', left: '5.0%', width: '5.0%', height: '5.0%' },
      points: "8.0,72.0 16.0,72.0 16.0,76.5 8.0,76.5"
    },
    // 20. 모래 삽 (양동이 우측으로 분리)
    {
      wordKey: "shovel",
      korean: "모래 삽",
      audioUrl: "/audio/playground/shovel.mp3",
      videoPath: "/video/playground/shovel.mp4",
      sentence: "The shovel is yellow. He digs with a shovel.",
      targetStyle: { top: '80.0%', left: '12.0%', width: '4.0%', height: '4.0%' },
      points: "19.2,72.0 25.6,72.0 25.6,75.6 19.2,75.6"
    },
    // 21. 줄넘기 (스쿠터 우측으로 분리)
    {
      wordKey: "jump_rope",
      korean: "줄넘기",
      audioUrl: "/audio/playground/jump_rope.mp3",
      videoPath: "/video/playground/jump_rope.mp4",
      sentence: "The jump rope is long. We take turns with the jump rope.",
      targetStyle: { top: '52.0%', left: '72.0%', width: '5.0%', height: '6.0%' },
      points: "115.2,46.8 123.2,46.8 123.2,52.2 115.2,52.2"
    },
    // 22. 헬멧/안전모 (스쿠터 위쪽으로 분리)
    {
      wordKey: "helmet",
      korean: "헬멧/안전모",
      audioUrl: "/audio/playground/helmet.mp3",
      videoPath: "/video/playground/helmet.mp4",
      sentence: "The helmet is important. I always wear my helmet.",
      targetStyle: { top: '46.0%', left: '69.0%', width: '4.0%', height: '4.0%' },
      points: "110.4,41.4 116.8,41.4 116.8,45.0 110.4,45.0"
    },
    // 23. 킥보드/스쿠터
    {
      wordKey: "scooter",
      korean: "킥보드/스쿠터",
      audioUrl: "/audio/playground/scooter.mp3",
      videoPath: "/video/playground/scooter.mp4",
      sentence: "The scooter is fast. She rides her scooter on the path.",
      targetStyle: { top: '52.0%', left: '66.0%', width: '5.0%', height: '6.0%' },
      points: "105.6,46.8 113.6,46.8 113.6,52.2 105.6,52.2"
    }
  ]
};