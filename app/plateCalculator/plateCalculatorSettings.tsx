export function PlateCalculatorSettings({ settings, updateSettings }) {
  function onChangePlatePair(index, weight, numPairs) {
    const newSettings = {
      ...settings,
      platePairs: [...settings.platePairs],
    }
    newSettings.platePairs[index].weight = weight
    newSettings.platePairs[index].numPairs = numPairs
    newSettings.platePairs.sort((a, b) => a.weight - b.weight)
    updateSettings(newSettings)
  }

  function removePlatePair(index) {
    const newSettings = {
      ...settings,
      platePairs: [...settings.platePairs],
    }
    newSettings.platePairs.splice(index, 1)
    updateSettings(newSettings)
  }

  function addPlatePair() {
    const newSettings = {
      ...settings,
      platePairs: [...settings.platePairs],
    }
    newSettings.platePairs.push({
      weight: 0,
      numPairs: 1,
    })
    updateSettings(newSettings)
  }

  function onChangeBarWeight(weight) {
    const newSettings = {
      ...settings,
    }
    newSettings.barWeight = weight
    updateSettings(newSettings)
  }

  return (
    <div className="p-1">
      {/* plate inputs */}
      <h1>Plate Pairs</h1>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-3 gap-1">
          <span></span>
          <span>Weight</span>
          <span># Pairs</span>
        </div>
        {settings.platePairs.map(({ weight, numPairs, id }, i) => (
          // must use uuid as key because weight can be edited
          <div className="grid grid-cols-3 gap-1" key={id}>
            <button
              className="aspect-square w-min cursor-pointer rounded-md border bg-gray-400 px-3 font-mono text-black hover:bg-gray-500"
              onClick={() => removePlatePair(i)}
            >
              -
            </button>
            <input
              type="number"
              value={weight}
              onChange={(e) =>
                onChangePlatePair(i, Number(e.target.value), numPairs)
              }
              min={0}
            />
            <input
              type="number"
              value={numPairs}
              onChange={(e) =>
                onChangePlatePair(i, weight, Number(e.target.value))
              }
              min={0}
            />
          </div>
        ))}
        <div className="grid grid-cols-3 gap-1">
          <button
            className="aspect-square w-min cursor-pointer rounded-md border bg-gray-400 px-3 font-mono text-black hover:bg-gray-500"
            onClick={addPlatePair}
          >
            +
          </button>
        </div>
      </div>

      {/* other settings */}
      <h1>Other Settings</h1>
      <div className="grid grid-cols-2">
        <label>Bar Weight</label>
        <input
          type="number"
          value={settings.barWeight}
          onChange={(e) => onChangeBarWeight(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
