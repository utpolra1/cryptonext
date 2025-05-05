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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
      {/* Wallet Summary */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Wallet Balance</h2>
        <p className="text-3xl md:text-4xl font-semibold">${totalBalance.toFixed(2)}</p>
        <div className="flex gap-4 mt-4 flex-wrap justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mb-2 sm:mb-0 w-full sm:w-auto">
            Deposit
          </button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg mb-2 sm:mb-0 w-full sm:w-auto">
            Withdraw
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg mb-2 sm:mb-0 w-full sm:w-auto">
            Transfer
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="bg-gray-900 rounded-2xl p-4 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Your Assets</h3>
        <div className="space-y-4">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="flex items-center justify-between border-b pb-4 sm:flex-row flex-col"
            >
              <div className="flex items-center gap-3">
                <img src={token.icon} alt={token.name} className="w-8 h-8" />
                <div>
                  <p className="font-semibold">{token.name}</p>
                  <p className="text-sm text-gray-500">{token.symbol}</p>
                </div>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <p>
                  {token.balance} {token.symbol}
                </p>
                <p className="text-sm text-gray-500">
                  ${(token.balance * token.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
