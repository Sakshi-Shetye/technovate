// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import Header from "@/components/Header";
// // import BottomNav from "@/components/admin/BottomNav";
// // import { useRouter } from "next/navigation";
// // import { db } from "@/lib/firebaseConfig";
// // import {
// //   collection,
// //   onSnapshot,
// //   query,
// //   where,
// //   updateDoc,
// //   doc,
// //   orderBy,
// //   Timestamp,
// //   addDoc,
// //   getDoc,
// //   getDocs,
// // } from "firebase/firestore";

// // // Define a type for your data with a more specific timestamp type
// // interface Order {
// //   id: string;
// //   issueType: string;
// //   serviceType?: string;
// //   location: string | { lat: number; lng: number } | null;
// //   phoneNumber: string;
// //   phone?: string;
// //   vehicleNumber: string;
// //   vehicleNo?: string;
// //   vehicleModel: string;
// //   notes?: string;
// //   status: "Pending" | "Accepted" | "Completed";
// //   createdAt: Timestamp;
// //   serviceAmount?: number;
// //   uid?: string;
// // }

// // interface ProviderLocation {
// //   lat: number;
// //   lng: number;
// // }

// // // Leaflet types
// // declare global {
// //   interface Window {
// //     L: any;
// //   }
// // }

// // const DashboardPage: React.FC = () => {
// //   const router = useRouter();
// //   const [newOrders, setNewOrders] = useState<Order[]>([]);
// //   const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
// //   const [completedOrders, setCompletedOrders] = useState<Order[]>([]);
// //   const [activeTab, setActiveTab] = useState("new");
// //   const [message, setMessage] = useState("");
  
// //   // Location states
// //   const [providerLocation, setProviderLocation] = useState<ProviderLocation | null>(null);
// //   const [isLocationLoading, setIsLocationLoading] = useState(false);
// //   const [locationError, setLocationError] = useState("");
// //   const [showLocationStep, setShowLocationStep] = useState(true);
  
// //   // Map reference
// //   const mapRef = useRef<HTMLDivElement>(null);
// //   const leafletMapRef = useRef<any>(null);
// //   const providerMarkerRef = useRef<any>(null);
// //   const requestMarkersRef = useRef<any[]>([]);
// //   const radiusCircleRef = useRef<any>(null);
  
// //   // For amount input modal
// //   const [showAmountModal, setShowAmountModal] = useState(false);
// //   const [selectedOrderId, setSelectedOrderId] = useState<string>("");
// //   const [serviceAmount, setServiceAmount] = useState<string>("");
  
// //   // For notification functionality
// //   const previousNewOrdersCount = useRef<number>(0);
// //   const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default");

// //   // Load Leaflet CSS and JS
// //   useEffect(() => {
// //     if (!document.querySelector('link[href*="leaflet"]')) {
// //       const link = document.createElement('link');
// //       link.rel = 'stylesheet';
// //       link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
// //       link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
// //       link.crossOrigin = '';
// //       document.head.appendChild(link);
// //     }

// //     if (!window.L) {
// //       const script = document.createElement('script');
// //       script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
// //       script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
// //       script.crossOrigin = '';
// //       script.onload = () => {
// //         console.log('Leaflet loaded successfully');
// //       };
// //       document.head.appendChild(script);
// //     }
// //   }, []);

// //   // Request notification permission on component mount
// //   useEffect(() => {
// //     if ("Notification" in window) {
// //       if (Notification.permission === "default") {
// //         Notification.requestPermission().then((permission) => {
// //           setNotificationPermission(permission);
// //         });
// //       } else {
// //         setNotificationPermission(Notification.permission);
// //       }
// //     }
// //   }, []);

// //   // Function to calculate distance between two points using Haversine formula
// //   const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
// //     const R = 6371; // Radius of the Earth in kilometers
// //     const dLat = (lat2 - lat1) * Math.PI / 180;
// //     const dLng = (lng2 - lng1) * Math.PI / 180;
// //     const a = 
// //       Math.sin(dLat/2) * Math.sin(dLat/2) +
// //       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
// //       Math.sin(dLng/2) * Math.sin(dLng/2);
// //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
// //     const distance = R * c; // Distance in kilometers
// //     return distance;
// //   };

// //   // Function to filter orders by location (within 4km radius)
// //   const filterOrdersByLocation = (orders: Order[]): Order[] => {
// //     if (!providerLocation) return orders;
    
// //     return orders.filter(order => {
// //       if (!order.location || typeof order.location === 'string') return false;
      
// //       const distance = calculateDistance(
// //         providerLocation.lat,
// //         providerLocation.lng,
// //         order.location.lat,
// //         order.location.lng
// //       );
      
// //       return distance <= 4; // 4km radius
// //     });
// //   };

// //   // Function to fetch provider location
// //   const fetchLocation = () => {
// //     setIsLocationLoading(true);
// //     setLocationError("");

// //     if (!navigator.geolocation) {
// //       setLocationError("Geolocation is not supported by this browser.");
// //       setIsLocationLoading(false);
// //       return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const location = {
// //           lat: position.coords.latitude,
// //           lng: position.coords.longitude
// //         };
// //         setProviderLocation(location);
// //         setIsLocationLoading(false);
// //         setShowLocationStep(false);
// //         initializeMap(location);
// //       },
// //       (error) => {
// //         let errorMessage = "Unable to retrieve your location.";
// //         switch (error.code) {
// //           case error.PERMISSION_DENIED:
// //             errorMessage = "Location access denied. Please enable location permissions.";
// //             break;
// //           case error.POSITION_UNAVAILABLE:
// //             errorMessage = "Location information is unavailable.";
// //             break;
// //           case error.TIMEOUT:
// //             errorMessage = "Location request timed out.";
// //             break;
// //         }
// //         setLocationError(errorMessage);
// //         setIsLocationLoading(false);
// //       },
// //       {
// //         enableHighAccuracy: true,
// //         timeout: 10000,
// //         maximumAge: 600000 // 10 minutes
// //       }
// //     );
// //   };

// //   // Initialize Leaflet Map
// //   const initializeMap = (location: ProviderLocation) => {
// //     if (!window.L || !mapRef.current) {
// //       // Retry after a short delay if Leaflet isn't loaded yet
// //       setTimeout(() => initializeMap(location), 1000);
// //       return;
// //     }

// //     // Create map centered on provider location
// //     const map = window.L.map(mapRef.current).setView([location.lat, location.lng], 13);

// //     // Add OpenStreetMap tiles
// //     window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //       attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //     }).addTo(map);

// //     // Custom icon for provider location (blue)
// //     const providerIcon = window.L.divIcon({
// //       className: 'custom-div-icon',
// //       html: `
// //         <div style="
// //           background-color: #4F46E5;
// //           width: 20px;
// //           height: 20px;
// //           border-radius: 50%;
// //           border: 3px solid white;
// //           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
// //           position: relative;
// //         ">
// //           <div style="
// //             position: absolute;
// //             top: 50%;
// //             left: 50%;
// //             transform: translate(-50%, -50%);
// //             width: 8px;
// //             height: 8px;
// //             background-color: white;
// //             border-radius: 50%;
// //           "></div>
// //         </div>
// //       `,
// //       iconSize: [26, 26],
// //       iconAnchor: [13, 13]
// //     });

// //     // Add provider marker
// //     const providerMarker = window.L.marker([location.lat, location.lng], { 
// //       icon: providerIcon 
// //     })
// //     .addTo(map)
// //     .bindPopup(`
// //       <div style="text-align: center; padding: 5px;">
// //         <strong>Your Location</strong><br>
// //         <small>Service Area: 4km radius</small>
// //       </div>
// //     `);

// //     // Add circle to show 4km radius
// //     const radiusCircle = window.L.circle([location.lat, location.lng], {
// //       color: '#4F46E5',
// //       fillColor: '#4F46E5',
// //       fillOpacity: 0.1,
// //       radius: 4000 // 4km in meters
// //     }).addTo(map);

// //     leafletMapRef.current = map;
// //     providerMarkerRef.current = providerMarker;
// //     radiusCircleRef.current = radiusCircle;
// //   };

// //   // Function to add request markers to map
// //   const addRequestMarkersToMap = () => {
// //     if (!leafletMapRef.current || !providerLocation || !window.L) return;

// //     // Clear existing request markers
// //     requestMarkersRef.current.forEach(marker => {
// //       leafletMapRef.current.removeLayer(marker);
// //     });
// //     requestMarkersRef.current = [];

// //     // Add markers for current orders
// //     const allOrders = [...newOrders, ...acceptedOrders, ...completedOrders];
// //     allOrders.forEach((order) => {
// //       if (order.location && typeof order.location !== 'string') {
// //         const isAccepted = order.status === 'Accepted';
// //         const isCompleted = order.status === 'Completed';
        
// //         // Custom icon for requests
// //         const requestIcon = window.L.divIcon({
// //           className: 'custom-div-icon',
// //           html: `
// //             <div style="
// //               width: 0;
// //               height: 0;
// //               border-left: 10px solid transparent;
// //               border-right: 10px solid transparent;
// //               border-top: 15px solid ${isCompleted ? '#6B7280' : isAccepted ? '#10B981' : '#EF4444'};
// //               filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
// //               position: relative;
// //             ">
// //               <div style="
// //                 position: absolute;
// //                 top: -12px;
// //                 left: -6px;
// //                 width: 12px;
// //                 height: 8px;
// //                 background-color: white;
// //                 border-radius: 50%;
// //               "></div>
// //             </div>
// //           `,
// //           iconSize: [20, 15],
// //           iconAnchor: [10, 15]
// //         });

// //         const marker = window.L.marker([order.location.lat, order.location.lng], {
// //           icon: requestIcon
// //         }).addTo(leafletMapRef.current);

// //         // Create popup content
// //         const popupContent = `
// //           <div style="padding: 8px; min-width: 200px; font-family: Arial, sans-serif;">
// //             <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">
// //               ${order.issueType || order.serviceType}
// //             </h3>
// //             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
// //               <strong>Vehicle:</strong> ${order.vehicleModel} (${order.vehicleNumber || order.vehicleNo})
// //             </p>
// //             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
// //               <strong>Phone:</strong> ${order.phoneNumber || order.phone}
// //             </p>
// //             ${order.serviceAmount ? `
// //               <p style="margin: 4px 0; color: #059669; font-size: 12px; font-weight: bold;">
// //                 <strong>Amount:</strong> ₹${order.serviceAmount}
// //               </p>
// //             ` : ''}
// //             <p style="margin: 4px 0; color: ${isCompleted ? '#6b7280' : isAccepted ? '#059669' : '#dc2626'}; font-size: 12px; font-weight: bold;">
// //               <strong>Status:</strong> ${order.status}
// //             </p>
// //             <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 11px;">
// //               📍 ${getOrderDistance(order)}
// //             </p>
// //             ${order.notes ? `
// //               <p style="margin: 4px 0; color: #6b7280; font-size: 11px;">
// //                 <strong>Notes:</strong> ${order.notes}
// //               </p>
// //             ` : ''}
// //           </div>
// //         `;

// //         marker.bindPopup(popupContent);
// //         requestMarkersRef.current.push(marker);
// //       }
// //     });
// //   };

// //   // Function to show notification
// //   const showNotification = (title: string, body: string) => {
// //     if ("Notification" in window && notificationPermission === "granted") {
// //       new Notification(title, {
// //         body,
// //         icon: "/favicon.ico",
// //         tag: "new-order",
// //       });
// //     }
// //   };

// //   // Function to play notification sound (optional)
// //   const playNotificationSound = () => {
// //     try {
// //       const audio = new Audio("/notification-sound.mp3");
// //       audio.play().catch(e => console.log("Could not play notification sound:", e));
// //     } catch (error) {
// //       console.log("Notification sound not available");
// //     }
// //   };

// //   // Helper function to update payment status (for future use with payment gateway)
// //   const updatePaymentStatus = async (
// //     paymentDocId: string, 
// //     newStatus: 'completed' | 'failed' | 'cancelled',
// //     paymentDetails?: {
// //       checkoutSessionId?: string;
// //       paymentIntentId?: string;
// //       paymentMethod?: string;
// //       paymentGateway?: string;
// //       transactionFee?: number;
// //       gatewayTransactionId?: string;
// //     }
// //   ) => {
// //     try {
// //       const paymentRef = doc(db, "payments", paymentDocId); // Changed from "payment" to "payments"
      
// //       const updateData: any = {
// //         status: newStatus,
// //         updatedAt: Timestamp.now()
// //       };

// //       // Add completion timestamp if payment is completed
// //       if (newStatus === 'completed') {
// //         updateData.completedAt = Timestamp.now();
// //       }

// //       // Add payment gateway details if provided
// //       if (paymentDetails) {
// //         if (paymentDetails.checkoutSessionId) updateData.checkoutSessionId = paymentDetails.checkoutSessionId;
// //         if (paymentDetails.paymentIntentId) updateData.paymentIntentId = paymentDetails.paymentIntentId;
// //         if (paymentDetails.paymentMethod) updateData.paymentMethod = paymentDetails.paymentMethod;
// //         if (paymentDetails.paymentGateway) updateData.paymentGateway = paymentDetails.paymentGateway;
// //         if (paymentDetails.transactionFee) updateData.transactionFee = paymentDetails.transactionFee;
// //         if (paymentDetails.gatewayTransactionId) updateData.gatewayTransactionId = paymentDetails.gatewayTransactionId;
// //       }

// //       // Update status history
// //       const currentDoc = await getDoc(paymentRef);
// //       if (currentDoc.exists()) {
// //         const currentData = currentDoc.data();
// //         const statusHistory = currentData.statusHistory || [];
        
// //         statusHistory.push({
// //           status: newStatus,
// //           timestamp: Timestamp.now(),
// //           note: `Payment ${newStatus}${paymentDetails?.paymentMethod ? ` via ${paymentDetails.paymentMethod}` : ''}`
// //         });
        
// //         updateData.statusHistory = statusHistory;
// //       }

// //       await updateDoc(paymentRef, updateData);
// //       console.log(`Payment ${paymentDocId} status updated to ${newStatus}`);

// //     } catch (error) {
// //       console.error("Error updating payment status:", error);
// //       throw error;
// //     }
// //   };

// //   // Enhanced handleCompleteOrder function with comprehensive payment data
// //   const handleCompleteOrder = async (orderId: string) => {
// //     try {
// //       // First, get the order details from both arrays
// //       const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
      
// //       if (!orderToComplete) {
// //         setMessage("Error: Order not found in current orders list.");
// //         setTimeout(() => setMessage(""), 5000);
// //         return;
// //       }

// //       // Check if serviceAmount exists
// //       if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
// //         setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
// //         setTimeout(() => setMessage(""), 5000);
// //         return;
// //       }

// //       console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);

// //       // Create simplified payment document to match your DB structure
// //       const paymentData = {
// //         amount: orderToComplete.serviceAmount,
// //         checkoutSessionId: "", // Will be populated by payment gateway
// //         convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2), // Approximate INR to USD conversion
// //         createdAt: Timestamp.now(),
// //         currency: "USD", // Matching your example
// //         provider: `p_${orderId.slice(-6)}`,
// //         service: Array.isArray(orderToComplete.issueType) 
// //           ? orderToComplete.issueType[0] 
// //           : (orderToComplete.issueType || orderToComplete.serviceType || "fuel"),
// //         status: "pending", // Will be updated to "paid" when payment is completed
// //         userId: orderToComplete.uid || "guest"
// //       };

// //       console.log("Creating payment document:", paymentData);

// //       // Add to payments collection instead of payment collection
// //       const paymentDocRef = await addDoc(collection(db, "payments"), paymentData);
// //       console.log("Payment document created with ID:", paymentDocRef.id);

// //       // Then update the order status to "Completed"
// //       const orderRef = doc(db, "requests", orderId);
// //       await updateDoc(orderRef, { 
// //         status: "Completed",
// //         completedAt: Timestamp.now(),
// //         paymentDocId: paymentDocRef.id, // Store reference to payment document
// //         finalAmount: orderToComplete.serviceAmount
// //       });

// //       console.log("Order status updated to completed");

// //       // Optional: Create a notification document for the customer
// //       try {
// //         await addDoc(collection(db, "notifications"), {
// //           userId: orderToComplete.uid || "guest",
// //           type: "service_completed",
// //           title: "Service Completed",
// //           message: `Your ${orderToComplete.issueType || orderToComplete.serviceType} service has been completed. Payment of ₹${orderToComplete.serviceAmount} is required.`,
// //           orderId: orderId,
// //           paymentDocId: paymentDocRef.id,
// //           read: false,
// //           createdAt: Timestamp.now()
// //         });
// //         console.log("Customer notification created");
// //       } catch (notificationError) {
// //         console.log("Failed to create notification:", notificationError);
// //         // Don't fail the main operation if notification creation fails
// //       }

// //       setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
      
// //       setTimeout(() => setMessage(""), 4000);

// //     } catch (error) {
// //       console.error("Error completing order and creating payment:", error);
// //       console.error("Error details:", error.message);
      
