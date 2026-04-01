"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select
      defaultValue={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="border rounded p-1"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="mr">मराठी</option>
    </select>
  );
}
