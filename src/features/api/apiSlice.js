import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countryinfo-back.onrender.com",
  }),

  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/api/countries",
    }),
  }),
});

export const { useGetCountriesQuery } = apiSlice;
