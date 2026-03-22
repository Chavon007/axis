interface Mainlink {
  url: string;
}

export const HandlePayment = ({ url }: Mainlink) => {
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
