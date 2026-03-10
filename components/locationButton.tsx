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
    <View>
      {button.map((l, index) => (
        <TouchableOpacity key={index}>
          <Text>{l.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
