'use client'

import styled from 'styled-components'

export const NavegationRouteTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  line-height: ${(props) => props.theme.lineHeights.short};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  & > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }
`
