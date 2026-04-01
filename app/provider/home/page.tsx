"use client";

import Link from "next/link";

export default function ProviderInfo() {
  return (
    <div
      className={`min-h-screen bg-gray-50 flex justify-center items-center p-6 font-playfair-display`}
    >
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Become a Service Provider
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to the <span className="font-semibold">Provider Portal</span>! As a registered provider, you can offer services like <span className="text-blue-600">Fuel Delivery, Towing, Ambulance</span> and more.
        </p>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          What you need before registering:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Aadhaar ID (for KYC verification)</li>
          <li>Valid Driving License or Certification</li>
          <li>Bank details for payouts</li>
          <li>Service skills you want to provide</li>
        </ul>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          How it works:
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
          <li>Fill in your details and upload KYC documents.</li>
          <li>Your application will be reviewed by our admin team.</li>
          <li>Once approved, you will start receiving service requests in your dashboard.</li>
        </ol>
        <div className="flex justify-end">
          <Link href="/provider/register">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Proceed to Registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
