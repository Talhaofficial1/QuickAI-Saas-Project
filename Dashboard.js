import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../Assets/assets';
import { Gem, Sparkle, Sparkles } from 'lucide-react';
import { Protect } from '@clerk/clerk-react';
import CreationsItemsForDashbord from '../Components/CreationsItemsForDashbord';

const Dashboard = () => {
 const[creations , setcreations] = useState([]);
 
 const GetDashboardData = async() => {
  setcreations(dummyCreationData);
 }

 //loading hone pr data dashbboard ka ata rhe
 useEffect(() => {
 GetDashboardData();
 },[]);

  return (
    <div className='h-full overflow-y-scroll p-5'>
    <div className='flex justify-start flex-wrap gap-4 '>

   {/* Total Creation  */}
   <div className='bg-white w-fit inline-block p-4 flex justify-around gap-20'>
     <div>
      <p className='text-gray-600 text-sm'>Total Creations</p>
      <h2 className='font-semibold'>{creations.length}</h2>
    </div>

    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7]
      text-white flex justify-center items-center '>
      <Sparkles />
    </div>

   </div>
   
    {/* Active Plan Card  */}
    <div className='bg-white w-fit inline-block p-4 flex justify-around gap-20'>
     <div>
      <p className='text-gray-600 text-sm'>Active Plan</p>
      <h2 className='font-semibold'>
        <Protect plan="premium" fallback ="Free">Premium</Protect>
      </h2>
    </div>
    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE]
      text-white flex justify-center items-center '>
      <Gem />
    </div>
   </div>
    </div>


    <div className='mt-10 mb-10 space-y-6'>
      <h2>Recent Creations</h2>
      {
        creations.map((item) => <CreationsItemsForDashbord key={item.id} item={item}/>)
      }

    </div>
      
    </div>
  )
}

export default Dashboard
