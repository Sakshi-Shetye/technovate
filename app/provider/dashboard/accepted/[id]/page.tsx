// "use client";

// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// // Mock data same as dashboard
// const mockOrders = [
//   { id: "1", serviceType: "Towing", location: "Ganpatipule, Ratnagiri", userId: "Suresh Patil", phone: "+91 98765 43210", notes: "Car stuck near beach road" },
//   { id: "2", serviceType: "Fuel Delivery", location: "Sawantwadi, Sindhudurg", userId: "Anjali Deshmukh", phone: "+91 91234 56789", notes: "Car ran out of fuel on highway" },
//   { id: "3", serviceType: "Tire Change", location: "Malvan, Sindhudurg", userId: "Rohit Naik", phone: "+91 99887 66554", notes: "Flat tire, needs urgent assistance" },
//   { id: "4", serviceType: "Battery Jumpstart", location: "Dapoli, Ratnagiri", userId: "Pooja Kadam", phone: "+91 97654 32100", notes: "Battery dead, car won't start" },
// ];

// const OrderDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const router = useRouter();

//   const order = mockOrders.find((o) => o.id === id);

//   if (!order) return <p className="mt-4 text-center">Order not found</p>;

//   return (
//     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-white">
//       <Header />
//       <main className="w-full max-w-4xl p-4 mx-auto mt-6 rounded-lg shadow-md sm:p-6 bg-sky-50">
//         <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Order Details</h1>

//         <div className="space-y-3">
//           <p><span className="font-semibold">Service:</span> {order.serviceType}</p>
//           <p><span className="font-semibold">User Name:</span> {order.userId}</p>
//           <p><span className="font-semibold">Phone:</span> {order.phone}</p>
//           <p><span className="font-semibold">Location:</span> {order.location}</p>
//           <p><span className="font-semibold">Additional Notes:</span> {order.notes}</p>
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => router.back()}
//             className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
//           >
//             Back
//           </button>
//         </div>
//       </main>

//       <div className="fixed bottom-0 w-full">
//         <BottomNav activeTab="accepted" setActiveTab={() => {}} />
//       </div>
//     </div>
//   );
// };

// export default OrderDetailPage;



// "use client";

// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// // Mock data including new details
// const mockOrders = [
//   {
//     id: "1",
//     serviceType: "Towing",
//     location: "Ganpatipule, Ratnagiri",
//     userId: "Suresh Patil",
//     phone: "+91 98765 43210",
//     email: "suresh.patil@example.com",
//     vehicleNo: "MH06 AB 1234",
//     vehicleModel: "Maruti Swift",
//     notes: "Car stuck near beach road",
//     requestTime: "2025-09-13 10:30 AM",
//   },
//   {
//     id: "2",
//     serviceType: "Fuel Delivery",
//     location: "Sawantwadi, Sindhudurg",
//     userId: "Anjali Deshmukh",
//     phone: "+91 91234 56789",
//     email: "anjali.d@example.com",
//     vehicleNo: "MH07 CD 5678",
//     vehicleModel: "Hyundai i20",
//     notes: "Car ran out of fuel on highway",
//     requestTime: "2025-09-13 11:15 AM",
//   },
//   {
//     id: "3",
//     serviceType: "Tire Change",
//     location: "Malvan, Sindhudurg",
//     userId: "Rohit Naik",
//     phone: "+91 99887 66554",
//     email: "rohit.naik@example.com",
//     vehicleNo: "MH08 EF 9101",
//     vehicleModel: "Honda City",
//     notes: "Flat tire, needs urgent assistance",
//     requestTime: "2025-09-13 12:00 PM",
//   },
//   {
//     id: "4",
//     serviceType: "Battery Jumpstart",
//     location: "Dapoli, Ratnagiri",
//     userId: "Pooja Kadam",
//     phone: "+91 97654 32100",
//     email: "pooja.k@example.com",
//     vehicleNo: "MH09 GH 1122",
//     vehicleModel: "Toyota Etios",
//     notes: "Battery dead, car won't start",
//     requestTime: "2025-09-13 12:45 PM",
//   },
// ];

