import { useState, useReducer } from "react"
import { PlateCalculatorSettings } from "./plateCalculatorSettings"
import { calcPlateCombinations } from "./calculate"
import plateCalculatorReducer from "./plateCalculatorReducer"

function CalculatorButton({ value, onClick }) {
  return (
    <button
      className="aspect-3/2 cursor-pointer rounded-md border bg-gray-400 text-black hover:bg-gray-500"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

function SamePlateGroup({ weight, quantity }) {
  return (
    <>
      {new Array(quantity).fill(0).map((_, i) => (
        <div
          key={i}
          className="inline h-25 rounded-md border bg-gray-400 text-center text-black"
          style={{ writingMode: "sideways-lr" }}
        >
          {weight}
        </div>
      ))}
    </>
  )
}

function PlateCombination({ combination }) {
  return (
    <div>
      {combination.map(({ weight, numPairs }, i) => (
        <SamePlateGroup key={i} weight={weight} quantity={numPairs} />
      ))}
    </div>
  )
}

const initialSettings = {
  barWeight: 45,
  platePairs: [
    {
      weight: 2.5,
      numPairs: 1,
      id: 0,
    },
    {
      weight: 5,
      numPairs: 1,
      id: 1,
    },
    {
      weight: 10,
      numPairs: 2,
      id: 2,
    },
    {
      weight: 25,
      numPairs: 1,
      id: 3,
    },
    {
      weight: 45,
      numPairs: 20,
      id: 4,
    },
  ],
}
const initialCalculator = {
  nextID: 5,
  weight: 0,
  allCombinations: calcPlateCombinations(
    initialSettings.barWeight,
    initialSettings.platePairs,
  ),
  matchedCombinations: [],
  settings: initialSettings,
}

export function PlateCalculator() {
  const [calculator, dispatch] = useReducer(
    plateCalculatorReducer,
    initialCalculator,
  )
  const [settingsFolded, setSettingsFolded] = useState(true)

  function onClickNumberButton(value) {
    dispatch({
      type: "set_weight",
      value: calculator.weight * 10 + value,
    })
  }

  function onClickClearButton() {
    dispatch({
      type: "set_weight",
      value: 0,
    })
  }

  function onClickSettingsButton() {
    setSettingsFolded(!settingsFolded)
  }

  function updateSettings(newSettings) {
    dispatch({
      type: "set_settings",
      value: newSettings,
    })
  }

  return (
    <div className="p-1">
      {/* weight display */}
      <div className="mb-2 aspect-3/1 rounded-md border bg-gray-400 p-3 text-[15vw] text-black">
        <span className="float-right">{calculator.weight}</span>
      </div>

      {/* buttons */}
      <div className="container grid max-w-lg grid-cols-3 gap-2">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <CalculatorButton
            key={num}
            value={num}
            onClick={() => onClickNumberButton(num)}
          />
        ))}
        <CalculatorButton value="Settings" onClick={onClickSettingsButton} />
        <CalculatorButton value={0} onClick={() => onClickNumberButton(0)} />
        <CalculatorButton value="Clear" onClick={onClickClearButton} />
      </div>

      {/* results */}
      <div
        className="pt-2"
        style={{ display: calculator.matchedCombinations.length ? "" : "none" }}
      >
        <h1>Results</h1>
        {calculator.matchedCombinations.slice(0, 1).map((c) => (
          // TODO: remove slice when better display of multiple options is implemented
          <PlateCombination key={c.id} combination={c.platePairs} />
        ))}
      </div>

      {/* settings */}
      <div style={{ display: settingsFolded ? "none" : "" }}>
        <PlateCalculatorSettings
          settings={calculator.settings}
          updateSettings={updateSettings}
        />
      </div>
    </div>
  )
}
