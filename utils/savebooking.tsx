import AsyncStorage from "@react-native-async-storage/async-storage";
import { Bookings } from "@/types/hotelType";

export const handleSaveBookings = async (newBooking: Bookings) => {
  const existing = await AsyncStorage.getItem("bookings");
  const bookings = existing ? JSON.parse(existing) : [];

  bookings.push(newBooking);
  await AsyncStorage.setItem("bookings", JSON.stringify(bookings));
};

export const getBooking = async (): Promise<Bookings[]> => {
  const existing = await AsyncStorage.getItem("bookings");
  return existing ? JSON.parse(existing) : [];
};
