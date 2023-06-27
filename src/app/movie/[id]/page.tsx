"use client";
import FilmInfo from '@/components/FilmInfo';
import UserReview from '@/components/UserReview';
import styles from './styles.module.scss'
import { useGetReviewsByMovieIdQuery, useGetMovieByIdQuery } from '@/redux/services/movieApi';
import { Review } from '@/components/UserReview';
interface MovieProps {
  params: {
    id: string;
  };
}

export default function Movie(props: MovieProps) {
  const resReview = useGetReviewsByMovieIdQuery(props.params.id);
  const resMovie = useGetMovieByIdQuery(props.params.id);

  return (
    <div className={styles['movie']}>
      {resMovie.isSuccess ? <FilmInfo {...resMovie.data} /> : <div>Loading...</div>}
      {resReview.isSuccess ? resReview.data.map((review:Review) => <UserReview {...review} key={review.id} />) : <div>Loading...</div>}
    </div>
  );
}
