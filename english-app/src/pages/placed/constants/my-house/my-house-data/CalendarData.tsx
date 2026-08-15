import calendarImg from '@/assets/image/places/house/calendar.png';

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
    {
      wordKey: "calendar",
      korean: "달력",
      audioUrl: "/audio/calendar/calendar.mp3",
      videoPath: "/video/calendar/calendar.mp4",
      sentence: "The calendar shows the dates and months.",
      targetStyle: { top: '5.0%', left: '28.0%', width: '47.0%', height: '88.0%' },
      points: "44.8,4.5 120.0,4.5 120.0,83.7 44.8,83.7"
    },
    {
      wordKey: "year",
      korean: "연도",
      audioUrl: "/audio/calendar/year.mp3",
      videoPath: "/video/calendar/year.mp4",
      sentence: "This year is 2025.",
      targetStyle: { top: '12.0%', left: '48.0%', width: '8.0%', height: '10.0%' },
      points: "76.8,10.8 89.6,10.8 89.6,19.8 76.8,19.8"
    },
    {
      wordKey: "month",
      korean: "월",
      audioUrl: "/audio/calendar/month.mp3",
      videoPath: "/video/calendar/month.mp4",
      sentence: "May is the fifth month of the year.",
      targetStyle: { top: '12.0%', left: '56.0%', width: '17.5%', height: '28.0%' },
      points: "89.6,10.8 117.6,10.8 117.6,36.0 89.6,36.0"
    },
    {
      wordKey: "week",
      korean: "주",
      audioUrl: "/audio/calendar/week.mp3",
      videoPath: "/video/calendar/week.mp4",
      sentence: "There are seven days in a week.",
      targetStyle: { top: '44.0%', left: '56.5%', width: '17.0%', height: '41.0%' },
      points: "90.4,39.6 117.6,39.6 117.6,76.5 90.4,76.5"
    },
    {
      wordKey: "day",
      korean: "일/하루",
      audioUrl: "/audio/calendar/day.mp3",
      videoPath: "/video/calendar/day.mp4",
      sentence: "Today is a beautiful day.",
      targetStyle: { top: '60.5%', left: '29.5%', width: '8.5%', height: '14.0%' },
      points: "47.2,54.45 60.8,54.45 60.8,67.05 47.2,67.05"
    },
    {
      wordKey: "date",
      korean: "날짜",
      audioUrl: "/audio/calendar/date.mp3",
      videoPath: "/video/calendar/date.mp4",
      sentence: "Check the date on the calendar.",
      targetStyle: { top: '44.0%', left: '29.5%', width: '8.5%', height: '14.0%' },
      points: "47.2,39.6 60.8,39.6 60.8,52.2 47.2,52.2"
    },
    {
      wordKey: "monday",
      korean: "월요일",
      audioUrl: "/audio/calendar/monday.mp3",
      videoPath: "/video/calendar/monday.mp4",
      sentence: "Monday is the start of the week.",
      targetStyle: { top: '44.0%', left: '29.5%', width: '8.5%', height: '14.0%' },
      points: "47.2,39.6 60.8,39.6 60.8,52.2 47.2,52.2"
    },
    {
      wordKey: "tuesday",
      korean: "화요일",
      audioUrl: "/audio/calendar/tuesday.mp3",
      videoPath: "/video/calendar/tuesday.mp4",
      sentence: "We have music class on Tuesday.",
      targetStyle: { top: '44.0%', left: '38.5%', width: '8.5%', height: '14.0%' },
      points: "61.6,39.6 75.2,39.6 75.2,52.2 61.6,52.2"
    },
    {
      wordKey: "wednesday",
      korean: "수요일",
      audioUrl: "/audio/calendar/wednesday.mp3",
      videoPath: "/video/calendar/wednesday.mp4",
      sentence: "Wednesday is in the middle of the week.",
      targetStyle: { top: '44.0%', left: '47.5%', width: '8.5%', height: '14.0%' },
      points: "76.0,39.6 89.6,39.6 89.6,52.2 76.0,52.2"
    },
    {
      wordKey: "thursday",
      korean: "목요일",
      audioUrl: "/audio/calendar/thursday.mp3",
      videoPath: "/video/calendar/thursday.mp4",
      sentence: "Tomorrow will be Thursday.",
      targetStyle: { top: '60.5%', left: '47.5%', width: '8.5%', height: '14.0%' },
      points: "76.0,54.45 89.6,54.45 89.6,67.05 76.0,67.05"
    },
    {
      wordKey: "friday",
      korean: "금요일",
      audioUrl: "/audio/calendar/friday.mp3",
      videoPath: "/video/calendar/friday.mp4",
      sentence: "I like Friday because the weekend is coming.",
      targetStyle: { top: '60.5%', left: '56.5%', width: '8.5%', height: '14.0%' },
      points: "90.4,54.45 104.0,54.45 104.0,67.05 90.4,67.05"
    },
    {
      wordKey: "saturday",
      korean: "토요일",
      audioUrl: "/audio/calendar/saturday.mp3",
      videoPath: "/video/calendar/saturday.mp4",
      sentence: "I go to the park on Saturday.",
      targetStyle: { top: '60.5%', left: '65.5%', width: '8.5%', height: '14.0%' },
      points: "104.8,54.45 118.4,54.45 118.4,67.05 104.8,67.05"
    },
    {
      wordKey: "sunday",
      korean: "일요일",
      audioUrl: "/audio/calendar/sunday.mp3",
      videoPath: "/video/calendar/sunday.mp4",
      sentence: "Sunday is a day of rest.",
      targetStyle: { top: '77.0%', left: '56.5%', width: '8.5%', height: '14.0%' },
      points: "90.4,69.3 104.0,69.3 104.0,81.9 90.4,81.9"
    },
    {
      wordKey: "weekend",
      korean: "주말",
      audioUrl: "/audio/calendar/weekend.mp3",
      videoPath: "/video/calendar/weekend.mp4",
      sentence: "I enjoy playing during the weekend.",
      targetStyle: { top: '77.0%', left: '65.5%', width: '8.5%', height: '14.0%' },
      points: "104.8,69.3 118.4,69.3 118.4,81.9 104.8,81.9"
    },
    {
      wordKey: "today",
      korean: "오늘",
      audioUrl: "/audio/calendar/today.mp3",
      videoPath: "/video/calendar/today.mp4",
      sentence: "Today is May 14th.",
      targetStyle: { top: '60.5%', left: '29.5%', width: '8.5%', height: '14.0%' },
      points: "47.2,54.45 60.8,54.45 60.8,67.05 47.2,67.05"
    },
    {
      wordKey: "tomorrow",
      korean: "내일",
      audioUrl: "/audio/calendar/tomorrow.mp3",
      videoPath: "/video/calendar/tomorrow.mp4",
      sentence: "Tomorrow we will go on a trip.",
      targetStyle: { top: '60.5%', left: '38.5%', width: '8.5%', height: '14.0%' },
      points: "61.6,54.45 75.2,54.45 75.2,67.05 61.6,67.05"
    },
    {
      wordKey: "yesterday",
      korean: "어제",
      audioUrl: "/audio/calendar/yesterday.mp3",
      videoPath: "/video/calendar/yesterday.mp4",
      sentence: "Yesterday it was raining.",
      targetStyle: { top: '44.0%', left: '38.5%', width: '8.5%', height: '14.0%' },
      points: "61.6,39.6 75.2,39.6 75.2,52.2 61.6,52.2"
    },
    {
      wordKey: "holiday",
      korean: "공휴일",
      audioUrl: "/audio/calendar/holiday.mp3",
      videoPath: "/video/calendar/holiday.mp4",
      sentence: "Today is a national holiday.",
      targetStyle: { top: '60.5%', left: '29.5%', width: '8.5%', height: '14.0%' },
      points: "47.2,54.45 60.8,54.45 60.8,67.05 47.2,67.05"
    },
    {
      wordKey: "birthday",
      korean: "생일",
      audioUrl: "/audio/calendar/birthday.mp3",
      videoPath: "/video/calendar/birthday.mp4",
      sentence: "Happy birthday to you!",
      targetStyle: { top: '44.0%', left: '65.5%', width: '8.5%', height: '14.0%' },
      points: "104.8,39.6 118.4,39.6 118.4,52.2 104.8,52.2"
    },
    {
      wordKey: "schedule",
      korean: "일정/시간표",
      audioUrl: "/audio/calendar/schedule.mp3",
      videoPath: "/video/calendar/schedule.mp4",
      sentence: "Check the school schedule.",
      targetStyle: { top: '12.0%', left: '75.5%', width: '10.0%', height: '34.0%' },
      points: "120.8,10.8 136.8,10.8 136.8,41.4 120.8,41.4"
    },
    {
      wordKey: "plan",
      korean: "계획",
      audioUrl: "/audio/calendar/plan.mp3",
      videoPath: "/video/calendar/plan.mp4",
      sentence: "I have a plan for the holidays.",
      targetStyle: { top: '49.0%', left: '75.5%', width: '10.5%', height: '39.0%' },
      points: "120.8,44.1 137.6,44.1 137.6,79.2 120.8,79.2"
    },
    {
      wordKey: "season",
      korean: "계절",
      audioUrl: "/audio/calendar/season.mp3",
      videoPath: "/video/calendar/season.mp4",
      sentence: "Which season do you like best?",
      targetStyle: { top: '12.0%', left: '19.5%', width: '8.0%', height: '28.0%' },
      points: "31.2,10.8 44.0,10.8 44.0,36.0 31.2,36.0"
    },
    {
      wordKey: "spring",
      korean: "봄",
      audioUrl: "/audio/calendar/spring.mp3",
      videoPath: "/video/calendar/spring.mp4",
      sentence: "Spring is the season of flowers.",
      targetStyle: { top: '18.0%', left: '20.0%', width: '7.0%', height: '7.0%' },
      points: "32.0,16.2 43.2,16.2 43.2,22.5 32.0,22.5"
    },
    {
      wordKey: "summer",
      korean: "여름",
      audioUrl: "/audio/calendar/summer.mp3",
      videoPath: "/video/calendar/summer.mp4",
      sentence: "Summer is very hot and sunny.",
      targetStyle: { top: '25.0%', left: '20.0%', width: '7.0%', height: '7.0%' },
      points: "32.0,22.5 43.2,22.5 43.2,28.8 32.0,28.8"
    },
    {
      wordKey: "winter",
      korean: "겨울",
      audioUrl: "/audio/calendar/winter.mp3",
      videoPath: "/video/calendar/winter.mp4",
      sentence: "Winter is cold with snow.",
      targetStyle: { top: '32.0%', left: '20.0%', width: '7.0%', height: '7.0%' },
      points: "32.0,28.8 43.2,28.8 43.2,35.1 32.0,35.1"
    }
  ]
};