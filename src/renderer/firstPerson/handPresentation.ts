import { itemById, type HandSlot } from "../../content/items";
import type { GameState } from "../../sim/state";

export interface FirstPersonHandSlot {
  readonly hand: HandSlot;
  readonly itemId: string | null;
  readonly presentationId: string | null;
}

export interface FirstPersonPresentation {
  readonly assetId: "fp-hands-empty";
  readonly left: FirstPersonHandSlot;
  readonly right: FirstPersonHandSlot;
}

function resolveSlot(state: GameState, hand: HandSlot): FirstPersonHandSlot {
  const itemId = hand === "left" ? state.leftHand : state.rightHand;
  const item = itemId ? state.items.find((instance) => instance.id === itemId) : undefined;
  return { hand, itemId, presentationId: item ? itemById(item.definitionId)?.presentationId ?? null : null };
}

/**
 * Resolves presentation metadata from canonical equipment references. The
 * current runtime has no approved held-object art, so both states use the
 * empty-hand asset; the item metadata remains available for a later composer.
 */
export function resolveFirstPersonPresentation(state: GameState): FirstPersonPresentation {
  return { assetId: "fp-hands-empty", left: resolveSlot(state, "left"), right: resolveSlot(state, "right") };
}
