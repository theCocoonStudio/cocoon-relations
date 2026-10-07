# cocoon-relations

A theory built from relations and nothing else, aimed at measurement. The method in three clauses (Izzy, 2026-10-05, sharpened in review the same evening): generality is the only decision; relativity, the vantage as a term inside the theory, is how it is carried out; and singularities are not removed but read, as changes of vantage, with the residual between vantages computed rather than subtracted. What a reading leaves absolute moves one level up, to the declared edge, and each reading must show that it did. The claim under test: information is the globally meaningful quantity, and a theory general enough to make no choice of dimension can still be confirmed. The claim is a jump; the repo is the record of taking it.

Izzy's project, begun 2026-09-06 in conversation with Claude, continued 2026-10-03/05 with Gemini. Every idea is Izzy's unless marked. Claude keeps the record and writes the reviews; Gemini verifies citations and stress-tests.

## Method

- Be general. That is the only decision; everything else follows from it or is flagged.
- No empirical fact enters as an axiom. Empirical facts go on the must-reproduce list, and the theory is wrong if it cannot produce them.
- Every derivation carries its premise list and a confidence per inference; inference validity and premise validity are separate. Agreement is not validation.
- Every jump states first what would disprove it. A failed jump goes on the withdrawn list with its reason, and the next direction is chosen from what logic still allows.
- Bifurcations are named and tracked so the trunk is always known.
- Nothing is reinvented that already exists: existing frameworks and notation are borrowed where they fit, and the review says what each gives and what it lacks.

Izzy, 2026-10-05: "the weakest parts are also the most actionable. possibly predictive. it's the jump we take. if the jump fails, we go back and jump in a different direction that logic allows"

## Layout

- `framework.md` — axioms, definitions, propositions, conjectures, bifurcations, must-reproduce, open items. The formal text.
- `notes.md` — the working notes: method, declared axioms, constructions, withdrawn rules, disproof list, open questions, sources, leads.
- `reviews/` — dated critical reviews: each claim against its strongest objection, a verdict, and the jumps ranked with disproof conditions.
- `scripts/` — `check.mjs`, the conventions check CI runs: premise lists and attributions in the framework, a disproof condition per jump in every review, a README layout that names what exists.

Changes land by PR, with the same review discipline as the other Cocoon repos. The session transcripts behind this record are in the private records repo.

## Next

**First among the things to be critical of:** the fork principle (framework §Bifurcations), a general leap taken knowingly on 2026-10-06. It removed three forks and turned the third must-reproduce item into the first number the theory would predict (X6). If the disproof list resists, it is the first thing to rule out. **2026-10-07:** X6 as a ratio of single ranks cannot land on the measured bound, which is irrational; the ratio placed on pairings gives exactly one third (X7, speculation, low). Composition (O2) now has a number to be tested against.

In order, each a PR, each with what would make it fail stated first:

1. **Fold the first review into the framework.** Done in the second PR, by one move of Izzy's: exhaustion relativised to the vantage, the self-relation admitted as the zero of self-vantage, which closes both forks (A3 and the point) at once; A5 weakened to multiplicity; C3 added; the node/point divergence dissolved in the notes. Remaining from the review: nothing structural; the jumps below.
2. **Verify the literature table** (`reviews/2026-10-05-first-review.md` §4). Gemini checks every citation when its credits return; anything that does not hold is struck, not softened. The access PR for four read-only domains in the sandbox firewall (arXiv, Semantic Scholar's API, nLab, the Stanford Encyclopedia) is the alternative route, Izzy's decision.
3. **J1: independence without probability**, opened 2026-10-06 and written up (framework D4, D5, D11–D15, P4, P5): structural independence at a level, the fold, memory as the level up, the grade as a ratio of ranks, density from memory. The three forks it opened (B3 the pair's +1, B4 the second sheet, B5 the grade) were removed or relocated the same night by the fork principle; what remains is to derive X6, the correlation bound as a ratio of ranks, and the relational wording of composition (O2). Fails if the lab vantage's resolution is not a rank at all, i.e. if independence there is not structural.
4. **J2: composition as hypersets** (open item O2). Relations between relations as anti-founded graphs; closure as a cycle; the outside view as the bisimulation quotient. Fails if the quotient of a closed structure is not one state from outside.
5. **J3: saturation as bisimilarity, the level step as the quotient.** Tested inside J2's model.
6. **J4: dimension as a resolution result** (must-reproduce M4), a causal-set-style estimator on relational structures. Fails if no dimension-like invariant is measurable by the structure's own vantages.
7. **J5: loops and linking as terms** in a reflexive domain, the September question.
8. **J6: composition of grades** (O5): how a cut's grade changes when carried from one vantage to another through the vantage on both (D17). The micro–macro seam read as P7 and notes §14 says this is where the Math fails, summing drawings that share no paper. Fails if the transported grade depends on anything beyond the two vantages' grades and the +1's fold; and X7 fails if the composition rule does not yield one third of the pairing range untuned.

The check (`npm`-free: prettier and `scripts/check.mjs`) and the reviewer-policy status are the repo's two required statuses once they have run.
