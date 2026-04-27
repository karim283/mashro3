import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import BottomNav from "./BottomNav";
import mglogo from "../assets/mg-logo.png";
import kiaLogo from "../assets/kia-logo.png";
import mahindraLogo from "../assets/mahindra-logo.png";
import tataLogo from "../assets/tata-ev-logo.png";

const carTypes = [
  { label: "Sedan", active: false },
  { label: "Hatchback", active: true },
  { label: "SUV", active: true },
  { label: "MUV", active: true },
];

const brands = [
  { name: "MG", src: mglogo },
  { name: "KIA", src: kiaLogo },
  { name: "Mahindra Electric", src: mahindraLogo },
  { name: "Tata EV", src: tataLogo },
];

const CAR_PATHS = {
  Sedan: "M8 14 Q10 10 14 10 L22 10 Q26 10 28 12 L30 14 Z M6 14 L32 14 L32 17 Q32 19 30 19 L8 19 Q6 19 6 17 Z M10 19 A2.5 2.5 0 1 0 15 19 A2.5 2.5 0 1 0 10 19 Z M23 19 A2.5 2.5 0 1 0 28 19 A2.5 2.5 0 1 0 23 19 Z",
  Hatchback: "M10 14 Q11 10 15 10 L23 10 Q26 10 28 12 L30 14 Z M6 14 L30 14 L30 17 Q30 19 28 19 L8 19 Q6 19 6 17 Z M10 19 A2.5 2.5 0 1 0 15 19 A2.5 2.5 0 1 0 10 19 Z M22 19 A2.5 2.5 0 1 0 27 19 A2.5 2.5 0 1 0 22 19 Z",
  SUV: "M8 13 Q9 9 14 9 L24 9 Q28 9 30 12 L32 14 L32 18 Q32 19 30 19 L8 19 Q6 19 6 18 L6 14 Z M10 19 A2.5 2.5 0 1 0 15 19 A2.5 2.5 0 1 0 10 19 Z M23 19 A2.5 2.5 0 1 0 28 19 A2.5 2.5 0 1 0 23 19 Z",
  MUV: "M7 12 L7 19 L31 19 L31 12 Q31 10 29 10 L9 10 Q7 10 7 12 Z M10 19 A2.5 2.5 0 1 0 15 19 A2.5 2.5 0 1 0 10 19 Z M23 19 A2.5 2.5 0 1 0 28 19 A2.5 2.5 0 1 0 23 19 Z M14 10 L14 14 M20 10 L20 14",
};

const CarIcon = ({ type }) => (
  <svg viewBox="0 0 38 28" width="52" height="36" fill="none">
    <path
      d={CAR_PATHS[type]}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrandLogo = ({ brand, onClick }) => (
  <div
    onClick={onClick}
    style={{
      width: 72,
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <img
      src={brand.src}
      alt={brand.name}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "flex";
      }}
      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
    />
    <span
      style={{
        display: "none",
        fontSize: 11,
        fontWeight: 700,
        color: "#111",
        textAlign: "center",
        whiteSpace: "pre-line",
        lineHeight: 1.2,
      }}
    >
      {brand.name}
    </span>
  </div>
);

export default function RepairShop() {
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
        <SearchBar />

        <div style={{ padding: "12px 16px" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              marginBottom: 16,
              color: "#111",
            }}
          >
            I DRIVE
          </h2>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "space-between",
            }}
          >
            {carTypes.map((car) => (
              <div
                key={car.label}
                onClick={() =>
                  navigate("/explore/repair/car-search")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    backgroundColor: car.active ? "#00BFA5" : "#F5C842",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: car.active ? "#fff" : "#7a5e00",
                  }}
                >
                  <CarIcon type={car.label} />
                </div>

                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#222",
                  }}
                >
                  {car.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "20px 16px 12px" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              marginBottom: 16,
              color: "#111",
            }}
          >
            BRAND
          </h2>

          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {brands.map((brand) => (
              <BrandLogo
                key={brand.name}
                brand={brand}
                onClick={() =>
                  navigate("/explore/repair/brand-search")
                }
              />
            ))}
          </div>
        </div>

        <div
          style={{
            margin: "16px",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#111",
            minHeight: 200,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 12,
              backgroundColor: "#333",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            AD›
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                color: "#e00",
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: 6,
                textShadow: "0 0 20px rgba(220,0,0,0.6)",
                fontFamily: "Georgia, serif",
              }}
            >
              HONDA
            </span>

            <div
              style={{
                width: 120,
                height: 2,
                backgroundColor: "#fff",
                opacity: 0.3,
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <BottomNav />
      </div>
    </div>
  );
}
