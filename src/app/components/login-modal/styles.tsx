'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.75);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  width: 41.25rem;
  background-color: ${(props) => props.theme.colors.gray[800]};
  padding: 4rem 3rem 2rem;
  overflow-y: auto;
  height: 100%;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: ${(props) => props.theme.space[4]};
  right: ${(props) => props.theme.space[4]};
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[400]};
`
