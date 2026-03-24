import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

type props = {
  onSelectLocation: (location: string) => void;
};

const button = [
  {
    name: "All Lagos",
    value: "all",
  },
  {
    name: "Victoria Island",
    value: "victoria island",
  },
  {
    name: "Lekki",
    value: "lekki",
  },
  {
    name: "Ikeja",
    value: "ikeja",
  },
  {
    name: "Surulere",
    value: "surulere",
  },
];

export default function LocationButton({ onSelectLocation }: props) {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const handlePress = (value: string) => {
    setSelectedLocation(value);
    onSelectLocation(value);
  };
  return (
    <View className="w-[100%] flex-row justify-between items-center py-3 px-4">
      {button.map((l, index) => (
        <TouchableOpacity
          onPress={() => handlePress(l.value)}
          className={`  p-3 rounded-3xl ${selectedLocation === l.value ? "bg-[#5B55D3]" : "bg-gray-300"}`}
          key={index}
        >
          <Text className="text-[#ffffff] text-[10px] text-center font-Roboto_600SemiBold">
            {l.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
