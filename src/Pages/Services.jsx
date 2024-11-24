import React from 'react'
import ServiceCards from '../Components/ServiceCards'

const Services = () => {
  return (
    <div className='pt-10 bg-[#aefcf952] text-blue-950'>
      <div className="items-center text-center space-y-6">
        <div className="flex items-center justify-center">
          <h1 className=" md:text-2xl  mb-6 text-4xl font-bold border-b-4 border-black px-6 rounded-full ">Services</h1>
        </div>
        <p className="font-semibold text-xl">Paymine will secure your future & help you earn more with our Best In Class Services.</p>
      </div>

      <ServiceCards />
    </div>
  )
}

export default Services