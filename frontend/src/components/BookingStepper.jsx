import React, { useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";

import { useGetUserProfileQuery } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile, setStep } from "../slices/bookingSlice";

import { TourForm } from "./TourForm";
import { TravellerForm } from "./TravellerForm";
import { FlightHotelForm } from "./FlightHotelForm";
import { PaymentMethodForm } from "./PaymentMethodForm";
import { PaymentSuccess } from "./PaymentSuccess";

export const BookingStepper = () => {
  const dispatch = useDispatch();

  // Get logged-in user (from localStorage)
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const email = user?.email;

  // Fetch user profile from backend
  const { data: profile } = useGetUserProfileQuery(email, {
    skip: !email,
  });

  // Store profile in Redux when loaded
  useEffect(() => {
    if (profile) {
      dispatch(setUserProfile(profile));
    }
  }, [profile, dispatch]);

  // Current step from Redux (1–5)
  const reduxStep = useSelector((state) => state.booking.step);

  // Convert 1–4 into 0–3 for UI Stepper
  const activeStep = reduxStep - 1;

  const steps = ["Tour & Date", "Travellers", "Flights & Stay", "Payment"];

  // Navigation
  const handleNext = () => {
    if (reduxStep < 4) dispatch(setStep(reduxStep + 1));
  };

  const handleBack = () => {
    if (reduxStep > 1) dispatch(setStep(reduxStep - 1));
  };

  return (
    <div className="booking-stepper">
      <Stepper
        activeStep={activeStep}
        connectorStateColors={false}
        styleConfig={{
          activeBgColor: "#004466",
          completedBgColor: "#004d00",
          inactiveBgColor: "#ccc",
          activeTextColor: "#fff",
          completedTextColor: "#fff",
          inactiveTextColor: "#000",
          size: 40,
          circleFontSize: "16px",
          labelFontSize: "14px",
        }}
      >
        {steps.map((label, index) => (
          <Step
            key={index}
            label={
              <span className="fw-bold" style={{ fontSize: "15px" }}>
                {label}
              </span>
            }
          />
        ))}
      </Stepper>

      {/* Render form or success page based on active step */}
      <div className="step-content mt-4">
        {activeStep === 0 && <TourForm />}
        {activeStep === 1 && (
          <TravellerForm onNext={handleNext} onBack={handleBack} />
        )}
        {activeStep === 2 && (
          <FlightHotelForm onNext={handleNext} onBack={handleBack} />
        )}
        {activeStep === 3 && <PaymentMethodForm onBack={handleBack} />}
        {reduxStep === 5 && <PaymentSuccess />} {/* step 5 = payment success */}
      </div>
    </div>
  );
};
