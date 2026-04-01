"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

export default function EditProviderPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // get provider ID

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [services, setServices] = useState("");
  const [status, setStatus] = useState<"Active" | "Pending" | "Suspended">("Active");

  const handleSave = () => {
    // Later: call Firebase to update provider info
    alert(`Saved changes for provider ${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />
      <main className="flex-grow p-4 pb-24">
        <h1 className="mb-4 text-xl font-bold">Edit Provider</h1>
        <form className="max-w-md space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Services</label>
            <input
              type="text"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "Active" | "Pending" | "Suspended")}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => alert("Cancelled")}
              className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
