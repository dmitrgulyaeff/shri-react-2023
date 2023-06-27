"use client";

import TicketList from '@/components/TicketList';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import Movie from '@/entities/movie';
import { selectCartModule } from '@/redux/features/cart/selector';
import { useGetMoviesQuery } from '@/redux/services/movieApi';

export default function Basket() {
  const cart = useSelector((state) => selectCartModule(state));
  const { data: movies, isLoading, error } = useGetMoviesQuery(null);

  if (isLoading) {return (<div>Loading...</div>)};
  if (!movies || error) {return <div>404</div>}
  const tickets = movies.filter((movie: Movie) => {
    return movie.id in cart;
  });

  return (
    <div className={styles['ticket-basket']}>
      {tickets.length !== 0 ? <TicketList enableDelete={true} movies={tickets} /> : <div>
        Корзина пуста</div>}
    </div>
  );
}
