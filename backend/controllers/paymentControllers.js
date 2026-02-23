import asyncHandler from "../middlewares/asyncHandler.js";
import stripe from "../utils/stripe.js";

export const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount, currency, payment_method_type } = req.body;

  const methodType = payment_method_type || "card";

  if (methodType === "paypal") {
    return res.status(200).json({
      clientSecret: "paypal_test_client_secret_" + Date.now(),
      message: "Simulated PayPal PaymentIntent",
    });
  }

  let paymentIntent;

  if (methodType === "card") {
    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || "inr",
      automatic_payment_methods: { enabled: true },
    });
  } else if (methodType === "upi") {
    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || "inr",
      payment_method_types: ["upi"],
    });
  } else {
    return res.status(400).json({ message: "Unsupported payment method type" });
  }

  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
});
