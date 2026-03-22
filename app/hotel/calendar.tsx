import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useState } from "react";
import { BookingDate } from "@/types/datetype";
import { Calendar } from "react-native-calendars";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { WebView } from "react-native-webview";
import { HandlePayment } from "@/utils/payment";

const CalendarDate = () => {
  const { hotelName, roomId, price, fullName, roomName } =
    useLocalSearchParams();

  const [selectDate, setSelectDate] = useState<BookingDate>({
    checkInDate: "",
    checkOutDate: "",
  });

  const router = useRouter();
  const [showWebView, setShowWebView] = useState(false);

  const [markedDates, setMarkedDate] = useState<{ [key: string]: any }>({});

  const onPressDate = (day: { dateString: string }) => {
    const dateStr = day.dateString;

    if (
      !selectDate.checkInDate ||
      (selectDate.checkInDate && selectDate.checkOutDate)
    ) {
      setSelectDate({ checkInDate: dateStr, checkOutDate: "" });
      setMarkedDate({
        [dateStr]: { startingDay: true },
      });
    } else if (selectDate.checkInDate && !selectDate.checkOutDate) {
      setSelectDate({ ...selectDate, checkOutDate: dateStr });
    }

    const start = new Date(selectDate.checkInDate);
    const end = new Date(dateStr);
    const range: { [key: string]: any } = {};

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const str = d.toISOString().split("T")[0];

      if (str === selectDate.checkInDate) {
        range[str] = { startingDay: true, color: "#C9A84C", textColor: "#000" };
      } else if (str === dateStr) {
        range[str] = { endingDate: true, color: "#C9A84C", textColor: "#000" };
      } else {
        range[str] = { color: "#C9A84C", textColor: "#000" };
      }
    }
    setMarkedDate(range);
  };

  const calculatePrice = () => {
    if (!selectDate.checkInDate || !selectDate.checkOutDate) return null;

    const checkIn = new Date(selectDate.checkInDate);
    const checkOut = new Date(selectDate.checkOutDate);

    const nights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (nights <= 0) return null;
    if (checkIn >= checkOut) {
      return null;
    }
    const total = nights * Number(price);

    return { total, nights };
  };

  const bookingSummary = calculatePrice();

  const paymentUrl = `https://paystack.shop/pay/axis-payment?amount=${bookingSummary?.total ?? 0}`;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        className="bg-neutral-950"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 bg-neutral-950 px-5 pt-12 pb-10">
          <View className="rounded-2xl overflow-hidden border border-neutral-800 mb-6">
            <Calendar
              markedDates={markedDates}
              markingType="period"
              onDayPress={onPressDate}
              minDate={new Date().toISOString().split("T")[0]}
              theme={{
                backgroundColor: "#0a0a0a",
                calendarBackground: "#171717",
                textSectionTitleColor: "#C9A84C",
                selectedDayBackgroundColor: "#C9A84C",
                selectedDayTextColor: "#000",
                todayTextColor: "#C9A84C",
                dayTextColor: "#e5e5e5",
                textDisabledColor: "#404040",
                arrowColor: "#C9A84C",
                monthTextColor: "#ffffff",
                textDayFontWeight: "500",
                textMonthFontWeight: "700",
                textDayHeaderFontWeight: "600",
                textDayFontSize: 14,
                textMonthFontSize: 15,
                textDayHeaderFontSize: 12,
              }}
            />
          </View>

          {/* Hotel / Room Card */}
          <View className="bg-neutral-900 border border-yellow-700/30 rounded-2xl px-5 py-4 mb-6">
            <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-3">
              Your Booking
            </Text>
            <View className="h-px bg-neutral-800 mb-4" />
            <Text className="text-neutral-500 text-xs tracking-widest uppercase mb-1">
              Hotel
            </Text>
            <Text className="text-white text-base font-semibold tracking-wide mb-3">
              {hotelName}
            </Text>
            <Text className="text-neutral-500 text-xs tracking-widest uppercase mb-1">
              Room ID
            </Text>
            <Text className="text-white text-base font-semibold tracking-wide">
              {roomId}
            </Text>
          </View>

          {/* Date Summary */}
          <Text className="text-neutral-400 text-sm tracking-wide mb-6">
            Check-in:{" "}
            <Text className="text-yellow-500 font-semibold">
              {selectDate.checkInDate || "—"}
            </Text>
            {"  |  "}
            Check-out:{" "}
            <Text className="text-yellow-500 font-semibold">
              {selectDate.checkOutDate || "—"}
            </Text>
          </Text>

          {/* Booking Summary */}
          {bookingSummary && (
            <View className="bg-neutral-900 border border-yellow-700/30 rounded-2xl px-5 py-4 mb-6">
              <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase mb-3">
                Price Summary
              </Text>
              <View className="h-px bg-neutral-800 mb-4" />

              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-neutral-500 text-xs tracking-widest uppercase">
                  Duration
                </Text>
                <Text className="text-white text-sm font-semibold">
                  {bookingSummary.nights} Night
                  {bookingSummary.nights > 1 ? "s" : ""}
                </Text>
              </View>

              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-neutral-500 text-xs tracking-widest uppercase">
                  Price / Night
                </Text>
                <Text className="text-white text-sm font-semibold">
                  ₦{Number(price).toLocaleString()}
                </Text>
              </View>

              <View className="h-px bg-neutral-800 mb-3" />

              <View className="flex-row justify-between items-center">
                <Text className="text-yellow-600 text-xs font-bold tracking-[3px] uppercase">
                  Total
                </Text>
                <Text className="text-yellow-500 text-base font-bold">
                  ₦{bookingSummary.total.toLocaleString()}
                </Text>
              </View>
            </View>
          )}

          {/* CTA */}
          <TouchableOpacity
            onPress={() => setShowWebView(true)}
            className="bg-yellow-600 active:bg-yellow-700 rounded-xl py-4 items-center justify-center"
          >
            <Text className="text-black text-sm font-bold tracking-[3px] uppercase">
              Make Payment
            </Text>
          </TouchableOpacity>

          <Modal visible={showWebView} animationType="slide">
            <View className="flex-1">
              <TouchableOpacity
                onPress={() => setShowWebView(false)}
              ></TouchableOpacity>

              <WebView
                className="flex-1"
                source={{ uri: paymentUrl }}
                onNavigationStateChange={(navState) => {
                  const result = HandlePayment({ url: navState.url });

                  if (result === "Success") {
                    setShowWebView(false);
                    router.push({
                      pathname: "/hotel/receipt",
                      params: {
                        hotelName,
                        roomId,
                        checkOutDate: selectDate.checkOutDate,
                        checckInDate: selectDate.checkInDate,
                        fullName,
                        total: bookingSummary?.total,
                        roomName,
                      },
                    });
                  }
                }}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </>
  );
};

export default CalendarDate;
