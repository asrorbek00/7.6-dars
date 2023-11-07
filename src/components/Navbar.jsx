import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
       <div className='flex gap-4 px-44 mt-10 '>
       <img src="./public/dojo-logo.webp" alt="" className='mb-2' />
        <h1 className='text-xl text-blue-600 font-extrabold'>Dojo Helpdesk</h1>
        <Link to={"/ "} className='text-xl font-md text-gray-500 hover:text-black'>Dashboard</Link>
        <Link to={"/tickets"} className='text-xl font-md text-gray-500 hover:text-black '>Tickets</Link>
       </div>
       <hr className=' border-[1.5px] w-auto mx-32' />
    </div>
    </>
  )
}

export default Navbar