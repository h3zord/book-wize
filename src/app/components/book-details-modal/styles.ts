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

export const BookInformationContainer = styled.section`
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 24px 32px 16px;
`

export const BookInformationContent = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[8]};

  div > div:nth-child(1) {
    height: 5.25rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.lg};
      color: ${(props) => props.theme.colors.gray[100]};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      line-height: ${(props) => props.theme.lineHeights.short};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.md};
      margin-top: ${(props) => props.theme.space[2]};
    }
  }

  div > div:nth-child(2) {
    margin-top: 6.75rem;

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
      margin-top: ${(props) => props.theme.space[1]};
    }
  }
`

export const CategoryAndPageNumber = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  display: flex;
  gap: 3.5rem;
  padding: 24px 0;
  border-top: 2px solid ${(props) => props.theme.colors.gray[600]};

  & > div {
    display: flex;
    gap: ${(props) => props.theme.space[4]};
    align-items: center;
  }

  div > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[200]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: ${(props) => props.theme.lineHeights.short};
  }

  h4 > span {
    display: block;
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`

export const RatingContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
`

export const RateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  & > button {
    all: unset;
    border-radius: ${(props) => props.theme.radii.sm};
    font-size: ${(props) => props.theme.fontSizes.md};
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.purple[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: 0 ${(props) => props.theme.space[2]};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
    }
  }
`

export const RatingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`

export const RatingCard = styled.div`
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[5]};

  & > p {
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`
