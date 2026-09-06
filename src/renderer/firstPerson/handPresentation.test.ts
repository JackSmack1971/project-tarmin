import { describe, expect, it } from "vitest";
import { createInitialState } from "../../sim/state";
import { resolveFirstPersonPresentation } from "./handPresentation";

describe("first-person hand presentation", () => {
  it("derives both slots from canonical equipment and presentation IDs", () => {
    const state = createInitialState(7391);
    const presentation = resolveFirstPersonPresentation(state);
    expect(presentation.assetId).toBe("fp-hands-empty");
    expect(presentation.left).toMatchObject({ itemId: "item-ember-pike-1", presentationId: "pike" });
    expect(presentation.right).toMatchObject({ itemId: null, presentationId: null });
  });

  it("keeps the empty-hand asset when equipped art is unsupported", () => {
    const state = createInitialState(7391);
    const presentation = resolveFirstPersonPresentation({ ...state, rightHand: "item-moss-tonic-1" });
    expect(presentation.assetId).toBe("fp-hands-empty");
    expect(presentation.right.presentationId).toBe("tonic");
  });
});
