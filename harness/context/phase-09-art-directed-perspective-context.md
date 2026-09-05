# Phase 9 art-directed perspective context

- Scope: visual projection composition only. Do not change simulation visibility, integer coordinates, facing, movement, blocker rules, or renderer-neutral primitive ordering.
- `src/game/portalProjection.ts` owns normalized frame geometry. Frames must remain bounded, strictly nested, and far-to-near compatible with `intervalQuads()`.
- `src/renderer/perspective/perspectiveRenderer.ts` owns deterministic presentation metadata. Depth attenuation is presentation-only and must not affect topology or simulation.
- `MainScene` owns the logical viewport composition. Keep the viewport within the 1280×720 surface and preserve header/footer shell lanes.
- Runtime evidence uses URL fixtures at 1280×720 and 1920×1080, WebGL context inspection, primitive state inspection, and screenshots. GPU ReadPixels warnings caused by headless screenshot capture are environment noise if no app errors occur; record them separately from application warnings.
