import hotelRooms from "@/data/hotelRoom";

interface Room {
  id: string;
  name: string;
  floor: number;
  price: number;
  size: string;
  maxGuests: number;
  beds: string;
  images: any[];
  description: string;
  amenities: string[];
}

interface RoomCategories {
  standard: Room[];
  semiDeluxe: Room[];
  deluxe: Room[];
}

interface HotelDetailsListing {
  id: string;
  name: string;
  address: string;
  rating: string;
  image: any;
  owner: string;
  customerServiceContact: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  about: string;
  rooms: RoomCategories;
}

export type { Room, RoomCategories };
export default HotelDetailsListing;
export type HotelName = keyof typeof hotelRooms;
export type RoomType = keyof RoomCategories;
