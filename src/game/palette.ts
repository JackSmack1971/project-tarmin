export const DUNGEON_PALETTE = {
  backgroundVoid: 0x0a0c08,
  nearWall: 0x4a4a2c,
  middleWall: 0x2d321f,
  farWall: 0x171b11,
  floor: 0x343629,
  ceiling: 0x202519,
  passageDarkness: 0x0e110b,
  visibilityTerminus: 0x050604,
  door: 0x665735,
  hostileEntity: 0x9b5032,
  treasureItem: 0xc09a3c,
  playerStatus: 0x9eae68,
  warningDamage: 0xc65b3d,
  narrativeText: 0xc1b077,
  interfaceMuted: 0x7f8860,
  boundary: 0x586044
} as const;

export function paletteHex(color: number): string {
  return `#${color.toString(16).padStart(6, "0")}`;
}

export function shadeColor(color: number, amount: number): number {
  const red = (color >> 16) & 0xff;
  const green = (color >> 8) & 0xff;
  const blue = color & 0xff;
  return (Math.round(red * amount) << 16) | (Math.round(green * amount) << 8) | Math.round(blue * amount);
}
