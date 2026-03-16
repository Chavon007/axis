import Carousel from "react-native-reanimated-carousel";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Room, HotelName, RoomType } from "@/types/hotelType";
import { getRoom } from "../../../utils/hotelHelpeer";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

export default function ListOfRoomsByType() {
  const router = useRouter();

  const { hotelName, roomType } = useLocalSearchParams<{
    hotelName: HotelName;
    roomType: RoomType;
  }>();

  const { width } = useWindowDimensions();

  const rooms = getRoom(hotelName, roomType);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* Page Title */}

        <View className="px-5 mt-6 mb-5">
          <Text className="text-yellow-600 mt-7 text-xs font-bold tracking-[3px] uppercase mb-2">
            {hotelName}
          </Text>

          <Text className="text-white text-2xl font-bold tracking-wide">
            {roomType} rooms
          </Text>
        </View>

        <FlatList
          data={rooms}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Room }) => (
            <View className="mx-5 mb-8 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
              {/* Image Carousel */}

              <Carousel
                width={width - 40}
                height={220}
                data={item.images}
                autoPlay={true}
                autoPlayInterval={1000}
                scrollAnimationDuration={500}
                renderItem={({ item: image }) => (
                  <Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                )}
              />

              <View className="p-5">
                {/* Room Name */}

                <Text className="text-white text-lg font-bold tracking-wide mb-1">
                  {item.name}
                </Text>

                {/* Description */}

                <Text className="text-neutral-400 text-sm leading-6 mb-4">
                  {item.description}
                </Text>

                {/* Room Info */}

                <View className="flex-row flex-wrap gap-4 mb-4">
                  <View className="flex-row items-center gap-1">
                    <FontAwesome name="arrows" size={13} color="#C9A84C" />
                    <Text className="text-neutral-300 text-xs">
                      {item.size}
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-1">
                    <FontAwesome name="users" size={13} color="#C9A84C" />
                    <Text className="text-neutral-300 text-xs">
                      {item.maxGuests} Guests
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-1">
                    <FontAwesome name="bed" size={13} color="#C9A84C" />
                    <Text className="text-neutral-300 text-xs">
                      {item.beds}
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-1">
                    <FontAwesome name="building" size={13} color="#C9A84C" />
                    <Text className="text-neutral-300 text-xs">
                      Floor {item.floor}
                    </Text>
                  </View>
                </View>

                {/* Amenities */}

                <View className="flex-row flex-wrap gap-2 mb-5">
                  {item.amenities.map((a, index) => (
                    <View
                      key={index}
                      className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full"
                    >
                      <Text className="text-neutral-300 text-xs">{a}</Text>
                    </View>
                  ))}
                </View>

                {/* Price + Button */}

                <View className="flex-row items-center justify-between">
                  <Text className="text-yellow-500 text-lg font-bold">
                    ₦{item.price}
                  </Text>

                  <TouchableOpacity
                    className="bg-yellow-600 px-5 py-3 rounded-xl"
                    onPress={() =>
                      router.push({
                        pathname: "./booking",
                        params: { hotelName, roomId: item.id },
                      })
                    }
                  >
                    <Text className="text-black font-semibold tracking-wide">
                      Book Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
}
