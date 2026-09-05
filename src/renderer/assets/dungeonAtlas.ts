export interface AtlasRegion {
  readonly id: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface PixelAtlas {
  readonly id: string;
  readonly source: string;
  readonly pixelSize: number;
  readonly width: number;
  readonly height: number;
  readonly regions: readonly AtlasRegion[];
}

/**
 * Authored 32×32 Project Tarmin regions. Each has a copied one-pixel gutter in
 * the PNG; regions retain their canonical bounds so renderer UVs stay semantic.
 */
export const DUNGEON_SURFACE_ATLAS: PixelAtlas = {
  id: "tarmin-dungeon-surfaces-v2",
  source: "/assets/dungeon/dungeon-surfaces.png",
  pixelSize: 32,
  width: 136,
  height: 68,
  regions: [
    { id: "crypt-stone", x: 1, y: 1, width: 32, height: 32 },
    { id: "burial-masonry", x: 35, y: 1, width: 32, height: 32 },
    { id: "basalt", x: 69, y: 1, width: 32, height: 32 },
    { id: "timber-door", x: 103, y: 1, width: 32, height: 32 },
    { id: "iron-door", x: 1, y: 35, width: 32, height: 32 },
    { id: "floor-stone", x: 35, y: 35, width: 32, height: 32 },
    { id: "ceiling-stone", x: 69, y: 35, width: 32, height: 32 },
    { id: "darkness", x: 103, y: 35, width: 32, height: 32 }
  ]
};
