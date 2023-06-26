"use client";

import { useGetMovieQuery, useGetMoviesQuery } from "@/redux/services/movieApi";
import { useState } from "react";


const Film = ({ filmId }) => {
  const { data, isLoading, error } = useGetMovieQuery(filmId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return <div>Active: {data.title}</div>;
};

const Films = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  const [currentFilmId, setCurrentFilmId] = useState();
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }
  return (
    <div>
      {data.map(({ id, title }) => (
        <button key={id} onClick={() => setCurrentFilmId(id)}>
          {title}
        </button>
      ))}
      {currentFilmId && <Film filmId={currentFilmId} />}
    </div>
  );
};

export default function Redux() {
  return (
    <div>
      <Films />
    </div>
  );
}