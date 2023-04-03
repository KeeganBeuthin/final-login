import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider   from 'next-auth/providers/credentials';
import { fromJSON } from 'postcss';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
      //Google Provider
    GoogleProvider({
     clientId: process.env.GOOGLE_ID,
     clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret:  process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name:'Credentials',
      async authorize(credentials,req){
       connectMongo().catch(error=>{error: 'Connection Failed...!'})

       // check user existance
       const result = await Users.findOne( {email : credentials.email} ).maxTimeMS(30000)
       if(!result){
         throw new Error('No user found with email please sign up...!')
       }

       //compare()

       const checkPassword = await compare(credentials.password, result.password)  
       
       // incorrect Password

       if(!checkPassword || result.email !== credentials.email){
         throw new Error("Username or Password doesn't match")
       }
      
      return result;

      }
    })
  ],
  secret:"uthR9xf7aJhsl31KubStowRpVEfvjvjb/cgNn4gLJOIuTix+lYKEoPs+ivk3/D2seY/b7qjgu3GHBe3dubA0jOADvKMJlUogSi9tz10+KY4="
})