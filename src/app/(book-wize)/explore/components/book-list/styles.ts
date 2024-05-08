'use client'

import styled from 'styled-components'

export const BookListContainer = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: ${(props) => props.theme.space[5]};
  flex-wrap: wrap;
`
