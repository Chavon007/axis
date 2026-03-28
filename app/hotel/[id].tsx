import { toRoomTypeKey } from "../../utils/hotelHelpeer";
import { ActivityIndicator } from "react-native";
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
import { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
// import hotels from "@/data/hostelList";
import getHotels from "@/hook/fetchHotelList";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import HotelDetailsListing from "@/types/hotelType";
import { Stack } from "expo-router";

export default function HotelDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [hotelDetails, setHotelDetails] = useState<
    HotelDetailsListing | undefined
  >(undefined);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHotelDetails = async () => {
      setLoading(true);
      try {
        const data = await getHotels();
        const findId = data.find((h) => h.id === id);
        setHotelDetails(findId);
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getHotelDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 bg-neutral-950 items-center justify-center">
          <>
            <ActivityIndicator size="large" color="#C9A84C" />
            <Text className="text-neutral-500 text-base italic">
              loading....
            </Text>
          </>
        </View>
      </>
    );
  }

  if (!hotelDetails) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 bg-neutral-950 items-center justify-center">
          <Text className="text-neutral-500 text-base italic">
            Hotel not found.
          </Text>
        </View>
      </>
    );
  }

  const imageSource =
    typeof hotelDetails.image === "string"
      ? { uri: hotelDetails.image }
      : hotelDetails.image;

  return (
    <>
      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle="light-content" />

        <View className="w-full h-72 relative">
          <Image
            className="w-full h-full"
            source={imageSource}
            resizeMode="cover"
          />

          <View className="absolute inset-0 bg-black/50" />

          <View className="absolute bottom-5 left-5 right-5">
            <Text className="text-white text-2xl font-bold uppercase tracking-widest mb-1">
              {hotelDetails.name}
            </Text>
            <View className="flex-row items-center gap-2">
              <FontAwesome name="map-pin" size={12} color="#C9A84C" />
              <Text className="text-neutral-300 text-sm tracking-wide ml-1">
                {hotelDetails.address}
              </Text>
            </View>
          </View>
        </View>

        <View className="px-5 mt-4">
          <View className="self-start flex-row items-center gap-2 bg-neutral-900 border border-yellow-700/30 px-4 py-2 rounded-full">
            <FontAwesome name="star" size={13} color="#C9A84C" />
            <Text className="text-yellow-500 font-bold text-sm ml-1">
              {hotelDetails.rating}
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
            {hotelDetails.about}
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
                {hotelDetails.owner?.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text className="text-white text-base font-semibold tracking-wide max-w-[300px]">
              {hotelDetails.owner}
            </Text>
          </View>

          {/* Social icons */}
          <View className="flex-row gap-3">
            {hotelDetails.socialMedia.facebook && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() =>
                  Linking.openURL(hotelDetails.socialMedia.facebook!)
                }
              >
                <Feather name="facebook" size={18} color="#C9A84C" />
              </TouchableOpacity>
            )}
            {hotelDetails.socialMedia.instagram && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() =>
                  Linking.openURL(hotelDetails.socialMedia.instagram!)
                }
              >
                <Entypo name="instagram" size={18} color="#C9A84C" />
              </TouchableOpacity>
            )}
            {hotelDetails.socialMedia.twitter && (
              <TouchableOpacity
                className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 items-center justify-center"
                onPress={() =>
                  Linking.openURL(hotelDetails.socialMedia.twitter!)
                }
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
            {hotelDetails.roomType
              .split(",")
              .map((room: string, index: number) => (
                <Pressable
                  key={index}
                  className="flex-row items-center bg-neutral-900 border border-neutral-800 active:border-yellow-700/40 active:bg-neutral-800 rounded-xl px-4 py-4 gap-3"
                  onPress={() =>
                    router.push({
                      pathname: "/hotel/room/[id]",
                      params: {
                        id: hotelDetails.id,
                        hotelName: hotelDetails.name,
                        roomType: toRoomTypeKey(room),
                      },
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
