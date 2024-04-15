'use client'

import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.theme.space[5]};
`

export const SignInContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.space[10]};
`

export const WelcomeText = styled.div`
  width: 24.75rem;

  & > h2 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    line-height: ${(props) => props.theme.lineHeights.short};
    color: ${(props) => props.theme.colors.gray[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  & > p {
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: ${(props) => props.theme.lineHeights.base};
    color: ${(props) => props.theme.colors.gray[200]};
  }
`

export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[4]};
`

export const SignInButton = styled.button`
  all: unset;
  width: 21.75rem;
  padding: ${(props) => props.theme.space[6]};
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
