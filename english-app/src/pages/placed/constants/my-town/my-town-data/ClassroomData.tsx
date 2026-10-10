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
    // 1. 책상 (화면 왼쪽 칠판 아래쪽 책상)
    {
      wordKey: "desk",
      korean: "책상",
      audioUrl: "/audio/classroom/desk.mp3",
      videoPath: "/video/classroom/Desk.mp4",
      sentence: "The desk is big and brown. I put my book on the desk.",
      imageType: "classroom",
      targetStyle: { top: '58.0%', left: '8.0%', width: '12.0%', height: '10.0%' },
      points: "12.8,52.2 32.0,52.2 32.0,61.2 12.8,61.2"
    },
    // 2. 의자 (화면 왼쪽 맨 앞 의자)
    {
      wordKey: "chair",
      korean: "의자",
      audioUrl: "/audio/classroom/chair.mp3",
      videoPath: "/video/classroom/Chair.mp4",
      sentence: "The chair is small and hard. She sits on the chair.",
      imageType: "classroom",
      targetStyle: { top: '64.0%', left: '5.0%', width: '12.0%', height: '25.0%' },
      points: "8.0,57.6 27.2,57.6 27.2,80.1 8.0,80.1"
    },
    // 3. 선생님 (오른쪽 교탁 앞 보라색 몬스터)
    {
      wordKey: "teacher",
      korean: "선생님",
      audioUrl: "/audio/classroom/teacher.mp3",
      videoPath: "/video/classroom/Teacher.mp4",
      sentence: "The teacher is kind and smart. The teacher writes words on the board.",
      imageType: "classroom",
      targetStyle: { top: '18.0%', left: '56.0%', width: '18.0%', height: '32.0%' },
      points: "89.6,16.2 118.4,16.2 118.4,45.0 89.6,45.0"
    },
    // 4. 학생 (가운데 서 있는 파란 옷의 남자아이)
    {
      wordKey: "student",
      korean: "학생",
      audioUrl: "/audio/classroom/student.mp3",
      videoPath: "/video/classroom/Student.mp4",
      sentence: "The student is happy at school. The student reads a book.",
      imageType: "classroom",
      targetStyle: { top: '33.0%', left: '35.0%', width: '12.0%', height: '40.0%' },
      points: "56.0,29.7 75.2,29.7 75.2,65.7 56.0,65.7"
    },
    // 5. 연필 (가운데 앞 책상 위 노란 연필)
    {
      wordKey: "pencil",
      korean: "연필",
      audioUrl: "/audio/classroom/pencil.mp3",
      videoPath: "/video/classroom/Pencil.mp4",
      sentence: "The pencil is long and yellow. He holds a pencil.",
      imageType: "classroom",
      targetStyle: { top: '72.0%', left: '44.5%', width: '4.5%', height: '5.5%' },
      points: "71.2,65.0 78.0,65.0 78.0,73.0 71.2,73.0"
    },
    // 6. 지우개 (연필 오른쪽의 파란색/흰색 지우개 단독 영역)
    {
      wordKey: "eraser",
      korean: "지우개",
      audioUrl: "/audio/classroom/eraser.mp3",
      videoPath: "/video/classroom/Eraser.mp4",
      sentence: "The eraser is white and soft. She uses the eraser.",
      imageType: "classroom",
      targetStyle: { top: '74.0%', left: '49.0%', width: '5.0%', height: '5.0%' },
      points: "78.4,68.0 86.0,68.0 86.0,75.0 78.4,75.0"
    },
    // 7. 자 (가운데 책상 위 왼쪽의 파란색 긴 자)
    {
      wordKey: "ruler",
      korean: "자",
      audioUrl: "/audio/classroom/ruler.mp3",
      videoPath: "/video/classroom/Ruler.mp4",
      sentence: "The ruler is straight and long. He draws a line with a ruler.",
      imageType: "classroom",
      targetStyle: { top: '71.5%', left: '37.0%', width: '8.0%', height: '4.5%' },
      points: "59.2,64.4 72.0,64.4 72.0,68.4 59.2,68.4"
    },
    // 8. 공책 (남자아이 바로 뒤 책상 위에 놓인 파란색 공책/노트)
    {
      wordKey: "notebook",
      korean: "공책",
      audioUrl: "/audio/classroom/notebook.mp3",
      videoPath: "/video/classroom/Notebook.mp4",
      sentence: "The notebook is new and clean. She writes her name in the notebook.",
      imageType: "classroom",
      targetStyle: { top: '57.0%', left: '21.5%', width: '7.5%', height: '6.5%' },
      points: "34.4,51.3 46.4,51.3 46.4,57.2 34.4,57.2"
    },
    // 9. 교과서 (남자아이가 펼쳐 들고 있는 갈색/빨간색 책)
    {
      wordKey: "textbook",
      korean: "교과서",
      audioUrl: "/audio/classroom/textbook.mp3",
      videoPath: "/video/classroom/Textbook.mp4",
      sentence: "The textbook is heavy and thick. The student opens the textbook.",
      imageType: "classroom",
      targetStyle: { top: '56.0%', left: '40.5%', width: '7.5%', height: '8.0%' },
      points: "64.8,50.4 76.8,50.4 76.8,57.6 64.8,57.6"
    },
    // 10. 칠판 (왼쪽 벽에 걸린 검은 칠판)
    {
      wordKey: "blackboard",
      korean: "칠판",
      audioUrl: "/audio/classroom/blackboard.mp3",
      videoPath: "/video/classroom/Blackboard.mp4",
      sentence: "The blackboard is big and dark. The teacher writes words on the blackboard.",
      imageType: "classroom",
      targetStyle: { top: '15.0%', left: '14.0%', width: '23.0%', height: '35.0%' },
      points: "22.4,13.5 59.2,13.5 59.2,45.0 22.4,45.0"
    },
    // 11. 마커 (가운데 책상 크레용 상자 오른쪽의 파란 마커펜)
    {
      wordKey: "marker",
      korean: "마커펜",
      audioUrl: "/audio/classroom/marker.mp3",
      videoPath: "/video/classroom/Marker.mp4",
      sentence: "The marker is bright and colorful. The teacher uses a marker.",
      imageType: "classroom",
      targetStyle: { top: '78.5%', left: '54.5%', width: '5.0%', height: '3.5%' },
      points: "87.2,70.7 95.2,70.7 95.2,73.8 87.2,73.8"
    },
    // 12. 크레용 (가운데 책상 위의 초록/노란색 크레용 상자)
    {
      wordKey: "crayon",
      korean: "크레용",
      audioUrl: "/audio/classroom/crayon.mp3",
      videoPath: "/video/classroom/Crayon.mp4",
      sentence: "The crayon is red and small. She colors a picture with a crayon.",
      imageType: "classroom",
      targetStyle: { top: '69.0%', left: '50.0%', width: '7.5%', height: '6.5%' },
      points: "80.0,62.0 91.2,62.0 91.2,68.0 80.0,68.0"
    },
    // 13. 풀 (가운데 책상 맨 오른쪽의 딱풀)
    {
      wordKey: "glue",
      korean: "풀",
      audioUrl: "/audio/classroom/glue.mp3",
      videoPath: "/video/classroom/Glue.mp4",
      sentence: "The glue is sticky and wet. He puts glue on the paper.",
      imageType: "classroom",
      targetStyle: { top: '72.0%', left: '59.5%', width: '2.5%', height: '6.5%' },
      points: "95.2,64.8 99.2,64.8 99.2,70.7 95.2,70.7"
    },
    // 14. 가위 (오른쪽 책상 위 빨간색 가위)
    {
      wordKey: "scissors",
      korean: "가위",
      audioUrl: "/audio/classroom/scissors.mp3",
      videoPath: "/video/classroom/Scissors.mp4",
      sentence: "The scissors are sharp and silver. She cuts the paper.",
      imageType: "classroom",
      targetStyle: { top: '84.0%', left: '67.0%', width: '4.5%', height: '6.0%' },
      points: "107.2,75.6 114.4,75.6 114.4,81.0 107.2,81.0"
    },
    // 15. 배낭 (왼쪽 지구본 아래 가방/학용품 수납장)
    {
      wordKey: "backpack",
      korean: "가방(배낭)",
      audioUrl: "/audio/classroom/backpack.mp3",
      videoPath: "/video/classroom/Backpack.mp4",
      sentence: "The backpack is big and blue. He puts his books in the backpack.",
      imageType: "classroom",
      targetStyle: { top: '53.0%', left: '1.0%', width: '15.0%', height: '25.0%' },
      points: "1.6,47.7 24.0,47.7 24.0,70.2 1.6,70.2"
    },
    // 16. 시계 (왼쪽 칠판 위 벽시계)
    {
      wordKey: "clock",
      korean: "시계",
      audioUrl: "/audio/classroom/clock.mp3",
      videoPath: "/video/classroom/Clock.mp4",
      sentence: "The clock is round and white. I look at the clock.",
      imageType: "classroom",
      targetStyle: { top: '3.0%', left: '25.0%', width: '6.0%', height: '10.0%' },
      points: "40.0,2.7 49.6,2.7 49.6,11.7 40.0,11.7"
    },
    // 17. 지도 (왼쪽 벽에 걸린 세계 지도)
    {
      wordKey: "map",
      korean: "지도",
      audioUrl: "/audio/classroom/map.mp3",
      videoPath: "/video/classroom/Map.mp4",
      sentence: "The map is large and colorful. The teacher points to the map.",
      imageType: "classroom",
      targetStyle: { top: '15.0%', left: '1.0%', width: '10.5%', height: '30.0%' },
      points: "1.6,13.5 18.4,13.5 18.4,40.5 1.6,40.5"
    },
    // 18. 포스터 (오른쪽 벽에 걸린 태양 그림 포스터)
    {
      wordKey: "poster",
      korean: "포스터",
      audioUrl: "/audio/classroom/poster.mp3",
      videoPath: "/video/classroom/Poster.mp4",
      sentence: "The poster is bright and pretty. They hang a poster on the wall.",
      imageType: "classroom",
      targetStyle: { top: '15.5%', left: '86.5%', width: '6.5%', height: '11.0%' },
      points: "138.4,14.0 148.8,14.0 148.8,23.9 138.4,23.9"
    },
    // 19. 컴퓨터 (선생님 뒤쪽 파란색 모니터)
    {
      wordKey: "computer",
      korean: "컴퓨터",
      audioUrl: "/audio/classroom/computer.mp3",
      videoPath: "/video/classroom/Computer.mp4",
      sentence: "The computer is new and fast. The teacher uses the computer.",
      imageType: "classroom",
      targetStyle: { top: '31.5%', left: '49.0%', width: '4.5%', height: '7.0%' },
      points: "78.4,28.4 85.6,28.4 85.6,34.7 78.4,34.7"
    },
    // 20. 태블릿 (여자아이가 안고 있는 태블릿)
    {
      wordKey: "tablet",
      korean: "태블릿",
      audioUrl: "/audio/classroom/tablet.mp3",
      videoPath: "/video/classroom/Tablet.mp4",
      sentence: "The tablet is thin and light. The student watches a video on the tablet.",
      imageType: "classroom",
      targetStyle: { top: '54.5%', left: '51.5%', width: '6.0%', height: '8.0%' },
      points: "82.4,49.1 92.0,49.1 92.0,56.3 82.4,56.3"
    },
    // 21. 스크린 (정면 빔 프로젝터용 하얀 스크린)
    {
      wordKey: "screen",
      korean: "화면(스크린)",
      audioUrl: "/audio/classroom/screen.mp3",
      videoPath: "/video/classroom/Screen.mp4",
      sentence: "The screen is bright and clear. The teacher shows a picture on the screen.",
      imageType: "classroom",
      targetStyle: { top: '9.0%', left: '59.5%', width: '26.0%', height: '31.0%' },
      points: "95.2,8.1 136.8,8.1 136.8,36.0 95.2,36.0"
    },
    // 22. 프로젝터 (교탁 위에 놓인 회색 빔 프로젝터)
    {
      wordKey: "projector",
      korean: "프로젝터",
      audioUrl: "/audio/classroom/projector.mp3",
      videoPath: "/video/classroom/Projector.mp4",
      sentence: "The projector is loud and bright. The teacher turns on the projector.",
      imageType: "classroom",
      targetStyle: { top: '44.5%', left: '63.5%', width: '7.5%', height: '5.5%' },
      points: "101.6,40.1 113.6,40.1 113.6,45.0 101.6,45.0"
    },
    // 23. 학습지 (가운데 책상 위 흰색 시험지/종이)
    {
      wordKey: "worksheet",
      korean: "학습지",
      audioUrl: "/audio/classroom/worksheet.mp3",
      videoPath: "/video/classroom/Worksheet.mp4",
      sentence: "The worksheet is long and hard. The student writes answers on the worksheet.",
      imageType: "classroom",
      targetStyle: { top: '72.0%', left: '38.0%', width: '6.5%', height: '9.0%' },
      points: "60.8,64.8 70.8,64.8 70.8,73.4 60.8,73.4"
    },
    // 24. 펜 (오른쪽 책상 위 가위 위쪽에 놓인 갈색/빨간 펜)
    {
      wordKey: "pen",
      korean: "펜",
      audioUrl: "/audio/classroom/pen.mp3",
      videoPath: "/video/classroom/Pen.mp4",
      sentence: "The pen is black and smooth. She writes her name with a pen.",
      imageType: "classroom",
      targetStyle: { top: '77.5%', left: '62.5%', width: '7.0%', height: '3.0%' },
      points: "100.0,69.8 111.2,69.8 111.2,72.5 100.0,72.5"
    },
    // 25. 종이 (오른쪽 중간 줄 책상 위의 흰 종이)
    {
      wordKey: "paper",
      korean: "종이",
      audioUrl: "/audio/classroom/paper.mp3",
      videoPath: "/video/classroom/Paper.mp4",
      sentence: "The paper is white and thin. He draws a monster on the paper.",
      imageType: "classroom",
      targetStyle: { top: '64.0%', left: '90.0%', width: '7.5%', height: '6.0%' },
      points: "144.0,57.6 156.0,57.6 156.0,63.0 144.0,63.0"
    }
  ]
};