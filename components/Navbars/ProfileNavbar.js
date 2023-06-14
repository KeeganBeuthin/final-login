import React from "react";
import Link from "next/link";
import UserDropdown from "/components/Dropdowns/UserDropdown.js";
import {signOut} from 'next-auth/react'

export default function Navbar(handleSignOut) {
    async function handleSignOut(){
    
        signOut()
    
        const options={        
          method: "Delete",
          headers: {'Content-Type': 'application/json', 'credentials': 'include',},
      }
    
        await fetch(`/be/user/logout`, options)
    
        router.push('/login')
        }
    

    function changeUsername(){
    
    }
  return (
    
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-black md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Profile
          </a>
          <button className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50' onClick={changeUsername}>Change Username</button>
          <button className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50' >Change Password</button>
           <button className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50' >Change Email</button>
          <Link legacyBehavior href={'/dashboard'}><a className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50'>Dashboard</a></Link>
          <button className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50' onClick={handleSignOut}>Sign Out</button>
          
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
