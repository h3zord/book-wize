'use client'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 1px solid red;
  margin-top: ${(props) => props.theme.space[10]};

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
  border: 1px solid white;
  width: 38rem;
  margin-top: ${(props) => props.theme.space[5]};
  line-height: ${(props) => props.theme.lineHeights.base};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme.fontSizes.sm};

    & > p {
      color: ${(props) => props.theme.colors.gray[100]};
    }

    & > span {
      color: ${(props) => props.theme.colors.purple[100]};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${(props) => props.theme.space[1]};
      cursor: pointer;
    }
  }
`

export const LastReadingCard = styled.main`
  border-radius: ${(props) => props.theme.radii.md};
  color: ${(props) => props.theme.colors.gray[600]};
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[4]};
  display: flex;
  gap: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.gray[600]};
`

export const LastReadingInformation = styled.div`
  width: 100%;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.base};
    }
  }

  & > div:nth-child(2) {
    margin-top: ${(props) => props.theme.space[2]};

    & > h4 {
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

  & > div:nth-child(3) {
    margin-top: ${(props) => props.theme.space[5]};

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
