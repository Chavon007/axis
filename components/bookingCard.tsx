import { View, Text, Pressable} from "react-native";
import React from "react";
import { Bookings } from "@/types/hotelType";
import { useRouter } from "expo-router";
interface BookingCardProps {
  booking: Bookings

}
export default function BookingCard({ booking}: BookingCardProps) {
  const router = useRouter();
  return (


    <Pressable onPress={() => router.push({ pathname: "/hotel/receipt", params:{

    }})}>

    </Pressable>
   
  );
}
