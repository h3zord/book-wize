'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'

export function LoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>X</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
