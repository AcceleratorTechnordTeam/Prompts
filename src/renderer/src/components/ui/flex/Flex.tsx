'use client'

import { HTMLAttributes, ReactNode } from 'react'

import styles from './flex.module.css'

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  fullWidth?: boolean
  fullHeight?: boolean
  maxWidth?: boolean
  maxHeight?: boolean
  inline?: boolean
  direction?: Direction
  wrap?: WrapType
  justify?: JustifyContent
  align?: AlignItems
  gap?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
}

export const Flex = ({
  fullWidth = false,
  fullHeight = false,
  maxWidth = false,
  maxHeight = false,
  inline = false,
  direction = 'row',
  wrap = 'nowrap',
  justify = 'center',
  align = 'center',
  gap = 0,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  className = '',
  children,
  ...props
}: FlexProps) => {
  // Combine classes
  const css = [styles.flex, className].filter(Boolean).join(' ')

  // Compute styles
  const styles_ = {
    gap: `${gap}px`,
    paddingTop: `${pt}px`,
    paddingBottom: `${pb}px`,
    paddingLeft: `${pl}px`,
    paddingRight: `${pr}px`
  }

  return (
    <div
      className={css}
      data-align={align}
      data-direction={direction}
      data-full-height={fullHeight}
      data-full-width={fullWidth}
      data-inline={inline}
      data-justify={justify}
      data-max-height={maxHeight}
      data-max-width={maxWidth}
      data-wrap={wrap}
      style={styles_}
      {...props}
    >
      {children}
    </div>
  )
}
