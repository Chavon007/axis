import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HotelDetailsListing from "@/types/hotelType";

export default function HotelCardListing({
  hotel,
  index,
}: {
  hotel: HotelDetailsListing;
  index: number;
}) {
  const router = useRouter();

  // Normalize roomType into an array
  const rooms: string[] = Array.isArray(hotel.roomType)
    ? hotel.roomType
    : typeof hotel.roomType === "string"
    ? hotel.roomType.split(",").map((r) => r.trim())
    : [];

  // Handle image source (local require or remote URI)
  const imageSource =
    typeof hotel.image === "string" ? { uri: hotel.image } : hotel.image;

  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/hotel/[id]", params: { id: index } })
      }
    >
      <View className="mb-7">
        <View className="w-[92%] rounded-2xl border-2 p-3 items-center gap-1 mx-auto flex-row">
          {imageSource && (
            <Image
              className="rounded-2xl"
              source={imageSource}
              style={{ width: 100, height: 110 }}
            />
          )}
          <View className="flex-col gap-1 ml-2">
            <Text className="max-w-[220px] text-xl font-CormorantGaramond_600SemiBold text-[#000000]">
              {hotel.name}
            </Text>

            <View className="w-[200px] flex-row items-center gap-1">
              <FontAwesome name="map-pin" size={15} color="red" />
              <Text className="text-[#0000008F] text-sm font-CormorantGaramond_600SemiBold">
                {hotel.address}
              </Text>
            </View>

            <Text className="font-CormorantGaramond_600SemiBold text-[15px] text-[#0000008F]">
              Rating: {hotel.rating}
            </Text>

            <View className="flex-row flex-wrap justify-start items-center gap-1 mt-1">
              {rooms.length > 0 ? (
                rooms.map((type, idx) => (
                  <View
                    className="bg-[#5B55D3] rounded-2xl p-1"
                    key={idx}
                  >
                    <Text className="p-1 text-[#ffffff] font-Roboto_900Black">
                      {type}
                    </Text>
                  </View>
                ))
              ) : (
                <Text className="text-[#888] font-Roboto_900Black">
                  No rooms available
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}