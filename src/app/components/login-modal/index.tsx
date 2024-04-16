'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { SignInOptions } from '../sign-in-options'
import { CloseButton, Content, LoginOptionsContainer, Overlay } from './styles'
import { X } from '@phosphor-icons/react/dist/ssr/X'

export function LoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>X</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <LoginOptionsContainer>
            <p>Faça login para deixar sua avaliação</p>

            <SignInOptions />
          </LoginOptionsContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
