import type { PortalQuad } from "../game/portalProjection";
import type { Point, VisibleCellKind } from "../sim/state";
import type { MaterialId } from "./materials";

export type SceneSurface = "left" | "right" | "ceiling" | "floor" | "front";

export interface ProjectedGeometry {
  readonly depth: number;
  readonly surface: SceneSurface;
  readonly cell: Point;
  readonly quad: PortalQuad;
}

export interface ScenePrimitive {
  readonly geometry: ProjectedGeometry;
  readonly kind: VisibleCellKind;
  readonly material: MaterialId;
  readonly lightLevel: number;
  /** Stable presentation-only selector in [0, 3]. */
  readonly variation: number;
}

export interface ProjectedFeature {
  readonly kind: "archway";
  readonly depth: number;
  readonly cell: Point;
  readonly quad: PortalQuad;
  readonly lightLevel: number;
}

export interface SceneDescription {
  readonly primitives: readonly ScenePrimitive[];
  readonly features: readonly ProjectedFeature[];
}
