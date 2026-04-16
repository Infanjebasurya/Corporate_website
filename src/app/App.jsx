import { lazy, Suspense, useEffect } from 'react'
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout.jsx'
import Loading from './Loading.jsx'
const HomePage = lazy(() => import('../pages/home/HomePage.jsx'))
const AboutPage = lazy(() => import('../pages/about/AboutPage.jsx'))
const ServicesPage = lazy(() => import('../pages/services/ServicesPage.jsx'))
const ContactPage = lazy(() => import('../pages/contact/ContactPage.jsx'))
const FaqPage = lazy(() => import('../pages/faq/FaqPage.jsx'))
const BlogListPage = lazy(() => import('../pages/blog/BlogListPage.jsx'))
const BlogDetailPage = lazy(() => import('../pages/blog/BlogDetailPage.jsx'))
const TermsPage = lazy(() => import('../pages/terms/TermsPage.jsx'))
const PrivacyPage = lazy(() => import('../pages/privacy/PrivacyPage.jsx'))
const NotFoundPage = lazy(() => import('../pages/not-found/NotFoundPage.jsx'))
const TestimonialsPage = lazy(() => import('../pages/testimonials/TestimonialsPage.jsx'))

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [location.pathname])

  return null
}

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppRoutes />
    </HashRouter>
  )
}
