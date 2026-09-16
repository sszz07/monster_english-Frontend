// src/gameConstants/houseImages.ts
import { GameImage } from "@/assets/image/places/my-house/GameImage"; 
const addressImg = GameImage.houseGameAddress;
const atticImg = GameImage.houseGameAttic;
const awningImg = GameImage.houseGameAwning;
const bathroomImg = GameImage.houseGameBathroom;
const bedroomImg = GameImage.houseGameBedroom;
const cellarImg = GameImage.houseGameCellar;
const chimneyImg = GameImage.houseGameChimney;
const deckImg = GameImage.houseGameDeck;
const doorImg = GameImage.houseGameDoor;
const doorbellImg = GameImage.houseGameDoorbell;
const doorknobImg = GameImage.houseGameDoorknob;
const drivewayImg = GameImage.houseGameDriveway;
const fenceImg = GameImage.houseGameFence;
const flowerbedImg = GameImage.houseGameFlowerbed;
const gateImg = GameImage.houseGameGate;
const kitchenImg = GameImage.houseGameKitchen;
const ladderImg = GameImage.houseGameLadder;
const laundryRoomImg = GameImage.houseGameLaundryRoom;
const lawnImg = GameImage.houseGameLawn;
const livingRoomImg = GameImage.houseGameLivingRoom;
const mailboxImg = GameImage.houseGameMailbox;
const pantryImg = GameImage.houseGameMailbox;
const patioImg = GameImage.houseGamePatio;
const skylightImg = GameImage.houseGameSkylight;
const sprinklerImg = GameImage.houseGameSprinkler;

/**
 * 주택(House) 테마 이미지 매핑 상수
 */
export const HOUSE_IMAGE_ASSETS: Record<string, string> = {
  address: addressImg,
  attic: atticImg,
  awning: awningImg,
  bathroom: bathroomImg,
  bedroom: bedroomImg,
  cellar: cellarImg,
  chimney: chimneyImg,
  deck: deckImg,
  door: doorImg,
  doorbell: doorbellImg,
  doorknob: doorknobImg,
  driveway: drivewayImg,
  fence: fenceImg,
  flowerbed: flowerbedImg,
  gate: gateImg,
  kitchen: kitchenImg,
  ladder: ladderImg,
  laundryroom: laundryRoomImg,
  laundry_room: laundryRoomImg,
  lawn: lawnImg,
  livingroom: livingRoomImg,
  living_room: livingRoomImg,
  mailbox: mailboxImg,
  pantry: pantryImg,
  patio: patioImg,
  skylight: skylightImg,
  sprinkler: sprinklerImg,
};

/**
 * 단어 키 또는 커스텀 URL을 받아 적절한 이미지 경로를 반환하는 함수
 */
export const getHouseImageUrl = (wordKey: string, customUrl?: string): string => {
  if (customUrl && customUrl.trim() !== "") {
   
    return customUrl;
  }
  const key = wordKey?.toLowerCase().replace(/[\s_]+/g, "") || "";
  return HOUSE_IMAGE_ASSETS[key] || "";
};