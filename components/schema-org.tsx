"use client"

import Script from "next/script"

export function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://youtubethumbnailtester.com/#website",
        url: "https://youtubethumbnailtester.com/",
        name: "YouTube Thumbnail Tester",
        description: "Test and optimize your YouTube thumbnails for maximum engagement",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://youtubethumbnailtester.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://youtubethumbnailtester.com/#webpage",
        url: "https://youtubethumbnailtester.com/",
        name: "YouTube Thumbnail Tester | Optimize Your CTR",
        isPartOf: {
          "@id": "https://youtubethumbnailtester.com/#website",
        },
        about: {
          "@id": "https://youtubethumbnailtester.com/#organization",
        },
        description:
          "Test and optimize your YouTube thumbnails for maximum engagement. Preview how thumbnails appear across YouTube's interface and boost your click-through rates.",
      },
      {
        "@type": "Organization",
        "@id": "https://youtubethumbnailtester.com/#organization",
        name: "YouTube Thumbnail Tester",
        url: "https://youtubethumbnailtester.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://youtubethumbnailtester.com/images/logo.png",
          width: 112,
          height: 112,
        },
        sameAs: ["https://twitter.com/YTThumbnailTest", "https://github.com/YTThumbnailTester"],
      },
      {
        "@type": "SoftwareApplication",
        name: "YouTube Thumbnail Tester",
        operatingSystem: "Web",
        applicationCategory: "UtilitiesApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
