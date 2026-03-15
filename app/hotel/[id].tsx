import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Linking,
  ScrollView,
  StatusBar,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import hotels from "@/data/hostelList";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import HotelDetailsListing from "@/types/hotelType";
import { Stack } from "expo-router";

export default function HotelDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const hotelIndex = id !== undefined && id !== "" ? Number(id) : -1;
  const hotel: HotelDetailsListing | undefined = hotels[Number(hotelIndex)];

  if (!hotel) {
    return (
      <View className="flex-1 bg-neutral-950 items-center justify-center">
        <Text className="text-neutral-500 text-base italic">
          Hotel not found.
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle="light-content" />

        <View className="w-full h-72 relative">
          <Image
            className="w-full h-full"
            source={hotel.image}
            resizeMode="cover"
          />

          <View className="absolute inset-0 bg-black/50" />

          <View className="absolute bottom-5 left-5 right-5">
            <Text className="text-white text-2xl font-bold uppercase tracking-widest mb-1">
              {hotel.name}
            </Text>
            <View className="flex-row items-center gap-2">
              <FontAwesome name="map-pin" size={12} color="#C9A84C" />
              <Text className="text-neutral-300 text-sm tracking-wide ml-1">
                {hotel.address}
              </Text>
            </View>
          </View>
        </View>

        <View className="px-5 mt-4">
          <View className="self-start flex-row items-center gap-2 bg-neutral-900 border border-yellow-700/30 px-4 py-2 rounded-full">
            <FontAwesome name="star" size={13} color="#C9A84C" />
            <Text className="text-yellow-500 font-bold text-sm ml-1">
              {hotel.rating}
            </Text>
            <Text className="text-neutral-500 text-sm">/ 5.0</Text>
          </View>
        </View>

        <View className="h-px bg-neutral-800 mx-5 my-6" />

        <View className="px-5">
          <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-3">
            About
          </Text>
          <Text className="text-neutral-400 text-sm leading-6 tracking-wide">
            {hotel.about}
          </Text>
        </View>

        <View className="h-px bg-neutral-800 mx-5 my-6" />

        <View className="px-5">
          <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-4">
            Hosted By
          </Text>

          {/* Owner row */}
          <View className="flex-row items-center gap-3 mb-5">
            <View className="w-11 h-11 rounded-full bg-yellow-900/20 border-2 border-yellow-600 items-center justify-center">
              <Text className="text-yellow-500 font-bold text-lg">
                {hotel.owner?.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text className="text-white text-base font-semibold tracking-wide max-w-[300px]">
              {hotel.owner}
            </Text>
          </View>

          {/* Social icons */}
          <View className="flex-row gap-3">
            {hotel.socialMedia.facebook && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() => Linking.openURL(hotel.socialMedia.facebook!)}
              >
                <Feather name="facebook" size={18} color="#C9A84C" />
              </TouchableOpacity>
            )}
            {hotel.socialMedia.instagram && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() => Linking.openURL(hotel.socialMedia.instagram!)}
              >
                <Entypo name="instagram" size={18} color="#C9A84C" />
              </TouchableOpacity>
            )}
            {hotel.socialMedia.twitter && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() => Linking.openURL(hotel.socialMedia.twitter!)}
              >
                <AntDesign name="twitter" size={18} color="#C9A84C" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* ── Divider ── */}
        <View className="h-px bg-neutral-800 mx-5 my-6" />

        {/* ── Room Types ── */}
        <View className="px-5">
          <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-4">
            Available Rooms
          </Text>

          <View className="gap-3">
            {hotel.roomType.map((room: string, index: number) => (
              <Pressable
                key={index}
                className="flex-row items-center bg-neutral-900 border border-neutral-800 active:border-yellow-700/40 active:bg-neutral-800 rounded-xl px-4 py-4 gap-3"
                onPress={() =>
                  router.push({
                    pathname: "/hotel/room/[id]",
                    params: { id: index },
                  })
                }
              >
                <FontAwesome name="bed" size={18} color="#C9A84C" />
                <Text className="flex-1 text-neutral-200 text-sm font-medium tracking-wide">
                  {room}
                </Text>
                <FontAwesome name="chevron-right" size={12} color="#555" />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
