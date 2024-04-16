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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32.25rem;
  background-color: ${(props) => props.theme.colors.gray[700]};
  padding: 3.5rem 4.5rem;
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

export const LoginOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[10]};

  & > p {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: ${(props) => props.theme.lineHeights.short};
    color: ${(props) => props.theme.colors.gray[200]};
  }
`
