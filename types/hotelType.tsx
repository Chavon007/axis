import hotelRooms from "@/data/hotelRoom";

interface Room {
  id: string;
  name: string;
  floor: number;
  price: number;
  size: string;
  maxGuests: number;
  beds: string;
  images: string[];
  description: string;
  amenities: string[];
}

interface RoomCategories {
  standard: Room[];
  semiDeluxe: Room[];
  deluxe: Room[];
}

export interface Bookings {
  bookingId: string;
  fullName: string;
  hotelName: string;
  checkOutDate: string;
  checkInDate: string;
  roomType: string;
  roomId: string;
  roomName: string;
  status: "active" | "past";
  total: any;
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
  roomType: string[] | [];
}

export type { Room, RoomCategories };
export default HotelDetailsListing;

export type HotelName = keyof typeof hotelRooms;
export type RoomType = keyof RoomCategories;
export type Hotel = keyof Room;
