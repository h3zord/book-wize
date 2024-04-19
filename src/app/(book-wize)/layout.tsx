'use client'

import Image from 'next/image'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp'
import { User } from '@phosphor-icons/react/dist/ssr/User'
import { SignIn } from '@phosphor-icons/react/dist/ssr/SignIn'
import { SignOut } from '@phosphor-icons/react/dist/ssr/SignOut'
import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { signOut, useSession } from 'next-auth/react'
import { LoginModal } from '../components/login-modal'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutContainer,
  LoginButton,
  NavigationButton,
  NavigationOptions,
  SideBarContainer,
} from './styles'

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const firstName = session?.user?.name?.split(' ')[0]

  function moveToHome() {
    router.push('/home')
  }

  function moveToExplore() {
    router.push('/explore')
  }

  function moveToProfile() {
    router.push('/profile')
  }

  function logOff() {
    signOut({ callbackUrl: '/' })
  }

  return (
    <LayoutContainer>
      <SideBarContainer>
        <Image
          src="/sidebar-logo.svg"
          width={128}
          height={32}
          alt="sidebar logo"
        />
        <NavigationOptions>
          <NavigationButton
            $isSelected={pathname === '/home'}
            onClick={moveToHome}
          >
            <ChartLineUp size={24} /> Início
          </NavigationButton>

          <NavigationButton
            $isSelected={pathname === '/explore'}
            onClick={moveToExplore}
          >
            <Binoculars size={24} /> Explorar
          </NavigationButton>

          <NavigationButton
            $isSelected={pathname === '/profile'}
            onClick={moveToProfile}
          >
            <User size={24} /> Perfil
          </NavigationButton>
        </NavigationOptions>

        {session ? (
          <LoginButton $isLogged onClick={logOff}>
            <Image
              src={session.user?.image || ''}
              width={32}
              height={32}
              alt="avatar user"
            />

            {firstName}

            <SignOut size={20} />
          </LoginButton>
        ) : (
          <LoginModal>
            <LoginButton>
              Fazer login
              <SignIn size={20} />
            </LoginButton>
          </LoginModal>
        )}
      </SideBarContainer>
      {children}
    </LayoutContainer>
  )
}