// const OrderDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const router = useRouter();

//   const order = mockOrders.find((o) => o.id === id);

//   if (!order) return <p className="mt-4 text-center">Order not found</p>;

//   return (
//     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
//       <Header />
//       <main className="w-full max-w-4xl p-4 mx-auto mt-6 rounded-lg shadow-md sm:p-6 bg-sky-50">
//         <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Order Details</h1>

//         <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
//           <p><span className="font-semibold">Service:</span> {order.serviceType}</p>
//           <p><span className="font-semibold">User Name:</span> {order.userId}</p>
//           <p><span className="font-semibold">Phone:</span> {order.phone}</p>
//           <p><span className="font-semibold">Email:</span> {order.email}</p>
//           <p><span className="font-semibold">Location:</span> {order.location}</p>
//           <p><span className="font-semibold">Vehicle Number:</span> {order.vehicleNo}</p>
//           <p><span className="font-semibold">Vehicle Model:</span> {order.vehicleModel}</p>
//           <p><span className="font-semibold">Request Time:</span> {order.requestTime}</p>
//           <p className="sm:col-span-2"><span className="font-semibold">Additional Notes:</span> {order.notes}</p>
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => router.back()}
//             className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
//           >
//             Back
//           </button>
//         </div>
//       </main>

//       <div className="fixed bottom-0 w-full">
//         <BottomNav activeTab="accepted" setActiveTab={() => {}} />
//       </div>
//     </div>
//   );
// };

// export default OrderDetailPage;
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { db } from "@/lib/firebaseConfig"; // ❗ only db now
import { doc, getDoc } from "firebase/firestore";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["accepted", "pending", "completed"];

  return (
    <nav className="flex justify-around p-4 bg-white shadow-t">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={
            activeTab === tab ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
};

interface OrderData {
  id: string;
  issueType?: string;
  phoneNumber?: string;
  email?: string;
  vehicleNumber?: string;
  vehicleModel?: string;
  notes?: string;
  status?: string;
  userName?: string;
  location?: { lat: number; lng: number };
  requestTime?: string;
}

const OrderDetailPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("accepted");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const docRef = doc(db, "requests", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          // ✅ Handle createdAt timestamp safely
          let requestTime = "Not provided";
          if (data?.createdAt && typeof data.createdAt.toDate === "function") {
            requestTime = data.createdAt
              .toDate()
              .toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
          }

          // ✅ Only use Firestore fields for username/email
          setOrder({
            id: docSnap.id,
            ...data,
            requestTime,
            userName: data?.userName || "Not provided",
            email: data?.email || "Not provided",
          });
        } else {
          setOrder(null);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchOrder();
  }, [id]);

  if (loading) return <p className="mt-4 text-center">Loading order details…</p>;
  if (!order) return <p className="mt-4 text-center">Order not found</p>;

  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
      <Header />
      <main className="w-full max-w-4xl p-4 mx-auto mt-6 rounded-lg shadow-md sm:p-6 bg-sky-50">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Order Details
        </h1>

        <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
          <p><span className="font-semibold">Service:</span> {order.issueType}</p>
          <p><span className="font-semibold">User Name:</span> {order.userName}</p>
          <p><span className="font-semibold">Phone:</span> {order.phoneNumber || "Not provided"}</p>
          <p><span className="font-semibold">Email:</span> {order.email}</p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {order.location ? `${order.location.lat}, ${order.location.lng}` : "Not provided"}
          </p>
          <p><span className="font-semibold">Vehicle Number:</span> {order.vehicleNumber || "Not provided"}</p>
          <p><span className="font-semibold">Vehicle Model:</span> {order.vehicleModel || "Not provided"}</p>
          <p><span className="font-semibold">Request Time:</span> {order.requestTime}</p>
          <p className="sm:col-span-2">
            <span className="font-semibold">Additional Notes:</span>{" "}
            {order.notes || "None"}
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            Back
          </button>
        </div>
      </main>

      <div className="fixed bottom-0 w-full">
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default OrderDetailPage;

