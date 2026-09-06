# Checkpoint save acceptance

This slice implements the current working assumption from `docs/GOALS.md` and
`docs/OPEN_QUESTIONS.md`: one checkpoint bridges browser sessions, while death
or victory ends the checkpoint permanently.

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| S1 | Playing canonical state round-trips through a versioned envelope. | `src/save/checkpoint.test.ts` | passed |
| S2 | Malformed, unsupported, unavailable, and terminal storage states fail safely. | focused save tests and defensive adapter inspection | passed |
| S3 | A fresh run and every playing command update the checkpoint. | `MainScene` integration and Chromium reload flow | passed |
| S4 | Continue restores the latest state after a browser reload. | Chromium checkpoint acceptance | passed |
| S5 | Defeat and victory clear the checkpoint. | simulation terminal wiring and Chromium MVP/defeat flows | passed |
| S6 | Required checks pass. | typecheck, lint, test, browser, build, acceptance/control-plane, diff check | passed |

The checkpoint/death policy remains a documented working assumption rather than
a new approved design decision; the owner decision in `docs/OPEN_QUESTIONS.md`
is still required before treating that policy as final.
