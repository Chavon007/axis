import hotelRooms from "@/data/hotelRoom";
import { HotelName, RoomType, Room } from "../types/hotelType";

export const getRoom = (hotelRoom: HotelName, roomType: RoomType): Room[] => {
  const hotel = hotelRooms[hotelRoom];

  if (!hotel) return [];

  return hotel[roomType] ?? [];
};

export const getAllRooms = (): (Room & { hotelName: HotelName })[] => {
  return (Object.keys(hotelRooms) as HotelName[]).flatMap((hotelName) => {
    const allHotels = hotelRooms[hotelName];

    if (!allHotels) return [];

    return [
      ...allHotels.deluxe,
      ...allHotels.semiDeluxe,
      ...allHotels.standard,
    ].map((room) => ({ ...room, hotelName }));
  });
};

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
