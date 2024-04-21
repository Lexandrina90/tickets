import {create} from 'zustand';

import data from '../tickets.json';
import type {ITicketStore, ITicket} from '../models/ITickets';
import { getStopsText } from "../helpers/utils";
import { fetchCurrencyValues } from '../helpers/currencyApi';

const useTicketStore = create<ITicketStore>((set) => ({
   tickets: data.tickets,
   usdRate: 0,
   eurRate: 0,

   sortTicketsByPrice: () => {
    const sortedTickets = [...data.tickets].sort((a: ITicket, b: ITicket) => a.price - b.price);
    set({ tickets: sortedTickets });
  },

  applyFilters: (filters: string[]) => {
    let filteredTickets = [...data.tickets];
    filteredTickets.sort((a: ITicket, b: ITicket) => a.price - b.price);

    if (filters.includes("Все") || !filters?.length) {
        set({ tickets: filteredTickets });

        return;
    }

    filteredTickets = filteredTickets.filter(ticket => {
        const stopsText = getStopsText(ticket.stops);

        return filters.includes(stopsText);
    });
  
    set({ tickets: filteredTickets });
    },

    fetchValues: async():Promise<void> => {
        try {
            const { USD, EUR } = await fetchCurrencyValues();
            set({ usdRate: parseFloat(USD.Value.toString().replace(',', '.')) }); 
            set({ eurRate: parseFloat(EUR.Value.toString().replace(',', '.')) }); 
        } catch (error) {
            console.error('Произошла ошибка при загрузке валюты:', error);
        }
    }
}));
  
  export default useTicketStore;