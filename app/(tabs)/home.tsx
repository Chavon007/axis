import { View, Text, Image } from "react-native";
import React from "react";
import SearchBar from "@/components/searchBar";
import LocationButton from "@/components/locationButton";

export default function home() {
  return (
    <View>
      <SearchBar />
      <LocationButton />
      <View className="w-[95%] mt-3 mx-auto">
        <Text className="ml-2 mb-2 font-Righteous_400Regular text-sm text-[#000000]">
          FEATURED HOTELS
        </Text>

        <View className="relative">
          <Image
            className="max-w-[386px] max-h-[200px] rounded-2xl"
            source={require("../../assets/lagos.png")}
          />

          <View className="absolute bottom-3 left-3 p-2">
            <Text style={{
              position: 'absolute',
              fontFamily: 'Righteous_400Regular',
              fontSize: 16,
              color: '#5B55D3',
              textShadowColor: '#5B55D3',
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 6,
              bottom: 8,
              left: 8,
            }}>
              LAGOS HOTELS
            </Text>
            <Text style={{
              fontFamily: 'Righteous_400Regular',
              fontSize: 16,
              color: '#ffffff',
            }}>
              LAGOS HOTELS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}