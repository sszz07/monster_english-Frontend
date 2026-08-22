// src/constants/apartmentImages.ts

import balconyImg from "@/assets/image/places/game/apartment/Balcony.png";
import basementImg from "@/assets/image/places/game/apartment/Basement.png";
import buildingImg from "@/assets/image/places/game/apartment/Building.png";
import columnImg from "@/assets/image/places/game/apartment/Column.png";
import elevatorImg from "@/assets/image/places/game/apartment/Elevator.png";
import entranceImg from "@/assets/image/places/game/apartment/Entrance.png";
import gardenImg from "@/assets/image/places/game/apartment/Garden.png";
import gymImg from "@/assets/image/places/game/apartment/Gym.png";
import hallwayImg from "@/assets/image/places/game/apartment/Hallway.png";
import intercormImg from "@/assets/image/places/game/apartment/Intercorm.png";
import loadingZoneImg from "@/assets/image/places/game/apartment/Loading zone.png";
import lobbyImg from "@/assets/image/places/game/apartment/Lobby.png";
import logoImg from "@/assets/image/places/game/apartment/logo.png";
import mailboxImg from "@/assets/image/places/game/apartment/Mailbox.png";
import parkingLotImg from "@/assets/image/places/game/apartment/Parking lot.png";
import playgroundImg from "@/assets/image/places/game/apartment/Playground.png";
import recyclingAreaImg from "@/assets/image/places/game/apartment/Recycling area.png";
import rooftopImg from "@/assets/image/places/game/apartment/Rooftop.png";
import securityOfficeImg from "@/assets/image/places/game/apartment/Security office.png";
import stairsImg from "@/assets/image/places/game/apartment/Stairs.png";
import terraceImg from "@/assets/image/places/game/apartment/Terrace.png";
import unitImg from "@/assets/image/places/game/apartment/Unit.png";
import walkingPathImg from "@/assets/image/places/game/apartment/Walking path.png";
import wallImg from "@/assets/image/places/game/apartment/Wall.png";
import windowImg from "@/assets/image/places/game/apartment/Window.png";

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