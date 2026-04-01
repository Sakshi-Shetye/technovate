
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, Download } from "lucide-react";
import { useState } from "react";

export default function PaymentPage() {
  const params = useSearchParams();
  const status = params.get("status");
  const paymentDocId = params.get("paymentDocId");
  const service = params.get("service");
  const amount = params.get("amount");
  const [downloading, setDownloading] = useState(false);

  const isSuccess = status === "success";

  async function downloadReceipt() {
    if (!paymentDocId) return alert("No payment reference found.");
    try {
      setDownloading(true);
      const res = await fetch("/api/generate-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentDocId }),
      });
      if (!res.ok) throw new Error("Failed to generate receipt");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `receipt-${paymentDocId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert("Error downloading receipt.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      {isSuccess ? (
        <>
          <CheckCircle className="w-16 h-16 text-green-600" />
          <h1 className="mt-4 text-2xl font-bold">Payment Successful</h1>
          <p className="mt-2 text-gray-600">
            Your payment for {service || "service"} {amount ? `of INR${amount}` : ""} has been completed.
          </p>

          <button
            onClick={downloadReceipt}
            disabled={downloading}
            className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {downloading ? "Generating..." : <><Download className="inline-block w-4 h-4 mr-2" /> Download Receipt</>}
          </button>
        </>
      ) : (
        <>
          <XCircle className="w-16 h-16 text-red-600" />
          <h1 className="mt-4 text-2xl font-bold">Payment Failed</h1>
          <p className="mt-2 text-gray-600">
            Something went wrong while paying for {service || "service"}.
          </p>
        </>
      )}
      <Link
        href="/user/history"
        className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg"
      >
        Go Back to History
      </Link>
    </div>
  );
}
