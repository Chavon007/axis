import { useFonts } from "expo-font";
import { Cinzel_400Regular, Cinzel_700Bold } from "@expo-google-fonts/cinzel";
import {
  CormorantUpright_400Regular,
  CormorantUpright_300Light,
} from "@expo-google-fonts/cormorant-upright";
import "./global.css";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_600SemiBold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { Stack } from "expo-router";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import {
  CormorantGaramond_600SemiBold,
  CormorantGaramond_400Regular,
} from "@expo-google-fonts/cormorant-garamond";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
    CormorantUpright_400Regular,
    CormorantUpright_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_600SemiBold,
    Roboto_600SemiBold,
    Righteous_400Regular,
    CormorantGaramond_600SemiBold,
    Roboto_900Black,
    CormorantGaramond_400Regular,
  });

  if (!fontsLoaded) return null;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
