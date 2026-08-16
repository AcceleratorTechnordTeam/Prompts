import { NavLink } from 'react-router'
import { useCurrentPageName } from '../../lib/hooks/useCurrentPageName'
import styles from './topBar.module.css'

export const TopBar = () => {
  const { url, pageName } = useCurrentPageName()
  const handleMinimize = () => window.api.window.minimize()
  const handleMaximize = () => window.api.window.maximize()
  const handleClose = () => window.api.window.close()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pageName}</div>

      <div className={styles.wrapper}>
        <NavLink to="/" data-hidden={url === '/'} className={styles.link}>
          <span className={styles.navLink}>Tester</span>
        </NavLink>
        <NavLink to="/catalog" data-hidden={url === '/catalog'} className={styles.link}>
          <span className={styles.navLink}>catalog</span>
        </NavLink>
        <NavLink to="/history" data-hidden={url === '/history'} className={styles.link}>
          <span className={styles.navLink}>History</span>
        </NavLink>
        <span className={styles.separator} />
        <button onClick={handleMinimize} className={styles.reduceItem} />
        <button onClick={handleMaximize} className={styles.elargeItem} />
        <button onClick={handleClose} className={styles.closeItem} />
      </div>
    </div>
  )
}
