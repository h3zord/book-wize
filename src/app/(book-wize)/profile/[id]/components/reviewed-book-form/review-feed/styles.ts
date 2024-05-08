'use client'

import styled from 'styled-components'

export const ReviewedBookContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[2]};

  & > span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    color: ${(props) => props.theme.colors.gray[300]};
  }
`

export const ReviewedBookCard = styled.div`
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.space[6]};
`

export const ReviewedBookInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[6]};

  div > span {
    margin-top: 2rem;
  }

  div > div {
    height: 4.5rem;

    & > h3 {
      color: ${(props) => props.theme.colors.gray[100]};
      font-size: ${(props) => props.theme.fontSizes.lg};
      line-height: ${(props) => props.theme.lineHeights.short};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
      margin-top: 2px;
    }
  }
`
