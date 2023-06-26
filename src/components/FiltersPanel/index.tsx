'use client';
import styles from './styles.module.scss';
import Dropdown from '../Dropdown';
import Input from '../Input';

export default function FiltersPanel({
  inputOnChange,
  genreOnChange,
  genreOptions,
  cinemaOnChange,
  cinemaOptions,
}: {
  inputOnChange: (value: string) => void;
  genreOnChange: (value: string) => void;
  cinemaOnChange: (value: string) => void;
  genreOptions: string[];
  cinemaOptions: string[];

}) {
  return (
    <div className={styles['filters-panel']}>
      <h2 className={styles['filters-panel__head']}>Фильтр поиска</h2>
      <Input placeholder="input" onChange={inputOnChange} label="Название" />
      <Dropdown
        label="Жанр"
        defaultText="Выберите жанр"
        options={genreOptions}
        onChange={genreOnChange}
      />
      <Dropdown
        label="Кинотеатр"
        defaultText="Выберите кинотеатр"
        options={cinemaOptions}
        onChange={cinemaOnChange}
      />
    </div>
  );
}
2;
