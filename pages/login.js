import Head from 'next/head'
import Layout from "../layout/layout"
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint} from "react-icons/hi";
import {useState} from 'react'
import { signIn, signOut} from 'next-auth/react'
import { useFormik } from 'formik'
import login_validate from '../lib/validate'
import { useRouter } from  'next/router';




export default function Login(){

    const[show,setShow]= useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues:{
            email:'',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })


    async function onSubmit(values){
if(!values){
    console.log('data failed')
}



    const options={        
            method: "Post",
            headers: {'Content-Type': 'application/json', 'credentials': 'include',},
            body: JSON.stringify(values)
        }
        
        
    console.log('login!!1')
    
        await fetch(`/be/user/login`, options)
      
        .then((res) => JSON.stringify(res), await new Promise((resolve) => setTimeout(resolve, 2000)),  router.push("http://localhost:3000/dashboard"))
        
    }
    
   //Google Handler function
   async function handleGoogleSignin(){

       signIn('google',{callbackUrl: 'http://localhost:3000/dashboard'})
   }

   //Github Login
   async function handleGithubSignin(){
   
       signIn('github', {callbackUrl: 'http://localhost:3000/dashboard'})
   }



    return(
        <Layout>
          <Head>
                <title>Login</title>
          </Head>
            <section className="W-3/4 mx-10 flex flex-col gap-10">
                <div className="title">
                 <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                 <p className="w-3/4 mx-auto text-gray-400">Welcome</p>
                </div>
              {/* form */}
              <form className="flex mx-12 flex-col gap-5" onSubmit={formik.handleSubmit}>
                  <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email? 'border-rose-600' : ''}`}>
                   <input
                   type='email'
                   name='email'
                   placeholder='Email'
                   className={styles.inputText}
                   {...formik.getFieldProps('email')}
                   />
                   <span className='icon flex items-center px-10'>
                       <HiAtSymbol size={25}></HiAtSymbol>
                   </span>
                    </div>
                  {formik.errors.email && formik.touched.email? <span className='text-rose-500'>{formik.errors.email}</span>: <></>}
                  <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password? 'border-rose-600' : ''}`}>
                   <input
                   type={`${show?'text':'password'}`}
                   name='password'
                   placeholder='Password'
                   className={styles.inputText}
                   {...formik.getFieldProps('password')}
                   />
                   <span className='icon flex items-center px-10' onClick={() => setShow(!show)}>
                       <HiFingerPrint size={25}></HiFingerPrint>
                   </span>
                  </div> 
                  {formik.errors.password && formik.touched.password? <span className='text-rose-500'>{formik.errors.password}</span>: <></>}
                  {/* login buttons*/}
                  <div className='input-button'>
                   <button type='submit' className={styles.button}>
                       Login
                   </button>
                  </div>
                  <div className='input-button'>
                   <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                       Sign in with Google<Image src={'/assets/google.svg'} width='20' height={20}></Image>
                   </button>
                  </div>
                  <div className='input-button'>
                   <button type='button' onClick={handleGithubSignin} className={styles.button_custom}>
                       Sign in with GitHub<Image src={'/assets/github.svg'} width={25} height={20}></Image>
                   </button>
                  </div>
              </form>
              {/* bottom */}
              <p className='text-center text-gray-400'>
               don&apost have an account yet? <Link legacyBehavior href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
              </p>
            </section>
        </Layout>
    )
}