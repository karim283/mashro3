import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Heart,
  Headphones,
  User,
  MapPin,
  Languages,
  Bell,
  Info,
  Share2,
  LogOut,
  MessageCircle,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!savedUser || !isLoggedIn) {
      navigate("/login");
      return;
    }

    setUser(savedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      const updatedUser = { ...user, image: imageData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-md">
        {/* Header */}
        <div className="bg-teal-500 h-40 rounded-b-3xl relative flex items-start p-4">
          <button
            onClick={() => navigate("/explore")}
            className="text-white cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft />
          </button>

          {/* Profile Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-20">
            <img
              src={user.image || "https://via.placeholder.com/100"}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
            />
            <button
              onClick={openFilePicker}
              className="absolute inset-x-0 bottom-0 mx-auto mt-24 bg-white/95 text-xs text-teal-600 px-2 py-1 rounded-full font-semibold border border-teal-200"
            >
              {user.image ? "Change Photo" : "Upload Photo"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 px-6 pb-6">
          {/* Greeting */}
          <h2 className="text-center text-lg font-semibold">
            Hey! <span className="text-teal-500">{user.name || "User"}</span>,
            Good Morning
          </h2>

          <p className="text-center text-sm text-gray-600 mt-2">
            {user.email || "No email available"}
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={handleLogout}
              className="text-xs text-red-500 border border-red-200 rounded-full px-3 py-1"
            >
              Logout
            </button>
          </div>

          <div className="flex justify-center gap-8 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-teal-500 p-4 rounded-xl shadow">
                <Heart className="text-white" />
              </div>
              <span className="text-sm mt-2">Favorite</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-teal-500 p-4 rounded-xl shadow">
                <Headphones className="text-white" />
              </div>
              <span className="text-sm mt-2">Support</span>
            </div>
          </div>

          {/* Section */}
          <div className="mt-8">
            <p className="text-gray-400 text-xs font-semibold">
              YOUR INFORMATION
            </p>

            <div className="mt-3 space-y-4">
              <MenuItem icon={<User />} text="Profile" />
              <MenuItem icon={<MapPin />} text="Address Book" />
            </div>
          </div>

          {/* Section */}
          <div className="mt-6">
            <p className="text-gray-400 text-xs font-semibold">
              OTHER INFORMATION
            </p>

            <div className="mt-3 space-y-4">
              <MenuItem icon={<Languages />} text="Language Selection" />
              <MenuItem icon={<Bell />} text="Notification Preferences" />
              <MenuItem icon={<Info />} text="About Us" />
              <MenuItem icon={<Share2 />} text="Referral" />
              <MenuItem
                icon={<MessageCircle />}
                text="Chat with Assistant"
                onClick={() => navigate("/chat")}
              />
              <MenuItem
                icon={<LogOut />}
                text="Log out"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
    >
      <div className="text-gray-700">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default Profile;
