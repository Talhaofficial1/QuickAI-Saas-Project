import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../Assets/assets';
import { Heart } from 'lucide-react';

const Community = () => {

  const [creations , setcreations] = useState([]);
  const {user} = useUser();


  const fetchcreations =async ()=> {
    setcreations(dummyPublishedCreationData);
  }

  // loading k liye ye hm use krte haa 
  useEffect(()=> {
    if(user){
      fetchcreations();
    }
  },[user])


return (
  <div className="flex-1 h-full flex flex-col gap-4 p-6">
    <p>Creations</p>
    <div className="bg-white h-75 w-full rounded-xl overflow-y-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
      {creations.map((creation, index) => (
        <div key={index} className="relative group rounded-lg overflow-hidden">
          
          
          <img
            src={creation.content}
            alt=""
            className="w-full max-h-64 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
          />

         
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300"></div>

          
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-between 
            p-3 text-white rounded-b-lg transition 
            opacity-0 group-hover:opacity-100 
            z-10">

            
            <p className="text-sm">{creation.prompt}</p>

            <div className="flex gap-1 items-center">
              <p className="text-sm">{creation.likes.length}</p>
              <Heart
                className={`w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110 
                ${creation.likes.includes(user.id)
                  ? "fill-red-500 text-red-600"
                  : "text-white"}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);










}

export default Community
