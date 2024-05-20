'use client'

import styled from 'styled-components'

export const RatingsContainer = styled.section`
  margin-top: ${(props) => props.theme.space[8]};
`

export const RateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  & > button {
    all: unset;
    border-radius: ${(props) => props.theme.radii.sm};
    font-size: ${(props) => props.theme.fontSizes.md};
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.purple[100]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
    }
  }
`

export const RatingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`

export const RatingCard = styled.div`
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[5]};

  & > p {
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`

export const BookRatingForm = styled.form`
  & > textarea {
    background-color: ${(props) => props.theme.colors.gray[800]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    color: ${(props) => props.theme.colors.gray[200]};
    font-family: ${(props) => props.theme.fonts.default};
    border: 1px solid ${(props) => props.theme.colors.gray[500]};
    border-radius: ${(props) => props.theme.radii.sm};
    padding: 14px 20px;
    height: 10.25rem;
    width: 100%;
    resize: none;

    &::placeholder {
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: ${(props) => props.theme.lineHeights.base};
      color: ${(props) => props.theme.colors.gray[400]};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.green[200]};
    }
  }

  & > div {
    display: flex;
    gap: ${(props) => props.theme.space[2]};
    margin-top: ${(props) => props.theme.space[3]};
    width: 5.5rem;
    margin-left: auto;
  }

  div > button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    border-radius: ${(props) => props.theme.radii.sm};
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.gray[600]};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[500]};
    }
  }

  div > button:nth-child(1) {
    color: ${(props) => props.theme.colors.purple[100]};
  }

  div > button:nth-child(2) {
    color: ${(props) => props.theme.colors.green[100]};
  }
`
