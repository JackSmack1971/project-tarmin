import type { SceneSurface } from "./scene";
import type { VisibleCellKind } from "../sim/state";

export type MaterialId =
  | "crypt-stone"
  | "burial-masonry"
  | "basalt"
  | "timber-door"
  | "iron-door"
  | "floor-stone"
  | "ceiling-stone"
  | "darkness";

export interface MaterialDefinition {
  readonly id: MaterialId;
  readonly atlasRegion: string;
  readonly fallbackColor: number;
  readonly repeat: "tile" | "stretch";
}

export const MATERIALS: Readonly<Record<MaterialId, MaterialDefinition>> = {
  "crypt-stone": { id: "crypt-stone", atlasRegion: "crypt-stone", fallbackColor: 0x4a4a2c, repeat: "tile" },
  "burial-masonry": { id: "burial-masonry", atlasRegion: "burial-masonry", fallbackColor: 0x3e3d2b, repeat: "tile" },
  basalt: { id: "basalt", atlasRegion: "basalt", fallbackColor: 0x242820, repeat: "tile" },
  "timber-door": { id: "timber-door", atlasRegion: "timber-door", fallbackColor: 0x665735, repeat: "stretch" },
  "iron-door": { id: "iron-door", atlasRegion: "iron-door", fallbackColor: 0x4b4e43, repeat: "stretch" },
  "floor-stone": { id: "floor-stone", atlasRegion: "floor-stone", fallbackColor: 0x343629, repeat: "tile" },
  "ceiling-stone": { id: "ceiling-stone", atlasRegion: "ceiling-stone", fallbackColor: 0x202519, repeat: "tile" },
  darkness: { id: "darkness", atlasRegion: "darkness", fallbackColor: 0x0e110b, repeat: "stretch" }
};

export function materialFor(kind: VisibleCellKind, surface: SceneSurface, variation: number): MaterialId {
  if (kind === "closed-door") return variation % 2 === 0 ? "timber-door" : "iron-door";
  if (kind === "passage" || kind === "open-door") return "darkness";
  if (surface === "floor") return "floor-stone";
  if (surface === "ceiling") return "ceiling-stone";
  return variation === 0 ? "crypt-stone" : variation === 1 ? "burial-masonry" : "basalt";
}
