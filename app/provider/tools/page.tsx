// // app/provider/register/page.tsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ProviderRegistration() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: "",
//     license: "",
//     skills: [] as string[],
//   });

//   const skillsList = [
//     "Fuel Delivery",
//     "Towing",
//     "Ambulance",
//     "Jump Start",
//     "Flat Tyre",
//   ];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill
//           ? prev.skills.filter((s) => s !== skill)
//           : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Registration submitted! (Demo only)");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
//           Provider Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Aadhaar Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Aadhaar Upload
//             </label>
//             <input
//               type="file"
//               name="aadhaar"
//               onChange={handleChange}
//               className="w-full mt-1"
//             />
//           </div>

//           {/* License Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               License Upload
//             </label>
//             <input
//               type="file"
//               name="license"
//               onChange={handleChange}
//               className="w-full mt-1"
//             />
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Select Services
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill)
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
//           >
//             Submit Registration
//           </motion.button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-500">
//           After submission, your profile will be reviewed by admin.
//         </p>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import Header from "@/components/Header";

export default function ProviderTools() {
  const tools = [
    {
      id: 1,
      name: "DEKOPRO 192-Piece Mechanics Tool Set",
      description: "Comprehensive socket and wrench set for auto repairs.",
      link: "https://www.ubuy.co.in/product/9UDW0K-dekopro-192-piece-mechanics-tool-set-socket-wrench-set-auto-repair-hand-tool-kit-wrench-tool-box-set-with-plastic-storage-case",
    },
    {
      id: 2,
      name: "AutoDukan Car Spare Parts",
      description: "Wide range of car spare parts and accessories online in India.",
      link: "https://autodukan.com/",
    },
    {
      id: 3,
      name: "J.K. Automotive Spare Parts",
      description: "OEM-quality car spares and genuine auto parts across India.",
      link: "https://jkautomotive.co.in/",
    },
    {
      id: 4,
      name: "Part On Wheels Two-Wheeler Parts",
      description: "Genuine two-wheeler spare parts with fast delivery.",
      link: "https://partonwheels.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-100">
      <Header />
      <main className="flex flex-col items-center p-4 pb-24 sm:p-8 md:pb-8">
        <div className="w-full max-w-5xl space-y-6">
          <h1 className="text-2xl font-bold text-center text-blue-600">
            Vehicle Tools & Parts
          </h1>
          <p className="text-center text-gray-600">
            Explore external websites to buy vehicle tools, repair kits, and spare parts.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-center text-gray-800">
                    {tool.name}
                  </h2>
                  <p className="mb-2 text-sm text-center text-gray-500">
                    {tool.description}
                  </p>
                </div>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-3 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

