"use client";
import Link from "next/link";
import RoleToggle from "./RoleToggle";
import LanguageToggle from "./LanguageToggle";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between p-4 text-white bg-blue-600">
      <Link href="/" className="text-xl font-bold">MySANmarg</Link>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <RoleToggle />
        <button
          onClick={logout}
          className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
