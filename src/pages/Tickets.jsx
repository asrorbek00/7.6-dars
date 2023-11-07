import React, { useState } from 'react'
import { useFetch } from '../hooks/UseFetch';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const [url, setUrl] = useState("http://localhost:3000/tickets");
  const { data: tickets, isPending, error } = useFetch(url);
  return (
    <>
    <div className='mx-36 mt-10'>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-2xl text-blue-600 font-bold mb-2' >Tickets</h1>
                <p className='text-gray-500'>Currently open tickets..</p>
            </div>
            <Link to={"create"} className='btn btn-active btn-primary rounded-sm bg-violet-700 hover:bg-violet-600'>New Ticket</Link>
        </div>
         { tickets &&  tickets.map((ticket) =>{
          const {id , title, body, priority , user_email} = ticket

          return(
            <Link to={`ticket/${id}`}>
            <li key={id}>
            <div  className='bg-zinc-300 py-3 px-3 pb-6 rounded-md mb-10 cursor-pointer relative mt-12'>
                <h3 className='text-lg font-semibold mb-5'>{title}</h3>
                <p className='text-gray-500'>{body.substring(0,200)}</p>
                <button className='btn btn-sm ml-20 absolute bottom-0 right-0' >{priority} priority</button>
            </div> 
            </li>
            </Link> 
          )
         })}
            
    </div>
    </>
  )
}

export default Tickets