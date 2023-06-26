import styles from './styles.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='/faq'><h2 className={styles.footer__text}>Вопросы-ответы</h2></Link>
      <Link href='/about-us'><h2 className={styles.footer__text}>О нас</h2></Link>
    </footer>
  );
}
