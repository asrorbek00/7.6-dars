import React from 'react'
import { useFetch } from '../hooks/UseFetch';
import { useParams } from 'react-router-dom';

function Ticket() {
    const { id } = useParams();

    const url = "http://localhost:3000/tickets/" + id;
    const { data: ticket, isPending, error } = useFetch(url);
    
  return (
    <div className='mx-36 mt-10'>
    {ticket && (
         <div key={id} className='bg-zinc-300 py-3 px-3 pb-6 rounded-md mb-10 relative'>
                <h3 className='text-lg font-semibold mb-5'>{ticket.title}</h3>
                <p className='text-gray-500 text-md'>{ticket.user_email}</p>
                <p className='text-gray-500'>{ticket.body}</p>
                <button className='btn btn-sm ml-20 absolute bottom-0 right-0'>{ticket.priority}</button>
            </div> 
    
  )}
  </div>
  )
}

export default Ticket