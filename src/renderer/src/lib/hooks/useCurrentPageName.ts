import { useLocation } from 'react-router'

const DEFAULT_ROUTES: Record<string, string> = {
  '/': '/Prompt management'
}

export const useCurrentPageName = () => {
  const { pathname } = useLocation()
  const path = DEFAULT_ROUTES[pathname] ?? pathname

  return { url: pathname, pageName: path.split('/').pop() ?? '' }
}
