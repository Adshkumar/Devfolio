import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Mail,
  MapPin,
} from 'lucide-react'
import { profile, socialLinks } from '../data/portfolio'

const iconMap = {
  github: Globe2,
  linkedin: BriefcaseBusiness,
  leetcode: Code2,
  codeforces: Code2,
  mail: Mail,
}

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex min-h-[70vh] items-center py-12 sm:py-16"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for select opportunities
          </div>

          <h1 className="max-w-xl text-4xl font-medium tracking-[-0.08em] text-strong sm:text-5xl lg:text-[4.2rem] lg:leading-[0.95]">
            Hey, I&apos;m <span className="text-primary">{profile.name}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-soft sm:text-lg">
            {profile.headline}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {profile.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-strong px-5 py-3 text-sm font-medium text-inverse transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-strong transition-colors hover:border-primary/60"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Briefcase size={14} />
              Senior Software Engineer
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = iconMap[icon as keyof typeof iconMap] ?? Globe2

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-primary/60 hover:text-strong"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface-soft p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-subtle">
            <span>Core focus</span>
            <span>2026</span>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-line bg-card p-4">
              <div className="mb-2 text-xs uppercase tracking-[0.14em] text-subtle">Current stack</div>
              <div className="flex flex-wrap gap-2 text-sm text-strong">
                <span className="rounded-full border border-line px-2 py-1">React</span>
                <span className="rounded-full border border-line px-2 py-1">TypeScript</span>
                <span className="rounded-full border border-line px-2 py-1">Node.js</span>
                <span className="rounded-full border border-line px-2 py-1">MongoDB</span>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-card p-4">
              <div className="mb-2 text-xs uppercase tracking-[0.14em] text-subtle">Recent impact</div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-semibold text-strong">42%</div>
                  <div className="text-xs text-muted">Faster dashboards</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-strong">1.2M</div>
                  <div className="text-xs text-muted">Monthly users</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-strong">48</div>
                  <div className="text-xs text-muted">Merged PRs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
