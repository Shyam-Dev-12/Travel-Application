// src/screens/BookingScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { BookingStepper } from "../components/BookingStepper";
import { IoMdArrowRoundBack } from "react-icons/io";

import "../App.css";

export const BookingScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="p-0">
        {/* HEADER */}
        <div className="fixed-top">
          <h3
            className="p-3 text-center rounded-bottom d-flex justify-content-center"
            style={{ backgroundColor: "#002233" }}
          >
            <div className="d-flex gap-2">
              {["B", "O", "O", "K"].map((char, index) => (
                <span
                  key={index}
                  className="border border-white rounded bg-white text-black fw-bold d-flex justify-content-center align-items-center"
                  style={{ width: "45px", height: "45px" }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h3>
        </div>

        {/* CONTENT */}
        <Container
          className="d-flex justify-content-center align-items-start"
          style={{ marginTop: "120px", Height: "100vh" }}
        >
          <Row className="w-100 justify-content-center">
            <Col lg={8} md={8} sm={10}>
              <Card className="px-4 mb-4 shadow-sm">
                <BookingStepper />
              </Card>
            </Col>
          </Row>
        </Container>

        {/* BACK BUTTON */}
        <div className="w-100 d-flex justify-content-center align-items-center mt-4 mb-5">
          <Button
            type="button"
            size="lg"
            onClick={() => navigate("/")}
            className="rounded-1 px-5 py-2 fw-bolder"
            style={{ backgroundColor: "#00334d" }}
          >
            <IoMdArrowRoundBack /> Back
          </Button>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-white" style={{ backgroundColor: "#00111a", padding: "20px 0" }}>
          <div className="fw-bold pt-5 mb-4">
            © 2025 SkyWing Travels | <span className="text-secondary">All Rights Reserved.</span>
          </div>
          <hr className="text-white mx-auto" style={{ width: "70vw", marginTop: "10px" }} />
        </footer>
      </Container>
    </div>
  );
};
