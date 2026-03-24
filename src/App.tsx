import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Explore from "./components/Explore";
import RepairShop from "./components/RepairShop";
import Profile from "./components/Profile";
import GasStation from "./components/GasStation";
import CareCenters from "./components/CareCenters";
import ChatPage from "./components/ChatPage";
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore/gas" element={<GasStation />} />
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
