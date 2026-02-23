// src/redux/apiSlice.jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    // ✅ Remove /api because your Railway backend already serves routes at root
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include', // if your backend uses cookies; otherwise can remove
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});