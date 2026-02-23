// src/slices/countryApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApiSlice = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL + "/api/countries" }),

  endpoints: (builder) => ({

    // 🔍 Search country or city
    searchCountries: builder.query({
      query: (search) =>
        search?.trim()
          ? `/search?keyword=${encodeURIComponent(search)}`
          : "/",
    }),

    // 🌍 Get all countries
    getAllCountries: builder.query({
      query: () => "/",
    }),

    // 🇮🇳 Get single country by code
    getCountryByCode: builder.query({
      query: (code) => `/${code}`,
    }),

    // 🏙️ Get cities inside a country
    getCitiesByCountry: builder.query({
      query: (code) => `/${code}/cities`,
    }),

    // 🏨 Hotels in city
    getHotelsByCity: builder.query({
      query: ({ code, city }) => ({
        url: `/${code}/cities/${encodeURIComponent(city)}/hotels`,
      }),
    }),

    // ✈ Flights in city
    getFlightsByCity: builder.query({
      query: ({ code, city }) => ({
        url: `/${code}/cities/${encodeURIComponent(city)}/flights`,
      }),
    }),

    // 🛫 Airports in city (safe encoding + params support)
    getAirportsByCity: builder.query({
      query: ({ code, city }) => ({
        url: `/${code}/cities/${encodeURIComponent(city)}/airports`,
      }),
    }),

  }),
});

export const {
  useSearchCountriesQuery,
  useGetAllCountriesQuery,
  useGetCountryByCodeQuery,
  useGetCitiesByCountryQuery,
  useGetHotelsByCityQuery,
  useGetFlightsByCityQuery,
  useGetAirportsByCityQuery, // ✅ Ready to use
} = countryApiSlice;
