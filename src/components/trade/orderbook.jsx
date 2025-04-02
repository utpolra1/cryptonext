"use client"

import { useState, useEffect } from "react"
import { CircleDot } from "lucide-react"

export default function OrderBook({ currentPrice }) {
  const [asks, setAsks] = useState([])
  const [bids, setBids] = useState([])
  const [activeTab, setActiveTab] = useState("all")

  // Format number with commas and 2 decimal places
  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  // Generate random order book data based on current price
  useEffect(() => {
    const generateOrderBook = (basePrice) => {
      const newAsks = []
      const newBids = []

      // Generate 10 ask orders (sell orders above current price)
      for (let i = 0; i < 10; i++) {
        const price = basePrice + (i + 1) * (Math.random() * 20 + 5)
        const amount = Math.random() * 0.2 + 0.0001
        newAsks.push({
          price,
          amount,
          total: price * amount,
        })
      }

      // Generate 10 bid orders (buy orders below current price)
      for (let i = 0; i < 10; i++) {
        const price = basePrice - (i + 1) * (Math.random() * 20 + 5)
        const amount = Math.random() * 0.2 + 0.0001
        newBids.push({
          price,
          amount,
          total: price * amount,
        })
      }

      // Sort asks ascending by price
      newAsks.sort((a, b) => a.price - b.price)
      // Sort bids descending by price
      newBids.sort((a, b) => b.price - a.price)

      setAsks(newAsks)
      setBids(newBids)
    }

    generateOrderBook(currentPrice)
  }, [currentPrice])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Order Book</h3>
        <div className="flex gap-2">
          <button
            className={`rounded-full p-1 ${activeTab === "all" ? "bg-gray-700" : "bg-gray-800"}`}
            onClick={() => setActiveTab("all")}
          >
            <CircleDot className="w-5 h-5 text-teal-500" />
          </button>
          <button
            className={`rounded-full p-1 ${activeTab === "bids" ? "bg-gray-700" : "bg-gray-800"}`}
            onClick={() => setActiveTab("bids")}
          >
            <CircleDot className="w-5 h-5 text-green-500" />
          </button>
          <button
            className={`rounded-full p-1 ${activeTab === "asks" ? "bg-gray-700" : "bg-gray-800"}`}
            onClick={() => setActiveTab("asks")}
          >
            <CircleDot className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 text-xs text-gray-400 mb-1 px-2 py-2 border-b border-gray-800">
        <div>PRICE(USDT)</div>
        <div className="text-right">AMOUNT(BTC)</div>
        <div className="text-right">TOTAL(USDT)</div>
      </div>

      {/* Current Price */}
      <div className="bg-gray-800/50 py-2 px-2 mb-2 text-center">
        <span className="font-bold text-white">{formatNumber(currentPrice)} USDT</span>
      </div>

      {/* Order Book Entries */}
      <div className="overflow-y-auto flex-1">
        {(activeTab === "all" || activeTab === "asks") && (
          <>
            {asks.map((ask, index) => (
              <div key={`ask-${index}`} className="grid grid-cols-3 text-xs py-1 px-2 hover:bg-gray-800 relative">
                <div className="text-teal-500">{formatNumber(ask.price)}</div>
                <div className="text-right">{ask.amount.toFixed(8)}</div>
                <div className="text-right">{formatNumber(ask.total)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-teal-500/20"
                  style={{ width: `${Math.min(ask.amount * 500, 100)}%` }}
                />
              </div>
            ))}
          </>
        )}

        {(activeTab === "all" || activeTab === "bids") && (
          <>
            {bids.map((bid, index) => (
              <div key={`bid-${index}`} className="grid grid-cols-3 text-xs py-1 px-2 hover:bg-gray-800 relative">
                <div className="text-teal-500">{formatNumber(bid.price)}</div>
                <div className="text-right">{bid.amount.toFixed(8)}</div>
                <div className="text-right">{formatNumber(bid.total)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-teal-500/20"
                  style={{ width: `${Math.min(bid.amount * 500, 100)}%` }}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

