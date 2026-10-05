export function PlateCalculatorSettings({ settings, updateSettings }) {
  function onChangePlatePair(index, weight, quantity) {
    const newSettings = Object.assign({}, settings, {
      platePairs: Array.from(settings.platePairs),
    })
    newSettings.platePairs[index][0] = weight
    newSettings.platePairs[index][1] = quantity
    newSettings.platePairs.sort((a, b) => a[0] - b[0])
    updateSettings(newSettings)
  }

  function removePlatePair(index) {
    const newSettings = Object.assign({}, settings, {
      platePairs: Array.from(settings.platePairs),
    })
    newSettings.platePairs.splice(index, 1)
    updateSettings(newSettings)
  }

  function addPlatePair() {
    const newSettings = Object.assign({}, settings, {
      platePairs: Array.from(settings.platePairs),
    })
    newSettings.platePairs.push([0, 1, crypto.randomUUID()])
    updateSettings(newSettings)
  }

  function onChangeBarWeight(weight) {
    const newSettings = Object.assign({}, settings)
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
        {settings.platePairs.map(([w, q, uuid], i) => (
          // must use uuid as key because weight can be edited
          <div className="grid grid-cols-3 gap-1" key={uuid}>
            <button
              className="aspect-square w-min cursor-pointer rounded-md border bg-gray-400 px-3 font-mono text-black hover:bg-gray-500"
              onClick={() => removePlatePair(i)}
            >
              -
            </button>
            <input
              type="number"
              value={w}
              onChange={(e) => onChangePlatePair(i, Number(e.target.value), q)}
              min={0}
            />
            <input
              type="number"
              value={q}
              onChange={(e) => onChangePlatePair(i, w, Number(e.target.value))}
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
          onChange={(e) => onChangeBarWeight(e.target.value)}
        />
      </div>
    </div>
  )
}
