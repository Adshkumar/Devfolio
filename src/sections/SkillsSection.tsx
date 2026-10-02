import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

export function SkillsSection() {
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Skills</p>
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Focused on the systems and tools that ship reliable products.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-line bg-surface-soft p-5">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-subtle">{group.title}</div>
            <div className="flex flex-wrap gap-2 text-sm text-strong">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-line bg-surface px-2 py-1.5">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
