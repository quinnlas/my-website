import { useState } from "react"
import { PlateCalculatorSettings } from "./plateCalculatorSettings"
import { calcPlateCombinations } from "./calculate"

function CalculatorButton({ value, onClick }) {
  return (
    <button
      className="aspect-square cursor-pointer rounded-md border bg-gray-400 text-black hover:bg-gray-500"
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
      {combination.map(([w, q], i) => (
        <SamePlateGroup key={i} weight={w} quantity={q} />
      ))}
    </div>
  )
}

export function PlateCalculator() {
  const [weight, setWeight] = useState(0)
  const [folded, setFolded] = useState(true)
  const [settings, setSettings] = useState({
    barWeight: 45,
    platePairs: [
      // see note about uuid in plateCalculatorSettings
      [5, 1, crypto.randomUUID()],
      [10, 2, crypto.randomUUID()],
      [25, 1, crypto.randomUUID()],
      [45, 20, crypto.randomUUID()],
    ],
  })
  const [combinations, setCombinations] = useState(
    calcPlateCombinations(settings.barWeight, settings.platePairs),
  )
  const [matchedCombinations, setMatchedCombinations] = useState([])

  function onClickNumberButton(value) {
    const newWeight = weight * 10 + value
    setWeight(newWeight)
    setMatchedCombinations(combinations.filter((c) => c[0] === newWeight))
  }

  function onClickClearButton() {
    setWeight(0)
    setMatchedCombinations([])
  }

  function onClickSettingsButton() {
    setFolded(!folded)
  }

  function updateSettings(newSettings) {
    setSettings(newSettings)
    setCombinations(
      calcPlateCombinations(newSettings.barWeight, newSettings.platePairs),
    )
  }

  return (
    <div className="p-1">
      {/* weight display */}
      <div className="mb-2 aspect-3/1 rounded-md border bg-gray-400 p-3 text-[15vw] text-black">
        <span className="float-right">{weight}</span>
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
        style={{ display: matchedCombinations.length ? "" : "none" }}
      >
        <h1>Results</h1>
        {matchedCombinations.map((c) => (
          <PlateCombination key={c[2]} combination={c[1]} />
        ))}
      </div>

      {/* settings */}
      <div style={{ display: folded ? "none" : "" }}>
        <PlateCalculatorSettings
          settings={settings}
          updateSettings={updateSettings}
        />
      </div>
    </div>
  )
}
