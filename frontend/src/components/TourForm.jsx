import React, { useState, useEffect, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { setTourDetails, setStep } from "../slices/bookingSlice";
import { useSearchCountriesQuery } from "../slices/countryApiSlice";

export const TourForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const dropdownRef = useRef(null);

  const { selectedPlace } = useSelector((state) => state.booking);

  const [destination, setDestination] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [tripType, setTripType] = useState("oneway");
  const [startingDate, setStartingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const total = Number(adults) + Number(children);

  // Min date logic
  const now = new Date();
  const minDate = new Date();
  if (now.getHours() >= 12) minDate.setDate(minDate.getDate() + 1);
  const minDateISO = minDate.toISOString().split("T")[0];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // API Query
  const { data: locationData, isLoading, error } =
    useSearchCountriesQuery(debouncedTerm, {
      skip: debouncedTerm.trim() === "",
    });

  // Auto-fill from home/packages
  useEffect(() => {
    if (selectedPlace?.title) {
      setDestination(selectedPlace.title);
      setSearchTerm(selectedPlace.title);
    }
  }, [selectedPlace]);

  // Hide dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Continue Button
  const handleContinue = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Ensure user selected from dropdown
    if (!selectedCityName || !selectedCountryCode) {
      toast.error("Please select a valid destination from the list.");
      return;
    }

    // If dates are empty, set default to today + min gap
    const today = new Date().toISOString().split("T")[0];
    const safeStartDate = startingDate || today;
    let safeReturnDate = returnDate;
    if (tripType === "round" && !returnDate) {
      const start = new Date(safeStartDate);
      start.setDate(start.getDate() + 3); // 3 days default gap
      safeReturnDate = start.toISOString().split("T")[0];
    }

    // Dispatch to Redux
    dispatch(
      setTourDetails({
        destination,
        tripType,
        startDate: safeStartDate,
        endDate: safeReturnDate || "",
        adults: Number(adults),
        children: Number(children),
        selectedCityName,
        selectedCountryCode,
        selectedCountryName: destination.split(" - ")[1] || "",
        destinationCity: selectedCityName,
      })
    );

    dispatch(setStep(2));
  };

  const { tourDetails } = useSelector((state) => state.booking);

  useEffect(() => {
    if (tourDetails && Object.keys(tourDetails).length > 0) {
      setDestination(tourDetails.destination || "");
      setTripType(tourDetails.tripType || "oneway");
      setStartingDate(tourDetails.startDate || "");
      setReturnDate(tourDetails.endDate || "");
      setAdults(tourDetails.adults || 1);
      setChildren(tourDetails.children || 0);
      setSelectedCityName(tourDetails.selectedCityName || "");
      setSelectedCountryCode(tourDetails.selectedCountryCode || "");
    }
  }, [tourDetails]);


  return (
    <Form ref={formRef} onSubmit={handleContinue} className="px-5 py-4 border rounded mb-5 mx-4">
      <h5 className="text-center fw-bold" style={{ fontSize: "20px", color: "#004466" }}>
        Select Your Destination
      </h5>

      <div className="mb-3 text-center rounded-5" style={{ backgroundColor: "#99ddff", height: "0.1rem" }}></div>

      {/* DESTINATION */}
      <Form.Group className="mb-2" ref={dropdownRef} style={{ position: "relative" }}>
        <Form.Label className="fw-semibold">Destination</Form.Label>

        <Form.Control
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => {
            const value = e.target.value;
            setDestination(value);
            setSearchTerm(value);
            setShowDropdown(true);
          }}
          autoComplete="on"
          required
        />

        {/* Dropdown */}
        {showDropdown && destination.trim().length >= 1 && (
          <div
            className="border mt-1 p-2 rounded bg-white shadow"
            style={{
              maxHeight: "220px",
              overflowY: "auto",
              position: "absolute",
              zIndex: 9999,
              left: 0,
              right: 0,
              width: "100%",
            }}
          >
            {isLoading && <div className="text-muted">Searching...</div>}
            {error && <div className="text-danger">Error loading locations</div>}

            {!isLoading &&
              !error &&
              (locationData?.length ? (
                locationData.map((item, i) => {
                  const country = item.country;
                  const countryCode = item.code; // ✅ define here
                  const cities = item.cities || [];

                  return (
                    <div key={`${country}-${i}`}>
                      <div className="fw-bold px-2 py-1">{country}</div>
                      {cities.map((city, j) => {
                        const cityName = typeof city === "string" ? city : city.name;

                        return (
                          <div
                            key={`${country}-${cityName}-${j}`}
                            className="p-2 ps-4 hover-bg"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              e.stopPropagation(); // ✅ prevents outside click closing early
                              setDestination(`${cityName} - ${country}`);
                              setSelectedCityName(cityName);
                              setSelectedCountryCode(countryCode);
                              setShowDropdown(false);
                            }}
                          >
                            {cityName}
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="text-muted">No locations found</div>
              ))}
          </div>
        )}
      </Form.Group>


      {/* TRIP TYPE & DATES */}
      {tripType === "oneway" && (
        <Row className="mb-2">
          <Col md={6}>
            <Form.Label className="fw-semibold">Trip Type</Form.Label>
            <Form.Select value={tripType} onChange={(e) => setTripType(e.target.value)}>
              <option value="oneway">One Way</option>
              <option value="round">Round Trip</option>
            </Form.Select>
          </Col>

          <Col md={6}>
            <Form.Label className="fw-semibold">Start Date</Form.Label>
            <Form.Control type="date" value={startingDate} onChange={(e) => setStartingDate(e.target.value)} required min={minDateISO} />
          </Col>
        </Row>
      )}

      {tripType === "round" && (
        <>
          <Row className="mb-2">
            <Col md={12}>
              <Form.Label className="fw-semibold">Trip Type</Form.Label>
              <Form.Select value={tripType} onChange={(e) => setTripType(e.target.value)}>
                <option value="oneway">One Way</option>
                <option value="round">Round Trip</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <Form.Label className="fw-semibold">Start Date</Form.Label>
              <Form.Control type="date" value={startingDate} required min={minDateISO} onChange={(e) => setStartingDate(e.target.value)} />
            </Col>

            <Col md={6}>
              <Form.Label className="fw-semibold">Return Date</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
                min={
                  startingDate
                    ? (() => {
                        const start = new Date(startingDate);
                        start.setDate(start.getDate() + 3);
                        return start.toISOString().split("T")[0];
                      })()
                    : ""
                }
              />
            </Col>
          </Row>
        </>
      )}

      {/* TRAVELLERS */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Label className="fw-semibold">Total Travellers</Form.Label>
          <Form.Control type="text" value={total} disabled />
        </Col>

        <Col md={4}>
          <Form.Label className="fw-semibold">Adults</Form.Label>
          <Form.Select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
            {[...Array(8)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Label className="fw-semibold">Children</Form.Label>
          <Form.Select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
            {[...Array(8)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Button type="submit" className="bg-primary shadow-sm w-100 text-light rounded-1 fw-bolder py-2 border-0">
        Continue <IoMdArrowRoundForward />
      </Button>
    </Form>
  );
};