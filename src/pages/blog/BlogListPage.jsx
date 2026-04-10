import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { blogPosts } from '../../data/blogPosts.js'
import blogHeroBg from '../../assets/Images/geralt-blog-625833_1920.jpg'

const CATEGORY_STYLES = {
  Positioning: {
    pill: 'bg-blue-50 text-blue-700 border-blue-200',
    empty: 'bg-blue-50 text-blue-700',
  },
  'Design Systems': {
    pill: 'bg-green-50 text-green-700 border-green-200',
    empty: 'bg-green-50 text-green-700',
  },
  Conversion: {
    pill: 'bg-amber-50 text-amber-700 border-amber-200',
    empty: 'bg-amber-50 text-amber-700',
  },
  Engineering: {
    pill: 'bg-violet-50 text-violet-700 border-violet-200',
    empty: 'bg-violet-50 text-violet-700',
  },
  default: {
    pill: 'bg-slate-50 text-slate-600 border-slate-200',
    empty: 'bg-slate-50 text-slate-600',
  },
}

function getCategoryStyles(category) {
  return CATEGORY_STYLES[category] ?? CATEGORY_STYLES.default
}

const FILTERS = ['All', 'Positioning', 'Design Systems', 'Conversion', 'Engineering']

const FEATURED = [
  { label: 'Quick read', title: 'Homepage messaging', desc: 'Say more with fewer words.' },
  { label: 'Template', title: 'Service page structure', desc: 'A practical order that converts.' },
  { label: 'Checklist', title: 'Trust signals', desc: 'What to show before the CTA.' },
  { label: 'System', title: 'Reusable UI', desc: 'Keep pages consistent over time.' },
]

function PostCard({ post }) {
  const styles = getCategoryStyles(post.category)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      <div className="relative h-32 overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center text-[13px] font-medium ${styles.empty}`}>
            {post.category}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        <span className={`absolute left-2.5 top-2.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${styles.pill}`}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-4">
        <div className="mb-2.5 flex items-center gap-1.5 text-[11px] text-gray-400">
          <span>{post.date}</span>
          <span className="opacity-40">·</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em] text-gray-900 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          <Link to={`/blog/${post.slug}`} className="text-inherit no-underline hover:text-indigo-700">
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 text-[13px] leading-[1.65] text-gray-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {post.excerpt}
        </p>

        <div className="mt-3.5 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[11px] text-gray-400">
            {post.author} · {post.role}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-[11px] font-semibold text-indigo-600 no-underline hover:text-indigo-700"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogListPage() {
  const posts = useMemo(() => blogPosts, [])
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(9)

  const filtered =
    activeFilter === 'All'
      ? posts
      : posts.filter((post) => post.category === activeFilter)

  const visiblePosts = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={blogHeroBg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.28)_45%,rgba(0,0,0,0.64)_100%)]" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f9fafb]"
        />

        <Container className="relative">
          <Reveal>
            <div className="flex min-h-[560px] flex-col justify-end pb-14 lg:min-h-[calc(100svh-6rem)]">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Blog Hub
                  </div>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Insights for teams building a more credible corporate presence
                  </h1>
                  <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
                    Practical writing on messaging, premium UI, and maintainable frontend structure.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {FILTERS.map((filter) => {
                      const isActive = activeFilter === filter
                      return (
                        <button
                          key={filter}
                          type="button"
                          onClick={() => {
                            setActiveFilter(filter)
                            setVisibleCount(9)
                          }}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition backdrop-blur-sm ${
                            isActive
                              ? 'border-white bg-white text-gray-900'
                              : 'border-white/30 bg-black/25 text-white/90 hover:bg-black/30'
                          }`}
                        >
                          {filter}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 lg:flex lg:gap-10 lg:pb-1">
                  {[
                    { num: posts.length, label: 'Articles' },
                    { num: FILTERS.length - 1, label: 'Topics' },
                    { num: '5 min', label: 'Avg read' },
                  ].map(({ num, label }) => (
                    <div key={label} className="text-right">
                      <div className="text-[32px] font-semibold tracking-[-0.03em] text-white">
                        {num}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <div className="relative z-10 -mt-8 pb-20 pt-8 sm:-mt-10 sm:pt-10">
          <Reveal>
            <div className="mb-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED.map(({ label, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-200 bg-white p-4"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    {label}
                  </div>
                  <div className="mt-1.5 text-[13px] font-semibold leading-tight text-gray-900">
                    {title}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-gray-500">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-5 flex items-baseline justify-between border-b border-gray-100 pb-3.5">
              <span className="text-[13px] font-semibold text-gray-900">
                {activeFilter === 'All' ? 'Latest articles' : activeFilter}
              </span>
              <span className="text-[12px] text-gray-400">
                Showing {visiblePosts.length} of {filtered.length}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => Math.min(count + 6, filtered.length))}
                disabled={!hasMore}
                className={`rounded-full px-7 py-2.5 text-[13px] font-semibold transition ${
                  hasMore
                    ? 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    : 'cursor-not-allowed border border-gray-100 bg-[#f9fafb] text-gray-300'
                }`}
              >
                {hasMore ? 'Load more articles' : 'All articles loaded'}
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
