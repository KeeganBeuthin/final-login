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
  ],
  secret:process.env.NEXT_PUBLIC_SECRET
})