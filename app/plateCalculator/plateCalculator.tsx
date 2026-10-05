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
      {/* weight display */}
      <div className="mb-2 aspect-3/1 cursor-pointer rounded-md border bg-gray-400 p-3 text-[15vw] text-black">
        <span className="float-right">{weight}</span>
      </div>

      {/* buttons */}
      <div className="container grid max-w-lg grid-cols-3 gap-2">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <CalculatorButton
            value={num}
            onClick={() => onClickNumberButton(num)}
          />
        ))}
        <div>{/* spacer to put 0 in the right spot*/}</div>

        <CalculatorButton value={0} onClick={() => onClickNumberButton(0)} />
        <CalculatorButton value="Clear" onClick={onClickClearButton} />
      </div>
    </div>
  )
}
