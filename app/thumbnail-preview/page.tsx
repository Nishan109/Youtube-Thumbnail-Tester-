import type { Metadata } from "next"
import ThumbnailPreviewClientPage from "./ThumbnailPreviewClientPage"

// SEO metadata specific to the thumbnail preview page
export const metadata: Metadata = {
  title: "Preview Your YouTube Thumbnails | Test Before Publishing",
  description:
    "Upload and test your YouTube thumbnails in real-time. See how they appear across different devices and optimize for higher click-through rates.",
  alternates: {
    canonical: "/thumbnail-preview",
  },
  openGraph: {
    title: "Preview Your YouTube Thumbnails | Test Before Publishing",
    description:
      "Upload and test your YouTube thumbnails in real-time. See how they appear across different devices and optimize for higher click-through rates.",
    url: "/thumbnail-preview",
  },
}

export default function ThumbnailPreviewPage() {
  return <ThumbnailPreviewClientPage />
}
