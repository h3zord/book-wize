'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { SignInOptions } from '../sign-in-options'
import { CloseButton, Content, LoginOptionsContainer, Overlay } from './styles'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface LoginModalProps {
  children: ReactNode
}

export function LoginModal({ children }: LoginModalProps) {
  const pathname = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <LoginOptionsContainer>
            {pathname === '/home' ? (
              <p>Escolha a forma de login</p>
            ) : (
              <p>Faça login para deixar sua avaliação</p>
            )}

            <SignInOptions />
          </LoginOptionsContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
