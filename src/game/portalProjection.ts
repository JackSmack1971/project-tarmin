export type PortalFrame = Readonly<{ left: number; right: number; top: number; bottom: number }>;
export type PortalPoint = Readonly<{ x: number; y: number }>;
export type PortalQuad = readonly [PortalPoint, PortalPoint, PortalPoint, PortalPoint];

export const PORTAL_FRAMES: readonly PortalFrame[] = [
  { left: 0, right: 1, top: 0, bottom: 1 },
  { left: 0.17, right: 0.83, top: 0.23, bottom: 0.8 },
  { left: 0.3, right: 0.7, top: 0.345, bottom: 0.685 },
  { left: 0.39, right: 0.61, top: 0.415, bottom: 0.625 },
  { left: 0.45, right: 0.55, top: 0.455, bottom: 0.585 }
] as const;

export function frameToPixels(frame: PortalFrame, width: number, height: number): PortalFrame {
  return { left: frame.left * width, right: frame.right * width, top: frame.top * height, bottom: frame.bottom * height };
}

export function intervalQuads(near: PortalFrame, far: PortalFrame): Readonly<{
  leftWall: PortalQuad;
  rightWall: PortalQuad;
  ceiling: PortalQuad;
  floor: PortalQuad;
}> {
  const tl = { x: near.left, y: near.top };
  const tr = { x: near.right, y: near.top };
  const bl = { x: near.left, y: near.bottom };
  const br = { x: near.right, y: near.bottom };
  const ftl = { x: far.left, y: far.top };
  const ftr = { x: far.right, y: far.top };
  const fbl = { x: far.left, y: far.bottom };
  const fbr = { x: far.right, y: far.bottom };
  return {
    leftWall: [tl, ftl, fbl, bl],
    rightWall: [ftr, tr, br, fbr],
    ceiling: [tl, tr, ftr, ftl],
    floor: [bl, fbl, fbr, br]
  };
}
