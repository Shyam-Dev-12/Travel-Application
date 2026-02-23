// src/components/TravellerForm.jsx
import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setTravellers, setPersonalDetails, setStep } from "../slices/bookingSlice";
import { useGetAllCountriesQuery, useGetCitiesByCountryQuery } from "../slices/countryApiSlice";

export const TravellerForm = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const { data: countryList = [], isLoading } = useGetAllCountriesQuery();
  const savedTravellers = useSelector((state) => state.booking.travellers) || [];
  const savedPersonal = useSelector((state) => state.booking.personalDetails) || {};
  const tourDetails = useSelector((state) => state.booking.tourDetails) || {};

  const adults = tourDetails.adults || 0;
  const children = tourDetails.children || 0;
  const total = adults + children;

  // -------------------------- FORM STATE
  const [personalName, setPersonalName] = useState(savedPersonal.personalName || "");
  const [personalEmail, setPersonalEmail] = useState(savedPersonal.personalEmail || "");
  const [personalPhone, setPersonalPhone] = useState(savedPersonal.personalPhone || "");
  const [personalCountry, setPersonalCountry] = useState(savedPersonal.personalCountry || "Choose Country");
  const [personalCity, setPersonalCity] = useState(savedPersonal.personalCity || "Choose City");
  const [destination, setDestination] = useState(""); // keep destination empty initially
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [travellers, setTravellersList] = useState(
    savedTravellers.length ? savedTravellers : Array.from({ length: total }, () => ({ name: "" }))
  );

  // -------------------------- COUNTRY FILTER
  const filteredCountries = countryList.filter((item) =>
    item.country?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const countryObj = countryList.find(
    (c) => c.country.toLowerCase() === personalCountry.toLowerCase()
  ) || null;
  const countryCode = countryObj?.code || "";

  const { data: countryCities = [], isLoading: loadingCities } = useGetCitiesByCountryQuery(countryCode, { skip: !countryCode });

  // -------------------------- CLOSE DROPDOWN OUTSIDE
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCountryDropdown(false);
        setShowCityDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const updateName = (idx, val) => {
    setTravellersList((prev) => {
      const copy = [...prev];
      copy[idx].name = val;
      return copy;
    });
  };

  const handleCountryPick = (name) => {
    setDestination(name);
    setPersonalCountry(name);
    setSearchTerm(name);
    setShowCountryDropdown(false);
    setPersonalCity("Choose City"); // reset city if country changes
  };

  const handleCityPick = (cityName) => {
    setPersonalCity(cityName);
    setShowCityDropdown(false);
  };

  // -------------------------- VALIDATION & CONTINUE
  const handleContinue = () => {
    if (!personalName.trim() || !personalEmail.trim()) {
      toast.error("Please fill all personal details.");
      return;
    }

    if (!isValidPhoneNumber(personalPhone)) {
      toast.error("Invalid phone number.");
      return;
    }

    if (!personalCountry || personalCountry === "Choose Country") {
      toast.error("Please select a valid country.");
      return;
    }

    if (!personalCity || personalCity === "Choose City") {
      toast.error("Please select a valid city.");
      return;
    }

    // Disable selecting the same city as tour destination
    if (tourDetails.selectedCityName && personalCity.toLowerCase() === tourDetails.selectedCityName.toLowerCase()) {
      toast.error(`You cannot select the same city as your destination (${tourDetails.selectedCityName}).`);
      return;
    }

    if (travellers.some((t) => !t.name.trim())) {
      toast.error("Please enter names for all travellers.");
      return;
    }

    // Save travellers with countryCode & city
    const travellersWithLocation = travellers.map((t) => ({
      ...t,
      countryCode: countryCode,
      city: personalCity,
    }));

    dispatch(
      setPersonalDetails({
        personalName,
        personalEmail,
        personalPhone,
        personalCountry,
        personalCity,
        personalCountryCode: countryCode,
      })
    );
    dispatch(setTravellers(travellersWithLocation));
    dispatch(setStep(3));
  };

  return (
    <Form
      className="px-5 py-4 border rounded mb-5 mx-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleContinue();
      }}
    >
      <h5 className="text-center fw-bold" style={{ color: "#004466" }}>
        Traveller Information
      </h5>
      <div className="mb-3 text-center rounded-5" style={{ backgroundColor: "#99ddff", height: "0.1rem" }} />

      {/* Personal Details */}
      <h6 className="fw-bold mb-2">Personal Details</h6>
      <Row className="mb-2">
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={personalName}
            onChange={(e) => setPersonalName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
            placeholder="Enter your name"
            required
          />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter you Email" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} required />
        </Col>

        <Col>
          <Form.Label>Phone Number</Form.Label>
          <PhoneInput
            value={personalPhone}
            onChange={(v) => setPersonalPhone(v || "")}
            international
            defaultCountry="IN"
            className="form-control"
          />
        </Col>
      </Row>

      {/* Country & City */}
      <Row className="mb-2" ref={dropdownRef}>
        <Col>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={personalCountry}
            onChange={(e) => {
              const val = e.target.value.replace(/[0-9]/g, ""); // disallow numbers
              setDestination(val);
              setPersonalCountry(val);
              setSearchTerm(val);
              setShowCountryDropdown(true);
            }}
            autoComplete="off"
            placeholder="Choose Country"
          />
          {showCountryDropdown && destination.trim() && (
            <div className="border mt-1 p-2 rounded bg-white shadow">
              {isLoading
                ? <div>Loading...</div>
                : filteredCountries.length
                  ? filteredCountries.map((item, i) => (
                      <div key={i} className="p-2" style={{ cursor: "pointer" }} onClick={() => handleCountryPick(item.country)}>
                        {item.country}
                      </div>
                    ))
                  : <div>No countries found</div>
              }
            </div>
          )}
        </Col>

        <Col>
          <Form.Label>City</Form.Label>
          <Form.Control
            value={personalCity}
            placeholder="Choose City"
            onChange={(e) => {
              const val = e.target.value.replace(/[0-9]/g, ""); // disallow numbers
              setPersonalCity(val);
              setShowCityDropdown(true);
            }}
          />
          {showCityDropdown && countryCities.length > 0 && (
            <div
              className="border mt-1 p-2 rounded bg-white shadow"
              style={{ maxHeight: "220px", width: "300px", overflowY: "auto", position: "absolute", zIndex: 9999,}}
            >
              {countryCities.map((cityObj, i) => {
                const cityName = typeof cityObj === "string" ? cityObj : cityObj.city || cityObj.name || "";
                const isDisabled = tourDetails.selectedCityName
                  && cityName.toLowerCase() === tourDetails.selectedCityName.toLowerCase();

                return (
                  <div
                    key={i}
                    className="p-2"
                    style={{
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      color: isDisabled ? "gray" : "black"
                    }}
                    onClick={() => !isDisabled && handleCityPick(cityName)}
                  >
                    {cityName}{isDisabled ? " " : ""}
                  </div>
                );
              })}
            </div>
          )}
        </Col>
      </Row>

      <hr />

      {/* Travellers */}
      <h5 className="fw-bold mb-3">Additional Passengers ({adults} Adults, {children} Children)</h5>
      <h6 className="fw-bold mt-3">Adult Details</h6>
      {travellers.slice(0, adults).map((trav, idx) => (
        <Card key={idx} className="p-3 mb-2 shadow-sm">
          <strong>Adult {idx + 1}</strong>
          <Form.Control
            className="mt-2"
            value={trav.name}
            placeholder="Enter adult name"
            onChange={(e) => updateName(idx, e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
            required
          />
        </Card>
      ))}

      <h6 className="fw-bold mt-4">Children Details</h6>
      {travellers.slice(adults).map((trav, idx) => (
        <Card key={idx + adults} className="p-3 mb-2 shadow-sm">
          <strong>Child {idx + 1}</strong>
          <Form.Control
            className="mt-2"
            value={trav.name}
            placeholder="Enter child name"
            onChange={(e) => updateName(idx + adults, e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
            required
          />
        </Card>
      ))}

      <Row>
        <Col lg={6}>
          <Button
            className="bg-secondary border-0 rounded-1 mt-3 w-100 fw-bold"
            style={{ backgroundColor: "#004466" }}
            onClick={() => dispatch(setStep(1))}
          >
            <FaArrowLeft /> Back
          </Button>
        </Col>
        <Col lg={6}>
          <Button type="submit" className="bg-primary mt-3 w-100 fw-bold rounded-1">
            Continue <IoMdArrowRoundForward />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
