import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import KiaRed from "../assets/kia-red-front.png";
import MapImage from "../assets/map.png";

const StarRating = ({ rating = 4, total = 5 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {Array.from({ length: total }, (_, i) => (
      <svg key={i} viewBox="0 0 16 16" width="14" height="14">
        <polygon
          points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"
          fill={i < rating ? "#F5C842" : "#e0e0e0"}
        />
      </svg>
    ))}
  </div>
);

export default function SelectRepairShop() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "20px 20px 8px" }}>
          <button
            onClick={() =>
              navigate("/explore/repair/brand-search/car-details")
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#111"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>

        <div
          style={{
            width: "100%",
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={KiaRed}
            alt="KIA EV6"
            style={{ height: "100%", objectFit: "contain" }}
            onError={(e) => {
              e.target.style.opacity = 0.12;
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 15,
            color: "#111",
            padding: "10px 20px 14px",
          }}
        >
          KIA EV6 GT line AWD
        </div>

        <div style={{ padding: "0 20px 10px" }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: "#111",
              letterSpacing: 0.4,
            }}
          >
            PREFERRED
          </span>
        </div>

        <div
          style={{
            width: "100%",
            height: 320,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={MapImage}
            alt="Map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              e.target.style.opacity = 0.15;
            }}
          />
        </div>

        <div
          style={{
            padding: "14px 16px",
            borderTop: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 13,
                color: "#111",
                letterSpacing: 0.2,
              }}
            >
              MARK EV MOTORS
            </div>

            <div
              style={{
                fontSize: 11,
                color: "#777",
                marginTop: 4,
                lineHeight: 1.5,
              }}
            >
              5th elnasr, smoha
              <br />
              alexandria, Egypt
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              paddingRight: 14,
            }}
          >
            <svg viewBox="0 0 24 28" width="22" height="26" fill="none">
              <path
                d="M12 0C7.13 0 3 4.13 3 9c0 6.75 9 19 9 19s9-12.25 9-19c0-4.87-4.13-9-9-9z"
                fill="#F5C842"
              />
              <circle cx="12" cy="9" r="3.5" fill="#fff" />
            </svg>

            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              Get Directions
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <StarRating rating={4} total={5} />

            <button
              onClick={() =>
                navigate(
                  "/explore/repair/brand-search/car-details/select-repair-shop/repair-center"
                )
              }
              style={{
                backgroundColor: "#00BFA5",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                padding: "9px 14px",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: 0.4,
              }}
            >
              SELECT SLOTS
            </button>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <BottomNav />
      </div>
    </div>
  );
}
