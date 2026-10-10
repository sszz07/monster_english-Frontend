import aquariumImg from "@/assets/image/places/fantasy-nature/Aquarium.jpg";

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
  imageType?: string;
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const aquariumData: PlaceDataType = {
  placeKey: "aquarium",
  placeTitle: "Aquarium Word Adventure",
  bgImage: aquariumImg,
  masterRegions: [
    // 1. 유리(유리벽)
    {
      wordKey: "glass",
      korean: "유리(유리벽)",
      audioUrl: "/audio/aquarium/glass.mp3",
      videoPath: "/video/aquarium/Glass.mp4",
      sentence: "The glass is thick and clear on the wall. Pressing your face against the glass is not allowed here.",
      imageType: "aquarium",
      targetStyle: { top: '5.0%', left: '1.0%', width: '4.0%', height: '4.0%' },
      points: "1.6,4.5 8.0,4.5 8.0,8.1 1.6,8.1"
    },
    // 2. 해마
    {
      wordKey: "seahorse",
      korean: "해마",
      audioUrl: "/audio/aquarium/seahorse.mp3",
      videoPath: "/video/aquarium/Seahorse.mp4",
      sentence: "The seahorse is small and delicate near the seaweed. Spotting a seahorse in the tank is her favorite activity.",
      imageType: "aquarium",
      targetStyle: { top: '22.0%', left: '3.0%', width: '3.0%', height: '6.0%' },
      points: "4.8,19.8 9.6,19.8 9.6,25.2 4.8,25.2"
    },
    // 3. 물
    {
      wordKey: "water",
      korean: "물",
      audioUrl: "/audio/aquarium/water.mp3",
      videoPath: "/video/aquarium/Water.mp4",
      sentence: "The water is cold and blue in the big tank. Feeling the cold water in the touch pool is refreshing.",
      imageType: "aquarium",
      targetStyle: { top: '5.0%', left: '10.0%', width: '8.0%', height: '5.0%' },
      points: "16.0,4.5 28.8,4.5 28.8,9.0 16.0,9.0"
    },
    // 4. 고래
    {
      wordKey: "whale",
      korean: "고래",
      audioUrl: "/audio/aquarium/whale.mp3",
      videoPath: "/video/aquarium/Whale.mp4",
      sentence: "The whale is enormous and graceful in the ocean exhibit. Learning about whales at the aquarium is very educational.",
      imageType: "aquarium",
      targetStyle: { top: '20.0%', left: '15.0%', width: '12.0%', height: '8.0%' },
      points: "24.0,18.0 43.2,18.0 43.2,25.2 24.0,25.2"
    },
    // 5. 물방울(거품)
    {
      wordKey: "bubbles",
      korean: "물방울(거품)",
      audioUrl: "/audio/aquarium/bubbles.mp3",
      videoPath: "/video/aquarium/Bubbles.mp4",
      sentence: "The bubbles are small and shiny in the water. Watching bubbles rise to the top of the tank is relaxing.",
      imageType: "aquarium",
      targetStyle: { top: '5.0%', left: '25.0%', width: '4.0%', height: '6.0%' },
      points: "40.0,4.5 46.4,4.5 46.4,9.9 40.0,9.9"
    },
    // 6. 물고기
    {
      wordKey: "fish",
      korean: "물고기",
      audioUrl: "/audio/aquarium/fish.mp3",
      videoPath: "/video/aquarium/Fish.mp4",
      sentence: "The fish are colorful and small in the tank. Watching fish swim in the tank is very calming.",
      imageType: "aquarium",
      targetStyle: { top: '42.0%', left: '12.0%', width: '5.0%', height: '4.0%' },
      points: "19.2,37.8 27.2,37.8 27.2,41.4 19.2,41.4"
    },
    // 7. 상어
    {
      wordKey: "shark",
      korean: "상어",
      audioUrl: "/audio/aquarium/shark.mp3",
      videoPath: "/video/aquarium/Shark.mp4",
      sentence: "The shark is huge and scary in the deep tank. Seeing a shark up close through the glass is thrilling.",
      imageType: "aquarium",
      targetStyle: { top: '42.0%', left: '26.0%', width: '10.0%', height: '8.0%' },
      points: "41.6,37.8 57.6,37.8 57.6,45.0 41.6,45.0"
    },
    // 8. 돌고래
    {
      wordKey: "dolphin",
      korean: "돌고래",
      audioUrl: "/audio/aquarium/dolphin.mp3",
      videoPath: "/video/aquarium/Dolphin.mp4",
      sentence: "The dolphin is smart and playful in the pool. Watching dolphins perform tricks in the show is exciting.",
      imageType: "aquarium",
      targetStyle: { top: '32.0%', left: '38.0%', width: '5.0%', height: '3.0%' },
      points: "60.8,28.8 68.8,28.8 68.8,31.5 60.8,31.5"
    },
    // 9. 가오리
    {
      wordKey: "stingray",
      korean: "가오리",
      audioUrl: "/audio/aquarium/stingray.mp3",
      videoPath: "/video/aquarium/Stingray.mp4",
      sentence: "The stingray is flat and wide in the shallow tank. Touching a stingray in the touch pool is unforgettable.",
      imageType: "aquarium",
      targetStyle: { top: '12.0%', left: '42.0%', width: '6.0%', height: '5.0%' },
      points: "67.2,10.8 76.8,10.8 76.8,15.3 67.2,15.3"
    },
    // 10. 거북이
    {
      wordKey: "turtle",
      korean: "거북이",
      audioUrl: "/audio/aquarium/turtle.mp3",
      videoPath: "/video/aquarium/Turtle.mp4",
      sentence: "The turtle is slow and calm in the water. Observing a turtle swimming near the coral is peaceful.",
      imageType: "aquarium",
      targetStyle: { top: '28.0%', left: '52.0%', width: '3.0%', height: '3.0%' },
      points: "83.2,25.2 88.0,25.2 88.0,27.9 83.2,27.9"
    },
    // 11. 해초
    {
      wordKey: "seaweed",
      korean: "해초",
      audioUrl: "/audio/aquarium/seaweed.mp3",
      videoPath: "/video/aquarium/Seaweed.mp4",
      sentence: "The seaweed is long and green in the tank. Touching seaweed in the shallow tank feels slimy and strange.",
      imageType: "aquarium",
      targetStyle: { top: '55.0%', left: '24.0%', width: '4.0%', height: '5.0%' },
      points: "38.4,49.5 44.8,49.5 44.8,54.0 38.4,54.0"
    },
    // 12. 해파리
    {
      wordKey: "jellyfish",
      korean: "해파리",
      audioUrl: "/audio/aquarium/jellyfish.mp3",
      videoPath: "/video/aquarium/Jellyfish.mp4",
      sentence: "The jellyfish is soft and glowing in the dark tank. Staring at jellyfish floating in the water is hypnotizing.",
      imageType: "aquarium",
      targetStyle: { top: '32.0%', left: '57.0%', width: '2.0%', height: '4.0%' },
      points: "91.2,28.8 94.4,28.8 94.4,32.4 91.2,32.4"
    },
    // 13. 산호
    {
      wordKey: "coral",
      korean: "산호",
      audioUrl: "/audio/aquarium/coral.mp3",
      videoPath: "/video/aquarium/Coral.mp4",
      sentence: "The coral is bright and beautiful at the bottom. Protecting coral reefs in the ocean is very important.",
      imageType: "aquarium",
      targetStyle: { top: '86.0%', left: '2.0%', width: '8.0%', height: '10.0%' },
      points: "3.2,77.4 16.0,77.4 16.0,86.4 3.2,86.4"
    },
    // 14. 바위
    {
      wordKey: "rock",
      korean: "바위",
      audioUrl: "/audio/aquarium/rock.mp3",
      videoPath: "/video/aquarium/Rock.mp4",
      sentence: "The rock is rough and dark at the bottom. Finding a crab hiding under a rock in the tank is exciting.",
      imageType: "aquarium",
      targetStyle: { top: '88.0%', left: '12.0%', width: '4.0%', height: '5.0%' },
      points: "19.2,79.2 25.6,79.2 25.6,83.7 19.2,83.7"
    },
    // 15. 불가사리
    {
      wordKey: "starfish",
      korean: "불가사리",
      audioUrl: "/audio/aquarium/starfish.mp3",
      videoPath: "/video/aquarium/Starfish.mp4",
      sentence: "The starfish is bright and flat on the rock. Holding a starfish in the touch pool is a special experience.",
      imageType: "aquarium",
      targetStyle: { top: '80.0%', left: '22.0%', width: '3.0%', height: '4.0%' },
      points: "35.2,72.0 40.0,72.0 40.0,75.6 35.2,75.6"
    },
    // 16. 조개껍데기
    {
      wordKey: "shell",
      korean: "조개껍데기",
      audioUrl: "/audio/aquarium/shell.mp3",
      videoPath: "/video/aquarium/Shell.mp4",
      sentence: "The shell is hard and spiral on the sandy bottom. Collecting shells in the touch tank is fun for kids.",
      imageType: "aquarium",
      targetStyle: { top: '80.0%', left: '28.0%', width: '3.0%', height: '3.0%' },
      points: "44.8,72.0 49.6,72.0 49.6,74.7 44.8,74.7"
    },
    // 17. 새우
    {
      wordKey: "shrimp",
      korean: "새우",
      audioUrl: "/audio/aquarium/shrimp.mp3",
      videoPath: "/video/aquarium/Shrimp.mp4",
      sentence: "The shrimp is tiny and pink in the coral tank. Finding a shrimp hiding in the coral takes sharp eyes.",
      imageType: "aquarium",
      targetStyle: { top: '72.0%', left: '26.0%', width: '3.0%', height: '3.0%' },
      points: "41.6,64.8 46.4,64.8 46.4,67.5 41.6,67.5"
    },
    // 18. 게
    {
      wordKey: "crab",
      korean: "게",
      audioUrl: "/audio/aquarium/crab.mp3",
      videoPath: "/video/aquarium/Crab.mp4",
      sentence: "The crab is hard and red on the rocky bottom. Watching a crab walk sideways in the tank is funny.",
      imageType: "aquarium",
      targetStyle: { top: '72.0%', left: '32.0%', width: '3.0%', height: '3.0%' },
      points: "51.2,64.8 56.0,64.8 56.0,67.5 51.2,67.5"
    },
    // 19. 모래
    {
      wordKey: "sand",
      korean: "모래",
      audioUrl: "/audio/aquarium/sand.mp3",
      videoPath: "/video/aquarium/Sand.mp4",
      sentence: "The sand is soft and white at the bottom. Watching fish rest on the sand in the tank is calming.",
      imageType: "aquarium",
      targetStyle: { top: '86.0%', left: '26.0%', width: '5.0%', height: '4.0%' },
      points: "41.6,77.4 49.6,77.4 49.6,81.0 41.6,81.0"
    },
    // 20. 먹이주기 쇼
    {
      wordKey: "feedingShow",
      korean: "먹이주기 쇼",
      audioUrl: "/audio/aquarium/feedingshow.mp3",
      videoPath: "/video/aquarium/FeedingShow.mp4",
      sentence: "The feeding show is exciting and popular in the afternoon. Attending the feeding show at the aquarium is a must-do.",
      imageType: "aquarium",
      targetStyle: { top: '42.0%', left: '60.0%', width: '5.0%', height: '3.0%' },
      points: "96.0,37.8 104.0,37.8 104.0,40.5 96.0,40.5"
    },
    // 21. 조명(불빛)
    {
      wordKey: "light",
      korean: "조명(불빛)",
      audioUrl: "/audio/aquarium/light.mp3",
      videoPath: "/video/aquarium/Light.mp4",
      sentence: "The light is blue and dim inside the tunnel. Walking through the blue light in the tunnel is magical.",
      imageType: "aquarium",
      targetStyle: { top: '3.0%', left: '68.0%', width: '4.0%', height: '4.0%' },
      points: "108.8,2.7 115.2,2.7 115.2,6.3 108.8,6.3"
    },
    // 22. 수조
    {
      wordKey: "tank",
      korean: "수조",
      audioUrl: "/audio/aquarium/tank.mp3",
      videoPath: "/video/aquarium/Tank.mp4",
      sentence: "The tank is enormous and clear in the main hall. Standing in front of the big tank feels like being underwater.",
      imageType: "aquarium",
      targetStyle: { top: '20.0%', left: '78.0%', width: '6.0%', height: '10.0%' },
      points: "124.8,18.0 134.4,18.0 134.4,27.0 124.8,27.0"
    },
    // 23. 잠수사
    {
      wordKey: "diver",
      korean: "잠수사",
      audioUrl: "/audio/aquarium/diver.mp3",
      videoPath: "/video/aquarium/Diver.mp4",
      sentence: "The diver is brave and skilled inside the shark tank. Watching a diver feed sharks in the tank is breathtaking.",
      imageType: "aquarium",
      targetStyle: { top: '40.0%', left: '84.0%', width: '4.0%', height: '10.0%' },
      points: "134.4,36.0 140.8,36.0 140.8,45.0 134.4,45.0"
    },
    // 24. 통로(길)
    {
      wordKey: "path",
      korean: "통로(길)",
      audioUrl: "/audio/aquarium/path.mp3",
      videoPath: "/video/aquarium/Path.mp4",
      sentence: "The path is narrow and winding through the aquarium. Following the path through the aquarium leads to every exhibit.",
      imageType: "aquarium",
      targetStyle: { top: '80.0%', left: '65.0%', width: '8.0%', height: '10.0%' },
      points: "104.0,72.0 116.8,72.0 116.8,81.0 104.0,81.0"
    },
    // 25. 안내도(지도)
    {
      wordKey: "map",
      korean: "안내도(지도)",
      audioUrl: "/audio/aquarium/map.mp3",
      videoPath: "/video/aquarium/Map.mp4",
      sentence: "The map is colorful and helpful at the entrance. Using the aquarium map helps visitors find the feeding show.",
      imageType: "aquarium",
      targetStyle: { top: '72.0%', left: '78.0%', width: '5.0%', height: '8.0%' },
      points: "124.8,64.8 132.8,64.8 132.8,72.0 124.8,72.0"
    }
  ]
};