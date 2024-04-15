'use client'

import { signIn } from 'next-auth/react'
import { SignInContent } from './styles'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { PiRocketLaunchLight } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { SignInButton } from '@/app/components/sign-in-button/styles'

export default function SignInOptions() {
  const router = useRouter()

  function LoginWithGoogle() {
    signIn('google', { callbackUrl: '/home' })
  }

  function LoginWithGithub() {
    signIn('github', { callbackUrl: '/home' })
  }

  function LoginAsGuest() {
    router.push('/home')
  }

  return (
    <SignInContent>
      <SignInButton onClick={LoginWithGoogle}>
        <FcGoogle size={32} />
        Entrar com Google
      </SignInButton>
      <SignInButton onClick={LoginWithGithub}>
        <FaGithub size={32} />
        Entrar com Github
      </SignInButton>
      <SignInButton onClick={LoginAsGuest}>
        <PiRocketLaunchLight size={32} color="#8381D9" />
        Acessar como visitante
      </SignInButton>
    </SignInContent>
  )
}