// //       // More specific error messages
// //       if (error.code === 'permission-denied') {
// //         setMessage("Error: Permission denied. Please check your database access permissions.");
// //       } else if (error.code === 'not-found') {
// //         setMessage("Error: Database collection not found. Please check your database setup.");
// //       } else {
// //         setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
// //       }
      
// //       setTimeout(() => setMessage(""), 8000);
// //     }
// //   };

// //   useEffect(() => {
// //     // Only fetch orders if provider location is available
// //     if (!providerLocation) return;

// //     // Fetch new orders (status: "Pending")
// //     const newOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Pending"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubNew = onSnapshot(newOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
      
// //       // Check if there are new orders for notification
// //       if (previousNewOrdersCount.current > 0 && filteredOrders.length > previousNewOrdersCount.current) {
// //         const newOrdersCount = filteredOrders.length - previousNewOrdersCount.current;
// //         showNotification(
// //           "New Service Request Nearby!", 
// //           `You have ${newOrdersCount} new service request${newOrdersCount > 1 ? 's' : ''} within 4km`
// //         );
// //         playNotificationSound();
// //       }
      
// //       previousNewOrdersCount.current = filteredOrders.length;
// //       setNewOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching new orders:", error);
// //     });

// //     // Fetch accepted orders (status: "Accepted")
// //     const acceptedOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Accepted"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubAccepted = onSnapshot(acceptedOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
// //       setAcceptedOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching accepted orders:", error);
// //     });

// //     // Fetch completed orders (status: "Completed")
// //     const completedOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Completed"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubCompleted = onSnapshot(completedOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
// //       setCompletedOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching completed orders:", error);
// //     });

// //     return () => {
// //       unsubNew();
// //       unsubAccepted();
// //       unsubCompleted();
// //     };
// //   }, [providerLocation]); // Dependency on providerLocation

// //   // Update map markers when orders change
// //   useEffect(() => {
// //     if (leafletMapRef.current && providerLocation) {
// //       addRequestMarkersToMap();
// //     }
// //   }, [newOrders, acceptedOrders, completedOrders, providerLocation]);

// //   useEffect(() => {
// //     if (newOrders.length > 0 && activeTab === "new") {
// //       setMessage(`${newOrders.length} orders available within 4km radius!`);
// //     } else {
// //       setMessage("");
// //     }
// //   }, [newOrders, activeTab]);

// //   const handleAcceptOrder = (orderId: string) => {
// //     setSelectedOrderId(orderId);
// //     setShowAmountModal(true);
// //   };

// //   const handleConfirmAccept = async () => {
// //     if (!serviceAmount || parseFloat(serviceAmount) <= 0) {
// //       setMessage("Please enter a valid service amount.");
// //       setTimeout(() => setMessage(""), 3000);
// //       return;
// //     }

// //     try {
// //       const orderRef = doc(db, "requests", selectedOrderId);
// //       await updateDoc(orderRef, { 
// //         status: "Accepted",
// //         serviceAmount: parseFloat(serviceAmount),
// //         acceptedAt: Timestamp.now()
// //       });
// //       setMessage("Order accepted with amount ₹" + serviceAmount + " successfully!");
      
// //       setShowAmountModal(false);
// //       setSelectedOrderId("");
// //       setServiceAmount("");
      
// //       setTimeout(() => setMessage(""), 3000);
// //     } catch (error) {
// //       console.error("Error accepting order:", error);
// //       setMessage("Failed to accept order.");
      
// //       setTimeout(() => setMessage(""), 5000);
// //     }
// //   };

// //   const handleCancelAccept = () => {
// //     setShowAmountModal(false);
// //     setSelectedOrderId("");
// //     setServiceAmount("");
// //   };

// //   const handleViewDetails = (orderId: string) => {
// //     router.push(`/provider/dashboard/accepted/${orderId}`);
// //   };

// //   // Helper function to format timestamp for display
// //   const formatTimestamp = (timestamp: Timestamp) => {
// //     const date = timestamp.toDate();
// //     const now = new Date();
// //     const diffMs = now.getTime() - date.getTime();
// //     const diffMins = Math.floor(diffMs / 60000);
// //     const diffHours = Math.floor(diffMs / 3600000);
// //     const diffDays = Math.floor(diffMs / 86400000);

// //     if (diffMins < 1) return "Just now";
// //     if (diffMins < 60) return `${diffMins}m ago`;
// //     if (diffHours < 24) return `${diffHours}h ago`;
// //     if (diffDays < 7) return `${diffDays}d ago`;
    
// //     return date.toLocaleDateString();
// //   };

// //   // Helper function to calculate and display distance
// //   const getOrderDistance = (order: Order): string => {
// //     if (!providerLocation || !order.location || typeof order.location === 'string') {
// //       return "";
// //     }
    
// //     const distance = calculateDistance(
// //       providerLocation.lat,
// //       providerLocation.lng,
// //       order.location.lat,
// //       order.location.lng
// //     );
    
// //     return distance < 1 ? `${Math.round(distance * 1000)}m away` : `${distance.toFixed(1)}km away`;
// //   };

// //   const ordersToShow = activeTab === "new" ? newOrders : 
// //                        activeTab === "accepted" ? acceptedOrders : 
// //                        completedOrders;

// //   // Location step component
// //   if (showLocationStep) {
// //     return (
// //       <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
// //         <Header />
// //         <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
// //           <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
// //             <div className="mb-6">
// //               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full">
// //                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                 </svg>
// //               </div>
// //               <h2 className="mb-2 text-2xl font-bold text-gray-800">Enable Location Access</h2>
// //               <p className="mb-6 text-gray-600">
// //                 We need your location to show service requests within 4km radius from your area.
// //               </p>
// //             </div>
            
// //             {locationError && (
// //               <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
// //                 {locationError}
// //               </div>
// //             )}
            
// //             <button
// //               onClick={fetchLocation}
// //               disabled={isLocationLoading}
// //               className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isLocationLoading ? (
// //                 <>
// //                   <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
// //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                   </svg>
// //                   Fetching Location...
// //                 </>
// //               ) : (
// //                 <>
// //                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                   </svg>
// //                   Fetch My Location
// //                 </>
// //               )}
// //             </button>
            
// //             <p className="mt-4 text-xs text-gray-500">
// //               Your location will be used only to filter nearby service requests and will not be shared with customers.
// //             </p>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   const renderOrderList = () => {
// //     if (ordersToShow.length === 0) {
// //       return (
// //         <div className="py-8 text-center">
// //           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
// //             <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
// //             </svg>
// //           </div>
// //           <p className="text-lg text-gray-500">
// //             {activeTab === "new"
// //               ? "No new orders within 4km radius at the moment."
// //               : activeTab === "accepted" 
// //               ? "No accepted orders within 4km radius."
// //               : "No completed orders within 4km radius."}
// //           </p>
// //           <p className="mt-2 text-sm text-gray-400">
// //             Orders from customers within 4km of your location will appear here.
// //           </p>
// //         </div>
// //       );
// //     }
    
// //     return (
// //       <ul className="space-y-4">
// //         {ordersToShow.map((order) => (
// //           <li
// //             key={order.id}
// //             className="flex flex-col items-start justify-between p-4 transition-transform duration-200 border border-gray-200 rounded-lg bg-gray-50 sm:p-6 sm:flex-row sm:items-center hover:shadow-md"
// //           >
// //             <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
// //               <div className="flex items-center justify-between mb-2">
// //                 <p className="text-lg font-bold">
// //                   Service:{" "}
// //                   <span className="text-blue-600">
// //                     {order.issueType || order.serviceType}
// //                   </span>
// //                 </p>
// //                 <div className="text-right">
// //                   <span className="block text-xs text-gray-400">
// //                     {formatTimestamp(order.createdAt)}
// //                   </span>
// //                   <span className="text-xs font-semibold text-green-600">
// //                     {getOrderDistance(order)}
// //                   </span>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-600">
// //                 Location:{" "}
// //                 {!order.location
// //                   ? "Not specified"
// //                   : typeof order.location === "string"
// //                   ? order.location
// //                   : `${order.location.lat}, ${order.location.lng}`}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 Phone: {order.phoneNumber || order.phone}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 Vehicle: {order.vehicleNumber || order.vehicleNo} ({order.vehicleModel})
// //               </p>
// //               {order.notes && (
// //                 <p className="text-sm text-gray-600">Notes: {order.notes}</p>
// //               )}
// //               {order.serviceAmount && activeTab === "accepted" && (
// //                 <p className="text-sm font-semibold text-green-600">
// //                   Service Amount: ₹{order.serviceAmount}
// //                 </p>
// //               )}
// //             </div>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => handleViewDetails(order.id)}
// //                 className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
// //               >
// //                 View Details
// //               </button>
// //               {activeTab === "new" && (
// //                 <button
// //                   onClick={() => handleAcceptOrder(order.id)}
// //                   className="px-4 py-2 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700"
// //                 >
// //                   Accept
// //                 </button>
// //               )}
// //               {activeTab === "accepted" && (
// //                 <button
// //                   onClick={() => handleCompleteOrder(order.id)}
// //                   className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700"
// //                 >
// //                   Work Done
// //                 </button>
// //               )}
// //               {activeTab === "completed" && (
// //                 <div className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
// //                   ✅ Completed
// //                 </div>
// //               )}
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     );
// //   };

// //   return (
// //     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
// //       <Header />
      
// //       {/* Location info bar */}
// //       <div className="p-3 border-b border-blue-200 bg-blue-50">
// //         <div className="flex items-center justify-between max-w-6xl mx-auto">
// //           <div className="flex items-center space-x-2">
// //             <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //             </svg>
// //             <span className="text-sm text-blue-800">
// //               Showing orders within 4km radius
// //             </span>
// //           </div>
// //           <button
// //             onClick={() => setShowLocationStep(true)}
// //             className="text-xs text-blue-600 underline hover:text-blue-800"
// //           >
// //             Change Location
// //           </button>
// //         </div>
// //       </div>

// //       {/* Map Section */}
// //       <div className="relative w-full bg-gray-200 h-80">
// //         <div ref={mapRef} className="w-full h-full"></div>
// //         {!leafletMapRef.current && (
// //           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
// //             <div className="text-center">
// //               <div className="w-8 h-8 mx-auto mb-2 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
// //               <p className="text-sm text-gray-600">Loading map...</p>
// //             </div>
// //           </div>
// //         )}
        
// //         {/* Map Legend */}
// //         <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-xs z-[1000]">
// //           <h4 className="mb-2 font-semibold text-gray-800">Legend</h4>
// //           <div className="space-y-2">
// //             <div className="flex items-center space-x-2">
// //               <div className="w-4 h-4 bg-indigo-600 border-2 border-white rounded-full shadow-sm"></div>
// //               <span className="text-gray-600">Your Location</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-500"></div>
// //               <span className="ml-1 text-gray-600">New Requests</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
// //               <span className="ml-1 text-gray-600">Accepted Requests</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-3 h-3 bg-indigo-100 border border-indigo-600 rounded-full"></div>
// //               <span className="text-gray-600">4km Service Area</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Map Controls */}
// //         <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 z-[1000]">
// //           <button
// //             onClick={() => {
// //               if (leafletMapRef.current && providerLocation) {
// //                 leafletMapRef.current.setView([providerLocation.lat, providerLocation.lng], 13);
// //               }
// //             }}
// //             className="flex items-center px-2 py-1 space-x-1 text-xs text-gray-600 hover:text-gray-800"
// //             title="Center map on your location"
// //           >
// //             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //             </svg>
// //             <span>Center</span>
// //           </button>
// //         </div>
// //       </div>

// //       <div className="flex justify-center mt-2">
// //         <button
// //           onClick={() => setActiveTab("new")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "new"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           New Orders
// //           {newOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
// //               {newOrders.length}
// //             </span>
// //           )}
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("accepted")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "accepted"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           Accepted Orders
// //           {acceptedOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
// //               {acceptedOrders.length}
// //             </span>
// //           )}
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("completed")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "completed"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           Completed
// //           {completedOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-gray-500 rounded-full">
// //               {completedOrders.length}
// //             </span>
// //           )}
// //         </button>
// //       </div>
      
// //       {message && (
// //         <div
// //           className={`p-3 text-center mt-2 ${
// //             message.includes("Error") || message.includes("Failed")
// //               ? "bg-red-100 text-red-700"
// //               : "bg-green-100 text-green-700"
// //           }`}
// //         >
// //           {message}
// //         </div>
// //       )}
      
// //       <main className="w-full max-w-6xl px-2 pb-20 mx-auto mt-4 sm:px-4">
// //         {renderOrderList()}
// //       </main>
      
// //       <div className="fixed bottom-0 w-full">
// //         <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
// //       </div>

// //       {/* Amount Input Modal */}
// //       {showAmountModal && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
// //           <div className="w-full max-w-md p-6 bg-white rounded-lg">
// //             <h3 className="mb-4 text-lg font-bold text-gray-800">
// //               Enter Service Amount
// //             </h3>
// //             <p className="mb-4 text-sm text-gray-600">
// //               Please enter the amount you would charge for this service:
// //             </p>
// //             <div className="mb-6">
// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Service Amount (₹)
// //               </label>
// //               <input
// //                 type="number"
// //                 value={serviceAmount}
// //                 onChange={(e) => setServiceAmount(e.target.value)}
// //                 placeholder="Enter amount..."
// //                 min="0"
// //                 step="0.01"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
// //                 autoFocus
// //               />
// //             </div>
// //             <div className="flex space-x-3">
// //               <button
// //                 onClick={handleCancelAccept}
// //                 className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmAccept}
// //                 className="flex-1 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
// //                 disabled={!serviceAmount || parseFloat(serviceAmount) <= 0}
// //               >
// //                 Accept Order
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Helper functions for querying payment data (export these if needed in other components)
// // export const getPaymentsByProvider = async (providerId: string) => {
// //   const paymentsQuery = query(
// //     collection(db, "payments"), // Changed from "payment" to "payments"
// //     where("providerId", "==", providerId),
// //     orderBy("createdAt", "desc")
// //   );
  
// //   const snapshot = await getDocs(paymentsQuery);
// //   return snapshot.docs.map(doc => ({
// //     id: doc.id,
// //     ...doc.data()
// //   }));
// // };

// // export const getPaymentsByCustomer = async (customerId: string) => {
// //   const paymentsQuery = query(
// //     collection(db, "payments"), // Changed from "payment" to "payments"
// //     where("customerId", "==", customerId),
// //     orderBy("createdAt", "desc")
// //   );
  
// //   const snapshot = await getDocs(paymentsQuery);
// //   return snapshot.docs.map(doc => ({
// //     id: doc.id,
// //     ...doc.data()
// //   }));
// // };

// // export const getPendingPayments = async () => {
// //   const paymentsQuery = query(
// //     collection(db, "payments"), // Changed from "payment" to "payments"
// //     where("status", "==", "pending"),
// //     orderBy("createdAt", "desc")
// //   );
  
// //   const snapshot = await getDocs(paymentsQuery);
// //   return snapshot.docs.map(doc => ({
// //     id: doc.id,
// //     ...doc.data()
// //   }));
// // };

// // export default DashboardPage;





// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import Header from "@/components/Header";
// // import BottomNav from "@/components/admin/BottomNav";
// // import { useRouter } from "next/navigation";
// // import { db } from "@/lib/firebaseConfig";
// // import {
// //   collection,
// //   onSnapshot,
// //   query,
// //   where,
// //   updateDoc,
// //   doc,
// //   orderBy,
// //   Timestamp,
// //   addDoc,
// // } from "firebase/firestore";

// // // Define a type for your data with a more specific timestamp type
// // // The 'provider' fields were added here based on the user's second code snippet.
// // interface Order {
// //   id: string;
// //   issueType: string;
// //   serviceType?: string;
// //   location: string | { lat: number; lng: number } | null;
// //   phoneNumber: string;
// //   phone?: string;
// //   vehicleNumber: string;
// //   vehicleNo?: string;
// //   vehicleModel: string;
// //   notes?: string;
// //   status: "Pending" | "Accepted" | "Completed";
// //   createdAt: Timestamp;
// //   serviceAmount?: number;
// //   providerEmail?: string;
// //   providerName?: string;
// //   providerPhone?: string;
// // }

// // interface ProviderLocation {
// //   lat: number;
// //   lng: number;
// // }

// // // Leaflet types
// // declare global {
// //   interface Window {
// //     L: any;
// //   }
// // }

// // const DashboardPage: React.FC = () => {
// //   const router = useRouter();
// //   const [newOrders, setNewOrders] = useState<Order[]>([]);
// //   const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
// //   const [completedOrders, setCompletedOrders] = useState<Order[]>([]);
// //   const [activeTab, setActiveTab] = useState("new");
// //   const [message, setMessage] = useState("");
  
// //   // Location states
// //   const [providerLocation, setProviderLocation] = useState<ProviderLocation | null>(null);
// //   const [isLocationLoading, setIsLocationLoading] = useState(false);
// //   const [locationError, setLocationError] = useState("");
// //   const [showLocationStep, setShowLocationStep] = useState(true);
  
