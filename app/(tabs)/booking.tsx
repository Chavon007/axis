import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingCard from "@/components/bookingCard";

export default function booking() {
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
    <ScrollView>
      <Text>Your bookings</Text>
      <View>
        {bookings.length === 0 ? (
          <Text>You have no bookings</Text>
        ) : (
          <View>
            {bookings.map((room, index) => (
              <BookingCard key={index} booking={room} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
