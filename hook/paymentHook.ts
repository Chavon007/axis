import { useState } from "react";
import { payment } from "@/types/datetype";
import axios from "axios";
export const useInitializePayment = () => {
  const [paymentUrl, setPaymentUrl] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);

  const makePayment = async (body: payment) => {
    setPaymentLoading(true);
    setPaymentError("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/makepayment",
        body,
      );
      setPaymentUrl(res.data.URL);
    } catch (err) {
      setPaymentError("Failed to start payment");
      setPaymentLoading(false);
    } finally {
      setPaymentLoading(false);
    }
  };

  return { makePayment, paymentError, paymentLoading, paymentUrl };
};
