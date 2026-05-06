"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1a3a] to-[#0A0F1E] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
            Let&apos;s Talk
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get a <span className="gradient-text">Free Quote</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            No pressure, no jargon. Just a straight conversation about what your business needs
            online and how we can help.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What to expect</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Tell us about your business",
                  desc: "Fill out the form and we'll learn the basics about what you need.",
                },
                {
                  step: "2",
                  title: "We reach out within 24 hours",
                  desc: "A real person will get back to you quickly — no automated runaround.",
                },
                {
                  step: "3",
                  title: "Get a clear, honest quote",
                  desc: "No hidden fees, no upsells you don't need. Just a fair price for great work.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="gradient-bg w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#111827] border border-white/10 rounded-2xl">
              <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-3">
                Nationwide Service
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                We work with businesses all across the United States. Fully remote, so wherever you
                are, we can help.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-white text-2xl font-bold mb-2">Message received!</h3>
                <p className="text-gray-400">
                  We&apos;ll be in touch within 24 hours. Thanks for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5" htmlFor="first-name">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5" htmlFor="last-name">
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                    placeholder="jane@yourbusiness.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5" htmlFor="business">
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                    placeholder="Smith Plumbing LLC"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5" htmlFor="service">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="new-website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="seo">SEO / Performance</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5" htmlFor="message">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Tell us what you're looking for, your timeline, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-bg text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send My Message →"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
