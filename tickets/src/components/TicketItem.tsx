import {format} from 'date-fns';
import { ru } from 'date-fns/locale';

import Logo from '../assets/icons/logo.svg';
import { ITicketItemProps } from '../models/ITickets';


const TicketItem: React.FC<ITicketItemProps> = ({ticket}) =>  {
    const departureDate = ticket.departure_date;
    const formattedDepartureDate = format(new Date(departureDate), 'dd MMM yyyy, eeeeee', {locale: ru});

    return (
        <div className='mt-3 flex gap-[1px]'>
          <div className="flex flex-col gap-3 bg-white p-4 rounded-l-lg shadow-lg">
            <a href="#" target="_blank" className="self-center">
              <img src={Logo} alt="Airlines logo" />
            </a>
            <button className="py-1 px-4 bg-orange-primary rounded text-xs text-white leading-none">
                Купить <br/> за {ticket.price}
            </button>
          </div>

          <div className='flex bg-white p-4 rounded-r-lg shadow-lg leading-none'>
            <div className='flex flex-col'>
              <div className='text-dark-gray text-lg -mt-2'>{ticket.departure_time}</div>
              <div className='text-[8px] font-bold text-gray'>{ticket.origin}, {ticket.origin_name}</div>
              <div className='text-[8px] font-bold text-gray'>{formattedDepartureDate}</div>

            </div>
          </div>
        </div>
    )
}

export default TicketItem;