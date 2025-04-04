import { useEffect } from "react";
import "../style/stars.css"; // Import the CSS

const createStar = () => {
  const star = document.createElement("div");
  star.classList.add("star");

  // Add random size class
  const sizes = ["small", "medium", "large"];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  star.classList.add(randomSize);

  // Use an SVG star instead of a dot
  star.innerHTML = "★";

  // Random Position within the viewport
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Random Animation Duration
  const duration = Math.random() * 3 + 1; // Between 1s and 4s
  star.style.animationDuration = `${duration}s`;

  document.querySelector(".stars-container").appendChild(star);

  // Remove the star after animation ends
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
};

const SparklingStars = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < 5; i++) createStar(); // Creates multiple stars per interval
    }, 500);
    return () => clearInterval(interval); // Cleanup when unmounted
  }, []);

  return <div className="stars-container"></div>;
};

export default SparklingStars;
