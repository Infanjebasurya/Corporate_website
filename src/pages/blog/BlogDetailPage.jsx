import { Link, useParams } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { blogPosts, getBlogPost } from '../../data/blogPosts.js'

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
      {children}
    </span>
  )
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <section>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-10 text-center shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Blog
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Article not found
              </h1>
              <p className="mt-4 text-slate-600">
                The article you opened is no longer available.
              </p>
              <div className="mt-8 flex justify-center">
                <Button as={Link} to="/blog">
                  Back to blog
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    )
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-12 sm:pt-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0f172a_0%,#172554_38%,#312e81_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.18),transparent_26%)]" />
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(15,23,42,0.28)] backdrop-blur">
              <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
                <div className="p-8 text-white sm:p-10 lg:p-12">
                  <Link
                    to="/blog"
                    className="text-sm font-medium text-white/78 transition hover:text-white"
                  >
                    Back to blog
                  </Link>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <MetaPill>{post.category}</MetaPill>
                    <MetaPill>{post.readTime}</MetaPill>
                    <MetaPill>{post.date}</MetaPill>
                  </div>
                  <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {post.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                    {post.description}
                  </p>
                  <div className="mt-8 text-sm font-medium text-white/72">
                    {post.author} · {post.role}
                  </div>
                </div>
                <div className="min-h-[280px] lg:min-h-full">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="pb-18 pt-8 sm:pb-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              {post.sections.map((section) => (
                <Reveal key={section.heading}>
                  <article className="rounded-[1.8rem] border border-white/70 bg-white/82 p-8 shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="space-y-6">
              <Reveal>
                <aside className="rounded-[1.8rem] border border-white/70 bg-white/82 p-7 shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Continue the conversation
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    Want this level of clarity on your own site?
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    We design polished marketing sites for teams that want more trust,
                    stronger positioning, and a cleaner path to inquiry.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button as={Link} to="/contact">
                      Request a consultation
                    </Button>
                    <Button as={Link} to="/services" variant="secondary">
                      View packages
                    </Button>
                  </div>
                </aside>
              </Reveal>

              {relatedPosts.map((item) => (
                <Reveal key={item.slug}>
                  <Link
                    to={`/blog/${item.slug}`}
                    className="block rounded-[1.8rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(15,23,42,0.12)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Related article
                    </div>
                    <div className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
