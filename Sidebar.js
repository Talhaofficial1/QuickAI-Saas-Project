import React from "react";
import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { House, SquarePen,  Hash, FileText, Scissors, Eraser, Users, LogOut, Image } from "lucide-react";


const NavbarItems = [
  { to: "/layout", label: "Dashboard", Icon: House },
  { to: "/layout/write-articles", label: "WriteArticles", Icon: SquarePen },
  { to: "/layout/blogtitles", label: "BlogTitles", Icon: Hash },
  { to: "/layout/generateimages", label: "GenerateImages", Icon: Image },
  { to: "/layout/removebackground", label: "RemoveBackground", Icon: Eraser },
  { to: "/layout/reviewresume", label: "ReviewResume", Icon: FileText },
  { to: "/layout/removeobject", label: "RemoveObject", Icon: Scissors },
  { to: "/layout/community", label: "Community", Icon: Users },
];



const Sidebar = ({ sidebar, setsidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-[220px] h-full bg-white border-r border-gray-200 flex 
      flex-col items-center max-sm:absolute top-0 bottom-0 
      ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
      transition-all duration-300 ease-in-out`}>

      <div className="my-8 w-full">
        {user && (
          <>
            <img
              src={user.imageUrl}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto"/>

            <h1 className="mt-2 text-center text-lg font-semibold">
              {user.fullName}
            </h1>

           <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
  {NavbarItems.map(({ to, label, Icon }) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/layout"}
      onClick={() => setsidebar(false)}
      className={({ isActive }) =>
        `px-3.5 py-2.5 flex items-center gap-3 rounded ${
          isActive ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white" : ""
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  ))}
</div>

          </>)}
      </div>

       <div className=" mt-10 w-full border-t- border-gray-600 p-4 px-7 flex items-center justify-between">
         <div onClick={openUserProfile} className=" w-7 h-7 cursor-pointer">
            <img src={user.imageUrl}></img>
         </div>
         <div>
            <h1 className="font-bold text-black-600">{user.fullName}</h1>
            <p className="text-sm text-gray-600">
              <Protect plan= "Premium" fallback = "Free">Premium</Protect>
              Plan
            </p>
         </div>
         
         <div className="cursor-pointer text-gray-600 hover:text-secondary">
            <LogOut onClick={signOut} className=""/>
         </div>

       </div>
      
    </div>
  );
};

export default Sidebar;
