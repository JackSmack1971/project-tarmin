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

/** Original 8×8 swatches; the SVG source is intentionally kept readable and editable. */
export const DUNGEON_SURFACE_ATLAS: PixelAtlas = {
  id: "tarmin-dungeon-surfaces-v1",
  source: "/assets/dungeon/dungeon-surfaces.svg",
  pixelSize: 8,
  width: 64,
  height: 8,
  regions: [
    { id: "crypt-stone", x: 0, y: 0, width: 8, height: 8 },
    { id: "burial-masonry", x: 8, y: 0, width: 8, height: 8 },
    { id: "basalt", x: 16, y: 0, width: 8, height: 8 },
    { id: "timber-door", x: 24, y: 0, width: 8, height: 8 },
    { id: "iron-door", x: 32, y: 0, width: 8, height: 8 },
    { id: "floor-stone", x: 40, y: 0, width: 8, height: 8 },
    { id: "ceiling-stone", x: 48, y: 0, width: 8, height: 8 },
    { id: "darkness", x: 56, y: 0, width: 8, height: 8 }
  ]
};
