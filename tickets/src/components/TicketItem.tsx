import {format, parse} from 'date-fns';
import { ru } from 'date-fns/locale';

import TkLogo from '../assets/icons/tk-logo.svg';
import S7Logo from '../assets/icons/s7-logo.svg';
import SuLogo from '../assets/icons/su-logo.svg';
import BaLogo from '../assets/icons/ba-logo.svg';
import { ITicketItemProps } from '../models/ITickets';
import PlaneIcon from './icons/PlaneIcon';

const TicketItem: React.FC<ITicketItemProps> = ({ticket}) =>  {
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

    return (
        <div className='mt-3 flex gap-[1px]'>
          <div className="flex flex-col gap-3 bg-white p-4 rounded-l shadow-lg">
            <a href="#" target="_blank" className="self-center">
              <img src={Logo} alt={ticket.carrier} />
            </a>
            <button className="py-1 px-4 bg-orange-primary rounded text-[10px] text-white leading-tight w-[84px] :after-[' \20BD']">
                Купить <br/> за {ticket.price}
            </button>
          </div>

          <div className='flex bg-white p-4 rounded-r shadow-lg leading-none'>
            <div className='flex flex-col'>
              <div className='text-dark-gray text-lg -mt-2'>{ticket.departure_time}</div>
              <div className='text-[8px] font-bold text-dark-gray'>{ticket.origin}, {ticket.origin_name}</div>
              <div className='text-[8px] mt-1 text-gray'>{formattedDate(departureDate)}</div>
            </div>
            <div className='flex flex-col w-[70px]'>
              <span className='text-[6px] text-gray uppercase justify-self-center'>
                {ticket.stops !== 0 && `${ticket.stops}`} {transferText}
              </span>
              <div className='relative'>
                <div className='border-b-[1px] border-light-gray-2 w-full absolute -left-[5px] top-1'></div>
                <PlaneIcon className='w-3 h-2 text-light-gray-2 absolute top-0 -right-[5.5px]'/>
              </div>
            </div>
            <div className='flex flex-col ml-3'>
              <div className='text-dark-gray text-lg -mt-2'>{ticket.arrival_time}</div>
              <div className='text-[8px] font-bold text-dark-gray'>{ticket.destination_name}, {ticket.destination}</div>
              <div className='text-[8px] mt-1 text-gray'>{formattedDate(arrivalDate)}</div>
            </div>
          </div>
        </div>
    )
}

export default TicketItem;