import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// ====== Data ======
const internationalPackages = [
  { name: "Dubai Package", price: "₹45,000", days: "5 Days", members: "2 Members", users: "320 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695943/dubaiImg_s9mmb0.jpg" },
  { name: "Singapore Package", price: "₹55,000", days: "6 Days", members: "3 Members", users: "280 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695979/singaporeImg_f7fwza.jpg" },
  { name: "Thailand Package", price: "₹35,000", days: "4 Days", members: "2 Members", users: "410 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696012/thailandImg_qpjadk.jpg" },
  { name: "Malaysia Package", price: "₹48,000", days: "5 Days", members: "3 Members", users: "260 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695972/malaysiaImg_raobjs.jpg" },
  { name: "Bali Package", price: "₹40,000", days: "4 Days", members: "2 Members", users: "350 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695932/baliImg_uapwlx.jpg" },
];

const domesticPackages = [
  { name: "Manali Package", price: "₹12,000", days: "4 Days", members: "4 Members", users: "510 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696076/manaliImg_wcepxx.jpg" },
  { name: "Goa Package", price: "₹9,000", days: "3 Days", members: "2 Members", users: "720 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695956/goaImg_tyhttm.jpg" },
  { name: "Ooty Package", price: "₹8,000", days: "3 Days", members: "3 Members", users: "430 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696005/ootyImg_kwjig0.jpg" },
  { name: "Hyderabad Package", price: "₹10,000", days: "3 Days", members: "4 Members", users: "610 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696036/hyderabadImg_fuongr.jpg" },
  { name: "Madurai Package", price: "₹7,000", days: "2 Days", members: "2 Members", users: "540 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695957/maduraiImg_pjvbmx.jpg" },
  { name: "Kanyakumari Package", price: "₹11,000", days: "3 Days", members: "4 Members", users: "390 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771705051/kanyakumariImg_gqaz77.jpg"},
  { name: "Alleppey Package", price: "₹14,000", days: "3 Days", members: "3 Members", users: "350 Users Used", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695909/alleppeyImg_btfwh4.jpg" },
];

export const PackageScreen = () => {
  const navigate = useNavigate();

  const openDetails = (data) => {
    navigate("/package-details", { state: data });
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "sticky", top: 0, width: "100%", backgroundImage: `url(https://res.cloudinary.com/dlyxya9am/image/upload/v1771696009/package_Img_dr8s5h.jpg)`, 
                    backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", 
                    justifyContent: "center", alignItems: "center", color: "white", textAlign: "center", zIndex: 1000, }} >
        <div style={{ position: "absolute",top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(1px)", zIndex: 1,}}></div>
        <div className="p-3" style={{ position: "relative", zIndex: 2 }}>
          <h2 className="fw-bolder">Explore Amazing Travel Packages</h2>
          <p className="fw-bold text-info">
            Domestic & International Tours | Unforgettable Experiences
          </p>
        </div>
      </div>

      {/* ---------------- Packages List ---------------- */}
      <Container className="mt-4">

        {/* ---------------- International Packages ---------------- */}
        <h3 className="fw-bold mb-2 text-center pt-4">International Tour Packages</h3>
        <p className="text-center fw-bold text-muted mb-4">
          Handpicked Countries | Affordable Deals | Memorable Experiences
        </p>

        <Row className="p-5 border rounded-3 mb-4 shadow-sm" style={{ backgroundColor: "#eef6ff" }}>
          {internationalPackages.map((pkg, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="shadow-sm rounded-1" style={{ height: "350px", overflow: "hidden" }}>
                  <Card.Img variant="top" src={pkg.image} height="200" />
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title className="fw-bolder" style={{ fontSize: "1rem" }}>
                      {pkg.name}
                    </Card.Title>
                    <div className="d-flex justify-content-between px-3 text-primary fw-bold fs-6">
                      <span>{pkg.price}</span> |
                      <span>{pkg.days}</span> |
                      <span>{pkg.members}</span>
                    </div>
                    <small className="text-muted px-3 fw-bold" style={{ fontSize: "0.8rem" }}>
                      {pkg.users}
                    </small>
                    <Button
                      variant="primary"
                      className="w-100 fw-bolder rounded-1 mt-3"
                      onClick={() => openDetails(pkg)}
                    >
                      View Package
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ---------------- Domestic Packages ---------------- */}
        <h3 className="fw-bold mb-2 text-center mt-5 pt-4">Domestic Tour Packages</h3>
        <p className="text-center fw-bold text-muted mb-4">
          Top Cities | Best Prices | Comfortable Travel Experiences
        </p>

        <Row className="p-5 border rounded-3 shadow-sm mb-5" style={{ backgroundColor: "#f8f9fa" }}>
          {domesticPackages.map((pkg, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="shadow-sm rounded-1" style={{ height: "350px", overflow: "hidden" }}>
                  <Card.Img variant="top" src={pkg.image} height="200" />
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title className="fw-bolder" style={{ fontSize: "1rem" }}>
                      {pkg.name}
                    </Card.Title>
                    <div className="d-flex justify-content-between px-3 text-primary fw-bold fs-6">
                      <span>{pkg.price}</span> |
                      <span>{pkg.days}</span> |
                      <span>{pkg.members}</span>
                    </div>
                    <small className="text-muted px-3 fw-bold" style={{ fontSize: "0.8rem" }}>
                      {pkg.users}
                    </small>
                    <Button
                      variant="primary"
                      className="w-100 fw-bolder rounded-1 mt-3"
                      onClick={() => openDetails(pkg)}
                    >
                      View Package
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ---------------- Back Button ---------------- */}
        <div className="w-100 d-flex justify-content-center align-items-center mb-5">
          <Button type="button" onClick={() => navigate("/")} className="px-5 py-2 fw-bolder border-0" style={{backgroundColor:"#00334d",}}>
            <IoMdArrowRoundBack /> Back
          </Button>
        </div>

      </Container>
    </div>
  );
};
