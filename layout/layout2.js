import styles from '../styles/Dash.module.css'

export default function Db({children}){
return(
    <div>
        
    <div className='bg-blue-500 flex h-screen'>
    
    <div className='mb-80 w-screen h-20 bg-slate-50 rounded-md '>
    <div className={styles.logoImgStyle}>
    <div className={styles.logoImg}></div>

    </div>
        <div className='display-inline-block justify-evenly'>
        {children}
        </div>
        
     </div>
    </div>
    
    
    </div>

)

}