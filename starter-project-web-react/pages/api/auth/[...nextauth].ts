import axios from 'axios'
import jwt_decode from 'jwt-decode';
import {NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'

export default (req: NextApiRequest,res:  NextApiResponse)=> NextAuth(req,res,{
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials: {            
                email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
                password: {  label: "Password", type: "password" }             
            },
            async authorize(credentials, req) {
                const result = await AuthApiCall.Signin({email: credentials?.email, password: credentials?.password})              
                if (result && (result.status === 200 || result.status == 201)) { 
                  return result.data.access_token 
                } else {
                  return null
                }
            }
          })
    ],

    
})