// //   // Map reference
// //   const mapRef = useRef<HTMLDivElement>(null);
// //   const leafletMapRef = useRef<any>(null);
// //   const providerMarkerRef = useRef<any>(null);
// //   const requestMarkersRef = useRef<any[]>([]);
// //   const radiusCircleRef = useRef<any>(null);
  
// //   // For amount input modal
// //   const [showAmountModal, setShowAmountModal] = useState(false);
// //   const [selectedOrderId, setSelectedOrderId] = useState<string>("");
// //   const [serviceAmount, setServiceAmount] = useState<string>("");
  
// //   // For notification functionality
// //   const previousNewOrdersCount = useRef<number>(0);
// //   const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default");

// //   // Placeholder for provider details. In a real application, you would get this
// //   // from an authentication context (e.g., Firebase Auth)
// //   const providerInfo = {
// //     email: "sakshishetyecmpn@gmail.com", 
// //     name: "Sakshi Shetye",
// //     phone: "9876543210",
// //   };

// //   // Load Leaflet CSS and JS
// //   useEffect(() => {
// //     if (!document.querySelector('link[href*="leaflet"]')) {
// //       const link = document.createElement('link');
// //       link.rel = 'stylesheet';
// //       link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
// //       link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
// //       link.crossOrigin = '';
// //       document.head.appendChild(link);
// //     }

// //     if (!window.L) {
// //       const script = document.createElement('script');
// //       script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
// //       script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
// //       script.crossOrigin = '';
// //       script.onload = () => {
// //         console.log('Leaflet loaded successfully');
// //       };
// //       document.head.appendChild(script);
// //     }
// //   }, []);

// //   // Request notification permission on component mount
// //   useEffect(() => {
// //     if ("Notification" in window) {
// //       if (Notification.permission === "default") {
// //         Notification.requestPermission().then((permission) => {
// //           setNotificationPermission(permission);
// //         });
// //       } else {
// //         setNotificationPermission(Notification.permission);
// //       }
// //     }
// //   }, []);

// //   // Function to calculate distance between two points using Haversine formula
// //   const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
// //     const R = 6371; // Radius of the Earth in kilometers
// //     const dLat = (lat2 - lat1) * Math.PI / 180;
// //     const dLng = (lng2 - lng1) * Math.PI / 180;
// //     const a = 
// //       Math.sin(dLat/2) * Math.sin(dLat/2) +
// //       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng/2) * Math.sin(dLng/2);
// //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
// //     const distance = R * c; // Distance in kilometers
// //     return distance;
// //   };

// //   // Function to filter orders by location (within 4km radius)
// //   const filterOrdersByLocation = (orders: Order[]): Order[] => {
// //     if (!providerLocation) return orders;
    
// //     return orders.filter(order => {
// //       if (!order.location || typeof order.location === 'string') return false;
      
// //       const distance = calculateDistance(
// //         providerLocation.lat,
// //         providerLocation.lng,
// //         order.location.lat,
// //         order.location.lng
// //       );
      
// //       return distance <= 4; // 4km radius
// //     });
// //   };

// //   // Function to fetch provider location
// //   const fetchLocation = () => {
// //     setIsLocationLoading(true);
// //     setLocationError("");

// //     if (!navigator.geolocation) {
// //       setLocationError("Geolocation is not supported by this browser.");
// //       setIsLocationLoading(false);
// //       return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const location = {
// //           lat: position.coords.latitude,
// //           lng: position.coords.longitude
// //         };
// //         setProviderLocation(location);
// //         setIsLocationLoading(false);
// //         setShowLocationStep(false);
// //         initializeMap(location);
// //       },
// //       (error) => {
// //         let errorMessage = "Unable to retrieve your location.";
// //         switch (error.code) {
// //           case error.PERMISSION_DENIED:
// //             errorMessage = "Location access denied. Please enable location permissions.";
// //             break;
// //           case error.POSITION_UNAVAILABLE:
// //             errorMessage = "Location information is unavailable.";
// //             break;
// //           case error.TIMEOUT:
// //             errorMessage = "Location request timed out.";
// //             break;
// //         }
// //         setLocationError(errorMessage);
// //         setIsLocationLoading(false);
// //       },
// //       {
// //         enableHighAccuracy: true,
// //         timeout: 10000,
// //         maximumAge: 600000 // 10 minutes
// //       }
// //     );
// //   };

// //   // Initialize Leaflet Map
// //   const initializeMap = (location: ProviderLocation) => {
// //     if (!window.L || !mapRef.current) {
// //       // Retry after a short delay if Leaflet isn't loaded yet
// //       setTimeout(() => initializeMap(location), 1000);
// //       return;
// //     }

// //     // Create map centered on provider location
// //     const map = window.L.map(mapRef.current).setView([location.lat, location.lng], 13);

// //     // Add OpenStreetMap tiles
// //     window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //       attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //     }).addTo(map);

// //     // Custom icon for provider location (blue)
// //     const providerIcon = window.L.divIcon({
// //       className: 'custom-div-icon',
// //       html: `
// //         <div style="
// //           background-color: #4F46E5;
// //           width: 20px;
// //           height: 20px;
// //           border-radius: 50%;
// //           border: 3px solid white;
// //           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
// //           position: relative;
// //         ">
// //           <div style="
// //             position: absolute;
// //             top: 50%;
// //             left: 50%;
// //             transform: translate(-50%, -50%);
// //             width: 8px;
// //             height: 8px;
// //             background-color: white;
// //             border-radius: 50%;
// //           "></div>
// //         </div>
// //       `,
// //       iconSize: [26, 26],
// //       iconAnchor: [13, 13]
// //     });

// //     // Add provider marker
// //     const providerMarker = window.L.marker([location.lat, location.lng], { 
// //       icon: providerIcon 
// //     })
// //     .addTo(map)
// //     .bindPopup(`
// //       <div style="text-align: center; padding: 5px;">
// //         <strong>Your Location</strong><br>
// //         <small>Service Area: 4km radius</small>
// //       </div>
// //     `);
// //     // Add circle to show 4km radius
// //     const radiusCircle = window.L.circle([location.lat, location.lng], {
// //       color: '#4F46E5',
// //       fillColor: '#4F46E5',
// //       fillOpacity: 0.1,
// //       radius: 4000 // 4km in meters
// //     }).addTo(map);

// //     leafletMapRef.current = map;
// //     providerMarkerRef.current = providerMarker;
// //     radiusCircleRef.current = radiusCircle;
// //   };

// //   // Function to add request markers to map
// //   const addRequestMarkersToMap = () => {
// //     if (!leafletMapRef.current || !providerLocation || !window.L) return;

// //     // Clear existing request markers
// //     requestMarkersRef.current.forEach(marker => {
// //       leafletMapRef.current.removeLayer(marker);
// //     });
// //     requestMarkersRef.current = [];

// //     // Add markers for current orders
// //     const allOrders = [...newOrders, ...acceptedOrders, ...completedOrders];
// //     allOrders.forEach((order) => {
// //       if (order.location && typeof order.location !== 'string') {
// //         const isAccepted = order.status === 'Accepted';
// //         const isCompleted = order.status === 'Completed';
        
// //         // Custom icon for requests
// //         const requestIcon = window.L.divIcon({
// //           className: 'custom-div-icon',
// //           html: `
// //             <div style="
// //               width: 0;
// //               height: 0;
// //               border-left: 10px solid transparent;
// //               border-right: 10px solid transparent;
// //               border-top: 15px solid ${isCompleted ? '#6B7280' : isAccepted ? '#10B981' : '#EF4444'};
// //               filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
// //               position: relative;
// //             ">
// //               <div style="
// //                 position: absolute;
// //                 top: -12px;
// //                 left: -6px;
// //                 width: 12px;
// //                 height: 8px;
// //                 background-color: white;
// //                 border-radius: 50%;
// //               "></div>
// //             </div>
// //           `,
// //           iconSize: [20, 15],
// //           iconAnchor: [10, 15]
// //         });

// //         const marker = window.L.marker([order.location.lat, order.location.lng], {
// //           icon: requestIcon
// //         }).addTo(leafletMapRef.current);

// //         // Create popup content
// //         const popupContent = `
// //           <div style="padding: 8px; min-width: 200px; font-family: Arial, sans-serif;">
// //             <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">
// //               ${order.issueType || order.serviceType}
// //             </h3>
// //             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
// //               <strong>Vehicle:</strong> ${order.vehicleModel} (${order.vehicleNumber || order.vehicleNo})
// //             </p>
// //             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
// //               <strong>Phone:</strong> ${order.phoneNumber || order.phone}
// //             </p>
// //             ${order.serviceAmount ? `
// //               <p style="margin: 4px 0; color: #059669; font-size: 12px; font-weight: bold;">
// //                 <strong>Amount:</strong> ₹${order.serviceAmount}
// //               </p>
// //             ` : ''}
// //             <p style="margin: 4px 0; color: ${isCompleted ? '#6b7280' : isAccepted ? '#059669' : '#dc2626'}; font-size: 12px; font-weight: bold;">
// //               <strong>Status:</strong> ${order.status}
// //             </p>
// //             <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 11px;">
// //               📍 ${getOrderDistance(order)}
// //             </p>
// //             ${order.notes ? `
// //               <p style="margin: 4px 0; color: #6b7280; font-size: 11px;">
// //                 <strong>Notes:</strong> ${order.notes}
// //               </p>
// //             ` : ''}
// //           </div>
// //         `;
// //         marker.bindPopup(popupContent);
// //         requestMarkersRef.current.push(marker);
// //       }
// //     });
// //   };

// //   // Function to show notification
// //   const showNotification = (title: string, body: string) => {
// //     if ("Notification" in window && notificationPermission === "granted") {
// //       new Notification(title, {
// //         body,
// //         icon: "/favicon.ico",
// //         tag: "new-order",
// //       });
// //     }
// //   };

// //   // Function to play notification sound (optional)
// //   const playNotificationSound = () => {
// //     try {
// //       const audio = new Audio("/notification-sound.mp3");
// //       audio.play().catch(e => console.log("Could not play notification sound:", e));
// //     } catch (error) {
// //       console.log("Notification sound not available");
// //     }
// //   };

// //   useEffect(() => {
// //     // Only fetch orders if provider location is available
// //     if (!providerLocation) return;

// //     // Fetch new orders (status: "Pending")
// //     const newOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Pending"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubNew = onSnapshot(newOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
      
// //       // Check if there are new orders for notification
// //       if (previousNewOrdersCount.current > 0 && filteredOrders.length > previousNewOrdersCount.current) {
// //         const newOrdersCount = filteredOrders.length - previousNewOrdersCount.current;
// //         showNotification(
// //           "New Service Request Nearby!", 
// //           `You have ${newOrdersCount} new service request${newOrdersCount > 1 ? 's' : ''} within 4km`
// //         );
// //         playNotificationSound();
// //       }
      
// //       previousNewOrdersCount.current = filteredOrders.length;
// //       setNewOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching new orders:", error);
// //     });

// //     // Fetch accepted orders (status: "Accepted")
// //     const acceptedOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Accepted"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubAccepted = onSnapshot(acceptedOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
// //       setAcceptedOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching accepted orders:", error);
// //     });

// //     // Fetch completed orders (status: "Completed") - for debugging
// //     const completedOrdersQuery = query(
// //       collection(db, "requests"),
// //       where("status", "==", "Completed"),
// //       orderBy("createdAt", "desc")
// //     );
    
// //     const unsubCompleted = onSnapshot(completedOrdersQuery, (snapshot) => {
// //       const ordersData = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Order, "id">),
// //       }));
      
// //       // Filter orders by location (4km radius)
// //       const filteredOrders = filterOrdersByLocation(ordersData);
// //       setCompletedOrders(filteredOrders);
// //     }, (error) => {
// //       console.error("Error fetching completed orders:", error);
// //     });

// //     return () => {
// //       unsubNew();
// //       unsubAccepted();
// //       unsubCompleted();
// //     };
// //   }, [providerLocation]); // Dependency on providerLocation

// //   // Update map markers when orders change
// //   useEffect(() => {
// //     if (leafletMapRef.current && providerLocation) {
// //       addRequestMarkersToMap();
// //     }
// //   }, [newOrders, acceptedOrders, completedOrders, providerLocation]);

// //   useEffect(() => {
// //     if (newOrders.length > 0 && activeTab === "new") {
// //       setMessage(`${newOrders.length} orders available within 4km radius!`);
// //     } else {
// //       setMessage("");
// //     }
// //   }, [newOrders, activeTab]);

// //   const handleCompleteOrder = async (orderId: string) => {
// //     try {
// //       // First, get the order details from both arrays
// //       const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
      
// //       if (!orderToComplete) {
// //         setMessage("Error: Order not found in current orders list.");
// //         setTimeout(() => setMessage(""), 5000);
// //         return;
// //       }

// //       // Check if serviceAmount exists
// //       if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
// //         setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
// //         setTimeout(() => setMessage(""), 5000);
// //         return;
// //       }

// //       console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);

// //       // Create payment document first (before updating order status)
// //       const paymentData = {
// //         amount: orderToComplete.serviceAmount,
// //         checkoutSessionId: "", // Empty initially, will be filled when payment is processed
// //         convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2), // Convert INR to USD cents
// //         createdAt: Timestamp.now(),
// //         currency: "USD",
// //         provider: `p_${orderId.slice(-6)}`, // Generate provider ID based on order
// //         service: Array.isArray(orderToComplete.issueType) 
// //           ? orderToComplete.issueType[0] 
// //           : (orderToComplete.issueType || orderToComplete.serviceType || "Service"),
// //         status: "pending",
// //         updatedAt: Timestamp.now(),
// //         userId: (orderToComplete as any).uid || "guest"
// //       };

// //     //   console.log("Creating payment document:", paymentData);

// //     //   // Add to payment collection first
// //     //   const paymentDocRef = await addDoc(collection(db, "payment"), paymentData);
// //     //   console.log("Payment document created with ID:", paymentDocRef.id);

// //     //   // Then update the order status to "Completed"
// //     //   const orderRef = doc(db, "requests", orderId);
// //     //   await updateDoc(orderRef, { 
// //     //     status: "Completed",
// //     //     completedAt: Timestamp.now(),
// //     //     paymentDocId: paymentDocRef.id // Store reference to payment document
// //     //   });

// //     //       const completedOrdersQuery = query(
// //     //   collection(db, "requests"),
// //     //   where("status", "==", "Completed"),
// //     //   orderBy("createdAt", "desc")
// //     // );

  
// //       const handleCompleteOrder = async (orderId: string) => {
// //         try {
// //           // First, get the order details from both arrays
// //           const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
          
// //           if (!orderToComplete) {
// //             setMessage("Error: Order not found in current orders list.");
// //             setTimeout(() => setMessage(""), 5000);
// //             return;
// //           }
    
// //           // Check if serviceAmount exists
// //           if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
// //             setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
// //             setTimeout(() => setMessage(""), 5000);
// //             return;
// //           }
    
// //           console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);
    
// //           // Create payment document first (before updating order status)
// //           const paymentData = {
// //             amount: orderToComplete.serviceAmount,
// //             checkoutSessionId: "", // Empty initially, will be filled when payment is processed
// //             convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2), // Convert INR to USD cents
// //             createdAt: Timestamp.now(),
// //             currency: "USD",
// //             provider: `p_${orderId.slice(-6)}`, // Generate provider ID based on order
// //             service: Array.isArray(orderToComplete.issueType) 
// //               ? orderToComplete.issueType[0] 
// //               : (orderToComplete.issueType || orderToComplete.serviceType || "Service"),
// //             status: "pending",
// //             updatedAt: Timestamp.now(),
// //             userId: orderToComplete.uid || "guest"
// //           };
    
// //           console.log("Creating payment document:", paymentData);
    
// //           // Add to payment collection first
// //           const paymentDocRef = await addDoc(collection(db, "payment"), paymentData);
// //           console.log("Payment document created with ID:", paymentDocRef.id);
    
// //           // Then update the order status to "Completed"
// //           const orderRef = doc(db, "requests", orderId);
// //           await updateDoc(orderRef, { 
// //             status: "Completed",
// //             completedAt: Timestamp.now(),
// //             paymentDocId: paymentDocRef.id // Store reference to payment document
// //           });
    
// //           console.log("Order status updated to completed");
    
// //           setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
          
// //           setTimeout(() => setMessage(""), 4000);
    
// //         } catch (error) {
// //           console.error("Error completing order and creating payment:", error);
// //           console.error("Error details:", error.message);
          
// //           // More specific error messages
// //           if (error.code === 'permission-denied') {
// //             setMessage("Error: Permission denied. Please check your database access permissions.");
// //           } else if (error.code === 'not-found') {
// //             setMessage("Error: Database collection not found. Please check your database setup.");
// //           } else {
// //             setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
// //           }
          
// //           setTimeout(() => setMessage(""), 8000);
// //         }
// //       };
    

// //       console.log("Order status updated to completed");

// //       setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
      
// //       setTimeout(() => setMessage(""), 4000);

// //     } catch (error) {
// //       console.error("Error completing order and creating payment:", error);
// //       console.error("Error details:", error.message);
      
