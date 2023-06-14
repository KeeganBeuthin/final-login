import Link from 'next/link';
import {getSession} from 'next-auth/react'
import ProfileNavbar from "../components/Navbars/ProfileNavbar.js";
 import { useRouter } from 'next/router.js';
import { useEffect,useState } from 'react';
import Layout from "../layout/layout"
const DashboardPage = () => {
  const [profileData, setProfileData] = useState(null)

  
  useEffect(() => { 
    const fetchProfile = async ()=> {
     try{
       const option = {
         method: "GET",
         headers: {'Content-Type': 'application/json', 'credentials': 'include',},
       }
       const response = await fetch('/be/user/profile', option);

const profile = await response.json(); 
console.log(profile)

setProfileData(profile);

     }
     catch (error) {
     
       console.error('Error checking user session:', error);
     }
   
    }
   

    fetchProfile();
 }, []);
   console.log(profileData)



    const router = useRouter()
    useEffect(() => {
      const checkUserSession = async () => {
        try {
          const option = {
            method: "GET",
            headers: {'Content-Type': 'application/json', 'credentials': 'include',},
       }
          const response = await fetch('/be/user/session', option); 
  
          if (response.status==404) {
            console.log(response)
          } 
  
  
         const session =await getSession()
    
    if(!session && response.status==404){
      console.log('working')
      router.push("http://localhost:3000/login")
    }
    
  
          
          return response.json 
        } catch (error) {
        
          console.error('Error checking user session:', error);
        }
        
      };
  
      
  
      checkUserSession();
    }, []); 

    

      
    return (
        
        <>
   
         <div className='flex h-screen bg-slate-300 content-center'>
            <div className='m-auto content-between bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 '>
            
            <h1 className=' text-lg ml-80 pl-44 font-bold'>Profile information</h1>
            <p>Username: {profileData[0].username}</p>
            <p>Email: {profileData[0].email}</p>
            <p>ID: {profileData[0].id}</p>
            </div>
            </div>

         
  
         <ProfileNavbar/>
        
        </>
    )

}

export default DashboardPage