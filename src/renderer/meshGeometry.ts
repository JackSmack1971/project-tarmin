import { DUNGEON_SURFACE_ATLAS } from "./assets/dungeonAtlas";
import { MATERIALS, type MaterialId } from "./materials";
import type { PortalQuad, PortalPoint } from "../game/portalProjection";

export type MeshUv = readonly [number, number];

/** Maps a portal quad's four projected corners to one atlas swatch. */
export function atlasUvQuad(material: MaterialId): readonly [MeshUv, MeshUv, MeshUv, MeshUv] {
  const atlasRegion = MATERIALS[material].atlasRegion;
  const region = DUNGEON_SURFACE_ATLAS.regions.find(({ id }) => id === atlasRegion);
  if (!region) throw new Error(`Missing dungeon atlas region for ${material}`);
  const inset = 0.25;
  const left = (region.x + inset) / DUNGEON_SURFACE_ATLAS.width;
  const right = (region.x + region.width - inset) / DUNGEON_SURFACE_ATLAS.width;
  const top = (region.y + inset) / DUNGEON_SURFACE_ATLAS.height;
  const bottom = (region.y + region.height - inset) / DUNGEON_SURFACE_ATLAS.height;
  return [[left, top], [right, top], [right, bottom], [left, bottom]];
}

export function meshVertices(quad: PortalQuad, material: MaterialId): number[] {
  const uv = atlasUvQuad(material);
  return quad.flatMap((point: PortalPoint, index) => [point.x, point.y, uv[index][0], uv[index][1]]);
}

export const QUAD_INDICES = [0, 1, 2, 0, 0, 2, 3, 0] as const;
