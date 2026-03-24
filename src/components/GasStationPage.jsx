import { Search, User, Wifi, Navigation } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function GasStationPage() {
  const location = useLocation();
  const station = location.state?.station;

  if (!station) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No station data
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="I am looking for"
            className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="p-2 rounded-full border bg-white">
            <User size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mt-4 text-sm">
          <button className="bg-yellow-400 px-3 py-1 rounded-full font-medium">
            Nearby
          </button>
          <button className="text-gray-600">Recommended</button>
          <button className="text-gray-600">Recent</button>
          <button className="text-gray-600">Favorite</button>
        </div>
      </div>

      {/* Card */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Image */}
          <div className="relative">
            <img
              src={
                station.image ||
                "https://images.unsplash.com/photo-1605902711622-cfb43c44367f"
              }
              alt="station"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-gray-400 mb-1">ID: {station.id}</p>

            <div className="flex justify-between items-center">
              <h2 className="text-yellow-500 font-semibold">{station.name}</h2>
              <div className="text-right text-sm">
                <p className="text-yellow-500">10 km</p>
                <div className="text-yellow-400">
                  {"★".repeat(Math.round(station.rating || 3))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-1">{station.address}</p>

            {/* Icons */}
            <div className="flex gap-3 mt-2 text-gray-500">
              <Navigation size={16} />
              <Wifi size={16} />
            </div>

            {/* Fuel Prices */}
            <div className="mt-4 space-y-2">
              {[
                { type: "80", price: "20.75 EG" },
                { type: "92", price: "22.25 EG" },
                { type: "95", price: "24 EG" },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex justify-between items-center border rounded-lg px-3 py-2 text-sm"
                >
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-gray-400 text-xs">Benzine</p>
                  </div>

                  <div>
                    <p className="font-medium">{item.price}</p>
                    <p className="text-gray-400 text-xs">Per liter</p>
                  </div>

                  <div>
                    <p className="font-medium">10 EG</p>
                    <p className="text-gray-400 text-xs">Parking Fee</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
    </div>
  );
}
