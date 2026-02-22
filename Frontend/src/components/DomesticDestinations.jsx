// DomesticDestination.jsx
import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

export const DomesticDestinations = () => {
  const navigate = useNavigate();

  const handleBook = (destination) => {
    // Save the clicked destination in localStorage
    localStorage.setItem("selectedDestination", JSON.stringify(destination));

    // Navigate to the /book page
    navigate("/book");
  };

  const slides = [
    { id: 1, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695075/DD_DES_1_o1lurc.jpg", title: "ANDAMAN", subtitle: "Luxury Beach Paradise", type: "Beach" },
    { id: 2, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695163/DD_DES_2_xn58cn.jpg", title: "KERALA", subtitle: "Serene Backwater Escape", type: "Backwaters" },
    { id: 3, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695039/DD_DES_8_bvackf.jpg", title: "KOTTAYAM", subtitle: "Peaceful Floral Lake Retreat", type: "Hill Station" },
    { id: 4, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695118/DD_DES_3_cinmv8.jpg", title: "SAKLESHPUR", subtitle: "Misty Hills & Coffee Trails", type: "Hill Station" },
    { id: 5, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695078/DD_DES_9_scutyz.jpg", title: "KARNATAKA", subtitle: "Majestic Western Ghats Falls", type: "Hill Station" },
    { id: 6, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695222/DD_DES_7_tflgrg.jpg", title: "MUNNAR", subtitle: "Tea Gardens & Cool Breeze", type: "Hill Station" },
    { id: 7, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695006/DD_DES_5_smfp0x.jpg", title: "KASHMIR", subtitle: "Heavenly Alpine Beauty", type: "Hill Station" },
    { id: 8, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694971/DD_DES_10_kf4akj.jpg", title: "THANJAVUR", subtitle: "Historic Dravidian Architecture", type: "Heritage" },
    { id: 9, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695034/DD_DES_4_jgkqpy.jpg", title: "AGRA", subtitle: "Symbol of Eternal Love", type: "Monuments" },
    { id: 10, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695063/DD_DES_6_uwvwl0.jpg", title: "THAR DESERT", subtitle: "Golden Sand Adventure", type: "Desert" },
    { id: 11, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694924/DD_DES_11_gkdcej.jpg", title: "UDAIPUR", subtitle: "Regal Fort & Culture Escape", type: "Heritage" },
    { id: 12, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694996/DD_DES_12_td5nyh.jpg", title: "UDAIPUR", subtitle: "Romantic Lakefront Majesty", type: "Romantic" },
    { id: 13, img: "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694980/DD_DES_13_i9sc4d.jpg", title: "RAJASTHAN", subtitle: "Royal City Adventure", type: "Heritage" }
  ];

  const responsive = {
    large: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    medium: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    small: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 }
  };

  return (
    <Container className="my-5">
      <h3 className="fw-bold mb-3 text-center">DOMESTIC DESTINATIONS</h3>
      <p className="text-center text-secondary mb-4">
        UNLIMITED CHOICES | BEST PRICES | HAPPY MEMORIES | HOT DEALS
      </p>

      <div className="py-4 pb-5 bg-light border rounded-3">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={800}
          arrows={false}
          draggable
          swipeable
          itemClass="px-3"
          containerClass="py-2"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="d-flex justify-content-center">
              <Card
                className="text-center shadow-sm"
                style={{
                  width: "250px",
                  backgroundColor: "rgba(255, 255, 255, 0.80)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={slide.img}
                  alt={slide.title}
                  style={{
                    height: "200px",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Card.Body>
                  <h6 className="fw-bold mb-1">{slide.title}</h6>
                  <p className="fw-bold small mb-0">{slide.subtitle}</p>
                  <Button
                    variant="info"
                    className="fw-bold w-100 mt-2 rounded-1 py-1"
                    onClick={() => handleBook(slide)}
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
