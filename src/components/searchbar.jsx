import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5L21 21" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export default function SearchBar({ placeholder = "I am looking for" }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 16px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#f5f5f5",
            borderRadius: 50,
            padding: "12px 18px",
          }}
        >
          <SearchIcon />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 15,
              flex: 1,
            }}
          />
        </div>

        <div
          onClick={() => navigate("/profile")}
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "2px solid #e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
        >
          <UserIcon />
        </div>
      </div>

      <div style={{ height: 10 }} />
    </div>
  );
}