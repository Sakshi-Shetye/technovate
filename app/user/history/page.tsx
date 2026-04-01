// "use client";

// import { ArrowLeft, Home, History, User, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// const historyData = [
//   {
//     date: "January 15, 2024",
//     service: "Towing Service",
//     provider: "Rural Assist",
//     status: "Paid",
//   },
//   {
//     date: "December 20, 2023",
//     service: "Fuel Delivery",
//     provider: "Rural Assist",
//     status: "Paid",
//   },
//   {
//     date: "November 05, 2023",
//     service: "Tire Change",
//     provider: "Rural Assist",
//     status: "Paid",
//   },
//   {
//     date: "October 12, 2023",
//     service: "Jump Start",
//     provider: "Rural Assist",
//     status: "Pending",
//   },
// ];

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header/>
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">
//             History & Bills
//           </h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">
//                       Provider: {item.provider}
//                     </p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button className="bg-blue-600 hover:bg-blue-700">
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//          <BottomNav />
//       </footer>
//     </div>
//   );
// }



///important/////

// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// import { handleStripePayment } from "@/app/user/utils/payments";

// const historyData = [
//   {
//     date: "January 15, 2024",
//     service: "Towing Service",
//     provider: "Rural Assist",
//     cost: 1200,
//     status: "Paid",
//   },
//   {
//     date: "December 20, 2023",
//     service: "Fuel Delivery",
//     provider: "Rural Assist",
//     cost: 800,
//     status: "Paid",
//   },
//   {
//     date: "November 05, 2023",
//     service: "Tire Change",
//     provider: "Rural Assist",
//     cost: 1500,
//     status: "Paid",
//   },
//   {
//     date: "October 12, 2023",
//     service: "Jump Start",
//     provider: "Rural Assist",
//     cost: 500,
//     status: "Pending",
//   },
// ];

// // ✅ Fixed download function
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to generate receipt");
//     }

//     // Convert to Blob
//     const blob = await response.blob();

//     // Create a download link
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();

//     // Cleanup
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error("Receipt download failed:", error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">
//             History & Bills
//           </h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">
//                       Provider: {item.provider}
//                     </p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import Header from "@/components/Header";
// import { loadStripe } from "@stripe/stripe-js";

// const historyData = [
//   {
//     date: "January 15, 2024",
//     service: "Towing Service",
//     provider: "Rural Assist",
//     cost: 1200,
//     status: "Paid",
//   },
//   {
//     date: "December 20, 2023",
//     service: "Fuel Delivery",
//     provider: "Rural Assist",
//     cost: 800,
//     status: "Paid",
//   },
//   {
//     date: "November 05, 2023",
//     service: "Tire Change",
//     provider: "Rural Assist",
//     cost: 1500,
//     status: "Paid",
//   },
//   {
//     date: "October 12, 2023",
//     service: "Jump Start",
//     provider: "Rural Assist",
//     cost: 500,
//     status: "Pending",
//   },
// ];

// // Stripe setup
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// // Stripe payment handler
// async function handleStripePayment(item: any) {
//   try {
//     const stripe = await stripePromise;
//     if (!stripe) throw new Error("Stripe failed to load");

//     // Call your backend API to create a checkout session
//     const res = await fetch("/api/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     const data = await res.json();

//     // Redirect to Stripe checkout
//     const result = await stripe.redirectToCheckout({ sessionId: data.id });

//     if (result.error) {
//       alert(result.error.message);
//     }
//   } catch (err: any) {
//     console.error(err);
//     alert(err.message || "Payment failed. Try again.");
//   }
// }

// // PDF download
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) throw new Error("Failed to generate receipt");

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error("Receipt download failed:", error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">
//             History & Bills
//           </h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">
//                       Provider: {item.provider}
//                     </p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }





















// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import Header from "@/components/Header";
// import { loadStripe } from "@stripe/stripe-js";

// const historyData = [
//   {
//     date: "January 15, 2024",
//     service: "Towing Service",
//     provider: "Rural Assist",
//     cost: 1200,
//     status: "Paid",
//   },
//   {
//     date: "December 20, 2023",
//     service: "Fuel Delivery",
//     provider: "Rural Assist",
//     cost: 800,
//     status: "Paid",
//   },
//   {
//     date: "November 05, 2023",
//     service: "Tire Change",
//     provider: "Rural Assist",
//     cost: 1500,
//     status: "Paid",
//   },
//   {
//     date: "October 12, 2023",
//     service: "Jump Start",
//     provider: "Rural Assist",
//     cost: 500,
//     status: "Pending",
//   },
// ];

// // ✅ Stripe client-side handler
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// async function handleStripePayment(item: any) {
//   try {
//     const stripe = await stripePromise;
//     if (!stripe) throw new Error("Stripe failed to load");

//     // Call backend to create Checkout session
//     const res = await fetch("/api/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     const data = await res.json();

//     // Redirect to Stripe Checkout
//     const result = await stripe.redirectToCheckout({
//       sessionId: data.id,
//     });

//     if (result.error) {
//       alert(result.error.message);
//     }
//   } catch (err: any) {
//     console.error(err);
//     alert(err.message || "Payment failed. Try again.");
//   }
// }

// // ✅ PDF download
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) throw new Error("Failed to generate receipt");

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error("Receipt download failed:", error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">
//             History & Bills
//           </h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">
//                       Provider: {item.provider}
//                     </p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }















// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// import { handleStripePayment } from "@/app/user/utils/payments";

// const historyData = [
//   {
//     date: "January 15, 2024",
//     service: "Towing Service",
//     provider: "Rural Assist",
//     cost: 1200,
//     status: "Paid",
//   },
//   {
//     date: "December 20, 2023",
//     service: "Fuel Delivery",
//     provider: "Rural Assist",
//     cost: 800,
//     status: "Paid",
//   },
//   {
//     date: "November 05, 2023",
//     service: "Tire Change",
//     provider: "Rural Assist",
//     cost: 1500,
//     status: "Paid",
//   },
//   {
//     date: "October 12, 2023",
//     service: "Jump Start",
//     provider: "Rural Assist",
//     cost: 500,
//     status: "Pending",
//   },
// ];

// // ✅ Corrected downloadReceipt function
// async function downloadReceipt(item: any) {
//   try {
//     // Map your item to API expected structure
//     const requestBody = {
//       receiptNo: `REC-${Date.now()}`,
//       date: item.date,
//       paymentType: item.status === "Paid" ? "Online" : "Pending",
//       from: {
//         name: "MySANmarg",
//         address: "Rural India",
//         phone: "1234567890",
//         email: "info@mysanmarg.com",
//       },
//       to: {
//         name: item.provider,
//         address: "N/A",
//         phone: "N/A",
//         email: "N/A",
//       },
//       items: [
//         {
//           name: item.service,
//           quantity: 1,
//           price: item.cost,
//           discount: 0,
//           tax: 0,
//         },
//       ],
//       terms: "Thank you for using MySANmarg services.",
//     };

//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(requestBody),
//     });

//     if (!response.ok) {
//       const errText = await response.text();
//       console.error("Server Response:", errText);
//       throw new Error("Failed to generate receipt");
//     }

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error("Receipt download failed:", error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">
//             History & Bills
//           </h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">
//                       Provider: {item.provider}
//                     </p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Paid
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }


// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ✅ Stripe demo function
// async function handleStripePayment(item: any) {
//   try {
//     // Call API to create a Stripe session
//     const response = await fetch("/api/create-stripe-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: item.cost * 100, name: item.service }),
//     });

//     if (!response.ok) throw new Error("Failed to create Stripe session");

//     const data = await response.json();

//     // Redirect to Stripe checkout (demo URL)
//     window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
//   } catch (err) {
//     console.error(err);
//     alert("Payment failed. Please try again.");
//   }
// }

// // Sample history data
// const historyData = [
//   { date: "January 15, 2024", service: "Towing Service", provider: "Rural Assist", cost: 1200, status: "Paid" },
//   { date: "December 20, 2023", service: "Fuel Delivery", provider: "Rural Assist", cost: 800, status: "Paid" },
//   { date: "November 05, 2023", service: "Tire Change", provider: "Rural Assist", cost: 1500, status: "Paid" },
//   { date: "October 12, 2023", service: "Jump Start", provider: "Rural Assist", cost: 500, status: "Pending" },
// ];

// // ✅ Download receipt function
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) throw new Error("Failed to generate receipt");

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error(error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">History & Bills</h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">Provider: {item.provider}</p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Paid</span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">Pending</span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }





// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ✅ Stripe demo function
// async function handleStripePayment(item: any) {
//   try {
//     // Demo Stripe checkout link (replace with real session if needed)
//     const demoCheckoutUrl = `https://buy.stripe.com/test_4gw7tI2Hx1Wke1y6oo`;
//     window.open(demoCheckoutUrl, "_blank"); // opens in a new tab
//   } catch (err) {
//     console.error(err);
//     alert("Payment failed. Please try again.");
//   }
// }

// // Sample history data
// const historyData = [
//   { date: "January 15, 2024", service: "Towing Service", provider: "Rural Assist", cost: 1200, status: "Paid" },
//   { date: "December 20, 2023", service: "Fuel Delivery", provider: "Rural Assist", cost: 800, status: "Paid" },
//   { date: "November 05, 2023", service: "Tire Change", provider: "Rural Assist", cost: 1500, status: "Paid" },
//   { date: "October 12, 2023", service: "Jump Start", provider: "Rural Assist", cost: 500, status: "Pending" },
// ];

// // ✅ Download receipt function
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) throw new Error("Failed to generate receipt");

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error(error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">History & Bills</h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">Provider: {item.provider}</p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Paid</span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">Pending</span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { ArrowLeft, Download } from "lucide-react";
// import { Card, CardContent } from "@/components/Card";
// import { Button } from "@/components/button";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ✅ Stripe payment function
// async function handleStripePayment(item: any) {
//   try {
//     const response = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         service: item.service,
//         amount: item.cost, // send raw cost; backend multiplies by 100
//       }),
//     });

//     if (!response.ok) throw new Error("Failed to create Stripe session");

//     const data = await response.json();

//     if (!data.url) throw new Error("Stripe session URL missing");

//     // Redirect to Stripe Checkout
//     window.location.href = data.url;
//   } catch (err) {
//     console.error(err);
//     alert("Payment failed. Please try again.");
//   }
// }

// // ✅ Receipt download function
// async function downloadReceipt(item: any) {
//   try {
//     const response = await fetch("/api/generate-receipt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });

//     if (!response.ok) throw new Error("Failed to generate receipt");

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${item.service}-receipt.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error(error);
//     alert("Error downloading receipt. Please try again.");
//   }
// }

// // Sample history data
// const historyData = [
//   { date: "January 15, 2024", service: "Towing Service", provider: "Rural Assist", cost: 1200, status: "Paid" },
//   { date: "December 20, 2023", service: "Fuel Delivery", provider: "Rural Assist", cost: 800, status: "Paid" },
//   { date: "November 05, 2023", service: "Tire Change", provider: "Rural Assist", cost: 1500, status: "Paid" },
//   { date: "October 12, 2023", service: "Jump Start", provider: "Rural Assist", cost: 500, status: "Pending" },
// ];

// export default function HistoryPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />
//       <header className="sticky top-0 z-10 bg-white shadow-sm">
//         <div className="flex items-center p-4">
//           <button>
//             <ArrowLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <h1 className="flex-1 text-xl font-bold text-center">History & Bills</h1>
//           <div className="w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <div className="space-y-4">
//           {historyData.map((item, idx) => (
//             <Card key={idx} className="shadow-sm">
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-500">{item.date}</p>
//                     <h3 className="text-lg font-semibold">{item.service}</h3>
//                     <p className="text-sm text-gray-500">Provider: {item.provider}</p>
//                     <p className="text-sm text-gray-500">Cost: ₹{item.cost}</p>
//                   </div>
//                   {item.status === "Paid" ? (
//                     <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Paid</span>
//                   ) : (
//                     <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">Pending</span>
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4">
//                   {item.status === "Paid" ? (
//                     <Button
//                       onClick={() => downloadReceipt(item)}
//                       variant="secondary"
//                       className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       <Download className="w-4 h-4 text-white" />
//                       Download Receipt
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={() => handleStripePayment(item)}
//                       className="text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                       Pay Now
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

// Helper: start Stripe checkout for a given payment doc
async function handleStripePayment(item: any) {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentDocId: item.id }),
    });

    if (!res.ok) {
      // Get text first, could be JSON or HTML
      const errText = await res.text();
      console.error("Checkout failed:", errText);
      alert(`Payment initialization failed: ${errText}`);
      return;
    }

    const data = await res.json();
    if (!data?.url) {
      alert("Checkout session URL missing from server response.");
      return;
    }
    // Redirect to Stripe checkout page
    window.location.href = data.url;
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    alert(`Payment initialization failed: ${err.message}`);
  }
}

