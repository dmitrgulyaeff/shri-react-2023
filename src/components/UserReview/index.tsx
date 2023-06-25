import Image from 'next/image';
import styles from './styles.module.scss';
import filmCover from '$/images/The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_—_movie.jpg';

export default function UserReview() {
  return (
    <div className={styles['user__review']}>
      <Image
        className={styles['user__photo']}
        src={filmCover}
        width={100}
        height={100}
        alt="user photo"
      />
      <h3 className={styles['user__name']}>Роман</h3>
      <span className={styles['user__score']}>Оценка:</span>
      <span className={styles['user__score-value']}>8</span>
      <span className={styles['user__comment']}>
        По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это
        было около четырех лет назад, но тот момент я вспоминаю и по сей день.
        До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в
        целом, однако стоило мне посмотреть первые десять минут фильма и
        оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный
        мир, где добро борется со злом, где зеленые рощи перемежаются с
        поросшими мхом статуями и древними развалинами, в мир, где пробираясь
        лесною тропой можно встретить остроухих неувядающих эльфов или мерзких
        орков – кому как повезет...
      </span>
    </div>
  );
}
