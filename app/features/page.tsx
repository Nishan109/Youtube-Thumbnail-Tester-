import Link from "next/link"
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  Tv,
  LayoutGrid,
  Eye,
  Wand2,
  Layers,
  Maximize2,
  BarChart3,
  Zap,
  CheckCircle,
} from "lucide-react"
import type { Metadata } from "next"

// SEO metadata specific to the features page
export const metadata: Metadata = {
  title: "Features | YouTube Thumbnail Tester",
  description:
    "Explore the powerful features of YouTube Thumbnail Tester. Multi-device preview, A/B testing, AI enhancement, and more tools to optimize your thumbnails.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features | YouTube Thumbnail Tester",
    description:
      "Explore the powerful features of YouTube Thumbnail Tester. Multi-device preview, A/B testing, AI enhancement, and more tools to optimize your thumbnails.",
    url: "/features",
  },
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">Features</h1>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Everything You Need to Create Winning Thumbnails</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Our comprehensive set of tools helps you optimize your YouTube thumbnails for maximum click-through rates
              and engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/thumbnail-preview"
                className="inline-flex items-center justify-center h-10 px-6 font-medium text-black bg-white rounded-md hover:bg-gray-200"
              >
                Try It Now
              </Link>
              <a
                href="#feature-list"
                className="inline-flex items-center justify-center h-10 px-6 font-medium text-white bg-transparent border border-white rounded-md hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Multi-Device Preview</h2>
              <p className="text-gray-300 mb-6">
                See exactly how your thumbnails will appear across different YouTube interfaces, including desktop,
                mobile, and TV. Ensure your thumbnails look great no matter where they're viewed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Desktop YouTube feed simulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Mobile app interface preview</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">TV app layout testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Search results appearance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 h-80 flex items-center justify-center">
              <div className="flex items-end gap-8">
                <div className="flex flex-col items-center">
                  <Monitor className="h-12 w-12 text-gray-400 mb-4" />
                  <div className="w-40 h-24 bg-gray-800 rounded-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <Smartphone className="h-8 w-8 text-gray-400 mb-4" />
                  <div className="w-20 h-36 bg-gray-800 rounded-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <Tv className="h-10 w-10 text-gray-400 mb-4" />
                  <div className="w-32 h-20 bg-gray-800 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div id="feature-list" className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-white">All Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Multi-Device Preview</h3>
              <p className="text-gray-400">
                See how your thumbnails appear on desktop, mobile, and TV interfaces to ensure optimal visibility.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LayoutGrid className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">YouTube Feed Simulation</h3>
              <p className="text-gray-400">
                Preview your thumbnail in a realistic YouTube feed to see how it stands out against competitors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-green-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wand2 className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI Enhancement</h3>
              <p className="text-gray-400">
                Automatically enhance your thumbnails with AI-powered adjustments for better click-through rates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-amber-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">A/B Testing</h3>
              <p className="text-gray-400">
                Compare multiple thumbnails side-by-side to determine which design will perform better.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Image Adjustments</h3>
              <p className="text-gray-400">
                Fine-tune brightness, contrast, saturation, and apply filters to make your thumbnails pop.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-teal-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Maximize2 className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Rule of Thirds Grid</h3>
              <p className="text-gray-400">
                Optimize thumbnail composition with a rule of thirds grid overlay for professional results.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-indigo-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Analytics Integration</h3>
              <p className="text-gray-400">
                Connect with YouTube Analytics to track the performance of your thumbnails over time.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-pink-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">One-Click Export</h3>
              <p className="text-gray-400">
                Export your optimized thumbnails directly to YouTube or download in the perfect format.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="bg-orange-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Size Verification</h3>
              <p className="text-gray-400">
                Ensure your thumbnails meet YouTube's recommended dimensions and file size requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to optimize your thumbnails?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Start creating thumbnails that drive more views and increase your click-through rate today.
          </p>
          <Link
            href="/thumbnail-preview"
            className="inline-flex items-center justify-center h-10 px-6 font-medium text-black bg-white rounded-md hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
