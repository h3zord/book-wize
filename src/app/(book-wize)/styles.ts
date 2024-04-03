'use client'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.space[5]};
`

export const SideBarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14.5rem;
  height: calc(100vh - 2.5rem);
  border-radius: ${(props) => props.theme.radii.lg};
  padding: ${(props) => props.theme.space[10]};
  background-image: url('/background.png');
  /* background: linear-gradient(
    5deg,
    rgba(37, 93, 106, 1) 0%,
    rgba(42, 40, 121, 1) 10%,
    rgba(24, 28, 42, 1) 30%,
    rgba(24, 28, 42, 1) 70%,
    rgba(42, 40, 121, 1) 89%,
    rgba(37, 93, 106, 1) 100%
  ); */
`
export const NavigationOptions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[10]};
  padding-top: ${(props) => props.theme.space[5]};
  width: 100%;
  height: 85%;
`

export const NavigationButton = styled.button<{ $isSelected?: boolean }>`
  all: unset;
  width: 6rem;
  padding: 0 ${(props) => props.theme.space[3]};
  line-height: ${(props) => props.theme.lineHeights.base};
  background-color: transparent;
  border: 4px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]};
  cursor: pointer;

  border-left: ${(props) =>
    props.$isSelected && `4px solid ${props.theme.colors.green[100]}`};

  font-weight: ${(props) =>
    props.$isSelected
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};

  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.gray[100]
      : props.theme.colors.gray[400]};

  &:hover {
    color: ${(props) => props.theme.colors.gray[100]};
  }
`

export const LoginButton = styled.button`
  all: unset;
  color: ${(props) => props.theme.colors.gray[200]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin-top: ${(props) => props.theme.space[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]};
  cursor: pointer;

  & > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }
`
