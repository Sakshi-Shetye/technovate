// "use client";

// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import { useEffect } from "react";

// type LatLng = { lat: number; lng: number };

// function ClickCapture({
//   onPick,
//   setPos,
// }: {
//   onPick: (p: LatLng) => void;
//   setPos: (p: LatLng) => void;
// }) {
//   useMapEvents({
//     click(e) {
//       setPos(e.latlng);
//       onPick(`${e.latlng.lat},${e.latlng.lng}`);
//     },
//   });
//   return null;
// }

// // helper to re-center map
// function RecenterMap({ coords }: { coords: LatLng | null }) {
//   const map = useMap();
//   useEffect(() => {
//     if (coords) map.setView(coords, 15);
//   }, [coords, map]);
//   return null;
// }

// export default function LocationPickerMap({
//   center,
//   zoom,
//   position,
//   setPosition,
//   onChange,
//   height,
// }: {
//   center: [number, number];
//   zoom: number;
//   position: LatLng | null;
//   setPosition: (p: LatLng) => void;
//   onChange: (p: string) => void;
//   height: number;
// }) {
//   // 📍 Use My Location handler
//   const handleUseMyLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported in this browser.");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//         setPosition(coords);
//         onChange(`${coords.lat},${coords.lng}`);
//       },
//       (err) => alert("Unable to fetch location: " + err.message)
//     );
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <MapContainer
//         center={position ?? { lat: center[0], lng: center[1] }}
//         zoom={zoom}
//         style={{
//           height: `${height}px`,
//           width: "100%",
//           borderRadius: "12px",
//           overflow: "hidden",
//         }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; OpenStreetMap contributors'
//         />
//        {position !== null && typeof position.lat === "number" && typeof position.lng === "number" && (
//   <Marker position={position as any} />
// )}

//         <ClickCapture
//           onPick={(coords) => {
//             setPosition(coords as any);
//             onChange(`${coords.lat},${coords.lng}`);
//           }}
//           setPos={setPosition}
//         />
//         <RecenterMap coords={position} />
//       </MapContainer>

//       {/* 📍 Use My Location button */}
//       <button
//         onClick={handleUseMyLocation}
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           background: "#2563eb",
//           color: "white",
//           padding: "6px 12px",
//           borderRadius: "8px",
//           fontSize: "14px",
//           cursor: "pointer",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//         }}
//       >
//         Use My Location
//       </button>
//     </div>
//   );
// }




// "use client";

// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import { useEffect } from "react";

// type LatLng = { lat: number; lng: number };

// function ClickCapture({
//   onPick,
//   setPos,
// }: {
//   onPick: (p: LatLng) => void;
//   setPos: (p: LatLng) => void;
// }) {
//   useMapEvents({
//     click(e) {
//       const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
//       setPos(coords);
//       onPick(coords);
//     },
//   });
//   return null;
// }

// // 🔄 Recenter map on position change
// function RecenterMap({ coords }: { coords: LatLng | null }) {
//   const map = useMap();
//   useEffect(() => {
//     if (coords) map.setView(coords, 15);
//   }, [coords, map]);
//   return null;
// }

// export default function LocationPickerMap({
//   center,
//   zoom,
//   position,
//   setPosition,
//   onChange,
//   height,
// }: {
//   center: [number, number];
//   zoom: number;
//   position: LatLng | null;
//   setPosition: (p: LatLng) => void;
//   onChange: (p: string) => void;
//   height: number;
// }) {
//   // 📍 Use My Location handler
//   const handleUseMyLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported in this browser.");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords: LatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//         setPosition(coords);
//         onChange(`${coords.lat},${coords.lng}`);
//       },
//       (err) => alert("Unable to fetch location: " + err.message)
//     );
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <MapContainer
//         center={position ?? { lat: center[0], lng: center[1] }}
//         zoom={zoom}
//         style={{
//           height: `${height}px`,
//           width: "100%",
//           borderRadius: "12px",
//           overflow: "hidden",
//         }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         />

