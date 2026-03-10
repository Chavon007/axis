import { View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function SearchBar() {
  const [searchTab, setSearchTab] = useState("");
  return (
    <View className="flex-row items-center justify-between mt-4 bg-[#D9D9D9] rounded-[35px] mx-1">
      <TextInput
        className="py-3 px-5 text-black  text-[14px] font-Poppins_600SemiBold"
        value={searchTab}
        onChangeText={setSearchTab}
        placeholder="Enter Hotel Name"
      />
      <EvilIcons
        className="py-3 px-5"
        name="search"
        size={25}
        color="#000000"
      />
    </View>
  );
}
