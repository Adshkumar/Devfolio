import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <motion.section id="experience" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Experience</p>
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Roles built around speed, reliability, and product clarity.</h2>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="rounded-2xl border border-line bg-surface-soft p-5 sm:p-6">
            <div className="flex flex-col gap-4 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-medium text-strong">{item.company}</div>
                <div className="mt-1 text-base text-muted">{item.role}</div>
              </div>
              <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:text-strong">
                Visit <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1"><Briefcase size={12} /> {item.type}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
              <span>{item.startDate} — {item.endDate}</span>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-strong">
              {item.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-surface px-2 py-1">{tech}</span>
              ))}
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
