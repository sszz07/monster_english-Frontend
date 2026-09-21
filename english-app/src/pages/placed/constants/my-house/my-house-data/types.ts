// src/pages/placed/constants/my-house/my-house-data/types.ts
//장소(Place) 데이터와 각 영역(Region) 데이터가 반드시 포함되어야 하는 인터페이스 정의
export interface RegionData {
  wordKey: string;
  korean: string;
  audioUrl: string;
  videoPath: string;
  sentence: string;
  sentenceFirstAudioUrl?: string;
  sentenceSecondAudioUrl?: string;
  targetStyle: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  points: string;
  imageType?: string; // 👈 string으로 넓히거나, 각 장소 키들을 모두 포함시킵니다.
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

//해당 코드가 무엇을 보이는가? 인터페이스  어떤 인터페이스? 인터페이스란 무엇인가? 무엇인가 연결해주는 중간다리 역할? 
//위의 처럼 따로 만든 이유가 뭘까?