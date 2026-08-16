import { Outlet } from 'react-router'
import { useOllamaVersion } from '../../api/version.api'
import { TopBar } from '../../components/topBar/TopBar'
import styles from './appLayout.module.css'

export const AppLayout = () => {
  const { isOllamaRun } = useOllamaVersion()

  return (
    <section className={styles.superContainer}>
      <div className={styles.container}>
        <TopBar />

        <div className={styles.outlet}>
          {isOllamaRun ? <Outlet /> : <p>Vous devez telecharger Ollama pour utiliser cet outil</p>}
        </div>
      </div>
    </section>
  )
}
