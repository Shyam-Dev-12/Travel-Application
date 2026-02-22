import React from "react";

import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

export const InternationalDestinations = () => {

  const navigate = useNavigate(); // <-- Add this

  const handleBook = (destination) => {
    // Save the clicked destination in localStorage
    localStorage.setItem("selectedDestination", JSON.stringify(destination));

    // Navigate to the booking page
    navigate("/book");
  };

  const items = [
    { id: 1, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695623/IN_DES_1_larzwc.jpg", title: "DUBAI", subtitle: "Desert Luxury Escape", type: "Desert" },
    { id: 2, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695886/IN_DES_3_ieyuz0.jpg", title: "VENICE", subtitle: "Romantic Canal City", type: "Romantic" },
    { id: 3, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771773840/IN_DES_5_td0qih.jpg", title: "JAPAN", subtitle: "Cherry Blossom Wonderland", type: "Adventure" },
    { id: 4, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695901/IN_DES_7_e17tgg.jpg", title: "SWITERLAND", subtitle: "Majestic Mountain Paradise", type: "Hill Station" },
    { id: 5, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695594/IN_DES_11_avacig.jpg", title: "MALDIVES", subtitle: "Luxury Beach Paradise", type: "Beach" },
    // { id: 5, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695657/IN_DES_12_wyd0j6.jpg", title: "VERNAZZA", subtitle: "Colorful Coastal Village", type: "Beach" },
    { id: 6, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695676/IN_DES_13_n2vn2x.jpg", title: "JORDAN", subtitle: "Mystical Andes Adventure", type: "Adventure" },
    { id: 7, img:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695841/IN_DES_16_t0fwi2.jpg", title: "ENGLAND", subtitle: "Iconic Historic Bridge", type: "Heritage" },
  ];


  const imgBox = (data) => (
    <div className="img-box rounded-1 overflow-hidden mb-3 border-0" style={{ height: data.height || "170px" }}>
      <img src={data.img} alt="" className="img-fluid border-2 border-secondary shadow-sm" />

      <div className="overlay d-flex flex-column justify-content-center align-items-center text-white p-3">
        <h5 className="fw-bold" style={{color: "#e65c00"}}>{data.title}</h5>
        <small className="mb-3 fw-semibold" style={{fontSize:"12px"}}>{data.subtitle}</small>
        <button onClick={() => handleBook(data)}  className="btn  text-light  fw-bold px-3 py-2 rounded-1 border-1 " style={{backgroundColor: "#e65c00"}}>
          Book Now
        </button>
      </div>
    </div>
  );
 
  return (
    <Container className="my-5">
      <h3 className="fw-bold text-center mb-3">INTERNATIONAL DESTINATIONS</h3>

      <p className="text-center text-secondary mb-4">
        UNLIMITED CHOICES | BEST PRICES | HAPPY MEMORIES | HOT DEALS
      </p>

      <Row className="p-5 rounded-3 shadow-sm border">
        {/* LEFT COLUMN */}
        <Col lg={4} md={4} sm={12}>
          {imgBox(items[0])}
          <Row>
            <Col>{imgBox(items[1])}</Col>
            <Col>{imgBox(items[2])}</Col>
          </Row>
        </Col>

        {/* CENTER COLUMN */}
        <Col lg={4} md={4} sm={12}>
          {imgBox({ ...items[3], height: "356px" })}
        </Col>

        {/* RIGHT COLUMN */}
        <Col lg={4} md={4} sm={12}>
          {imgBox(items[4])}
          <Row>
            <Col>{imgBox(items[5])}</Col>
            <Col>{imgBox(items[6])}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
