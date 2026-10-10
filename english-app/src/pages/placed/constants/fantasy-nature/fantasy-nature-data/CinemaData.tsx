import cinemaImg from "@/assets/image/places/fantasy-nature/Cinema.jpg";

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

export const cinemaData: PlaceDataType = {
  placeKey: "cinema",
  placeTitle: "Cinema Word Adventure",
  bgImage: cinemaImg,
  masterRegions: [
    // 1. 포스터 (좌측 하단의 파란색 해저 포스터 안쪽 부분)
    {
      wordKey: "poster",
      korean: "포스터",
      audioUrl: "/audio/cinema/poster.mp3",
      videoPath: "/video/cinema/Poster.mp4",
      sentence: "The poster is colorful and large on the wall. Looking at movie posters in the lobby is interesting.",
      imageType: "cinema",
      targetStyle: { top: '36.0%', left: '5.0%', width: '6.0%', height: '18.0%' },
      points: "8.0,32.4 17.6,32.4 17.6,48.6 8.0,48.6"
    },
    // 2. 블록버스터 (좌측 상단의 초록색 숲 포스터 안쪽 부분)
    {
      wordKey: "blockbuster",
      korean: "블록버스터",
      audioUrl: "/audio/cinema/blockbuster.mp3",
      videoPath: "/video/cinema/Blockbuster.mp4",
      sentence: "The blockbuster is popular and exciting in theaters now. Seeing a blockbuster on opening day is unforgettable.",
      imageType: "cinema",
      targetStyle: { top: '12.0%', left: '5.0%', width: '6.0%', height: '22.0%' },
      points: "8.0,10.8 17.6,10.8 17.6,30.6 8.0,30.6"
    },
    // 3. 사운드 시스템 (상단 좌측 문 위에 설치된 검은색 스피커 본체)
    {
      wordKey: "soundSystem",
      korean: "사운드 시스템",
      audioUrl: "/audio/cinema/soundsystem.mp3",
      videoPath: "/video/cinema/SoundSystem.mp4",
      sentence: "The sound system is powerful and clear in the room. Hearing the sound system in a big theater is amazing.",
      imageType: "cinema",
      targetStyle: { top: '12.0%', left: '36.0%', width: '4.0%', height: '8.0%' },
      points: "57.6,10.8 64.0,10.8 64.0,18.0 57.6,18.0"
    },
    // 4. 영사기 (문 위 천장에 매달려 있는 영사기 본체)
    {
      wordKey: "projector",
      korean: "영사기",
      audioUrl: "/audio/cinema/projector.mp3",
      videoPath: "/video/cinema/Projector.mp4",
      sentence: "The projector is loud and bright at the top. Turning on the projector before the show is the clerk's job.",
      imageType: "cinema",
      targetStyle: { top: '10.0%', left: '47.0%', width: '6.0%', height: '6.0%' },
      points: "75.2,9.0 84.8,9.0 84.8,14.4 75.2,14.4"
    },
    // 5. 엔딩/결말 (상영관 스크린 맨 위쪽의 빛나는 부분)
    {
      wordKey: "ending",
      korean: "엔딩/결말",
      audioUrl: "/audio/cinema/ending.mp3",
      videoPath: "/video/cinema/Ending.mp4",
      sentence: "The ending is surprising and emotional at the finale. Guessing the ending before the movie is over is difficult.",
      imageType: "cinema",
      targetStyle: { top: '31.0%', left: '46.0%', width: '8.0%', height: '3.0%' },
      points: "73.6,27.9 86.4,27.9 86.4,30.6 73.6,30.6"
    },
    // 6. 남자 배우 (스크린 영상 속 우측 남자 실루엣 부분)
    {
      wordKey: "actor",
      korean: "남자 배우",
      audioUrl: "/audio/cinema/actor.mp3",
      videoPath: "/video/cinema/Actor.mp4",
      sentence: "The actor is handsome and talented in the film. Watching a great actor on the big screen is thrilling.",
      imageType: "cinema",
      targetStyle: { top: '35.0%', left: '51.0%', width: '3.0%', height: '6.0%' },
      points: "81.6,31.5 86.4,31.5 86.4,36.9 81.6,36.9"
    },
    // 7. 여자 배우 (스크린 영상 속 좌측 여자 실루엣 부분)
    {
      wordKey: "actress",
      korean: "여자 배우",
      audioUrl: "/audio/cinema/actress.mp3",
      videoPath: "/video/cinema/Actress.mp4",
      sentence: "The actress is beautiful and powerful in every scene. Seeing the actress perform in the film is inspiring.",
      imageType: "cinema",
      targetStyle: { top: '35.0%', left: '46.0%', width: '3.0%', height: '6.0%' },
      points: "73.6,31.5 78.4,31.5 78.4,36.9 73.6,36.9"
    },
    // 8. 장면 (스크린 속 아랫부분의 풍경/액션 씬)
    {
      wordKey: "scene",
      korean: "장면",
      audioUrl: "/audio/cinema/scene.mp3",
      videoPath: "/video/cinema/Scene.mp4",
      sentence: "The scene is dramatic and tense in the middle. Remembering a favorite scene after the movie is natural.",
      imageType: "cinema",
      targetStyle: { top: '43.0%', left: '45.0%', width: '10.0%', height: '5.0%' },
      points: "72.0,38.7 88.0,38.7 88.0,43.2 72.0,43.2"
    },
    // 9. 예매 내역/티켓 (초록 안경 쓴 소녀가 양손으로 펼쳐 든 팸플릿/예매표)
    {
      wordKey: "reservation",
      korean: "예매 내역/티켓",
      audioUrl: "/audio/cinema/reservation.mp3",
      videoPath: "/video/cinema/Reservation.mp4",
      sentence: "The reservation is ready on his phone. Making a reservation before the weekend is a smart idea.",
      imageType: "cinema",
      targetStyle: { top: '65.0%', left: '30.0%', width: '5.0%', height: '6.0%' },
      points: "48.0,58.5 56.0,58.5 56.0,63.9 48.0,63.9"
    },
    // 10. 감독 (탐험가 모자를 쓴 소년의 둥근 모자 부분)
    {
      wordKey: "director",
      korean: "감독",
      audioUrl: "/audio/cinema/director.mp3",
      videoPath: "/video/cinema/Director.mp4",
      sentence: "The director is creative and skilled behind the camera. Learning about the director after the movie is interesting.",
      imageType: "cinema",
      targetStyle: { top: '52.0%', left: '39.0%', width: '8.0%', height: '6.0%' },
      points: "62.4,46.8 75.2,46.8 75.2,52.2 62.4,52.2"
    },
    // 11. 통로 (아이들 사이로 영화관 안쪽으로 들어가는 바닥 통로)
    {
      wordKey: "aisle",
      korean: "통로",
      audioUrl: "/audio/cinema/aisle.mp3",
      videoPath: "/video/cinema/Aisle.mp4",
      sentence: "The aisle is long and dark between the rows. Walking through the aisle in the dark is tricky.",
      imageType: "cinema",
      targetStyle: { top: '80.0%', left: '46.0%', width: '8.0%', height: '6.0%' },
      points: "73.6,72.0 86.4,72.0 86.4,77.4 73.6,77.4"
    },
    // 12. 빨대 (헤드폰 쓴 소년의 음료 컵에 꽂힌 빨간 줄무늬 빨대)
    {
      wordKey: "straw",
      korean: "빨대",
      audioUrl: "/audio/cinema/straw.mp3",
      videoPath: "/video/cinema/Straw.mp4",
      sentence: "The straw is long and thin in the cup. Drinking juice through a straw in the dark is fun.",
      imageType: "cinema",
      targetStyle: { top: '65.0%', left: '62.0%', width: '1.0%', height: '3.0%' },
      points: "99.2,58.5 100.8,58.5 100.8,61.2 99.2,61.2"
    },
    // 13. 점원 (스낵바 부스 안쪽에 서 있는 여직원의 얼굴)
    {
      wordKey: "clerk",
      korean: "점원",
      audioUrl: "/audio/cinema/clerk.mp3",
      videoPath: "/video/cinema/Clerk.mp4",
      sentence: "The clerk is fast and friendly at the counter. The clerk enjoys helping customers at the snack bar.",
      imageType: "cinema",
      targetStyle: { top: '45.0%', left: '67.0%', width: '3.0%', height: '4.0%' },
      points: "107.2,40.5 112.0,40.5 112.0,44.1 107.2,44.1"
    },
    // 14. 스낵바 (위쪽 갈색 나무에 적힌 'SNACK BAR' 간판 글자)
    {
      wordKey: "snackBar",
      korean: "스낵바",
      audioUrl: "/audio/cinema/snackbar.mp3",
      videoPath: "/video/cinema/SnackBar.mp4",
      sentence: "The snack bar is busy and bright near the entrance. Visiting the snack bar before the show is their routine.",
      imageType: "cinema",
      targetStyle: { top: '31.0%', left: '62.0%', width: '10.0%', height: '6.0%' },
      points: "99.2,27.9 115.2,27.9 115.2,33.3 99.2,33.3"
    },
    // 15. 음료수 (몬스터 털복숭이 캐릭터가 쥐고 있는 붉은색 컵)
    {
      wordKey: "drink",
      korean: "음료수",
      audioUrl: "/audio/cinema/drink.mp3",
      videoPath: "/video/cinema/Drink.mp4",
      sentence: "The drink is cold and sweet in the cup. Sipping a cold drink during the movie is refreshing.",
      imageType: "cinema",
      targetStyle: { top: '59.0%', left: '71.0%', width: '4.0%', height: '8.0%' },
      points: "113.6,53.1 120.0,53.1 120.0,60.3 113.6,60.3"
    },
    // 16. 팝콘 (몬스터가 반대쪽 손에 쥐고 있는 줄무늬 팝콘 통)
    {
      wordKey: "popcorn",
      korean: "팝콘",
      audioUrl: "/audio/cinema/popcorn.mp3",
      videoPath: "/video/cinema/Popcorn.mp4",
      sentence: "The popcorn is warm and crunchy in the bag. Eating popcorn during a movie is so much fun.",
      imageType: "cinema",
      targetStyle: { top: '60.0%', left: '82.0%', width: '5.0%', height: '8.0%' },
      points: "131.2,54.0 139.2,54.0 139.2,61.2 131.2,61.2"
    },
    // 17. 관람등급 (우측 상단의 희극/비극 마스크 포스터)
    {
      wordKey: "rating",
      korean: "관람등급/포스터",
      audioUrl: "/audio/cinema/rating.mp3",
      videoPath: "/video/cinema/Rating.mp4",
      sentence: "The rating is clear and helpful on the poster. Checking the rating before watching a movie is important.",
      imageType: "cinema",
      targetStyle: { top: '13.0%', left: '73.0%', width: '5.0%', height: '14.0%' },
      points: "116.8,11.7 124.8,11.7 124.8,24.3 116.8,24.3"
    },
    // 18. 크레딧 (우측 상단 마스크 포스터 옆, 빛이 터지는 노란색 포스터)
    {
      wordKey: "credits",
      korean: "크레딧/포스터",
      audioUrl: "/audio/cinema/credits.mp3",
      videoPath: "/video/cinema/Credits.mp4",
      sentence: "The credits are long and detailed at the end. Reading the credits after the film is her habit.",
      imageType: "cinema",
      targetStyle: { top: '13.0%', left: '79.0%', width: '5.0%', height: '14.0%' },
      points: "126.4,11.7 134.4,11.7 134.4,24.3 126.4,24.3"
    },
    // 19. 3D 안경 (스낵바 우측 끝의 '3D Glasses Pickup' 표지판)
    {
      wordKey: "threeDGlasses",
      korean: "3D 안경 픽업",
      audioUrl: "/audio/cinema/threedglasses.mp3",
      videoPath: "/video/cinema/ThreeDGlasses.mp4",
      sentence: "The 3D glasses are light and clear on your face. Wearing 3D glasses during the movie is really cool.",
      imageType: "cinema",
      targetStyle: { top: '37.0%', left: '88.0%', width: '10.0%', height: '5.0%' },
      points: "140.8,33.3 156.8,33.3 156.8,37.8 140.8,37.8"
    },
    // 20. 관객 (열린 문 안쪽 어두운 객석에 앉아있는 사람들의 실루엣)
    {
      wordKey: "row",
      korean: "열(좌석 열)",
      audioUrl: "/audio/cinema/row.mp3",
      videoPath: "/video/cinema/Row.mp4",
      sentence: "The row is long and straight in the theater. Sitting in the front row is not good for your eyes.",
      imageType: "cinema",
      targetStyle: { top: '48.0%', left: '37.0%', width: '5.0%', height: '7.0%' },
      points: "59.2,43.2 67.2,43.2 67.2,49.5 59.2,49.5"
    },
    // 21. 좌석 (우측 하단 맨 앞줄에 비치는 빨간색 영화관 의자)
    {
      wordKey: "seat",
      korean: "좌석",
      audioUrl: "/audio/cinema/seat.mp3",
      videoPath: "/video/cinema/Seat.mp4",
      sentence: "The seat is soft and wide in the theater. Finding a good seat before the movie is important.",
      imageType: "cinema",
      targetStyle: { top: '86.0%', left: '8.0%', width: '8.0%', height: '14.0%' },
      points: "12.8,77.4 25.6,77.4 25.6,90.0 12.8,90.0"
    },
    // 22. 티켓 (좌측 끝 서 있는 남자의 손에 들린 작은 종이)
    {
      wordKey: "ticket",
      korean: "티켓",
      audioUrl: "/audio/cinema/ticket.mp3",
      videoPath: "/video/cinema/Ticket.mp4",
      sentence: "The ticket is small and colorful at the counter. Buying a ticket online is easier than waiting in line.",
      imageType: "cinema",
      targetStyle: { top: '56.0%', left: '6.5%', width: '2.0%', height: '3.0%' },
      points: "10.4,50.4 13.6,50.4 13.6,53.1 10.4,53.1"
    },
    // 23. 상영시간 (영화관 안쪽으로 들어가는 열린 우측 문 상단)
    {
      wordKey: "showtime",
      korean: "상영시간",
      audioUrl: "/audio/cinema/showtime.mp3",
      videoPath: "/video/cinema/Showtime.mp4",
      sentence: "The showtime is early in the afternoon. Checking the showtime on the app is very convenient.",
      imageType: "cinema",
      targetStyle: { top: '50.0%', left: '56.0%', width: '3.0%', height: '18.0%' },
      points: "89.6,45.0 94.4,45.0 94.4,61.2 89.6,61.2"
    },
    // 24. 스크린 (안쪽 영상이 상영되고 있는 스크린의 좌측 상단 여백)
    {
      wordKey: "screen",
      korean: "스크린",
      audioUrl: "/audio/cinema/screen.mp3",
      videoPath: "/video/cinema/Screen.mp4",
      sentence: "The screen is huge and bright in the theater. Watching the screen in the dark is exciting.",
      imageType: "cinema",
      targetStyle: { top: '29.0%', left: '44.0%', width: '2.0%', height: '2.0%' },
      points: "70.4,26.1 73.6,26.1 73.6,27.9 70.4,27.9"
    },
    // 25. 예고편 (우측 맨 끝의 긴 포스터/스크린 영역)
    {
      wordKey: "trailer",
      korean: "예고편",
      audioUrl: "/audio/cinema/trailer.mp3",
      videoPath: "/video/cinema/Trailer.mp4",
      sentence: "The trailer is short and exciting before the movie. Watching trailers before the film is her favorite part.",
      imageType: "cinema",
      targetStyle: { top: '12.0%', left: '87.0%', width: '5.0%', height: '18.0%' },
      points: "139.2,10.8 147.2,10.8 147.2,27.0 139.2,27.0"
    }
  ]
};