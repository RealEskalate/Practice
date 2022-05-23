import { NextApiRequest, NextApiResponse } from 'next'
 import NextAuth from 'next-auth/next'
import CredentialsProvider  from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

export default (req: NextApiRequest,res:  NextApiResponse)=> NextAuth(req,res,{
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              let user = undefined
              user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
              
              if (user) {
                return user
              } else {
                return null
              }
            }
          })
    ],
    secret: 'jD2qJQ5LXxdpZH60z6ULRIMY/FrEs/8ZEEDPfB6rivg=',
    pages: {
      signIn: '/auth/login',
    }
})
