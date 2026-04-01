"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/admin/ui/card";
import type { User } from "../../types";

// Temporary static users — replace with your real data source
const users: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Active" },
];

export default function DeleteUserPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const user = users.find((u) => u.id === id);

  if (!id) {
    return (
      <div className="min-h-screen bg-sky-50">
        <Header />
        <div className="p-6 font-semibold text-center text-red-600">
          ❌ Missing user id
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-sky-50">
        <Header />
        <div className="p-6 font-semibold text-center text-gray-800 dark:text-gray-200">
          User not found
        </div>
      </div>
    );
  }

  const onDelete = () => {
    // 🔴 Replace this with your actual delete logic (API call, DB update, etc.)
    console.log("Deleting user:", user.id);
    router.push("/admin/users");
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />

      <div className="max-w-2xl p-6 mx-auto">
        <Card className="border border-gray-200 shadow-lg dark:border-gray-700 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
              🗑️ Delete User
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-gray-800 dark:text-gray-200">
            <p>
              Are you sure you want to permanently delete{" "}
              <strong className="font-semibold text-red-600">{user.name}</strong>?
            </p>
            <div className="p-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900 dark:text-red-200 dark:border-red-700">
              ⚠️ Warning: This action cannot be undone.
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link
              href={`/admin/users/actions/ViewDetails?id=${user.id}`}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </Link>

            <button
              onClick={onDelete}
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Delete User
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
