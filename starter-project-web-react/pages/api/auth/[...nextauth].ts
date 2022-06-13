import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'
import CredentialsProvider  from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import AuthApiCall from '../../../util/AuthApiCall';

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
    secret: process.env.NEXT_PUBLIC_SECRET,
    pages: {
      signIn: '/auth/login',
    },
    callbacks: {
      jwt: async ({ user, token }) => {
          user && (token.user = user)
          return token
      },
      session: async ({ session, token }) => {
        session.access_token = token.user
        const _token: any = token.user;
        var decoded: any = jwt_decode(_token)
        session.id = decoded.sub

        const res = await AuthApiCall.GetUserDetail(decoded.sub, _token)
        if(res){
          session.user = res
        }
        return session
    }
  }
})
