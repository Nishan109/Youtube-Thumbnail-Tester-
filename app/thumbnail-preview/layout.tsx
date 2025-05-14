"use client"

import type React from "react"

import { useEffect } from "react"

export default function ThumbnailPreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a client-side only effect to ensure the directories exist
  useEffect(() => {
    // Call the API route to ensure directories exist
    fetch("/api/ensure-public-dirs").catch((err) => console.error("Failed to ensure directories exist:", err))
  }, [])

  return <div className="min-h-screen bg-black">{children}</div>
}
