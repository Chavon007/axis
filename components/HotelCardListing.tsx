import { Image, View, Text } from "react-native";
import React from "react";

interface HotelListing {
  name: string;
  address: string;
  rating: string;
  roomType: string;
  image: any;
}
export default function HotelCardListing({ hotel }: { hotel: HotelListing }) {
  return (
    <View>
      <Image source={hotel.image} />
      <View></View>
    </View>
  );
}
