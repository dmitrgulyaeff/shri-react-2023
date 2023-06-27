'use client';

import styles from './styles.module.scss';
import classnames from 'classnames';
import Link from 'next/link';
import { selectTotalTickets } from '@/redux/features/cart/selector';
import { useSelector } from 'react-redux';
import Bag from '$/images/icons/headerBag.svg';

export default function Header() {
  const totalTickets = useSelector((state) => selectTotalTickets(state));
  return (
    <header className={classnames(styles.header)}>
      <Link href="/">
        <h1 className={styles.header__logo}>Билетопоиск</h1>
      </Link>
      <Link href="/basket">
        <div className={styles.basket}>
          {Boolean(totalTickets) && (
            <span className={styles.basket__count}>{totalTickets}</span>
          )}
          <Bag />
        </div>
      </Link>
    </header>
  );
}
