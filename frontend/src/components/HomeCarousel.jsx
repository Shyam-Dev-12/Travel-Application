import React from "react";
import { Carousel } from "react-bootstrap";

export const HomeCarousel = () => {
  const slides = [

    { type: "video", src:"https://res.cloudinary.com/dlyxya9am/video/upload/v1771700556/HS_V1_sqgzj6.mp4" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695241/HS_Img_1_d59uji.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695289/HS_Img_2_qt79ho.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695386/HS_Img_3_e3wmqf.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695303/HS_Img_4_srilde.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695335/HS_Img_5_iw6tag.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695315/HS_Img_6_qtzeoy.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695395/HS_Img_7_q09dy0.jpg" },

    { type: "video", src:"https://res.cloudinary.com/dlyxya9am/video/upload/v1771695461/HS_V4_swwpds.mp4" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695368/HS_Img_8_anjojx.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695409/HS_Img_9_qlai7r.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695320/HS_Img_10_q3bllg.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695234/HS_Img_11_mofoqv.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695252/HS_Img_12_hlph48.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695282/HS_Img_13_lperw7.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695309/HS_Img_14_j0oggg.jpg" },

    { type: "video", src:"https://res.cloudinary.com/dlyxya9am/video/upload/v1771700639/HS_V3_cvwkh4.mp4" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695315/HS_Img_15_agirbg.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695284/HS_Img_16_udgnsa.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695289/HS_Img_17_wfzste.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695422/nasa-qian-qdvETYWoHfg-unsplash_nbtcqk.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695285/HS_Img_19_zca6jl.jpg" },
    { type: "image", src:"https://res.cloudinary.com/dlyxya9am/image/upload/v1771695168/aman-kumar-Cwyl4fZv5LM-unsplash_gnaji5.jpg" }
  ];

  return (
    <Carousel fade interval={4000} controls={false} indicators={false} pause={false} className="h-100">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          {slide.type === "image" ? (
            <img
              src={slide.src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "100vh", objectFit: "cover" }}
            />
          ) : (
            <video
              className="d-block w-100"
              autoPlay
              muted
              loop
              playsInline
              style={{ height: "100vh", objectFit: "cover" }}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
