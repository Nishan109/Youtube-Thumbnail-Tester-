import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | YouTube Thumbnail Tester",
  description:
    "Learn about YouTube thumbnail optimization, design tips, and strategies to increase your click-through rates.",
  openGraph: {
    title: "Blog | YouTube Thumbnail Tester",
    description:
      "Learn about YouTube thumbnail optimization, design tips, and strategies to increase your click-through rates.",
    type: "website",
    url: "https://youtubethumbnailtester.com/blog",
    images: [
      {
        url: "/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Tester Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | YouTube Thumbnail Tester",
    description:
      "Learn about YouTube thumbnail optimization, design tips, and strategies to increase your click-through rates.",
    images: ["/images/blog-twitter-image.jpg"],
  },
}

// Blog post data
const posts = [
  {
    id: "thumbnail-psychology",
    slug: "thumbnail-psychology",
    title: "The Psychology Behind High-Converting YouTube Thumbnails",
    excerpt:
      "Learn the psychological principles that make viewers click on thumbnails and how to apply them to increase your CTR.",
    date: "2025-05-10",
    author: "Alex Morgan",
    readingTime: "8 min read",
    category: "Strategy",
    image: "/images/blog/thumbnail-psychology.jpg",
    featured: true,
  },
  {
    id: "color-theory",
    slug: "color-theory-for-thumbnails",
    title: "Color Theory: Choosing the Right Palette for Your Thumbnails",
    excerpt:
      "Discover how color psychology affects viewer behavior and learn to select the perfect color combinations for your niche.",
    date: "2025-05-05",
    author: "Sarah Chen",
    readingTime: "6 min read",
    category: "Design",
    image: "/images/blog/color-theory.jpg",
    featured: false,
  },
  {
    id: "ab-testing",
    slug: "ab-testing-thumbnails",
    title: "A/B Testing Your Thumbnails: A Data-Driven Approach",
    excerpt:
      "Learn how to systematically test different thumbnail designs to maximize your click-through rate based on real data.",
    date: "2025-04-28",
    author: "Michael Torres",
    readingTime: "10 min read",
    category: "Analytics",
    image: "/images/blog/ab-testing.jpg",
    featured: false,
  },
  {
    id: "text-on-thumbnails",
    slug: "text-on-thumbnails",
    title: "Text on Thumbnails: Best Practices for Readability and Impact",
    excerpt:
      "Find out when and how to use text on your thumbnails effectively, including font selection, placement, and length considerations.",
    date: "2025-04-20",
    author: "Emma Wilson",
    readingTime: "7 min read",
    category: "Design",
    image: "/images/blog/text-thumbnails.jpg",
    featured: false,
  },
  {
    id: "thumbnail-tools",
    slug: "best-thumbnail-creation-tools",
    title: "10 Essential Tools for Creating Professional YouTube Thumbnails",
    excerpt:
      "A comprehensive guide to the best software, apps, and resources for creating stunning thumbnails, even if you're not a designer.",
    date: "2025-04-15",
    author: "David Kim",
    readingTime: "9 min read",
    category: "Resources",
    image: "/images/blog/thumbnail-tools.jpg",
    featured: false,
  },
  {
    id: "thumbnail-trends",
    slug: "thumbnail-trends-2025",
    title: "YouTube Thumbnail Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with these emerging thumbnail design trends that are capturing audience attention this year.",
    date: "2025-04-08",
    author: "Olivia Martinez",
    readingTime: "8 min read",
    category: "Trends",
    image: "/images/blog/thumbnail-trends.jpg",
    featured: false,
  },
]

export default function BlogPage() {
  // Get featured post
  const featuredPost = posts.find((post) => post.featured)
  // Get other posts
  const otherPosts = posts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Insights, tips, and strategies to optimize your YouTube thumbnails
        </p>
      </div>

      {/* Featured post */}
      {featuredPost && (
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Article</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readingTime}</span>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                {featuredPost.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{featuredPost.excerpt}</p>
              <div className="mt-auto">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All posts */}
      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Articles</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <div
              key={post.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.readingTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block mt-1">
                  <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white group-hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={post.date}>
                    {post.date}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="mt-16 rounded-xl bg-gray-50 p-6 dark:bg-gray-900/50 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="sm:flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Subscribe to our newsletter
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Get the latest thumbnail tips and strategies delivered to your inbox
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Subscribe
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
