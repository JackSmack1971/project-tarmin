import { describe, expect, it, vi } from "vitest";
import { commandForKey } from "./bindings";
import { InputController, type InputMode } from "./input-controller";

function key(code: string, target: EventTarget = { tagName: "CANVAS" } as unknown as EventTarget, repeat = false): KeyboardEvent {
  return { code, target, repeat, preventDefault: vi.fn() } as unknown as KeyboardEvent;
}

describe("keyboard input adapter", () => {
  it("maps physical keys to explicit commands", () => {
    expect(commandForKey("KeyW")).toBe("moveForward");
    expect(commandForKey("ArrowDown")).toBe("moveBackward");
    expect(commandForKey("KeyA")).toBe("turnLeft");
    expect(commandForKey("KeyD")).toBe("turnRight");
  });

  it("emits commands and never mutates state", () => {
    const listeners: ((event: KeyboardEvent) => void)[] = [];
    const emit = vi.fn(); let mode: InputMode = "active";
    const controller = new InputController({ target: { addEventListener: (_type, listener) => listeners.push(listener), removeEventListener: () => undefined }, emit, togglePause: vi.fn(), getMode: () => mode });
    controller.attach(); const event = key("KeyW"); listeners[0](event);
    expect(emit).toHaveBeenCalledWith("moveForward"); expect(event.preventDefault).toHaveBeenCalled();
    mode = "paused"; listeners[0](key("KeyW")); expect(emit).toHaveBeenCalledTimes(1);
  });

  it("ignores form focus and browser key repeat", () => {
    const listener: { current?: (event: KeyboardEvent) => void } = {};
    const emit = vi.fn();
    new InputController({ target: { addEventListener: (_type, callback) => { listener.current = callback; }, removeEventListener: () => undefined }, emit, togglePause: vi.fn(), getMode: () => "active" }).attach();
    listener.current?.(key("KeyW", { tagName: "INPUT" } as unknown as EventTarget));
    listener.current?.(key("KeyW", undefined, true));
    expect(emit).not.toHaveBeenCalled();
  });
});
