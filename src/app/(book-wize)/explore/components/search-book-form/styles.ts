'use client'

import styled from 'styled-components'

export const SearchBookFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]};
  position: relative;

  & > input {
    width: 26.05rem;
  }
`
