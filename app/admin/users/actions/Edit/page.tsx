// app/admin/users/actions/Edit/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/admin/ui/card";
import type { User } from "../../types";
import { getUserById, saveUser } from "../lib/users";

export default function EditPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<User["status"]>("Active");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!id) return;
    const u = getUserById(id);
    if (u) {
      setUser(u);
      setName(u.name);
      setContact(u.contact);
      setLocation(u.location);
      setStatus((u.status as User["status"]) ?? "Active");
    } else {
      setUser(null);
    }
  }, [id]);

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

  if (user === null) {
    return (
      <div className="min-h-screen bg-sky-50">
        <Header />
        <div className="p-6 font-semibold text-center text-gray-900">
          User not found
        </div>
      </div>
    );
  }

  const onSave = () => {
    if (!user) return;
    setSaving(true);
    const updated: User = {
      ...user,
      name: name.trim() || user.name,
      contact: contact.trim() || user.contact,
      location: location.trim() || user.location,
      status,
      requests: user.requests,
    };

    try {
      saveUser(updated);
      setSaved(true);
      setTimeout(() => {
        router.push(`/admin/users/actions/ViewDetails?id=${updated.id}`);
      }, 500);
    } catch (err) {
      console.error("save error", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />

      <div className="max-w-3xl p-6 mx-auto">
        <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              ✏️ Edit User — {user.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-gray-900">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Name</span>
                <input
                  className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Contact</span>
                <input
                  className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Location</span>
                <input
                  className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Status</span>
                <select
                  className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as User["status"])}
                >
                  <option value="Active">Active</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between gap-3">
            <div className="flex gap-3">
              <button
                onClick={onSave}
                disabled={saving}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : "💾 Save Changes"}
              </button>

              <Link
                href={`/admin/users/actions/ViewDetails?id=${user.id}`}
                className="px-4 py-2 text-gray-900 bg-white border border-gray-400 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </Link>
            </div>

            {saved && (
              <div className="text-sm font-semibold text-green-700">
                ✅ Saved Successfully
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
