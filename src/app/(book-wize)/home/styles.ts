'use client'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
  display: flex;
`

export const MainContainer = styled.main`
  width: 38rem;
`

export const LastReadingContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
`

export const SeeAllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.space[4]};
  line-height: ${(props) => props.theme.lineHeights.base};

  & > p {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  & > button {
    all: unset;
    border-radius: ${(props) => props.theme.radii.sm};
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.purple[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[1]};
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
    }
  }
`

export const LastReadingCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[600]};
  padding: 24px;
`

export const LastReadingInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[6]};

  div > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.base};
    }
  }

  div > div:nth-child(2) {
    margin-top: ${(props) => props.theme.space[3]};
    height: 2.75rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.gray[100]};
      line-height: ${(props) => props.theme.lineHeights.short};
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`

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

export const PopularBookCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[700]};
  padding: 16px 20px;
`

export const PopularBookInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[5]};

  div > div {
    height: 4.125rem;
  }

  div > img {
    margin-top: ${(props) => props.theme.space[2]};
  }

  div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.shorter};
    font-weight: ${(props) => props.theme.fontWeights.bold};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div > p {
    color: ${(props) => props.theme.colors.gray[400]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`
