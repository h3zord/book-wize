// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    image: string
    created_ad: string
    emailVerified: boolean
  }

  export interface Session {
    user: User
  }
}
