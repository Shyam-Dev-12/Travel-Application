import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from "framer-motion";

import { IoReturnDownBackOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

export const AboutScreen = () => {

    const navigate = useNavigate();
    
  return (
    <div>

        {/* HEADER */}
        <header className="fixed-top d-flex align-items-center justify-content-center  text-white fw-bold fs-4"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/dlyxya9am/image/upload/v1771694855/AboutUs_Banner_l6kwoe.jpg)`,
                backgroundSize: "cover", backgroundPosition: "center", height: "100px",
                // overflow: "hidden",
            }}
        >
            <div style={{ position: "absolute",top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 1,}}></div>

            <div style={{ position: "relative", zIndex: 2 }}>
                ABOUT US
            </div>
        </header>


        {/* MIDDLE */}
       <main 
  className="bg-light shadow-md" 
  style={{ 
    paddingTop: "150px",   // 120px header height + 20px extra gap
    paddingBottom: "30px" // 60px footer height + 40px safe gap
  }}
>
            <Container>
                <Card className="border-1 rounded-2 bg-white p-5 mx-5">
                    <p className='mx-auto fw-semibold px-4 mb-3'>  
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 2 }}
                            transition={{ duration: 1.6 }}
                            style={{ textIndent: "20px", textAlign: "justify", textAlignLast: "left"}}
                        >
                            <span className='fs-3' style={{fontFamily: "serif",}}>
                                W
                            </span>
                            e the SkyWing Travels, we believe every journey begins with a dream and ends with a story.
                            Our goal is to make travel easy, affordable, and filled with unforgettable moments.
                            From flight bookings to personalized holiday packages, we take care of every detail.
                            With a team of passionate travel experts, we bring you comfort, adventure, and value.
                            We partner with trusted airlines and hotels to ensure safe and seamless experiences.
                            Whether it's a quick getaway or a long vacation, SkyWing turns your plans into memories.
                            Because with SkyWing, your destination is just the beginning of something beautiful.
                            We strive to go beyond expectations, making every moment of your journey special.
                            Our commitment lies in understanding your dreams and turning them into reality.
                            With innovation, care, and a touch of love, we redefine the way the world travels.
                            Choose SkyWing — where every mile brings a smile and every trip feels like home.
                            Our travelers describe SkyWing as a brand built on trust and "memorable experiences."
                            We believe that every flight tells a story, and every story deserves the perfect ending.
                            With dedication and heart, we continue to make global travel easier for everyone.
                            Because at SkyWing, your journey is our passion, and your happiness is our destination.
                        </motion.p>  
                    </p>
                    <Row className='p-5 border rounded-3 bg-white shadow-sm mx-4'>
                        <Col lg={6} md={6} sm={12}>
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: "easeOut" }}
                            >
                                <h5 className="fw-bold mb-2 text-dark">Our Story & Mission</h5>
                                <p className="text-secondary fw-semibold"
                                    style={{ textIndent: "15px", textAlign: "justify", textAlignLast: "left"}}
                                >
                                SkyWing Travels was founded with the vision of making travel simple,
                                affordable, and unforgettable. Our mission is to bring people closer
                                to the world through seamless travel experiences, rich adventures,
                                and happy memories.
                                </p>
                                    <ul className="text-start text-secondary fw-bold f">
                                    <li>Unbeatable flight deals</li>
                                    <li>Custom holiday packages</li>
                                    <li>Affordable hotel bookings</li>
                                    <li>24/7 travel assistance</li>
                                </ul>
                                <p className="text-secondary fw-semibold" 
                                    style={{ textIndent: "15px", textAlign: "justify", textAlignLast: "left"}}
                                >
                                Every journey with SkyWing is carefully planned to ensure comfort,
                                value, and personalized service — from booking to boarding.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="text-center">
                            <motion.img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80"
                                alt="Travel" style={{height: "370px"}}
                                className="img-fluid rounded-3 shadow"
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: "easeOut" }}
                            />
                        </Col>
                    </Row>
                    <p className='mx-auto fw-semibold my-4 px-4'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 2 }}
                            transition={{ duration: 1.0 }}
                            style={{ textIndent: "20px", textAlign: "justify", textAlignLast: "left"}}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam vitae animi eos suscipit ullam, aperiam voluptate tenetur delectus eum, velit perspiciatis optio maxime, incidunt sequi. Aliquid praesentium id asperiores?
                            Quia vitae, fuga dolores, eius magni sint atque, vero illo hic consectetur architecto ut laudantium vel inventore? Repellat odio distinctio vero qui illum animi, numquam dolor iusto asperiores est obcaecati!
                            Dolorem autem a ipsum veritatis blanditiis eius libero beatae expedita culpa est quibusdam amet voluptatibus deserunt reiciendis, omnis aut quis neque quae iure. Eveniet error magni, rerum mollitia illum beatae.
                            Omnis ad non quia possimus rerum atque repellat? Quisquam placeat veniam numquam assumenda provident quo, fugit error sapiente iure quidem obcaecati tenetur voluptates ducimus similique consequatur magni rem nisi earum?
                            Saepe ad vitae, inventore delectus placeat deleniti sunt possimus quas, amet repellat fuga voluptates, animi excepturi officiis asperiores? Totam, animi voluptas. Tempora, pariatur expedita harum non obcaecati dolore consectetur recusandae?
                            Ab officia magnam voluptates, impedit deleniti aliquid provident adipisci repellendus voluptate aut. Nemo sed esse enim adipisci eveniet unde quam, est voluptatem porro facilis, optio fugit repellat illum rerum. Fugit.
                            Excepturi vel et vitae nostrum. Ipsam assumenda, culpa accusantium consequatur necessitatibus cupiditate incidunt tenetur quibusdam? Quia velit quae repellendus cupiditate sequi, sit, beatae ab incidunt dolor neque unde omnis maxime?
                            Rerum sint quae sed corrupti maxime labore eaque. Aliquam, incidunt. Voluptatibus, alias voluptatum. Alias iste pariatur vitae reiciendis voluptatum, consequuntur repudiandae impedit dolore! Corporis doloribus natus in dignissimos? Inventore, blanditiis.
                            Iure laborum dolores vel nostrum sed hic eligendi minus praesentium alias fuga ipsa ipsum iste odit sequi nam, obcaecati explicabo temporibus rerum iusto! Suscipit doloremque accusamus sit tempora sed voluptatem.
                            Repudiandae, amet nobis eligendi doloremque iusto perspiciatis veniam, eum iure quasi doloribus quia animi error impedit aliquam rem nihil incidunt nisi, facilis nemo totam quos corrupti tenetur? Ipsum, ipsam repudiandae!
                        </motion.p>
                    </p>
                    <Row className='p-5 border rounded-3 bg-white shadow-sm mx-4'>
                        <Col md={6} className="text-center mb-4 mb-md-0">
                            <motion.img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=900&q=80"
                                alt="Adventure"
                                className="img-fluid rounded-3 shadow"
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.6, ease: "easeOut" }}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={12} className='my-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: -80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.6, ease: "easeOut" }}
                               
                            >
                                <h5 className="fw-bold mb-3 text-dark text-center">
                                    What Makes Us Different?
                                </h5>
                                <p className="text-secondary fw-semibold "  
                                    style={{ textIndent: "20px", textAlign: "justify", textAlignLast: "left"}}
                                >
                                   We focus on personal connections, not transactions. Our travel experts craft every 
                                   experience with attention to detail — ensuring travelers enjoy unique stays, 
                                   authentic local experiences, and smooth journeys that inspire and delight. 
                                   With SkyWing, every trip becomes more than a journey — it becomes a story worth 
                                   remembering.
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                    <p className='mx-auto fw-semibold my-4 px-4 '>
                        <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    textIndent: "40px",
                                    textAlign: "justify",
                                    textAlignLast: "left"
                                }}
                        >
                            With years of experience, SkyWing Travels has grown into a trusted name in travel excellence.
                            We believe in more than just destinations — we believe in stories, smiles, and memories that last forever.
                            Every journey we plan carries a touch of care, a spark of adventure, and a promise of comfort.
                            Our mission is to connect people with places that inspire, refresh, and transform their lives.
                            From solo adventures to family vacations, we craft experiences that suit every traveler’s dream.
                            We take pride in providing seamless bookings, exclusive deals, and 24/7 travel support.
                            At SkyWing, every itinerary is designed with precision, passion, and personal attention.
                            Our team of travel experts ensures that every trip is not just well-planned, but truly unforgettable.
                            We collaborate with leading airlines, hotels, and tour partners across the globe for your convenience.
                            Whether you crave mountains, beaches, cities, or cultures — SkyWing takes you there effortlessly.
                            We aim to turn ordinary trips into extraordinary journeys filled with laughter and learning.
                            Our dedication lies in making travel stress-free, affordable, and rich in meaningful experiences.
                            Over the years, we’ve earned the trust of countless travelers who call SkyWing their travel partner.
                            Each flight we book and each tour we organize is a step toward building lasting connections.
                            Because at SkyWing Travels, your journey doesn’t just end when you arrive — it truly begins there.
                        </motion.div>
                    </p>
                </Card>
            </Container>
        </main>
        
        {/* BACK-BUTTON */}
       <div className="position-fixed bottom-0 end-0  me-3" style={{ zIndex: 1050, marginBottom: "180px" }}>
            <Button
                type="button"
                variant="dark"
                className="fw-bold text-info px-2 py-1 rounded-1 shadow"
                style={{ backgroundColor: "#000" }}
                onClick={() => navigate(-1)}
            >
                Back <IoReturnDownBackOutline className="fw-bolder fs-3" />
            </Button>
        </div>


        {/* FOOTER */}
        <footer className="text-center text-white" style={{ backgroundColor: "#000", padding: "20px 0" }}>
            <div className="fw-bold pt-3 mb-4">© 2025 SkyWing Travels | All Rights Reserved.</div>
            <hr className="text-white mx-auto " style={{ width: "70vw", marginTop: "10px" }} />
        </footer>
    </div>
  )
}
