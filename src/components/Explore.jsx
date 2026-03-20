import { carCareImages, getRandomItems } from "../data/mockData";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gps from "../assets/gps.png";
import car1 from "../assets/car1.png";

export default function Explore() {
  const [randomImages, setRandomImages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: "Repair shop", icon: "🚗", path: "/explore/repair" },
    { name: "Profile", icon: "🙍‍♂️", path: "/profile" },
    { name: "Gas station", icon: "⛽", path: "/explore/gas" },
    { name: "Care centers", icon: "⚖️", path: "/explore/care" },
  ];

  // Load random images once
  useEffect(() => {
    setRandomImages(getRandomItems(carCareImages, 4));
  }, []);

  // Open Google Maps with user location
  const openMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;

        window.open(
          `https://www.google.com/maps/search/gas+station/@${latitude},${longitude},15z`,
        );
      });
    } else {
      window.open("https://www.google.com/maps/search/gas+station+near+me");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300">
        <img src={car1} alt="car" className="w-full h-full object-cover" />
      </div>

      <div className="p-4 sm:p-6">
        {/* EXPLORE */}
        <h2 className="text-xs sm:text-sm font-semibold tracking-widest mb-4">
          EXPLORE
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-3 sm:gap-5 text-center">
          {categories.map((cat, i) => {
            const isActive = location.pathname === cat.path;
            return (
              <button
                key={i}
                onClick={() => navigate(cat.path)}
                className={`flex flex-col items-center rounded-lg p-1 transition transform hover:-translate-y-0.5 ${
                  isActive ? "ring-2 ring-teal-500" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow ${
                    isActive ? "bg-teal-700" : "bg-teal-500"
                  }`}
                >
                  {cat.icon}
                </div>
                <p className="text-[10px] sm:text-xs mt-2">{cat.name}</p>
              </button>
            );
          })}
        </div>

        {/* Map Section */}
        <div
          onClick={openMap}
          className="mt-6 bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition"
        >
          <div className="relative">
            <img
              src={gps}
              alt="map"
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
              <p className="font-semibold text-sm sm:text-base">
                Nearby Gas Stations
              </p>
              <p className="text-xs sm:text-sm opacity-90">Tap to open map</p>
            </div>
          </div>
        </div>

        {/* Car Care Centers */}
        <h2 className="text-xs sm:text-sm font-semibold tracking-widest mt-6 mb-4">
          EXPLORE Carcare Centers
        </h2>

        {/* Random Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {randomImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`car-care-${i}`}
              className="rounded-xl object-cover w-full h-28 sm:h-32 md:h-36 hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
