import TicketCard from './TicketCard';
import styles from './styles.module.scss';
import Movie from '@/entities/movie';

export default function TicketList({
  movies,
  enableDelete,
}: {
  movies: Movie[];
  enableDelete: boolean;
}) {
  return (
    <ul className={styles['tickets-list']}>
      {movies.map((movie) => {
        const { title, genre, id, posterUrl } = movie;
        return (
          <li key={id} className={styles['tickets-list__ticket']}>
            <TicketCard
              title={title}
              genre={genre}
              id={id}
              posterUrl={posterUrl}
              showDelete={enableDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
