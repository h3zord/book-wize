'use client'

import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
  display: flex;
`

export const MainContainer = styled.main`
  width: 39rem;
`

export const SearchReviewedBookForm = styled.form`
  position: relative;
  margin-top: ${(props) => props.theme.space[10]};

  & > input {
    width: 100%;
  }
`

export const ReviewedBookContainer = styled.section`
  margin-top: ${(props) => props.theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[6]};

  & > span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    color: ${(props) => props.theme.colors.gray[300]};
  }
`

export const ReviewedBookCard = styled.div`
  margin-top: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.space[6]};
`

export const ReviewedBookInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[6]};

  div > img {
    margin-top: 2.5rem;
  }

  div > div {
    height: 4.5rem;

    & > h3 {
      color: ${(props) => props.theme.colors.gray[100]};
      font-size: ${(props) => props.theme.fontSizes.lg};
      line-height: ${(props) => props.theme.lineHeights.short};
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
      margin-top: 2px;
    }
  }
`

export const ProfileContent = styled.aside`
  border-left: 2px solid ${(props) => props.theme.colors.gray[700]};
  margin-left: 4rem;
  margin-top: 4.625rem;
  width: 19.25rem;
  height: 34.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[5]};

  & > h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.short};
  }

  h2 > span {
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    text-align: center;
    display: block;
  }
`

export const LineSeparation = styled.div`
  width: 32px;
  height: 4px;
  background: ${(props) => props.theme.colors['gradient-horizontal']};
  margin-top: ${(props) => props.theme.space[8]};
  margin-bottom: ${(props) => props.theme.space[8]};
  border-radius: ${(props) => props.theme.radii.full};
`

export const ProfileInformation = styled.section`
  padding: 20px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.space[10]};

  & > div {
    width: 12.25rem;
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.space[5]};
  }

  div > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: ${(props) => props.theme.lineHeights.short};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  h4 > span {
    display: block;
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`
