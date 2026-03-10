import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const button = [
  {
    name: "All Lagos",
  },
  {
    name: "Victoria Island",
  },
  {
    name: "Lekki",
  },
  {
    name: "Ikeja",
  },
  {
    name: "Surulere",
  },
];

export default function LocationButton() {
  return (
    <View className="w-[100%] flex-row justify-between items-center py-3 px-4">
      {button.map((l, index) => (
        <TouchableOpacity className=" bg-[#5B55D3] p-3 rounded-3xl" key={index}>
          <Text className="text-[#ffffff] text-[10px] text-center font-Roboto_600SemiBold">{l.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
