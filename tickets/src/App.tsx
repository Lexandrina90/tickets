import './App.css'
import TicketsList from './components/TicketsList';
import Filters from './components/Filters';
import PlaneLogo from './assets/icons/plane.png'


function App() {

  return (
    <div className='flex flex-col'>
         <img src={PlaneLogo} className='w-14 h-14 mb-8 self-center'/>
         <div className='flex gap-4'>
            <Filters />
            <TicketsList />
        </div>
    </div>
   
  )
}

export default App
