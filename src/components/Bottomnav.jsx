import React from "react";
import { useNavigate } from "react-router-dom";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#333" strokeWidth="2">
    <path d="M3 12L12 4l9 8" />
    <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
  </svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#333" strokeWidth="2">
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M12 3v5M8 3h8" />
    <circle cx="9" cy="14" r="1.5" fill="#333" stroke="none" />
    <circle cx="15" cy="14" r="1.5" fill="#333" stroke="none" />
    <path d="M9 18h6" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#333" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export default function BottomNav({ onNavChange }) {
  const navigate = useNavigate();

  const handlePress = (i) => {
    if (onNavChange) onNavChange(i);

    if (i === 0) navigate("/explore");
    if (i === 1) navigate("/chat");
    if (i === 2) navigate("/profile");
  };

  return (
    <div
      style={{
        borderTop: "1px solid #f0f0f0",
        padding: "12px 0 30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {[<HomeIcon />, <BotIcon />, <UserIcon />].map((icon, i) => (
        <button
          key={i}
          onClick={() => handlePress(i)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#F5C842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}