// //       // More specific error messages
// //       if (error.code === 'permission-denied') {
// //         setMessage("Error: Permission denied. Please check your database access permissions.");
// //       } else if (error.code === 'not-found') {
// //         setMessage("Error: Database collection not found. Please check your database setup.");
// //       } else {
// //         setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
// //       }
      
// //       setTimeout(() => setMessage(""), 8000);
// //     }
// //   };

// //   const handleAcceptOrder = (orderId: string) => {
// //     setSelectedOrderId(orderId);
// //     setShowAmountModal(true);
// //   };

// //   const handleConfirmAccept = async () => {
// //     if (!serviceAmount || parseFloat(serviceAmount) <= 0) {
// //       setMessage("Please enter a valid service amount.");
// //       setTimeout(() => setMessage(""), 3000);
// //       return;
// //     }

// //     try {
// //       const orderRef = doc(db, "requests", selectedOrderId);
// //       await updateDoc(orderRef, { 
// //         status: "Accepted",
// //         serviceAmount: parseFloat(serviceAmount),
// //         // ✅ The following lines will be added to your code to store provider info
// //         providerEmail: providerInfo.email,
// //         providerName: providerInfo.name,
// //         providerPhone: providerInfo.phone,
// //       });
// //       setMessage("Order accepted with amount ₹" + serviceAmount + " successfully!");
      
// //       setShowAmountModal(false);
// //       setSelectedOrderId("");
// //       setServiceAmount("");
      
// //       setTimeout(() => setMessage(""), 3000);
// //     } catch (error) {
// //       console.error("Error accepting order:", error);
// //       setMessage("Failed to accept order.");
      
// //       setTimeout(() => setMessage(""), 5000);
// //     }
// //   };

// //   const handleCancelAccept = () => {
// //     setShowAmountModal(false);
// //     setSelectedOrderId("");
// //     setServiceAmount("");
// //   };

// //   const handleViewDetails = (orderId: string) => {
// //     router.push(`/provider/dashboard/accepted/${orderId}`);
// //   };

// //   // Helper function to format timestamp for display
// //   const formatTimestamp = (timestamp: Timestamp) => {
// //     const date = timestamp.toDate();
// //     const now = new Date();
// //     const diffMs = now.getTime() - date.getTime();
// //     const diffMins = Math.floor(diffMs / 60000);
// //     const diffHours = Math.floor(diffMs / 3600000);
// //     const diffDays = Math.floor(diffMs / 86400000);

// //     if (diffMins < 1) return "Just now";
// //     if (diffMins < 60) return `${diffMins}m ago`;
// //     if (diffHours < 24) return `${diffHours}h ago`;
// //     if (diffDays < 7) return `${diffDays}d ago`;
    
// //     return date.toLocaleDateString();
// //   };

// //   // Helper function to calculate and display distance
// //   const getOrderDistance = (order: Order): string => {
// //     if (!providerLocation || !order.location || typeof order.location === 'string') {
// //       return "";
// //     }
    
// //     const distance = calculateDistance(
// //       providerLocation.lat,
// //       providerLocation.lng,
// //       order.location.lat,
// //       order.location.lng
// //     );
    
// //     return distance < 1 ? `${Math.round(distance * 1000)}m away` : `${distance.toFixed(1)}km away`;
// //   };

// //   const ordersToShow = activeTab === "new" ? newOrders : 
// //                        activeTab === "accepted" ? acceptedOrders : 
// //                        completedOrders;

// //   // Location step component
// //   if (showLocationStep) {
// //     return (
// //       <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
// //         <Header />
// //         <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
// //           <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
// //             <div className="mb-6">
// //               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full">
// //                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                 </svg>
// //               </div>
// //               <h2 className="mb-2 text-2xl font-bold text-gray-800">Enable Location Access</h2>
// //               <p className="mb-6 text-gray-600">
// //                 We need your location to show service requests within 4km radius from your area.
// //               </p>
// //             </div>
            
// //             {locationError && (
// //               <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
// //                 {locationError}
// //               </div>
// //             )}
            
// //             <button
// //               onClick={fetchLocation}
// //               disabled={isLocationLoading}
// //               className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isLocationLoading ? (
// //                 <>
// //                   <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
// //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                   </svg>
// //                   Fetching Location...
// //                 </>
// //               ) : (
// //                 <>
// //                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                   </svg>
// //                   Fetch My Location
// //                 </>
// //               )}
// //             </button>
            
// //             <p className="mt-4 text-xs text-gray-500">
// //               Your location will be used only to filter nearby service requests and will not be shared with customers.
// //             </p>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   const renderOrderList = () => {
// //     if (ordersToShow.length === 0) {
// //       return (
// //         <div className="py-8 text-center">
// //           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
// //             <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
// //             </svg>
// //           </div>
// //           <p className="text-lg text-gray-500">
// //             {activeTab === "new"
// //               ? "No new orders within 4km radius at the moment."
// //               : activeTab === "accepted" 
// //               ? "No accepted orders within 4km radius."
// //               : "No completed orders within 4km radius."}
// //           </p>
// //           <p className="mt-2 text-sm text-gray-400">
// //             Orders from customers within 4km of your location will appear here.
// //           </p>
// //         </div>
// //       );
// //     }
    
// //     return (
// //       <ul className="space-y-4">
// //         {ordersToShow.map((order) => (
// //           <li
// //             key={order.id}
// //             className="flex flex-col items-start justify-between p-4 transition-transform duration-200 border border-gray-200 rounded-lg bg-gray-50 sm:p-6 sm:flex-row sm:items-center hover:shadow-md"
// //           >
// //             <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
// //               <div className="flex items-center justify-between mb-2">
// //                 <p className="text-lg font-bold">
// //                   Service:{" "}
// //                   <span className="text-blue-600">
// //                     {order.issueType || order.serviceType}
// //                   </span>
// //                 </p>
// //                 <div className="text-right">
// //                   <span className="block text-xs text-gray-400">
// //                     {formatTimestamp(order.createdAt)}
// //                   </span>
// //                   <span className="text-xs font-semibold text-green-600">
// //                     {getOrderDistance(order)}
// //                   </span>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-600">
// //                 Location:{" "}
// //                 {!order.location
// //                   ? "Not specified"
// //                   : typeof order.location === "string"
// //                   ? order.location
// //                   : `${order.location.lat}, ${order.location.lng}`}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 Phone: {order.phoneNumber || order.phone}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 Vehicle: {order.vehicleNumber || order.vehicleNo} ({order.vehicleModel})
// //               </p>
// //               {order.notes && (
// //                 <p className="text-sm text-gray-600">Notes: {order.notes}</p>
// //               )}
// //               {order.serviceAmount && activeTab === "accepted" && (
// //                 <p className="text-sm font-semibold text-green-600">
// //                   Service Amount: ₹{order.serviceAmount}
// //                 </p>
// //               )}
// //             </div>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => handleViewDetails(order.id)}
// //                 className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
// //               >
// //                 View Details
// //               </button>
// //               {activeTab === "new" && (
// //                 <button
// //                   onClick={() => handleAcceptOrder(order.id)}
// //                   className="px-4 py-2 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700"
// //                 >
// //                   Accept
// //                 </button>
// //               )}
// //               {activeTab === "accepted" && (
// //                 <button
// //                   onClick={() => handleCompleteOrder(order.id)}
// //                   className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700"
// //                 >
// //                   Work Done
// //                 </button>
// //               )}
// //               {activeTab === "completed" && (
// //                 <div className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
// //                   ✅ Completed
// //                 </div>
// //               )}
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     );
// //   };

// //   return (
// //     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
// //       <Header />
      
// //       {/* Location info bar */}
// //       <div className="p-3 border-b border-blue-200 bg-blue-50">
// //         <div className="flex items-center justify-between max-w-6xl mx-auto">
// //           <div className="flex items-center space-x-2">
// //             <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //             </svg>
// //             <span className="text-sm text-blue-800">
// //               Showing orders within 4km radius
// //             </span>
// //           </div>
// //           <button
// //             onClick={() => setShowLocationStep(true)}
// //             className="text-xs text-blue-600 underline hover:text-blue-800"
// //           >
// //             Change Location
// //           </button>
// //         </div>
// //       </div>

// //       {/* Map Section */}
// //       <div className="relative w-full bg-gray-200 h-80">
// //         <div ref={mapRef} className="w-full h-full"></div>
// //         {!leafletMapRef.current && (
// //           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
// //             <div className="text-center">
// //               <div className="w-8 h-8 mx-auto mb-2 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
// //               <p className="text-sm text-gray-600">Loading map...</p>
// //             </div>
// //           </div>
// //         )}
        
// //         {/* Map Legend */}
// //         <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-xs z-[1000]">
// //           <h4 className="mb-2 font-semibold text-gray-800">Legend</h4>
// //           <div className="space-y-2">
// //             <div className="flex items-center space-x-2">
// //               <div className="w-4 h-4 bg-indigo-600 border-2 border-white rounded-full shadow-sm"></div>
// //               <span className="text-gray-600">Your Location</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-500"></div>
// //               <span className="ml-1 text-gray-600">New Requests</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
// //               <span className="ml-1 text-gray-600">Accepted Requests</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-3 h-3 bg-indigo-100 border border-indigo-600 rounded-full"></div>
// //               <span className="text-gray-600">4km Service Area</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Map Controls */}
// //         <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 z-[1000]">
// //           <button
// //             onClick={() => {
// //               if (leafletMapRef.current && providerLocation) {
// //                 leafletMapRef.current.setView([providerLocation.lat, providerLocation.lng], 13);
// //               }
// //             }}
// //             className="flex items-center px-2 py-1 space-x-1 text-xs text-gray-600 hover:text-gray-800"
// //             title="Center map on your location"
// //           >
// //             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //             </svg>
// //             <span>Center</span>
// //           </button>
// //         </div>
// //       </div>

// //       <div className="flex justify-center mt-2">
// //         <button
// //           onClick={() => setActiveTab("new")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "new"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           New Orders
// //           {newOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
// //               {newOrders.length}
// //             </span>
// //           )}
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("accepted")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "accepted"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           Accepted Orders
// //           {acceptedOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
// //               {acceptedOrders.length}
// //             </span>
// //           )}
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("completed")}
// //           className={`px-4 py-2 font-semibold rounded-t-lg ${
// //             activeTab === "completed"
// //               ? "bg-green-600 text-white"
// //               : "bg-gray-200 text-gray-800"
// //           }`}
// //         >
// //           Completed
// //           {completedOrders.length > 0 && (
// //             <span className="px-2 py-1 ml-2 text-xs text-white bg-gray-500 rounded-full">
// //               {completedOrders.length}
// //             </span>
// //           )}
// //         </button>
// //       </div>
      
// //       {message && (
// //         <div
// //           className={`p-3 text-center mt-2 ${
// //             message.includes("Error") || message.includes("Failed")
// //               ? "bg-red-100 text-red-700"
// //               : "bg-green-100 text-green-700"
// //           }`}
// //         >
// //           {message}
// //         </div>
// //       )}
      
// //       <main className="w-full max-w-6xl px-2 pb-20 mx-auto mt-4 sm:px-4">
// //         {renderOrderList()}
// //       </main>
      
// //       <div className="fixed bottom-0 w-full">
// //         <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
// //       </div>

// //       {/* Amount Input Modal */}
// //       {showAmountModal && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
// //           <div className="w-full max-w-md p-6 bg-white rounded-lg">
// //             <h3 className="mb-4 text-lg font-bold text-gray-800">
// //               Enter Service Amount
// //             </h3>
// //             <p className="mb-4 text-sm text-gray-600">
// //               Please enter the amount you would charge for this service:
// //             </p>
// //             <div className="mb-6">
// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Service Amount (₹)
// //               </label>
// //               <input
// //                 type="number"
// //                 value={serviceAmount}
// //                 onChange={(e) => setServiceAmount(e.target.value)}
// //                 placeholder="Enter amount..."
// //                 min="0"
// //                 step="0.01"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
// //                 autoFocus
// //               />
// //             </div>
// //             <div className="flex space-x-3">
// //               <button
// //                 onClick={handleCancelAccept}
// //                 className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmAccept}
// //                 className="flex-1 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
// //                 disabled={!serviceAmount || parseFloat(serviceAmount) <= 0}
// //               >
// //                 Accept Order
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DashboardPage;





// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";
// import { useRouter } from "next/navigation";
// import { db, auth } from "@/lib/firebaseConfig";
// import {
//   collection,
//   onSnapshot,
//   query,
//   where,
//   updateDoc,
//   doc,
//   orderBy,
//   Timestamp,
//   addDoc,
// } from "firebase/firestore";

// // Define a type for your data with a more specific timestamp type
// interface Order {
//   id: string;
//   issueType: string;
//   serviceType?: string;
//   location: string | { lat: number; lng: number } | null;
//   phoneNumber: string;
//   phone?: string;
//   vehicleNumber: string;
//   vehicleNo?: string;
//   vehicleModel: string;
//   notes?: string;
//   status: "Pending" | "Accepted" | "Completed";
//   createdAt: Timestamp;
//   serviceAmount?: number;
//   uid?: string;
// }

// interface ProviderLocation {
//   lat: number;
//   lng: number;
// }

// // Leaflet types
// declare global {
//   interface Window {
//     L: any;
//   }
// }

// const DashboardPage: React.FC = () => {
//   const router = useRouter();
//   const [newOrders, setNewOrders] = useState<Order[]>([]);
//   const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
//   const [completedOrders, setCompletedOrders] = useState<Order[]>([]);
//   const [activeTab, setActiveTab] = useState("new");
//   const [message, setMessage] = useState("");
  
//   // Location states
//   const [providerLocation, setProviderLocation] = useState<ProviderLocation | null>(null);
//   const [isLocationLoading, setIsLocationLoading] = useState(false);
//   const [locationError, setLocationError] = useState("");
//   const [showLocationStep, setShowLocationStep] = useState(true);
  
//   // Map reference
//   const mapRef = useRef<HTMLDivElement>(null);
//   const leafletMapRef = useRef<any>(null);
//   const providerMarkerRef = useRef<any>(null);
//   const requestMarkersRef = useRef<any[]>([]);
//   const radiusCircleRef = useRef<any>(null);
  
//   // For amount input modal
//   const [showAmountModal, setShowAmountModal] = useState(false);
//   const [selectedOrderId, setSelectedOrderId] = useState<string>("");
//   const [serviceAmount, setServiceAmount] = useState<string>("");
  
//   // For notification functionality
//   const previousNewOrdersCount = useRef<number>(0);
//   const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default");

//   // Load Leaflet CSS and JS
//   useEffect(() => {
//     if (!document.querySelector('link[href*="leaflet"]')) {
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
//       link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
//       link.crossOrigin = '';
//       document.head.appendChild(link);
//     }

//     if (!window.L) {
//       const script = document.createElement('script');
//       script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
//       script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
//       script.crossOrigin = '';
//       script.onload = () => {
//         console.log('Leaflet loaded successfully');
//       };
//       document.head.appendChild(script);
//     }
//   }, []);

//   // Request notification permission on component mount
//   useEffect(() => {
//     if ("Notification" in window) {
//       if (Notification.permission === "default") {
//         Notification.requestPermission().then((permission) => {
//           setNotificationPermission(permission);
//         });
//       } else {
//         setNotificationPermission(Notification.permission);
//       }
//     }
//   }, []);

//   // Function to calculate distance between two points using Haversine formula
//   const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLng = (lng2 - lng1) * Math.PI / 180;
//     const a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//       Math.sin(dLng/2) * Math.sin(dLng/2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
//   };

//   // Function to filter orders by location (within 4km radius)
//   const filterOrdersByLocation = (orders: Order[]): Order[] => {
//     if (!providerLocation) return orders;
    
//     return orders.filter(order => {
//       if (!order.location || typeof order.location === 'string') return false;
      
//       const distance = calculateDistance(
//         providerLocation.lat,
//         providerLocation.lng,
//         order.location.lat,
//         order.location.lng
//       );
      
//       return distance <= 4; // 4km radius
//     });
//   };

//   // Function to fetch provider location
//   const fetchLocation = () => {
//     setIsLocationLoading(true);
//     setLocationError("");

//     if (!navigator.geolocation) {
//       setLocationError("Geolocation is not supported by this browser.");
//       setIsLocationLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const location = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//         setProviderLocation(location);
//         setIsLocationLoading(false);
//         setShowLocationStep(false);
//         initializeMap(location);
//       },
//       (error) => {
//         let errorMessage = "Unable to retrieve your location.";
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = "Location access denied. Please enable location permissions.";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = "Location information is unavailable.";
//             break;
//           case error.TIMEOUT:
//             errorMessage = "Location request timed out.";
//             break;
//         }
//         setLocationError(errorMessage);
//         setIsLocationLoading(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 600000 // 10 minutes
//       }
//     );
//   };

//   // Initialize Leaflet Map
//   const initializeMap = (location: ProviderLocation) => {
//     if (!window.L || !mapRef.current) {
//       // Retry after a short delay if Leaflet isn't loaded yet
//       setTimeout(() => initializeMap(location), 1000);
//       return;
//     }

//     // Create map centered on provider location
//     const map = window.L.map(mapRef.current).setView([location.lat, location.lng], 13);

