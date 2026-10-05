#!/usr/bin/env node
// The repo's conventions, checked. Fails with a list of what is off.
//   framework.md: every proposition or corollary (a "- **P" or "- **C" item) names its premises;
//                 every axiom, definition, proposition, corollary and conjecture carries an attribution in brackets.
//   reviews/*.md: every review has a jumps section with a disproof condition per jump.
//   README.md:    the layout section names every top-level file and folder that exists.
import { readFileSync, readdirSync, statSync } from 'node:fs'
const problems = []
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
