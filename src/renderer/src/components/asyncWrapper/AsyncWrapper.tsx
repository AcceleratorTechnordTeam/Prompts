import type { ReactNode } from 'react'

import { LoaderCircle } from 'lucide-react'
import styles from './asyncWrapper.module.css'

type AsyncWrapperProps = {
  isLoading: boolean
  isError: boolean
  errorMessage?: string
  children: ReactNode
}

export const AsyncWrapper = ({
  isLoading,
  isError,
  errorMessage = 'Error, Request failed',
  children
}: AsyncWrapperProps) => {
  if (isLoading)
    return (
      <div className={styles.containerSpinner}>
        <LoaderCircle size={40} className={styles.spinner} />
      </div>
    )
  if (isError)
    return (
      <div className={styles.containerError}>
        <p>{errorMessage}</p>
      </div>
    )

  return <>{children}</>
}
