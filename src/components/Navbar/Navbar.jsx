"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth"; // Firebase signOut function
import { HomeIcon, Wallet, BarChart2, DollarSign, Gift, PieChart, Activity, ChevronLeft, Moon, Sun, LogIn, User } from "lucide-react";
import { useTheme } from "@/components/themeprovider";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";


const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const { isDarkMode, toggleDarkMode } = useTheme();

  const { user, loading, signInWithGoogle, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(user)

  useEffect(() => {
    setIsLoggedIn(!!user); // Check if the user is logged in
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out", err);
    }
  };

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
              label="home"
              href="/"
              active={pathname === "/"}
            />
            <NavItem
              icon={<Wallet className="h-5 w-5" />}
              label="Wallet"
              href="/wallet"
              active={pathname === "/wallet"}
            />
            <NavItem
              icon={<BarChart2 className="h-5 w-5" />}
              label="Exchange"
              href="/trade"
              active={pathname === "/trade"}
            />
            <NavItem
              icon={<DollarSign className="h-5 w-5" />}
              label="Prices"
              href="/prices"
              active={pathname === "/prices"}
            />
            <NavItem
              icon={<Gift className="h-5 w-5" />}
              label="Rewards"
              href="/rewards"
              active={pathname === "/rewards"}
            />
            <NavItem
              icon={<PieChart className="h-5 w-5" />}
              label="Staking"
              href="/staking"
              active={pathname === "/staking"}
            />
            <NavItem
              icon={<Activity className="h-5 w-5" />}
              label="Activities"
              href="/activities"
              active={pathname === "/activities"}
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
              <NavLink href="/markets" label="Markets" />
              <NavLink href="/rewards" label="Rewards" />
              <NavLink href="/referral" label="Referral Program" />
              <NavLink href="/staking" label="Staking" />
            </nav>

            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2">
                    <img
                      src={user?.photoURL || "/default-avatar.png"} // Display user image or default avatar
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <button
                      className="p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="hidden md:flex items-center gap-2 p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700">
                      Log in
                    </button>
                  </Link>

                  <Link href="/signup">
                    <button className="p-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

function NavItem({ icon, label, href = "#", active = false, onClick }) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center gap-1 py-3 px-2 rounded-md cursor-pointer transition-colors ${active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
        }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}

function NavLink({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors ${isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
    >
      {label}
    </a>
  );
}

export default Navbar;
