import styles from './styles.module.scss';
import Image from 'next/image';
import filmCover from '$/images/The_Lord_of_the_Rings._The_Fellowship_of_the_Ring_—_movie.jpg';

export default function FilmInfo() {
  return (
    <div className={styles['film']}>
      <Image
        className={styles['film__poster']}
        src={filmCover}
        width={400}
        height={500}
        alt="film cover"
      />
      <div>
        <h1 className={styles['film__name']}>
          Властелин колец: Братство кольца
        </h1>
        <ul className={styles['film__info']}>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Жанр</span>
            <span className={styles['film__info-col-value']}>Фэнтези</span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Год выпуска</span>
            <span className={styles['film__info-col-value']}>2001</span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Рейтинг</span>
            <span className={styles['film__info-col-value']}>8</span>
          </li>
          <li className={styles['film__info-row']}>
            <span className={styles['film__info-col-header']}>Режиссер</span>
            <span className={styles['film__info-col-value']}>
              Питер Джексон
            </span>
          </li>
        </ul>
        <h2 className={styles['film__description']}>Описание</h2>
        <span className={styles['film__description-text']}>
          Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся
          не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную
          власть, но был обязан служить злу. Тихая деревня, где живут хоббиты.
          Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу,
          волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо
          нашел много лет назад. Это кольцо принадлежало когда-то темному
          властителю Средиземья Саурону, и оно дает большую власть своему
          обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем.
          Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой
          Горе и уничтожил.
        </span>
      </div>
    </div>
  );
}
