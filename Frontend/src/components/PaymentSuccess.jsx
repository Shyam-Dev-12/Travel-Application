import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setStep } from "../slices/bookingSlice";

export const PaymentSuccess = () => {
  const dispatch = useDispatch();
  return (
    <Card className="p-4 text-center shadow" style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h3 className="text-success mb-3">Payment Successful!</h3>
      <p className="mb-4">Thank you for your booking. Your payment has been received.</p>
      <Button
        onClick={() => dispatch(setStep(1))}
        className="mt-2"
        variant="primary"
      >
        Back to Home
      </Button>
    </Card>
  );
};
