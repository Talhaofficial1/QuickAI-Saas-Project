import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../Assets/assets'
import { Eraser, FileText, Hash, House, Icon, Menu, Scissors, SquarePen, User, Users, X } from 'lucide-react';
import {SignIn, useUser } from '@clerk/clerk-react';
import Sidebar from '../Components/Sidebar';



const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setsidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      
      <nav className='w-full px-10 min-h-15 flex justify-between items-center border-b border-gray-200'>
        <img className='cursor-pointer ' onClick={() => navigate("/")} src={assets.logo} alt='logo'></img>

      
      {sidebar ? (
        <X onClick={() => setsidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
      ) : (
        <Menu onClick={() => setsidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
      )}

      </nav>

      <div className='flex-1 w-full flex h-[calc(100vh-65px)]'>
        <Sidebar sidebar = {sidebar} setsidebar = {setsidebar}/>
        
        <div className='flex-1 bg-[#F4F7FB]'>
            <Outlet />
        </div>
      </div>
      
      

    </div>
  ) : (
        <div className='flex justify-center items-center h-screen '>
          <SignIn />
        </div>
  )
}


export default Layout
