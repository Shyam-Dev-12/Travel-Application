import React, { useMemo, useEffect, useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setPayment, setPaymentStatus, setStep } from "../slices/bookingSlice";
import { useCreatePaymentIntentMutation } from "../slices/paymentApiSlice";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const PaymentMethodForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const { travellers, hotelAndFlight, checkInDate, checkOutDate, payment } = useSelector((state) => state.booking);
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const totalTravellers = travellers?.length || 1;

  // ------------------ CALCULATE FINAL AMOUNT ------------------
  const finalAmount = useMemo(() => {
    if (!hotelAndFlight) return 0;

    const seats = Number(hotelAndFlight.seats || 1);
    const returnSeats = Number(hotelAndFlight.returnSeats ?? seats);
    const rooms = Number(hotelAndFlight.rooms || 1);

    const flightPrice = Number(hotelAndFlight.flightPrice ?? 0);
    const returnFlightPrice = Number(hotelAndFlight.returnFlightPrice ?? 0);
    const hotelPrice = Number(hotelAndFlight.hotelPrice ?? 0);

    let total = 0;
    const tripType = (hotelAndFlight.tripType ?? "oneway").toLowerCase();

    if (hotelAndFlight.flight) total += flightPrice * seats;
    if ((tripType === "round" || tripType === "roundtrip") && hotelAndFlight.returnFlight)
      total += returnFlightPrice * returnSeats;

    if (hotelAndFlight.hotel && checkInDate && checkOutDate) {
      const inDate = new Date(checkInDate);
      const outDate = new Date(checkOutDate);
      const diffTime = outDate.getTime() - inDate.getTime();
      const nights = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);
      total += hotelPrice * rooms * nights;
    }

    return total;
  }, [hotelAndFlight, checkInDate, checkOutDate]);

  // ------------------ PAYMENT AMOUNT ------------------
  useEffect(() => {
    dispatch(setPayment({ amount: finalAmount }));
  }, [finalAmount, dispatch]);

  const amountInPaise = Math.round(finalAmount * 100);

  // ------------------ HELPER ------------------
  const nightsCount = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const inDate = new Date(checkInDate);
    const outDate = new Date(checkOutDate);
    return Math.max(Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24)), 1);
  };

  // ------------------ HANDLE PAYMENT ------------------
  const handlePay = async () => {
    if (isProcessing) return; // prevent multiple clicks
    setIsProcessing(true);

    if (!payment.method) {
      toast.error("Please select a payment method.");
      setIsProcessing(false);
      return;
    }
    if (!payment.agree) {
      toast.error("You must agree to the terms & conditions.");
      setIsProcessing(false);
      return;
    }
    if (amountInPaise <= 0) {
      toast.error("Invalid payment amount.");
      setIsProcessing(false);
      return;
    }

    try {
      const res = await createPaymentIntent({
        amount: amountInPaise,
        currency: "inr",
        payment_method_type: payment.method,
      }).unwrap();

      dispatch(setPayment({ clientSecret: res.clientSecret }));

      if (payment.method === "card") {
        const card = elements.getElement(CardElement);
        if (!card) {
          toast.error("Card element not found");
          setIsProcessing(false);
          return;
        }

        const confirm = await stripe.confirmCardPayment(res.clientSecret, {
          payment_method: { card },
        });

        if (confirm.error) {
          toast.error(confirm.error.message);
          dispatch(setPaymentStatus({ status: "failed", error: confirm.error.message }));
          setIsProcessing(false);
          return;
        }

        if (confirm.paymentIntent?.status === "succeeded") {
          toast.success("Payment Successful!");
          dispatch(setPaymentStatus({ status: "success" }));
          dispatch(setStep(5));
        }
      }

      if (payment.method === "upi") {
        toast.success("UPI Payment Initiated (TEST)");
        toast.info("Use UPI ID: success@upi");
        dispatch(setPaymentStatus({ status: "success" }));
        dispatch(setStep(5));
      }

      if (payment.method === "paypal") {
        toast.success("Simulated PayPal Payment Successful!");
        dispatch(setPaymentStatus({ status: "success" }));
        dispatch(setStep(5));
      }
    } catch (err) {
      toast.error("Payment Failed: " + (err.message || err));
      dispatch(setPaymentStatus({ status: "failed", error: err.message || err }));
    } finally {
      setIsProcessing(false);
    }
  };

  // ------------------ UI ------------------
  return (
    <Card className="p-4 shadow mb-4 mx-3 mb-5">
      <h5 className="text-center fw-bold" style={{ fontSize: "20px", color: "#004466" }}>
        PAYMENT METHOD
      </h5>
      <div className="mb-3 text-center rounded-5" style={{ backgroundColor: "#99ddff", height: "0.1rem" }}></div>

      <div className="px-4 border-1 border-warning py-4 rounded-1 shadow-sm">
        <Row className="mt-4">
          <h6 className="fw-bold mb-3" style={{ color: "#00334d" }}>
            Select Your Payment Method
          </h6>

          {/* CREDIT CARD */}
          <Col md={4}>
            <Card
              onClick={() => dispatch(setPayment({ method: "card" }))}
              className={`text-center p-3 shadow-sm border ${
                payment.method === "card" ? "border-info bg-info bg-opacity-25" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <FaCreditCard size={35} className="mx-auto" />
              <h6 className="mt-2 fw-bold">Credit Card</h6>
            </Card>
          </Col>

          {/* PAYPAL */}
          <Col md={4}>
            <Card
              onClick={() => dispatch(setPayment({ method: "paypal" }))}
              className={`text-center p-3 shadow-sm border ${
                payment.method === "paypal" ? "border-info bg-info bg-opacity-25" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <FaPaypal size={35} className="mx-auto" />
              <h6 className="mt-2 fw-bold">PayPal</h6>
            </Card>
          </Col>

          {/* UPI */}
          <Col md={4}>
            <Card
              onClick={() => dispatch(setPayment({ method: "upi" }))}
              className={`text-center p-3 shadow-sm border ${
                payment.method === "upi" ? "border-info bg-info bg-opacity-25" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <MdAccountBalanceWallet size={35} className="mx-auto" />
              <h6 className="mt-2 fw-bold">UPI</h6>
            </Card>
          </Col>
        </Row>

        {/* PAYMENT DETAILS */}
        {payment.method === "card" && (
          <Card className="p-3 mt-4">
            <h6 className="fw-bold mb-2">Enter Card Details</h6>
            <div style={{ padding: "10px", border: "1px solid #adb5bd", borderRadius: "6px" }}>
              <CardElement
                options={{
                  hidePostalCode: true,
                  style: {
                    base: { fontSize: "16px", color: "#495057", "::placeholder": { color: "#adb5bd" } },
                    invalid: { color: "#dc3545" },
                  },
                }}
              />
            </div>
            <Form.Text className="text-muted mt-2 fw-bold">Pay securely using your credit card</Form.Text>
          </Card>
        )}

        {payment.method === "upi" && (
          <Card className="p-3 mt-4">
            <Form.Label className="fw-bold mb-2">Enter UPI ID</Form.Label>
            <Form.Control
              placeholder="example@upi"
              value={payment.upiId || ""}
              onChange={(e) => dispatch(setPayment({ upiId: e.target.value }))}
            />
            <Form.Text className="text-muted mt-2 fw-bold">Use your UPI ID (e.g., example@upi)</Form.Text>
          </Card>
        )}

        {payment.method === "paypal" && (
          <Card className="p-3 mt-4">
            <Form.Label className="fw-semibold">PayPal Email</Form.Label>
            <Form.Control
              className="mt-2"
              placeholder="PayPal Email"
              value={payment.paypalEmail || ""}
              onChange={(e) => dispatch(setPayment({ paypalEmail: e.target.value }))}
            />
            <Form.Label className="fw-semibold mt-2">PayPal Password</Form.Label>
            <Form.Control
              className="mt-2"
              placeholder="PayPal Password"
              type="password"
              value={payment.paypalPassword || ""}
              onChange={(e) => dispatch(setPayment({ paypalPassword: e.target.value }))}
            />
            <Form.Text className="text-muted mt-2 fw-bold">Enter your PayPal account details to continue</Form.Text>
          </Card>
        )}
      </div>

      {/* BOOKING SUMMARY */}
      <Card className="p-3 mt-4 mb-3" style={{ border: "1px solid #adb5bd", borderRadius: "6px" }}>
        {hotelAndFlight.hotel && (
          <Form.Text className="d-block mb-2 fw-bold" style={{ fontSize: "13px" }}>
            Hotel: Rooms = {hotelAndFlight.rooms || 1}, Nights = {nightsCount()}, Price = ₹
            {hotelAndFlight.hotelPrice?.toLocaleString("en-IN") || 0}
          </Form.Text>
        )}
        {hotelAndFlight.flight && (
          <Form.Text className="d-block mb-2 fw-bold" style={{ fontSize: "13px" }}>
            Flight: Number = {hotelAndFlight.flight}, Seats = {hotelAndFlight.seats || 1}, Price = ₹
            {hotelAndFlight.flightPrice?.toLocaleString("en-IN") || 0}
          </Form.Text>
        )}
        {hotelAndFlight.returnFlight && (
          <Form.Text className="d-block mb-2 fw-bold" style={{ fontSize: "13px" }}>
            Return Flight: Number = {hotelAndFlight.returnFlight}, Seats ={" "}
            {hotelAndFlight.returnSeats || hotelAndFlight.seats || 1}, Price = ₹
            {hotelAndFlight.returnFlightPrice?.toLocaleString("en-IN") || 0}
          </Form.Text>
        )}
        <h5 className="fw-bold mt-1">Total Amount: ₹{finalAmount.toLocaleString("en-IN")}</h5>
      </Card>

      <Form.Check
        className="mt-2 mx-auto"
        type="checkbox"
        checked={payment.agree || false}
        onChange={(e) => dispatch(setPayment({ agree: e.target.checked }))}
        label="I agree to the terms and conditions"
      />

      <Row className="mt-4">
        <Col lg={6} md={12}>
          <Button
            className="bg-secondary rounded-1 border-0 mt-2 w-100 fw-bold"
            onClick={() => dispatch(setStep(3))}
          >
            <FaArrowLeft /> Back
          </Button>
        </Col>

        <Col lg={6} md={12}>
          <Button
            className="bg-primary rounded-1 border-0 mt-2 w-100 fw-bold"
            onClick={handlePay}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
