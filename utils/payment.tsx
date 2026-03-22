interface Mainlink {
  url: string;
}

type PaymentResult = "Success" | "Cancel" | null;

export const HandlePayment = ({ url }: Mainlink): PaymentResult => {
  if (url.includes("payment-success")) {
    console.log("Payment Successful");

    return "Success";
  }
  if (url.includes("Cancel")) {
    console.log("Payment cancelled ");
    return "Cancel";
  }

  return null;
};
