import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

interface FA {
  question: string;
  answer: string;
}
interface Support {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const contact: Support[] = [
  {
    title: "Chat with support",
    link: "https://wa.me/2348131933895",
    icon: <Entypo name="chat" size={24} color="black" />,
  },
  {
    title: "Call us for support",
    link: "tel:+2348131933895",
    icon: <Ionicons name="call" size={24} color="black" />,
  },
];
const FrequentlyAsked: FA[] = [
  {
    question: "How do I confirm my booking?",
    answer:
      "Once your payment is successful, your booking is automatically confirmed and a receipt with your room ID will be generated.",
  },
  {
    question: "Do I need to show anything at check-in?",
    answer:
      "Yes, you’ll need to show your Room ID or QR code from your receipt to the hotel at check-in.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Cancellation and modification depend on the hotel’s policy. Please check the hotel details before booking or contact support.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through secure payment gateways to ensure your information is safe.",
  },
  {
    question: "What happens if I don’t show up?",
    answer:
      "If you don’t check in on your booking date, it may be marked as a no-show and could be non-refundable depending on the policy.",
  },
];

export default function help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openUrl = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      contentContainerClassName="pb-10"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-[95%] mx-auto mt-10">
        {/* Header */}
        <Text className="ml-2 mb-3 font-Righteous_400Regular text-lg text-[#000000]">
          HELP & FAQ
        </Text>

        {/* Search Bar */}
        <View className="flex-row items-center justify-between bg-[#F2F2F2] rounded-2xl px-3 py-2 mb-5">
          <TextInput
            className="flex-1 text-[14px] font-CormorantGaramond_600SemiBold text-black"
            placeholder="Search help articles..."
            placeholderTextColor="#888"
          />
          <EvilIcons name="search" size={24} color="#5B55D3" />
        </View>

        {/* FREQUENTLY ASKED */}
        <Text className="ml-2 mb-3 font-Righteous_400Regular text-sm text-[#000000]">
          FREQUENTLY ASKED
        </Text>

        {/* FAQ List */}
        <View className="flex-col gap-4">
          {FrequentlyAsked.map((q, index) => (
            <Pressable
              key={index}
              onPress={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-[#F9F9F9] border-2 border-[#E5E5E5] rounded-2xl p-4 shadow-sm"
            >
              <View className="flex-row justify-between items-center">
                <Text className="max-w-[85%] text-base font-CormorantGaramond_600SemiBold text-[#000000]">
                  {q.question}
                </Text>
                <Text className="text-[#5B55D3] text-lg font-bold">
                  {openIndex === index ? "−" : "+"}
                </Text>
              </View>

              {openIndex === index && (
                <View className="mt-2">
                  <Text className="text-[#0000008F] text-sm font-CormorantGaramond_600SemiBold leading-5">
                    {q.answer}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>

        {/* CONTACT SUPPORT */}
        <Text className="ml-2 mb-3 mt-6 font-Righteous_400Regular text-sm text-[#000000]">
          CONTACT SUPPORT
        </Text>

        <View className="flex-col gap-4">
          {contact.map((c, index) => (
            <Pressable
              key={index}
              onPress={() => openUrl(c.link)}
              className="flex-row items-center gap-4 p-4 border-2 border-[#E5E5E5] rounded-2xl bg-[#F9F9F9] shadow-sm"
            >
              <View>{c.icon}</View>
              <Text className="text-base font-CormorantGaramond_600SemiBold text-[#000000]">
                {c.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
