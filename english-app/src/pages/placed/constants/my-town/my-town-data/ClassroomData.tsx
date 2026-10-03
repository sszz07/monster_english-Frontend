import classroomImg from "@/assets/image/places/my-town/Classroom.png";

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
  imageType?: "apartment" | "house" | "bakery" | "busstop" | "classroom"; 
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const classroomData: PlaceDataType = {
  placeKey: "classroom",
  placeTitle: "Classroom Word Adventure",
  bgImage: classroomImg,
  masterRegions: [
    // 1. 책상 (가운데 앞쪽 메인 책상)
    {
      wordKey: "desk",
      korean: "책상",
      audioUrl: "/audio/classroom/desk.mp3",
      videoPath: "/video/classroom/Desk.mp4",
      sentence: "I read and write at my desk.",
      imageType: "classroom",
      targetStyle: { top: '70.0%', left: '30.0%', width: '45.0%', height: '30.0%' },
      points: "48.0,63.0 120.0,63.0 120.0,90.0 48.0,90.0"
    },
    // 2. 의자 (왼쪽 앞쪽 의자)
    {
      wordKey: "chair",
      korean: "의자",
      audioUrl: "/audio/classroom/chair.mp3",
      videoPath: "/video/classroom/Chair.mp4",
      sentence: "Please sit on your chair.",
      imageType: "classroom",
      targetStyle: { top: '64.0%', left: '5.0%', width: '12.0%', height: '25.0%' },
      points: "8.0,57.6 27.2,57.6 27.2,80.1 8.0,80.1"
    },
    // 3. 선생님 (보라색 몬스터)
    {
      wordKey: "teacher",
      korean: "선생님",
      audioUrl: "/audio/classroom/teacher.mp3",
      videoPath: "/video/classroom/Teacher.mp4",
      sentence: "The teacher helps us learn new things.",
      imageType: "classroom",
      targetStyle: { top: '18.0%', left: '56.0%', width: '18.0%', height: '32.0%' },
      points: "89.6,16.2 118.4,16.2 118.4,45.0 89.6,45.0"
    },
    // 4. 학생 (서 있는 남자아이)
    {
      wordKey: "student",
      korean: "학생",
      audioUrl: "/audio/classroom/student.mp3",
      videoPath: "/video/classroom/Student.mp4",
      sentence: "The student is listening carefully.",
      imageType: "classroom",
      targetStyle: { top: '33.0%', left: '35.0%', width: '12.0%', height: '40.0%' },
      points: "56.0,29.7 75.2,29.7 75.2,65.7 56.0,65.7"
    },
    // 5. 연필 (책상 위 노란 연필)
    {
      wordKey: "pencil",
      korean: "연필",
      audioUrl: "/audio/classroom/pencil.mp3",
      videoPath: "/video/classroom/Pencil.mp4",
      sentence: "I use a pencil to write in my notebook.",
      imageType: "classroom",
      targetStyle: { top: '77.0%', left: '44.0%', width: '4.0%', height: '2.0%' },
      points: "70.4,69.3 76.8,69.3 76.8,71.1 70.4,71.1"
    },
    // 6. 지우개 (자 옆에 있는 파란 지우개)
    {
      wordKey: "eraser",
      korean: "지우개",
      audioUrl: "/audio/classroom/eraser.mp3",
      videoPath: "/video/classroom/Eraser.mp4",
      sentence: "I can fix my mistakes with an eraser.",
      imageType: "classroom",
      targetStyle: { top: '78.0%', left: '47.0%', width: '2.0%', height: '2.0%' },
      points: "75.2,70.2 78.4,70.2 78.4,72.0 75.2,72.0"
    },
    // 7. 자 (책상 위 파란색 긴 자)
    {
      wordKey: "ruler",
      korean: "자",
      audioUrl: "/audio/classroom/ruler.mp3",
      videoPath: "/video/classroom/Ruler.mp4",
      sentence: "Use a ruler to draw a straight line.",
      imageType: "classroom",
      targetStyle: { top: '71.0%', left: '37.0%', width: '8.0%', height: '4.0%' },
      points: "59.2,63.9 72.0,63.9 72.0,67.5 59.2,67.5"
    },
    // 8. 공책 (여자아이가 안고 있는 책)
    {
      wordKey: "notebook",
      korean: "공책",
      audioUrl: "/audio/classroom/notebook.mp3",
      videoPath: "/video/classroom/Notebook.mp4",
      sentence: "I take notes in my notebook.",
      imageType: "classroom",
      targetStyle: { top: '56.0%', left: '51.0%', width: '4.0%', height: '6.0%' },
      points: "81.6,50.4 88.0,50.4 88.0,55.8 81.6,55.8"
    },
    // 9. 교과서 (남자아이가 들고 있는 빨간 책)
    {
      wordKey: "textbook",
      korean: "교과서",
      audioUrl: "/audio/classroom/textbook.mp3",
      videoPath: "/video/classroom/Textbook.mp4",
      sentence: "Open your textbook to page ten.",
      imageType: "classroom",
      targetStyle: { top: '58.0%', left: '39.0%', width: '8.0%', height: '6.0%' },
      points: "62.4,52.2 75.2,52.2 75.2,57.6 62.4,57.6"
    },
    // 10. 칠판 (왼쪽 벽의 검은 칠판)
    {
      wordKey: "blackboard",
      korean: "칠판",
      audioUrl: "/audio/classroom/blackboard.mp3",
      videoPath: "/video/classroom/Blackboard.mp4",
      sentence: "The teacher writes words on the blackboard.",
      imageType: "classroom",
      targetStyle: { top: '15.0%', left: '14.0%', width: '23.0%', height: '35.0%' },
      points: "22.4,13.5 59.2,13.5 59.2,45.0 22.4,45.0"
    },
    // 11. 마커 (크레용 상자 근처의 파란색 펜)
    {
      wordKey: "marker",
      korean: "마커펜",
      audioUrl: "/audio/classroom/marker.mp3",
      videoPath: "/video/classroom/Marker.mp4",
      sentence: "I draw a big circle with a red marker.",
      imageType: "classroom",
      targetStyle: { top: '79.0%', left: '53.0%', width: '4.0%', height: '2.0%' },
      points: "84.8,71.1 91.2,71.1 91.2,72.9 84.8,72.9"
    },
    // 12. 크레용 (책상 위 크레용 상자)
    {
      wordKey: "crayon",
      korean: "크레용",
      audioUrl: "/audio/classroom/crayon.mp3",
      videoPath: "/video/classroom/Crayon.mp4",
      sentence: "We are coloring a picture with crayons.",
      imageType: "classroom",
      targetStyle: { top: '71.0%', left: '48.0%', width: '5.0%', height: '6.0%' },
      points: "76.8,63.9 84.8,63.9 84.8,69.3 76.8,69.3"
    },
    // 13. 풀 (책상 위 딱풀)
    {
      wordKey: "glue",
      korean: "풀",
      audioUrl: "/audio/classroom/glue.mp3",
      videoPath: "/video/classroom/Glue.mp4",
      sentence: "Use glue to stick the paper together.",
      imageType: "classroom",
      targetStyle: { top: '72.0%', left: '60.0%', width: '2.0%', height: '7.0%' },
      points: "96.0,64.8 99.2,64.8 99.2,71.1 96.0,71.1"
    },
    // 14. 가위 (책상 위 빨간색 가위)
    {
      wordKey: "scissors",
      korean: "가위",
      audioUrl: "/audio/classroom/scissors.mp3",
      videoPath: "/video/classroom/Scissors.mp4",
      sentence: "Be careful when you use scissors.",
      imageType: "classroom",
      targetStyle: { top: '83.0%', left: '68.0%', width: '4.0%', height: '5.0%' },
      points: "108.8,74.7 115.2,74.7 115.2,79.2 108.8,79.2"
    },
    // 15. 배낭 (가방 - 앞 책상 왼쪽 아래 바닥 공간 배정)
    {
      wordKey: "backpack",
      korean: "가방(배낭)",
      audioUrl: "/audio/classroom/backpack.mp3",
      videoPath: "/video/classroom/Backpack.mp4",
      sentence: "I put my books in my backpack.",
      imageType: "classroom",
      targetStyle: { top: '70.0%', left: '15.0%', width: '8.0%', height: '15.0%' },
      points: "24.0,63.0 36.8,63.0 36.8,76.5 24.0,76.5"
    },
    // 16. 시계 (칠판 위 벽시계)
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/classroom/clock.mp3",
      videoPath: "/video/classroom/Clock.mp4",
      sentence: "The clock on the wall shows the time.",
      imageType: "classroom",
      targetStyle: { top: '4.0%', left: '25.0%', width: '6.0%', height: '10.0%' },
      points: "40.0,3.6 49.6,3.6 49.6,12.6 40.0,12.6"
    },
    // 17. 지도 (왼쪽 벽의 세계 지도)
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/classroom/map.mp3",
      videoPath: "/video/classroom/Map.mp4",
      sentence: "We look at the world map to find countries.",
      imageType: "classroom",
      targetStyle: { top: '15.0%', left: '1.0%', width: '10.0%', height: '30.0%' },
      points: "1.6,13.5 17.6,13.5 17.6,40.5 1.6,40.5"
    },
    // 18. 포스터 (오른쪽 벽의 태양 그림 포스터)
    {
      wordKey: "poster",
      korean: "포스터",
      audioUrl: "/audio/classroom/poster.mp3",
      videoPath: "/video/classroom/Poster.mp4",
      sentence: "There is a beautiful poster on the wall.",
      imageType: "classroom",
      targetStyle: { top: '16.0%', left: '87.0%', width: '6.0%', height: '10.0%' },
      points: "139.2,14.4 148.8,14.4 148.8,23.4 139.2,23.4"
    },
    // 19. 컴퓨터 (뒤쪽 교탁 옆 데스크탑 모니터)
    {
      wordKey: "computer",
      korean: "컴퓨터",
      audioUrl: "/audio/classroom/computer.mp3",
      videoPath: "/video/classroom/Computer.mp4",
      sentence: "I use the computer to search for information.",
      imageType: "classroom",
      targetStyle: { top: '33.0%', left: '50.0%', width: '3.0%', height: '5.0%' },
      points: "80.0,29.7 84.8,29.7 84.8,34.2 80.0,34.2"
    },
    // 20. 태블릿 (왼쪽 책상 위 파란 기기)
    {
      wordKey: "tablet",
      korean: "태블릿",
      audioUrl: "/audio/classroom/tablet.mp3",
      videoPath: "/video/classroom/Tablet.mp4",
      sentence: "We can play educational games on the tablet.",
      imageType: "classroom",
      targetStyle: { top: '59.0%', left: '22.0%', width: '6.0%', height: '3.0%' },
      points: "35.2,53.1 44.8,53.1 44.8,55.8 35.2,55.8"
    },
    // 21. 스크린 (정면의 빔 프로젝터 스크린)
    {
      wordKey: "screen",
      korean: "화면(스크린)",
      audioUrl: "/audio/classroom/screen.mp3",
      videoPath: "/video/classroom/Screen.mp4",
      sentence: "Look at the screen to watch the video.",
      imageType: "classroom",
      targetStyle: { top: '10.0%', left: '60.0%', width: '25.0%', height: '30.0%' },
      points: "96.0,9.0 136.0,9.0 136.0,36.0 96.0,36.0"
    },
    // 22. 프로젝터 (교탁 위 빔 프로젝터)
    {
      wordKey: "projector",
      korean: "프로젝터",
      audioUrl: "/audio/classroom/projector.mp3",
      videoPath: "/video/classroom/Projector.mp4",
      sentence: "The projector shows pictures on the wall.",
      imageType: "classroom",
      targetStyle: { top: '45.0%', left: '64.0%', width: '7.0%', height: '5.0%' },
      points: "102.4,40.5 113.6,40.5 113.6,45.0 102.4,45.0"
    },
    // 23. 학습지 (가운데 책상 위 하얀 종이)
    {
      wordKey: "worksheet",
      korean: "학습지",
      audioUrl: "/audio/classroom/worksheet.mp3",
      videoPath: "/video/classroom/Worksheet.mp4",
      sentence: "I am finishing my math worksheet.",
      imageType: "classroom",
      targetStyle: { top: '79.0%', left: '56.0%', width: '10.0%', height: '10.0%' },
      points: "89.6,71.1 105.6,71.1 105.6,80.1 89.6,80.1"
    },
    // 24. 펜 (학습지 옆 펜)
    {
      wordKey: "pen",
      korean: "펜",
      audioUrl: "/audio/classroom/pen.mp3",
      videoPath: "/video/classroom/Pen.mp4",
      sentence: "The teacher writes with a blue pen.",
      imageType: "classroom",
      targetStyle: { top: '80.0%', left: '65.0%', width: '3.0%', height: '1.0%' },
      points: "104.0,72.0 108.8,72.0 108.8,72.9 104.0,72.9"
    },
    // 25. 종이 (오른쪽 중간 책상 위 종이)
    {
      wordKey: "paper",
      korean: "종이",
      audioUrl: "/audio/classroom/paper.mp3",
      videoPath: "/video/classroom/Paper.mp4",
      sentence: "Can I have a piece of paper, please?",
      imageType: "classroom",
      targetStyle: { top: '64.0%', left: '91.0%', width: '6.0%', height: '5.0%' },
      points: "145.6,57.6 155.2,57.6 155.2,62.1 145.6,62.1"
    }
  ]
};