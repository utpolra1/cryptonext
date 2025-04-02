import CryptoTracker from "@/components/trade/cryptotracker"

export default function TradePage() {
  return (
    <div className="p-6">
      <CryptoTracker />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-4 border border-border">
          <h2 className="text-lg font-semibold mb-4">Place Order</h2>
          <div className="flex gap-2 mb-4">
            <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-md">Buy</button>
            <button className="flex-1 py-2 bg-muted text-muted-foreground rounded-md">Sell</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Price</label>
              <div className="flex mt-1">
                <input
                  type="text"
                  className="flex-1 p-2 bg-background border border-border rounded-l-md"
                  placeholder="0.00"
                />
                <div className="p-2 bg-muted border border-l-0 border-border rounded-r-md">USDT</div>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Amount</label>
              <div className="flex mt-1">
                <input
                  type="text"
                  className="flex-1 p-2 bg-background border border-border rounded-l-md"
                  placeholder="0.00"
                />
                <div className="p-2 bg-muted border border-l-0 border-border rounded-r-md">BTC</div>
              </div>
            </div>

            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md">Buy BTC</button>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 border border-border">
          <h2 className="text-lg font-semibold mb-4">Recent Trades</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Price</span>
              <span>Amount</span>
              <span>Time</span>
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className={i % 2 === 0 ? "text-red-500" : "text-green-500"}>
                  83,{Math.floor(Math.random() * 300) + 100}.00
                </span>
                <span>0.00{Math.floor(Math.random() * 9) + 1}</span>
                <span className="text-muted-foreground">12:3{i} PM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

