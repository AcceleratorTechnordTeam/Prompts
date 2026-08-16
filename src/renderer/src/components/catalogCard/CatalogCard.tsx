import { Loader, Settings } from 'lucide-react'
import styles from './CatalogCard.module.css'

type CatalogCardProps = {
  id: string
  family: string
  description: string
  capabilities?: string[]
  size?: string
  weight?: string
  installed?: boolean
  isPending?: boolean
  onClick: () => void
  onDisplay: () => void
}

const CAPABILITY_ICONS: Record<string, string> = {
  completion: '✦',
  tools: '⚙',
  thinking: '◈',
  vision: '◉'
}

export const CatalogCard = ({
  id,
  family,
  description,
  capabilities,
  size,
  weight,
  installed,
  isPending,
  onClick,
  onDisplay
}: CatalogCardProps) => {
  return (
    <div className={styles.container} data-is-installed={installed}>
      <div className={styles.header}>
        <span className={styles.family}>{family}</span>
        <div className={styles.wrapper}>
          {size && <span className={styles.size}>{size}</span>}
          {weight && <span className={styles.weight}>{weight}</span>}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.label}>{id}</div>
        <p className={styles.description}>{description}</p>
        {!!capabilities?.length && (
          <div className={styles.capabilities}>
            {capabilities.map((cap) => (
              <span key={cap} className={styles.capability}>
                <span className={styles.capIcon}>{CAPABILITY_ICONS[cap] ?? '•'}</span>
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        {isPending ? (
          <Loader className={styles.loader} />
        ) : (
          <button className={styles.button} onClick={onClick} disabled={installed}>
            {installed ? 'Installed' : 'Download'}
          </button>
        )}
        {installed && (
          <button className={styles.setting} onClick={onDisplay} disabled={!installed}>
            <Settings size={26} strokeWidth={1.6} />
          </button>
        )}
      </div>
    </div>
  )
}
