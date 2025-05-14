import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

// SEO metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL("https://youtubethumbnailtester.com"),
  title: {
    default: "YouTube Thumbnail Tester | Optimize Your CTR",
    template: "%s | YouTube Thumbnail Tester",
  },
  description:
    "Test and optimize your YouTube thumbnails for maximum engagement. Preview how thumbnails appear across YouTube's interface and boost your click-through rates.",
  keywords: [
    "YouTube thumbnail",
    "thumbnail tester",
    "YouTube CTR",
    "click-through rate",
    "YouTube optimization",
    "content creator tools",
  ],
  authors: [{ name: "YouTube Thumbnail Tester Team" }],
  creator: "YouTube Thumbnail Tester",
  publisher: "YouTube Thumbnail Tester",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youtubethumbnailtester.com",
    siteName: "YouTube Thumbnail Tester",
    title: "YouTube Thumbnail Tester | Optimize Your CTR",
    description: "Test and optimize your YouTube thumbnails for maximum engagement and higher click-through rates.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Tester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Tester | Optimize Your CTR",
    description: "Test and optimize your YouTube thumbnails for maximum engagement and higher click-through rates.",
    images: ["/images/twitter-image.jpg"],
    creator: "@YTThumbnailTest",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://youtubethumbnailtester.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
