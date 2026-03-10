import { View, Text } from "react-native";
import React from "react";
import LocationButton from "@/components/locationButton";
import SearchBar from "@/components/searchBar";
export default function explore() {
  return (
    <View>
      <SearchBar />
      <LocationButton/>
      <Text>explore</Text>
    </View>
  );
}
