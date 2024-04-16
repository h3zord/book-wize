'use client'

import styled from 'styled-components'

export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[4]};
`
export const SignInButton = styled.button`
  all: unset;
  width: 20.25rem;
  padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[6]};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[5]};
  background-color: ${(props) => props.theme.colors.gray[600]};
  border-radius: ${(props) => props.theme.radii.md};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.gray[200]};
  line-height: ${(props) => props.theme.lineHeights.base};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[500]};
  }
`
