import { motion } from 'framer-motion'
import { metrics } from '../data/portfolio'

export function AboutSection() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">About</p>
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Engineering thoughtful product experiences.</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-line bg-surface-soft p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-subtle">Education</p>
              <p className="mt-3 text-lg font-medium text-strong">B.Tech in Computer Science</p>
              <p className="mt-1 text-sm text-muted">NIT Trichy</p>
              <p className="mt-2 text-sm text-muted">2014 — 2018</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-subtle">Current focus</p>
              <p className="mt-3 text-lg font-medium text-strong">Platform architecture</p>
              <p className="mt-1 text-sm text-muted">Distributed systems and product quality</p>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">Open-source</p>
            <p className="mt-3 text-base leading-7 text-muted">
              I contribute to tools and libraries that improve developer productivity, especially around frontend performance, API design, and automation workflows.
            </p>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">Interests</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-strong">
              <span className="rounded-full border border-line px-2 py-1">System design</span>
              <span className="rounded-full border border-line px-2 py-1">Type safety</span>
              <span className="rounded-full border border-line px-2 py-1">Observability</span>
              <span className="rounded-full border border-line px-2 py-1">Developer tooling</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line bg-surface-soft p-4">
              <div className="text-2xl font-medium tracking-[-0.06em] text-strong">{item.value}</div>
              <div className="mt-2 text-xs leading-5 text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
