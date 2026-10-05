# Framework

Textbook style: axioms, definitions, propositions with premise lists, conjectures, bifurcations, must-reproduce, open items. The trunk is what depends on axioms and definitions only. Draft 0 is from 2026-09-06; the verdicts of the first review (`reviews/2026-10-05-first-review.md`) are to be folded in by PR, one bifurcation at a time.

**Conventions.** A = axiom. D = definition. P = proposition, always with a premise list and a proof. C = corollary. X = conjecture, stated but not derived. B = bifurcation, a named choice point with branches. M = must-reproduce, empirical, never assumed. O = open item. Every item lists what it depends on; the **trunk** is what depends on A and D only; anything else names its branch. Attribution in brackets. Notation is borrowed from set theory and function application where convenient and is provisional. This document is written from a meta-vantage (thought), where arity-1 statements are allowed; the object level is continuous (A5), so classical two-valued logic here is a vantage on the structure, not the structure.

## Axioms

- **A1 (Relation).** There is a class R. Every element of R is a relation among elements of R. Nothing else is in R. [Izzy]
- **A2 (Relational existence).** For r, s ∈ R: r exists to s iff some t ∈ R has both r and s among its relata. There is no existence other than existence-to. [Izzy]
- **A3 (Exhaustion).** Whatever is consistent with A1–A5 is in R. Consistency is the only existence condition. [Izzy]
- **A4 (Arity).** Every relation has at least two relata. Arity is otherwise unconstrained. [Izzy]
- **A5 (Continuity).** What a relation bears is a distribution over distinctions, not a distinction. Discreteness is not primitive. [Izzy]

## Definitions

- **D1 (Vantage).** A vantage on r is any v ∈ R with r among its relata. Every relation has three views: inside(r), on(r), and outside_v(r) for each vantage v. [Izzy; naming mine] Depends: A1.
- **D2 (Distinction).** A distinction borne by r is an element of the support of what r bears. [mine] Depends: A5.
- **D3 (Resolution).** res_v(r) is the set of distinctions of r that v bears. [derived] Depends: D1, D2.
- **D4 (Independence).** Two distinctions in res_v(r) are independent from v iff neither is conditioned on the other in what v bears. [mine] Depends: D3. **Pending O1** ("conditioned" undefined).
- **D5 (Rank).** rank_v(r) is the number of mutually independent distinctions in res_v(r). [mine] Depends: D4. **Pending O1, O3.**
- **D6 (Informational point).** r is a point to v iff rank_v(r) = 1. [Izzy: a consequence, not a formalization] Depends: D5.
- **D7 (Null relation).** 0 ∈ R is the relation that bears no distinction to any vantage. Exists by A3 if consistent. [Izzy: units-level; mine: the zero] Depends: A3, D3.
- **D8 (Closure).** r is closed iff some composition of r with itself is indistinguishable from 0 to some vantage. [mine] Depends: D7, **D9 pending O2.**
- **D9 (Composition).** Pending O2. [open]

## Propositions

- **P1 (No bottom).** No r ∈ R has a relatum outside R. Premises: A1. Proof: A1 states it. Trunk. [derived]
- **C1 (A bottom is unverifiable).** "r has no inside" is not a statement any vantage can verify. Premises: A1, D1, D3, D6. Proof: if r had no inside, res_v(r) would be a single distinction for every v. But res_v(r) is also a single distinction for any r whose further distinctions v does not bear. The two cases are identical in every outside view. Trunk. [derived; mine]
- **C2 (No top).** For every v ∈ R there is a w ∈ R with v among its relata. Premises: A1, A3. Proof: such a w is consistent with A1–A5, hence in R by A3. Trunk. [derived]
- **P2 (Units are vantage-relative).** The distinction counted as one by v is whatever r has rank_v(r) = 1; a different vantage may give the same r a different rank. Premises: D5, D6. Proof: rank is indexed by v by construction. Trunk. Pending O1. [derived]

## Conjectures

- **X1 (No geometric point).** There is no r ∈ R with rank_v(r) = 1 for every vantage v. [Izzy's claim; I could not derive it.] Attempted route: r has relata a, b by A4; a is a vantage on r by D1; whether a bears more than one distinction of r is not fixed by anything above. Needs D9 or a stronger A4. Not trunk.
- **X2 (Discreteness only at closure).** Any r with a finite rank to some v is closed in the sense of D8. [Izzy] Pending O2.

## Bifurcations

- **B1 (Ambient rank).** (a) There is an ambient of definite rank n in which relations are drawn, with separation and transversality available. (b) There is no ambient; rank exists only via D5. The rank-3 argument (notes §4) lives entirely on B1.a. The trunk contains no statement about 3+1. Izzy's expectation is that (b) is the framework and (a) is a vantage on it; if so, 3 must be recovered as a rank a vantage resolves.

## Must reproduce

- **M1.** Correlations across a measured pair are carried by the pair, not by either member.
- **M2.** A member's outside view does not change with the other member's choices.
- **M3.** The shared correlation is bounded at a measured value, above the classical and below the no-steering maximum.
- **M4.** 3+1 as observed, as a resolution result.
- **M5.** The observed information-energy conversion, including its observer-environment factor.

## Open

- **O1.** "Conditioned" (D4) has no definition without probability. Candidate: define it on the distribution in A5.
- **O2.** Composition (D9). When a relation is related to another relation, what is the outside view of that?
- **O3.** D5 defines rank via a vantage, and a vantage is a relation with a rank. Show the recursion has a fixed point, and whether it is unique.
