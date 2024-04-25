import React from 'react'
import { BusIcon } from '../assets/Icons'

const BusPage = () => {
  return (
    <div>
        <div className=' bg-gradient-to-b from-blue-900 opacity-90 mt-2 to-transparent min-h-96'>
            <h1 className='pt-10 mb-2 text-center text-5xl font-medium'>Inter Island Bus Service</h1>
            <div className='flex justify-center gap-[275px] my-5'>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative mx-auto rounded-xl shadow-md flex flex-col justify-center'>
                <button className=' p-3 bg-[#FF8782] mb-6 rounded-xl text-white text-xl'>Government Bus Booking</button>
                    <img className='w-[30rem]' src="https://sublimeislands.in/assets/bannerbus-e49a1f2b.png" alt="" />
                    <h1 className='text-4xl w-72 font-medium absolute bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Government Bus</h1>
                    <p className='w-72 text-center absolute bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Search Government STS Inter-island Seater Bus Schedule</p>
                    <button className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-[#FF8782] rounded-md'> <span className='pr-2  align-middle'><BusIcon/></span>Schedule</button>

                </div>
                <div className='relative mx-auto rounded-xl shadow-md flex flex-col justify-center'>
                <button className=' p-3 bg-[#FF8782] mb-6 rounded-xl text-white text-xl'>Private Bus Booking</button>
                    <img className='w-[30rem]' src="https://sublimeislands.in/assets/bannerbus-e49a1f2b.png" alt="" />
                    <h1 className='text-3xl md:text-4xl w-70 font-medium absolute bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Private Bus</h1>
                    <p className='w-72 text-center absolute bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Search Private Inter-island Seater Bus Schedule</p>
                    <button className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-[#FF8782] rounded-md'> <span className='pr-2 align-middle'><BusIcon/></span>Schedule</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusPage