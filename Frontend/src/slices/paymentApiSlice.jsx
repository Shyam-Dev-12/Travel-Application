// src/slices/paymentApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ⭐ Payment API slice for Stripe (and future methods)
export const paymentApiSlice = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/payments", // backend endpoint
  }),
  endpoints: (builder) => ({
    // Create a payment intent
    createPaymentIntent: builder.mutation({
      query: (payload) => ({
        url: "/create-payment-intent",
        method: "POST",
        body: payload, // payload should include: { amount, currency, payment_method_type }
      }),
    }),
  }),
});

// ✅ Export hook to use in components
export const { useCreatePaymentIntentMutation } = paymentApiSlice;
