import { View, Text, Pressable } from "react-native";
import React from "react";
import { Bookings } from "@/types/hotelType";
import { useRouter } from "expo-router";
interface BookingCardProps {
  booking: Bookings;
}
export default function BookingCard({ booking }: BookingCardProps) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/hotel/receipt",
          params: {
            hotelName: booking.hotelName,
            roomId: booking.roomId,
            roomName: booking.roomName,
            checkInDate: booking.checkInDate,
            checkOutDate: booking.checkOutDate,
          },
        })
      }
    >
      <View>
        <Text>{booking.roomId}</Text>
        <View>
          <Text>{booking.roomName}</Text>
          <Text>{booking.hotelName}</Text>
        </View>
        <View>
          <View>
            <Text>Check-in</Text>
            <Text>{booking.checkInDate}</Text>
          </View>

          <View>
            <Text>Check-out</Text>
            <Text>{booking.checkOutDate}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
