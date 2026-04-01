import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { Form } from "@/types/formtype";
import submitForm from "@/hook/formData";
export default function FormPage() {
  const router = useRouter();

  const { hotelName, roomId, price, roomName } = useLocalSearchParams();
  const [formData, setFormData] = useState<Form>({
    fullName: "",
    email: "",
    number: "",
    nin: "",
    guest: 1,
    request: "",
    room_id: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.number ||
      !formData.nin ||
      !formData.guest
    ) {
      setError("Please fill all required fields");
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please use a valid email address");
      setLoading(false);
      return;
    }

    if (formData.nin.length !== 11) {
      setError("NIN must be exactly 11 digits");
      setLoading(false);
      return;
    }

    try {
      const data = await submitForm({ ...formData, room_id: roomId as string });

      console.log("Submit result:", data);
      if (data !== null) {
        setSuccess("Personal details submitted successfully");
        setLoading(false);
        router.push({
          pathname: "/hotel/calendar",
          params: {
            hotelName,
            roomId,
            price,
            fullName: formData.fullName,
            roomName,
          },
        });
      } else {
        setError("Submission failed. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        className="flex-1 bg-neutral-950 px-5 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-white text-2xl font-bold mb-1 mt-10">
          Your Details
        </Text>
        <Text className="text-neutral-400 mb-6">Step 1 of 3</Text>

        {/* Guest Information Section */}
        <Text className="text-yellow-600 text-xs font-bold tracking-[2px] uppercase mb-3">
          Guest Information
        </Text>

        {/* Full Name */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">Full Name</Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.fullName}
            placeholder="Salvation Azuh"
            placeholderTextColor="#888"
            onChangeText={(e) => setFormData({ ...formData, fullName: e })}
          />
        </View>

        {/* Phone Number */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">Phone Number</Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.number}
            keyboardType="phone-pad"
            placeholder="+2348143654678"
            placeholderTextColor="#888"
            onChangeText={(e) => setFormData({ ...formData, number: e })}
          />
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">Email Address *</Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.email}
            keyboardType="email-address"
            placeholder="email@example.com"
            placeholderTextColor="#888"
            onChangeText={(e) => setFormData({ ...formData, email: e })}
          />
        </View>

        {/* NIN */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">
            NIN (National ID Number) *
          </Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.nin}
            keyboardType="number-pad"
            placeholder="-----------"
            placeholderTextColor="#888"
            onChangeText={(e) => setFormData({ ...formData, nin: e })}
          />
        </View>

        {/* Number of Guests */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">Number of Guests</Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.guest.toString()}
            keyboardType="number-pad"
            placeholder="1 adult"
            placeholderTextColor="#888"
            onChangeText={(e) =>
              setFormData({ ...formData, guest: parseInt(e) || 0 })
            }
          />
        </View>

        {/* Special Requests */}
        <View className="mb-4">
          <Text className="text-neutral-300 mb-1">
            Special Requests (Optional)
          </Text>
          <TextInput
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white"
            value={formData.request}
            multiline
            numberOfLines={4}
            placeholder="Enter message"
            placeholderTextColor="#888"
            onChangeText={(e) => setFormData({ ...formData, request: e })}
          />
        </View>

        <Text className="text-neutral-500 text-sm mb-6">
          Your details are used for reservation verification at check-in only.
        </Text>

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-yellow-600 py-3 rounded-xl items-center mb-4 flex-row justify-center gap-2"
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading && <ActivityIndicator size="small" color="#000" />}
          <Text className="text-neutral-950 font-bold text-base">
            {loading ? "Loading..." : "Next"}
          </Text>
        </TouchableOpacity>
        {/* Error / Success */}
        {error ? <Text className="text-red-500 mb-2">{error}</Text> : null}
        {success ? <Text className="text-green-500">{success}</Text> : null}
      </ScrollView>
    </>
  );
}
