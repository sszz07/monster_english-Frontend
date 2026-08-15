import { apartmentData } from "@/pages/placed/constants/my-house/my-house-data/ApartmentData";
import { houseData } from "@/pages/placed/constants/my-house/my-house-data/HouseData";
import { kitchenData } from "@/pages/placed/constants/my-house/my-house-data/KitchenData";
import { livingRoomData } from "@/pages/placed/constants/my-house/my-house-data/LivingRoomData";
import { bathroomData } from "@/pages/placed/constants/my-house/my-house-data/BathroomData";
import { bedroomData } from "@/pages/placed/constants/my-house/my-house-data/BedroomData";
import { playgroundData } from "@/pages/placed/constants/my-house/my-house-data/PlaygroundData";
import { recyclingAreaData } from "@/pages/placed/constants/my-house/my-house-data/RecyclingData";
import { familyData } from "@/pages/placed/constants/my-house/my-house-data/FamilyData";
import { calendarData } from "@/pages/placed/constants/my-house/my-house-data/CalendarData";

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

export const ALL_PLACES_DATA: PlaceDataRegistry = {
  apartment: apartmentData,
  house: houseData,
  kitchen: kitchenData,
  livingroom: livingRoomData,
  bathroom: bathroomData,
  bedroom: bedroomData,
  playground: playgroundData,
  recycling_area: recyclingAreaData,
  family: familyData,
  calendar: calendarData,
};