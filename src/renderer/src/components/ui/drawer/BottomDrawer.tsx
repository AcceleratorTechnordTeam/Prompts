import { Drawer } from '@base-ui/react/drawer'
import { ReactNode } from 'react'
import styles from './bottomDrawer.module.css'

type BottomDrawerProps = {
  children: ReactNode
  title: string
  description?: string
  trigger?: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const BottomDrawer = ({
  children,
  title,
  description,
  trigger,
  open,
  onOpenChange
}: BottomDrawerProps) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger className={styles.Button}>{trigger}</Drawer.Trigger>}

      <Drawer.Portal>
        <Drawer.Backdrop className={styles.Backdrop} />
        <Drawer.Viewport className={styles.Viewport}>
          <Drawer.Popup className={styles.Popup}>
            <div className={styles.Handle} />
            <Drawer.Content className={styles.Content}>
              <Drawer.Title className={styles.Title}>{title}</Drawer.Title>
              {description && (
                <Drawer.Description className={styles.Description}>
                  {description}
                </Drawer.Description>
              )}
              <div className={styles.Children}>{children}</div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
