import { FlatList, View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/searchBar";
import LocationButton from "@/components/locationButton";
// import hotels from "@/data/hostelList";
import getHotels from "@/hook/fetchHotelList";
import HotelDetailsListing from "@/types/hotelType";
import HotelCardListing from "@/components/HotelCardListing";

export default function home() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [hotels, setHotels] = useState<HotelDetailsListing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHotels();
      setHotels(data);
    };

    fetchData();
  }, []);

  const filterLocation = hotels.filter((hotel) => {
    const matchesLocation =
      selectedLocation === "all" ||
      hotel.address.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesSerach = hotel.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesLocation && matchesSerach;
  });

  return (
    <FlatList
      data={filterLocation}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View>
          <SearchBar value={searchText} onChangeText={setSearchText} />
          <LocationButton onSelectLocation={setSelectedLocation} />
          <View className="w-[95%] mt-3 mx-auto">
            <Text className="ml-2 mb-2 font-Righteous_400Regular text-sm text-[#000000]">
              FEATURED HOTELS
            </Text>

            <View className="relative mb-14">
              <Image
                className="max-w-[386px] max-h-[200px] rounded-2xl"
                source={require("../../assets/lagos.png")}
              />

              <View className="absolute bottom-3 left-3 p-2">
                <Text
                  style={{
                    position: "absolute",
                    fontFamily: "Righteous_400Regular",
                    fontSize: 16,
                    color: "#5B55D3",
                    textShadowColor: "#5B55D3",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 6,
                    bottom: 8,
                    left: 8,
                  }}
                >
                  LAGOS HOTELS
                </Text>
                <Text
                  style={{
                    fontFamily: "Righteous_400Regular",
                    fontSize: 16,
                    color: "#ffffff",
                  }}
                >
                  LAGOS HOTELS
                </Text>
              </View>
            </View>
          </View>
        </View>
      }
      renderItem={({ item, index }) => (
        <HotelCardListing hotel={item} index={index} />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    ></FlatList>
  );
}
