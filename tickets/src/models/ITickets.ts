export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface ITicketItemProps {
  ticket: ITicket;
}

export interface ITicketStore {
    tickets: ITicket[];
    sortTicketsByPrice: () => void;
    applyFilters: (filters: string[]) => void;
    usdRate: number;
    eurRate: number;
    fetchValues: () => Promise<void>;
}

export interface FilterStore {
    filters: string[]; 
    currency: string; 
    toggleFilter: (filter: string) => void; 
    selectOnlyOneFilter: (filter: string) => void;
    setCurrency: (currency: string) => void;
}

interface Valute {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface ICurrencyValues{
    USD: Valute;
    EUR: Valute;
}