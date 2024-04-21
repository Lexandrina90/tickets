import React from 'react';
import {format, parse} from 'date-fns';
import { ru } from 'date-fns/locale';

import useFilterStore from '../store/filter';
import {ITicketItemProps} from '../models/ITickets';
import convertPrice from '../helpers/convertPrice';

import TkLogo from '../assets/icons/tk-logo.svg';
import S7Logo from '../assets/icons/s7-logo.svg';
import SuLogo from '../assets/icons/su-logo.svg';
import BaLogo from '../assets/icons/ba-logo.svg';
import PlaneIcon from './icons/PlaneIcon';

const TicketItem: React.FC<ITicketItemProps> = ({ticket}) =>  {
    const currency = useFilterStore((state) => state.currency);

    const Logo = 
      ticket.carrier === 'TK' ? TkLogo : 
      ticket.carrier === 'S7' ? S7Logo : 
      ticket.carrier === 'SU' ? SuLogo :
      BaLogo;  
    const departureDate = ticket.departure_date;
    const arrivalDate = ticket.arrival_date;

    const formattedDate = (date: string) => { 
      const parsedDate = parse(date, 'dd.MM.yy', new Date(), { locale: ru });

      return format(parsedDate, 'dd MMM yyyy, eeeeee', { locale: ru });
    }


    const transferText =  
      ticket.stops === 1 ? 'пересадка' :
      ticket.stops === 0 ? 'без пересадок' :
      'пересадки';

    const convertedPrice = convertPrice(ticket.price, currency);

    return (
        <div className='mb-3 flex gap-[1px]'>
          <div className="flex flex-col gap-3 bg-white p-4 rounded-l shadow-lg">
            <a href="#" target="_blank" className="self-center">
              <img src={Logo} alt={ticket.carrier} />
            </a>
            <button className="py-1 px-4 bg-orange-primary mt-[6px] rounded text-sm text-white leading-tight w-32 :after-[' \20BD'] hover:bg-light-orange">
                Купить <br/> за {convertedPrice} {currency === 'usd' ? '$' : currency === 'eur' ? '€' : '₽'}
            </button>
          </div>

          <div className='flex bg-white p-4 rounded-r shadow-lg leading-none w-full justify-between'>
            <div className='flex flex-col'>
              <div className='text-dark-gray text-2xl -mt-1 text-left'>{ticket.departure_time}</div>
              <div className='text-xs font-bold text-dark-gray w-full text-left'>{ticket.origin}, {ticket.origin_name}</div>
              <div className='text-xs text-gray leading-none text-left'>{formattedDate(departureDate)}</div>
            </div>
            <div className='flex flex-col w-32'>
              <span className='text-xs text-gray uppercase justify-self-center'>
                {ticket.stops !== 0 && `${ticket.stops}`} {transferText}
              </span>
              <div className='relative'>
                <div className='border-b-[1px] border-light-gray-2 w-full absolute -left-[5px] top-1'></div>
                <PlaneIcon className='w-3 h-2 text-light-gray-2 absolute top-0 -right-[5.5px]'/>
              </div>
            </div>
            <div className='flex flex-col ml-3'>
              <div className='text-dark-gray text-2xl -mt-1 text-right'>{ticket.arrival_time}</div>
              <div className='text-xs font-bold text-dark-gray text-right'>{ticket.destination_name}, {ticket.destination}</div>
              <div className='text-xs text-gray leading-none text-right'>{formattedDate(arrivalDate)}</div>
            </div>
          </div>
        </div>
    )
}

export default TicketItem;