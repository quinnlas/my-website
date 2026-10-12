import { calcPlateCombinations } from "./calculate"

export default function plateCalculatorReducer(state, action) {
  switch (action.type) {
    case "set_weight": {
      const newState = { ...state }

      newState.weight = action.value
      newState.matchedCombinations = newState.allCombinations
        .filter((c) => c.weight === newState.weight)
        .map((c) => ({ ...c, id: newState.nextID++ }))

      return newState
    }
    case "set_settings": {
      const newState = { ...state }

      newState.settings = action.value

      // handle platePair IDs
      for (let pp of newState.settings.platePairs) {
        if (pp.id === undefined) {
          // don't use `if (!pp.id)` as this will cause a bug with id of 0 (or don't use id of 0...)
          pp.id = newState.nextID++
        }
      }

      // handle combinations
      newState.allCombinations = calcPlateCombinations(
        newState.settings.barWeight,
        newState.settings.platePairs,
      )

      newState.matchedCombinations = newState.allCombinations
        .filter((c) => c.weight === newState.weight)
        .map((c) => ({ ...c, id: newState.nextID++ }))

      return newState
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
