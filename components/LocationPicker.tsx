// // Import map dynamically, SSR disabled
// const MapContainer = dynamic(() => import("./LocationPickerMap"), { ssr: false });
// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";


// export default function LocationPicker({
//   value,
//   onChange,
//   center = [19.076, 72.8777],
//   zoom = 13,
//   height = 300,
// }: {
//   value?: string;
//   onChange: (val: string) => void;
//   center?: [number, number];
//   zoom?: number;
//   height?: number;
// }) {
//   const [position, setPosition] = useState<LatLng | null>(null);

//   // Parse initial value
//   useEffect(() => {
//     if (!value) return;
//     const [lat, lng] = value.split(",").map(Number);
//     if (isFinite(lat) && isFinite(lng)) setPosition({ lat, lng });
//   }, [value]);

//   // Fix marker icons client-side only
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const L = require("leaflet");

//     const iconRetinaUrl = require("leaflet/dist/images/marker-icon-2x.png");
//     const iconUrl = require("leaflet/dist/images/marker-icon.png");
//     const shadowUrl = require("leaflet/dist/images/marker-shadow.png");

//     const DefaultIcon = L.icon({
//       iconRetinaUrl,
//       iconUrl,
//       shadowUrl,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       tooltipAnchor: [16, -28],
//       shadowSize: [41, 41],
//     });

//     L.Marker.prototype.options.icon = DefaultIcon;
//   }, []);

//   return (
//     <div style={{ width: "100%", height: `${height}px` }}>
//       <MapContainer
//         center={center}
//         zoom={zoom}
//         position={position}
//         setPosition={setPosition}
//         onChange={onChange}
//         height={height}
//       />
//     </div>
//   );
// }




// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // dynamically import the map component (no SSR)
// const LocationPickerMap = dynamic(() => import("./LocationPickerMap"), {
//   ssr: false,
//   loading: () => <div className="flex items-center justify-center w-full h-full">Loading map…</div>,
// });

// type LatLng = { lat: number; lng: number };

// export default function LocationPicker({
//   value,
//   onChange,
//   center = [19.076, 72.8777],
//   zoom = 13,
//   height = 300,
// }: {
//   value?: string;
//   onChange: (val: string) => void;
//   center?: [number, number];
//   zoom?: number;
//   height?: number;
// }) {
//   const [position, setPosition] = useState<LatLng | null>(null);

//   // parse initial value (if someone passed "lat,lng")
//   useEffect(() => {
//     if (!value) {
//       setPosition(null);
//       return;
//     }
//     const parts = value.split(",").map((p) => p.trim());
//     if (parts.length !== 2) return;
//     const lat = Number(parts[0]);
//     const lng = Number(parts[1]);
//     if (Number.isFinite(lat) && Number.isFinite(lng)) {
//       setPosition({ lat, lng });
//     }
//   }, [value]);

//   return (
//     <div style={{ width: "100%", height: `${height}px` }}>
//       {/* pass the same props your LocationPickerMap expects */}
//       <LocationPickerMap
//         center={center}
//         zoom={zoom}
//         position={position}
//         setPosition={setPosition}
//         onChange={onChange}
//         height={height}
//       />
//     </div>
//   );
// }






"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { LatLng } from "./LocationPickerMap";

// Dynamically import map
const LocationPickerMap = dynamic(() => import("./LocationPickerMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      Loading map…
    </div>
  ),
});

interface LocationPickerProps {
  value?: string;
  onChange: (val: string) => void;
  center?: [number, number];
  zoom?: number;
  height?: number;
}

export default function LocationPicker({
  value,
  onChange,
  center = [19.076, 72.8777],
  zoom = 13,
  height = 300,
}: LocationPickerProps) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [customIcon, setCustomIcon] = useState<null | ReturnType<typeof import("leaflet")["icon"]>>(null);

  // Create custom icon
  useEffect(() => {
    if (typeof window === "undefined") return;

    import("leaflet").then((L) => {
      const icon = L.icon({
        iconUrl: "/leaflet/person.png", // ✅ correct path
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      setCustomIcon(icon);
    });
  }, []);

  // Parse initial value
  useEffect(() => {
    if (!value) return;
    const parts = value.split(",").map((p) => p.trim());
    if (parts.length !== 2) return;

    const lat = Number(parts[0]);
    const lng = Number(parts[1]);
    if (Number.isFinite(lat) && Number.isFinite(lng)) setPosition({ lat, lng });
  }, [value]);

  return (
    <div style={{ width: "100%", height: `${height}px` }}>
      {customIcon && (
        <LocationPickerMap
          center={center}
          zoom={zoom}
          position={position}
          setPosition={setPosition}
          onChange={onChange}
          height={height}
          customIcon={customIcon}
        />
      )}
    </div>
  );
}
