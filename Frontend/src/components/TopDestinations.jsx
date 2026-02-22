import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedPlace } from "../slices/bookingSlice";

          // Boostrap & CSS
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../App.css'

const details = [
  { id: 1, name: "Thanjavur Temple", country: "India", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696114/TD_Img_1_plehts.jpg", description: "Thanjavur Brihadeeswarar Temple is a magnificent Chola-era monument known for its grand architecture and towering vimana.", type: "Monuments" },
  { id: 2, name: "Antelope Canyon", country: "USA", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696149/TD_Img_4_duuyd1.jpg", description: "A golden slot canyon carved by nature, glowing beautifully under the desert light.", type: "Nature" },
  { id: 3, name: "Colosseum", country: "Italy", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771705783/TD_Img_3_eox5gg.jpg", description: "The Colosseum in Rome stands as a timeless symbol of the ancient empire, famous for its grand architecture and historic gladiator battles.", type: "Monuments" },
  { id: 4, name: "Nusa Penida Beach", country: "Indonesia", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771705668/TD_Img_2_ltrroi.jpg", description: "A serene Indonesian paradise known for its turquoise waters, soft white sands, and peaceful coconut-lined shores.", type: "Beach" },
  { id: 5, name: "Taj Mahal", country: "India", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771705886/TD_Img_6_iu68bp.jpg", description: "An eternal symbol of love, the Taj Mahal stands gracefully with its white marble reflecting beauty, symmetry, and timeless craftsmanship.", type: "Monuments" },
  { id: 6, name: "Eiffel Tower", country: "France", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696304/TD_Img_5_wxnfol.jpg", description: "An iconic Paris landmark, symbolizing love, art, and French architectural brilliance.", type: "Monuments" },
  { id: 7, name: "The Blue Pearl", country: "Morocco", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696120/TD_Img_13_zpgptz.jpg", description: "A magical hillside town with blue-painted alleys, stairways, and dreamy houses.", type: "City" },
  { id: 8, name: "Leaning Tower of Pisa", country: "Italy", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696207/TD_Img_7_oi0nia.jpg", description: "An iconic architectural marvel famous for its unique tilt and historic charm.", type: "Monuments" },
  { id: 9, name: "Bali Cliffside Beach", country: "Indonesia", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771705668/TD_Img_2_ltrroi.jpg", description: "A breathtaking coastal escape with turquoise waves crashing against dramatic cliffs.", type: "Beach" },
  { id: 10, name: "Osaka Castle", country: "Japan", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696154/TD_Img_8_ypkckd.jpg", description: "A majestic symbol of Japan’s heritage with serene gardens and iconic tiers.", type: "Monuments" },
  { id: 11, name: "Santorini – Oia Village", country: "Greece", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696169/TD_Img_10_zamrnl.jpg", description: "Perched on dramatic cliffs, Oia village glows with whitewashed homes and dreamy sunsets.", type: "Romantic" },
  { id: 12, name: "Venice", country: "Italy", image:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771696129/TD_Img_11_puspng.jpg", description: "A timeless city of canals, gondolas, and romantic bridges, enchanting visitors with historic charm.", type: "Romantic" }
];

export const TopDestinations = () => {

  const navigate = useNavigate();

  const handleBook = (place) => {
    navigate("/book", { state: place });
  };

  return (
    <div className="mx-5 mb-5 mt-5 pt-5">
      <h3 className="fw-bold mb-3 text-center">Explore the Best Top Destinations</h3>
      <p className="text-center text-muted mb-5">
        Unlimited Choices | Best Prices | Happy Memories | Hot Deals
      </p>

      {/* Row with 5 columns */}
    <Card className="border-0">
      <Row className="g-3 justify-content-center align-items-center border shadow-sm rounded-3 py-4">
       {/* Column 1 */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696114/TD_Img_1_plehts.jpg" alt="Destination 1" className="rounded w-100 h-100 " style={{objectFit:"fit"}} />

             <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 mt-2 text-center text-info" style={{fontSize:"13px"}}>THANJAVUR TEMPLE</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "12px"}}>" Thanjavur Brihadeeswarar Temple is a magnificent Chola-era monument known for its grand architecture and towering vimana. "</p>
              <Button onClick={() => handleBook(details[0])} size="md" variant="info fw-bold">Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696149/TD_Img_4_duuyd1.jpg" alt="Destination 1" className="rounded w-100 h-100 " />

             <div className="overlay px-3 py-2 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 mt-2 text-center text-info" style={{fontSize:"15px"}}>Antelope Canyon Arizona</h6>
              <p className="text-start fw-bold fst-italic" style={{fontSize: "12px", textAlign: "justify",textJustify: "inter-word"}}>" A golden slot canyon carved by nature, glowing beautifully under the desert light. ”</p>
              <Button onClick={() => handleBook(details[1])} size="md" variant="info fw-bold">Book Now</Button>
            </div>
          </Card>
        </Col>

        {/* Column 2 */}
        <Col xs={12} sm={12} md={4} lg={2}>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771705783/TD_Img_3_eox5gg.jpg" alt="Destination 3" className="rounded w-100 h-100"/>

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 mt-2 text-center text-info" style={{fontSize:"15px"}}>COLOSSEUM</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "12px", textAlign: "justify",textJustify: "inter-word"}}>“ The Colosseum in Rome stands as a timeless symbol of the ancient empire, famous for its grand architecture and historic gladiator battles. ”</p>
              <Button onClick={() => handleBook(details[2])} size="md" variant="info fw-bold">Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771705668/TD_Img_2_ltrroi.jpg" alt="Destination 4" className="rounded w-100 h-100" />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 mt-2 text-center text-info" style={{fontSize:"15px"}}>Nusa Penida Beach Indonesia</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "12px", textAlign: "justify",textJustify: "inter-word"}}>“A serene Indonesian paradise known for its turquoise waters, soft white sands, and peaceful coconut-lined shores.”</p>
              <Button onClick={() => handleBook(details[3])} size="md" variant="info fw-bold">Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771705886/TD_Img_6_iu68bp.jpg" alt="Destination 4" className="rounded w-100 h-100" />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
            <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Taj Mahal <br/> Agra</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“An eternal symbol of love, the Taj Mahal stands gracefully with its white marble reflecting beauty, symmetry, and timeless craftsmanship.”</p>
              <Button onClick={() => handleBook(details[4])} size="md" variant="info fw-bold mt-0" >Book Now</Button>
            </div>
          </Card>
        </Col>

        {/* Column 3 */}
        <Col xs={12} sm={12} md={4} lg={2}>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696304/TD_Img_5_wxnfol.jpg" alt="Destination 1" className="rounded w-100 h-100 " />
            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Eiffel Tower <br/> Paris</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“An eternal symbol of love, the Taj Mahal stands gracefully with its white marble reflecting beauty, symmetry, and timeless craftsmanship.”</p>
              <Button onClick={() => handleBook(details[5])} size="md" variant="info fw-bold mb-3" >Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696120/TD_Img_13_zpgptz.jpg" alt="Destination 1" className="rounded w-100 h-100 " />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>The Blue Pearl <br/>Morocco</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“A magical hillside town where blue-painted alleys, stairways, and houses create a dreamy, picture-perfect escape.”</p>
              <Button onClick={() => handleBook(details[6])} size="md" variant="info fw-bold mb-3" >Book Now</Button>
            </div>
          </Card>
        </Col>

        {/* Column 4 */}
        <Col xs={12} sm={12} md={4} lg={2}>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696207/TD_Img_7_oi0nia.jpg" alt="Destination 3" className="rounded w-100 h-100"/>

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Leaning Tower of Pisa <br/>Italy</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“An iconic architectural marvel famous for its unique tilt, offering a charming blend of history, beauty, and timeless wonder.”</p>
              <Button onClick={() => handleBook(details[7])} size="md" variant="info fw-bold m" >Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771705668/TD_Img_2_ltrroi.jpg" alt="Destination 4" className="rounded w-100 h-100" />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Bali Cliffside Beach <br/>Indonesia</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“A breathtaking coastal escape where turquoise waves crash against dramatic cliffs, offering stunning views and serene tropical vibes.”</p>
              <Button onClick={() => handleBook(details[8])} size="md" variant="info fw-bold mb-4" >Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696154/TD_Img_8_ypkckd.jpg" alt="Destination 4" className="rounded w-100 h-100" />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Osaka Castle<br/>Japan</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“A majestic symbol of Japan’s heritage, Osaka Castle stands tall with its iconic tiers and serene gardens, blending history and beauty in perfect harmony.”</p>
              <Button onClick={() => handleBook(details[9])} size="md" variant="info fw-bold mb-3" >Book Now</Button>
            </div>
          </Card>
        </Col>

        {/* Column 5 */}
        <Col xs={12} sm={12} md={4} lg={2}>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696169/TD_Img_10_zamrnl.jpg" alt="Destination 1" className="rounded w-100 h-100 " />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Santorini – Oia Village<br/>Greece</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“Perched on dramatic cliffs overlooking the Aegean Sea, Santorini’s Oia village glows with whitewashed homes and dreamy sunsets that paint the sky with magic.”</p>
              <Button onClick={() => handleBook(details[10])} size="md" variant="info fw-bold mb-3" >Book Now</Button>
            </div>
          </Card>
          <Card className="destination-card mb-3 border-0 shadow-lg position-relative overflow-hidden">
            <Card.Img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696129/TD_Img_11_puspng.jpg" alt="Destination 1" className="rounded w-100 h-100 " />

            <div className="overlay px-3 py-5 d-flex flex-column justify-content-center align-items-center text-white">
              <h6 className="fw-bold mb-2 pt-4 text-center text-info" style={{fontSize:"13px"}}>Venice<br/>Italy</h6>
              <p className="text-center fw-bold fst-italic" style={{fontSize: "11px", textAlign: "justify",textJustify: "inter-word"}}>“A timeless city of canals, gondolas, and romantic bridges, Venice enchants visitors with its historic charm and floating streets.”</p>
              <Button onClick={() => handleBook(details[11])} size="md" variant="info fw-bold mb-3" >Book Now</Button>
            </div>
          </Card>
        </Col>

      </Row>
      </Card>
    </div>
  );
};


