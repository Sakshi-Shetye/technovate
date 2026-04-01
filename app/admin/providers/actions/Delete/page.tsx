"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

export default function DeleteProviderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

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

  const handleDelete = () => {
    alert(`Deleted provider ${id}`);
    router.push("/admin/providers");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />
      <main className="flex-grow p-4 pb-24">
        <h1 className="mb-4 text-xl font-bold">Delete Provider</h1>
        <p className="mb-4">
          Are you sure you want to permanently delete provider ID <strong>{id}</strong>?
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={() => router.push("/admin/providers")}
            className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </main>
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
