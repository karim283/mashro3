import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import KiaEV6 from "../assets/kia-ev6-car.png";
import KiaSeltos from "../assets/kia-seltos-car.png";
import KiaSeltos2 from "../assets/kia-seltos-2-car.png";
import KiaSlogan from "../assets/kia-slogan.png";

const cars = [
  {
    id: 1,
    name: "KIA EV6",
    img: KiaEV6,
  },
  {
    id: 2,
    name: "KIA SELTOS",
    img: KiaSeltos,
  },
  {
    id: 3,
    name: "KIA SELTOS",
    img: KiaSeltos2,
  },
];

const CarSection = ({ car, navigate }) => (
  <div
    onClick={() =>
      navigate("/explore/repair/brand-search/car-details")
    }
    style={{ marginBottom: 8, cursor: "pointer" }}
  >
    <div style={{ padding: "0 20px 6px" }}>
      <div
        style={{
          fontWeight: 800,
          fontSize: 15,
          color: "#111",
          letterSpacing: 0.3,
        }}
      >
        {car.name}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginTop: 2,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "#444",
            letterSpacing: 0.5,
          }}
        >
          VARIENTS
        </span>

        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="#444"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 8h8M9 5l3 3-3 3" />
        </svg>
      </div>
    </div>

    <div
      style={{
        position: "relative",
        width: "100%",
        height: 190,
        overflow: "visible",
      }}
    >
      <img
        src={car.img}
        alt={car.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
        onError={(e) => {
          e.target.style.opacity = 0.15;
        }}
      />
    </div>

    <div
      style={{
        height: 1,
        backgroundColor: "#f0f0f0",
        margin: "8px 0 0",
      }}
    />
  </div>
);

export default function BrandSearch() {
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
              navigate("/explore/repair/car-search")
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
            padding: "8px 20px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={KiaSlogan}
            alt="KIA Slogan"
            style={{
              width: "100%",
              maxWidth: 200,
              height: 120,
              objectFit: "contain",
            }}
            onError={(e) => {
              e.target.style.opacity = 0.2;
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          {cars.map((car) => (
            <CarSection
              key={car.id}
              car={car}
              navigate={navigate}
            />
          ))}
        </div>

        <div style={{ height: 24 }} />
        <BottomNav />
      </div>
    </div>
  );
}