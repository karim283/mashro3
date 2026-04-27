import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import Register from "./components/login/register/Register";
import Login from "./components/login/register/Login";
import Explore from "./components/Explore";
import RepairShop from "./components/RepairShop";
import CarSearch from "./components/CarSearch";
import BrandSearch from "./components/BrandSearch";
import CarDetails from "./components/CarDetails";
import SelectRepairShop from "./components/SelectRepairShop";
import RepairCenter from "./components/RepairCenter";
import Profile from "./components/Profile";
import GasStation from "./components/gas_station/GasStation";
import GasStationPage from "./components/gas_station/GasStationPage";
import CareCenters from "./components/CareCenters";
import ChatPage from "./components/chatbot/ChatPage";
import { MessageCircle } from "lucide-react";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/repair" element={<RepairShop />} />
        <Route path="/explore/repair/car-search" element={<CarSearch />} />
        <Route path="/explore/repair/brand-search" element={<BrandSearch />} />
        <Route path="/explore/repair/brand-search/car-details" element={<CarDetails />} />
        <Route path="/explore/repair/brand-search/car-details/select-repair-shop" element={<SelectRepairShop />} />
        <Route path="/explore/repair/brand-search/car-details/select-repair-shop/repair-center" element={<RepairCenter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore/gas" element={<GasStation />} />
        <Route path="/gas-station-details" element={<GasStationPage />} />
        <Route path="/explore/care" element={<CareCenters />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>

      {/* Floating Chatbot Button - hidden on /chat page */}
      {location.pathname !== "/chat" && (
        <button
          onClick={() => navigate("/chat")}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Open Chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
