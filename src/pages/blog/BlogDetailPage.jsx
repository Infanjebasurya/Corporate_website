import { Link, useParams } from 'react-router-dom'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { blogPosts, getBlogPost } from '../../data/blogPosts.js'

const CATEGORY_STYLES = {
  Positioning: 'bg-blue-50 text-blue-700 border-blue-200',
  'Design Systems': 'bg-green-50 text-green-700 border-green-200',
  Conversion: 'bg-amber-50 text-amber-700 border-amber-200',
  Engineering: 'bg-violet-50 text-violet-700 border-violet-200',
  default: 'bg-slate-50 text-slate-600 border-slate-200',
}

function getCategoryClass(category) {
  return CATEGORY_STYLES[category] ?? CATEGORY_STYLES.default
}

function AuthorAvatar({ name }) {
  const initials = (name || '?')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-[11px] font-semibold text-indigo-700">
      {initials}
    </div>
  )
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f9fafb] pt-24">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm sm:p-14">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Blog
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-950">
                Article not found
              </h1>
              <p className="mt-3 text-sm text-gray-500">
                The article you opened is no longer available.
              </p>
              <div className="mt-7">
                <Link
                  to="/blog"
                  className="inline-flex rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Back to blog
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)
  const categoryClass = getCategoryClass(post.category)

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.28)_55%,rgba(0,0,0,0.72)_100%)]" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f9fafb]"
        />

        <Container className="relative">
          <Reveal>
            <div className="flex min-h-[560px] flex-col justify-end pb-14 lg:min-h-[calc(100svh-6rem)]">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-xs text-white/60">
                <Link to="/blog" className="text-white/60 hover:text-white">
                  Blog
                </Link>
                <span className="opacity-50">/</span>
                <span className="max-w-[58ch] truncate text-white/75">
                  {post.title}
                </span>
              </div>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-[11px] font-medium ${categoryClass}`}>
                  {post.category}
                </span>
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
                  {post.readTime}
                </span>
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
                  {post.date}
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                {post.description}
              </p>

              <div className="mt-7 flex items-center gap-3 text-white/80">
                <AuthorAvatar name={post.author} />
                <div>
                  <div className="text-sm font-semibold text-white">{post.author}</div>
                  <div className="text-xs text-white/65">{post.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CONTENT */}
      <Container className="relative z-10 -mt-8 py-12 sm:-mt-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal>
            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-10">
                {post.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-[15px] leading-8 text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <aside className="flex flex-col gap-4">
            <Reveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Work with us
                </div>
                <h3 className="text-[16px] font-semibold leading-snug tracking-[-0.01em] text-gray-950">
                  Want this level of clarity on your own site?
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-gray-600">
                  We design polished marketing sites for teams that want more trust, stronger positioning, and a cleaner path to inquiry.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/contact"
                    className="inline-flex justify-center rounded-full bg-gray-900 px-4 py-2.5 text-[13px] font-medium text-white transition hover:opacity-90"
                  >
                    Request a consultation
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex justify-center rounded-full border border-gray-200 bg-transparent px-4 py-2.5 text-[13px] font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
                  >
                    View packages
                  </Link>
                </div>
              </div>
            </Reveal>

            {relatedPosts.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  to={`/blog/${item.slug}`}
                  className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_10px_26px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    Related article
                  </div>
                  <div className="text-[14px] font-semibold leading-snug tracking-[-0.01em] text-gray-900">
                    {item.title}
                  </div>
                  <p className="mt-2 text-[12px] leading-6 text-gray-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {item.excerpt}
                  </p>
                  <div className="mt-3 text-[11px] font-semibold text-indigo-600">
                    Read article →
                  </div>
                </Link>
              </Reveal>
            ))}
          </aside>
        </div>
      </Container>
    </div>
  )
}
