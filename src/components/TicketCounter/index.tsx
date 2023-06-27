'use client';

import { cartActions } from '@/redux/features/cart';
import { selectProductAmount } from '@/redux/features/cart/selector';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalTickets } from '@/redux/features/cart/selector';
import Minus from '$/images/icons/counterMinus.svg';
import MinusDisabled from '$/images/icons/counterMinusDisabled.svg';
import Plus from '$/images/icons/counterPlus.svg';
import PlusDisabled from '$/images/icons/counterPlusDisabled.svg';
import styles from './styles.module.scss';

interface TicketCounterProps {
  id: string;
}

export default function TicketCounter({ id }: TicketCounterProps) {
  const dispatch = useDispatch();
  const totalTickets = useSelector((state) => selectTotalTickets(state));
  const amount = useSelector((state) => selectProductAmount(state, id));

  return (
    <div className={styles['ticket__counter']}>
      <button
        className={styles['ticket__counter-minus']}
        type="button"
        title="Minus"
        onClick={() => dispatch(cartActions.decrement(id))}
      >
  
      {amount === 0 ? <MinusDisabled /> : <Minus /> }
      </button>
      <span className={styles['ticket__counter-count']}>{amount}</span>
      <button
        className={styles['ticket__counter-plus']}
        type="button"
        title="Plus"
        onClick={() => dispatch(cartActions.increment(id))}
      >
      {totalTickets === 30 ? <PlusDisabled /> : <Plus /> }

        
      </button>
    </div>
  );
}
