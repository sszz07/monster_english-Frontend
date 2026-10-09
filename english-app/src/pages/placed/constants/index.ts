// --- 기존 My House 데이터 임포트 ---
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

// --- 새롭게 추가된 My Town 데이터 임포트 ---
import { classroomData } from "@/pages/placed/constants/my-town/my-town-data/ClassroomData";
import { cafeteriaData } from "@/pages/placed/constants/my-town/my-town-data/CafeteriaData";
import { busStopData } from "@/pages/placed/constants/my-town/my-town-data/BusStopData";
import { subwayData } from "@/pages/placed/constants/my-town/my-town-data/SubwayData";
import { crosswalkData } from "@/pages/placed/constants/my-town/my-town-data/CrossWalkData";
import { stationeryData } from "@/pages/placed/constants/my-town/my-town-data/StationeryShopData";
import { bakeryData } from "@/pages/placed/constants/my-town/my-town-data/BakeryData";
import { supermarketData } from "@/pages/placed/constants/my-town/my-town-data/SuperMarketData";
import { pharmacyData } from "@/pages/placed/constants/my-town/my-town-data/PharmacyData";
import { hospitalData } from "@/pages/placed/constants/my-town/my-town-data/HospitalData";

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
  // [기존] My House Data
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

  // [추가] My Town Data (MyTownPage의 placeKey와 정확히 일치)
  classroom: classroomData,
  cafeteria: cafeteriaData,
  busstop: busStopData,
  subway: subwayData,
  crosswalk: crosswalkData,
  stationery: stationeryData,
  bakery: bakeryData,
  supermarket: supermarketData,
  pharmacy: pharmacyData,
  hospital: hospitalData,
};


//