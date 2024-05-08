'use client'

import styled from 'styled-components'

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
`
