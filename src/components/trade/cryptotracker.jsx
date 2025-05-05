"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUp } from "lucide-react"
import CandlestickChart from "./candlestickchart"
import LineChart from "./linechart"
import FallbackChart from "./fallbackchart"
import OrderBook from "./orderbook"

// Initial data
const initialData = {
  symbol: "BTC/USDT",
  price: 83362.47,
  priceChange: 1.377,
  low24h: 81290.88,
  high24h: 83943.08,
  volume: 18903.94,
  lastUpdate: new Date(),
}

export default function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState(initialData)
  const [candleData, setCandleData] = useState([])
  const [chartType, setChartType] = useState("candlestick") // 'candlestick', 'line', or 'fallback'
  const [chartKey, setChartKey] = useState(Date.now()) // Used to force re-render of charts

  // Format number with commas and 2 decimal places
  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  // Generate initial candle data
  function generateInitialCandleData() {
    try {
      const candles = []
      let basePrice = 83000
      const now = Math.floor(Date.now() / 1000)

      // Generate data for the past 100 periods (15-minute candles)
      for (let i = 0; i < 100; i++) {
        const volatility = Math.random() * 200 + 50 // Random volatility between 50-250
        const direction = Math.random() > 0.5 ? 1 : -1 // Random direction
        const change = direction * volatility * (Math.random() * 0.8 + 0.2) // Random change with direction

        const open = basePrice
        const close = basePrice + change

        // High is the maximum of open and close, plus a random amount
        const high = Math.max(open, close) + Math.random() * 100
        // Low is the minimum of open and close, minus a random amount
        const low = Math.min(open, close) - Math.random() * 100

        candles.push({
          time: now - (100 - i) * 900, // 15 minute candles (900 seconds)
          open,
          high,
          low,
          close,
          volume: Math.random() * 100 + 10, // Random volume
        })

        basePrice = close
      }

      return candles
    } catch (error) {
      console.error("Error generating candle data:", error)
      return []
    }
  }

  // Handle chart errors
  const handleChartError = useCallback((type) => {
    console.log(`${type} chart failed, trying fallback`)
    if (type === "candlestick") {
      setChartType("line")
    } else {
      setChartType("fallback")
    }
    // Force re-render of the chart
    setChartKey(Date.now())
  }, [])

  // Simulate price updates and generate candle data
  useEffect(() => {
    try {
      // Generate initial candle data
      const initialCandles = generateInitialCandleData()
      setCandleData(initialCandles)

      const interval = setInterval(() => {
        setCryptoData((prev) => {
          const randomChange = (Math.random() * 100 - 50) * 2
          const newPrice = prev.price + randomChange

          return {
            ...prev,
            price: newPrice,
            priceChange: ((newPrice - prev.price) / prev.price) * 100,
            low24h: Math.min(prev.low24h, newPrice),
            high24h: Math.max(prev.high24h, newPrice),
            lastUpdate: new Date(),
          }
        })

        setCandleData((prev) => {
          if (!prev || prev.length === 0) return generateInitialCandleData()

          const lastCandle = prev[prev.length - 1]
          const isNewCandle = Math.random() > 0.7
          const newPrice = cryptoData.price + (Math.random() * 100 - 50) * 2

          if (isNewCandle) {
            const newCandle = {
              time: Math.floor(Date.now() / 1000),
              open: lastCandle.close,
              high: Math.max(lastCandle.close, newPrice),
              low: Math.min(lastCandle.close, newPrice),
              close: newPrice,
              volume: Math.random() * 100 + 10,
            }
            return [...prev, newCandle].slice(-100) // Keep last 100 candles
          } else {
            const updatedCandle = {
              ...lastCandle,
              high: Math.max(lastCandle.high, newPrice),
              low: Math.min(lastCandle.low, newPrice),
              close: newPrice,
              volume: lastCandle.volume + Math.random() * 5,
            }
            return [...prev.slice(0, -1), updatedCandle]
          }
        })
      }, 2000)

      return () => clearInterval(interval)
    } catch (error) {
      console.error("Error in useEffect:", error)
      setChartType("fallback")
    }
  }, [])

  const isPriceUp = cryptoData.priceChange >= 0

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-sm">₿</span>
          </div>
          <h2 className="text-xl font-bold">{cryptoData.symbol}</h2>
        </div>

        <div className="flex flex-wrap gap-4 sm:flex-row">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">Last Price</span>
            <div className="flex items-center">
              <span className="text-xl font-bold">{formatNumber(cryptoData.price)} USDT</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">24h Change</span>
            <div className={`flex items-center ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
              <ArrowUp className={`w-4 h-4 ${!isPriceUp ? "rotate-180" : ""}`} />
              <span className="font-bold">{Math.abs(cryptoData.priceChange).toFixed(2)}%</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">24h Low</span>
            <span className="font-bold">{formatNumber(cryptoData.low24h)} USDT</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">24h High</span>
            <span className="font-bold">{formatNumber(cryptoData.high24h)} USDT</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">Volume</span>
            <span className="font-bold">{formatNumber(cryptoData.volume)} USDT</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 bg-card rounded-lg overflow-hidden border border-border">
          <div className="flex justify-end p-2 border-b border-border">
            <div className="flex gap-2">
              <button
                className={`px-2 py-1 text-xs rounded ${chartType === "candlestick" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                onClick={() => {
                  setChartType("candlestick")
                  setChartKey(Date.now())
                }}
              >
                Candlestick
              </button>
              <button
                className={`px-2 py-1 text-xs rounded ${chartType === "line" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                onClick={() => {
                  setChartType("line")
                  setChartKey(Date.now())
                }}
              >
                Line
              </button>
            </div>
          </div>

          {chartType === "candlestick" && (
            <div className="p-0">
              <CandlestickChart key={`candlestick-${chartKey}`} candleData={candleData} onError={() => handleChartError("candlestick")} />
            </div>
          )}

          {chartType === "line" && (
            <div className="p-0">
              <LineChart key={`line-${chartKey}`} priceData={candleData} onError={() => handleChartError("line")} />
            </div>
          )}

          {chartType === "fallback" && (
            <div className="p-0">
              <FallbackChart key={`fallback-${chartKey}`} priceData={candleData} />
            </div>
          )}
        </div>

        <div className="lg:col-span-1 bg-card p-4 rounded-lg border border-border">
          <OrderBook currentPrice={cryptoData.price} />
        </div>
      </div>
    </div>
  )
}
