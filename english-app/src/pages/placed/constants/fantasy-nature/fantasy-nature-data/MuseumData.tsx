import museumImg from "@/assets/image/places/fantasy-nature/Museum.jpg";

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

export const museumData: PlaceDataType = {
  placeKey: "museum",
  placeTitle: "Museum Word Adventure",
  bgImage: museumImg,
  masterRegions: [
    // 1. 갤러리/미술관 (배경 벽면 빈 공간)
    {
      wordKey: "gallery",
      korean: "갤러리/미술관",
      audioUrl: "/audio/museum/gallery.mp3",
      videoPath: "/video/museum/gallery.mp4",
      sentence: "The gallery is quiet and beautiful on the second floor. She enjoys walking through the gallery.",
      targetStyle: { top: '10.0%', left: '20.0%', width: '5.0%', height: '5.0%' },
      points: "32.0,9.0 40.0,9.0 40.0,13.5 32.0,13.5"
    },
    // 2. 전시품 (좌측 유리장 내부 말머리 조각)
    {
      wordKey: "exhibit",
      korean: "전시품",
      audioUrl: "/audio/museum/exhibit.mp3",
      videoPath: "/video/museum/exhibit.mp4",
      sentence: "The exhibit is exciting and new in the museum. Looking at the exhibit is interesting for students.",
      targetStyle: { top: '42.0%', left: '19.0%', width: '4.0%', height: '6.0%' },
      points: "30.4,37.8 36.8,37.8 36.8,43.2 30.4,43.2"
    },
    // 3. 그림/명화 (우측 벽면 끝의 진주 귀걸이를 한 소녀 그림)
    {
      wordKey: "painting",
      korean: "그림/명화",
      audioUrl: "/audio/museum/painting.mp3",
      videoPath: "/video/museum/painting.mp4",
      sentence: "The painting is old and colorful on the wall. He loves staring at the painting for a long time.",
      targetStyle: { top: '20.0%', left: '94.0%', width: '4.0%', height: '7.0%' },
      points: "150.4,18.0 156.8,18.0 156.8,24.3 150.4,24.3"
    },
    // 4. 조각/조각상 (좌측 하단 사람 형태의 돌 조각상)
    {
      wordKey: "sculpture",
      korean: "조각/조각상",
      audioUrl: "/audio/museum/sculpture.mp3",
      videoPath: "/video/museum/sculpture.mp4",
      sentence: "The sculpture is tall and heavy in the center. Touching the sculpture is not allowed in the museum.",
      targetStyle: { top: '55.0%', left: '4.0%', width: '3.0%', height: '10.0%' },
      points: "6.4,49.5 11.2,49.5 11.2,58.5 6.4,58.5"
    },
    // 5. 유물/공예품 (우측 유리장 내부 도자기)
    {
      wordKey: "artifact",
      korean: "유물/공예품",
      audioUrl: "/audio/museum/artifact.mp3",
      videoPath: "/video/museum/artifact.mp4",
      sentence: "The artifact is ancient and fragile in the glass case. She enjoys learning about artifacts from the past.",
      targetStyle: { top: '36.0%', left: '71.0%', width: '2.5%', height: '5.0%' },
      points: "113.6,32.4 117.6,32.4 117.6,36.9 113.6,36.9"
    },
    // 6. 동상/사자상 (중앙 배경 분수대의 큰 사자 동상 본체)
    {
      wordKey: "statue",
      korean: "동상/조각상",
      audioUrl: "/audio/museum/statue.mp3",
      videoPath: "/video/museum/statue.mp4",
      sentence: "The statue is big and strong near the fountain. He spends time looking at the statue with his friends.",
      targetStyle: { top: '25.0%', left: '46.0%', width: '6.0%', height: '10.0%' },
      points: "73.6,22.5 83.2,22.5 83.2,31.5 73.6,31.5"
    },
    // 7. 가이드/안내원 (안내하는 초록색 몬스터의 얼굴)
    {
      wordKey: "guide",
      korean: "가이드/안내원",
      audioUrl: "/audio/museum/guide.mp3",
      videoPath: "/video/museum/guide.mp4",
      sentence: "The guide is friendly and helpful at the entrance. Following the guide through the museum is very helpful.",
      targetStyle: { top: '45.0%', left: '78.0%', width: '5.0%', height: '6.0%' },
      points: "124.8,40.5 132.8,40.5 132.8,45.9 124.8,45.9"
    },
    // 8. 티켓/표 (좌측 안내 데스크 위 종이 티켓)
    {
      wordKey: "ticket",
      korean: "티켓/표",
      audioUrl: "/audio/museum/ticket.mp3",
      videoPath: "/video/museum/ticket.mp4",
      sentence: "The ticket is small and colorful at the front desk. Buying a ticket at the entrance is easy.",
      targetStyle: { top: '44.0%', left: '7.5%', width: '2.0%', height: '3.0%' },
      points: "12.0,39.6 15.2,39.6 15.2,42.3 12.0,42.3"
    },
    // 9. 안내 책자/브로셔 (안경 쓴 소녀가 펼쳐 든 종이)
    {
      wordKey: "brochure",
      korean: "안내 책자/브로셔",
      audioUrl: "/audio/museum/brochure.mp3",
      videoPath: "/video/museum/brochure.mp4",
      sentence: "The brochure is thin and informative at the counter. She picks up a brochure at the entrance.",
      targetStyle: { top: '66.0%', left: '64.0%', width: '4.0%', height: '6.0%' },
      points: "102.4,59.4 108.8,59.4 108.8,64.8 102.4,64.8"
    },
    // 10. 오디오 가이드 (소년이 쓴 파란색 헤드폰)
    {
      wordKey: "audio_guide",
      korean: "오디오 가이드",
      audioUrl: "/audio/museum/audio_guide.mp3",
      videoPath: "/video/museum/audio_guide.mp4",
      sentence: "The audio guide is useful and clear in your ear. Listening to the audio guide makes learning fun.",
      targetStyle: { top: '54.0%', left: '55.5%', width: '3.0%', height: '4.0%' },
      points: "88.8,48.6 93.6,48.6 93.6,52.2 88.8,52.2"
    },
    // 11. 역사 (입구 위 'history' 간판)
    {
      wordKey: "history",
      korean: "역사",
      audioUrl: "/audio/museum/history.mp3",
      videoPath: "/video/museum/history.mp4",
      sentence: "History is deep and interesting in this museum. Reading about history in the brochure is exciting.",
      targetStyle: { top: '18.0%', left: '14.0%', width: '5.0%', height: '3.0%' },
      points: "22.4,16.2 30.4,16.2 30.4,18.9 22.4,18.9"
    },
    // 12. 문화 (소년이 들고 있는 지구본 모형)
    {
      wordKey: "culture",
      korean: "문화",
      audioUrl: "/audio/museum/culture.mp3",
      videoPath: "/video/museum/culture.mp4",
      sentence: "The culture is rich and colorful in every exhibit. Learning about culture at the museum is wonderful.",
      targetStyle: { top: '65.0%', left: '59.0%', width: '3.5%', height: '5.0%' },
      points: "94.4,58.5 100.0,58.5 100.0,63.0 94.4,63.0"
    },
    // 13. 고대의 (좌측 하단 사자가 조각된 고대 석판)
    {
      wordKey: "ancient",
      korean: "고대의",
      audioUrl: "/audio/museum/ancient.mp3",
      videoPath: "/video/museum/ancient.mp4",
      sentence: "The ancient artifacts are rare and precious in the hall. Seeing ancient statues in person is unforgettable.",
      targetStyle: { top: '55.0%', left: '11.0%', width: '4.0%', height: '6.0%' },
      points: "17.6,49.5 24.0,49.5 24.0,54.9 17.6,54.9"
    },
    // 14. 현대 미술 (몬스터 발치에 놓인 현대적인 장난감 블록)
    {
      wordKey: "modern_art",
      korean: "현대 미술",
      audioUrl: "/audio/museum/modern_art.mp3",
      videoPath: "/video/museum/modern_art.mp4",
      sentence: "Modern art is bold and colorful in the gallery. Understanding modern art in the museum takes practice.",
      targetStyle: { top: '73.0%', left: '74.0%', width: '4.0%', height: '5.0%' },
      points: "118.4,65.7 124.8,65.7 124.8,70.2 118.4,70.2"
    },
    // 15. 액자/틀 (벽에 걸린 명화의 금색 액자 테두리 상단)
    {
      wordKey: "frame",
      korean: "액자/틀",
      audioUrl: "/audio/museum/frame.mp3",
      videoPath: "/video/museum/frame.mp4",
      sentence: "The frame is golden and thick around the painting. She spends time admiring the frame on the wall.",
      targetStyle: { top: '18.0%', left: '84.0%', width: '4.0%', height: '6.0%' },
      points: "134.4,16.2 140.8,16.2 140.8,21.6 134.4,21.6"
    },
    // 16. 진열장/전시 (우측 도자기가 든 유리 진열장의 나무 밑받침)
    {
      wordKey: "display",
      korean: "진열장/전시",
      audioUrl: "/audio/museum/display.mp3",
      videoPath: "/video/museum/display.mp4",
      sentence: "The display is clean and bright in the exhibit room. Arranging the display in the museum is the curator's job.",
      targetStyle: { top: '45.0%', left: '70.0%', width: '4.0%', height: '4.0%' },
      points: "112.0,40.5 118.4,40.5 118.4,44.1 112.0,44.1"
    },
    // 17. 안내 표지판 (아이들 앞의 갈색 정보 게시판)
    {
      wordKey: "information_board",
      korean: "안내 표지판",
      audioUrl: "/audio/museum/information_board.mp3",
      videoPath: "/video/museum/information_board.mp4",
      sentence: "The information board is clear and helpful near the exhibit. Reading the information board before the tour is a good idea.",
      targetStyle: { top: '63.0%', left: '49.0%', width: '6.0%', height: '8.0%' },
      points: "78.4,56.7 88.0,56.7 88.0,63.9 78.4,63.9"
    },
    // 18. 큐레이터/전시기획자 (돋보기를 들고 관찰하는 탐험가 모자 쓴 소년의 모자)
    {
      wordKey: "curator",
      korean: "큐레이터/전시기획자",
      audioUrl: "/audio/museum/curator.mp3",
      videoPath: "/video/museum/curator.mp4",
      sentence: "The curator is smart and careful in the museum. The curator enjoys organizing new exhibits every season.",
      targetStyle: { top: '60.0%', left: '36.0%', width: '4.0%', height: '6.0%' },
      points: "57.6,54.0 64.0,54.0 64.0,59.4 57.6,59.4"
    },
    // 19. 기념품 (뒤쪽 상점 선반 위의 작은 장식품)
    {
      wordKey: "souvenir",
      korean: "기념품",
      audioUrl: "/audio/museum/souvenir.mp3",
      videoPath: "/video/museum/souvenir.mp4",
      sentence: "The souvenir is small and pretty in the shop. Buying a souvenir at the museum is a great memory.",
      targetStyle: { top: '26.0%', left: '54.5%', width: '2.0%', height: '3.0%' },
      points: "87.2,23.4 90.4,23.4 90.4,26.1 87.2,26.1"
    },
    // 20. 상점/가게 (뒤쪽 'Souvenir Shop' 간판)
    {
      wordKey: "shop",
      korean: "상점/가게",
      audioUrl: "/audio/museum/shop.mp3",
      videoPath: "/video/museum/shop.mp4",
      sentence: "The shop is bright and busy near the exit. She enjoys browsing the shop after the tour.",
      targetStyle: { top: '22.0%', left: '51.0%', width: '6.0%', height: '2.5%' },
      points: "81.6,19.8 91.2,19.8 91.2,22.05 81.6,22.05"
    },
    // 21. 입구 (좌측 'history' 간판 아래 뚫려 있는 문 통로)
    {
      wordKey: "entrance",
      korean: "입구",
      audioUrl: "/audio/museum/entrance.mp3",
      videoPath: "/video/museum/entrance.mp4",
      sentence: "The entrance is wide and grand at the front. Finding the entrance of the museum is easy for visitors.",
      targetStyle: { top: '28.0%', left: '14.0%', width: '4.0%', height: '10.0%' },
      points: "22.4,25.2 28.8,25.2 28.8,34.2 22.4,34.2"
    },
    // 22. 출구 (뒤쪽 초록색 'EXIT' 간판)
    {
      wordKey: "exit",
      korean: "출구",
      audioUrl: "/audio/museum/exit.mp3",
      videoPath: "/video/museum/exit.mp4",
      sentence: "The exit is clearly marked at the end of the hall. He walks toward the exit after exploring the museum.",
      targetStyle: { top: '20.0%', left: '37.0%', width: '4.0%', height: '3.0%' },
      points: "59.2,18.0 65.6,18.0 65.6,20.7 59.2,20.7"
    },
    // 23. 소장품/컬렉션 (우측 유리장 안의 흉상 조각들 무리)
    {
      wordKey: "collection",
      korean: "소장품/컬렉션",
      audioUrl: "/audio/museum/collection.mp3",
      videoPath: "/video/museum/collection.mp4",
      sentence: "The collection is rare and impressive in the main hall. Seeing the collection of ancient artifacts is breathtaking.",
      targetStyle: { top: '38.0%', left: '76.0%', width: '4.0%', height: '4.0%' },
      points: "121.6,34.2 128.0,34.2 128.0,37.8 121.6,37.8"
    },
    // 24. 조명/스포트라이트 (우측 천장에 달린 검은색 조명 기구)
    {
      wordKey: "spotlight",
      korean: "조명/스포트라이트",
      audioUrl: "/audio/museum/spotlight.mp3",
      videoPath: "/video/museum/spotlight.mp4",
      sentence: "The spotlight is bright and warm above the statue. Shining a spotlight on the painting helps visitors see the details.",
      targetStyle: { top: '9.0%', left: '72.0%', width: '2.0%', height: '3.0%' },
      points: "115.2,8.1 118.4,8.1 118.4,10.8 115.2,10.8"
    },
    // 25. 벤치/의자 (우측 앞의 나무 벤치 앉는 자리 부분)
    {
      wordKey: "bench",
      korean: "벤치/의자",
      audioUrl: "/audio/museum/bench.mp3",
      videoPath: "/video/museum/bench.mp4",
      sentence: "The bench is hard and wooden in the gallery. Resting on the bench in the museum feels peaceful.",
      targetStyle: { top: '85.0%', left: '71.0%', width: '8.0%', height: '6.0%' },
      points: "113.6,76.5 126.4,76.5 126.4,81.9 113.6,81.9"
    }
  ]
};