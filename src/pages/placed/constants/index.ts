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

export interface PlaceDataRegistry {
  [key: string]: PlaceDataType;
}

import { apartmentData } from "./my-house/my-house-data/ApartmentData";


export const ALL_PLACES_DATA: PlaceDataRegistry = {
  apartment: apartmentData,

};