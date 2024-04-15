'use client'

import styled from 'styled-components'

export const ExploreContainer = styled.div`
  margin-top: ${(props) => props.theme.space[10]};
  margin-left: 6rem;
`

export const MainContainer = styled.main`
  width: 62.5rem;
`

export const SearchBookForm = styled.form`
  display: flex;
  position: relative;
  justify-content: space-between;

  & > input {
    width: 26.05rem;
  }
`

export const BookCategoryContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
  display: flex;
  gap: ${(props) => props.theme.space[3]};
`

export const BookCategoryContent = styled.div`
  padding: 4px 16px;
  color: ${(props) => props.theme.colors.purple[100]};
  background-color: transparent;
  border: 1.5px solid ${(props) => props.theme.colors.purple[100]};
  border-radius: ${(props) => props.theme.radii.full};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: ${(props) => props.theme.lineHeights.base};

  &:hover {
    background-color: ${(props) => props.theme.colors.purple[200]};
    color: ${(props) => props.theme.colors.gray[100]};
    cursor: pointer;
  }
`

export const BookListContainer = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: ${(props) => props.theme.space[5]};
  flex-wrap: wrap;
`

export const BookCard = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: ${(props) => props.theme.space[5]};
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  width: 20rem;

  div > img {
    margin-top: 4rem;
  }

  div > div {
    height: 4.125rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: ${(props) => props.theme.lineHeights.short};
      color: ${(props) => props.theme.colors.gray[100]};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`
