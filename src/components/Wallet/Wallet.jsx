// components/Wallet.tsx
"use client";

import { useState } from "react";

const tokens = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "/icons/btc.svg",
    balance: 0.523,
    price: 66000,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "/icons/eth.svg",
    balance: 2.1,
    price: 3200,
  },
];

export default function Wallet() {
  const totalBalance = tokens.reduce(
    (sum, token) => sum + token.balance * token.price,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Wallet Summary */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-2">Wallet Balance</h2>
        <p className="text-3xl font-semibold">${totalBalance.toFixed(2)}</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Deposit</button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">Withdraw</button>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">Transfer</button>
        </div>
      </div>

      {/* Token List */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Your Assets</h3>
        <div className="space-y-4">
          {tokens.map((token) => (
            <div key={token.symbol} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-3">
                <img src={token.icon} alt={token.name} className="w-8 h-8" />
                <div>
                  <p className="font-semibold">{token.name}</p>
                  <p className="text-sm text-gray-500">{token.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p>{token.balance} {token.symbol}</p>
                <p className="text-sm text-gray-500">${(token.balance * token.price).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
