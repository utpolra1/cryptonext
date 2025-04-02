import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider, useTheme } from "@/components/themeprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <main className="flex-1 ml-32 pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
