import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface FA {
  question: string;
  answer: string;
}

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

        {/* Search Bar (same vibe as home) */}
        <View className="flex-row items-center justify-between bg-[#F2F2F2] rounded-2xl px-3 py-2 mb-5">
          <TextInput
            className="flex-1 text-[14px] font-CormorantGaramond_600SemiBold text-black"
            placeholder="Search help articles..."
            placeholderTextColor="#888"
          />
          <EvilIcons name="search" size={24} color="#5B55D3" />
        </View>

        {/* Section Title */}
        <Text className="ml-2 mb-3 font-Righteous_400Regular text-sm text-[#000000]">
          FREQUENTLY ASKED
        </Text>

        {/* FAQ List */}
        <View>
          {FrequentlyAsked.map((q, index) => (
            <Pressable
              key={index}
              onPress={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <View className="mb-5">
                <View className="w-full rounded-2xl border-2 border-[#E5E5E5] p-4 flex-col gap-2">
                  {/* Question */}
                  <View className="flex-row justify-between items-center">
                    <Text className="max-w-[85%] text-base font-CormorantGaramond_600SemiBold text-[#000000]">
                      {q.question}
                    </Text>

                    <Text className="text-[#5B55D3] text-lg font-bold">
                      {openIndex === index ? "−" : "+"}
                    </Text>
                  </View>

                  {/* Answer */}
                  {openIndex === index && (
                    <View className="mt-2">
                      <Text className="text-[#0000008F] text-sm font-CormorantGaramond_600SemiBold leading-5">
                        {q.answer}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}