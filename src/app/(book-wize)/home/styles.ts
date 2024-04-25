'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const HomeContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
  display: flex;
`

export const MainContainer = styled.main`
  width: 38rem;
`

export const SeeAllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.space[4]};
  line-height: ${(props) => props.theme.lineHeights.base};

  & > p {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  & > button {
    all: unset;
    border-radius: ${(props) => props.theme.radii.sm};
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.purple[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[1]};
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
    }
  }
`
export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.75);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const Content = styled(Dialog.Content)<{ $modalWidth?: string }>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(props) => (props.$modalWidth ? props.$modalWidth : '40rem')};
  background-color: ${(props) => props.theme.colors.gray[800]};
  padding: 2rem 2.5rem;
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
  color: ${(props) => props.theme.colors.gray[400]};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.gray[200]};
  }
`

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${(props) => props.theme.space[10]};
`
