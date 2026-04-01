"use client";

import React, { useState } from 'react';

// Define the types for our languages and translation keys.
type Languages = 'en' | 'hi';
type TranslationKeys = 
| 'brand_name'
| 'dashboard'
| 'profile'
| 'history'
| 'settings'
| 'help'
| 'consumer_dashboard'
| 'raise_sos'
| 'new_request'
| 'issue_type'
| 'select_issue'
| 'fuel'
| 'tire'
| 'engine'
| 'pickup'
| 'your_location'
| 'active_requests'
| 'request_id'
| 'status_pending'
| 'status_accepted'
| 'status_completed';

// The translations are embedded for a self-contained file.
const translations: Record<Languages, Record<TranslationKeys, string>> = {
  en: {
    brand_name: "MySANmarg",
    dashboard: "Dashboard",
    profile: "Profile",
    history: "History",
    settings: "Settings",
    help: "Help",
    consumer_dashboard: "Consumer Dashboard",
    raise_sos: "Raise SOS",
    new_request: "New Request",
    issue_type: "Issue Type",
    select_issue: "Select an issue",
    fuel: "Fuel",
    tire: "Tire",
    engine: "Engine",
    pickup: "Pickup",
    your_location: "Your Location",
    active_requests: "Active Requests",
    request_id: "Request",
    status_pending: "Pending",
    status_accepted: "Accepted",
    status_completed: "Completed"
  },
  hi: {
    brand_name: "MySANmarg",
    dashboard: "डैशबोर्ड",
    profile: "प्रोफ़ाइल",
    history: "इतिहास",
    settings: "सेटिंग्स",
    help: "मदद",
    consumer_dashboard: "उपभोक्ता डैशबोर्ड",
    raise_sos: "एसओएस उठाएँ",
    new_request: "नया अनुरोध",
    issue_type: "समस्या का प्रकार",
    select_issue: "एक समस्या चुनें",
    fuel: "ईंधन",
    tire: "टायर",
    engine: "इंजन",
    pickup: "पिकअप",
    your_location: "आपका स्थान",
    active_requests: "सक्रिय अनुरोध",
    request_id: "अनुरोध",
    status_pending: "लंबित",
    status_accepted: "स्वीकृत",
    status_completed: "पूरा हुआ"
  }
};

const UserDashboard = () => {
  const [lang, setLang] = useState<Languages>('en');

  const t = (key: TranslationKeys): string => translations[lang][key] || key;

  return (
    <div className="flex min-h-screen text-[#111827] bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <h1 className="text-[#0d7ff2] text-xl font-bold">{t('brand_name')}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('en')}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded-lg text-xs transition-colors ${lang === 'en' ? 'opacity-100' : 'opacity-70'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded-lg text-xs transition-colors ${lang === 'hi' ? 'opacity-100' : 'opacity-70'}`}
            >
              HI
            </button>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-100 text-[#0d7ff2]" href="#">
            {/* Dashboard Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48a16,16,0,0,1,21.53,0l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
            <span className="text-sm font-medium">{t('dashboard')}</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0d7ff2]" href="#">
            {/* Profile */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
            <span className="text-sm font-medium">{t('profile')}</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0d7ff2]" href="#">
            {/* History */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Z"></path>
            </svg>
            <span className="text-sm font-medium">{t('history')}</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0d7ff2]" href="#">
            {/* Settings */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
            </svg>
            <span className="text-sm font-medium">{t('settings')}</span>
          </a>
        </nav>
        <div className="px-4 py-6 mt-auto">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0d7ff2]" href="#">
            {/* Help */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
            </svg>
            <span className="text-sm font-medium">{t('help')}</span>
          </a>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('consumer_dashboard')}</h1>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Z"></path>
              </svg>
              {t('raise_sos')}
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Request */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('new_request')}</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="issue-type">
                    {t('issue_type')}
                  </label>
                  <select
                    id="issue-type"
                    name="issue-type"
                    className="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-[#0d7ff2] focus:ring focus:ring-[#0d7ff2] focus:ring-opacity-50"
                  >
                    <option>{t('select_issue')}</option>
                    <option value="fuel">{t('fuel')}</option>
                    <option value="tire">{t('tire')}</option>
                    <option value="engine">{t('engine')}</option>
                    <option value="pickup">{t('pickup')}</option>
                  </select>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">{t('your_location')}</p>
                  <div
                    className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLLpwzh3M7iMdD6KYjAlj1Uau56zS6XcqCidsWP_3dlJdXOsdib0wh6e_4lrE5t6SxddxLO__WCLjtBENnHdFluZfeBhZUaGp-uLR5xck9gWFmppdvTfnAENxkHJkT39xoS4Ej3llYiJ-qfRlproyTYIYjK2fgNb5OXHa80way5uFPmCaF_4UgnhIpY5vIjUymAA0dKud8azKy0VcGlaq2PbRnEAiBPdxOn4iWyjiR9OUAO06HqiMKWrAY0i4ESNqSEQ7EyVIX38k')",
                    }}
                  ></div>
                </div>
              </form>
            </div>

            {/* Active Requests */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('active_requests')}</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{t('request_id')} #12345</p>
                    <p className="text-sm text-gray-500">{t('fuel')}</p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    {t('status_pending')}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{t('request_id')} #67890</p>
                    <p className="text-sm text-gray-500">{t('tire')}</p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    {t('status_accepted')}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{t('request_id')} #11213</p>
                    <p className="text-sm text-gray-500">{t('engine')}</p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800">
                    {t('status_completed')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
