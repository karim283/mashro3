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

// Get gas stations in Alexandria (hardcoded bounding box)
app.get("/api/gas-stations", async (req, res) => {
  try {
    console.log("incoming /api/gas-stations query:", req.query);
    const south = 31.1;
    const north = 31.3;
    const west = 29.8;
    const east = 30.02;

    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="fuel"](${south},${west},${north},${east});out;`;

    const response = await axios.get(overpassUrl);
    const results = response.data.elements || [];

    const stations = results.map((place) => ({
      id: place.id,
      name: place.tags?.name || "Gas Station",
      lat: place.lat,
      lng: place.lon,
      address: place.tags?.["addr:street"] || "No address",
    }));

    if (!stations.length) {
      return res.json([
        {
          id: "demo-1",
          name: "Fallback Gas Station",
          lat: 31.2001,
          lng: 29.9187,
          address: "No address",
        },
      ]);
    }

    res.json(stations);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch gas stations" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
