import { useState } from "react"

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

export function PlateCalculator() {
  const [weight, setWeight] = useState(0)

  function onClickNumberButton(value) {
    if (weight === 0) {
      setWeight(value)
    } else {
      setWeight(weight * 10 + value)
    }
  }

  function onClickClearButton() {
    setWeight(0)
  }

  return (
    <div className="p-1">
      {weight}
      <div className="container grid max-w-lg grid-cols-3 gap-2">
        {"7894561230"
          .split("")
          .map(Number)
          .map((num) => (
            <CalculatorButton
              value={num}
              onClick={() => onClickNumberButton(num)}
            />
          ))}
        <CalculatorButton value="Clear" onClick={onClickClearButton} />
      </div>
    </div>
  )
}
