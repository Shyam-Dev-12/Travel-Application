import { countryData } from "../data/countryData.js"; 

export const getFlightsByCity = (req, res) => {
  try {
    const { code, city } = req.params;

    // Find country
    const country = countryData.find(c => c.code === code.toUpperCase());
    if (!country) return res.status(404).json({ message: "Country not found" });

    // Find city
    const cityData = country.cities.find(c => c.name.toLowerCase() === city.toLowerCase());
    if (!cityData) return res.status(404).json({ message: "City not found" });

    // Find Flights 
    const flights = cityData.flights.map(f => ({
      airline: f.airline,
      airlineCode: f.airlineCode,
      flightNumber: f.flightNumber,
      dep: f.dep,
      arr: f.arr,
      price: f.price,
      fromAirport: f.fromAirport
    }));

    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch flights" });
  }
};
