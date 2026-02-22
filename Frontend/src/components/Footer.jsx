import React from "react";
          // Boostrap components & forms
import { Form, Container, Row, Col, Button, InputGroup } from "react-bootstrap";
          // react-icons
import { MdEmail } from "react-icons/md";
import { FaPhone, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="border rounded-1 shadow-lg p-5 text-white w-full" style={{background: "#000",}}>
      <Container fluid className="w-full">
        <Row>
          {/* Company */}
          <Col xs={12} md={6} lg={3} className="">
            <h4 className="fs-5 fw-bolder my-3 text-info" >Company</h4>
            <p className="fw-semibold" style={{fontSize:"14px"}}>About Us</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Blog</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Privacy Policy</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Terms & Conditions</p>

            <div className='d-flex gap-3 fs-5 mb-3'>
              <a href="#" className='text-info' ><FaInstagram /></a>
              <a href="#" className='text-info' ><FaFacebookF /></a>
              <a href="#" className='text-info' ><FaXTwitter /></a>
              <a href="#" className='text-info' ><FaYoutube /></a>
            </div>
          </Col>

          {/* Customer Support */}
          <Col xs={12} md={6} lg={2}>
            <h4 className="fs-5 fw-bolder my-3 text-info" >Customer</h4>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Help Center</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Booking Policy</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Cancellation Policy</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Refund Policy</p>
          </Col>

          {/* Our Services */}
          <Col xs={12} md={6} lg={2}>
            <h4 className="fs-5 fw-bolder my-3 text-info" >Our Services</h4>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Flight Booking</p>
            {/* <p>Car Rental</p> */}
            <p className="fw-semibold" style={{fontSize:"14px"}}>Hotel Booking</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}>Package & Guiding</p>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={6} lg={2}>
            <h4 className="fs-5 fw-bolder my-3 text-info" >Contact Info</h4>
            <p className="fw-semibold" style={{fontSize:"14px"}}> ABC-Street, Y-City, <br/> INDIA-652929</p>
            <p className="fw-semibold" style={{fontSize:"14px"}}> <FaPhone className="me-2 text-info"  /> +91 98765 43210 </p>
            <p className="fw-semibold" style={{fontSize:"14px"}}> <MdEmail className="me-1 text-info"  /> skwing@gmail.com </p>
          </Col>

          {/* Newsletter */}
          <Col xs={12} md={6} lg={3} className="">
            <h4 className="fs-5 fw-bolder my-3 text-info" >Our Newsletter</h4>
            <p className="fw-semibold" style={{fontSize:"14px"}}>
              Subscribe to our newsletter and get the latest travel deals,
              destination updates, and exclusive offers!
            </p>
            <InputGroup>
              <Form.Control
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
              />
              <Button variant="info" id="submit" className="text-dark fw-bold text-info">
                Submit
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <hr className="text-white mt-5 mx-5" />

        <Row className="text-center text-info">
          <p className="mb-0 fw-semibold mt-5 text-info" > © 2025 SKWING Travels<span className="fw-semibold text-secondary"> | All Rights Reserved.</span></p>
        </Row>
      </Container>
    </div>   
  );
};

// #002233