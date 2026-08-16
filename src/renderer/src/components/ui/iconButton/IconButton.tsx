import { Loader, X } from 'lucide-react'
import styles from './iconButton.module.css'

type IconButtonProps = {
  isLoading: boolean
  handleClick: () => void
}

export const IconButton = ({ isLoading, handleClick }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={(e) => {
        e.stopPropagation()
        handleClick()
      }}
    >
      <span className={styles.Content}>
        {isLoading ? <Loader className={styles.Spinner} size={22} /> : <X size={20} />}
      </span>
    </button>
  )
}
