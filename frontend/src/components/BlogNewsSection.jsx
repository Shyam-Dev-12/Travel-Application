import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const BlogNewsSection = () => {
  const navigate = useNavigate();

  // Array of card data
  const cards = [
    { id: 1, title: "Things To Do In International Destination" },
    { id: 2, title: "Things To Do In Domestic Destination" },
    { id: 3, title: "Best Seasons to Travel" },
    { id: 4, title: "Smart Travel & Money Tips" },
  ];

  // Navigate to blog details page
  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="my-5 py-4">
      <Container>
        <h3 className="fw-bold mb-3 text-center">
          News, Blogs, Trips & Travel Tips
        </h3>
        <p className="text-center text-secondary mb-3">
          UNLIMITED CHOICES | BEST PRICES | HAPPY MEMORIES | HOT DEALS
        </p>
        <Row className="g-4 border rounded-2 pt-4 pb-5 px-5 mt-4" style={{
          background: `#cceeff`
        }}>
          {cards.map((card) => (
            <Col key={card.id} sm={12} md={6} lg={3}>
              <Card
                className="text-center d-flex align-items-center justify-content-center shadow-sm border-1 p-3"
                style={{
                  width: "15rem",
                  height: "150px",
                  transition: "transform 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => handleClick(card.id)}
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
                  <Card.Title className="fw-bold text-dark">
                    {card.title}
                  </Card.Title>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
