import { countryData } from "../data/countryData.js";

export const getAirportsByCity = (req, res) => {
  try {
    const { code, city } = req.params;

    const country = countryData.find(
      (c) => c.code === code.toUpperCase()
    );
    if (!country)
      return res.status(404).json({ message: "Country not found" });

    const cityData = country.cities.find(
      (c) => c.name.toLowerCase() === city.toLowerCase()
    );
    if (!cityData)
      return res.status(404).json({ message: "City not found" });

    const airport = cityData.airport;

    if (!airport)
      return res.status(404).json({ message: "No airport found" });

    const airports = [
      {
        name: airport,
        code: airport.match(/\((.*?)\)/)?.[1] || "N/A",
        type: "International",
        terminal: "T1"
      }
    ];

    res.json(airports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch airports" });
  }
};
