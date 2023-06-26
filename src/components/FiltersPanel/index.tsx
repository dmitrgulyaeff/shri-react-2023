"use client"
import styles from './styles.module.scss';
import Dropdown from '../Dropdown';
import Input from '../Input';

export default function FiltersPanel() {
  return (
    
    <div className={styles['filters-panel']}
    >
      <h2 className={styles['filters-panel__head']}>Фильтр поиска</h2>
      <Input placeholder='input' onChange={(str) => {
        console.log(str)
      }} label='Название' />
      <Dropdown label='Жанр' defaultText='Выберите жанр' options={["Фэнтези", "Боевик", "Драма"]} onChange={console.log}/>
      <Dropdown label='Кинотеатр' defaultText='Выберите кинотеатр' options={['Альянс', "Спутник", "Луч"]} onChange={console.log}/>
    </div>
  );
}
