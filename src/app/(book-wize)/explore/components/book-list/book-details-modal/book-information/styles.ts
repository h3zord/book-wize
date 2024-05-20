'use client'

import styled from 'styled-components'

export const BookInformationsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 24px 32px 16px;
`

export const BookInformationsContent = styled.div`
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
    margin-top: 5.5rem;

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
      margin-top: ${(props) => props.theme.space[1]};
    }
  }
`

export const BookStatsAndDetails = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  display: flex;
  gap: 2.5rem;
  padding: 24px 12px;
  border-top: 2px solid ${(props) => props.theme.colors.gray[600]};

  & > div {
    display: flex;
    gap: ${(props) => props.theme.space[4]};
    align-items: center;
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.gray[200]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: ${(props) => props.theme.lineHeights.short};
    gap: ${(props) => props.theme.space[1]};
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
