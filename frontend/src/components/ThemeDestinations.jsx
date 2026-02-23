import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Card } from "react-bootstrap";

export const ThemeDestinations = () => {

  const navigate = useNavigate();

  const handleBook = (destination) => {
            // Save selected destination in state or localStorage
    localStorage.setItem("selectedDestination", JSON.stringify(destination));
            // Navigate to /book page
    navigate("/book");
  };

  const destinations = [
    { id: 1, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696048/TD_Img_BEACH_r0vi1h.jpg", name: "MALDIVES - BEACH", type: "Beach" },
    { id: 2, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696145/TD_Img_HILLSTATION_ldnq4j.jpg", name: "HILL STATION - SHIMLA", type: "Hill Station" },
    { id: 3, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696047/TD_Img_ADVENTURE_ngjl8f.jpg", name: "ADVENTURE - THAILAND", type: "Adventure" },
    { id: 4, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696069/TD_Img_ROMANTIC_addtjb.jpg", name: "ROMANTIC - PARIS", type: "Romantic" },
    { id: 5, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696024/TD_Img_BACKWATERS_pfagwe.jpg", name: "BACKWATERS - KERALA", type: "Backwaters" },
    { id: 6, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696092/TD_Img_SPIRITUAL_p4uozq.jpg", name: "SPIRITUAL - BALI", type: "Spiritual" },
    { id: 7, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696117/TD_Img_MONUMENTS_pfkdep.jpg", name: "HERITAGE - ROME", type: "Monuments" },
    { id: 8, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696078/TD_Img_WILDSAFARI_lyzfgv.jpg", name: "WILDLIFE SAFARI - KENYA", type: "Wildlife" },
    { id: 9, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696075/TD_Img_DESERT_yclmkr.jpg", name: "DESERT - DUBAI", type: "Desert" },
  ];

  return (
    <Container className="my-5">
      <h3 className="fw-bold mb-3 text-center">
        Theme Destinations By Our Travel Experts
      </h3>
      <p className="text-center text-secondary mb-3">
        UNLIMITED CHOICES | BEST PRICES | HAPPY MEMORIES | HOT DEALS
      </p>

      <Row className="g-4 border shadow-sm rounded-2 my-3 px-4 pb-5">
        {destinations.map((dest, index) => (
          <Col xs={12} sm={12} md={6} lg={4} key={index} className="g-5">
            <Card
                className="border-5 border-info shadow-sm overflow-hidden position-relative rounded-5"
                style={{ width: "20rem" }}
            >
                <div style={{ width: "100%", height: "230px", overflow: "hidden" }}>
                  <Card.Img
                    src={dest.img}
                    alt={dest.name}
                    className="w-100"
                    style={{
                      objectFit: "fill",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                          {/* Gradient Background + Title + Button */}
                <div
                  className="position-absolute bottom-0 start-0 text-white px-3 pt-2 pb-3 w-100"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",}}
                >
                <h6 className="fw-bold mb-2 text-center">{dest.name}</h6>

                <button variant="light"  onClick={() => handleBook(dest)} className=" fw-bold w-100 py-1 border-0 rounded-1">
                  Book Now
                </button>
                </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
