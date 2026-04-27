import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KiaRed from "../assets/kia-ev6-red.png";
import KiaWhite from "../assets/kia-ev9.png";
import Wheel from "../assets/wheel.png";
import Odometer from "../assets/odometer.png";
import Odometer2 from "../assets/odometer-1.png";
import KiaSlogan from "../assets/kia-slogan.png";

const specs = [
  { icon: "weight", value: "4,456lbs", label: "Weight" },
  { icon: "range", value: "418km", label: "Electric range" },
  { icon: "speed", value: "200mph", label: "Top Speed" },
  { icon: "accel", value: "1.99sec", label: "0-100mph" },
  { icon: "power", value: "408hp", label: "Power" },
];

const variants = [
  { name: "EV6 GT line", sub: "Automatic, Electric" },
  { name: "EV6 GT line AWD", sub: "Automatic, Electric" },
];

const colorSwatches = ["#6B7355", "#B00020", "#1A1A1A", "#F5C842"];

const thumbnails = [KiaWhite, Odometer2, Odometer, Wheel];

const SpecIcon = ({ type }) => {
  const props = {
    viewBox: "0 0 32 32",
    width: 28,
    height: 28,
    fill: "none",
    stroke: "#222",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "weight")
    return (
      <svg {...props}>
        <rect x="4" y="14" width="24" height="12" rx="2" />
        <path d="M10 14V10a6 6 0 0 1 12 0v4" />
        <line x1="4" y1="20" x2="28" y2="20" />
      </svg>
    );

  if (type === "range")
    return (
      <svg {...props}>
        <circle cx="16" cy="16" r="11" />
        <path d="M16 5v3M16 24v3M5 16h3M24 16h3" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    );

  if (type === "speed")
    return (
      <svg {...props}>
        <path d="M6 22a11 11 0 1 1 20 0" />
        <path d="M16 22V12" />
        <circle cx="16" cy="22" r="1.5" fill="#222" />
      </svg>
    );

  if (type === "accel")
    return (
      <svg {...props}>
        <circle cx="16" cy="16" r="11" />
        <path d="M16 9v7l4 4" />
      </svg>
    );

  if (type === "power")
    return (
      <svg {...props}>
        <rect x="6" y="10" width="20" height="14" rx="2" />
        <path d="M11 10V7M21 10V7M13 17l3-4v8l3-4" />
      </svg>
    );

  return null;
};

const StarRating = ({ rating = 4 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} viewBox="0 0 16 16" width="16" height="16">
        <polygon
          points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"
          fill={i <= rating ? "#F5C842" : "#e0e0e0"}
        />
      </svg>
    ))}
  </div>
);

export default function CarDetails() {
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState(1);
  const [openVariant, setOpenVariant] = useState(null);

  const goToRepairShop = () => {
    navigate(
      "/explore/repair/brand-search/car-details/select-repair-shop"
    );
  };

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
          paddingBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 0",
            marginBottom: 14,
          }}
        >
          <button
            onClick={() =>
              navigate("/explore/repair/brand-search")
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

          <img
            src={KiaSlogan}
            alt="KIA"
            style={{
              width: 110,
              height: 42,
              objectFit: "contain",
            }}
            onError={(e) => {
              e.target.style.opacity = 0.2;
            }}
          />
        </div>

        <div style={{ height: 14 }} />

        <div
          style={{
            width: "100%",
            height: 260,
            backgroundColor: "#f7f7f7",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={KiaRed}
            alt="KIA EV6"
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
            padding: "16px 20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, color: "#111" }}>
              KIA EV6
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#111",
                marginTop: 2,
              }}
            >
              model:2018
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <div>
              <StarRating rating={4} />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#111",
                  textAlign: "right",
                  marginTop: 2,
                }}
              >
                Overall Rating
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
              {colorSwatches.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveColor(i)}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: c,
                    border: "none",
                    cursor: "pointer",
                    boxShadow:
                      activeColor === i
                        ? `0 0 0 2px #fff, 0 0 0 3.5px ${c}`
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            padding: "18px 20px",
            overflowX: "auto",
          }}
        >
          {thumbnails.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 90,
                height: 68,
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: "#111",
                position: "relative",
              }}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: "2px solid #fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="#fff"
                    >
                      <polygon points="8,5 19,12 8,19" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 16px 20px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          {specs.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <SpecIcon type={s.icon} />
              <span style={{ fontSize: 11, fontWeight: 700 }}>
                {s.value}
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: "#888",
                  textAlign: "center",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ padding: "20px 20px 0" }}>
          <div
            style={{
              fontWeight: 800,
              fontSize: 15,
              marginBottom: 14,
            }}
          >
            VARIENT
          </div>

          {variants.map((v, i) => (
            <div key={i}>
              <div
                onClick={() =>
                  setOpenVariant(openVariant === i ? null : i)
                }
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 14,
                  cursor: "pointer",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {v.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      marginTop: 2,
                    }}
                  >
                    {v.sub}
                  </div>
                </div>

                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transform:
                      openVariant === i
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <div
                style={{
                  height: 1,
                  backgroundColor: "#f0f0f0",
                  marginBottom: 14,
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ padding: "8px 20px 24px" }}>
          <div style={{ fontWeight: 800, fontSize: 15 }}>
            IN DETAIL
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            width: "100%",
          }}
        >
          <button
            onClick={goToRepairShop}
            style={{
              flex: 1,
              padding: "18px 0",
              backgroundColor: "#B00020",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Car care
          </button>

          <div
            style={{
              width: 1,
              backgroundColor: "#fff",
            }}
          />

          <button
            onClick={goToRepairShop}
            style={{
              flex: 1,
              padding: "10px 0",
              backgroundColor: "#C0001E",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Mechanic
          </button>
        </div>
      </div>
    </div>
  );
}
