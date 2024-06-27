'use client'

import Image from 'next/image'
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
import { motion } from 'framer-motion'

export default function NavBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: session, status } = useSession()

  const userId = session?.user.id

  const isAuthenticated = status === 'authenticated'

  const pathname = usePathname()

  const router = useRouter()

  const firstName = session?.user?.name?.split(' ')[0]

  const isHome = pathname === '/home'

  const isExplore = pathname === '/explore'

  const isProfile = pathname.startsWith('/profile')

  function moveToHome() {
    router.push('/home')
    router.refresh()
  }

  function moveToExplore() {
    router.push('/explore')
  }

  function moveToProfile() {
    router.push(`/profile/${userId}`)
    router.refresh()
  }

  function logOut() {
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
          <NavigationButton $isSelected={isHome} onClick={moveToHome}>
            {isHome && <motion.div layoutId="nav-tab" />}
            <ChartLineUp size={24} /> Início
          </NavigationButton>

          <NavigationButton $isSelected={isExplore} onClick={moveToExplore}>
            {isExplore && <motion.div layoutId="nav-tab" />}
            <Binoculars size={24} /> Explorar
          </NavigationButton>

          {isAuthenticated && (
            <NavigationButton $isSelected={isProfile} onClick={moveToProfile}>
              {isProfile && <motion.div layoutId="nav-tab" />}
              <User size={24} /> Perfil
            </NavigationButton>
          )}
        </NavigationOptions>

        {isAuthenticated ? (
          <LoginButton $isLogged onClick={logOut}>
            <Image
              src={session.user?.image || '/unknow-user.svg'}
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
