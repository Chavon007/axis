import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingCard from "@/components/bookingCard";

export default function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const stored = await AsyncStorage.getItem("bookings");
        const parsed = stored ? JSON.parse(stored) : [];
        setBookings(parsed);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchBookings();
  }, []);

  return (
    <ScrollView className="bg-[#F7F7F7] flex-1 p-4">
      <Text className="text-2xl font-CormorantGaramond_600SemiBold text-[#000000] mb-4">
        Your Bookings
      </Text>

      {bookings.length === 0 ? (
        <Text className="text-center text-[#8F8F8F] mt-20 text-lg">
          You have no bookings
        </Text>
      ) : (
        <View className="space-y-4">
          {bookings.map((room, index) => (
            <BookingCard key={index} booking={room} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}