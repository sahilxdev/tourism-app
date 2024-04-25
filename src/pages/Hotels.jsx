import React from 'react'
import PgCard from '../components/PgCard'
import { HotelsData } from '../hooks'
import HotelSearch from '../components/Checkinout'

const Hotels = () => {
  return (
    <div className='mt-2'>
        <HotelSearch/>
        <div className='grid md:grid-cols-3 m-8 gap-8'>
        {HotelsData.map((item) => (
            <PgCard
              key={item.id}
              name={item.name}
              price={item.price}
              rating={item.rating}
              url={item.url}
              location={item.location}
            />
          ))}
    </div>
    </div>
  )
}

export default Hotels