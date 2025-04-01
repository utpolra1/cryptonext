import React from 'react';
import PromoBanner from '../promobanner';
import Cryptochart from '../cryptochart';
import TrustpilotReview from '../trustpilotreview';

"use client"; // Ensure this is added at the top

const Home = () => {
    return (
        <div className="flex-1 flex flex-col overflow-auto">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-10 bg-background">
        <div className="flex items-center justify-between px-6 h-16">
          <h1 className="text-xl font-bold">Crypto Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">
                Buy & sell
                <br />
                crypto in minutes
              </h1>
              <p className="text-muted-foreground mb-6">
                Trade Bitcoin, Ethereum USDT, and the top altcoins on
                <br />
                the new era of crypto asset exchange.
              </p>

              <div className="flex gap-2 max-w-md">
                <input placeholder="Enter your email address" className="rounded-md" />
                <button>Get Started</button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <TrustpilotReview/>
            </div>
          </div>

          <div className="mb-12">
            <LiveFee/>
          </div>

          <div className="mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4">
              <PromoBanner title="10 Benefits of Digital Currency" color="blue" />
              <PromoBanner title="VIP Program is a loyalty program" color="yellow" />
              <PromoBanner title="Low-cost trading" color="red" />
              <PromoBanner title="ETH 2.0 IS TO LAUNCH IN OCTOBER" color="purple" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Cryptochart/>
            <CryptoChart />
            <CryptoChart />
            <CryptoChart />
            <CryptoChart />
            <CryptoChart />
            <CryptoChart />
            <CryptoChart />
          </div>
        </div>
      </main>
    </div>
    );
};

export default Home;