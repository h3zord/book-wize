'use client'

import styled from 'styled-components'

export const PopularBookContainer = styled.aside`
  width: 23rem;
  margin-top: 4.625rem;
  margin-left: 4rem;
`
export const PopularBookContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
`