//     // Add OpenStreetMap tiles
//     window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Custom icon for provider location (blue)
//     const providerIcon = window.L.divIcon({
//       className: 'custom-div-icon',
//       html: `
//         <div style="
//           background-color: #4F46E5;
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           border: 3px solid white;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//           position: relative;
//         ">
//           <div style="
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             width: 8px;
//             height: 8px;
//             background-color: white;
//             border-radius: 50%;
//           "></div>
//         </div>
//       `,
//       iconSize: [26, 26],
//       iconAnchor: [13, 13]
//     });

//     // Add provider marker
//     const providerMarker = window.L.marker([location.lat, location.lng], { 
//       icon: providerIcon 
//     })
//     .addTo(map)
//     .bindPopup(`
//       <div style="text-align: center; padding: 5px;">
//         <strong>Your Location</strong><br>
//         <small>Service Area: 4km radius</small>
//       </div>
//     `);

//     // Add circle to show 4km radius
//     const radiusCircle = window.L.circle([location.lat, location.lng], {
//       color: '#4F46E5',
//       fillColor: '#4F46E5',
//       fillOpacity: 0.1,
//       radius: 4000 // 4km in meters
//     }).addTo(map);

//     leafletMapRef.current = map;
//     providerMarkerRef.current = providerMarker;
//     radiusCircleRef.current = radiusCircle;
//   };

//   // Function to add request markers to map
//   const addRequestMarkersToMap = () => {
//     if (!leafletMapRef.current || !providerLocation || !window.L) return;

//     // Clear existing request markers
//     requestMarkersRef.current.forEach(marker => {
//       leafletMapRef.current.removeLayer(marker);
//     });
//     requestMarkersRef.current = [];

//     // Add markers for current orders
//     const allOrders = [...newOrders, ...acceptedOrders, ...completedOrders];
//     allOrders.forEach((order) => {
//       if (order.location && typeof order.location !== 'string') {
//         const isAccepted = order.status === 'Accepted';
//         const isCompleted = order.status === 'Completed';
        
//         // Custom icon for requests
//         const requestIcon = window.L.divIcon({
//           className: 'custom-div-icon',
//           html: `
//             <div style="
//               width: 0;
//               height: 0;
//               border-left: 10px solid transparent;
//               border-right: 10px solid transparent;
//               border-top: 15px solid ${isCompleted ? '#6B7280' : isAccepted ? '#10B981' : '#EF4444'};
//               filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
//               position: relative;
//             ">
//               <div style="
//                 position: absolute;
//                 top: -12px;
//                 left: -6px;
//                 width: 12px;
//                 height: 8px;
//                 background-color: white;
//                 border-radius: 50%;
//               "></div>
//             </div>
//           `,
//           iconSize: [20, 15],
//           iconAnchor: [10, 15]
//         });

//         const marker = window.L.marker([order.location.lat, order.location.lng], {
//           icon: requestIcon
//         }).addTo(leafletMapRef.current);

//         // Create popup content
//         const popupContent = `
//           <div style="padding: 8px; min-width: 200px; font-family: Arial, sans-serif;">
//             <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">
//               ${order.issueType || order.serviceType}
//             </h3>
//             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
//               <strong>Vehicle:</strong> ${order.vehicleModel} (${order.vehicleNumber || order.vehicleNo})
//             </p>
//             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
//               <strong>Phone:</strong> ${order.phoneNumber || order.phone}
//             </p>
//             ${order.serviceAmount ? `
//               <p style="margin: 4px 0; color: #059669; font-size: 12px; font-weight: bold;">
//                 <strong>Amount:</strong> ₹${order.serviceAmount}
//               </p>
//             ` : ''}
//             <p style="margin: 4px 0; color: ${isCompleted ? '#6b7280' : isAccepted ? '#059669' : '#dc2626'}; font-size: 12px; font-weight: bold;">
//               <strong>Status:</strong> ${order.status}
//             </p>
//             <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 11px;">
//               📍 ${getOrderDistance(order)}
//             </p>
//             ${order.notes ? `
//               <p style="margin: 4px 0; color: #6b7280; font-size: 11px;">
//                 <strong>Notes:</strong> ${order.notes}
//               </p>
//             ` : ''}
//           </div>
//         `;

//         marker.bindPopup(popupContent);
//         requestMarkersRef.current.push(marker);
//       }
//     });
//   };

//   // Function to show notification
//   const showNotification = (title: string, body: string) => {
//     if ("Notification" in window && notificationPermission === "granted") {
//       new Notification(title, {
//         body,
//         icon: "/favicon.ico",
//         tag: "new-order",
//       });
//     }
//   };

//   // Function to play notification sound (optional)
//   const playNotificationSound = () => {
//     try {
//       const audio = new Audio("/notification-sound.mp3");
//       audio.play().catch(e => console.log("Could not play notification sound:", e));
//     } catch (error) {
//       console.log("Notification sound not available");
//     }
//   };

//   useEffect(() => {
//     // Only fetch orders if provider location is available
//     if (!providerLocation) return;

//     // Fetch new orders (status: "Pending")
//     const newOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Pending"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubNew = onSnapshot(newOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
      
//       // Check if there are new orders for notification
//       if (previousNewOrdersCount.current > 0 && filteredOrders.length > previousNewOrdersCount.current) {
//         const newOrdersCount = filteredOrders.length - previousNewOrdersCount.current;
//         showNotification(
//           "New Service Request Nearby!", 
//           `You have ${newOrdersCount} new service request${newOrdersCount > 1 ? 's' : ''} within 4km`
//         );
//         playNotificationSound();
//       }
      
//       previousNewOrdersCount.current = filteredOrders.length;
//       setNewOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching new orders:", error);
//     });

//     // Fetch accepted orders (status: "Accepted")
//     const acceptedOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Accepted"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubAccepted = onSnapshot(acceptedOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
//       setAcceptedOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching accepted orders:", error);
//     });

//     // Fetch completed orders (status: "Completed") - for debugging
//     const completedOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Completed"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubCompleted = onSnapshot(completedOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
//       setCompletedOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching completed orders:", error);
//     });

//     return () => {
//       unsubNew();
//       unsubAccepted();
//       unsubCompleted();
//     };
//   }, [providerLocation]); // Dependency on providerLocation

//   // Update map markers when orders change
//   useEffect(() => {
//     if (leafletMapRef.current && providerLocation) {
//       addRequestMarkersToMap();
//     }
//   }, [newOrders, acceptedOrders, completedOrders, providerLocation]);

//   useEffect(() => {
//     if (newOrders.length > 0 && activeTab === "new") {
//       setMessage(`${newOrders.length} orders available within 4km radius!`);
//     } else {
//       setMessage("");
//     }
//   }, [newOrders, activeTab]);

//   // MODIFIED: Enhanced handleCompleteOrder with better error handling and fallback
//   const handleCompleteOrder = async (orderId: string) => {
//     try {
//       // Check authentication first
//       const currentUser = auth.currentUser;
//       if (!currentUser) {
//         setMessage("Error: You must be logged in to complete orders.");
//         setTimeout(() => setMessage(""), 5000);
//         return;
//       }

//       console.log("Current user:", currentUser.uid);

//       // Get the order details from both arrays
//       const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
      
//       if (!orderToComplete) {
//         setMessage("Error: Order not found in current orders list.");
//         setTimeout(() => setMessage(""), 5000);
//         return;
//       }

//       // Check if serviceAmount exists
//       if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
//         setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
//         setTimeout(() => setMessage(""), 5000);
//         return;
//       }

//       console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);

//       // First, mark order as completed (this should always work)
//       const orderRef = doc(db, "requests", orderId);
//       await updateDoc(orderRef, { 
//         status: "Completed",
//         completedAt: Timestamp.now(),
//         completedBy: currentUser.uid,
//         serviceAmount: orderToComplete.serviceAmount,
//         // Store payment info in the order as fallback
//         paymentPending: true,
//         paymentAmount: orderToComplete.serviceAmount
//       });

//       console.log("Order status updated to completed");

//       // Try to create payment document (this might fail due to permissions)
//       try {
//         const paymentData = {
//           amount: orderToComplete.serviceAmount,
//           checkoutSessionId: "", 
//           convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2),
//           createdAt: Timestamp.now(),
//           currency: "USD",
//           provider: currentUser.uid,
//           orderId: orderId,
//           service: Array.isArray(orderToComplete.issueType) 
//             ? orderToComplete.issueType[0] 
//             : (orderToComplete.issueType || orderToComplete.serviceType || "Service"),
//           status: "pending",
//           updatedAt: Timestamp.now(),
//           userId: orderToComplete.uid || "guest",
//           createdBy: currentUser.uid,
//           createdByEmail: currentUser.email || ""
//         };

//         console.log("Attempting to create payment document:", paymentData);
        
//         const paymentDocRef = await addDoc(collection(db, "payment"), paymentData);
        
//         // If successful, update order with payment reference
//         await updateDoc(orderRef, { 
//           paymentDocId: paymentDocRef.id,
//           paymentPending: false
//         });
        
//         console.log("Payment document created with ID:", paymentDocRef.id);
//         setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
        
//       } catch (paymentError: any) {
//         console.warn("Could not create payment document:", paymentError);
        
//         // Check if it's a permissions error
//         if (paymentError.code === 'permission-denied') {
//           console.log("Payment creation failed due to permissions. Order marked as completed with pending payment.");
//           setMessage("✅ Work completed! Payment processing is pending due to system permissions. The customer will be notified.");
//         } else {
//           console.log("Payment creation failed for other reason:", paymentError.message);
//           setMessage("✅ Work completed! Payment request will be processed separately.");
//         }
//       }
      
//       setTimeout(() => setMessage(""), 6000);

//     } catch (error: any) {
//       console.error("Error completing order:", error);
//       console.error("Error code:", error.code);
//       console.error("Error message:", error.message);
      
//       // More specific error handling
//       if (error.code === 'permission-denied') {
//         setMessage("Error: Permission denied. Please check your database access permissions.");
//       } else if (error.code === 'not-found') {
//         setMessage("Error: Order not found in database.");
//       } else if (error.code === 'unauthenticated') {
//         setMessage("Error: Authentication required. Please log in again.");
//       } else {
//         setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
//       }
      
//       setTimeout(() => setMessage(""), 8000);
//     }
//   };

//   const handleAcceptOrder = (orderId: string) => {
//     setSelectedOrderId(orderId);
//     setShowAmountModal(true);
//   };

//   const handleConfirmAccept = async () => {
//     if (!serviceAmount || parseFloat(serviceAmount) <= 0) {
//       setMessage("Please enter a valid service amount.");
//       setTimeout(() => setMessage(""), 3000);
//       return;
//     }

//     try {
//       const orderRef = doc(db, "requests", selectedOrderId);
//       await updateDoc(orderRef, { 
//         status: "Accepted",
//         serviceAmount: parseFloat(serviceAmount),
//         acceptedAt: Timestamp.now(),
//         acceptedBy: auth.currentUser?.uid
//       });
//       setMessage("Order accepted with amount ₹" + serviceAmount + " successfully!");
      
//       setShowAmountModal(false);
//       setSelectedOrderId("");
//       setServiceAmount("");
      
//       setTimeout(() => setMessage(""), 3000);
//     } catch (error) {
//       console.error("Error accepting order:", error);
//       setMessage("Failed to accept order.");
      
//       setTimeout(() => setMessage(""), 5000);
//     }
//   };

//   const handleCancelAccept = () => {
//     setShowAmountModal(false);
//     setSelectedOrderId("");
//     setServiceAmount("");
//   };

//   const handleViewDetails = (orderId: string) => {
//     router.push(`/provider/dashboard/accepted/${orderId}`);
//   };

//   // Helper function to format timestamp for display
//   const formatTimestamp = (timestamp: Timestamp) => {
//     const date = timestamp.toDate();
//     const now = new Date();
//     const diffMs = now.getTime() - date.getTime();
//     const diffMins = Math.floor(diffMs / 60000);
//     const diffHours = Math.floor(diffMs / 3600000);
//     const diffDays = Math.floor(diffMs / 86400000);

//     if (diffMins < 1) return "Just now";
//     if (diffMins < 60) return `${diffMins}m ago`;
//     if (diffHours < 24) return `${diffHours}h ago`;
//     if (diffDays < 7) return `${diffDays}d ago`;
    
//     return date.toLocaleDateString();
//   };

//   // Helper function to calculate and display distance
//   const getOrderDistance = (order: Order): string => {
//     if (!providerLocation || !order.location || typeof order.location === 'string') {
//       return "";
//     }
    
//     const distance = calculateDistance(
//       providerLocation.lat,
//       providerLocation.lng,
//       order.location.lat,
//       order.location.lng
//     );
    
//     return distance < 1 ? `${Math.round(distance * 1000)}m away` : `${distance.toFixed(1)}km away`;
//   };

//   const ordersToShow = activeTab === "new" ? newOrders : 
//                        activeTab === "accepted" ? acceptedOrders : 
//                        completedOrders;

//   // Location step component
//   if (showLocationStep) {
//     return (
//       <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
//         <Header />
//         <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
//           <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
//             <div className="mb-6">
//               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full">
//                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h2 className="mb-2 text-2xl font-bold text-gray-800">Enable Location Access</h2>
//               <p className="mb-6 text-gray-600">
//                 We need your location to show service requests within 4km radius from your area.
//               </p>
//             </div>
            
//             {locationError && (
//               <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
//                 {locationError}
//               </div>
//             )}
            
//             <button
//               onClick={fetchLocation}
//               disabled={isLocationLoading}
//               className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLocationLoading ? (
//                 <>
//                   <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Fetching Location...
//                 </>
//               ) : (
//                 <>
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   Fetch My Location
//                 </>
//               )}
//             </button>
            
//             <p className="mt-4 text-xs text-gray-500">
//               Your location will be used only to filter nearby service requests and will not be shared with customers.
//             </p>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   const renderOrderList = () => {
//     if (ordersToShow.length === 0) {
//       return (
//         <div className="py-8 text-center">
//           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
//             <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//             </svg>
//           </div>
//           <p className="text-lg text-gray-500">
//             {activeTab === "new"
//               ? "No new orders within 4km radius at the moment."
//               : activeTab === "accepted" 
//               ? "No accepted orders within 4km radius."
//               : "No completed orders within 4km radius."}
//           </p>
//           <p className="mt-2 text-sm text-gray-400">
//             Orders from customers within 4km of your location will appear here.
//           </p>
//         </div>
//       );
//     }
    
//     return (
//       <ul className="space-y-4">
//         {ordersToShow.map((order) => (
//           <li
//             key={order.id}
//             className="flex flex-col items-start justify-between p-4 transition-transform duration-200 border border-gray-200 rounded-lg bg-gray-50 sm:p-6 sm:flex-row sm:items-center hover:shadow-md"
//           >
//             <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
//               <div className="flex items-center justify-between mb-2">
//                 <p className="text-lg font-bold">
//                   Service:{" "}
//                   <span className="text-blue-600">
//                     {order.issueType || order.serviceType}
//                   </span>
//                 </p>
//                 <div className="text-right">
//                   <span className="block text-xs text-gray-400">
//                     {formatTimestamp(order.createdAt)}
//                   </span>
//                   <span className="text-xs font-semibold text-green-600">
//                     {getOrderDistance(order)}
//                   </span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Location:{" "}
//                 {!order.location
//                   ? "Not specified"
//                   : typeof order.location === "string"
//                   ? order.location
//                   : `${order.location.lat}, ${order.location.lng}`}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Phone: {order.phoneNumber || order.phone}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Vehicle: {order.vehicleNumber || order.vehicleNo} ({order.vehicleModel})
//               </p>
//               {order.notes && (
//                 <p className="text-sm text-gray-600">Notes: {order.notes}</p>
//               )}
//               {order.serviceAmount && activeTab === "accepted" && (
//                 <p className="text-sm font-semibold text-green-600">
//                   Service Amount: ₹{order.serviceAmount}
//                 </p>
//               )}
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handleViewDetails(order.id)}
//                 className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 View Details
//               </button>
//               {activeTab === "new" && (
//                 <button
//                   onClick={() => handleAcceptOrder(order.id)}
//                   className="px-4 py-2 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700"
//                 >
//                   Accept
//                 </button>
//               )}
//               {activeTab === "accepted" && (
//                 <button
//                   onClick={() => handleCompleteOrder(order.id)}
//                   className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700"
//                 >
//                   Work Done
//                 </button>
//               )}
//               {activeTab === "completed" && (
//                 <div className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
//                   ✅ Completed
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
//       <Header />
      
//       {/* Location info bar */}
//       <div className="p-3 border-b border-blue-200 bg-blue-50">
//         <div className="flex items-center justify-between max-w-6xl mx-auto">
//           <div className="flex items-center space-x-2">
//             <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             </svg>
//             <span className="text-sm text-blue-800">
//               Showing orders within 4km radius
//             </span>
//           </div>
//           <button
//             onClick={() => setShowLocationStep(true)}
//             className="text-xs text-blue-600 underline hover:text-blue-800"
//           >
//             Change Location
//           </button>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="relative w-full bg-gray-200 h-80">
//         <div ref={mapRef} className="w-full h-full"></div>
//         {!leafletMapRef.current && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//             <div className="text-center">
//               <div className="w-8 h-8 mx-auto mb-2 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
//               <p className="text-sm text-gray-600">Loading map...</p>
//             </div>
//           </div>
//         )}
        
