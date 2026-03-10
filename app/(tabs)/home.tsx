import { View, Text, Image } from "react-native";
import React from "react";
import SearchBar from "@/components/searchBar";
import LocationButton from "@/components/locationButton";

export default function home() {
  return (
    <View>
      <SearchBar />
      <LocationButton />
      <Text className="mt-4 ml-9">FEATURED HOTELS</Text>
      <Image className="bg-red-500" source={require("../../assets/lagos.png")} />
    </View>
  );
}
