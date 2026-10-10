import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const calendarImg = ThemeImage.calendar;

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

export const calendarData: PlaceDataType = {
  placeKey: "calendar",
  placeTitle: "Calendar Word Adventure",
  bgImage: calendarImg,
  masterRegions: [
    // 1. 전체 달력 (화면 전체를 덮지 않도록 상단 스프링 바인딩 부분으로 대폭 축소)
    {
      wordKey: "calendar",
      korean: "달력",
      audioUrl: "/audio/calendar/calendar.mp3",
      videoPath: "/video/calendar/calendar.mp4",
      sentence: "The calendar is on the wall. I check the calendar every morning.",
      targetStyle: { top: '5.0%', left: '35.0%', width: '30.0%', height: '5.0%' },
      points: "56.0,4.5 104.0,4.5 104.0,9.0 56.0,9.0"
    },
    // 2. 연도 (헤더 영역)
    {
      wordKey: "year",
      korean: "연도",
      audioUrl: "/audio/calendar/year.mp3",
      videoPath: "/video/calendar/year.mp4",
      sentence: "A year has twelve months. We celebrate the new year together.",
      targetStyle: { top: '12.0%', left: '46.0%', width: '6.0%', height: '8.0%' },
      points: "73.6,10.8 83.2,10.8 83.2,18.0 73.6,18.0"
    },
    // 3. 월 (헤더 영역)
    {
      wordKey: "month",
      korean: "월",
      audioUrl: "/audio/calendar/month.mp3",
      videoPath: "/video/calendar/month.mp4",
      sentence: "A month has about thirty days. My birthday is this month.",
      targetStyle: { top: '12.0%', left: '54.0%', width: '6.0%', height: '8.0%' },
      points: "86.4,10.8 96.0,10.8 96.0,18.0 86.4,18.0"
    },
    // 4. 주 (목요일 옆 빈 칸으로 분리)
    {
      wordKey: "week",
      korean: "주",
      audioUrl: "/audio/calendar/week.mp3",
      videoPath: "/video/calendar/week.mp4",
      sentence: "A week has seven days. She has soccer practice every week.",
      targetStyle: { top: '44.0%', left: '56.5%', width: '8.5%', height: '10.0%' },
      points: "90.4,39.6 104.0,39.6 104.0,48.6 90.4,48.6"
    },
    // --- 첫 번째 열 (29.5%) 분리 ---
    {
      wordKey: "day",
      korean: "일/하루",
      audioUrl: "/audio/calendar/day.mp3",
      videoPath: "/video/calendar/day.mp4",
      sentence: "A day has twenty-four hours. Today is a sunny day.",
      targetStyle: { top: '58.0%', left: '29.5%', width: '8.5%', height: '4.0%' },
      points: "47.2,52.2 60.8,52.2 60.8,55.8 47.2,55.8"
    },
    {
      wordKey: "today",
      korean: "오늘",
      audioUrl: "/audio/calendar/today.mp3",
      videoPath: "/video/calendar/today.mp4",
      sentence: "Today is Wednesday. I finish my homework today.",
      targetStyle: { top: '63.0%', left: '29.5%', width: '8.5%', height: '4.0%' },
      points: "47.2,56.7 60.8,56.7 60.8,60.3 47.2,60.3"
    },
    {
      wordKey: "holiday",
      korean: "공휴일",
      audioUrl: "/audio/calendar/holiday.mp3",
      videoPath: "/video/calendar/holiday.mp4",
      sentence: "A holiday is a special day. We decorate the house on a holiday.",
      targetStyle: { top: '68.0%', left: '29.5%', width: '8.5%', height: '4.0%' },
      points: "47.2,61.2 60.8,61.2 60.8,64.8 47.2,64.8"
    },
    {
      wordKey: "date",
      korean: "날짜",
      audioUrl: "/audio/calendar/date.mp3",
      videoPath: "/video/calendar/date.mp4",
      sentence: "The date is on the calendar. I circle the date of my birthday.",
      targetStyle: { top: '42.0%', left: '29.5%', width: '8.5%', height: '6.0%' },
      points: "47.2,37.8 60.8,37.8 60.8,43.2 47.2,43.2"
    },
    {
      wordKey: "monday",
      korean: "월요일",
      audioUrl: "/audio/calendar/monday.mp3",
      videoPath: "/video/calendar/monday.mp4",
      sentence: "Monday is the first day of the week. We have PE class on Monday.",
      targetStyle: { top: '49.0%', left: '29.5%', width: '8.5%', height: '6.0%' },
      points: "47.2,44.1 60.8,44.1 60.8,49.5 47.2,49.5"
    },
    // --- 두 번째 열 (38.5%) 분리 ---
    {
      wordKey: "tuesday",
      korean: "화요일",
      audioUrl: "/audio/calendar/tuesday.mp3",
      videoPath: "/video/calendar/tuesday.mp4",
      sentence: "Tuesday comes after Monday. She has art class on Tuesday.",
      targetStyle: { top: '42.0%', left: '38.5%', width: '8.5%', height: '6.0%' },
      points: "61.6,37.8 75.2,37.8 75.2,43.2 61.6,43.2"
    },
    {
      wordKey: "yesterday",
      korean: "어제",
      audioUrl: "/audio/calendar/yesterday.mp3",
      videoPath: "/video/calendar/yesterday.mp4",
      sentence: "Yesterday was my birthday. He played outside yesterday.",
      targetStyle: { top: '49.0%', left: '38.5%', width: '8.5%', height: '6.0%' },
      points: "61.6,44.1 75.2,44.1 75.2,49.5 61.6,49.5"
    },
    {
      wordKey: "tomorrow",
      korean: "내일",
      audioUrl: "/audio/calendar/tomorrow.mp3",
      videoPath: "/video/calendar/tomorrow.mp4",
      sentence: "Tomorrow is a holiday. She visits her grandma tomorrow.",
      targetStyle: { top: '60.0%', left: '38.5%', width: '8.5%', height: '10.0%' },
      points: "61.6,54.0 75.2,54.0 75.2,63.0 61.6,63.0"
    },
    // --- 세 번째 열 (47.5%) ---
    {
      wordKey: "wednesday",
      korean: "수요일",
      audioUrl: "/audio/calendar/wednesday.mp3",
      videoPath: "/video/calendar/wednesday.mp4",
      sentence: "Wednesday is in the middle of the week. We have a school meeting on Wednesday.",
      targetStyle: { top: '44.0%', left: '47.5%', width: '8.5%', height: '10.0%' },
      points: "76.0,39.6 89.6,39.6 89.6,48.6 76.0,48.6"
    },
    {
      wordKey: "thursday",
      korean: "목요일",
      audioUrl: "/audio/calendar/thursday.mp3",
      videoPath: "/video/calendar/thursday.mp4",
      sentence: "Thursday comes before Friday. Dad works late on Thursday.",
      targetStyle: { top: '60.0%', left: '47.5%', width: '8.5%', height: '10.0%' },
      points: "76.0,54.0 89.6,54.0 89.6,63.0 76.0,63.0"
    },
    // --- 네 번째 열 (56.5%) ---
    {
      wordKey: "friday",
      korean: "금요일",
      audioUrl: "/audio/calendar/friday.mp3",
      videoPath: "/video/calendar/friday.mp4",
      sentence: "Friday is my favorite day. We clean the classroom on Friday.",
      targetStyle: { top: '60.0%', left: '56.5%', width: '8.5%', height: '10.0%' },
      points: "90.4,54.0 104.0,54.0 104.0,63.0 90.4,63.0"
    },
    {
      wordKey: "sunday",
      korean: "일요일",
      audioUrl: "/audio/calendar/sunday.mp3",
      videoPath: "/video/calendar/sunday.mp4",
      sentence: "Sunday is a rest day. Our family eats together on Sunday.",
      targetStyle: { top: '77.0%', left: '56.5%', width: '8.5%', height: '10.0%' },
      points: "90.4,69.3 104.0,69.3 104.0,78.3 90.4,78.3"
    },
    // --- 다섯 번째 열 (65.5%) ---
    {
      wordKey: "saturday",
      korean: "토요일",
      audioUrl: "/audio/calendar/saturday.mp3",
      videoPath: "/video/calendar/saturday.mp4",
      sentence: "Saturday is a day off. I play with my friends on Saturday.",
      targetStyle: { top: '60.0%', left: '65.5%', width: '8.5%', height: '10.0%' },
      points: "104.8,54.0 118.4,54.0 118.4,63.0 104.8,63.0"
    },
    {
      wordKey: "weekend",
      korean: "주말",
      audioUrl: "/audio/calendar/weekend.mp3",
      videoPath: "/video/calendar/weekend.mp4",
      sentence: "The weekend is fun. We go to the park on the weekend.",
      targetStyle: { top: '77.0%', left: '65.5%', width: '8.5%', height: '10.0%' },
      points: "104.8,69.3 118.4,69.3 118.4,78.3 104.8,78.3"
    },
    {
      wordKey: "birthday",
      korean: "생일",
      audioUrl: "/audio/calendar/birthday.mp3",
      videoPath: "/video/calendar/birthday.mp4",
      sentence: "My birthday is in March. She blows out candles on her birthday.",
      targetStyle: { top: '44.0%', left: '65.5%', width: '8.5%', height: '10.0%' },
      points: "104.8,39.6 118.4,39.6 118.4,48.6 104.8,48.6"
    },
    // --- 우측 패널 ---
    {
      wordKey: "schedule",
      korean: "일정/시간표",
      audioUrl: "/audio/calendar/schedule.mp3",
      videoPath: "/video/calendar/schedule.mp4",
      sentence: "My schedule is on the calendar. I check my schedule every morning.",
      targetStyle: { top: '12.0%', left: '76.0%', width: '10.0%', height: '15.0%' },
      points: "121.6,10.8 137.6,10.8 137.6,24.3 121.6,24.3"
    },
    {
      wordKey: "plan",
      korean: "계획",
      audioUrl: "/audio/calendar/plan.mp3",
      videoPath: "/video/calendar/plan.mp4",
      sentence: "We have a plan for the weekend. Mom makes a plan for the trip.",
      targetStyle: { top: '30.0%', left: '76.0%', width: '10.0%', height: '15.0%' },
      points: "121.6,27.0 137.6,27.0 137.6,40.5 121.6,40.5"
    },
    // --- 좌측 패널 ---
    {
      wordKey: "season",
      korean: "계절",
      audioUrl: "/audio/calendar/season.mp3",
      videoPath: "/video/calendar/season.mp4",
      sentence: "My favorite season is summer. Each season has different weather.",
      targetStyle: { top: '10.0%', left: '15.0%', width: '10.0%', height: '6.0%' },
      points: "24.0,9.0 40.0,9.0 40.0,14.4 24.0,14.4"
    },
    {
      wordKey: "spring",
      korean: "봄",
      audioUrl: "/audio/calendar/spring.mp3",
      videoPath: "/video/calendar/spring.mp4",
      sentence: "Spring is warm and colorful. Flowers bloom in spring.",
      targetStyle: { top: '18.0%', left: '15.0%', width: '10.0%', height: '6.0%' },
      points: "24.0,16.2 40.0,16.2 40.0,21.6 24.0,21.6"
    },
    {
      wordKey: "summer",
      korean: "여름",
      audioUrl: "/audio/calendar/summer.mp3",
      videoPath: "/video/calendar/summer.mp4",
      sentence: "Summer is hot and sunny. We swim in the pool every summer.",
      targetStyle: { top: '26.0%', left: '15.0%', width: '10.0%', height: '6.0%' },
      points: "24.0,23.4 40.0,23.4 40.0,28.8 24.0,28.8"
    },
    {
      wordKey: "winter",
      korean: "겨울",
      audioUrl: "/audio/calendar/winter.mp3",
      videoPath: "/video/calendar/winter.mp4",
      sentence: "Winter is cold and snowy. I wear a thick coat in winter.",
      targetStyle: { top: '34.0%', left: '15.0%', width: '10.0%', height: '6.0%' },
      points: "24.0,30.6 40.0,30.6 40.0,36.0 24.0,36.0"
    }
  ]
};