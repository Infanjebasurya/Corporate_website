import { useMemo, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

// Animated plus/minus icon component
const AnimatedIcon = ({ isOpen }) => (
  <div className={`relative size-10 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
    <div className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 transition-all duration-300 ${isOpen ? 'scale-x-0' : 'scale-x-100'}`} />
    <div className={`absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 transition-all duration-300 ${isOpen ? 'scale-y-0' : 'scale-y-100'}`} />
  </div>
);

// Individual FAQ item component
function Item({ q, a, category, index }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [open, a])

  return (
    <div 
      className="group opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm shadow-lg transition-all duration-400 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <div className="flex-1">
            <span className="mb-2 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-400 transition-all duration-300 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/20">
              {category}
            </span>
            <span className="block text-base font-semibold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-indigo-300">
              {q}
            </span>
          </div>
          <AnimatedIcon isOpen={open} />
        </button>

        <div
          style={{ height: `${height}px` }}
          className="overflow-hidden transition-all duration-400 ease-out"
        >
          <div ref={contentRef} className="px-6 pb-6">
            <div className="border-t border-slate-700/50 pt-4 text-sm leading-7 text-slate-300">
              {a}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Category filter pills
const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => (
  <div className="mb-8 flex flex-wrap gap-2 pb-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
          activeCategory === category
            ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25'
            : 'border border-slate-700 bg-slate-800/50 text-slate-300 backdrop-blur-sm hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white'
        }`}
      >
        <span className={`relative z-10 ${activeCategory === category ? 'font-semibold' : ''}`}>
          {category}
        </span>
      </button>
    ))}
  </div>
)

// Stats card component
const StatCard = ({ label, value, icon, delay = 0 }) => (
  <div 
    className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 opacity-0 animate-fadeInUp"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 transition-all duration-300 group-hover:from-indigo-500/5 group-hover:via-indigo-500/5 group-hover:to-indigo-500/10" />
    <div className="relative flex items-center gap-3">
      <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
        <p className="text-xl font-bold text-slate-100">{value}</p>
      </div>
    </div>
  </div>
)

// Help center card
const HelpCenterCard = () => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 transition-all duration-300 group-hover:from-indigo-500/5 group-hover:via-indigo-500/5 group-hover:to-indigo-500/10" />
    <div className="relative">
      <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:scale-110">
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636L9.172 14.828M12 20h9M4.5 4.5L9.172 9.17M3 12h1.5M12 3v1.5M20 12h-1.5M12 20v1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-slate-100">Quick help</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        Can't find what you're looking for? Our support team is ready to help you with any questions.
      </p>
      <Button as={Link} to="/contact" variant="secondary" className="mt-5 w-full justify-center border-slate-600 bg-slate-800/50 text-white hover:border-indigo-500 hover:bg-indigo-600/20">
        Contact support
      </Button>
    </div>
  </div>
)

// CTA card
const CTACard = () => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
    <div className="absolute -right-12 -top-12 size-40 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-300 group-hover:scale-150" />
    <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-300 group-hover:scale-150" />
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />

    <div className="relative">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">
        Ready to start?
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        Let's build something great together
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Get in touch with our team to discuss your specific requirements and how we can help.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Button as={Link} to="/contact" className="w-full justify-center bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:shadow-xl">
          Schedule a call
        </Button>
        <Button as={Link} to="/services" variant="secondary" className="w-full justify-center border-slate-600 bg-slate-800/50 text-white hover:border-indigo-500 hover:bg-indigo-600/20">
          View services
        </Button>
      </div>
    </div>
  </div>
)

// Search bar component
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  return (
    <div className="relative mb-6 opacity-0 animate-fadeInUp" style={{ animationFillMode: 'forwards' }}>
      <svg
        className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400 transition-colors duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search frequently asked questions..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          onSearch(e.target.value)
        }}
        className="w-full rounded-2xl border border-slate-700 bg-slate-800/50 py-3.5 pl-12 pr-4 text-sm text-slate-100 placeholder:text-slate-400 backdrop-blur-sm transition-all duration-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-slate-800/80"
      />
    </div>
  )
}

// Enhanced Support Center Header - No white backgrounds
const SupportCenterHeader = () => (
  <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl opacity-0 animate-fadeInUp" style={{ animationFillMode: 'forwards' }}>
    {/* Animated gradient orbs */}
    <div className="absolute -right-32 -top-32 size-64 rounded-full bg-indigo-500/15 blur-3xl animate-pulse" />
    <div className="absolute -bottom-32 -left-32 size-64 rounded-full bg-purple-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
    <div className="absolute right-1/4 top-1/4 size-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    

  
  </div>
);

// Info Box Component
const InfoBox = ({ title, description, icon, gradient }) => (
  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl opacity-0 animate-fadeInUp`} style={{ animationFillMode: 'forwards' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 transition-all duration-300 group-hover:from-white/5 group-hover:via-white/5 group-hover:to-white/10" />
    <div className="relative">
      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{description}</p>
    </div>
  </div>
);

// Popular Topics Component
const PopularTopics = ({ onSelectCategory }) => {
  const popularTopics = [
    { name: 'Getting Started', icon: '🚀', category: 'Platform' },
    { name: 'Deployment', icon: '☁️', category: 'Deployment' },
    { name: 'Customization', icon: '🎨', category: 'Branding' },
    { name: 'Security', icon: '🔒', category: 'Platform' },
    { name: 'API & Integration', icon: '🔌', category: 'Integration' },
    { name: 'Performance', icon: '⚡', category: 'Performance' },
  ];

  return (
    <div className="mb-10 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Popular topics</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {popularTopics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => onSelectCategory(topic.category)}
            className="group relative overflow-hidden rounded-full border border-slate-700 bg-slate-800/30 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:scale-105"
          >
            <span className="relative flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-indigo-300">
              <span className="text-base">{topic.icon}</span>
              {topic.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const items = [
    {
      category: 'Platform',
      q: 'Is this a real multi-page site?',
      a: 'Yes. Each page is a separate route, and the app uses a hash router so it deploys cleanly on static hosting without extra rewrite rules. This provides a seamless navigation experience while maintaining simplicity for deployment.',
    },
    {
      category: 'Deployment',
      q: 'Can I deploy it to Netlify or Vercel?',
      a: 'Absolutely! Run `npm run build` and deploy the `dist/` folder. Because the site uses hash routes, it works smoothly on any static infrastructure without additional configuration. Both Netlify and Vercel offer one-click deployment options.',
    },
    {
      category: 'Branding',
      q: 'How do I adapt the brand styling?',
      a: 'Update the logo assets, revise page copy, and adjust Tailwind CSS classes or theme tokens to match your brand palette, typography, and tone. The component structure makes global styling changes efficient and consistent.',
    },
    {
      category: 'Forms',
      q: 'Can the contact form send data to a backend?',
      a: 'Yes. The current version uses `mailto:` for demo purposes, but it can be easily connected to Formspree, Netlify Forms, AWS Lambda, or a custom API endpoint. The form handler is designed to be swapped out with minimal code changes.',
    },
    {
      category: 'SEO',
      q: 'Will this structure support SEO well?',
      a: 'For maximum SEO performance, SSR or SSG is ideal. However, this SPA still provides clean semantic HTML, clear heading hierarchy, meta tags management, and strong content scaffolding—making it perfectly suitable for many service businesses and internal tools.',
    },
    {
      category: 'Performance',
      q: 'How optimized is the performance?',
      a: 'The site implements code splitting, lazy loading for routes, optimized asset delivery, and efficient re-rendering patterns. Lighthouse scores typically exceed 90 for performance, accessibility, and best practices.',
    },
    {
      category: 'Integration',
      q: 'Can I integrate third-party services?',
      a: 'Yes. The architecture is modular and service-agnostic. You can easily integrate analytics (Google Analytics, Plausible), CRM systems (HubSpot, Salesforce), marketing tools, or any REST API endpoints.',
    },
  ]

  const categories = ['All', ...new Set(items.map((item) => item.category))]

  const filteredItems = useMemo(() => {
    let filtered = items

    if (activeCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.q.toLowerCase().includes(query) ||
          item.a.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeCategory, searchQuery, items])

  const infoBoxes = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our streamlined deployment process.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-blue-600/20 to-blue-800/20 border border-blue-500/30'
    },
    {
      title: 'Secure Platform',
      description: 'Enterprise-grade security with encrypted data and protected access.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: 'from-emerald-600/20 to-emerald-800/20 border border-emerald-500/30'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated support team.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636L9.172 14.828M12 20h9M4.5 4.5L9.172 9.17M3 12h1.5M12 3v1.5M20 12h-1.5M12 20v1.5" />
        </svg>
      ),
      gradient: 'from-purple-600/20 to-purple-800/20 border border-purple-500/30'
    },
    {
      title: 'Scalable Solution',
      description: 'Grow your business with our flexible and scalable architecture.',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-orange-600/20 to-orange-800/20 border border-orange-500/30'
    },
  ]

  const stats = [
    { 
      label: 'Topics covered', 
      value: `${items.length}+`, 
      delay: 0,
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h8M8 14h5m-8 6h10a2 2 0 002-2V6a2 2 0 00-2-2h-3.5a1 1 0 01-.7-.3L12.3 2.3a1 1 0 00-.6-.2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: 'Deployment', 
      value: 'Static-friendly', 
      delay: 0.1,
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7C5.5 4 4 5 4 7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M12 9v6" />
        </svg>
      )
    },
    { 
      label: 'Architecture', 
      value: 'Component-based', 
      delay: 0.2,
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    { 
      label: 'Support', 
      value: 'Priority 24/7', 
      delay: 0.3,
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636L9.172 14.828M12 20h9M4.5 4.5L9.172 9.17M3 12h1.5M12 3v1.5M20 12h-1.5M12 20v1.5" />
        </svg>
      )
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Support Center"
        title="Everything you need to know"
        description="Find answers to common questions about our platform, deployment options, customization, and integration capabilities."
        stats={stats.map(stat => ({ label: stat.label, value: stat.value }))}
        theme="dark"
        actions={
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/contact" className="bg-indigo-600 shadow-lg shadow-indigo-500/25 hover:bg-indigo-500">
              Ask a question
            </Button>
            <Button as={Link} to="/blog" variant="secondary" className="border-slate-600 bg-slate-800/50 text-white hover:border-indigo-500 hover:bg-indigo-600/20">
              Read documentation
            </Button>
          </div>
        }
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <Container className="pb-16 pt-4 sm:pb-20">
          <PopularTopics onSelectCategory={setActiveCategory} />

          {/* Info Boxes Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Why choose us</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {infoBoxes.map((box, idx) => (
                <InfoBox key={idx} {...box} />
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Main content area */}
            <div>
              <SearchBar onSearch={setSearchQuery} />

              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              {filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm py-16 text-center shadow-xl">
                  <div className="mb-4 rounded-full bg-indigo-500/10 p-4">
                    <svg className="size-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">No results found</h3>
                  <p className="mt-2 text-slate-400">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredItems.map((it, idx) => (
                    <Item key={it.q} q={it.q} a={it.a} category={it.category} index={idx} />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {stats.map((stat, idx) => (
                <StatCard key={stat.label} {...stat} delay={stat.delay} />
              ))}
              <HelpCenterCard />
              <CTACard />
            </div>
          </div>

          {/* Still have questions section */}
          <div className="mt-16 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold text-slate-100">Still have questions?</h3>
            <p className="mx-auto mt-3 max-w-md text-slate-300">
              Can't find the answer you're looking for? Our team is here to help you.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button as={Link} to="/contact" className="bg-indigo-600 shadow-lg shadow-indigo-500/25 hover:bg-indigo-500">
                Contact support
              </Button>
              <Button as={Link} to="/docs" variant="secondary" className="border-slate-600 bg-slate-800/50 text-white hover:border-indigo-500 hover:bg-indigo-600/20">
                Browse documentation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99, 102, 241, 0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E");
        }
      `}</style>
    </>
  )
}
