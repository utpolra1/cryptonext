"use client";

const prices = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "/icons/btc.svg",
    price: 66000,
    change: 2.45,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "/icons/eth.svg",
    price: 3200,
    change: -1.23,
  },
  {
    name: "Solana",
    symbol: "SOL",
    icon: "/icons/sol.svg",
    price: 180,
    change: 5.1,
  },
];

export default function Prices() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Market Prices</h2>
        <div className="space-y-4">
          {prices.map((coin) => (
            <div
              key={coin.symbol}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <img src={coin.icon} alt={coin.name} className="w-8 h-8" />
                <div>
                  <p className="font-semibold">{coin.name}</p>
                  <p className="text-sm text-gray-500">{coin.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  ${coin.price.toLocaleString()}
                </p>
                <p
                  className={`text-sm ${
                    coin.change >= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {coin.change >= 0 ? "+" : ""}
                  {coin.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
