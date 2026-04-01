"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function RoleToggle() {
  const [roles, setRoles] = useState<string[]>([]);
  const [currentRole, setCurrentRole] = useState<string>("");

  useEffect(() => {
    const fetchRoles = async () => {
      if (!auth.currentUser) return;
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setRoles(data.roles || []);
        setCurrentRole(data.currentRole || data.roles[0]);
      }
    };
    fetchRoles();
  }, []);

  const toggleRole = async (role: string) => {
    if (!auth.currentUser) return;
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, { currentRole: role });
    setCurrentRole(role);
    alert(`Switched to ${role} mode`);
  };

  return (
    <div className="flex gap-2">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => toggleRole(role)}
          className={`px-4 py-2 rounded ${
            currentRole === role ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
}
