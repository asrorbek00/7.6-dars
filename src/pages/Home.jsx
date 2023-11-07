import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mx-36 mt-10'>
        <div>
            <h1 className='text-2xl text-blue-600 font-bold mb-8'>Dashboard</h1>
            <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque illo earum. Corrupti sed ratione, quidem commodi quod praesentium reprehenderit quas quos provident vero qui, laborum libero? Eaque recusandae itaque, harum unde mollitia dicta. Animi excepturi in facere iusto, </p>
        </div>
        <div className='grid place-items-center  mt-10'>
        <Link to={"tickets"} className='btn btn-primary font-normal'>View Tickets</Link>
        </div>
        <div >
            <h1 className='text-2xl text-blue-600 font-bold mb-8 mt-10' >Company Updates</h1>
            <div className='bg-zinc-300 py-3 px-3 pb-6 rounded-md mb-6'>
                <h3 className='text-lg font-semibold mb-5'>New member of the web dev team...</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
            </div>
            <div className='bg-zinc-300 py-3 px-3 pb-6 rounded-md mb-10'>
                <h3 className='text-lg font-semibold mb-5'>New Website Live</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente autem, provident itaque dignissimos, fuga laboriosam, obcaecati vero </p>
            </div> 
        </div>
    </div>
  )
}

export default Home