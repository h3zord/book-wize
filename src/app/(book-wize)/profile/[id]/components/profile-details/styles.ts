'use client'

import styled from 'styled-components'

export const ProfileContent = styled.aside`
  border-left: 2px solid ${(props) => props.theme.colors.gray[700]};
  margin-left: 4rem;
  margin-top: 4.625rem;
  width: 19.25rem;
  height: 34.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[5]};

  & > img {
    border-radius: ${(props) => props.theme.radii.full};
  }

  & > h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.short};
  }

  h2 > span {
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    text-align: center;
    display: block;
  }
`

export const LineSeparation = styled.div`
  width: 32px;
  height: 4px;
  background: ${(props) => props.theme.colors['gradient-horizontal']};
  margin-top: ${(props) => props.theme.space[8]};
  margin-bottom: ${(props) => props.theme.space[8]};
  border-radius: ${(props) => props.theme.radii.full};
`

export const ProfileInformation = styled.section`
  padding: 20px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.space[10]};
`

export const UserStatistics = styled.div`
  width: 12.25rem;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[5]};

  & > svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  & > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: ${(props) => props.theme.lineHeights.short};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  h4 > span {
    display: block;
    color: ${(props) => props.theme.colors.gray[300]};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`
