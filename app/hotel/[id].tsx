import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import hotels from "@/data/hostelList";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import HotelDetailsListing from "@/types/hotelType";

export default function HotelDetails() {
  const { id } = useLocalSearchParams();
  
  const router = useRouter();
  const hotel: HotelDetailsListing = hotels[Number(id)];
  
  
  return (
    <View>
      <View>
        <Image source={hotel.image} />
        <Text>{hotel.name}</Text>
      </View>
      <View>
        <Text>{hotel.address}</Text>
        <Text>{hotel.rating}</Text>
      </View>

      <View>
        <Text>{hotel.about}</Text>
        <View>
          <Text className="uppercase">Owner:</Text>
           <Text>{hotel.owner}</Text>
        </View>
        <View>
          {hotel.socialMedia.facebook && (
            <TouchableOpacity
              onPress={() => Linking.openURL(hotel.socialMedia.facebook!)}
            >
              <Feather name="facebook" size={24} color="black" />
            </TouchableOpacity>
          )}
          {hotel.socialMedia.instagram && (
            <TouchableOpacity
              onPress={() => Linking.openURL(hotel.socialMedia.instagram!)}
            >
              <Entypo name="instagram" size={24} color="black" />
            </TouchableOpacity>
          )}
          {hotel.socialMedia.twitter && (
            <TouchableOpacity
              onPress={() => Linking.openURL(hotel.socialMedia.twitter!)}
            >
              <AntDesign name="twitter" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View>
        {hotel.roomType.map((room: string, index: number) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/hotel/[id]",
                params: { id: index },
              })
            }
            key={index}
          >
            <Text>{room}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
