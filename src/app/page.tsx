'use client';
import { use, useEffect, useState } from 'react';
import {
  useGetCinemasQuery,
  useGetMoviesQuery,
  useGetCinemaByIdQuery,
} from '@/redux/services/movieApi';
import FiltersPanel from '@/components/FiltersPanel';
import TicketList from '@/components/TicketList';
import styles from './styles.module.scss';
import Movie from '@/entities/movie';
import Cinema from '@/entities/cinema';

export default function Home() {
  // filter params
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [cinema, setCinema] = useState<string>('');

  // { data, isLoading, error }
  const resMovies = useGetMoviesQuery(null);
  const resCinemas = useGetCinemasQuery(null);
  const resCinemaById = useGetCinemaByIdQuery(cinema);

  if (resMovies.isLoading || resCinemas.isLoading || resCinemaById.isLoading) {
    return <div>Loading...</div>;
  }

  let movies: Movie[] = resMovies.data;
  const cinemas: Cinema[] = resCinemas.data;
  // TODO: 404
  const genreOptions = Array.from(new Set(movies.map((movie) => movie.genre))).map((item) => ({ name: item }));
  const cinemaOptions = cinemas.map((cinema) => {return {name: cinema.name, id: cinema.id}});
  if (cinema) {
    movies = resCinemaById.data;
  }
  if (genre) {
    movies = movies.filter((movie: Movie) => movie.genre === genre);
  }
  if (title) {
    movies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <div className={styles['home']}>
      <FiltersPanel
        inputOnChange={setTitle}
        genreOnChange={setGenre}
        genreOptions={genreOptions}
        cinemaOnChange={setCinema}
        cinemaOptions={cinemaOptions}
      />
      <TicketList enableDelete={false} movies={movies} />
    </div>
  );
}
