// "use client";

// import { useState } from "react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// export default function CommissionModelPage() {
//   const [providerCommission, setProviderCommission] = useState(20);
//   const [platformCommission, setPlatformCommission] = useState(10);
//   const [fixedCharge, setFixedCharge] = useState(50);

//   return (
//     <div className="bg-[#F3F7FD] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex-grow p-6 space-y-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold text-blue-800">💰 Commission Model</h1>
//         <p className="text-sm text-gray-600">
//           Configure the commission structure for service requests on the platform.
//         </p>

//         {/* Commission Settings Card */}
//         <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
//           <h2 className="mb-4 text-lg font-semibold text-blue-700">Commission Breakdown</h2>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Provider Commission */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Provider Commission (%)
//               </label>
//               <input
//                 type="number"
//                 value={providerCommission}
//                 onChange={(e) => setProviderCommission(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Platform Commission */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Platform Commission (%)
//               </label>
//               <input
//                 type="number"
//                 value={platformCommission}
//                 onChange={(e) => setPlatformCommission(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Fixed Charge */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Fixed Charge (₹)
//               </label>
//               <input
//                 type="number"
//                 value={fixedCharge}
//                 onChange={(e) => setFixedCharge(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Preview */}
//           <div className="p-4 mt-6 border border-blue-200 bg-blue-50 rounded-xl">
//             <p className="font-semibold text-blue-700">Commission Preview</p>
//             <ul className="mt-2 space-y-1 text-sm text-gray-700">
//               <li>Provider Commission: <span className="font-bold">{providerCommission}%</span></li>
//               <li>Platform Commission: <span className="font-bold">{platformCommission}%</span></li>
//               <li>Fixed Charge: <span className="font-bold">₹{fixedCharge}</span></li>
//             </ul>
//           </div>

//           {/* Save Button */}
//           <div className="flex justify-end mt-6">
//             <button
//               onClick={() => alert("Commission model saved ✅")}
//               className="px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>

//         {/* History Section */}
//         <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
//           <h2 className="mb-4 text-lg font-semibold text-blue-700">Recent Updates</h2>
//           <ul className="space-y-3 text-sm text-gray-700">
//             <li className="flex items-center justify-between pb-2 border-b">
//               <span>Updated Platform Commission to 10%</span>
//               <span className="text-xs text-gray-500">2 days ago</span>
//             </li>
//             <li className="flex items-center justify-between pb-2 border-b">
//               <span>Set Provider Commission to 20%</span>
//               <span className="text-xs text-gray-500">5 days ago</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Introduced Fixed Charge ₹50</span>
//               <span className="text-xs text-gray-500">1 week ago</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { db } from "@/lib/firebaseConfig"; // adjust path if different
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// export default function CommissionModelPage() {
//   const [service, setService] = useState("Fuel Shortage");
//   const [providerCommission, setProviderCommission] = useState(20);
//   const [platformCommission, setPlatformCommission] = useState(10);
//   const [fixedCharge, setFixedCharge] = useState(50);
//   const [savedModels, setSavedModels] = useState<any[]>([]);

//   // Load existing commission models
//   useEffect(() => {
//     const fetchModels = async () => {
//       const querySnapshot = await getDocs(collection(db, "commissionModels"));
//       const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setSavedModels(data);
//     };
//     fetchModels();
//   }, []);

//   // Save new commission model
//   const handleSave = async () => {
//     const newModel = {
//       service,
//       providerCommission,
//       platformCommission,
//       fixedCharge,
//       createdAt: new Date(),
//     };

//     await addDoc(collection(db, "commissionModels"), newModel);
//     alert("Commission model saved ✅");

//     setSavedModels((prev) => [...prev, newModel]);
//   };

//   return (
//     <div className="bg-[#F3F7FD] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex-grow p-6 space-y-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold text-blue-800">💰 Commission Model</h1>
//         <p className="text-sm text-gray-600">
//           Configure the commission structure for each service type.
//         </p>

//         {/* Commission Settings Card */}
//         <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
//           <h2 className="mb-4 text-lg font-semibold text-blue-700">
//             Add / Update Commission Model
//           </h2>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Service Type */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">Service Type</label>
//               <select
//                 value={service}
//                 onChange={(e) => setService(e.target.value)}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option>Fuel Shortage</option>
//                 <option>Flat Tyre</option>
//                 <option>Engine Failure</option>
//                 <option>Battery Issue</option>
//               </select>
//             </div>

