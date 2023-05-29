

export default function login_validate(values){
    const errors = {}
    
    if(!values.email){
        errors.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email='Invalid email address';
    }

    //validation for password
    if(!values.password){
        errors.password='Required';
    } else if(values.password.length<8||values.password.length>20){
        errors.password='Must be greater than 8 and less than 20 characters long';
    } else if(values.password.includes(' ')){
        errors.password ='Invalid Password';
    }
    return errors;
}

export function registerValidate(values){
    const errors={};

    if(!values.username){
        errors.username='Required';
    }else if(values.username.includes(' ')){
        errors.username='Invalid Username'
    }

    if(!values.email){
        errors.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email='Invalid email address';
    }


    if(!values.password){
        errors.password='Required';
    } else if(values.password.length<8||values.password.length>20){
        errors.password='Must be greater than 8 and less than 20 characters long';
    } else if(values.password.includes(' ')){
        errors.password ='Invalid Password';
    }


    //validate confirm password
    if(!values.cpassword){
        errors.cpassword='Required';
    } else if(values.password !== values.cpassword){
        errors.cpassword= 'Password does not match...!'
    } else if(values.cpassword.includes(' ')){
        errors.cpassword='invalid confirm password'
    }

    return errors;
}

export function transactionValidate(values){
     const errors = {}

     if(!values.name){
        errors.name='name required'
     }else if (/\d/.test(values.name)){
        errors.name='Numbers are not allowed'
     }else if(values.name.length>40){
        errors.name='length exceeds limit'
     }else if (values.name && /['"`;]/.test(values.name)) {
        errors.name = 'Invalid characters in name.';
      }


     if(!values.value){
         errors.value='Value Required'
     }

     if (values.information && /['"`;]/.test(values.information)) {
        errors.information = 'Invalid characters in the description.';
      }else if(values.information.length>40){
        errors.information='Length exceeds limit'
     }

     if (!values.transaction_Hash) {
        errors.transaction_Hash = "Hash Required";
      } else if (!/^[0-9a-fA-F]+$/.test(values.transaction_Hash)) {
        errors.transaction_Hash = "Invalid Hex Code";
      }else if (values.transaction_Hash && /['"`;]/.test(values.transaction_Hash)) {
        errors.transaction_Hash = 'Invalid characters in the Hash.' 
      }else if(values.transaction_Hash.length>70){
        errors.transaction_Hash='length exceeds limit'
        }
      
      if (!values.target_Hash) {
        errors.target_Hash = "Hash Required";
      } else if (!/^[0-9a-fA-F]+$/.test(values.target_Hash)) {
        errors.target_Hash = "Invalid Hex Code";
      }else if (values.target_Hash && /['"`;]/.test(values.target_Hash)) {
        errors.target_Hash = 'Invalid characters in the Hash.' 
       }else if(values.target_Hash.length>70){
    errors.target_Hash='length exceeds limit'
    }
      
      if (!values.source_Hash) {
        errors.source_Hash = "Hash Required";
      } else if (!/^[0-9a-fA-F]+$/.test(values.source_Hash)) {
        errors.source_Hash = "Invalid Hex Code";
      }else if (values.source_Hash && /['"`;]/.test(values.source_Hash)) {
        errors.source_Hash = 'Invalid characters in the Hash.' 
      }else if(values.source_Hash.length>70){
        errors.source_Hash='length exceeds limit'
        }
return errors}
