'use client'

import styled from 'styled-components'

export const NavegationRouteTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & > h1 {
    display: flex;
    gap: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    line-height: ${(props) => props.theme.lineHeights.short};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  h1 > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }
`
