import { lazy } from 'react'

export const routes = [
  { path: '/', label: 'Home', Component: lazy(() => import('../pages/home/index.jsx')) },
  { path: '/about', label: 'About', Component: lazy(() => import('../pages/about/index.jsx')) },
  { path: '/services', label: 'Services', Component: lazy(() => import('../pages/services/index.jsx')) },
  { path: '/contact', label: 'Contact', Component: lazy(() => import('../pages/contact/index.jsx')) },
  { path: '/faq', label: 'FAQ', Component: lazy(() => import('../pages/faq/index.jsx')) },
  { path: '/terms', label: 'Terms', Component: lazy(() => import('../pages/terms/index.jsx')) },
  { path: '/privacy', label: 'Privacy', Component: lazy(() => import('../pages/privacy/index.jsx')) },
]

export function getRoute(path) {
  return routes.find((r) => r.path === path) ?? null
}

