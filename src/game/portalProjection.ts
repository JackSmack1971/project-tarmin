export type PortalFrame = Readonly<{ left: number; right: number; top: number; bottom: number }>;
export type PortalPoint = Readonly<{ x: number; y: number }>;
export type PortalQuad = readonly [PortalPoint, PortalPoint, PortalPoint, PortalPoint];

export const PORTAL_FRAMES: readonly PortalFrame[] = [
  { left: 0.03, right: 0.97, top: 0.04, bottom: 0.99 },
  { left: 0.1, right: 0.89, top: 0.13, bottom: 0.91 },
  { left: 0.255, right: 0.775, top: 0.285, bottom: 0.78 },
  { left: 0.38, right: 0.62, top: 0.39, bottom: 0.67 },
  { left: 0.448, right: 0.562, top: 0.455, bottom: 0.59 }
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
