import Head from 'next/head'
import Layout from "../layout/layout"
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser} from "react-icons/hi";
import {useState} from 'react'
import {useFormik} from 'formik'
import { registerValidate } from '../lib/validate'
import {useRouter} from 'next/router'


export default function Register(){
    
    const[show,setShow] =useState({password: false, cpassword: false})    
    const router = useRouter()
    const formik =useFormik({
        initialValues: {
            username:'',
            email:'',
            password:'',
            cpassword:''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values){
        console.log(values)
        
      
    }

    async function onSubmit(values){
        const options={        
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)
            
        }
        

        await fetch('http://localhost:9000/be/user/create', options)
        .then(res=> res.json())
        .then((data)=>{
            if(data) router.push('http://localhost:3000/login')
        })
    }

    return(
        
        

            <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="W-3/4 mx-10 flex flex-col gap-10">
                <div className="title">
                 <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                 <p className="w-3/4 mx-auto text-gray-400">Welcome</p>
                </div>
              {/* form */}
              <form className="flex mx-12 flex-col gap-5" onSubmit={formik.handleSubmit}>
                  <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username? 'border-rose-600' : ''}`}>
                   <input
                   type='text'
                   name='Usermame'
                   placeholder='Username'
                   className={styles.inputText}
                   {...formik.getFieldProps('username')}
                   />
                   <span className='icon flex items-center px-10'>
                       <HiOutlineUser size={25}></HiOutlineUser>
                   </span>
                  </div>
                  {formik.errors.username && formik.touched.username? <span className='text-rose-500'>{formik.errors.username}</span>: <></>}
                  <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email? 'border-rose-600' : ''}`}>
                   <input
                   type='email'
                   name='Email'
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
                   type={`${show.password?'text':'password'}`}
                   name='password'
                   placeholder='Password'
                   className={styles.inputText}
                   {...formik.getFieldProps('password')}
                   />
                   <span className='icon flex items-center px-10' onClick={() => setShow({...show, password:!show.password})}>
                       <HiFingerPrint size={25}></HiFingerPrint>
                   </span>
                  </div>
                  {formik.errors.password && formik.touched.password? <span className='text-rose-500'>{formik.errors.password}</span>: <></>}
                  <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword? 'border-rose-600' : ''}`}>
                   <input
                   type={`${show.cpassword?'text':'password'}`}
                   name='cpassword'
                   placeholder='Confirm Password'
                   className={styles.inputText}
                   {...formik.getFieldProps('cpassword')}
                   />
                   <span className='icon flex items-center px-10' onClick={() => setShow({...show, cpassword:!show.cpassword})}>
                       <HiFingerPrint size={25}></HiFingerPrint>
                   </span>
                  </div>
                  {formik.errors.cpassword && formik.touched.cpassword? <span className='text-rose-500'>{formik.errors.cpassword}</span>: <></>}
                  {/* login buttons*/}
                  <div className='input-button'>
                   <button type='submit' className={styles.button}>
                       Register
                   </button>
                  </div>
              </form>
              {/* bottom */}
              <p className='text-center text-gray-400'>
               Have an account? <Link legacyBehavior href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
              </p>
            </section>
        </Layout>
    )
}