//         {/* ✅ Marker only if position is valid */}
//         {position && typeof position.lat === "number" && typeof position.lng === "number" && (
//           <Marker position={[position.lat, position.lng]} />
//         )}

//         <ClickCapture
//           onPick={(coords) => {
//             setPosition(coords);
//             onChange(`${coords.lat},${coords.lng}`);
//           }}
//           setPos={setPosition}
//         />
//         <RecenterMap coords={position} />
//       </MapContainer>

//       {/* 📍 Use My Location button */}
//       <button
//         onClick={handleUseMyLocation}
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           background: "#2563eb",
//           color: "white",
//           padding: "6px 12px",
//           borderRadius: "8px",
//           fontSize: "14px",
//           cursor: "pointer",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//         }}
//       >
//         Use My Location
//       </button>
//     </div>
//   );
// }



// "use client";

// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import { useEffect } from "react";
// import * as L from "leaflet"; // ✅ safer import
// import "leaflet/dist/leaflet.css";

// type LatLng = { lat: number; lng: number };

// // ✅ Custom Person Icon
// const personIcon: L.Icon = new L.Icon({
//   iconUrl: "/icons/person.png", // must exist in /public/icons/person.png
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// function ClickCapture({
//   onPick,
//   setPos,
// }: {
//   onPick: (p: LatLng) => void;
//   setPos: (p: LatLng) => void;
// }) {
//   useMapEvents({
//     click(e: L.LeafletMouseEvent) {
//       const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
//       setPos(coords);
//       onPick(coords);
//     },
//   });
//   return null;
// }

// function RecenterMap({ coords }: { coords: LatLng | null }) {
//   const map = useMap();
//   useEffect(() => {
//     if (coords) map.setView([coords.lat, coords.lng], 15); // ✅ array
//   }, [coords, map]);
//   return null;
// }

// export default function LocationPickerMap({
//   center,
//   zoom,
//   position,
//   setPosition,
//   onChange,
//   height,
// }: {
//   center: [number, number];
//   zoom: number;
//   position: LatLng | null;
//   setPosition: (p: LatLng) => void;
//   onChange: (p: string) => void;
//   height: number;
// }) {
//   const handleUseMyLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported in this browser.");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords: LatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//         setPosition(coords);
//         onChange(`${coords.lat},${coords.lng}`);
//       },
//       (err) => alert("Unable to fetch location: " + err.message)
//     );
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <MapContainer
//         center={position ? [position.lat, position.lng] : center} // ✅ fixed
//         zoom={zoom}
//         style={{
//           height: `${height}px`,
//           width: "100%",
//           borderRadius: "12px",
//           overflow: "hidden",
//         }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' as string} // ✅ fixed
//         />

//         {position && (
//           <Marker position={[position.lat, position.lng]} icon={personIcon as L.Icon} /> // ✅ fixed
//         )}

//         <ClickCapture
//           onPick={(coords) => {
//             setPosition(coords);
//             onChange(`${coords.lat},${coords.lng}`);
//           }}
//           setPos={setPosition}
//         />
//         <RecenterMap coords={position} />
//       </MapContainer>

//       <button
//         onClick={handleUseMyLocation}
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           background: "#2563eb",
//           color: "white",
//           padding: "6px 12px",
//           borderRadius: "8px",
//           fontSize: "14px",
//           cursor: "pointer",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//         }}
//       >
//         Use My Location
//       </button>
//     </div>
//   );
// }


// "use client";

// import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
// import { useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import type LType from "leaflet"; // only for types, no SSR issues

// // ✅ Type for coordinates
// export type LatLng = { lat: number; lng: number };

// // ✅ Props
// interface LocationPickerMapProps {
//   center: [number, number];
//   zoom: number;
//   position: LatLng | null;
//   setPosition: (pos: LatLng) => void;
//   onChange: (val: string) => void;
//   height: number;
//   customIcon: LType.Icon | null;
// }

