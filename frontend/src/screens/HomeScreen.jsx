import React, { useRef } from 'react'

import { Container, Button, Row, Col } from 'react-bootstrap'
import '../App.css'

        // components
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { HomeCarousel } from '../components/HomeCarousel'
import { SearchBar } from '../components/SearchBar'
import { TopDestinations }  from '../components/TopDestinations'
import { ThemeDestinations } from '../components/ThemeDestinations' 
import { InternationalDestinations } from '../components/InternationalDestinations'
import { DomesticDestinations } from '../components/DomesticDestinations'
import { BlogNewsSection } from '../components/BlogNewsSection'
import { BannerSection } from '../components/BannerSection'

export const HomeScreen = () => {

  const destinationRef = useRef(null);

  const scrollToDestinations = () => {
    destinationRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <div>
        <Container fluid className="p-0">
            <NavBar />
              {/* SEARCH BAR */}
            <div>
              <div id="home-carousel" style={{ position: "relative" }}>
                <HomeCarousel />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1
                  }}
                />

                <div
                  className="position-absolute w-100 d-flex flex-column align-items-center"
                  style={{
                    top: 0,
                    zIndex: 2,
                  }}
                >
                <SearchBar scrollToDestinations={scrollToDestinations} />
              </div>
            </div>
          </div>  
        </Container>
          
      </div>

      <div>
          <Container fluid>
            <div ref={destinationRef}>
              <TopDestinations />
              <ThemeDestinations />
              <BannerSection />
              <InternationalDestinations />
              <DomesticDestinations />
            </div>
            <BlogNewsSection />
          </Container>
      </div>
      
      <div>
          <Footer />
      </div>
    </>
  )
}
