import React from 'react'
import PackageCard from '../components/PackageCard'
import { PackagesData } from '../hooks'

const Packages = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 md:ml-36 ml-[4vw]'>
        {PackagesData.map((item)=> 
            <PackageCard key={item.id} name={item.name} price={item.price} offerPrice={item.offerPrice} url={item.url} />
)}
    </div>
    </div>
  )
}

export default Packages