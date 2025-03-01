import React, { useState } from "react";
import total from "./asset/total.png"; // Replace with your actual logo paths
import logo2 from "./asset/logo2.png";
import logo3 from "./asset/logo3.png";
import mobil from "./asset/mobil.png";

const LogoSlider = () => {
  const [hovered, setHovered] = useState(null);

  // Array of logo image URLs (replace these with your actual image paths or imports)
  const logos = [mobil, logo2, logo3, total, logo2, logo3];

  return (
    <div className="relative w-full overflow-hidden flex items-center h-40 mt-4 p-5 pb-2">
      <div className="logo-container flex space-x-6 md:space-x-10">
        {/* Duplicate logos to create the infinite effect */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="logo-item flex-shrink-0"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className={`transition-all duration-300 ease-in-out ${
                hovered === index
                  ? "opacity-100 scale-110" // Full opacity and larger scale on hover
                  : "opacity-50 scale-100" // Reduced opacity by default
              }`}
              width={100} // Set the size of each logo (can be adjusted)
              height={100} // Set the size of each logo (can be adjusted)
            />
          </div>
        ))}
      </div>

      {/* Gradient Blur Overlay */}
      <div className="blur-overlay"></div>

      <style jsx>{`
        .logo-container {
          display: flex;
          animation: slide 30s linear infinite; /* Slower sliding speed */
          position: relative;
        }

        .logo-container:hover {
          animation-play-state: paused; /* Pauses animation on hover */
        }

        .logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.8));
          pointer-events: none; /* Prevent overlay from interfering with hover */
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Moves logos completely out of view */
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .logo-container {
            flex-wrap: nowrap; /* Ensure logos stay in a row */
            overflow-x: auto; /* Allow horizontal scrolling on small screens */
          }

          .logo-item {
            margin: 0 10px; /* Add some spacing between logos on mobile */
          }

          .logo-container img {
            width: 80px; /* Slightly smaller logos on mobile */
            height: 80px;
          }

          .blur-overlay {
            background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.8));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
