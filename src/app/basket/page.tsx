import TicketCard from "@/components/TicketCard"
import styles from './styles.module.scss'

export default function Basket () {
  return (
    <div style={{padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
  )
}