import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

// SEO metadata specific to the contact page
export const metadata: Metadata = {
  title: "Contact Us | YouTube Thumbnail Tester",
  description:
    "Get in touch with the YouTube Thumbnail Tester team. We're here to help you optimize your thumbnails and boost your channel's performance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | YouTube Thumbnail Tester",
    description:
      "Get in touch with the YouTube Thumbnail Tester team. We're here to help you optimize your thumbnails and boost your channel's performance.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
