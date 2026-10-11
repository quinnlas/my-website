// recursively calculate all combinations
export function calcPlateCombinations(barWeight, platePairsAvailable) {
  if (platePairsAvailable.length === 0)
    return [{ weight: barWeight, platePairs: [] }]

  const current = platePairsAvailable[0]
  const remaining = platePairsAvailable.slice(1)
  const result = []
  for (let num = 0; num <= current.numPairs; num++) {
    const currentWeight = current.weight * 2 * num
    for (let { weight: w, platePairs: c } of calcPlateCombinations(
      0,
      remaining,
    )) {
      result.push({
        weight: w + barWeight + currentWeight,
        platePairs: [...c, { weight: current.weight, numPairs: num }],
      })
    }
  }

  return result.sort((a, b) => a.weight - b.weight)
}
