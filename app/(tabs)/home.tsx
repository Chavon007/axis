import { View, Text } from "react-native";
import React from "react";
import SearchBar from "@/components/searchBar";
import LocationButton from "@/components/locationButton";

export default function home() {
  return (
    <View>
      <SearchBar />
      <LocationButton />
      <Text>home</Text>
    </View>
  );
}
