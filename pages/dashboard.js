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


export async function checkUserSession() {
  const sessionId = localStorage.getItem("sessionId");

  if (!sessionId) {
    console.log('Error: No sessionId found');
    return null;
  }

  const options = {
    method: "GET",  
    headers: {
      "Content-Type": "application/json",
      "X-Session-id": sessionId,
    },
  };

  const response = await fetch("http://localhost:9000/user/getSession", options);
  const data = await response.json();
  return data;
}

export async function getServerSideProps() {
  const data = await checkUserSession();

  if (!data) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
}

export default function dashboard(){
  
 
  return(
   
  
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
    }



  