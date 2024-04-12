'use client'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
  display: flex;
`

export const MainContainer = styled.main`
  width: 38rem;

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

export const LastReadingContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
  line-height: ${(props) => props.theme.lineHeights.base};
`

export const SeeAllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.sm};

  & > p {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  & > span {
    border-radius: ${(props) => props.theme.radii.sm};
    color: ${(props) => props.theme.colors.purple[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[1]};
    padding-left: ${(props) => props.theme.space[2]};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
    }
  }
`

export const LastReadingCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[4]};
  display: flex;
  gap: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.gray[600]};
`

export const LastReadingInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[5]};

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
    margin-top: ${(props) => props.theme.space[2]};
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

  div > div:nth-child(3) {
    margin-top: ${(props) => props.theme.space[6]};

    & > p {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.base};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const RecentReviewContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};

  & > p {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
`

export const RecentReviewCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[700]};
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[4]};
`

export const AvatarAndRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[4]};
  }

  div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  h4 > span {
    display: block;
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
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

  div > div:nth-child(2) {
    margin-top: ${(props) => props.theme.space[6]};

    & > p {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.short};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const PopularBookContainer = styled.aside`
  width: 20.25rem;
  margin-top: 4.625rem;
  margin-left: 4rem;
  line-height: ${(props) => props.theme.lineHeights.base};
`
export const PopularBookCard = styled.div`
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray[700]};
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[4]};
  display: flex;
  gap: ${(props) => props.theme.space[4]};
`

export const PopularBookInformation = styled.div`
  & > div {
    height: 4.125rem;
  }

  & > img {
    margin-top: ${(props) => props.theme.space[1]};
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
  }
`
