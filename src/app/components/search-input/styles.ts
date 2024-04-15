'use client'

import styled from 'styled-components'

export const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.gray[500]};
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.theme.colors.gray[200]};
  line-height: ${(props) => props.theme.lineHeights.base};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.default};
  background: transparent;
  padding: 14px 20px;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.green[200]};
  }

  &:focus + button {
    color: ${(props) => props.theme.colors.green[200]};
  }
`
export const SearchInputSubmit = styled.button`
  all: unset;
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
`
