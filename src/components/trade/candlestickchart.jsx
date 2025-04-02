"use client"

import { useEffect, useRef, useState } from "react"
import * as LightweightCharts from "lightweight-charts"

export default function CandlestickChart({ candleData, onError }) {
  const chartContainerRef = useRef(null)
  const chartRef = useRef(null)
  const seriesRef = useRef(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Create chart instance
  useEffect(() => {
    if (!chartContainerRef.current) return

    // Clean up function to properly dispose of chart
    const cleanupChart = () => {
      if (chartRef.current) {
        try {
          chartRef.current.remove()
        } catch (e) {
          console.log("Chart already removed")
        }
        chartRef.current = null
        seriesRef.current = null
        setIsInitialized(false)
      }
    }

    // Clean up previous chart instance
    cleanupChart()

    try {
      // Create a new chart instance
      const chart = LightweightCharts.createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          background: { color: "transparent" },
          textColor: "rgba(255, 255, 255, 0.7)",
        },
        grid: {
          vertLines: { color: "rgba(42, 46, 57, 0.6)" },
          horzLines: { color: "rgba(42, 46, 57, 0.6)" },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          borderColor: "rgba(197, 203, 206, 0.3)",
          rightOffset: 5,
          barSpacing: 10,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
        },
        rightPriceScale: {
          borderColor: "rgba(197, 203, 206, 0.3)",
          scaleMargins: {
            top: 0.1,
            bottom: 0.1,
          },
        },
      })

      // Create a candlestick series
      const series = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      })

      // Save the references
      chartRef.current = chart
      seriesRef.current = series
      setIsInitialized(true)

      // Handle window resize
      const handleResize = () => {
        if (chartContainerRef.current && chartRef.current) {
          try {
            chart.applyOptions({
              width: chartContainerRef.current.clientWidth,
            })
            chart.timeScale().fitContent()
          } catch (e) {
            console.error("Error resizing chart:", e)
          }
        }
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        cleanupChart()
      }
    } catch (error) {
      console.error("Error creating candlestick chart:", error)
      if (onError) onError()
    }
  }, [onError])

  // Update data when candleData changes
  useEffect(() => {
    if (!isInitialized || !seriesRef.current || !candleData || candleData.length === 0) return

    try {
      // Format the data correctly
      const formattedData = candleData.map((candle) => ({
        time: candle.time,
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close,
      }))

      // Set the data
      seriesRef.current.setData(formattedData)

      // Fit the chart to the data
      if (chartRef.current) {
        // Add a small delay to ensure the chart has time to process the data
        setTimeout(() => {
          try {
            chartRef.current.timeScale().fitContent()
          } catch (e) {
            console.error("Error fitting content:", e)
          }
        }, 50)
      }
    } catch (error) {
      console.error("Error updating candlestick data:", error)
      if (onError) onError()
    }
  }, [candleData, isInitialized, onError])

  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-6 pointer-events-none">
        {Array.from({ length: 8 }).map((_, colIndex) =>
          Array.from({ length: 6 }).map((_, rowIndex) => (
            <div key={`${colIndex}-${rowIndex}`} className="border border-gray-800/50" />
          )),
        )}
      </div>
      <div ref={chartContainerRef} className="w-full h-full z-10 relative" />
    </div>
  )
}

