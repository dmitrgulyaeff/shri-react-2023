import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getCinemas: builder.query({ query: () => "cinemas" }),
    getCinemaById: builder.query({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
    getMovieById: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery, useGetCinemasQuery, useGetCinemaByIdQuery } = movieApi;
