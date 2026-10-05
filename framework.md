# Framework

Textbook style: axioms, definitions, propositions with premise lists, conjectures, bifurcations, must-reproduce, open items. The trunk is what depends on axioms and definitions only. Draft 0 is from 2026-09-06; the verdicts of the first review (`reviews/2026-10-05-first-review.md`) are to be folded in by PR, one bifurcation at a time.

**Conventions.** A = axiom. D = definition. P = proposition, always with a premise list and a proof. C = corollary. X = conjecture, stated but not derived. B = bifurcation, a named choice point with branches. M = must-reproduce, empirical, never assumed. O = open item. Every item lists what it depends on; the **trunk** is what depends on A and D only; anything else names its branch. Attribution in brackets. Notation is borrowed from set theory and function application where convenient and is provisional. This document is written from a meta-vantage (thought), where arity-1 statements are allowed; the object level is continuous (A5), so classical two-valued logic here is a vantage on the structure, not the structure.

## Axioms

- **A1 (Relation).** There is a class R. Every element of R is a relation among elements of R. Nothing else is in R. [Izzy]
- **A2 (Relational existence).** For r, s ∈ R: r exists to s iff some t ∈ R has both r and s among its relata. There is no existence other than existence-to. [Izzy]
- **A3 (Exhaustion, relative).** For every vantage v: whatever is consistent with what v resolves exists to v. Consistency is judged by the vantage over what it bears; there is no global consistency condition and none is needed. [Izzy; relativised 2026-10-05 after the first review showed the absolute form admits the relation of all relations not among their own relata, Russell's contradiction. Izzy: index membership to the vantage and the singularity is read, not removed: the self-vantage (D10) is where the absolute form divided by zero, and the absolute quantifier that remains is O4.]
- **A4 (Arity).** Every relation has at least two relata. Arity is otherwise unconstrained. [Izzy]
- **A5 (Multiplicity).** What a relation bears is a multiplicity of distinctions, never a single one; discreteness is not primitive. Quantity (a measure over distinctions) is derived, not assumed: the first review found that "distribution" imported the real numbers, a bottom made of numbers. [Izzy; weakened 2026-10-05]

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
- **D10 (Self-vantage).** A relation whose relata are the same relation, r(a, a). It is a vantage on itself (D1) and bears exactly one distinction to every vantage: it is the geometric point, the tautology, the zero of self-vantage beside the null relation (D7). Admitted, not excluded: it is what makes A3 consistent, because a question a vantage asks about itself has no content there and a plain answer from any other vantage. [Izzy's October "a self intersection only is a tautology"; the admission and its role, 2026-10-05]

## Propositions

- **P1 (No bottom).** No r ∈ R has a relatum outside R. Premises: A1. Proof: A1 states it. Trunk. [derived]
- **C1 (A bottom is unverifiable).** "r has no inside" is not a statement any vantage can verify. Premises: A1, D1, D3, D6. Proof: if r had no inside, res_v(r) would be a single distinction for every v. But res_v(r) is also a single distinction for any r whose further distinctions v does not bear. The two cases are identical in every outside view. Trunk. [derived; mine]
- **C2 (No top).** For every v ∈ R there is a w ∈ R with v among its relata. Premises: A1, A3. Proof: such a w is consistent with A1–A5, hence in R by A3. Trunk. [derived]
- **C3 (Nothing is everything).** The total relation (everything: no external relation, A2) and the null relation (D7: no distinction to any vantage) are indistinguishable from outside, because there is no outside of either. Premises: A2, D7. Proof: an outside view is a vantage with the relation among its relata; the total relation has none by A2; the null relation presents none by D7; the two outside views are both empty. Trunk. [Izzy's "nothing is everything", 2026-10-03; the proposition form, mine]
- **P3 (The paradox is a self-vantage).** The relation r* whose relata, to v, are the relations not among their own relata to v, is among its own relata to w iff not, only when w = r*, i.e. only from the self-vantage, where by D10 no distinction is borne. From every other vantage the question has one answer. Premises: A3 (relative), D1, D10. Proof sketch: the defining condition quantifies over facts to v; the question is a fact to w; the contradiction requires w to be the vantage in its own condition, which is D10. Trunk, **sketch**: a model must show that no relation other than the self-relation can be its own vantage at the same level (J0). [Izzy's move; the write-up, mine]
- **P2 (Units are vantage-relative).** The distinction counted as one by v is whatever r has rank_v(r) = 1; a different vantage may give the same r a different rank. Premises: D5, D6. Proof: rank is indexed by v by construction. Trunk. Pending O1. [derived]

## Conjectures

- **X1 (No geometric point), RESOLVED 2026-10-05.** There is exactly one: the self-relation D10, which bears no information. Every other relation has distinct relata to some vantage and so rank ≥ 2 there. The September claim "a point is a bottom, hence does not exist" becomes: a point exists and is empty. [Izzy; the earlier conjecture withdrawn by the resolution]
- **X2 (Discreteness only at closure).** Any r with a finite rank to some v is closed in the sense of D8. [Izzy] Pending O2.

## Bifurcations

- **B2 (The point), CLOSED 2026-10-05.** (a) exclude the self-relation by axiom; (b) admit it as the zero of self-vantage. Closed on (b) by the same move that relativised A3: (a) would leave A3 without the place where its singularity goes. [Izzy]
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
- **O4.** "For every vantage v" in A3 and P3 is itself an absolute quantification: the framework's own meta-vantage, where the singularity read out of the content now sits. Declared as the framework's edge (notes §1); to be shown harmless in the model of J0.
