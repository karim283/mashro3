import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import BottomNav from "./BottomNav";
import KiaEV6 from "../assets/kia-ev6-removebg-preview.png";
import BentlyEO1 from "../assets/bently-eo1-removebg-preview.png";
import NissaEQZ1 from "../assets/nissan-eq-z1-removebg-preview.png";
import FerrariEVF1 from "../assets/ferrari-evf1-removebg-preview.png";
import hondaLogo from "../assets/honda-logo.png";
import bmwLogo from "../assets/bmw-logo.png";
import mercedesLogo from "../assets/mercedes-logo.png";
import audiLogo from "../assets/audi-logo.png";

const filters = ["Range", "Speed", "Luxury", "Utility"];

const cars = [
  { id: 1, name: "KIA EV6", stars: 4, img: KiaEV6 },
  { id: 2, name: "BENTLY EO1", stars: 4, img: BentlyEO1 },
  { id: 3, name: "NISSAN EQ Z1", stars: 4, img: NissaEQZ1 },
  { id: 4, name: "FERRARI EVF1", stars: 4, img: FerrariEVF1 },
];

const brands = [
  { name: "Honda", img: hondaLogo },
  { name: "BMW", img: bmwLogo },
  { name: "Mercedes", img: mercedesLogo },
  { name: "Audi", img: audiLogo },
];

const StarRating = ({ count }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 16 16" width="14" height="14">
        <polygon
          points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"
          fill={i <= count ? "#F5C842" : "#e0e0e0"}
        />
      </svg>
    ))}
  </div>
);

const SortIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="#333"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M3 6h18M7 12h10M11 18h2" />
    <path d="M16 4l2 2-2 2" />
  </svg>
);

const FilterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="#333"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="8" cy="6" r="2" fill="white" />
    <circle cx="16" cy="12" r="2" fill="white" />
    <circle cx="10" cy="18" r="2" fill="white" />
  </svg>
);

const CarCard = ({ car, navigate }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() => navigate("/explore/repair/brand-search")}
      style={{
        backgroundColor: "#FFFDF0",
        borderRadius: 16,
        padding: "12px 12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor: "#f9f6e8",
          borderRadius: 12,
          height: 130,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={car.img}
          alt={car.name}
          style={{ maxWidth: "90%", maxHeight: "110px", objectFit: "contain" }}
          onError={(e) => {
            e.target.style.opacity = 0.2;
          }}
        />
      </div>

      <div
        style={{
          fontWeight: 800,
          fontSize: 13,
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
          justifyContent: "space-between",
        }}
      >
        <StarRating count={car.stars} />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill={liked ? "#e53935" : "none"}
            stroke={liked ? "#e53935" : "#bbb"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BrandItem = ({ brand, navigate }) => (
  <div
    onClick={() => navigate("/explore/repair/brand-search")}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      flex: 1,
      marginTop: 12,
      marginBottom: 12,
      cursor: "pointer",
    }}
  >
    <img
      src={brand.img}
      alt={brand.name}
      style={{
        width: 68,
        height: 68,
        objectFit: "contain",
      }}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
      }}
    />
    <span style={{ display: "none", fontWeight: 700, fontSize: 12 }}>
      {brand.name}
    </span>
  </div>
);

export default function CarSearch() {
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

        <div
          style={{
            padding: "4px 16px 12px",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                border: "1.5px solid #ccc",
                borderRadius: 20,
                padding: "4px 12px",
                fontSize: 12,
                color: "#333",
                cursor: "pointer",
              }}
            >
              {f}
              <svg
                viewBox="0 0 12 12"
                width="10"
                height="10"
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
              >
                <circle cx="6" cy="6" r="5" />
                <path d="M4 4l4 4M8 4l-4 4" />
              </svg>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "4px 16px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              color: "#111",
            }}
          >
            SEARCH RESULTS
          </h2>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <SortIcon />
            <FilterIcon />
          </div>
        </div>

        <div
          style={{
            padding: "0 16px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} navigate={navigate} />
          ))}
        </div>

        <div style={{ padding: "28px 16px 18px" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              color: "#111",
              marginBottom: 18,
            }}
          >
            BRAND
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {brands.map((b) => (
              <BrandItem
                key={b.name}
                brand={b}
                navigate={navigate}
              />
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <BottomNav />
      </div>
    </div>
  );
}