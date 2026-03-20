import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getGasStations = (lat, lng) =>
  API.get(`/gas-stations?lat=${lat}&lng=${lng}`);
