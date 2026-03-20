const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });

const lat = 30.0444;
const lng = 31.2357;
const key = process.env.GOOGLE_API_KEY;
console.log("key", key ? "present" : "missing");

axios
  .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
    params: {
      location: `${lat},${lng}`,
      radius: 5000,
      type: "gas_station",
      key,
    },
  })
  .then((res) => {
    console.log("status", res.status);
    console.log(
      "results",
      res.data.results ? res.data.results.length : "undefined",
    );
    console.log("status_message", res.data.status);
    console.log("error_message", res.data.error_message);
    console.log(
      "first",
      res.data.results && res.data.results[0]
        ? res.data.results[0].name
        : "none",
    );
    console.log(JSON.stringify(res.data, null, 2));
  })
  .catch((err) => {
    console.error("err", err.toString());
    if (err.response) {
      console.error("resp", err.response.status, err.response.data);
    }
  });
