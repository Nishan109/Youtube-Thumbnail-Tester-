import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last Updated: May 14, 2025</p>

        <div className="space-y-12">
          <section>
            <p className="text-lg text-gray-300 mb-6">
              Please read these Terms of Service ("Terms") carefully before using the YouTube Thumbnail Tester website
              and our YouTube thumbnail size checker service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                By accessing or using our YouTube thumbnail preview service, you agree to be bound by these Terms. If
                you disagree with any part of the terms, you may not access the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                YouTube Thumbnail Tester provides a platform for users to preview, test, and optimize their YouTube
                thumbnails. Our service includes thumbnail simulation, size checking, and preview functionality across
                various devices and YouTube interfaces.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                When you create an account with us, you must provide accurate and complete information. You are
                responsible for safeguarding the password and for all activities that occur under your account. You must
                notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. User Content</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                Our service allows you to upload, store, and share content, including thumbnail images. You retain all
                rights to your content, but you grant us a license to use, reproduce, and display your content solely
                for the purpose of providing and improving our services.
              </p>
              <p className="text-gray-300">
                You represent and warrant that you own or have the necessary rights to the content you upload, and that
                your content does not violate the rights of any third party or any applicable law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Prohibited Uses</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">You agree not to use our service:</p>
              <ul className="list-disc pl-6 mb-0 text-gray-300 space-y-2">
                <li>In any way that violates any applicable law or regulation</li>
                <li>
                  To upload or share content that is illegal, harmful, threatening, abusive, or otherwise objectionable
                </li>
                <li>To impersonate any person or entity or misrepresent your affiliation with a person or entity</li>
                <li>To engage in any activity that interferes with or disrupts the service</li>
                <li>To attempt to gain unauthorized access to any portion of the service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                The service and its original content (excluding user-provided content), features, and functionality are
                and will remain the exclusive property of YouTube Thumbnail Tester and its licensors. The service is
                protected by copyright, trademark, and other laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                We may terminate or suspend your account and access to the service immediately, without prior notice or
                liability, for any reason, including if you breach these Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Limitation of Liability</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                In no event shall YouTube Thumbnail Tester, its directors, employees, partners, agents, suppliers, or
                affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to Terms</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Governing Law</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:terms@youtubethumbnailtester.com" className="text-blue-400 hover:text-blue-300">
                  terms@youtubethumbnailtester.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
