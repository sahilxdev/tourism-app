import React from 'react'
import { ClockIcon, FerryIcon } from '../assets/Icons'

const FerryCard = ({From,To}) => {
  return (
    <div >
        <div >
            <h1 className='text-[25px] font-medium flex gap-1'>
                <span className='text-3xl  text-pink-400' >₹</span>13
            </h1>
            <div className='flex text-xl justify-between font-medium py-2'>
                <h2 className=''>Wed Dec 8</h2>
                <h2 className='flex gap-2'><span><ClockIcon/></span> 20 min</h2>
            </div>
            <div className='flex justify-between font-medium text-4xl items-center'>
                <span>{From}</span> 
                <p className="w-20 h-3  border-gray-600 border-b-4 ml-0"></p>
                <div className='text-4xl'><FerryIcon/></div>
                <p className="w-20 h-3  border-gray-600 border-b-4 ml-0"></p>
                 <span>{To}</span>
                 
            </div>
        </div>
    </div>
  )
}

export default FerryCard