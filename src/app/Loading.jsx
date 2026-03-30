import Container from '../components/ui/Container.jsx'

export default function Loading() {
  return (
    <Container className="py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <div className="h-5 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="mt-6 grid gap-3">
          <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-10/12 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </Container>
  )
}

