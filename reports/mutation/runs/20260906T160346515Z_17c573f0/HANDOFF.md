# Mutation Testing Handoff — 20260906T160346515Z_17c573f0

**Commit:** `17c573f05c22479d23ca576b6655709375ac4d3c`  
**Scope:** configured mutation universe (forced-refresh)  
**Mutation score:** 0.00%  
**Detected:** 0 / 2796 valid mutants  
**Survived:** 1402  
**No coverage:** 1394  
**Timeout:** 0  
**Execution-error statuses:** 0

This run produced conclusive mutation evidence.

## Per-file evidence

| File | Score | Detected/Valid | Survived | No coverage | Exec errors |
|---|---:|---:|---:|---:|---:|
| `src/sim/state.ts` | 0.00% | 0/665 | 588 | 77 | 0 |
| `src/game/seed.ts` | 0.00% | 0/19 | 17 | 2 | 0 |
| `src/game/portalProjection.ts` | 0.00% | 0/20 | 14 | 6 | 0 |
| `src/game/palette.ts` | 0.00% | 0/7 | 0 | 7 | 0 |
| `src/game/renderFixtures.ts` | 0.00% | 0/109 | 0 | 109 | 0 |
| `src/game/MainScene.ts` | 0.00% | 0/649 | 0 | 649 | 0 |
| `src/renderer/perspective/perspectiveRenderer.ts` | 0.00% | 0/166 | 163 | 3 | 0 |
| `src/renderer/meshGeometry.ts` | 0.00% | 0/27 | 26 | 1 | 0 |
| `src/input/bindings.ts` | 0.00% | 0/61 | 47 | 14 | 0 |
| `src/input/input-controller.ts` | 0.00% | 0/33 | 28 | 5 | 0 |
| `src/content/registry.ts` | 0.00% | 0/90 | 84 | 6 | 0 |
| `src/audio/healthCue.ts` | 0.00% | 0/115 | 24 | 91 | 0 |
| `src/audio/actionCue.ts` | 0.00% | 0/83 | 17 | 66 | 0 |
| `src/audio/ambientCue.ts` | 0.00% | 0/84 | 2 | 82 | 0 |
| `src/main.ts` | 0.00% | 0/268 | 0 | 268 | 0 |
| `src/save/checkpoint.ts` | 0.00% | 0/102 | 94 | 8 | 0 |
| `src/sim/rng.ts` | 0.00% | 0/11 | 11 | 0 | 0 |
| `src/renderer/materials.ts` | 0.00% | 0/73 | 73 | 0 | 0 |
| `src/renderer/entities/entityProjection.ts` | 0.00% | 0/116 | 116 | 0 | 0 |
| `src/renderer/firstPerson/handPresentation.ts` | 0.00% | 0/17 | 17 | 0 | 0 |
| `src/content/monsters.ts` | 0.00% | 0/21 | 21 | 0 | 0 |
| `src/content/items.ts` | 0.00% | 0/40 | 40 | 0 | 0 |
| `src/renderer/assets/dungeonAtlas.ts` | 0.00% | 0/20 | 20 | 0 | 0 |

## Actionable undetected mutants

### 1. `src/sim/state.ts:44` — NoCoverage / AssignmentOperator

Original:

```text
ursor -= entry.weight;
```

Mutated replacement:

```text
cursor += entry.weight
```

### 2. `src/sim/state.ts:46` — NoCoverage / ArithmeticOperator

Original:

```text
able.length - 1]
```

Mutated replacement:

```text
table.length + 1
```

### 3. `src/sim/state.ts:67` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [] };
```

Mutated replacement:

```text
{}
```

### 4. `src/sim/state.ts:67` — NoCoverage / ArrayDeclaration

Original:

```text
] 
```

Mutated replacement:

```text
["Stryker was here"]
```

### 5. `src/sim/state.ts:100` — NoCoverage / ObjectLiteral

Original:

```text
 ...state, rngState: rng.state, monsters: defeated, encounter: null },
```

Mutated replacement:

```text
{}
```

### 6. `src/sim/state.ts:102` — NoCoverage / LogicalOperator

Original:

```text
temById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0)
```

Mutated replacement:

```text
itemById(state.items.find(value => value.id === state.leftHand)?.definitionId ?? "")?.defense && 0
```

### 7. `src/sim/state.ts:102` — NoCoverage / OptionalChaining

Original:

```text
temById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense 
```

Mutated replacement:

```text
itemById(state.items.find(value => value.id === state.leftHand)?.definitionId ?? "").defense
```

### 8. `src/sim/state.ts:102` — NoCoverage / LogicalOperator

Original:

```text
tate.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")
```

Mutated replacement:

```text
state.items.find(value => value.id === state.leftHand)?.definitionId && ""
```

### 9. `src/sim/state.ts:102` — NoCoverage / OptionalChaining

Original:

```text
tate.items.find((value) => value.id === state.leftHand)?.definitionId 
```

Mutated replacement:

```text
state.items.find(value => value.id === state.leftHand).definitionId
```

### 10. `src/sim/state.ts:102` — NoCoverage / ArrowFunction

Original:

```text
value) => value.id === state.leftHand)
```

Mutated replacement:

```text
() => undefined
```

### 11. `src/sim/state.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
alue.id === state.leftHand)
```

Mutated replacement:

```text
true
```

### 12. `src/sim/state.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
alue.id === state.leftHand)
```

Mutated replacement:

```text
false
```

### 13. `src/sim/state.ts:102` — NoCoverage / EqualityOperator

Original:

```text
alue.id === state.leftHand)
```

Mutated replacement:

```text
value.id !== state.leftHand
```

### 14. `src/sim/state.ts:102` — NoCoverage / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 15. `src/sim/state.ts:121` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "emptyRing" }] };
```

Mutated replacement:

```text
{}
```

### 16. `src/sim/state.ts:121` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "emptyRing" }] 
```

Mutated replacement:

```text
[]
```

### 17. `src/sim/state.ts:121` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "emptyRing" }]
```

Mutated replacement:

```text
{}
```

### 18. `src/sim/state.ts:121` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 19. `src/sim/state.ts:121` — NoCoverage / StringLiteral

Original:

```text
emptyRing" 
```

Mutated replacement:

```text
""
```

### 20. `src/sim/state.ts:127` — NoCoverage / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 21. `src/sim/state.ts:128` — NoCoverage / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 22. `src/sim/state.ts:129` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
```

Mutated replacement:

```text
{}
```

### 23. `src/sim/state.ts:129` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "invalidAction" }] 
```

Mutated replacement:

```text
[]
```

### 24. `src/sim/state.ts:129` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "invalidAction" }]
```

Mutated replacement:

```text
{}
```

### 25. `src/sim/state.ts:129` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 26. `src/sim/state.ts:129` — NoCoverage / StringLiteral

Original:

```text
invalidAction" 
```

Mutated replacement:

```text
""
```

### 27. `src/sim/state.ts:130` — NoCoverage / StringLiteral

Original:

```text
leftHand" 
```

Mutated replacement:

```text
""
```

### 28. `src/sim/state.ts:134` — NoCoverage / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 29. `src/sim/state.ts:135` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
```

Mutated replacement:

```text
{}
```

### 30. `src/sim/state.ts:135` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "invalidAction" }] 
```

Mutated replacement:

```text
[]
```

### 31. `src/sim/state.ts:135` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "invalidAction" }]
```

Mutated replacement:

```text
{}
```

### 32. `src/sim/state.ts:135` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 33. `src/sim/state.ts:135` — NoCoverage / StringLiteral

Original:

```text
invalidAction" 
```

Mutated replacement:

```text
""
```

### 34. `src/sim/state.ts:141` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "noLoot" }] };
```

Mutated replacement:

```text
{}
```

### 35. `src/sim/state.ts:141` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "noLoot" }] 
```

Mutated replacement:

```text
[]
```

### 36. `src/sim/state.ts:141` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "noLoot" }]
```

Mutated replacement:

```text
{}
```

### 37. `src/sim/state.ts:141` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 38. `src/sim/state.ts:141` — NoCoverage / StringLiteral

Original:

```text
noLoot" 
```

Mutated replacement:

```text
""
```

### 39. `src/sim/state.ts:142` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "inventoryFull" }] };
```

Mutated replacement:

```text
{}
```

### 40. `src/sim/state.ts:142` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "inventoryFull" }] 
```

Mutated replacement:

```text
[]
```

### 41. `src/sim/state.ts:142` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "inventoryFull" }]
```

Mutated replacement:

```text
{}
```

### 42. `src/sim/state.ts:142` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 43. `src/sim/state.ts:142` — NoCoverage / StringLiteral

Original:

```text
inventoryFull" 
```

Mutated replacement:

```text
""
```

### 44. `src/sim/state.ts:146` — NoCoverage / BlockStatement

Original:

```text

    const itemId = selected(state);
    if (!itemId || itemId === state.leftHand || itemId === state.rightHand) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, loot: [...state.loot, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value) }, {}), events: [{ type: "itemDropped", itemId }] };
  }
```

Mutated replacement:

```text
{}
```

### 45. `src/sim/state.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
itemId || itemId === state.leftHand || itemId === state.rightHand)
```

Mutated replacement:

```text
true
```

### 46. `src/sim/state.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
itemId || itemId === state.leftHand || itemId === state.rightHand)
```

Mutated replacement:

```text
false
```

### 47. `src/sim/state.ts:148` — NoCoverage / LogicalOperator

Original:

```text
itemId || itemId === state.leftHand || itemId === state.rightHand)
```

Mutated replacement:

```text
(!itemId || itemId === state.leftHand) && itemId === state.rightHand
```

### 48. `src/sim/state.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
itemId || itemId === state.leftHand 
```

Mutated replacement:

```text
false
```

### 49. `src/sim/state.ts:148` — NoCoverage / LogicalOperator

Original:

```text
itemId || itemId === state.leftHand 
```

Mutated replacement:

```text
!itemId && itemId === state.leftHand
```

### 50. `src/sim/state.ts:148` — NoCoverage / BooleanLiteral

Original:

```text
itemId 
```

Mutated replacement:

```text
itemId
```

### 51. `src/sim/state.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
temId === state.leftHand 
```

Mutated replacement:

```text
false
```

### 52. `src/sim/state.ts:148` — NoCoverage / EqualityOperator

Original:

```text
temId === state.leftHand 
```

Mutated replacement:

```text
itemId !== state.leftHand
```

### 53. `src/sim/state.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
temId === state.rightHand)
```

Mutated replacement:

```text
false
```

### 54. `src/sim/state.ts:148` — NoCoverage / EqualityOperator

Original:

```text
temId === state.rightHand)
```

Mutated replacement:

```text
itemId !== state.rightHand
```

### 55. `src/sim/state.ts:148` — NoCoverage / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
```

Mutated replacement:

```text
{}
```

### 56. `src/sim/state.ts:148` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "invalidAction" }] 
```

Mutated replacement:

```text
[]
```

### 57. `src/sim/state.ts:148` — NoCoverage / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "invalidAction" }]
```

Mutated replacement:

```text
{}
```

### 58. `src/sim/state.ts:148` — NoCoverage / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 59. `src/sim/state.ts:148` — NoCoverage / StringLiteral

Original:

```text
invalidAction" 
```

Mutated replacement:

```text
""
```

### 60. `src/sim/state.ts:149` — NoCoverage / MethodExpression

Original:

```text
tate.ring.filter((id) => id !== itemId);
```

Mutated replacement:

```text
state.ring
```

### 61. `src/sim/state.ts:149` — NoCoverage / ArrowFunction

Original:

```text
id) => id !== itemId)
```

Mutated replacement:

```text
() => undefined
```

### 62. `src/sim/state.ts:149` — NoCoverage / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
true
```

### 63. `src/sim/state.ts:149` — NoCoverage / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
false
```

### 64. `src/sim/state.ts:149` — NoCoverage / EqualityOperator

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
id === itemId
```

### 65. `src/sim/state.ts:150` — NoCoverage / ObjectLiteral

Original:

```text
 state: advance({ ...state, ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, loot: [...state.loot, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value) }, {}), events: [{ type: "itemDropped", itemId }] };
```

Mutated replacement:

```text
{}
```

### 66. `src/sim/state.ts:150` — NoCoverage / ObjectLiteral

Original:

```text
 ...state, ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, loot: [...state.loot, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value) },
```

Mutated replacement:

```text
{}
```

### 67. `src/sim/state.ts:150` — NoCoverage / ArithmeticOperator

Original:

```text
tate.selectedRingIndex % ring.length 
```

Mutated replacement:

```text
state.selectedRingIndex * ring.length
```

### 68. `src/sim/state.ts:150` — NoCoverage / ArrayDeclaration

Original:

```text
...state.loot, itemId],
```

Mutated replacement:

```text
[]
```

### 69. `src/sim/state.ts:150` — NoCoverage / ArrowFunction

Original:

```text
value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value)
```

Mutated replacement:

```text
() => undefined
```

### 70. `src/sim/state.ts:150` — NoCoverage / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
true
```

### 71. `src/sim/state.ts:150` — NoCoverage / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
false
```

### 72. `src/sim/state.ts:150` — NoCoverage / EqualityOperator

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
value.id !== itemId
```

### 73. `src/sim/state.ts:150` — NoCoverage / ObjectLiteral

Original:

```text
 ...value, location: "world", position: state.player.position } 
```

Mutated replacement:

```text
{}
```

### 74. `src/sim/state.ts:150` — NoCoverage / StringLiteral

Original:

```text
world",
```

Mutated replacement:

```text
""
```

### 75. `src/sim/state.ts:150` — NoCoverage / ArrayDeclaration

Original:

```text
{ type: "itemDropped", itemId }] 
```

Mutated replacement:

```text
[]
```

### 76. `src/sim/state.ts:150` — NoCoverage / ObjectLiteral

Original:

```text
 type: "itemDropped", itemId }]
```

Mutated replacement:

```text
{}
```

### 77. `src/sim/state.ts:150` — NoCoverage / StringLiteral

Original:

```text
itemDropped",
```

Mutated replacement:

```text
""
```

### 78. `src/sim/state.ts:24` — Survived / ObjectLiteral

Original:

```text
 position } 
```

Mutated replacement:

```text
{}
```

### 79. `src/sim/state.ts:20` — Survived / StringLiteral

Original:

```text
${point.x},${point.y}`;
```

Mutated replacement:

```text
``
```

### 80. `src/sim/state.ts:26` — Survived / BlockStatement

Original:

```text

  const definition = monsterById(monster.definitionId)!;
  return { id: monster.id, definitionId: definition.id, name: definition.name, health: monster.health, maxHealth: definition.vitality, attack: definition.attack, position: monster.position };
}
```

Mutated replacement:

```text
{}
```

### 81. `src/sim/state.ts:28` — Survived / ObjectLiteral

Original:

```text
 id: monster.id, definitionId: definition.id, name: definition.name, health: monster.health, maxHealth: definition.vitality, attack: definition.attack, position: monster.position };
```

Mutated replacement:

```text
{}
```

### 82. `src/sim/state.ts:24` — Survived / ObjectLiteral

Original:

```text
 id, definitionId, location, ...(position ? { position } : {}) })
```

Mutated replacement:

```text
{}
```

### 83. `src/sim/state.ts:32` — Survived / ArrowFunction

Original:

```text
monster) => !monster.defeated && key(monster.position) === key(position))
```

Mutated replacement:

```text
() => undefined
```

### 84. `src/sim/state.ts:32` — Survived / ConditionalExpression

Original:

```text
monster.defeated && key(monster.position) === key(position))
```

Mutated replacement:

```text
true
```

### 85. `src/sim/state.ts:31` — Survived / BlockStatement

Original:

```text

  return state.monsters.find((monster) => !monster.defeated && key(monster.position) === key(position));
}
```

Mutated replacement:

```text
{}
```

### 86. `src/sim/state.ts:32` — Survived / ConditionalExpression

Original:

```text
monster.defeated && key(monster.position) === key(position))
```

Mutated replacement:

```text
false
```

### 87. `src/sim/state.ts:32` — Survived / LogicalOperator

Original:

```text
monster.defeated && key(monster.position) === key(position))
```

Mutated replacement:

```text
!monster.defeated || key(monster.position) === key(position)
```

### 88. `src/sim/state.ts:36` — Survived / ArrowFunction

Original:

```text
monster) => monster.id === id ? { ...monster, ...patch } : monster)
```

Mutated replacement:

```text
() => undefined
```

### 89. `src/sim/state.ts:35` — Survived / BlockStatement

Original:

```text

  return state.monsters.map((monster) => monster.id === id ? { ...monster, ...patch } : monster);
}
```

Mutated replacement:

```text
{}
```

### 90. `src/sim/state.ts:32` — Survived / BooleanLiteral

Original:

```text
monster.defeated 
```

Mutated replacement:

```text
monster.defeated
```

### 91. `src/sim/state.ts:32` — Survived / ConditionalExpression

Original:

```text
ey(monster.position) === key(position))
```

Mutated replacement:

```text
true
```

### 92. `src/sim/state.ts:32` — Survived / EqualityOperator

Original:

```text
ey(monster.position) === key(position))
```

Mutated replacement:

```text
key(monster.position) !== key(position)
```

### 93. `src/sim/state.ts:36` — Survived / ConditionalExpression

Original:

```text
onster.id === id 
```

Mutated replacement:

```text
false
```

### 94. `src/sim/state.ts:36` — Survived / ConditionalExpression

Original:

```text
onster.id === id 
```

Mutated replacement:

```text
true
```

### 95. `src/sim/state.ts:39` — Survived / BlockStatement

Original:

```text

  const totalWeight = table.reduce((total, entry) => total + entry.weight, 0);
  let cursor = (rollValue - 1) % totalWeight;
  for (const entry of table) {
    if (cursor < entry.weight) return entry.itemId;
    cursor -= entry.weight;
  }
  return table[table.length - 1].itemId;
}
```

Mutated replacement:

```text
{}
```

### 96. `src/sim/state.ts:36` — Survived / EqualityOperator

Original:

```text
onster.id === id 
```

Mutated replacement:

```text
monster.id !== id
```

### 97. `src/sim/state.ts:36` — Survived / ObjectLiteral

Original:

```text
 ...monster, ...patch } 
```

Mutated replacement:

```text
{}
```

### 98. `src/sim/state.ts:40` — Survived / ArrowFunction

Original:

```text
total, entry) => total + entry.weight,
```

Mutated replacement:

```text
() => undefined
```

### 99. `src/sim/state.ts:40` — Survived / ArithmeticOperator

Original:

```text
otal + entry.weight,
```

Mutated replacement:

```text
total - entry.weight
```

### 100. `src/sim/state.ts:41` — Survived / ArithmeticOperator

Original:

```text
rollValue - 1) % totalWeight;
```

Mutated replacement:

```text
(rollValue - 1) * totalWeight
```

### 101. `src/sim/state.ts:41` — Survived / ArithmeticOperator

Original:

```text
ollValue - 1)
```

Mutated replacement:

```text
rollValue + 1
```

### 102. `src/sim/state.ts:42` — Survived / BlockStatement

Original:

```text

    if (cursor < entry.weight) return entry.itemId;
    cursor -= entry.weight;
  }
```

Mutated replacement:

```text
{}
```

### 103. `src/sim/state.ts:43` — Survived / ConditionalExpression

Original:

```text
ursor < entry.weight)
```

Mutated replacement:

```text
true
```

### 104. `src/sim/state.ts:43` — Survived / ConditionalExpression

Original:

```text
ursor < entry.weight)
```

Mutated replacement:

```text
false
```

### 105. `src/sim/state.ts:43` — Survived / EqualityOperator

Original:

```text
ursor < entry.weight)
```

Mutated replacement:

```text
cursor <= entry.weight
```

### 106. `src/sim/state.ts:43` — Survived / EqualityOperator

Original:

```text
ursor < entry.weight)
```

Mutated replacement:

```text
cursor >= entry.weight
```

### 107. `src/sim/state.ts:49` — Survived / BlockStatement

Original:

```text

  assertValidContent();
  const walls = ["0,0","1,0","2,0","3,0","4,0","5,0","6,0","0,1","6,1","0,2","2,2","3,2","6,2","0,3","6,3","0,4","6,4","0,5","1,5","2,5","4,5","5,5","6,5","0,6","1,6","2,6","3,6","4,6","5,6","6,6","3,1","3,4"];
  const monsters: readonly MonsterInstance[] = [
    { id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false },
    { id: "monster-mireling-1", definitionId: "glass-mireling", position: { x: 4, y: 1 }, health: 4, defeated: false },
    { id: "monster-mireling-2", definitionId: "glass-mireling", position: { x: 5, y: 2 }, health: 4, defeated: false },
    { id: "monster-mireling-3", definitionId: "glass-mireling", position: { x: 5, y: 3 }, health: 4, defeated: false },
    { id: "monster-scavenger-1", definitionId: "gloam-scavenger", position: { x: 4, y: 4 }, health: 3, defeated: false },
    { id: "monster-scavenger-2", definitionId: "gloam-scavenger", position: { x: 5, y: 4 }, health: 3, defeated: false },
    { id: "monster-scavenger-3", definitionId: "gloam-scavenger", position: { x: 3, y: 5 }, health: 3, defeated: false }
  ];
  return { rulesVersion: 3, seed, rngState: seed >>> 0 || 1, runStatus: "playing", floor: 1, turn: 0, player: { position: { x: 1, y: 1 }, facing: "east" }, walls, doors: [], playerHealth: 10, playerMaxHealth: 10, monsters, encounter: null, items: [item("item-ember-pike-1", "ember-pike", "ring"), item("item-moss-tonic-1", "moss-tonic", "ring")], leftHand: "item-ember-pike-1", rightHand: null, ring: ["item-ember-pike-1", "item-moss-tonic-1"], selectedRingIndex: 0, loot: [], objective: { itemDefinitionId: OBJECTIVE_ITEM_ID, exit: EXIT_POSITION, acquired: false, complete: false } };
}
```

Mutated replacement:

```text
{}
```

### 108. `src/sim/state.ts:50` — Survived / CallExpression

Original:

```text
ssertValidContent();
```

Mutated replacement:

```text
;
```

### 109. `src/sim/state.ts:51` — Survived / ArrayDeclaration

Original:

```text
"0,0","1,0","2,0","3,0","4,0","5,0","6,0","0,1","6,1","0,2","2,2","3,2","6,2","0,3","6,3","0,4","6,4","0,5","1,5","2,5","4,5","5,5","6,5","0,6","1,6","2,6","3,6","4,6","5,6","6,6","3,1","3,4"];
```

Mutated replacement:

```text
[]
```

### 110. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,0",
```

Mutated replacement:

```text
""
```

### 111. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
1,0",
```

Mutated replacement:

```text
""
```

### 112. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
2,0",
```

Mutated replacement:

```text
""
```

### 113. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
3,0",
```

Mutated replacement:

```text
""
```

### 114. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
4,0",
```

Mutated replacement:

```text
""
```

### 115. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,0",
```

Mutated replacement:

```text
""
```

### 116. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
5,0",
```

Mutated replacement:

```text
""
```

### 117. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,1",
```

Mutated replacement:

```text
""
```

### 118. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,1",
```

Mutated replacement:

```text
""
```

### 119. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
2,2",
```

Mutated replacement:

```text
""
```

### 120. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,2",
```

Mutated replacement:

```text
""
```

### 121. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
3,2",
```

Mutated replacement:

```text
""
```

### 122. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,2",
```

Mutated replacement:

```text
""
```

### 123. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,3",
```

Mutated replacement:

```text
""
```

### 124. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,3",
```

Mutated replacement:

```text
""
```

### 125. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,4",
```

Mutated replacement:

```text
""
```

### 126. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,4",
```

Mutated replacement:

```text
""
```

### 127. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,5",
```

Mutated replacement:

```text
""
```

### 128. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
1,5",
```

Mutated replacement:

```text
""
```

### 129. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
4,5",
```

Mutated replacement:

```text
""
```

### 130. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
2,5",
```

Mutated replacement:

```text
""
```

### 131. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
5,5",
```

Mutated replacement:

```text
""
```

### 132. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,5",
```

Mutated replacement:

```text
""
```

### 133. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
0,6",
```

Mutated replacement:

```text
""
```

### 134. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
1,6",
```

Mutated replacement:

```text
""
```

### 135. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
2,6",
```

Mutated replacement:

```text
""
```

### 136. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
4,6",
```

Mutated replacement:

```text
""
```

### 137. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
3,6",
```

Mutated replacement:

```text
""
```

### 138. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
5,6",
```

Mutated replacement:

```text
""
```

### 139. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
6,6",
```

Mutated replacement:

```text
""
```

### 140. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
3,1",
```

Mutated replacement:

```text
""
```

### 141. `src/sim/state.ts:51` — Survived / StringLiteral

Original:

```text
3,4"]
```

Mutated replacement:

```text
""
```

### 142. `src/sim/state.ts:52` — Survived / ArrayDeclaration

Original:

```text

    { id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false },
    { id: "monster-mireling-1", definitionId: "glass-mireling", position: { x: 4, y: 1 }, health: 4, defeated: false },
    { id: "monster-mireling-2", definitionId: "glass-mireling", position: { x: 5, y: 2 }, health: 4, defeated: false },
    { id: "monster-mireling-3", definitionId: "glass-mireling", position: { x: 5, y: 3 }, health: 4, defeated: false },
    { id: "monster-scavenger-1", definitionId: "gloam-scavenger", position: { x: 4, y: 4 }, health: 3, defeated: false },
    { id: "monster-scavenger-2", definitionId: "gloam-scavenger", position: { x: 5, y: 4 }, health: 3, defeated: false },
    { id: "monster-scavenger-3", definitionId: "gloam-scavenger", position: { x: 3, y: 5 }, health: 3, defeated: false }
  ];
```

Mutated replacement:

```text
[]
```

### 143. `src/sim/state.ts:53` — Survived / ObjectLiteral

Original:

```text
 id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false },
```

Mutated replacement:

```text
{}
```

### 144. `src/sim/state.ts:53` — Survived / StringLiteral

Original:

```text
monster-warden-1",
```

Mutated replacement:

```text
""
```

### 145. `src/sim/state.ts:53` — Survived / StringLiteral

Original:

```text
ashbound-warden",
```

Mutated replacement:

```text
""
```

### 146. `src/sim/state.ts:53` — Survived / ObjectLiteral

Original:

```text
 x: 2, y: 1 },
```

Mutated replacement:

```text
{}
```

### 147. `src/sim/state.ts:53` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 148. `src/sim/state.ts:54` — Survived / ObjectLiteral

Original:

```text
 id: "monster-mireling-1", definitionId: "glass-mireling", position: { x: 4, y: 1 }, health: 4, defeated: false },
```

Mutated replacement:

```text
{}
```

### 149. `src/sim/state.ts:54` — Survived / StringLiteral

Original:

```text
monster-mireling-1",
```

Mutated replacement:

```text
""
```

### 150. `src/sim/state.ts:54` — Survived / StringLiteral

Original:

```text
glass-mireling",
```

Mutated replacement:

```text
""
```

### 151. `src/sim/state.ts:54` — Survived / ObjectLiteral

Original:

```text
 x: 4, y: 1 },
```

Mutated replacement:

```text
{}
```

### 152. `src/sim/state.ts:54` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 153. `src/sim/state.ts:55` — Survived / ObjectLiteral

Original:

```text
 id: "monster-mireling-2", definitionId: "glass-mireling", position: { x: 5, y: 2 }, health: 4, defeated: false },
```

Mutated replacement:

```text
{}
```

### 154. `src/sim/state.ts:55` — Survived / StringLiteral

Original:

```text
monster-mireling-2",
```

Mutated replacement:

```text
""
```

### 155. `src/sim/state.ts:55` — Survived / StringLiteral

Original:

```text
glass-mireling",
```

Mutated replacement:

```text
""
```

### 156. `src/sim/state.ts:55` — Survived / ObjectLiteral

Original:

```text
 x: 5, y: 2 },
```

Mutated replacement:

```text
{}
```

### 157. `src/sim/state.ts:56` — Survived / ObjectLiteral

Original:

```text
 id: "monster-mireling-3", definitionId: "glass-mireling", position: { x: 5, y: 3 }, health: 4, defeated: false },
```

Mutated replacement:

```text
{}
```

### 158. `src/sim/state.ts:55` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 159. `src/sim/state.ts:56` — Survived / StringLiteral

Original:

```text
monster-mireling-3",
```

Mutated replacement:

```text
""
```

### 160. `src/sim/state.ts:56` — Survived / StringLiteral

Original:

```text
glass-mireling",
```

Mutated replacement:

```text
""
```

### 161. `src/sim/state.ts:56` — Survived / ObjectLiteral

Original:

```text
 x: 5, y: 3 },
```

Mutated replacement:

```text
{}
```

### 162. `src/sim/state.ts:56` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 163. `src/sim/state.ts:57` — Survived / ObjectLiteral

Original:

```text
 id: "monster-scavenger-1", definitionId: "gloam-scavenger", position: { x: 4, y: 4 }, health: 3, defeated: false },
```

Mutated replacement:

```text
{}
```

### 164. `src/sim/state.ts:57` — Survived / StringLiteral

Original:

```text
monster-scavenger-1",
```

Mutated replacement:

```text
""
```

### 165. `src/sim/state.ts:57` — Survived / StringLiteral

Original:

```text
gloam-scavenger",
```

Mutated replacement:

```text
""
```

### 166. `src/sim/state.ts:57` — Survived / ObjectLiteral

Original:

```text
 x: 4, y: 4 },
```

Mutated replacement:

```text
{}
```

### 167. `src/sim/state.ts:57` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 168. `src/sim/state.ts:58` — Survived / ObjectLiteral

Original:

```text
 id: "monster-scavenger-2", definitionId: "gloam-scavenger", position: { x: 5, y: 4 }, health: 3, defeated: false },
```

Mutated replacement:

```text
{}
```

### 169. `src/sim/state.ts:58` — Survived / StringLiteral

Original:

```text
monster-scavenger-2",
```

Mutated replacement:

```text
""
```

### 170. `src/sim/state.ts:58` — Survived / StringLiteral

Original:

```text
gloam-scavenger",
```

Mutated replacement:

```text
""
```

### 171. `src/sim/state.ts:58` — Survived / ObjectLiteral

Original:

```text
 x: 5, y: 4 },
```

Mutated replacement:

```text
{}
```

### 172. `src/sim/state.ts:58` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 173. `src/sim/state.ts:59` — Survived / ObjectLiteral

Original:

```text
 id: "monster-scavenger-3", definitionId: "gloam-scavenger", position: { x: 3, y: 5 }, health: 3, defeated: false }
```

Mutated replacement:

```text
{}
```

### 174. `src/sim/state.ts:59` — Survived / StringLiteral

Original:

```text
monster-scavenger-3",
```

Mutated replacement:

```text
""
```

### 175. `src/sim/state.ts:59` — Survived / StringLiteral

Original:

```text
gloam-scavenger",
```

Mutated replacement:

```text
""
```

### 176. `src/sim/state.ts:59` — Survived / ObjectLiteral

Original:

```text
 x: 3, y: 5 },
```

Mutated replacement:

```text
{}
```

### 177. `src/sim/state.ts:59` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 178. `src/sim/state.ts:61` — Survived / ObjectLiteral

Original:

```text
 rulesVersion: 3, seed, rngState: seed >>> 0 || 1, runStatus: "playing", floor: 1, turn: 0, player: { position: { x: 1, y: 1 }, facing: "east" }, walls, doors: [], playerHealth: 10, playerMaxHealth: 10, monsters, encounter: null, items: [item("item-ember-pike-1", "ember-pike", "ring"), item("item-moss-tonic-1", "moss-tonic", "ring")], leftHand: "item-ember-pike-1", rightHand: null, ring: ["item-ember-pike-1", "item-moss-tonic-1"], selectedRingIndex: 0, loot: [], objective: { itemDefinitionId: OBJECTIVE_ITEM_ID, exit: EXIT_POSITION, acquired: false, complete: false } };
```

Mutated replacement:

```text
{}
```

### 179. `src/sim/state.ts:61` — Survived / ConditionalExpression

Original:

```text
eed >>> 0 || 1,
```

Mutated replacement:

```text
true
```

### 180. `src/sim/state.ts:61` — Survived / ConditionalExpression

Original:

```text
eed >>> 0 || 1,
```

Mutated replacement:

```text
false
```

### 181. `src/sim/state.ts:61` — Survived / LogicalOperator

Original:

```text
eed >>> 0 || 1,
```

Mutated replacement:

```text
seed >>> 0 && 1
```

### 182. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
playing",
```

Mutated replacement:

```text
""
```

### 183. `src/sim/state.ts:61` — Survived / ObjectLiteral

Original:

```text
 position: { x: 1, y: 1 }, facing: "east" },
```

Mutated replacement:

```text
{}
```

### 184. `src/sim/state.ts:61` — Survived / ObjectLiteral

Original:

```text
 x: 1, y: 1 },
```

Mutated replacement:

```text
{}
```

### 185. `src/sim/state.ts:61` — Survived / ArrayDeclaration

Original:

```text
],
```

Mutated replacement:

```text
["Stryker was here"]
```

### 186. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
east" 
```

Mutated replacement:

```text
""
```

### 187. `src/sim/state.ts:61` — Survived / ArrayDeclaration

Original:

```text
item("item-ember-pike-1", "ember-pike", "ring"), item("item-moss-tonic-1", "moss-tonic", "ring")],
```

Mutated replacement:

```text
[]
```

### 188. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
ember-pike",
```

Mutated replacement:

```text
""
```

### 189. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
item-ember-pike-1",
```

Mutated replacement:

```text
""
```

### 190. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
ring")
```

Mutated replacement:

```text
""
```

### 191. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
item-moss-tonic-1",
```

Mutated replacement:

```text
""
```

### 192. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
moss-tonic",
```

Mutated replacement:

```text
""
```

### 193. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
item-ember-pike-1",
```

Mutated replacement:

```text
""
```

### 194. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
ring")
```

Mutated replacement:

```text
""
```

### 195. `src/sim/state.ts:61` — Survived / ArrayDeclaration

Original:

```text
"item-ember-pike-1", "item-moss-tonic-1"],
```

Mutated replacement:

```text
[]
```

### 196. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
item-ember-pike-1",
```

Mutated replacement:

```text
""
```

### 197. `src/sim/state.ts:64` — Survived / BlockStatement

Original:

```text
 return createInitialState(seed); }
```

Mutated replacement:

```text
{}
```

### 198. `src/sim/state.ts:61` — Survived / StringLiteral

Original:

```text
item-moss-tonic-1"]
```

Mutated replacement:

```text
""
```

### 199. `src/sim/state.ts:66` — Survived / BlockStatement

Original:

```text

  if (state.runStatus !== "playing") return { state, events: [] };
  if (!state.objective.acquired || key(state.player.position) !== key(state.objective.exit)) return { state, events: [{ type: "exitLocked", position: state.player.position }] };
  return { state: advance({ ...state, runStatus: "victorious", encounter: null, objective: { ...state.objective, complete: true } }, {}), events: [{ type: "runVictorious" }] };
}
```

Mutated replacement:

```text
{}
```

### 200. `src/sim/state.ts:67` — Survived / ConditionalExpression

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
true
```

### 201. `src/sim/state.ts:67` — Survived / ConditionalExpression

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
false
```

### 202. `src/sim/state.ts:67` — Survived / EqualityOperator

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
state.runStatus === "playing"
```

### 203. `src/sim/state.ts:67` — Survived / StringLiteral

Original:

```text
playing")
```

Mutated replacement:

```text
""
```

### 204. `src/sim/state.ts:68` — Survived / ConditionalExpression

Original:

```text
state.objective.acquired || key(state.player.position) !== key(state.objective.exit))
```

Mutated replacement:

```text
true
```

### 205. `src/sim/state.ts:68` — Survived / ConditionalExpression

Original:

```text
state.objective.acquired || key(state.player.position) !== key(state.objective.exit))
```

Mutated replacement:

```text
false
```

### 206. `src/sim/state.ts:68` — Survived / LogicalOperator

Original:

```text
state.objective.acquired || key(state.player.position) !== key(state.objective.exit))
```

Mutated replacement:

```text
!state.objective.acquired && key(state.player.position) !== key(state.objective.exit)
```

### 207. `src/sim/state.ts:68` — Survived / BooleanLiteral

Original:

```text
state.objective.acquired 
```

Mutated replacement:

```text
state.objective.acquired
```

### 208. `src/sim/state.ts:68` — Survived / ObjectLiteral

Original:

```text
 state, events: [{ type: "exitLocked", position: state.player.position }] };
```

Mutated replacement:

```text
{}
```

### 209. `src/sim/state.ts:61` — Survived / ArrayDeclaration

Original:

```text
],
```

Mutated replacement:

```text
["Stryker was here"]
```

### 210. `src/sim/state.ts:68` — Survived / ConditionalExpression

Original:

```text
ey(state.player.position) !== key(state.objective.exit))
```

Mutated replacement:

```text
false
```

### 211. `src/sim/state.ts:61` — Survived / ObjectLiteral

Original:

```text
 itemDefinitionId: OBJECTIVE_ITEM_ID, exit: EXIT_POSITION, acquired: false, complete: false } 
```

Mutated replacement:

```text
{}
```

### 212. `src/sim/state.ts:61` — Survived / BooleanLiteral

Original:

```text
alse,
```

Mutated replacement:

```text
true
```

### 213. `src/sim/state.ts:61` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 214. `src/sim/state.ts:68` — Survived / EqualityOperator

Original:

```text
ey(state.player.position) !== key(state.objective.exit))
```

Mutated replacement:

```text
key(state.player.position) === key(state.objective.exit)
```

### 215. `src/sim/state.ts:68` — Survived / ArrayDeclaration

Original:

```text
{ type: "exitLocked", position: state.player.position }] 
```

Mutated replacement:

```text
[]
```

### 216. `src/sim/state.ts:68` — Survived / ObjectLiteral

Original:

```text
 type: "exitLocked", position: state.player.position }]
```

Mutated replacement:

```text
{}
```

### 217. `src/sim/state.ts:68` — Survived / StringLiteral

Original:

```text
exitLocked",
```

Mutated replacement:

```text
""
```

### 218. `src/sim/state.ts:69` — Survived / ObjectLiteral

Original:

```text
 state: advance({ ...state, runStatus: "victorious", encounter: null, objective: { ...state.objective, complete: true } }, {}), events: [{ type: "runVictorious" }] };
```

Mutated replacement:

```text
{}
```

### 219. `src/sim/state.ts:69` — Survived / StringLiteral

Original:

```text
victorious",
```

Mutated replacement:

```text
""
```

### 220. `src/sim/state.ts:69` — Survived / ObjectLiteral

Original:

```text
 ...state, runStatus: "victorious", encounter: null, objective: { ...state.objective, complete: true } },
```

Mutated replacement:

```text
{}
```

### 221. `src/sim/state.ts:69` — Survived / ObjectLiteral

Original:

```text
 ...state.objective, complete: true } 
```

Mutated replacement:

```text
{}
```

### 222. `src/sim/state.ts:69` — Survived / ArrayDeclaration

Original:

```text
{ type: "runVictorious" }] 
```

Mutated replacement:

```text
[]
```

### 223. `src/sim/state.ts:69` — Survived / BooleanLiteral

Original:

```text
rue 
```

Mutated replacement:

```text
false
```

### 224. `src/sim/state.ts:69` — Survived / ObjectLiteral

Original:

```text
 type: "runVictorious" }]
```

Mutated replacement:

```text
{}
```

### 225. `src/sim/state.ts:72` — Survived / ConditionalExpression

Original:

```text
ey(door.position) === key(point))
```

Mutated replacement:

```text
true
```

### 226. `src/sim/state.ts:72` — Survived / ConditionalExpression

Original:

```text
ey(door.position) === key(point))
```

Mutated replacement:

```text
false
```

### 227. `src/sim/state.ts:72` — Survived / EqualityOperator

Original:

```text
ey(door.position) === key(point))
```

Mutated replacement:

```text
key(door.position) !== key(point)
```

### 228. `src/sim/state.ts:73` — Survived / LogicalOperator

Original:

```text
tate.ring[state.selectedRingIndex] ?? null;
```

Mutated replacement:

```text
state.ring[state.selectedRingIndex] && null
```

### 229. `src/sim/state.ts:69` — Survived / StringLiteral

Original:

```text
runVictorious" 
```

Mutated replacement:

```text
""
```

### 230. `src/sim/state.ts:76` — Survived / BlockStatement

Original:

```text

  const target = state.encounter;
  const itemId = hand === "left" ? state.leftHand : state.rightHand;
  const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
  events.push({ type: "attackAttempt", hand });
  if (!target || !definition?.attack) { events.push({ type: "commandIgnored", reason: "invalidAction" }); return state; }
  let rng = { state: state.rngState };
  const accuracy = roll(rng, 1, 100); rng = accuracy.rng;
  if (accuracy.value <= 5) return advance({ ...state, rngState: rng.state }, {});
  const damage = roll(rng, definition.attack, definition.attack + 1); rng = damage.rng;
  const health = target.health - damage.value;
  events.push({ type: "hit", target: target.id, damage: damage.value });
  if (health <= 0) {
    events.push({ type: "monsterDefeated", monsterId: target.id });
    const table = LOOT_TABLES[monsterById(target.definitionId)!.lootTableId];
    const lootRoll = roll(rng, 1, table.reduce((total, entry) => total + entry.weight, 0)); rng = lootRoll.rng;
    const lootItemId = chooseLoot(table, lootRoll.value);
    const lootEntry = table.find((entry) => entry.itemId === lootItemId);
    const defeated = updateMonster(state, target.id, { health: 0, defeated: true });
    if (lootEntry) {
      const lootId = `item-loot-${state.turn + 1}`;
      events.push({ type: "itemAcquired", itemId: lootId });
      return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null, loot: [...state.loot, lootId], items: [...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] }, {});
    }
    return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null }, {});
  }
  const retaliation = roll(rng, 0, Math.max(0, target.attack - (hand === "left" ? itemById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0))); rng = retaliation.rng;
  const playerHealth = Math.max(0, state.playerHealth - retaliation.value);
  if (retaliation.value) events.push({ type: "monsterAttack", monsterId: target.id, damage: retaliation.value });
  if (!playerHealth) {
    events.push({ type: "playerDefeated" }, { type: "runDefeated" });
    return advance({ ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: null, runStatus: "defeated" }, {});
  }
  return advance({ ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: { ...target, health } }, {});
}
```

Mutated replacement:

```text
{}
```

### 231. `src/sim/state.ts:78` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
true
```

### 232. `src/sim/state.ts:78` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
false
```

### 233. `src/sim/state.ts:78` — Survived / EqualityOperator

Original:

```text
and === "left" 
```

Mutated replacement:

```text
hand !== "left"
```

### 234. `src/sim/state.ts:72` — Survived / ArrowFunction

Original:

```text
door) => key(door.position) === key(point))
```

Mutated replacement:

```text
() => undefined
```

### 235. `src/sim/state.ts:74` — Survived / ObjectLiteral

Original:

```text
 ...state, ...patch, turn: state.turn + 1 })
```

Mutated replacement:

```text
{}
```

### 236. `src/sim/state.ts:74` — Survived / ArithmeticOperator

Original:

```text
tate.turn + 1 
```

Mutated replacement:

```text
state.turn - 1
```

### 237. `src/sim/state.ts:78` — Survived / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 238. `src/sim/state.ts:79` — Survived / LogicalOperator

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId ?? "")
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId)?.definitionId && ""
```

### 239. `src/sim/state.ts:79` — Survived / OptionalChaining

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId 
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId).definitionId
```

### 240. `src/sim/state.ts:79` — Survived / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 241. `src/sim/state.ts:79` — Survived / ArrowFunction

Original:

```text
value) => value.id === itemId)
```

Mutated replacement:

```text
() => undefined
```

### 242. `src/sim/state.ts:79` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
true
```

### 243. `src/sim/state.ts:79` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
false
```

### 244. `src/sim/state.ts:79` — Survived / EqualityOperator

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
value.id !== itemId
```

### 245. `src/sim/state.ts:80` — Survived / ObjectLiteral

Original:

```text
 type: "attackAttempt", hand })
```

Mutated replacement:

```text
{}
```

### 246. `src/sim/state.ts:80` — Survived / StringLiteral

Original:

```text
attackAttempt",
```

Mutated replacement:

```text
""
```

### 247. `src/sim/state.ts:81` — Survived / ConditionalExpression

Original:

```text
target || !definition?.attack)
```

Mutated replacement:

```text
true
```

### 248. `src/sim/state.ts:81` — Survived / ConditionalExpression

Original:

```text
target || !definition?.attack)
```

Mutated replacement:

```text
false
```

### 249. `src/sim/state.ts:81` — Survived / BlockStatement

Original:

```text
 events.push({ type: "commandIgnored", reason: "invalidAction" }); return state; }
```

Mutated replacement:

```text
{}
```

### 250. `src/sim/state.ts:81` — Survived / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "invalidAction" })
```

Mutated replacement:

```text
{}
```

### 251. `src/sim/state.ts:81` — Survived / LogicalOperator

Original:

```text
target || !definition?.attack)
```

Mutated replacement:

```text
!target && !definition?.attack
```

### 252. `src/sim/state.ts:81` — Survived / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 253. `src/sim/state.ts:81` — Survived / BooleanLiteral

Original:

```text
target 
```

Mutated replacement:

```text
target
```

### 254. `src/sim/state.ts:81` — Survived / StringLiteral

Original:

```text
invalidAction" 
```

Mutated replacement:

```text
""
```

### 255. `src/sim/state.ts:81` — Survived / BooleanLiteral

Original:

```text
definition?.attack)
```

Mutated replacement:

```text
definition?.attack
```

### 256. `src/sim/state.ts:84` — Survived / ObjectLiteral

Original:

```text
 ...state, rngState: rng.state },
```

Mutated replacement:

```text
{}
```

### 257. `src/sim/state.ts:81` — Survived / OptionalChaining

Original:

```text
efinition?.attack)
```

Mutated replacement:

```text
definition.attack
```

### 258. `src/sim/state.ts:82` — Survived / ObjectLiteral

Original:

```text
 state: state.rngState };
```

Mutated replacement:

```text
{}
```

### 259. `src/sim/state.ts:84` — Survived / ConditionalExpression

Original:

```text
ccuracy.value <= 5)
```

Mutated replacement:

```text
true
```

### 260. `src/sim/state.ts:84` — Survived / ConditionalExpression

Original:

```text
ccuracy.value <= 5)
```

Mutated replacement:

```text
false
```

### 261. `src/sim/state.ts:84` — Survived / EqualityOperator

Original:

```text
ccuracy.value <= 5)
```

Mutated replacement:

```text
accuracy.value > 5
```

### 262. `src/sim/state.ts:84` — Survived / EqualityOperator

Original:

```text
ccuracy.value <= 5)
```

Mutated replacement:

```text
accuracy.value < 5
```

### 263. `src/sim/state.ts:85` — Survived / ArithmeticOperator

Original:

```text
efinition.attack + 1)
```

Mutated replacement:

```text
definition.attack - 1
```

### 264. `src/sim/state.ts:86` — Survived / ArithmeticOperator

Original:

```text
arget.health - damage.value;
```

Mutated replacement:

```text
target.health + damage.value
```

### 265. `src/sim/state.ts:87` — Survived / ObjectLiteral

Original:

```text
 type: "hit", target: target.id, damage: damage.value })
```

Mutated replacement:

```text
{}
```

### 266. `src/sim/state.ts:87` — Survived / StringLiteral

Original:

```text
hit",
```

Mutated replacement:

```text
""
```

### 267. `src/sim/state.ts:88` — Survived / ConditionalExpression

Original:

```text
ealth <= 0)
```

Mutated replacement:

```text
true
```

### 268. `src/sim/state.ts:88` — Survived / ConditionalExpression

Original:

```text
ealth <= 0)
```

Mutated replacement:

```text
false
```

### 269. `src/sim/state.ts:88` — Survived / EqualityOperator

Original:

```text
ealth <= 0)
```

Mutated replacement:

```text
health < 0
```

### 270. `src/sim/state.ts:88` — Survived / BlockStatement

Original:

```text

    events.push({ type: "monsterDefeated", monsterId: target.id });
    const table = LOOT_TABLES[monsterById(target.definitionId)!.lootTableId];
    const lootRoll = roll(rng, 1, table.reduce((total, entry) => total + entry.weight, 0)); rng = lootRoll.rng;
    const lootItemId = chooseLoot(table, lootRoll.value);
    const lootEntry = table.find((entry) => entry.itemId === lootItemId);
    const defeated = updateMonster(state, target.id, { health: 0, defeated: true });
    if (lootEntry) {
      const lootId = `item-loot-${state.turn + 1}`;
      events.push({ type: "itemAcquired", itemId: lootId });
      return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null, loot: [...state.loot, lootId], items: [...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] }, {});
    }
    return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null }, {});
  }
```

Mutated replacement:

```text
{}
```

### 271. `src/sim/state.ts:88` — Survived / EqualityOperator

Original:

```text
ealth <= 0)
```

Mutated replacement:

```text
health > 0
```

### 272. `src/sim/state.ts:89` — Survived / ObjectLiteral

Original:

```text
 type: "monsterDefeated", monsterId: target.id })
```

Mutated replacement:

```text
{}
```

### 273. `src/sim/state.ts:89` — Survived / StringLiteral

Original:

```text
monsterDefeated",
```

Mutated replacement:

```text
""
```

### 274. `src/sim/state.ts:91` — Survived / ArrowFunction

Original:

```text
total, entry) => total + entry.weight,
```

Mutated replacement:

```text
() => undefined
```

### 275. `src/sim/state.ts:91` — Survived / ArithmeticOperator

Original:

```text
otal + entry.weight,
```

Mutated replacement:

```text
total - entry.weight
```

### 276. `src/sim/state.ts:93` — Survived / ArrowFunction

Original:

```text
entry) => entry.itemId === lootItemId)
```

Mutated replacement:

```text
() => undefined
```

### 277. `src/sim/state.ts:93` — Survived / ConditionalExpression

Original:

```text
ntry.itemId === lootItemId)
```

Mutated replacement:

```text
true
```

### 278. `src/sim/state.ts:93` — Survived / ConditionalExpression

Original:

```text
ntry.itemId === lootItemId)
```

Mutated replacement:

```text
false
```

### 279. `src/sim/state.ts:93` — Survived / EqualityOperator

Original:

```text
ntry.itemId === lootItemId)
```

Mutated replacement:

```text
entry.itemId !== lootItemId
```

### 280. `src/sim/state.ts:94` — Survived / ObjectLiteral

Original:

```text
 health: 0, defeated: true })
```

Mutated replacement:

```text
{}
```

### 281. `src/sim/state.ts:94` — Survived / BooleanLiteral

Original:

```text
rue 
```

Mutated replacement:

```text
false
```

### 282. `src/sim/state.ts:95` — Survived / ConditionalExpression

Original:

```text
ootEntry)
```

Mutated replacement:

```text
true
```

### 283. `src/sim/state.ts:95` — Survived / ConditionalExpression

Original:

```text
ootEntry)
```

Mutated replacement:

```text
false
```

### 284. `src/sim/state.ts:95` — Survived / BlockStatement

Original:

```text

      const lootId = `item-loot-${state.turn + 1}`;
      events.push({ type: "itemAcquired", itemId: lootId });
      return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null, loot: [...state.loot, lootId], items: [...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] }, {});
    }
```

Mutated replacement:

```text
{}
```

### 285. `src/sim/state.ts:96` — Survived / StringLiteral

Original:

```text
item-loot-${state.turn + 1}`;
```

Mutated replacement:

```text
``
```

### 286. `src/sim/state.ts:96` — Survived / ArithmeticOperator

Original:

```text
tate.turn + 1}
```

Mutated replacement:

```text
state.turn - 1
```

### 287. `src/sim/state.ts:97` — Survived / ObjectLiteral

Original:

```text
 type: "itemAcquired", itemId: lootId })
```

Mutated replacement:

```text
{}
```

### 288. `src/sim/state.ts:97` — Survived / StringLiteral

Original:

```text
itemAcquired",
```

Mutated replacement:

```text
""
```

### 289. `src/sim/state.ts:98` — Survived / ObjectLiteral

Original:

```text
 ...state, rngState: rng.state, monsters: defeated, encounter: null, loot: [...state.loot, lootId], items: [...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] },
```

Mutated replacement:

```text
{}
```

### 290. `src/sim/state.ts:98` — Survived / ArrayDeclaration

Original:

```text
...state.loot, lootId],
```

Mutated replacement:

```text
[]
```

### 291. `src/sim/state.ts:98` — Survived / ArrayDeclaration

Original:

```text
...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] 
```

Mutated replacement:

```text
[]
```

### 292. `src/sim/state.ts:98` — Survived / StringLiteral

Original:

```text
world",
```

Mutated replacement:

```text
""
```

### 293. `src/sim/state.ts:102` — Survived / MethodExpression

Original:

```text
ath.max(0, target.attack - (hand === "left" ? itemById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0)))
```

Mutated replacement:

```text
Math.min(0, target.attack - (hand === "left" ? itemById(state.items.find(value => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find(value => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0))
```

### 294. `src/sim/state.ts:102` — Survived / ArithmeticOperator

Original:

```text
arget.attack - (hand === "left" ? itemById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0))
```

Mutated replacement:

```text
target.attack + (hand === "left" ? itemById(state.items.find(value => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find(value => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0)
```

### 295. `src/sim/state.ts:102` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
true
```

### 296. `src/sim/state.ts:102` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
false
```

### 297. `src/sim/state.ts:102` — Survived / EqualityOperator

Original:

```text
and === "left" 
```

Mutated replacement:

```text
hand !== "left"
```

### 298. `src/sim/state.ts:102` — Survived / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 299. `src/sim/state.ts:102` — Survived / LogicalOperator

Original:

```text
temById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 
```

Mutated replacement:

```text
itemById(state.items.find(value => value.id === state.rightHand)?.definitionId ?? "")?.defense && 0
```

### 300. `src/sim/state.ts:102` — Survived / OptionalChaining

Original:

```text
temById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense 
```

Mutated replacement:

```text
itemById(state.items.find(value => value.id === state.rightHand)?.definitionId ?? "").defense
```

### 301. `src/sim/state.ts:102` — Survived / LogicalOperator

Original:

```text
tate.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")
```

Mutated replacement:

```text
state.items.find(value => value.id === state.rightHand)?.definitionId && ""
```

### 302. `src/sim/state.ts:102` — Survived / OptionalChaining

Original:

```text
tate.items.find((value) => value.id === state.rightHand)?.definitionId 
```

Mutated replacement:

```text
state.items.find(value => value.id === state.rightHand).definitionId
```

### 303. `src/sim/state.ts:102` — Survived / ConditionalExpression

Original:

```text
alue.id === state.rightHand)
```

Mutated replacement:

```text
true
```

### 304. `src/sim/state.ts:102` — Survived / ArrowFunction

Original:

```text
value) => value.id === state.rightHand)
```

Mutated replacement:

```text
() => undefined
```

### 305. `src/sim/state.ts:102` — Survived / ConditionalExpression

Original:

```text
alue.id === state.rightHand)
```

Mutated replacement:

```text
false
```

### 306. `src/sim/state.ts:102` — Survived / EqualityOperator

Original:

```text
alue.id === state.rightHand)
```

Mutated replacement:

```text
value.id !== state.rightHand
```

### 307. `src/sim/state.ts:102` — Survived / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 308. `src/sim/state.ts:103` — Survived / MethodExpression

Original:

```text
ath.max(0, state.playerHealth - retaliation.value);
```

Mutated replacement:

```text
Math.min(0, state.playerHealth - retaliation.value)
```

### 309. `src/sim/state.ts:103` — Survived / ArithmeticOperator

Original:

```text
tate.playerHealth - retaliation.value)
```

Mutated replacement:

```text
state.playerHealth + retaliation.value
```

### 310. `src/sim/state.ts:104` — Survived / ConditionalExpression

Original:

```text
etaliation.value)
```

Mutated replacement:

```text
false
```

### 311. `src/sim/state.ts:104` — Survived / ConditionalExpression

Original:

```text
etaliation.value)
```

Mutated replacement:

```text
true
```

### 312. `src/sim/state.ts:104` — Survived / ObjectLiteral

Original:

```text
 type: "monsterAttack", monsterId: target.id, damage: retaliation.value })
```

Mutated replacement:

```text
{}
```

### 313. `src/sim/state.ts:105` — Survived / BlockStatement

Original:

```text

    events.push({ type: "playerDefeated" }, { type: "runDefeated" });
    return advance({ ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: null, runStatus: "defeated" }, {});
  }
```

Mutated replacement:

```text
{}
```

### 314. `src/sim/state.ts:106` — Survived / ObjectLiteral

Original:

```text
 type: "playerDefeated" },
```

Mutated replacement:

```text
{}
```

### 315. `src/sim/state.ts:104` — Survived / StringLiteral

Original:

```text
monsterAttack",
```

Mutated replacement:

```text
""
```

### 316. `src/sim/state.ts:106` — Survived / StringLiteral

Original:

```text
playerDefeated" 
```

Mutated replacement:

```text
""
```

### 317. `src/sim/state.ts:106` — Survived / ObjectLiteral

Original:

```text
 type: "runDefeated" })
```

Mutated replacement:

```text
{}
```

### 318. `src/sim/state.ts:106` — Survived / StringLiteral

Original:

```text
runDefeated" 
```

Mutated replacement:

```text
""
```

### 319. `src/sim/state.ts:107` — Survived / ObjectLiteral

Original:

```text
 ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: null, runStatus: "defeated" },
```

Mutated replacement:

```text
{}
```

### 320. `src/sim/state.ts:105` — Survived / BooleanLiteral

Original:

```text
playerHealth)
```

Mutated replacement:

```text
playerHealth
```

### 321. `src/sim/state.ts:107` — Survived / ObjectLiteral

Original:

```text
 health })
```

Mutated replacement:

```text
{}
```

### 322. `src/sim/state.ts:105` — Survived / ConditionalExpression

Original:

```text
playerHealth)
```

Mutated replacement:

```text
true
```

### 323. `src/sim/state.ts:107` — Survived / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 324. `src/sim/state.ts:105` — Survived / ConditionalExpression

Original:

```text
playerHealth)
```

Mutated replacement:

```text
false
```

### 325. `src/sim/state.ts:109` — Survived / ObjectLiteral

Original:

```text
 ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: { ...target, health } },
```

Mutated replacement:

```text
{}
```

### 326. `src/sim/state.ts:109` — Survived / ObjectLiteral

Original:

```text
 health })
```

Mutated replacement:

```text
{}
```

### 327. `src/sim/state.ts:109` — Survived / ObjectLiteral

Original:

```text
 ...target, health } 
```

Mutated replacement:

```text
{}
```

### 328. `src/sim/state.ts:113` — Survived / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "terminal" }] };
```

Mutated replacement:

```text
{}
```

### 329. `src/sim/state.ts:113` — Survived / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "terminal" }] 
```

Mutated replacement:

```text
[]
```

### 330. `src/sim/state.ts:113` — Survived / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "terminal" }]
```

Mutated replacement:

```text
{}
```

### 331. `src/sim/state.ts:113` — Survived / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 332. `src/sim/state.ts:113` — Survived / StringLiteral

Original:

```text
terminal" 
```

Mutated replacement:

```text
""
```

### 333. `src/sim/state.ts:112` — Survived / BlockStatement

Original:

```text

  if (state.runStatus !== "playing") return { state, events: [{ type: "commandIgnored", reason: "terminal" }] };
  const events: GameEvent[] = [];
  if (state.encounter) {
    if (command === "retreat") return { state: advance(state, { encounter: null }), events };
    if (command === "attack" || command === "attackLeft" || command === "attackRight") return { state: combat(state, command === "attackRight" ? "right" : "left", events), events };
    return { state, events: [{ type: "commandIgnored", reason: "encounter" }] };
  }
  if (command === "rotateInventoryNext" || command === "rotateInventoryPrevious") {
    if (!state.ring.length) return { state, events: [{ type: "commandIgnored", reason: "emptyRing" }] };
    const delta = command === "rotateInventoryNext" ? 1 : -1;
    const index = (state.selectedRingIndex + delta + state.ring.length) % state.ring.length;
    return { state: advance(state, { selectedRingIndex: index }), events: [{ type: "inventoryRotated", selectedItemId: state.ring[index] }] };
  }
  if (command === "equipSelectedLeft" || command === "equipSelectedRight") {
    const itemId = selected(state); const hand: HandSlot = command === "equipSelectedLeft" ? "left" : "right";
    const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.handUsage) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const slot = hand === "left" ? "leftHand" : "rightHand";
    return { state: advance({ ...state, [slot]: itemId }, {}), events: [{ type: "equipmentChanged", hand, itemId }] };
  }
  if (command === "useSelected") {
    const itemId = selected(state); const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.healing) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, playerHealth: Math.min(state.playerMaxHealth, state.playerHealth + definition.healing), ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, items: state.items.map((value) => value.id === itemId ? { ...value, location: "consumed" } : value) }, {}), events: [{ type: "itemUsed", itemId }] };
  }
  if (command === "pickup") {
    const itemId = state.loot.find((id) => state.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position));
    if (!itemId) return { state, events: [{ type: "commandIgnored", reason: "noLoot" }] };
    if (state.ring.length >= CAPACITY) return { state, events: [{ type: "commandIgnored", reason: "inventoryFull" }] };
    const pickedItem = state.items.find((value) => value.id === itemId);
    return { state: advance({ ...state, loot: state.loot.filter((id) => id !== itemId), ring: [...state.ring, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value), objective: pickedItem?.definitionId === OBJECTIVE_ITEM_ID ? { ...state.objective, acquired: true } : state.objective }, {}), events: [{ type: "itemAcquired", itemId }] };
  }
  if (command === "dropSelected") {
    const itemId = selected(state);
    if (!itemId || itemId === state.leftHand || itemId === state.rightHand) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, loot: [...state.loot, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value) }, {}), events: [{ type: "itemDropped", itemId }] };
  }
  const facing = command === "turnLeft" ? LEFT[state.player.facing] : command === "turnRight" ? RIGHT[state.player.facing] : state.player.facing;
  let position = state.player.position;
  if (command === "moveForward" || command === "moveBackward") {
    const forward = DELTAS[facing]; const delta = command === "moveForward" ? forward : { x: -forward.x, y: -forward.y };
    const next = { x: position.x + delta.x, y: position.y + delta.y }; const door = doorAt(state, next);
    if (!state.walls.includes(key(next)) && (!door || door.open)) {
      const monster = command === "moveForward" ? monsterAt(state, next) : undefined;
      if (monster) { const encounter = encounterFromMonster(monster); return { state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] }; }
      position = next; events.push({ type: "moved", position });
    } else events.push({ type: "movementBlocked", position: next });
  }
  if (command === "turnLeft" || command === "turnRight") events.push({ type: "turned", facing });
  const movedState = advance(state, { player: { position, facing } });
  if ((command === "moveForward" || command === "moveBackward") && key(position) === key(state.objective.exit)) {
    const completion = completeRun(movedState);
    if (completion.events[0]?.type === "runVictorious") return { state: completion.state, events: [...events, ...completion.events] };
    events.push(...completion.events);
  }
  return { state: movedState, events };
}
```

Mutated replacement:

```text
{}
```

### 334. `src/sim/state.ts:113` — Survived / ConditionalExpression

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
true
```

### 335. `src/sim/state.ts:113` — Survived / ConditionalExpression

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
false
```

### 336. `src/sim/state.ts:113` — Survived / EqualityOperator

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
state.runStatus === "playing"
```

### 337. `src/sim/state.ts:113` — Survived / StringLiteral

Original:

```text
playing")
```

Mutated replacement:

```text
""
```

### 338. `src/sim/state.ts:115` — Survived / BlockStatement

Original:

```text

    if (command === "retreat") return { state: advance(state, { encounter: null }), events };
    if (command === "attack" || command === "attackLeft" || command === "attackRight") return { state: combat(state, command === "attackRight" ? "right" : "left", events), events };
    return { state, events: [{ type: "commandIgnored", reason: "encounter" }] };
  }
```

Mutated replacement:

```text
{}
```

### 339. `src/sim/state.ts:116` — Survived / ConditionalExpression

Original:

```text
ommand === "retreat")
```

Mutated replacement:

```text
true
```

### 340. `src/sim/state.ts:116` — Survived / ConditionalExpression

Original:

```text
ommand === "retreat")
```

Mutated replacement:

```text
false
```

### 341. `src/sim/state.ts:114` — Survived / ArrayDeclaration

Original:

```text
];
```

Mutated replacement:

```text
["Stryker was here"]
```

### 342. `src/sim/state.ts:115` — Survived / ConditionalExpression

Original:

```text
tate.encounter)
```

Mutated replacement:

```text
true
```

### 343. `src/sim/state.ts:116` — Survived / ObjectLiteral

Original:

```text
 state: advance(state, { encounter: null }), events };
```

Mutated replacement:

```text
{}
```

### 344. `src/sim/state.ts:116` — Survived / ObjectLiteral

Original:

```text
 encounter: null })
```

Mutated replacement:

```text
{}
```

### 345. `src/sim/state.ts:115` — Survived / ConditionalExpression

Original:

```text
tate.encounter)
```

Mutated replacement:

```text
false
```

### 346. `src/sim/state.ts:116` — Survived / EqualityOperator

Original:

```text
ommand === "retreat")
```

Mutated replacement:

```text
command !== "retreat"
```

### 347. `src/sim/state.ts:116` — Survived / StringLiteral

Original:

```text
retreat")
```

Mutated replacement:

```text
""
```

### 348. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attack" || command === "attackLeft" || command === "attackRight")
```

Mutated replacement:

```text
true
```

### 349. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attack" || command === "attackLeft" || command === "attackRight")
```

Mutated replacement:

```text
false
```

### 350. `src/sim/state.ts:117` — Survived / LogicalOperator

Original:

```text
ommand === "attack" || command === "attackLeft" || command === "attackRight")
```

Mutated replacement:

```text
(command === "attack" || command === "attackLeft") && command === "attackRight"
```

### 351. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attack" || command === "attackLeft" 
```

Mutated replacement:

```text
false
```

### 352. `src/sim/state.ts:117` — Survived / LogicalOperator

Original:

```text
ommand === "attack" || command === "attackLeft" 
```

Mutated replacement:

```text
command === "attack" && command === "attackLeft"
```

### 353. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attack" 
```

Mutated replacement:

```text
false
```

### 354. `src/sim/state.ts:117` — Survived / EqualityOperator

Original:

```text
ommand === "attack" 
```

Mutated replacement:

```text
command !== "attack"
```

### 355. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
attack" 
```

Mutated replacement:

```text
""
```

### 356. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attackRight")
```

Mutated replacement:

```text
false
```

### 357. `src/sim/state.ts:117` — Survived / EqualityOperator

Original:

```text
ommand === "attackRight")
```

Mutated replacement:

```text
command !== "attackRight"
```

### 358. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attackLeft" 
```

Mutated replacement:

```text
false
```

### 359. `src/sim/state.ts:117` — Survived / EqualityOperator

Original:

```text
ommand === "attackLeft" 
```

Mutated replacement:

```text
command !== "attackLeft"
```

### 360. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
attackLeft" 
```

Mutated replacement:

```text
""
```

### 361. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
attackRight")
```

Mutated replacement:

```text
""
```

### 362. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
right" 
```

Mutated replacement:

```text
""
```

### 363. `src/sim/state.ts:117` — Survived / ObjectLiteral

Original:

```text
 state: combat(state, command === "attackRight" ? "right" : "left", events), events };
```

Mutated replacement:

```text
{}
```

### 364. `src/sim/state.ts:118` — Survived / ObjectLiteral

Original:

```text
 state, events: [{ type: "commandIgnored", reason: "encounter" }] };
```

Mutated replacement:

```text
{}
```

### 365. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attackRight" 
```

Mutated replacement:

```text
true
```

### 366. `src/sim/state.ts:117` — Survived / EqualityOperator

Original:

```text
ommand === "attackRight" 
```

Mutated replacement:

```text
command !== "attackRight"
```

### 367. `src/sim/state.ts:117` — Survived / ConditionalExpression

Original:

```text
ommand === "attackRight" 
```

Mutated replacement:

```text
false
```

### 368. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
attackRight" 
```

Mutated replacement:

```text
""
```

### 369. `src/sim/state.ts:117` — Survived / StringLiteral

Original:

```text
left",
```

Mutated replacement:

```text
""
```

### 370. `src/sim/state.ts:118` — Survived / ArrayDeclaration

Original:

```text
{ type: "commandIgnored", reason: "encounter" }] 
```

Mutated replacement:

```text
[]
```

### 371. `src/sim/state.ts:118` — Survived / ObjectLiteral

Original:

```text
 type: "commandIgnored", reason: "encounter" }]
```

Mutated replacement:

```text
{}
```

### 372. `src/sim/state.ts:118` — Survived / StringLiteral

Original:

```text
commandIgnored",
```

Mutated replacement:

```text
""
```

### 373. `src/sim/state.ts:118` — Survived / StringLiteral

Original:

```text
encounter" 
```

Mutated replacement:

```text
""
```

### 374. `src/sim/state.ts:120` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryNext" || command === "rotateInventoryPrevious")
```

Mutated replacement:

```text
false
```

### 375. `src/sim/state.ts:120` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryNext" || command === "rotateInventoryPrevious")
```

Mutated replacement:

```text
true
```

### 376. `src/sim/state.ts:120` — Survived / LogicalOperator

Original:

```text
ommand === "rotateInventoryNext" || command === "rotateInventoryPrevious")
```

Mutated replacement:

```text
command === "rotateInventoryNext" && command === "rotateInventoryPrevious"
```

### 377. `src/sim/state.ts:120` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryNext" 
```

Mutated replacement:

```text
false
```

### 378. `src/sim/state.ts:120` — Survived / BlockStatement

Original:

```text

    if (!state.ring.length) return { state, events: [{ type: "commandIgnored", reason: "emptyRing" }] };
    const delta = command === "rotateInventoryNext" ? 1 : -1;
    const index = (state.selectedRingIndex + delta + state.ring.length) % state.ring.length;
    return { state: advance(state, { selectedRingIndex: index }), events: [{ type: "inventoryRotated", selectedItemId: state.ring[index] }] };
  }
```

Mutated replacement:

```text
{}
```

### 379. `src/sim/state.ts:120` — Survived / StringLiteral

Original:

```text
rotateInventoryNext" 
```

Mutated replacement:

```text
""
```

### 380. `src/sim/state.ts:120` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryPrevious")
```

Mutated replacement:

```text
false
```

### 381. `src/sim/state.ts:120` — Survived / EqualityOperator

Original:

```text
ommand === "rotateInventoryNext" 
```

Mutated replacement:

```text
command !== "rotateInventoryNext"
```

### 382. `src/sim/state.ts:121` — Survived / BooleanLiteral

Original:

```text
state.ring.length)
```

Mutated replacement:

```text
state.ring.length
```

### 383. `src/sim/state.ts:121` — Survived / ConditionalExpression

Original:

```text
state.ring.length)
```

Mutated replacement:

```text
true
```

### 384. `src/sim/state.ts:121` — Survived / ConditionalExpression

Original:

```text
state.ring.length)
```

Mutated replacement:

```text
false
```

### 385. `src/sim/state.ts:122` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryNext" 
```

Mutated replacement:

```text
true
```

### 386. `src/sim/state.ts:122` — Survived / ConditionalExpression

Original:

```text
ommand === "rotateInventoryNext" 
```

Mutated replacement:

```text
false
```

### 387. `src/sim/state.ts:122` — Survived / EqualityOperator

Original:

```text
ommand === "rotateInventoryNext" 
```

Mutated replacement:

```text
command !== "rotateInventoryNext"
```

### 388. `src/sim/state.ts:122` — Survived / StringLiteral

Original:

```text
rotateInventoryNext" 
```

Mutated replacement:

```text
""
```

### 389. `src/sim/state.ts:123` — Survived / ArithmeticOperator

Original:

```text
state.selectedRingIndex + delta + state.ring.length) % state.ring.length;
```

Mutated replacement:

```text
(state.selectedRingIndex + delta + state.ring.length) * state.ring.length
```

### 390. `src/sim/state.ts:123` — Survived / ArithmeticOperator

Original:

```text
tate.selectedRingIndex + delta + state.ring.length)
```

Mutated replacement:

```text
state.selectedRingIndex + delta - state.ring.length
```

### 391. `src/sim/state.ts:122` — Survived / UnaryOperator

Original:

```text
1;
```

Mutated replacement:

```text
+1
```

### 392. `src/sim/state.ts:123` — Survived / ArithmeticOperator

Original:

```text
tate.selectedRingIndex + delta 
```

Mutated replacement:

```text
state.selectedRingIndex - delta
```

### 393. `src/sim/state.ts:124` — Survived / ObjectLiteral

Original:

```text
 state: advance(state, { selectedRingIndex: index }), events: [{ type: "inventoryRotated", selectedItemId: state.ring[index] }] };
```

Mutated replacement:

```text
{}
```

### 394. `src/sim/state.ts:124` — Survived / ObjectLiteral

Original:

```text
 selectedRingIndex: index })
```

Mutated replacement:

```text
{}
```

### 395. `src/sim/state.ts:124` — Survived / ArrayDeclaration

Original:

```text
{ type: "inventoryRotated", selectedItemId: state.ring[index] }] 
```

Mutated replacement:

```text
[]
```

### 396. `src/sim/state.ts:124` — Survived / ObjectLiteral

Original:

```text
 type: "inventoryRotated", selectedItemId: state.ring[index] }]
```

Mutated replacement:

```text
{}
```

### 397. `src/sim/state.ts:124` — Survived / StringLiteral

Original:

```text
inventoryRotated",
```

Mutated replacement:

```text
""
```

### 398. `src/sim/state.ts:120` — Survived / StringLiteral

Original:

```text
rotateInventoryPrevious")
```

Mutated replacement:

```text
""
```

### 399. `src/sim/state.ts:120` — Survived / EqualityOperator

Original:

```text
ommand === "rotateInventoryPrevious")
```

Mutated replacement:

```text
command !== "rotateInventoryPrevious"
```

### 400. `src/sim/state.ts:126` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedLeft" || command === "equipSelectedRight")
```

Mutated replacement:

```text
true
```

### 401. `src/sim/state.ts:126` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedLeft" || command === "equipSelectedRight")
```

Mutated replacement:

```text
false
```

### 402. `src/sim/state.ts:126` — Survived / LogicalOperator

Original:

```text
ommand === "equipSelectedLeft" || command === "equipSelectedRight")
```

Mutated replacement:

```text
command === "equipSelectedLeft" && command === "equipSelectedRight"
```

### 403. `src/sim/state.ts:126` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedLeft" 
```

Mutated replacement:

```text
false
```

### 404. `src/sim/state.ts:126` — Survived / EqualityOperator

Original:

```text
ommand === "equipSelectedLeft" 
```

Mutated replacement:

```text
command !== "equipSelectedLeft"
```

### 405. `src/sim/state.ts:126` — Survived / BlockStatement

Original:

```text

    const itemId = selected(state); const hand: HandSlot = command === "equipSelectedLeft" ? "left" : "right";
    const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.handUsage) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const slot = hand === "left" ? "leftHand" : "rightHand";
    return { state: advance({ ...state, [slot]: itemId }, {}), events: [{ type: "equipmentChanged", hand, itemId }] };
  }
```

Mutated replacement:

```text
{}
```

### 406. `src/sim/state.ts:127` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedLeft" 
```

Mutated replacement:

```text
true
```

### 407. `src/sim/state.ts:127` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedLeft" 
```

Mutated replacement:

```text
false
```

### 408. `src/sim/state.ts:127` — Survived / EqualityOperator

Original:

```text
ommand === "equipSelectedLeft" 
```

Mutated replacement:

```text
command !== "equipSelectedLeft"
```

### 409. `src/sim/state.ts:127` — Survived / StringLiteral

Original:

```text
equipSelectedLeft" 
```

Mutated replacement:

```text
""
```

### 410. `src/sim/state.ts:126` — Survived / StringLiteral

Original:

```text
equipSelectedLeft" 
```

Mutated replacement:

```text
""
```

### 411. `src/sim/state.ts:127` — Survived / StringLiteral

Original:

```text
right";
```

Mutated replacement:

```text
""
```

### 412. `src/sim/state.ts:126` — Survived / ConditionalExpression

Original:

```text
ommand === "equipSelectedRight")
```

Mutated replacement:

```text
false
```

### 413. `src/sim/state.ts:128` — Survived / LogicalOperator

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId ?? "")
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId)?.definitionId && ""
```

### 414. `src/sim/state.ts:128` — Survived / OptionalChaining

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId 
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId).definitionId
```

### 415. `src/sim/state.ts:128` — Survived / ArrowFunction

Original:

```text
value) => value.id === itemId)
```

Mutated replacement:

```text
() => undefined
```

### 416. `src/sim/state.ts:128` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
true
```

### 417. `src/sim/state.ts:128` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
false
```

### 418. `src/sim/state.ts:128` — Survived / EqualityOperator

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
value.id !== itemId
```

### 419. `src/sim/state.ts:129` — Survived / ConditionalExpression

Original:

```text
itemId || !definition?.handUsage)
```

Mutated replacement:

```text
true
```

### 420. `src/sim/state.ts:129` — Survived / ConditionalExpression

Original:

```text
itemId || !definition?.handUsage)
```

Mutated replacement:

```text
false
```

### 421. `src/sim/state.ts:129` — Survived / LogicalOperator

Original:

```text
itemId || !definition?.handUsage)
```

Mutated replacement:

```text
!itemId && !definition?.handUsage
```

### 422. `src/sim/state.ts:129` — Survived / BooleanLiteral

Original:

```text
itemId 
```

Mutated replacement:

```text
itemId
```

### 423. `src/sim/state.ts:129` — Survived / BooleanLiteral

Original:

```text
definition?.handUsage)
```

Mutated replacement:

```text
definition?.handUsage
```

### 424. `src/sim/state.ts:129` — Survived / OptionalChaining

Original:

```text
efinition?.handUsage)
```

Mutated replacement:

```text
definition.handUsage
```

### 425. `src/sim/state.ts:130` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
true
```

### 426. `src/sim/state.ts:130` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
false
```

### 427. `src/sim/state.ts:130` — Survived / EqualityOperator

Original:

```text
and === "left" 
```

Mutated replacement:

```text
hand !== "left"
```

### 428. `src/sim/state.ts:130` — Survived / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 429. `src/sim/state.ts:130` — Survived / StringLiteral

Original:

```text
rightHand";
```

Mutated replacement:

```text
""
```

### 430. `src/sim/state.ts:131` — Survived / ObjectLiteral

Original:

```text
 state: advance({ ...state, [slot]: itemId }, {}), events: [{ type: "equipmentChanged", hand, itemId }] };
```

Mutated replacement:

```text
{}
```

### 431. `src/sim/state.ts:126` — Survived / EqualityOperator

Original:

```text
ommand === "equipSelectedRight")
```

Mutated replacement:

```text
command !== "equipSelectedRight"
```

### 432. `src/sim/state.ts:131` — Survived / ObjectLiteral

Original:

```text
 ...state, [slot]: itemId },
```

Mutated replacement:

```text
{}
```

### 433. `src/sim/state.ts:126` — Survived / StringLiteral

Original:

```text
equipSelectedRight")
```

Mutated replacement:

```text
""
```

### 434. `src/sim/state.ts:131` — Survived / ObjectLiteral

Original:

```text
 type: "equipmentChanged", hand, itemId }]
```

Mutated replacement:

```text
{}
```

### 435. `src/sim/state.ts:131` — Survived / ArrayDeclaration

Original:

```text
{ type: "equipmentChanged", hand, itemId }] 
```

Mutated replacement:

```text
[]
```

### 436. `src/sim/state.ts:131` — Survived / StringLiteral

Original:

```text
equipmentChanged",
```

Mutated replacement:

```text
""
```

### 437. `src/sim/state.ts:133` — Survived / BlockStatement

Original:

```text

    const itemId = selected(state); const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.healing) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, playerHealth: Math.min(state.playerMaxHealth, state.playerHealth + definition.healing), ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, items: state.items.map((value) => value.id === itemId ? { ...value, location: "consumed" } : value) }, {}), events: [{ type: "itemUsed", itemId }] };
  }
```

Mutated replacement:

```text
{}
```

### 438. `src/sim/state.ts:134` — Survived / LogicalOperator

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId ?? "")
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId)?.definitionId && ""
```

### 439. `src/sim/state.ts:134` — Survived / OptionalChaining

Original:

```text
tate.items.find((value) => value.id === itemId)?.definitionId 
```

Mutated replacement:

```text
state.items.find(value => value.id === itemId).definitionId
```

### 440. `src/sim/state.ts:134` — Survived / ArrowFunction

Original:

```text
value) => value.id === itemId)
```

Mutated replacement:

```text
() => undefined
```

### 441. `src/sim/state.ts:134` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
true
```

### 442. `src/sim/state.ts:134` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
false
```

### 443. `src/sim/state.ts:135` — Survived / ConditionalExpression

Original:

```text
itemId || !definition?.healing)
```

Mutated replacement:

```text
true
```

### 444. `src/sim/state.ts:134` — Survived / EqualityOperator

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
value.id !== itemId
```

### 445. `src/sim/state.ts:135` — Survived / ConditionalExpression

Original:

```text
itemId || !definition?.healing)
```

Mutated replacement:

```text
false
```

### 446. `src/sim/state.ts:135` — Survived / LogicalOperator

Original:

```text
itemId || !definition?.healing)
```

Mutated replacement:

```text
!itemId && !definition?.healing
```

### 447. `src/sim/state.ts:135` — Survived / BooleanLiteral

Original:

```text
itemId 
```

Mutated replacement:

```text
itemId
```

### 448. `src/sim/state.ts:135` — Survived / BooleanLiteral

Original:

```text
definition?.healing)
```

Mutated replacement:

```text
definition?.healing
```

### 449. `src/sim/state.ts:135` — Survived / OptionalChaining

Original:

```text
efinition?.healing)
```

Mutated replacement:

```text
definition.healing
```

### 450. `src/sim/state.ts:136` — Survived / MethodExpression

Original:

```text
tate.ring.filter((id) => id !== itemId);
```

Mutated replacement:

```text
state.ring
```

### 451. `src/sim/state.ts:136` — Survived / ArrowFunction

Original:

```text
id) => id !== itemId)
```

Mutated replacement:

```text
() => undefined
```

### 452. `src/sim/state.ts:133` — Survived / ConditionalExpression

Original:

```text
ommand === "useSelected")
```

Mutated replacement:

```text
false
```

### 453. `src/sim/state.ts:136` — Survived / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
true
```

### 454. `src/sim/state.ts:133` — Survived / ConditionalExpression

Original:

```text
ommand === "useSelected")
```

Mutated replacement:

```text
true
```

### 455. `src/sim/state.ts:136` — Survived / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
false
```

### 456. `src/sim/state.ts:136` — Survived / EqualityOperator

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
id === itemId
```

### 457. `src/sim/state.ts:133` — Survived / StringLiteral

Original:

```text
useSelected")
```

Mutated replacement:

```text
""
```

### 458. `src/sim/state.ts:133` — Survived / EqualityOperator

Original:

```text
ommand === "useSelected")
```

Mutated replacement:

```text
command !== "useSelected"
```

### 459. `src/sim/state.ts:137` — Survived / ObjectLiteral

Original:

```text
 state: advance({ ...state, playerHealth: Math.min(state.playerMaxHealth, state.playerHealth + definition.healing), ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, items: state.items.map((value) => value.id === itemId ? { ...value, location: "consumed" } : value) }, {}), events: [{ type: "itemUsed", itemId }] };
```

Mutated replacement:

```text
{}
```

### 460. `src/sim/state.ts:137` — Survived / ObjectLiteral

Original:

```text
 ...state, playerHealth: Math.min(state.playerMaxHealth, state.playerHealth + definition.healing), ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, items: state.items.map((value) => value.id === itemId ? { ...value, location: "consumed" } : value) },
```

Mutated replacement:

```text
{}
```

### 461. `src/sim/state.ts:137` — Survived / MethodExpression

Original:

```text
ath.min(state.playerMaxHealth, state.playerHealth + definition.healing),
```

Mutated replacement:

```text
Math.max(state.playerMaxHealth, state.playerHealth + definition.healing)
```

### 462. `src/sim/state.ts:137` — Survived / ArithmeticOperator

Original:

```text
tate.playerHealth + definition.healing)
```

Mutated replacement:

```text
state.playerHealth - definition.healing
```

### 463. `src/sim/state.ts:137` — Survived / ArithmeticOperator

Original:

```text
tate.selectedRingIndex % ring.length 
```

Mutated replacement:

```text
state.selectedRingIndex * ring.length
```

### 464. `src/sim/state.ts:137` — Survived / ArrowFunction

Original:

```text
value) => value.id === itemId ? { ...value, location: "consumed" } : value)
```

Mutated replacement:

```text
() => undefined
```

### 465. `src/sim/state.ts:137` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
true
```

### 466. `src/sim/state.ts:137` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
false
```

### 467. `src/sim/state.ts:137` — Survived / ObjectLiteral

Original:

```text
 ...value, location: "consumed" } 
```

Mutated replacement:

```text
{}
```

### 468. `src/sim/state.ts:137` — Survived / EqualityOperator

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
value.id !== itemId
```

### 469. `src/sim/state.ts:137` — Survived / StringLiteral

Original:

```text
consumed" 
```

Mutated replacement:

```text
""
```

### 470. `src/sim/state.ts:137` — Survived / ArrayDeclaration

Original:

```text
{ type: "itemUsed", itemId }] 
```

Mutated replacement:

```text
[]
```

### 471. `src/sim/state.ts:137` — Survived / ObjectLiteral

Original:

```text
 type: "itemUsed", itemId }]
```

Mutated replacement:

```text
{}
```

### 472. `src/sim/state.ts:137` — Survived / StringLiteral

Original:

```text
itemUsed",
```

Mutated replacement:

```text
""
```

### 473. `src/sim/state.ts:139` — Survived / BlockStatement

Original:

```text

    const itemId = state.loot.find((id) => state.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position));
    if (!itemId) return { state, events: [{ type: "commandIgnored", reason: "noLoot" }] };
    if (state.ring.length >= CAPACITY) return { state, events: [{ type: "commandIgnored", reason: "inventoryFull" }] };
    const pickedItem = state.items.find((value) => value.id === itemId);
    return { state: advance({ ...state, loot: state.loot.filter((id) => id !== itemId), ring: [...state.ring, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value), objective: pickedItem?.definitionId === OBJECTIVE_ITEM_ID ? { ...state.objective, acquired: true } : state.objective }, {}), events: [{ type: "itemAcquired", itemId }] };
  }
```

Mutated replacement:

```text
{}
```

### 474. `src/sim/state.ts:140` — Survived / ArrowFunction

Original:

```text
id) => state.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
() => undefined
```

### 475. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
tate.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
true
```

### 476. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
tate.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
false
```

### 477. `src/sim/state.ts:140` — Survived / LogicalOperator

Original:

```text
tate.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
state.items.find(itemValue => itemValue.id === id)?.position || key(state.items.find(itemValue => itemValue.id === id)!.position!) === key(state.player.position)
```

### 478. `src/sim/state.ts:140` — Survived / OptionalChaining

Original:

```text
tate.items.find((itemValue) => itemValue.id === id)?.position 
```

Mutated replacement:

```text
state.items.find(itemValue => itemValue.id === id).position
```

### 479. `src/sim/state.ts:140` — Survived / ArrowFunction

Original:

```text
itemValue) => itemValue.id === id)
```

Mutated replacement:

```text
() => undefined
```

### 480. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
true
```

### 481. `src/sim/state.ts:139` — Survived / ConditionalExpression

Original:

```text
ommand === "pickup")
```

Mutated replacement:

```text
true
```

### 482. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
false
```

### 483. `src/sim/state.ts:139` — Survived / ConditionalExpression

Original:

```text
ommand === "pickup")
```

Mutated replacement:

```text
false
```

### 484. `src/sim/state.ts:139` — Survived / StringLiteral

Original:

```text
pickup")
```

Mutated replacement:

```text
""
```

### 485. `src/sim/state.ts:139` — Survived / EqualityOperator

Original:

```text
ommand === "pickup")
```

Mutated replacement:

```text
command !== "pickup"
```

### 486. `src/sim/state.ts:140` — Survived / EqualityOperator

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
itemValue.id !== id
```

### 487. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
ey(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
true
```

### 488. `src/sim/state.ts:140` — Survived / EqualityOperator

Original:

```text
ey(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position))
```

Mutated replacement:

```text
key(state.items.find(itemValue => itemValue.id === id)!.position!) !== key(state.player.position)
```

### 489. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
true
```

### 490. `src/sim/state.ts:140` — Survived / ArrowFunction

Original:

```text
itemValue) => itemValue.id === id)
```

Mutated replacement:

```text
() => undefined
```

### 491. `src/sim/state.ts:140` — Survived / EqualityOperator

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
itemValue.id !== id
```

### 492. `src/sim/state.ts:140` — Survived / ConditionalExpression

Original:

```text
temValue.id === id)
```

Mutated replacement:

```text
false
```

### 493. `src/sim/state.ts:141` — Survived / BooleanLiteral

Original:

```text
itemId)
```

Mutated replacement:

```text
itemId
```

### 494. `src/sim/state.ts:141` — Survived / ConditionalExpression

Original:

```text
itemId)
```

Mutated replacement:

```text
true
```

### 495. `src/sim/state.ts:141` — Survived / ConditionalExpression

Original:

```text
itemId)
```

Mutated replacement:

```text
false
```

### 496. `src/sim/state.ts:142` — Survived / ConditionalExpression

Original:

```text
tate.ring.length >= CAPACITY)
```

Mutated replacement:

```text
true
```

### 497. `src/sim/state.ts:142` — Survived / ConditionalExpression

Original:

```text
tate.ring.length >= CAPACITY)
```

Mutated replacement:

```text
false
```

### 498. `src/sim/state.ts:142` — Survived / EqualityOperator

Original:

```text
tate.ring.length >= CAPACITY)
```

Mutated replacement:

```text
state.ring.length < CAPACITY
```

### 499. `src/sim/state.ts:142` — Survived / EqualityOperator

Original:

```text
tate.ring.length >= CAPACITY)
```

Mutated replacement:

```text
state.ring.length > CAPACITY
```

### 500. `src/sim/state.ts:143` — Survived / ArrowFunction

Original:

```text
value) => value.id === itemId)
```

Mutated replacement:

```text
() => undefined
```

### 501. `src/sim/state.ts:143` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
true
```

### 502. `src/sim/state.ts:143` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
false
```

### 503. `src/sim/state.ts:143` — Survived / EqualityOperator

Original:

```text
alue.id === itemId)
```

Mutated replacement:

```text
value.id !== itemId
```

### 504. `src/sim/state.ts:144` — Survived / ObjectLiteral

Original:

```text
 state: advance({ ...state, loot: state.loot.filter((id) => id !== itemId), ring: [...state.ring, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value), objective: pickedItem?.definitionId === OBJECTIVE_ITEM_ID ? { ...state.objective, acquired: true } : state.objective }, {}), events: [{ type: "itemAcquired", itemId }] };
```

Mutated replacement:

```text
{}
```

### 505. `src/sim/state.ts:144` — Survived / MethodExpression

Original:

```text
tate.loot.filter((id) => id !== itemId),
```

Mutated replacement:

```text
state.loot
```

### 506. `src/sim/state.ts:144` — Survived / ObjectLiteral

Original:

```text
 ...state, loot: state.loot.filter((id) => id !== itemId), ring: [...state.ring, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value), objective: pickedItem?.definitionId === OBJECTIVE_ITEM_ID ? { ...state.objective, acquired: true } : state.objective },
```

Mutated replacement:

```text
{}
```

### 507. `src/sim/state.ts:144` — Survived / ArrowFunction

Original:

```text
id) => id !== itemId)
```

Mutated replacement:

```text
() => undefined
```

### 508. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
true
```

### 509. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
false
```

### 510. `src/sim/state.ts:144` — Survived / EqualityOperator

Original:

```text
d !== itemId)
```

Mutated replacement:

```text
id === itemId
```

### 511. `src/sim/state.ts:144` — Survived / ArrayDeclaration

Original:

```text
...state.ring, itemId],
```

Mutated replacement:

```text
[]
```

### 512. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
true
```

### 513. `src/sim/state.ts:144` — Survived / ArrowFunction

Original:

```text
value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value)
```

Mutated replacement:

```text
() => undefined
```

### 514. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
false
```

### 515. `src/sim/state.ts:144` — Survived / EqualityOperator

Original:

```text
alue.id === itemId 
```

Mutated replacement:

```text
value.id !== itemId
```

### 516. `src/sim/state.ts:144` — Survived / StringLiteral

Original:

```text
ring",
```

Mutated replacement:

```text
""
```

### 517. `src/sim/state.ts:144` — Survived / ObjectLiteral

Original:

```text
 ...value, location: "ring", position: undefined } 
```

Mutated replacement:

```text
{}
```

### 518. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
ickedItem?.definitionId === OBJECTIVE_ITEM_ID 
```

Mutated replacement:

```text
true
```

### 519. `src/sim/state.ts:144` — Survived / ConditionalExpression

Original:

```text
ickedItem?.definitionId === OBJECTIVE_ITEM_ID 
```

Mutated replacement:

```text
false
```

### 520. `src/sim/state.ts:144` — Survived / EqualityOperator

Original:

```text
ickedItem?.definitionId === OBJECTIVE_ITEM_ID 
```

Mutated replacement:

```text
pickedItem?.definitionId !== OBJECTIVE_ITEM_ID
```

### 521. `src/sim/state.ts:144` — Survived / OptionalChaining

Original:

```text
ickedItem?.definitionId 
```

Mutated replacement:

```text
pickedItem.definitionId
```

### 522. `src/sim/state.ts:144` — Survived / ObjectLiteral

Original:

```text
 ...state.objective, acquired: true } 
```

Mutated replacement:

```text
{}
```

### 523. `src/sim/state.ts:144` — Survived / BooleanLiteral

Original:

```text
rue 
```

Mutated replacement:

```text
false
```

### 524. `src/sim/state.ts:144` — Survived / ArrayDeclaration

Original:

```text
{ type: "itemAcquired", itemId }] 
```

Mutated replacement:

```text
[]
```

### 525. `src/sim/state.ts:144` — Survived / ObjectLiteral

Original:

```text
 type: "itemAcquired", itemId }]
```

Mutated replacement:

```text
{}
```

### 526. `src/sim/state.ts:144` — Survived / StringLiteral

Original:

```text
itemAcquired",
```

Mutated replacement:

```text
""
```

### 527. `src/sim/state.ts:146` — Survived / ConditionalExpression

Original:

```text
ommand === "dropSelected")
```

Mutated replacement:

```text
true
```

### 528. `src/sim/state.ts:146` — Survived / ConditionalExpression

Original:

```text
ommand === "dropSelected")
```

Mutated replacement:

```text
false
```

### 529. `src/sim/state.ts:146` — Survived / StringLiteral

Original:

```text
dropSelected")
```

Mutated replacement:

```text
""
```

### 530. `src/sim/state.ts:146` — Survived / EqualityOperator

Original:

```text
ommand === "dropSelected")
```

Mutated replacement:

```text
command !== "dropSelected"
```

### 531. `src/sim/state.ts:152` — Survived / ConditionalExpression

Original:

```text
ommand === "turnLeft" 
```

Mutated replacement:

```text
false
```

### 532. `src/sim/state.ts:152` — Survived / EqualityOperator

Original:

```text
ommand === "turnLeft" 
```

Mutated replacement:

```text
command !== "turnLeft"
```

### 533. `src/sim/state.ts:152` — Survived / ConditionalExpression

Original:

```text
ommand === "turnLeft" 
```

Mutated replacement:

```text
true
```

### 534. `src/sim/state.ts:152` — Survived / StringLiteral

Original:

```text
turnLeft" 
```

Mutated replacement:

```text
""
```

### 535. `src/sim/state.ts:152` — Survived / ConditionalExpression

Original:

```text
ommand === "turnRight" 
```

Mutated replacement:

```text
true
```

### 536. `src/sim/state.ts:152` — Survived / ConditionalExpression

Original:

```text
ommand === "turnRight" 
```

Mutated replacement:

```text
false
```

### 537. `src/sim/state.ts:152` — Survived / EqualityOperator

Original:

```text
ommand === "turnRight" 
```

Mutated replacement:

```text
command !== "turnRight"
```

### 538. `src/sim/state.ts:152` — Survived / StringLiteral

Original:

```text
turnRight" 
```

Mutated replacement:

```text
""
```

### 539. `src/sim/state.ts:154` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" || command === "moveBackward")
```

Mutated replacement:

```text
false
```

### 540. `src/sim/state.ts:154` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" || command === "moveBackward")
```

Mutated replacement:

```text
true
```

### 541. `src/sim/state.ts:154` — Survived / EqualityOperator

Original:

```text
ommand === "moveBackward")
```

Mutated replacement:

```text
command !== "moveBackward"
```

### 542. `src/sim/state.ts:154` — Survived / StringLiteral

Original:

```text
moveBackward")
```

Mutated replacement:

```text
""
```

### 543. `src/sim/state.ts:154` — Survived / ConditionalExpression

Original:

```text
ommand === "moveBackward")
```

Mutated replacement:

```text
false
```

### 544. `src/sim/state.ts:154` — Survived / LogicalOperator

Original:

```text
ommand === "moveForward" || command === "moveBackward")
```

Mutated replacement:

```text
command === "moveForward" && command === "moveBackward"
```

### 545. `src/sim/state.ts:154` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
false
```

### 546. `src/sim/state.ts:154` — Survived / EqualityOperator

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
command !== "moveForward"
```

### 547. `src/sim/state.ts:154` — Survived / StringLiteral

Original:

```text
moveForward" 
```

Mutated replacement:

```text
""
```

### 548. `src/sim/state.ts:155` — Survived / ObjectLiteral

Original:

```text
 x: -forward.x, y: -forward.y };
```

Mutated replacement:

```text
{}
```

### 549. `src/sim/state.ts:155` — Survived / UnaryOperator

Original:

```text
forward.x,
```

Mutated replacement:

```text
+forward.x
```

### 550. `src/sim/state.ts:155` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
true
```

### 551. `src/sim/state.ts:154` — Survived / BlockStatement

Original:

```text

    const forward = DELTAS[facing]; const delta = command === "moveForward" ? forward : { x: -forward.x, y: -forward.y };
    const next = { x: position.x + delta.x, y: position.y + delta.y }; const door = doorAt(state, next);
    if (!state.walls.includes(key(next)) && (!door || door.open)) {
      const monster = command === "moveForward" ? monsterAt(state, next) : undefined;
      if (monster) { const encounter = encounterFromMonster(monster); return { state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] }; }
      position = next; events.push({ type: "moved", position });
    } else events.push({ type: "movementBlocked", position: next });
  }
```

Mutated replacement:

```text
{}
```

### 552. `src/sim/state.ts:155` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
false
```

### 553. `src/sim/state.ts:155` — Survived / UnaryOperator

Original:

```text
forward.y 
```

Mutated replacement:

```text
+forward.y
```

### 554. `src/sim/state.ts:155` — Survived / EqualityOperator

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
command !== "moveForward"
```

### 555. `src/sim/state.ts:155` — Survived / StringLiteral

Original:

```text
moveForward" 
```

Mutated replacement:

```text
""
```

### 556. `src/sim/state.ts:156` — Survived / ObjectLiteral

Original:

```text
 x: position.x + delta.x, y: position.y + delta.y };
```

Mutated replacement:

```text
{}
```

### 557. `src/sim/state.ts:156` — Survived / ArithmeticOperator

Original:

```text
osition.x + delta.x,
```

Mutated replacement:

```text
position.x - delta.x
```

### 558. `src/sim/state.ts:156` — Survived / ArithmeticOperator

Original:

```text
osition.y + delta.y 
```

Mutated replacement:

```text
position.y - delta.y
```

### 559. `src/sim/state.ts:157` — Survived / ConditionalExpression

Original:

```text
state.walls.includes(key(next)) && (!door || door.open))
```

Mutated replacement:

```text
true
```

### 560. `src/sim/state.ts:157` — Survived / ConditionalExpression

Original:

```text
state.walls.includes(key(next)) && (!door || door.open))
```

Mutated replacement:

```text
false
```

### 561. `src/sim/state.ts:157` — Survived / LogicalOperator

Original:

```text
state.walls.includes(key(next)) && (!door || door.open))
```

Mutated replacement:

```text
!state.walls.includes(key(next)) || !door || door.open
```

### 562. `src/sim/state.ts:157` — Survived / BooleanLiteral

Original:

```text
state.walls.includes(key(next)) 
```

Mutated replacement:

```text
state.walls.includes(key(next))
```

### 563. `src/sim/state.ts:157` — Survived / ConditionalExpression

Original:

```text
door || door.open)
```

Mutated replacement:

```text
true
```

### 564. `src/sim/state.ts:157` — Survived / LogicalOperator

Original:

```text
door || door.open)
```

Mutated replacement:

```text
!door && door.open
```

### 565. `src/sim/state.ts:157` — Survived / BlockStatement

Original:

```text

      const monster = command === "moveForward" ? monsterAt(state, next) : undefined;
      if (monster) { const encounter = encounterFromMonster(monster); return { state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] }; }
      position = next; events.push({ type: "moved", position });
    } 
```

Mutated replacement:

```text
{}
```

### 566. `src/sim/state.ts:157` — Survived / BooleanLiteral

Original:

```text
door 
```

Mutated replacement:

```text
door
```

### 567. `src/sim/state.ts:158` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
false
```

### 568. `src/sim/state.ts:158` — Survived / EqualityOperator

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
command !== "moveForward"
```

### 569. `src/sim/state.ts:158` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
true
```

### 570. `src/sim/state.ts:158` — Survived / StringLiteral

Original:

```text
moveForward" 
```

Mutated replacement:

```text
""
```

### 571. `src/sim/state.ts:159` — Survived / BlockStatement

Original:

```text
 const encounter = encounterFromMonster(monster); return { state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] }; }
```

Mutated replacement:

```text
{}
```

### 572. `src/sim/state.ts:159` — Survived / ObjectLiteral

Original:

```text
 state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] };
```

Mutated replacement:

```text
{}
```

### 573. `src/sim/state.ts:159` — Survived / ConditionalExpression

Original:

```text
onster)
```

Mutated replacement:

```text
false
```

### 574. `src/sim/state.ts:159` — Survived / ConditionalExpression

Original:

```text
onster)
```

Mutated replacement:

```text
true
```

### 575. `src/sim/state.ts:159` — Survived / ArrayDeclaration

Original:

```text
{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] 
```

Mutated replacement:

```text
[]
```

### 576. `src/sim/state.ts:159` — Survived / ObjectLiteral

Original:

```text
 encounter })
```

Mutated replacement:

```text
{}
```

### 577. `src/sim/state.ts:161` — Survived / ObjectLiteral

Original:

```text
 type: "movementBlocked", position: next })
```

Mutated replacement:

```text
{}
```

### 578. `src/sim/state.ts:161` — Survived / StringLiteral

Original:

```text
movementBlocked",
```

Mutated replacement:

```text
""
```

### 579. `src/sim/state.ts:160` — Survived / StringLiteral

Original:

```text
moved",
```

Mutated replacement:

```text
""
```

### 580. `src/sim/state.ts:160` — Survived / ObjectLiteral

Original:

```text
 type: "moved", position })
```

Mutated replacement:

```text
{}
```

### 581. `src/sim/state.ts:159` — Survived / StringLiteral

Original:

```text
encounterStarted",
```

Mutated replacement:

```text
""
```

### 582. `src/sim/state.ts:159` — Survived / ObjectLiteral

Original:

```text
 type: "encounterStarted", name: encounter.name, monsterId: monster.id }]
```

Mutated replacement:

```text
{}
```

### 583. `src/sim/state.ts:163` — Survived / ConditionalExpression

Original:

```text
ommand === "turnLeft" || command === "turnRight")
```

Mutated replacement:

```text
true
```

### 584. `src/sim/state.ts:163` — Survived / ConditionalExpression

Original:

```text
ommand === "turnLeft" || command === "turnRight")
```

Mutated replacement:

```text
false
```

### 585. `src/sim/state.ts:163` — Survived / LogicalOperator

Original:

```text
ommand === "turnLeft" || command === "turnRight")
```

Mutated replacement:

```text
command === "turnLeft" && command === "turnRight"
```

### 586. `src/sim/state.ts:163` — Survived / ConditionalExpression

Original:

```text
ommand === "turnLeft" 
```

Mutated replacement:

```text
false
```

### 587. `src/sim/state.ts:163` — Survived / EqualityOperator

Original:

```text
ommand === "turnLeft" 
```

Mutated replacement:

```text
command !== "turnLeft"
```

### 588. `src/sim/state.ts:163` — Survived / StringLiteral

Original:

```text
turnLeft" 
```

Mutated replacement:

```text
""
```

### 589. `src/sim/state.ts:163` — Survived / ConditionalExpression

Original:

```text
ommand === "turnRight")
```

Mutated replacement:

```text
false
```

### 590. `src/sim/state.ts:163` — Survived / EqualityOperator

Original:

```text
ommand === "turnRight")
```

Mutated replacement:

```text
command !== "turnRight"
```

### 591. `src/sim/state.ts:163` — Survived / ObjectLiteral

Original:

```text
 type: "turned", facing })
```

Mutated replacement:

```text
{}
```

### 592. `src/sim/state.ts:163` — Survived / StringLiteral

Original:

```text
turnRight")
```

Mutated replacement:

```text
""
```

### 593. `src/sim/state.ts:163` — Survived / StringLiteral

Original:

```text
turned",
```

Mutated replacement:

```text
""
```

### 594. `src/sim/state.ts:164` — Survived / ObjectLiteral

Original:

```text
 player: { position, facing } })
```

Mutated replacement:

```text
{}
```

### 595. `src/sim/state.ts:164` — Survived / ObjectLiteral

Original:

```text
 position, facing } 
```

Mutated replacement:

```text
{}
```

### 596. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
command === "moveForward" || command === "moveBackward") && key(position) === key(state.objective.exit))
```

Mutated replacement:

```text
true
```

### 597. `src/sim/state.ts:165` — Survived / LogicalOperator

Original:

```text
command === "moveForward" || command === "moveBackward") && key(position) === key(state.objective.exit))
```

Mutated replacement:

```text
command === "moveForward" || command === "moveBackward" || key(position) === key(state.objective.exit)
```

### 598. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
command === "moveForward" || command === "moveBackward") && key(position) === key(state.objective.exit))
```

Mutated replacement:

```text
false
```

### 599. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" || command === "moveBackward")
```

Mutated replacement:

```text
true
```

### 600. `src/sim/state.ts:165` — Survived / LogicalOperator

Original:

```text
ommand === "moveForward" || command === "moveBackward")
```

Mutated replacement:

```text
command === "moveForward" && command === "moveBackward"
```

### 601. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
false
```

### 602. `src/sim/state.ts:165` — Survived / EqualityOperator

Original:

```text
ommand === "moveForward" 
```

Mutated replacement:

```text
command !== "moveForward"
```

### 603. `src/sim/state.ts:165` — Survived / StringLiteral

Original:

```text
moveForward" 
```

Mutated replacement:

```text
""
```

### 604. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
ommand === "moveBackward")
```

Mutated replacement:

```text
false
```

### 605. `src/sim/state.ts:165` — Survived / EqualityOperator

Original:

```text
ommand === "moveBackward")
```

Mutated replacement:

```text
command !== "moveBackward"
```

### 606. `src/sim/state.ts:165` — Survived / BlockStatement

Original:

```text

    const completion = completeRun(movedState);
    if (completion.events[0]?.type === "runVictorious") return { state: completion.state, events: [...events, ...completion.events] };
    events.push(...completion.events);
  }
```

Mutated replacement:

```text
{}
```

### 607. `src/sim/state.ts:167` — Survived / ConditionalExpression

Original:

```text
ompletion.events[0]?.type === "runVictorious")
```

Mutated replacement:

```text
true
```

### 608. `src/sim/state.ts:165` — Survived / StringLiteral

Original:

```text
moveBackward")
```

Mutated replacement:

```text
""
```

### 609. `src/sim/state.ts:167` — Survived / ConditionalExpression

Original:

```text
ompletion.events[0]?.type === "runVictorious")
```

Mutated replacement:

```text
false
```

### 610. `src/sim/state.ts:167` — Survived / EqualityOperator

Original:

```text
ompletion.events[0]?.type === "runVictorious")
```

Mutated replacement:

```text
completion.events[0]?.type !== "runVictorious"
```

### 611. `src/sim/state.ts:167` — Survived / OptionalChaining

Original:

```text
ompletion.events[0]?.type 
```

Mutated replacement:

```text
completion.events[0].type
```

### 612. `src/sim/state.ts:167` — Survived / StringLiteral

Original:

```text
runVictorious")
```

Mutated replacement:

```text
""
```

### 613. `src/sim/state.ts:167` — Survived / ObjectLiteral

Original:

```text
 state: completion.state, events: [...events, ...completion.events] };
```

Mutated replacement:

```text
{}
```

### 614. `src/sim/state.ts:167` — Survived / ArrayDeclaration

Original:

```text
...events, ...completion.events] 
```

Mutated replacement:

```text
[]
```

### 615. `src/sim/state.ts:168` — Survived / CallExpression

Original:

```text
vents.push(...completion.events);
```

Mutated replacement:

```text
;
```

### 616. `src/sim/state.ts:165` — Survived / ConditionalExpression

Original:

```text
ey(position) === key(state.objective.exit))
```

Mutated replacement:

```text
true
```

### 617. `src/sim/state.ts:174` — Survived / BlockStatement

Original:

```text

  const delta = DELTAS[state.player.facing];
  return [1, 2, 3, 4].map((distance) => { const point = { x: state.player.position.x + delta.x * distance, y: state.player.position.y + delta.y * distance }; return { distance, point, blocked: state.walls.includes(key(point)) || doorAt(state, point)?.open === false }; });
}
```

Mutated replacement:

```text
{}
```

### 618. `src/sim/state.ts:176` — Survived / ArrayDeclaration

Original:

```text
1, 2, 3, 4].
```

Mutated replacement:

```text
[]
```

### 619. `src/sim/state.ts:176` — Survived / BlockStatement

Original:

```text
 const point = { x: state.player.position.x + delta.x * distance, y: state.player.position.y + delta.y * distance }; return { distance, point, blocked: state.walls.includes(key(point)) || doorAt(state, point)?.open === false }; })
```

Mutated replacement:

```text
{}
```

### 620. `src/sim/state.ts:165` — Survived / EqualityOperator

Original:

```text
ey(position) === key(state.objective.exit))
```

Mutated replacement:

```text
key(position) !== key(state.objective.exit)
```

### 621. `src/sim/state.ts:176` — Survived / ObjectLiteral

Original:

```text
 x: state.player.position.x + delta.x * distance, y: state.player.position.y + delta.y * distance };
```

Mutated replacement:

```text
{}
```

### 622. `src/sim/state.ts:176` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.x + delta.x * distance,
```

Mutated replacement:

```text
state.player.position.x - delta.x * distance
```

### 623. `src/sim/state.ts:176` — Survived / ArithmeticOperator

Original:

```text
elta.x * distance,
```

Mutated replacement:

```text
delta.x / distance
```

### 624. `src/sim/state.ts:176` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.y + delta.y * distance 
```

Mutated replacement:

```text
state.player.position.y - delta.y * distance
```

### 625. `src/sim/state.ts:176` — Survived / ArithmeticOperator

Original:

```text
elta.y * distance 
```

Mutated replacement:

```text
delta.y / distance
```

### 626. `src/sim/state.ts:176` — Survived / ObjectLiteral

Original:

```text
 distance, point, blocked: state.walls.includes(key(point)) || doorAt(state, point)?.open === false };
```

Mutated replacement:

```text
{}
```

### 627. `src/sim/state.ts:176` — Survived / ConditionalExpression

Original:

```text
tate.walls.includes(key(point)) || doorAt(state, point)?.open === false 
```

Mutated replacement:

```text
true
```

### 628. `src/sim/state.ts:176` — Survived / ConditionalExpression

Original:

```text
tate.walls.includes(key(point)) || doorAt(state, point)?.open === false 
```

Mutated replacement:

```text
false
```

### 629. `src/sim/state.ts:176` — Survived / LogicalOperator

Original:

```text
tate.walls.includes(key(point)) || doorAt(state, point)?.open === false 
```

Mutated replacement:

```text
state.walls.includes(key(point)) && doorAt(state, point)?.open === false
```

### 630. `src/sim/state.ts:176` — Survived / ConditionalExpression

Original:

```text
oorAt(state, point)?.open === false 
```

Mutated replacement:

```text
false
```

### 631. `src/sim/state.ts:176` — Survived / EqualityOperator

Original:

```text
oorAt(state, point)?.open === false 
```

Mutated replacement:

```text
doorAt(state, point)?.open !== false
```

### 632. `src/sim/state.ts:176` — Survived / OptionalChaining

Original:

```text
oorAt(state, point)?.open 
```

Mutated replacement:

```text
doorAt(state, point).open
```

### 633. `src/sim/state.ts:176` — Survived / BooleanLiteral

Original:

```text
alse 
```

Mutated replacement:

```text
true
```

### 634. `src/sim/state.ts:179` — Survived / BlockStatement

Original:

```text
 const door = doorAt(state, point); if (door) return door.open ? "open-door" : "closed-door"; return state.walls.includes(key(point)) ? "wall" : "passage"; }
```

Mutated replacement:

```text
{}
```

### 635. `src/sim/state.ts:179` — Survived / ConditionalExpression

Original:

```text
oor)
```

Mutated replacement:

```text
true
```

### 636. `src/sim/state.ts:170` — Survived / ObjectLiteral

Original:

```text
 state: movedState, events };
```

Mutated replacement:

```text
{}
```

### 637. `src/sim/state.ts:173` — Survived / BlockStatement

Original:

```text
 return executeCommand(state, command).state; }
```

Mutated replacement:

```text
{}
```

### 638. `src/sim/state.ts:179` — Survived / ConditionalExpression

Original:

```text
oor)
```

Mutated replacement:

```text
false
```

### 639. `src/sim/state.ts:179` — Survived / StringLiteral

Original:

```text
open-door" 
```

Mutated replacement:

```text
""
```

### 640. `src/sim/state.ts:179` — Survived / StringLiteral

Original:

```text
closed-door";
```

Mutated replacement:

```text
""
```

### 641. `src/sim/state.ts:179` — Survived / StringLiteral

Original:

```text
wall" 
```

Mutated replacement:

```text
""
```

### 642. `src/sim/state.ts:179` — Survived / StringLiteral

Original:

```text
passage";
```

Mutated replacement:

```text
""
```

### 643. `src/sim/state.ts:17` — Survived / ObjectLiteral

Original:

```text
 north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 } };
```

Mutated replacement:

```text
{}
```

### 644. `src/sim/state.ts:17` — Survived / ObjectLiteral

Original:

```text
 x: 1, y: 0 },
```

Mutated replacement:

```text
{}
```

### 645. `src/sim/state.ts:17` — Survived / UnaryOperator

Original:

```text
1 
```

Mutated replacement:

```text
+1
```

### 646. `src/sim/state.ts:17` — Survived / ObjectLiteral

Original:

```text
 x: 0, y: -1 },
```

Mutated replacement:

```text
{}
```

### 647. `src/sim/state.ts:17` — Survived / ObjectLiteral

Original:

```text
 x: 0, y: 1 },
```

Mutated replacement:

```text
{}
```

### 648. `src/sim/state.ts:17` — Survived / ObjectLiteral

Original:

```text
 x: -1, y: 0 } 
```

Mutated replacement:

```text
{}
```

### 649. `src/sim/state.ts:17` — Survived / UnaryOperator

Original:

```text
1,
```

Mutated replacement:

```text
+1
```

### 650. `src/sim/state.ts:18` — Survived / ObjectLiteral

Original:

```text
 north: "west", west: "south", south: "east", east: "north" };
```

Mutated replacement:

```text
{}
```

### 651. `src/sim/state.ts:18` — Survived / StringLiteral

Original:

```text
west",
```

Mutated replacement:

```text
""
```

### 652. `src/sim/state.ts:18` — Survived / StringLiteral

Original:

```text
south",
```

Mutated replacement:

```text
""
```

### 653. `src/sim/state.ts:18` — Survived / StringLiteral

Original:

```text
east",
```

Mutated replacement:

```text
""
```

### 654. `src/sim/state.ts:18` — Survived / StringLiteral

Original:

```text
north" 
```

Mutated replacement:

```text
""
```

### 655. `src/sim/state.ts:19` — Survived / ObjectLiteral

Original:

```text
 north: "east", east: "south", south: "west", west: "north" };
```

Mutated replacement:

```text
{}
```

### 656. `src/sim/state.ts:19` — Survived / StringLiteral

Original:

```text
east",
```

Mutated replacement:

```text
""
```

### 657. `src/sim/state.ts:19` — Survived / StringLiteral

Original:

```text
north" 
```

Mutated replacement:

```text
""
```

### 658. `src/sim/state.ts:19` — Survived / StringLiteral

Original:

```text
south",
```

Mutated replacement:

```text
""
```

### 659. `src/sim/state.ts:19` — Survived / StringLiteral

Original:

```text
west",
```

Mutated replacement:

```text
""
```

### 660. `src/sim/state.ts:20` — Survived / ArrowFunction

Original:

```text
point: Point): string => `${point.x},${point.y}`;
```

Mutated replacement:

```text
() => undefined
```

### 661. `src/sim/state.ts:24` — Survived / ArrowFunction

Original:

```text
id: string, definitionId: string, location: ItemInstance["location"], position?: Point): ItemInstance => ({ id, definitionId, location, ...(position ? { position } : {}) });
```

Mutated replacement:

```text
() => undefined
```

### 662. `src/sim/state.ts:72` — Survived / ArrowFunction

Original:

```text
state: GameState, point: Point): DoorState | undefined => state.doors.find((door) => key(door.position) === key(point));
```

Mutated replacement:

```text
() => undefined
```

### 663. `src/sim/state.ts:22` — Survived / ObjectLiteral

Original:

```text
 x: 2, y: 4 };
```

Mutated replacement:

```text
{}
```

### 664. `src/sim/state.ts:74` — Survived / ArrowFunction

Original:

```text
state: GameState, patch: Partial<GameState>): GameState => ({ ...state, ...patch, turn: state.turn + 1 });
```

Mutated replacement:

```text
() => undefined
```

### 665. `src/sim/state.ts:73` — Survived / ArrowFunction

Original:

```text
state: GameState): string | null => state.ring[state.selectedRingIndex] ?? null;
```

Mutated replacement:

```text
() => undefined
```

### 666. `src/game/seed.ts:9` — NoCoverage / BlockStatement

Original:

```text

  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return normalizeSeed(values[0]);
}
```

Mutated replacement:

```text
{}
```

### 667. `src/game/seed.ts:11` — NoCoverage / CallExpression

Original:

```text
rypto.getRandomValues(values);
```

Mutated replacement:

```text
;
```

### 668. `src/game/seed.ts:1` — Survived / BlockStatement

Original:

```text

  const text = String(value).trim();
  if (/^[+-]?\d+$/.test(text)) return (Number.parseInt(text, 10) >>> 0) || 1;
  let hash = 2166136261;
  for (const character of text) { hash ^= character.charCodeAt(0); hash = Math.imul(hash, 16777619); }
  return (hash >>> 0) || 1;
}
```

Mutated replacement:

```text
{}
```

### 669. `src/game/seed.ts:2` — Survived / MethodExpression

Original:

```text
tring(value).trim();
```

Mutated replacement:

```text
String(value)
```

### 670. `src/game/seed.ts:3` — Survived / ConditionalExpression

Original:

```text
^[+-]?\d+$/.test(text))
```

Mutated replacement:

```text
true
```

### 671. `src/game/seed.ts:3` — Survived / ConditionalExpression

Original:

```text
^[+-]?\d+$/.test(text))
```

Mutated replacement:

```text
false
```

### 672. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/[+-]?\d+$/
```

### 673. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/^[+-]?\d+/
```

### 674. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/^[+-]\d+$/
```

### 675. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/^[^+-]?\d+$/
```

### 676. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/^[+-]?\D+$/
```

### 677. `src/game/seed.ts:3` — Survived / Regex

Original:

```text
^[+-]?\d+$/.
```

Mutated replacement:

```text
/^[+-]?\d$/
```

### 678. `src/game/seed.ts:3` — Survived / ConditionalExpression

Original:

```text
Number.parseInt(text, 10) >>> 0) || 1;
```

Mutated replacement:

```text
true
```

### 679. `src/game/seed.ts:3` — Survived / ConditionalExpression

Original:

```text
Number.parseInt(text, 10) >>> 0) || 1;
```

Mutated replacement:

```text
false
```

### 680. `src/game/seed.ts:3` — Survived / LogicalOperator

Original:

```text
Number.parseInt(text, 10) >>> 0) || 1;
```

Mutated replacement:

```text
Number.parseInt(text, 10) >>> 0 && 1
```

### 681. `src/game/seed.ts:5` — Survived / BlockStatement

Original:

```text
 hash ^= character.charCodeAt(0); hash = Math.imul(hash, 16777619); }
```

Mutated replacement:

```text
{}
```

### 682. `src/game/seed.ts:6` — Survived / ConditionalExpression

Original:

```text
hash >>> 0) || 1;
```

Mutated replacement:

```text
true
```

### 683. `src/game/seed.ts:6` — Survived / ConditionalExpression

Original:

```text
hash >>> 0) || 1;
```

Mutated replacement:

```text
false
```

### 684. `src/game/seed.ts:6` — Survived / LogicalOperator

Original:

```text
hash >>> 0) || 1;
```

Mutated replacement:

```text
hash >>> 0 && 1
```

### 685. `src/game/portalProjection.ts:13` — NoCoverage / BlockStatement

Original:

```text

  return { left: frame.left * width, right: frame.right * width, top: frame.top * height, bottom: frame.bottom * height };
}
```

Mutated replacement:

```text
{}
```

### 686. `src/game/portalProjection.ts:14` — NoCoverage / ObjectLiteral

Original:

```text
 left: frame.left * width, right: frame.right * width, top: frame.top * height, bottom: frame.bottom * height };
```

Mutated replacement:

```text
{}
```

### 687. `src/game/portalProjection.ts:14` — NoCoverage / ArithmeticOperator

Original:

```text
rame.left * width,
```

Mutated replacement:

```text
frame.left / width
```

### 688. `src/game/portalProjection.ts:14` — NoCoverage / ArithmeticOperator

Original:

```text
rame.right * width,
```

Mutated replacement:

```text
frame.right / width
```

### 689. `src/game/portalProjection.ts:14` — NoCoverage / ArithmeticOperator

Original:

```text
rame.top * height,
```

Mutated replacement:

```text
frame.top / height
```

### 690. `src/game/portalProjection.ts:14` — NoCoverage / ArithmeticOperator

Original:

```text
rame.bottom * height 
```

Mutated replacement:

```text
frame.bottom / height
```

### 691. `src/game/portalProjection.ts:22` — Survived / BlockStatement

Original:

```text

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
```

Mutated replacement:

```text
{}
```

### 692. `src/game/portalProjection.ts:23` — Survived / ObjectLiteral

Original:

```text
 x: near.left, y: near.top };
```

Mutated replacement:

```text
{}
```

### 693. `src/game/portalProjection.ts:24` — Survived / ObjectLiteral

Original:

```text
 x: near.right, y: near.top };
```

Mutated replacement:

```text
{}
```

### 694. `src/game/portalProjection.ts:26` — Survived / ObjectLiteral

Original:

```text
 x: near.right, y: near.bottom };
```

Mutated replacement:

```text
{}
```

### 695. `src/game/portalProjection.ts:25` — Survived / ObjectLiteral

Original:

```text
 x: near.left, y: near.bottom };
```

Mutated replacement:

```text
{}
```

### 696. `src/game/portalProjection.ts:27` — Survived / ObjectLiteral

Original:

```text
 x: far.left, y: far.top };
```

Mutated replacement:

```text
{}
```

### 697. `src/game/portalProjection.ts:28` — Survived / ObjectLiteral

Original:

```text
 x: far.right, y: far.top };
```

Mutated replacement:

```text
{}
```

### 698. `src/game/portalProjection.ts:29` — Survived / ObjectLiteral

Original:

```text
 x: far.left, y: far.bottom };
```

Mutated replacement:

```text
{}
```

### 699. `src/game/portalProjection.ts:30` — Survived / ObjectLiteral

Original:

```text
 x: far.right, y: far.bottom };
```

Mutated replacement:

```text
{}
```

### 700. `src/game/portalProjection.ts:31` — Survived / ObjectLiteral

Original:

```text

    leftWall: [tl, ftl, fbl, bl],
    rightWall: [ftr, tr, br, fbr],
    ceiling: [tl, tr, ftr, ftl],
    floor: [bl, fbl, fbr, br]
  };
```

Mutated replacement:

```text
{}
```

### 701. `src/game/portalProjection.ts:32` — Survived / ArrayDeclaration

Original:

```text
tl, ftl, fbl, bl],
```

Mutated replacement:

```text
[]
```

### 702. `src/game/portalProjection.ts:33` — Survived / ArrayDeclaration

Original:

```text
ftr, tr, br, fbr],
```

Mutated replacement:

```text
[]
```

### 703. `src/game/portalProjection.ts:34` — Survived / ArrayDeclaration

Original:

```text
tl, tr, ftr, ftl],
```

Mutated replacement:

```text
[]
```

### 704. `src/game/portalProjection.ts:35` — Survived / ArrayDeclaration

Original:

```text
bl, fbl, fbr, br]
```

Mutated replacement:

```text
[]
```

### 705. `src/game/palette.ts:21` — NoCoverage / BlockStatement

Original:

```text

  return `#${color.toString(16).padStart(6, "0")}`;
}
```

Mutated replacement:

```text
{}
```

### 706. `src/game/palette.ts:22` — NoCoverage / StringLiteral

Original:

```text
#${color.toString(16).padStart(6, "0")}`;
```

Mutated replacement:

```text
``
```

### 707. `src/game/palette.ts:22` — NoCoverage / StringLiteral

Original:

```text
0")
```

Mutated replacement:

```text
""
```

### 708. `src/game/palette.ts:25` — NoCoverage / BlockStatement

Original:

```text

  const red = (color >> 16) & 0xff;
  const green = (color >> 8) & 0xff;
  const blue = color & 0xff;
  return (Math.round(red * amount) << 16) | (Math.round(green * amount) << 8) | Math.round(blue * amount);
}
```

Mutated replacement:

```text
{}
```

### 709. `src/game/palette.ts:29` — NoCoverage / ArithmeticOperator

Original:

```text
ed * amount)
```

Mutated replacement:

```text
red / amount
```

### 710. `src/game/palette.ts:29` — NoCoverage / ArithmeticOperator

Original:

```text
reen * amount)
```

Mutated replacement:

```text
green / amount
```

### 711. `src/game/palette.ts:29` — NoCoverage / ArithmeticOperator

Original:

```text
lue * amount)
```

Mutated replacement:

```text
blue / amount
```

### 712. `src/game/renderFixtures.ts:9` — NoCoverage / BlockStatement

Original:

```text

  const walls: string[] = [];
  const wall = (x: number, y: number): void => { walls.push(`${x},${y}`); };
  for (let depth = 1; depth <= 4; depth += 1) {
    wall(depth, -1);
    wall(depth, 1);
  }
  if (fixture.startsWith("wall-")) wall(Number(fixture.slice(5)), 0);
  if (fixture === "t-intersection" || fixture === "four-way-intersection") {
    walls.splice(walls.indexOf("1,-1"), 1);
    walls.splice(walls.indexOf("1,1"), 1);
  }
  if (fixture === "left-opening-1" || fixture === "left-opening-2" || fixture === "four-way-intersection") {
    walls.splice(walls.indexOf(`${fixture.endsWith("-2") ? 2 : 1},-1`), 1);
  }
  if (fixture === "right-opening-1" || fixture === "four-way-intersection") walls.splice(walls.indexOf("1,1"), 1);
  return walls;
}
```

Mutated replacement:

```text
{}
```

### 713. `src/game/renderFixtures.ts:10` — NoCoverage / ArrayDeclaration

Original:

```text
];
```

Mutated replacement:

```text
["Stryker was here"]
```

### 714. `src/game/renderFixtures.ts:11` — NoCoverage / BlockStatement

Original:

```text
 walls.push(`${x},${y}`); };
```

Mutated replacement:

```text
{}
```

### 715. `src/game/renderFixtures.ts:11` — NoCoverage / StringLiteral

Original:

```text
${x},${y}`)
```

Mutated replacement:

```text
``
```

### 716. `src/game/renderFixtures.ts:12` — NoCoverage / ConditionalExpression

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
false
```

### 717. `src/game/renderFixtures.ts:12` — NoCoverage / EqualityOperator

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
depth < 4
```

### 718. `src/game/renderFixtures.ts:12` — NoCoverage / EqualityOperator

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
depth > 4
```

### 719. `src/game/renderFixtures.ts:12` — NoCoverage / AssignmentOperator

Original:

```text
epth += 1)
```

Mutated replacement:

```text
depth -= 1
```

### 720. `src/game/renderFixtures.ts:12` — NoCoverage / BlockStatement

Original:

```text

    wall(depth, -1);
    wall(depth, 1);
  }
```

Mutated replacement:

```text
{}
```

### 721. `src/game/renderFixtures.ts:13` — NoCoverage / UnaryOperator

Original:

```text
1)
```

Mutated replacement:

```text
+1
```

### 722. `src/game/renderFixtures.ts:14` — NoCoverage / CallExpression

Original:

```text
all(depth, 1);
```

Mutated replacement:

```text
;
```

### 723. `src/game/renderFixtures.ts:16` — NoCoverage / ConditionalExpression

Original:

```text
ixture.startsWith("wall-"))
```

Mutated replacement:

```text
true
```

### 724. `src/game/renderFixtures.ts:16` — NoCoverage / ConditionalExpression

Original:

```text
ixture.startsWith("wall-"))
```

Mutated replacement:

```text
false
```

### 725. `src/game/renderFixtures.ts:16` — NoCoverage / MethodExpression

Original:

```text
ixture.startsWith("wall-"))
```

Mutated replacement:

```text
fixture.endsWith("wall-")
```

### 726. `src/game/renderFixtures.ts:16` — NoCoverage / StringLiteral

Original:

```text
wall-")
```

Mutated replacement:

```text
""
```

### 727. `src/game/renderFixtures.ts:16` — NoCoverage / MethodExpression

Original:

```text
ixture.slice(5))
```

Mutated replacement:

```text
fixture
```

### 728. `src/game/renderFixtures.ts:17` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "t-intersection" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
true
```

### 729. `src/game/renderFixtures.ts:17` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "t-intersection" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 730. `src/game/renderFixtures.ts:17` — NoCoverage / LogicalOperator

Original:

```text
ixture === "t-intersection" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
fixture === "t-intersection" && fixture === "four-way-intersection"
```

### 731. `src/game/renderFixtures.ts:17` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "t-intersection" 
```

Mutated replacement:

```text
false
```

### 732. `src/game/renderFixtures.ts:17` — NoCoverage / EqualityOperator

Original:

```text
ixture === "t-intersection" 
```

Mutated replacement:

```text
fixture !== "t-intersection"
```

### 733. `src/game/renderFixtures.ts:17` — NoCoverage / StringLiteral

Original:

```text
t-intersection" 
```

Mutated replacement:

```text
""
```

### 734. `src/game/renderFixtures.ts:17` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 735. `src/game/renderFixtures.ts:17` — NoCoverage / EqualityOperator

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
fixture !== "four-way-intersection"
```

### 736. `src/game/renderFixtures.ts:17` — NoCoverage / StringLiteral

Original:

```text
four-way-intersection")
```

Mutated replacement:

```text
""
```

### 737. `src/game/renderFixtures.ts:17` — NoCoverage / BlockStatement

Original:

```text

    walls.splice(walls.indexOf("1,-1"), 1);
    walls.splice(walls.indexOf("1,1"), 1);
  }
```

Mutated replacement:

```text
{}
```

### 738. `src/game/renderFixtures.ts:18` — NoCoverage / StringLiteral

Original:

```text
1,-1")
```

Mutated replacement:

```text
""
```

### 739. `src/game/renderFixtures.ts:19` — NoCoverage / StringLiteral

Original:

```text
1,1")
```

Mutated replacement:

```text
""
```

### 740. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "left-opening-1" || fixture === "left-opening-2" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
true
```

### 741. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "left-opening-1" || fixture === "left-opening-2" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 742. `src/game/renderFixtures.ts:21` — NoCoverage / LogicalOperator

Original:

```text
ixture === "left-opening-1" || fixture === "left-opening-2" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
(fixture === "left-opening-1" || fixture === "left-opening-2") && fixture === "four-way-intersection"
```

### 743. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "left-opening-1" || fixture === "left-opening-2" 
```

Mutated replacement:

```text
false
```

### 744. `src/game/renderFixtures.ts:21` — NoCoverage / LogicalOperator

Original:

```text
ixture === "left-opening-1" || fixture === "left-opening-2" 
```

Mutated replacement:

```text
fixture === "left-opening-1" && fixture === "left-opening-2"
```

### 745. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "left-opening-1" 
```

Mutated replacement:

```text
false
```

### 746. `src/game/renderFixtures.ts:21` — NoCoverage / EqualityOperator

Original:

```text
ixture === "left-opening-1" 
```

Mutated replacement:

```text
fixture !== "left-opening-1"
```

### 747. `src/game/renderFixtures.ts:21` — NoCoverage / StringLiteral

Original:

```text
left-opening-1" 
```

Mutated replacement:

```text
""
```

### 748. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "left-opening-2" 
```

Mutated replacement:

```text
false
```

### 749. `src/game/renderFixtures.ts:21` — NoCoverage / EqualityOperator

Original:

```text
ixture === "left-opening-2" 
```

Mutated replacement:

```text
fixture !== "left-opening-2"
```

### 750. `src/game/renderFixtures.ts:21` — NoCoverage / StringLiteral

Original:

```text
left-opening-2" 
```

Mutated replacement:

```text
""
```

### 751. `src/game/renderFixtures.ts:21` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 752. `src/game/renderFixtures.ts:21` — NoCoverage / EqualityOperator

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
fixture !== "four-way-intersection"
```

### 753. `src/game/renderFixtures.ts:21` — NoCoverage / StringLiteral

Original:

```text
four-way-intersection")
```

Mutated replacement:

```text
""
```

### 754. `src/game/renderFixtures.ts:21` — NoCoverage / BlockStatement

Original:

```text

    walls.splice(walls.indexOf(`${fixture.endsWith("-2") ? 2 : 1},-1`), 1);
  }
```

Mutated replacement:

```text
{}
```

### 755. `src/game/renderFixtures.ts:22` — NoCoverage / StringLiteral

Original:

```text
${fixture.endsWith("-2") ? 2 : 1},-1`)
```

Mutated replacement:

```text
``
```

### 756. `src/game/renderFixtures.ts:22` — NoCoverage / MethodExpression

Original:

```text
ixture.endsWith("-2") 
```

Mutated replacement:

```text
fixture.startsWith("-2")
```

### 757. `src/game/renderFixtures.ts:22` — NoCoverage / StringLiteral

Original:

```text
-2")
```

Mutated replacement:

```text
""
```

### 758. `src/game/renderFixtures.ts:24` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "right-opening-1" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
true
```

### 759. `src/game/renderFixtures.ts:24` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "right-opening-1" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 760. `src/game/renderFixtures.ts:24` — NoCoverage / LogicalOperator

Original:

```text
ixture === "right-opening-1" || fixture === "four-way-intersection")
```

Mutated replacement:

```text
fixture === "right-opening-1" && fixture === "four-way-intersection"
```

### 761. `src/game/renderFixtures.ts:24` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "right-opening-1" 
```

Mutated replacement:

```text
false
```

### 762. `src/game/renderFixtures.ts:24` — NoCoverage / EqualityOperator

Original:

```text
ixture === "right-opening-1" 
```

Mutated replacement:

```text
fixture !== "right-opening-1"
```

### 763. `src/game/renderFixtures.ts:24` — NoCoverage / StringLiteral

Original:

```text
right-opening-1" 
```

Mutated replacement:

```text
""
```

### 764. `src/game/renderFixtures.ts:24` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
false
```

### 765. `src/game/renderFixtures.ts:24` — NoCoverage / EqualityOperator

Original:

```text
ixture === "four-way-intersection")
```

Mutated replacement:

```text
fixture !== "four-way-intersection"
```

### 766. `src/game/renderFixtures.ts:24` — NoCoverage / StringLiteral

Original:

```text
four-way-intersection")
```

Mutated replacement:

```text
""
```

### 767. `src/game/renderFixtures.ts:24` — NoCoverage / StringLiteral

Original:

```text
1,1")
```

Mutated replacement:

```text
""
```

### 768. `src/game/renderFixtures.ts:28` — NoCoverage / BlockStatement

Original:

```text

  const status = fixture === "defeated" || fixture === "victorious" ? fixture : "playing";
  const initial = createInitialState(7391);
  return {
    ...initial, runStatus: status, playerHealth: status === "defeated" ? 0 : fixture === "combat-defeat" ? 1 : 10,
    player: { position: fixture === "combat-defeat" ? { x: 1, y: 1 } : { x: 0, y: 0 }, facing: "east" },
    walls: fixture === "combat-defeat" ? initial.walls : fixtureWalls(fixture),
    doors: fixture === "closed-door" || fixture === "open-door" ? [{ position: { x: 1, y: 0 }, open: fixture === "open-door" }] : []
  };
}
```

Mutated replacement:

```text
{}
```

### 769. `src/game/renderFixtures.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "defeated" || fixture === "victorious" 
```

Mutated replacement:

```text
true
```

### 770. `src/game/renderFixtures.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "defeated" || fixture === "victorious" 
```

Mutated replacement:

```text
false
```

### 771. `src/game/renderFixtures.ts:29` — NoCoverage / LogicalOperator

Original:

```text
ixture === "defeated" || fixture === "victorious" 
```

Mutated replacement:

```text
fixture === "defeated" && fixture === "victorious"
```

### 772. `src/game/renderFixtures.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "defeated" 
```

Mutated replacement:

```text
false
```

### 773. `src/game/renderFixtures.ts:29` — NoCoverage / EqualityOperator

Original:

```text
ixture === "defeated" 
```

Mutated replacement:

```text
fixture !== "defeated"
```

### 774. `src/game/renderFixtures.ts:29` — NoCoverage / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 775. `src/game/renderFixtures.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "victorious" 
```

Mutated replacement:

```text
false
```

### 776. `src/game/renderFixtures.ts:29` — NoCoverage / EqualityOperator

Original:

```text
ixture === "victorious" 
```

Mutated replacement:

```text
fixture !== "victorious"
```

### 777. `src/game/renderFixtures.ts:29` — NoCoverage / StringLiteral

Original:

```text
victorious" 
```

Mutated replacement:

```text
""
```

### 778. `src/game/renderFixtures.ts:29` — NoCoverage / StringLiteral

Original:

```text
playing";
```

Mutated replacement:

```text
""
```

### 779. `src/game/renderFixtures.ts:31` — NoCoverage / ObjectLiteral

Original:

```text

    ...initial, runStatus: status, playerHealth: status === "defeated" ? 0 : fixture === "combat-defeat" ? 1 : 10,
    player: { position: fixture === "combat-defeat" ? { x: 1, y: 1 } : { x: 0, y: 0 }, facing: "east" },
    walls: fixture === "combat-defeat" ? initial.walls : fixtureWalls(fixture),
    doors: fixture === "closed-door" || fixture === "open-door" ? [{ position: { x: 1, y: 0 }, open: fixture === "open-door" }] : []
  };
```

Mutated replacement:

```text
{}
```

### 780. `src/game/renderFixtures.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
tatus === "defeated" 
```

Mutated replacement:

```text
true
```

### 781. `src/game/renderFixtures.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
tatus === "defeated" 
```

Mutated replacement:

```text
false
```

### 782. `src/game/renderFixtures.ts:32` — NoCoverage / EqualityOperator

Original:

```text
tatus === "defeated" 
```

Mutated replacement:

```text
status !== "defeated"
```

### 783. `src/game/renderFixtures.ts:32` — NoCoverage / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 784. `src/game/renderFixtures.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
true
```

### 785. `src/game/renderFixtures.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
false
```

### 786. `src/game/renderFixtures.ts:32` — NoCoverage / EqualityOperator

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
fixture !== "combat-defeat"
```

### 787. `src/game/renderFixtures.ts:32` — NoCoverage / StringLiteral

Original:

```text
combat-defeat" 
```

Mutated replacement:

```text
""
```

### 788. `src/game/renderFixtures.ts:33` — NoCoverage / ObjectLiteral

Original:

```text
 position: fixture === "combat-defeat" ? { x: 1, y: 1 } : { x: 0, y: 0 }, facing: "east" },
```

Mutated replacement:

```text
{}
```

### 789. `src/game/renderFixtures.ts:33` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
true
```

### 790. `src/game/renderFixtures.ts:33` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
false
```

### 791. `src/game/renderFixtures.ts:33` — NoCoverage / EqualityOperator

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
fixture !== "combat-defeat"
```

### 792. `src/game/renderFixtures.ts:33` — NoCoverage / StringLiteral

Original:

```text
combat-defeat" 
```

Mutated replacement:

```text
""
```

### 793. `src/game/renderFixtures.ts:33` — NoCoverage / ObjectLiteral

Original:

```text
 x: 1, y: 1 } 
```

Mutated replacement:

```text
{}
```

### 794. `src/game/renderFixtures.ts:33` — NoCoverage / ObjectLiteral

Original:

```text
 x: 0, y: 0 },
```

Mutated replacement:

```text
{}
```

### 795. `src/game/renderFixtures.ts:33` — NoCoverage / StringLiteral

Original:

```text
east" 
```

Mutated replacement:

```text
""
```

### 796. `src/game/renderFixtures.ts:34` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
true
```

### 797. `src/game/renderFixtures.ts:34` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
false
```

### 798. `src/game/renderFixtures.ts:34` — NoCoverage / EqualityOperator

Original:

```text
ixture === "combat-defeat" 
```

Mutated replacement:

```text
fixture !== "combat-defeat"
```

### 799. `src/game/renderFixtures.ts:34` — NoCoverage / StringLiteral

Original:

```text
combat-defeat" 
```

Mutated replacement:

```text
""
```

### 800. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "closed-door" || fixture === "open-door" 
```

Mutated replacement:

```text
true
```

### 801. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "closed-door" || fixture === "open-door" 
```

Mutated replacement:

```text
false
```

### 802. `src/game/renderFixtures.ts:35` — NoCoverage / LogicalOperator

Original:

```text
ixture === "closed-door" || fixture === "open-door" 
```

Mutated replacement:

```text
fixture === "closed-door" && fixture === "open-door"
```

### 803. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "closed-door" 
```

Mutated replacement:

```text
false
```

### 804. `src/game/renderFixtures.ts:35` — NoCoverage / EqualityOperator

Original:

```text
ixture === "closed-door" 
```

Mutated replacement:

```text
fixture !== "closed-door"
```

### 805. `src/game/renderFixtures.ts:35` — NoCoverage / StringLiteral

Original:

```text
closed-door" 
```

Mutated replacement:

```text
""
```

### 806. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "open-door" 
```

Mutated replacement:

```text
false
```

### 807. `src/game/renderFixtures.ts:35` — NoCoverage / EqualityOperator

Original:

```text
ixture === "open-door" 
```

Mutated replacement:

```text
fixture !== "open-door"
```

### 808. `src/game/renderFixtures.ts:35` — NoCoverage / StringLiteral

Original:

```text
open-door" 
```

Mutated replacement:

```text
""
```

### 809. `src/game/renderFixtures.ts:35` — NoCoverage / ArrayDeclaration

Original:

```text
{ position: { x: 1, y: 0 }, open: fixture === "open-door" }] 
```

Mutated replacement:

```text
[]
```

### 810. `src/game/renderFixtures.ts:35` — NoCoverage / ObjectLiteral

Original:

```text
 position: { x: 1, y: 0 }, open: fixture === "open-door" }]
```

Mutated replacement:

```text
{}
```

### 811. `src/game/renderFixtures.ts:35` — NoCoverage / ObjectLiteral

Original:

```text
 x: 1, y: 0 },
```

Mutated replacement:

```text
{}
```

### 812. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "open-door" 
```

Mutated replacement:

```text
true
```

### 813. `src/game/renderFixtures.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
ixture === "open-door" 
```

Mutated replacement:

```text
false
```

### 814. `src/game/renderFixtures.ts:35` — NoCoverage / EqualityOperator

Original:

```text
ixture === "open-door" 
```

Mutated replacement:

```text
fixture !== "open-door"
```

### 815. `src/game/renderFixtures.ts:35` — NoCoverage / StringLiteral

Original:

```text
open-door" 
```

Mutated replacement:

```text
""
```

### 816. `src/game/renderFixtures.ts:35` — NoCoverage / ArrayDeclaration

Original:

```text
]
```

Mutated replacement:

```text
["Stryker was here"]
```

### 817. `src/game/renderFixtures.ts:39` — NoCoverage / BlockStatement

Original:

```text

  const value = new URLSearchParams(window.location.search).get("fixture");
  return (RENDER_FIXTURES as readonly string[]).includes(value ?? "") ? value as RenderFixture : null;
}
```

Mutated replacement:

```text
{}
```

### 818. `src/game/renderFixtures.ts:40` — NoCoverage / StringLiteral

Original:

```text
fixture")
```

Mutated replacement:

```text
""
```

### 819. `src/game/renderFixtures.ts:41` — NoCoverage / LogicalOperator

Original:

```text
alue ?? "")
```

Mutated replacement:

```text
value && ""
```

### 820. `src/game/renderFixtures.ts:41` — NoCoverage / StringLiteral

Original:

```text
")
```

Mutated replacement:

```text
"Stryker was here!"
```

### 821. `src/game/MainScene.ts:17` — NoCoverage / BlockStatement

Original:

```text

  const pixels = frameToPixels(frame, viewport.width, viewport.height);
  return { left: pixels.left + viewport.left, right: pixels.right + viewport.left, top: pixels.top + viewport.top, bottom: pixels.bottom + viewport.top };
}
```

Mutated replacement:

```text
{}
```

### 822. `src/game/MainScene.ts:19` — NoCoverage / ObjectLiteral

Original:

```text
 left: pixels.left + viewport.left, right: pixels.right + viewport.left, top: pixels.top + viewport.top, bottom: pixels.bottom + viewport.top };
```

Mutated replacement:

```text
{}
```

### 823. `src/game/MainScene.ts:19` — NoCoverage / ArithmeticOperator

Original:

```text
ixels.left + viewport.left,
```

Mutated replacement:

```text
pixels.left - viewport.left
```

### 824. `src/game/MainScene.ts:19` — NoCoverage / ArithmeticOperator

Original:

```text
ixels.right + viewport.left,
```

Mutated replacement:

```text
pixels.right - viewport.left
```

### 825. `src/game/MainScene.ts:19` — NoCoverage / ArithmeticOperator

Original:

```text
ixels.top + viewport.top,
```

Mutated replacement:

```text
pixels.top - viewport.top
```

### 826. `src/game/MainScene.ts:19` — NoCoverage / ArithmeticOperator

Original:

```text
ixels.bottom + viewport.top 
```

Mutated replacement:

```text
pixels.bottom - viewport.top
```

### 827. `src/game/MainScene.ts:22` — NoCoverage / BlockStatement

Original:

```text

  return { left: 72, top: 72, width: width - 144, height: height - 212 };
}
```

Mutated replacement:

```text
{}
```

### 828. `src/game/MainScene.ts:23` — NoCoverage / ObjectLiteral

Original:

```text
 left: 72, top: 72, width: width - 144, height: height - 212 };
```

Mutated replacement:

```text
{}
```

### 829. `src/game/MainScene.ts:23` — NoCoverage / ArithmeticOperator

Original:

```text
idth - 144,
```

Mutated replacement:

```text
width + 144
```

### 830. `src/game/MainScene.ts:23` — NoCoverage / ArithmeticOperator

Original:

```text
eight - 212 
```

Mutated replacement:

```text
height + 212
```

### 831. `src/game/MainScene.ts:27` — NoCoverage / LogicalOperator

Original:

```text
oadCheckpoint() ?? createInitialState();
```

Mutated replacement:

```text
loadCheckpoint() && createInitialState()
```

### 832. `src/game/MainScene.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ew URLSearchParams(window.location.search).get("perspectiveDebug") === "1";
```

Mutated replacement:

```text
true
```

### 833. `src/game/MainScene.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ew URLSearchParams(window.location.search).get("perspectiveDebug") === "1";
```

Mutated replacement:

```text
false
```

### 834. `src/game/MainScene.ts:28` — NoCoverage / EqualityOperator

Original:

```text
ew URLSearchParams(window.location.search).get("perspectiveDebug") === "1";
```

Mutated replacement:

```text
new URLSearchParams(window.location.search).get("perspectiveDebug") !== "1"
```

### 835. `src/game/MainScene.ts:28` — NoCoverage / StringLiteral

Original:

```text
perspectiveDebug")
```

Mutated replacement:

```text
""
```

### 836. `src/game/MainScene.ts:28` — NoCoverage / StringLiteral

Original:

```text
1";
```

Mutated replacement:

```text
""
```

### 837. `src/game/MainScene.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "defeated" || this.state.runStatus === "victorious" 
```

Mutated replacement:

```text
true
```

### 838. `src/game/MainScene.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "defeated" || this.state.runStatus === "victorious" 
```

Mutated replacement:

```text
false
```

### 839. `src/game/MainScene.ts:29` — NoCoverage / LogicalOperator

Original:

```text
his.state.runStatus === "defeated" || this.state.runStatus === "victorious" 
```

Mutated replacement:

```text
this.state.runStatus === "defeated" && this.state.runStatus === "victorious"
```

### 840. `src/game/MainScene.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "defeated" 
```

Mutated replacement:

```text
false
```

### 841. `src/game/MainScene.ts:29` — NoCoverage / EqualityOperator

Original:

```text
his.state.runStatus === "defeated" 
```

Mutated replacement:

```text
this.state.runStatus !== "defeated"
```

### 842. `src/game/MainScene.ts:29` — NoCoverage / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 843. `src/game/MainScene.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "victorious" 
```

Mutated replacement:

```text
false
```

### 844. `src/game/MainScene.ts:29` — NoCoverage / EqualityOperator

Original:

```text
his.state.runStatus === "victorious" 
```

Mutated replacement:

```text
this.state.runStatus !== "victorious"
```

### 845. `src/game/MainScene.ts:29` — NoCoverage / StringLiteral

Original:

```text
victorious" 
```

Mutated replacement:

```text
""
```

### 846. `src/game/MainScene.ts:29` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 847. `src/game/MainScene.ts:29` — NoCoverage / StringLiteral

Original:

```text
menu";
```

Mutated replacement:

```text
""
```

### 848. `src/game/MainScene.ts:30` — NoCoverage / BooleanLiteral

Original:

```text
alse;
```

Mutated replacement:

```text
true
```

### 849. `src/game/MainScene.ts:31` — NoCoverage / StringLiteral

Original:

```text
A corridor waits beyond the torchlight.";
```

Mutated replacement:

```text
""
```

### 850. `src/game/MainScene.ts:37` — NoCoverage / StringLiteral

Original:

```text
main")
```

Mutated replacement:

```text
""
```

### 851. `src/game/MainScene.ts:39` — NoCoverage / BlockStatement

Original:

```text

    this.load.image("dungeon-surfaces", DUNGEON_SURFACE_ATLAS.source);
    this.load.image("archway-stone", "/assets/dungeon/archway-stone.png");
    this.load.image("torch-sconce", "/assets/dungeon/torch-sconce.png");
    this.load.image("torch-flame", "/assets/dungeon/torch-flame.png");
    this.load.image("fp-hands-empty", "/assets/first-person/fp-hands-empty.png");
    this.load.image("ashbound-warden", "/assets/entities/ashbound-warden.svg");
    this.load.image("glass-mireling", "/assets/entities/glass-mireling.svg");
    this.load.image("gloam-scavenger", "/assets/entities/gloam-scavenger.svg");
  }
```

Mutated replacement:

```text
{}
```

### 852. `src/game/MainScene.ts:40` — NoCoverage / StringLiteral

Original:

```text
dungeon-surfaces",
```

Mutated replacement:

```text
""
```

### 853. `src/game/MainScene.ts:41` — NoCoverage / StringLiteral

Original:

```text
archway-stone",
```

Mutated replacement:

```text
""
```

### 854. `src/game/MainScene.ts:41` — NoCoverage / StringLiteral

Original:

```text
/assets/dungeon/archway-stone.png")
```

Mutated replacement:

```text
""
```

### 855. `src/game/MainScene.ts:42` — NoCoverage / StringLiteral

Original:

```text
torch-sconce",
```

Mutated replacement:

```text
""
```

### 856. `src/game/MainScene.ts:42` — NoCoverage / StringLiteral

Original:

```text
/assets/dungeon/torch-sconce.png")
```

Mutated replacement:

```text
""
```

### 857. `src/game/MainScene.ts:43` — NoCoverage / StringLiteral

Original:

```text
torch-flame",
```

Mutated replacement:

```text
""
```

### 858. `src/game/MainScene.ts:43` — NoCoverage / StringLiteral

Original:

```text
/assets/dungeon/torch-flame.png")
```

Mutated replacement:

```text
""
```

### 859. `src/game/MainScene.ts:44` — NoCoverage / StringLiteral

Original:

```text
fp-hands-empty",
```

Mutated replacement:

```text
""
```

### 860. `src/game/MainScene.ts:44` — NoCoverage / StringLiteral

Original:

```text
/assets/first-person/fp-hands-empty.png")
```

Mutated replacement:

```text
""
```

### 861. `src/game/MainScene.ts:45` — NoCoverage / StringLiteral

Original:

```text
ashbound-warden",
```

Mutated replacement:

```text
""
```

### 862. `src/game/MainScene.ts:45` — NoCoverage / StringLiteral

Original:

```text
/assets/entities/ashbound-warden.svg")
```

Mutated replacement:

```text
""
```

### 863. `src/game/MainScene.ts:46` — NoCoverage / StringLiteral

Original:

```text
glass-mireling",
```

Mutated replacement:

```text
""
```

### 864. `src/game/MainScene.ts:46` — NoCoverage / StringLiteral

Original:

```text
/assets/entities/glass-mireling.svg")
```

Mutated replacement:

```text
""
```

### 865. `src/game/MainScene.ts:47` — NoCoverage / StringLiteral

Original:

```text
gloam-scavenger",
```

Mutated replacement:

```text
""
```

### 866. `src/game/MainScene.ts:47` — NoCoverage / StringLiteral

Original:

```text
/assets/entities/gloam-scavenger.svg")
```

Mutated replacement:

```text
""
```

### 867. `src/game/MainScene.ts:50` — NoCoverage / BlockStatement

Original:

```text

    this.presentationTimeMs = time;
    const entityFrame = this.reducedMotion ? 0 : billboardFrameAt(time);
    const flameFrame = this.reducedMotion ? 0 : Math.floor(time / 180) % 4;
    this.entitySprites.forEach((sprite) => sprite.setCrop(entityFrame * 32, 0, 32, 48));
    this.flameSprites.forEach((sprite) => sprite.setCrop(flameFrame * 32, 0, 32, 48));
  }
```

Mutated replacement:

```text
{}
```

### 868. `src/game/MainScene.ts:53` — NoCoverage / ArithmeticOperator

Original:

```text
ath.floor(time / 180) % 4;
```

Mutated replacement:

```text
Math.floor(time / 180) * 4
```

### 869. `src/game/MainScene.ts:53` — NoCoverage / ArithmeticOperator

Original:

```text
ime / 180)
```

Mutated replacement:

```text
time * 180
```

### 870. `src/game/MainScene.ts:54` — NoCoverage / ArrowFunction

Original:

```text
sprite) => sprite.setCrop(entityFrame * 32, 0, 32, 48))
```

Mutated replacement:

```text
() => undefined
```

### 871. `src/game/MainScene.ts:54` — NoCoverage / ArithmeticOperator

Original:

```text
ntityFrame * 32,
```

Mutated replacement:

```text
entityFrame / 32
```

### 872. `src/game/MainScene.ts:55` — NoCoverage / ArrowFunction

Original:

```text
sprite) => sprite.setCrop(flameFrame * 32, 0, 32, 48))
```

Mutated replacement:

```text
() => undefined
```

### 873. `src/game/MainScene.ts:55` — NoCoverage / ArithmeticOperator

Original:

```text
lameFrame * 32,
```

Mutated replacement:

```text
flameFrame / 32
```

### 874. `src/game/MainScene.ts:58` — NoCoverage / BlockStatement

Original:

```text

    this.cameras.main.setBackgroundColor(DUNGEON_PALETTE.backgroundVoid);
    this.configureAtmosphere();
    this.inputController = new InputController({ target: window, emit: (command) => this.dispatch(command), getMode: () => this.mode, togglePause: () => this.togglePause() });
    this.inputController.attach();
    window.addEventListener("tarmin-start", this.onStart);
    window.addEventListener("tarmin-continue", this.onContinue);
    window.addEventListener("tarmin-toggle-pause", this.onTogglePause);
    window.addEventListener("tarmin-motion", this.onMotion);
    this.publishMode();
    this.renderState();
    this.publishCheckpointAvailability();
  }
```

Mutated replacement:

```text
{}
```

### 875. `src/game/MainScene.ts:59` — NoCoverage / CallExpression

Original:

```text
his.cameras.main.setBackgroundColor(DUNGEON_PALETTE.backgroundVoid);
```

Mutated replacement:

```text
;
```

### 876. `src/game/MainScene.ts:60` — NoCoverage / CallExpression

Original:

```text
his.configureAtmosphere();
```

Mutated replacement:

```text
;
```

### 877. `src/game/MainScene.ts:61` — NoCoverage / ObjectLiteral

Original:

```text
 target: window, emit: (command) => this.dispatch(command), getMode: () => this.mode, togglePause: () => this.togglePause() })
```

Mutated replacement:

```text
{}
```

### 878. `src/game/MainScene.ts:61` — NoCoverage / ArrowFunction

Original:

```text
command) => this.dispatch(command),
```

Mutated replacement:

```text
() => undefined
```

### 879. `src/game/MainScene.ts:61` — NoCoverage / ArrowFunction

Original:

```text
) => this.mode,
```

Mutated replacement:

```text
() => undefined
```

### 880. `src/game/MainScene.ts:61` — NoCoverage / ArrowFunction

Original:

```text
) => this.togglePause() 
```

Mutated replacement:

```text
() => undefined
```

### 881. `src/game/MainScene.ts:62` — NoCoverage / CallExpression

Original:

```text
his.inputController.attach();
```

Mutated replacement:

```text
;
```

### 882. `src/game/MainScene.ts:63` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 883. `src/game/MainScene.ts:64` — NoCoverage / StringLiteral

Original:

```text
tarmin-continue",
```

Mutated replacement:

```text
""
```

### 884. `src/game/MainScene.ts:65` — NoCoverage / StringLiteral

Original:

```text
tarmin-toggle-pause",
```

Mutated replacement:

```text
""
```

### 885. `src/game/MainScene.ts:66` — NoCoverage / StringLiteral

Original:

```text
tarmin-motion",
```

Mutated replacement:

```text
""
```

### 886. `src/game/MainScene.ts:67` — NoCoverage / CallExpression

Original:

```text
his.publishMode();
```

Mutated replacement:

```text
;
```

### 887. `src/game/MainScene.ts:68` — NoCoverage / CallExpression

Original:

```text
his.renderState();
```

Mutated replacement:

```text
;
```

### 888. `src/game/MainScene.ts:69` — NoCoverage / CallExpression

Original:

```text
his.publishCheckpointAvailability();
```

Mutated replacement:

```text
;
```

### 889. `src/game/MainScene.ts:72` — NoCoverage / BlockStatement

Original:

```text

    const seed = (event as CustomEvent<number>).detail;
    this.state = restartRun(seed);
    saveCheckpoint(this.state);
    this.feedback = `Seed ${seed} · the descent begins.`;
    this.mode = "active";
    this.publishMode(); this.renderState();
  };
```

Mutated replacement:

```text
{}
```

### 890. `src/game/MainScene.ts:75` — NoCoverage / CallExpression

Original:

```text
aveCheckpoint(this.state);
```

Mutated replacement:

```text
;
```

### 891. `src/game/MainScene.ts:76` — NoCoverage / StringLiteral

Original:

```text
Seed ${seed} · the descent begins.`;
```

Mutated replacement:

```text
``
```

### 892. `src/game/MainScene.ts:77` — NoCoverage / StringLiteral

Original:

```text
active";
```

Mutated replacement:

```text
""
```

### 893. `src/game/MainScene.ts:78` — NoCoverage / CallExpression

Original:

```text
his.publishMode(); 
```

Mutated replacement:

```text
;
```

### 894. `src/game/MainScene.ts:78` — NoCoverage / CallExpression

Original:

```text
his.renderState();
```

Mutated replacement:

```text
;
```

### 895. `src/game/MainScene.ts:80` — NoCoverage / BlockStatement

Original:

```text

    const checkpoint = loadCheckpoint();
    if (!checkpoint) return;
    this.state = checkpoint;
    this.feedback = "The descent resumes where the torch was left.";
    this.mode = "active";
    this.publishMode(); this.renderState();
  };
```

Mutated replacement:

```text
{}
```

### 896. `src/game/MainScene.ts:82` — NoCoverage / BooleanLiteral

Original:

```text
checkpoint)
```

Mutated replacement:

```text
checkpoint
```

### 897. `src/game/MainScene.ts:82` — NoCoverage / ConditionalExpression

Original:

```text
checkpoint)
```

Mutated replacement:

```text
true
```

### 898. `src/game/MainScene.ts:82` — NoCoverage / ConditionalExpression

Original:

```text
checkpoint)
```

Mutated replacement:

```text
false
```

### 899. `src/game/MainScene.ts:84` — NoCoverage / StringLiteral

Original:

```text
The descent resumes where the torch was left.";
```

Mutated replacement:

```text
""
```

### 900. `src/game/MainScene.ts:85` — NoCoverage / StringLiteral

Original:

```text
active";
```

Mutated replacement:

```text
""
```

### 901. `src/game/MainScene.ts:86` — NoCoverage / CallExpression

Original:

```text
his.publishMode(); 
```

Mutated replacement:

```text
;
```

### 902. `src/game/MainScene.ts:86` — NoCoverage / CallExpression

Original:

```text
his.renderState();
```

Mutated replacement:

```text
;
```

### 903. `src/game/MainScene.ts:88` — NoCoverage / ArrowFunction

Original:

```text
): void => this.togglePause();
```

Mutated replacement:

```text
() => undefined
```

### 904. `src/game/MainScene.ts:89` — NoCoverage / BlockStatement

Original:

```text
 this.reducedMotion = (event as CustomEvent<boolean>).detail; this.renderState(); };
```

Mutated replacement:

```text
{}
```

### 905. `src/game/MainScene.ts:89` — NoCoverage / CallExpression

Original:

```text
his.renderState(); 
```

Mutated replacement:

```text
;
```

### 906. `src/game/MainScene.ts:91` — NoCoverage / BlockStatement

Original:

```text

    if (this.mode === "active") this.mode = "paused";
    else if (this.mode === "paused") this.mode = "active";
    else return;
    this.publishMode(); this.renderState();
  }
```

Mutated replacement:

```text
{}
```

### 907. `src/game/MainScene.ts:92` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "active")
```

Mutated replacement:

```text
true
```

### 908. `src/game/MainScene.ts:92` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "active")
```

Mutated replacement:

```text
false
```

### 909. `src/game/MainScene.ts:92` — NoCoverage / EqualityOperator

Original:

```text
his.mode === "active")
```

Mutated replacement:

```text
this.mode !== "active"
```

### 910. `src/game/MainScene.ts:92` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 911. `src/game/MainScene.ts:92` — NoCoverage / StringLiteral

Original:

```text
paused";
```

Mutated replacement:

```text
""
```

### 912. `src/game/MainScene.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "paused")
```

Mutated replacement:

```text
true
```

### 913. `src/game/MainScene.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "paused")
```

Mutated replacement:

```text
false
```

### 914. `src/game/MainScene.ts:93` — NoCoverage / EqualityOperator

Original:

```text
his.mode === "paused")
```

Mutated replacement:

```text
this.mode !== "paused"
```

### 915. `src/game/MainScene.ts:93` — NoCoverage / StringLiteral

Original:

```text
paused")
```

Mutated replacement:

```text
""
```

### 916. `src/game/MainScene.ts:93` — NoCoverage / StringLiteral

Original:

```text
active";
```

Mutated replacement:

```text
""
```

### 917. `src/game/MainScene.ts:95` — NoCoverage / CallExpression

Original:

```text
his.publishMode(); 
```

Mutated replacement:

```text
;
```

### 918. `src/game/MainScene.ts:95` — NoCoverage / CallExpression

Original:

```text
his.renderState();
```

Mutated replacement:

```text
;
```

### 919. `src/game/MainScene.ts:98` — NoCoverage / BlockStatement

Original:

```text

    if (this.mode !== "active") return;
    const result = executeCommand(this.state, command);
    this.state = result.state;
    if (this.state.runStatus === "playing") saveCheckpoint(this.state);
    else clearCheckpoint();
    this.feedback = this.feedbackFor(result.events);
    window.dispatchEvent(new CustomEvent("tarmin-events", { detail: result.events }));
    if (this.state.runStatus !== "playing") this.mode = this.state.runStatus;
    this.renderState();
    this.publishMode();
    this.publishCheckpointAvailability();
    if (this.mode !== "active") return;
    if (!command.startsWith("move") && !command.startsWith("turn")) return;
    this.mode = "transitioning"; this.publishMode();
    const veil = this.add.rectangle(this.scale.width / 2, this.scale.height / 2, this.scale.width, this.scale.height, DUNGEON_PALETTE.backgroundVoid, 0.28).setDepth(20);
    const duration = this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS;
    const finishTransition = (): void => {
      if (this.mode !== "transitioning") return;
      veil.destroy(); this.mode = "active"; this.publishMode();
    };
    this.tweens.add({ targets: veil, alpha: 0, duration, ease: "Sine.Out", onComplete: finishTransition });
    window.setTimeout(finishTransition, duration + 40);
  }
```

Mutated replacement:

```text
{}
```

### 920. `src/game/MainScene.ts:99` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
true
```

### 921. `src/game/MainScene.ts:99` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
false
```

### 922. `src/game/MainScene.ts:99` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
this.mode === "active"
```

### 923. `src/game/MainScene.ts:99` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 924. `src/game/MainScene.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "playing")
```

Mutated replacement:

```text
true
```

### 925. `src/game/MainScene.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus === "playing")
```

Mutated replacement:

```text
false
```

### 926. `src/game/MainScene.ts:102` — NoCoverage / EqualityOperator

Original:

```text
his.state.runStatus === "playing")
```

Mutated replacement:

```text
this.state.runStatus !== "playing"
```

### 927. `src/game/MainScene.ts:102` — NoCoverage / StringLiteral

Original:

```text
playing")
```

Mutated replacement:

```text
""
```

### 928. `src/game/MainScene.ts:102` — NoCoverage / CallExpression

Original:

```text
aveCheckpoint(this.state);
```

Mutated replacement:

```text
;
```

### 929. `src/game/MainScene.ts:103` — NoCoverage / CallExpression

Original:

```text
learCheckpoint();
```

Mutated replacement:

```text
;
```

### 930. `src/game/MainScene.ts:105` — NoCoverage / StringLiteral

Original:

```text
tarmin-events",
```

Mutated replacement:

```text
""
```

### 931. `src/game/MainScene.ts:105` — NoCoverage / ObjectLiteral

Original:

```text
 detail: result.events })
```

Mutated replacement:

```text
{}
```

### 932. `src/game/MainScene.ts:106` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus !== "playing")
```

Mutated replacement:

```text
true
```

### 933. `src/game/MainScene.ts:106` — NoCoverage / ConditionalExpression

Original:

```text
his.state.runStatus !== "playing")
```

Mutated replacement:

```text
false
```

### 934. `src/game/MainScene.ts:106` — NoCoverage / EqualityOperator

Original:

```text
his.state.runStatus !== "playing")
```

Mutated replacement:

```text
this.state.runStatus === "playing"
```

### 935. `src/game/MainScene.ts:106` — NoCoverage / StringLiteral

Original:

```text
playing")
```

Mutated replacement:

```text
""
```

### 936. `src/game/MainScene.ts:107` — NoCoverage / CallExpression

Original:

```text
his.renderState();
```

Mutated replacement:

```text
;
```

### 937. `src/game/MainScene.ts:108` — NoCoverage / CallExpression

Original:

```text
his.publishMode();
```

Mutated replacement:

```text
;
```

### 938. `src/game/MainScene.ts:109` — NoCoverage / CallExpression

Original:

```text
his.publishCheckpointAvailability();
```

Mutated replacement:

```text
;
```

### 939. `src/game/MainScene.ts:110` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
true
```

### 940. `src/game/MainScene.ts:110` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
false
```

### 941. `src/game/MainScene.ts:110` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
this.mode === "active"
```

### 942. `src/game/MainScene.ts:110` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 943. `src/game/MainScene.ts:111` — NoCoverage / ConditionalExpression

Original:

```text
command.startsWith("move") && !command.startsWith("turn"))
```

Mutated replacement:

```text
true
```

### 944. `src/game/MainScene.ts:111` — NoCoverage / ConditionalExpression

Original:

```text
command.startsWith("move") && !command.startsWith("turn"))
```

Mutated replacement:

```text
false
```

### 945. `src/game/MainScene.ts:111` — NoCoverage / LogicalOperator

Original:

```text
command.startsWith("move") && !command.startsWith("turn"))
```

Mutated replacement:

```text
!command.startsWith("move") || !command.startsWith("turn")
```

### 946. `src/game/MainScene.ts:111` — NoCoverage / BooleanLiteral

Original:

```text
command.startsWith("move") 
```

Mutated replacement:

```text
command.startsWith("move")
```

### 947. `src/game/MainScene.ts:111` — NoCoverage / MethodExpression

Original:

```text
ommand.startsWith("move") 
```

Mutated replacement:

```text
command.endsWith("move")
```

### 948. `src/game/MainScene.ts:111` — NoCoverage / StringLiteral

Original:

```text
move")
```

Mutated replacement:

```text
""
```

### 949. `src/game/MainScene.ts:111` — NoCoverage / BooleanLiteral

Original:

```text
command.startsWith("turn"))
```

Mutated replacement:

```text
command.startsWith("turn")
```

### 950. `src/game/MainScene.ts:111` — NoCoverage / MethodExpression

Original:

```text
ommand.startsWith("turn"))
```

Mutated replacement:

```text
command.endsWith("turn")
```

### 951. `src/game/MainScene.ts:111` — NoCoverage / StringLiteral

Original:

```text
turn")
```

Mutated replacement:

```text
""
```

### 952. `src/game/MainScene.ts:112` — NoCoverage / StringLiteral

Original:

```text
transitioning";
```

Mutated replacement:

```text
""
```

### 953. `src/game/MainScene.ts:112` — NoCoverage / CallExpression

Original:

```text
his.publishMode();
```

Mutated replacement:

```text
;
```

### 954. `src/game/MainScene.ts:113` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.width / 2,
```

Mutated replacement:

```text
this.scale.width * 2
```

### 955. `src/game/MainScene.ts:113` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.height / 2,
```

Mutated replacement:

```text
this.scale.height * 2
```

### 956. `src/game/MainScene.ts:115` — NoCoverage / BlockStatement

Original:

```text

      if (this.mode !== "transitioning") return;
      veil.destroy(); this.mode = "active"; this.publishMode();
    };
```

Mutated replacement:

```text
{}
```

### 957. `src/game/MainScene.ts:116` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "transitioning")
```

Mutated replacement:

```text
true
```

### 958. `src/game/MainScene.ts:116` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "transitioning")
```

Mutated replacement:

```text
false
```

### 959. `src/game/MainScene.ts:116` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "transitioning")
```

Mutated replacement:

```text
this.mode === "transitioning"
```

### 960. `src/game/MainScene.ts:116` — NoCoverage / StringLiteral

Original:

```text
transitioning")
```

Mutated replacement:

```text
""
```

### 961. `src/game/MainScene.ts:117` — NoCoverage / CallExpression

Original:

```text
eil.destroy(); 
```

Mutated replacement:

```text
;
```

### 962. `src/game/MainScene.ts:117` — NoCoverage / StringLiteral

Original:

```text
active";
```

Mutated replacement:

```text
""
```

### 963. `src/game/MainScene.ts:117` — NoCoverage / CallExpression

Original:

```text
his.publishMode();
```

Mutated replacement:

```text
;
```

### 964. `src/game/MainScene.ts:119` — NoCoverage / ObjectLiteral

Original:

```text
 targets: veil, alpha: 0, duration, ease: "Sine.Out", onComplete: finishTransition })
```

Mutated replacement:

```text
{}
```

### 965. `src/game/MainScene.ts:119` — NoCoverage / StringLiteral

Original:

```text
Sine.Out",
```

Mutated replacement:

```text
""
```

### 966. `src/game/MainScene.ts:120` — NoCoverage / ArithmeticOperator

Original:

```text
uration + 40)
```

Mutated replacement:

```text
duration - 40
```

### 967. `src/game/MainScene.ts:123` — NoCoverage / BlockStatement

Original:

```text

    const event = events.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
      ?? events.find((candidate) => candidate.type === "playerDefeated")
      ?? events.find((candidate) => candidate.type === "exitLocked")
      ?? (events.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
        ? events.find((candidate) => candidate.type === "monsterDefeated")
        : events.find((candidate) => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired"))
      ?? events[0];
    if (!event) return this.feedback;
    if (event.type === "movementBlocked") return "The way is sealed.";
    if (event.type === "exitLocked") return "The exit rejects you. Find the Star-Forged Seal.";
    if (event.type === "encounterStarted") return `${event.name} bars the passage.`;
    if (event.type === "hit") return `Hit for ${event.damage}.`;
    if (event.type === "monsterAttack") return `The monster strikes for ${event.damage}.`;
    if (event.type === "monsterDefeated") return "The guardian falls. Loot waits nearby.";
    if (event.type === "playerDefeated") return "Your torch gutters. You have fallen.";
    if (event.type === "runDefeated") return "Run ended. The undercrypt claims you.";
    if (event.type === "runVictorious") return "The undercrypt yields. You are victorious.";
    if (event.type === "itemAcquired") return "A new item joins the ring.";
    if (event.type === "itemUsed") return "The tonic restores your vitality.";
    if (event.type === "equipmentChanged") return `${event.hand.toUpperCase()} hand equipped.`;
    if (event.type === "inventoryRotated") return event.selectedItemId ? "Ring selection changed." : "The ring is empty.";
    if (event.type === "commandIgnored") return event.reason === "inventoryFull" ? "The ring is full." : "Action unavailable.";
    if (event.type === "moved") return `Moved to ${event.position.x},${event.position.y}.`;
    if (event.type === "turned") return `Facing ${event.facing}.`;
    return "Action unavailable.";
  }
```

Mutated replacement:

```text
{}
```

### 968. `src/game/MainScene.ts:124` — NoCoverage / LogicalOperator

Original:

```text
vents.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
      ?? events.find((candidate) => candidate.type === "playerDefeated")
      ?? events.find((candidate) => candidate.type === "exitLocked")
      ?? (events.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
        ? events.find((candidate) => candidate.type === "monsterDefeated")
        : events.find((candidate) => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired"))
      ?? events[0];
```

Mutated replacement:

```text
(events.find(candidate => candidate.type === "runVictorious") ?? events.find(candidate => candidate.type === "runDefeated") ?? events.find(candidate => candidate.type === "playerDefeated") ?? events.find(candidate => candidate.type === "exitLocked") ?? (events.some(candidate => candidate.type === "monsterDefeated") && events.some(candidate => candidate.type === "itemAcquired") ? events.find(candidate => candidate.type === "monsterDefeated") : events.find(candidate => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired"))) && events[0]
```

### 969. `src/game/MainScene.ts:124` — NoCoverage / LogicalOperator

Original:

```text
vents.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
      ?? events.find((candidate) => candidate.type === "playerDefeated")
      ?? events.find((candidate) => candidate.type === "exitLocked")
      ?? (events.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
        ? events.find((candidate) => candidate.type === "monsterDefeated")
        : events.find((candidate) => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired"))
```

Mutated replacement:

```text
(events.find(candidate => candidate.type === "runVictorious") ?? events.find(candidate => candidate.type === "runDefeated") ?? events.find(candidate => candidate.type === "playerDefeated") ?? events.find(candidate => candidate.type === "exitLocked")) && (events.some(candidate => candidate.type === "monsterDefeated") && events.some(candidate => candidate.type === "itemAcquired") ? events.find(candidate => candidate.type === "monsterDefeated") : events.find(candidate => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired"))
```

### 970. `src/game/MainScene.ts:124` — NoCoverage / LogicalOperator

Original:

```text
vents.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
      ?? events.find((candidate) => candidate.type === "playerDefeated")
      ?? events.find((candidate) => candidate.type === "exitLocked")
```

Mutated replacement:

```text
(events.find(candidate => candidate.type === "runVictorious") ?? events.find(candidate => candidate.type === "runDefeated") ?? events.find(candidate => candidate.type === "playerDefeated")) && events.find(candidate => candidate.type === "exitLocked")
```

### 971. `src/game/MainScene.ts:124` — NoCoverage / LogicalOperator

Original:

```text
vents.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
      ?? events.find((candidate) => candidate.type === "playerDefeated")
```

Mutated replacement:

```text
(events.find(candidate => candidate.type === "runVictorious") ?? events.find(candidate => candidate.type === "runDefeated")) && events.find(candidate => candidate.type === "playerDefeated")
```

### 972. `src/game/MainScene.ts:124` — NoCoverage / LogicalOperator

Original:

```text
vents.find((candidate) => candidate.type === "runVictorious")
      ?? events.find((candidate) => candidate.type === "runDefeated")
```

Mutated replacement:

```text
events.find(candidate => candidate.type === "runVictorious") && events.find(candidate => candidate.type === "runDefeated")
```

### 973. `src/game/MainScene.ts:124` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "runVictorious")
```

Mutated replacement:

```text
() => undefined
```

### 974. `src/game/MainScene.ts:124` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "runVictorious")
```

Mutated replacement:

```text
true
```

### 975. `src/game/MainScene.ts:124` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "runVictorious")
```

Mutated replacement:

```text
false
```

### 976. `src/game/MainScene.ts:124` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "runVictorious")
```

Mutated replacement:

```text
candidate.type !== "runVictorious"
```

### 977. `src/game/MainScene.ts:124` — NoCoverage / StringLiteral

Original:

```text
runVictorious")
```

Mutated replacement:

```text
""
```

### 978. `src/game/MainScene.ts:125` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "runDefeated")
```

Mutated replacement:

```text
() => undefined
```

### 979. `src/game/MainScene.ts:125` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "runDefeated")
```

Mutated replacement:

```text
true
```

### 980. `src/game/MainScene.ts:125` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "runDefeated")
```

Mutated replacement:

```text
false
```

### 981. `src/game/MainScene.ts:125` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "runDefeated")
```

Mutated replacement:

```text
candidate.type !== "runDefeated"
```

### 982. `src/game/MainScene.ts:125` — NoCoverage / StringLiteral

Original:

```text
runDefeated")
```

Mutated replacement:

```text
""
```

### 983. `src/game/MainScene.ts:126` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "playerDefeated")
```

Mutated replacement:

```text
() => undefined
```

### 984. `src/game/MainScene.ts:126` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "playerDefeated")
```

Mutated replacement:

```text
true
```

### 985. `src/game/MainScene.ts:126` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "playerDefeated")
```

Mutated replacement:

```text
false
```

### 986. `src/game/MainScene.ts:126` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "playerDefeated")
```

Mutated replacement:

```text
candidate.type !== "playerDefeated"
```

### 987. `src/game/MainScene.ts:126` — NoCoverage / StringLiteral

Original:

```text
playerDefeated")
```

Mutated replacement:

```text
""
```

### 988. `src/game/MainScene.ts:127` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "exitLocked")
```

Mutated replacement:

```text
() => undefined
```

### 989. `src/game/MainScene.ts:127` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "exitLocked")
```

Mutated replacement:

```text
true
```

### 990. `src/game/MainScene.ts:127` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "exitLocked")
```

Mutated replacement:

```text
false
```

### 991. `src/game/MainScene.ts:127` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "exitLocked")
```

Mutated replacement:

```text
candidate.type !== "exitLocked"
```

### 992. `src/game/MainScene.ts:127` — NoCoverage / StringLiteral

Original:

```text
exitLocked")
```

Mutated replacement:

```text
""
```

### 993. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
```

Mutated replacement:

```text
true
```

### 994. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 995. `src/game/MainScene.ts:128` — NoCoverage / LogicalOperator

Original:

```text
vents.some((candidate) => candidate.type === "monsterDefeated") && events.some((candidate) => candidate.type === "itemAcquired")
```

Mutated replacement:

```text
events.some(candidate => candidate.type === "monsterDefeated") || events.some(candidate => candidate.type === "itemAcquired")
```

### 996. `src/game/MainScene.ts:128` — NoCoverage / MethodExpression

Original:

```text
vents.some((candidate) => candidate.type === "monsterDefeated") 
```

Mutated replacement:

```text
events.every(candidate => candidate.type === "monsterDefeated")
```

### 997. `src/game/MainScene.ts:128` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "monsterDefeated")
```

Mutated replacement:

```text
() => undefined
```

### 998. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
true
```

### 999. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
false
```

### 1000. `src/game/MainScene.ts:128` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
candidate.type !== "monsterDefeated"
```

### 1001. `src/game/MainScene.ts:128` — NoCoverage / StringLiteral

Original:

```text
monsterDefeated")
```

Mutated replacement:

```text
""
```

### 1002. `src/game/MainScene.ts:128` — NoCoverage / MethodExpression

Original:

```text
vents.some((candidate) => candidate.type === "itemAcquired")
```

Mutated replacement:

```text
events.every(candidate => candidate.type === "itemAcquired")
```

### 1003. `src/game/MainScene.ts:128` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "itemAcquired")
```

Mutated replacement:

```text
() => undefined
```

### 1004. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "itemAcquired")
```

Mutated replacement:

```text
true
```

### 1005. `src/game/MainScene.ts:128` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 1006. `src/game/MainScene.ts:128` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "itemAcquired")
```

Mutated replacement:

```text
candidate.type !== "itemAcquired"
```

### 1007. `src/game/MainScene.ts:128` — NoCoverage / StringLiteral

Original:

```text
itemAcquired")
```

Mutated replacement:

```text
""
```

### 1008. `src/game/MainScene.ts:129` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "monsterDefeated")
```

Mutated replacement:

```text
() => undefined
```

### 1009. `src/game/MainScene.ts:129` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
true
```

### 1010. `src/game/MainScene.ts:129` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
false
```

### 1011. `src/game/MainScene.ts:129` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "monsterDefeated")
```

Mutated replacement:

```text
candidate.type !== "monsterDefeated"
```

### 1012. `src/game/MainScene.ts:129` — NoCoverage / StringLiteral

Original:

```text
monsterDefeated")
```

Mutated replacement:

```text
""
```

### 1013. `src/game/MainScene.ts:130` — NoCoverage / ArrowFunction

Original:

```text
candidate) => candidate.type === "monsterDefeated" || candidate.type === "itemAcquired")
```

Mutated replacement:

```text
() => undefined
```

### 1014. `src/game/MainScene.ts:130` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated" || candidate.type === "itemAcquired")
```

Mutated replacement:

```text
true
```

### 1015. `src/game/MainScene.ts:130` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated" || candidate.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 1016. `src/game/MainScene.ts:130` — NoCoverage / LogicalOperator

Original:

```text
andidate.type === "monsterDefeated" || candidate.type === "itemAcquired")
```

Mutated replacement:

```text
candidate.type === "monsterDefeated" && candidate.type === "itemAcquired"
```

### 1017. `src/game/MainScene.ts:130` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "monsterDefeated" 
```

Mutated replacement:

```text
false
```

### 1018. `src/game/MainScene.ts:130` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "monsterDefeated" 
```

Mutated replacement:

```text
candidate.type !== "monsterDefeated"
```

### 1019. `src/game/MainScene.ts:130` — NoCoverage / StringLiteral

Original:

```text
monsterDefeated" 
```

Mutated replacement:

```text
""
```

### 1020. `src/game/MainScene.ts:130` — NoCoverage / ConditionalExpression

Original:

```text
andidate.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 1021. `src/game/MainScene.ts:130` — NoCoverage / EqualityOperator

Original:

```text
andidate.type === "itemAcquired")
```

Mutated replacement:

```text
candidate.type !== "itemAcquired"
```

### 1022. `src/game/MainScene.ts:130` — NoCoverage / StringLiteral

Original:

```text
itemAcquired")
```

Mutated replacement:

```text
""
```

### 1023. `src/game/MainScene.ts:132` — NoCoverage / BooleanLiteral

Original:

```text
event)
```

Mutated replacement:

```text
event
```

### 1024. `src/game/MainScene.ts:132` — NoCoverage / ConditionalExpression

Original:

```text
event)
```

Mutated replacement:

```text
true
```

### 1025. `src/game/MainScene.ts:132` — NoCoverage / ConditionalExpression

Original:

```text
event)
```

Mutated replacement:

```text
false
```

### 1026. `src/game/MainScene.ts:133` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "movementBlocked")
```

Mutated replacement:

```text
true
```

### 1027. `src/game/MainScene.ts:133` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "movementBlocked")
```

Mutated replacement:

```text
false
```

### 1028. `src/game/MainScene.ts:133` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "movementBlocked")
```

Mutated replacement:

```text
event.type !== "movementBlocked"
```

### 1029. `src/game/MainScene.ts:133` — NoCoverage / StringLiteral

Original:

```text
movementBlocked")
```

Mutated replacement:

```text
""
```

### 1030. `src/game/MainScene.ts:133` — NoCoverage / StringLiteral

Original:

```text
The way is sealed.";
```

Mutated replacement:

```text
""
```

### 1031. `src/game/MainScene.ts:134` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "exitLocked")
```

Mutated replacement:

```text
true
```

### 1032. `src/game/MainScene.ts:134` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "exitLocked")
```

Mutated replacement:

```text
false
```

### 1033. `src/game/MainScene.ts:134` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "exitLocked")
```

Mutated replacement:

```text
event.type !== "exitLocked"
```

### 1034. `src/game/MainScene.ts:134` — NoCoverage / StringLiteral

Original:

```text
exitLocked")
```

Mutated replacement:

```text
""
```

### 1035. `src/game/MainScene.ts:134` — NoCoverage / StringLiteral

Original:

```text
The exit rejects you. Find the Star-Forged Seal.";
```

Mutated replacement:

```text
""
```

### 1036. `src/game/MainScene.ts:135` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "encounterStarted")
```

Mutated replacement:

```text
true
```

### 1037. `src/game/MainScene.ts:135` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "encounterStarted")
```

Mutated replacement:

```text
false
```

### 1038. `src/game/MainScene.ts:135` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "encounterStarted")
```

Mutated replacement:

```text
event.type !== "encounterStarted"
```

### 1039. `src/game/MainScene.ts:135` — NoCoverage / StringLiteral

Original:

```text
encounterStarted")
```

Mutated replacement:

```text
""
```

### 1040. `src/game/MainScene.ts:135` — NoCoverage / StringLiteral

Original:

```text
${event.name} bars the passage.`;
```

Mutated replacement:

```text
``
```

### 1041. `src/game/MainScene.ts:136` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "hit")
```

Mutated replacement:

```text
true
```

### 1042. `src/game/MainScene.ts:136` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "hit")
```

Mutated replacement:

```text
false
```

### 1043. `src/game/MainScene.ts:136` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "hit")
```

Mutated replacement:

```text
event.type !== "hit"
```

### 1044. `src/game/MainScene.ts:136` — NoCoverage / StringLiteral

Original:

```text
hit")
```

Mutated replacement:

```text
""
```

### 1045. `src/game/MainScene.ts:136` — NoCoverage / StringLiteral

Original:

```text
Hit for ${event.damage}.`;
```

Mutated replacement:

```text
``
```

### 1046. `src/game/MainScene.ts:137` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "monsterAttack")
```

Mutated replacement:

```text
true
```

### 1047. `src/game/MainScene.ts:137` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "monsterAttack")
```

Mutated replacement:

```text
false
```

### 1048. `src/game/MainScene.ts:137` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "monsterAttack")
```

Mutated replacement:

```text
event.type !== "monsterAttack"
```

### 1049. `src/game/MainScene.ts:137` — NoCoverage / StringLiteral

Original:

```text
monsterAttack")
```

Mutated replacement:

```text
""
```

### 1050. `src/game/MainScene.ts:137` — NoCoverage / StringLiteral

Original:

```text
The monster strikes for ${event.damage}.`;
```

Mutated replacement:

```text
``
```

### 1051. `src/game/MainScene.ts:138` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "monsterDefeated")
```

Mutated replacement:

```text
true
```

### 1052. `src/game/MainScene.ts:138` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "monsterDefeated")
```

Mutated replacement:

```text
false
```

### 1053. `src/game/MainScene.ts:138` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "monsterDefeated")
```

Mutated replacement:

```text
event.type !== "monsterDefeated"
```

### 1054. `src/game/MainScene.ts:138` — NoCoverage / StringLiteral

Original:

```text
monsterDefeated")
```

Mutated replacement:

```text
""
```

### 1055. `src/game/MainScene.ts:138` — NoCoverage / StringLiteral

Original:

```text
The guardian falls. Loot waits nearby.";
```

Mutated replacement:

```text
""
```

### 1056. `src/game/MainScene.ts:139` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "playerDefeated")
```

Mutated replacement:

```text
true
```

### 1057. `src/game/MainScene.ts:139` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "playerDefeated")
```

Mutated replacement:

```text
false
```

### 1058. `src/game/MainScene.ts:139` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "playerDefeated")
```

Mutated replacement:

```text
event.type !== "playerDefeated"
```

### 1059. `src/game/MainScene.ts:139` — NoCoverage / StringLiteral

Original:

```text
playerDefeated")
```

Mutated replacement:

```text
""
```

### 1060. `src/game/MainScene.ts:139` — NoCoverage / StringLiteral

Original:

```text
Your torch gutters. You have fallen.";
```

Mutated replacement:

```text
""
```

### 1061. `src/game/MainScene.ts:140` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "runDefeated")
```

Mutated replacement:

```text
true
```

### 1062. `src/game/MainScene.ts:140` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "runDefeated")
```

Mutated replacement:

```text
false
```

### 1063. `src/game/MainScene.ts:140` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "runDefeated")
```

Mutated replacement:

```text
event.type !== "runDefeated"
```

### 1064. `src/game/MainScene.ts:140` — NoCoverage / StringLiteral

Original:

```text
runDefeated")
```

Mutated replacement:

```text
""
```

### 1065. `src/game/MainScene.ts:140` — NoCoverage / StringLiteral

Original:

```text
Run ended. The undercrypt claims you.";
```

Mutated replacement:

```text
""
```

### 1066. `src/game/MainScene.ts:141` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "runVictorious")
```

Mutated replacement:

```text
true
```

### 1067. `src/game/MainScene.ts:141` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "runVictorious")
```

Mutated replacement:

```text
false
```

### 1068. `src/game/MainScene.ts:141` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "runVictorious")
```

Mutated replacement:

```text
event.type !== "runVictorious"
```

### 1069. `src/game/MainScene.ts:141` — NoCoverage / StringLiteral

Original:

```text
runVictorious")
```

Mutated replacement:

```text
""
```

### 1070. `src/game/MainScene.ts:141` — NoCoverage / StringLiteral

Original:

```text
The undercrypt yields. You are victorious.";
```

Mutated replacement:

```text
""
```

### 1071. `src/game/MainScene.ts:142` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "itemAcquired")
```

Mutated replacement:

```text
true
```

### 1072. `src/game/MainScene.ts:142` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 1073. `src/game/MainScene.ts:142` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "itemAcquired")
```

Mutated replacement:

```text
event.type !== "itemAcquired"
```

### 1074. `src/game/MainScene.ts:142` — NoCoverage / StringLiteral

Original:

```text
itemAcquired")
```

Mutated replacement:

```text
""
```

### 1075. `src/game/MainScene.ts:142` — NoCoverage / StringLiteral

Original:

```text
A new item joins the ring.";
```

Mutated replacement:

```text
""
```

### 1076. `src/game/MainScene.ts:143` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "itemUsed")
```

Mutated replacement:

```text
true
```

### 1077. `src/game/MainScene.ts:143` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "itemUsed")
```

Mutated replacement:

```text
false
```

### 1078. `src/game/MainScene.ts:143` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "itemUsed")
```

Mutated replacement:

```text
event.type !== "itemUsed"
```

### 1079. `src/game/MainScene.ts:143` — NoCoverage / StringLiteral

Original:

```text
itemUsed")
```

Mutated replacement:

```text
""
```

### 1080. `src/game/MainScene.ts:143` — NoCoverage / StringLiteral

Original:

```text
The tonic restores your vitality.";
```

Mutated replacement:

```text
""
```

### 1081. `src/game/MainScene.ts:144` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "equipmentChanged")
```

Mutated replacement:

```text
true
```

### 1082. `src/game/MainScene.ts:144` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "equipmentChanged")
```

Mutated replacement:

```text
false
```

### 1083. `src/game/MainScene.ts:144` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "equipmentChanged")
```

Mutated replacement:

```text
event.type !== "equipmentChanged"
```

### 1084. `src/game/MainScene.ts:144` — NoCoverage / StringLiteral

Original:

```text
equipmentChanged")
```

Mutated replacement:

```text
""
```

### 1085. `src/game/MainScene.ts:144` — NoCoverage / StringLiteral

Original:

```text
${event.hand.toUpperCase()} hand equipped.`;
```

Mutated replacement:

```text
``
```

### 1086. `src/game/MainScene.ts:144` — NoCoverage / MethodExpression

Original:

```text
vent.hand.toUpperCase()}
```

Mutated replacement:

```text
event.hand.toLowerCase()
```

### 1087. `src/game/MainScene.ts:145` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "inventoryRotated")
```

Mutated replacement:

```text
true
```

### 1088. `src/game/MainScene.ts:145` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "inventoryRotated")
```

Mutated replacement:

```text
false
```

### 1089. `src/game/MainScene.ts:145` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "inventoryRotated")
```

Mutated replacement:

```text
event.type !== "inventoryRotated"
```

### 1090. `src/game/MainScene.ts:145` — NoCoverage / StringLiteral

Original:

```text
inventoryRotated")
```

Mutated replacement:

```text
""
```

### 1091. `src/game/MainScene.ts:145` — NoCoverage / StringLiteral

Original:

```text
Ring selection changed." 
```

Mutated replacement:

```text
""
```

### 1092. `src/game/MainScene.ts:145` — NoCoverage / StringLiteral

Original:

```text
The ring is empty.";
```

Mutated replacement:

```text
""
```

### 1093. `src/game/MainScene.ts:146` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "commandIgnored")
```

Mutated replacement:

```text
true
```

### 1094. `src/game/MainScene.ts:146` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "commandIgnored")
```

Mutated replacement:

```text
false
```

### 1095. `src/game/MainScene.ts:146` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "commandIgnored")
```

Mutated replacement:

```text
event.type !== "commandIgnored"
```

### 1096. `src/game/MainScene.ts:146` — NoCoverage / StringLiteral

Original:

```text
commandIgnored")
```

Mutated replacement:

```text
""
```

### 1097. `src/game/MainScene.ts:146` — NoCoverage / ConditionalExpression

Original:

```text
vent.reason === "inventoryFull" 
```

Mutated replacement:

```text
true
```

### 1098. `src/game/MainScene.ts:146` — NoCoverage / ConditionalExpression

Original:

```text
vent.reason === "inventoryFull" 
```

Mutated replacement:

```text
false
```

### 1099. `src/game/MainScene.ts:146` — NoCoverage / EqualityOperator

Original:

```text
vent.reason === "inventoryFull" 
```

Mutated replacement:

```text
event.reason !== "inventoryFull"
```

### 1100. `src/game/MainScene.ts:146` — NoCoverage / StringLiteral

Original:

```text
inventoryFull" 
```

Mutated replacement:

```text
""
```

### 1101. `src/game/MainScene.ts:146` — NoCoverage / StringLiteral

Original:

```text
The ring is full." 
```

Mutated replacement:

```text
""
```

### 1102. `src/game/MainScene.ts:146` — NoCoverage / StringLiteral

Original:

```text
Action unavailable.";
```

Mutated replacement:

```text
""
```

### 1103. `src/game/MainScene.ts:147` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "moved")
```

Mutated replacement:

```text
true
```

### 1104. `src/game/MainScene.ts:147` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "moved")
```

Mutated replacement:

```text
false
```

### 1105. `src/game/MainScene.ts:147` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "moved")
```

Mutated replacement:

```text
event.type !== "moved"
```

### 1106. `src/game/MainScene.ts:147` — NoCoverage / StringLiteral

Original:

```text
moved")
```

Mutated replacement:

```text
""
```

### 1107. `src/game/MainScene.ts:147` — NoCoverage / StringLiteral

Original:

```text
Moved to ${event.position.x},${event.position.y}.`;
```

Mutated replacement:

```text
``
```

### 1108. `src/game/MainScene.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "turned")
```

Mutated replacement:

```text
true
```

### 1109. `src/game/MainScene.ts:148` — NoCoverage / ConditionalExpression

Original:

```text
vent.type === "turned")
```

Mutated replacement:

```text
false
```

### 1110. `src/game/MainScene.ts:148` — NoCoverage / EqualityOperator

Original:

```text
vent.type === "turned")
```

Mutated replacement:

```text
event.type !== "turned"
```

### 1111. `src/game/MainScene.ts:148` — NoCoverage / StringLiteral

Original:

```text
turned")
```

Mutated replacement:

```text
""
```

### 1112. `src/game/MainScene.ts:148` — NoCoverage / StringLiteral

Original:

```text
Facing ${event.facing}.`;
```

Mutated replacement:

```text
``
```

### 1113. `src/game/MainScene.ts:149` — NoCoverage / StringLiteral

Original:

```text
Action unavailable.";
```

Mutated replacement:

```text
""
```

### 1114. `src/game/MainScene.ts:152` — NoCoverage / BlockStatement

Original:

```text
 window.dispatchEvent(new CustomEvent("tarmin-mode", { detail: this.mode })); }
```

Mutated replacement:

```text
{}
```

### 1115. `src/game/MainScene.ts:152` — NoCoverage / StringLiteral

Original:

```text
tarmin-mode",
```

Mutated replacement:

```text
""
```

### 1116. `src/game/MainScene.ts:152` — NoCoverage / ObjectLiteral

Original:

```text
 detail: this.mode })
```

Mutated replacement:

```text
{}
```

### 1117. `src/game/MainScene.ts:154` — NoCoverage / BlockStatement

Original:

```text

    window.dispatchEvent(new CustomEvent("tarmin-checkpoint", { detail: loadCheckpoint() !== null }));
  }
```

Mutated replacement:

```text
{}
```

### 1118. `src/game/MainScene.ts:155` — NoCoverage / StringLiteral

Original:

```text
tarmin-checkpoint",
```

Mutated replacement:

```text
""
```

### 1119. `src/game/MainScene.ts:155` — NoCoverage / ObjectLiteral

Original:

```text
 detail: loadCheckpoint() !== null })
```

Mutated replacement:

```text
{}
```

### 1120. `src/game/MainScene.ts:155` — NoCoverage / ConditionalExpression

Original:

```text
oadCheckpoint() !== null 
```

Mutated replacement:

```text
true
```

### 1121. `src/game/MainScene.ts:155` — NoCoverage / ConditionalExpression

Original:

```text
oadCheckpoint() !== null 
```

Mutated replacement:

```text
false
```

### 1122. `src/game/MainScene.ts:155` — NoCoverage / EqualityOperator

Original:

```text
oadCheckpoint() !== null 
```

Mutated replacement:

```text
loadCheckpoint() === null
```

### 1123. `src/game/MainScene.ts:158` — NoCoverage / StringLiteral

Original:

```text
#f4e7a1")
```

Mutated replacement:

```text
""
```

### 1124. `src/game/MainScene.ts:158` — NoCoverage / BlockStatement

Original:

```text

    this.add.text(x, y, label, { color, fontFamily: "monospace", fontSize: "12px", backgroundColor: "#090b07", padding: { x: 3, y: 2 } }).setDepth(10);
  }
```

Mutated replacement:

```text
{}
```

### 1125. `src/game/MainScene.ts:159` — NoCoverage / ObjectLiteral

Original:

```text
 color, fontFamily: "monospace", fontSize: "12px", backgroundColor: "#090b07", padding: { x: 3, y: 2 } })
```

Mutated replacement:

```text
{}
```

### 1126. `src/game/MainScene.ts:159` — NoCoverage / StringLiteral

Original:

```text
monospace",
```

Mutated replacement:

```text
""
```

### 1127. `src/game/MainScene.ts:159` — NoCoverage / StringLiteral

Original:

```text
12px",
```

Mutated replacement:

```text
""
```

### 1128. `src/game/MainScene.ts:159` — NoCoverage / StringLiteral

Original:

```text
#090b07",
```

Mutated replacement:

```text
""
```

### 1129. `src/game/MainScene.ts:159` — NoCoverage / ObjectLiteral

Original:

```text
 x: 3, y: 2 } 
```

Mutated replacement:

```text
{}
```

### 1130. `src/game/MainScene.ts:162` — NoCoverage / BlockStatement

Original:

```text

    const filters = this.cameras.main.filters?.external;
    if (!filters) return;

    const grade = filters.addColorMatrix();
    grade.colorMatrix.saturate(-0.18);
    grade.colorMatrix.contrast(0.1, true);
    filters.addVignette(0.5, 0.54, 0.72, 0.3, DUNGEON_PALETTE.backgroundVoid);
  }
```

Mutated replacement:

```text
{}
```

### 1131. `src/game/MainScene.ts:163` — NoCoverage / OptionalChaining

Original:

```text
his.cameras.main.filters?.external;
```

Mutated replacement:

```text
this.cameras.main.filters.external
```

### 1132. `src/game/MainScene.ts:164` — NoCoverage / BooleanLiteral

Original:

```text
filters)
```

Mutated replacement:

```text
filters
```

### 1133. `src/game/MainScene.ts:164` — NoCoverage / ConditionalExpression

Original:

```text
filters)
```

Mutated replacement:

```text
true
```

### 1134. `src/game/MainScene.ts:164` — NoCoverage / ConditionalExpression

Original:

```text
filters)
```

Mutated replacement:

```text
false
```

### 1135. `src/game/MainScene.ts:167` — NoCoverage / UnaryOperator

Original:

```text
0.18)
```

Mutated replacement:

```text
+0.18
```

### 1136. `src/game/MainScene.ts:168` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 1137. `src/game/MainScene.ts:169` — NoCoverage / CallExpression

Original:

```text
ilters.addVignette(0.5, 0.54, 0.72, 0.3, DUNGEON_PALETTE.backgroundVoid);
```

Mutated replacement:

```text
;
```

### 1138. `src/game/MainScene.ts:172` — NoCoverage / BlockStatement

Original:

```text

    const x = viewport.left + viewport.width * 0.5;
    const y = viewport.top + viewport.height * 0.58;
    const radius = Math.min(viewport.width, viewport.height) * 0.42;
    const bands = [
      { scale: 1, alpha: 0.018 },
      { scale: 0.78, alpha: 0.024 },
      { scale: 0.56, alpha: 0.034 },
      { scale: 0.34, alpha: 0.048 }
    ];
    for (const band of bands) {
      world.fillStyle(DUNGEON_PALETTE.torchLight, band.alpha);
      world.fillCircle(x, y, radius * band.scale);
    }
  }
```

Mutated replacement:

```text
{}
```

### 1139. `src/game/MainScene.ts:173` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width * 0.5;
```

Mutated replacement:

```text
viewport.left - viewport.width * 0.5
```

### 1140. `src/game/MainScene.ts:173` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.5;
```

Mutated replacement:

```text
viewport.width / 0.5
```

### 1141. `src/game/MainScene.ts:174` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height * 0.58;
```

Mutated replacement:

```text
viewport.top - viewport.height * 0.58
```

### 1142. `src/game/MainScene.ts:174` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.height * 0.58;
```

Mutated replacement:

```text
viewport.height / 0.58
```

### 1143. `src/game/MainScene.ts:175` — NoCoverage / ArithmeticOperator

Original:

```text
ath.min(viewport.width, viewport.height) * 0.42;
```

Mutated replacement:

```text
Math.min(viewport.width, viewport.height) / 0.42
```

### 1144. `src/game/MainScene.ts:175` — NoCoverage / MethodExpression

Original:

```text
ath.min(viewport.width, viewport.height) 
```

Mutated replacement:

```text
Math.max(viewport.width, viewport.height)
```

### 1145. `src/game/MainScene.ts:176` — NoCoverage / ArrayDeclaration

Original:

```text

      { scale: 1, alpha: 0.018 },
      { scale: 0.78, alpha: 0.024 },
      { scale: 0.56, alpha: 0.034 },
      { scale: 0.34, alpha: 0.048 }
    ];
```

Mutated replacement:

```text
[]
```

### 1146. `src/game/MainScene.ts:177` — NoCoverage / ObjectLiteral

Original:

```text
 scale: 1, alpha: 0.018 },
```

Mutated replacement:

```text
{}
```

### 1147. `src/game/MainScene.ts:178` — NoCoverage / ObjectLiteral

Original:

```text
 scale: 0.78, alpha: 0.024 },
```

Mutated replacement:

```text
{}
```

### 1148. `src/game/MainScene.ts:179` — NoCoverage / ObjectLiteral

Original:

```text
 scale: 0.56, alpha: 0.034 },
```

Mutated replacement:

```text
{}
```

### 1149. `src/game/MainScene.ts:180` — NoCoverage / ObjectLiteral

Original:

```text
 scale: 0.34, alpha: 0.048 }
```

Mutated replacement:

```text
{}
```

### 1150. `src/game/MainScene.ts:182` — NoCoverage / BlockStatement

Original:

```text

      world.fillStyle(DUNGEON_PALETTE.torchLight, band.alpha);
      world.fillCircle(x, y, radius * band.scale);
    }
```

Mutated replacement:

```text
{}
```

### 1151. `src/game/MainScene.ts:183` — NoCoverage / CallExpression

Original:

```text
orld.fillStyle(DUNGEON_PALETTE.torchLight, band.alpha);
```

Mutated replacement:

```text
;
```

### 1152. `src/game/MainScene.ts:184` — NoCoverage / ArithmeticOperator

Original:

```text
adius * band.scale)
```

Mutated replacement:

```text
radius / band.scale
```

### 1153. `src/game/MainScene.ts:188` — NoCoverage / BlockStatement

Original:

```text

    const edge = Math.max(18, Math.round(viewport.width * 0.035));
    world.fillStyle(DUNGEON_PALETTE.backgroundVoid, 0.28);
    world.fillRect(viewport.left, viewport.top, viewport.width, edge);
    world.fillRect(viewport.left, viewport.top + viewport.height - edge, viewport.width, edge);
    world.fillRect(viewport.left, viewport.top, edge, viewport.height);
    world.fillRect(viewport.left + viewport.width - edge, viewport.top, edge, viewport.height);
  }
```

Mutated replacement:

```text
{}
```

### 1154. `src/game/MainScene.ts:189` — NoCoverage / MethodExpression

Original:

```text
ath.max(18, Math.round(viewport.width * 0.035));
```

Mutated replacement:

```text
Math.min(18, Math.round(viewport.width * 0.035))
```

### 1155. `src/game/MainScene.ts:189` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.035)
```

Mutated replacement:

```text
viewport.width / 0.035
```

### 1156. `src/game/MainScene.ts:190` — NoCoverage / CallExpression

Original:

```text
orld.fillStyle(DUNGEON_PALETTE.backgroundVoid, 0.28);
```

Mutated replacement:

```text
;
```

### 1157. `src/game/MainScene.ts:191` — NoCoverage / CallExpression

Original:

```text
orld.fillRect(viewport.left, viewport.top, viewport.width, edge);
```

Mutated replacement:

```text
;
```

### 1158. `src/game/MainScene.ts:192` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height - edge,
```

Mutated replacement:

```text
viewport.top + viewport.height + edge
```

### 1159. `src/game/MainScene.ts:192` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height 
```

Mutated replacement:

```text
viewport.top - viewport.height
```

### 1160. `src/game/MainScene.ts:193` — NoCoverage / CallExpression

Original:

```text
orld.fillRect(viewport.left, viewport.top, edge, viewport.height);
```

Mutated replacement:

```text
;
```

### 1161. `src/game/MainScene.ts:194` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width - edge,
```

Mutated replacement:

```text
viewport.left + viewport.width + edge
```

### 1162. `src/game/MainScene.ts:194` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width 
```

Mutated replacement:

```text
viewport.left - viewport.width
```

### 1163. `src/game/MainScene.ts:197` — NoCoverage / BlockStatement

Original:

```text

    if (!this.perspectiveDebug) return;

    world.lineStyle(2, 0xf4e7a1, 0.95);
    for (let depth = 1; depth <= 4; depth += 1) {
      const frame = screenFrame(PORTAL_FRAMES[depth], viewport);
      world.strokeRect(frame.left, frame.top, frame.right - frame.left, frame.bottom - frame.top);
      this.addDebugLabel(`D${depth}`, frame.left + 5, frame.top + 5);
    }

    const near = screenFrame(PORTAL_FRAMES[0], viewport);
    const far = screenFrame(PORTAL_FRAMES[1], viewport);
    const first = intervalQuads(near, far);
    this.addDebugLabel("CEILING", viewport.left + viewport.width * 0.38, viewport.top + viewport.height * 0.1);
    this.addDebugLabel("FLOOR", viewport.left + viewport.width * 0.42, viewport.top + viewport.height * 0.86);
    this.addDebugLabel("LEFT WALL", viewport.left + viewport.width * 0.04, viewport.top + viewport.height * 0.45);
    this.addDebugLabel("RIGHT WALL", viewport.left + viewport.width * 0.83, viewport.top + viewport.height * 0.45);
    world.lineStyle(1, 0x9ed4d8, 0.9);
    [first.leftWall, first.rightWall, first.ceiling, first.floor].forEach((quad) => world.strokePoints(quad.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true));

    const terminatingWall = cells.find((cell) => cell.blocked);
    if (terminatingWall) {
      const frame = screenFrame(PORTAL_FRAMES[terminatingWall.distance], viewport);
      this.addDebugLabel("FRONT WALL", frame.left, frame.bottom + 6, "#ffb38a");
    } else {
      const frame = screenFrame(PORTAL_FRAMES[cells.length], viewport);
      this.addDebugLabel("OPENING", frame.left, frame.bottom + 6, "#9ed4d8");
    }
  }
```

Mutated replacement:

```text
{}
```

### 1164. `src/game/MainScene.ts:198` — NoCoverage / BooleanLiteral

Original:

```text
this.perspectiveDebug)
```

Mutated replacement:

```text
this.perspectiveDebug
```

### 1165. `src/game/MainScene.ts:198` — NoCoverage / ConditionalExpression

Original:

```text
this.perspectiveDebug)
```

Mutated replacement:

```text
true
```

### 1166. `src/game/MainScene.ts:198` — NoCoverage / ConditionalExpression

Original:

```text
this.perspectiveDebug)
```

Mutated replacement:

```text
false
```

### 1167. `src/game/MainScene.ts:200` — NoCoverage / CallExpression

Original:

```text
orld.lineStyle(2, 0xf4e7a1, 0.95);
```

Mutated replacement:

```text
;
```

### 1168. `src/game/MainScene.ts:201` — NoCoverage / ConditionalExpression

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
false
```

### 1169. `src/game/MainScene.ts:201` — NoCoverage / EqualityOperator

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
depth < 4
```

### 1170. `src/game/MainScene.ts:201` — NoCoverage / EqualityOperator

Original:

```text
epth <= 4;
```

Mutated replacement:

```text
depth > 4
```

### 1171. `src/game/MainScene.ts:201` — NoCoverage / AssignmentOperator

Original:

```text
epth += 1)
```

Mutated replacement:

```text
depth -= 1
```

### 1172. `src/game/MainScene.ts:201` — NoCoverage / BlockStatement

Original:

```text

      const frame = screenFrame(PORTAL_FRAMES[depth], viewport);
      world.strokeRect(frame.left, frame.top, frame.right - frame.left, frame.bottom - frame.top);
      this.addDebugLabel(`D${depth}`, frame.left + 5, frame.top + 5);
    }
```

Mutated replacement:

```text
{}
```

### 1173. `src/game/MainScene.ts:203` — NoCoverage / ArithmeticOperator

Original:

```text
rame.right - frame.left,
```

Mutated replacement:

```text
frame.right + frame.left
```

### 1174. `src/game/MainScene.ts:203` — NoCoverage / ArithmeticOperator

Original:

```text
rame.bottom - frame.top)
```

Mutated replacement:

```text
frame.bottom + frame.top
```

### 1175. `src/game/MainScene.ts:204` — NoCoverage / StringLiteral

Original:

```text
D${depth}`,
```

Mutated replacement:

```text
``
```

### 1176. `src/game/MainScene.ts:204` — NoCoverage / ArithmeticOperator

Original:

```text
rame.left + 5,
```

Mutated replacement:

```text
frame.left - 5
```

### 1177. `src/game/MainScene.ts:204` — NoCoverage / ArithmeticOperator

Original:

```text
rame.top + 5)
```

Mutated replacement:

```text
frame.top - 5
```

### 1178. `src/game/MainScene.ts:210` — NoCoverage / StringLiteral

Original:

```text
CEILING",
```

Mutated replacement:

```text
""
```

### 1179. `src/game/MainScene.ts:210` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width * 0.38,
```

Mutated replacement:

```text
viewport.left - viewport.width * 0.38
```

### 1180. `src/game/MainScene.ts:210` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.38,
```

Mutated replacement:

```text
viewport.width / 0.38
```

### 1181. `src/game/MainScene.ts:210` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height * 0.1)
```

Mutated replacement:

```text
viewport.top - viewport.height * 0.1
```

### 1182. `src/game/MainScene.ts:210` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.height * 0.1)
```

Mutated replacement:

```text
viewport.height / 0.1
```

### 1183. `src/game/MainScene.ts:211` — NoCoverage / StringLiteral

Original:

```text
FLOOR",
```

Mutated replacement:

```text
""
```

### 1184. `src/game/MainScene.ts:211` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width * 0.42,
```

Mutated replacement:

```text
viewport.left - viewport.width * 0.42
```

### 1185. `src/game/MainScene.ts:211` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.42,
```

Mutated replacement:

```text
viewport.width / 0.42
```

### 1186. `src/game/MainScene.ts:211` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height * 0.86)
```

Mutated replacement:

```text
viewport.top - viewport.height * 0.86
```

### 1187. `src/game/MainScene.ts:211` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.height * 0.86)
```

Mutated replacement:

```text
viewport.height / 0.86
```

### 1188. `src/game/MainScene.ts:212` — NoCoverage / StringLiteral

Original:

```text
LEFT WALL",
```

Mutated replacement:

```text
""
```

### 1189. `src/game/MainScene.ts:212` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width * 0.04,
```

Mutated replacement:

```text
viewport.left - viewport.width * 0.04
```

### 1190. `src/game/MainScene.ts:212` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.04,
```

Mutated replacement:

```text
viewport.width / 0.04
```

### 1191. `src/game/MainScene.ts:212` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height * 0.45)
```

Mutated replacement:

```text
viewport.top - viewport.height * 0.45
```

### 1192. `src/game/MainScene.ts:212` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.height * 0.45)
```

Mutated replacement:

```text
viewport.height / 0.45
```

### 1193. `src/game/MainScene.ts:213` — NoCoverage / StringLiteral

Original:

```text
RIGHT WALL",
```

Mutated replacement:

```text
""
```

### 1194. `src/game/MainScene.ts:213` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + viewport.width * 0.83,
```

Mutated replacement:

```text
viewport.left - viewport.width * 0.83
```

### 1195. `src/game/MainScene.ts:213` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.width * 0.83,
```

Mutated replacement:

```text
viewport.width / 0.83
```

### 1196. `src/game/MainScene.ts:213` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height * 0.45)
```

Mutated replacement:

```text
viewport.top - viewport.height * 0.45
```

### 1197. `src/game/MainScene.ts:213` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.height * 0.45)
```

Mutated replacement:

```text
viewport.height / 0.45
```

### 1198. `src/game/MainScene.ts:214` — NoCoverage / CallExpression

Original:

```text
orld.lineStyle(1, 0x9ed4d8, 0.9);
```

Mutated replacement:

```text
;
```

### 1199. `src/game/MainScene.ts:215` — NoCoverage / ArrayDeclaration

Original:

```text
first.leftWall, first.rightWall, first.ceiling, first.floor].
```

Mutated replacement:

```text
[]
```

### 1200. `src/game/MainScene.ts:215` — NoCoverage / ArrowFunction

Original:

```text
quad) => world.strokePoints(quad.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true))
```

Mutated replacement:

```text
() => undefined
```

### 1201. `src/game/MainScene.ts:215` — NoCoverage / ArrowFunction

Original:

```text
{ x, y }) => new Phaser.Math.Vector2(x, y))
```

Mutated replacement:

```text
() => undefined
```

### 1202. `src/game/MainScene.ts:215` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 1203. `src/game/MainScene.ts:217` — NoCoverage / ArrowFunction

Original:

```text
cell) => cell.blocked)
```

Mutated replacement:

```text
() => undefined
```

### 1204. `src/game/MainScene.ts:218` — NoCoverage / ConditionalExpression

Original:

```text
erminatingWall)
```

Mutated replacement:

```text
true
```

### 1205. `src/game/MainScene.ts:218` — NoCoverage / ConditionalExpression

Original:

```text
erminatingWall)
```

Mutated replacement:

```text
false
```

### 1206. `src/game/MainScene.ts:218` — NoCoverage / BlockStatement

Original:

```text

      const frame = screenFrame(PORTAL_FRAMES[terminatingWall.distance], viewport);
      this.addDebugLabel("FRONT WALL", frame.left, frame.bottom + 6, "#ffb38a");
    } 
```

Mutated replacement:

```text
{}
```

### 1207. `src/game/MainScene.ts:220` — NoCoverage / StringLiteral

Original:

```text
FRONT WALL",
```

Mutated replacement:

```text
""
```

### 1208. `src/game/MainScene.ts:220` — NoCoverage / ArithmeticOperator

Original:

```text
rame.bottom + 6,
```

Mutated replacement:

```text
frame.bottom - 6
```

### 1209. `src/game/MainScene.ts:220` — NoCoverage / StringLiteral

Original:

```text
#ffb38a")
```

Mutated replacement:

```text
""
```

### 1210. `src/game/MainScene.ts:221` — NoCoverage / BlockStatement

Original:

```text

      const frame = screenFrame(PORTAL_FRAMES[cells.length], viewport);
      this.addDebugLabel("OPENING", frame.left, frame.bottom + 6, "#9ed4d8");
    }
```

Mutated replacement:

```text
{}
```

### 1211. `src/game/MainScene.ts:223` — NoCoverage / StringLiteral

Original:

```text
OPENING",
```

Mutated replacement:

```text
""
```

### 1212. `src/game/MainScene.ts:223` — NoCoverage / ArithmeticOperator

Original:

```text
rame.bottom + 6,
```

Mutated replacement:

```text
frame.bottom - 6
```

### 1213. `src/game/MainScene.ts:223` — NoCoverage / StringLiteral

Original:

```text
#9ed4d8")
```

Mutated replacement:

```text
""
```

### 1214. `src/game/MainScene.ts:227` — NoCoverage / BlockStatement

Original:

```text

    this.entitySprites.clear();
    this.flameSprites.clear();
    this.children.removeAll(true);
    const { width, height } = this.scale;
    const viewport = portalViewport(width, height);
    const scene = projectDungeon(this.state);
    const primitives = scene.primitives;
    const encounterDefinition = this.state.encounter ? monsterById(this.state.encounter.definitionId) : undefined;
    const entities = projectEntities(this.state, this.state.encounter && encounterDefinition ? [{ id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, presentationId: encounterDefinition.presentationId, kind: "monster", position: this.state.encounter.position }] : []);
    Object.defineProperty(window, "__TARMIN_RENDERER__", {
      configurable: true,
      get: () => Object.freeze({
        position: this.state.player.position,
        facing: this.state.player.facing,
        visibleDepth: Math.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
        features: scene.features.map((feature) => ({ kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell })),
        primitiveTypes: primitives.map((primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`),
        transition: this.mode === "transitioning",
        mode: this.mode,
        runStatus: this.state.runStatus,
        seed: this.state.seed,
        reducedMotion: this.reducedMotion,
        transitionDuration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS,
        turn: this.state.turn,
        lastFeedback: this.feedback,
        encounter: this.state.encounter ? { id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } : null,
        playerHealth: this.state.playerHealth,
        leftHand: this.state.leftHand,
        rightHand: this.state.rightHand,
        ring: this.state.ring,
        selectedRingIndex: this.state.selectedRingIndex,
        loot: this.state.loot,
        objective: this.state.objective,
        entities: entities.map((entity) => ({ id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel })),
        firstPerson: resolveFirstPersonPresentation(this.state),
        atmosphere: { torchLight: true, torchSources: scene.features.filter((feature) => feature.kind === "torch-sconce").length, fogTreatment: true, colorGrade: true, vignette: true, reducedMotionIndependent: true }
      })
    });

    for (const primitive of primitives) {
      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })) as unknown as PortalQuad;
      const isOpening = primitive.kind === "passage" || primitive.kind === "open-door";
      const mesh = this.add.mesh2d(0, 0, "dungeon-surfaces", meshVertices(points, primitive.material), [...QUAD_INDICES]) as Phaser.GameObjects.Mesh2D & { setTint(color: number): Phaser.GameObjects.Mesh2D };
      mesh.setTint(shadeColor(0xffffff, primitive.lightLevel));
      mesh.setRenderAsTriangles(true);
      if (primitive.geometry.surface === "front" && isOpening) mesh.setTint(shadeColor(0xffffff, 0.08));
    }

    this.renderFeatures(scene.features, viewport, this.reducedMotion ? 0 : Math.floor(this.presentationTimeMs / 180) % 4);

    const world = this.add.graphics();
    for (const primitive of primitives) {
      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      if (primitive.geometry.surface === "front" || primitive.kind === "closed-door") { world.lineStyle(primitive.kind === "closed-door" ? 4 : 2, primitive.kind === "closed-door" ? DUNGEON_PALETTE.door : DUNGEON_PALETTE.boundary, 1); world.strokePoints(points.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true); }
    }

    this.renderTorchLight(world, viewport);
    this.renderEntities(entities, viewport, billboardFrameAt(this.presentationTimeMs));
    this.renderFog(world, viewport);
    this.renderFirstPersonHands(resolveFirstPersonPresentation(this.state));

    const debugDepths = [...new Set(primitives.map((primitive) => primitive.geometry.depth))];
    this.drawPerspectiveDebug(world, viewport, debugDepths.map((distance) => ({ distance, blocked: primitives.some((primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front") })));
    if (this.perspectiveDebug) this.addDebugLabel(`POS ${this.state.player.position.x},${this.state.player.position.y}  FACING ${this.state.player.facing.toUpperCase()}  PRIMITIVES ${primitives.length}`, viewport.left + 8, viewport.top + viewport.height - 24);
    world.lineStyle(2, DUNGEON_PALETTE.boundary, 0.9);
    world.strokeRect(viewport.left, viewport.top, viewport.width, viewport.height);
    window.dispatchEvent(new CustomEvent("tarmin-state", { detail: { floor: this.state.floor, turn: this.state.turn, health: this.state.playerHealth, maxHealth: this.state.playerMaxHealth, seed: this.state.seed, runStatus: this.state.runStatus, facing: this.state.player.facing, position: this.state.player.position, feedback: this.feedback, leftHand: this.itemName(this.state.leftHand), rightHand: this.itemName(this.state.rightHand), leftDetail: this.itemDetail(this.state.leftHand), rightDetail: this.itemDetail(this.state.rightHand), ring: this.state.ring.map((id) => this.itemName(id) ?? "UNKNOWN"), selectedRingIndex: this.state.selectedRingIndex, objective: { acquired: this.state.objective.acquired, complete: this.state.objective.complete, exit: this.state.objective.exit }, encounter: this.state.encounter ? { name: this.state.encounter.name, health: this.state.encounter.health, maxHealth: this.state.encounter.maxHealth } : null } }));
  }
```

Mutated replacement:

```text
{}
```

### 1215. `src/game/MainScene.ts:228` — NoCoverage / CallExpression

Original:

```text
his.entitySprites.clear();
```

Mutated replacement:

```text
;
```

### 1216. `src/game/MainScene.ts:229` — NoCoverage / CallExpression

Original:

```text
his.flameSprites.clear();
```

Mutated replacement:

```text
;
```

### 1217. `src/game/MainScene.ts:230` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 1218. `src/game/MainScene.ts:236` — NoCoverage / ConditionalExpression

Original:

```text
his.state.encounter && encounterDefinition 
```

Mutated replacement:

```text
true
```

### 1219. `src/game/MainScene.ts:236` — NoCoverage / ConditionalExpression

Original:

```text
his.state.encounter && encounterDefinition 
```

Mutated replacement:

```text
false
```

### 1220. `src/game/MainScene.ts:236` — NoCoverage / LogicalOperator

Original:

```text
his.state.encounter && encounterDefinition 
```

Mutated replacement:

```text
this.state.encounter || encounterDefinition
```

### 1221. `src/game/MainScene.ts:236` — NoCoverage / ArrayDeclaration

Original:

```text
{ id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, presentationId: encounterDefinition.presentationId, kind: "monster", position: this.state.encounter.position }] 
```

Mutated replacement:

```text
[]
```

### 1222. `src/game/MainScene.ts:236` — NoCoverage / ObjectLiteral

Original:

```text
 id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, presentationId: encounterDefinition.presentationId, kind: "monster", position: this.state.encounter.position }]
```

Mutated replacement:

```text
{}
```

### 1223. `src/game/MainScene.ts:236` — NoCoverage / StringLiteral

Original:

```text
monster",
```

Mutated replacement:

```text
""
```

### 1224. `src/game/MainScene.ts:236` — NoCoverage / ArrayDeclaration

Original:

```text
])
```

Mutated replacement:

```text
["Stryker was here"]
```

### 1225. `src/game/MainScene.ts:237` — NoCoverage / StringLiteral

Original:

```text
__TARMIN_RENDERER__",
```

Mutated replacement:

```text
""
```

### 1226. `src/game/MainScene.ts:237` — NoCoverage / ObjectLiteral

Original:

```text

      configurable: true,
      get: () => Object.freeze({
        position: this.state.player.position,
        facing: this.state.player.facing,
        visibleDepth: Math.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
        features: scene.features.map((feature) => ({ kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell })),
        primitiveTypes: primitives.map((primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`),
        transition: this.mode === "transitioning",
        mode: this.mode,
        runStatus: this.state.runStatus,
        seed: this.state.seed,
        reducedMotion: this.reducedMotion,
        transitionDuration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS,
        turn: this.state.turn,
        lastFeedback: this.feedback,
        encounter: this.state.encounter ? { id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } : null,
        playerHealth: this.state.playerHealth,
        leftHand: this.state.leftHand,
        rightHand: this.state.rightHand,
        ring: this.state.ring,
        selectedRingIndex: this.state.selectedRingIndex,
        loot: this.state.loot,
        objective: this.state.objective,
        entities: entities.map((entity) => ({ id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel })),
        firstPerson: resolveFirstPersonPresentation(this.state),
        atmosphere: { torchLight: true, torchSources: scene.features.filter((feature) => feature.kind === "torch-sconce").length, fogTreatment: true, colorGrade: true, vignette: true, reducedMotionIndependent: true }
      })
    })
```

Mutated replacement:

```text
{}
```

### 1227. `src/game/MainScene.ts:238` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1228. `src/game/MainScene.ts:239` — NoCoverage / ArrowFunction

Original:

```text
) => Object.freeze({
        position: this.state.player.position,
        facing: this.state.player.facing,
        visibleDepth: Math.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
        features: scene.features.map((feature) => ({ kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell })),
        primitiveTypes: primitives.map((primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`),
        transition: this.mode === "transitioning",
        mode: this.mode,
        runStatus: this.state.runStatus,
        seed: this.state.seed,
        reducedMotion: this.reducedMotion,
        transitionDuration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS,
        turn: this.state.turn,
        lastFeedback: this.feedback,
        encounter: this.state.encounter ? { id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } : null,
        playerHealth: this.state.playerHealth,
        leftHand: this.state.leftHand,
        rightHand: this.state.rightHand,
        ring: this.state.ring,
        selectedRingIndex: this.state.selectedRingIndex,
        loot: this.state.loot,
        objective: this.state.objective,
        entities: entities.map((entity) => ({ id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel })),
        firstPerson: resolveFirstPersonPresentation(this.state),
        atmosphere: { torchLight: true, torchSources: scene.features.filter((feature) => feature.kind === "torch-sconce").length, fogTreatment: true, colorGrade: true, vignette: true, reducedMotionIndependent: true }
      })
```

Mutated replacement:

```text
() => undefined
```

### 1229. `src/game/MainScene.ts:239` — NoCoverage / ObjectLiteral

Original:

```text

        position: this.state.player.position,
        facing: this.state.player.facing,
        visibleDepth: Math.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
        features: scene.features.map((feature) => ({ kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell })),
        primitiveTypes: primitives.map((primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`),
        transition: this.mode === "transitioning",
        mode: this.mode,
        runStatus: this.state.runStatus,
        seed: this.state.seed,
        reducedMotion: this.reducedMotion,
        transitionDuration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS,
        turn: this.state.turn,
        lastFeedback: this.feedback,
        encounter: this.state.encounter ? { id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } : null,
        playerHealth: this.state.playerHealth,
        leftHand: this.state.leftHand,
        rightHand: this.state.rightHand,
        ring: this.state.ring,
        selectedRingIndex: this.state.selectedRingIndex,
        loot: this.state.loot,
        objective: this.state.objective,
        entities: entities.map((entity) => ({ id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel })),
        firstPerson: resolveFirstPersonPresentation(this.state),
        atmosphere: { torchLight: true, torchSources: scene.features.filter((feature) => feature.kind === "torch-sconce").length, fogTreatment: true, colorGrade: true, vignette: true, reducedMotionIndependent: true }
      })
```

Mutated replacement:

```text
{}
```

### 1230. `src/game/MainScene.ts:242` — NoCoverage / MethodExpression

Original:

```text
ath.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
```

Mutated replacement:

```text
Math.min(...primitives.map(primitive => primitive.geometry.depth), 0)
```

### 1231. `src/game/MainScene.ts:242` — NoCoverage / ArrowFunction

Original:

```text
primitive) => primitive.geometry.depth)
```

Mutated replacement:

```text
() => undefined
```

### 1232. `src/game/MainScene.ts:243` — NoCoverage / ArrowFunction

Original:

```text
feature) => ({ kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell }))
```

Mutated replacement:

```text
() => undefined
```

### 1233. `src/game/MainScene.ts:243` — NoCoverage / ObjectLiteral

Original:

```text
 kind: feature.kind, depth: feature.depth, surface: feature.surface, cell: feature.cell })
```

Mutated replacement:

```text
{}
```

### 1234. `src/game/MainScene.ts:244` — NoCoverage / ArrowFunction

Original:

```text
primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`)
```

Mutated replacement:

```text
() => undefined
```

### 1235. `src/game/MainScene.ts:244` — NoCoverage / StringLiteral

Original:

```text
${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`)
```

Mutated replacement:

```text
``
```

### 1236. `src/game/MainScene.ts:245` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "transitioning",
```

Mutated replacement:

```text
true
```

### 1237. `src/game/MainScene.ts:245` — NoCoverage / ConditionalExpression

Original:

```text
his.mode === "transitioning",
```

Mutated replacement:

```text
false
```

### 1238. `src/game/MainScene.ts:245` — NoCoverage / EqualityOperator

Original:

```text
his.mode === "transitioning",
```

Mutated replacement:

```text
this.mode !== "transitioning"
```

### 1239. `src/game/MainScene.ts:245` — NoCoverage / StringLiteral

Original:

```text
transitioning",
```

Mutated replacement:

```text
""
```

### 1240. `src/game/MainScene.ts:253` — NoCoverage / ObjectLiteral

Original:

```text
 id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } 
```

Mutated replacement:

```text
{}
```

### 1241. `src/game/MainScene.ts:261` — NoCoverage / ArrowFunction

Original:

```text
entity) => ({ id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel }))
```

Mutated replacement:

```text
() => undefined
```

### 1242. `src/game/MainScene.ts:261` — NoCoverage / ObjectLiteral

Original:

```text
 id: entity.id, definitionId: entity.definitionId, depth: entity.depth, lightLevel: entity.lightLevel })
```

Mutated replacement:

```text
{}
```

### 1243. `src/game/MainScene.ts:263` — NoCoverage / ObjectLiteral

Original:

```text
 torchLight: true, torchSources: scene.features.filter((feature) => feature.kind === "torch-sconce").length, fogTreatment: true, colorGrade: true, vignette: true, reducedMotionIndependent: true }
```

Mutated replacement:

```text
{}
```

### 1244. `src/game/MainScene.ts:263` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1245. `src/game/MainScene.ts:263` — NoCoverage / MethodExpression

Original:

```text
cene.features.filter((feature) => feature.kind === "torch-sconce").
```

Mutated replacement:

```text
scene.features
```

### 1246. `src/game/MainScene.ts:263` — NoCoverage / ArrowFunction

Original:

```text
feature) => feature.kind === "torch-sconce")
```

Mutated replacement:

```text
() => undefined
```

### 1247. `src/game/MainScene.ts:263` — NoCoverage / ConditionalExpression

Original:

```text
eature.kind === "torch-sconce")
```

Mutated replacement:

```text
true
```

### 1248. `src/game/MainScene.ts:263` — NoCoverage / ConditionalExpression

Original:

```text
eature.kind === "torch-sconce")
```

Mutated replacement:

```text
false
```

### 1249. `src/game/MainScene.ts:263` — NoCoverage / EqualityOperator

Original:

```text
eature.kind === "torch-sconce")
```

Mutated replacement:

```text
feature.kind !== "torch-sconce"
```

### 1250. `src/game/MainScene.ts:263` — NoCoverage / StringLiteral

Original:

```text
torch-sconce")
```

Mutated replacement:

```text
""
```

### 1251. `src/game/MainScene.ts:263` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1252. `src/game/MainScene.ts:263` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1253. `src/game/MainScene.ts:263` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1254. `src/game/MainScene.ts:263` — NoCoverage / BooleanLiteral

Original:

```text
rue 
```

Mutated replacement:

```text
false
```

### 1255. `src/game/MainScene.ts:267` — NoCoverage / BlockStatement

Original:

```text

      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })) as unknown as PortalQuad;
      const isOpening = primitive.kind === "passage" || primitive.kind === "open-door";
      const mesh = this.add.mesh2d(0, 0, "dungeon-surfaces", meshVertices(points, primitive.material), [...QUAD_INDICES]) as Phaser.GameObjects.Mesh2D & { setTint(color: number): Phaser.GameObjects.Mesh2D };
      mesh.setTint(shadeColor(0xffffff, primitive.lightLevel));
      mesh.setRenderAsTriangles(true);
      if (primitive.geometry.surface === "front" && isOpening) mesh.setTint(shadeColor(0xffffff, 0.08));
    }
```

Mutated replacement:

```text
{}
```

### 1256. `src/game/MainScene.ts:269` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "passage" || primitive.kind === "open-door";
```

Mutated replacement:

```text
true
```

### 1257. `src/game/MainScene.ts:269` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "passage" || primitive.kind === "open-door";
```

Mutated replacement:

```text
false
```

### 1258. `src/game/MainScene.ts:269` — NoCoverage / LogicalOperator

Original:

```text
rimitive.kind === "passage" || primitive.kind === "open-door";
```

Mutated replacement:

```text
primitive.kind === "passage" && primitive.kind === "open-door"
```

### 1259. `src/game/MainScene.ts:269` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "passage" 
```

Mutated replacement:

```text
false
```

### 1260. `src/game/MainScene.ts:269` — NoCoverage / EqualityOperator

Original:

```text
rimitive.kind === "passage" 
```

Mutated replacement:

```text
primitive.kind !== "passage"
```

### 1261. `src/game/MainScene.ts:269` — NoCoverage / StringLiteral

Original:

```text
passage" 
```

Mutated replacement:

```text
""
```

### 1262. `src/game/MainScene.ts:269` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "open-door";
```

Mutated replacement:

```text
false
```

### 1263. `src/game/MainScene.ts:269` — NoCoverage / EqualityOperator

Original:

```text
rimitive.kind === "open-door";
```

Mutated replacement:

```text
primitive.kind !== "open-door"
```

### 1264. `src/game/MainScene.ts:269` — NoCoverage / StringLiteral

Original:

```text
open-door";
```

Mutated replacement:

```text
""
```

### 1265. `src/game/MainScene.ts:271` — NoCoverage / CallExpression

Original:

```text
esh.setTint(shadeColor(0xffffff, primitive.lightLevel));
```

Mutated replacement:

```text
;
```

### 1266. `src/game/MainScene.ts:272` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 1267. `src/game/MainScene.ts:273` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" && isOpening)
```

Mutated replacement:

```text
true
```

### 1268. `src/game/MainScene.ts:273` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" && isOpening)
```

Mutated replacement:

```text
false
```

### 1269. `src/game/MainScene.ts:273` — NoCoverage / LogicalOperator

Original:

```text
rimitive.geometry.surface === "front" && isOpening)
```

Mutated replacement:

```text
primitive.geometry.surface === "front" || isOpening
```

### 1270. `src/game/MainScene.ts:273` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" 
```

Mutated replacement:

```text
true
```

### 1271. `src/game/MainScene.ts:273` — NoCoverage / EqualityOperator

Original:

```text
rimitive.geometry.surface === "front" 
```

Mutated replacement:

```text
primitive.geometry.surface !== "front"
```

### 1272. `src/game/MainScene.ts:273` — NoCoverage / StringLiteral

Original:

```text
front" 
```

Mutated replacement:

```text
""
```

### 1273. `src/game/MainScene.ts:273` — NoCoverage / CallExpression

Original:

```text
esh.setTint(shadeColor(0xffffff, 0.08));
```

Mutated replacement:

```text
;
```

### 1274. `src/game/MainScene.ts:276` — NoCoverage / ArithmeticOperator

Original:

```text
ath.floor(this.presentationTimeMs / 180) % 4)
```

Mutated replacement:

```text
Math.floor(this.presentationTimeMs / 180) * 4
```

### 1275. `src/game/MainScene.ts:276` — NoCoverage / ArithmeticOperator

Original:

```text
his.presentationTimeMs / 180)
```

Mutated replacement:

```text
this.presentationTimeMs * 180
```

### 1276. `src/game/MainScene.ts:279` — NoCoverage / BlockStatement

Original:

```text

      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      if (primitive.geometry.surface === "front" || primitive.kind === "closed-door") { world.lineStyle(primitive.kind === "closed-door" ? 4 : 2, primitive.kind === "closed-door" ? DUNGEON_PALETTE.door : DUNGEON_PALETTE.boundary, 1); world.strokePoints(points.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true); }
    }
```

Mutated replacement:

```text
{}
```

### 1277. `src/game/MainScene.ts:280` — NoCoverage / ArrowFunction

Original:

```text
point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }))
```

Mutated replacement:

```text
() => undefined
```

### 1278. `src/game/MainScene.ts:280` — NoCoverage / ObjectLiteral

Original:

```text
 x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })
```

Mutated replacement:

```text
{}
```

### 1279. `src/game/MainScene.ts:280` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + point.x * viewport.width,
```

Mutated replacement:

```text
viewport.left - point.x * viewport.width
```

### 1280. `src/game/MainScene.ts:280` — NoCoverage / ArithmeticOperator

Original:

```text
oint.x * viewport.width,
```

Mutated replacement:

```text
point.x / viewport.width
```

### 1281. `src/game/MainScene.ts:280` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + point.y * viewport.height 
```

Mutated replacement:

```text
viewport.top - point.y * viewport.height
```

### 1282. `src/game/MainScene.ts:280` — NoCoverage / ArithmeticOperator

Original:

```text
oint.y * viewport.height 
```

Mutated replacement:

```text
point.y / viewport.height
```

### 1283. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" || primitive.kind === "closed-door")
```

Mutated replacement:

```text
true
```

### 1284. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" || primitive.kind === "closed-door")
```

Mutated replacement:

```text
false
```

### 1285. `src/game/MainScene.ts:281` — NoCoverage / LogicalOperator

Original:

```text
rimitive.geometry.surface === "front" || primitive.kind === "closed-door")
```

Mutated replacement:

```text
primitive.geometry.surface === "front" && primitive.kind === "closed-door"
```

### 1286. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front" 
```

Mutated replacement:

```text
false
```

### 1287. `src/game/MainScene.ts:281` — NoCoverage / EqualityOperator

Original:

```text
rimitive.geometry.surface === "front" 
```

Mutated replacement:

```text
primitive.geometry.surface !== "front"
```

### 1288. `src/game/MainScene.ts:281` — NoCoverage / StringLiteral

Original:

```text
front" 
```

Mutated replacement:

```text
""
```

### 1289. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "closed-door")
```

Mutated replacement:

```text
false
```

### 1290. `src/game/MainScene.ts:281` — NoCoverage / EqualityOperator

Original:

```text
rimitive.kind === "closed-door")
```

Mutated replacement:

```text
primitive.kind !== "closed-door"
```

### 1291. `src/game/MainScene.ts:281` — NoCoverage / StringLiteral

Original:

```text
closed-door")
```

Mutated replacement:

```text
""
```

### 1292. `src/game/MainScene.ts:281` — NoCoverage / BlockStatement

Original:

```text
 world.lineStyle(primitive.kind === "closed-door" ? 4 : 2, primitive.kind === "closed-door" ? DUNGEON_PALETTE.door : DUNGEON_PALETTE.boundary, 1); world.strokePoints(points.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true); }
```

Mutated replacement:

```text
{}
```

### 1293. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
true
```

### 1294. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
false
```

### 1295. `src/game/MainScene.ts:281` — NoCoverage / EqualityOperator

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
primitive.kind !== "closed-door"
```

### 1296. `src/game/MainScene.ts:281` — NoCoverage / StringLiteral

Original:

```text
closed-door" 
```

Mutated replacement:

```text
""
```

### 1297. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
true
```

### 1298. `src/game/MainScene.ts:281` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
false
```

### 1299. `src/game/MainScene.ts:281` — NoCoverage / EqualityOperator

Original:

```text
rimitive.kind === "closed-door" 
```

Mutated replacement:

```text
primitive.kind !== "closed-door"
```

### 1300. `src/game/MainScene.ts:281` — NoCoverage / StringLiteral

Original:

```text
closed-door" 
```

Mutated replacement:

```text
""
```

### 1301. `src/game/MainScene.ts:281` — NoCoverage / ArrowFunction

Original:

```text
{ x, y }) => new Phaser.Math.Vector2(x, y))
```

Mutated replacement:

```text
() => undefined
```

### 1302. `src/game/MainScene.ts:281` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 1303. `src/game/MainScene.ts:284` — NoCoverage / CallExpression

Original:

```text
his.renderTorchLight(world, viewport);
```

Mutated replacement:

```text
;
```

### 1304. `src/game/MainScene.ts:285` — NoCoverage / CallExpression

Original:

```text
his.renderEntities(entities, viewport, billboardFrameAt(this.presentationTimeMs));
```

Mutated replacement:

```text
;
```

### 1305. `src/game/MainScene.ts:286` — NoCoverage / CallExpression

Original:

```text
his.renderFog(world, viewport);
```

Mutated replacement:

```text
;
```

### 1306. `src/game/MainScene.ts:287` — NoCoverage / CallExpression

Original:

```text
his.renderFirstPersonHands(resolveFirstPersonPresentation(this.state));
```

Mutated replacement:

```text
;
```

### 1307. `src/game/MainScene.ts:289` — NoCoverage / ArrayDeclaration

Original:

```text
...new Set(primitives.map((primitive) => primitive.geometry.depth))];
```

Mutated replacement:

```text
[]
```

### 1308. `src/game/MainScene.ts:289` — NoCoverage / ArrowFunction

Original:

```text
primitive) => primitive.geometry.depth)
```

Mutated replacement:

```text
() => undefined
```

### 1309. `src/game/MainScene.ts:290` — NoCoverage / ArrowFunction

Original:

```text
distance) => ({ distance, blocked: primitives.some((primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front") }))
```

Mutated replacement:

```text
() => undefined
```

### 1310. `src/game/MainScene.ts:290` — NoCoverage / ObjectLiteral

Original:

```text
 distance, blocked: primitives.some((primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front") })
```

Mutated replacement:

```text
{}
```

### 1311. `src/game/MainScene.ts:290` — NoCoverage / MethodExpression

Original:

```text
rimitives.some((primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front") 
```

Mutated replacement:

```text
primitives.every(primitive => primitive.geometry.depth === distance && primitive.geometry.surface === "front")
```

### 1312. `src/game/MainScene.ts:290` — NoCoverage / ArrowFunction

Original:

```text
primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front")
```

Mutated replacement:

```text
() => undefined
```

### 1313. `src/game/MainScene.ts:290` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.depth === distance && primitive.geometry.surface === "front")
```

Mutated replacement:

```text
true
```

### 1314. `src/game/MainScene.ts:290` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.depth === distance && primitive.geometry.surface === "front")
```

Mutated replacement:

```text
false
```

### 1315. `src/game/MainScene.ts:290` — NoCoverage / LogicalOperator

Original:

```text
rimitive.geometry.depth === distance && primitive.geometry.surface === "front")
```

Mutated replacement:

```text
primitive.geometry.depth === distance || primitive.geometry.surface === "front"
```

### 1316. `src/game/MainScene.ts:290` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.depth === distance 
```

Mutated replacement:

```text
true
```

### 1317. `src/game/MainScene.ts:290` — NoCoverage / EqualityOperator

Original:

```text
rimitive.geometry.depth === distance 
```

Mutated replacement:

```text
primitive.geometry.depth !== distance
```

### 1318. `src/game/MainScene.ts:290` — NoCoverage / ConditionalExpression

Original:

```text
rimitive.geometry.surface === "front")
```

Mutated replacement:

```text
true
```

### 1319. `src/game/MainScene.ts:290` — NoCoverage / EqualityOperator

Original:

```text
rimitive.geometry.surface === "front")
```

Mutated replacement:

```text
primitive.geometry.surface !== "front"
```

### 1320. `src/game/MainScene.ts:290` — NoCoverage / StringLiteral

Original:

```text
front")
```

Mutated replacement:

```text
""
```

### 1321. `src/game/MainScene.ts:291` — NoCoverage / ConditionalExpression

Original:

```text
his.perspectiveDebug)
```

Mutated replacement:

```text
true
```

### 1322. `src/game/MainScene.ts:291` — NoCoverage / ConditionalExpression

Original:

```text
his.perspectiveDebug)
```

Mutated replacement:

```text
false
```

### 1323. `src/game/MainScene.ts:291` — NoCoverage / StringLiteral

Original:

```text
POS ${this.state.player.position.x},${this.state.player.position.y}  FACING ${this.state.player.facing.toUpperCase()}  PRIMITIVES ${primitives.length}`,
```

Mutated replacement:

```text
``
```

### 1324. `src/game/MainScene.ts:291` — NoCoverage / MethodExpression

Original:

```text
his.state.player.facing.toUpperCase()}
```

Mutated replacement:

```text
this.state.player.facing.toLowerCase()
```

### 1325. `src/game/MainScene.ts:291` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + 8,
```

Mutated replacement:

```text
viewport.left - 8
```

### 1326. `src/game/MainScene.ts:291` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height - 24)
```

Mutated replacement:

```text
viewport.top + viewport.height + 24
```

### 1327. `src/game/MainScene.ts:291` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + viewport.height 
```

Mutated replacement:

```text
viewport.top - viewport.height
```

### 1328. `src/game/MainScene.ts:292` — NoCoverage / CallExpression

Original:

```text
orld.lineStyle(2, DUNGEON_PALETTE.boundary, 0.9);
```

Mutated replacement:

```text
;
```

### 1329. `src/game/MainScene.ts:293` — NoCoverage / CallExpression

Original:

```text
orld.strokeRect(viewport.left, viewport.top, viewport.width, viewport.height);
```

Mutated replacement:

```text
;
```

### 1330. `src/game/MainScene.ts:294` — NoCoverage / StringLiteral

Original:

```text
tarmin-state",
```

Mutated replacement:

```text
""
```

### 1331. `src/game/MainScene.ts:294` — NoCoverage / ObjectLiteral

Original:

```text
 detail: { floor: this.state.floor, turn: this.state.turn, health: this.state.playerHealth, maxHealth: this.state.playerMaxHealth, seed: this.state.seed, runStatus: this.state.runStatus, facing: this.state.player.facing, position: this.state.player.position, feedback: this.feedback, leftHand: this.itemName(this.state.leftHand), rightHand: this.itemName(this.state.rightHand), leftDetail: this.itemDetail(this.state.leftHand), rightDetail: this.itemDetail(this.state.rightHand), ring: this.state.ring.map((id) => this.itemName(id) ?? "UNKNOWN"), selectedRingIndex: this.state.selectedRingIndex, objective: { acquired: this.state.objective.acquired, complete: this.state.objective.complete, exit: this.state.objective.exit }, encounter: this.state.encounter ? { name: this.state.encounter.name, health: this.state.encounter.health, maxHealth: this.state.encounter.maxHealth } : null } })
```

Mutated replacement:

```text
{}
```

### 1332. `src/game/MainScene.ts:294` — NoCoverage / ObjectLiteral

Original:

```text
 floor: this.state.floor, turn: this.state.turn, health: this.state.playerHealth, maxHealth: this.state.playerMaxHealth, seed: this.state.seed, runStatus: this.state.runStatus, facing: this.state.player.facing, position: this.state.player.position, feedback: this.feedback, leftHand: this.itemName(this.state.leftHand), rightHand: this.itemName(this.state.rightHand), leftDetail: this.itemDetail(this.state.leftHand), rightDetail: this.itemDetail(this.state.rightHand), ring: this.state.ring.map((id) => this.itemName(id) ?? "UNKNOWN"), selectedRingIndex: this.state.selectedRingIndex, objective: { acquired: this.state.objective.acquired, complete: this.state.objective.complete, exit: this.state.objective.exit }, encounter: this.state.encounter ? { name: this.state.encounter.name, health: this.state.encounter.health, maxHealth: this.state.encounter.maxHealth } : null } 
```

Mutated replacement:

```text
{}
```

### 1333. `src/game/MainScene.ts:294` — NoCoverage / ArrowFunction

Original:

```text
id) => this.itemName(id) ?? "UNKNOWN")
```

Mutated replacement:

```text
() => undefined
```

### 1334. `src/game/MainScene.ts:294` — NoCoverage / LogicalOperator

Original:

```text
his.itemName(id) ?? "UNKNOWN")
```

Mutated replacement:

```text
this.itemName(id) && "UNKNOWN"
```

### 1335. `src/game/MainScene.ts:294` — NoCoverage / StringLiteral

Original:

```text
UNKNOWN")
```

Mutated replacement:

```text
""
```

### 1336. `src/game/MainScene.ts:294` — NoCoverage / ObjectLiteral

Original:

```text
 acquired: this.state.objective.acquired, complete: this.state.objective.complete, exit: this.state.objective.exit },
```

Mutated replacement:

```text
{}
```

### 1337. `src/game/MainScene.ts:294` — NoCoverage / ObjectLiteral

Original:

```text
 name: this.state.encounter.name, health: this.state.encounter.health, maxHealth: this.state.encounter.maxHealth } 
```

Mutated replacement:

```text
{}
```

### 1338. `src/game/MainScene.ts:297` — NoCoverage / BlockStatement

Original:

```text

    const width = Math.min(this.scale.width * 0.38, 480);
    const height = width * (36 / 58);
    this.add.image(this.scale.width / 2, this.scale.height - (height / 2) + 4, presentation.assetId)
      .setDisplaySize(width, height)
      .setDepth(1000)
      .setAlpha(0.94);
  }
```

Mutated replacement:

```text
{}
```

### 1339. `src/game/MainScene.ts:298` — NoCoverage / MethodExpression

Original:

```text
ath.min(this.scale.width * 0.38, 480);
```

Mutated replacement:

```text
Math.max(this.scale.width * 0.38, 480)
```

### 1340. `src/game/MainScene.ts:298` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.width * 0.38,
```

Mutated replacement:

```text
this.scale.width / 0.38
```

### 1341. `src/game/MainScene.ts:299` — NoCoverage / ArithmeticOperator

Original:

```text
idth * (36 / 58);
```

Mutated replacement:

```text
width / (36 / 58)
```

### 1342. `src/game/MainScene.ts:299` — NoCoverage / ArithmeticOperator

Original:

```text
6 / 58)
```

Mutated replacement:

```text
36 * 58
```

### 1343. `src/game/MainScene.ts:300` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.width / 2,
```

Mutated replacement:

```text
this.scale.width * 2
```

### 1344. `src/game/MainScene.ts:300` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.height - (height / 2) + 4,
```

Mutated replacement:

```text
this.scale.height - height / 2 - 4
```

### 1345. `src/game/MainScene.ts:300` — NoCoverage / ArithmeticOperator

Original:

```text
his.scale.height - (height / 2) 
```

Mutated replacement:

```text
this.scale.height + height / 2
```

### 1346. `src/game/MainScene.ts:300` — NoCoverage / ArithmeticOperator

Original:

```text
eight / 2)
```

Mutated replacement:

```text
height * 2
```

### 1347. `src/game/MainScene.ts:306` — NoCoverage / BlockStatement

Original:

```text

    for (const feature of features) {
      const points = feature.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      const left = Math.min(...points.map((point) => point.x));
      const right = Math.max(...points.map((point) => point.x));
      const top = Math.min(...points.map((point) => point.y));
      const bottom = Math.max(...points.map((point) => point.y));
      if (feature.kind === "archway") {
        this.add.image((left + right) / 2, (top + bottom) / 2, "archway-stone")
          .setDisplaySize(right - left, bottom - top)
          .setAlpha(feature.lightLevel)
          .setDepth(50 - feature.depth);
        continue;
      }
      this.add.image((left + right) / 2, (top + bottom) / 2, "torch-sconce")
        .setDisplaySize(right - left, bottom - top)
        .setAlpha(feature.lightLevel)
        .setDepth(70 - feature.depth);
      const flame = this.add.image((left + right) / 2, top + (bottom - top) * 0.3, "torch-flame")
        .setCrop(frame * 32, 0, 32, 48)
        .setDisplaySize((right - left) * 0.7, (bottom - top) * 0.75)
        .setAlpha(feature.lightLevel)
        .setDepth(80 - feature.depth);
      this.flameSprites.set(`${feature.cell.x},${feature.cell.y}:${feature.surface ?? ""}`, flame);
    }
  }
```

Mutated replacement:

```text
{}
```

### 1348. `src/game/MainScene.ts:307` — NoCoverage / BlockStatement

Original:

```text

      const points = feature.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      const left = Math.min(...points.map((point) => point.x));
      const right = Math.max(...points.map((point) => point.x));
      const top = Math.min(...points.map((point) => point.y));
      const bottom = Math.max(...points.map((point) => point.y));
      if (feature.kind === "archway") {
        this.add.image((left + right) / 2, (top + bottom) / 2, "archway-stone")
          .setDisplaySize(right - left, bottom - top)
          .setAlpha(feature.lightLevel)
          .setDepth(50 - feature.depth);
        continue;
      }
      this.add.image((left + right) / 2, (top + bottom) / 2, "torch-sconce")
        .setDisplaySize(right - left, bottom - top)
        .setAlpha(feature.lightLevel)
        .setDepth(70 - feature.depth);
      const flame = this.add.image((left + right) / 2, top + (bottom - top) * 0.3, "torch-flame")
        .setCrop(frame * 32, 0, 32, 48)
        .setDisplaySize((right - left) * 0.7, (bottom - top) * 0.75)
        .setAlpha(feature.lightLevel)
        .setDepth(80 - feature.depth);
      this.flameSprites.set(`${feature.cell.x},${feature.cell.y}:${feature.surface ?? ""}`, flame);
    }
```

Mutated replacement:

```text
{}
```

### 1349. `src/game/MainScene.ts:308` — NoCoverage / ArrowFunction

Original:

```text
point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }))
```

Mutated replacement:

```text
() => undefined
```

### 1350. `src/game/MainScene.ts:308` — NoCoverage / ObjectLiteral

Original:

```text
 x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })
```

Mutated replacement:

```text
{}
```

### 1351. `src/game/MainScene.ts:308` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + point.x * viewport.width,
```

Mutated replacement:

```text
viewport.left - point.x * viewport.width
```

### 1352. `src/game/MainScene.ts:308` — NoCoverage / ArithmeticOperator

Original:

```text
oint.x * viewport.width,
```

Mutated replacement:

```text
point.x / viewport.width
```

### 1353. `src/game/MainScene.ts:308` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + point.y * viewport.height 
```

Mutated replacement:

```text
viewport.top - point.y * viewport.height
```

### 1354. `src/game/MainScene.ts:308` — NoCoverage / ArithmeticOperator

Original:

```text
oint.y * viewport.height 
```

Mutated replacement:

```text
point.y / viewport.height
```

### 1355. `src/game/MainScene.ts:309` — NoCoverage / MethodExpression

Original:

```text
ath.min(...points.map((point) => point.x));
```

Mutated replacement:

```text
Math.max(...points.map(point => point.x))
```

### 1356. `src/game/MainScene.ts:309` — NoCoverage / ArrowFunction

Original:

```text
point) => point.x)
```

Mutated replacement:

```text
() => undefined
```

### 1357. `src/game/MainScene.ts:310` — NoCoverage / MethodExpression

Original:

```text
ath.max(...points.map((point) => point.x));
```

Mutated replacement:

```text
Math.min(...points.map(point => point.x))
```

### 1358. `src/game/MainScene.ts:310` — NoCoverage / ArrowFunction

Original:

```text
point) => point.x)
```

Mutated replacement:

```text
() => undefined
```

### 1359. `src/game/MainScene.ts:311` — NoCoverage / MethodExpression

Original:

```text
ath.min(...points.map((point) => point.y));
```

Mutated replacement:

```text
Math.max(...points.map(point => point.y))
```

### 1360. `src/game/MainScene.ts:311` — NoCoverage / ArrowFunction

Original:

```text
point) => point.y)
```

Mutated replacement:

```text
() => undefined
```

### 1361. `src/game/MainScene.ts:312` — NoCoverage / MethodExpression

Original:

```text
ath.max(...points.map((point) => point.y));
```

Mutated replacement:

```text
Math.min(...points.map(point => point.y))
```

### 1362. `src/game/MainScene.ts:312` — NoCoverage / ArrowFunction

Original:

```text
point) => point.y)
```

Mutated replacement:

```text
() => undefined
```

### 1363. `src/game/MainScene.ts:313` — NoCoverage / ConditionalExpression

Original:

```text
eature.kind === "archway")
```

Mutated replacement:

```text
true
```

### 1364. `src/game/MainScene.ts:313` — NoCoverage / ConditionalExpression

Original:

```text
eature.kind === "archway")
```

Mutated replacement:

```text
false
```

### 1365. `src/game/MainScene.ts:313` — NoCoverage / EqualityOperator

Original:

```text
eature.kind === "archway")
```

Mutated replacement:

```text
feature.kind !== "archway"
```

### 1366. `src/game/MainScene.ts:313` — NoCoverage / StringLiteral

Original:

```text
archway")
```

Mutated replacement:

```text
""
```

### 1367. `src/game/MainScene.ts:313` — NoCoverage / BlockStatement

Original:

```text

        this.add.image((left + right) / 2, (top + bottom) / 2, "archway-stone")
          .setDisplaySize(right - left, bottom - top)
          .setAlpha(feature.lightLevel)
          .setDepth(50 - feature.depth);
        continue;
      }
```

Mutated replacement:

```text
{}
```

### 1368. `src/game/MainScene.ts:314` — NoCoverage / ArithmeticOperator

Original:

```text
left + right) / 2,
```

Mutated replacement:

```text
(left + right) * 2
```

### 1369. `src/game/MainScene.ts:314` — NoCoverage / ArithmeticOperator

Original:

```text
eft + right)
```

Mutated replacement:

```text
left - right
```

### 1370. `src/game/MainScene.ts:314` — NoCoverage / ArithmeticOperator

Original:

```text
top + bottom) / 2,
```

Mutated replacement:

```text
(top + bottom) * 2
```

### 1371. `src/game/MainScene.ts:314` — NoCoverage / ArithmeticOperator

Original:

```text
op + bottom)
```

Mutated replacement:

```text
top - bottom
```

### 1372. `src/game/MainScene.ts:314` — NoCoverage / StringLiteral

Original:

```text
archway-stone")
```

Mutated replacement:

```text
""
```

### 1373. `src/game/MainScene.ts:315` — NoCoverage / ArithmeticOperator

Original:

```text
ight - left,
```

Mutated replacement:

```text
right + left
```

### 1374. `src/game/MainScene.ts:315` — NoCoverage / ArithmeticOperator

Original:

```text
ottom - top)
```

Mutated replacement:

```text
bottom + top
```

### 1375. `src/game/MainScene.ts:317` — NoCoverage / ArithmeticOperator

Original:

```text
0 - feature.depth)
```

Mutated replacement:

```text
50 + feature.depth
```

### 1376. `src/game/MainScene.ts:320` — NoCoverage / ArithmeticOperator

Original:

```text
left + right) / 2,
```

Mutated replacement:

```text
(left + right) * 2
```

### 1377. `src/game/MainScene.ts:320` — NoCoverage / ArithmeticOperator

Original:

```text
eft + right)
```

Mutated replacement:

```text
left - right
```

### 1378. `src/game/MainScene.ts:320` — NoCoverage / ArithmeticOperator

Original:

```text
top + bottom) / 2,
```

Mutated replacement:

```text
(top + bottom) * 2
```

### 1379. `src/game/MainScene.ts:320` — NoCoverage / ArithmeticOperator

Original:

```text
op + bottom)
```

Mutated replacement:

```text
top - bottom
```

### 1380. `src/game/MainScene.ts:320` — NoCoverage / StringLiteral

Original:

```text
torch-sconce")
```

Mutated replacement:

```text
""
```

### 1381. `src/game/MainScene.ts:321` — NoCoverage / ArithmeticOperator

Original:

```text
ight - left,
```

Mutated replacement:

```text
right + left
```

### 1382. `src/game/MainScene.ts:321` — NoCoverage / ArithmeticOperator

Original:

```text
ottom - top)
```

Mutated replacement:

```text
bottom + top
```

### 1383. `src/game/MainScene.ts:323` — NoCoverage / ArithmeticOperator

Original:

```text
0 - feature.depth)
```

Mutated replacement:

```text
70 + feature.depth
```

### 1384. `src/game/MainScene.ts:324` — NoCoverage / ArithmeticOperator

Original:

```text
left + right) / 2,
```

Mutated replacement:

```text
(left + right) * 2
```

### 1385. `src/game/MainScene.ts:324` — NoCoverage / ArithmeticOperator

Original:

```text
eft + right)
```

Mutated replacement:

```text
left - right
```

### 1386. `src/game/MainScene.ts:324` — NoCoverage / ArithmeticOperator

Original:

```text
op + (bottom - top) * 0.3,
```

Mutated replacement:

```text
top - (bottom - top) * 0.3
```

### 1387. `src/game/MainScene.ts:324` — NoCoverage / ArithmeticOperator

Original:

```text
bottom - top) * 0.3,
```

Mutated replacement:

```text
(bottom - top) / 0.3
```

### 1388. `src/game/MainScene.ts:324` — NoCoverage / ArithmeticOperator

Original:

```text
ottom - top)
```

Mutated replacement:

```text
bottom + top
```

### 1389. `src/game/MainScene.ts:324` — NoCoverage / StringLiteral

Original:

```text
torch-flame")
```

Mutated replacement:

```text
""
```

### 1390. `src/game/MainScene.ts:325` — NoCoverage / ArithmeticOperator

Original:

```text
rame * 32,
```

Mutated replacement:

```text
frame / 32
```

### 1391. `src/game/MainScene.ts:326` — NoCoverage / ArithmeticOperator

Original:

```text
right - left) * 0.7,
```

Mutated replacement:

```text
(right - left) / 0.7
```

### 1392. `src/game/MainScene.ts:326` — NoCoverage / ArithmeticOperator

Original:

```text
ight - left)
```

Mutated replacement:

```text
right + left
```

### 1393. `src/game/MainScene.ts:326` — NoCoverage / ArithmeticOperator

Original:

```text
bottom - top) * 0.75)
```

Mutated replacement:

```text
(bottom - top) / 0.75
```

### 1394. `src/game/MainScene.ts:326` — NoCoverage / ArithmeticOperator

Original:

```text
ottom - top)
```

Mutated replacement:

```text
bottom + top
```

### 1395. `src/game/MainScene.ts:328` — NoCoverage / ArithmeticOperator

Original:

```text
0 - feature.depth)
```

Mutated replacement:

```text
80 + feature.depth
```

### 1396. `src/game/MainScene.ts:329` — NoCoverage / StringLiteral

Original:

```text
${feature.cell.x},${feature.cell.y}:${feature.surface ?? ""}`,
```

Mutated replacement:

```text
``
```

### 1397. `src/game/MainScene.ts:329` — NoCoverage / LogicalOperator

Original:

```text
eature.surface ?? ""}
```

Mutated replacement:

```text
feature.surface && ""
```

### 1398. `src/game/MainScene.ts:329` — NoCoverage / StringLiteral

Original:

```text
"}
```

Mutated replacement:

```text
"Stryker was here!"
```

### 1399. `src/game/MainScene.ts:333` — NoCoverage / BlockStatement

Original:

```text

    for (const entity of entities) {
      const points = entity.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      const left = Math.min(...points.map((point) => point.x));
      const right = Math.max(...points.map((point) => point.x));
      const top = Math.min(...points.map((point) => point.y));
      const bottom = Math.max(...points.map((point) => point.y));
      const sprite = this.add.image((left + right) / 2, (top + bottom) / 2, entity.presentationId === "warden" ? "ashbound-warden" : entity.presentationId === "mireling" ? "glass-mireling" : "gloam-scavenger");
      sprite.setCrop(frame * 32, 0, 32, 48);
      // Keep near billboards above far billboards independent of display-list order.
      sprite.setDisplaySize(right - left, bottom - top).setDepth(100 + PORTAL_FRAMES.length - entity.depth);
      sprite.setAlpha(entity.lightLevel);
      this.entitySprites.set(entity.id, sprite);
    }
  }
```

Mutated replacement:

```text
{}
```

### 1400. `src/game/MainScene.ts:334` — NoCoverage / BlockStatement

Original:

```text

      const points = entity.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      const left = Math.min(...points.map((point) => point.x));
      const right = Math.max(...points.map((point) => point.x));
      const top = Math.min(...points.map((point) => point.y));
      const bottom = Math.max(...points.map((point) => point.y));
      const sprite = this.add.image((left + right) / 2, (top + bottom) / 2, entity.presentationId === "warden" ? "ashbound-warden" : entity.presentationId === "mireling" ? "glass-mireling" : "gloam-scavenger");
      sprite.setCrop(frame * 32, 0, 32, 48);
      // Keep near billboards above far billboards independent of display-list order.
      sprite.setDisplaySize(right - left, bottom - top).setDepth(100 + PORTAL_FRAMES.length - entity.depth);
      sprite.setAlpha(entity.lightLevel);
      this.entitySprites.set(entity.id, sprite);
    }
```

Mutated replacement:

```text
{}
```

### 1401. `src/game/MainScene.ts:335` — NoCoverage / ArrowFunction

Original:

```text
point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }))
```

Mutated replacement:

```text
() => undefined
```

### 1402. `src/game/MainScene.ts:335` — NoCoverage / ObjectLiteral

Original:

```text
 x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })
```

Mutated replacement:

```text
{}
```

### 1403. `src/game/MainScene.ts:335` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.left + point.x * viewport.width,
```

Mutated replacement:

```text
viewport.left - point.x * viewport.width
```

### 1404. `src/game/MainScene.ts:335` — NoCoverage / ArithmeticOperator

Original:

```text
oint.x * viewport.width,
```

Mutated replacement:

```text
point.x / viewport.width
```

### 1405. `src/game/MainScene.ts:335` — NoCoverage / ArithmeticOperator

Original:

```text
iewport.top + point.y * viewport.height 
```

Mutated replacement:

```text
viewport.top - point.y * viewport.height
```

### 1406. `src/game/MainScene.ts:335` — NoCoverage / ArithmeticOperator

Original:

```text
oint.y * viewport.height 
```

Mutated replacement:

```text
point.y / viewport.height
```

### 1407. `src/game/MainScene.ts:336` — NoCoverage / MethodExpression

Original:

```text
ath.min(...points.map((point) => point.x));
```

Mutated replacement:

```text
Math.max(...points.map(point => point.x))
```

### 1408. `src/game/MainScene.ts:336` — NoCoverage / ArrowFunction

Original:

```text
point) => point.x)
```

Mutated replacement:

```text
() => undefined
```

### 1409. `src/game/MainScene.ts:337` — NoCoverage / MethodExpression

Original:

```text
ath.max(...points.map((point) => point.x));
```

Mutated replacement:

```text
Math.min(...points.map(point => point.x))
```

### 1410. `src/game/MainScene.ts:337` — NoCoverage / ArrowFunction

Original:

```text
point) => point.x)
```

Mutated replacement:

```text
() => undefined
```

### 1411. `src/game/MainScene.ts:338` — NoCoverage / MethodExpression

Original:

```text
ath.min(...points.map((point) => point.y));
```

Mutated replacement:

```text
Math.max(...points.map(point => point.y))
```

### 1412. `src/game/MainScene.ts:338` — NoCoverage / ArrowFunction

Original:

```text
point) => point.y)
```

Mutated replacement:

```text
() => undefined
```

### 1413. `src/game/MainScene.ts:339` — NoCoverage / MethodExpression

Original:

```text
ath.max(...points.map((point) => point.y));
```

Mutated replacement:

```text
Math.min(...points.map(point => point.y))
```

### 1414. `src/game/MainScene.ts:339` — NoCoverage / ArrowFunction

Original:

```text
point) => point.y)
```

Mutated replacement:

```text
() => undefined
```

### 1415. `src/game/MainScene.ts:340` — NoCoverage / ArithmeticOperator

Original:

```text
left + right) / 2,
```

Mutated replacement:

```text
(left + right) * 2
```

### 1416. `src/game/MainScene.ts:340` — NoCoverage / ArithmeticOperator

Original:

```text
eft + right)
```

Mutated replacement:

```text
left - right
```

### 1417. `src/game/MainScene.ts:340` — NoCoverage / ArithmeticOperator

Original:

```text
top + bottom) / 2,
```

Mutated replacement:

```text
(top + bottom) * 2
```

### 1418. `src/game/MainScene.ts:340` — NoCoverage / ArithmeticOperator

Original:

```text
op + bottom)
```

Mutated replacement:

```text
top - bottom
```

### 1419. `src/game/MainScene.ts:340` — NoCoverage / ConditionalExpression

Original:

```text
ntity.presentationId === "warden" 
```

Mutated replacement:

```text
true
```

### 1420. `src/game/MainScene.ts:340` — NoCoverage / ConditionalExpression

Original:

```text
ntity.presentationId === "warden" 
```

Mutated replacement:

```text
false
```

### 1421. `src/game/MainScene.ts:340` — NoCoverage / EqualityOperator

Original:

```text
ntity.presentationId === "warden" 
```

Mutated replacement:

```text
entity.presentationId !== "warden"
```

### 1422. `src/game/MainScene.ts:340` — NoCoverage / StringLiteral

Original:

```text
warden" 
```

Mutated replacement:

```text
""
```

### 1423. `src/game/MainScene.ts:340` — NoCoverage / StringLiteral

Original:

```text
ashbound-warden" 
```

Mutated replacement:

```text
""
```

### 1424. `src/game/MainScene.ts:340` — NoCoverage / ConditionalExpression

Original:

```text
ntity.presentationId === "mireling" 
```

Mutated replacement:

```text
true
```

### 1425. `src/game/MainScene.ts:340` — NoCoverage / ConditionalExpression

Original:

```text
ntity.presentationId === "mireling" 
```

Mutated replacement:

```text
false
```

### 1426. `src/game/MainScene.ts:340` — NoCoverage / EqualityOperator

Original:

```text
ntity.presentationId === "mireling" 
```

Mutated replacement:

```text
entity.presentationId !== "mireling"
```

### 1427. `src/game/MainScene.ts:340` — NoCoverage / StringLiteral

Original:

```text
mireling" 
```

Mutated replacement:

```text
""
```

### 1428. `src/game/MainScene.ts:340` — NoCoverage / StringLiteral

Original:

```text
glass-mireling" 
```

Mutated replacement:

```text
""
```

### 1429. `src/game/MainScene.ts:340` — NoCoverage / StringLiteral

Original:

```text
gloam-scavenger")
```

Mutated replacement:

```text
""
```

### 1430. `src/game/MainScene.ts:341` — NoCoverage / ArithmeticOperator

Original:

```text
rame * 32,
```

Mutated replacement:

```text
frame / 32
```

### 1431. `src/game/MainScene.ts:343` — NoCoverage / ArithmeticOperator

Original:

```text
ight - left,
```

Mutated replacement:

```text
right + left
```

### 1432. `src/game/MainScene.ts:343` — NoCoverage / ArithmeticOperator

Original:

```text
ottom - top)
```

Mutated replacement:

```text
bottom + top
```

### 1433. `src/game/MainScene.ts:343` — NoCoverage / ArithmeticOperator

Original:

```text
00 + PORTAL_FRAMES.length - entity.depth)
```

Mutated replacement:

```text
100 + PORTAL_FRAMES.length + entity.depth
```

### 1434. `src/game/MainScene.ts:343` — NoCoverage / ArithmeticOperator

Original:

```text
00 + PORTAL_FRAMES.length 
```

Mutated replacement:

```text
100 - PORTAL_FRAMES.length
```

### 1435. `src/game/MainScene.ts:344` — NoCoverage / CallExpression

Original:

```text
prite.setAlpha(entity.lightLevel);
```

Mutated replacement:

```text
;
```

### 1436. `src/game/MainScene.ts:345` — NoCoverage / CallExpression

Original:

```text
his.entitySprites.set(entity.id, sprite);
```

Mutated replacement:

```text
;
```

### 1437. `src/game/MainScene.ts:349` — NoCoverage / BlockStatement

Original:

```text

    if (!instanceId) return null;
    const instance = this.state.items.find((item) => item.id === instanceId);
    return instance ? itemById(instance.definitionId)?.name ?? instance.definitionId : null;
  }
```

Mutated replacement:

```text
{}
```

### 1438. `src/game/MainScene.ts:350` — NoCoverage / BooleanLiteral

Original:

```text
instanceId)
```

Mutated replacement:

```text
instanceId
```

### 1439. `src/game/MainScene.ts:350` — NoCoverage / ConditionalExpression

Original:

```text
instanceId)
```

Mutated replacement:

```text
true
```

### 1440. `src/game/MainScene.ts:350` — NoCoverage / ConditionalExpression

Original:

```text
instanceId)
```

Mutated replacement:

```text
false
```

### 1441. `src/game/MainScene.ts:351` — NoCoverage / ArrowFunction

Original:

```text
item) => item.id === instanceId)
```

Mutated replacement:

```text
() => undefined
```

### 1442. `src/game/MainScene.ts:351` — NoCoverage / ConditionalExpression

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
true
```

### 1443. `src/game/MainScene.ts:351` — NoCoverage / ConditionalExpression

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
false
```

### 1444. `src/game/MainScene.ts:351` — NoCoverage / EqualityOperator

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
item.id !== instanceId
```

### 1445. `src/game/MainScene.ts:352` — NoCoverage / LogicalOperator

Original:

```text
temById(instance.definitionId)?.name ?? instance.definitionId 
```

Mutated replacement:

```text
itemById(instance.definitionId)?.name && instance.definitionId
```

### 1446. `src/game/MainScene.ts:352` — NoCoverage / OptionalChaining

Original:

```text
temById(instance.definitionId)?.name 
```

Mutated replacement:

```text
itemById(instance.definitionId).name
```

### 1447. `src/game/MainScene.ts:355` — NoCoverage / BlockStatement

Original:

```text

    if (!instanceId) return "No item equipped";
    const instance = this.state.items.find((item) => item.id === instanceId);
    const definition = instance ? itemById(instance.definitionId) : undefined;
    if (!definition) return "Unknown item";
    if (definition.attack) return `STRIKE +${definition.attack}`;
    if (definition.defense) return `GUARD +${definition.defense}`;
    if (definition.healing) return `RESTORE +${definition.healing}`;
    return "Treasure carried";
  }
```

Mutated replacement:

```text
{}
```

### 1448. `src/game/MainScene.ts:356` — NoCoverage / BooleanLiteral

Original:

```text
instanceId)
```

Mutated replacement:

```text
instanceId
```

### 1449. `src/game/MainScene.ts:356` — NoCoverage / ConditionalExpression

Original:

```text
instanceId)
```

Mutated replacement:

```text
true
```

### 1450. `src/game/MainScene.ts:356` — NoCoverage / ConditionalExpression

Original:

```text
instanceId)
```

Mutated replacement:

```text
false
```

### 1451. `src/game/MainScene.ts:356` — NoCoverage / StringLiteral

Original:

```text
No item equipped";
```

Mutated replacement:

```text
""
```

### 1452. `src/game/MainScene.ts:357` — NoCoverage / ArrowFunction

Original:

```text
item) => item.id === instanceId)
```

Mutated replacement:

```text
() => undefined
```

### 1453. `src/game/MainScene.ts:357` — NoCoverage / ConditionalExpression

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
true
```

### 1454. `src/game/MainScene.ts:357` — NoCoverage / ConditionalExpression

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
false
```

### 1455. `src/game/MainScene.ts:357` — NoCoverage / EqualityOperator

Original:

```text
tem.id === instanceId)
```

Mutated replacement:

```text
item.id !== instanceId
```

### 1456. `src/game/MainScene.ts:359` — NoCoverage / BooleanLiteral

Original:

```text
definition)
```

Mutated replacement:

```text
definition
```

### 1457. `src/game/MainScene.ts:359` — NoCoverage / ConditionalExpression

Original:

```text
definition)
```

Mutated replacement:

```text
true
```

### 1458. `src/game/MainScene.ts:359` — NoCoverage / ConditionalExpression

Original:

```text
definition)
```

Mutated replacement:

```text
false
```

### 1459. `src/game/MainScene.ts:359` — NoCoverage / StringLiteral

Original:

```text
Unknown item";
```

Mutated replacement:

```text
""
```

### 1460. `src/game/MainScene.ts:360` — NoCoverage / ConditionalExpression

Original:

```text
efinition.attack)
```

Mutated replacement:

```text
true
```

### 1461. `src/game/MainScene.ts:360` — NoCoverage / ConditionalExpression

Original:

```text
efinition.attack)
```

Mutated replacement:

```text
false
```

### 1462. `src/game/MainScene.ts:360` — NoCoverage / StringLiteral

Original:

```text
STRIKE +${definition.attack}`;
```

Mutated replacement:

```text
``
```

### 1463. `src/game/MainScene.ts:361` — NoCoverage / ConditionalExpression

Original:

```text
efinition.defense)
```

Mutated replacement:

```text
true
```

### 1464. `src/game/MainScene.ts:361` — NoCoverage / ConditionalExpression

Original:

```text
efinition.defense)
```

Mutated replacement:

```text
false
```

### 1465. `src/game/MainScene.ts:361` — NoCoverage / StringLiteral

Original:

```text
GUARD +${definition.defense}`;
```

Mutated replacement:

```text
``
```

### 1466. `src/game/MainScene.ts:362` — NoCoverage / ConditionalExpression

Original:

```text
efinition.healing)
```

Mutated replacement:

```text
true
```

### 1467. `src/game/MainScene.ts:362` — NoCoverage / ConditionalExpression

Original:

```text
efinition.healing)
```

Mutated replacement:

```text
false
```

### 1468. `src/game/MainScene.ts:362` — NoCoverage / StringLiteral

Original:

```text
RESTORE +${definition.healing}`;
```

Mutated replacement:

```text
``
```

### 1469. `src/game/MainScene.ts:363` — NoCoverage / StringLiteral

Original:

```text
Treasure carried";
```

Mutated replacement:

```text
""
```

### 1470. `src/renderer/perspective/perspectiveRenderer.ts:32` — NoCoverage / ArithmeticOperator

Original:

```text
EPTH_LIGHT_LEVELS.length - 1]
```

Mutated replacement:

```text
DEPTH_LIGHT_LEVELS.length + 1
```

### 1471. `src/renderer/perspective/perspectiveRenderer.ts:43` — NoCoverage / StringLiteral

Original:

```text
right",
```

Mutated replacement:

```text
""
```

### 1472. `src/renderer/perspective/perspectiveRenderer.ts:71` — NoCoverage / ArithmeticOperator

Original:

```text
EPTH_LIGHT_LEVELS.length - 1]
```

Mutated replacement:

```text
DEPTH_LIGHT_LEVELS.length + 1
```

### 1473. `src/renderer/perspective/perspectiveRenderer.ts:12` — Survived / BlockStatement

Original:

```text

  const forward = DELTAS[state.player.facing];
  const lateral = side === "left" ? { x: forward.y, y: -forward.x } : { x: -forward.y, y: forward.x };
  return { x: state.player.position.x + forward.x * distance + lateral.x, y: state.player.position.y + forward.y * distance + lateral.y };
}
```

Mutated replacement:

```text
{}
```

### 1474. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / ConditionalExpression

Original:

```text
ide === "left" 
```

Mutated replacement:

```text
true
```

### 1475. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / ConditionalExpression

Original:

```text
ide === "left" 
```

Mutated replacement:

```text
false
```

### 1476. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / EqualityOperator

Original:

```text
ide === "left" 
```

Mutated replacement:

```text
side !== "left"
```

### 1477. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 1478. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / UnaryOperator

Original:

```text
forward.x 
```

Mutated replacement:

```text
+forward.x
```

### 1479. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / ObjectLiteral

Original:

```text
 x: forward.y, y: -forward.x } 
```

Mutated replacement:

```text
{}
```

### 1480. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / ObjectLiteral

Original:

```text
 x: -forward.y, y: forward.x };
```

Mutated replacement:

```text
{}
```

### 1481. `src/renderer/perspective/perspectiveRenderer.ts:14` — Survived / UnaryOperator

Original:

```text
forward.y,
```

Mutated replacement:

```text
+forward.y
```

### 1482. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ObjectLiteral

Original:

```text
 x: state.player.position.x + forward.x * distance + lateral.x, y: state.player.position.y + forward.y * distance + lateral.y };
```

Mutated replacement:

```text
{}
```

### 1483. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.x + forward.x * distance + lateral.x,
```

Mutated replacement:

```text
state.player.position.x + forward.x * distance - lateral.x
```

### 1484. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.x + forward.x * distance 
```

Mutated replacement:

```text
state.player.position.x - forward.x * distance
```

### 1485. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
orward.x * distance 
```

Mutated replacement:

```text
forward.x / distance
```

### 1486. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.y + forward.y * distance + lateral.y 
```

Mutated replacement:

```text
state.player.position.y + forward.y * distance - lateral.y
```

### 1487. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.y + forward.y * distance 
```

Mutated replacement:

```text
state.player.position.y - forward.y * distance
```

### 1488. `src/renderer/perspective/perspectiveRenderer.ts:15` — Survived / ArithmeticOperator

Original:

```text
orward.y * distance 
```

Mutated replacement:

```text
forward.y / distance
```

### 1489. `src/renderer/perspective/perspectiveRenderer.ts:18` — Survived / BlockStatement

Original:

```text

  const result: ScenePrimitive[] = [];
  const features: ProjectedFeature[] = [];
  const forward = DELTAS[state.player.facing];
  const cells = [1, 2, 3, 4].map((distance) => {
    const point = { x: state.player.position.x + forward.x * distance, y: state.player.position.y + forward.y * distance };
    return { distance, point, kind: visibleCellKind(state, point) };
  });
  const blocker = cells.findIndex((cell) => cell.kind !== "passage" && cell.kind !== "open-door");
  const startIndex = blocker === -1 ? cells.length - 1 : blocker;
  for (let index = startIndex; index >= 0; index -= 1) {
    const cell = cells[index];
    const quads = intervalQuads(PORTAL_FRAMES[index], PORTAL_FRAMES[index + 1]);
    if (cell.kind === "passage" || cell.kind === "open-door") {
      features.push({ kind: "archway", depth: cell.distance, cell: cell.point, quad: [{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }], lightLevel: DEPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] });
    }
    addPrimitive(result, state, cell.distance, cell.point, "ceiling", cell.kind, quads.ceiling);
    addPrimitive(result, state, cell.distance, cell.point, "floor", cell.kind, quads.floor);
    const leftPoint = sidePoint(state, cell.distance, "left");
    const rightPoint = sidePoint(state, cell.distance, "right");
    const leftKind = visibleCellKind(state, leftPoint);
    const rightKind = visibleCellKind(state, rightPoint);
    addPrimitive(result, state, cell.distance, leftPoint, "left", leftKind, quads.leftWall);
    addPrimitive(result, state, cell.distance, rightPoint, "right", rightKind, quads.rightWall);
    if (leftKind === "wall" && shouldPlaceSconce(cell.distance, "left")) features.push(torchSconce(cell.distance, cell.point, "left", quads.leftWall));
    if (rightKind === "wall" && shouldPlaceSconce(cell.distance, "right")) features.push(torchSconce(cell.distance, cell.point, "right", quads.rightWall));
    if (cell.kind !== "passage" && cell.kind !== "open-door") {
      const frame = PORTAL_FRAMES[index + 1];
      addPrimitive(result, state, cell.distance, cell.point, "front", cell.kind, [{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }]);
    }
  }
  return { primitives: result, features };
}
```

Mutated replacement:

```text
{}
```

### 1490. `src/renderer/perspective/perspectiveRenderer.ts:19` — Survived / ArrayDeclaration

Original:

```text
];
```

Mutated replacement:

```text
["Stryker was here"]
```

### 1491. `src/renderer/perspective/perspectiveRenderer.ts:20` — Survived / ArrayDeclaration

Original:

```text
];
```

Mutated replacement:

```text
["Stryker was here"]
```

### 1492. `src/renderer/perspective/perspectiveRenderer.ts:22` — Survived / ArrayDeclaration

Original:

```text
1, 2, 3, 4].
```

Mutated replacement:

```text
[]
```

### 1493. `src/renderer/perspective/perspectiveRenderer.ts:22` — Survived / BlockStatement

Original:

```text

    const point = { x: state.player.position.x + forward.x * distance, y: state.player.position.y + forward.y * distance };
    return { distance, point, kind: visibleCellKind(state, point) };
  })
```

Mutated replacement:

```text
{}
```

### 1494. `src/renderer/perspective/perspectiveRenderer.ts:23` — Survived / ObjectLiteral

Original:

```text
 x: state.player.position.x + forward.x * distance, y: state.player.position.y + forward.y * distance };
```

Mutated replacement:

```text
{}
```

### 1495. `src/renderer/perspective/perspectiveRenderer.ts:23` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.x + forward.x * distance,
```

Mutated replacement:

```text
state.player.position.x - forward.x * distance
```

### 1496. `src/renderer/perspective/perspectiveRenderer.ts:23` — Survived / ArithmeticOperator

Original:

```text
orward.x * distance,
```

Mutated replacement:

```text
forward.x / distance
```

### 1497. `src/renderer/perspective/perspectiveRenderer.ts:23` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.y + forward.y * distance 
```

Mutated replacement:

```text
state.player.position.y - forward.y * distance
```

### 1498. `src/renderer/perspective/perspectiveRenderer.ts:23` — Survived / ArithmeticOperator

Original:

```text
orward.y * distance 
```

Mutated replacement:

```text
forward.y / distance
```

### 1499. `src/renderer/perspective/perspectiveRenderer.ts:24` — Survived / ObjectLiteral

Original:

```text
 distance, point, kind: visibleCellKind(state, point) };
```

Mutated replacement:

```text
{}
```

### 1500. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / ArrowFunction

Original:

```text
cell) => cell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
() => undefined
```

### 1501. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
true
```

### 1502. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
false
```

### 1503. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / LogicalOperator

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
cell.kind !== "passage" || cell.kind !== "open-door"
```

### 1504. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" 
```

Mutated replacement:

```text
true
```

### 1505. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / EqualityOperator

Original:

```text
ell.kind !== "passage" 
```

Mutated replacement:

```text
cell.kind === "passage"
```

### 1506. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / StringLiteral

Original:

```text
passage" 
```

Mutated replacement:

```text
""
```

### 1507. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "open-door")
```

Mutated replacement:

```text
true
```

### 1508. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / EqualityOperator

Original:

```text
ell.kind !== "open-door")
```

Mutated replacement:

```text
cell.kind === "open-door"
```

### 1509. `src/renderer/perspective/perspectiveRenderer.ts:26` — Survived / StringLiteral

Original:

```text
open-door")
```

Mutated replacement:

```text
""
```

### 1510. `src/renderer/perspective/perspectiveRenderer.ts:27` — Survived / ConditionalExpression

Original:

```text
locker === -1 
```

Mutated replacement:

```text
true
```

### 1511. `src/renderer/perspective/perspectiveRenderer.ts:27` — Survived / ConditionalExpression

Original:

```text
locker === -1 
```

Mutated replacement:

```text
false
```

### 1512. `src/renderer/perspective/perspectiveRenderer.ts:27` — Survived / EqualityOperator

Original:

```text
locker === -1 
```

Mutated replacement:

```text
blocker !== -1
```

### 1513. `src/renderer/perspective/perspectiveRenderer.ts:27` — Survived / UnaryOperator

Original:

```text
1 
```

Mutated replacement:

```text
+1
```

### 1514. `src/renderer/perspective/perspectiveRenderer.ts:27` — Survived / ArithmeticOperator

Original:

```text
ells.length - 1 
```

Mutated replacement:

```text
cells.length + 1
```

### 1515. `src/renderer/perspective/perspectiveRenderer.ts:28` — Survived / ConditionalExpression

Original:

```text
ndex >= 0;
```

Mutated replacement:

```text
false
```

### 1516. `src/renderer/perspective/perspectiveRenderer.ts:28` — Survived / EqualityOperator

Original:

```text
ndex >= 0;
```

Mutated replacement:

```text
index > 0
```

### 1517. `src/renderer/perspective/perspectiveRenderer.ts:28` — Survived / EqualityOperator

Original:

```text
ndex >= 0;
```

Mutated replacement:

```text
index < 0
```

### 1518. `src/renderer/perspective/perspectiveRenderer.ts:28` — Survived / AssignmentOperator

Original:

```text
ndex -= 1)
```

Mutated replacement:

```text
index += 1
```

### 1519. `src/renderer/perspective/perspectiveRenderer.ts:28` — Survived / BlockStatement

Original:

```text

    const cell = cells[index];
    const quads = intervalQuads(PORTAL_FRAMES[index], PORTAL_FRAMES[index + 1]);
    if (cell.kind === "passage" || cell.kind === "open-door") {
      features.push({ kind: "archway", depth: cell.distance, cell: cell.point, quad: [{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }], lightLevel: DEPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] });
    }
    addPrimitive(result, state, cell.distance, cell.point, "ceiling", cell.kind, quads.ceiling);
    addPrimitive(result, state, cell.distance, cell.point, "floor", cell.kind, quads.floor);
    const leftPoint = sidePoint(state, cell.distance, "left");
    const rightPoint = sidePoint(state, cell.distance, "right");
    const leftKind = visibleCellKind(state, leftPoint);
    const rightKind = visibleCellKind(state, rightPoint);
    addPrimitive(result, state, cell.distance, leftPoint, "left", leftKind, quads.leftWall);
    addPrimitive(result, state, cell.distance, rightPoint, "right", rightKind, quads.rightWall);
    if (leftKind === "wall" && shouldPlaceSconce(cell.distance, "left")) features.push(torchSconce(cell.distance, cell.point, "left", quads.leftWall));
    if (rightKind === "wall" && shouldPlaceSconce(cell.distance, "right")) features.push(torchSconce(cell.distance, cell.point, "right", quads.rightWall));
    if (cell.kind !== "passage" && cell.kind !== "open-door") {
      const frame = PORTAL_FRAMES[index + 1];
      addPrimitive(result, state, cell.distance, cell.point, "front", cell.kind, [{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }]);
    }
  }
```

Mutated replacement:

```text
{}
```

### 1520. `src/renderer/perspective/perspectiveRenderer.ts:30` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1521. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / ConditionalExpression

Original:

```text
ell.kind === "passage" || cell.kind === "open-door")
```

Mutated replacement:

```text
true
```

### 1522. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / ConditionalExpression

Original:

```text
ell.kind === "passage" || cell.kind === "open-door")
```

Mutated replacement:

```text
false
```

### 1523. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / LogicalOperator

Original:

```text
ell.kind === "passage" || cell.kind === "open-door")
```

Mutated replacement:

```text
cell.kind === "passage" && cell.kind === "open-door"
```

### 1524. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / ConditionalExpression

Original:

```text
ell.kind === "passage" 
```

Mutated replacement:

```text
false
```

### 1525. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / EqualityOperator

Original:

```text
ell.kind === "passage" 
```

Mutated replacement:

```text
cell.kind !== "passage"
```

### 1526. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / StringLiteral

Original:

```text
passage" 
```

Mutated replacement:

```text
""
```

### 1527. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / ConditionalExpression

Original:

```text
ell.kind === "open-door")
```

Mutated replacement:

```text
false
```

### 1528. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / EqualityOperator

Original:

```text
ell.kind === "open-door")
```

Mutated replacement:

```text
cell.kind !== "open-door"
```

### 1529. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / StringLiteral

Original:

```text
open-door")
```

Mutated replacement:

```text
""
```

### 1530. `src/renderer/perspective/perspectiveRenderer.ts:31` — Survived / BlockStatement

Original:

```text

      features.push({ kind: "archway", depth: cell.distance, cell: cell.point, quad: [{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }], lightLevel: DEPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] });
    }
```

Mutated replacement:

```text
{}
```

### 1531. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ObjectLiteral

Original:

```text
 kind: "archway", depth: cell.distance, cell: cell.point, quad: [{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }], lightLevel: DEPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] })
```

Mutated replacement:

```text
{}
```

### 1532. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / StringLiteral

Original:

```text
archway",
```

Mutated replacement:

```text
""
```

### 1533. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArrayDeclaration

Original:

```text
{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }],
```

Mutated replacement:

```text
[]
```

### 1534. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ObjectLiteral

Original:

```text
 x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top },
```

Mutated replacement:

```text
{}
```

### 1535. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1536. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1537. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ObjectLiteral

Original:

```text
 x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top },
```

Mutated replacement:

```text
{}
```

### 1538. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1539. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1540. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ObjectLiteral

Original:

```text
 x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom },
```

Mutated replacement:

```text
{}
```

### 1541. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1542. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1543. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ObjectLiteral

Original:

```text
 x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }]
```

Mutated replacement:

```text
{}
```

### 1544. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1545. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1546. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / LogicalOperator

Original:

```text
EPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] 
```

Mutated replacement:

```text
DEPTH_LIGHT_LEVELS[cell.distance - 1] && DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1]
```

### 1547. `src/renderer/perspective/perspectiveRenderer.ts:32` — Survived / ArithmeticOperator

Original:

```text
ell.distance - 1]
```

Mutated replacement:

```text
cell.distance + 1
```

### 1548. `src/renderer/perspective/perspectiveRenderer.ts:34` — Survived / StringLiteral

Original:

```text
ceiling",
```

Mutated replacement:

```text
""
```

### 1549. `src/renderer/perspective/perspectiveRenderer.ts:35` — Survived / StringLiteral

Original:

```text
floor",
```

Mutated replacement:

```text
""
```

### 1550. `src/renderer/perspective/perspectiveRenderer.ts:36` — Survived / StringLiteral

Original:

```text
left")
```

Mutated replacement:

```text
""
```

### 1551. `src/renderer/perspective/perspectiveRenderer.ts:37` — Survived / StringLiteral

Original:

```text
right")
```

Mutated replacement:

```text
""
```

### 1552. `src/renderer/perspective/perspectiveRenderer.ts:40` — Survived / StringLiteral

Original:

```text
left",
```

Mutated replacement:

```text
""
```

### 1553. `src/renderer/perspective/perspectiveRenderer.ts:41` — Survived / StringLiteral

Original:

```text
right",
```

Mutated replacement:

```text
""
```

### 1554. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / ConditionalExpression

Original:

```text
eftKind === "wall" && shouldPlaceSconce(cell.distance, "left"))
```

Mutated replacement:

```text
false
```

### 1555. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / ConditionalExpression

Original:

```text
eftKind === "wall" && shouldPlaceSconce(cell.distance, "left"))
```

Mutated replacement:

```text
true
```

### 1556. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / LogicalOperator

Original:

```text
eftKind === "wall" && shouldPlaceSconce(cell.distance, "left"))
```

Mutated replacement:

```text
leftKind === "wall" || shouldPlaceSconce(cell.distance, "left")
```

### 1557. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / ConditionalExpression

Original:

```text
eftKind === "wall" 
```

Mutated replacement:

```text
true
```

### 1558. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / StringLiteral

Original:

```text
wall" 
```

Mutated replacement:

```text
""
```

### 1559. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / EqualityOperator

Original:

```text
eftKind === "wall" 
```

Mutated replacement:

```text
leftKind !== "wall"
```

### 1560. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / StringLiteral

Original:

```text
left")
```

Mutated replacement:

```text
""
```

### 1561. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / ConditionalExpression

Original:

```text
ightKind === "wall" && shouldPlaceSconce(cell.distance, "right"))
```

Mutated replacement:

```text
true
```

### 1562. `src/renderer/perspective/perspectiveRenderer.ts:42` — Survived / StringLiteral

Original:

```text
left",
```

Mutated replacement:

```text
""
```

### 1563. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / ConditionalExpression

Original:

```text
ightKind === "wall" && shouldPlaceSconce(cell.distance, "right"))
```

Mutated replacement:

```text
false
```

### 1564. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / LogicalOperator

Original:

```text
ightKind === "wall" && shouldPlaceSconce(cell.distance, "right"))
```

Mutated replacement:

```text
rightKind === "wall" || shouldPlaceSconce(cell.distance, "right")
```

### 1565. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / EqualityOperator

Original:

```text
ightKind === "wall" 
```

Mutated replacement:

```text
rightKind !== "wall"
```

### 1566. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / ConditionalExpression

Original:

```text
ightKind === "wall" 
```

Mutated replacement:

```text
true
```

### 1567. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / StringLiteral

Original:

```text
wall" 
```

Mutated replacement:

```text
""
```

### 1568. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
true
```

### 1569. `src/renderer/perspective/perspectiveRenderer.ts:43` — Survived / StringLiteral

Original:

```text
right")
```

Mutated replacement:

```text
""
```

### 1570. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
false
```

### 1571. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / LogicalOperator

Original:

```text
ell.kind !== "passage" && cell.kind !== "open-door")
```

Mutated replacement:

```text
cell.kind !== "passage" || cell.kind !== "open-door"
```

### 1572. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "passage" 
```

Mutated replacement:

```text
true
```

### 1573. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / EqualityOperator

Original:

```text
ell.kind !== "passage" 
```

Mutated replacement:

```text
cell.kind === "passage"
```

### 1574. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / StringLiteral

Original:

```text
passage" 
```

Mutated replacement:

```text
""
```

### 1575. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / ConditionalExpression

Original:

```text
ell.kind !== "open-door")
```

Mutated replacement:

```text
true
```

### 1576. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / EqualityOperator

Original:

```text
ell.kind !== "open-door")
```

Mutated replacement:

```text
cell.kind === "open-door"
```

### 1577. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / StringLiteral

Original:

```text
open-door")
```

Mutated replacement:

```text
""
```

### 1578. `src/renderer/perspective/perspectiveRenderer.ts:44` — Survived / BlockStatement

Original:

```text

      const frame = PORTAL_FRAMES[index + 1];
      addPrimitive(result, state, cell.distance, cell.point, "front", cell.kind, [{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }]);
    }
```

Mutated replacement:

```text
{}
```

### 1579. `src/renderer/perspective/perspectiveRenderer.ts:45` — Survived / ArithmeticOperator

Original:

```text
ndex + 1]
```

Mutated replacement:

```text
index - 1
```

### 1580. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / StringLiteral

Original:

```text
front",
```

Mutated replacement:

```text
""
```

### 1581. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / ArrayDeclaration

Original:

```text
{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }])
```

Mutated replacement:

```text
[]
```

### 1582. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / ObjectLiteral

Original:

```text
 x: frame.left, y: frame.top },
```

Mutated replacement:

```text
{}
```

### 1583. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / ObjectLiteral

Original:

```text
 x: frame.right, y: frame.top },
```

Mutated replacement:

```text
{}
```

### 1584. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / ObjectLiteral

Original:

```text
 x: frame.right, y: frame.bottom },
```

Mutated replacement:

```text
{}
```

### 1585. `src/renderer/perspective/perspectiveRenderer.ts:46` — Survived / ObjectLiteral

Original:

```text
 x: frame.left, y: frame.bottom }]
```

Mutated replacement:

```text
{}
```

### 1586. `src/renderer/perspective/perspectiveRenderer.ts:49` — Survived / ObjectLiteral

Original:

```text
 primitives: result, features };
```

Mutated replacement:

```text
{}
```

### 1587. `src/renderer/perspective/perspectiveRenderer.ts:52` — Survived / BlockStatement

Original:

```text

  return (depth === 1 && surface === "left") || (depth === 3 && surface === "right");
}
```

Mutated replacement:

```text
{}
```

### 1588. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
depth === 1 && surface === "left") || (depth === 3 && surface === "right");
```

Mutated replacement:

```text
true
```

### 1589. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
depth === 1 && surface === "left") || (depth === 3 && surface === "right");
```

Mutated replacement:

```text
false
```

### 1590. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / LogicalOperator

Original:

```text
depth === 1 && surface === "left") || (depth === 3 && surface === "right");
```

Mutated replacement:

```text
depth === 1 && surface === "left" && depth === 3 && surface === "right"
```

### 1591. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
epth === 1 && surface === "left")
```

Mutated replacement:

```text
false
```

### 1592. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / LogicalOperator

Original:

```text
epth === 1 && surface === "left")
```

Mutated replacement:

```text
depth === 1 || surface === "left"
```

### 1593. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
epth === 1 
```

Mutated replacement:

```text
true
```

### 1594. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / EqualityOperator

Original:

```text
epth === 1 
```

Mutated replacement:

```text
depth !== 1
```

### 1595. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
urface === "left")
```

Mutated replacement:

```text
true
```

### 1596. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / EqualityOperator

Original:

```text
urface === "left")
```

Mutated replacement:

```text
surface !== "left"
```

### 1597. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / StringLiteral

Original:

```text
left")
```

Mutated replacement:

```text
""
```

### 1598. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
epth === 3 && surface === "right")
```

Mutated replacement:

```text
false
```

### 1599. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / LogicalOperator

Original:

```text
epth === 3 && surface === "right")
```

Mutated replacement:

```text
depth === 3 || surface === "right"
```

### 1600. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
epth === 3 
```

Mutated replacement:

```text
true
```

### 1601. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / EqualityOperator

Original:

```text
epth === 3 
```

Mutated replacement:

```text
depth !== 3
```

### 1602. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / ConditionalExpression

Original:

```text
urface === "right")
```

Mutated replacement:

```text
true
```

### 1603. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / EqualityOperator

Original:

```text
urface === "right")
```

Mutated replacement:

```text
surface !== "right"
```

### 1604. `src/renderer/perspective/perspectiveRenderer.ts:53` — Survived / StringLiteral

Original:

```text
right")
```

Mutated replacement:

```text
""
```

### 1605. `src/renderer/perspective/perspectiveRenderer.ts:56` — Survived / BlockStatement

Original:

```text

  const center = quad.reduce((point, next) => ({ x: point.x + next.x / 4, y: point.y + next.y / 4 }), { x: 0, y: 0 });
  const inset = quad.map((point) => ({ x: center.x + (point.x - center.x) * 0.5, y: center.y + (point.y - center.y) * 0.55 })) as unknown as PortalQuad;
  return { kind: "torch-sconce", depth, cell, surface, quad: inset, lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[3] };
}
```

Mutated replacement:

```text
{}
```

### 1606. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ArrowFunction

Original:

```text
point, next) => ({ x: point.x + next.x / 4, y: point.y + next.y / 4 }),
```

Mutated replacement:

```text
() => undefined
```

### 1607. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ObjectLiteral

Original:

```text
 x: point.x + next.x / 4, y: point.y + next.y / 4 })
```

Mutated replacement:

```text
{}
```

### 1608. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ArithmeticOperator

Original:

```text
oint.x + next.x / 4,
```

Mutated replacement:

```text
point.x - next.x / 4
```

### 1609. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ArithmeticOperator

Original:

```text
ext.x / 4,
```

Mutated replacement:

```text
next.x * 4
```

### 1610. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ArithmeticOperator

Original:

```text
oint.y + next.y / 4 
```

Mutated replacement:

```text
point.y - next.y / 4
```

### 1611. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ObjectLiteral

Original:

```text
 x: 0, y: 0 })
```

Mutated replacement:

```text
{}
```

### 1612. `src/renderer/perspective/perspectiveRenderer.ts:57` — Survived / ArithmeticOperator

Original:

```text
ext.y / 4 
```

Mutated replacement:

```text
next.y * 4
```

### 1613. `src/renderer/perspective/perspectiveRenderer.ts:59` — Survived / ObjectLiteral

Original:

```text
 kind: "torch-sconce", depth, cell, surface, quad: inset, lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[3] };
```

Mutated replacement:

```text
{}
```

### 1614. `src/renderer/perspective/perspectiveRenderer.ts:59` — Survived / StringLiteral

Original:

```text
torch-sconce",
```

Mutated replacement:

```text
""
```

### 1615. `src/renderer/perspective/perspectiveRenderer.ts:59` — Survived / ArithmeticOperator

Original:

```text
epth - 1]
```

Mutated replacement:

```text
depth + 1
```

### 1616. `src/renderer/perspective/perspectiveRenderer.ts:59` — Survived / LogicalOperator

Original:

```text
EPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[3] 
```

Mutated replacement:

```text
DEPTH_LIGHT_LEVELS[depth - 1] && DEPTH_LIGHT_LEVELS[3]
```

### 1617. `src/renderer/perspective/perspectiveRenderer.ts:62` — Survived / BlockStatement

Original:

```text

  const text = `${state.seed}:${state.floor}:${point.x}:${point.y}:${surface}`;
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  return (hash >>> 0) % 4;
}
```

Mutated replacement:

```text
{}
```

### 1618. `src/renderer/perspective/perspectiveRenderer.ts:63` — Survived / StringLiteral

Original:

```text
${state.seed}:${state.floor}:${point.x}:${point.y}:${surface}`;
```

Mutated replacement:

```text
``
```

### 1619. `src/renderer/perspective/perspectiveRenderer.ts:65` — Survived / ConditionalExpression

Original:

```text
ndex < text.length;
```

Mutated replacement:

```text
false
```

### 1620. `src/renderer/perspective/perspectiveRenderer.ts:65` — Survived / EqualityOperator

Original:

```text
ndex < text.length;
```

Mutated replacement:

```text
index <= text.length
```

### 1621. `src/renderer/perspective/perspectiveRenderer.ts:65` — Survived / EqualityOperator

Original:

```text
ndex < text.length;
```

Mutated replacement:

```text
index >= text.length
```

### 1622. `src/renderer/perspective/perspectiveRenderer.ts:65` — Survived / AssignmentOperator

Original:

```text
ndex += 1)
```

Mutated replacement:

```text
index -= 1
```

### 1623. `src/renderer/perspective/perspectiveRenderer.ts:66` — Survived / ArithmeticOperator

Original:

```text
hash >>> 0) % 4;
```

Mutated replacement:

```text
(hash >>> 0) * 4
```

### 1624. `src/renderer/perspective/perspectiveRenderer.ts:69` — Survived / BlockStatement

Original:

```text

  const variation = stableVariation(state, cell, surface);
  result.push({ geometry: { depth, surface, cell, quad }, kind, material: materialFor(kind, surface, variation), lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1], variation });
}
```

Mutated replacement:

```text
{}
```

### 1625. `src/renderer/perspective/perspectiveRenderer.ts:71` — Survived / ObjectLiteral

Original:

```text
 geometry: { depth, surface, cell, quad }, kind, material: materialFor(kind, surface, variation), lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1], variation })
```

Mutated replacement:

```text
{}
```

### 1626. `src/renderer/perspective/perspectiveRenderer.ts:71` — Survived / ObjectLiteral

Original:

```text
 depth, surface, cell, quad },
```

Mutated replacement:

```text
{}
```

### 1627. `src/renderer/perspective/perspectiveRenderer.ts:71` — Survived / LogicalOperator

Original:

```text
EPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1],
```

Mutated replacement:

```text
DEPTH_LIGHT_LEVELS[depth - 1] && DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1]
```

### 1628. `src/renderer/perspective/perspectiveRenderer.ts:71` — Survived / ArithmeticOperator

Original:

```text
epth - 1]
```

Mutated replacement:

```text
depth + 1
```

### 1629. `src/renderer/perspective/perspectiveRenderer.ts:74` — Survived / BlockStatement

Original:

```text

  return primitives.map(({ geometry, kind, material, lightLevel, variation }) => `${geometry.depth}:${geometry.surface}:${geometry.cell.x},${geometry.cell.y}:${kind}:${material}:${lightLevel}:${variation}:${geometry.quad.map((point) => `${point.x},${point.y}`).join(";")}`).join("|");
}
```

Mutated replacement:

```text
{}
```

### 1630. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / ArrowFunction

Original:

```text
{ geometry, kind, material, lightLevel, variation }) => `${geometry.depth}:${geometry.surface}:${geometry.cell.x},${geometry.cell.y}:${kind}:${material}:${lightLevel}:${variation}:${geometry.quad.map((point) => `${point.x},${point.y}`).join(";")}`)
```

Mutated replacement:

```text
() => undefined
```

### 1631. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / StringLiteral

Original:

```text
${geometry.depth}:${geometry.surface}:${geometry.cell.x},${geometry.cell.y}:${kind}:${material}:${lightLevel}:${variation}:${geometry.quad.map((point) => `${point.x},${point.y}`).join(";")}`)
```

Mutated replacement:

```text
``
```

### 1632. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / ArrowFunction

Original:

```text
point) => `${point.x},${point.y}`)
```

Mutated replacement:

```text
() => undefined
```

### 1633. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / StringLiteral

Original:

```text
${point.x},${point.y}`)
```

Mutated replacement:

```text
``
```

### 1634. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / StringLiteral

Original:

```text
;")
```

Mutated replacement:

```text
""
```

### 1635. `src/renderer/perspective/perspectiveRenderer.ts:75` — Survived / StringLiteral

Original:

```text
|")
```

Mutated replacement:

```text
""
```

### 1636. `src/renderer/meshGeometry.ts:11` — NoCoverage / StringLiteral

Original:

```text
Missing dungeon atlas region for ${material}`)
```

Mutated replacement:

```text
``
```

### 1637. `src/renderer/meshGeometry.ts:10` — Survived / ConditionalExpression

Original:

```text
d === atlasRegion)
```

Mutated replacement:

```text
true
```

### 1638. `src/renderer/meshGeometry.ts:10` — Survived / ArrowFunction

Original:

```text
{ id }) => id === atlasRegion)
```

Mutated replacement:

```text
() => undefined
```

### 1639. `src/renderer/meshGeometry.ts:8` — Survived / BlockStatement

Original:

```text

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
```

Mutated replacement:

```text
{}
```

### 1640. `src/renderer/meshGeometry.ts:10` — Survived / ConditionalExpression

Original:

```text
d === atlasRegion)
```

Mutated replacement:

```text
false
```

### 1641. `src/renderer/meshGeometry.ts:11` — Survived / BooleanLiteral

Original:

```text
region)
```

Mutated replacement:

```text
region
```

### 1642. `src/renderer/meshGeometry.ts:10` — Survived / EqualityOperator

Original:

```text
d === atlasRegion)
```

Mutated replacement:

```text
id !== atlasRegion
```

### 1643. `src/renderer/meshGeometry.ts:11` — Survived / ConditionalExpression

Original:

```text
region)
```

Mutated replacement:

```text
true
```

### 1644. `src/renderer/meshGeometry.ts:11` — Survived / ConditionalExpression

Original:

```text
region)
```

Mutated replacement:

```text
false
```

### 1645. `src/renderer/meshGeometry.ts:13` — Survived / ArithmeticOperator

Original:

```text
region.x + inset) / DUNGEON_SURFACE_ATLAS.width;
```

Mutated replacement:

```text
(region.x + inset) * DUNGEON_SURFACE_ATLAS.width
```

### 1646. `src/renderer/meshGeometry.ts:13` — Survived / ArithmeticOperator

Original:

```text
egion.x + inset)
```

Mutated replacement:

```text
region.x - inset
```

### 1647. `src/renderer/meshGeometry.ts:14` — Survived / ArithmeticOperator

Original:

```text
region.x + region.width - inset) / DUNGEON_SURFACE_ATLAS.width;
```

Mutated replacement:

```text
(region.x + region.width - inset) * DUNGEON_SURFACE_ATLAS.width
```

### 1648. `src/renderer/meshGeometry.ts:14` — Survived / ArithmeticOperator

Original:

```text
egion.x + region.width - inset)
```

Mutated replacement:

```text
region.x + region.width + inset
```

### 1649. `src/renderer/meshGeometry.ts:14` — Survived / ArithmeticOperator

Original:

```text
egion.x + region.width 
```

Mutated replacement:

```text
region.x - region.width
```

### 1650. `src/renderer/meshGeometry.ts:15` — Survived / ArithmeticOperator

Original:

```text
region.y + inset) / DUNGEON_SURFACE_ATLAS.height;
```

Mutated replacement:

```text
(region.y + inset) * DUNGEON_SURFACE_ATLAS.height
```

### 1651. `src/renderer/meshGeometry.ts:15` — Survived / ArithmeticOperator

Original:

```text
egion.y + inset)
```

Mutated replacement:

```text
region.y - inset
```

### 1652. `src/renderer/meshGeometry.ts:16` — Survived / ArithmeticOperator

Original:

```text
egion.y + region.height - inset)
```

Mutated replacement:

```text
region.y + region.height + inset
```

### 1653. `src/renderer/meshGeometry.ts:16` — Survived / ArithmeticOperator

Original:

```text
region.y + region.height - inset) / DUNGEON_SURFACE_ATLAS.height;
```

Mutated replacement:

```text
(region.y + region.height - inset) * DUNGEON_SURFACE_ATLAS.height
```

### 1654. `src/renderer/meshGeometry.ts:16` — Survived / ArithmeticOperator

Original:

```text
egion.y + region.height 
```

Mutated replacement:

```text
region.y - region.height
```

### 1655. `src/renderer/meshGeometry.ts:17` — Survived / ArrayDeclaration

Original:

```text
[left, top], [right, top], [right, bottom], [left, bottom]];
```

Mutated replacement:

```text
[]
```

### 1656. `src/renderer/meshGeometry.ts:17` — Survived / ArrayDeclaration

Original:

```text
left, top],
```

Mutated replacement:

```text
[]
```

### 1657. `src/renderer/meshGeometry.ts:17` — Survived / ArrayDeclaration

Original:

```text
right, top],
```

Mutated replacement:

```text
[]
```

### 1658. `src/renderer/meshGeometry.ts:17` — Survived / ArrayDeclaration

Original:

```text
right, bottom],
```

Mutated replacement:

```text
[]
```

### 1659. `src/renderer/meshGeometry.ts:17` — Survived / ArrayDeclaration

Original:

```text
left, bottom]]
```

Mutated replacement:

```text
[]
```

### 1660. `src/renderer/meshGeometry.ts:20` — Survived / BlockStatement

Original:

```text

  const uv = atlasUvQuad(material);
  return quad.flatMap((point: PortalPoint, index) => [point.x, point.y, uv[index][0], uv[index][1]]);
}
```

Mutated replacement:

```text
{}
```

### 1661. `src/renderer/meshGeometry.ts:22` — Survived / ArrowFunction

Original:

```text
point: PortalPoint, index) => [point.x, point.y, uv[index][0], uv[index][1]])
```

Mutated replacement:

```text
() => undefined
```

### 1662. `src/renderer/meshGeometry.ts:22` — Survived / ArrayDeclaration

Original:

```text
point.x, point.y, uv[index][0], uv[index][1]])
```

Mutated replacement:

```text
[]
```

### 1663. `src/input/bindings.ts:31` — NoCoverage / StringLiteral

Original:

```text
equipSelectedLeft";
```

Mutated replacement:

```text
""
```

### 1664. `src/input/bindings.ts:32` — NoCoverage / StringLiteral

Original:

```text
equipSelectedRight";
```

Mutated replacement:

```text
""
```

### 1665. `src/input/bindings.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
indings.inventoryPrevious.includes(code))
```

Mutated replacement:

```text
true
```

### 1666. `src/input/bindings.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
indings.inventoryPrevious.includes(code))
```

Mutated replacement:

```text
false
```

### 1667. `src/input/bindings.ts:36` — NoCoverage / StringLiteral

Original:

```text
rotateInventoryPrevious";
```

Mutated replacement:

```text
""
```

### 1668. `src/input/bindings.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
indings.inventoryNext.includes(code))
```

Mutated replacement:

```text
true
```

### 1669. `src/input/bindings.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
indings.inventoryNext.includes(code))
```

Mutated replacement:

```text
false
```

### 1670. `src/input/bindings.ts:37` — NoCoverage / StringLiteral

Original:

```text
rotateInventoryNext";
```

Mutated replacement:

```text
""
```

### 1671. `src/input/bindings.ts:38` — NoCoverage / ConditionalExpression

Original:

```text
indings.pickup.includes(code))
```

Mutated replacement:

```text
true
```

### 1672. `src/input/bindings.ts:38` — NoCoverage / ConditionalExpression

Original:

```text
indings.pickup.includes(code))
```

Mutated replacement:

```text
false
```

### 1673. `src/input/bindings.ts:38` — NoCoverage / StringLiteral

Original:

```text
pickup";
```

Mutated replacement:

```text
""
```

### 1674. `src/input/bindings.ts:39` — NoCoverage / ConditionalExpression

Original:

```text
indings.drop.includes(code))
```

Mutated replacement:

```text
true
```

### 1675. `src/input/bindings.ts:39` — NoCoverage / ConditionalExpression

Original:

```text
indings.drop.includes(code))
```

Mutated replacement:

```text
false
```

### 1676. `src/input/bindings.ts:39` — NoCoverage / StringLiteral

Original:

```text
dropSelected";
```

Mutated replacement:

```text
""
```

### 1677. `src/input/bindings.ts:29` — Survived / BlockStatement

Original:

```text

    if (bindings[command].includes(code)) {
      if (command === "equipLeft") return "equipSelectedLeft";
      if (command === "equipRight") return "equipSelectedRight";
      return command;
    }
  }
```

Mutated replacement:

```text
{}
```

### 1678. `src/input/bindings.ts:28` — Survived / BlockStatement

Original:

```text

  for (const command of ["moveForward", "moveBackward", "turnLeft", "turnRight", "attackLeft", "attackRight", "useSelected", "equipLeft", "equipRight"] as const) {
    if (bindings[command].includes(code)) {
      if (command === "equipLeft") return "equipSelectedLeft";
      if (command === "equipRight") return "equipSelectedRight";
      return command;
    }
  }
  if (bindings.inventoryPrevious.includes(code)) return "rotateInventoryPrevious";
  if (bindings.inventoryNext.includes(code)) return "rotateInventoryNext";
  if (bindings.pickup.includes(code)) return "pickup";
  if (bindings.drop.includes(code)) return "dropSelected";
  return null;
}
```

Mutated replacement:

```text
{}
```

### 1679. `src/input/bindings.ts:30` — Survived / ConditionalExpression

Original:

```text
indings[command].includes(code))
```

Mutated replacement:

```text
true
```

### 1680. `src/input/bindings.ts:30` — Survived / ConditionalExpression

Original:

```text
indings[command].includes(code))
```

Mutated replacement:

```text
false
```

### 1681. `src/input/bindings.ts:30` — Survived / BlockStatement

Original:

```text

      if (command === "equipLeft") return "equipSelectedLeft";
      if (command === "equipRight") return "equipSelectedRight";
      return command;
    }
```

Mutated replacement:

```text
{}
```

### 1682. `src/input/bindings.ts:31` — Survived / ConditionalExpression

Original:

```text
ommand === "equipLeft")
```

Mutated replacement:

```text
true
```

### 1683. `src/input/bindings.ts:31` — Survived / ConditionalExpression

Original:

```text
ommand === "equipLeft")
```

Mutated replacement:

```text
false
```

### 1684. `src/input/bindings.ts:31` — Survived / EqualityOperator

Original:

```text
ommand === "equipLeft")
```

Mutated replacement:

```text
command !== "equipLeft"
```

### 1685. `src/input/bindings.ts:31` — Survived / StringLiteral

Original:

```text
equipLeft")
```

Mutated replacement:

```text
""
```

### 1686. `src/input/bindings.ts:32` — Survived / ConditionalExpression

Original:

```text
ommand === "equipRight")
```

Mutated replacement:

```text
true
```

### 1687. `src/input/bindings.ts:32` — Survived / ConditionalExpression

Original:

```text
ommand === "equipRight")
```

Mutated replacement:

```text
false
```

### 1688. `src/input/bindings.ts:32` — Survived / EqualityOperator

Original:

```text
ommand === "equipRight")
```

Mutated replacement:

```text
command !== "equipRight"
```

### 1689. `src/input/bindings.ts:32` — Survived / StringLiteral

Original:

```text
equipRight")
```

Mutated replacement:

```text
""
```

### 1690. `src/input/bindings.ts:43` — Survived / BlockStatement

Original:

```text

  return bindings.pause.includes(code);
}
```

Mutated replacement:

```text
{}
```

### 1691. `src/input/bindings.ts:20` — Survived / ObjectLiteral

Original:

```text

  moveForward: ["KeyW", "ArrowUp"], moveBackward: ["KeyS", "ArrowDown"],
  turnLeft: ["KeyA", "ArrowLeft"], turnRight: ["KeyD", "ArrowRight"],
  inventoryPrevious: ["KeyQ"], inventoryNext: ["KeyE"], pause: ["Escape"], attackLeft: ["Space"], attackRight: ["KeyF"], useSelected: ["KeyR"], equipLeft: ["KeyZ"], equipRight: ["KeyX"], pickup: ["KeyP"], drop: ["Backspace"]
};
```

Mutated replacement:

```text
{}
```

### 1692. `src/input/bindings.ts:21` — Survived / ArrayDeclaration

Original:

```text
"KeyW", "ArrowUp"],
```

Mutated replacement:

```text
[]
```

### 1693. `src/input/bindings.ts:21` — Survived / StringLiteral

Original:

```text
KeyW",
```

Mutated replacement:

```text
""
```

### 1694. `src/input/bindings.ts:21` — Survived / StringLiteral

Original:

```text
ArrowUp"]
```

Mutated replacement:

```text
""
```

### 1695. `src/input/bindings.ts:21` — Survived / StringLiteral

Original:

```text
KeyS",
```

Mutated replacement:

```text
""
```

### 1696. `src/input/bindings.ts:21` — Survived / ArrayDeclaration

Original:

```text
"KeyS", "ArrowDown"],
```

Mutated replacement:

```text
[]
```

### 1697. `src/input/bindings.ts:21` — Survived / StringLiteral

Original:

```text
ArrowDown"]
```

Mutated replacement:

```text
""
```

### 1698. `src/input/bindings.ts:22` — Survived / ArrayDeclaration

Original:

```text
"KeyA", "ArrowLeft"],
```

Mutated replacement:

```text
[]
```

### 1699. `src/input/bindings.ts:22` — Survived / StringLiteral

Original:

```text
KeyA",
```

Mutated replacement:

```text
""
```

### 1700. `src/input/bindings.ts:22` — Survived / StringLiteral

Original:

```text
ArrowLeft"]
```

Mutated replacement:

```text
""
```

### 1701. `src/input/bindings.ts:22` — Survived / ArrayDeclaration

Original:

```text
"KeyD", "ArrowRight"],
```

Mutated replacement:

```text
[]
```

### 1702. `src/input/bindings.ts:22` — Survived / StringLiteral

Original:

```text
KeyD",
```

Mutated replacement:

```text
""
```

### 1703. `src/input/bindings.ts:22` — Survived / StringLiteral

Original:

```text
ArrowRight"]
```

Mutated replacement:

```text
""
```

### 1704. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyQ"],
```

Mutated replacement:

```text
[]
```

### 1705. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyQ"]
```

Mutated replacement:

```text
""
```

### 1706. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyE"],
```

Mutated replacement:

```text
[]
```

### 1707. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyE"]
```

Mutated replacement:

```text
""
```

### 1708. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"Escape"],
```

Mutated replacement:

```text
[]
```

### 1709. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
Escape"]
```

Mutated replacement:

```text
""
```

### 1710. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"Space"],
```

Mutated replacement:

```text
[]
```

### 1711. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyF"],
```

Mutated replacement:

```text
[]
```

### 1712. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
Space"]
```

Mutated replacement:

```text
""
```

### 1713. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyF"]
```

Mutated replacement:

```text
""
```

### 1714. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyR"],
```

Mutated replacement:

```text
[]
```

### 1715. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyR"]
```

Mutated replacement:

```text
""
```

### 1716. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyZ"],
```

Mutated replacement:

```text
[]
```

### 1717. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyZ"]
```

Mutated replacement:

```text
""
```

### 1718. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyX"],
```

Mutated replacement:

```text
[]
```

### 1719. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyX"]
```

Mutated replacement:

```text
""
```

### 1720. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"KeyP"],
```

Mutated replacement:

```text
[]
```

### 1721. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
KeyP"]
```

Mutated replacement:

```text
""
```

### 1722. `src/input/bindings.ts:23` — Survived / ArrayDeclaration

Original:

```text
"Backspace"]
```

Mutated replacement:

```text
[]
```

### 1723. `src/input/bindings.ts:23` — Survived / StringLiteral

Original:

```text
Backspace"]
```

Mutated replacement:

```text
""
```

### 1724. `src/input/input-controller.ts:22` — NoCoverage / BlockStatement

Original:

```text
 this.target.removeEventListener("keydown", this.onKeyDownBound); }
```

Mutated replacement:

```text
{}
```

### 1725. `src/input/input-controller.ts:22` — NoCoverage / StringLiteral

Original:

```text
keydown",
```

Mutated replacement:

```text
""
```

### 1726. `src/input/input-controller.ts:26` — NoCoverage / BlockStatement

Original:

```text
 event.preventDefault(); this.togglePause(); return; }
```

Mutated replacement:

```text
{}
```

### 1727. `src/input/input-controller.ts:26` — NoCoverage / CallExpression

Original:

```text
vent.preventDefault(); 
```

Mutated replacement:

```text
;
```

### 1728. `src/input/input-controller.ts:26` — NoCoverage / CallExpression

Original:

```text
his.togglePause(); 
```

Mutated replacement:

```text
;
```

### 1729. `src/input/input-controller.ts:15` — Survived / ArrowFunction

Original:

```text
event: KeyboardEvent): void => this.onKeyDown(event);
```

Mutated replacement:

```text
() => undefined
```

### 1730. `src/input/input-controller.ts:17` — Survived / BlockStatement

Original:

```text

    this.target = options.target; this.bindings = options.bindings ?? DEFAULT_KEY_BINDINGS;
    this.emit = options.emit; this.togglePause = options.togglePause; this.getMode = options.getMode;
  }
```

Mutated replacement:

```text
{}
```

### 1731. `src/input/input-controller.ts:18` — Survived / LogicalOperator

Original:

```text
ptions.bindings ?? DEFAULT_KEY_BINDINGS;
```

Mutated replacement:

```text
options.bindings && DEFAULT_KEY_BINDINGS
```

### 1732. `src/input/input-controller.ts:21` — Survived / BlockStatement

Original:

```text
 this.target.addEventListener("keydown", this.onKeyDownBound); }
```

Mutated replacement:

```text
{}
```

### 1733. `src/input/input-controller.ts:21` — Survived / StringLiteral

Original:

```text
keydown",
```

Mutated replacement:

```text
""
```

### 1734. `src/input/input-controller.ts:23` — Survived / BlockStatement

Original:

```text

    const target = event.target as HTMLElement | null;
    if (target && FORM_TAGS.has(target.tagName)) return;
    if (isPauseKey(event.code, this.bindings)) { event.preventDefault(); this.togglePause(); return; }
    if (this.getMode() !== "active") return;
    if (event.repeat) { event.preventDefault(); return; }
    const command = commandForKey(event.code, this.bindings);
    if (!command) return;
    event.preventDefault();
    this.emit(command);
  }
```

Mutated replacement:

```text
{}
```

### 1735. `src/input/input-controller.ts:25` — Survived / ConditionalExpression

Original:

```text
arget && FORM_TAGS.has(target.tagName))
```

Mutated replacement:

```text
true
```

### 1736. `src/input/input-controller.ts:25` — Survived / LogicalOperator

Original:

```text
arget && FORM_TAGS.has(target.tagName))
```

Mutated replacement:

```text
target || FORM_TAGS.has(target.tagName)
```

### 1737. `src/input/input-controller.ts:25` — Survived / ConditionalExpression

Original:

```text
arget && FORM_TAGS.has(target.tagName))
```

Mutated replacement:

```text
false
```

### 1738. `src/input/input-controller.ts:26` — Survived / ConditionalExpression

Original:

```text
sPauseKey(event.code, this.bindings))
```

Mutated replacement:

```text
true
```

### 1739. `src/input/input-controller.ts:26` — Survived / ConditionalExpression

Original:

```text
sPauseKey(event.code, this.bindings))
```

Mutated replacement:

```text
false
```

### 1740. `src/input/input-controller.ts:27` — Survived / ConditionalExpression

Original:

```text
his.getMode() !== "active")
```

Mutated replacement:

```text
true
```

### 1741. `src/input/input-controller.ts:27` — Survived / ConditionalExpression

Original:

```text
his.getMode() !== "active")
```

Mutated replacement:

```text
false
```

### 1742. `src/input/input-controller.ts:27` — Survived / EqualityOperator

Original:

```text
his.getMode() !== "active")
```

Mutated replacement:

```text
this.getMode() === "active"
```

### 1743. `src/input/input-controller.ts:27` — Survived / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 1744. `src/input/input-controller.ts:28` — Survived / ConditionalExpression

Original:

```text
vent.repeat)
```

Mutated replacement:

```text
true
```

### 1745. `src/input/input-controller.ts:28` — Survived / ConditionalExpression

Original:

```text
vent.repeat)
```

Mutated replacement:

```text
false
```

### 1746. `src/input/input-controller.ts:28` — Survived / CallExpression

Original:

```text
vent.preventDefault(); 
```

Mutated replacement:

```text
;
```

### 1747. `src/input/input-controller.ts:28` — Survived / BlockStatement

Original:

```text
 event.preventDefault(); return; }
```

Mutated replacement:

```text
{}
```

### 1748. `src/input/input-controller.ts:30` — Survived / BooleanLiteral

Original:

```text
command)
```

Mutated replacement:

```text
command
```

### 1749. `src/input/input-controller.ts:30` — Survived / ConditionalExpression

Original:

```text
command)
```

Mutated replacement:

```text
true
```

### 1750. `src/input/input-controller.ts:30` — Survived / ConditionalExpression

Original:

```text
command)
```

Mutated replacement:

```text
false
```

### 1751. `src/input/input-controller.ts:31` — Survived / CallExpression

Original:

```text
vent.preventDefault();
```

Mutated replacement:

```text
;
```

### 1752. `src/input/input-controller.ts:32` — Survived / CallExpression

Original:

```text
his.emit(command);
```

Mutated replacement:

```text
;
```

### 1753. `src/input/input-controller.ts:7` — Survived / ArrayDeclaration

Original:

```text
"INPUT", "TEXTAREA", "SELECT"])
```

Mutated replacement:

```text
[]
```

### 1754. `src/input/input-controller.ts:7` — Survived / StringLiteral

Original:

```text
INPUT",
```

Mutated replacement:

```text
""
```

### 1755. `src/input/input-controller.ts:7` — Survived / StringLiteral

Original:

```text
TEXTAREA",
```

Mutated replacement:

```text
""
```

### 1756. `src/input/input-controller.ts:7` — Survived / StringLiteral

Original:

```text
SELECT"]
```

Mutated replacement:

```text
""
```

### 1757. `src/content/registry.ts:13` — NoCoverage / StringLiteral

Original:

```text
invalid item attack: ${item.id}`)
```

Mutated replacement:

```text
``
```

### 1758. `src/content/registry.ts:15` — NoCoverage / StringLiteral

Original:

```text
duplicate monster id: ${monster.id}`)
```

Mutated replacement:

```text
``
```

### 1759. `src/content/registry.ts:16` — NoCoverage / ConditionalExpression

Original:

```text
ntry.quantity <= 0)
```

Mutated replacement:

```text
true
```

### 1760. `src/content/registry.ts:16` — NoCoverage / EqualityOperator

Original:

```text
ntry.quantity <= 0)
```

Mutated replacement:

```text
entry.quantity < 0
```

### 1761. `src/content/registry.ts:16` — NoCoverage / EqualityOperator

Original:

```text
ntry.quantity <= 0)
```

Mutated replacement:

```text
entry.quantity > 0
```

### 1762. `src/content/registry.ts:19` — NoCoverage / StringLiteral

Original:

```text
; ")
```

Mutated replacement:

```text
""
```

### 1763. `src/content/registry.ts:13` — Survived / StringLiteral

Original:

```text
duplicate item id: ${item.id}`)
```

Mutated replacement:

```text
``
```

### 1764. `src/content/registry.ts:11` — Survived / BlockStatement

Original:

```text

  const errors: string[] = []; const itemIds = new Set<string>();
  for (const item of registry.items) { if (itemIds.has(item.id)) errors.push(`duplicate item id: ${item.id}`); itemIds.add(item.id); if (item.attack !== undefined && item.attack < 0) errors.push(`invalid item attack: ${item.id}`); }
  const monsterIds = new Set<string>();
  for (const monster of registry.monsters) { if (monsterIds.has(monster.id)) errors.push(`duplicate monster id: ${monster.id}`); monsterIds.add(monster.id); if (monster.vitality <= 0 || monster.attack < 0 || monster.defense < 0) errors.push(`invalid monster range: ${monster.id}`); if (!registry.lootTables[monster.lootTableId]) errors.push(`missing loot table: ${monster.lootTableId}`); }
  for (const [tableId, table] of Object.entries(registry.lootTables)) for (const entry of table) { if (!registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId)) errors.push(`missing loot item: ${tableId}/${entry.itemId}`); if (!Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0)) errors.push(`malformed loot entry: ${tableId}/${entry.itemId}`); }
  return errors;
}
```

Mutated replacement:

```text
{}
```

### 1765. `src/content/registry.ts:12` — Survived / ArrayDeclaration

Original:

```text
];
```

Mutated replacement:

```text
["Stryker was here"]
```

### 1766. `src/content/registry.ts:13` — Survived / BlockStatement

Original:

```text
 if (itemIds.has(item.id)) errors.push(`duplicate item id: ${item.id}`); itemIds.add(item.id); if (item.attack !== undefined && item.attack < 0) errors.push(`invalid item attack: ${item.id}`); }
```

Mutated replacement:

```text
{}
```

### 1767. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
temIds.has(item.id))
```

Mutated replacement:

```text
false
```

### 1768. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
temIds.has(item.id))
```

Mutated replacement:

```text
true
```

### 1769. `src/content/registry.ts:13` — Survived / CallExpression

Original:

```text
temIds.add(item.id); 
```

Mutated replacement:

```text
;
```

### 1770. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.attack !== undefined && item.attack < 0)
```

Mutated replacement:

```text
true
```

### 1771. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.attack !== undefined && item.attack < 0)
```

Mutated replacement:

```text
false
```

### 1772. `src/content/registry.ts:13` — Survived / LogicalOperator

Original:

```text
tem.attack !== undefined && item.attack < 0)
```

Mutated replacement:

```text
item.attack !== undefined || item.attack < 0
```

### 1773. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.attack !== undefined 
```

Mutated replacement:

```text
true
```

### 1774. `src/content/registry.ts:13` — Survived / EqualityOperator

Original:

```text
tem.attack !== undefined 
```

Mutated replacement:

```text
item.attack === undefined
```

### 1775. `src/content/registry.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.attack < 0)
```

Mutated replacement:

```text
true
```

### 1776. `src/content/registry.ts:13` — Survived / EqualityOperator

Original:

```text
tem.attack < 0)
```

Mutated replacement:

```text
item.attack <= 0
```

### 1777. `src/content/registry.ts:13` — Survived / EqualityOperator

Original:

```text
tem.attack < 0)
```

Mutated replacement:

```text
item.attack >= 0
```

### 1778. `src/content/registry.ts:15` — Survived / BlockStatement

Original:

```text
 if (monsterIds.has(monster.id)) errors.push(`duplicate monster id: ${monster.id}`); monsterIds.add(monster.id); if (monster.vitality <= 0 || monster.attack < 0 || monster.defense < 0) errors.push(`invalid monster range: ${monster.id}`); if (!registry.lootTables[monster.lootTableId]) errors.push(`missing loot table: ${monster.lootTableId}`); }
```

Mutated replacement:

```text
{}
```

### 1779. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onsterIds.has(monster.id))
```

Mutated replacement:

```text
true
```

### 1780. `src/content/registry.ts:15` — Survived / CallExpression

Original:

```text
onsterIds.add(monster.id); 
```

Mutated replacement:

```text
;
```

### 1781. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onsterIds.has(monster.id))
```

Mutated replacement:

```text
false
```

### 1782. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.vitality <= 0 || monster.attack < 0 || monster.defense < 0)
```

Mutated replacement:

```text
true
```

### 1783. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.vitality <= 0 || monster.attack < 0 || monster.defense < 0)
```

Mutated replacement:

```text
false
```

### 1784. `src/content/registry.ts:15` — Survived / LogicalOperator

Original:

```text
onster.vitality <= 0 || monster.attack < 0 || monster.defense < 0)
```

Mutated replacement:

```text
(monster.vitality <= 0 || monster.attack < 0) && monster.defense < 0
```

### 1785. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.vitality <= 0 || monster.attack < 0 
```

Mutated replacement:

```text
false
```

### 1786. `src/content/registry.ts:15` — Survived / LogicalOperator

Original:

```text
onster.vitality <= 0 || monster.attack < 0 
```

Mutated replacement:

```text
monster.vitality <= 0 && monster.attack < 0
```

### 1787. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.vitality <= 0 
```

Mutated replacement:

```text
monster.vitality < 0
```

### 1788. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.vitality <= 0 
```

Mutated replacement:

```text
monster.vitality > 0
```

### 1789. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.vitality <= 0 
```

Mutated replacement:

```text
false
```

### 1790. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.attack < 0 
```

Mutated replacement:

```text
false
```

### 1791. `src/content/registry.ts:15` — Survived / StringLiteral

Original:

```text
invalid monster range: ${monster.id}`)
```

Mutated replacement:

```text
``
```

### 1792. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.attack < 0 
```

Mutated replacement:

```text
monster.attack <= 0
```

### 1793. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.attack < 0 
```

Mutated replacement:

```text
monster.attack >= 0
```

### 1794. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
onster.defense < 0)
```

Mutated replacement:

```text
false
```

### 1795. `src/content/registry.ts:15` — Survived / StringLiteral

Original:

```text
missing loot table: ${monster.lootTableId}`)
```

Mutated replacement:

```text
``
```

### 1796. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.defense < 0)
```

Mutated replacement:

```text
monster.defense <= 0
```

### 1797. `src/content/registry.ts:15` — Survived / EqualityOperator

Original:

```text
onster.defense < 0)
```

Mutated replacement:

```text
monster.defense >= 0
```

### 1798. `src/content/registry.ts:15` — Survived / BooleanLiteral

Original:

```text
registry.lootTables[monster.lootTableId])
```

Mutated replacement:

```text
registry.lootTables[monster.lootTableId]
```

### 1799. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
registry.lootTables[monster.lootTableId])
```

Mutated replacement:

```text
true
```

### 1800. `src/content/registry.ts:15` — Survived / ConditionalExpression

Original:

```text
registry.lootTables[monster.lootTableId])
```

Mutated replacement:

```text
false
```

### 1801. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId))
```

Mutated replacement:

```text
true
```

### 1802. `src/content/registry.ts:16` — Survived / BlockStatement

Original:

```text
 if (!registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId)) errors.push(`missing loot item: ${tableId}/${entry.itemId}`); if (!Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0)) errors.push(`malformed loot entry: ${tableId}/${entry.itemId}`); }
```

Mutated replacement:

```text
{}
```

### 1803. `src/content/registry.ts:16` — Survived / LogicalOperator

Original:

```text
registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId))
```

Mutated replacement:

```text
!registry.items.some(item => item.id === entry.itemId) && !itemById(entry.itemId)
```

### 1804. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId))
```

Mutated replacement:

```text
false
```

### 1805. `src/content/registry.ts:16` — Survived / BooleanLiteral

Original:

```text
registry.items.some((item) => item.id === entry.itemId) 
```

Mutated replacement:

```text
registry.items.some(item => item.id === entry.itemId)
```

### 1806. `src/content/registry.ts:16` — Survived / MethodExpression

Original:

```text
egistry.items.some((item) => item.id === entry.itemId) 
```

Mutated replacement:

```text
registry.items.every(item => item.id === entry.itemId)
```

### 1807. `src/content/registry.ts:16` — Survived / StringLiteral

Original:

```text
missing loot item: ${tableId}/${entry.itemId}`)
```

Mutated replacement:

```text
``
```

### 1808. `src/content/registry.ts:16` — Survived / ArrowFunction

Original:

```text
item) => item.id === entry.itemId)
```

Mutated replacement:

```text
() => undefined
```

### 1809. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
tem.id === entry.itemId)
```

Mutated replacement:

```text
true
```

### 1810. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
tem.id === entry.itemId)
```

Mutated replacement:

```text
false
```

### 1811. `src/content/registry.ts:16` — Survived / EqualityOperator

Original:

```text
tem.id === entry.itemId)
```

Mutated replacement:

```text
item.id !== entry.itemId
```

### 1812. `src/content/registry.ts:16` — Survived / BooleanLiteral

Original:

```text
itemById(entry.itemId))
```

Mutated replacement:

```text
itemById(entry.itemId)
```

### 1813. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0))
```

Mutated replacement:

```text
true
```

### 1814. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0))
```

Mutated replacement:

```text
false
```

### 1815. `src/content/registry.ts:16` — Survived / LogicalOperator

Original:

```text
Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0))
```

Mutated replacement:

```text
(!Number.isFinite(entry.weight) || entry.weight <= 0) && entry.quantity !== undefined && entry.quantity <= 0
```

### 1816. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
Number.isFinite(entry.weight) || entry.weight <= 0 
```

Mutated replacement:

```text
false
```

### 1817. `src/content/registry.ts:16` — Survived / LogicalOperator

Original:

```text
Number.isFinite(entry.weight) || entry.weight <= 0 
```

Mutated replacement:

```text
!Number.isFinite(entry.weight) && entry.weight <= 0
```

### 1818. `src/content/registry.ts:16` — Survived / BooleanLiteral

Original:

```text
Number.isFinite(entry.weight) 
```

Mutated replacement:

```text
Number.isFinite(entry.weight)
```

### 1819. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
ntry.weight <= 0 
```

Mutated replacement:

```text
false
```

### 1820. `src/content/registry.ts:16` — Survived / EqualityOperator

Original:

```text
ntry.weight <= 0 
```

Mutated replacement:

```text
entry.weight < 0
```

### 1821. `src/content/registry.ts:16` — Survived / EqualityOperator

Original:

```text
ntry.weight <= 0 
```

Mutated replacement:

```text
entry.weight > 0
```

### 1822. `src/content/registry.ts:16` — Survived / StringLiteral

Original:

```text
malformed loot entry: ${tableId}/${entry.itemId}`)
```

Mutated replacement:

```text
``
```

### 1823. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
ntry.quantity !== undefined && entry.quantity <= 0)
```

Mutated replacement:

```text
false
```

### 1824. `src/content/registry.ts:16` — Survived / LogicalOperator

Original:

```text
ntry.quantity !== undefined && entry.quantity <= 0)
```

Mutated replacement:

```text
entry.quantity !== undefined || entry.quantity <= 0
```

### 1825. `src/content/registry.ts:16` — Survived / ConditionalExpression

Original:

```text
ntry.quantity !== undefined 
```

Mutated replacement:

```text
true
```

### 1826. `src/content/registry.ts:19` — Survived / BlockStatement

Original:

```text
 const errors = validateContent(registry); if (errors.length) throw new Error(errors.join("; ")); }
```

Mutated replacement:

```text
{}
```

### 1827. `src/content/registry.ts:16` — Survived / EqualityOperator

Original:

```text
ntry.quantity !== undefined 
```

Mutated replacement:

```text
entry.quantity === undefined
```

### 1828. `src/content/registry.ts:19` — Survived / ConditionalExpression

Original:

```text
rrors.length)
```

Mutated replacement:

```text
true
```

### 1829. `src/content/registry.ts:19` — Survived / ConditionalExpression

Original:

```text
rrors.length)
```

Mutated replacement:

```text
false
```

### 1830. `src/content/registry.ts:5` — Survived / ArrayDeclaration

Original:

```text
{ itemId: "star-forged-seal", weight: 1 }],
```

Mutated replacement:

```text
[]
```

### 1831. `src/content/registry.ts:4` — Survived / ObjectLiteral

Original:

```text

  "warden-cache": [{ itemId: "star-forged-seal", weight: 1 }],
  "mireling-cache": [{ itemId: "moss-tonic", weight: 2 }, { itemId: "rimeglass-knife", weight: 1 }],
  "scavenger-cache": [{ itemId: "ashen-mail", weight: 1 }, { itemId: "moss-tonic", weight: 2 }, { itemId: "rimeglass-knife", weight: 1 }]
};
```

Mutated replacement:

```text
{}
```

### 1832. `src/content/registry.ts:5` — Survived / ObjectLiteral

Original:

```text
 itemId: "star-forged-seal", weight: 1 }]
```

Mutated replacement:

```text
{}
```

### 1833. `src/content/registry.ts:5` — Survived / StringLiteral

Original:

```text
star-forged-seal",
```

Mutated replacement:

```text
""
```

### 1834. `src/content/registry.ts:6` — Survived / ArrayDeclaration

Original:

```text
{ itemId: "moss-tonic", weight: 2 }, { itemId: "rimeglass-knife", weight: 1 }],
```

Mutated replacement:

```text
[]
```

### 1835. `src/content/registry.ts:6` — Survived / ObjectLiteral

Original:

```text
 itemId: "moss-tonic", weight: 2 },
```

Mutated replacement:

```text
{}
```

### 1836. `src/content/registry.ts:6` — Survived / StringLiteral

Original:

```text
moss-tonic",
```

Mutated replacement:

```text
""
```

### 1837. `src/content/registry.ts:6` — Survived / ObjectLiteral

Original:

```text
 itemId: "rimeglass-knife", weight: 1 }]
```

Mutated replacement:

```text
{}
```

### 1838. `src/content/registry.ts:6` — Survived / StringLiteral

Original:

```text
rimeglass-knife",
```

Mutated replacement:

```text
""
```

### 1839. `src/content/registry.ts:7` — Survived / ArrayDeclaration

Original:

```text
{ itemId: "ashen-mail", weight: 1 }, { itemId: "moss-tonic", weight: 2 }, { itemId: "rimeglass-knife", weight: 1 }]
```

Mutated replacement:

```text
[]
```

### 1840. `src/content/registry.ts:7` — Survived / ObjectLiteral

Original:

```text
 itemId: "ashen-mail", weight: 1 },
```

Mutated replacement:

```text
{}
```

### 1841. `src/content/registry.ts:7` — Survived / StringLiteral

Original:

```text
ashen-mail",
```

Mutated replacement:

```text
""
```

### 1842. `src/content/registry.ts:7` — Survived / StringLiteral

Original:

```text
moss-tonic",
```

Mutated replacement:

```text
""
```

### 1843. `src/content/registry.ts:7` — Survived / ObjectLiteral

Original:

```text
 itemId: "moss-tonic", weight: 2 },
```

Mutated replacement:

```text
{}
```

### 1844. `src/content/registry.ts:7` — Survived / ObjectLiteral

Original:

```text
 itemId: "rimeglass-knife", weight: 1 }]
```

Mutated replacement:

```text
{}
```

### 1845. `src/content/registry.ts:10` — Survived / ObjectLiteral

Original:

```text
 items: ITEM_DEFINITIONS, monsters: MONSTER_DEFINITIONS, lootTables: LOOT_TABLES };
```

Mutated replacement:

```text
{}
```

### 1846. `src/content/registry.ts:7` — Survived / StringLiteral

Original:

```text
rimeglass-knife",
```

Mutated replacement:

```text
""
```

### 1847. `src/audio/healthCue.ts:27` — NoCoverage / StringLiteral

Original:

```text
menu";
```

Mutated replacement:

```text
""
```

### 1848. `src/audio/healthCue.ts:29` — NoCoverage / BlockStatement

Original:

```text

    this.mode = mode;
    if (mode === "active") {
      void this.context?.resume();
      this.syncPulse();
    } else {
      this.stopPulse();
      if (mode === "paused") void this.context?.suspend();
      if (mode === "menu" || mode === "terminal") this.dispose();
    }
  }
```

Mutated replacement:

```text
{}
```

### 1849. `src/audio/healthCue.ts:31` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
true
```

### 1850. `src/audio/healthCue.ts:31` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
false
```

### 1851. `src/audio/healthCue.ts:31` — NoCoverage / EqualityOperator

Original:

```text
ode === "active")
```

Mutated replacement:

```text
mode !== "active"
```

### 1852. `src/audio/healthCue.ts:31` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 1853. `src/audio/healthCue.ts:31` — NoCoverage / BlockStatement

Original:

```text

      void this.context?.resume();
      this.syncPulse();
    } 
```

Mutated replacement:

```text
{}
```

### 1854. `src/audio/healthCue.ts:32` — NoCoverage / OptionalChaining

Original:

```text
his.context?.resume(
```

Mutated replacement:

```text
this.context.resume
```

### 1855. `src/audio/healthCue.ts:33` — NoCoverage / CallExpression

Original:

```text
his.syncPulse();
```

Mutated replacement:

```text
;
```

### 1856. `src/audio/healthCue.ts:34` — NoCoverage / BlockStatement

Original:

```text

      this.stopPulse();
      if (mode === "paused") void this.context?.suspend();
      if (mode === "menu" || mode === "terminal") this.dispose();
    }
```

Mutated replacement:

```text
{}
```

### 1857. `src/audio/healthCue.ts:35` — NoCoverage / CallExpression

Original:

```text
his.stopPulse();
```

Mutated replacement:

```text
;
```

### 1858. `src/audio/healthCue.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
true
```

### 1859. `src/audio/healthCue.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
false
```

### 1860. `src/audio/healthCue.ts:36` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
mode !== "paused"
```

### 1861. `src/audio/healthCue.ts:36` — NoCoverage / StringLiteral

Original:

```text
paused")
```

Mutated replacement:

```text
""
```

### 1862. `src/audio/healthCue.ts:36` — NoCoverage / OptionalChaining

Original:

```text
his.context?.suspend(
```

Mutated replacement:

```text
this.context.suspend
```

### 1863. `src/audio/healthCue.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
true
```

### 1864. `src/audio/healthCue.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
false
```

### 1865. `src/audio/healthCue.ts:37` — NoCoverage / LogicalOperator

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
mode === "menu" && mode === "terminal"
```

### 1866. `src/audio/healthCue.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 1867. `src/audio/healthCue.ts:37` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 1868. `src/audio/healthCue.ts:37` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 1869. `src/audio/healthCue.ts:37` — NoCoverage / ConditionalExpression

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
false
```

### 1870. `src/audio/healthCue.ts:37` — NoCoverage / EqualityOperator

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
mode !== "terminal"
```

### 1871. `src/audio/healthCue.ts:37` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 1872. `src/audio/healthCue.ts:37` — NoCoverage / CallExpression

Original:

```text
his.dispose();
```

Mutated replacement:

```text
;
```

### 1873. `src/audio/healthCue.ts:41` — NoCoverage / BlockStatement

Original:

```text

    this.profile = healthCueProfile(health, maxHealth);
    this.syncPulse();
  }
```

Mutated replacement:

```text
{}
```

### 1874. `src/audio/healthCue.ts:43` — NoCoverage / CallExpression

Original:

```text
his.syncPulse();
```

Mutated replacement:

```text
;
```

### 1875. `src/audio/healthCue.ts:46` — NoCoverage / BlockStatement

Original:

```text

    return { contextState: this.context?.state ?? "uncreated", profile: this.profile, mode: this.mode };
  }
```

Mutated replacement:

```text
{}
```

### 1876. `src/audio/healthCue.ts:47` — NoCoverage / ObjectLiteral

Original:

```text
 contextState: this.context?.state ?? "uncreated", profile: this.profile, mode: this.mode };
```

Mutated replacement:

```text
{}
```

### 1877. `src/audio/healthCue.ts:47` — NoCoverage / LogicalOperator

Original:

```text
his.context?.state ?? "uncreated",
```

Mutated replacement:

```text
this.context?.state && "uncreated"
```

### 1878. `src/audio/healthCue.ts:47` — NoCoverage / OptionalChaining

Original:

```text
his.context?.state 
```

Mutated replacement:

```text
this.context.state
```

### 1879. `src/audio/healthCue.ts:47` — NoCoverage / StringLiteral

Original:

```text
uncreated",
```

Mutated replacement:

```text
""
```

### 1880. `src/audio/healthCue.ts:50` — NoCoverage / BlockStatement

Original:

```text

    this.stopPulse();
    this.oscillator?.stop();
    this.oscillator?.disconnect();
    this.gainNode?.disconnect();
    this.oscillator = null;
    this.gainNode = null;
    void this.context?.close();
    this.context = null;
  }
```

Mutated replacement:

```text
{}
```

### 1881. `src/audio/healthCue.ts:51` — NoCoverage / CallExpression

Original:

```text
his.stopPulse();
```

Mutated replacement:

```text
;
```

### 1882. `src/audio/healthCue.ts:52` — NoCoverage / OptionalChaining

Original:

```text
his.oscillator?.stop(
```

Mutated replacement:

```text
this.oscillator.stop
```

### 1883. `src/audio/healthCue.ts:53` — NoCoverage / OptionalChaining

Original:

```text
his.oscillator?.disconnect(
```

Mutated replacement:

```text
this.oscillator.disconnect
```

### 1884. `src/audio/healthCue.ts:54` — NoCoverage / OptionalChaining

Original:

```text
his.gainNode?.disconnect(
```

Mutated replacement:

```text
this.gainNode.disconnect
```

### 1885. `src/audio/healthCue.ts:57` — NoCoverage / OptionalChaining

Original:

```text
his.context?.close(
```

Mutated replacement:

```text
this.context.close
```

### 1886. `src/audio/healthCue.ts:61` — NoCoverage / BlockStatement

Original:

```text

    if (this.mode !== "active" || !this.profile.enabled) {
      this.stopPulse();
      return;
    }
    this.ensureAudioGraph();
    if (!this.context || !this.gainNode || !this.oscillator) return;
    this.oscillator.frequency.setValueAtTime(this.profile.frequencyHz, this.context.currentTime);
    this.stopPulse();
    this.pulse();
    this.pulseTimer = window.setInterval(() => this.pulse(), this.profile.intervalMs);
  }
```

Mutated replacement:

```text
{}
```

### 1887. `src/audio/healthCue.ts:62` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active" || !this.profile.enabled)
```

Mutated replacement:

```text
true
```

### 1888. `src/audio/healthCue.ts:62` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active" || !this.profile.enabled)
```

Mutated replacement:

```text
false
```

### 1889. `src/audio/healthCue.ts:62` — NoCoverage / LogicalOperator

Original:

```text
his.mode !== "active" || !this.profile.enabled)
```

Mutated replacement:

```text
this.mode !== "active" && !this.profile.enabled
```

### 1890. `src/audio/healthCue.ts:62` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active" 
```

Mutated replacement:

```text
false
```

### 1891. `src/audio/healthCue.ts:62` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active" 
```

Mutated replacement:

```text
this.mode === "active"
```

### 1892. `src/audio/healthCue.ts:62` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 1893. `src/audio/healthCue.ts:62` — NoCoverage / BooleanLiteral

Original:

```text
this.profile.enabled)
```

Mutated replacement:

```text
this.profile.enabled
```

### 1894. `src/audio/healthCue.ts:62` — NoCoverage / BlockStatement

Original:

```text

      this.stopPulse();
      return;
    }
```

Mutated replacement:

```text
{}
```

### 1895. `src/audio/healthCue.ts:63` — NoCoverage / CallExpression

Original:

```text
his.stopPulse();
```

Mutated replacement:

```text
;
```

### 1896. `src/audio/healthCue.ts:66` — NoCoverage / CallExpression

Original:

```text
his.ensureAudioGraph();
```

Mutated replacement:

```text
;
```

### 1897. `src/audio/healthCue.ts:67` — NoCoverage / ConditionalExpression

Original:

```text
this.context || !this.gainNode || !this.oscillator)
```

Mutated replacement:

```text
true
```

### 1898. `src/audio/healthCue.ts:67` — NoCoverage / ConditionalExpression

Original:

```text
this.context || !this.gainNode || !this.oscillator)
```

Mutated replacement:

```text
false
```

### 1899. `src/audio/healthCue.ts:67` — NoCoverage / LogicalOperator

Original:

```text
this.context || !this.gainNode || !this.oscillator)
```

Mutated replacement:

```text
(!this.context || !this.gainNode) && !this.oscillator
```

### 1900. `src/audio/healthCue.ts:67` — NoCoverage / ConditionalExpression

Original:

```text
this.context || !this.gainNode 
```

Mutated replacement:

```text
false
```

### 1901. `src/audio/healthCue.ts:67` — NoCoverage / LogicalOperator

Original:

```text
this.context || !this.gainNode 
```

Mutated replacement:

```text
!this.context && !this.gainNode
```

### 1902. `src/audio/healthCue.ts:67` — NoCoverage / BooleanLiteral

Original:

```text
this.context 
```

Mutated replacement:

```text
this.context
```

### 1903. `src/audio/healthCue.ts:67` — NoCoverage / BooleanLiteral

Original:

```text
this.gainNode 
```

Mutated replacement:

```text
this.gainNode
```

### 1904. `src/audio/healthCue.ts:67` — NoCoverage / BooleanLiteral

Original:

```text
this.oscillator)
```

Mutated replacement:

```text
this.oscillator
```

### 1905. `src/audio/healthCue.ts:68` — NoCoverage / CallExpression

Original:

```text
his.oscillator.frequency.setValueAtTime(this.profile.frequencyHz, this.context.currentTime);
```

Mutated replacement:

```text
;
```

### 1906. `src/audio/healthCue.ts:69` — NoCoverage / CallExpression

Original:

```text
his.stopPulse();
```

Mutated replacement:

```text
;
```

### 1907. `src/audio/healthCue.ts:70` — NoCoverage / CallExpression

Original:

```text
his.pulse();
```

Mutated replacement:

```text
;
```

### 1908. `src/audio/healthCue.ts:71` — NoCoverage / ArrowFunction

Original:

```text
) => this.pulse(),
```

Mutated replacement:

```text
() => undefined
```

### 1909. `src/audio/healthCue.ts:74` — NoCoverage / BlockStatement

Original:

```text

    if (this.context) return;
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return;
    this.context = new AudioContextConstructor();
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.type = "sine";
    this.gainNode.gain.value = 0;
    this.oscillator.connect(this.gainNode).connect(this.context.destination);
    this.oscillator.start();
  }
```

Mutated replacement:

```text
{}
```

### 1910. `src/audio/healthCue.ts:75` — NoCoverage / ConditionalExpression

Original:

```text
his.context)
```

Mutated replacement:

```text
true
```

### 1911. `src/audio/healthCue.ts:75` — NoCoverage / ConditionalExpression

Original:

```text
his.context)
```

Mutated replacement:

```text
false
```

### 1912. `src/audio/healthCue.ts:76` — NoCoverage / LogicalOperator

Original:

```text
indow.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
```

Mutated replacement:

```text
window.AudioContext && (window as typeof window & {
  webkitAudioContext?: typeof AudioContext;
}).webkitAudioContext
```

### 1913. `src/audio/healthCue.ts:77` — NoCoverage / BooleanLiteral

Original:

```text
AudioContextConstructor)
```

Mutated replacement:

```text
AudioContextConstructor
```

### 1914. `src/audio/healthCue.ts:77` — NoCoverage / ConditionalExpression

Original:

```text
AudioContextConstructor)
```

Mutated replacement:

```text
true
```

### 1915. `src/audio/healthCue.ts:77` — NoCoverage / ConditionalExpression

Original:

```text
AudioContextConstructor)
```

Mutated replacement:

```text
false
```

### 1916. `src/audio/healthCue.ts:81` — NoCoverage / StringLiteral

Original:

```text
sine";
```

Mutated replacement:

```text
""
```

### 1917. `src/audio/healthCue.ts:83` — NoCoverage / CallExpression

Original:

```text
his.oscillator.connect(this.gainNode).connect(this.context.destination);
```

Mutated replacement:

```text
;
```

### 1918. `src/audio/healthCue.ts:84` — NoCoverage / CallExpression

Original:

```text
his.oscillator.start();
```

Mutated replacement:

```text
;
```

### 1919. `src/audio/healthCue.ts:87` — NoCoverage / BlockStatement

Original:

```text

    if (!this.context || !this.gainNode) return;
    const now = this.context.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.setValueAtTime(0, now);
    this.gainNode.gain.linearRampToValueAtTime(this.profile.gain, now + 0.02);
    this.gainNode.gain.linearRampToValueAtTime(0, now + 0.14);
  }
```

Mutated replacement:

```text
{}
```

### 1920. `src/audio/healthCue.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
this.context || !this.gainNode)
```

Mutated replacement:

```text
true
```

### 1921. `src/audio/healthCue.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
this.context || !this.gainNode)
```

Mutated replacement:

```text
false
```

### 1922. `src/audio/healthCue.ts:88` — NoCoverage / LogicalOperator

Original:

```text
this.context || !this.gainNode)
```

Mutated replacement:

```text
!this.context && !this.gainNode
```

### 1923. `src/audio/healthCue.ts:88` — NoCoverage / BooleanLiteral

Original:

```text
this.context 
```

Mutated replacement:

```text
this.context
```

### 1924. `src/audio/healthCue.ts:88` — NoCoverage / BooleanLiteral

Original:

```text
this.gainNode)
```

Mutated replacement:

```text
this.gainNode
```

### 1925. `src/audio/healthCue.ts:90` — NoCoverage / CallExpression

Original:

```text
his.gainNode.gain.cancelScheduledValues(now);
```

Mutated replacement:

```text
;
```

### 1926. `src/audio/healthCue.ts:91` — NoCoverage / CallExpression

Original:

```text
his.gainNode.gain.setValueAtTime(0, now);
```

Mutated replacement:

```text
;
```

### 1927. `src/audio/healthCue.ts:92` — NoCoverage / ArithmeticOperator

Original:

```text
ow + 0.02)
```

Mutated replacement:

```text
now - 0.02
```

### 1928. `src/audio/healthCue.ts:93` — NoCoverage / ArithmeticOperator

Original:

```text
ow + 0.14)
```

Mutated replacement:

```text
now - 0.14
```

### 1929. `src/audio/healthCue.ts:96` — NoCoverage / BlockStatement

Original:

```text

    if (this.pulseTimer !== null) window.clearInterval(this.pulseTimer);
    this.pulseTimer = null;
    if (this.context && this.gainNode) this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
  }
```

Mutated replacement:

```text
{}
```

### 1930. `src/audio/healthCue.ts:97` — NoCoverage / ConditionalExpression

Original:

```text
his.pulseTimer !== null)
```

Mutated replacement:

```text
true
```

### 1931. `src/audio/healthCue.ts:97` — NoCoverage / ConditionalExpression

Original:

```text
his.pulseTimer !== null)
```

Mutated replacement:

```text
false
```

### 1932. `src/audio/healthCue.ts:97` — NoCoverage / EqualityOperator

Original:

```text
his.pulseTimer !== null)
```

Mutated replacement:

```text
this.pulseTimer === null
```

### 1933. `src/audio/healthCue.ts:97` — NoCoverage / CallExpression

Original:

```text
indow.clearInterval(this.pulseTimer);
```

Mutated replacement:

```text
;
```

### 1934. `src/audio/healthCue.ts:99` — NoCoverage / ConditionalExpression

Original:

```text
his.context && this.gainNode)
```

Mutated replacement:

```text
true
```

### 1935. `src/audio/healthCue.ts:99` — NoCoverage / ConditionalExpression

Original:

```text
his.context && this.gainNode)
```

Mutated replacement:

```text
false
```

### 1936. `src/audio/healthCue.ts:99` — NoCoverage / LogicalOperator

Original:

```text
his.context && this.gainNode)
```

Mutated replacement:

```text
this.context || this.gainNode
```

### 1937. `src/audio/healthCue.ts:99` — NoCoverage / CallExpression

Original:

```text
his.gainNode.gain.setValueAtTime(0, this.context.currentTime);
```

Mutated replacement:

```text
;
```

### 1938. `src/audio/healthCue.ts:8` — Survived / BlockStatement

Original:

```text

  const ratio = maxHealth > 0 ? Math.max(0, Math.min(1, health / maxHealth)) : 0;
  if (ratio >= 1) return { enabled: false, intervalMs: 0, frequencyHz: 0, gain: 0 };
  return {
    enabled: true,
    intervalMs: Math.round(650 + ratio * 650),
    frequencyHz: Math.round(150 + (1 - ratio) * 90),
    gain: 0.018 + (1 - ratio) * 0.022
  };
}
```

Mutated replacement:

```text
{}
```

### 1939. `src/audio/healthCue.ts:9` — Survived / ConditionalExpression

Original:

```text
axHealth > 0 
```

Mutated replacement:

```text
true
```

### 1940. `src/audio/healthCue.ts:9` — Survived / ConditionalExpression

Original:

```text
axHealth > 0 
```

Mutated replacement:

```text
false
```

### 1941. `src/audio/healthCue.ts:9` — Survived / EqualityOperator

Original:

```text
axHealth > 0 
```

Mutated replacement:

```text
maxHealth >= 0
```

### 1942. `src/audio/healthCue.ts:9` — Survived / EqualityOperator

Original:

```text
axHealth > 0 
```

Mutated replacement:

```text
maxHealth <= 0
```

### 1943. `src/audio/healthCue.ts:9` — Survived / MethodExpression

Original:

```text
ath.max(0, Math.min(1, health / maxHealth)) 
```

Mutated replacement:

```text
Math.min(0, Math.min(1, health / maxHealth))
```

### 1944. `src/audio/healthCue.ts:9` — Survived / MethodExpression

Original:

```text
ath.min(1, health / maxHealth))
```

Mutated replacement:

```text
Math.max(1, health / maxHealth)
```

### 1945. `src/audio/healthCue.ts:9` — Survived / ArithmeticOperator

Original:

```text
ealth / maxHealth)
```

Mutated replacement:

```text
health * maxHealth
```

### 1946. `src/audio/healthCue.ts:10` — Survived / ConditionalExpression

Original:

```text
atio >= 1)
```

Mutated replacement:

```text
true
```

### 1947. `src/audio/healthCue.ts:10` — Survived / ConditionalExpression

Original:

```text
atio >= 1)
```

Mutated replacement:

```text
false
```

### 1948. `src/audio/healthCue.ts:10` — Survived / EqualityOperator

Original:

```text
atio >= 1)
```

Mutated replacement:

```text
ratio > 1
```

### 1949. `src/audio/healthCue.ts:10` — Survived / EqualityOperator

Original:

```text
atio >= 1)
```

Mutated replacement:

```text
ratio < 1
```

### 1950. `src/audio/healthCue.ts:10` — Survived / ObjectLiteral

Original:

```text
 enabled: false, intervalMs: 0, frequencyHz: 0, gain: 0 };
```

Mutated replacement:

```text
{}
```

### 1951. `src/audio/healthCue.ts:10` — Survived / BooleanLiteral

Original:

```text
alse,
```

Mutated replacement:

```text
true
```

### 1952. `src/audio/healthCue.ts:11` — Survived / ObjectLiteral

Original:

```text

    enabled: true,
    intervalMs: Math.round(650 + ratio * 650),
    frequencyHz: Math.round(150 + (1 - ratio) * 90),
    gain: 0.018 + (1 - ratio) * 0.022
  };
```

Mutated replacement:

```text
{}
```

### 1953. `src/audio/healthCue.ts:12` — Survived / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 1954. `src/audio/healthCue.ts:13` — Survived / ArithmeticOperator

Original:

```text
50 + ratio * 650)
```

Mutated replacement:

```text
650 - ratio * 650
```

### 1955. `src/audio/healthCue.ts:13` — Survived / ArithmeticOperator

Original:

```text
atio * 650)
```

Mutated replacement:

```text
ratio / 650
```

### 1956. `src/audio/healthCue.ts:14` — Survived / ArithmeticOperator

Original:

```text
50 + (1 - ratio) * 90)
```

Mutated replacement:

```text
150 - (1 - ratio) * 90
```

### 1957. `src/audio/healthCue.ts:14` — Survived / ArithmeticOperator

Original:

```text
1 - ratio) * 90)
```

Mutated replacement:

```text
(1 - ratio) / 90
```

### 1958. `src/audio/healthCue.ts:15` — Survived / ArithmeticOperator

Original:

```text
.018 + (1 - ratio) * 0.022
```

Mutated replacement:

```text
0.018 - (1 - ratio) * 0.022
```

### 1959. `src/audio/healthCue.ts:14` — Survived / ArithmeticOperator

Original:

```text
 - ratio)
```

Mutated replacement:

```text
1 + ratio
```

### 1960. `src/audio/healthCue.ts:15` — Survived / ArithmeticOperator

Original:

```text
1 - ratio) * 0.022
```

Mutated replacement:

```text
(1 - ratio) / 0.022
```

### 1961. `src/audio/healthCue.ts:15` — Survived / ArithmeticOperator

Original:

```text
 - ratio)
```

Mutated replacement:

```text
1 + ratio
```

### 1962. `src/audio/actionCue.ts:20` — NoCoverage / StringLiteral

Original:

```text
menu";
```

Mutated replacement:

```text
""
```

### 1963. `src/audio/actionCue.ts:24` — NoCoverage / BlockStatement

Original:

```text

    this.mode = mode;
    if (mode === "active") void this.context?.resume();
    if (mode === "paused") void this.context?.suspend();
    if (mode === "menu" || mode === "terminal") this.dispose();
  }
```

Mutated replacement:

```text
{}
```

### 1964. `src/audio/actionCue.ts:26` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
true
```

### 1965. `src/audio/actionCue.ts:26` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
false
```

### 1966. `src/audio/actionCue.ts:26` — NoCoverage / EqualityOperator

Original:

```text
ode === "active")
```

Mutated replacement:

```text
mode !== "active"
```

### 1967. `src/audio/actionCue.ts:26` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 1968. `src/audio/actionCue.ts:26` — NoCoverage / OptionalChaining

Original:

```text
his.context?.resume(
```

Mutated replacement:

```text
this.context.resume
```

### 1969. `src/audio/actionCue.ts:27` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
true
```

### 1970. `src/audio/actionCue.ts:27` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
false
```

### 1971. `src/audio/actionCue.ts:27` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
mode !== "paused"
```

### 1972. `src/audio/actionCue.ts:27` — NoCoverage / StringLiteral

Original:

```text
paused")
```

Mutated replacement:

```text
""
```

### 1973. `src/audio/actionCue.ts:27` — NoCoverage / OptionalChaining

Original:

```text
his.context?.suspend(
```

Mutated replacement:

```text
this.context.suspend
```

### 1974. `src/audio/actionCue.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
true
```

### 1975. `src/audio/actionCue.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
false
```

### 1976. `src/audio/actionCue.ts:28` — NoCoverage / LogicalOperator

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
mode === "menu" && mode === "terminal"
```

### 1977. `src/audio/actionCue.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 1978. `src/audio/actionCue.ts:28` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 1979. `src/audio/actionCue.ts:28` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 1980. `src/audio/actionCue.ts:28` — NoCoverage / ConditionalExpression

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
false
```

### 1981. `src/audio/actionCue.ts:28` — NoCoverage / EqualityOperator

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
mode !== "terminal"
```

### 1982. `src/audio/actionCue.ts:28` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 1983. `src/audio/actionCue.ts:28` — NoCoverage / CallExpression

Original:

```text
his.dispose();
```

Mutated replacement:

```text
;
```

### 1984. `src/audio/actionCue.ts:31` — NoCoverage / BlockStatement

Original:

```text

    if (this.mode !== "active") return;
    const profile = actionCueProfile(kind);
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!this.context && AudioContextConstructor) this.context = new AudioContextConstructor();
    if (!this.context) return;
    void this.context.resume();
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    const now = this.context.currentTime;
    oscillator.type = kind === "attack" || kind === "encounter" ? "square" : "triangle";
    oscillator.frequency.setValueAtTime(profile.frequencyHz, now);
    gain.gain.setValueAtTime(profile.gain, now);
    gain.gain.linearRampToValueAtTime(0, now + profile.durationMs / 1000);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + profile.durationMs / 1000);
    oscillator.addEventListener("ended", () => { oscillator.disconnect(); gain.disconnect(); });
    this.count += 1;
    this.lastCue = kind;
  }
```

Mutated replacement:

```text
{}
```

### 1985. `src/audio/actionCue.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
true
```

### 1986. `src/audio/actionCue.ts:32` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
false
```

### 1987. `src/audio/actionCue.ts:32` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
this.mode === "active"
```

### 1988. `src/audio/actionCue.ts:32` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 1989. `src/audio/actionCue.ts:34` — NoCoverage / LogicalOperator

Original:

```text
indow.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
```

Mutated replacement:

```text
window.AudioContext && (window as typeof window & {
  webkitAudioContext?: typeof AudioContext;
}).webkitAudioContext
```

### 1990. `src/audio/actionCue.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
this.context && AudioContextConstructor)
```

Mutated replacement:

```text
true
```

### 1991. `src/audio/actionCue.ts:35` — NoCoverage / ConditionalExpression

Original:

```text
this.context && AudioContextConstructor)
```

Mutated replacement:

```text
false
```

### 1992. `src/audio/actionCue.ts:35` — NoCoverage / LogicalOperator

Original:

```text
this.context && AudioContextConstructor)
```

Mutated replacement:

```text
!this.context || AudioContextConstructor
```

### 1993. `src/audio/actionCue.ts:35` — NoCoverage / BooleanLiteral

Original:

```text
this.context 
```

Mutated replacement:

```text
this.context
```

### 1994. `src/audio/actionCue.ts:36` — NoCoverage / BooleanLiteral

Original:

```text
this.context)
```

Mutated replacement:

```text
this.context
```

### 1995. `src/audio/actionCue.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
this.context)
```

Mutated replacement:

```text
true
```

### 1996. `src/audio/actionCue.ts:36` — NoCoverage / ConditionalExpression

Original:

```text
this.context)
```

Mutated replacement:

```text
false
```

### 1997. `src/audio/actionCue.ts:41` — NoCoverage / ConditionalExpression

Original:

```text
ind === "attack" || kind === "encounter" 
```

Mutated replacement:

```text
true
```

### 1998. `src/audio/actionCue.ts:41` — NoCoverage / ConditionalExpression

Original:

```text
ind === "attack" || kind === "encounter" 
```

Mutated replacement:

```text
false
```

### 1999. `src/audio/actionCue.ts:41` — NoCoverage / LogicalOperator

Original:

```text
ind === "attack" || kind === "encounter" 
```

Mutated replacement:

```text
kind === "attack" && kind === "encounter"
```

### 2000. `src/audio/actionCue.ts:41` — NoCoverage / ConditionalExpression

Original:

```text
ind === "attack" 
```

Mutated replacement:

```text
false
```

### 2001. `src/audio/actionCue.ts:41` — NoCoverage / EqualityOperator

Original:

```text
ind === "attack" 
```

Mutated replacement:

```text
kind !== "attack"
```

### 2002. `src/audio/actionCue.ts:41` — NoCoverage / StringLiteral

Original:

```text
attack" 
```

Mutated replacement:

```text
""
```

### 2003. `src/audio/actionCue.ts:41` — NoCoverage / ConditionalExpression

Original:

```text
ind === "encounter" 
```

Mutated replacement:

```text
false
```

### 2004. `src/audio/actionCue.ts:41` — NoCoverage / EqualityOperator

Original:

```text
ind === "encounter" 
```

Mutated replacement:

```text
kind !== "encounter"
```

### 2005. `src/audio/actionCue.ts:41` — NoCoverage / StringLiteral

Original:

```text
encounter" 
```

Mutated replacement:

```text
""
```

### 2006. `src/audio/actionCue.ts:41` — NoCoverage / StringLiteral

Original:

```text
square" 
```

Mutated replacement:

```text
""
```

### 2007. `src/audio/actionCue.ts:41` — NoCoverage / StringLiteral

Original:

```text
triangle";
```

Mutated replacement:

```text
""
```

### 2008. `src/audio/actionCue.ts:42` — NoCoverage / CallExpression

Original:

```text
scillator.frequency.setValueAtTime(profile.frequencyHz, now);
```

Mutated replacement:

```text
;
```

### 2009. `src/audio/actionCue.ts:43` — NoCoverage / CallExpression

Original:

```text
ain.gain.setValueAtTime(profile.gain, now);
```

Mutated replacement:

```text
;
```

### 2010. `src/audio/actionCue.ts:44` — NoCoverage / ArithmeticOperator

Original:

```text
ow + profile.durationMs / 1000)
```

Mutated replacement:

```text
now - profile.durationMs / 1000
```

### 2011. `src/audio/actionCue.ts:44` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.durationMs / 1000)
```

Mutated replacement:

```text
profile.durationMs * 1000
```

### 2012. `src/audio/actionCue.ts:45` — NoCoverage / CallExpression

Original:

```text
scillator.connect(gain).connect(this.context.destination);
```

Mutated replacement:

```text
;
```

### 2013. `src/audio/actionCue.ts:46` — NoCoverage / CallExpression

Original:

```text
scillator.start(now);
```

Mutated replacement:

```text
;
```

### 2014. `src/audio/actionCue.ts:47` — NoCoverage / ArithmeticOperator

Original:

```text
ow + profile.durationMs / 1000)
```

Mutated replacement:

```text
now - profile.durationMs / 1000
```

### 2015. `src/audio/actionCue.ts:47` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.durationMs / 1000)
```

Mutated replacement:

```text
profile.durationMs * 1000
```

### 2016. `src/audio/actionCue.ts:48` — NoCoverage / StringLiteral

Original:

```text
ended",
```

Mutated replacement:

```text
""
```

### 2017. `src/audio/actionCue.ts:48` — NoCoverage / BlockStatement

Original:

```text
 oscillator.disconnect(); gain.disconnect(); })
```

Mutated replacement:

```text
{}
```

### 2018. `src/audio/actionCue.ts:48` — NoCoverage / CallExpression

Original:

```text
scillator.disconnect(); 
```

Mutated replacement:

```text
;
```

### 2019. `src/audio/actionCue.ts:48` — NoCoverage / CallExpression

Original:

```text
ain.disconnect(); 
```

Mutated replacement:

```text
;
```

### 2020. `src/audio/actionCue.ts:49` — NoCoverage / AssignmentOperator

Original:

```text
his.count += 1;
```

Mutated replacement:

```text
this.count -= 1
```

### 2021. `src/audio/actionCue.ts:53` — NoCoverage / BlockStatement

Original:

```text

    return { contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
  }
```

Mutated replacement:

```text
{}
```

### 2022. `src/audio/actionCue.ts:54` — NoCoverage / ObjectLiteral

Original:

```text
 contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
```

Mutated replacement:

```text
{}
```

### 2023. `src/audio/actionCue.ts:54` — NoCoverage / LogicalOperator

Original:

```text
his.context?.state ?? "uncreated",
```

Mutated replacement:

```text
this.context?.state && "uncreated"
```

### 2024. `src/audio/actionCue.ts:54` — NoCoverage / OptionalChaining

Original:

```text
his.context?.state 
```

Mutated replacement:

```text
this.context.state
```

### 2025. `src/audio/actionCue.ts:54` — NoCoverage / StringLiteral

Original:

```text
uncreated",
```

Mutated replacement:

```text
""
```

### 2026. `src/audio/actionCue.ts:57` — NoCoverage / BlockStatement

Original:

```text

    void this.context?.close();
    this.context = null;
  }
```

Mutated replacement:

```text
{}
```

### 2027. `src/audio/actionCue.ts:58` — NoCoverage / OptionalChaining

Original:

```text
his.context?.close(
```

Mutated replacement:

```text
this.context.close
```

### 2028. `src/audio/actionCue.ts:9` — Survived / BlockStatement

Original:

```text

  if (kind === "attack") return { frequencyHz: 220, durationMs: 80, gain: 0.035 };
  if (kind === "use") return { frequencyHz: 330, durationMs: 110, gain: 0.028 };
  if (kind === "encounter") return { frequencyHz: 150, durationMs: 180, gain: 0.04 };
  return { frequencyHz: 440, durationMs: 70, gain: 0.032 };
}
```

Mutated replacement:

```text
{}
```

### 2029. `src/audio/actionCue.ts:10` — Survived / ConditionalExpression

Original:

```text
ind === "attack")
```

Mutated replacement:

```text
true
```

### 2030. `src/audio/actionCue.ts:10` — Survived / ConditionalExpression

Original:

```text
ind === "attack")
```

Mutated replacement:

```text
false
```

### 2031. `src/audio/actionCue.ts:10` — Survived / EqualityOperator

Original:

```text
ind === "attack")
```

Mutated replacement:

```text
kind !== "attack"
```

### 2032. `src/audio/actionCue.ts:10` — Survived / StringLiteral

Original:

```text
attack")
```

Mutated replacement:

```text
""
```

### 2033. `src/audio/actionCue.ts:11` — Survived / ConditionalExpression

Original:

```text
ind === "use")
```

Mutated replacement:

```text
true
```

### 2034. `src/audio/actionCue.ts:10` — Survived / ObjectLiteral

Original:

```text
 frequencyHz: 220, durationMs: 80, gain: 0.035 };
```

Mutated replacement:

```text
{}
```

### 2035. `src/audio/actionCue.ts:11` — Survived / ConditionalExpression

Original:

```text
ind === "use")
```

Mutated replacement:

```text
false
```

### 2036. `src/audio/actionCue.ts:11` — Survived / EqualityOperator

Original:

```text
ind === "use")
```

Mutated replacement:

```text
kind !== "use"
```

### 2037. `src/audio/actionCue.ts:11` — Survived / StringLiteral

Original:

```text
use")
```

Mutated replacement:

```text
""
```

### 2038. `src/audio/actionCue.ts:11` — Survived / ObjectLiteral

Original:

```text
 frequencyHz: 330, durationMs: 110, gain: 0.028 };
```

Mutated replacement:

```text
{}
```

### 2039. `src/audio/actionCue.ts:12` — Survived / ConditionalExpression

Original:

```text
ind === "encounter")
```

Mutated replacement:

```text
true
```

### 2040. `src/audio/actionCue.ts:12` — Survived / ConditionalExpression

Original:

```text
ind === "encounter")
```

Mutated replacement:

```text
false
```

### 2041. `src/audio/actionCue.ts:12` — Survived / EqualityOperator

Original:

```text
ind === "encounter")
```

Mutated replacement:

```text
kind !== "encounter"
```

### 2042. `src/audio/actionCue.ts:12` — Survived / StringLiteral

Original:

```text
encounter")
```

Mutated replacement:

```text
""
```

### 2043. `src/audio/actionCue.ts:12` — Survived / ObjectLiteral

Original:

```text
 frequencyHz: 150, durationMs: 180, gain: 0.04 };
```

Mutated replacement:

```text
{}
```

### 2044. `src/audio/actionCue.ts:13` — Survived / ObjectLiteral

Original:

```text
 frequencyHz: 440, durationMs: 70, gain: 0.032 };
```

Mutated replacement:

```text
{}
```

### 2045. `src/audio/ambientCue.ts:17` — NoCoverage / StringLiteral

Original:

```text
menu";
```

Mutated replacement:

```text
""
```

### 2046. `src/audio/ambientCue.ts:21` — NoCoverage / BlockStatement

Original:

```text

    this.mode = mode;
    if (mode === "active") {
      void this.context?.resume();
      this.schedule(true);
      return;
    }
    this.clearTimer();
    if (mode === "paused") void this.context?.suspend();
    if (mode === "menu" || mode === "terminal") this.dispose();
  }
```

Mutated replacement:

```text
{}
```

### 2047. `src/audio/ambientCue.ts:23` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
true
```

### 2048. `src/audio/ambientCue.ts:23` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active")
```

Mutated replacement:

```text
false
```

### 2049. `src/audio/ambientCue.ts:23` — NoCoverage / EqualityOperator

Original:

```text
ode === "active")
```

Mutated replacement:

```text
mode !== "active"
```

### 2050. `src/audio/ambientCue.ts:23` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 2051. `src/audio/ambientCue.ts:23` — NoCoverage / BlockStatement

Original:

```text

      void this.context?.resume();
      this.schedule(true);
      return;
    }
```

Mutated replacement:

```text
{}
```

### 2052. `src/audio/ambientCue.ts:24` — NoCoverage / OptionalChaining

Original:

```text
his.context?.resume(
```

Mutated replacement:

```text
this.context.resume
```

### 2053. `src/audio/ambientCue.ts:25` — NoCoverage / BooleanLiteral

Original:

```text
rue)
```

Mutated replacement:

```text
false
```

### 2054. `src/audio/ambientCue.ts:28` — NoCoverage / CallExpression

Original:

```text
his.clearTimer();
```

Mutated replacement:

```text
;
```

### 2055. `src/audio/ambientCue.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
true
```

### 2056. `src/audio/ambientCue.ts:29` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
false
```

### 2057. `src/audio/ambientCue.ts:29` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
mode !== "paused"
```

### 2058. `src/audio/ambientCue.ts:29` — NoCoverage / StringLiteral

Original:

```text
paused")
```

Mutated replacement:

```text
""
```

### 2059. `src/audio/ambientCue.ts:29` — NoCoverage / OptionalChaining

Original:

```text
his.context?.suspend(
```

Mutated replacement:

```text
this.context.suspend
```

### 2060. `src/audio/ambientCue.ts:30` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
true
```

### 2061. `src/audio/ambientCue.ts:30` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
false
```

### 2062. `src/audio/ambientCue.ts:30` — NoCoverage / LogicalOperator

Original:

```text
ode === "menu" || mode === "terminal")
```

Mutated replacement:

```text
mode === "menu" && mode === "terminal"
```

### 2063. `src/audio/ambientCue.ts:30` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 2064. `src/audio/ambientCue.ts:30` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 2065. `src/audio/ambientCue.ts:30` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2066. `src/audio/ambientCue.ts:30` — NoCoverage / ConditionalExpression

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
false
```

### 2067. `src/audio/ambientCue.ts:30` — NoCoverage / EqualityOperator

Original:

```text
ode === "terminal")
```

Mutated replacement:

```text
mode !== "terminal"
```

### 2068. `src/audio/ambientCue.ts:30` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 2069. `src/audio/ambientCue.ts:30` — NoCoverage / CallExpression

Original:

```text
his.dispose();
```

Mutated replacement:

```text
;
```

### 2070. `src/audio/ambientCue.ts:33` — NoCoverage / BlockStatement

Original:

```text

    return { contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
  }
```

Mutated replacement:

```text
{}
```

### 2071. `src/audio/ambientCue.ts:34` — NoCoverage / ObjectLiteral

Original:

```text
 contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
```

Mutated replacement:

```text
{}
```

### 2072. `src/audio/ambientCue.ts:34` — NoCoverage / LogicalOperator

Original:

```text
his.context?.state ?? "uncreated",
```

Mutated replacement:

```text
this.context?.state && "uncreated"
```

### 2073. `src/audio/ambientCue.ts:34` — NoCoverage / OptionalChaining

Original:

```text
his.context?.state 
```

Mutated replacement:

```text
this.context.state
```

### 2074. `src/audio/ambientCue.ts:34` — NoCoverage / StringLiteral

Original:

```text
uncreated",
```

Mutated replacement:

```text
""
```

### 2075. `src/audio/ambientCue.ts:37` — NoCoverage / BlockStatement

Original:

```text

    this.clearTimer();
    void this.context?.close();
    this.context = null;
  }
```

Mutated replacement:

```text
{}
```

### 2076. `src/audio/ambientCue.ts:38` — NoCoverage / CallExpression

Original:

```text
his.clearTimer();
```

Mutated replacement:

```text
;
```

### 2077. `src/audio/ambientCue.ts:39` — NoCoverage / OptionalChaining

Original:

```text
his.context?.close(
```

Mutated replacement:

```text
this.context.close
```

### 2078. `src/audio/ambientCue.ts:43` — NoCoverage / BlockStatement

Original:

```text

    if (this.context) return;
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextConstructor) this.context = new AudioContextConstructor();
  }
```

Mutated replacement:

```text
{}
```

### 2079. `src/audio/ambientCue.ts:44` — NoCoverage / ConditionalExpression

Original:

```text
his.context)
```

Mutated replacement:

```text
true
```

### 2080. `src/audio/ambientCue.ts:44` — NoCoverage / ConditionalExpression

Original:

```text
his.context)
```

Mutated replacement:

```text
false
```

### 2081. `src/audio/ambientCue.ts:45` — NoCoverage / LogicalOperator

Original:

```text
indow.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
```

Mutated replacement:

```text
window.AudioContext && (window as typeof window & {
  webkitAudioContext?: typeof AudioContext;
}).webkitAudioContext
```

### 2082. `src/audio/ambientCue.ts:46` — NoCoverage / ConditionalExpression

Original:

```text
udioContextConstructor)
```

Mutated replacement:

```text
true
```

### 2083. `src/audio/ambientCue.ts:46` — NoCoverage / ConditionalExpression

Original:

```text
udioContextConstructor)
```

Mutated replacement:

```text
false
```

### 2084. `src/audio/ambientCue.ts:49` — NoCoverage / BooleanLiteral

Original:

```text
alse)
```

Mutated replacement:

```text
true
```

### 2085. `src/audio/ambientCue.ts:49` — NoCoverage / BlockStatement

Original:

```text

    this.clearTimer();
    if (this.mode !== "active") return;
    const profile = ambientCueProfile();
    this.timer = window.setTimeout(() => {
      this.play();
      this.schedule();
    }, initial ? profile.intervalMs / 5 : profile.intervalMs);
  }
```

Mutated replacement:

```text
{}
```

### 2086. `src/audio/ambientCue.ts:50` — NoCoverage / CallExpression

Original:

```text
his.clearTimer();
```

Mutated replacement:

```text
;
```

### 2087. `src/audio/ambientCue.ts:51` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
true
```

### 2088. `src/audio/ambientCue.ts:51` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
false
```

### 2089. `src/audio/ambientCue.ts:51` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
this.mode === "active"
```

### 2090. `src/audio/ambientCue.ts:51` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 2091. `src/audio/ambientCue.ts:53` — NoCoverage / BlockStatement

Original:

```text

      this.play();
      this.schedule();
    },
```

Mutated replacement:

```text
{}
```

### 2092. `src/audio/ambientCue.ts:54` — NoCoverage / CallExpression

Original:

```text
his.play();
```

Mutated replacement:

```text
;
```

### 2093. `src/audio/ambientCue.ts:55` — NoCoverage / CallExpression

Original:

```text
his.schedule();
```

Mutated replacement:

```text
;
```

### 2094. `src/audio/ambientCue.ts:56` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.intervalMs / 5 
```

Mutated replacement:

```text
profile.intervalMs * 5
```

### 2095. `src/audio/ambientCue.ts:59` — NoCoverage / BlockStatement

Original:

```text

    if (this.mode !== "active") return;
    this.ensureContext();
    if (!this.context) return;
    const profile = ambientCueProfile();
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    const now = this.context.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(profile.frequencyHz, now);
    oscillator.frequency.exponentialRampToValueAtTime(82, now + profile.durationMs / 1000);
    gain.gain.setValueAtTime(profile.gain, now);
    gain.gain.linearRampToValueAtTime(0, now + profile.durationMs / 1000);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + profile.durationMs / 1000);
    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gain.disconnect();
      void this.context?.close();
      this.context = null;
    });
    this.count += 1;
    this.lastCue = "stone-settle";
  }
```

Mutated replacement:

```text
{}
```

### 2096. `src/audio/ambientCue.ts:60` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
true
```

### 2097. `src/audio/ambientCue.ts:60` — NoCoverage / ConditionalExpression

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
false
```

### 2098. `src/audio/ambientCue.ts:60` — NoCoverage / EqualityOperator

Original:

```text
his.mode !== "active")
```

Mutated replacement:

```text
this.mode === "active"
```

### 2099. `src/audio/ambientCue.ts:60` — NoCoverage / StringLiteral

Original:

```text
active")
```

Mutated replacement:

```text
""
```

### 2100. `src/audio/ambientCue.ts:61` — NoCoverage / CallExpression

Original:

```text
his.ensureContext();
```

Mutated replacement:

```text
;
```

### 2101. `src/audio/ambientCue.ts:62` — NoCoverage / BooleanLiteral

Original:

```text
this.context)
```

Mutated replacement:

```text
this.context
```

### 2102. `src/audio/ambientCue.ts:62` — NoCoverage / ConditionalExpression

Original:

```text
this.context)
```

Mutated replacement:

```text
true
```

### 2103. `src/audio/ambientCue.ts:62` — NoCoverage / ConditionalExpression

Original:

```text
this.context)
```

Mutated replacement:

```text
false
```

### 2104. `src/audio/ambientCue.ts:67` — NoCoverage / StringLiteral

Original:

```text
sine";
```

Mutated replacement:

```text
""
```

### 2105. `src/audio/ambientCue.ts:68` — NoCoverage / CallExpression

Original:

```text
scillator.frequency.setValueAtTime(profile.frequencyHz, now);
```

Mutated replacement:

```text
;
```

### 2106. `src/audio/ambientCue.ts:69` — NoCoverage / ArithmeticOperator

Original:

```text
ow + profile.durationMs / 1000)
```

Mutated replacement:

```text
now - profile.durationMs / 1000
```

### 2107. `src/audio/ambientCue.ts:69` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.durationMs / 1000)
```

Mutated replacement:

```text
profile.durationMs * 1000
```

### 2108. `src/audio/ambientCue.ts:70` — NoCoverage / CallExpression

Original:

```text
ain.gain.setValueAtTime(profile.gain, now);
```

Mutated replacement:

```text
;
```

### 2109. `src/audio/ambientCue.ts:71` — NoCoverage / ArithmeticOperator

Original:

```text
ow + profile.durationMs / 1000)
```

Mutated replacement:

```text
now - profile.durationMs / 1000
```

### 2110. `src/audio/ambientCue.ts:71` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.durationMs / 1000)
```

Mutated replacement:

```text
profile.durationMs * 1000
```

### 2111. `src/audio/ambientCue.ts:72` — NoCoverage / CallExpression

Original:

```text
scillator.connect(gain).connect(this.context.destination);
```

Mutated replacement:

```text
;
```

### 2112. `src/audio/ambientCue.ts:73` — NoCoverage / CallExpression

Original:

```text
scillator.start(now);
```

Mutated replacement:

```text
;
```

### 2113. `src/audio/ambientCue.ts:74` — NoCoverage / ArithmeticOperator

Original:

```text
ow + profile.durationMs / 1000)
```

Mutated replacement:

```text
now - profile.durationMs / 1000
```

### 2114. `src/audio/ambientCue.ts:74` — NoCoverage / ArithmeticOperator

Original:

```text
rofile.durationMs / 1000)
```

Mutated replacement:

```text
profile.durationMs * 1000
```

### 2115. `src/audio/ambientCue.ts:75` — NoCoverage / StringLiteral

Original:

```text
ended",
```

Mutated replacement:

```text
""
```

### 2116. `src/audio/ambientCue.ts:75` — NoCoverage / BlockStatement

Original:

```text

      oscillator.disconnect();
      gain.disconnect();
      void this.context?.close();
      this.context = null;
    })
```

Mutated replacement:

```text
{}
```

### 2117. `src/audio/ambientCue.ts:76` — NoCoverage / CallExpression

Original:

```text
scillator.disconnect();
```

Mutated replacement:

```text
;
```

### 2118. `src/audio/ambientCue.ts:77` — NoCoverage / CallExpression

Original:

```text
ain.disconnect();
```

Mutated replacement:

```text
;
```

### 2119. `src/audio/ambientCue.ts:78` — NoCoverage / OptionalChaining

Original:

```text
his.context?.close(
```

Mutated replacement:

```text
this.context.close
```

### 2120. `src/audio/ambientCue.ts:81` — NoCoverage / AssignmentOperator

Original:

```text
his.count += 1;
```

Mutated replacement:

```text
this.count -= 1
```

### 2121. `src/audio/ambientCue.ts:82` — NoCoverage / StringLiteral

Original:

```text
stone-settle";
```

Mutated replacement:

```text
""
```

### 2122. `src/audio/ambientCue.ts:85` — NoCoverage / BlockStatement

Original:

```text

    if (this.timer !== null) window.clearTimeout(this.timer);
    this.timer = null;
  }
```

Mutated replacement:

```text
{}
```

### 2123. `src/audio/ambientCue.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
his.timer !== null)
```

Mutated replacement:

```text
true
```

### 2124. `src/audio/ambientCue.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
his.timer !== null)
```

Mutated replacement:

```text
false
```

### 2125. `src/audio/ambientCue.ts:86` — NoCoverage / EqualityOperator

Original:

```text
his.timer !== null)
```

Mutated replacement:

```text
this.timer === null
```

### 2126. `src/audio/ambientCue.ts:86` — NoCoverage / CallExpression

Original:

```text
indow.clearTimeout(this.timer);
```

Mutated replacement:

```text
;
```

### 2127. `src/audio/ambientCue.ts:8` — Survived / BlockStatement

Original:

```text

  return { frequencyHz: 118, durationMs: 260, gain: 0.008, intervalMs: 6000 };
}
```

Mutated replacement:

```text
{}
```

### 2128. `src/audio/ambientCue.ts:9` — Survived / ObjectLiteral

Original:

```text
 frequencyHz: 118, durationMs: 260, gain: 0.008, intervalMs: 6000 };
```

Mutated replacement:

```text
{}
```

### 2129. `src/main.ts:10` — NoCoverage / StringLiteral

Original:

```text
--background-void",
```

Mutated replacement:

```text
""
```

### 2130. `src/main.ts:11` — NoCoverage / StringLiteral

Original:

```text
--narrative-text",
```

Mutated replacement:

```text
""
```

### 2131. `src/main.ts:13` — NoCoverage / ObjectLiteral

Original:

```text

  type: Phaser.WEBGL,
  parent: "game",
  width: 1280,
  height: 720,
  backgroundColor: DUNGEON_PALETTE.backgroundVoid,
  pixelArt: true,
  antialias: false,
  scene: MainScene,
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }
})
```

Mutated replacement:

```text
{}
```

### 2132. `src/main.ts:15` — NoCoverage / StringLiteral

Original:

```text
game",
```

Mutated replacement:

```text
""
```

### 2133. `src/main.ts:19` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 2134. `src/main.ts:20` — NoCoverage / BooleanLiteral

Original:

```text
alse,
```

Mutated replacement:

```text
true
```

### 2135. `src/main.ts:22` — NoCoverage / ObjectLiteral

Original:

```text
 mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }
```

Mutated replacement:

```text
{}
```

### 2136. `src/main.ts:27` — NoCoverage / StringLiteral

Original:

```text
pagehide",
```

Mutated replacement:

```text
""
```

### 2137. `src/main.ts:27` — NoCoverage / BlockStatement

Original:

```text

  healthCue.dispose();
  actionCue.dispose();
  ambientCue.dispose();
})
```

Mutated replacement:

```text
{}
```

### 2138. `src/main.ts:28` — NoCoverage / CallExpression

Original:

```text
ealthCue.dispose();
```

Mutated replacement:

```text
;
```

### 2139. `src/main.ts:29` — NoCoverage / CallExpression

Original:

```text
ctionCue.dispose();
```

Mutated replacement:

```text
;
```

### 2140. `src/main.ts:30` — NoCoverage / CallExpression

Original:

```text
mbientCue.dispose();
```

Mutated replacement:

```text
;
```

### 2141. `src/main.ts:33` — NoCoverage / StringLiteral

Original:

```text
section")
```

Mutated replacement:

```text
""
```

### 2142. `src/main.ts:34` — NoCoverage / StringLiteral

Original:

```text
shell-ui";
```

Mutated replacement:

```text
""
```

### 2143. `src/main.ts:35` — NoCoverage / StringLiteral

Original:

```text
<div class="start-panel" data-start><p class="eyebrow">AN ORIGINAL DUNGEON DESCENT</p><h1>THE UNDERCRYPT</h1><p class="lede">A torch, a sealed passage, and whatever waits below.</p><form><label for="seed">RUN SEED</label><input id="seed" name="seed" value="7391" autocomplete="off" inputmode="numeric"><div class="start-actions"><button type="submit">BEGIN DESCENT</button><button type="button" data-generate>GENERATE SEED</button></div></form><button type="button" data-continue hidden>CONTINUE DESCENT</button><p class="hint">W / S move · A / D turn · Q / E ring · Esc pause</p></div>
<div class="hud" data-hud hidden aria-label="Run information">
  <header class="hud-header"><div><span class="eyebrow">THE UNDERCRYPT</span><strong data-floor></strong></div><div class="location" data-location></div><div class="objective" data-objective></div><button type="button" class="pause-button" data-pause>PAUSE <span>ESC</span></button></header>
  <aside class="equipment equipment-left" aria-label="Left hand equipment"><span class="slot-label">LEFT HAND</span><strong data-left>EMPTY</strong><small data-left-detail>—</small></aside>
  <aside class="equipment equipment-right" aria-label="Right hand equipment"><span class="slot-label">RIGHT HAND</span><strong data-right>EMPTY</strong><small data-right-detail>—</small></aside>
  <section class="vitals" aria-label="Player vitality"><span class="slot-label">VITALITY</span><strong data-health></strong><div class="health-bar"><i data-health-bar></i></div></section>
  <section class="ring-dock" aria-label="Ring inventory"><div class="ring-heading"><span class="slot-label">THE RING</span><span data-ring-count></span></div><strong data-ring>EMPTY</strong><div class="ring-items" data-ring-items></div><p class="ring-hint">Q / E select · Z / X equip · R use</p></section>
  <section class="combat-card" data-combat hidden aria-label="Combat status"><div><span class="slot-label">THREAT IN VIEW</span><strong data-encounter-name></strong></div><div class="threat-health"><span data-encounter-health></span><i data-threat-bar></i></div><p data-combat-hint>SPACE left strike · F right strike · X retreat</p></section>
  <p class="feedback" data-feedback aria-live="polite"></p>
  <p class="controls">W/S MOVE <i>·</i> A/D TURN <i>·</i> Q/E RING <i>·</i> P PICK UP <i>·</i> ESC PAUSE</p>
</div>
<div class="terminal-panel" data-terminal hidden role="dialog" aria-modal="true" aria-labelledby="terminal-title"><p class="eyebrow" data-terminal-eyebrow>RUN ENDED</p><h2 id="terminal-title" data-terminal-title>THE TORCH GUTTERS</h2><p class="pause-copy" data-terminal-copy></p><div class="start-actions"><button type="button" data-restart-same>RESTART SAME SEED</button><button type="button" data-restart-new>NEW SEED</button></div></div>
<div class="pause-scrim" data-pause-scrim hidden></div><div class="pause-panel" data-pause-panel hidden role="dialog" aria-modal="true" aria-labelledby="pause-title"><p class="eyebrow">RUN PAUSED</p><h2 id="pause-title">THE TORCH HOLDS</h2><p class="pause-copy">The dungeon waits exactly where you left it.</p><button type="button" data-resume>RESUME DESCENT</button><label><input type="checkbox" data-motion> REDUCED MOTION</label><p class="hint">Keyboard focus is held by this panel.</p></div>`;
```

Mutated replacement:

```text
``
```

### 2144. `src/main.ts:48` — NoCoverage / CallExpression

Original:

```text
ocument.body.append(ui);
```

Mutated replacement:

```text
;
```

### 2145. `src/main.ts:75` — NoCoverage / BlockStatement

Original:

```text
 window.dispatchEvent(new CustomEvent(name, { detail })); };
```

Mutated replacement:

```text
{}
```

### 2146. `src/main.ts:75` — NoCoverage / ObjectLiteral

Original:

```text
 detail })
```

Mutated replacement:

```text
{}
```

### 2147. `src/main.ts:76` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("form")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("form").addEventListener
```

### 2148. `src/main.ts:76` — NoCoverage / StringLiteral

Original:

```text
form")
```

Mutated replacement:

```text
""
```

### 2149. `src/main.ts:76` — NoCoverage / StringLiteral

Original:

```text
submit",
```

Mutated replacement:

```text
""
```

### 2150. `src/main.ts:76` — NoCoverage / BlockStatement

Original:

```text
 event.preventDefault(); emit("tarmin-start", normalizeSeed(seed.value)); })
```

Mutated replacement:

```text
{}
```

### 2151. `src/main.ts:76` — NoCoverage / CallExpression

Original:

```text
vent.preventDefault(); 
```

Mutated replacement:

```text
;
```

### 2152. `src/main.ts:76` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 2153. `src/main.ts:77` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-generate]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-generate]").addEventListener
```

### 2154. `src/main.ts:77` — NoCoverage / StringLiteral

Original:

```text
[data-generate]")
```

Mutated replacement:

```text
""
```

### 2155. `src/main.ts:77` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2156. `src/main.ts:77` — NoCoverage / BlockStatement

Original:

```text
 const value = createBrowserSeed(); seed.value = String(value); emit("tarmin-start", value); })
```

Mutated replacement:

```text
{}
```

### 2157. `src/main.ts:77` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 2158. `src/main.ts:78` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-continue]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-continue]").addEventListener
```

### 2159. `src/main.ts:78` — NoCoverage / StringLiteral

Original:

```text
[data-continue]")
```

Mutated replacement:

```text
""
```

### 2160. `src/main.ts:78` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2161. `src/main.ts:78` — NoCoverage / ArrowFunction

Original:

```text
) => emit("tarmin-continue"))
```

Mutated replacement:

```text
() => undefined
```

### 2162. `src/main.ts:78` — NoCoverage / StringLiteral

Original:

```text
tarmin-continue")
```

Mutated replacement:

```text
""
```

### 2163. `src/main.ts:79` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-pause]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-pause]").addEventListener
```

### 2164. `src/main.ts:79` — NoCoverage / StringLiteral

Original:

```text
[data-pause]")
```

Mutated replacement:

```text
""
```

### 2165. `src/main.ts:79` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2166. `src/main.ts:79` — NoCoverage / ArrowFunction

Original:

```text
) => emit("tarmin-toggle-pause"))
```

Mutated replacement:

```text
() => undefined
```

### 2167. `src/main.ts:79` — NoCoverage / StringLiteral

Original:

```text
tarmin-toggle-pause")
```

Mutated replacement:

```text
""
```

### 2168. `src/main.ts:80` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-resume]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-resume]").addEventListener
```

### 2169. `src/main.ts:80` — NoCoverage / StringLiteral

Original:

```text
[data-resume]")
```

Mutated replacement:

```text
""
```

### 2170. `src/main.ts:80` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2171. `src/main.ts:80` — NoCoverage / ArrowFunction

Original:

```text
) => emit("tarmin-toggle-pause"))
```

Mutated replacement:

```text
() => undefined
```

### 2172. `src/main.ts:80` — NoCoverage / StringLiteral

Original:

```text
tarmin-toggle-pause")
```

Mutated replacement:

```text
""
```

### 2173. `src/main.ts:81` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-restart-same]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-restart-same]").addEventListener
```

### 2174. `src/main.ts:81` — NoCoverage / StringLiteral

Original:

```text
[data-restart-same]")
```

Mutated replacement:

```text
""
```

### 2175. `src/main.ts:81` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2176. `src/main.ts:81` — NoCoverage / ArrowFunction

Original:

```text
) => emit("tarmin-start", normalizeSeed(seed.value)))
```

Mutated replacement:

```text
() => undefined
```

### 2177. `src/main.ts:81` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 2178. `src/main.ts:82` — NoCoverage / OptionalChaining

Original:

```text
i.querySelector("[data-restart-new]")?.addEventListener(
```

Mutated replacement:

```text
ui.querySelector("[data-restart-new]").addEventListener
```

### 2179. `src/main.ts:82` — NoCoverage / StringLiteral

Original:

```text
[data-restart-new]")
```

Mutated replacement:

```text
""
```

### 2180. `src/main.ts:82` — NoCoverage / StringLiteral

Original:

```text
click",
```

Mutated replacement:

```text
""
```

### 2181. `src/main.ts:82` — NoCoverage / BlockStatement

Original:

```text
 const value = createBrowserSeed(); seed.value = String(value); emit("tarmin-start", value); })
```

Mutated replacement:

```text
{}
```

### 2182. `src/main.ts:82` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 2183. `src/main.ts:83` — NoCoverage / StringLiteral

Original:

```text
change",
```

Mutated replacement:

```text
""
```

### 2184. `src/main.ts:83` — NoCoverage / ArrowFunction

Original:

```text
) => emit("tarmin-motion", motion.checked))
```

Mutated replacement:

```text
() => undefined
```

### 2185. `src/main.ts:83` — NoCoverage / StringLiteral

Original:

```text
tarmin-motion",
```

Mutated replacement:

```text
""
```

### 2186. `src/main.ts:84` — NoCoverage / CallExpression

Original:

```text
indow.addEventListener("tarmin-mode", (event) => {
  const mode = (event as CustomEvent<string>).detail;
  healthCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  actionCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  ambientCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  Object.defineProperty(window, "__TARMIN_AUDIO__", { configurable: true, get: () => healthCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_ACTION_AUDIO__", { configurable: true, get: () => actionCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_AMBIENT_AUDIO__", { configurable: true, get: () => ambientCue.diagnostics() });
  const running = mode !== "menu";
  start.hidden = running; hud.hidden = !running; pausePanel.hidden = mode !== "paused"; (ui.querySelector("[data-pause-scrim]") as HTMLElement).hidden = mode !== "paused";
  terminalPanel.hidden = mode !== "defeated" && mode !== "victorious";
  if (mode === "defeated") { terminalEyebrow.textContent = "RUN ENDED"; terminalTitle.textContent = "THE TORCH GUTTERS"; terminalCopy.textContent = "The undercrypt has won this descent."; }
  if (mode === "victorious") { terminalEyebrow.textContent = "RUN COMPLETE"; terminalTitle.textContent = "THE UNDERCRYPT YIELDS"; terminalCopy.textContent = "This run is victorious. The next descent awaits."; }
  if (mode === "paused") (ui.querySelector("[data-resume]") as HTMLButtonElement).focus();
  if (mode === "defeated" || mode === "victorious") (ui.querySelector("[data-restart-same]") as HTMLButtonElement).focus();
});
```

Mutated replacement:

```text
;
```

### 2187. `src/main.ts:84` — NoCoverage / StringLiteral

Original:

```text
tarmin-mode",
```

Mutated replacement:

```text
""
```

### 2188. `src/main.ts:84` — NoCoverage / BlockStatement

Original:

```text

  const mode = (event as CustomEvent<string>).detail;
  healthCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  actionCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  ambientCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  Object.defineProperty(window, "__TARMIN_AUDIO__", { configurable: true, get: () => healthCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_ACTION_AUDIO__", { configurable: true, get: () => actionCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_AMBIENT_AUDIO__", { configurable: true, get: () => ambientCue.diagnostics() });
  const running = mode !== "menu";
  start.hidden = running; hud.hidden = !running; pausePanel.hidden = mode !== "paused"; (ui.querySelector("[data-pause-scrim]") as HTMLElement).hidden = mode !== "paused";
  terminalPanel.hidden = mode !== "defeated" && mode !== "victorious";
  if (mode === "defeated") { terminalEyebrow.textContent = "RUN ENDED"; terminalTitle.textContent = "THE TORCH GUTTERS"; terminalCopy.textContent = "The undercrypt has won this descent."; }
  if (mode === "victorious") { terminalEyebrow.textContent = "RUN COMPLETE"; terminalTitle.textContent = "THE UNDERCRYPT YIELDS"; terminalCopy.textContent = "This run is victorious. The next descent awaits."; }
  if (mode === "paused") (ui.querySelector("[data-resume]") as HTMLButtonElement).focus();
  if (mode === "defeated" || mode === "victorious") (ui.querySelector("[data-restart-same]") as HTMLButtonElement).focus();
})
```

Mutated replacement:

```text
{}
```

### 2189. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
true
```

### 2190. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
false
```

### 2191. `src/main.ts:86` — NoCoverage / EqualityOperator

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
mode !== "active"
```

### 2192. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2193. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2194. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
true
```

### 2195. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
false
```

### 2196. `src/main.ts:86` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
mode !== "paused"
```

### 2197. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2198. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2199. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
true
```

### 2200. `src/main.ts:86` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 2201. `src/main.ts:86` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 2202. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2203. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2204. `src/main.ts:86` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 2205. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
true
```

### 2206. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
false
```

### 2207. `src/main.ts:87` — NoCoverage / EqualityOperator

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
mode !== "active"
```

### 2208. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2209. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2210. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
true
```

### 2211. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
false
```

### 2212. `src/main.ts:87` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
mode !== "paused"
```

### 2213. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2214. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2215. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
true
```

### 2216. `src/main.ts:87` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 2217. `src/main.ts:87` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 2218. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2219. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2220. `src/main.ts:87` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 2221. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
true
```

### 2222. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
false
```

### 2223. `src/main.ts:88` — NoCoverage / EqualityOperator

Original:

```text
ode === "active" 
```

Mutated replacement:

```text
mode !== "active"
```

### 2224. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2225. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
active" 
```

Mutated replacement:

```text
""
```

### 2226. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
true
```

### 2227. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
false
```

### 2228. `src/main.ts:88` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused" 
```

Mutated replacement:

```text
mode !== "paused"
```

### 2229. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2230. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
paused" 
```

Mutated replacement:

```text
""
```

### 2231. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
true
```

### 2232. `src/main.ts:88` — NoCoverage / ConditionalExpression

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
false
```

### 2233. `src/main.ts:88` — NoCoverage / EqualityOperator

Original:

```text
ode === "menu" 
```

Mutated replacement:

```text
mode !== "menu"
```

### 2234. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2235. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
menu" 
```

Mutated replacement:

```text
""
```

### 2236. `src/main.ts:88` — NoCoverage / StringLiteral

Original:

```text
terminal")
```

Mutated replacement:

```text
""
```

### 2237. `src/main.ts:89` — NoCoverage / StringLiteral

Original:

```text
__TARMIN_AUDIO__",
```

Mutated replacement:

```text
""
```

### 2238. `src/main.ts:89` — NoCoverage / ObjectLiteral

Original:

```text
 configurable: true, get: () => healthCue.diagnostics() })
```

Mutated replacement:

```text
{}
```

### 2239. `src/main.ts:89` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 2240. `src/main.ts:89` — NoCoverage / ArrowFunction

Original:

```text
) => healthCue.diagnostics() 
```

Mutated replacement:

```text
() => undefined
```

### 2241. `src/main.ts:90` — NoCoverage / StringLiteral

Original:

```text
__TARMIN_ACTION_AUDIO__",
```

Mutated replacement:

```text
""
```

### 2242. `src/main.ts:90` — NoCoverage / ObjectLiteral

Original:

```text
 configurable: true, get: () => actionCue.diagnostics() })
```

Mutated replacement:

```text
{}
```

### 2243. `src/main.ts:90` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 2244. `src/main.ts:90` — NoCoverage / ArrowFunction

Original:

```text
) => actionCue.diagnostics() 
```

Mutated replacement:

```text
() => undefined
```

### 2245. `src/main.ts:91` — NoCoverage / StringLiteral

Original:

```text
__TARMIN_AMBIENT_AUDIO__",
```

Mutated replacement:

```text
""
```

### 2246. `src/main.ts:91` — NoCoverage / ObjectLiteral

Original:

```text
 configurable: true, get: () => ambientCue.diagnostics() })
```

Mutated replacement:

```text
{}
```

### 2247. `src/main.ts:91` — NoCoverage / BooleanLiteral

Original:

```text
rue,
```

Mutated replacement:

```text
false
```

### 2248. `src/main.ts:91` — NoCoverage / ArrowFunction

Original:

```text
) => ambientCue.diagnostics() 
```

Mutated replacement:

```text
() => undefined
```

### 2249. `src/main.ts:92` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "menu";
```

Mutated replacement:

```text
true
```

### 2250. `src/main.ts:92` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "menu";
```

Mutated replacement:

```text
false
```

### 2251. `src/main.ts:92` — NoCoverage / EqualityOperator

Original:

```text
ode !== "menu";
```

Mutated replacement:

```text
mode === "menu"
```

### 2252. `src/main.ts:92` — NoCoverage / StringLiteral

Original:

```text
menu";
```

Mutated replacement:

```text
""
```

### 2253. `src/main.ts:93` — NoCoverage / BooleanLiteral

Original:

```text
running;
```

Mutated replacement:

```text
running
```

### 2254. `src/main.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
true
```

### 2255. `src/main.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
false
```

### 2256. `src/main.ts:93` — NoCoverage / EqualityOperator

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
mode === "paused"
```

### 2257. `src/main.ts:93` — NoCoverage / StringLiteral

Original:

```text
paused";
```

Mutated replacement:

```text
""
```

### 2258. `src/main.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
true
```

### 2259. `src/main.ts:93` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
false
```

### 2260. `src/main.ts:93` — NoCoverage / EqualityOperator

Original:

```text
ode !== "paused";
```

Mutated replacement:

```text
mode === "paused"
```

### 2261. `src/main.ts:93` — NoCoverage / StringLiteral

Original:

```text
paused";
```

Mutated replacement:

```text
""
```

### 2262. `src/main.ts:94` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "defeated" && mode !== "victorious";
```

Mutated replacement:

```text
true
```

### 2263. `src/main.ts:94` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "defeated" && mode !== "victorious";
```

Mutated replacement:

```text
false
```

### 2264. `src/main.ts:94` — NoCoverage / LogicalOperator

Original:

```text
ode !== "defeated" && mode !== "victorious";
```

Mutated replacement:

```text
mode !== "defeated" || mode !== "victorious"
```

### 2265. `src/main.ts:94` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "defeated" 
```

Mutated replacement:

```text
true
```

### 2266. `src/main.ts:94` — NoCoverage / EqualityOperator

Original:

```text
ode !== "defeated" 
```

Mutated replacement:

```text
mode === "defeated"
```

### 2267. `src/main.ts:94` — NoCoverage / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 2268. `src/main.ts:94` — NoCoverage / ConditionalExpression

Original:

```text
ode !== "victorious";
```

Mutated replacement:

```text
true
```

### 2269. `src/main.ts:94` — NoCoverage / EqualityOperator

Original:

```text
ode !== "victorious";
```

Mutated replacement:

```text
mode === "victorious"
```

### 2270. `src/main.ts:94` — NoCoverage / StringLiteral

Original:

```text
victorious";
```

Mutated replacement:

```text
""
```

### 2271. `src/main.ts:95` — NoCoverage / ConditionalExpression

Original:

```text
ode === "defeated")
```

Mutated replacement:

```text
true
```

### 2272. `src/main.ts:95` — NoCoverage / ConditionalExpression

Original:

```text
ode === "defeated")
```

Mutated replacement:

```text
false
```

### 2273. `src/main.ts:95` — NoCoverage / EqualityOperator

Original:

```text
ode === "defeated")
```

Mutated replacement:

```text
mode !== "defeated"
```

### 2274. `src/main.ts:95` — NoCoverage / StringLiteral

Original:

```text
defeated")
```

Mutated replacement:

```text
""
```

### 2275. `src/main.ts:95` — NoCoverage / BlockStatement

Original:

```text
 terminalEyebrow.textContent = "RUN ENDED"; terminalTitle.textContent = "THE TORCH GUTTERS"; terminalCopy.textContent = "The undercrypt has won this descent."; }
```

Mutated replacement:

```text
{}
```

### 2276. `src/main.ts:95` — NoCoverage / StringLiteral

Original:

```text
RUN ENDED";
```

Mutated replacement:

```text
""
```

### 2277. `src/main.ts:95` — NoCoverage / StringLiteral

Original:

```text
THE TORCH GUTTERS";
```

Mutated replacement:

```text
""
```

### 2278. `src/main.ts:95` — NoCoverage / StringLiteral

Original:

```text
The undercrypt has won this descent.";
```

Mutated replacement:

```text
""
```

### 2279. `src/main.ts:96` — NoCoverage / ConditionalExpression

Original:

```text
ode === "victorious")
```

Mutated replacement:

```text
true
```

### 2280. `src/main.ts:96` — NoCoverage / ConditionalExpression

Original:

```text
ode === "victorious")
```

Mutated replacement:

```text
false
```

### 2281. `src/main.ts:96` — NoCoverage / EqualityOperator

Original:

```text
ode === "victorious")
```

Mutated replacement:

```text
mode !== "victorious"
```

### 2282. `src/main.ts:96` — NoCoverage / StringLiteral

Original:

```text
victorious")
```

Mutated replacement:

```text
""
```

### 2283. `src/main.ts:96` — NoCoverage / BlockStatement

Original:

```text
 terminalEyebrow.textContent = "RUN COMPLETE"; terminalTitle.textContent = "THE UNDERCRYPT YIELDS"; terminalCopy.textContent = "This run is victorious. The next descent awaits."; }
```

Mutated replacement:

```text
{}
```

### 2284. `src/main.ts:96` — NoCoverage / StringLiteral

Original:

```text
RUN COMPLETE";
```

Mutated replacement:

```text
""
```

### 2285. `src/main.ts:96` — NoCoverage / StringLiteral

Original:

```text
THE UNDERCRYPT YIELDS";
```

Mutated replacement:

```text
""
```

### 2286. `src/main.ts:96` — NoCoverage / StringLiteral

Original:

```text
This run is victorious. The next descent awaits.";
```

Mutated replacement:

```text
""
```

### 2287. `src/main.ts:97` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
true
```

### 2288. `src/main.ts:97` — NoCoverage / ConditionalExpression

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
false
```

### 2289. `src/main.ts:97` — NoCoverage / EqualityOperator

Original:

```text
ode === "paused")
```

Mutated replacement:

```text
mode !== "paused"
```

### 2290. `src/main.ts:97` — NoCoverage / StringLiteral

Original:

```text
paused")
```

Mutated replacement:

```text
""
```

### 2291. `src/main.ts:97` — NoCoverage / CallExpression

Original:

```text
ui.querySelector("[data-resume]") as HTMLButtonElement).focus();
```

Mutated replacement:

```text
;
```

### 2292. `src/main.ts:98` — NoCoverage / ConditionalExpression

Original:

```text
ode === "defeated" || mode === "victorious")
```

Mutated replacement:

```text
true
```

### 2293. `src/main.ts:98` — NoCoverage / ConditionalExpression

Original:

```text
ode === "defeated" || mode === "victorious")
```

Mutated replacement:

```text
false
```

### 2294. `src/main.ts:98` — NoCoverage / LogicalOperator

Original:

```text
ode === "defeated" || mode === "victorious")
```

Mutated replacement:

```text
mode === "defeated" && mode === "victorious"
```

### 2295. `src/main.ts:98` — NoCoverage / ConditionalExpression

Original:

```text
ode === "defeated" 
```

Mutated replacement:

```text
false
```

### 2296. `src/main.ts:98` — NoCoverage / EqualityOperator

Original:

```text
ode === "defeated" 
```

Mutated replacement:

```text
mode !== "defeated"
```

### 2297. `src/main.ts:98` — NoCoverage / StringLiteral

Original:

```text
defeated" 
```

Mutated replacement:

```text
""
```

### 2298. `src/main.ts:98` — NoCoverage / ConditionalExpression

Original:

```text
ode === "victorious")
```

Mutated replacement:

```text
false
```

### 2299. `src/main.ts:98` — NoCoverage / EqualityOperator

Original:

```text
ode === "victorious")
```

Mutated replacement:

```text
mode !== "victorious"
```

### 2300. `src/main.ts:98` — NoCoverage / StringLiteral

Original:

```text
victorious")
```

Mutated replacement:

```text
""
```

### 2301. `src/main.ts:98` — NoCoverage / CallExpression

Original:

```text
ui.querySelector("[data-restart-same]") as HTMLButtonElement).focus();
```

Mutated replacement:

```text
;
```

### 2302. `src/main.ts:100` — NoCoverage / CallExpression

Original:

```text
indow.addEventListener("tarmin-events", (event) => {
  const events = (event as CustomEvent<readonly { type: string }[]>).detail;
  if (events.some((value) => value.type === "encounterStarted")) actionCue.play("encounter" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemAcquired")) actionCue.play("pickup" satisfies ActionCueKind);
  if (events.some((value) => value.type === "attackAttempt")) actionCue.play("attack" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemUsed")) actionCue.play("use" satisfies ActionCueKind);
});
```

Mutated replacement:

```text
;
```

### 2303. `src/main.ts:100` — NoCoverage / StringLiteral

Original:

```text
tarmin-events",
```

Mutated replacement:

```text
""
```

### 2304. `src/main.ts:100` — NoCoverage / BlockStatement

Original:

```text

  const events = (event as CustomEvent<readonly { type: string }[]>).detail;
  if (events.some((value) => value.type === "encounterStarted")) actionCue.play("encounter" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemAcquired")) actionCue.play("pickup" satisfies ActionCueKind);
  if (events.some((value) => value.type === "attackAttempt")) actionCue.play("attack" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemUsed")) actionCue.play("use" satisfies ActionCueKind);
})
```

Mutated replacement:

```text
{}
```

### 2305. `src/main.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "encounterStarted"))
```

Mutated replacement:

```text
true
```

### 2306. `src/main.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "encounterStarted"))
```

Mutated replacement:

```text
false
```

### 2307. `src/main.ts:102` — NoCoverage / MethodExpression

Original:

```text
vents.some((value) => value.type === "encounterStarted"))
```

Mutated replacement:

```text
events.every(value => value.type === "encounterStarted")
```

### 2308. `src/main.ts:102` — NoCoverage / ArrowFunction

Original:

```text
value) => value.type === "encounterStarted")
```

Mutated replacement:

```text
() => undefined
```

### 2309. `src/main.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "encounterStarted")
```

Mutated replacement:

```text
true
```

### 2310. `src/main.ts:102` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "encounterStarted")
```

Mutated replacement:

```text
false
```

### 2311. `src/main.ts:102` — NoCoverage / EqualityOperator

Original:

```text
alue.type === "encounterStarted")
```

Mutated replacement:

```text
value.type !== "encounterStarted"
```

### 2312. `src/main.ts:102` — NoCoverage / StringLiteral

Original:

```text
encounterStarted")
```

Mutated replacement:

```text
""
```

### 2313. `src/main.ts:102` — NoCoverage / StringLiteral

Original:

```text
encounter" 
```

Mutated replacement:

```text
""
```

### 2314. `src/main.ts:103` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "itemAcquired"))
```

Mutated replacement:

```text
true
```

### 2315. `src/main.ts:103` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "itemAcquired"))
```

Mutated replacement:

```text
false
```

### 2316. `src/main.ts:103` — NoCoverage / MethodExpression

Original:

```text
vents.some((value) => value.type === "itemAcquired"))
```

Mutated replacement:

```text
events.every(value => value.type === "itemAcquired")
```

### 2317. `src/main.ts:103` — NoCoverage / ArrowFunction

Original:

```text
value) => value.type === "itemAcquired")
```

Mutated replacement:

```text
() => undefined
```

### 2318. `src/main.ts:103` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "itemAcquired")
```

Mutated replacement:

```text
true
```

### 2319. `src/main.ts:103` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "itemAcquired")
```

Mutated replacement:

```text
false
```

### 2320. `src/main.ts:103` — NoCoverage / EqualityOperator

Original:

```text
alue.type === "itemAcquired")
```

Mutated replacement:

```text
value.type !== "itemAcquired"
```

### 2321. `src/main.ts:103` — NoCoverage / StringLiteral

Original:

```text
itemAcquired")
```

Mutated replacement:

```text
""
```

### 2322. `src/main.ts:103` — NoCoverage / StringLiteral

Original:

```text
pickup" 
```

Mutated replacement:

```text
""
```

### 2323. `src/main.ts:104` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "attackAttempt"))
```

Mutated replacement:

```text
true
```

### 2324. `src/main.ts:104` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "attackAttempt"))
```

Mutated replacement:

```text
false
```

### 2325. `src/main.ts:104` — NoCoverage / MethodExpression

Original:

```text
vents.some((value) => value.type === "attackAttempt"))
```

Mutated replacement:

```text
events.every(value => value.type === "attackAttempt")
```

### 2326. `src/main.ts:104` — NoCoverage / ArrowFunction

Original:

```text
value) => value.type === "attackAttempt")
```

Mutated replacement:

```text
() => undefined
```

### 2327. `src/main.ts:104` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "attackAttempt")
```

Mutated replacement:

```text
true
```

### 2328. `src/main.ts:104` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "attackAttempt")
```

Mutated replacement:

```text
false
```

### 2329. `src/main.ts:104` — NoCoverage / EqualityOperator

Original:

```text
alue.type === "attackAttempt")
```

Mutated replacement:

```text
value.type !== "attackAttempt"
```

### 2330. `src/main.ts:104` — NoCoverage / StringLiteral

Original:

```text
attackAttempt")
```

Mutated replacement:

```text
""
```

### 2331. `src/main.ts:104` — NoCoverage / StringLiteral

Original:

```text
attack" 
```

Mutated replacement:

```text
""
```

### 2332. `src/main.ts:105` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "itemUsed"))
```

Mutated replacement:

```text
true
```

### 2333. `src/main.ts:105` — NoCoverage / ConditionalExpression

Original:

```text
vents.some((value) => value.type === "itemUsed"))
```

Mutated replacement:

```text
false
```

### 2334. `src/main.ts:105` — NoCoverage / MethodExpression

Original:

```text
vents.some((value) => value.type === "itemUsed"))
```

Mutated replacement:

```text
events.every(value => value.type === "itemUsed")
```

### 2335. `src/main.ts:105` — NoCoverage / ArrowFunction

Original:

```text
value) => value.type === "itemUsed")
```

Mutated replacement:

```text
() => undefined
```

### 2336. `src/main.ts:105` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "itemUsed")
```

Mutated replacement:

```text
true
```

### 2337. `src/main.ts:105` — NoCoverage / ConditionalExpression

Original:

```text
alue.type === "itemUsed")
```

Mutated replacement:

```text
false
```

### 2338. `src/main.ts:105` — NoCoverage / EqualityOperator

Original:

```text
alue.type === "itemUsed")
```

Mutated replacement:

```text
value.type !== "itemUsed"
```

### 2339. `src/main.ts:105` — NoCoverage / StringLiteral

Original:

```text
itemUsed")
```

Mutated replacement:

```text
""
```

### 2340. `src/main.ts:105` — NoCoverage / StringLiteral

Original:

```text
use" 
```

Mutated replacement:

```text
""
```

### 2341. `src/main.ts:107` — NoCoverage / CallExpression

Original:

```text
indow.addEventListener("tarmin-state", (event) => {
  const detail = (event as CustomEvent<{ floor: number; turn: number; health: number; maxHealth: number; feedback: string; seed: number; runStatus: string; facing: string; position: { x: number; y: number }; leftHand: string | null; rightHand: string | null; leftDetail: string; rightDetail: string; ring: readonly string[]; selectedRingIndex: number; objective: { acquired: boolean; complete: boolean; exit: { x: number; y: number } }; encounter: { name: string; health: number; maxHealth: number } | null }>).detail;
  floor.textContent = `FLOOR ${detail.floor} · TURN ${detail.turn} · SEED ${detail.seed}`;
  location.textContent = `${detail.position.x},${detail.position.y} · FACING ${detail.facing.toUpperCase()}`;
  objective.textContent = detail.objective.complete ? "OBJECTIVE COMPLETE" : detail.objective.acquired ? `SEAL FOUND · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}` : `FIND SEAL · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}`;
  health.textContent = `${detail.health}/${detail.maxHealth}`;
  healthCue.update(detail.health, detail.maxHealth);
  healthBar.style.width = `${Math.max(0, Math.min(100, detail.health / detail.maxHealth * 100))}%`;
  feedback.textContent = detail.feedback;
  left.textContent = detail.leftHand ?? "EMPTY"; right.textContent = detail.rightHand ?? "EMPTY";
  leftDetail.textContent = detail.leftDetail; rightDetail.textContent = detail.rightDetail;
  ringCount.textContent = `${detail.ring.length}/6`; ring.textContent = detail.ring.length ? detail.ring[detail.selectedRingIndex] ?? "EMPTY" : "EMPTY";
  ringItems.replaceChildren(...detail.ring.map((item, index) => { const marker = document.createElement("span"); marker.className = index === detail.selectedRingIndex ? "selected" : ""; marker.textContent = item.slice(0, 1); marker.setAttribute("aria-label", `${item}${index === detail.selectedRingIndex ? ", selected" : ""}`); return marker; }));
  combatCard.hidden = !detail.encounter;
  if (detail.encounter) { encounterName.textContent = detail.encounter.name; encounterHealth.textContent = `${detail.encounter.health}/${detail.encounter.maxHealth} HP`; threatBar.style.width = `${Math.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}%`; }
});
```

Mutated replacement:

```text
;
```

### 2342. `src/main.ts:107` — NoCoverage / StringLiteral

Original:

```text
tarmin-state",
```

Mutated replacement:

```text
""
```

### 2343. `src/main.ts:107` — NoCoverage / BlockStatement

Original:

```text

  const detail = (event as CustomEvent<{ floor: number; turn: number; health: number; maxHealth: number; feedback: string; seed: number; runStatus: string; facing: string; position: { x: number; y: number }; leftHand: string | null; rightHand: string | null; leftDetail: string; rightDetail: string; ring: readonly string[]; selectedRingIndex: number; objective: { acquired: boolean; complete: boolean; exit: { x: number; y: number } }; encounter: { name: string; health: number; maxHealth: number } | null }>).detail;
  floor.textContent = `FLOOR ${detail.floor} · TURN ${detail.turn} · SEED ${detail.seed}`;
  location.textContent = `${detail.position.x},${detail.position.y} · FACING ${detail.facing.toUpperCase()}`;
  objective.textContent = detail.objective.complete ? "OBJECTIVE COMPLETE" : detail.objective.acquired ? `SEAL FOUND · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}` : `FIND SEAL · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}`;
  health.textContent = `${detail.health}/${detail.maxHealth}`;
  healthCue.update(detail.health, detail.maxHealth);
  healthBar.style.width = `${Math.max(0, Math.min(100, detail.health / detail.maxHealth * 100))}%`;
  feedback.textContent = detail.feedback;
  left.textContent = detail.leftHand ?? "EMPTY"; right.textContent = detail.rightHand ?? "EMPTY";
  leftDetail.textContent = detail.leftDetail; rightDetail.textContent = detail.rightDetail;
  ringCount.textContent = `${detail.ring.length}/6`; ring.textContent = detail.ring.length ? detail.ring[detail.selectedRingIndex] ?? "EMPTY" : "EMPTY";
  ringItems.replaceChildren(...detail.ring.map((item, index) => { const marker = document.createElement("span"); marker.className = index === detail.selectedRingIndex ? "selected" : ""; marker.textContent = item.slice(0, 1); marker.setAttribute("aria-label", `${item}${index === detail.selectedRingIndex ? ", selected" : ""}`); return marker; }));
  combatCard.hidden = !detail.encounter;
  if (detail.encounter) { encounterName.textContent = detail.encounter.name; encounterHealth.textContent = `${detail.encounter.health}/${detail.encounter.maxHealth} HP`; threatBar.style.width = `${Math.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}%`; }
})
```

Mutated replacement:

```text
{}
```

### 2344. `src/main.ts:109` — NoCoverage / StringLiteral

Original:

```text
FLOOR ${detail.floor} · TURN ${detail.turn} · SEED ${detail.seed}`;
```

Mutated replacement:

```text
``
```

### 2345. `src/main.ts:110` — NoCoverage / StringLiteral

Original:

```text
${detail.position.x},${detail.position.y} · FACING ${detail.facing.toUpperCase()}`;
```

Mutated replacement:

```text
``
```

### 2346. `src/main.ts:110` — NoCoverage / MethodExpression

Original:

```text
etail.facing.toUpperCase()}
```

Mutated replacement:

```text
detail.facing.toLowerCase()
```

### 2347. `src/main.ts:111` — NoCoverage / StringLiteral

Original:

```text
OBJECTIVE COMPLETE" 
```

Mutated replacement:

```text
""
```

### 2348. `src/main.ts:111` — NoCoverage / StringLiteral

Original:

```text
SEAL FOUND · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}` 
```

Mutated replacement:

```text
``
```

### 2349. `src/main.ts:111` — NoCoverage / StringLiteral

Original:

```text
FIND SEAL · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}`;
```

Mutated replacement:

```text
``
```

### 2350. `src/main.ts:112` — NoCoverage / StringLiteral

Original:

```text
${detail.health}/${detail.maxHealth}`;
```

Mutated replacement:

```text
``
```

### 2351. `src/main.ts:113` — NoCoverage / CallExpression

Original:

```text
ealthCue.update(detail.health, detail.maxHealth);
```

Mutated replacement:

```text
;
```

### 2352. `src/main.ts:114` — NoCoverage / StringLiteral

Original:

```text
${Math.max(0, Math.min(100, detail.health / detail.maxHealth * 100))}%`;
```

Mutated replacement:

```text
``
```

### 2353. `src/main.ts:114` — NoCoverage / MethodExpression

Original:

```text
ath.max(0, Math.min(100, detail.health / detail.maxHealth * 100))}
```

Mutated replacement:

```text
Math.min(0, Math.min(100, detail.health / detail.maxHealth * 100))
```

### 2354. `src/main.ts:114` — NoCoverage / MethodExpression

Original:

```text
ath.min(100, detail.health / detail.maxHealth * 100))
```

Mutated replacement:

```text
Math.max(100, detail.health / detail.maxHealth * 100)
```

### 2355. `src/main.ts:114` — NoCoverage / ArithmeticOperator

Original:

```text
etail.health / detail.maxHealth * 100)
```

Mutated replacement:

```text
detail.health / detail.maxHealth / 100
```

### 2356. `src/main.ts:114` — NoCoverage / ArithmeticOperator

Original:

```text
etail.health / detail.maxHealth 
```

Mutated replacement:

```text
detail.health * detail.maxHealth
```

### 2357. `src/main.ts:116` — NoCoverage / LogicalOperator

Original:

```text
etail.leftHand ?? "EMPTY";
```

Mutated replacement:

```text
detail.leftHand && "EMPTY"
```

### 2358. `src/main.ts:116` — NoCoverage / StringLiteral

Original:

```text
EMPTY";
```

Mutated replacement:

```text
""
```

### 2359. `src/main.ts:116` — NoCoverage / LogicalOperator

Original:

```text
etail.rightHand ?? "EMPTY";
```

Mutated replacement:

```text
detail.rightHand && "EMPTY"
```

### 2360. `src/main.ts:116` — NoCoverage / StringLiteral

Original:

```text
EMPTY";
```

Mutated replacement:

```text
""
```

### 2361. `src/main.ts:118` — NoCoverage / StringLiteral

Original:

```text
${detail.ring.length}/6`;
```

Mutated replacement:

```text
``
```

### 2362. `src/main.ts:118` — NoCoverage / LogicalOperator

Original:

```text
etail.ring[detail.selectedRingIndex] ?? "EMPTY" 
```

Mutated replacement:

```text
detail.ring[detail.selectedRingIndex] && "EMPTY"
```

### 2363. `src/main.ts:118` — NoCoverage / StringLiteral

Original:

```text
EMPTY" 
```

Mutated replacement:

```text
""
```

### 2364. `src/main.ts:118` — NoCoverage / StringLiteral

Original:

```text
EMPTY";
```

Mutated replacement:

```text
""
```

### 2365. `src/main.ts:119` — NoCoverage / BlockStatement

Original:

```text
 const marker = document.createElement("span"); marker.className = index === detail.selectedRingIndex ? "selected" : ""; marker.textContent = item.slice(0, 1); marker.setAttribute("aria-label", `${item}${index === detail.selectedRingIndex ? ", selected" : ""}`); return marker; })
```

Mutated replacement:

```text
{}
```

### 2366. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
span")
```

Mutated replacement:

```text
""
```

### 2367. `src/main.ts:119` — NoCoverage / ConditionalExpression

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
true
```

### 2368. `src/main.ts:119` — NoCoverage / ConditionalExpression

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
false
```

### 2369. `src/main.ts:119` — NoCoverage / EqualityOperator

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
index !== detail.selectedRingIndex
```

### 2370. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
selected" 
```

Mutated replacement:

```text
""
```

### 2371. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
";
```

Mutated replacement:

```text
"Stryker was here!"
```

### 2372. `src/main.ts:119` — NoCoverage / MethodExpression

Original:

```text
tem.slice(0, 1);
```

Mutated replacement:

```text
item
```

### 2373. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
aria-label",
```

Mutated replacement:

```text
""
```

### 2374. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
${item}${index === detail.selectedRingIndex ? ", selected" : ""}`)
```

Mutated replacement:

```text
``
```

### 2375. `src/main.ts:119` — NoCoverage / ConditionalExpression

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
true
```

### 2376. `src/main.ts:119` — NoCoverage / ConditionalExpression

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
false
```

### 2377. `src/main.ts:119` — NoCoverage / EqualityOperator

Original:

```text
ndex === detail.selectedRingIndex 
```

Mutated replacement:

```text
index !== detail.selectedRingIndex
```

### 2378. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
, selected" 
```

Mutated replacement:

```text
""
```

### 2379. `src/main.ts:119` — NoCoverage / StringLiteral

Original:

```text
"}
```

Mutated replacement:

```text
"Stryker was here!"
```

### 2380. `src/main.ts:120` — NoCoverage / BooleanLiteral

Original:

```text
detail.encounter;
```

Mutated replacement:

```text
detail.encounter
```

### 2381. `src/main.ts:121` — NoCoverage / ConditionalExpression

Original:

```text
etail.encounter)
```

Mutated replacement:

```text
true
```

### 2382. `src/main.ts:121` — NoCoverage / ConditionalExpression

Original:

```text
etail.encounter)
```

Mutated replacement:

```text
false
```

### 2383. `src/main.ts:121` — NoCoverage / BlockStatement

Original:

```text
 encounterName.textContent = detail.encounter.name; encounterHealth.textContent = `${detail.encounter.health}/${detail.encounter.maxHealth} HP`; threatBar.style.width = `${Math.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}%`; }
```

Mutated replacement:

```text
{}
```

### 2384. `src/main.ts:121` — NoCoverage / StringLiteral

Original:

```text
${detail.encounter.health}/${detail.encounter.maxHealth} HP`;
```

Mutated replacement:

```text
``
```

### 2385. `src/main.ts:121` — NoCoverage / StringLiteral

Original:

```text
${Math.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}%`;
```

Mutated replacement:

```text
``
```

### 2386. `src/main.ts:121` — NoCoverage / MethodExpression

Original:

```text
ath.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}
```

Mutated replacement:

```text
Math.min(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))
```

### 2387. `src/main.ts:121` — NoCoverage / MethodExpression

Original:

```text
ath.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))
```

Mutated replacement:

```text
Math.max(100, detail.encounter.health / detail.encounter.maxHealth * 100)
```

### 2388. `src/main.ts:121` — NoCoverage / ArithmeticOperator

Original:

```text
etail.encounter.health / detail.encounter.maxHealth * 100)
```

Mutated replacement:

```text
detail.encounter.health / detail.encounter.maxHealth / 100
```

### 2389. `src/main.ts:121` — NoCoverage / ArithmeticOperator

Original:

```text
etail.encounter.health / detail.encounter.maxHealth 
```

Mutated replacement:

```text
detail.encounter.health * detail.encounter.maxHealth
```

### 2390. `src/main.ts:123` — NoCoverage / StringLiteral

Original:

```text
tarmin-start",
```

Mutated replacement:

```text
""
```

### 2391. `src/main.ts:123` — NoCoverage / BlockStatement

Original:

```text
 document.body.classList.add("in-run"); })
```

Mutated replacement:

```text
{}
```

### 2392. `src/main.ts:123` — NoCoverage / StringLiteral

Original:

```text
in-run")
```

Mutated replacement:

```text
""
```

### 2393. `src/main.ts:124` — NoCoverage / CallExpression

Original:

```text
indow.addEventListener("tarmin-checkpoint", (event) => { (ui.querySelector("[data-continue]") as HTMLButtonElement).hidden = !(event as CustomEvent<boolean>).detail; });
```

Mutated replacement:

```text
;
```

### 2394. `src/main.ts:124` — NoCoverage / StringLiteral

Original:

```text
tarmin-checkpoint",
```

Mutated replacement:

```text
""
```

### 2395. `src/main.ts:124` — NoCoverage / BlockStatement

Original:

```text
 (ui.querySelector("[data-continue]") as HTMLButtonElement).hidden = !(event as CustomEvent<boolean>).detail; })
```

Mutated replacement:

```text
{}
```

### 2396. `src/main.ts:124` — NoCoverage / BooleanLiteral

Original:

```text
(event as CustomEvent<boolean>).detail;
```

Mutated replacement:

```text
(event as CustomEvent<boolean>).detail
```

### 2397. `src/save/checkpoint.ts:17` — NoCoverage / BlockStatement

Original:

```text

  try { return typeof window === "undefined" ? null : window.localStorage; } catch { return null; }
}
```

Mutated replacement:

```text
{}
```

### 2398. `src/save/checkpoint.ts:18` — NoCoverage / BlockStatement

Original:

```text
 return typeof window === "undefined" ? null : window.localStorage; } 
```

Mutated replacement:

```text
{}
```

### 2399. `src/save/checkpoint.ts:18` — NoCoverage / ConditionalExpression

Original:

```text
ypeof window === "undefined" 
```

Mutated replacement:

```text
true
```

### 2400. `src/save/checkpoint.ts:18` — NoCoverage / ConditionalExpression

Original:

```text
ypeof window === "undefined" 
```

Mutated replacement:

```text
false
```

### 2401. `src/save/checkpoint.ts:18` — NoCoverage / EqualityOperator

Original:

```text
ypeof window === "undefined" 
```

Mutated replacement:

```text
typeof window !== "undefined"
```

### 2402. `src/save/checkpoint.ts:18` — NoCoverage / StringLiteral

Original:

```text
undefined" 
```

Mutated replacement:

```text
""
```

### 2403. `src/save/checkpoint.ts:18` — NoCoverage / BlockStatement

Original:

```text
 return null; }
```

Mutated replacement:

```text
{}
```

### 2404. `src/save/checkpoint.ts:22` — NoCoverage / BooleanLiteral

Original:

```text
alse;
```

Mutated replacement:

```text
true
```

### 2405. `src/save/checkpoint.ts:21` — Survived / BlockStatement

Original:

```text

  if (!value || typeof value !== "object") return false;
  const state = value as Partial<GameState>;
  return state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" && state.objective !== null;
}
```

Mutated replacement:

```text
{}
```

### 2406. `src/save/checkpoint.ts:22` — Survived / ConditionalExpression

Original:

```text
value || typeof value !== "object")
```

Mutated replacement:

```text
true
```

### 2407. `src/save/checkpoint.ts:22` — Survived / ConditionalExpression

Original:

```text
value || typeof value !== "object")
```

Mutated replacement:

```text
false
```

### 2408. `src/save/checkpoint.ts:22` — Survived / LogicalOperator

Original:

```text
value || typeof value !== "object")
```

Mutated replacement:

```text
!value && typeof value !== "object"
```

### 2409. `src/save/checkpoint.ts:22` — Survived / ConditionalExpression

Original:

```text
ypeof value !== "object")
```

Mutated replacement:

```text
false
```

### 2410. `src/save/checkpoint.ts:22` — Survived / EqualityOperator

Original:

```text
ypeof value !== "object")
```

Mutated replacement:

```text
typeof value === "object"
```

### 2411. `src/save/checkpoint.ts:22` — Survived / BooleanLiteral

Original:

```text
value 
```

Mutated replacement:

```text
value
```

### 2412. `src/save/checkpoint.ts:22` — Survived / StringLiteral

Original:

```text
object")
```

Mutated replacement:

```text
""
```

### 2413. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" && state.objective !== null;
```

Mutated replacement:

```text
true
```

### 2414. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" && state.objective !== null;
```

Mutated replacement:

```text
false
```

### 2415. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" 
```

Mutated replacement:

```text
true
```

### 2416. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" && state.objective !== null;
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot) && typeof state.player === "object" && state.player !== null && typeof state.objective === "object" || state.objective !== null
```

### 2417. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
```

Mutated replacement:

```text
true
```

### 2418. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot) && typeof state.player === "object" && state.player !== null || typeof state.objective === "object"
```

### 2419. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot) && typeof state.player === "object" || state.player !== null
```

### 2420. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" 
```

Mutated replacement:

```text
true
```

### 2421. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot) || typeof state.player === "object"
```

### 2422. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
```

Mutated replacement:

```text
true
```

### 2423. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) 
```

Mutated replacement:

```text
true
```

### 2424. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) && Array.isArray(state.ring) || Array.isArray(state.loot)
```

### 2425. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) && Array.isArray(state.items) || Array.isArray(state.ring)
```

### 2426. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) 
```

Mutated replacement:

```text
true
```

### 2427. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters) || Array.isArray(state.items)
```

### 2428. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
```

Mutated replacement:

```text
true
```

### 2429. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) && Array.isArray(state.doors) || Array.isArray(state.monsters)
```

### 2430. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) 
```

Mutated replacement:

```text
true
```

### 2431. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) 
```

Mutated replacement:

```text
true
```

### 2432. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) && Array.isArray(state.walls) || Array.isArray(state.doors)
```

### 2433. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn) || Array.isArray(state.walls)
```

### 2434. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" && Number.isInteger(state.floor) || Number.isInteger(state.turn)
```

### 2435. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
```

Mutated replacement:

```text
true
```

### 2436. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) 
```

Mutated replacement:

```text
true
```

### 2437. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) && state.runStatus === "playing" || Number.isInteger(state.floor)
```

### 2438. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" 
```

Mutated replacement:

```text
true
```

### 2439. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" 
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState) || state.runStatus === "playing"
```

### 2440. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
```

Mutated replacement:

```text
true
```

### 2441. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
```

Mutated replacement:

```text
state.rulesVersion === 3 && Number.isInteger(state.seed) || Number.isInteger(state.rngState)
```

### 2442. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) 
```

Mutated replacement:

```text
true
```

### 2443. `src/save/checkpoint.ts:24` — Survived / LogicalOperator

Original:

```text
tate.rulesVersion === 3 && Number.isInteger(state.seed) 
```

Mutated replacement:

```text
state.rulesVersion === 3 || Number.isInteger(state.seed)
```

### 2444. `src/save/checkpoint.ts:24` — Survived / ConditionalExpression

Original:

```text
tate.rulesVersion === 3 
```

Mutated replacement:

```text
true
```

### 2445. `src/save/checkpoint.ts:24` — Survived / EqualityOperator

Original:

```text
tate.rulesVersion === 3 
```

Mutated replacement:

```text
state.rulesVersion !== 3
```

### 2446. `src/save/checkpoint.ts:25` — Survived / ConditionalExpression

Original:

```text
tate.runStatus === "playing" 
```

Mutated replacement:

```text
true
```

### 2447. `src/save/checkpoint.ts:25` — Survived / EqualityOperator

Original:

```text
tate.runStatus === "playing" 
```

Mutated replacement:

```text
state.runStatus !== "playing"
```

### 2448. `src/save/checkpoint.ts:25` — Survived / StringLiteral

Original:

```text
playing" 
```

Mutated replacement:

```text
""
```

### 2449. `src/save/checkpoint.ts:28` — Survived / ConditionalExpression

Original:

```text
ypeof state.player === "object" 
```

Mutated replacement:

```text
true
```

### 2450. `src/save/checkpoint.ts:28` — Survived / EqualityOperator

Original:

```text
ypeof state.player === "object" 
```

Mutated replacement:

```text
typeof state.player !== "object"
```

### 2451. `src/save/checkpoint.ts:28` — Survived / StringLiteral

Original:

```text
object" 
```

Mutated replacement:

```text
""
```

### 2452. `src/save/checkpoint.ts:28` — Survived / ConditionalExpression

Original:

```text
tate.player !== null
```

Mutated replacement:

```text
true
```

### 2453. `src/save/checkpoint.ts:28` — Survived / EqualityOperator

Original:

```text
tate.player !== null
```

Mutated replacement:

```text
state.player === null
```

### 2454. `src/save/checkpoint.ts:29` — Survived / ConditionalExpression

Original:

```text
ypeof state.objective === "object" 
```

Mutated replacement:

```text
true
```

### 2455. `src/save/checkpoint.ts:29` — Survived / EqualityOperator

Original:

```text
ypeof state.objective === "object" 
```

Mutated replacement:

```text
typeof state.objective !== "object"
```

### 2456. `src/save/checkpoint.ts:29` — Survived / StringLiteral

Original:

```text
object" 
```

Mutated replacement:

```text
""
```

### 2457. `src/save/checkpoint.ts:29` — Survived / ConditionalExpression

Original:

```text
tate.objective !== null;
```

Mutated replacement:

```text
true
```

### 2458. `src/save/checkpoint.ts:29` — Survived / EqualityOperator

Original:

```text
tate.objective !== null;
```

Mutated replacement:

```text
state.objective === null
```

### 2459. `src/save/checkpoint.ts:32` — Survived / BlockStatement

Original:

```text

  if (!storage || state.runStatus !== "playing") return false;
  const envelope: CheckpointEnvelope = { schemaVersion: CHECKPOINT_SCHEMA_VERSION, state };
  try { storage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(envelope)); return true; } catch { return false; }
}
```

Mutated replacement:

```text
{}
```

### 2460. `src/save/checkpoint.ts:33` — Survived / ConditionalExpression

Original:

```text
storage || state.runStatus !== "playing")
```

Mutated replacement:

```text
true
```

### 2461. `src/save/checkpoint.ts:33` — Survived / ConditionalExpression

Original:

```text
storage || state.runStatus !== "playing")
```

Mutated replacement:

```text
false
```

### 2462. `src/save/checkpoint.ts:33` — Survived / LogicalOperator

Original:

```text
storage || state.runStatus !== "playing")
```

Mutated replacement:

```text
!storage && state.runStatus !== "playing"
```

### 2463. `src/save/checkpoint.ts:33` — Survived / BooleanLiteral

Original:

```text
storage 
```

Mutated replacement:

```text
storage
```

### 2464. `src/save/checkpoint.ts:33` — Survived / ConditionalExpression

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
false
```

### 2465. `src/save/checkpoint.ts:33` — Survived / EqualityOperator

Original:

```text
tate.runStatus !== "playing")
```

Mutated replacement:

```text
state.runStatus === "playing"
```

### 2466. `src/save/checkpoint.ts:33` — Survived / StringLiteral

Original:

```text
playing")
```

Mutated replacement:

```text
""
```

### 2467. `src/save/checkpoint.ts:33` — Survived / BooleanLiteral

Original:

```text
alse;
```

Mutated replacement:

```text
true
```

### 2468. `src/save/checkpoint.ts:34` — Survived / ObjectLiteral

Original:

```text
 schemaVersion: CHECKPOINT_SCHEMA_VERSION, state };
```

Mutated replacement:

```text
{}
```

### 2469. `src/save/checkpoint.ts:35` — Survived / BlockStatement

Original:

```text
 storage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(envelope)); return true; } 
```

Mutated replacement:

```text
{}
```

### 2470. `src/save/checkpoint.ts:35` — Survived / CallExpression

Original:

```text
torage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(envelope)); 
```

Mutated replacement:

```text
;
```

### 2471. `src/save/checkpoint.ts:35` — Survived / BooleanLiteral

Original:

```text
rue;
```

Mutated replacement:

```text
false
```

### 2472. `src/save/checkpoint.ts:35` — Survived / BlockStatement

Original:

```text
 return false; }
```

Mutated replacement:

```text
{}
```

### 2473. `src/save/checkpoint.ts:35` — Survived / BooleanLiteral

Original:

```text
alse;
```

Mutated replacement:

```text
true
```

### 2474. `src/save/checkpoint.ts:38` — Survived / BlockStatement

Original:

```text

  if (!storage) return null;
  try {
    const raw = storage.getItem(CHECKPOINT_STORAGE_KEY);
    if (!raw) return null;
    const envelope: unknown = JSON.parse(raw);
    if (!envelope || typeof envelope !== "object") return null;
    const candidate = envelope as Partial<CheckpointEnvelope>;
    return candidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) ? candidate.state : null;
  } catch { return null; }
}
```

Mutated replacement:

```text
{}
```

### 2475. `src/save/checkpoint.ts:39` — Survived / BooleanLiteral

Original:

```text
storage)
```

Mutated replacement:

```text
storage
```

### 2476. `src/save/checkpoint.ts:39` — Survived / ConditionalExpression

Original:

```text
storage)
```

Mutated replacement:

```text
false
```

### 2477. `src/save/checkpoint.ts:39` — Survived / ConditionalExpression

Original:

```text
storage)
```

Mutated replacement:

```text
true
```

### 2478. `src/save/checkpoint.ts:42` — Survived / BooleanLiteral

Original:

```text
raw)
```

Mutated replacement:

```text
raw
```

### 2479. `src/save/checkpoint.ts:40` — Survived / BlockStatement

Original:

```text

    const raw = storage.getItem(CHECKPOINT_STORAGE_KEY);
    if (!raw) return null;
    const envelope: unknown = JSON.parse(raw);
    if (!envelope || typeof envelope !== "object") return null;
    const candidate = envelope as Partial<CheckpointEnvelope>;
    return candidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) ? candidate.state : null;
  } 
```

Mutated replacement:

```text
{}
```

### 2480. `src/save/checkpoint.ts:42` — Survived / ConditionalExpression

Original:

```text
raw)
```

Mutated replacement:

```text
true
```

### 2481. `src/save/checkpoint.ts:42` — Survived / ConditionalExpression

Original:

```text
raw)
```

Mutated replacement:

```text
false
```

### 2482. `src/save/checkpoint.ts:44` — Survived / ConditionalExpression

Original:

```text
envelope || typeof envelope !== "object")
```

Mutated replacement:

```text
true
```

### 2483. `src/save/checkpoint.ts:44` — Survived / ConditionalExpression

Original:

```text
envelope || typeof envelope !== "object")
```

Mutated replacement:

```text
false
```

### 2484. `src/save/checkpoint.ts:44` — Survived / LogicalOperator

Original:

```text
envelope || typeof envelope !== "object")
```

Mutated replacement:

```text
!envelope && typeof envelope !== "object"
```

### 2485. `src/save/checkpoint.ts:44` — Survived / BooleanLiteral

Original:

```text
envelope 
```

Mutated replacement:

```text
envelope
```

### 2486. `src/save/checkpoint.ts:44` — Survived / ConditionalExpression

Original:

```text
ypeof envelope !== "object")
```

Mutated replacement:

```text
false
```

### 2487. `src/save/checkpoint.ts:44` — Survived / EqualityOperator

Original:

```text
ypeof envelope !== "object")
```

Mutated replacement:

```text
typeof envelope === "object"
```

### 2488. `src/save/checkpoint.ts:44` — Survived / StringLiteral

Original:

```text
object")
```

Mutated replacement:

```text
""
```

### 2489. `src/save/checkpoint.ts:46` — Survived / ConditionalExpression

Original:

```text
andidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) 
```

Mutated replacement:

```text
true
```

### 2490. `src/save/checkpoint.ts:46` — Survived / LogicalOperator

Original:

```text
andidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) 
```

Mutated replacement:

```text
candidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION || isCheckpointState(candidate.state)
```

### 2491. `src/save/checkpoint.ts:46` — Survived / ConditionalExpression

Original:

```text
andidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) 
```

Mutated replacement:

```text
false
```

### 2492. `src/save/checkpoint.ts:46` — Survived / ConditionalExpression

Original:

```text
andidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION 
```

Mutated replacement:

```text
true
```

### 2493. `src/save/checkpoint.ts:47` — Survived / BlockStatement

Original:

```text
 return null; }
```

Mutated replacement:

```text
{}
```

### 2494. `src/save/checkpoint.ts:46` — Survived / EqualityOperator

Original:

```text
andidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION 
```

Mutated replacement:

```text
candidate.schemaVersion !== CHECKPOINT_SCHEMA_VERSION
```

### 2495. `src/save/checkpoint.ts:50` — Survived / BlockStatement

Original:

```text

  try { storage?.removeItem(CHECKPOINT_STORAGE_KEY); } catch { /* unavailable storage is non-fatal */ }
}
```

Mutated replacement:

```text
{}
```

### 2496. `src/save/checkpoint.ts:51` — Survived / BlockStatement

Original:

```text
 storage?.removeItem(CHECKPOINT_STORAGE_KEY); } 
```

Mutated replacement:

```text
{}
```

### 2497. `src/save/checkpoint.ts:51` — Survived / OptionalChaining

Original:

```text
torage?.removeItem(
```

Mutated replacement:

```text
storage.removeItem
```

### 2498. `src/save/checkpoint.ts:4` — Survived / StringLiteral

Original:

```text
project-tarmin.checkpoint";
```

Mutated replacement:

```text
""
```

### 2499. `src/sim/rng.ts:3` — Survived / ObjectLiteral

Original:

```text
 value: min + (next.state % (max - min + 1)), rng: next };
```

Mutated replacement:

```text
{}
```

### 2500. `src/sim/rng.ts:2` — Survived / LogicalOperator

Original:

```text
alue >>> 0 || 1 
```

Mutated replacement:

```text
value >>> 0 && 1
```

### 2501. `src/sim/rng.ts:2` — Survived / ConditionalExpression

Original:

```text
alue >>> 0 || 1 
```

Mutated replacement:

```text
false
```

### 2502. `src/sim/rng.ts:3` — Survived / BlockStatement

Original:

```text
 const next = nextRng(rng); return { value: min + (next.state % (max - min + 1)), rng: next }; }
```

Mutated replacement:

```text
{}
```

### 2503. `src/sim/rng.ts:2` — Survived / ConditionalExpression

Original:

```text
alue >>> 0 || 1 
```

Mutated replacement:

```text
true
```

### 2504. `src/sim/rng.ts:2` — Survived / ObjectLiteral

Original:

```text
 state: value >>> 0 || 1 };
```

Mutated replacement:

```text
{}
```

### 2505. `src/sim/rng.ts:2` — Survived / BlockStatement

Original:

```text
 let value = rng.state >>> 0; value ^= value << 13; value ^= value >>> 17; value ^= value << 5; return { state: value >>> 0 || 1 }; }
```

Mutated replacement:

```text
{}
```

### 2506. `src/sim/rng.ts:3` — Survived / ArithmeticOperator

Original:

```text
in + (next.state % (max - min + 1)),
```

Mutated replacement:

```text
min - next.state % (max - min + 1)
```

### 2507. `src/sim/rng.ts:3` — Survived / ArithmeticOperator

Original:

```text
ext.state % (max - min + 1))
```

Mutated replacement:

```text
next.state * (max - min + 1)
```

### 2508. `src/sim/rng.ts:3` — Survived / ArithmeticOperator

Original:

```text
ax - min + 1)
```

Mutated replacement:

```text
max - min - 1
```

### 2509. `src/sim/rng.ts:3` — Survived / ArithmeticOperator

Original:

```text
ax - min 
```

Mutated replacement:

```text
max + min
```

### 2510. `src/renderer/materials.ts:33` — Survived / ConditionalExpression

Original:

```text
ind === "closed-door")
```

Mutated replacement:

```text
true
```

### 2511. `src/renderer/materials.ts:32` — Survived / BlockStatement

Original:

```text

  if (kind === "closed-door") return variation % 2 === 0 ? "timber-door" : "iron-door";
  if (kind === "passage" || kind === "open-door") return "darkness";
  if (surface === "floor") return "floor-stone";
  if (surface === "ceiling") return "ceiling-stone";
  return variation === 0 ? "crypt-stone" : variation === 1 ? "burial-masonry" : "basalt";
}
```

Mutated replacement:

```text
{}
```

### 2512. `src/renderer/materials.ts:33` — Survived / ConditionalExpression

Original:

```text
ind === "closed-door")
```

Mutated replacement:

```text
false
```

### 2513. `src/renderer/materials.ts:33` — Survived / EqualityOperator

Original:

```text
ind === "closed-door")
```

Mutated replacement:

```text
kind !== "closed-door"
```

### 2514. `src/renderer/materials.ts:33` — Survived / StringLiteral

Original:

```text
closed-door")
```

Mutated replacement:

```text
""
```

### 2515. `src/renderer/materials.ts:33` — Survived / ConditionalExpression

Original:

```text
ariation % 2 === 0 
```

Mutated replacement:

```text
true
```

### 2516. `src/renderer/materials.ts:33` — Survived / ConditionalExpression

Original:

```text
ariation % 2 === 0 
```

Mutated replacement:

```text
false
```

### 2517. `src/renderer/materials.ts:33` — Survived / EqualityOperator

Original:

```text
ariation % 2 === 0 
```

Mutated replacement:

```text
variation % 2 !== 0
```

### 2518. `src/renderer/materials.ts:33` — Survived / ArithmeticOperator

Original:

```text
ariation % 2 
```

Mutated replacement:

```text
variation * 2
```

### 2519. `src/renderer/materials.ts:33` — Survived / StringLiteral

Original:

```text
timber-door" 
```

Mutated replacement:

```text
""
```

### 2520. `src/renderer/materials.ts:33` — Survived / StringLiteral

Original:

```text
iron-door";
```

Mutated replacement:

```text
""
```

### 2521. `src/renderer/materials.ts:34` — Survived / ConditionalExpression

Original:

```text
ind === "passage" || kind === "open-door")
```

Mutated replacement:

```text
true
```

### 2522. `src/renderer/materials.ts:34` — Survived / ConditionalExpression

Original:

```text
ind === "passage" || kind === "open-door")
```

Mutated replacement:

```text
false
```

### 2523. `src/renderer/materials.ts:34` — Survived / LogicalOperator

Original:

```text
ind === "passage" || kind === "open-door")
```

Mutated replacement:

```text
kind === "passage" && kind === "open-door"
```

### 2524. `src/renderer/materials.ts:34` — Survived / ConditionalExpression

Original:

```text
ind === "passage" 
```

Mutated replacement:

```text
false
```

### 2525. `src/renderer/materials.ts:34` — Survived / EqualityOperator

Original:

```text
ind === "passage" 
```

Mutated replacement:

```text
kind !== "passage"
```

### 2526. `src/renderer/materials.ts:34` — Survived / StringLiteral

Original:

```text
passage" 
```

Mutated replacement:

```text
""
```

### 2527. `src/renderer/materials.ts:34` — Survived / ConditionalExpression

Original:

```text
ind === "open-door")
```

Mutated replacement:

```text
false
```

### 2528. `src/renderer/materials.ts:34` — Survived / EqualityOperator

Original:

```text
ind === "open-door")
```

Mutated replacement:

```text
kind !== "open-door"
```

### 2529. `src/renderer/materials.ts:34` — Survived / StringLiteral

Original:

```text
open-door")
```

Mutated replacement:

```text
""
```

### 2530. `src/renderer/materials.ts:34` — Survived / StringLiteral

Original:

```text
darkness";
```

Mutated replacement:

```text
""
```

### 2531. `src/renderer/materials.ts:36` — Survived / ConditionalExpression

Original:

```text
urface === "ceiling")
```

Mutated replacement:

```text
true
```

### 2532. `src/renderer/materials.ts:35` — Survived / ConditionalExpression

Original:

```text
urface === "floor")
```

Mutated replacement:

```text
true
```

### 2533. `src/renderer/materials.ts:36` — Survived / ConditionalExpression

Original:

```text
urface === "ceiling")
```

Mutated replacement:

```text
false
```

### 2534. `src/renderer/materials.ts:35` — Survived / ConditionalExpression

Original:

```text
urface === "floor")
```

Mutated replacement:

```text
false
```

### 2535. `src/renderer/materials.ts:35` — Survived / EqualityOperator

Original:

```text
urface === "floor")
```

Mutated replacement:

```text
surface !== "floor"
```

### 2536. `src/renderer/materials.ts:35` — Survived / StringLiteral

Original:

```text
floor")
```

Mutated replacement:

```text
""
```

### 2537. `src/renderer/materials.ts:35` — Survived / StringLiteral

Original:

```text
floor-stone";
```

Mutated replacement:

```text
""
```

### 2538. `src/renderer/materials.ts:36` — Survived / EqualityOperator

Original:

```text
urface === "ceiling")
```

Mutated replacement:

```text
surface !== "ceiling"
```

### 2539. `src/renderer/materials.ts:36` — Survived / StringLiteral

Original:

```text
ceiling")
```

Mutated replacement:

```text
""
```

### 2540. `src/renderer/materials.ts:36` — Survived / StringLiteral

Original:

```text
ceiling-stone";
```

Mutated replacement:

```text
""
```

### 2541. `src/renderer/materials.ts:37` — Survived / ConditionalExpression

Original:

```text
ariation === 0 
```

Mutated replacement:

```text
true
```

### 2542. `src/renderer/materials.ts:37` — Survived / ConditionalExpression

Original:

```text
ariation === 0 
```

Mutated replacement:

```text
false
```

### 2543. `src/renderer/materials.ts:37` — Survived / EqualityOperator

Original:

```text
ariation === 0 
```

Mutated replacement:

```text
variation !== 0
```

### 2544. `src/renderer/materials.ts:37` — Survived / StringLiteral

Original:

```text
crypt-stone" 
```

Mutated replacement:

```text
""
```

### 2545. `src/renderer/materials.ts:37` — Survived / ConditionalExpression

Original:

```text
ariation === 1 
```

Mutated replacement:

```text
true
```

### 2546. `src/renderer/materials.ts:37` — Survived / ConditionalExpression

Original:

```text
ariation === 1 
```

Mutated replacement:

```text
false
```

### 2547. `src/renderer/materials.ts:37` — Survived / EqualityOperator

Original:

```text
ariation === 1 
```

Mutated replacement:

```text
variation !== 1
```

### 2548. `src/renderer/materials.ts:37` — Survived / StringLiteral

Original:

```text
burial-masonry" 
```

Mutated replacement:

```text
""
```

### 2549. `src/renderer/materials.ts:37` — Survived / StringLiteral

Original:

```text
basalt";
```

Mutated replacement:

```text
""
```

### 2550. `src/renderer/materials.ts:21` — Survived / ObjectLiteral

Original:

```text

  "crypt-stone": { id: "crypt-stone", atlasRegion: "crypt-stone", fallbackColor: 0x4a4a2c, repeat: "tile" },
  "burial-masonry": { id: "burial-masonry", atlasRegion: "burial-masonry", fallbackColor: 0x3e3d2b, repeat: "tile" },
  basalt: { id: "basalt", atlasRegion: "basalt", fallbackColor: 0x242820, repeat: "tile" },
  "timber-door": { id: "timber-door", atlasRegion: "timber-door", fallbackColor: 0x665735, repeat: "stretch" },
  "iron-door": { id: "iron-door", atlasRegion: "iron-door", fallbackColor: 0x4b4e43, repeat: "stretch" },
  "floor-stone": { id: "floor-stone", atlasRegion: "floor-stone", fallbackColor: 0x343629, repeat: "tile" },
  "ceiling-stone": { id: "ceiling-stone", atlasRegion: "ceiling-stone", fallbackColor: 0x202519, repeat: "tile" },
  darkness: { id: "darkness", atlasRegion: "darkness", fallbackColor: 0x0e110b, repeat: "stretch" }
};
```

Mutated replacement:

```text
{}
```

### 2551. `src/renderer/materials.ts:22` — Survived / ObjectLiteral

Original:

```text
 id: "crypt-stone", atlasRegion: "crypt-stone", fallbackColor: 0x4a4a2c, repeat: "tile" },
```

Mutated replacement:

```text
{}
```

### 2552. `src/renderer/materials.ts:22` — Survived / StringLiteral

Original:

```text
crypt-stone",
```

Mutated replacement:

```text
""
```

### 2553. `src/renderer/materials.ts:22` — Survived / StringLiteral

Original:

```text
tile" 
```

Mutated replacement:

```text
""
```

### 2554. `src/renderer/materials.ts:22` — Survived / StringLiteral

Original:

```text
crypt-stone",
```

Mutated replacement:

```text
""
```

### 2555. `src/renderer/materials.ts:23` — Survived / ObjectLiteral

Original:

```text
 id: "burial-masonry", atlasRegion: "burial-masonry", fallbackColor: 0x3e3d2b, repeat: "tile" },
```

Mutated replacement:

```text
{}
```

### 2556. `src/renderer/materials.ts:23` — Survived / StringLiteral

Original:

```text
burial-masonry",
```

Mutated replacement:

```text
""
```

### 2557. `src/renderer/materials.ts:23` — Survived / StringLiteral

Original:

```text
burial-masonry",
```

Mutated replacement:

```text
""
```

### 2558. `src/renderer/materials.ts:23` — Survived / StringLiteral

Original:

```text
tile" 
```

Mutated replacement:

```text
""
```

### 2559. `src/renderer/materials.ts:24` — Survived / ObjectLiteral

Original:

```text
 id: "basalt", atlasRegion: "basalt", fallbackColor: 0x242820, repeat: "tile" },
```

Mutated replacement:

```text
{}
```

### 2560. `src/renderer/materials.ts:24` — Survived / StringLiteral

Original:

```text
basalt",
```

Mutated replacement:

```text
""
```

### 2561. `src/renderer/materials.ts:24` — Survived / StringLiteral

Original:

```text
basalt",
```

Mutated replacement:

```text
""
```

### 2562. `src/renderer/materials.ts:24` — Survived / StringLiteral

Original:

```text
tile" 
```

Mutated replacement:

```text
""
```

### 2563. `src/renderer/materials.ts:25` — Survived / ObjectLiteral

Original:

```text
 id: "timber-door", atlasRegion: "timber-door", fallbackColor: 0x665735, repeat: "stretch" },
```

Mutated replacement:

```text
{}
```

### 2564. `src/renderer/materials.ts:25` — Survived / StringLiteral

Original:

```text
timber-door",
```

Mutated replacement:

```text
""
```

### 2565. `src/renderer/materials.ts:25` — Survived / StringLiteral

Original:

```text
timber-door",
```

Mutated replacement:

```text
""
```

### 2566. `src/renderer/materials.ts:25` — Survived / StringLiteral

Original:

```text
stretch" 
```

Mutated replacement:

```text
""
```

### 2567. `src/renderer/materials.ts:26` — Survived / StringLiteral

Original:

```text
iron-door",
```

Mutated replacement:

```text
""
```

### 2568. `src/renderer/materials.ts:26` — Survived / ObjectLiteral

Original:

```text
 id: "iron-door", atlasRegion: "iron-door", fallbackColor: 0x4b4e43, repeat: "stretch" },
```

Mutated replacement:

```text
{}
```

### 2569. `src/renderer/materials.ts:26` — Survived / StringLiteral

Original:

```text
iron-door",
```

Mutated replacement:

```text
""
```

### 2570. `src/renderer/materials.ts:26` — Survived / StringLiteral

Original:

```text
stretch" 
```

Mutated replacement:

```text
""
```

### 2571. `src/renderer/materials.ts:27` — Survived / ObjectLiteral

Original:

```text
 id: "floor-stone", atlasRegion: "floor-stone", fallbackColor: 0x343629, repeat: "tile" },
```

Mutated replacement:

```text
{}
```

### 2572. `src/renderer/materials.ts:27` — Survived / StringLiteral

Original:

```text
floor-stone",
```

Mutated replacement:

```text
""
```

### 2573. `src/renderer/materials.ts:28` — Survived / ObjectLiteral

Original:

```text
 id: "ceiling-stone", atlasRegion: "ceiling-stone", fallbackColor: 0x202519, repeat: "tile" },
```

Mutated replacement:

```text
{}
```

### 2574. `src/renderer/materials.ts:27` — Survived / StringLiteral

Original:

```text
floor-stone",
```

Mutated replacement:

```text
""
```

### 2575. `src/renderer/materials.ts:28` — Survived / StringLiteral

Original:

```text
ceiling-stone",
```

Mutated replacement:

```text
""
```

### 2576. `src/renderer/materials.ts:27` — Survived / StringLiteral

Original:

```text
tile" 
```

Mutated replacement:

```text
""
```

### 2577. `src/renderer/materials.ts:28` — Survived / StringLiteral

Original:

```text
ceiling-stone",
```

Mutated replacement:

```text
""
```

### 2578. `src/renderer/materials.ts:28` — Survived / StringLiteral

Original:

```text
tile" 
```

Mutated replacement:

```text
""
```

### 2579. `src/renderer/materials.ts:29` — Survived / ObjectLiteral

Original:

```text
 id: "darkness", atlasRegion: "darkness", fallbackColor: 0x0e110b, repeat: "stretch" }
```

Mutated replacement:

```text
{}
```

### 2580. `src/renderer/materials.ts:29` — Survived / StringLiteral

Original:

```text
darkness",
```

Mutated replacement:

```text
""
```

### 2581. `src/renderer/materials.ts:29` — Survived / StringLiteral

Original:

```text
darkness",
```

Mutated replacement:

```text
""
```

### 2582. `src/renderer/materials.ts:29` — Survived / StringLiteral

Original:

```text
stretch" 
```

Mutated replacement:

```text
""
```

### 2583. `src/renderer/entities/entityProjection.ts:28` — Survived / StringLiteral

Original:

```text
${point.x},${point.y}`;
```

Mutated replacement:

```text
``
```

### 2584. `src/renderer/entities/entityProjection.ts:30` — Survived / BlockStatement

Original:

```text

  const forward = DELTAS[state.player.facing];
  const dx = position.x - state.player.position.x;
  const dy = position.y - state.player.position.y;
  const depth = dx * forward.x + dy * forward.y;
  const lateral = dx * -forward.y + dy * forward.x;
  if (!Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length || Math.abs(lateral) > depth) return null;
  return { depth, lateral };
}
```

Mutated replacement:

```text
{}
```

### 2585. `src/renderer/entities/entityProjection.ts:32` — Survived / ArithmeticOperator

Original:

```text
osition.x - state.player.position.x;
```

Mutated replacement:

```text
position.x + state.player.position.x
```

### 2586. `src/renderer/entities/entityProjection.ts:33` — Survived / ArithmeticOperator

Original:

```text
osition.y - state.player.position.y;
```

Mutated replacement:

```text
position.y + state.player.position.y
```

### 2587. `src/renderer/entities/entityProjection.ts:34` — Survived / ArithmeticOperator

Original:

```text
x * forward.x + dy * forward.y;
```

Mutated replacement:

```text
dx * forward.x - dy * forward.y
```

### 2588. `src/renderer/entities/entityProjection.ts:34` — Survived / ArithmeticOperator

Original:

```text
x * forward.x 
```

Mutated replacement:

```text
dx / forward.x
```

### 2589. `src/renderer/entities/entityProjection.ts:35` — Survived / ArithmeticOperator

Original:

```text
x * -forward.y + dy * forward.x;
```

Mutated replacement:

```text
dx * -forward.y - dy * forward.x
```

### 2590. `src/renderer/entities/entityProjection.ts:34` — Survived / ArithmeticOperator

Original:

```text
y * forward.y;
```

Mutated replacement:

```text
dy / forward.y
```

### 2591. `src/renderer/entities/entityProjection.ts:35` — Survived / ArithmeticOperator

Original:

```text
x * -forward.y 
```

Mutated replacement:

```text
dx / -forward.y
```

### 2592. `src/renderer/entities/entityProjection.ts:35` — Survived / UnaryOperator

Original:

```text
forward.y 
```

Mutated replacement:

```text
+forward.y
```

### 2593. `src/renderer/entities/entityProjection.ts:35` — Survived / ArithmeticOperator

Original:

```text
y * forward.x;
```

Mutated replacement:

```text
dy / forward.x
```

### 2594. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length || Math.abs(lateral) > depth)
```

Mutated replacement:

```text
true
```

### 2595. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length || Math.abs(lateral) > depth)
```

Mutated replacement:

```text
false
```

### 2596. `src/renderer/entities/entityProjection.ts:36` — Survived / LogicalOperator

Original:

```text
Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length || Math.abs(lateral) > depth)
```

Mutated replacement:

```text
(!Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length) && Math.abs(lateral) > depth
```

### 2597. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length 
```

Mutated replacement:

```text
false
```

### 2598. `src/renderer/entities/entityProjection.ts:36` — Survived / LogicalOperator

Original:

```text
Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length 
```

Mutated replacement:

```text
(!Number.isInteger(depth) || depth < 1) && depth >= PORTAL_FRAMES.length
```

### 2599. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
Number.isInteger(depth) || depth < 1 
```

Mutated replacement:

```text
false
```

### 2600. `src/renderer/entities/entityProjection.ts:36` — Survived / LogicalOperator

Original:

```text
Number.isInteger(depth) || depth < 1 
```

Mutated replacement:

```text
!Number.isInteger(depth) && depth < 1
```

### 2601. `src/renderer/entities/entityProjection.ts:36` — Survived / BooleanLiteral

Original:

```text
Number.isInteger(depth) 
```

Mutated replacement:

```text
Number.isInteger(depth)
```

### 2602. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
epth < 1 
```

Mutated replacement:

```text
false
```

### 2603. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
epth < 1 
```

Mutated replacement:

```text
depth <= 1
```

### 2604. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
epth < 1 
```

Mutated replacement:

```text
depth >= 1
```

### 2605. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
epth >= PORTAL_FRAMES.length 
```

Mutated replacement:

```text
false
```

### 2606. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
epth >= PORTAL_FRAMES.length 
```

Mutated replacement:

```text
depth > PORTAL_FRAMES.length
```

### 2607. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
epth >= PORTAL_FRAMES.length 
```

Mutated replacement:

```text
depth < PORTAL_FRAMES.length
```

### 2608. `src/renderer/entities/entityProjection.ts:36` — Survived / ConditionalExpression

Original:

```text
ath.abs(lateral) > depth)
```

Mutated replacement:

```text
false
```

### 2609. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
ath.abs(lateral) > depth)
```

Mutated replacement:

```text
Math.abs(lateral) >= depth
```

### 2610. `src/renderer/entities/entityProjection.ts:36` — Survived / EqualityOperator

Original:

```text
ath.abs(lateral) > depth)
```

Mutated replacement:

```text
Math.abs(lateral) <= depth
```

### 2611. `src/renderer/entities/entityProjection.ts:37` — Survived / ObjectLiteral

Original:

```text
 depth, lateral };
```

Mutated replacement:

```text
{}
```

### 2612. `src/renderer/entities/entityProjection.ts:40` — Survived / BlockStatement

Original:

```text

  const forward = DELTAS[state.player.facing];
  for (let depth = 1; depth < PORTAL_FRAMES.length; depth += 1) {
    const point = { x: state.player.position.x + forward.x * depth, y: state.player.position.y + forward.y * depth };
    const door = state.doors.find((candidate) => key(candidate.position) === key(point));
    if (state.walls.includes(key(point)) || door?.open === false) return depth;
  }
  return null;
}
```

Mutated replacement:

```text
{}
```

### 2613. `src/renderer/entities/entityProjection.ts:42` — Survived / ConditionalExpression

Original:

```text
epth < PORTAL_FRAMES.length;
```

Mutated replacement:

```text
false
```

### 2614. `src/renderer/entities/entityProjection.ts:42` — Survived / EqualityOperator

Original:

```text
epth < PORTAL_FRAMES.length;
```

Mutated replacement:

```text
depth <= PORTAL_FRAMES.length
```

### 2615. `src/renderer/entities/entityProjection.ts:42` — Survived / AssignmentOperator

Original:

```text
epth += 1)
```

Mutated replacement:

```text
depth -= 1
```

### 2616. `src/renderer/entities/entityProjection.ts:42` — Survived / EqualityOperator

Original:

```text
epth < PORTAL_FRAMES.length;
```

Mutated replacement:

```text
depth >= PORTAL_FRAMES.length
```

### 2617. `src/renderer/entities/entityProjection.ts:42` — Survived / BlockStatement

Original:

```text

    const point = { x: state.player.position.x + forward.x * depth, y: state.player.position.y + forward.y * depth };
    const door = state.doors.find((candidate) => key(candidate.position) === key(point));
    if (state.walls.includes(key(point)) || door?.open === false) return depth;
  }
```

Mutated replacement:

```text
{}
```

### 2618. `src/renderer/entities/entityProjection.ts:43` — Survived / ObjectLiteral

Original:

```text
 x: state.player.position.x + forward.x * depth, y: state.player.position.y + forward.y * depth };
```

Mutated replacement:

```text
{}
```

### 2619. `src/renderer/entities/entityProjection.ts:43` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.x + forward.x * depth,
```

Mutated replacement:

```text
state.player.position.x - forward.x * depth
```

### 2620. `src/renderer/entities/entityProjection.ts:43` — Survived / ArithmeticOperator

Original:

```text
orward.x * depth,
```

Mutated replacement:

```text
forward.x / depth
```

### 2621. `src/renderer/entities/entityProjection.ts:43` — Survived / ArithmeticOperator

Original:

```text
tate.player.position.y + forward.y * depth 
```

Mutated replacement:

```text
state.player.position.y - forward.y * depth
```

### 2622. `src/renderer/entities/entityProjection.ts:43` — Survived / ArithmeticOperator

Original:

```text
orward.y * depth 
```

Mutated replacement:

```text
forward.y / depth
```

### 2623. `src/renderer/entities/entityProjection.ts:44` — Survived / ArrowFunction

Original:

```text
candidate) => key(candidate.position) === key(point))
```

Mutated replacement:

```text
() => undefined
```

### 2624. `src/renderer/entities/entityProjection.ts:44` — Survived / ConditionalExpression

Original:

```text
ey(candidate.position) === key(point))
```

Mutated replacement:

```text
true
```

### 2625. `src/renderer/entities/entityProjection.ts:44` — Survived / ConditionalExpression

Original:

```text
ey(candidate.position) === key(point))
```

Mutated replacement:

```text
false
```

### 2626. `src/renderer/entities/entityProjection.ts:44` — Survived / EqualityOperator

Original:

```text
ey(candidate.position) === key(point))
```

Mutated replacement:

```text
key(candidate.position) !== key(point)
```

### 2627. `src/renderer/entities/entityProjection.ts:45` — Survived / ConditionalExpression

Original:

```text
tate.walls.includes(key(point)) || door?.open === false)
```

Mutated replacement:

```text
true
```

### 2628. `src/renderer/entities/entityProjection.ts:45` — Survived / ConditionalExpression

Original:

```text
tate.walls.includes(key(point)) || door?.open === false)
```

Mutated replacement:

```text
false
```

### 2629. `src/renderer/entities/entityProjection.ts:45` — Survived / LogicalOperator

Original:

```text
tate.walls.includes(key(point)) || door?.open === false)
```

Mutated replacement:

```text
state.walls.includes(key(point)) && door?.open === false
```

### 2630. `src/renderer/entities/entityProjection.ts:45` — Survived / ConditionalExpression

Original:

```text
oor?.open === false)
```

Mutated replacement:

```text
false
```

### 2631. `src/renderer/entities/entityProjection.ts:45` — Survived / EqualityOperator

Original:

```text
oor?.open === false)
```

Mutated replacement:

```text
door?.open !== false
```

### 2632. `src/renderer/entities/entityProjection.ts:45` — Survived / OptionalChaining

Original:

```text
oor?.open 
```

Mutated replacement:

```text
door.open
```

### 2633. `src/renderer/entities/entityProjection.ts:45` — Survived / BooleanLiteral

Original:

```text
alse)
```

Mutated replacement:

```text
true
```

### 2634. `src/renderer/entities/entityProjection.ts:50` — Survived / BlockStatement

Original:

```text

  const near = PORTAL_FRAMES[depth - 1];
  const far = PORTAL_FRAMES[depth];
  const scale = DEPTH_SCALE[depth];
  const frameWidth = far.right - far.left;
  const center = (far.left + far.right) / 2 + (lateral / Math.max(1, depth)) * frameWidth * 0.34;
  const width = frameWidth * 0.52 * scale;
  const height = (far.bottom - far.top) * 0.78 * scale;
  const bottom = far.bottom - (far.bottom - near.bottom) * 0.12 * scale;
  const top = bottom - height;
  return [{ x: center - width / 2, y: top }, { x: center + width / 2, y: top }, { x: center + width / 2, y: bottom }, { x: center - width / 2, y: bottom }];
}
```

Mutated replacement:

```text
{}
```

### 2635. `src/renderer/entities/entityProjection.ts:51` — Survived / ArithmeticOperator

Original:

```text
epth - 1]
```

Mutated replacement:

```text
depth + 1
```

### 2636. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
far.left + far.right) / 2 + (lateral / Math.max(1, depth)) * frameWidth * 0.34;
```

Mutated replacement:

```text
(far.left + far.right) / 2 - lateral / Math.max(1, depth) * frameWidth * 0.34
```

### 2637. `src/renderer/entities/entityProjection.ts:54` — Survived / ArithmeticOperator

Original:

```text
ar.right - far.left;
```

Mutated replacement:

```text
far.right + far.left
```

### 2638. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
far.left + far.right) / 2 
```

Mutated replacement:

```text
(far.left + far.right) * 2
```

### 2639. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
ar.left + far.right)
```

Mutated replacement:

```text
far.left - far.right
```

### 2640. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
lateral / Math.max(1, depth)) * frameWidth * 0.34;
```

Mutated replacement:

```text
lateral / Math.max(1, depth) * frameWidth / 0.34
```

### 2641. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
lateral / Math.max(1, depth)) * frameWidth 
```

Mutated replacement:

```text
lateral / Math.max(1, depth) / frameWidth
```

### 2642. `src/renderer/entities/entityProjection.ts:55` — Survived / ArithmeticOperator

Original:

```text
ateral / Math.max(1, depth))
```

Mutated replacement:

```text
lateral * Math.max(1, depth)
```

### 2643. `src/renderer/entities/entityProjection.ts:55` — Survived / MethodExpression

Original:

```text
ath.max(1, depth))
```

Mutated replacement:

```text
Math.min(1, depth)
```

### 2644. `src/renderer/entities/entityProjection.ts:56` — Survived / ArithmeticOperator

Original:

```text
rameWidth * 0.52 * scale;
```

Mutated replacement:

```text
frameWidth * 0.52 / scale
```

### 2645. `src/renderer/entities/entityProjection.ts:56` — Survived / ArithmeticOperator

Original:

```text
rameWidth * 0.52 
```

Mutated replacement:

```text
frameWidth / 0.52
```

### 2646. `src/renderer/entities/entityProjection.ts:57` — Survived / ArithmeticOperator

Original:

```text
far.bottom - far.top) * 0.78 * scale;
```

Mutated replacement:

```text
(far.bottom - far.top) * 0.78 / scale
```

### 2647. `src/renderer/entities/entityProjection.ts:57` — Survived / ArithmeticOperator

Original:

```text
far.bottom - far.top) * 0.78 
```

Mutated replacement:

```text
(far.bottom - far.top) / 0.78
```

### 2648. `src/renderer/entities/entityProjection.ts:57` — Survived / ArithmeticOperator

Original:

```text
ar.bottom - far.top)
```

Mutated replacement:

```text
far.bottom + far.top
```

### 2649. `src/renderer/entities/entityProjection.ts:58` — Survived / ArithmeticOperator

Original:

```text
far.bottom - near.bottom) * 0.12 * scale;
```

Mutated replacement:

```text
(far.bottom - near.bottom) * 0.12 / scale
```

### 2650. `src/renderer/entities/entityProjection.ts:58` — Survived / ArithmeticOperator

Original:

```text
ar.bottom - (far.bottom - near.bottom) * 0.12 * scale;
```

Mutated replacement:

```text
far.bottom + (far.bottom - near.bottom) * 0.12 * scale
```

### 2651. `src/renderer/entities/entityProjection.ts:58` — Survived / ArithmeticOperator

Original:

```text
far.bottom - near.bottom) * 0.12 
```

Mutated replacement:

```text
(far.bottom - near.bottom) / 0.12
```

### 2652. `src/renderer/entities/entityProjection.ts:58` — Survived / ArithmeticOperator

Original:

```text
ar.bottom - near.bottom)
```

Mutated replacement:

```text
far.bottom + near.bottom
```

### 2653. `src/renderer/entities/entityProjection.ts:59` — Survived / ArithmeticOperator

Original:

```text
ottom - height;
```

Mutated replacement:

```text
bottom + height
```

### 2654. `src/renderer/entities/entityProjection.ts:60` — Survived / ArrayDeclaration

Original:

```text
{ x: center - width / 2, y: top }, { x: center + width / 2, y: top }, { x: center + width / 2, y: bottom }, { x: center - width / 2, y: bottom }];
```

Mutated replacement:

```text
[]
```

### 2655. `src/renderer/entities/entityProjection.ts:60` — Survived / ObjectLiteral

Original:

```text
 x: center - width / 2, y: top },
```

Mutated replacement:

```text
{}
```

### 2656. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
enter - width / 2,
```

Mutated replacement:

```text
center + width / 2
```

### 2657. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
idth / 2,
```

Mutated replacement:

```text
width * 2
```

### 2658. `src/renderer/entities/entityProjection.ts:60` — Survived / ObjectLiteral

Original:

```text
 x: center + width / 2, y: top },
```

Mutated replacement:

```text
{}
```

### 2659. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
enter + width / 2,
```

Mutated replacement:

```text
center - width / 2
```

### 2660. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
idth / 2,
```

Mutated replacement:

```text
width * 2
```

### 2661. `src/renderer/entities/entityProjection.ts:60` — Survived / ObjectLiteral

Original:

```text
 x: center + width / 2, y: bottom },
```

Mutated replacement:

```text
{}
```

### 2662. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
enter + width / 2,
```

Mutated replacement:

```text
center - width / 2
```

### 2663. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
idth / 2,
```

Mutated replacement:

```text
width * 2
```

### 2664. `src/renderer/entities/entityProjection.ts:60` — Survived / ObjectLiteral

Original:

```text
 x: center - width / 2, y: bottom }]
```

Mutated replacement:

```text
{}
```

### 2665. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
enter - width / 2,
```

Mutated replacement:

```text
center + width / 2
```

### 2666. `src/renderer/entities/entityProjection.ts:60` — Survived / ArithmeticOperator

Original:

```text
idth / 2,
```

Mutated replacement:

```text
width * 2
```

### 2667. `src/renderer/entities/entityProjection.ts:63` — Survived / BlockStatement

Original:

```text

  const opaqueDepth = nearestOpaqueDepth(state);
  return sources
    .map((source) => ({ source, coordinates: entityDepth(state, source.position) }))
    .filter((entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
    .filter(({ coordinates }) => opaqueDepth === null || coordinates.depth < opaqueDepth)
    .map(({ source, coordinates }) => ({
      id: source.id,
      definitionId: source.definitionId,
      presentationId: source.presentationId,
      kind: source.kind,
      depth: coordinates.depth,
      position: source.position,
      quad: billboardQuad(coordinates.depth, coordinates.lateral),
      lightLevel: DEPTH_LIGHT[coordinates.depth]
    }))
    .sort((first, second) => second.depth - first.depth || first.id.localeCompare(second.id));
}
```

Mutated replacement:

```text
{}
```

### 2668. `src/renderer/entities/entityProjection.ts:65` — Survived / MethodExpression

Original:

```text
ources
    .map((source) => ({ source, coordinates: entityDepth(state, source.position) }))
    .filter((entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
    .filter(({ coordinates }) => opaqueDepth === null || coordinates.depth < opaqueDepth)
    .map(({ source, coordinates }) => ({
      id: source.id,
      definitionId: source.definitionId,
      presentationId: source.presentationId,
      kind: source.kind,
      depth: coordinates.depth,
      position: source.position,
      quad: billboardQuad(coordinates.depth, coordinates.lateral),
      lightLevel: DEPTH_LIGHT[coordinates.depth]
    }))
    .sort((first, second) => second.depth - first.depth || first.id.localeCompare(second.id));
```

Mutated replacement:

```text
sources.map(source => ({
  source,
  coordinates: entityDepth(state, source.position)
})).filter((entry): entry is {
  source: EntitySource;
  coordinates: {
    depth: number;
    lateral: number;
  };
} => Boolean(entry.coordinates)).filter(({
  coordinates
}) => opaqueDepth === null || coordinates.depth < opaqueDepth).map(({
  source,
  coordinates
}) => ({
  id: source.id,
  definitionId: source.definitionId,
  presentationId: source.presentationId,
  kind: source.kind,
  depth: coordinates.depth,
  position: source.position,
  quad: billboardQuad(coordinates.depth, coordinates.lateral),
  lightLevel: DEPTH_LIGHT[coordinates.depth]
}))
```

### 2669. `src/renderer/entities/entityProjection.ts:65` — Survived / MethodExpression

Original:

```text
ources
    .map((source) => ({ source, coordinates: entityDepth(state, source.position) }))
    .filter((entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
    .filter(({ coordinates }) => opaqueDepth === null || coordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
sources.map(source => ({
  source,
  coordinates: entityDepth(state, source.position)
})).filter((entry): entry is {
  source: EntitySource;
  coordinates: {
    depth: number;
    lateral: number;
  };
} => Boolean(entry.coordinates))
```

### 2670. `src/renderer/entities/entityProjection.ts:65` — Survived / MethodExpression

Original:

```text
ources
    .map((source) => ({ source, coordinates: entityDepth(state, source.position) }))
    .filter((entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
```

Mutated replacement:

```text
sources.map(source => ({
  source,
  coordinates: entityDepth(state, source.position)
}))
```

### 2671. `src/renderer/entities/entityProjection.ts:66` — Survived / ArrowFunction

Original:

```text
source) => ({ source, coordinates: entityDepth(state, source.position) }))
```

Mutated replacement:

```text
() => undefined
```

### 2672. `src/renderer/entities/entityProjection.ts:66` — Survived / ObjectLiteral

Original:

```text
 source, coordinates: entityDepth(state, source.position) })
```

Mutated replacement:

```text
{}
```

### 2673. `src/renderer/entities/entityProjection.ts:67` — Survived / ArrowFunction

Original:

```text
entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
```

Mutated replacement:

```text
() => undefined
```

### 2674. `src/renderer/entities/entityProjection.ts:68` — Survived / ConditionalExpression

Original:

```text
paqueDepth === null || coordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
true
```

### 2675. `src/renderer/entities/entityProjection.ts:68` — Survived / ArrowFunction

Original:

```text
{ coordinates }) => opaqueDepth === null || coordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
() => undefined
```

### 2676. `src/renderer/entities/entityProjection.ts:68` — Survived / ConditionalExpression

Original:

```text
paqueDepth === null || coordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
false
```

### 2677. `src/renderer/entities/entityProjection.ts:68` — Survived / LogicalOperator

Original:

```text
paqueDepth === null || coordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
opaqueDepth === null && coordinates.depth < opaqueDepth
```

### 2678. `src/renderer/entities/entityProjection.ts:68` — Survived / ConditionalExpression

Original:

```text
paqueDepth === null 
```

Mutated replacement:

```text
false
```

### 2679. `src/renderer/entities/entityProjection.ts:68` — Survived / EqualityOperator

Original:

```text
paqueDepth === null 
```

Mutated replacement:

```text
opaqueDepth !== null
```

### 2680. `src/renderer/entities/entityProjection.ts:68` — Survived / ConditionalExpression

Original:

```text
oordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
false
```

### 2681. `src/renderer/entities/entityProjection.ts:68` — Survived / EqualityOperator

Original:

```text
oordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
coordinates.depth >= opaqueDepth
```

### 2682. `src/renderer/entities/entityProjection.ts:68` — Survived / EqualityOperator

Original:

```text
oordinates.depth < opaqueDepth)
```

Mutated replacement:

```text
coordinates.depth <= opaqueDepth
```

### 2683. `src/renderer/entities/entityProjection.ts:69` — Survived / ArrowFunction

Original:

```text
{ source, coordinates }) => ({
      id: source.id,
      definitionId: source.definitionId,
      presentationId: source.presentationId,
      kind: source.kind,
      depth: coordinates.depth,
      position: source.position,
      quad: billboardQuad(coordinates.depth, coordinates.lateral),
      lightLevel: DEPTH_LIGHT[coordinates.depth]
    }))
```

Mutated replacement:

```text
() => undefined
```

### 2684. `src/renderer/entities/entityProjection.ts:79` — Survived / ConditionalExpression

Original:

```text
econd.depth - first.depth || first.id.localeCompare(second.id))
```

Mutated replacement:

```text
true
```

### 2685. `src/renderer/entities/entityProjection.ts:69` — Survived / ObjectLiteral

Original:

```text

      id: source.id,
      definitionId: source.definitionId,
      presentationId: source.presentationId,
      kind: source.kind,
      depth: coordinates.depth,
      position: source.position,
      quad: billboardQuad(coordinates.depth, coordinates.lateral),
      lightLevel: DEPTH_LIGHT[coordinates.depth]
    })
```

Mutated replacement:

```text
{}
```

### 2686. `src/renderer/entities/entityProjection.ts:79` — Survived / ArrowFunction

Original:

```text
first, second) => second.depth - first.depth || first.id.localeCompare(second.id))
```

Mutated replacement:

```text
() => undefined
```

### 2687. `src/renderer/entities/entityProjection.ts:79` — Survived / ConditionalExpression

Original:

```text
econd.depth - first.depth || first.id.localeCompare(second.id))
```

Mutated replacement:

```text
false
```

### 2688. `src/renderer/entities/entityProjection.ts:79` — Survived / LogicalOperator

Original:

```text
econd.depth - first.depth || first.id.localeCompare(second.id))
```

Mutated replacement:

```text
second.depth - first.depth && first.id.localeCompare(second.id)
```

### 2689. `src/renderer/entities/entityProjection.ts:79` — Survived / ArithmeticOperator

Original:

```text
econd.depth - first.depth 
```

Mutated replacement:

```text
second.depth + first.depth
```

### 2690. `src/renderer/entities/entityProjection.ts:82` — Survived / BlockStatement

Original:

```text

  return entities.map((entity) => `${entity.id}:${entity.depth}:${entity.lightLevel}:${entity.quad.map((point) => `${point.x},${point.y}`).join(";")}`).join("|");
}
```

Mutated replacement:

```text
{}
```

### 2691. `src/renderer/entities/entityProjection.ts:83` — Survived / ArrowFunction

Original:

```text
entity) => `${entity.id}:${entity.depth}:${entity.lightLevel}:${entity.quad.map((point) => `${point.x},${point.y}`).join(";")}`)
```

Mutated replacement:

```text
() => undefined
```

### 2692. `src/renderer/entities/entityProjection.ts:83` — Survived / StringLiteral

Original:

```text
${entity.id}:${entity.depth}:${entity.lightLevel}:${entity.quad.map((point) => `${point.x},${point.y}`).join(";")}`)
```

Mutated replacement:

```text
``
```

### 2693. `src/renderer/entities/entityProjection.ts:83` — Survived / ArrowFunction

Original:

```text
point) => `${point.x},${point.y}`)
```

Mutated replacement:

```text
() => undefined
```

### 2694. `src/renderer/entities/entityProjection.ts:83` — Survived / StringLiteral

Original:

```text
${point.x},${point.y}`)
```

Mutated replacement:

```text
``
```

### 2695. `src/renderer/entities/entityProjection.ts:83` — Survived / StringLiteral

Original:

```text
;")
```

Mutated replacement:

```text
""
```

### 2696. `src/renderer/entities/entityProjection.ts:83` — Survived / StringLiteral

Original:

```text
|")
```

Mutated replacement:

```text
""
```

### 2697. `src/renderer/entities/entityProjection.ts:86` — Survived / BlockStatement

Original:

```text

  return Math.floor(Math.max(0, presentationTimeMs) / 260) % 2 as 0 | 1;
}
```

Mutated replacement:

```text
{}
```

### 2698. `src/renderer/entities/entityProjection.ts:28` — Survived / ArrowFunction

Original:

```text
point: Point): string => `${point.x},${point.y}`;
```

Mutated replacement:

```text
() => undefined
```

### 2699. `src/renderer/firstPerson/handPresentation.ts:16` — Survived / BlockStatement

Original:

```text

  const itemId = hand === "left" ? state.leftHand : state.rightHand;
  const item = itemId ? state.items.find((instance) => instance.id === itemId) : undefined;
  return { hand, itemId, presentationId: item ? itemById(item.definitionId)?.presentationId ?? null : null };
}
```

Mutated replacement:

```text
{}
```

### 2700. `src/renderer/firstPerson/handPresentation.ts:17` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
true
```

### 2701. `src/renderer/firstPerson/handPresentation.ts:17` — Survived / ConditionalExpression

Original:

```text
and === "left" 
```

Mutated replacement:

```text
false
```

### 2702. `src/renderer/firstPerson/handPresentation.ts:17` — Survived / EqualityOperator

Original:

```text
and === "left" 
```

Mutated replacement:

```text
hand !== "left"
```

### 2703. `src/renderer/firstPerson/handPresentation.ts:17` — Survived / StringLiteral

Original:

```text
left" 
```

Mutated replacement:

```text
""
```

### 2704. `src/renderer/firstPerson/handPresentation.ts:18` — Survived / ArrowFunction

Original:

```text
instance) => instance.id === itemId)
```

Mutated replacement:

```text
() => undefined
```

### 2705. `src/renderer/firstPerson/handPresentation.ts:18` — Survived / ConditionalExpression

Original:

```text
nstance.id === itemId)
```

Mutated replacement:

```text
true
```

### 2706. `src/renderer/firstPerson/handPresentation.ts:18` — Survived / ConditionalExpression

Original:

```text
nstance.id === itemId)
```

Mutated replacement:

```text
false
```

### 2707. `src/renderer/firstPerson/handPresentation.ts:18` — Survived / EqualityOperator

Original:

```text
nstance.id === itemId)
```

Mutated replacement:

```text
instance.id !== itemId
```

### 2708. `src/renderer/firstPerson/handPresentation.ts:19` — Survived / ObjectLiteral

Original:

```text
 hand, itemId, presentationId: item ? itemById(item.definitionId)?.presentationId ?? null : null };
```

Mutated replacement:

```text
{}
```

### 2709. `src/renderer/firstPerson/handPresentation.ts:19` — Survived / OptionalChaining

Original:

```text
temById(item.definitionId)?.presentationId 
```

Mutated replacement:

```text
itemById(item.definitionId).presentationId
```

### 2710. `src/renderer/firstPerson/handPresentation.ts:19` — Survived / LogicalOperator

Original:

```text
temById(item.definitionId)?.presentationId ?? null 
```

Mutated replacement:

```text
itemById(item.definitionId)?.presentationId && null
```

### 2711. `src/renderer/firstPerson/handPresentation.ts:27` — Survived / BlockStatement

Original:

```text

  return { assetId: "fp-hands-empty", left: resolveSlot(state, "left"), right: resolveSlot(state, "right") };
}
```

Mutated replacement:

```text
{}
```

### 2712. `src/renderer/firstPerson/handPresentation.ts:28` — Survived / ObjectLiteral

Original:

```text
 assetId: "fp-hands-empty", left: resolveSlot(state, "left"), right: resolveSlot(state, "right") };
```

Mutated replacement:

```text
{}
```

### 2713. `src/renderer/firstPerson/handPresentation.ts:28` — Survived / StringLiteral

Original:

```text
fp-hands-empty",
```

Mutated replacement:

```text
""
```

### 2714. `src/renderer/firstPerson/handPresentation.ts:28` — Survived / StringLiteral

Original:

```text
left")
```

Mutated replacement:

```text
""
```

### 2715. `src/renderer/firstPerson/handPresentation.ts:28` — Survived / StringLiteral

Original:

```text
right")
```

Mutated replacement:

```text
""
```

### 2716. `src/content/monsters.ts:7` — Survived / ConditionalExpression

Original:

```text
onster.id === id)
```

Mutated replacement:

```text
true
```

### 2717. `src/content/monsters.ts:7` — Survived / ArrowFunction

Original:

```text
monster) => monster.id === id)
```

Mutated replacement:

```text
() => undefined
```

### 2718. `src/content/monsters.ts:7` — Survived / ConditionalExpression

Original:

```text
onster.id === id)
```

Mutated replacement:

```text
false
```

### 2719. `src/content/monsters.ts:7` — Survived / EqualityOperator

Original:

```text
onster.id === id)
```

Mutated replacement:

```text
monster.id !== id
```

### 2720. `src/content/monsters.ts:2` — Survived / ArrayDeclaration

Original:

```text

  { id: "ashbound-warden", name: "Ashbound Warden", vitality: 5, attack: 1, defense: 0, lootTableId: "warden-cache", presentationId: "warden" },
  { id: "glass-mireling", name: "Glass Mireling", vitality: 4, attack: 2, defense: 0, lootTableId: "mireling-cache", presentationId: "mireling" },
  { id: "gloam-scavenger", name: "Gloam Scavenger", vitality: 3, attack: 1, defense: 0, lootTableId: "scavenger-cache", presentationId: "scavenger" }
];
```

Mutated replacement:

```text
[]
```

### 2721. `src/content/monsters.ts:3` — Survived / ObjectLiteral

Original:

```text
 id: "ashbound-warden", name: "Ashbound Warden", vitality: 5, attack: 1, defense: 0, lootTableId: "warden-cache", presentationId: "warden" },
```

Mutated replacement:

```text
{}
```

### 2722. `src/content/monsters.ts:3` — Survived / StringLiteral

Original:

```text
ashbound-warden",
```

Mutated replacement:

```text
""
```

### 2723. `src/content/monsters.ts:3` — Survived / StringLiteral

Original:

```text
warden-cache",
```

Mutated replacement:

```text
""
```

### 2724. `src/content/monsters.ts:3` — Survived / StringLiteral

Original:

```text
Ashbound Warden",
```

Mutated replacement:

```text
""
```

### 2725. `src/content/monsters.ts:3` — Survived / StringLiteral

Original:

```text
warden" 
```

Mutated replacement:

```text
""
```

### 2726. `src/content/monsters.ts:4` — Survived / ObjectLiteral

Original:

```text
 id: "glass-mireling", name: "Glass Mireling", vitality: 4, attack: 2, defense: 0, lootTableId: "mireling-cache", presentationId: "mireling" },
```

Mutated replacement:

```text
{}
```

### 2727. `src/content/monsters.ts:4` — Survived / StringLiteral

Original:

```text
Glass Mireling",
```

Mutated replacement:

```text
""
```

### 2728. `src/content/monsters.ts:4` — Survived / StringLiteral

Original:

```text
glass-mireling",
```

Mutated replacement:

```text
""
```

### 2729. `src/content/monsters.ts:4` — Survived / StringLiteral

Original:

```text
mireling-cache",
```

Mutated replacement:

```text
""
```

### 2730. `src/content/monsters.ts:4` — Survived / StringLiteral

Original:

```text
mireling" 
```

Mutated replacement:

```text
""
```

### 2731. `src/content/monsters.ts:5` — Survived / ObjectLiteral

Original:

```text
 id: "gloam-scavenger", name: "Gloam Scavenger", vitality: 3, attack: 1, defense: 0, lootTableId: "scavenger-cache", presentationId: "scavenger" }
```

Mutated replacement:

```text
{}
```

### 2732. `src/content/monsters.ts:5` — Survived / StringLiteral

Original:

```text
gloam-scavenger",
```

Mutated replacement:

```text
""
```

### 2733. `src/content/monsters.ts:5` — Survived / StringLiteral

Original:

```text
Gloam Scavenger",
```

Mutated replacement:

```text
""
```

### 2734. `src/content/monsters.ts:5` — Survived / StringLiteral

Original:

```text
scavenger-cache",
```

Mutated replacement:

```text
""
```

### 2735. `src/content/monsters.ts:5` — Survived / StringLiteral

Original:

```text
scavenger" 
```

Mutated replacement:

```text
""
```

### 2736. `src/content/monsters.ts:7` — Survived / ArrowFunction

Original:

```text
id: string): MonsterDefinition | undefined => MONSTER_DEFINITIONS.find((monster) => monster.id === id);
```

Mutated replacement:

```text
() => undefined
```

### 2737. `src/content/items.ts:13` — Survived / EqualityOperator

Original:

```text
tem.id === id)
```

Mutated replacement:

```text
item.id !== id
```

### 2738. `src/content/items.ts:13` — Survived / ArrowFunction

Original:

```text
item) => item.id === id)
```

Mutated replacement:

```text
() => undefined
```

### 2739. `src/content/items.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.id === id)
```

Mutated replacement:

```text
false
```

### 2740. `src/content/items.ts:13` — Survived / ConditionalExpression

Original:

```text
tem.id === id)
```

Mutated replacement:

```text
true
```

### 2741. `src/content/items.ts:5` — Survived / ArrayDeclaration

Original:

```text

  { id: "ember-pike", name: "Ember Pike", category: "weapon", handUsage: "either", attack: 2, presentationId: "pike" },
  { id: "rimeglass-knife", name: "Rimeglass Knife", category: "weapon", handUsage: "either", attack: 1, presentationId: "knife" },
  { id: "moonward-buckler", name: "Moonward Buckler", category: "defense", handUsage: "either", defense: 1, presentationId: "buckler" },
  { id: "ashen-mail", name: "Ashen Mail", category: "defense", handUsage: "either", defense: 2, presentationId: "mail" },
  { id: "moss-tonic", name: "Moss Tonic", category: "consumable", healing: 3, presentationId: "tonic" },
  { id: "star-forged-seal", name: "Star-Forged Seal", category: "treasure", presentationId: "seal" }
];
```

Mutated replacement:

```text
[]
```

### 2742. `src/content/items.ts:6` — Survived / ObjectLiteral

Original:

```text
 id: "ember-pike", name: "Ember Pike", category: "weapon", handUsage: "either", attack: 2, presentationId: "pike" },
```

Mutated replacement:

```text
{}
```

### 2743. `src/content/items.ts:6` — Survived / StringLiteral

Original:

```text
Ember Pike",
```

Mutated replacement:

```text
""
```

### 2744. `src/content/items.ts:6` — Survived / StringLiteral

Original:

```text
ember-pike",
```

Mutated replacement:

```text
""
```

### 2745. `src/content/items.ts:6` — Survived / StringLiteral

Original:

```text
either",
```

Mutated replacement:

```text
""
```

### 2746. `src/content/items.ts:6` — Survived / StringLiteral

Original:

```text
pike" 
```

Mutated replacement:

```text
""
```

### 2747. `src/content/items.ts:6` — Survived / StringLiteral

Original:

```text
weapon",
```

Mutated replacement:

```text
""
```

### 2748. `src/content/items.ts:7` — Survived / ObjectLiteral

Original:

```text
 id: "rimeglass-knife", name: "Rimeglass Knife", category: "weapon", handUsage: "either", attack: 1, presentationId: "knife" },
```

Mutated replacement:

```text
{}
```

### 2749. `src/content/items.ts:7` — Survived / StringLiteral

Original:

```text
Rimeglass Knife",
```

Mutated replacement:

```text
""
```

### 2750. `src/content/items.ts:7` — Survived / StringLiteral

Original:

```text
weapon",
```

Mutated replacement:

```text
""
```

### 2751. `src/content/items.ts:7` — Survived / StringLiteral

Original:

```text
rimeglass-knife",
```

Mutated replacement:

```text
""
```

### 2752. `src/content/items.ts:7` — Survived / StringLiteral

Original:

```text
either",
```

Mutated replacement:

```text
""
```

### 2753. `src/content/items.ts:7` — Survived / StringLiteral

Original:

```text
knife" 
```

Mutated replacement:

```text
""
```

### 2754. `src/content/items.ts:8` — Survived / ObjectLiteral

Original:

```text
 id: "moonward-buckler", name: "Moonward Buckler", category: "defense", handUsage: "either", defense: 1, presentationId: "buckler" },
```

Mutated replacement:

```text
{}
```

### 2755. `src/content/items.ts:8` — Survived / StringLiteral

Original:

```text
moonward-buckler",
```

Mutated replacement:

```text
""
```

### 2756. `src/content/items.ts:8` — Survived / StringLiteral

Original:

```text
defense",
```

Mutated replacement:

```text
""
```

### 2757. `src/content/items.ts:8` — Survived / StringLiteral

Original:

```text
buckler" 
```

Mutated replacement:

```text
""
```

### 2758. `src/content/items.ts:8` — Survived / StringLiteral

Original:

```text
either",
```

Mutated replacement:

```text
""
```

### 2759. `src/content/items.ts:8` — Survived / StringLiteral

Original:

```text
Moonward Buckler",
```

Mutated replacement:

```text
""
```

### 2760. `src/content/items.ts:9` — Survived / ObjectLiteral

Original:

```text
 id: "ashen-mail", name: "Ashen Mail", category: "defense", handUsage: "either", defense: 2, presentationId: "mail" },
```

Mutated replacement:

```text
{}
```

### 2761. `src/content/items.ts:9` — Survived / StringLiteral

Original:

```text
ashen-mail",
```

Mutated replacement:

```text
""
```

### 2762. `src/content/items.ts:9` — Survived / StringLiteral

Original:

```text
Ashen Mail",
```

Mutated replacement:

```text
""
```

### 2763. `src/content/items.ts:9` — Survived / StringLiteral

Original:

```text
defense",
```

Mutated replacement:

```text
""
```

### 2764. `src/content/items.ts:9` — Survived / StringLiteral

Original:

```text
either",
```

Mutated replacement:

```text
""
```

### 2765. `src/content/items.ts:10` — Survived / ObjectLiteral

Original:

```text
 id: "moss-tonic", name: "Moss Tonic", category: "consumable", healing: 3, presentationId: "tonic" },
```

Mutated replacement:

```text
{}
```

### 2766. `src/content/items.ts:9` — Survived / StringLiteral

Original:

```text
mail" 
```

Mutated replacement:

```text
""
```

### 2767. `src/content/items.ts:10` — Survived / StringLiteral

Original:

```text
moss-tonic",
```

Mutated replacement:

```text
""
```

### 2768. `src/content/items.ts:10` — Survived / StringLiteral

Original:

```text
Moss Tonic",
```

Mutated replacement:

```text
""
```

### 2769. `src/content/items.ts:10` — Survived / StringLiteral

Original:

```text
tonic" 
```

Mutated replacement:

```text
""
```

### 2770. `src/content/items.ts:10` — Survived / StringLiteral

Original:

```text
consumable",
```

Mutated replacement:

```text
""
```

### 2771. `src/content/items.ts:11` — Survived / ObjectLiteral

Original:

```text
 id: "star-forged-seal", name: "Star-Forged Seal", category: "treasure", presentationId: "seal" }
```

Mutated replacement:

```text
{}
```

### 2772. `src/content/items.ts:11` — Survived / StringLiteral

Original:

```text
star-forged-seal",
```

Mutated replacement:

```text
""
```

### 2773. `src/content/items.ts:11` — Survived / StringLiteral

Original:

```text
Star-Forged Seal",
```

Mutated replacement:

```text
""
```

### 2774. `src/content/items.ts:11` — Survived / StringLiteral

Original:

```text
treasure",
```

Mutated replacement:

```text
""
```

### 2775. `src/content/items.ts:11` — Survived / StringLiteral

Original:

```text
seal" 
```

Mutated replacement:

```text
""
```

### 2776. `src/content/items.ts:13` — Survived / ArrowFunction

Original:

```text
id: string): ItemDefinition | undefined => ITEM_DEFINITIONS.find((item) => item.id === id);
```

Mutated replacement:

```text
() => undefined
```

### 2777. `src/renderer/assets/dungeonAtlas.ts:22` — Survived / ObjectLiteral

Original:

```text

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
```

Mutated replacement:

```text
{}
```

### 2778. `src/renderer/assets/dungeonAtlas.ts:23` — Survived / StringLiteral

Original:

```text
tarmin-dungeon-surfaces-v2",
```

Mutated replacement:

```text
""
```

### 2779. `src/renderer/assets/dungeonAtlas.ts:24` — Survived / StringLiteral

Original:

```text
/assets/dungeon/dungeon-surfaces.png",
```

Mutated replacement:

```text
""
```

### 2780. `src/renderer/assets/dungeonAtlas.ts:28` — Survived / ArrayDeclaration

Original:

```text

    { id: "crypt-stone", x: 1, y: 1, width: 32, height: 32 },
    { id: "burial-masonry", x: 35, y: 1, width: 32, height: 32 },
    { id: "basalt", x: 69, y: 1, width: 32, height: 32 },
    { id: "timber-door", x: 103, y: 1, width: 32, height: 32 },
    { id: "iron-door", x: 1, y: 35, width: 32, height: 32 },
    { id: "floor-stone", x: 35, y: 35, width: 32, height: 32 },
    { id: "ceiling-stone", x: 69, y: 35, width: 32, height: 32 },
    { id: "darkness", x: 103, y: 35, width: 32, height: 32 }
  ]
```

Mutated replacement:

```text
[]
```

### 2781. `src/renderer/assets/dungeonAtlas.ts:29` — Survived / ObjectLiteral

Original:

```text
 id: "crypt-stone", x: 1, y: 1, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2782. `src/renderer/assets/dungeonAtlas.ts:29` — Survived / StringLiteral

Original:

```text
crypt-stone",
```

Mutated replacement:

```text
""
```

### 2783. `src/renderer/assets/dungeonAtlas.ts:30` — Survived / ObjectLiteral

Original:

```text
 id: "burial-masonry", x: 35, y: 1, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2784. `src/renderer/assets/dungeonAtlas.ts:30` — Survived / StringLiteral

Original:

```text
burial-masonry",
```

Mutated replacement:

```text
""
```

### 2785. `src/renderer/assets/dungeonAtlas.ts:31` — Survived / ObjectLiteral

Original:

```text
 id: "basalt", x: 69, y: 1, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2786. `src/renderer/assets/dungeonAtlas.ts:31` — Survived / StringLiteral

Original:

```text
basalt",
```

Mutated replacement:

```text
""
```

### 2787. `src/renderer/assets/dungeonAtlas.ts:32` — Survived / ObjectLiteral

Original:

```text
 id: "timber-door", x: 103, y: 1, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2788. `src/renderer/assets/dungeonAtlas.ts:32` — Survived / StringLiteral

Original:

```text
timber-door",
```

Mutated replacement:

```text
""
```

### 2789. `src/renderer/assets/dungeonAtlas.ts:33` — Survived / ObjectLiteral

Original:

```text
 id: "iron-door", x: 1, y: 35, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2790. `src/renderer/assets/dungeonAtlas.ts:33` — Survived / StringLiteral

Original:

```text
iron-door",
```

Mutated replacement:

```text
""
```

### 2791. `src/renderer/assets/dungeonAtlas.ts:34` — Survived / ObjectLiteral

Original:

```text
 id: "floor-stone", x: 35, y: 35, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2792. `src/renderer/assets/dungeonAtlas.ts:34` — Survived / StringLiteral

Original:

```text
floor-stone",
```

Mutated replacement:

```text
""
```

### 2793. `src/renderer/assets/dungeonAtlas.ts:35` — Survived / ObjectLiteral

Original:

```text
 id: "ceiling-stone", x: 69, y: 35, width: 32, height: 32 },
```

Mutated replacement:

```text
{}
```

### 2794. `src/renderer/assets/dungeonAtlas.ts:35` — Survived / StringLiteral

Original:

```text
ceiling-stone",
```

Mutated replacement:

```text
""
```

### 2795. `src/renderer/assets/dungeonAtlas.ts:36` — Survived / ObjectLiteral

Original:

```text
 id: "darkness", x: 103, y: 35, width: 32, height: 32 }
```

Mutated replacement:

```text
{}
```

### 2796. `src/renderer/assets/dungeonAtlas.ts:36` — Survived / StringLiteral

Original:

```text
darkness",
```

Mutated replacement:

```text
""
```

## Execution diagnostics

_None._

## Remediation boundary

Use a separate test-improvement pass for remediation.

For each `Survived` or `NoCoverage` mutant:

1. Determine the observable behavior changed by the mutation.
2. Add or sharpen the narrowest assertion that would fail for that defect while passing for the real code.
3. Prefer behavior-level assertions over snapshots or implementation-coupled checks.
4. Do not modify production behavior merely to increase the mutation score.
5. If a mutant appears equivalent, record the equivalence rationale for independent review rather than silently dismissing it.
6. Re-run ordinary affected tests first, then invoke mutation-test-guardian again for independent confirmation.

Do not edit this guardian run's evidence artifacts as part of remediation.
