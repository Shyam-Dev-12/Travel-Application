import express from "express";

import { getCountries, getCountryByCode, searchCountries, getCitiesByCountry, } from "../controllers/countryControllers.js";

import { getFlightsByCity } from "../controllers/flightControllers.js";
import { getHotelsByCity } from "../controllers/hotelControllers.js";
import { getAirportsByCity } from "../controllers/airportControllers.js";

const router = express.Router();

//  Get all countries
router.get("/", getCountries);

//  Search countries or cities
router.get("/search", searchCountries);

//  Get single country
router.get("/:code", getCountryByCode);

//  Get cities of a country
router.get("/:code/cities", getCitiesByCountry);

//  Hotels of a city
router.get("/:code/cities/:city/hotels", getHotelsByCity);

//  Flights of a city
router.get("/:code/cities/:city/flights", getFlightsByCity);

//  Airports of a city
router.get("/:code/cities/:city/airports", getAirportsByCity);

export default router;
