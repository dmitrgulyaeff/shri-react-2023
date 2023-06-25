import FilmInfo from '@/components/FilmInfo';
import UserReview from '@/components/UserReview';
import styles from './styles.module.scss'
export default function Movie() {
  return (
    <div className={styles['movie']}>
      <FilmInfo />
      <UserReview />
      <UserReview />
    </div>
  );
}
