import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { blogPosts } from '../../data/blogPosts.js'

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
      {children}
    </span>
  )
}

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_22px_52px_rgba(15,23,42,0.08)] backdrop-blur ${
        featured ? 'lg:grid lg:grid-cols-[1.15fr_0.85fr]' : ''
      }`}
    >
      <div className="relative min-h-[260px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.28)_100%)]" />
      </div>
      <div className="p-7 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <MetaPill>{post.category}</MetaPill>
          <MetaPill>{post.readTime}</MetaPill>
          <MetaPill>{post.date}</MetaPill>
        </div>
        <h2 className={`mt-5 font-semibold tracking-tight text-slate-950 ${featured ? 'text-3xl' : 'text-2xl'}`}>
          <Link to={`/blog/${post.slug}`} className="transition hover:text-indigo-700">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {post.excerpt}
        </p>
        <p className="mt-5 text-sm font-medium text-slate-500">
          {post.author} · {post.role}
        </p>
        <div className="mt-7">
          <Button as={Link} to={`/blog/${post.slug}`}>
            Read article
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function BlogListPage() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const otherPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thoughtful articles for brands building a stronger web presence"
        description="Practical writing on messaging, premium web design, and maintainable frontend structure for teams that want a site that looks polished and performs well."
        stats={[
          { label: 'Articles', value: `${blogPosts.length} published` },
          { label: 'Focus', value: 'Design + growth' },
          { label: 'Format', value: 'Actionable guides' },
          { label: 'Audience', value: 'Service brands' },
        ]}
        actions={
          <>
            <Button as={Link} to="/contact">
              Start a project
            </Button>
            <Button as={Link} to="/services" variant="secondary">
              Explore services
            </Button>
          </>
        }
      />

      <section>
        <Container className="pb-16 pt-4 sm:pb-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Featured article
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Editorial highlights
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <PostCard post={featuredPost} featured />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {otherPosts.map((post) => (
              <Reveal key={post.slug}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
