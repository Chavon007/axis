import { useState, useEffect } from "react";
import { BookingDate, PriceResult } from "@/types/datetype";

export const useCalculatePrice = (calculate?: BookingDate & { roomid: string; fullname: string }) => {
  const [result, setResult] = useState<PriceResult | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const mainPrice = async (calculate: BookingDate) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:5000/api/checkindate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkindate: calculate.checkInDate,
          checkoutdate: calculate.checkOutDate,
          fullname: calculate.fullName,
          roomid: calculate.roomId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError("Can't send data now");
        return;
      }
      setSuccess("Succussful");
      setResult(data);
      return data;
    } catch (err) {
      setError("Faileed to calculate price");
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (calculate?.checkInDate && calculate?.checkOutDate) {
      mainPrice(calculate);
    }
  }, [calculate?.checkInDate, calculate?.checkOutDate]);

  return { loading, success, error, result };
};
