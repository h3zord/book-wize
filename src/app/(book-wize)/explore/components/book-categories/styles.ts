'use client'

import styled from 'styled-components'

export const BookCategoryContainer = styled.section`
  margin-top: ${(props) => props.theme.space[10]};
  display: flex;
  gap: ${(props) => props.theme.space[3]};
  flex-wrap: wrap;
`

export const BookCategoryButton = styled.button<{ $isSelected?: boolean }>`
  padding: 4px 16px;
  border-radius: ${(props) => props.theme.radii.full};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: ${(props) => props.theme.lineHeights.base};

  border: ${(props) =>
    props.$isSelected
      ? '1.5px solid transparent'
      : `1.5px solid ${props.theme.colors.purple[100]}`};

  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.gray[100]
      : props.theme.colors.purple[100]};

  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.purple[200] : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.colors.purple[200]};
    color: ${(props) => props.theme.colors.gray[100]};
    cursor: pointer;
  }
`
