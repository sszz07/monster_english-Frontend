import familyImg from '@/assets/image/places/house/family.png';

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
    {
      wordKey: "father",
      korean: "아버지/아빠",
      audioUrl: "/audio/family/father.mp3",
      videoPath: "/video/family/father.mp4",
      sentence: "My father is very kind and strong.",
      targetStyle: { top: '22.0%', left: '28.0%', width: '5.0%', height: '18.0%' },
      points: "44.8,19.8 52.8,19.8 52.8,36.0 44.8,36.0"
    },
    {
      wordKey: "mother",
      korean: "어머니/엄마",
      audioUrl: "/audio/family/mother.mp3",
      videoPath: "/video/family/mother.mp4",
      sentence: "My mother cooks delicious food for us.",
      targetStyle: { top: '24.0%', left: '32.0%', width: '5.5%', height: '16.0%' },
      points: "51.2,21.6 60.0,21.6 60.0,36.0 51.2,36.0"
    },
    {
      wordKey: "parents",
      korean: "부모님",
      audioUrl: "/audio/family/parents.mp3",
      videoPath: "/video/family/parents.mp4",
      sentence: "I love my parents very much.",
      targetStyle: { top: '22.0%', left: '28.0%', width: '9.5%', height: '18.0%' },
      points: "44.8,19.8 60.0,19.8 60.0,36.0 44.8,36.0"
    },
    {
      wordKey: "son",
      korean: "아들",
      audioUrl: "/audio/family/son.mp3",
      videoPath: "/video/family/son.mp4",
      sentence: "The son is standing under the tree.",
      targetStyle: { top: '67.0%', left: '52.5%', width: '6.0%', height: '21.0%' },
      points: "84.0,60.3 93.6,60.3 93.6,79.2 84.0,79.2"
    },
    {
      wordKey: "daughter",
      korean: "딸",
      audioUrl: "/audio/family/daughter.mp3",
      videoPath: "/video/family/daughter.mp4",
      sentence: "The daughter is smiling cheerfully.",
      targetStyle: { top: '68.0%', left: '41.0%', width: '6.0%', height: '20.0%' },
      points: "65.6,61.2 75.2,61.2 75.2,79.2 65.6,79.2"
    },
    {
      wordKey: "brother",
      korean: "남자 형제(오빠/남동생/형)",
      audioUrl: "/audio/family/brother.mp3",
      videoPath: "/video/family/brother.mp4",
      sentence: "My brother plays games with me.",
      targetStyle: { top: '32.0%', left: '37.0%', width: '3.5%', height: '13.0%' },
      points: "59.2,28.8 64.8,28.8 64.8,40.5 59.2,40.5"
    },
    {
      wordKey: "sister",
      korean: "여자 형제(언니/여동생/누나)",
      audioUrl: "/audio/family/sister.mp3",
      videoPath: "/video/family/sister.mp4",
      sentence: "My sister has long dark hair.",
      targetStyle: { top: '35.0%', left: '34.0%', width: '3.5%', height: '10.0%' },
      points: "54.4,31.5 60.0,31.5 60.0,40.5 54.4,40.5"
    },
    {
      wordKey: "siblings",
      korean: "형제자매",
      audioUrl: "/audio/family/siblings.mp3",
      videoPath: "/video/family/siblings.mp4",
      sentence: "The siblings are standing side by side.",
      targetStyle: { top: '67.0%', left: '41.0%', width: '17.5%', height: '22.0%' },
      points: "65.6,60.3 93.6,60.3 93.6,80.1 65.6,80.1"
    },
    {
      wordKey: "grandfather",
      korean: "할아버지",
      audioUrl: "/audio/family/grandfather.mp3",
      videoPath: "/video/family/grandfather.mp4",
      sentence: "My grandfather wears glasses and a brown vest.",
      targetStyle: { top: '27.0%', left: '68.5%', width: '5.5%', height: '18.0%' },
      points: "109.6,24.3 118.4,24.3 118.4,40.5 109.6,40.5"
    },
    {
      wordKey: "grandmother",
      korean: "할머니",
      audioUrl: "/audio/family/grandmother.mp3",
      videoPath: "/video/family/grandmother.mp4",
      sentence: "My grandmother has gray hair and warm smile.",
      targetStyle: { top: '28.0%', left: '64.0%', width: '5.0%', height: '17.0%' },
      points: "102.4,25.2 110.4,25.2 110.4,40.5 102.4,40.5"
    },
    {
      wordKey: "grandparents",
      korean: "조부모님(할머니, 할아버지)",
      audioUrl: "/audio/family/grandparents.mp3",
      videoPath: "/video/family/grandparents.mp4",
      sentence: "We visit our grandparents on weekends.",
      targetStyle: { top: '27.0%', left: '64.0%', width: '10.0%', height: '18.0%' },
      points: "102.4,24.3 118.4,24.3 118.4,40.5 102.4,40.5"
    },
    {
      wordKey: "uncle",
      korean: "삼촌/외삼촌/고모부/이모부",
      audioUrl: "/audio/family/uncle.mp3",
      videoPath: "/video/family/uncle.mp4",
      sentence: "My uncle wears a blue shirt.",
      targetStyle: { top: '53.0%', left: '65.5%', width: '5.5%', height: '15.0%' },
      points: "104.8,47.7 113.6,47.7 113.6,61.2 104.8,61.2"
    },
    {
      wordKey: "aunt",
      korean: "이모/고모/숙모",
      audioUrl: "/audio/family/aunt.mp3",
      videoPath: "/video/family/aunt.mp4",
      sentence: "My aunt is wearing a pink top.",
      targetStyle: { top: '54.0%', left: '70.0%', width: '5.0%', height: '14.0%' },
      points: "112.0,48.6 120.0,48.6 120.0,61.2 112.0,61.2"
    },
    {
      wordKey: "cousin",
      korean: "사촌",
      audioUrl: "/audio/family/cousin.mp3",
      videoPath: "/video/family/cousin.mp4",
      sentence: "My cousin is sitting on the tree branch.",
      targetStyle: { top: '35.5%', left: '60.5%', width: '4.0%', height: '10.0%' },
      points: "96.8,31.95 103.2,31.95 103.2,40.95 96.8,40.95"
    },
    {
      wordKey: "baby",
      korean: "아기",
      audioUrl: "/audio/family/baby.mp3",
      videoPath: "/video/family/baby.mp4",
      sentence: "The baby is held in their arms.",
      targetStyle: { top: '19.5%', left: '80.0%', width: '3.5%', height: '9.0%' },
      points: "128.0,17.55 133.6,17.55 133.6,25.65 128.0,25.65"
    },
    {
      wordKey: "child",
      korean: "아이/어린이",
      audioUrl: "/audio/family/child.mp3",
      videoPath: "/video/family/child.mp4",
      sentence: "Each child has a bright smile.",
      targetStyle: { top: '67.0%', left: '52.5%', width: '6.0%', height: '21.0%' },
      points: "84.0,60.3 93.6,60.3 93.6,79.2 84.0,79.2"
    },
    {
      wordKey: "children",
      korean: "아이들",
      audioUrl: "/audio/family/children.mp3",
      videoPath: "/video/family/children.mp4",
      sentence: "The children are gathered around the tree.",
      targetStyle: { top: '32.0%', left: '31.5%', width: '9.0%', height: '13.0%' },
      points: "50.4,28.8 64.8,28.8 64.8,40.5 50.4,40.5"
    },
    {
      wordKey: "grandson",
      korean: "손자",
      audioUrl: "/audio/family/grandson.mp3",
      videoPath: "/video/family/grandson.mp4",
      sentence: "The grandson sits near his grandmother.",
      targetStyle: { top: '35.5%', left: '60.5%', width: '4.0%', height: '10.0%' },
      points: "96.8,31.95 103.2,31.95 103.2,40.95 96.8,40.95"
    },
    {
      wordKey: "granddaughter",
      korean: "손녀",
      audioUrl: "/audio/family/granddaughter.mp3",
      videoPath: "/video/family/granddaughter.mp4",
      sentence: "The granddaughter stands by the house model.",
      targetStyle: { top: '20.0%', left: '48.0%', width: '2.5%', height: '7.5%' },
      points: "76.8,18.0 80.8,18.0 80.8,24.75 76.8,24.75"
    },
    {
      wordKey: "husband",
      korean: "남편",
      audioUrl: "/audio/family/husband.mp3",
      videoPath: "/video/family/husband.mp4",
      sentence: "The husband holds his wife gently.",
      targetStyle: { top: '11.5%', left: '77.0%', width: '4.5%', height: '16.0%' },
      points: "123.2,10.35 130.4,10.35 130.4,24.75 123.2,24.75"
    },
    {
      wordKey: "wife",
      korean: "아내",
      audioUrl: "/audio/family/wife.mp3",
      videoPath: "/video/family/wife.mp4",
      sentence: "The wife hugs her family happily.",
      targetStyle: { top: '14.0%', left: '82.0%', width: '4.5%', height: '14.5%' },
      points: "131.2,12.6 138.4,12.6 138.4,25.65 131.2,25.65"
    },
    {
      wordKey: "relatives",
      korean: "친척들",
      audioUrl: "/audio/family/relatives.mp3",
      videoPath: "/video/family/relatives.mp4",
      sentence: "All our relatives gather together on holidays.",
      targetStyle: { top: '45.0%', left: '75.0%', width: '10.0%', height: '13.0%' },
      points: "120.0,40.5 136.0,40.5 136.0,52.2 120.0,52.2"
    },
    {
      wordKey: "home",
      korean: "집",
      audioUrl: "/audio/family/home.mp3",
      videoPath: "/video/family/home.mp4",
      sentence: "Our home sits on top of the family tree.",
      targetStyle: { top: '7.0%', left: '38.0%', width: '24.0%', height: '20.0%' },
      points: "60.8,6.3 99.2,6.3 99.2,24.3 60.8,24.3"
    },
    {
      wordKey: "love",
      korean: "사랑",
      audioUrl: "/audio/family/love.mp3",
      videoPath: "/video/family/love.mp4",
      sentence: "Our family is filled with love.",
      targetStyle: { top: '66.0%', left: '46.0%', width: '8.0%', height: '14.0%' },
      points: "73.6,59.4 86.4,59.4 86.4,72.0 73.6,72.0"
    }
  ]
};