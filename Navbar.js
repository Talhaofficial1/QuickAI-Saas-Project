import React from "react";
import { assets } from "../Assets/assets";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser , UserButton , useClerk } from '@clerk/clerk-react';

const Navbar = () => {
    const navigate = useNavigate();
    const{user} = useUser();
    const {openSignIn} = useClerk();
    
  return (
    <>
      <div className="fixed z-50 w-full flex justify-between items-center cursor-pointer py-3 px-4 sm:px-20 xl:px-30 ">
        <img src={assets.logo} alt="logo" onClick={() => {navigate("/")}}></img>

{
    user? <UserButton /> : (
          <button onClick={ openSignIn } className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5'>
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
    )
}
      </div>
    </>
  );
};

export default Navbar;
