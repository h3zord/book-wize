'use client'

import styled from 'styled-components'

export const LastReadingCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[600]};
  padding: 24px;
`

export const LastReadingInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[6]};

  div > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.base};
    }
  }

  div > div:nth-child(2) {
    margin-top: ${(props) => props.theme.space[3]};
    height: 2.75rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.gray[100]};
      line-height: ${(props) => props.theme.lineHeights.short};
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`
