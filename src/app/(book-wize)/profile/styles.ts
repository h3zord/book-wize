'use client'

import styled from 'styled-components'

export const ProfileContainer = styled.div`
  border: 1px solid red;
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
  display: flex;
`

export const MainContainer = styled.main`
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

export const SearchReviewedBookForm = styled.form`
  position: relative;
  margin-top: ${(props) => props.theme.space[10]};
  width: 39rem;

  & > input {
    border: 1px solid ${(props) => props.theme.colors.gray[500]};
    border-radius: ${(props) => props.theme.radii.sm};
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-family: ${(props) => props.theme.fonts.default};
    background: transparent;
    padding: 14px 20px;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.green[200]};
    }
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 14px;
    top: 14px;
    background-color: red;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.gray[500]};
    cursor: pointer;
  }

  & > input:focus + button {
    color: ${(props) => props.theme.colors.green[200]};
  }
`

export const ReviewedBookContainer = styled.section`
  margin-top: ${(props) => props.theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[6]};
  width: 39rem;

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

  & > p {
    margin-top: ${(props) => props.theme.space[6]};
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ReviewedBookInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[6]};

  & > div {
    & > div {
      h4 {
        color: ${(props) => props.theme.colors.gray[100]};
        font-size: ${(props) => props.theme.fontSizes.lg};
        line-height: ${(props) => props.theme.lineHeights.short};
      }

      p {
        color: ${(props) => props.theme.colors.gray[400]};
        line-height: ${(props) => props.theme.lineHeights.base};
        font-size: ${(props) => props.theme.fontSizes.sm};
      }
    }

    img {
      margin-top: 4rem;
    }
  }
`

export const ProfileContent = styled.aside`
  margin-left: 4rem;
  margin-top: 4.625rem;
  border: 1px solid red;
`
