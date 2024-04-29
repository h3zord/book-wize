'use client'

import styled from 'styled-components'

export const RecentReviewContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};

  & > p {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    margin-bottom: ${(props) => props.theme.space[4]};
  }
`

export const RecentReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
`
