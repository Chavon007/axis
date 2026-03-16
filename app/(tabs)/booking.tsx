import { View, Text } from "react-native";
import React from "react";
import { getAllRooms } from "@/utils/hotelHelpeer";
import { Room, HotelName } from "@/types/hotelType";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

export default function booking() {
  const router = useRouter();
  const { hotelName } = useLocalSearchParams<{
    hotelName: HotelName;
  }>();

  const allRooms = getAllRooms(hotelName).slice(0, 10);
  return (
    <View>
      <Text>booking</Text>
    </View>
  );
}
