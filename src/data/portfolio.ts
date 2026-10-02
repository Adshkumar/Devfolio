export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type ExperienceItem = {
  company: string
  role: string
  type: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies: string[]
  url: string
}

export type ProjectItem = {
  name: string
  description: string
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'AI' | 'Open Source'
  year: number
  status: string
  featured: boolean
  githubUrl: string
  liveUrl: string
  technologies: string[]
  stars: number
}

export type AchievementItem = {
  title: string
  organization: string
  date: string
  result: string
  description: string
  link: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ActivityPoint = {
  date: string
  github: number
  leetcode: number
}

export const profile = {
  name: 'Adarsh Kumar',
  headline: 'Software Engineer • Full Stack Developer • Open Source Contributor',
  description:
    'I design and ship resilient product experiences, backend systems, and developer tooling that help teams move faster with confidence.',
  location: 'Bengaluru, India',
  availability: 'Open to product engineering and platform opportunities',
  email: 'hello@adarsh.dev',
  github: 'https://github.com/adarsh',
  linkedin: 'https://www.linkedin.com/in/adarsh',
  leetcode: 'https://leetcode.com/adarsh',
  codeforces: 'https://codeforces.com/profile/adarsh',
}

export const metrics = [
  { label: 'GitHub contributions', value: '2.1k+' },
  { label: 'Open-source PRs', value: '48' },
  { label: 'Projects shipped', value: '18' },
  { label: 'Users reached', value: '1.2M' },
  { label: 'Hackathons', value: '7' },
  { label: 'LeetCode problems', value: '320+' },
]

export const experience: ExperienceItem[] = [
  {
    company: 'NorthStar Labs',
    role: 'Senior Full Stack Engineer',
    type: 'Full-time',
    location: 'Bengaluru, IN',
    startDate: '2023',
    endDate: 'Present',
    description:
      'Architected and shipped high-traffic SaaS features across a multi-tenant analytics platform with a focus on observability, performance, and operational simplicity.',
    achievements: [
      'Reduced dashboard time-to-interactive by 42% by moving high-volume queries behind Redis-backed caches and async job workers.',
      'Led the migration of an onboarding workflow to a modular React + Express stack with typed API contracts and automated validation.',
      'Mentored two engineers and improved release confidence with shared CI pipelines and contract testing.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'TypeScript', 'Docker'],
    url: 'https://northstarlabs.dev',
  },
  {
    company: 'Signal Forge',
    role: 'Platform Engineer',
    type: 'Full-time',
    location: 'Remote',
    startDate: '2021',
    endDate: '2023',
    description:
      'Built internal tooling and developer platform features that improved release velocity, incident response, and cross-team deployment consistency.',
    achievements: [
      'Created a reusable deployment pipeline that cut release time from 40 minutes to under 12 minutes.',
      'Designed event-driven alerting workflows using Kafka-inspired queue patterns and health checks for mission-critical services.',
      'Partnered with product to improve API documentation, adoption, and service health visibility for external clients.',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Nginx', 'AWS'],
    url: 'https://signalforge.io',
  },
  {
    company: 'CodeCraft Studio',
    role: 'Frontend Engineer',
    type: 'Contract',
    location: 'Remote',
    startDate: '2019',
    endDate: '2021',
    description:
      'Delivered modern B2B dashboards, landing pages, and internal apps with a heavy emphasis on design systems, accessibility, and performance.',
    achievements: [
      'Built a component library adopted across three product squads, cutting UI delivery time by 35%.',
      'Reduced bundle sizes and improved Core Web Vitals for customer-facing apps with code splitting and lazy-loaded modules.',
      'Worked closely with designers to translate product requirements into robust, maintainable interfaces.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Figma', 'Vite'],
    url: 'https://codecraftstudio.dev',
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'FluxBoard',
    description: 'A realtime analytics workspace for ops teams with shared dashboards, alerts, and goal tracking.',
    category: 'Full Stack',
    year: 2024,
    status: 'Production',
    featured: true,
    githubUrl: 'https://github.com/adarsh/fluxboard',
    liveUrl: 'https://fluxboard.dev',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSockets'],
    stars: 420,
  },
  {
    name: 'MetricMesh',
    description: 'A resilient shipping and observability platform for distributed services and engineering pods.',
    category: 'Backend',
    year: 2023,
    status: 'Active',
    featured: true,
    githubUrl: 'https://github.com/adarsh/metricmesh',
    liveUrl: 'https://metricmesh.app',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    stars: 220,
  },
  {
    name: 'LumaFlow',
    description: 'An AI-assisted workflow engine that turns user messages into structured tasks and automation.',
    category: 'AI',
    year: 2024,
    status: 'Beta',
    featured: false,
    githubUrl: 'https://github.com/adarsh/lumaflow',
    liveUrl: 'https://lumaflow.ai',
    technologies: ['React', 'Python', 'OpenAI', 'Redis', 'TypeScript'],
    stars: 180,
  },
  {
    name: 'OpenShift UI',
    description: 'A reusable component system and design-language layer for internal developer tooling.',
    category: 'Frontend',
    year: 2022,
    status: 'Open Source',
    featured: false,
    githubUrl: 'https://github.com/adarsh/openshift-ui',
    liveUrl: 'https://openshift-ui.dev',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    stars: 140,
  },
]

export const achievements: AchievementItem[] = [
  {
    title: 'Top 1% on Codeforces',
    organization: 'Codeforces',
    date: '2024',
    result: 'Global rank: 612',
    description: 'Reached a peak competitive programming rating while solving weekly contests and algorithmic problems.',
    link: 'https://codeforces.com/profile/adarsh',
  },
  {
    title: 'Open Source Maintainer',
    organization: 'OSS Community',
    date: '2023',
    result: '48 merged PRs',
    description: 'Maintained developer tooling, wrote contribution docs, and reviewed performance-related patches.',
    link: 'https://github.com/adarsh',
  },
  {
    title: 'Hackathon Finalist',
    organization: 'BuildSphere',
    date: '2022',
    result: 'Regional finalist',
    description: 'Built a collaborative workflow assistant that won strong adoption and product feedback from early users.',
    link: 'https://example.com',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'HTML', 'CSS', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'GraphQL', 'Microservices'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Mongoose'] },
  { title: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'GitHub Actions', 'Linux'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jira'] },
]

export const activityData: ActivityPoint[] = [
  { date: '2024-01-01', github: 5, leetcode: 3 },
  { date: '2024-01-05', github: 9, leetcode: 4 },
  { date: '2024-01-12', github: 7, leetcode: 11 },
  { date: '2024-01-20', github: 12, leetcode: 8 },
  { date: '2024-02-01', github: 6, leetcode: 10 },
  { date: '2024-02-08', github: 14, leetcode: 9 },
  { date: '2024-02-18', github: 10, leetcode: 12 },
  { date: '2024-03-01', github: 13, leetcode: 15 },
  { date: '2024-03-16', github: 8, leetcode: 13 },
  { date: '2024-03-30', github: 11, leetcode: 18 },
  { date: '2024-04-13', github: 17, leetcode: 21 },
  { date: '2024-04-28', github: 12, leetcode: 19 },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/adarsh', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adarsh', icon: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/adarsh', icon: 'leetcode' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/adarsh', icon: 'codeforces' },
  { label: 'Email', href: 'mailto:hello@adarsh.dev', icon: 'mail' },
]

export const leetcodeStats = {
  totalSolved: 320,
  easy: 120,
  medium: 150,
  hard: 50,
  acceptanceRate: 76,
  rating: 1688,
  globalRank: 4123,
  streak: 38,
  recentSubmissions: [
    { title: 'Two Sum', difficulty: 'Easy', status: 'Accepted', time: '2h ago' },
    { title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', status: 'Accepted', time: '5h ago' },
    { title: 'Word Ladder II', difficulty: 'Hard', status: 'Accepted', time: '1d ago' },
  ],
}

export const githubStats = {
  totalRepos: 62,
  followers: 422,
  publicRepos: 34,
  recentRepositories: [
    { name: 'portfolio-platform', description: 'Portfolio analytics and developer experience platform' },
    { name: 'graph-queries', description: 'Optimized query system for operational dashboards' },
    { name: 'nix-sandbox', description: 'Minimal reproducible workflow environment' },
  ],
}
