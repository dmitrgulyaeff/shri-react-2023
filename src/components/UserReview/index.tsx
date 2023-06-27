import Image from 'next/image';
import styles from './styles.module.scss';

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  photoUrl?: string;
}
export default function UserReview({
  id,
  name,
  text,
  rating,
  photoUrl,
}: Review) {
  return (
    <article className={styles['user__review']} key={id}>
      <Image
        className={styles['user__photo']}
        src={photoUrl ? photoUrl : '/images/icons/unknownUser.svg'}
        width={100}
        height={100}
        alt="user photo"
      />
      <h3 className={styles['user__name']}>{name}</h3>
      <span className={styles['user__score']}>Оценка:</span>
      <span className={styles['user__score-value']}>{rating}</span>
      <span className={styles['user__comment']}>{text}</span>
    </article>
  );
}
