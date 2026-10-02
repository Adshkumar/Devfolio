import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-2xl border border-line bg-surface-soft p-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Contact</p>
          <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">Have a project, idea, or opportunity?</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            I enjoy collaborating with product and engineering teams to design thoughtful software, streamline operations, and deliver meaningful user experiences.
          </p>

          <div className="mt-6 space-y-3">
            <a href="mailto:hello@adarsh.dev" className="inline-flex items-center gap-2 text-sm text-strong hover:text-primary"><Mail size={15} /> hello@adarsh.dev</a>
            <div className="flex gap-3 text-sm text-muted">
              <a href="https://github.com/adarsh" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
              <a href="https://www.linkedin.com/in/adarsh" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface-soft p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-strong">
              Name
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-strong outline-none transition focus:border-primary"
                placeholder="Your name"
                required
              />
            </label>

            <label className="block text-sm text-strong">
              Email
              <input
                value={form.email}
                type="email"
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-strong outline-none transition focus:border-primary"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-strong">
            Message
            <textarea
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="mt-2 min-h-32 w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-strong outline-none transition focus:border-primary"
              placeholder="Tell me about your product or idea"
              required
            />
          </label>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-strong px-4 py-2.5 text-sm font-medium text-inverse disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && <span className="text-sm text-emerald-500">Message sent.</span>}
            {status === 'error' && <span className="text-sm text-red-500">Please try again.</span>}
          </div>
        </form>
      </div>
    </motion.section>
  )
}
