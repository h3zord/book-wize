'use client'

import BarLoader from 'react-spinners/BarLoader'
import { LoaderHeightWidthProps } from 'react-spinners/helpers/props'
import { CSSProperties } from 'react'

export function Loader(props: LoaderHeightWidthProps) {
  const override: CSSProperties = {
    margin: 'auto',
  }

  return (
    <BarLoader
      {...props}
      cssOverride={override}
      color="#8381D9"
      speedMultiplier={2}
    />
  )
}
