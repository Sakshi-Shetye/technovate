// "use client";

// import Link from "next/link";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// export default function ProviderInfo() {
//   return (
//     <div
//       className={`min-h-screen bg-gray-50 flex justify-center items-center p-6 ${playfair.variable}`}
//     >
//       <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
//         <h1 className="mb-4 text-3xl font-bold text-blue-600">
//           Become a Service Provider
//         </h1>
//         <p className="mb-4 text-gray-700">
//           Welcome to the <span className="font-semibold">Provider Portal</span>! As a registered provider, you can offer services like <span className="text-blue-600">Fuel Delivery, Towing, Ambulance</span> and more.
//         </p>
//         <h2 className="mb-2 text-lg font-semibold text-gray-800">
//           What you need before registering:
//         </h2>
//         <ul className="mb-4 space-y-1 text-gray-700 list-disc list-inside">
//           <li>Aadhaar ID (for KYC verification)</li>
//           <li>Valid Driving License or Certification</li>
//           <li>Bank details for payouts</li>
//           <li>Service skills you want to provide</li>
//         </ul>
//         <h2 className="mb-2 text-lg font-semibold text-gray-800">
//           How it works:
//         </h2>
//         <ol className="mb-6 space-y-1 text-gray-700 list-decimal list-inside">
//           <li>Fill in your details and upload KYC documents.</li>
//           <li>Your application will be reviewed by our admin team.</li>
//           <li>Once approved, you will start receiving service requests in your dashboard.</li>
//         </ol>
//         <div className="flex justify-end">
//           <Link href="/provider/register">
//             <button className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
//               Proceed to Registration
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// export default function ProviderInfo() {
//   return (
//     <div
//       className={`min-h-screen bg-sky-100 flex justify-center items-center p-6 ${playfair.variable}`}
//     >
//       <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
//         <h1 className="mb-4 text-3xl font-bold text-blue-600">
//           Become a Service Provider
//         </h1>
//         <p className="mb-4 text-gray-700">
//           Welcome to the{" "}
//           <span className="font-semibold">Provider Portal</span>! As a
//           registered provider, you can offer services like{" "}
//           <span className="text-blue-600">
//             Fuel Delivery, Towing, Ambulance
//           </span>{" "}
//           and more.
//         </p>

//         <h2 className="mb-2 text-lg font-semibold text-gray-800">
//           What you need before registering:
//         </h2>
//         <ul className="mb-4 space-y-1 text-gray-700 list-disc list-inside">
//           <li>Aadhaar ID (for KYC verification)</li>
//           <li>Valid Driving License or Certification</li>
//           <li>Bank details for payouts</li>
//           <li>Service skills you want to provide</li>
//         </ul>

//         <h2 className="mb-2 text-lg font-semibold text-gray-800">
//           How it works:
//         </h2>
//         <ol className="mb-6 space-y-1 text-gray-700 list-decimal list-inside">
//           <li>Fill in your details and upload KYC documents.</li>
//           <li>Your application will be reviewed by our admin team.</li>
//           <li>
//             Once approved, you will start receiving service requests in your
//             dashboard.
//           </li>
//         </ol>

//         <div className="flex justify-end">
//           <Link href="/provider/register">
//             <button className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
//               Proceed to Registration
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair-display",
});

export default function ProviderInfo() {
  return (
    <div
      className={`min-h-screen bg-sky-100 flex justify-center items-center p-6 ${playfair.variable}`}
    >
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
        {/* ✅ Logo at top center */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo3.png" // make sure logo3.png is in /public folder
            alt="Provider Portal Logo"
            width={120} // adjust size as needed
            height={120}
            className="rounded-lg"
            priority
          />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-center text-blue-600">
          Become a Service Provider
        </h1>

        <p className="mb-4 text-center text-gray-700">
          Welcome to the{" "}
          <span className="font-semibold">Provider Portal</span>! As a
          registered provider, you can offer services like{" "}
          <span className="text-blue-600">
            Fuel Delivery, Towing, Ambulance
          </span>{" "}
          and more.
        </p>

        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          What you need before registering:
        </h2>
        <ul className="mb-4 space-y-1 text-gray-700 list-disc list-inside">
          <li>Aadhaar ID (for KYC verification)</li>
          <li>Valid Driving License or Certification</li>
          <li>Bank details for payouts</li>
          <li>Service skills you want to provide</li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          How it works:
        </h2>
        <ol className="mb-6 space-y-1 text-gray-700 list-decimal list-inside">
          <li>Fill in your details and upload KYC documents.</li>
          <li>Your application will be reviewed by our admin team.</li>
          <li>
            Once approved, you will start receiving service requests in your
            dashboard.
          </li>
        </ol>

        <div className="flex justify-end">
  <Link href="/provider/sign-up">
    <button className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
      Proceed to Registration
    </button>
  </Link>
</div>

      </div>
    </div>
  );
}

