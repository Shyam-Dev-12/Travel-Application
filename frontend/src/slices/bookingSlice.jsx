// src/slices/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  selectedPlace: null,
  tourDetails: {},
  travellers: [],
  personalDetails: {},
  hotelAndFlight: {},
  checkInDate: "",
  checkOutDate: "",
  totalPrice: 0,
  payment: {
    method: "",
    agree: false,
    amount: 0,
    clientSecret: null,
    upiId: "your@upi",
    paypalEmail: "",
    paypalPassword: "",
    status: "idle",
    error: null,
  },
  userProfile: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload;
    },
    setTourDetails: (state, action) => {
      state.tourDetails = action.payload;
    },
    setTravellers: (state, action) => {
      state.travellers = action.payload;
    },
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setHotelAndFlight: (state, action) => {
      const {
        hotel,
        hotelPrice,
        flight,
        flightPrice,
        returnFlight,
        returnFlightPrice,
        seats,
        returnSeats,
        rooms,
        checkInDate,
        checkOutDate,
        departureTime,
        arrivalTime,
        returnDepartureTime,
        returnArrivalTime,
        airport,
        arrivingAirport,
        tripType,
      } = action.payload;

      state.hotelAndFlight = {
        hotel,
        hotelPrice: hotelPrice || 0,
        flight,
        flightPrice: flightPrice || 0,
        returnFlight: returnFlight || null,
        returnFlightPrice: returnFlightPrice || 0,
        seats: seats || 1,
        returnSeats: returnSeats || seats || 1,
        rooms: rooms || 1,
        checkInDate,
        checkOutDate,
        departureTime,
        arrivalTime,
        returnDepartureTime,
        returnArrivalTime,
        airport,
        arrivingAirport,
        tripType: tripType || "oneway",
      };

      state.checkInDate = checkInDate || "";
      state.checkOutDate = checkOutDate || "";
    },
    setPayment: (state, action) => {
      state.payment = { ...state.payment, ...action.payload };
    },
    // ✅ NEW reducer
    setPaymentStatus: (state, action) => {
      state.payment.status = action.payload.status || "idle";
      state.payment.error = action.payload.error || null;
    },
    resetPayment: (state) => {
      state.payment = {
        method: "",
        agree: false,
        amount: 0,
        clientSecret: null,
        upiId: "your@upi",
        paypalEmail: "",
        paypalPassword: "",
        status: "idle",
        error: null,
      };
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    clearBooking: (state) => {
      state.step = 1;
      state.selectedPlace = null;
      state.tourDetails = {};
      state.travellers = [];
      state.personalDetails = {};
      state.hotelAndFlight = {};
      state.checkInDate = "";
      state.checkOutDate = "";
      state.totalPrice = 0;
      state.payment = {
        method: "",
        agree: false,
        amount: 0,
        clientSecret: null,
        upiId: "your@upi",
        paypalEmail: "",
        paypalPassword: "",
        status: "idle",
        error: null,
      };
      state.userProfile = null;
    },
  },
});

export const {
  setSelectedPlace,
  setTourDetails,
  setTravellers,
  setPersonalDetails,
  setHotelAndFlight,
  setPayment,
  setPaymentStatus, // ✅ now correctly exported
  resetPayment,
  setUserProfile,
  setStep,
  clearBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
