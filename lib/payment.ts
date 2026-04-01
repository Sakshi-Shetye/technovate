import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export const createOrder = async (amount: number) => {
  return razorpay.orders.create({
    amount: amount * 100, // in paise
    currency: "INR",
    payment_capture: 1,
  });
};
