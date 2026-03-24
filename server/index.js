// index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // you can use .env later if needed

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Get gas stations in Alexandria
app.get("/api/gas-stations", async (req, res) => {
  try {
    console.log("incoming /api/gas-stations query:", req.query);
    const lat = parseFloat(req.query.lat) || 30.0444;
    const lng = parseFloat(req.query.lng) || 31.2357;

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Google API key not configured" });
    }

    // Use Google Places API (New)
    const url = `https://places.googleapis.com/v1/places:searchNearby`;

    const response = await axios.post(
      url,
      {
        includedTypes: ["gas_station"],
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius: 5000.0,
          },
        },
        maxResultCount: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.location,places.formattedAddress,places.rating,places.photos",
        },
      },
    );

    const places = response.data.places || [];

    const stations = places.map((place) => ({
      id: place.id,
      name: place.displayName?.text || "Gas Station",
      address: place.formattedAddress || "No address",
      rating: place.rating || 3,
      lat: place.location?.latitude,
      lng: place.location?.longitude,
      image:
        place.photos && place.photos[0]
          ? `https://places.googleapis.com/v1/${place.photos[0].name}/media?maxHeightPx=400&key=${apiKey}`
          : "https://via.placeholder.com/100",
    }));

    if (!stations.length) {
      return res.json([
        {
          id: "demo-1",
          name: "Fallback Gas Station",
          address: "1 Main Street",
          rating: 4,
          image: "https://via.placeholder.com/100",
        },
      ]);
    }

    res.json(stations);
  } catch (err) {
    console.error("Gas stations API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch gas stations" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
