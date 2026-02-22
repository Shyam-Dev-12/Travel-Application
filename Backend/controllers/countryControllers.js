import Country from "../models/countryModel.js";

// Get all countries
export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one country by code
export const getCountryByCode = async (req, res) => {
  try {
    const code = req.params.code.toUpperCase();
    const country = await Country.findOne({ code });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search countries by keyword
export const searchCountries = async (req, res) => {
  try {
    const raw = req.query.keyword;
    const keyword = raw?.trim();
    if (!keyword) return res.json([]);

    // Quick detection: treat 2-3 letter alpha input as a country CODE lookup (exact)
    if (/^[A-Za-z]{2,3}$/.test(keyword)) {
      const code = keyword.toUpperCase();
      const country = await Country.findOne({ code });
      return res.json(country ? [country] : []);
    }

    // If input looks like a full country name or phrase — try country-name starts-with first
    // This avoids substring matches like "in" matching "Austria"
    const countryNameRegex = new RegExp(`^${escapeRegExp(keyword)}`, "i");
    const countriesByName = await Country.find({ country: countryNameRegex });
    if (countriesByName.length > 0) return res.json(countriesByName);

    // Otherwise try city search — return only the matched city entries (not all cities)
    const cityRegex = new RegExp(escapeRegExp(keyword), "i");

    // Use aggregation to filter the cities array to only matching cities
    const agg = await Country.aggregate([
      { $match: { "cities.name": { $regex: cityRegex } } },
      {
        $project: {
          code: 1,
          country: 1,
          cities: {
            $filter: {
              input: "$cities",
              as: "city",
              cond: { $regexMatch: { input: "$$city.name", regex: cityRegex } }
            }
          }
        }
      }
    ]);

    return res.json(agg);
  } catch (error) {
    console.error("Search error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// small helper to escape user input for regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// GET /api/countries/:code/cities
export const getCitiesByCountry = async (req, res) => {
  try {
    const code = req.params.code.toUpperCase();

    const country = await Country.findOne({ code });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    // Return only the list of cities
    res.json(country.cities || []);
  } catch (error) {
    console.error("Cities fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


