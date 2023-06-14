import { redirect } from "next/dist/server/api-utils"
import {useSession, getSession} from 'next-auth/react'
import styles from '../styles/Dash.module.css'
import Link from "next/link"
import {signOut} from 'next-auth/react'
import Db from '../layout/layout2'
import Admin from "../layout/Admin.js";
import CardLineChart from "../components/Cards/CardLineChart.js";
import CardBarChart from "../components/Cards/CardBarChart.js";
import CardPageVisits from "../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic.js";
import MyTable from './test.js'
import { useEffect } from "react"
import { useRouter } from 'next/router';

async function checkSession(req){
  const session =await getSession(req)
 

  if(!session){
      return{
          redirect: {
              destination:'/login',
              permanent: false,
          }
      }
  }
  
if(session)
  return {
      props: {session}
  }
  }

 const DashboardPage = () => {
  const router = useRouter()
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await fetch('/be/user/session'); 

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

    <Admin>

     <div className="flex flex-wrap">

       <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
         <CardLineChart />
       </div>
       <div className="w-full xl:w-4/12 px-4">
         <CardBarChart />
       </div>
     </div>
     <div className="flex flex-wrap mt-4">
       <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      < MyTable/>
       </div>
       <div className="w-full xl:w-4/12 px-4">
         <CardSocialTraffic />
       </div>
     </div>
     </Admin>
   </>
  );
};

export default DashboardPage;