import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";

export default function Receipt() {
  const {
    hotelName,
    roomId,
    total,
    roomName,
    checkInDate,
    checkOutDate,
    fullName,
  } = useLocalSearchParams<{
    hotelName: string;
    roomId: string;
    total: string;
    roomName: string;
    checkInDate: string;
    checkOutDate: string;
    fullName: string;
  }>();

  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle="light-content" />

        {/* Header */}
        <View className="px-5 mt-10">
          <View className="flex-row items-center gap-2 mb-2">
            <Ionicons name="checkmark-circle" size={20} color="#22c55e" />
            <Text className="text-white text-lg font-semibold tracking-wide">
              Booking Confirmed
            </Text>
          </View>
          <Text className="text-neutral-400 text-sm tracking-wide">
            Show this code at check-in
          </Text>
        </View>

        {/* Divider */}
        <View className="h-px bg-neutral-800 mx-5 my-6" />

        {/* Room ID */}
        <View className="px-5">
          <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-3">
            Room Code
          </Text>

          <View className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-5">
            <Text className="text-yellow-500 text-xl font-bold tracking-widest mb-2">
              {roomId}
            </Text>

            <Text className="text-neutral-500 text-xs">
              {checkInDate} - {checkOutDate}
            </Text>

            <View className="mt-4 w-full h-28 bg-neutral-800 rounded-lg items-center justify-center">
              <Text className="text-neutral-500 text-xs">QR CODE</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-neutral-800 mx-5 my-6" />

        {/* Booking Details */}
        <View className="px-5">
          <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-4">
            Booking Details
          </Text>

          <View className="gap-4">
            <View className="flex-row justify-between">
              <Text className="text-neutral-400 text-sm">Guest</Text>
              <Text className="text-white text-sm">{fullName}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-neutral-400 text-sm">Hotel</Text>
              <Text className="text-white text-sm">{hotelName}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-neutral-400 text-sm">Room</Text>
              <Text className="text-white text-sm">{roomName}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-neutral-400 text-sm">Check-in</Text>
              <Text className="text-white text-sm">
                {checkInDate} - {checkOutDate}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-neutral-400 text-sm">Amount</Text>
              <Text className="text-yellow-500 text-sm font-semibold">
                {total}
              </Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-neutral-800 mx-5 my-6" />

        {/* Actions */}
        <View className="px-5 flex-row gap-3">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 py-3 rounded-xl">
            <AntDesign name="share-alt" size={16} color="#C9A84C" />
            <Text className="text-yellow-500 text-sm">Share</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 py-3 rounded-xl">
            <AntDesign name="download" size={16} color="#C9A84C" />
            <Text className="text-yellow-500 text-sm">Download</Text>
          </TouchableOpacity>
        </View>

        {/* Back */}
        <View className="px-5 mt-6">
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home")}
            className="flex-row items-center justify-center gap-2 py-3"
          >
            <AntDesign name="arrow-left" size={16} color="#999" />
            <Text className="text-neutral-400 text-sm">Back Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}