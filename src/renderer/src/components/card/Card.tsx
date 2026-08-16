import type { ReactNode } from 'react'
import styles from './card.module.css'

type CardProps = {
  children: ReactNode
  button?: ReactNode
  label?: string
}

export const Card = ({ children, button, label = '' }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.label}>{label}</div>
        {button}
      </div>
      {children}
    </div>
  )
}
