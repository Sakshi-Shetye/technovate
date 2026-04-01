"use client";
import { useState, useEffect } from "react";
import { getCurrentLanguage, setCurrentLanguage } from "../lib/auth";

export default function LanguageToggle() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(getCurrentLanguage()!);
  }, []);

  const toggleLang = () => {
    const nextLang = lang === "en" ? "hi" : lang === "hi" ? "mr" : "en";
    setLang(nextLang);
    setCurrentLanguage(nextLang);
    alert(`Language switched to ${nextLang}`);
  };

  return (
    <button className="px-3 py-1 font-semibold text-blue-600 bg-white rounded hover:bg-blue-50" onClick={toggleLang}>
      {lang.toUpperCase()}
    </button>
  );
}
