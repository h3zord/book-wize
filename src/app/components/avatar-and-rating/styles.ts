'use client'

import styled from 'styled-components'

export const AvatarAndRating = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[4]};
  }

  div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  h4 > span {
    display: block;
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`
