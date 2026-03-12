import { Image, View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface HotelListing {
  name: string;
  address: string;
  rating: string;
  roomType: string[];
  image: any;
}
export default function HotelCardListing({ hotel }: { hotel: HotelListing }) {
  return (
    <View className="flex-row items-center">
      <Image className="bg-red-100" source={hotel.image} style={{ width: 80, height: 80 }} />
      <View>
        <Text>{hotel.name}</Text>
        <Text>
          <Text>
            <FontAwesome name="map-pin" size={24} color="black" />
          </Text>
          <Text>{hotel.address}</Text>
        </Text>
        <Text>{hotel.rating}</Text>
        <Text>
          <Text>{hotel.roomType}</Text>
          <Text>{hotel.roomType}</Text>
          <Text>{hotel.roomType}</Text>
        </Text>
      </View>
    </View>
  );
}
