import NextAuth, { DefaultSession } from "next-auth"

//https://next-auth.js.org/getting-started/typescript#extend-default-interface-properties
//https://www.youtube.com/watch?v=yYm4EQzVmzY&ab_channel=DVSK

declare module "next-auth" {
  interface User {
    token: string
  }
  
  interface Session {
    user: {
  
      token: string
    } & DefaultSession["user"]
  }
}