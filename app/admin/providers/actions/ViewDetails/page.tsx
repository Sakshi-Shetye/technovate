"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

export default function ViewProviderDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const [status, setStatus] = useState<"Active" | "Pending" | "Suspended">("Pending");

  if (!id) {
    return (
      <div className="min-h-screen bg-[#EAF4FB]">
        <Header />
        <div className="p-6 font-semibold text-center text-red-600">
          ❌ Missing provider ID
        </div>
      </div>
    );
  }

  const provider = {
    id,
    name: "Example Provider",
    contact: "9876543210",
    services: "Bike & Car Repairs",
    location: "Ratnagiri, Maharashtra",
    joined: "2022-03-12",
    requests: 45,
    rating: 4.7,
  };

  const handleApprove = () => {
    setStatus("Active");
    alert(`Provider ${id} approved`);
  };

  const handleReject = () => {
    setStatus("Suspended");
    alert(`Provider ${id} rejected`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />
      <main className="flex-grow p-4 pb-24">
        <h1 className="mb-4 text-xl font-bold">Provider Details</h1>
        <div className="p-4 space-y-3 bg-white shadow-sm rounded-xl">
          <p><strong>Name:</strong> {provider.name}</p>
          <p><strong>ID:</strong> {provider.id}</p>
          <p><strong>Contact:</strong> {provider.contact}</p>
          <p><strong>Services:</strong> {provider.services}</p>
          <p><strong>Location:</strong> {provider.location}</p>
          <p><strong>Joined:</strong> {provider.joined}</p>
          <p><strong>Requests:</strong> {provider.requests}</p>
          <p><strong>Rating:</strong> {provider.rating}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>

        {status === "Pending" && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleApprove}
              className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Reject
            </button>
          </div>
        )}
        <button
          onClick={() => router.push("/admin/providers")}
          className="px-4 py-2 mt-4 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Back to Providers
        </button>
      </main>
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
