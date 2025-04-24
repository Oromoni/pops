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
    <div className="relative w-full overflow-hidden flex items-center mt-4 p-5 pb-2 h-40" >
      <div className="logo-container flex space-x-6 md:space-x-10 animate-slide">
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
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 pointer-events-none"></div>

      {/* Tailwind's animations: Customize as per needs */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Moves logos completely out of view */
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 30s linear infinite; /* Slower sliding speed */
        }

        .logo-container:hover {
          animation-play-state: paused; /* Pauses animation on hover */
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
