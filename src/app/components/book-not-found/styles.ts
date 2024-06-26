'use client'

import styled from 'styled-components'

export const NotFoundText = styled.p`
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.purple[100]};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.base};
`
