// import { useState } from 'react'
import './App.css'
import TicketsList from './components/TicketsList';
import Filters from './components/Filters';

function App() {

  return (
    <div className='flex'>
      <Filters />
      <TicketsList />
    </div>
  )
}

export default App
