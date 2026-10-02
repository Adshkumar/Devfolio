import { BriefcaseBusiness, Code2, Globe2, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Adarsh Kumar © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/adarsh" className="inline-flex items-center gap-2 hover:text-strong"><Globe2 size={16} /> GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh" className="inline-flex items-center gap-2 hover:text-strong"><BriefcaseBusiness size={16} /> LinkedIn</a>
          <a href="https://leetcode.com/adarsh" className="inline-flex items-center gap-2 hover:text-strong"><Code2 size={16} /> LeetCode</a>
          <a href="mailto:hello@adarsh.dev" className="inline-flex items-center gap-2 hover:text-strong"><Mail size={16} /> Email</a>
        </div>
      </div>
    </footer>
  )
}
