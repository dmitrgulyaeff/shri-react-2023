import styles from './styles.module.scss';
import Dropdown from '../Dropdown';

export default function FiltersPanel() {
  return (
    
    <div className={styles['filters-panel']}
    >
      <h2 className={styles['filters-panel__head']}>Фильтр поиска</h2>
      <Dropdown label='Жанр' defaultText='Выберите жанр' options={["Фэнтези", "Боевик", "Драма"]}/>
      <Dropdown label='Кинотеатр' defaultText='Выберите кинотеатр' options={['Альянс', "Спутник", "Луч"]}/>
    </div>
  );
}
