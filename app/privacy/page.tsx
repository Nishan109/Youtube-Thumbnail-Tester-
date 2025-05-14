import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: May 14, 2025</p>

        <div className="space-y-12">
          <section>
            <p className="text-lg text-gray-300 mb-6">
              At YouTube Thumbnail Tester, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2 text-white">Personal Information</h3>
                <p className="text-gray-300">
                  When you create an account or subscribe to our service, we may collect your name, email address, and
                  payment information.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2 text-white">Usage Data</h3>
                <p className="text-gray-300">
                  We collect information on how you interact with our website, including the pages you visit, the time
                  spent on those pages, and the actions you take.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2 text-white">Thumbnail Images</h3>
                <p className="text-gray-300">
                  When you upload thumbnails to our service for testing, we temporarily store these images to provide
                  you with preview functionality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our YouTube thumbnail checker service</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Understand how users interact with our YouTube thumbnail simulator</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
            <p className="text-gray-300 mb-6">
              Thumbnail images uploaded to our service are stored temporarily and are automatically deleted after 30
              days unless you choose to save them to your account. Account information is retained as long as you
              maintain an active account with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Sharing Your Information</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties.
              This does not include trusted third parties who assist us in operating our website, conducting our
              business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational measures to maintain the security of your personal
              information. However, please be aware that no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to access, correct, or delete your data. To exercise these rights, please contact us using the
              information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@youtubethumbnailtester.com" className="text-blue-400 hover:text-blue-300">
                privacy@youtubethumbnailtester.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
