import React from "react";
import data from '../tickets.json';
import TicketItem from '../components/TicketItem';
import { ITicket } from "../models/ITickets";


// interface TicketItemProps {
//   ticket: Ticket;
// }

const TicketsList: React.FC = () => {
  return (
    <>
      {data.tickets.map((ticket: ITicket, index: number) => (
          <TicketItem key={index} ticket={ticket}/>
      ))}
    </>
  )
};

export default TicketsList;