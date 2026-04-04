import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import videoOne from '../../../assets/video/146100-788410052_medium.mp4'
import videoTwo from '../../../assets/video/204306-923909642_medium.mp4'
import videoThree from '../../../assets/video/272318_medium.mp4'
import videoFour from '../../../assets/video/468-136808389_medium.mp4'

function ShowcaseCard({ title, video, tone = 'sand', layout = 'bottom-left', wide = false }) {
  const tones = {
    sand: 'bg-[linear-gradient(135deg,#f5efe7_0%,#efe7de_100%)]',
    lavender: 'bg-[linear-gradient(135deg,#d7dbff_0%,#bfc5f4_100%)]',
    pearl: 'bg-[linear-gradient(135deg,#f1ede8_0%,#e9e4dd_100%)]',
    mist: 'bg-[linear-gradient(135deg,#efefef_0%,#e7e4df_100%)]',
  }

  const positions = {
    'bottom-left': 'items-end justify-start text-left',
    'top-right': 'items-start justify-end text-right',
  }

  return (
    <div
      className={`group relative h-full overflow-hidden border-[3px] border-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${tones[tone]} ${wide ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-full min-h-[220px] md:min-h-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.38),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_35%,rgba(255,255,255,0.1)_100%)] transition-opacity duration-300 group-hover:opacity-0" />
        <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.18)_40%,rgba(15,23,42,0.58)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className={`absolute inset-0 flex p-5 sm:p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 ${positions[layout]}`}>
          <p className="max-w-[18ch] translate-y-3 text-[1.05rem] leading-[1.45] text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-[1.12rem]">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EasySwitchSection() {
  return (
    <section className="bg-transparent">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-[4.9rem] sm:leading-[0.94]">
                Easy switch.
                <br />
                No hitch.
              </h2>
              <p className="mt-10 max-w-[33rem] text-[1.02rem] leading-[1.95] text-slate-200">
                Switching to Kula is structured, secure, and designed to keep
                your hiring moving from day one. Your open roles continue
                uninterrupted, your data transfers seamlessly, and your
                workflows stay aligned with how your team already operates.
              </p>
              <div className="mt-10">
                <Button
                  as={Link}
                  to="/contact"
                  className="rounded-2xl border-0 bg-[linear-gradient(180deg,#ff8c64_0%,#ff5b33_100%)] px-10 py-3.5 text-base text-white shadow-[0_14px_28px_rgba(255,91,51,0.22)] hover:brightness-105"
                >
                  Switch Now
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:auto-rows-[220px] md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <ShowcaseCard
                title="Seamless migration"
                video={videoOne}
                tone="sand"
                layout="bottom-left"
                wide
              />
            </Reveal>

            <Reveal>
              <ShowcaseCard
                title="Zero downtime"
                video={videoTwo}
                tone="lavender"
                layout="top-right"
              />
            </Reveal>

            <Reveal>
              <ShowcaseCard
                title="Human support"
                video={videoThree}
                tone="pearl"
                layout="bottom-left"
              />
            </Reveal>

            <Reveal className="md:col-span-2">
              <ShowcaseCard
                title="Guided training"
                video={videoFour}
                tone="mist"
                layout="top-right"
                wide
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
