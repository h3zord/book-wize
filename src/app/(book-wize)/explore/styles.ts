'use client'

import styled from 'styled-components'

export const ExploreContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
`

export const MainContainer = styled.main`
  & > h1 {
    display: flex;
    align-items: center;
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

export const SearchBookForm = styled.form`
  display: flex;
  justify-content: space-between;
`
