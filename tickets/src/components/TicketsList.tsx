import React from "react";
import data from '../tickets.json';
import TicketItem from '../components/TicketItem';
import { ITicket } from "../models/ITickets";


// interface TicketItemProps {
//   ticket: Ticket;
// }

const TicketsList: React.FC = () => {
  return (
    <div className="flex flex-col">
      {data.tickets.map((ticket: ITicket, index: number) => (
          <TicketItem key={index} ticket={ticket}/>
      ))}
    </div>
  )
};

export default TicketsList;