// // ✅ Capture clicks on the map
// function ClickCapture({ setPos, onPick }: { setPos: (p: LatLng) => void; onPick: (p: LatLng) => void }) {
//   useMapEvents({
//     click(e) {
//       const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
//       setPos(coords);
//       onPick(coords);
//     },
//   });
//   return null;
// }

// // ✅ Recenter map on marker change
// function RecenterMap({ coords }: { coords: LatLng | null }) {
//   const map = useMap();
//   useEffect(() => {
//     if (coords) map.setView([coords.lat, coords.lng], 15);
//   }, [coords, map]);
//   return null;
// }

// // ✅ Main component
// export default function LocationPickerMap({
//   center,
//   zoom,
//   position,
//   setPosition,
//   onChange,
//   height,
//   customIcon,
// }: LocationPickerMapProps) {
//   const handleUseMyLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords: LatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//         setPosition(coords);
//         onChange(`${coords.lat},${coords.lng}`);
//       },
//       (err) => alert("Unable to fetch location: " + err.message)
//     );
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <MapContainer
//         center={position ? [position.lat, position.lng] : center}
//         zoom={zoom}
//         style={{ width: "100%", height: `${height}px`, borderRadius: "12px", overflow: "hidden" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         />

//         {position && <Marker position={[position.lat, position.lng]} icon={customIcon ?? undefined} />}
//         <ClickCapture setPos={setPosition} onPick={(coords) => onChange(`${coords.lat},${coords.lng}`)} />
//         <RecenterMap coords={position} />
//       </MapContainer>

//       <button
//         onClick={handleUseMyLocation}
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           background: "#2563eb",
//           color: "white",
//           padding: "6px 12px",
//           borderRadius: "8px",
//           fontSize: "14px",
//           cursor: "pointer",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//         }}
//       >
//         Use My Location
//       </button>
//     </div>
//   );
// }



"use client";

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Type for coordinates
export type LatLng = { lat: number; lng: number };

interface LocationPickerMapProps {
  center: [number, number];
  zoom: number;
  position: LatLng | null;
  setPosition: (pos: LatLng) => void;
  onChange: (val: string) => void;
  height: number;
  customIcon?: L.Icon; // still allow override
}

// ✅ Default person marker icon
const personIcon = L.icon({
  iconUrl: "/person.png", // put person.png inside /public
  iconSize: [50, 50],     // make it look bigger
  iconAnchor: [25, 50],   // bottom-center is the "point"
  popupAnchor: [0, -50],  // popup above the head
  className: "drop-shadow-lg", // optional styling
});

// ✅ Capture clicks on the map
function ClickCapture({
  setPos,
  onPick,
}: {
  setPos: (p: LatLng) => void;
  onPick: (p: LatLng) => void;
}) {
  useMapEvents({
    click(e) {
      const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
      setPos(coords);
      onPick(coords);
    },
  });
  return null;
}

// ✅ Recenter map on marker change
function RecenterMap({ coords }: { coords: LatLng | null }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.setView([coords.lat, coords.lng], 15);
  }, [coords, map]);
  return null;
}

// ✅ Main component
export default function LocationPickerMap({
  center,
  zoom,
  position,
  setPosition,
  onChange,
  height,
  customIcon,
}: LocationPickerMapProps) {
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: LatLng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(coords);
        onChange(`${coords.lat},${coords.lng}`);
      },
      (err) => alert("Unable to fetch location: " + err.message)
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={position ? [position.lat, position.lng] : center}
        zoom={zoom}
        style={{
          width: "100%",
          height: `${height}px`,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {position && (
          <Marker
            position={[position.lat, position.lng]}
            icon={customIcon ?? personIcon}
          />
        )}

        <ClickCapture
          setPos={setPosition}
          onPick={(coords) => onChange(`${coords.lat},${coords.lng}`)}
        />
        <RecenterMap coords={position} />
      </MapContainer>

      {/* Use My Location Button */}
      <button
        onClick={handleUseMyLocation}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          background: "#2563eb",
          color: "white",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        Use My Location
      </button>
    </div>
  );
}
