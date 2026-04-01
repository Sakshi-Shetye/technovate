// hooks/useAuth.tsx
"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, initAuthPersistence } from "../lib/firebaseConfig";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let unsubscribe = () => {};

    (async () => {
      await initAuthPersistence(); // ensure persistence is set
      unsubscribe = onAuthStateChanged(auth, (u) => {
        if (!mounted) return;
        setUser(u);
        setLoading(false);
      });
    })();

    return () => {
      mounted = false;
      try {
        unsubscribe();
      } catch {}
    };
  }, []);

  return { user, loading };
}
