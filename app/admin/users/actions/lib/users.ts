// app/admin/users/actions/lib/users.ts
import type { User } from "../../types";

const DEFAULT_USERS: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Active" },
];

const STORAGE_KEY = "mysanmarg_users_v1";

export function getAllUsers(): User[] {
  if (typeof window === "undefined") return DEFAULT_USERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return JSON.parse(raw) as User[];
  } catch (e) {
    console.error("getAllUsers error", e);
    return DEFAULT_USERS;
  }
}

export function getUserById(id?: string | null): User | null {
  if (!id) return null;
  const users = getAllUsers();
  return users.find((u) => u.id === id) ?? null;
}

export function saveUser(updated: User) {
  const users = getAllUsers();
  const idx = users.findIndex((u) => u.id === updated.id);
  if (idx >= 0) users[idx] = updated;
  else users.push(updated);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}
