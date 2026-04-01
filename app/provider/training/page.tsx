// "use client";

// export default function ProviderTraining() {
//   const resources = [
//     {
//       id: 1,
//       title: "Complete Tractor Towing Course",
//       provider: "Skill India",
//       link: "https://www.skillindiadigital.gov.in/home",
//       type: "Course",
//     },
//     {
//       id: 2,
//       title: "Roadside Assistance Safety Guidelines",
//       provider: "NSDC",
//       link: "https://nsdcindia.org/",
//       type: "PDF",
//     },
//     {
//       id: 3,
//       title: "Ambulance First Aid Training",
//       provider: "ASDC",
//       link: "https://www.asdc.org.in/",
//       type: "Course",
//     },
//     {
//       id: 4,
//       title: "Vehicle Maintenance Basics",
//       provider: "Skill India",
//       link: "https://www.skillindiadigital.gov.in/home/",
//       type: "Video",
//     },
//   ];

//   return (
//     <div className="w-full max-w-4xl space-y-6">
//       <h1 className="text-2xl font-bold text-blue-600">Training Resources</h1>
//       <p className="text-gray-600">
//         Enhance your skills with free resources from{" "}
//         <span className="font-semibold">Skill India, NSDC, and ASDC</span>.
//       </p>

//       {/* Resources List */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         {resources.map((res) => (
//           <div
//             key={res.id}
//             className="flex flex-col justify-between p-5 bg-white shadow rounded-2xl"
//           >
//             <div>
//               <h2 className="mb-1 text-lg font-semibold text-gray-800">
//                 {res.title}
//               </h2>
//               <p className="mb-2 text-sm text-gray-500">
//                 {res.provider} • {res.type}
//               </p>
//             </div>

//             <a
//               href={res.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-4 py-2 mt-3 font-medium text-center text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
//             >
//               Open Resource
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import Header from "@/components/Header";

export default function ProviderTraining() {
  const resources = [
    {
      id: 1,
      title: "Complete Tractor Towing Course",
      provider: "Skill India",
      link: "https://www.skillindiadigital.gov.in/home",
      type: "Course",
    },
    {
      id: 2,
      title: "Roadside Assistance Safety Guidelines",
      provider: "NSDC",
      link: "https://nsdcindia.org/",
      type: "PDF",
    },
    {
      id: 3,
      title: "Ambulance First Aid Training",
      provider: "ASDC",
      link: "https://www.asdc.org.in/",
      type: "Course",
    },
    {
      id: 4,
      title: "Vehicle Maintenance Basics",
      provider: "Skill India",
      link: "https://www.skillindiadigital.gov.in/home/",
      type: "Video",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center p-4 pb-24 sm:p-8 md:pb-8">
        <div className="w-full max-w-5xl space-y-6">
          <h1 className="text-2xl font-bold text-center text-blue-600">
            Training Resources
          </h1>
          <p className="text-center text-gray-600">
            Enhance your skills with free resources from{" "}
            <span className="font-semibold">Skill India, NSDC, and ASDC</span>.
          </p>

          {/* Resources List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((res) => (
              <div
                key={res.id}
                className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-center text-gray-800">
                    {res.title}
                  </h2>
                  <p className="mb-2 text-sm text-center text-gray-500">
                    {res.provider} • {res.type}
                  </p>
                </div>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-3 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Open Resource
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
