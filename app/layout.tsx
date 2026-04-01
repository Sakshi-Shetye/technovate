// import '../styles/global.css'
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />


// export const metadata = { title: "MySANmarg", description: "Rural Vehicle Assistance & Employment Platform" };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-100">
        
//         <div className="flex">
          
//           <main className="flex-1 p-6">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }

//Vvvimp
// import "leaflet/dist/leaflet.css";
// import "../styles/global.css";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// export const metadata = {
//   title: "MySANmarg",
//   description: "Rural Vehicle Assistance & Employment Platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`min-h-screen bg-gray-100 ${playfair.className}`}>
//         <div className="flex">
//           <main className="flex-1 p-6">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }



// import "leaflet/dist/leaflet.css";
// import "../styles/global.css";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// export const metadata = {
//   title: "MySANmarg",
//   description: "Rural Vehicle Assistance & Employment Platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="w-full h-full">
//       <body className={`h-full w-full bg-gray-100 ${playfair.className}`}>
//         {/* Main content takes full width/height, no padding */}
//         <main className="w-full h-full">{children}</main>
//       </body>
//     </html>
//   );
// }




import "leaflet/dist/leaflet.css";
import "../styles/global.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

// ✅ Add the `icons` property so the tab shows your logo3.png
export const metadata = {
  title: "MySANmarg",
  description: "Rural Vehicle Assistance & Employment Platform",
  icons: {
    icon: "/logo3.png", // file located in /public/logo3.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`h-full w-full bg-gray-100 ${playfair.className}`}>
        {/* Main content takes full width/height, no padding */}
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}

// import "leaflet/dist/leaflet.css";
// import "../styles/global.css";
// import { Playfair_Display } from "next/font/google";
// import { AuthProvider } from "@/context/AuthContext";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// export const metadata = {
//   title: "MySANmarg",
//   description: "Rural Vehicle Assistance & Employment Platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`min-h-screen bg-gray-100 ${playfair.className}`}>
//         <AuthProvider>
//           <div className="flex">
//             <main className="flex-1 p-6">{children}</main>
//           </div>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }
