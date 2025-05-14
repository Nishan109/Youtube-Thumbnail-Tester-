import Link from "next/link"
import Image from "next/image"
import { Github, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/yt-logo.png"
                  alt="YouTube Thumbnail Tester Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-medium text-sm">YouTube Thumbnail Tester</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Create thumbnails that drive more views and increase your click-through rate.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YouTube Thumbnail Tester. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com" className="text-gray-500 hover:text-white">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com" className="text-gray-500 hover:text-white">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
