#!/usr/bin/env node
// The repo's conventions, checked. Fails with a list of what is off.
//   framework.md: every proposition or corollary (a "- **P" or "- **C" item) names its premises;
//                 every axiom, definition, proposition, corollary and conjecture carries an attribution in brackets.
//   reviews/*.md: every review has a jumps section with a disproof condition per jump.
//   README.md:    the layout section names every top-level file and folder that exists.
//   the tree:     no record (records/, chat/, exports/, an export file, a session export) and no project .npmrc.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
const problems = []
// No record and no project .npmrc in this public repository (the audit's batch, 2026-10-19; the same rule as
// cocoon-copula's tests/structure.sh and cocoon-ai's structure test): the records (records/, chat/, exports/, an
// export-<agent>.md, a session export) belong to the private cocoon-ai-records and reached a public repository
// twice by hand on 2026-10-17 with nothing to refuse them; a project .npmrc is read by npm over the user's
// config and would switch install scripts back on at the sandbox's start. The records-guard workflow refuses
// the same at the push; this check refuses the merge.
const RECORD = /^(records|chat|exports)\/|(^|\/)export-(claude|gemini)\.md$|(^|\/)\d{4}-\d{2}-\d{2}-session-[0-9a-f]{8}\.(md|jsonl)$|(^|\/)\.npmrc$/
const walk = (dir) =>
  readdirSync(dir).flatMap((e) => {
    if (e === '.git' || e === 'node_modules') return []
    const p = dir === '.' ? e : join(dir, e)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
for (const p of walk('.')) if (RECORD.test(p)) problems.push(`${p}: a record or an .npmrc; neither ever belongs in a public repository`)
const fw = readFileSync('framework.md', 'utf8')
for (const line of fw.split('\n')) {
  const m = line.match(/^- \*\*([ACDPXMOB]\d+)/)
  if (!m) continue
  const id = m[1]
  if (/^[PC]/.test(id) && !/Premises:/.test(line)) problems.push(`framework.md ${id}: no premise list`)
  if (/^[ADPCX]/.test(id) && !/\[[^\]]+\]/.test(line)) problems.push(`framework.md ${id}: no attribution in brackets`)
}
for (const f of readdirSync('reviews').filter((f) => f.endsWith('.md'))) {
  const s = readFileSync(`reviews/${f}`, 'utf8')
  const jumps = s.match(/^## .*[Jj]umps.*$/m)
  if (!jumps) problems.push(`reviews/${f}: no jumps section`)
  else {
    const tail = s.slice(s.indexOf(jumps[0]))
    const items = tail.match(/^\d+\. \*\*J\d+/gm) ?? []
    const disproofs = tail.match(/Fails if|Disproof:|Testable/g) ?? []
    if (items.length && disproofs.length < items.length) problems.push(`reviews/${f}: ${items.length} jumps, ${disproofs.length} disproof conditions`)
  }
}
const readme = readFileSync('README.md', 'utf8')
for (const entry of readdirSync('.').filter((e) => !e.startsWith('.') && e !== 'README.md')) {
  const name = statSync(entry).isDirectory() ? `${entry}/` : entry
  if (!readme.includes(`\`${name}\``)) problems.push(`README.md: layout does not name ${name}`)
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1) }
console.log('conventions ok')
