import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__text}>Вопросы-ответы</h2>
      <h2 className={styles.footer__text}>О нас</h2>
    </footer>
  );
}
