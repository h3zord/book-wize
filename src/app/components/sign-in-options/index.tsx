'use client'

import { signIn } from 'next-auth/react'
import { SignInButton, SignInContent } from './styles'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { PiRocketLaunchLight } from 'react-icons/pi'
import { usePathname, useRouter } from 'next/navigation'

export function SignInOptions() {
  const router = useRouter()
  const pathname = usePathname()

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

      {pathname === '/' && (
        <SignInButton onClick={LoginAsGuest}>
          <PiRocketLaunchLight size={32} color="#8381D9" />
          Acessar como visitante
        </SignInButton>
      )}
    </SignInContent>
  )
}
