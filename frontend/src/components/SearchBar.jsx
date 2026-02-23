import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom';

import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap'
import { motion } from "framer-motion";

import { BookingScreen } from '../screens/BookingScreen';

export const SearchBar = ( { scrollToDestinations } ) => {

  const navigate = useNavigate()

  const [destination, setDestination] = useState("");
  const [ tour, setTour] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(destination, tour);
  };

  return (
    <div className='' style={{marginTop: "150px",}}>
      <Container fluid>
        <Row className="g-5 align-items-center" style={{ rowGap: "20px"}}>
          <Col lg={7} md={6} sm={12} >
            <motion.div
                initial={{opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <Card className="px-3 py-4 rounded-5 w-100 border-0 me-5" style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white" }}>
                <Card.Body>
                  <Card.Title className="text-center fs-3 fw-bold text-info">
                    Discover the world<br/> -- Every journey tells a story --
                  </Card.Title>
                  <Card.Text className="fw-semibold  mt-4 text-start text-start px-md-5 ">
                    Find your perfect trip and explore the world.<br/>
                    Book the best flights, hotels, and packages,<br/>
                    All in one place for a seamless travel experience.
                  </Card.Text>
                  <div className="text-center">
                    <Button onClick={scrollToDestinations} className="border-0 rounded-1 px-4 py-2 fw-bold" size="lg" variant='info' >
                      Explore
                    </Button>
                    <Button onClick={() => navigate("/book")} className="border-0 rounded-1 px-4 py-2 fw-bold ms-2" size="lg" variant='info'>
                      BOOK
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={5} md={6} sm={12}>
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <Card className="py-5 px-4 rounded-1 border-0 ms-3"style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white" }} >
                <Card.Body>
                  <Card.Title className="text-center fw-bold mb-2 text-info" style={{ color: "#99ddff" }}>
                    Plan your Adventure
                  </Card.Title>
                  <div
                    className="mx-auto mb-4 bg-info"
                    style={{ width: "100%", height: "0.1rem", backgroundColor: "#003d4d" }}
                  ></div>
                  <form onSubmit={handleSubmit}>
                    <Form.Group controlId="">
                      <Form.Label className="fw-bold">Destination</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="">
                      <Form.Label className="fw-bold mt-2">Tour Type</Form.Label>
                      <Form.Select
                        className="bg-light fw-semibold text-dark"
                        value={tour}
                        onChange={(e) => setTour(e.target.value)}
                      >
                        <option value="">--- Select ---</option>
                        <option value="beach">Beach</option>
                        <option value="hill-station">Hill-Station</option>
                        <option value="adventure">Adventure</option>
                        <option value="romantic">Romantic</option>
                        <option value="spiritual">Spiritual</option>
                        <option value="culture">Culture</option>
                        <option value="desert">Desert</option>
                      </Form.Select>
                    </Form.Group>
                    <Button
                      type="submit" variant='info'
                      className="w-100 mt-3 border-0 rounded-1 fw-bold py-2"
                      // style={{ backgroundColor: "#006680" }}
                    >
                      Find Your Perfect Trip
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
