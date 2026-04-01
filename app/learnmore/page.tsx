"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LearnMore() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
      {/* Header - same as home page */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/logo3.png"
            alt="MySANmarg Logo"
            className="object-contain w-10 h-10"
          />
          <div className="flex flex-col">
            <h1
              className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
              style={{
                fontFamily: "'Playfair Display', serif",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
                My
              </span>
              <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
                SAN
              </span>
              <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
                marg
              </span>
            </h1>
            <p
              className="text-[11px] md:text-xs font-medium text-black"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Smart Assistance Network — Helping Rural India, On Time.
            </p>
          </div>
        </div>

        <nav className="items-center hidden gap-6 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
          >
            Features
          </a>
          <a
            href="#impact"
            className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
          >
            Impact
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/login")}
            className="h-10 px-4 font-bold rounded-md secondary-button"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="h-10 px-4 font-bold rounded-md primary-button"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-10">
        {/* Hero / Info Section */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-blue-700 md:text-5xl">
            Discover How MySANmarg Makes a Difference
          </h2>
          <p className="text-lg text-gray-700 md:text-xl">
            We are dedicated to helping rural communities and users in distress
            by providing quick access to verified service providers, creating employment opportunities,
            and making assistance seamless and reliable.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          {[
            {
              title: "Real-Time Assistance",
              description:
                "Users can request help and instantly get connected to the nearest service providers.",
            },
            {
              title: "Employment for Rural Youth",
              description:
                "Trained service providers gain jobs and certifications through our platform.",
            },
            {
              title: "Secure & Transparent",
              description:
                "Cashless payments and verified services ensure safety and trust for everyone.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 transition-shadow bg-blue-100 shadow-lg rounded-xl hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-bold text-blue-700">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Impact Section */}
        <section id="impact" className="max-w-5xl mx-auto mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center text-blue-700">Our Impact</h2>
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            {[
              { number: "500+", text: "People Helped Every Month" },
              { number: "200+", text: "Certified Rural Providers" },
              { number: "99%", text: "Customer Satisfaction Rate" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 transition-transform bg-white shadow-md rounded-xl hover:-translate-y-1"
              >
                <h3 className="mb-2 text-4xl font-bold text-blue-600">{item.number}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Call to Action */}
        <section id="contact" className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-700">Get Involved</h2>
          <p className="mb-6 text-gray-700">
            Join us as a user or a service provider and be a part of a community that supports rural India.
          </p>
          <button
            onClick={() => router.push("/sign-up")}
            className="h-12 px-6 font-bold rounded-md primary-button"
          >
            Join Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--secondary-color)] text-white text-center py-8">
        © 2024 MySANmarg. All rights reserved.
      </footer>
    </div>
  );
}