//         {/* Map Legend */}
//         <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-xs z-[1000]">
//           <h4 className="mb-2 font-semibold text-gray-800">Legend</h4>
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-indigo-600 border-2 border-white rounded-full shadow-sm"></div>
//               <span className="text-gray-600">Your Location</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-500"></div>
//               <span className="ml-1 text-gray-600">New Requests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
//               <span className="ml-1 text-gray-600">Accepted Requests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-indigo-100 border border-indigo-600 rounded-full"></div>
//               <span className="text-gray-600">4km Service Area</span>
//             </div>
//           </div>
//         </div>

//         {/* Map Controls */}
//         <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 z-[1000]">
//           <button
//             onClick={() => {
//               if (leafletMapRef.current && providerLocation) {
//                 leafletMapRef.current.setView([providerLocation.lat, providerLocation.lng], 13);
//               }
//             }}
//             className="flex items-center px-2 py-1 space-x-1 text-xs text-gray-600 hover:text-gray-800"
//             title="Center map on your location"
//           >
//             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             </svg>
//             <span>Center</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-center mt-2">
//         <button
//           onClick={() => setActiveTab("new")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "new"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           New Orders
//           {newOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
//               {newOrders.length}
//             </span>
//           )}
//         </button>
//         <button
//           onClick={() => setActiveTab("accepted")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "accepted"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Accepted Orders
//           {acceptedOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
//               {acceptedOrders.length}
//             </span>
//           )}
//         </button>
//         <button
//           onClick={() => setActiveTab("completed")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "completed"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Completed
//           {completedOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-gray-500 rounded-full">
//               {completedOrders.length}
//             </span>
//           )}
//         </button>
//       </div>
      
//       {message && (
//         <div
//           className={`p-3 text-center mt-2 ${
//             message.includes("Error") || message.includes("Failed")
//               ? "bg-red-100 text-red-700"
//               : "bg-green-100 text-green-700"
//           }`}
//         >
//           {message}
//         </div>
//       )}
      
//       <main className="w-full max-w-6xl px-2 pb-20 mx-auto mt-4 sm:px-4">
//         {renderOrderList()}
//       </main>
      
//       <div className="fixed bottom-0 w-full">
//         <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
//       </div>

//       {/* Amount Input Modal */}
//       {showAmountModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 bg-white rounded-lg">
//             <h3 className="mb-4 text-lg font-bold text-gray-800">
//               Enter Service Amount
//             </h3>
//             <p className="mb-4 text-sm text-gray-600">
//               Please enter the amount you would charge for this service:
//             </p>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Service Amount (₹)
//               </label>
//               <input
//                 type="number"
//                 value={serviceAmount}
//                 onChange={(e) => setServiceAmount(e.target.value)}
//                 placeholder="Enter amount..."
//                 min="0"
//                 step="0.01"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 autoFocus
//               />
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 onClick={handleCancelAccept}
//                 className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmAccept}
//                 className="flex-1 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
//                 disabled={!serviceAmount || parseFloat(serviceAmount) <= 0}
//               >
//                 Accept Order
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;



"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  where,
  updateDoc,
  doc,
  orderBy,
  Timestamp,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

// Define a type for your data with a more specific timestamp type
interface Order {
  id: string;
  issueType: string;
  serviceType?: string;
  location: string | { lat: number; lng: number } | null;
  phoneNumber: string;
  phone?: string;
  vehicleNumber: string;
  vehicleNo?: string;
  vehicleModel: string;
  notes?: string;
  status: "Pending" | "Accepted" | "Completed";
  createdAt: Timestamp;
  serviceAmount?: number;
  uid?: string;
}

interface ProviderLocation {
  lat: number;
  lng: number;
}

