import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function APIPage() {
  return (
    <div className="container py-16">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
      <p className="text-gray-400 mb-12 max-w-3xl">
        Integrate YouTube Thumbnail Tester functionality directly into your applications with our powerful API.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <h3 className="font-semibold mb-4">API Reference</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#authentication" className="text-blue-500 hover:text-blue-400">
                  Authentication
                </Link>
              </li>
              <li>
                <Link href="#rate-limits" className="text-gray-400 hover:text-white">
                  Rate Limits
                </Link>
              </li>
              <li>
                <Link href="#thumbnails" className="text-gray-400 hover:text-white">
                  Thumbnails
                </Link>
              </li>
              <li>
                <Link href="#previews" className="text-gray-400 hover:text-white">
                  Previews
                </Link>
              </li>
              <li>
                <Link href="#analytics" className="text-gray-400 hover:text-white">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="#errors" className="text-gray-400 hover:text-white">
                  Error Handling
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <section id="authentication" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <p className="text-gray-400 mb-4">
              All API requests require authentication using an API key. You can generate an API key in your account
              settings.
            </p>
            <div className="bg-gray-900 p-4 rounded-md mb-4">
              <p className="text-gray-300 font-mono text-sm">Authorization: Bearer YOUR_API_KEY</p>
            </div>
            <p className="text-gray-400 mb-4">
              Include this header with all your API requests. Keep your API key secure and do not share it publicly.
            </p>
          </section>

          <section id="rate-limits" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
            <p className="text-gray-400 mb-4">API requests are subject to rate limiting to ensure fair usage:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-400 space-y-2">
              <li>Free tier: 100 requests per day</li>
              <li>Pro tier: 1,000 requests per day</li>
              <li>Enterprise tier: 10,000 requests per day</li>
            </ul>
            <p className="text-gray-400 mb-4">
              If you exceed your rate limit, you'll receive a 429 Too Many Requests response.
            </p>
          </section>

          <section id="thumbnails" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Thumbnails API</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Upload a Thumbnail</h3>
            <div className="bg-gray-900 p-4 rounded-md mb-4">
              <p className="text-gray-300 font-mono text-sm">POST /api/v1/thumbnails</p>
            </div>
            <p className="text-gray-400 mb-4">
              Upload a new thumbnail image for testing. The request should be a multipart/form-data request with the
              image file.
            </p>
            <h4 className="font-semibold mt-4 mb-2">Example Request:</h4>
            <div className="bg-gray-900 p-4 rounded-md mb-4">
              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                {`curl -X POST \\
  https://api.youtubethumbnailtester.com/api/v1/thumbnails \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@thumbnail.jpg" \\
  -F "title=My Test Thumbnail"`}
              </pre>
            </div>
            <h4 className="font-semibold mt-4 mb-2">Example Response:</h4>
            <div className="bg-gray-900 p-4 rounded-md mb-4">
              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                {`{
  "id": "thumb_123456",
  "title": "My Test Thumbnail",
  "url": "https://cdn.youtubethumbnailtester.com/thumbnails/thumb_123456.jpg",
  "created_at": "2025-05-14T12:34:56Z",
  "dimensions": {
    "width": 1280,
    "height": 720
  },
  "file_size": 245678
}`}
              </pre>
            </div>
          </section>

          <div className="bg-gray-900 p-6 rounded-lg text-center mb-8">
            <h2 className="text-xl font-semibold mb-4">Need API access?</h2>
            <p className="text-gray-400 mb-6">API access is available on our Pro and Enterprise plans.</p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-10 px-6 font-medium text-black bg-white rounded-md hover:bg-gray-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
