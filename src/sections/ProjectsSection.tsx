import { motion } from 'framer-motion'
import { ExternalLink, Globe2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio'

const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI', 'Open Source'] as const

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <motion.section id="projects" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Projects</p>
          <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Product work with measurable engineering outcomes.</h2>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? 'rounded-full bg-strong px-3 py-1.5 font-medium text-inverse'
                  : 'rounded-full border border-line bg-surface px-3 py-1.5 text-muted'
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.name}
            className={
              project.featured
                ? 'rounded-2xl border border-line bg-surface-soft p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] lg:col-span-2'
                : 'rounded-2xl border border-line bg-surface-soft p-5'
            }
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.05em] text-strong">{project.name}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="rounded-full border border-line px-2 py-1">{project.status}</span>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-strong">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-surface px-2 py-1">{tech}</span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
              <div className="text-xs text-muted">
                <span className="font-medium text-strong">{project.stars}</span> stars
              </div>
              <div className="flex items-center gap-3 text-sm text-strong">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  <Globe2 size={15} /> GitHub
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  <ExternalLink size={15} /> Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
