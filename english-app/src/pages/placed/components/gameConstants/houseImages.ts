// src/gameConstants/houseImages.ts

import addressImg from "@/assets/image/places/game/house/Address.png";
import atticImg from "@/assets/image/places/game/house/Attic.png";
import awningImg from "@/assets/image/places/game/house/Awning.png";
import bathroomImg from "@/assets/image/places/game/house/Bathroom.png";
import bedroomImg from "@/assets/image/places/game/house/Bedroom.png";
import cellarImg from "@/assets/image/places/game/house/Cellar.png";
import chimneyImg from "@/assets/image/places/game/house/Chimney.png";
import deckImg from "@/assets/image/places/game/house/Deck.png";
import doorImg from "@/assets/image/places/game/house/Door.png";
import doorbellImg from "@/assets/image/places/game/house/Doorbell.png";
import doorknobImg from "@/assets/image/places/game/house/Doorknob.png";
import drivewayImg from "@/assets/image/places/game/house/Driveway.png";
import fenceImg from "@/assets/image/places/game/house/Fence.png";
import flowerbedImg from "@/assets/image/places/game/house/Flowerbed.png";
import gateImg from "@/assets/image/places/game/house/Gate.png";
import kitchenImg from "@/assets/image/places/game/house/Kitchen.png";
import ladderImg from "@/assets/image/places/game/house/Ladder.png";
import laundryRoomImg from "@/assets/image/places/game/house/Laundry room.png";
import lawnImg from "@/assets/image/places/game/house/Lawn.png";
import livingRoomImg from "@/assets/image/places/game/house/Living room.png";
import mailboxImg from "@/assets/image/places/game/house/Mailbox.png";
import pantryImg from "@/assets/image/places/game/house/Pantry.png";
import patioImg from "@/assets/image/places/game/house/Patio.png";
import skylightImg from "@/assets/image/places/game/house/Skylight.png";
import sprinklerImg from "@/assets/image/places/game/house/Sprinkler.png";

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