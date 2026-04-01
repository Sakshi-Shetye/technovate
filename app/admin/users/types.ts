// admin/users/types.ts
export interface User {
  id: string;
  name: string;
  contact: string;
  location: string;
  requests: number;
  status: "Active" | "Blocked";
}
