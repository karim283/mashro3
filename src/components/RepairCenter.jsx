import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import Center from "../assets/center.png";
import KiaRed from "../assets/kia-red-front.png";
import User1 from "../assets/madian.png";
import User2 from "../assets/adham.png";

const Blobs = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 150,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -40,
        left: -60,
        width: 300,
        height: 190,
        borderRadius: "50%",
        backgroundColor: "#F5C842",
        opacity: 0.9,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: -40,
        right: -60,
        width: 250,
        height: 190,
        borderRadius: "50%",
        backgroundColor: "#00BFA5",
        opacity: 0.9,
      }}
    />
  </div>
);

const StarRating = ({ rating = 4, total = 5, size = 14 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {Array.from({ length: total }, (_, i) => (
      <svg key={i} viewBox="0 0 16 16" width={size} height={size}>
        <polygon
          points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"
          fill={i < rating ? "#F5C842" : "#e0e0e0"}
        />
      </svg>
    ))}
  </div>
);


const ShopHeader = ({ onBack }) => (
  <>
    {/* Back Arrow */}
    <div style={{ padding: "20px 20px 8px", position: "relative", zIndex: 1 }}>
      <button
        onClick={onBack}
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
        margin: "0 16px",
        borderRadius: 16,
        overflow: "hidden",
        height: 220,
        position: "relative",
        zIndex: 1,
      }}
    >
      <img
        src={Center}
        alt="Mark EV Motors"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onError={(e) => {
          e.target.style.backgroundColor = "#ddd";
          e.target.style.opacity = 0;
        }}
      />
    </div>

    <div
      style={{
        padding: "14px 20px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#111" }}>
          MARK EV MOTORS
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#666",
            marginTop: 4,
            lineHeight: 1.5,
          }}
        >
          5th elnasr, smouha
          <br />
          alexandria, Egypt
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 10,
        }}
      >
        <StarRating rating={4} />

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {/* Heart */}
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#555"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>

          <svg viewBox="0 0 24 28" width="20" height="24" fill="none">
            <path
              d="M12 0C7.13 0 3 4.13 3 9c0 6.75 9 19 9 19s9-12.25 9-19c0-4.87-4.13-9-9-9z"
              fill="#F5C842"
            />
            <circle cx="12" cy="9" r="3.2" fill="#fff" />
          </svg>

          {/* Phone */}
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </div>
    </div>
  </>
);

const TealButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: "#00BFA5",
      color: "#fff",
      border: "none",
      borderRadius: 20,
      padding: "9px 18px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
      whiteSpace: "nowrap",
      width: "100%",
      textAlign: "center",
    }}
  >
    {children}
  </button>
);

const reviews = [
  {
    name: "Abdallah Madian",
    date: "May 23, 2025",
    rating: 4,
    comment: "They Washed My car very good",
    avatar: User1,
  },
  {
    name: "Adham abbas",
    date: "April 12, 2024",
    rating: 4.5,
    comment: "They were very helpful with me!",
    avatar: User2,
  },
];

const ReviewCard = ({ review }) => (
  <div
    style={{
      border: "1px solid #e8e8e8",
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 12,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#ddd",
            flexShrink: 0,
          }}
        >
          <img
            src={review.avatar}
            alt={review.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{review.name}</div>
          <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>
            {review.date}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <svg viewBox="0 0 16 16" width="14" height="14">
          <polygon
            points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"
            fill="#F5C842"
          />
        </svg>
        <span style={{ fontSize: 13, fontWeight: 700 }}>{review.rating}</span>
      </div>
    </div>

    <div
      style={{
        fontSize: 12,
        color: "#555",
        marginTop: 10,
        textAlign: "center",
      }}
    >
      {review.comment}
    </div>
  </div>
);

export default function RepairCenter() {
  const navigate = useNavigate();
  const [showReviews, setShowReviews] = useState(false);

  const goBack = () => {
    if (showReviews) {
      setShowReviews(false);
    } else {
      navigate(
        "/explore/repair/brand-search/car-details/select-repair-shop"
      );
    }
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
          position: "relative",
        }}
      >
        <Blobs />

        <ShopHeader onBack={goBack} />

        {!showReviews ? (
          <>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px 16px 8px",
                gap: 12,
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  src={KiaRed}
                  alt="KIA EV6"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: 140,
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  width: 148,
                }}
              >
                <TealButton>Request CallBack</TealButton>
                <TealButton>Find on map</TealButton>
                <TealButton onClick={() => setShowReviews(true)}>
                  Show reviews
                </TealButton>
              </div>
            </div>

            <div style={{ padding: "16px 20px 0" }}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                Description
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.7,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                We are a mobile workshop that travels to you. Instead of
                wasting your day at a repair shop, our certified technicians
                arrive at your location fully equipped to handle maintenance,
                repairs, and cleaning—saving you time, money, and hassle.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Reviews */}
            <div style={{ padding: "24px 20px 0" }}>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Reviews & Rating
              </h2>

              {reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </>
        )}

        <div style={{ flex: 1 }} />
        <BottomNav />
      </div>
    </div>
  );
}