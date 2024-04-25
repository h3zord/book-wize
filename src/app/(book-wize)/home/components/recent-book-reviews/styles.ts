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

export const RecentReviewCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[700]};
  padding: 24px;
`

export const RecentReviewInformation = styled.div`
  margin-top: ${(props) => props.theme.space[8]};
  display: flex;
  gap: ${(props) => props.theme.space[5]};

  div > div:nth-child(1) {
    height: 2.75rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.gray[100]};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      line-height: ${(props) => props.theme.lineHeights.short};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`
