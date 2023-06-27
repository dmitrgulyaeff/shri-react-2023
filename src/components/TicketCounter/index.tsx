'use client';

import { cartActions } from '@/redux/features/cart';
import { selectProductAmount } from '@/redux/features/cart/selector';
import { useDispatch, useSelector } from 'react-redux';
import Minus from '$/images/icons/counterMinus.svg';
import Plus from '$/images/icons/counterPlus.svg';
import styles from './styles.module.scss';

interface TicketCounterProps {
  id: string;
}

export default function TicketCounter({ id }: TicketCounterProps) {
  const dispatch = useDispatch();

  const Product = () => {
    const amount = useSelector((state) => selectProductAmount(state, id));
    return <span className={styles['ticket__counter-count']}>{amount}</span>;
  };

  return (
    <div className={styles['ticket__counter']}>
      <button
        className={styles['ticket__counter-minus']}
        type="button"
        title="Minus"
        onClick={() => dispatch(cartActions.decrement(id))}
      >
        <Minus />
      </button>
      <Product />
      <button
        className={styles['ticket__counter-plus']}
        type="button"
        title="Plus"
        onClick={() => dispatch(cartActions.increment(id))}
      >
        <Plus />
      </button>
    </div>
  );
}
