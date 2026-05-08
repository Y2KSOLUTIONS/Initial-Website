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
      <section className="relative py-28 px-6 overflow-hidden bg-dark">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="label mb-6 block">Let&apos;s Talk</p>
          <h1 className="text-5xl md:text-6xl font-bold text-light mb-6">
            Get a <span className="gradient-text">Free Quote</span>
          </h1>
          <p className="text-light-2 text-lg leading-relaxed">
            No pressure, no jargon. Just a straight conversation about what your business needs
            online and how we can help.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Process steps */}
          <div>
            <h2 className="text-2xl font-bold text-light mb-8">What to expect</h2>
            <div className="space-y-7">
              {[
                {
                  step: "01",
                  title: "Tell us about your business",
                  desc: "Fill out the form and we'll learn the basics about what you need.",
                },
                {
                  step: "02",
                  title: "We reach out within 24 hours",
                  desc: "A real person will get back to you quickly — no automated runaround.",
                },
                {
                  step: "03",
                  title: "Get a clear, honest quote",
                  desc: "No hidden fees, no upsells you don't need. Just a fair price for great work.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="font-mono text-2xl font-bold text-light-3 leading-none w-10 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-light font-semibold mb-1">{item.title}</h3>
                    <p className="text-light-2 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-dark-2 border border-line rounded-xl">
              <p className="label mb-3 block">Nationwide Service</p>
              <p className="text-light-2 text-sm leading-relaxed">
                We work with businesses all across the United States. Fully remote — wherever you
                are, we can help.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-2 border border-line rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="font-mono text-neon text-5xl mb-4">✓</div>
                <h3 className="text-light text-2xl font-bold mb-2">Message received!</h3>
                <p className="text-light-2">
                  We&apos;ll be in touch within 24 hours. Thanks for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                      htmlFor="first-name"
                    >
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      className="input-dark"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                      htmlFor="last-name"
                    >
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      className="input-dark"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-dark"
                    placeholder="jane@yourbusiness.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                    htmlFor="business"
                  >
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="input-dark"
                    placeholder="Smith Plumbing LLC"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                    htmlFor="service"
                  >
                    What do you need?
                  </label>
                  <select id="service" name="service" className="input-dark">
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
                  <label
                    className="block text-xs text-light-2 font-mono uppercase tracking-wider mb-2"
                    htmlFor="message"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-dark resize-none"
                    placeholder="Tell us what you're looking for, your timeline, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neon text-dark font-bold py-3 rounded-full hover:shadow-[0_0_24px_rgba(0,229,160,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send My Message →"}
                </button>

                <p className="text-xs text-light-3 text-center font-mono">
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
