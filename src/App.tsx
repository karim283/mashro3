import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Explore from "./components/Explore";
import RepairShop from "./components/RepairShop";
import Profile from "./components/Profile";
import GasStation from "./components/GasStation";
import CareCenters from "./components/CareCenters";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/repair" element={<RepairShop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore/gas" element={<GasStation />} />
          <Route path="/explore/care" element={<CareCenters />} />
        </Routes>
      </div>
    </Router>
  );
}
