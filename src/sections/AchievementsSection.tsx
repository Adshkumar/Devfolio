import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { achievements } from '../data/portfolio'

export function AchievementsSection() {
  return (
    <motion.section id="achievements" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Achievements</p>
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Milestones across engineering, community, and competitive programming.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="rounded-2xl border border-line bg-surface-soft p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-base font-medium text-strong">{achievement.title}</div>
              <a href={achievement.link} target="_blank" rel="noreferrer" className="text-muted hover:text-primary">
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.12em] text-subtle">{achievement.organization}</div>
            <div className="mt-2 text-xs text-muted">{achievement.date}</div>
            <div className="mt-4 text-sm font-medium text-strong">{achievement.result}</div>
            <p className="mt-3 text-sm leading-6 text-muted">{achievement.description}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
