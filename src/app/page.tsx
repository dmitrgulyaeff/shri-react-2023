import FiltersPanel from "@/components/FiltersPanel";
import TicketCard from "@/components/TicketCard";
import styles from './styles.module.scss'
export default function Home() {
  return (
    <div className={styles['home']}>
      <FiltersPanel />
      <div className={styles['home__tickets']}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}
