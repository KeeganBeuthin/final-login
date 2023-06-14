import React from "react";
import Link from "next/link";
import UserDropdown from "/components/Dropdowns/UserDropdown.js";
import {signOut} from 'next-auth/react'
import { useRouter } from "next/router";
export default function Navbar(handleSignOut) {
  const router=useRouter()
  async function handleSignOut(){
    
    signOut()

    const options={        
      method: "Delete",
      headers: {'Content-Type': 'application/json', 'credentials': 'include',},
  }

    await fetch(`/be/user/logout`, options)

    router.push('/login')
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
            Dashboard
          </a>
          <button className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50' onClick={handleSignOut}>Sign Out</button>
          <Link legacyBehavior href={'/profile'}><a className='mt-2 ml-20 px-5 rounded-sm bg-ingigo-500 bg-gray-50'>Profile</a></Link>
        
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blue-800 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
