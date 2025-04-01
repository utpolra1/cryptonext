"use client"
import { useState } from "react"
import {
  HomeIcon,
  Wallet,
  BarChart2,
  DollarSign,
  Gift,
  PieChart,
  Activity,
  ChevronLeft,
  Moon,
  Sun,
  LogIn,
} from "lucide-react"
import { useTheme } from "@/components/themeprovider"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home")
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <div className="flex bg-background">
      {/* Sidebar */}
      <div className="w-32 border-r border-border bg-card flex flex-col h-screen fixed left-0">
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
            <NavItem
              icon={<HomeIcon className="h-5 w-5" />}
              label="Home"
              active={activeNav === "home"}
              onClick={() => setActiveNav("home")}
            />
            <NavItem
              icon={<Wallet className="h-5 w-5" />}
              label="Wallets"
              active={activeNav === "wallets"}
              onClick={() => setActiveNav("wallets")}
            />
            <NavItem
              icon={<BarChart2 className="h-5 w-5" />}
              label="Exchange"
              active={activeNav === "exchange"}
              onClick={() => setActiveNav("exchange")}
            />
            <NavItem
              icon={<DollarSign className="h-5 w-5" />}
              label="Prices"
              active={activeNav === "prices"}
              onClick={() => setActiveNav("prices")}
            />
            <NavItem
              icon={<Gift className="h-5 w-5" />}
              label="Rewards"
              active={activeNav === "rewards"}
              onClick={() => setActiveNav("rewards")}
            />
            <NavItem
              icon={<PieChart className="h-5 w-5" />}
              label="Staking"
              active={activeNav === "staking"}
              onClick={() => setActiveNav("staking")}
            />
            <NavItem
              icon={<Activity className="h-5 w-5" />}
              label="Activities"
              active={activeNav === "activities"}
              onClick={() => setActiveNav("activities")}
            />
          </div>
        </nav>

        <div className="p-4 mt-auto">
          <button
            className="w-full p-2 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-700"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="ml-32 w-full">
        <header className="border-b border-border sticky top-0 z-10 bg-background">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="/trade" label="Trade" />
              <NavLink href="#" label="Markets" />
              <NavLink href="#" label="Rewards" />
              <NavLink href="#" label="Referral Program" />
              <NavLink href="#" label="Staking" />
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700">
                Buy crypto
              </button>
              <button className="hidden md:flex p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </button>
              <button className="p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700">Sign Up</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 py-3 px-2 rounded-md cursor-pointer transition-colors ${
        active ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      {label}
    </a>
  )
}

export default Navbar

