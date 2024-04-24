import React from 'react'
import PackageCard from '../components/PackageCard'
import { PackagesData } from '../hooks'

const Packages = () => {
  return (
    <div className=' '>
      <div className='grid grid-cols-3 ml-32'>
        {PackagesData.map((item)=> 
            <PackageCard key={item.id} name={item.name} price={item.price} offerPrice={item.offerPrice} url={item.url} />
)}
    </div>
    </div>
  )
}

export default Packages