//             {/* Provider Commission */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">Provider Commission (%)</label>
//               <input
//                 type="number"
//                 value={providerCommission}
//                 onChange={(e) => setProviderCommission(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Platform Commission */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">Platform Commission (%)</label>
//               <input
//                 type="number"
//                 value={platformCommission}
//                 onChange={(e) => setPlatformCommission(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Fixed Charge */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-gray-700">Fixed Charge (₹)</label>
//               <input
//                 type="number"
//                 value={fixedCharge}
//                 onChange={(e) => setFixedCharge(Number(e.target.value))}
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Preview */}
//           <div className="p-4 mt-6 border border-blue-200 bg-blue-50 rounded-xl">
//             <p className="font-semibold text-blue-700">Commission Preview</p>
//             <ul className="mt-2 space-y-1 text-sm text-gray-700">
//               <li>Service: <span className="font-bold">{service}</span></li>
//               <li>Provider Commission: <span className="font-bold">{providerCommission}%</span></li>
//               <li>Platform Commission: <span className="font-bold">{platformCommission}%</span></li>
//               <li>Fixed Charge: <span className="font-bold">₹{fixedCharge}</span></li>
//             </ul>
//           </div>

//           {/* Save Button */}
//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSave}
//               className="px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>

//         {/* History Section */}
//         <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
//           <h2 className="mb-4 text-lg font-semibold text-blue-700">Saved Commission Models</h2>
//           {savedModels.length > 0 ? (
//             <ul className="space-y-3 text-sm text-gray-700">
//               {savedModels.map((model, idx) => (
//                 <li
//                   key={idx}
//                   className="flex flex-col justify-between pb-2 border-b md:flex-row md:items-center"
//                 >
//                   <span>
//                     <strong>{model.service}</strong> — Provider: {model.providerCommission}% | Platform:{" "}
//                     {model.platformCommission}% | Fixed: ₹{model.fixedCharge}
//                   </span>
//                   <span className="mt-1 text-xs text-gray-500 md:mt-0">
//                     {new Date(model.createdAt?.seconds * 1000 || model.createdAt).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No commission models saved yet.</p>
//           )}
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

export default function CommissionModelPage() {
  const [service, setService] = useState("Fuel Shortage");
  const [providerCommission, setProviderCommission] = useState(20);
  const [platformCommission, setPlatformCommission] = useState(10);
  const [fixedCharge, setFixedCharge] = useState(50);
  const [savedModels, setSavedModels] = useState<any[]>([]);

  // Save commission model locally
  const handleSave = () => {
    const newModel = {
      service,
      providerCommission,
      platformCommission,
      fixedCharge,
      createdAt: new Date(),
    };

    setSavedModels((prev) => [...prev, newModel]);
    alert("Commission model saved ✅");
  };

  return (
    <div className="bg-[#F3F7FD] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow p-6 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-blue-800">💰 Commission Model</h1>
        <p className="text-sm text-gray-600">
          Configure the commission structure for each service type.
        </p>

        {/* Commission Settings Card */}
        <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
          <h2 className="mb-4 text-lg font-semibold text-blue-700">
            Add / Update Commission Model
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Service Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Service Type</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Fuel Shortage</option>
                <option>Flat Tyre</option>
                <option>Engine Failure</option>
                <option>Battery Issue</option>
              </select>
            </div>

            {/* Provider Commission */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Provider Commission (%)</label>
              <input
                type="number"
                value={providerCommission}
                onChange={(e) => setProviderCommission(Number(e.target.value))}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Platform Commission */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Platform Commission (%)</label>
              <input
                type="number"
                value={platformCommission}
                onChange={(e) => setPlatformCommission(Number(e.target.value))}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Fixed Charge */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Fixed Charge (₹)</label>
              <input
                type="number"
                value={fixedCharge}
                onChange={(e) => setFixedCharge(Number(e.target.value))}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 mt-6 border border-blue-200 bg-blue-50 rounded-xl">
            <p className="font-semibold text-blue-700">Commission Preview</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>Service: <span className="font-bold">{service}</span></li>
              <li>Provider Commission: <span className="font-bold">{providerCommission}%</span></li>
              <li>Platform Commission: <span className="font-bold">{platformCommission}%</span></li>
              <li>Fixed Charge: <span className="font-bold">₹{fixedCharge}</span></li>
            </ul>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* History Section */}
        <div className="p-6 bg-white border border-gray-200 shadow-md rounded-2xl">
          <h2 className="mb-4 text-lg font-semibold text-blue-700">Saved Commission Models</h2>
          {savedModels.length > 0 ? (
            <ul className="space-y-3 text-sm text-gray-700">
              {savedModels.map((model, idx) => (
                <li
                  key={idx}
                  className="flex flex-col justify-between pb-2 border-b md:flex-row md:items-center"
                >
                  <span>
                    <strong>{model.service}</strong> — Provider: {model.providerCommission}% | Platform:{" "}
                    {model.platformCommission}% | Fixed: ₹{model.fixedCharge}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 md:mt-0">
                    {model.createdAt.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No commission models saved yet.</p>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