// Helper: download a PDF receipt
async function downloadReceipt(item: any) {
  try {
    const response = await fetch("/api/generate-receipt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentDocId: item.id }),
    });

    if (!response.ok) throw new Error("Failed to generate receipt");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${item.service}-receipt.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Receipt download failed:", error);
    alert("Error downloading receipt. Please try again.");
  }
}

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllPayments() {
      try {
        // Fetch all payments by using "all" as userId parameter  
        const res = await fetch("/api/get-payments?userId=all");
        if (!res.ok) {
          const text = await res.text(); // might be HTML if server errors
          console.error(`API error (${res.status}):`, text);
          setErrorMsg(
            `Failed to fetch payments (status ${res.status}). Check server logs.`
          );
          return;
        }

        // If it's valid JSON, parse it
        const data = await res.json();
        console.log("Fetched payments:", data?.payments); // Debug log
        setHistoryData(data?.payments || []);
      } catch (err) {
        console.error("Fetch failed:", err);
        setErrorMsg("Unable to load payment history. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAllPayments();
  }, []); // Remove userId dependency

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={() => history.back()}>
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-center">
            All Payment History
          </h1>
          <div className="w-6" />
        </div>
      </header>

      <main className="flex-1 p-4 overflow-y-auto">
        {loading && (
          <p className="text-center text-gray-500">Loading all payments…</p>
        )}

        {!loading && errorMsg && (
          <p className="text-center text-red-600">{errorMsg}</p>
        )}

        {!loading && !errorMsg && historyData.length === 0 && (
          <p className="text-center text-gray-500">No payments found.</p>
        )}

        {!loading && !errorMsg && historyData.length > 0 && (
          <div className="space-y-4">
            {historyData.map((item, idx) => {
              const status = item.status?.trim?.() || "";
              const isPaid = status === "paid";

              // Format Firestore timestamp
              let dateStr = "";
              if (item.createdAt?.toDate) {
                dateStr = item.createdAt.toDate().toLocaleString();
              } else if (item.createdAt?._seconds) {
                dateStr = new Date(
                  item.createdAt._seconds * 1000
                ).toLocaleString();
              }

              // Display user ID for admin purposes
              const displayUserId = item.userId === "guest" ? "Guest User" : item.userId;

              return (
                <Card key={item.id || idx} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{dateStr}</p>
                        <h3 className="text-lg font-semibold">
                          {item.service}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Provider: {item.provider || "Unknown"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Cost: ₹{item.amount} (billed in USD on Stripe)
                        </p>
                        <p className="text-xs text-gray-400">
                          User: {displayUserId}
                        </p>
                      </div>

                      {isPaid ? (
                        <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                          Paid
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                          Pending
                        </span>
                      )}
                    </div>

                    <div className="flex justify-end mt-4">
                      {isPaid ? (
                        <Button
                          onClick={() => downloadReceipt(item)}
                          variant="secondary"
                          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="w-4 h-4 text-white" />
                          Download Receipt
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleStripePayment(item)}
                          className="text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>

      <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
        <BottomNav />
      </footer>
    </div>
  );
}