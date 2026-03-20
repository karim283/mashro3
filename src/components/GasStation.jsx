import React, { useEffect, useState } from "react";
import { getGasStations } from "../api";

const FALLBACK_LOCATION = { lat: 30.0444, lng: 31.2357 };
const FALLBACK_STATIONS = [
  {
    id: "demo-1",
    name: "Default Gas Station",
    address: "1 Main Street",
    rating: 4,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "demo-2",
    name: "Fallback Fuel",
    address: "2 Main Street",
    rating: 3,
    image: "https://via.placeholder.com/100",
  },
];

const GasStations = () => {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchStations = async (lat, lng) => {
    try {
      const res = await getGasStations(lat, lng);
      if (res.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
        setStations(res.data);
        setError("");
      } else {
        setStations(FALLBACK_STATIONS);
        setError("No nearby stations found; showing fallback data.");
      }
    } catch (err) {
      console.error("Gas station API error", err?.response?.data || err);
      const message =
        err?.response?.data?.error ||
        err?.message ||
        "Failed to fetch gas stations.";
      setError(message);
      setStations(FALLBACK_STATIONS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not available; using fallback location.");
      fetchStations(FALLBACK_LOCATION.lat, FALLBACK_LOCATION.lng);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchStations(pos.coords.latitude, pos.coords.longitude);
      },
      (geoErr) => {
        console.warn("Geolocation error:", geoErr);
        setError(
          "Location permission denied or unavailable; using fallback location.",
        );
        fetchStations(FALLBACK_LOCATION.lat, FALLBACK_LOCATION.lng);
      },
    );
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading nearby gas stations...</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-xl font-bold mb-4">Nearby Gas Stations</h1>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-200 text-red-700 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {stations.map((s) => (
            <div
              key={s.id}
              className="bg-white p-3 rounded-xl shadow flex gap-3"
            >
              <img
                src={s.image}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="text-yellow-500 font-semibold">{s.name}</h3>
                <p className="text-xs text-gray-600">{s.address}</p>

                <div className="text-yellow-400">
                  {"★".repeat(Math.round(s.rating))}
                </div>

                <button className="bg-teal-500 text-white px-3 py-1 rounded mt-2 text-sm">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GasStations;
