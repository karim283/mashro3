export const categories = [
  { name: "Repair shop", icon: "🚗" },
  { name: "Favorite", icon: "💚" },
  { name: "Gas station", icon: "⛽" },
  { name: "Care centers", icon: "⚖️" },
];

export const carCareImages = [
  "/car2.png",
  "/car3.png",
  "/car4.png",
  "/car5.jpg",
];

// Randomizer
export const getRandomItems = (arr, count = 3) => {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
};
