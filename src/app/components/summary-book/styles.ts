'use client'

import styled from 'styled-components'

export const SummaryBook = styled.div<{ $lineClamp: number }>`
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin-top: ${(props) => props.theme.space[5]};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lineClamp};
  overflow: hidden;
  text-overflow: ellipsis;
`
