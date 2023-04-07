import { redirect } from "next/dist/server/api-utils"
import {useSession, getSession} from 'next-auth/react'
import Db from '../layout/layout2'
import styles from '../styles/Dash.module.css'
import Link from "next/link"
import {signOut} from 'next-auth/react'



export async function getServerSideProps({req}){
    const session = await getSession({req}) 
    
    if (!session){
      return{
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
    
    return {
      props: {session}
    }
   }



export default function dashboard(handleSignOut){
  return(

    
    
     <Db>
     <ul className='flex justify-evenly py-7  text-lg'>
         <li>
           <Link legacyBehavior href={'./balance'}><a className={styles.nav}>balance sheet</a></Link> 
         </li>
         <li>
             send
         </li>
         <li>
             friends
         </li>
         <li className={styles.nav} onClick={handleSignOut}>
             Sign Out
         </li>
     </ul>

     </Db>
      
  )

  function handleSignOut(){
    signOut()
    }
    
      return (
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
          </Head>
         {session? User({session, handleSignOut}) : Guest()}
        </div>
      )
    
}

