'use client'

import { signIn } from 'next-auth/react'
import { SignInButton, SignInContent } from './styles'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { PiRocketLaunchLight } from 'react-icons/pi'
import { useRouter } from 'next/navigation'

export default function SignInOptions() {
  const router = useRouter()
  return (
    <SignInContent>
      <SignInButton onClick={() => signIn('google', { callbackUrl: '/home' })}>
        <FcGoogle size={32} />
        Entrar com Google
      </SignInButton>
      <SignInButton onClick={() => signIn('github', { callbackUrl: '/home' })}>
        <FaGithub size={32} />
        Entrar com Github
      </SignInButton>
      <SignInButton onClick={() => router.push('/home')}>
        <PiRocketLaunchLight size={32} color="#8381D9" />
        Acessar como visitante
      </SignInButton>
    </SignInContent>
  )
}
