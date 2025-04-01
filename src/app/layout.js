import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar/Navbar"
import { ThemeProvider } from "@/components/themeprovider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "SUWEX - Cryptocurrency Exchange",
  description: "Trade cryptocurrencies with ease",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 ml-32 pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

