"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateMailtoLink = () => {
    const recipient = "cloudfusionacademy1@gmail.com"
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    return `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Send us a message</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                  />
                </div>

                <a
                  href={generateMailtoLink()}
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <a
                      href="mailto:cloudfusionacademy1@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      cloudfusionacademy1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (234) 567-890</p>
                    <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9AM-5PM PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                    <p className="text-gray-400">
                      123 Creator Avenue
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">How It Works</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Fill out the form</h3>
                  <p className="text-gray-400">
                    Complete all fields in the contact form with your information and message.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2. Send your message</h3>
                  <p className="text-gray-400">
                    Click the "Send Message" button to open your default email client with pre-filled information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Get a response</h3>
                  <p className="text-gray-400">
                    We'll respond to your inquiry within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to optimize your thumbnails?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Start testing your YouTube thumbnails today and see the difference in your click-through rates.
          </p>
          <Link href="/thumbnail-preview">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-md text-sm font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
