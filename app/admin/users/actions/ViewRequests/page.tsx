"use client";

import { useSearchParams } from "next/navigation";
import { User } from "../../types";

const users: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Active" },
];

export default function ViewRequestsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const user = users.find((u) => u.id === id);

  if (!user) return <div className="p-4 text-red-500">User not found</div>;

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold">Requests for {user.name}</h3>
      <p>Total Requests: {user.requests}</p>
    
    </div>
  );
}
