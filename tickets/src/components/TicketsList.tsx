import React from "react";
import TicketItem from '../components/TicketItem';
import {ITicket} from "../models/ITickets";
import useTicketStore from '../store/index';
import useFilterStore from "../store/filter";

const TicketsList: React.FC = () => {
const tickets = useTicketStore(state => state.tickets);
const filters = useFilterStore(state => state.filters);
const applyFilters = useTicketStore(state => state.applyFilters);
const fetchCurrencyValues = useTicketStore(state => state.fetchValues);

React.useEffect(() => {
    fetchCurrencyValues();
});

React.useEffect(() => {
    applyFilters(filters);
}, [filters, applyFilters]);

React.useEffect(() => {
fetchCurrencyValues()
})

  return (
    <div className="flex flex-col min-w-max">
      {tickets.map((ticket: ITicket, index: number) => (
          <TicketItem 
            key={index} 
            ticket={ticket} 
        />
      ))}
    </div>
  )
};

export default TicketsList;