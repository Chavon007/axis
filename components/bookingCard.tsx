import { View, Text, Pressable } from "react-native";
import React from "react";
import { Bookings } from "@/types/hotelType";
import { useRouter } from "expo-router";

interface BookingCardProps {
  booking: Bookings;
}

export default function BookingCard({ booking }: BookingCardProps) {
  const router = useRouter();

  const statusColor = booking.status === "active" ? "#5B55D3" : "#8F8F8F";

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
      className="bg-white rounded-2xl p-4 shadow-lg"
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-CormorantGaramond_600SemiBold text-[#000000]">
          {booking.roomId}
        </Text>
        <Text
          className="text-sm font-CormorantGaramond_600SemiBold"
          style={{ color: statusColor }}
        >
          {booking.status === "active" ? "Active Booking" : "Past Booking"}
        </Text>
      </View>

      <View className="mb-3">
        <Text className="text-xl font-CormorantGaramond_600SemiBold text-[#000000]">
          {booking.roomName}
        </Text>
        <Text className="text-sm text-[#8F8F8F] font-CormorantGaramond_600SemiBold">
          {booking.hotelName}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <View className="bg-[#F2F2F2] rounded-2xl p-3 w-[48%]">
          <Text className="text-[#8F8F8F] text-xs font-Roboto_900Black">
            Check-in
          </Text>
          <Text className="text-[#000000] text-center mt-2 font-semibold text-base font-CormorantGaramond_600SemiBold">
            {booking.checkInDate}
          </Text>
        </View>

        <View className="bg-[#F2F2F2] rounded-2xl p-3 w-[48%]">
          <Text className="text-[#8F8F8F] text-xs font-Roboto_900Black">
            Check-out
          </Text>
          <Text className="text-[#000000] text-center mt-2 font-semibold text-base font-CormorantGaramond_600SemiBold ">
            {booking.checkOutDate}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
