import { countryData } from "../data/countryData.js"; 

export const getHotelsByCity = (req, res) => {
  try {
    const { code, city } = req.params;

    // Find country
    const country = countryData.find(c => c.code === code.toUpperCase());
    if (!country) return res.status(404).json({ message: "Country not found" });

    // Find city
    const cityData = country.cities.find(c => c.name.toLowerCase() === city.toLowerCase());
    if (!cityData) return res.status(404).json({ message: "City not found" });

    // Find Hotels 
    const hotels = cityData.hotels.map(h => ({
      name: h.name,
      price: h.price
    }));

    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
};
