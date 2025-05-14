"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {!isLandingPage && <SiteHeader />}
          <main className="flex-1">{children}</main>
          {!isLandingPage && <SiteFooter />}
        </div>
      </body>
    </html>
  )
}
