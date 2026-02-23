import React, { useState } from "react";
            // React Routes DOM
import { useNavigate } from "react-router-dom";
            // Boostrap
import { Card, Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
            // Animation
import { motion } from "framer-motion";
            // Icons
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaUser, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

export const ContactScreen = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
                    {/* Header */}
      <header style={{ position: "fixed", height: "120px", width: "100%", zIndex: 1000, top:"0"}}>
        <div style={{  backgroundColor:"#002233",
                      // backgroundImage: `url(https://res.cloudinary.com/dlyxya9am/image/upload/v1771694917/contact_Img_x49zii.jpg)`, 
                      backgroundSize: "cover", backgroundPosition: "center", 
                      width: "100%", height: "100%",}}>
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.0)",}}>
        </div>
        <div className="text-white text-center " style={{ position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)",}} >
          <h4 className="fw-bolder">We’re Here to Make Your Travel Easy</h4>
          <p className="fw-bold">Let’s talk and plan together.</p>
        </div>
      </header>

                    {/* Main */}
      <main className="mb-5" style={{marginTop:"150px"}}>
        <Container fluid>
          <Row className="justify-content-center align-items-stretch gap-3">
                    {/* Left Column START */}
            <Col lg={5} md={12} className="d-flex flex-column gap-3">
                    {/* Address Card */}
              <motion.div variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="shadow-sm h-100 border-1 d-flex align-items-center justify-content-center py-5 mx-auto" style={{transition:"all 0.3s ease",}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                                  {/* Icon - Address */}
                    <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "60px", height: "60px", backgroundColor:"#cceeff" }}>
                      <IoLocationSharp className=" fs-1" style={{color:"#00334d",}}/>
                    </div>
                                  {/* Address Text */}
                    <div className="text-start">
                      <Card.Title className="fw-bolder mb-2 pt-4 " style={{color:"#00334d",}}>Address</Card.Title>
                      <Card.Text className="fw-semibold mb-0 pb-3" style={{color:"#00334d",}}>
                        ABC‑Street, Y‑City,<br />INDIA‑652929
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </motion.div>

                      {/* Row - Email and Contact */}
              <Row className="g-3">
                          {/* Email */}
                <Col lg={6} md={6} sm={12}>
                  <motion.div variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Card className="shadow-sm h-100 border-1 d-flex align-items-center justify-content-center py-5 mx-auto" style={{transition:"all 0.3s ease",}}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                          }}
                    >
                      <div className="d-flex align-items-center justify-content-center ">
                                  {/* Icon - Email */}
                        <div className="rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "60px", height: "60px", backgroundColor:"#cceeff" }}>
                          <MdEmail className=" fs-2" style={{color:"#00334d",}} />
                        </div>
                                  {/* Email Text */}
                        <div className="text-start">
                          <Card.Title className="fw-bold mb-1 pt-4" style={{color:"#00334d",}}>Email</Card.Title>
                          <Card.Text className="fw-semibold mb-0 pb-3" style={{color:"#00334d",}}>
                            skwing@gmail.com
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
                          {/* Contact */}
                <Col lg={6} md={6} sm={12}>
                  <motion.div variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Card className="shadow-sm h-100 border-1 d-flex align-items-center justify-content-center py-5 mx-auto" style={{transition:"all 0.3s ease",}}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                          }}
                    >
                      <div className="d-flex align-items-center justify-content-center gap-3">
                                      {/* Icon - Contact */}
                        <div className=" rounded-circle d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor:" #cceeff", }}>
                          <FaPhone className=" fs-3" style={{color:"#00334d",}}/>
                        </div>
                                        {/* Contact Text */}
                        <div className="text-start">
                          <Card.Title className="fw-bold mb-1 pt-4 " style={{color:"#00334d",}}>Contact</Card.Title>
                          <Card.Text className="fw-semibold mb-0 pb-3" style={{color:"#00334d",}}>
                            +91 98765 43210
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </Col>
                    {/* Left Column Ending*/}

                        {/* ------------------------- */}

                    {/* Right Column START (Form) */}
            <Col lg={5} md={12}>
              <motion.div variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-100">
                <Card className="shadow-sm p-4 rounded-3 h-100">
                  <div className="d-flex justify-content-center align-items-center mb-4">
                                {/* Vertical line */}
                    <div className="me-2 text-center rounded" style={{ width: "0.2rem", height: "30px", backgroundColor: "#00334d" }}></div>

                                {/* Heading */}
                      <h4 className="ps-1 fw-bold" style={{color:"#00334d",}}>Get in Touch</h4>
                    </div>
                                {/* FORM */}
                    <Form>
                                  {/* Name + Email Row */}
                        <Row className="mb-3 g-3">
                                    {/* Name */}
                          <Col lg={6} md={12}>
                            <div className="position-relative">
                              <FaUser className="position-absolute top-50 translate-middle-y ms-3 text-secondary" />
                              <Form.Control
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="ps-5"
                                required
                              />
                            </div>
                          </Col>

                                      {/* Email */}
                          <Col lg={6} md={12}>
                            <div className="position-relative">
                              <MdEmail className="position-absolute top-50 translate-middle-y ms-3 text-secondary" />
                              <Form.Control
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="ps-5"
                                required
                              />
                            </div>
                          </Col>
                        </Row>
                                      {/* Subject */}
                        <div className="position-relative mb-3">
                          <AiOutlineEdit className="position-absolute top-50 translate-middle-y ms-3 text-secondary" />
                          <Form.Control
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="ps-5"
                          />
                        </div>
                                      {/* Message */}
                        <div className="position-relative mb-3">
                          <BsChatText className="position-absolute start-0 top-0 mt-2 ms-3 text-secondary" />
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="ps-5 pt-2"
                          />
                        </div>
                                      {/* Submit Button */}
                        <Button type="submit" style={{backgroundColor: "#00334d", border: "none",transition: "0.3s ease"}} 
                                              className="w-100 fw-bold rounded-1 py-2" size="lg"
                                              onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#004766";
                                              }}
                                              onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#00334d";
                                              }} 
                        > Send Message <BsFillSendFill  className="ms-2"/> </Button>
                    </Form>
                </Card>
              </motion.div>
            </Col>
                      {/* RIGHT Column END */}
          </Row>
        </Container>
                    {/* BACK BUTTON */}
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <Button type="button" size="lg" onClick={() => navigate("/")} className="rounded-1 px-5 py-2 fw-bolder" style={{backgroundColor: "#00334d",}}>
            <IoMdArrowRoundBack /> Back
          </Button>
        </div>
      </main>
              
                    {/* Footer */}
      <footer className="text-center text-white" style={{ backgroundColor: "#00111a", padding: "20px 0" }}>
        <div className="fw-bold pt-5 mb-4">© 2025 SkyWing Travels | <span className="text-secondary">All Rights Reserved.</span> </div>
        <hr className="text-white mx-auto " style={{ width: "70vw", marginTop: "10px" }} />
      </footer>


    </div>
  );
};  
