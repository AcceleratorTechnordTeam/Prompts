import './styles/main.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import { Toaster } from 'sonner'
import { queryClient } from './lib/client/querryClient'
import { Catalog } from './pages/(catalog_page)/Catalog'
import { History } from './pages/(history_page)/History'
import { Home } from './pages/(home_page)/Home'
import { AppLayout } from './pages/layout/AppLayout'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Toaster />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </HashRouter>
  </QueryClientProvider>
)
