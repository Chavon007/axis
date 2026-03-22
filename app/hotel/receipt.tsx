import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Receipt() {
  const {
    hotelName,
    roomId,
    total,
    roomName,
    checkInDate,
    checkOutDate,
    fullName,
  } = useLocalSearchParams<{
    hotelName: string;
    roomId: string;
    total: string;
    roomName: string;
    checkInDate: string;
    checkOutDate: string;
    fullName: string;
  }>();
  const router = useRouter();
  return (
    <View>
      <View>
        <Ionicons name="checkmark-circle" size={24} color="black" />
        <Text>Booking Confirmed!</Text>
        <Text>Your room is reserved. show this code at check-in</Text>
      </View>

      <View>
        <Text>Your Room ID</Text>
        <Text>{roomId}</Text>
        <Text>
          Valid for:{checkInDate} - {checkOutDate}
        </Text>

        <Text>QR CODE</Text>
      </View>

      <View>
        <Text>Booking Details</Text>
        <View>
          <Text>Guest</Text>
          <Text>{fullName}</Text>
        </View>
        <View>
          <Text>Hotel</Text>
          <Text>{hotelName}</Text>
        </View>

        <View>
          <Text>Room</Text>
          <Text>{roomName}</Text>
        </View>
        <View>
          <Text>Checkin</Text>
          <Text>
            {checkInDate} - {checkOutDate}
          </Text>
        </View>

        <View>
          <Text>Amount Paid</Text>
          <Text>{total}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <AntDesign name="share-alt" size={24} color="black" />
          <Text>Share Code</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="download" size={24} color="black" />
          <Text>Download</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <AntDesign name="arrow-left" size={24} color="black" />
        <Text>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}
