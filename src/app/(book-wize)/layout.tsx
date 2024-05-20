'use client'

import Image from 'next/image'
import { parseCookies } from 'nookies'
import { signOut, useSession } from 'next-auth/react'
import { LoginModal } from '../components/login-modal'
import { usePathname, useRouter } from 'next/navigation'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import {
  LayoutContainer,
  LoginButton,
  NavigationButton,
  NavigationOptions,
  SideBarContainer,
} from './styles'

export default function NavBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: session, status } = useSession()

  const { userId } = parseCookies()

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
    router.push(`/profile/${userId}`)
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

          {status === 'authenticated' && (
            <NavigationButton
              $isSelected={pathname.startsWith('/profile')}
              onClick={moveToProfile}
            >
              <User size={24} /> Perfil
            </NavigationButton>
          )}
        </NavigationOptions>

        {status === 'authenticated' ? (
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
