'use client';
import styles from './styles.module.scss';
import { cartActions } from '@/redux/features/cart';
import { useDispatch } from 'react-redux';
import Cross from '$/images/icons/popupCross.svg';
import Yes from '$/images/icons/popupYes.svg';
import No from '$/images/icons/popupNo.svg';

export default function Popup({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <div className={styles['popup']}>
      <div className={styles['popup__card']}>
        <h2 className={styles['popup__card-head']}>Удаление билета</h2>
        <button
          className={styles['popup__card-button-close']}
          type="button"
          title="Закрыть"
          onClick={onClose}
        >
          <Cross />
        </button>
        <span className={styles['popup__card-text']}>
          Вы уверены, что хотите удалить билет?
        </span>
        <button
          className={styles['popup__card-button-yes']}
          type="button"
          title="Да"
          onClick={() => {
            dispatch(cartActions.reset(id));
            onClose();
          }}
        >
          <Yes />
        </button>
        <button
          className={styles['popup__card-button-no']}
          type="button"
          title="Нет"
          onClick={onClose}
        >
          <No />
        </button>
      </div>
    </div>
  );
}
