import { lazy } from 'react'

export const routes = [
  { path: '/', label: 'Home', Component: lazy(() => import('../pages/home/HomePage.jsx')) },
  { path: '/about', label: 'About', Component: lazy(() => import('../pages/about/AboutPage.jsx')) },
  { path: '/services', label: 'Services', Component: lazy(() => import('../pages/services/index.jsx')) },
  { path: '/contact', label: 'Contact', Component: lazy(() => import('../pages/contact/ContactPage.jsx')) },
  { path: '/faq', label: 'FAQ', Component: lazy(() => import('../pages/faq/FaqPage.jsx')) },
  { path: '/terms', label: 'Terms', Component: lazy(() => import('../pages/terms/index.jsx')) },
  { path: '/privacy', label: 'Privacy', Component: lazy(() => import('../pages/privacy/PrivacyPage.jsx')) },
]

export function getRoute(path) {
  return routes.find((r) => r.path === path) ?? null
}

