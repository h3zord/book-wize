'use client'

import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
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
          <NavigationButton>
            <ChartLineUp size={24} /> Início
          </NavigationButton>

          <NavigationButton>
            <Binoculars size={24} /> Explorar
          </NavigationButton>

          <NavigationButton>
            <User size={24} /> Perfil
          </NavigationButton>
        </NavigationOptions>

        <LoginButton>
          Fazer login <SignIn size={20} />
        </LoginButton>
      </SideBarContainer>
      {children}
    </LayoutContainer>
  )
}