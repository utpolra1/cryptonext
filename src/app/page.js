"use client"; // Ensure this is added at the top

import { Home as HomeIcon, Wallet, BarChart2, DollarSign, Gift, PieChart, Activity, ChevronLeft, Moon, Sun, LogIn } from "lucide-react";
import CryptoChart from "@/components/cryptochart";
import LiveFeed from "@/components/livefeed";
import TrustpilotReview from "@/components/trustpilotreview";
import PromoBanner from "@/components/promobanner";
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home'); // Managing active state for navigation
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body when dark mode is enabled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-32 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
            </div>
            <span className="font-bold text-lg">SUWEX</span>
          </div>
        </div>

        <nav className="flex-1 py-4">
          <div className="space-y-1 px-3">
            <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" active={activeNav === 'home'} onClick={() => setActiveNav('home')} />
            <NavItem icon={<Wallet className="h-5 w-5" />} label="Wallets" active={activeNav === 'wallets'} onClick={() => setActiveNav('wallets')} />
            <NavItem icon={<BarChart2 className="h-5 w-5" />} label="Exchange" active={activeNav === 'exchange'} onClick={() => setActiveNav('exchange')} />
            <NavItem icon={<DollarSign className="h-5 w-5" />} label="Prices" active={activeNav === 'prices'} onClick={() => setActiveNav('prices')} />
            <NavItem icon={<Gift className="h-5 w-5" />} label="Rewards" active={activeNav === 'rewards'} onClick={() => setActiveNav('rewards')} />
            <NavItem icon={<PieChart className="h-5 w-5" />} label="Staking" active={activeNav === 'staking'} onClick={() => setActiveNav('staking')} />
            <NavItem icon={<Activity className="h-5 w-5" />} label="Activities" active={activeNav === 'activities'} onClick={() => setActiveNav('activities')} />
          </div>
        </nav>

        <div className="p-4 mt-auto">
          <button variant="outline" size="icon" className="w-full" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="border-b border-border sticky top-0 z-10 bg-background">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-2">
              <button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="#" label="Trade" />
              <NavLink href="#" label="Markets" />
              <NavLink href="#" label="Rewards" />
              <NavLink href="#" label="Referral Program" />
              <NavLink href="#" label="Staking" />
            </nav>

            <div className="flex items-center gap-3">
              <button variant="outline" size="sm" className="hidden md:flex">
                Buy crypto
              </button>
              <button variant="ghost" size="sm" className="hidden md:flex">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </button>
              <button size="sm">Sign Up</button>
            </div>
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
                <TrustpilotReview />
              </div>
            </div>

            <div className="mb-12">
              <LiveFeed />
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
              <CryptoChart />
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
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 py-3 px-2 rounded-md cursor-pointer transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      {label}
    </a>
  );
}
