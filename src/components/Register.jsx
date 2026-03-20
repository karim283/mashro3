import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    // ❗ Validation
    if (!name || !mobile || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!accepted) {
      setError("You must accept the terms");
      return;
    }

    // Save user
    const user = {
      name,
      mobile,
      email,
      password,
      image: "",
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "false");

    // Success
    setError("");
    alert("Registered Successfully!");

    // Go to login
    navigate("/login");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg text-center">
        {/* Logo */}
        <img src={logo} alt="CarCareX Logo" className="w-16 mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-xl font-semibold mb-6">Welcome to CarCareX</h1>

        {/* ❗ Error */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* 🔐 Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full mt-6 bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition"
        >
          REGISTER NOW
        </button>

        {/* Skip */}
        <p
          onClick={() => navigate("/explore")}
          className="text-teal-500 mt-3 cursor-pointer text-sm"
        >
          Skip for Now &gt;&gt;
        </p>

        {/* Checkbox */}
        <div className="flex items-start mt-4 text-xs text-gray-600">
          <input
            type="checkbox"
            className="mr-2 mt-1"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <p>Accept all the requirements that we have provided.</p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-xs text-gray-400">Or continue with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
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

        {/* Footer */}
        <p className="mt-6 text-sm">
          <span>Already registered? </span>
          <span
            onClick={() => navigate("/login")}
            className="text-teal-500 font-semibold cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
