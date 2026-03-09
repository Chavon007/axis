import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Entypo name="home" color="blue" size={24} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <MaterialIcons name="travel-explore" size={24} color="blue" />
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: "Bookings",
          tabBarIcon: () => <Entypo name="bookmark" size={24} color="blue" />,
        }}
      />

      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: () => <Entypo name="help" size={24} color="blue" />,
        }}
      />
    </Tabs>
  );
}
