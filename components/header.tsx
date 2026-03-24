import { View, Text, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="   pr-3 flex flex-row items-center">
      <Image
        className=" "
        source={require("../assets/axis2.png")}
        style={{ width: 70, height: 35 }}
      />
      <View className="">
        <Text className="text-2xl text-[#0B0A0A] font-black font-Cinzel_700Bold">
          AXIS
        </Text>
        <Text className="text-base font-CormorantUpright_300Light text-[#000000]">
          HOTEL & RESORT
        </Text>
      </View>
    </View>
  );
}
