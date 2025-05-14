import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Eye,
  ImagePlus,
  Layers,
  LayoutGrid,
  Maximize2,
  MonitorSmartphone,
  Sparkles,
  Star,
  Wand2,
  BarChart3,
  TrendingUp,
  LineChart,
  PieChart,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-medium">YouTube thumbnail preview tool</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">New</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Create Thumbnails That Drive More Views
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Test how your thumbnails appear across YouTube's interface before publishing. Optimize your click-through
              rate with our YouTube thumbnail checker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/thumbnail-preview">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  Test Your Thumbnail <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-800 bg-transparent hover:bg-neutral-900 text-white w-full sm:w-auto"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 relative overflow-hidden border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full filter blur-[128px] opacity-20"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-[128px] opacity-20"></div>
            <div className="relative z-10 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="border-b border-neutral-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-neutral-400">youtubethumbnailtester.com</div>
                <div></div>
              </div>
              <div className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000000486.jpg-TzaQiNloLttz8jtSpTtGxirpRTevIK.jpeg"
                  alt="Content creator working on YouTube thumbnails"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Concept Section */}
      <section className="py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Boost Your YouTube CTR</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Our YouTube thumbnail simulator helps you optimize for higher click-through rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Analytics Visualization */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full filter blur-[50px]"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">YouTube Analytics Dashboard</h3>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-400">Average CTR</span>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">8.7%</span>
                    <span className="text-sm text-green-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +2.3%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-400">Impressions</span>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">124K</span>
                    <span className="text-sm text-green-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +18%
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-48 w-full relative z-10">
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                  <div className="w-full h-full flex items-end">
                    {[35, 42, 38, 65, 58, 72, 80, 75, 82, 78, 85, 90].map((height, i) => (
                      <div key={i} className="w-full mx-0.5">
                        <div
                          className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-800"></div>
                <div className="absolute left-0 bottom-0 top-0 w-px bg-neutral-800"></div>
              </div>

              <div className="flex justify-between mt-2 text-xs text-neutral-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

              <div className="flex gap-4 mt-6 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-neutral-400">CTR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-neutral-400">Benchmark</span>
                </div>
              </div>
            </div>

            {/* CTR Boost Graphic */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/20 rounded-full filter blur-[50px]"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Improve Your CTR</h3>

              <div className="flex items-center gap-8 mb-8 relative z-10">
                <div className="flex-shrink-0 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="h-10 w-10 bg-white transform rotate-90 triangle"></div>
                </div>

                <div className="flex-1">
                  <div className="h-6 w-full bg-neutral-800 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[35%]"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Before Optimization</span>
                    <span className="text-white font-medium">3.5%</span>
                  </div>

                  <div className="h-6 w-full bg-neutral-800 rounded-full mt-4 mb-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">After Optimization</span>
                    <span className="text-white font-medium">8.5%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 relative z-10">
                <div className="bg-neutral-800 rounded-lg p-3 text-center">
                  <LineChart className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                  <p className="text-sm text-neutral-300">Higher CTR</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-3 text-center">
                  <BarChart3 className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                  <p className="text-sm text-neutral-300">More Views</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-3 text-center">
                  <PieChart className="h-6 w-6 mx-auto mb-2 text-green-500" />
                  <p className="text-sm text-neutral-300">Better Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Everything you need to create thumbnails that convert viewers into subscribers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MonitorSmartphone className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Device Preview</h3>
              <p className="text-neutral-400">
                See how your thumbnails appear on desktop, mobile, and TV interfaces to ensure optimal visibility.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-purple-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LayoutGrid className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">YouTube Feed Simulation</h3>
              <p className="text-neutral-400">
                Preview your thumbnail in a realistic YouTube feed to see how it stands out against competitors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-green-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wand2 className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Enhancement</h3>
              <p className="text-neutral-400">
                Automatically enhance your thumbnails with AI-powered adjustments for better click-through rates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">A/B Testing</h3>
              <p className="text-neutral-400">
                Compare multiple thumbnails side-by-side to determine which design will perform better.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Image Adjustments</h3>
              <p className="text-neutral-400">
                Fine-tune brightness, contrast, saturation, and apply filters to make your thumbnails pop.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="bg-teal-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Maximize2 className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rule of Thirds Grid</h3>
              <p className="text-neutral-400">
                Optimize thumbnail composition with a rule of thirds grid overlay for professional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Create better thumbnails in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-neutral-900 border border-neutral-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ImagePlus className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload Your Thumbnail</h3>
              <p className="text-neutral-400">
                Upload your thumbnail image (JPG or PNG) or choose from sample templates to get started.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-neutral-900 border border-neutral-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Customize & Preview</h3>
              <p className="text-neutral-400">
                Adjust settings, apply enhancements, and preview how your thumbnail appears across YouTube.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-neutral-900 border border-neutral-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Export & Use</h3>
              <p className="text-neutral-400">
                Download your optimized thumbnail and upload it directly to your YouTube videos.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/thumbnail-preview">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Creators Say</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Join thousands of content creators who've improved their click-through rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-neutral-300 mb-6">
                "This tool increased my CTR by 43% in just one month. Being able to see how my thumbnails look in the
                actual YouTube feed made all the difference."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-sm text-neutral-400">Tech Reviewer, 500K subscribers</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-neutral-300 mb-6">
                "The A/B testing feature is a game-changer. I can now make data-driven decisions about my thumbnails
                instead of just guessing what works."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-neutral-400">Fitness Creator, 1.2M subscribers</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-neutral-300 mb-6">
                "As a new creator, this tool helped me understand what makes a thumbnail effective. The AI enhancement
                feature saved me hours of design work."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-medium">Michael Torres</p>
                  <p className="text-sm text-neutral-400">Gaming Channel, 250K subscribers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Thumbnails That Convert?</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Join thousands of content creators who've improved their click-through rates with our YouTube thumbnail
              size checker.
            </p>
            <Link href="/thumbnail-preview">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Testing Your Thumbnails <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
