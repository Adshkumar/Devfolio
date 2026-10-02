import { motion } from 'framer-motion'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { activityData, githubStats, leetcodeStats } from '../data/portfolio'

function ContributionHeatmap() {
  const values = [
    1, 4, 3, 6, 2, 9, 4, 7, 5, 8, 6, 3, 1, 10, 7, 5, 2, 6, 8, 4, 9, 3, 5, 6, 8, 2, 1, 7,
  ]

  return (
    <div className="grid grid-cols-7 gap-1.5 rounded-2xl border border-line bg-surface-soft p-4">
      {values.map((value, index) => (
        <div
          key={`${value}-${index}`}
          className="h-3 w-3 rounded-sm"
          style={{
            background: value > 7 ? 'rgba(15, 118, 110, 0.8)' : value > 4 ? 'rgba(15, 118, 110, 0.55)' : 'rgba(15, 118, 110, 0.18)',
          }}
          aria-label={`Contribution level ${value}`}
        />
      ))}
    </div>
  )
}

export function ActivityDashboard() {
  return (
    <motion.section id="activity" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }} className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-subtle">Activity</p>
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-strong">A quick snapshot of daily engineering output and problem solving.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-line bg-surface-soft p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-subtle">GitHub + LeetCode</div>
              <div className="mt-2 text-xl font-medium text-strong">Activity index</div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="githubFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#12b886" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#12b886" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="leetcodeFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="github" stroke="#12b886" fill="url(#githubFill)" strokeWidth={2} />
                <Area type="monotone" dataKey="leetcode" stroke="#f59e0b" fill="url(#leetcodeFill)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface-soft p-5">
          <div className="mb-5 text-xs uppercase tracking-[0.14em] text-subtle">LeetCode metrics</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Solved</div>
              <div className="mt-2 text-2xl font-medium text-strong">{leetcodeStats.totalSolved}</div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Streak</div>
              <div className="mt-2 text-2xl font-medium text-strong">{leetcodeStats.streak}d</div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Acceptance</div>
              <div className="mt-2 text-2xl font-medium text-strong">{leetcodeStats.acceptanceRate}%</div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Rating</div>
              <div className="mt-2 text-2xl font-medium text-strong">{leetcodeStats.rating}</div>
            </div>
          </div>

          <div className="mt-6">
            <ContributionHeatmap />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-line bg-surface-soft p-5">
          <div className="mb-5 text-xs uppercase tracking-[0.14em] text-subtle">GitHub snapshot</div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Repos</div>
              <div className="mt-2 text-2xl font-medium text-strong">{githubStats.totalRepos}</div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Followers</div>
              <div className="mt-2 text-2xl font-medium text-strong">{githubStats.followers}</div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-subtle">Public</div>
              <div className="mt-2 text-2xl font-medium text-strong">{githubStats.publicRepos}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface-soft p-5">
          <div className="mb-5 text-xs uppercase tracking-[0.14em] text-subtle">Recent submissions</div>
          <div className="space-y-3">
            {leetcodeStats.recentSubmissions.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2.5 text-sm">
                <div>
                  <div className="font-medium text-strong">{item.title}</div>
                  <div className="text-xs text-muted">{item.difficulty}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-emerald-500">{item.status}</div>
                  <div className="text-xs text-muted">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
