import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlane, FaHotel, FaUtensils, FaUsers } from "react-icons/fa";

export const PackageDetailScreen = () => {

  const navigate = useNavigate();

  const { state } = useLocation();
  const pkg = state || {};

  const handleBook = () => {
    localStorage.setItem("selectedDestination", JSON.stringify(pkg));
    navigate("/book");
  };

  return (

    <div className="" style={{ background: "linear-gradient(to right, #cdeffd, #eafafc)" }}> 
      <Container className="" style={{height:"100vh",}}>
        <Row>
          <Col lg={12} md={12} >
            <h4 className="fw-bolder text-center pt-4">
              The Ultimate Travel Package for Your Dream Getaway
            </h4>
            <p className="text-center fw-bold text-muted mb-4">
              Premium Stay | Seamless Travel | Unforgettable Moments
            </p>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-100"
        >
          {/* MAIN CARD */}
        <Card className="shadow-lg rounded-4 overflow-hidden p-4"  >
          <Row className="g-0">
            {/* LEFT IMAGE */}
            <Col lg={6} md={12} className="border rounded-2 mb-3 mb-lg-0" style={{ overflow: "hidden" }}>
              <img
                className="rounded w-100"
                src={pkg.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "415px",
                  objectFit: "cover",
                }}
              />
            </Col>

                    {/* RIGHT DETAILS */}
            <Col lg={6} md={12} className="p-3 d-flex flex-column justify-content-between rounded border" style={{ backgroundColor: "#fffaf0" }}>
              {/* TEXT AREA */}
              <div>
                <h4 className="fw-bolder mb-0">{pkg.name}</h4>
                <div className="d-flex justify-content-center flex-wrap text-primary mt-1 fw-bold fs-6" style={{ gap: "1.5rem" }}>
                  <span>{pkg.price}</span> |
                  <span>{pkg.days}</span> |
                  <span>{pkg.members}</span>
                </div>


                <p className="text-muted fw-semibold mb-1" style={{ fontSize: "0.85rem" }}>
                  <FaUsers /> {pkg.users}
                </p>

                <hr className="my-1" />

                <h6 className="fw-bolder mb-0">About This Destination</h6>
                <p className="fw-semibold text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.2rem", textAlign: "center" }}>
                  <span style={{ display: "inline-block", marginLeft: "1.2em", textAlign: "left" }}>
                    {pkg.description || "Explore one of the most beautiful and memorable travel destinations. Experience breathtaking views, vibrant culture, and unique local traditions. Enjoy comfortable stays, delicious food, and exciting sightseeing activities."}
                  </span>
                </p>

                <h6 className="fw-bolder mb-0">Sightseeing Highlights</h6>
                <ul className="fw-bold mb-0 text-muted" style={{ fontSize: "0.85rem", lineHeight: "1.1rem" }}>
                  <li>City Tour</li>
                  <li>Main Attractions</li>
                  <li>Popular Spots</li>
                  <li>Local Market Visit</li>
                </ul>
              </div>

                      {/* ICONS + BUTTON */}
              <div>
                <h6 className="fw-bolder mb-0">Inclusions</h6>
                <div className="d-flex justify-content-center flex-wrap text-center" style={{ gap: "2rem" }}>
                  <div>
                    <FaHotel size={24} color="blue" />
                    <p className="small mt-1 fw-bold mb-0">Hotel</p>
                  </div>
                  <div>
                    <FaPlane size={24} color="green" />
                    <p className="small mt-1 fw-bold mb-0">Flight</p>
                  </div>
                  <div>
                    <FaUtensils size={24} color="orange" />
                    <p className="small mt-1 fw-bold mb-0">Food</p>
                  </div>
                </div>
                
                <Row className="g-1">
                  <Col lg={6} md={6} sm={12}>
                    <Button type="button" onClick={() => navigate("/packages")} className="w-100 fw-bolder rounded-2 mt-3" size="lg">
                      Back
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <Button onClick={() => navigate("/contact")} className="w-100 fw-bolder rounded-2 mt-3" size="lg">
                      Contact
                    </Button>
                  </Col>
                </Row>
            
              </div>
            </Col>
          </Row>
        </Card>

        </motion.div>
      </Container>
    </div>
  );
};
