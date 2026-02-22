import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/apiSlice";
import { countryApiSlice } from "../slices/countryApiSlice";
import { paymentApiSlice } from "../slices/paymentApiSlice"; 
import authSlice from "../slices/authSlice";
import bookingReducer from "../slices/bookingSlice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [countryApiSlice.reducerPath]: countryApiSlice.reducer,
    [paymentApiSlice.reducerPath]: paymentApiSlice.reducer,

    auth: authSlice,
    booking: bookingReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(countryApiSlice.middleware)
      .concat(paymentApiSlice.middleware),  
});
