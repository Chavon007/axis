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
  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/hotel/[id]", params: { id: index } })
      }
    >
      <View className="mb-7">
        <View className="w-[92%] rounded-2xl border-2 p-3 items-center gap-1 mx-auto flex-row ">
          <Image
            className="rounded-2xl"
            source={hotel.image}
            style={{ width: 100, height: 110 }}
          />
          <View className="flex-col gap-1">
            <Text className=" max-w-[220px] text-xl font-CormorantGaramond_600SemiBold text-[#000000]">
              {hotel.name}
            </Text>
            <View className="w-[200px] flex-row items-center gap-1">
              <Text className="">
                <FontAwesome
                  className=""
                  name="map-pin"
                  size={15}
                  color="red"
                />
              </Text>
              <Text className="text-[#0000008F] text-sm font-CormorantGaramond_600SemiBold">
                {hotel.address}
              </Text>
            </View>
            <Text className="font-CormorantGaramond_600SemiBold text-[15px] text-[#0000008F]">
              {hotel.rating}
            </Text>

            <View className="flex-row justify-between items-center gap-0.5">
              {hotel.roomType.map((types, index) => (
                <View className="bg-[#5B55D3] rounded-2xl p-1" key={index}>
                  <Text className="p-1 text-[#ffffff] font-Roboto_900Black">
                    {types}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
