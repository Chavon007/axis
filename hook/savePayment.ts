import AsyncStorage from "@react-native-async-storage/async-storage";
import { Bookings } from "../types/hotelType";
export const SavePayment = async (booking: Bookings) => {
  try {
    const existing = await AsyncStorage.getItem("bookings");
    const bookings = existing ? JSON.parse(existing) : [];
    bookings.push(booking);
    await AsyncStorage.setItem("bookings", JSON.stringify(bookings));
  } catch (err) {
    console.warn(err);
  }
};