// Leaflet types
declare global {
  interface Window {
    L: any;
  }
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [newOrders, setNewOrders] = useState<Order[]>([]);
  const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
  const [completedOrders, setCompletedOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState("new");
  const [message, setMessage] = useState("");
  
  // Location states
  const [providerLocation, setProviderLocation] = useState<ProviderLocation | null>(null);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [showLocationStep, setShowLocationStep] = useState(true);
  
  // Map reference
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const providerMarkerRef = useRef<any>(null);
  const requestMarkersRef = useRef<any[]>([]);
  const radiusCircleRef = useRef<any>(null);
  
  // For amount input modal
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [serviceAmount, setServiceAmount] = useState<string>("");
  
  // For notification functionality
  const previousNewOrdersCount = useRef<number>(0);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default");

  // Load Leaflet CSS and JS
  useEffect(() => {
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.onload = () => {
        console.log('Leaflet loaded successfully');
      };
      document.head.appendChild(script);
    }
  }, []);

  // Request notification permission on component mount
  useEffect(() => {
    if ("Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
          setNotificationPermission(permission);
        });
      } else {
        setNotificationPermission(Notification.permission);
      }
    }
  }, []);

  // Function to calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  // Function to filter orders by location (within 4km radius)
  const filterOrdersByLocation = (orders: Order[]): Order[] => {
    if (!providerLocation) return orders;
    
    return orders.filter(order => {
      if (!order.location || typeof order.location === 'string') return false;
      
      const distance = calculateDistance(
        providerLocation.lat,
        providerLocation.lng,
        order.location.lat,
        order.location.lng
      );
      
      return distance <= 4; // 4km radius
    });
  };

  // Function to fetch provider location
  const fetchLocation = () => {
    setIsLocationLoading(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      setIsLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setProviderLocation(location);
        setIsLocationLoading(false);
        setShowLocationStep(false);
        initializeMap(location);
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location permissions.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        setLocationError(errorMessage);
        setIsLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  };

  // Initialize Leaflet Map
  const initializeMap = (location: ProviderLocation) => {
    if (!window.L || !mapRef.current) {
      // Retry after a short delay if Leaflet isn't loaded yet
      setTimeout(() => initializeMap(location), 1000);
      return;
    }

    // Create map centered on provider location
    const map = window.L.map(mapRef.current).setView([location.lat, location.lng], 13);

    // Add OpenStreetMap tiles
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom icon for provider location (blue)
    const providerIcon = window.L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          background-color: #4F46E5;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });

    // Add provider marker
    const providerMarker = window.L.marker([location.lat, location.lng], { 
      icon: providerIcon 
    })
    .addTo(map)
    .bindPopup(`
      <div style="text-align: center; padding: 5px;">
        <strong>Your Location</strong><br>
        <small>Service Area: 4km radius</small>
      </div>
    `);

    // Add circle to show 4km radius
    const radiusCircle = window.L.circle([location.lat, location.lng], {
      color: '#4F46E5',
      fillColor: '#4F46E5',
      fillOpacity: 0.1,
      radius: 4000 // 4km in meters
    }).addTo(map);

    leafletMapRef.current = map;
    providerMarkerRef.current = providerMarker;
    radiusCircleRef.current = radiusCircle;
  };

  // Function to add request markers to map
  const addRequestMarkersToMap = () => {
    if (!leafletMapRef.current || !providerLocation || !window.L) return;

    // Clear existing request markers
    requestMarkersRef.current.forEach(marker => {
      leafletMapRef.current.removeLayer(marker);
    });
    requestMarkersRef.current = [];

    // Add markers for current orders
    const allOrders = [...newOrders, ...acceptedOrders, ...completedOrders];
    allOrders.forEach((order) => {
      if (order.location && typeof order.location !== 'string') {
        const isAccepted = order.status === 'Accepted';
        const isCompleted = order.status === 'Completed';
        
        // Custom icon for requests
        const requestIcon = window.L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div style="
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 15px solid ${isCompleted ? '#6B7280' : isAccepted ? '#10B981' : '#EF4444'};
              filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
              position: relative;
            ">
              <div style="
                position: absolute;
                top: -12px;
                left: -6px;
                width: 12px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
              "></div>
            </div>
          `,
          iconSize: [20, 15],
          iconAnchor: [10, 15]
        });

        const marker = window.L.marker([order.location.lat, order.location.lng], {
          icon: requestIcon
        }).addTo(leafletMapRef.current);

        // Create popup content
        const popupContent = `
          <div style="padding: 8px; min-width: 200px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">
              ${order.issueType || order.serviceType}
            </h3>
            <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
              <strong>Vehicle:</strong> ${order.vehicleModel} (${order.vehicleNumber || order.vehicleNo})
            </p>
            <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
              <strong>Phone:</strong> ${order.phoneNumber || order.phone}
            </p>
            ${order.serviceAmount ? `
              <p style="margin: 4px 0; color: #059669; font-size: 12px; font-weight: bold;">
                <strong>Amount:</strong> ₹${order.serviceAmount}
              </p>
            ` : ''}
            <p style="margin: 4px 0; color: ${isCompleted ? '#6b7280' : isAccepted ? '#059669' : '#dc2626'}; font-size: 12px; font-weight: bold;">
              <strong>Status:</strong> ${order.status}
            </p>
            <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 11px;">
              📍 ${getOrderDistance(order)}
            </p>
            ${order.notes ? `
              <p style="margin: 4px 0; color: #6b7280; font-size: 11px;">
                <strong>Notes:</strong> ${order.notes}
              </p>
            ` : ''}
          </div>
        `;

        marker.bindPopup(popupContent);
        requestMarkersRef.current.push(marker);
      }
    });
  };

  // Function to show notification
  const showNotification = (title: string, body: string) => {
    if ("Notification" in window && notificationPermission === "granted") {
      new Notification(title, {
        body,
        icon: "/favicon.ico",
        tag: "new-order",
      });
    }
  };

  // Function to play notification sound (optional)
  const playNotificationSound = () => {
    try {
      const audio = new Audio("/notification-sound.mp3");
      audio.play().catch(e => console.log("Could not play notification sound:", e));
    } catch (error) {
      console.log("Notification sound not available");
    }
  };

  // Helper function to update payment status (for future use with payment gateway)
  const updatePaymentStatus = async (
    paymentDocId: string, 
    newStatus: 'completed' | 'failed' | 'cancelled',
    paymentDetails?: {
      checkoutSessionId?: string;
      paymentIntentId?: string;
      paymentMethod?: string;
      paymentGateway?: string;
      transactionFee?: number;
      gatewayTransactionId?: string;
    }
  ) => {
    try {
      const paymentRef = doc(db, "payments", paymentDocId); // Changed from "payment" to "payments"
      
      const updateData: any = {
        status: newStatus,
        updatedAt: Timestamp.now()
      };

      // Add completion timestamp if payment is completed
      if (newStatus === 'completed') {
        updateData.completedAt = Timestamp.now();
      }

      // Add payment gateway details if provided
      if (paymentDetails) {
        if (paymentDetails.checkoutSessionId) updateData.checkoutSessionId = paymentDetails.checkoutSessionId;
        if (paymentDetails.paymentIntentId) updateData.paymentIntentId = paymentDetails.paymentIntentId;
        if (paymentDetails.paymentMethod) updateData.paymentMethod = paymentDetails.paymentMethod;
        if (paymentDetails.paymentGateway) updateData.paymentGateway = paymentDetails.paymentGateway;
        if (paymentDetails.transactionFee) updateData.transactionFee = paymentDetails.transactionFee;
        if (paymentDetails.gatewayTransactionId) updateData.gatewayTransactionId = paymentDetails.gatewayTransactionId;
      }

      // Update status history
      const currentDoc = await getDoc(paymentRef);
      if (currentDoc.exists()) {
        const currentData = currentDoc.data();
        const statusHistory = currentData.statusHistory || [];
        
        statusHistory.push({
          status: newStatus,
          timestamp: Timestamp.now(),
          note: `Payment ${newStatus}${paymentDetails?.paymentMethod ? ` via ${paymentDetails.paymentMethod}` : ''}`
        });
        
        updateData.statusHistory = statusHistory;
      }

      await updateDoc(paymentRef, updateData);
      console.log(`Payment ${paymentDocId} status updated to ${newStatus}`);

    } catch (error) {
      console.error("Error updating payment status:", error);
      throw error;
    }
  };

  // Enhanced handleCompleteOrder function with comprehensive payment data
  const handleCompleteOrder = async (orderId: string) => {
    try {
      // First, get the order details from both arrays
      const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
      
      if (!orderToComplete) {
        setMessage("Error: Order not found in current orders list.");
        setTimeout(() => setMessage(""), 5000);
        return;
      }

      // Check if serviceAmount exists
      if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
        setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
        setTimeout(() => setMessage(""), 5000);
        return;
      }

      console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);

      // Create simplified payment document to match your DB structure
      const paymentData = {
        amount: orderToComplete.serviceAmount,
        checkoutSessionId: "", // Will be populated by payment gateway
        convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2), // Approximate INR to USD conversion
        createdAt: Timestamp.now(),
        currency: "USD", // Matching your example
        provider: `p_${orderId.slice(-6)}`,
        service: Array.isArray(orderToComplete.issueType) 
          ? orderToComplete.issueType[0] 
          : (orderToComplete.issueType || orderToComplete.serviceType || "fuel"),
        status: "pending", // Will be updated to "paid" when payment is completed
        userId: orderToComplete.uid || "guest"
      };

      console.log("Creating payment document:", paymentData);

      // Add to payments collection instead of payment collection
      const paymentDocRef = await addDoc(collection(db, "payments"), paymentData);
      console.log("Payment document created with ID:", paymentDocRef.id);

      // Then update the order status to "Completed"
      const orderRef = doc(db, "requests", orderId);
      await updateDoc(orderRef, { 
        status: "Completed",
        completedAt: Timestamp.now(),
        paymentDocId: paymentDocRef.id, // Store reference to payment document
        finalAmount: orderToComplete.serviceAmount
      });

      console.log("Order status updated to completed");

      // Optional: Create a notification document for the customer
      try {
        await addDoc(collection(db, "notifications"), {
          userId: orderToComplete.uid || "guest",
          type: "service_completed",
          title: "Service Completed",
          message: `Your ${orderToComplete.issueType || orderToComplete.serviceType} service has been completed. Payment of ₹${orderToComplete.serviceAmount} is required.`,
          orderId: orderId,
          paymentDocId: paymentDocRef.id,
          read: false,
          createdAt: Timestamp.now()
        });
        console.log("Customer notification created");
      } catch (notificationError) {
        console.log("Failed to create notification:", notificationError);
        // Don't fail the main operation if notification creation fails
      }

      setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
      
      setTimeout(() => setMessage(""), 4000);

    } catch (error) {
      console.error("Error completing order and creating payment:", error);
      console.error("Error details:", error.message);
      
      // More specific error messages
      if (error.code === 'permission-denied') {
        setMessage("Error: Permission denied. Please check your database access permissions.");
      } else if (error.code === 'not-found') {
        setMessage("Error: Database collection not found. Please check your database setup.");
      } else {
        setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
      }
      
      setTimeout(() => setMessage(""), 8000);
    }
  };

  useEffect(() => {
    // Only fetch orders if provider location is available
    if (!providerLocation) return;

    // Fetch new orders (status: "Pending")
    const newOrdersQuery = query(
      collection(db, "requests"),
      where("status", "==", "Pending"),
      orderBy("createdAt", "desc")
    );
    
    const unsubNew = onSnapshot(newOrdersQuery, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Order, "id">),
      }));
      
      // Filter orders by location (4km radius)
      const filteredOrders = filterOrdersByLocation(ordersData);
      
      // Check if there are new orders for notification
      if (previousNewOrdersCount.current > 0 && filteredOrders.length > previousNewOrdersCount.current) {
        const newOrdersCount = filteredOrders.length - previousNewOrdersCount.current;
        showNotification(
          "New Service Request Nearby!", 
          `You have ${newOrdersCount} new service request${newOrdersCount > 1 ? 's' : ''} within 4km`
        );
        playNotificationSound();
      }
      
      previousNewOrdersCount.current = filteredOrders.length;
      setNewOrders(filteredOrders);
    }, (error) => {
      console.error("Error fetching new orders:", error);
    });

    // Fetch accepted orders (status: "Accepted")
    const acceptedOrdersQuery = query(
      collection(db, "requests"),
      where("status", "==", "Accepted"),
      orderBy("createdAt", "desc")
    );
    
    const unsubAccepted = onSnapshot(acceptedOrdersQuery, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Order, "id">),
      }));
      
      // Filter orders by location (4km radius)
      const filteredOrders = filterOrdersByLocation(ordersData);
      setAcceptedOrders(filteredOrders);
    }, (error) => {
      console.error("Error fetching accepted orders:", error);
    });

    // Fetch completed orders (status: "Completed")
    const completedOrdersQuery = query(
      collection(db, "requests"),
      where("status", "==", "Completed"),
      orderBy("createdAt", "desc")
    );
    
    const unsubCompleted = onSnapshot(completedOrdersQuery, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Order, "id">),
      }));
      
      // Filter orders by location (4km radius)
      const filteredOrders = filterOrdersByLocation(ordersData);
      setCompletedOrders(filteredOrders);
    }, (error) => {
      console.error("Error fetching completed orders:", error);
    });

    return () => {
      unsubNew();
      unsubAccepted();
      unsubCompleted();
    };
  }, [providerLocation]); // Dependency on providerLocation

  // Update map markers when orders change
  useEffect(() => {
    if (leafletMapRef.current && providerLocation) {
      addRequestMarkersToMap();
    }
  }, [newOrders, acceptedOrders, completedOrders, providerLocation]);

  useEffect(() => {
    if (newOrders.length > 0 && activeTab === "new") {
      setMessage(`${newOrders.length} orders available within 4km radius!`);
    } else {
      setMessage("");
    }
  }, [newOrders, activeTab]);

  const handleAcceptOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
    setShowAmountModal(true);
  };

  const handleConfirmAccept = async () => {
    if (!serviceAmount || parseFloat(serviceAmount) <= 0) {
      setMessage("Please enter a valid service amount.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      const orderRef = doc(db, "requests", selectedOrderId);
      await updateDoc(orderRef, { 
        status: "Accepted",
        serviceAmount: parseFloat(serviceAmount),
        acceptedAt: Timestamp.now()
      });
      setMessage("Order accepted with amount ₹" + serviceAmount + " successfully!");
      
      setShowAmountModal(false);
      setSelectedOrderId("");
      setServiceAmount("");
      
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error accepting order:", error);
      setMessage("Failed to accept order.");
      
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const handleCancelAccept = () => {
    setShowAmountModal(false);
    setSelectedOrderId("");
    setServiceAmount("");
  };

  const handleViewDetails = (orderId: string) => {
    router.push(`/provider/dashboard/accepted/${orderId}`);
  };

  // Helper function to format timestamp for display
  const formatTimestamp = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  };

  // Helper function to calculate and display distance
  const getOrderDistance = (order: Order): string => {
    if (!providerLocation || !order.location || typeof order.location === 'string') {
      return "";
    }
    
    const distance = calculateDistance(
      providerLocation.lat,
      providerLocation.lng,
      order.location.lat,
      order.location.lng
    );
    
    return distance < 1 ? `${Math.round(distance * 1000)}m away` : `${distance.toFixed(1)}km away`;
  };

  const ordersToShow = activeTab === "new" ? newOrders : 
                       activeTab === "accepted" ? acceptedOrders : 
                       completedOrders;

  // Location step component
  if (showLocationStep) {
    return (
      <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
        <Header />
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
            <div className="mb-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Enable Location Access</h2>
              <p className="mb-6 text-gray-600">
                We need your location to show service requests within 4km radius from your area.
              </p>
            </div>
            
            {locationError && (
              <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
                {locationError}
              </div>
            )}
            
            <button
              onClick={fetchLocation}
              disabled={isLocationLoading}
              className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLocationLoading ? (
                <>
                  <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Fetching Location...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Fetch My Location
                </>
              )}
            </button>
            
            <p className="mt-4 text-xs text-gray-500">
              Your location will be used only to filter nearby service requests and will not be shared with customers.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const renderOrderList = () => {
    if (ordersToShow.length === 0) {
      return (
        <div className="py-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p className="text-lg text-gray-500">
            {activeTab === "new"
              ? "No new orders within 4km radius at the moment."
              : activeTab === "accepted" 
              ? "No accepted orders within 4km radius."
              : "No completed orders within 4km radius."}
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Orders from customers within 4km of your location will appear here.
          </p>
        </div>
      );
    }
    
    return (
      <ul className="space-y-4">
        {ordersToShow.map((order) => (
          <li
            key={order.id}
            className="flex flex-col items-start justify-between p-4 transition-transform duration-200 border border-gray-200 rounded-lg bg-gray-50 sm:p-6 sm:flex-row sm:items-center hover:shadow-md"
          >
            <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold">
                  Service:{" "}
                  <span className="text-blue-600">
                    {order.issueType || order.serviceType}
                  </span>
                </p>
                <div className="text-right">
                  <span className="block text-xs text-gray-400">
                    {formatTimestamp(order.createdAt)}
                  </span>
                  <span className="text-xs font-semibold text-green-600">
                    {getOrderDistance(order)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Location:{" "}
                {!order.location
                  ? "Not specified"
                  : typeof order.location === "string"
                  ? order.location
                  : `${order.location.lat}, ${order.location.lng}`}
              </p>
              <p className="text-sm text-gray-600">
                Phone: {order.phoneNumber || order.phone}
              </p>
              <p className="text-sm text-gray-600">
                Vehicle: {order.vehicleNumber || order.vehicleNo} ({order.vehicleModel})
              </p>
              {order.notes && (
                <p className="text-sm text-gray-600">Notes: {order.notes}</p>
              )}
              {order.serviceAmount && activeTab === "accepted" && (
                <p className="text-sm font-semibold text-green-600">
                  Service Amount: ₹{order.serviceAmount}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewDetails(order.id)}
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
              >
                View Details
              </button>
              {activeTab === "new" && (
                <button
                  onClick={() => handleAcceptOrder(order.id)}
                  className="px-4 py-2 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700"
                >
                  Accept
                </button>
              )}
              {activeTab === "accepted" && (
                <button
                  onClick={() => handleCompleteOrder(order.id)}
                  className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700"
                >
                  Work Done
                </button>
              )}
              {activeTab === "completed" && (
                <div className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
                  ✅ Completed
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
      <Header />
      
      {/* Location info bar */}
      <div className="p-3 border-b border-blue-200 bg-blue-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-sm text-blue-800">
              Showing orders within 4km radius
            </span>
          </div>
          <button
            onClick={() => setShowLocationStep(true)}
            className="text-xs text-blue-600 underline hover:text-blue-800"
          >
            Change Location
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full bg-gray-200 h-80">
        <div ref={mapRef} className="w-full h-full"></div>
        {!leafletMapRef.current && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              <p className="text-sm text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
        
        {/* Map Legend */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-xs z-[1000]">
          <h4 className="mb-2 font-semibold text-gray-800">Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-indigo-600 border-2 border-white rounded-full shadow-sm"></div>
              <span className="text-gray-600">Your Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-500"></div>
              <span className="ml-1 text-gray-600">New Requests</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
              <span className="ml-1 text-gray-600">Accepted Requests</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-100 border border-indigo-600 rounded-full"></div>
              <span className="text-gray-600">4km Service Area</span>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 z-[1000]">
          <button
            onClick={() => {
              if (leafletMapRef.current && providerLocation) {
                leafletMapRef.current.setView([providerLocation.lat, providerLocation.lng], 13);
              }
            }}
            className="flex items-center px-2 py-1 space-x-1 text-xs text-gray-600 hover:text-gray-800"
            title="Center map on your location"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>Center</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={() => setActiveTab("new")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "new"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          New Orders
          {newOrders.length > 0 && (
            <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
              {newOrders.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("accepted")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "accepted"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Accepted Orders
          {acceptedOrders.length > 0 && (
            <span className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
              {acceptedOrders.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "completed"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Completed
          {completedOrders.length > 0 && (
            <span className="px-2 py-1 ml-2 text-xs text-white bg-gray-500 rounded-full">
              {completedOrders.length}
            </span>
          )}
        </button>
      </div>
      
      {message && (
        <div
          className={`p-3 text-center mt-2 ${
            message.includes("Error") || message.includes("Failed")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}
      
      <main className="w-full max-w-6xl px-2 pb-20 mx-auto mt-4 sm:px-4">
        {renderOrderList()}
      </main>
      
      <div className="fixed bottom-0 w-full">
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Amount Input Modal */}
      {showAmountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
            <h3 className="mb-4 text-lg font-bold text-gray-800">
              Enter Service Amount
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Please enter the amount you would charge for this service:
            </p>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Service Amount (₹)
              </label>
              <input
                type="number"
                value={serviceAmount}
                onChange={(e) => setServiceAmount(e.target.value)}
                placeholder="Enter amount..."
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleCancelAccept}
                className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAccept}
                className="flex-1 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
                disabled={!serviceAmount || parseFloat(serviceAmount) <= 0}
              >
                Accept Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper functions for querying payment data (export these if needed in other components)
export const getPaymentsByProvider = async (providerId: string) => {
  const paymentsQuery = query(
    collection(db, "payments"), // Changed from "payment" to "payments"
    where("providerId", "==", providerId),
    orderBy("createdAt", "desc")
  );
  
  const snapshot = await getDocs(paymentsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getPaymentsByCustomer = async (customerId: string) => {
  const paymentsQuery = query(
    collection(db, "payments"), // Changed from "payment" to "payments"
    where("customerId", "==", customerId),
    orderBy("createdAt", "desc")
  );
  
  const snapshot = await getDocs(paymentsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getPendingPayments = async () => {
  const paymentsQuery = query(
    collection(db, "payments"), // Changed from "payment" to "payments"
    where("status", "==", "pending"),
    orderBy("createdAt", "desc")
  );
  
  const snapshot = await getDocs(paymentsQuery);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export default DashboardPage;












// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";
// import { useRouter } from "next/navigation";
// import { db } from "@/lib/firebaseConfig";
// import {
//   collection,
//   onSnapshot,
//   query,
//   where,
//   updateDoc,
//   doc,
//   orderBy,
//   Timestamp,
//   addDoc,
// } from "firebase/firestore";

// // Define a type for your data with a more specific timestamp type
// interface Order {
//   id: string;
//   issueType: string;
//   serviceType?: string;
//   location: string | { lat: number; lng: number } | null;
//   phoneNumber: string;
//   phone?: string;
//   vehicleNumber: string;
//   vehicleNo?: string;
//   vehicleModel: string;
//   notes?: string;
//   status: "Pending" | "Accepted" | "Completed";
//   createdAt: Timestamp;
//   serviceAmount?: number;
// }

// interface ProviderLocation {
//   lat: number;
//   lng: number;
// }

// // Leaflet types
// declare global {
//   interface Window {
//     L: any;
//   }
// }

// const DashboardPage: React.FC = () => {
//   const router = useRouter();
//   const [newOrders, setNewOrders] = useState<Order[]>([]);
//   const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
//   const [completedOrders, setCompletedOrders] = useState<Order[]>([]);
//   const [activeTab, setActiveTab] = useState("new");
//   const [message, setMessage] = useState("");
  
//   // Location states
//   const [providerLocation, setProviderLocation] = useState<ProviderLocation | null>(null);
//   const [isLocationLoading, setIsLocationLoading] = useState(false);
//   const [locationError, setLocationError] = useState("");
//   const [showLocationStep, setShowLocationStep] = useState(true);
  
//   // Map reference
//   const mapRef = useRef<HTMLDivElement>(null);
//   const leafletMapRef = useRef<any>(null);
//   const providerMarkerRef = useRef<any>(null);
//   const requestMarkersRef = useRef<any[]>([]);
//   const radiusCircleRef = useRef<any>(null);
  
//   // For amount input modal
//   const [showAmountModal, setShowAmountModal] = useState(false);
//   const [selectedOrderId, setSelectedOrderId] = useState<string>("");
//   const [serviceAmount, setServiceAmount] = useState<string>("");
  
//   // For notification functionality
//   const previousNewOrdersCount = useRef<number>(0);
//   const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default");

//   // Load Leaflet CSS and JS
//   useEffect(() => {
//     if (!document.querySelector('link[href*="leaflet"]')) {
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
//       link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
//       link.crossOrigin = '';
//       document.head.appendChild(link);
//     }

//     if (!window.L) {
//       const script = document.createElement('script');
//       script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
//       script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
//       script.crossOrigin = '';
//       script.onload = () => {
//         console.log('Leaflet loaded successfully');
//       };
//       document.head.appendChild(script);
//     }
//   }, []);

//   // Request notification permission on component mount
//   useEffect(() => {
//     if ("Notification" in window) {
//       if (Notification.permission === "default") {
//         Notification.requestPermission().then((permission) => {
//           setNotificationPermission(permission);
//         });
//       } else {
//         setNotificationPermission(Notification.permission);
//       }
//     }
//   }, []);

//   // Function to calculate distance between two points using Haversine formula
//   const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLng = (lng2 - lng1) * Math.PI / 180;
//     const a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//       Math.sin(dLng/2) * Math.sin(dLng/2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
//   };

//   // Function to filter orders by location (within 4km radius)
//   const filterOrdersByLocation = (orders: Order[]): Order[] => {
//     if (!providerLocation) return orders;
    
//     return orders.filter(order => {
//       if (!order.location || typeof order.location === 'string') return false;
      
//       const distance = calculateDistance(
//         providerLocation.lat,
//         providerLocation.lng,
//         order.location.lat,
//         order.location.lng
//       );
      
//       return distance <= 4; // 4km radius
//     });
//   };

//   // Function to fetch provider location
//   const fetchLocation = () => {
//     setIsLocationLoading(true);
//     setLocationError("");

//     if (!navigator.geolocation) {
//       setLocationError("Geolocation is not supported by this browser.");
//       setIsLocationLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const location = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//         setProviderLocation(location);
//         setIsLocationLoading(false);
//         setShowLocationStep(false);
//         initializeMap(location);
//       },
//       (error) => {
//         let errorMessage = "Unable to retrieve your location.";
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = "Location access denied. Please enable location permissions.";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = "Location information is unavailable.";
//             break;
//           case error.TIMEOUT:
//             errorMessage = "Location request timed out.";
//             break;
//         }
//         setLocationError(errorMessage);
//         setIsLocationLoading(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 600000 // 10 minutes
//       }
//     );
//   };

//   // Initialize Leaflet Map
//   const initializeMap = (location: ProviderLocation) => {
//     if (!window.L || !mapRef.current) {
//       // Retry after a short delay if Leaflet isn't loaded yet
//       setTimeout(() => initializeMap(location), 1000);
//       return;
//     }

//     // Create map centered on provider location
//     const map = window.L.map(mapRef.current).setView([location.lat, location.lng], 13);

//     // Add OpenStreetMap tiles
//     window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Custom icon for provider location (blue)
//     const providerIcon = window.L.divIcon({
//       className: 'custom-div-icon',
//       html: `
//         <div style="
//           background-color: #4F46E5;
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           border: 3px solid white;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//           position: relative;
//         ">
//           <div style="
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             width: 8px;
//             height: 8px;
//             background-color: white;
//             border-radius: 50%;
//           "></div>
//         </div>
//       `,
//       iconSize: [26, 26],
//       iconAnchor: [13, 13]
//     });

//     // Add provider marker
//     const providerMarker = window.L.marker([location.lat, location.lng], { 
//       icon: providerIcon 
//     })
//     .addTo(map)
//     .bindPopup(`
//       <div style="text-align: center; padding: 5px;">
//         <strong>Your Location</strong><br>
//         <small>Service Area: 4km radius</small>
//       </div>
//     `);

//     // Add circle to show 4km radius
//     const radiusCircle = window.L.circle([location.lat, location.lng], {
//       color: '#4F46E5',
//       fillColor: '#4F46E5',
//       fillOpacity: 0.1,
//       radius: 4000 // 4km in meters
//     }).addTo(map);

//     leafletMapRef.current = map;
//     providerMarkerRef.current = providerMarker;
//     radiusCircleRef.current = radiusCircle;
//   };

//   // Function to add request markers to map
//   const addRequestMarkersToMap = () => {
//     if (!leafletMapRef.current || !providerLocation || !window.L) return;

//     // Clear existing request markers
//     requestMarkersRef.current.forEach(marker => {
//       leafletMapRef.current.removeLayer(marker);
//     });
//     requestMarkersRef.current = [];

//     // Add markers for current orders
//     const allOrders = [...newOrders, ...acceptedOrders, ...completedOrders];
//     allOrders.forEach((order) => {
//       if (order.location && typeof order.location !== 'string') {
//         const isAccepted = order.status === 'Accepted';
//         const isCompleted = order.status === 'Completed';
        
//         // Custom icon for requests
//         const requestIcon = window.L.divIcon({
//           className: 'custom-div-icon',
//           html: `
//             <div style="
//               width: 0;
//               height: 0;
//               border-left: 10px solid transparent;
//               border-right: 10px solid transparent;
//               border-top: 15px solid ${isCompleted ? '#6B7280' : isAccepted ? '#10B981' : '#EF4444'};
//               filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
//               position: relative;
//             ">
//               <div style="
//                 position: absolute;
//                 top: -12px;
//                 left: -6px;
//                 width: 12px;
//                 height: 8px;
//                 background-color: white;
//                 border-radius: 50%;
//               "></div>
//             </div>
//           `,
//           iconSize: [20, 15],
//           iconAnchor: [10, 15]
//         });

//         const marker = window.L.marker([order.location.lat, order.location.lng], {
//           icon: requestIcon
//         }).addTo(leafletMapRef.current);

//         // Create popup content
//         const popupContent = `
//           <div style="padding: 8px; min-width: 200px; font-family: Arial, sans-serif;">
//             <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">
//               ${order.issueType || order.serviceType}
//             </h3>
//             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
//               <strong>Vehicle:</strong> ${order.vehicleModel} (${order.vehicleNumber || order.vehicleNo})
//             </p>
//             <p style="margin: 4px 0; color: #6b7280; font-size: 12px;">
//               <strong>Phone:</strong> ${order.phoneNumber || order.phone}
//             </p>
//             ${order.serviceAmount ? `
//               <p style="margin: 4px 0; color: #059669; font-size: 12px; font-weight: bold;">
//                 <strong>Amount:</strong> ₹${order.serviceAmount}
//               </p>
//             ` : ''}
//             <p style="margin: 4px 0; color: ${isCompleted ? '#6b7280' : isAccepted ? '#059669' : '#dc2626'}; font-size: 12px; font-weight: bold;">
//               <strong>Status:</strong> ${order.status}
//             </p>
//             <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 11px;">
//               📍 ${getOrderDistance(order)}
//             </p>
//             ${order.notes ? `
//               <p style="margin: 4px 0; color: #6b7280; font-size: 11px;">
//                 <strong>Notes:</strong> ${order.notes}
//               </p>
//             ` : ''}
//           </div>
//         `;

//         marker.bindPopup(popupContent);
//         requestMarkersRef.current.push(marker);
//       }
//     });
//   };

//   // Function to show notification
//   const showNotification = (title: string, body: string) => {
//     if ("Notification" in window && notificationPermission === "granted") {
//       new Notification(title, {
//         body,
//         icon: "/favicon.ico",
//         tag: "new-order",
//       });
//     }
//   };

//   // Function to play notification sound (optional)
//   const playNotificationSound = () => {
//     try {
//       const audio = new Audio("/notification-sound.mp3");
//       audio.play().catch(e => console.log("Could not play notification sound:", e));
//     } catch (error) {
//       console.log("Notification sound not available");
//     }
//   };

//   useEffect(() => {
//     // Only fetch orders if provider location is available
//     if (!providerLocation) return;

//     // Fetch new orders (status: "Pending")
//     const newOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Pending"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubNew = onSnapshot(newOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
      
//       // Check if there are new orders for notification
//       if (previousNewOrdersCount.current > 0 && filteredOrders.length > previousNewOrdersCount.current) {
//         const newOrdersCount = filteredOrders.length - previousNewOrdersCount.current;
//         showNotification(
//           "New Service Request Nearby!", 
//           `You have ${newOrdersCount} new service request${newOrdersCount > 1 ? 's' : ''} within 4km`
//         );
//         playNotificationSound();
//       }
      
//       previousNewOrdersCount.current = filteredOrders.length;
//       setNewOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching new orders:", error);
//     });

//     // Fetch accepted orders (status: "Accepted")
//     const acceptedOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Accepted"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubAccepted = onSnapshot(acceptedOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
//       setAcceptedOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching accepted orders:", error);
//     });

//     // Fetch completed orders (status: "Completed") - for debugging
//     const completedOrdersQuery = query(
//       collection(db, "requests"),
//       where("status", "==", "Completed"),
//       orderBy("createdAt", "desc")
//     );
    
//     const unsubCompleted = onSnapshot(completedOrdersQuery, (snapshot) => {
//       const ordersData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Order, "id">),
//       }));
      
//       // Filter orders by location (4km radius)
//       const filteredOrders = filterOrdersByLocation(ordersData);
//       setCompletedOrders(filteredOrders);
//     }, (error) => {
//       console.error("Error fetching completed orders:", error);
//     });

//     return () => {
//       unsubNew();
//       unsubAccepted();
//       unsubCompleted();
//     };
//   }, [providerLocation]); // Dependency on providerLocation

//   // Update map markers when orders change
//   useEffect(() => {
//     if (leafletMapRef.current && providerLocation) {
//       addRequestMarkersToMap();
//     }
//   }, [newOrders, acceptedOrders, completedOrders, providerLocation]);

//   useEffect(() => {
//     if (newOrders.length > 0 && activeTab === "new") {
//       setMessage(`${newOrders.length} orders available within 4km radius!`);
//     } else {
//       setMessage("");
//     }
//   }, [newOrders, activeTab]);

//   const handleCompleteOrder = async (orderId: string) => {
//     try {
//       // First, get the order details from both arrays
//       const orderToComplete = [...newOrders, ...acceptedOrders].find(order => order.id === orderId);
      
//       if (!orderToComplete) {
//         setMessage("Error: Order not found in current orders list.");
//         setTimeout(() => setMessage(""), 5000);
//         return;
//       }

//       // Check if serviceAmount exists
//       if (!orderToComplete.serviceAmount || orderToComplete.serviceAmount <= 0) {
//         setMessage("Error: Service amount not found. Please ensure amount was set when accepting the order.");
//         setTimeout(() => setMessage(""), 5000);
//         return;
//       }

//       console.log("Completing order:", orderId, "Amount:", orderToComplete.serviceAmount);

//       // Create payment document first (before updating order status)
//       const paymentData = {
//         amount: orderToComplete.serviceAmount,
//         checkoutSessionId: "", // Empty initially, will be filled when payment is processed
//         convertedUsdCents: Math.round(orderToComplete.serviceAmount * 1.2), // Convert INR to USD cents
//         createdAt: Timestamp.now(),
//         currency: "USD",
//         provider: `p_${orderId.slice(-6)}`, // Generate provider ID based on order
//         service: Array.isArray(orderToComplete.issueType) 
//           ? orderToComplete.issueType[0] 
//           : (orderToComplete.issueType || orderToComplete.serviceType || "Service"),
//         status: "pending",
//         updatedAt: Timestamp.now(),
//         userId: orderToComplete.uid || "guest"
//       };

//       console.log("Creating payment document:", paymentData);

//       // Add to payment collection first
//       const paymentDocRef = await addDoc(collection(db, "payment"), paymentData);
//       console.log("Payment document created with ID:", paymentDocRef.id);

//       // Then update the order status to "Completed"
//       const orderRef = doc(db, "requests", orderId);
//       await updateDoc(orderRef, { 
//         status: "Completed",
//         completedAt: Timestamp.now(),
//         paymentDocId: paymentDocRef.id // Store reference to payment document
//       });

//       console.log("Order status updated to completed");

//       setMessage("✅ Work completed successfully! Payment request has been created for the customer.");
      
//       setTimeout(() => setMessage(""), 4000);

//     } catch (error) {
//       console.error("Error completing order and creating payment:", error);
//       console.error("Error details:", error.message);
      
//       // More specific error messages
//       if (error.code === 'permission-denied') {
//         setMessage("Error: Permission denied. Please check your database access permissions.");
//       } else if (error.code === 'not-found') {
//         setMessage("Error: Database collection not found. Please check your database setup.");
//       } else {
//         setMessage(`Error: Failed to complete order. ${error.message || 'Please try again.'}`);
//       }
      
//       setTimeout(() => setMessage(""), 8000);
//     }
//   };

//   const handleAcceptOrder = (orderId: string) => {
//     setSelectedOrderId(orderId);
//     setShowAmountModal(true);
//   };

//   const handleConfirmAccept = async () => {
//     if (!serviceAmount || parseFloat(serviceAmount) <= 0) {
//       setMessage("Please enter a valid service amount.");
//       setTimeout(() => setMessage(""), 3000);
//       return;
//     }

//     try {
//       const orderRef = doc(db, "requests", selectedOrderId);
//       await updateDoc(orderRef, { 
//         status: "Accepted",
//         serviceAmount: parseFloat(serviceAmount)
//       });
//       setMessage("Order accepted with amount ₹" + serviceAmount + " successfully!");
      
//       setShowAmountModal(false);
//       setSelectedOrderId("");
//       setServiceAmount("");
      
//       setTimeout(() => setMessage(""), 3000);
//     } catch (error) {
//       console.error("Error accepting order:", error);
//       setMessage("Failed to accept order.");
      
//       setTimeout(() => setMessage(""), 5000);
//     }
//   };

//   const handleCancelAccept = () => {
//     setShowAmountModal(false);
//     setSelectedOrderId("");
//     setServiceAmount("");
//   };

//   const handleViewDetails = (orderId: string) => {
//     router.push(`/provider/dashboard/accepted/${orderId}`);
//   };

//   // Helper function to format timestamp for display
//   const formatTimestamp = (timestamp: Timestamp) => {
//     const date = timestamp.toDate();
//     const now = new Date();
//     const diffMs = now.getTime() - date.getTime();
//     const diffMins = Math.floor(diffMs / 60000);
//     const diffHours = Math.floor(diffMs / 3600000);
//     const diffDays = Math.floor(diffMs / 86400000);

//     if (diffMins < 1) return "Just now";
//     if (diffMins < 60) return `${diffMins}m ago`;
//     if (diffHours < 24) return `${diffHours}h ago`;
//     if (diffDays < 7) return `${diffDays}d ago`;
    
//     return date.toLocaleDateString();
//   };

//   // Helper function to calculate and display distance
//   const getOrderDistance = (order: Order): string => {
//     if (!providerLocation || !order.location || typeof order.location === 'string') {
//       return "";
//     }
    
//     const distance = calculateDistance(
//       providerLocation.lat,
//       providerLocation.lng,
//       order.location.lat,
//       order.location.lng
//     );
    
//     return distance < 1 ? `${Math.round(distance * 1000)}m away` : `${distance.toFixed(1)}km away`;
//   };

//   const ordersToShow = activeTab === "new" ? newOrders : 
//                        activeTab === "accepted" ? acceptedOrders : 
//                        completedOrders;

//   // Location step component
//   if (showLocationStep) {
//     return (
//       <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
//         <Header />
//         <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
//           <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
//             <div className="mb-6">
//               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full">
//                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h2 className="mb-2 text-2xl font-bold text-gray-800">Enable Location Access</h2>
//               <p className="mb-6 text-gray-600">
//                 We need your location to show service requests within 4km radius from your area.
//               </p>
//             </div>
            
//             {locationError && (
//               <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
//                 {locationError}
//               </div>
//             )}
            
//             <button
//               onClick={fetchLocation}
//               disabled={isLocationLoading}
//               className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLocationLoading ? (
//                 <>
//                   <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Fetching Location...
//                 </>
//               ) : (
//                 <>
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   Fetch My Location
//                 </>
//               )}
//             </button>
            
//             <p className="mt-4 text-xs text-gray-500">
//               Your location will be used only to filter nearby service requests and will not be shared with customers.
//             </p>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   const renderOrderList = () => {
//     if (ordersToShow.length === 0) {
//       return (
//         <div className="py-8 text-center">
//           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
//             <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//             </svg>
//           </div>
//           <p className="text-lg text-gray-500">
//             {activeTab === "new"
//               ? "No new orders within 4km radius at the moment."
//               : activeTab === "accepted" 
//               ? "No accepted orders within 4km radius."
//               : "No completed orders within 4km radius."}
//           </p>
//           <p className="mt-2 text-sm text-gray-400">
//             Orders from customers within 4km of your location will appear here.
//           </p>
//         </div>
//       );
//     }
    
//     return (
//       <ul className="space-y-4">
//         {ordersToShow.map((order) => (
//           <li
//             key={order.id}
//             className="flex flex-col items-start justify-between p-4 transition-transform duration-200 border border-gray-200 rounded-lg bg-gray-50 sm:p-6 sm:flex-row sm:items-center hover:shadow-md"
//           >
//             <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
//               <div className="flex items-center justify-between mb-2">
//                 <p className="text-lg font-bold">
//                   Service:{" "}
//                   <span className="text-blue-600">
//                     {order.issueType || order.serviceType}
//                   </span>
//                 </p>
//                 <div className="text-right">
//                   <span className="block text-xs text-gray-400">
//                     {formatTimestamp(order.createdAt)}
//                   </span>
//                   <span className="text-xs font-semibold text-green-600">
//                     {getOrderDistance(order)}
//                   </span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Location:{" "}
//                 {!order.location
//                   ? "Not specified"
//                   : typeof order.location === "string"
//                   ? order.location
//                   : `${order.location.lat}, ${order.location.lng}`}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Phone: {order.phoneNumber || order.phone}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Vehicle: {order.vehicleNumber || order.vehicleNo} ({order.vehicleModel})
//               </p>
//               {order.notes && (
//                 <p className="text-sm text-gray-600">Notes: {order.notes}</p>
//               )}
//               {order.serviceAmount && activeTab === "accepted" && (
//                 <p className="text-sm font-semibold text-green-600">
//                   Service Amount: ₹{order.serviceAmount}
//                 </p>
//               )}
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handleViewDetails(order.id)}
//                 className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 View Details
//               </button>
//               {activeTab === "new" && (
//                 <button
//                   onClick={() => handleAcceptOrder(order.id)}
//                   className="px-4 py-2 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700"
//                 >
//                   Accept
//                 </button>
//               )}
//               {activeTab === "accepted" && (
//                 <button
//                   onClick={() => handleCompleteOrder(order.id)}
//                   className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700"
//                 >
//                   Work Done
//                 </button>
//               )}
//               {activeTab === "completed" && (
//                 <div className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full">
//                   ✅ Completed
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="w-full min-h-screen font-sans antialiased text-gray-800 bg-sky-100">
//       <Header />
      
//       {/* Location info bar */}
//       <div className="p-3 border-b border-blue-200 bg-blue-50">
//         <div className="flex items-center justify-between max-w-6xl mx-auto">
//           <div className="flex items-center space-x-2">
//             <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             </svg>
//             <span className="text-sm text-blue-800">
//               Showing orders within 4km radius
//             </span>
//           </div>
//           <button
//             onClick={() => setShowLocationStep(true)}
//             className="text-xs text-blue-600 underline hover:text-blue-800"
//           >
//             Change Location
//           </button>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="relative w-full bg-gray-200 h-80">
//         <div ref={mapRef} className="w-full h-full"></div>
//         {!leafletMapRef.current && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//             <div className="text-center">
//               <div className="w-8 h-8 mx-auto mb-2 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
//               <p className="text-sm text-gray-600">Loading map...</p>
//             </div>
//           </div>
//         )}
        
//         {/* Map Legend */}
//         <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-xs z-[1000]">
//           <h4 className="mb-2 font-semibold text-gray-800">Legend</h4>
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <div className="w-4 h-4 bg-indigo-600 border-2 border-white rounded-full shadow-sm"></div>
//               <span className="text-gray-600">Your Location</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-500"></div>
//               <span className="ml-1 text-gray-600">New Requests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-green-500"></div>
//               <span className="ml-1 text-gray-600">Accepted Requests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-indigo-100 border border-indigo-600 rounded-full"></div>
//               <span className="text-gray-600">4km Service Area</span>
//             </div>
//           </div>
//         </div>

//         {/* Map Controls */}
//         <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 z-[1000]">
//           <button
//             onClick={() => {
//               if (leafletMapRef.current && providerLocation) {
//                 leafletMapRef.current.setView([providerLocation.lat, providerLocation.lng], 13);
//               }
//             }}
//             className="flex items-center px-2 py-1 space-x-1 text-xs text-gray-600 hover:text-gray-800"
//             title="Center map on your location"
//           >
//             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             </svg>
//             <span>Center</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-center mt-2">
//         <button
//           onClick={() => setActiveTab("new")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "new"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           New Orders
//           {newOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
//               {newOrders.length}
//             </span>
//           )}
//         </button>
//         <button
//           onClick={() => setActiveTab("accepted")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "accepted"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Accepted Orders
//           {acceptedOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
//               {acceptedOrders.length}
//             </span>
//           )}
//         </button>
//         <button
//           onClick={() => setActiveTab("completed")}
//           className={`px-4 py-2 font-semibold rounded-t-lg ${
//             activeTab === "completed"
//               ? "bg-green-600 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Completed
//           {completedOrders.length > 0 && (
//             <span className="px-2 py-1 ml-2 text-xs text-white bg-gray-500 rounded-full">
//               {completedOrders.length}
//             </span>
//           )}
//         </button>
//       </div>
      
//       {message && (
//         <div
//           className={`p-3 text-center mt-2 ${
//             message.includes("Error") || message.includes("Failed")
//               ? "bg-red-100 text-red-700"
//               : "bg-green-100 text-green-700"
//           }`}
//         >
//           {message}
//         </div>
//       )}
      
//       <main className="w-full max-w-6xl px-2 pb-20 mx-auto mt-4 sm:px-4">
//         {renderOrderList()}
//       </main>
      
//       <div className="fixed bottom-0 w-full">
//         <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
//       </div>

//       {/* Amount Input Modal */}
//       {showAmountModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 bg-white rounded-lg">
//             <h3 className="mb-4 text-lg font-bold text-gray-800">
//               Enter Service Amount
//             </h3>
//             <p className="mb-4 text-sm text-gray-600">
//               Please enter the amount you would charge for this service:
//             </p>
//             <div className="mb-6">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Service Amount (₹)
//               </label>
//               <input
//                 type="number"
//                 value={serviceAmount}
//                 onChange={(e) => setServiceAmount(e.target.value)}
//                 placeholder="Enter amount..."
//                 min="0"
//                 step="0.01"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 autoFocus
//               />
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 onClick={handleCancelAccept}
//                 className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmAccept}
//                 className="flex-1 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
//                 disabled={!serviceAmount || parseFloat(serviceAmount) <= 0}
//               >
//                 Accept Order
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;