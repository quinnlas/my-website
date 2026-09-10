import { useEffect, useState } from "react"

const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true })
const audioContext = new AudioContext()
const analyser = audioContext.createAnalyser()
const PRECISION = 3 // can be from 0 to 10
analyser.fftSize = 32 * (2 ** PRECISION)
const numBins = analyser.frequencyBinCount;
const freqs = new Uint8Array(numBins);
const freqMaxes = Array.from(freqs).fill(0)

// Connect the source to be analyzed
audioContext.createMediaStreamSource(stream).connect(analyser)

// Each item in the array represents the decibel value for a specific frequency. The frequencies are spread linearly from 0 to 1/2 of the sample rate. For example, for a 48000 Hz sample rate, the last item of the array will represent the decibel value for 24000 Hz.
const maxFreq = audioContext.sampleRate / 2
const freqBinWidth = maxFreq / numBins
console.log(`Freq from 0 Hz to ${maxFreq} Hz, ${numBins} bins of width ${freqBinWidth} Hz`)

export function NoiseMachine() {
  const [volumeLevels, setVolumeLevels] = useState([])

  useEffect(() => {
    setTimeout(() => {
      // get new equalizer data
      analyser.getByteFrequencyData(freqs);
      const normFreqs = Array.from(freqs).map(v => v / 255)
      setVolumeLevels(normFreqs)

      // update maxes
      for (let [i, v] of normFreqs.entries()) {
        freqMaxes[i] = Math.max(freqMaxes[i], v)
      }

      // draw equalizer
      const canvas = document.getElementById("canvas")
      const ctx = canvas.getContext("2d")

      // background
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // bars
      const barWidth = canvas.width / numBins
      ctx.fillStyle = "#900000"
      for (let [i, v] of normFreqs.entries()) {
        ctx.fillRect(i * barWidth + 1, canvas.height * (1 - v), barWidth - 1, canvas.height * v)
      }

      // maxes
      ctx.fillStyle = "grey"
      for (let [i, v] of freqMaxes.entries()) {
        ctx.fillRect(i * barWidth, canvas.height * (1 - v), barWidth, 2)
      }
    }, 50)
  }, [volumeLevels]);

  return (
    <div className="container mx-auto">
      <div style={{width: "100%"}} className="p-3">
        <canvas id="canvas" width="800" style={{"width": "100%"}} className="shadow-2xl">&nbsp;</canvas>
      </div>
    </div>
  );
}

