import LocationButton from "@/components/locationButton";
import SearchBar from "@/components/searchBar";
import { getAllRooms } from "@/utils/hotelHelpeer";
import { useRouter, Stack } from "expo-router";
import { useState, useMemo } from "react";
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
import Carousel from "react-native-reanimated-carousel";

const PageSize = 10;
export default function explore() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const { width } = useWindowDimensions();

  const allRooms = useMemo(() => {
    const rooms = getAllRooms();

    return rooms.sort(() => Math.random() - 0.5);
  }, []);

  const totalPages = Math.ceil(allRooms.length / PageSize);
  const currrntRoom = allRooms.slice(page * PageSize, (page + 1) * PageSize);
  return (
    <>
      <SearchBar />
      <LocationButton />
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 mt-6 mb-5">
          <Text className="text-yellow-600 mt-7 text-xs font-bold tracking-[3px] uppercase mb-2">
            Explore
          </Text>
          <Text className="text-white text-2xl font-bold tracking-wide">
            All Rooms
          </Text>
          <Text className="text-white text-2xl font-bold tracking-wide">
            {allRooms.length} room across all hotels
          </Text>
        </View>

        <FlatList
          data={currrntRoom}
          scrollEnabled={false}
          keyExtractor={(item) => `${item.hotelName} - ${item.id}`}
          removeClippedSubviews={true}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => (
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
                <Text className="uppercase text-yellow-600 font-bold font-Roboto_700Bold text-xs">
                  {item.id}
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
                        params: { hotelName: item.hotelName, roomId: item.id },
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

        <View className="mx-5 mt-4 flex-row items-center justify-between bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-4">
          {/* Previous Button */}
          <TouchableOpacity
            onPress={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`px-4 py-2 rounded-lg ${
              page === 0 ? "bg-neutral-800" : "bg-yellow-600"
            }`}
          >
            <Text
              className={`font-semibold ${
                page === 0 ? "text-neutral-500" : "text-black"
              }`}
            >
              Previous
            </Text>
          </TouchableOpacity>

          {/* Page Indicator */}
          <View className="items-center">
            <Text className="text-neutral-400 text-xs tracking-wide uppercase">
              Page
            </Text>

            <Text className="text-white font-bold text-lg">
              {page + 1} / {totalPages}
            </Text>
          </View>

          {/* Next Button */}
          <TouchableOpacity
            onPress={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={`px-4 py-2 rounded-lg ${
              page === totalPages - 1 ? "bg-neutral-800" : "bg-yellow-600"
            }`}
          >
            <Text
              className={`font-semibold ${
                page === totalPages - 1 ? "text-neutral-500" : "text-black"
              }`}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
