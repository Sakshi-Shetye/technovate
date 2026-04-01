// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import "./carAnimation.css";

// export default function AdminLanding() {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/admin"); // Redirect to admin page after animation
//     }, 3500); // match animation duration

//     return () => clearTimeout(timer);
//   }, [router]);

//   return <div className="animation-wrapper"></div>;
// }



// app/admin/landing/page.tsx
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './carAnimation.css'; // Import the new CSS file

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect after a 5-second animation
      router.push('/admin/sign-up');
    }, 5000); 

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, [router]);

  return (
    // This div is the container for all your CSS animation magic.
    <div className="animation-container"></div>
  );
};

export default LandingPage;