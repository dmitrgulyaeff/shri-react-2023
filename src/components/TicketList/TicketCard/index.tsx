import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import filmCover from '$/images/fallback/100x120.png';
import Link from 'next/link';
import TicketCounter from '../../TicketCounter';
import Popup from '../../Popup';
import Cross from '$/images/icons/ticketCardCross.svg';

interface TicketCardProps {
  title: string;
  genre: string;
  posterUrl?: string;
  id: string;
  showDelete: boolean;
}

export default function TicketCard({
  title,
  genre,
  id,
  posterUrl,
  showDelete,
}: TicketCardProps) {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => {
    setOpen(true);
  };

  return (
    <article className={styles['ticket']}>
      <Image
        className={styles['ticket__poster']}
        src={posterUrl || filmCover}
        width={100}
        height={120}
        alt="film cover"
      />
      <div className={styles['ticket__info']}>
        <Link href={`/movie/${id}`}>
          <h2 className={styles['ticket__info-name']}>{title}</h2>
        </Link>
        <span className={styles['ticket__info-genre']}>{genre}</span>
      </div>
      <TicketCounter id={id} />
      {showDelete && (
        <button
          className={styles['ticket__delete']}
          type="button"
          title="Delete"
          onClick={handleDeleteClick}
        >
          <Cross />
        </button>
      )}
      {open && <Popup id={id} onClose={() => setOpen(false)} />}
    </article>
  );
}
