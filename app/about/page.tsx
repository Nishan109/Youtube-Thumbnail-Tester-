import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Globe, Zap } from "lucide-react"
import type { Metadata } from "next"

// SEO metadata specific to the about page
export const metadata: Metadata = {
  title: "About Us | YouTube Thumbnail Tester",
  description:
    "Learn about YouTube Thumbnail Tester and our mission to help content creators optimize their thumbnails for maximum engagement and higher CTR.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | YouTube Thumbnail Tester",
    description:
      "Learn about YouTube Thumbnail Tester and our mission to help content creators optimize their thumbnails for maximum engagement and higher CTR.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">About Us</h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              YouTube Thumbnail Tester was created by a team of content creators and developers who understand the
              critical role thumbnails play in a video's success.
            </p>
            <p className="text-gray-400 mb-6">
              Our mission is to help creators optimize their thumbnails to increase click-through rates and grow their
              channels. We believe that great content deserves to be discovered, and a compelling thumbnail is the first
              step in that journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/thumbnail-preview"
                className="inline-flex items-center justify-center h-10 px-6 font-medium text-black bg-white rounded-md hover:bg-gray-200"
              >
                Try Our Tool
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center h-10 px-6 font-medium text-white bg-transparent border border-white rounded-md hover:bg-white/10"
              >
                Join Our Team
              </Link>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/creator-working.jpeg" alt="Our team at work" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">50K+</p>
            <p className="text-gray-400">Creators Helped</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">1M+</p>
            <p className="text-gray-400">Thumbnails Tested</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">35%</p>
            <p className="text-gray-400">Average CTR Increase</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">20+</p>
            <p className="text-gray-400">Team Members</p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-white">Our Story</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-4">
              Founded in 2023, YouTube Thumbnail Tester began as a simple tool built by Alex Johnson, a content creator
              who was frustrated with the lack of reliable ways to preview thumbnails before publishing.
            </p>
            <p className="text-gray-300 mb-4">
              After sharing the tool with fellow creators and receiving overwhelming positive feedback, Alex assembled a
              team of developers and designers to expand the platform into what it is today.
            </p>
            <p className="text-gray-300">
              Today, we're proud to serve creators of all sizes, from beginners to those with millions of subscribers.
              Our tools have helped increase click-through rates by an average of 35%, directly contributing to the
              growth and success of countless YouTube channels.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">Alex Johnson</h3>
              <p className="text-gray-400 text-center mb-3">Founder & CEO</p>
              <p className="text-gray-400 text-center">
                Former YouTube content creator with over 1 million subscribers. Alex founded YouTube Thumbnail Tester
                after experiencing firsthand the impact of thumbnail optimization.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">Sarah Chen</h3>
              <p className="text-gray-400 text-center mb-3">Lead Developer</p>
              <p className="text-gray-400 text-center">
                With a background in UX design and web development, Sarah leads our engineering team to create intuitive
                and powerful tools for creators.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">Marcus Williams</h3>
              <p className="text-gray-400 text-center mb-3">YouTube Strategist</p>
              <p className="text-gray-400 text-center">
                Former YouTube partner manager, Marcus brings insider knowledge of the platform's algorithms and best
                practices to our team.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Creator First</h3>
              <p className="text-gray-400">
                We build our tools with creators in mind, focusing on what will help them succeed on YouTube. Every
                feature we develop is designed to solve real problems faced by content creators.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Data-Driven</h3>
              <p className="text-gray-400">
                We believe in making decisions based on data, not assumptions. Our recommendations and tools are built
                on analysis of what actually works on YouTube.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Continuous Improvement</h3>
              <p className="text-gray-400">
                YouTube is constantly evolving, and so are we. We're committed to continuously improving our tools to
                keep up with platform changes and creator needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Join Our Team</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about helping creators succeed on YouTube.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center h-10 px-6 font-medium text-black bg-white rounded-md hover:bg-gray-200"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  )
}
