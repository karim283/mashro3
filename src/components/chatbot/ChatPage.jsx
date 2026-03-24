import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white shadow-sm">
        <button
          onClick={() => navigate("/explore")}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
          🤖
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {/* Bot Message */}
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm">
            🤖
          </div>
          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%]">
            Hey! Thanks for reaching out, I’m glad to help!
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end items-start gap-2">
          <div className="bg-blue-700 text-white px-4 py-2 rounded-2xl max-w-[75%]">
            Hey, my car won’t start. It’s just making a clicking sound.
          </div>
          <img
            src={user?.image || "https://via.placeholder.com/32"}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type Message....."
            className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
