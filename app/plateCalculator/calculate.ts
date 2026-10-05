// recursively calculate all combinations
export function calcPlateCombinations(barWeight, platePairs) {
  if (platePairs.length === 0) return [[barWeight, []]]

  const current = platePairs[0]
  const remaining = platePairs.slice(1)
  const result = []
  for (let num = 0; num <= current[1]; num++) {
    const currentWeight = current[0] * 2 * num
    for (let [w, c] of calcPlateCombinations(0, remaining)) {
      result.push([
        w + barWeight + currentWeight,
        [...c, [current[0], num]],
        window.crypto.randomUUID(),
      ])
    }
  }

  return result.sort((a, b) => a[0] - b[0])
}
