'use client'

import styled from 'styled-components'

export const RefreshButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.green[200]};
  padding: 13px 16px;
  cursor: pointer;

  & > svg {
    color: ${(props) => props.theme.colors.green[200]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`
