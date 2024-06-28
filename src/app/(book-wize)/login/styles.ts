'use client'

import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.theme.space[5]};
  border: 1px solid red;

  & > img {
    height: 500px;
    border: 1px solid red;
  }
`

export const SignInContainer = styled.section`
  border: 1px solid red;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.space[10]};
`

export const WelcomeText = styled.div`
  width: 23.25rem;

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
