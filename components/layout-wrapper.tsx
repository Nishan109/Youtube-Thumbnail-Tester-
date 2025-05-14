"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isThumbnailPreviewPage = pathname === "/thumbnail-preview" || pathname.startsWith("/thumbnail-preview/")

  // Only hide header and footer on the thumbnail preview page
  const shouldHideHeaderFooter = isThumbnailPreviewPage

  return (
    <div className="flex min-h-screen flex-col">
      {!shouldHideHeaderFooter && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!shouldHideHeaderFooter && <SiteFooter />}
    </div>
  )
}
