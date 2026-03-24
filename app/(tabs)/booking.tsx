import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingCard from "@/components/bookingCard";
import { Bookings } from "@/types/hotelType";
import Index from "..";

export default function Booking() {
  const [bookings, setBookings] = useState<Bookings[]>([]);

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

  const Today = new Date().toISOString().split("T")[0];
  const activeBooking = bookings.filter((b) => b.checkOutDate >= Today);
  const pastBookings = bookings.filter((b) => b.checkOutDate < Today);

  return (
    <ScrollView className="bg-[#F7F7F7] flex-1 p-4">
      <Text className="text-2xl font-CormorantGaramond_600SemiBold text-[#000000] mb-4">
        My Bookings
      </Text>

      {bookings.length === 0 ? (
        <Text className="text-center flex justify-center items-center text-[#8F8F8F] mt-20 text-lg">
          You have no bookings
        </Text>
      ) : (
        <View className="space-y-4">
          {activeBooking.map((room, index) => (
            <BookingCard key={index} booking={room} />
          ))}

          {pastBookings.length > 0 && (
            <>
              <Text>Past Bookings</Text>
              {pastBookings.map((r, Index) => (
                <BookingCard key={Index} booking={r} />
              ))}
            </>
          )}
        </View>
      )}
    </ScrollView>
  );
}
