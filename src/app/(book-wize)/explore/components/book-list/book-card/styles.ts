'use client'

import styled from 'styled-components'

export const BookCardContent = styled.div`
  position: relative;
  padding: 18px 20px;
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  width: 20rem;
  cursor: pointer;
`

export const ReadLabel = styled.div`
  border-top-right-radius: ${(props) => props.theme.radii.md};
  border-bottom-left-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.green[300]};
  color: ${(props) => props.theme.colors.green[100]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 2px 8px;
  position: absolute;
  top: 0;
  right: 0;
`

export const BookCardInformation = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[5]};

  div > span {
    margin-top: 2rem;
  }

  div > div {
    height: 5.6rem;

    & > h4 {
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: ${(props) => props.theme.lineHeights.short};
      color: ${(props) => props.theme.colors.gray[100]};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > p {
      color: ${(props) => props.theme.colors.gray[400]};
      line-height: ${(props) => props.theme.lineHeights.base};
      font-size: ${(props) => props.theme.fontSizes.sm};
      margin-top: ${(props) => props.theme.space[1]};
    }
  }
`
