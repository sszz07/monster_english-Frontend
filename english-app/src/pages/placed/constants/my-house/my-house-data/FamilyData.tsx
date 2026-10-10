import { ThemeImage } from "@/assets/image/places/my-house/ThemeImage";    
const familyImg = ThemeImage.family;

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

export const familyData: PlaceDataType = {
  placeKey: "family",
  placeTitle: "Family Word Adventure",
  bgImage: familyImg,
  masterRegions: [
    // 1. 아빠 (얼굴 및 상체 위주)
    {
      wordKey: "father",
      korean: "아버지/아빠",
      audioUrl: "/audio/family/father.mp3",
      videoPath: "/video/family/father.mp4",
      sentence: "My father is tall. Father drives me to school.",
      targetStyle: { top: '23.0%', left: '26.0%', width: '4.0%', height: '6.0%' },
      points: "41.6,20.7 48.0,20.7 48.0,26.1 41.6,26.1"
    },
    // 2. 엄마 (아빠와 겹치지 않게 분리)
    {
      wordKey: "mother",
      korean: "어머니/엄마",
      audioUrl: "/audio/family/mother.mp3",
      videoPath: "/video/family/mother.mp4",
      sentence: "My mother is kind. Mother cooks dinner every night.",
      targetStyle: { top: '23.0%', left: '32.0%', width: '4.0%', height: '6.0%' },
      points: "51.2,20.7 57.6,20.7 57.6,26.1 51.2,26.1"
    },
    // 3. 부모님 (엄마, 아빠 발아래 빈 공간)
    {
      wordKey: "parents",
      korean: "부모님",
      audioUrl: "/audio/family/parents.mp3",
      videoPath: "/video/family/parents.mp4",
      sentence: "My parents are wonderful. I love my parents very much.",
      targetStyle: { top: '30.0%', left: '27.0%', width: '8.0%', height: '5.0%' },
      points: "43.2,27.0 56.0,27.0 56.0,31.5 43.2,31.5"
    },
    // 4. 남자 형제 (세 아이 중 왼쪽)
    {
      wordKey: "brother",
      korean: "남자 형제(오빠/남동생/형)",
      audioUrl: "/audio/family/brother.mp3",
      videoPath: "/video/family/brother.mp4",
      sentence: "My brother is funny. I share my toys with my brother.",
      targetStyle: { top: '36.0%', left: '29.0%', width: '3.0%', height: '6.0%' },
      points: "46.4,32.4 51.2,32.4 51.2,37.8 46.4,37.8"
    },
    // 5. 여자 형제 (세 아이 중 중앙)
    {
      wordKey: "sister",
      korean: "여자 형제(언니/여동생/누나)",
      audioUrl: "/audio/family/sister.mp3",
      videoPath: "/video/family/sister.mp4",
      sentence: "My sister is two years older. She reads books with her sister.",
      targetStyle: { top: '36.0%', left: '34.0%', width: '3.0%', height: '6.0%' },
      points: "54.4,32.4 59.2,32.4 59.2,37.8 54.4,37.8"
    },
    // 6. 아들 (세 아이 중 오른쪽)
    {
      wordKey: "son",
      korean: "아들",
      audioUrl: "/audio/family/son.mp3",
      videoPath: "/video/family/son.mp4",
      sentence: "He is the only son in the family. The son helps his father.",
      targetStyle: { top: '36.0%', left: '39.0%', width: '3.0%', height: '6.0%' },
      points: "62.4,32.4 67.2,32.4 67.2,37.8 62.4,37.8"
    },
    // 7. 형제자매 (아이들 발아래 빈 공간으로 분리)
    {
      wordKey: "siblings",
      korean: "형제자매",
      audioUrl: "/audio/family/siblings.mp3",
      videoPath: "/video/family/siblings.mp4",
      sentence: "I have two siblings. My siblings and I play together.",
      targetStyle: { top: '44.0%', left: '30.0%', width: '10.0%', height: '4.0%' },
      points: "48.0,39.6 64.0,39.6 64.0,43.2 48.0,43.2"
    },
    // 8. 삼촌
    {
      wordKey: "uncle",
      korean: "삼촌/외삼촌/고모부/이모부",
      audioUrl: "/audio/family/uncle.mp3",
      videoPath: "/video/family/uncle.mp4",
      sentence: "My uncle is very funny. He plays soccer with his uncle.",
      targetStyle: { top: '46.0%', left: '15.0%', width: '4.0%', height: '8.0%' },
      points: "24.0,41.4 30.4,41.4 30.4,48.6 24.0,48.6"
    },
    // 9. 이모/고모
    {
      wordKey: "aunt",
      korean: "이모/고모/숙모",
      audioUrl: "/audio/family/aunt.mp3",
      videoPath: "/video/family/aunt.mp4",
      sentence: "My aunt bakes great cookies. She stays with her aunt in summer.",
      targetStyle: { top: '46.0%', left: '21.0%', width: '4.0%', height: '8.0%' },
      points: "33.6,41.4 40.0,41.4 40.0,48.6 33.6,48.6"
    },
    // 10. 사촌
    {
      wordKey: "cousin",
      korean: "사촌",
      audioUrl: "/audio/family/cousin.mp3",
      videoPath: "/video/family/cousin.mp4",
      sentence: "My cousin is the same age as me. We ride bikes with our cousins.",
      targetStyle: { top: '60.0%', left: '26.0%', width: '6.0%', height: '8.0%' },
      points: "41.6,54.0 51.2,54.0 51.2,61.2 41.6,61.2"
    },
    // 11. 딸 (바닥의 안경 쓴 소녀)
    {
      wordKey: "daughter",
      korean: "딸",
      audioUrl: "/audio/family/daughter.mp3",
      videoPath: "/video/family/daughter.mp4",
      sentence: "She is the youngest daughter. The daughter hugs her mother.",
      targetStyle: { top: '74.0%', left: '42.0%', width: '4.0%', height: '10.0%' },
      points: "67.2,66.6 73.6,66.6 73.6,75.6 67.2,75.6"
    },
    // 12. 어린이 (바닥의 체크무늬 소년)
    {
      wordKey: "child",
      korean: "아이/어린이",
      audioUrl: "/audio/family/child.mp3",
      videoPath: "/video/family/child.mp4",
      sentence: "Every child needs love. The child runs to her father.",
      targetStyle: { top: '74.0%', left: '53.0%', width: '4.0%', height: '10.0%' },
      points: "84.8,66.6 91.2,66.6 91.2,75.6 84.8,75.6"
    },
    // 13. 사랑 (바닥의 하트)
    {
      wordKey: "love",
      korean: "사랑",
      audioUrl: "/audio/family/love.mp3",
      videoPath: "/video/family/love.mp4",
      sentence: "Our family is full of love. We love each other every day.",
      targetStyle: { top: '74.0%', left: '47.0%', width: '4.0%', height: '8.0%' },
      points: "75.2,66.6 81.6,66.6 81.6,73.8 75.2,73.8"
    },
    // 14. 아이들 (하트와 두 아이 머리 위쪽 빈 공간)
    {
      wordKey: "children",
      korean: "아이들",
      audioUrl: "/audio/family/children.mp3",
      videoPath: "/video/family/children.mp4",
      sentence: "The children play in the garden. Dad reads a story to the children.",
      targetStyle: { top: '65.0%', left: '44.0%', width: '10.0%', height: '5.0%' },
      points: "70.4,58.5 86.4,58.5 86.4,63.0 70.4,63.0"
    },
    // 15. 집
    {
      wordKey: "home",
      korean: "집",
      audioUrl: "/audio/family/home.mp3",
      videoPath: "/video/family/home.mp4",
      sentence: "Our home is warm and cozy. The whole family gathers at home.",
      targetStyle: { top: '8.0%', left: '44.0%', width: '10.0%', height: '10.0%' },
      points: "70.4,7.2 86.4,7.2 86.4,16.2 70.4,16.2"
    },
    // 16. 손녀
    {
      wordKey: "granddaughter",
      korean: "손녀",
      audioUrl: "/audio/family/granddaughter.mp3",
      videoPath: "/video/family/granddaughter.mp4",
      sentence: "She is a sweet granddaughter. Grandpa takes his granddaughter to the park.",
      targetStyle: { top: '22.0%', left: '51.0%', width: '3.0%', height: '6.0%' },
      points: "81.6,19.8 86.4,19.8 86.4,25.2 81.6,25.2"
    },
    // 17. 손자 (조부모님 좌측)
    {
      wordKey: "grandson",
      korean: "손자",
      audioUrl: "/audio/family/grandson.mp3",
      videoPath: "/video/family/grandson.mp4",
      sentence: "He is their only grandson. Grandma hugs her grandson tightly.",
      targetStyle: { top: '38.0%', left: '60.0%', width: '4.0%', height: '8.0%' },
      points: "96.0,34.2 102.4,34.2 102.4,41.4 96.0,41.4"
    },
    // 18. 할머니
    {
      wordKey: "grandmother",
      korean: "할머니",
      audioUrl: "/audio/family/grandmother.mp3",
      videoPath: "/video/family/grandmother.mp4",
      sentence: "My grandmother makes delicious food. I visit my grandmother on weekends.",
      targetStyle: { top: '30.0%', left: '65.0%', width: '4.0%', height: '8.0%' },
      points: "104.0,27.0 110.4,27.0 110.4,34.2 104.0,34.2"
    },
    // 19. 할아버지
    {
      wordKey: "grandfather",
      korean: "할아버지",
      audioUrl: "/audio/family/grandfather.mp3",
      videoPath: "/video/family/grandfather.mp4",
      sentence: "My grandfather tells great stories. He walks with his grandfather every morning.",
      targetStyle: { top: '30.0%', left: '71.0%', width: '4.0%', height: '8.0%' },
      points: "113.6,27.0 120.0,27.0 120.0,34.2 113.6,34.2"
    },
    // 20. 조부모님 (할머니, 할아버지 발아래 빈 공간)
    {
      wordKey: "grandparents",
      korean: "조부모님(할머니, 할아버지)",
      audioUrl: "/audio/family/grandparents.mp3",
      videoPath: "/video/family/grandparents.mp4",
      sentence: "My grandparents live nearby. We call our grandparents every Sunday.",
      targetStyle: { top: '40.0%', left: '65.0%', width: '9.0%', height: '4.0%' },
      points: "104.0,36.0 118.4,36.0 118.4,39.6 104.0,39.6"
    },
    // 21. 남편
    {
      wordKey: "husband",
      korean: "남편",
      audioUrl: "/audio/family/husband.mp3",
      videoPath: "/video/family/husband.mp4",
      sentence: "Her husband is a good cook. The husband and wife work together.",
      targetStyle: { top: '13.0%', left: '77.0%', width: '3.0%', height: '6.0%' },
      points: "123.2,11.7 128.0,11.7 128.0,17.1 123.2,17.1"
    },
    // 22. 아내
    {
      wordKey: "wife",
      korean: "아내",
      audioUrl: "/audio/family/wife.mp3",
      videoPath: "/video/family/wife.mp4",
      sentence: "His wife is a teacher. The wife decorates their home.",
      targetStyle: { top: '13.0%', left: '82.0%', width: '3.0%', height: '6.0%' },
      points: "131.2,11.7 136.0,11.7 136.0,17.1 131.2,17.1"
    },
    // 23. 아기 (남편과 아내 아래쪽 사이)
    {
      wordKey: "baby",
      korean: "아기",
      audioUrl: "/audio/family/baby.mp3",
      videoPath: "/video/family/baby.mp4",
      sentence: "The baby is so cute. Mom holds the baby gently.",
      targetStyle: { top: '21.0%', left: '79.0%', width: '3.0%', height: '5.0%' },
      points: "126.4,18.9 131.2,18.9 131.2,23.4 126.4,23.4"
    },
    // 24. 친척들
    {
      wordKey: "relatives",
      korean: "친척들",
      audioUrl: "/audio/family/relatives.mp3",
      videoPath: "/video/family/relatives.mp4",
      sentence: "Our relatives visit us every holiday. We take photos with all our relatives.",
      targetStyle: { top: '50.0%', left: '77.0%', width: '8.0%', height: '10.0%' },
      points: "123.2,45.0 136.0,45.0 136.0,54.0 123.2,54.0"
    }
  ]
};