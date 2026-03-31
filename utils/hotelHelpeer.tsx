import { RoomType } from "../types/hotelType";

export const toRoomTypeKey = (displayName: string): RoomType => {
  const normalized = displayName.toLowerCase().replace(/[\s\-_]+/g, "");

  const map: Record<string, RoomType> = {
    standard: "standard",
    semideluxe: "semiDeluxe",
    semidelux: "semiDeluxe",
    deluxe: "deluxe",
  };

  return map[normalized] ?? (displayName as RoomType);
};
