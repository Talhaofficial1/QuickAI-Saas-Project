import React from 'react'
import {PricingTable} from "@clerk/clerk-react"
const Billing = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[40px] font-semibold '>Choose Your Plan</h2>
        <p className='text-gray-600 max-w-lg mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
      </div>

      <div className='mt-15 max-sm:mx-10 '> 
      <PricingTable /> 
      </div>
    </div>
  )
}

export default Billing
