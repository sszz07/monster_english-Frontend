// src/gameConstants/index.ts

import { getApartmentImageUrl, APARTMENT_IMAGE_ASSETS } from "./apartmentImages";
import { getHouseImageUrl, HOUSE_IMAGE_ASSETS } from "./houseImages";

export * from "./apartmentImages";
export * from "./houseImages";

export type PlaceTheme = "apartment" | "house";

/**
 * 테마(theme)와 단어 키(wordKey)를 받아 적절한 이미지 경로를 찾아주는 통합 함수
 */
export const getPlaceImageUrl = (
  theme: PlaceTheme = "apartment",
  wordKey: string,
  customUrl?: string
): string => {
  if (customUrl && customUrl.trim() !== "") {
    return customUrl;
  }

  switch (theme) {
    case "house":
      return getHouseImageUrl(wordKey, customUrl);
    case "apartment":
    default:
      return getApartmentImageUrl(wordKey, customUrl);
  }
};
