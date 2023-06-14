
import styles from '../styles/Form.module.css'
import {useFormik} from 'formik'
import { transactionValidate } from '../lib/validate'
import {useRouter} from 'next/router'

export default function registerTransaction(){ 
   const router = useRouter()
   const formik =useFormik({
      initialValues: {
          value:'',
          name:'',
          information: '',
          target_Hash: '',
          source_Hash: '',
          transaction_Hash: ''
      },
      validate: transactionValidate,
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
   await fetch('http://localhost:9000/be/transaction/create', options)
   .then(res=> res.json())
   .then((data)=>{
      console.log(data)
      
   })
}

return(


<div className = 'flex h-screen bg-blue-400 justify-center'>
<form onSubmit={formik.handleSubmit}>

    <div className="pl-24 align-middle inline-flex justify-center">
      Register Transaction
    </div>
    <div className='pt-10'>
       <div className={`${styles.input_group} ${formik.errors.name && formik.touched.name? 'border-rose-600' : ''}`}>
       <input
                   type='Text'
                   name='name'
                   placeholder='name'
                   className={styles.inputText}
                   {...formik.getFieldProps('name')}
                   />
                   </div>
                   {formik.errors.name && formik.touched.name? <span className='text-rose-500'>{formik.errors.name}</span>: <></>}
       <div className={`${styles.input_group} ${formik.errors.value && formik.touched.value? 'border-rose-600' : ''}`}>
       <input
                   type='number'
                   name='value'
                   placeholder='value'
                   className={styles.inputText}
                   {...formik.getFieldProps('value')}
                   />
       </div>  
       {formik.errors.value && formik.touched.value? <span className='text-rose-500'>{formik.errors.value}</span>: <></>}
       <div className={`${styles.input_group} ${formik.errors.information && formik.touched.information? 'border-rose-600' : ''}`}>
       <input
                   type='Text'
                   name='information'
                   placeholder='Information'
                   className={styles.inputText}
                   {...formik.getFieldProps('information')}
                   />
       </div>  
       {formik.errors.information && formik.touched.information? <span className='text-rose-500'>{formik.errors.information}</span>: <></>}
       <div className={`${styles.input_group} ${formik.errors.source_Hash && formik.touched.source_Hash? 'border-rose-600' : ''}`}>
       <input
                   type='Text'
                   name='source_Hash'
                   placeholder='Source Hash'
                   className={styles.inputText}
                   {...formik.getFieldProps('source_Hash')}
                   />
       </div>  
       {formik.errors.source_Hash && formik.touched.source_Hash? <span className='text-rose-500'>{formik.errors.source_Hash}</span>: <></>}
       <div className={`${styles.input_group} ${formik.errors.target_Hash && formik.touched.target_Hash? 'border-rose-600' : ''}`}>
       <input
                   type='Text'
                   name='target_Hash'
                   placeholder='Target Hash'
                   className={styles.inputText}
                   {...formik.getFieldProps('target_Hash')}
                   />
       </div>  
       {formik.errors.target_Hash && formik.touched.target_Hash? <span className='text-rose-500'>{formik.errors.target_Hash}</span>: <></>}
       <div className={`${styles.input_group} ${formik.errors.transaction_Hash && formik.touched.transaction_Hash? 'border-rose-600' : ''}`}>
       <input
                   type='Text'
                   name='transaction_Hash'
                   placeholder='Transaction Hash'
                   className={styles.inputText}
                   {...formik.getFieldProps('transaction_Hash')}
                   />
       </div>  
       {formik.errors.transaction_Hash && formik.touched.transaction_Hash? <span className='text-rose-500'>{formik.errors.transaction_Hash}</span>: <></>}
       <div className='input-button'>
                   <button type='submit' className={styles.button}>
                       Register
                   </button>
                  </div>
</div>
</form>	
</div>	

)}