// src/constants/apartmentImages.ts
import {  } from "@/assets/image/places/my-house/ThemeImage"; 

import { GameImage } from "@/assets/image/places/my-house/GameImage"; 

 
const balconyImg = GameImage.apartmentGameBalcony;
const basementImg = GameImage.apartmentGameBasement;
const buildingImg = GameImage.apartmentGameBuilding;
const columnImg = GameImage.apartmentGameColumn;
const elevatorImg = GameImage.apartmentGameElevator;
const entranceImg = GameImage.apartmentGameEntrance;
const gardenImg = GameImage.apartmentGameGarden;
const gymImg = GameImage.apartmentGameGym;
const hallwayImg = GameImage.apartmentGameHallway;
const intercormImg = GameImage.apartmentGameIntercorm;
const loadingZoneImg = GameImage.apartmentGameLoadingZone;
const lobbyImg = GameImage.apartmentGameLobby;
const logoImg = GameImage.apartmentGameLogo;
const mailboxImg = GameImage.apartmentGameMailbox;
const parkingLotImg = GameImage.apartmentGameParkinglot;
const playgroundImg = GameImage.apartmentGamePlayground;
const recyclingAreaImg = GameImage.apartmentGameRecyclingArea;
const rooftopImg = GameImage.apartmentGameRooftop;
const securityOfficeImg = GameImage.apartmentGameSecurityOffice;
const stairsImg = GameImage.apartmentGameStairs;
const terraceImg = GameImage.apartmentGameTerrace;
const unitImg = GameImage.apartmentGameUnit;
const walkingPathImg = GameImage.apartmentGameWalkingPath;
const wallImg = GameImage.apartmentGameWall;
const windowImg = GameImage.apartmentGameWindow;

/**
 * 아파트 테마 이미지 매핑 상수
 */
export const APARTMENT_IMAGE_ASSETS: Record<string, string> = {
  balcony: balconyImg,
  basement: basementImg,
  building: buildingImg,
  column: columnImg,
  elevator: elevatorImg,
  entrance: entranceImg,
  garden: gardenImg,
  gym: gymImg,
  hallway: hallwayImg,
  intercorm: intercormImg,
  loadingzone: loadingZoneImg,
  loading_zone: loadingZoneImg,
  lobby: lobbyImg,
  logo: logoImg,
  mailbox: mailboxImg,
  parkinglot: parkingLotImg,
  parking_lot: parkingLotImg,
  playground: playgroundImg,
  recyclingarea: recyclingAreaImg,
  recycling_area: recyclingAreaImg,
  rooftop: rooftopImg,
  securityoffice: securityOfficeImg,
  security_office: securityOfficeImg,
  stairs: stairsImg,
  terrace: terraceImg,
  unit: unitImg,
  walkingpath: walkingPathImg,
  walking_path: walkingPathImg,
  wall: wallImg,
  window: windowImg,
};

/**
 * 단어 키 또는 커스텀 URL을 받아 적절한 이미지 경로를 반환하는 함수
 */
export const getApartmentImageUrl = (wordKey: string, customUrl?: string): string => {
  if (customUrl && customUrl.trim() !== "") {
    console.log("Custom URL provided:", customUrl); // Debugging line
    return customUrl;
  }
  const key = wordKey.toLowerCase().replace(/[\s_]+/g, "");
  return APARTMENT_IMAGE_ASSETS[key] || "";
};