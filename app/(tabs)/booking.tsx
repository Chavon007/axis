import { View, Text } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

export default function booking() {
  const router = useRouter();
  const { hotelName } = useLocalSearchParams<{
    hotelName: HotelName;
  }>();

 
  return (
    <View>
      <Text>booking</Text>
    </View>
  );
}
