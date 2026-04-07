import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

function Stat({ label, value, dark = false }) {
  return (
    <div
      className={
        dark
          ? 'rounded-2xl border border-indigo-400/20 bg-[linear-gradient(160deg,rgba(30,41,59,0.88)_0%,rgba(15,23,42,0.94)_100%)] px-4 py-4 shadow-[0_16px_32px_rgba(2,6,23,0.28)] backdrop-blur'
          : 'rounded-2xl border border-white/50 bg-white/70 px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur'
      }
    >
      <div
        className={
          dark
            ? 'text-sm font-semibold uppercase tracking-[0.12em] text-slate-400'
            : 'text-sm font-semibold uppercase tracking-[0.12em] text-slate-500'
        }
      >
        {label}
      </div>
      <div
        className={
          dark
            ? 'mt-2 text-xl font-semibold tracking-tight text-white'
            : 'mt-2 text-xl font-semibold tracking-tight text-slate-950'
        }
      >
        {value}
      </div>
    </div>
  )
}

export default function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  actions,
  theme = 'light',
}) {
  const isDark = theme === 'dark'

  return (
    <section className="relative overflow-hidden pb-4 pt-12 sm:pt-16">
      <div
        className={
          isDark
            ? 'absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.26),transparent_30%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(15,23,42,0.96)_56%,rgba(15,23,42,0)_100%)]'
            : 'absolute inset-x-0 top-0 -z-10 h-[440px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_46%,rgba(248,250,252,0)_100%)]'
        }
      />
      <Container>
        <Reveal>
          <div
            className={
              isDark
                ? 'rounded-[2rem] border border-indigo-400/15 bg-[linear-gradient(160deg,rgba(15,23,42,0.94)_0%,rgba(30,41,59,0.9)_52%,rgba(15,23,42,0.94)_100%)] p-8 shadow-[0_30px_70px_rgba(2,6,23,0.34)] backdrop-blur-xl sm:p-10 lg:p-12'
                : 'rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 lg:p-12'
            }
          >
            <div className="max-w-3xl">
              <div
                className={
                  isDark
                    ? 'text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300'
                    : 'text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600'
                }
              >
                {eyebrow}
              </div>
              <h1
                className={
                  isDark
                    ? 'mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl'
                    : 'mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'
                }
              >
                {title}
              </h1>
              <p
                className={
                  isDark
                    ? 'mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg'
                    : 'mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg'
                }
              >
                {description}
              </p>
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </div>

            {stats.length ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} dark={isDark} />
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
