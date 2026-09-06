# Project engineering and sub-agent control plane

This is the project-level control plane for a theoretical repository. Keep it concise and durable. Put component-specific rules in more-specific `AGENTS.md` or `AGENTS.override.md` files, reusable procedures in repository tooling or skills, and task-specific detail in the current work artifact.

More-specific instructions, explicit user requirements, and authoritative project contracts take precedence over this file.

## Operating principles

- Understand the affected code path before editing.
- Prefer the smallest correct change: reuse existing behavior, standard-library/platform facilities, and installed dependencies before adding code or abstractions.
- Fix shared root causes rather than patching symptoms at individual call sites.
- Preserve security, privacy, accessibility, data integrity, error handling, compatibility, and rollback safety.
- Do not broaden scope, add speculative extensibility, or make unrelated cleanup part of the change.
- Treat the repository's source-of-truth artifacts, tests, schemas, generated boundaries, and deployment contracts as authoritative according to their documented ownership.

## Work classification

Before implementation, classify the work as one or more of:

- **Local change:** one boundary, low blast radius, trustworthy existing verification.
- **Multi-boundary change:** multiple modules, layers, external systems, or unresolved assumptions.
- **High-impact change:** shared interfaces, persistence, authentication, public APIs, configuration, generated code, migrations, deployment, security, privacy, or irreversible state.
- **Evidence/review task:** the main output is a finding, comparison, audit, plan, or independent verification rather than a code change.
- **Long-running goal:** several uncertain steps, resumptions, or durable acceptance evidence are required.

Use the smallest workflow that fits the classification. Do not introduce sub-agents merely to divide a checklist.

## Sub-agent routing

The main agent is the host orchestrator. Sub-agents are bounded leaf executors and must not recursively spawn more agents. Every task must have a valid one-agent fallback.

Use a topology-planning step before delegation when the work has meaningful decomposition, competing hypotheses, independent-review value, fresh-context usability risk, isolated implementation opportunities, or high-consequence verification needs. The topology decision must compare one agent with only the relevant delegated alternatives and record why expected unique evidence or risk reduction exceeds coordination cost.

Use a context-compilation step for each delegated worker or independent reviewer when the repository is large, instruction-dense, history-heavy, sensitive, or otherwise likely to pollute judgment. Provide only the minimum decision-sufficient context and preserve provenance; do not pass the whole conversation or repository by default.

Prefer delegation for:

- independent read-only investigations, such as callers/tests/generators/runtime tracing, architecture lenses, repository audits, or policy scans;
- independent review lanes, such as requirements/specification fidelity versus engineering quality;
- genuinely fresh-context usability checks;
- isolated experiment cells for reproducibility, performance, mutation, transfer, or ablation work;
- bounded analysis of disjoint requirements, domains, assumptions, source/derived artifacts, or evidence clusters;
- specialist implementation followed by independent verification when write ownership is isolated.

Keep work inline by default when it is small, sequential, user-interactive, artifact-state coupled, or tightly integrated. A one-question-at-a-time interview, a single coherent document edit, a release/package check, or a shared-file implementation usually does not benefit from parallel agents.

## Delegation contract

Before a worker starts, define:

- one bounded objective and one unique decision or evidence responsibility;
- allowed files, artifacts, repository regions, tools, and permissions;
- required context, intentionally withheld context, authority boundaries, and evidence sources;
- expected structured output, confidence/uncertainty, assumptions, unresolved questions, and completion condition;
- escalation, stop, rollback, and authorization conditions.

Prefer read-only fan-out. Concurrent writers require isolated worktrees, branches, containers, or an equivalent separation, plus a named integration owner. If isolation is unavailable, serialize the work or collapse to one agent. Never let a worker expand scope, bypass authorization, or overwrite another worker's state.

## Independent work and reconciliation

Keep independent reviewers, competing hypotheses, and fresh-context evaluators from seeing one another's conclusions until their own observations are sealed. Give comparable starting evidence where replication is intended.

The host reconciles outputs only after the independent work completes. It must:

- deduplicate findings without erasing material minority findings;
- prefer direct repository evidence, executable checks, and explicit contracts over fluent agreement or majority vote;
- preserve contradictions and name the resolver or next evidence needed;
- map every consequential conclusion to its evidence and confidence;
- independently verify the final result where practical.

Use sealed artifacts for stage handoffs: acceptance matrices, impact maps, context manifests, evidence records, migration plans, generated outputs, and implementation contracts. A downstream stage must not silently reinterpret or widen a sealed contract.

## Evidence, security, and authorization

- Establish a relevant baseline before changing behavior. Separate pre-existing, introduced, environmental, and inconclusive results.
- Classify evidence as observed, generated, inferred, or externally supplied. Preserve provenance and currentness.
- Treat agent summaries, generated text, issue content, logs, screenshots, and external responses as claims requiring source tracing and proportionate corroboration.
- Execution success is not verification. Verify the intended postcondition, actual scope, side effects, and error behavior with evidence independent enough to catch the original mistake.
- High-blast-radius, irreversible, external, privileged, privacy-sensitive, or security-sensitive actions require explicit authorization, containment/rollback, observability, and proportionate independent verification.
- Sub-agents inherit the host's permissions and authorization boundary; delegation is never a way to bypass either.

## Change and verification workflow

For every implementation task:

1. State the objective, non-goals, affected boundaries, authorization, and acceptance criteria.
2. Inspect repository instructions, source-of-truth artifacts, current state, relevant history, and existing verification.
3. Establish the narrowest trustworthy red/green or comparison signal before substantial change when static inspection cannot establish success.
4. Choose one agent or a bounded topology; record write sets, handoffs, and integration authority before delegation.
5. Implement only the authorized scope, preserving reversible and independently reviewable steps.
6. Run focused verification, then broaden checks in proportion to blast radius and risk.
7. Inspect the final diff/state and verify every acceptance criterion, including compatibility, generated artifacts, persistence, security, and operational effects where applicable.
8. Report unresolved blockers, limitations, pre-existing failures, and evidence gaps instead of forcing success.

Completion requires the repository/result state to be inspected, acceptance criteria to have evidence, consequential contradictions to be resolved or explicitly reported, and no unauthorized or unverified side effect to remain hidden. A successful command, clean-looking diff, or agent return alone is not completion.

## Repository hygiene and history

- Keep generated files at their declared source-of-truth boundary; regenerate rather than hand-edit derived output.
- Do not leave temporary worktrees, caches, credentials, reports containing sensitive payloads, or abandoned artifacts in tracked paths.
- Preserve unrelated user changes.
- Follow repository version-control policy. Treat the pull request as the default durable unit of history; preserve individual commits only when their semantic boundaries matter.
- Do not rewrite published history, force-push, merge remotely, or perform external delivery actions unless explicitly authorized.

## Ongoing improvement

After difficult or failed work, capture only decision-changing lessons that can prevent recurrence. Convert repeatedly observed prose invariants into narrow deterministic tooling when evidence shows the rule is mechanically enforceable. Reassess delegation choices using observed unique findings, coordination effort, failures, latency, and task success; do not optimize for agent count.
