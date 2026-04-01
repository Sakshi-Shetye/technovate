"use client";
import { useEffect, useState } from "react";

export default function MapTracker({ lat, lng }: { lat: number; lng: number }) {
  const [location, setLocation] = useState({ lat, lng });

  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }, 5000); // update every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
      ></iframe>
    </div>
  );
}
