import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import { useFetch } from '../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'

const TicketForm = () => {

    const [priority , setPriority] = useState('low')
    const [title , setTitle] = useState("")
    const [body , setBody] = useState('')
    const [direct , setDirect] = useState(false)

    const { data, isPending, error, getNewRecipie } = useFetch(
        "http://localhost:3000/tickets",
        "POST"
      );
      const navigate = useNavigate()

    const Submit = (e)=>{
        e.preventDefault()
        getNewRecipie({
            id:uuidv4(),
            title,
            body,
            priority
        })
    }
    
    
  return (
    <div className='grid place-items-center mt-11'>
    <h1 className='text-2xl text-violet-500 font-semibold '>Create New Ticket</h1>
        <form onSubmit={Submit} >
        <div className='bg-gray-300 w-auto py-6 px-7 flex flex-col'  >
            <h3>Title:</h3>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <h3>Description:</h3>
            <input required onChange={(e) => setBody(e.target.value)} type="" placeholder="Type here" className="input input-bordered w-full " />
            <select className="select select-bordered w-full max-w-xs  mt-8 mb-8">
                <option onClick={() => setPriority('low')}>low</option>
                <option onClick={() => setPriority('medium')}>medium</option>
                <option  onClick={() => setPriority('high')}>high</option>
            </select>
            <button className='btn btn-active btn-primary' type='submit'>add ticket</button>
            </div>
        </form>
    </div>
  )
}

export default TicketForm