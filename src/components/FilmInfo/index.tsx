import styles from './styles.module.scss';
import Image from 'next/image';
import Movie from '@/entities/movie';
import TicketCounter from '../TicketCounter';

export default function FilmInfo(movie: Movie) {
  return (
    <div className={styles['film']}>
      <Image
        className={styles['film__poster']}
        src={movie.posterUrl}
        width={400}
        height={500}
        alt="film cover"
      />
      <div>
        <div className={styles['film__counter-wrapper']}>
          <h1 className={styles['film__title']}>
            {movie.title}
          </h1>
          <TicketCounter id={movie.id} />
        </div>


        <ul className={styles['film__info']}>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Жанр</span>
            <span className={styles['film__info-col-value']}>
              {movie.genre}
            </span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Год выпуска</span>
            <span className={styles['film__info-col-value']}>
              {movie.releaseYear}
            </span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Рейтинг</span>
            <span className={styles['film__info-col-value']}>
              {movie.rating}
            </span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Режиссер</span>
            <span className={styles['film__info-col-value']}>
              {movie.director}
            </span>
          </li>
        </ul>
        <h2 className={styles['film__description']}>Описание</h2>
        <span className={styles['film__description-text']}>
          {movie.description}
        </span>
      </div>
    </div>
  );
}
