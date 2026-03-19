import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.svg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // ❗ No user found
    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    // ❗ Check credentials
    if (email !== savedUser.email || password !== savedUser.password) {
      setError("Invalid email or password");
      return;
    }

    // ✅ Success → Go to Explore
    setError("");
    navigate("/explore");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg text-center">
        {/* Image */}
        <img src={img1} alt="login" className="w-40 mx-auto mb-6" />

        {/* Title */}
        <h1 className="text-xl font-semibold mb-6">Glad to meet you again!</h1>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Email */}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-gray-100 outline-none mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-gray-100 outline-none mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition"
        >
          SIGN IN NOW
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-xs text-gray-400">Or continue with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social */}
        <div className="flex justify-between">
          <button className="bg-black text-white w-16 h-10 rounded-lg">
            G
          </button>
          <button className="bg-black text-white w-16 h-10 rounded-lg">
            
          </button>
          <button className="bg-black text-white w-16 h-10 rounded-lg">
            f
          </button>
        </div>
      </div>
    </div>
  );
}
