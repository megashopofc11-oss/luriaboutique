import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * OpeningButterfly
 * An anatomically authentic, graceful lilac/violet butterfly.
 * Features realistic forewings, hindwings with delicate scalloped edges,
 * venation patterns, antennae, and 3D fluttering wings.
 * It gently glides across the upper screen quadrant on entrance and flutters out,
 * never covering or stopping on the logo.
 */
export const OpeningButterfly: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Gracefully fade out after flight path finishes
    const timer = setTimeout(() => {
      setVisible(false);
    }, 9500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            x: "-15vw",
            y: "14vh",
            scale: 0.7,
            rotate: 15,
          }}
          animate={{
            opacity: [0, 0.9, 0.95, 0.85, 0],
            x: ["-10vw", "22vw", "55vw", "85vw", "110vw"],
            y: ["14vh", "10vh", "7vh", "12vh", "6vh"],
            scale: [0.75, 0.82, 0.85, 0.8, 0.7],
            rotate: [18, 12, -4, 8, -6],
          }}
          transition={{
            duration: 9.2,
            times: [0, 0.15, 0.5, 0.82, 1],
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute z-20 select-none"
          style={{ perspective: "600px" }}
          aria-hidden="true"
        >
          {/* Butterfly SVG with 3D Left & Right flapping wings */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(157,78,221,0.45)]">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <defs>
                {/* Lilac/Violet Wing Gradient */}
                <linearGradient id="butterflyWing" x1="10" y1="10" x2="90" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#E9DCFC" stopOpacity="0.88" />
                  <stop offset="70%" stopColor="#C4A1E8" stopOpacity="0.82" />
                  <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.75" />
                </linearGradient>

                <linearGradient id="butterflyEdge" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Central Body & Antennae (Center anchor) */}
              <g className="opacity-95">
                {/* Left Antenna */}
                <path
                  d="M59 38C56 26 48 18 42 16"
                  stroke="#E9DCFC"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="41.5" cy="15.5" r="1.5" fill="#FFFFFF" />

                {/* Right Antenna */}
                <path
                  d="M61 38C64 26 72 18 78 16"
                  stroke="#E9DCFC"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="78.5" cy="15.5" r="1.5" fill="#FFFFFF" />

                {/* Head */}
                <circle cx="60" cy="38" r="3.2" fill="#E9DCFC" />

                {/* Thorax */}
                <ellipse cx="60" cy="48" rx="3.5" ry="7" fill="#D8BBF5" />

                {/* Abdomen */}
                <path
                  d="M58 55C58 55 57 72 60 76C63 72 62 55 62 55Z"
                  fill="#9D4EDD"
                />
              </g>

              {/* LEFT WINGS GROUP with 3D Flap */}
              <g
                className="animate-wing-left"
                style={{
                  transformOrigin: "60px 50px",
                }}
              >
                {/* Left Forewing */}
                <path
                  d="M58 46C44 26 22 22 12 30C4 36 6 52 24 58C38 62 54 54 58 46Z"
                  fill="url(#butterflyWing)"
                  stroke="url(#butterflyEdge)"
                  strokeWidth="0.8"
                />
                {/* Left Forewing Delicate Veins */}
                <path
                  d="M56 46C42 38 28 34 16 33M56 48C40 45 28 44 22 46M56 49C44 51 34 54 26 56"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                  strokeOpacity="0.45"
                  strokeLinecap="round"
                />

                {/* Left Hindwing */}
                <path
                  d="M58 52C48 54 26 62 25 74C24 84 38 90 48 83C56 77 58 64 58 52Z"
                  fill="url(#butterflyWing)"
                  stroke="url(#butterflyEdge)"
                  strokeWidth="0.8"
                />
                {/* Left Hindwing Veins */}
                <path
                  d="M57 56C48 64 36 72 32 78M57 60C49 68 44 76 42 81"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
              </g>

              {/* RIGHT WINGS GROUP with 3D Flap */}
              <g
                className="animate-wing-right"
                style={{
                  transformOrigin: "60px 50px",
                }}
              >
                {/* Right Forewing */}
                <path
                  d="M62 46C76 26 98 22 108 30C116 36 114 52 96 58C82 62 66 54 62 46Z"
                  fill="url(#butterflyWing)"
                  stroke="url(#butterflyEdge)"
                  strokeWidth="0.8"
                />
                {/* Right Forewing Delicate Veins */}
                <path
                  d="M64 46C78 38 92 34 104 33M64 48C80 45 92 44 98 46M64 49C76 51 86 54 94 56"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                  strokeOpacity="0.45"
                  strokeLinecap="round"
                />

                {/* Right Hindwing */}
                <path
                  d="M62 52C72 54 94 62 95 74C96 84 82 90 72 83C64 77 62 64 62 52Z"
                  fill="url(#butterflyWing)"
                  stroke="url(#butterflyEdge)"
                  strokeWidth="0.8"
                />
                {/* Right Hindwing Veins */}
                <path
                  d="M63 56C72 64 84 72 88 78M63 60C71 68 76 76 78 81"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
