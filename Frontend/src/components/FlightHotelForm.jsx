// src/components/FlightHotelForm.jsx
import React, { useState, useEffect } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaArrowLeft, FaHotel } from "react-icons/fa6";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setHotelAndFlight } from "../slices/bookingSlice";
import {
  useGetAirportsByCityQuery,
  useGetFlightsByCityQuery,
  useGetHotelsByCityQuery,
  useGetCitiesByCountryQuery,
  useGetAllCountriesQuery,
} from "../slices/countryApiSlice";

export const FlightHotelForm = () => {
  const dispatch = useDispatch();

  // -------------------------- Redux state --------------------------
  const { travellers, hotelAndFlight, tourDetails } = useSelector((state) => state.booking);

  const selectedCityName = tourDetails?.selectedCityName || "";
  const selectedCountryCode = tourDetails?.selectedCountryCode || "";
  const selectedCity = tourDetails.city;

  const firstTraveller = travellers?.[0] || {};
  const travellerCountryCode = firstTraveller?.countryCode || "";
  const travellerCity = firstTraveller?.city || "";
  const totalTravellers = travellers?.length || 0;

  const destinationCity = tourDetails?.selectedCityName || "";
  const destinationCountryCode = tourDetails?.selectedCountryCode || "";

  // -------------------------- Local state --------------------------
  const [selectedAirport, setSelectedAirport] = useState(hotelAndFlight?.airport || "");
  const [arrivingAirport, setArrivingAirport] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(hotelAndFlight?.flight || "");
  const [selectedSeats, setSelectedSeats] = useState(hotelAndFlight?.seats || 1);
  const [selectedHotel, setSelectedHotel] = useState(hotelAndFlight?.hotel || "");
  const [selectedRooms, setSelectedRooms] = useState(hotelAndFlight?.rooms || 1);
  const [departureTime, setDepartureTime] = useState(hotelAndFlight?.departureTime || "");
  const [arrivalTime, setArrivalTime] = useState(hotelAndFlight?.arrivalTime || "");
  const [arrivalHour, setArrivalHour] = useState(0);
  const [arrivalMinute, setArrivalMinute] = useState(0);
  const [checkInValue, setCheckInValue] = useState("");
  const [checkOutValue, setCheckOutValue] = useState("");

  // Round trip
  const [returnCity, setReturnCity] = useState(selectedCityName);
  const [selectedReturnAirport, setSelectedReturnAirport] = useState("");
  const [selectedReturnFlight, setSelectedReturnFlight] = useState("");
  const [returnDepartureTime, setReturnDepartureTime] = useState("");
  const [returnArrivalTime, setReturnArrivalTime] = useState("");

  const tripStartDate = tourDetails?.startDate ? new Date(tourDetails.startDate) : null;
  const tripEndDate = tourDetails?.endDate ? new Date(tourDetails.endDate) : null;

  console.log("Traveller Country Code:", travellerCountryCode);
  console.log("Traveller City:", travellerCity);
  console.log("Destination Country Code:", destinationCountryCode);
  console.log("Destination City:", destinationCity);


  // -------------------------- Fetch data --------------------------
  const { data: airports = [], isLoading: loadingAirports } = useGetAirportsByCityQuery(
    { code: travellerCountryCode, city: travellerCity },
    { skip: !travellerCountryCode || !travellerCity }
  );

  const { data: arrivingAirports = [], isLoading: loadingArrivingAirports } = useGetAirportsByCityQuery(
    { code: destinationCountryCode, city: destinationCity },
    { skip: !destinationCountryCode || !destinationCity }
  );

  const { data: returnAirports = [], isLoading: loadingReturnAirports } = useGetAirportsByCityQuery(
    { code: destinationCountryCode, city: returnCity },
    { skip: tourDetails.tripType !== "round" || !returnCity }
  );

  const { data: flights = [], isLoading: loadingFlights } = useGetFlightsByCityQuery(
    { code: travellerCountryCode, city: travellerCity },
    { skip: !travellerCountryCode || !travellerCity }
  );

  const { data: returnFlights = [], isLoading: loadingReturnFlights } = useGetFlightsByCityQuery(
    { code: selectedCountryCode, city: returnCity },
    { skip: tourDetails.tripType !== "round" }
  );

  const { data: hotels = [], isLoading: loadingHotels } = useGetHotelsByCityQuery(
    { code: destinationCountryCode, city: destinationCity },
    { skip: !destinationCountryCode || !destinationCity }
  );

  const { data: countryList = [] } = useGetAllCountriesQuery();
  const travellerCountryName = countryList.find((c) => c.code === travellerCountryCode)?.country || "";

  const { data: countryCities = [], isLoading: loadingCountryCities } = useGetCitiesByCountryQuery(
    selectedCountryCode,
    { skip: !selectedCountryCode }
  );

  // -------------------------- Helper functions --------------------------
  const getHoursMinutes = (timeStr) => {
    if (!timeStr) return [0, 0];
    const [hours, minutes] = timeStr.split(":").map(Number);
    return [hours, minutes];
  };

  const formatLocalDateTimeForInput = (date) => {
    if (!date) return "";
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
  };

  const calculateRooms = (adults, children) => {
    if (!adults && !children) return 1;
    const maxAdultsPerRoom = 5;
    const maxChildrenPerRoom = 3;
    const adultRooms = Math.ceil(adults / maxAdultsPerRoom);
    const childRooms = Math.ceil(children / maxChildrenPerRoom);
    return Math.max(adultRooms, childRooms);
  };

  const totalAdults = tourDetails?.adults || 0;
  const totalChildren = tourDetails?.children || 0;
  const suggestedRooms = calculateRooms(totalAdults, totalChildren);

  // -------------------------- Effects --------------------------
  useEffect(() => {
    setSelectedSeats(totalTravellers);
  }, [totalTravellers]);

  useEffect(() => {
    const updatedSuggested = calculateRooms(totalAdults, totalChildren);
    setSelectedRooms(updatedSuggested);
  }, [totalAdults, totalChildren]);

  useEffect(() => {
    if (tourDetails?.tripType === "round" && !returnCity) {
      const other = countryCities?.find((c) => {
        const name = typeof c === "string" ? c : c.name ?? "";
        return name !== selectedCityName;
      });
      if (other) setReturnCity(typeof other === "string" ? other : other.name);
    }
  }, [countryCities, tourDetails?.tripType, selectedCityName]);

  useEffect(() => {
    if (selectedFlight) {
      const flight = flights.find((f) => f.flightNumber === selectedFlight);
      if (flight) {
        setDepartureTime(flight.dep);
        setArrivalTime(flight.arr);
        const [arrHour, arrMinute] = getHoursMinutes(flight.arr);
        setArrivalHour(arrHour);
        setArrivalMinute(arrMinute);
      }
    } else {
      setDepartureTime("");
      setArrivalTime("");
    }
  }, [selectedFlight, flights]);

  useEffect(() => {
    if (!tripStartDate) return;

    // Check-in Date
    const flight = flights.find((f) => f.flightNumber === selectedFlight);
    if (flight && flight.arr) {
      const [arrHour, arrMinute] = getHoursMinutes(flight.arr);
      const arrivalDateTime = new Date(tripStartDate);
      arrivalDateTime.setHours(arrHour + 1);
      arrivalDateTime.setMinutes(arrMinute);
      arrivalDateTime.setSeconds(0);
      if (arrivalDateTime.getHours() >= 22) {
        arrivalDateTime.setDate(arrivalDateTime.getDate() + 1);
        arrivalDateTime.setHours(10);
        arrivalDateTime.setMinutes(0);
      }
      setCheckInValue(formatLocalDateTimeForInput(arrivalDateTime));
    }

    // Check-out Date (Round Trip)
    if (tourDetails.tripType === "round") {
      const returnFlight = returnFlights.find((f) => f.flightNumber === selectedReturnFlight);
      if (returnFlight && returnFlight.dep) {
        const [depHour, depMinute] = getHoursMinutes(returnFlight.dep);
        const returnDepDateTime = new Date(tripEndDate);
        returnDepDateTime.setHours(depHour - 3);
        returnDepDateTime.setMinutes(depMinute);
        returnDepDateTime.setSeconds(0);
        setCheckOutValue(formatLocalDateTimeForInput(returnDepDateTime));
      }
    }
  }, [selectedFlight, selectedReturnFlight, flights, returnFlights, tripStartDate, tripEndDate, tourDetails.tripType]);

  // -------------------------- Sync local state with Redux --------------------------
useEffect(() => {
  setSelectedAirport(hotelAndFlight?.airport || "");
  setArrivingAirport(hotelAndFlight?.arrivingAirport || "");
  setSelectedFlight(hotelAndFlight?.flight || "");
  setSelectedSeats(hotelAndFlight?.seats || totalTravellers || 1);
  setSelectedHotel(hotelAndFlight?.hotel || "");
  setSelectedRooms(hotelAndFlight?.rooms || suggestedRooms || 1);
  setDepartureTime(hotelAndFlight?.departureTime || "");
  setArrivalTime(hotelAndFlight?.arrivalTime || "");
  setReturnDepartureTime(hotelAndFlight?.returnDepartureTime || "");
  setReturnArrivalTime(hotelAndFlight?.returnArrivalTime || "");
  setSelectedReturnFlight(hotelAndFlight?.returnFlight || "");
  setSelectedReturnAirport(hotelAndFlight?.returnAirport || "");
  setCheckInValue(hotelAndFlight?.checkInDate || "");
  setCheckOutValue(hotelAndFlight?.checkOutDate || "");
}, [hotelAndFlight, totalTravellers, suggestedRooms]);


  // -------------------------- Handlers --------------------------
const handleContinue = () => {
  const flightObj = flights.find(f => f.flightNumber === selectedFlight) || null;
  const returnFlightObj = returnFlights.find(f => f.flightNumber === selectedReturnFlight) || null;
  const hotelObj = hotels.find(h => h.name === selectedHotel) || null;

  dispatch(setHotelAndFlight({
    hotel: selectedHotel,
    hotelPrice: hotelObj?.price || 0, // hotel price for calculation
    flight: selectedFlight,
    flightPrice: flightObj?.price || 0,
    returnFlight: selectedReturnFlight || null,
    returnFlightPrice: returnFlightObj?.price || 0,
    seats: selectedSeats || 1,          // seats for outbound flight
    returnSeats: selectedSeats || 1,    // seats for return flight
    rooms: selectedRooms || 1,
    checkInDate: checkInValue,
    checkOutDate: checkOutValue,
    departureTime: departureTime,
    arrivalTime: arrivalTime,
    returnDepartureTime: returnDepartureTime || null,
    returnArrivalTime: returnArrivalTime || null,
    airport: selectedAirport,
    arrivingAirport: arrivingAirport,
    tripType: tourDetails?.tripType || "oneway"
  }));

  dispatch(setStep(4));
};

  // -------------------------- Render --------------------------
  return (
    <Form className="mt-4 mx-4 px-4 py-4 mb-4 border rounded" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
      <h5 className="text-center fw-bold" style={{ fontSize: "20px", color: "#004466" }}>
        SELECT YOUR FLIGHT & HOTEL
      </h5>
      <div className="mb-3 text-center rounded-5" style={{ backgroundColor: "#99ddff", height: "0.1rem" }} />

      {/* ---------------- FLIGHT CARD ---------------- */}
      <Card className="p-4 shadow-sm mb-4">
        <h6 className="fw-bold text-center" style={{ color: "#00334d" }}>
          <RiFlightTakeoffLine className="fs-3 me-1" /> Flight Selection
        </h6>

        {/* Airport Dropdown */}
        <Form.Group className="mt-3">
          <Form.Label className="fw-semibold">Select Airport</Form.Label>
          <Form.Select value={selectedAirport} onChange={(e) => setSelectedAirport(e.target.value)}
            disabled={loadingAirports || airports.length === 0}>
            <option value="">-- Choose Airport --</option>
            {airports?.map((a, idx) => (
              <option key={idx} value={a.code}>
                {a.name} – {travellerCity} – {travellerCountryName} ({travellerCountryCode})
              </option>
            ))}
          </Form.Select>
          {loadingAirports && <small className="text-muted">Loading Airports...</small>}
          {!loadingAirports && airports.length === 0 && <small className="text-danger">No Airports found for this city</small>}
        </Form.Group>

        {/* Arriving Airport */}
        <Form.Group className="mt-3">
          <Form.Label className="fw-semibold">Arriving Airport</Form.Label>
          {arrivingAirports.length > 1 ? (
            <Form.Select value={arrivingAirport} onChange={(e) => setArrivingAirport(e.target.value)}
              disabled={loadingArrivingAirports || arrivingAirports.length === 0}>
              <option value="">-- Choose Arriving Airport --</option>
              {arrivingAirports.map((a, idx) => {
                const country = countryList.find(c => c.code === destinationCountryCode);
                const countryName = country?.country || "";
                return <option key={idx} value={a.code}>{a.name} – {destinationCity} – {countryName} ({destinationCountryCode})</option>;
              })}
            </Form.Select>
          ) : (
            <Form.Control type="text" value={`${arrivingAirports[0]?.name} – ${destinationCity} – ${countryList.find(c => c.code === destinationCountryCode)?.country} (${destinationCountryCode})`} readOnly />
          )}
          {loadingArrivingAirports && <small className="text-muted">Loading Airports...</small>}
          {!loadingArrivingAirports && arrivingAirports.length === 0 && <small className="text-danger">No Airports found for this city</small>}
        </Form.Group>

        {/* Flight Dropdown */}
        {selectedAirport && (
          <Form.Group className="mt-3">
            <Form.Label className="fw-semibold">Select Flight</Form.Label>
            <Form.Select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)}
              disabled={loadingFlights || flights.length === 0}>
              <option value="">-- Choose Flight --</option>
              {flights.map((f, idx) => (
                <option key={idx} value={f.flightNumber}>{f.airline} {f.flightNumber} - ₹{f.price}</option>
              ))}
            </Form.Select>
            {loadingFlights && <small className="text-muted">Loading Flights...</small>}
            {!loadingFlights && flights.length === 0 && <small className="text-danger">No Flights found for this city</small>}
          </Form.Group>
        )}

        {/* Seats */}
        {selectedFlight && (
          <Form.Group className="mt-3">
            <Form.Label className="fw-semibold">Seats</Form.Label>
            <Form.Control type="number" value={totalTravellers} readOnly />
          </Form.Group>
        )}

        {/* Flight Timings */}
        {selectedFlight && (
          <div className="mt-4 p-3 border rounded bg-light">
            <h6 className="fw-semibold text-center mb-3">Flight Timings</h6>
            <Row>
              <Col md={6} sm={12} className="mb-3">
                <Form.Label className="fw-semibold">Departure Time</Form.Label>
                <Form.Control type="text" value={departureTime} readOnly />
              </Col>
              <Col md={6} sm={12}>
                <Form.Label className="fw-semibold">Arrival Time</Form.Label>
                <Form.Control type="text" value={arrivalTime} readOnly />
              </Col>
            </Row>
          </div>
        )}

        {/* ---------------- ROUND TRIP ---------------- */}
        {tourDetails.tripType === "round" && (
          <div className="mt-4 p-3 border-0 rounded">
            <Form.Group className="mb-3">
              <div className="mb-3 text-center rounded-5" style={{ backgroundColor: "#99ddff", height: "0.1rem" }} />
              <h6 className="text-center fw-bold" style={{ color: "#00334d", fontSize: "15px" }}>RETURN-TRIP</h6>
              <Form.Label className="fw-semibold">Return City</Form.Label>
              <Form.Control type="text" value={`${destinationCity} - ${countryList.find(c => c.code === destinationCountryCode)?.country} (${destinationCountryCode})`} readOnly className="mt-2" />
            </Form.Group>

            {/* Return Airport */}
            <Form.Group className="mt-3">
              <Form.Label className="fw-semibold">Return Airport</Form.Label>
              <Form.Select value={selectedReturnAirport} onChange={(e) => setSelectedReturnAirport(e.target.value)} disabled={loadingReturnAirports || returnAirports.length === 0}>
                <option value="">-- Choose Return Airport --</option>
                {returnAirports.map((a, idx) => {
                  const returnCountry = countryList.find(c => c.code === selectedCountryCode);
                  const returnCountryName = returnCountry?.country || "";
                  return <option key={idx} value={a.code}>{a.name} – {returnCity} – {returnCountryName} ({selectedCountryCode})</option>;
                })}
              </Form.Select>
              {loadingReturnAirports && <small className="text-muted">Loading airports...</small>}
              {!loadingReturnAirports && returnAirports.length === 0 && <small className="text-danger">No airports available</small>}
            </Form.Group>

            {/* Arriving Airport (Home) */}
            <Form.Group className="mt-3">
              <Form.Label className="fw-semibold">Arriving Airport</Form.Label>
              <Form.Control type="text" value={`${airports[0]?.name} – ${travellerCity} – ${travellerCountryName} (${travellerCountryCode})`} readOnly className="mt-2" />
            </Form.Group>

            {/* Return Flight */}
            {selectedReturnAirport && (
              <Form.Group className="mt-3">
                <Form.Label className="fw-semibold">Return Flight</Form.Label>
                <Form.Select
                  value={selectedReturnFlight}
                  onChange={(e) => {
                    const flightNumber = e.target.value;
                    setSelectedReturnFlight(flightNumber);
                    const flight = returnFlights.find(f => f.flightNumber === flightNumber);
                    if (flight) {
                      setReturnDepartureTime(flight.dep);
                      setReturnArrivalTime(flight.arr);
                    } else {
                      setReturnDepartureTime("");
                      setReturnArrivalTime("");
                    }
                  }}
                  disabled={loadingReturnFlights || returnFlights.length === 0}
                >
                  <option value="">-- Choose Return Flight --</option>
                  {returnFlights.map((f, idx) => (
                    <option key={idx} value={f.flightNumber}>{f.airline} {f.flightNumber} - ₹{f.price}</option>
                  ))}
                </Form.Select>
                {loadingReturnFlights && <small className="text-muted">Loading flights...</small>}
                {!loadingReturnFlights && returnFlights.length === 0 && <small className="text-danger">No flights available</small>}
              </Form.Group>
            )}

            {/* Seats */}
            {selectedReturnFlight && (
              <Form.Group className="mt-3">
                <Form.Label className="fw-semibold">Seats</Form.Label>
                <Form.Control type="number" value={totalTravellers} readOnly />
              </Form.Group>
            )}

            {/* Return Flight Timings */}
            {selectedReturnFlight && (
              <div className="mt-4 p-3 border rounded bg-light">
                <h6 className="fw-semibold text-center mb-3">Return Flight Timings</h6>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Departure Time</Form.Label>
                    <Form.Control type="text" value={returnDepartureTime} readOnly />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="fw-semibold">Arrival Time</Form.Label>
                    <Form.Control type="text" value={returnArrivalTime} readOnly />
                  </Col>
                </Row>
              </div>
            )}
          </div>
        )}
      </Card>

      {/* ---------------- HOTEL CARD ---------------- */}
      <Card className="p-3 shadow-sm mb-4">
        <h6 className="fw-bold text-center" style={{ color: "#00334d" }}>
          <FaHotel className="fs-5 me-1" /> Hotel Selection
        </h6>

        <Form.Group className="mt-2">
          <Form.Label className="fw-semibold">Select Hotel</Form.Label>
          <Form.Select value={selectedHotel} onChange={(e) => setSelectedHotel(e.target.value)} disabled={loadingHotels || hotels.length === 0}>
            <option value="">-- Choose Hotel --</option>
            {hotels.map((h, index) => (
              <option key={index} value={h.name}>{h.name} - ₹{h.price}/Night</option>
            ))}
          </Form.Select>
          {loadingHotels && <small className="text-muted">Loading hotels...</small>}
          {!loadingHotels && hotels.length === 0 && <small className="text-danger">No hotels found for this destination</small>}
        </Form.Group>

        {selectedHotel && (
          <>
            {tourDetails.tripType === "oneway" ? (
              <Row className="mt-4">
                <Col md={6}>
                  <Form.Label className="fw-semibold">Rooms (Suggested: {suggestedRooms}, Max: 5)</Form.Label>
                  <Form.Control type="number" min="1" max={5} value={selectedRooms} onChange={(e) => setSelectedRooms(e.target.value)} />
                  <small className="text-muted">Suggested rooms based on travellers: {suggestedRooms} (Max 5 adults + 3 children per room)</small>
                </Col>
                <Col md={6}>
                  <Form.Label className="fw-semibold">Check-in Date</Form.Label>
                  <Form.Control type="datetime-local" value={checkInValue || ""} readOnly />
                </Col>
              </Row>
            ) : (
              <>
                <Form.Group className="mt-3">
                  <Form.Label className="fw-semibold">Rooms (Suggested: {suggestedRooms}, Max: 5)</Form.Label>
                  <Form.Control type="number" min="1" max={5} value={selectedRooms} onChange={(e) => setSelectedRooms(e.target.value)} />
                  <small className="text-muted">Suggested rooms based on travellers: {suggestedRooms} (Max 5 adults + 3 children per room)</small>
                </Form.Group>
                <Row className="mt-4">
                  <Col md={6}>
                    <Form.Label className="fw-semibold">Check-in Date</Form.Label>
                    <Form.Control type="datetime-local" value={checkInValue || ""} readOnly />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="fw-semibold">Check-out Date</Form.Label>
                    <Form.Control type="datetime-local" value={checkOutValue || ""} readOnly />
                  </Col>
                </Row>
              </>
            )}
          </>
        )}
      </Card>

      {/* ---------------- BUTTONS ---------------- */}
      <Row>
        <Col lg={6} md={12}>
          <Button className="bg-secondary rounded-1 border-0 mt-2 w-100 fw-bold" style={{ backgroundColor: "#004466" }} onClick={() => dispatch(setStep(2))}>
            <FaArrowLeft /> Back
          </Button>
        </Col>
        <Col lg={6} md={12}>
          <Button type="submit" className="bg-primary rounded-1 border-0 mt-2 w-100 fw-bold" style={{ backgroundColor: "#004466" }}>
            Continue <IoMdArrowRoundForward />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
