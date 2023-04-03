import mongoose from 'mongoose'

const connectMongo = async()=>{
    try{
        const {connection}= await mongoose.connect('mongodb+srv://admin:admin123@authcluster.i8z6kq5.mongodb.net/?retryWrites=true&w=majority');
      
        if(connection.readyState== 1){
            return Promise.resolve(true)
        }
    }catch(error){
        return Promise.reject(error)
    }
}

export default connectMongo;