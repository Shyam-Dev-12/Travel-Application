import React from 'react'

import { Carousel } from 'react-bootstrap'

const banners = [
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771697099/banner1_zfwoo0.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771696906/banner15_wbsods.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771696905/banner11_k371kt.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771696905/banner13_zwajnn.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771695027/banner2_akuzxd.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694957/banner14_dsrime.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694914/banner10_lnhr28.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694906/banner7_l43hlu.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694901/banner9_l6wxfz.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694898/banner5_jxzby2.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694897/banner8_pzyhkj.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694891/banner3_ro9xzm.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694890/banner6_iynzta.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694876/banner4_qzqfty.jpg",
  "https://res.cloudinary.com/dlyxya9am/image/upload/v1771694855/banner12_wryons.jpg"
];

export const BannerSection = () => {
  return (
    <div className="mx-5">
      <Carousel
        className=" mx-5 border rounded-1 shadow-sm border border-2 border-light "
        controls={false}        
        indicators={false}      
        interval={2200}         
        // fade={false}             
      >
        {banners.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`banner-${index}`}
              style={{
                height: "170px",
                objectFit: "fill",
                borderRadius: "5px"
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


