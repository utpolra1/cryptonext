"use client"

import { useState, useEffect } from "react"

export default function FallbackChart({ priceData }) {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    if (priceData && priceData.length > 0) {
      setPrices(priceData.map((candle) => candle.close))
    }
  }, [priceData])

  // Calculate the min and max values for scaling
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  const range = max - min

  // Scale a price value to a percentage of the chart height
  const scalePrice = (price) => {
    return 100 - ((price - min) / range) * 100
  }

  return (
    <div className="w-full h-[400px] relative">
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-6 pointer-events-none">
        {Array.from({ length: 8 }).map((_, colIndex) =>
          Array.from({ length: 6 }).map((_, rowIndex) => (
            <div key={`${colIndex}-${rowIndex}`} className="border border-gray-800/50" />
          )),
        )}
      </div>

      <div className="absolute inset-0 p-4">
        <div className="relative w-full h-full">
          {/* Price labels */}
          <div className="absolute right-0 top-0 text-xs text-gray-400">{max.toFixed(2)}</div>
          <div className="absolute right-0 bottom-0 text-xs text-gray-400">{min.toFixed(2)}</div>

          {/* Line chart */}
          {prices.length > 1 && (
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d={`M 0,${scalePrice(prices[0])} ${prices
                  .map((price, i) => `L ${(i / (prices.length - 1)) * 100},${scalePrice(price)}`)
                  .join(" ")}`}
                fill="none"
                stroke="#2962FF"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

