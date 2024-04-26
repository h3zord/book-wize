'use client'

import styled from 'styled-components'

export const LastReadingContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
`

export const LastReadingContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
`
