'use client'

import styled from 'styled-components'

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
