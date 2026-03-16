import hotelRooms from "@/data/hotelRoom";
import { HotelName, RoomType, Room } from "../types/hotelType";

export const getRoom = (hotelRoom: HotelName, roomType: RoomType): Room[] => {
  const hotel = hotelRooms[hotelRoom];

  if (!hotel) return [];

  return hotel[roomType] ?? [];
};

export const getAllRooms = (hotelRoom: HotelName): Room[] => {
  const allHotels = hotelRooms[hotelRoom];

  if (!allHotels) return [];

  return [...allHotels.deluxe, ...allHotels.semiDeluxe, ...allHotels.standard];
};

export const toRoomTypeKey = (displayName: string): RoomType => {
  const normalized = displayName.toLowerCase().replace(/[\s\-_]+/g, "");

  const map: Record<string, RoomType> = {
    "standard": "standard",
    "semideluxe": "semiDeluxe",  
    "semidelux": "semiDeluxe",  
    "deluxe": "deluxe",
  };

  return map[normalized] ?? (displayName as RoomType);
};
