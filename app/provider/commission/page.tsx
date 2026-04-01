"use client";

import React from "react";
import { Shield, Wallet, DollarSign } from "lucide-react";
import Header from "@/components/Header"; // ✅ reuse the same header

export default function CommissionPage() {
  const models = [
    {
      id: "1",
      service: "General Repair",
      providerCommission: 70,
      platformCommission: 25,
      fixedCharge: 50,
    },
    {
      id: "2",
      service: "Fuel Delivery",
      providerCommission: 60,
      platformCommission: 30,
      fixedCharge: 40,
    },
    {
      id: "3",
      service: "Tyre Replacement",
      providerCommission: 65,
      platformCommission: 25,
      fixedCharge: 60,
    },
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      {/* ===== Header (same as provider/admin) ===== */}
      <Header title="Commission Model" />

      <div className="p-6">
        {/* Intro */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-800">
            💰 Commission Model
          </h1>
          <p className="mt-2 text-gray-700">
            Transparent breakdown of service charges and commissions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.id}
              className="transition-all duration-200 bg-white border border-blue-100 shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-blue-700">
                    {model.service}
                  </h2>
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                    Active
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5 text-blue-500" />
                    <p className="text-sm text-gray-700">
                      Provider Commission:{" "}
                      <span className="font-bold text-blue-600">
                        {model.providerCommission}%
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <p className="text-sm text-gray-700">
                      Platform Commission:{" "}
                      <span className="font-bold text-blue-600">
                        {model.platformCommission}%
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <p className="text-sm text-gray-700">
                      Fixed Charge:{" "}
                      <span className="font-bold text-blue-600">
                        ₹{model.fixedCharge}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-sm text-center text-gray-600">
          📌 These commission rules are defined by the admin and may change.
        </div>
      </div>
    </div>
  );
}
