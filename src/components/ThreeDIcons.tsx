import React from "react";

interface Icon3DProps {
  className?: string;
  size?: number;
}

/**
 * 3D Official WhatsApp Icon in ALTO-RELEVO
 * Uses the 100% exact, official, non-distorted WhatsApp vector symbol.
 * Elevated tactile button platform with specular top highlight, bevel,
 * and realistic depth shadows.
 */
export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 64 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 3D Elevated Base Platform / Alto-Relevo Chamber */}
      <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2d1246] to-[#12061e] border-t border-white/30 border-x border-white/12 border-b-[5px] border-[#080210] shadow-[0_16px_32px_rgba(0,0,0,0.7),0_4px_14px_rgba(37,211,102,0.35)] flex items-center justify-center transition-all duration-200">
        {/* Top inner specular glass sheen */}
        <div className="absolute inset-x-2 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

        {/* 100% Exact Official WhatsApp Vector Symbol */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[86%] h-[86%] drop-shadow-[0_4px_10px_rgba(37,211,102,0.55)] overflow-visible"
        >
          {/* Official Green Bubble */}
          <path
            d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.765.46 3.486 1.336 5.006L2 22l5.127-1.314c1.472.803 3.136 1.226 4.877 1.226 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2z"
            fill="url(#waGreenGrad)"
          />

          {/* Top gloss highlight curve on the green bubble */}
          <path
            d="M5 10C5 6.5 8 4 12 4C16 4 19 6.5 19 10C19 12 16 11.5 12 11.5C8 11.5 5 12 5 10Z"
            fill="url(#waTopSheen)"
          />

          {/* Official White Phone Handset Vector */}
          <path
            d="M17.464 15.044c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.199.297-.77.967-.944 1.165-.174.198-.348.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.174.199-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.918-2.206-.242-.58-.487-.501-.67-.51-.173-.008-.372-.01-.571-.01-.199 0-.521.074-.794.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.073.149.199 2.095 3.2 5.077 4.487.71.307 1.264.49 1.696.627.713.227 1.362.195 1.875.118.572-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="#FFFFFF"
            filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.35))"
          />

          <defs>
            <linearGradient id="waGreenGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3CE97E" />
              <stop offset="45%" stopColor="#25D366" />
              <stop offset="100%" stopColor="#108577" />
            </linearGradient>
            <linearGradient id="waTopSheen" x1="12" y1="4" x2="12" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

/**
 * 3D Official Instagram Icon in ALTO-RELEVO
 * Uses the official Instagram squircle geometry and official vibrant gradient.
 * Elevated tactile button platform with specular highlight and depth shadows.
 */
export const Instagram3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 64 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 3D Elevated Base Platform / Alto-Relevo Chamber */}
      <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2d1246] to-[#12061e] border-t border-white/30 border-x border-white/12 border-b-[5px] border-[#080210] shadow-[0_16px_32px_rgba(0,0,0,0.7),0_4px_14px_rgba(225,48,108,0.35)] flex items-center justify-center transition-all duration-200">
        {/* Top inner specular glass sheen */}
        <div className="absolute inset-x-2 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

        {/* 100% Exact Official Instagram Vector Symbol */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[86%] h-[86%] drop-shadow-[0_4px_10px_rgba(225,48,108,0.5)] overflow-visible"
        >
          {/* Official IG Gradient Squircle */}
          <rect x="2.5" y="2.5" width="27" height="27" rx="7.5" fill="url(#igOfficialGrad)" />

          {/* Top gloss sheen on the squircle */}
          <path
            d="M3.5 10C3.5 6 6 3.5 10 3.5H22C26 3.5 28.5 6 28.5 10C28.5 13 22 14.5 16 14.5C10 14.5 3.5 13 3.5 10Z"
            fill="url(#igGlossSheen)"
          />

          {/* Official Camera Body Line */}
          <rect
            x="8"
            y="8"
            width="16"
            height="16"
            rx="4.8"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            fill="none"
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
          />

          {/* Camera Lens */}
          <circle
            cx="16"
            cy="16"
            r="4.2"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            fill="none"
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
          />

          {/* Flash Dot */}
          <circle cx="21" cy="11" r="1.3" fill="#FFFFFF" />

          <defs>
            <radialGradient id="igOfficialGrad" cx="25%" cy="105%" r="110%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="18%" stopColor="#FCAF45" />
              <stop offset="38%" stopColor="#F77737" />
              <stop offset="55%" stopColor="#FD1D1D" />
              <stop offset="78%" stopColor="#C13584" />
              <stop offset="96%" stopColor="#5851DB" />
              <stop offset="100%" stopColor="#405DE6" />
            </radialGradient>
            <linearGradient id="igGlossSheen" x1="16" y1="3.5" x2="16" y2="14.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

/**
 * 3D Official Google Maps Pin Icon in ALTO-RELEVO
 * Uses the recognized multi-color Google Maps pin geometry on an elevated tactile platform.
 */
export const GoogleMaps3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 64 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2d1246] to-[#12061e] border-t border-white/30 border-x border-white/12 border-b-[5px] border-[#080210] shadow-[0_16px_32px_rgba(0,0,0,0.7),0_4px_14px_rgba(234,67,53,0.35)] flex items-center justify-center transition-all duration-200">
        {/* Top inner specular glass sheen */}
        <div className="absolute inset-x-2 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[86%] h-[86%] drop-shadow-[0_4px_10px_rgba(234,67,53,0.5)] overflow-visible"
        >
          {/* Blue segment */}
          <path
            d="M16 29C15.1 27.9 7 17.5 7 11.8C7 9.8 7.7 8 8.9 6.5L16 15L16 29Z"
            fill="#4285F4"
          />

          {/* Green segment (Point) */}
          <path
            d="M16 29L13.5 21L16 16L18.5 21L16 29Z"
            fill="#34A853"
          />

          {/* Yellow segment */}
          <path
            d="M16 16L18.5 21L22 16.5C23.9 14.1 25 12.3 25 11.8C25 10.3 24.5 8.9 23.6 7.8L16 16Z"
            fill="#FBBC05"
          />

          {/* Red segment (Head Cap) */}
          <path
            d="M8.9 6.5C10.6 4.3 13.1 3 16 3C18.9 3 21.4 4.3 23.1 6.5L16 13.5L8.9 6.5Z"
            fill="#EA4335"
          />

          {/* Top highlight curve for 3D glassy gloss */}
          <path
            d="M10.5 5.5C12 4.2 13.9 3.5 16 3.5C18.1 3.5 20 4.2 21.5 5.5C19.5 7 12.5 7 10.5 5.5Z"
            fill="#FFFFFF"
            fillOpacity="0.65"
          />

          {/* Pin Center Core Hole */}
          <circle cx="16" cy="11.5" r="4.2" fill="#140722" stroke="#FFFFFF" strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  );
};

/**
 * 3D Fashion Shopping Bag Icon in ALTO-RELEVO
 * Authentic 3D chic luxury boutique bag with curved 3D handles,
 * rich volume, specular lighting, lilac & pure white finish.
 */
export const FashionBag3DIcon: React.FC<Icon3DProps> = ({ className = "", size = 30 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_4px_12px_rgba(216,187,245,0.6)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Bag Body Gradient */}
          <linearGradient id="bag3dBody" x1="12" y1="20" x2="52" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F5EDFF" />
            <stop offset="70%" stopColor="#D8BBF5" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          {/* 3D Handle Gradient */}
          <linearGradient id="bag3dHandle" x1="22" y1="6" x2="42" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E9DCFC" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </linearGradient>

          {/* Specular Sheen */}
          <linearGradient id="bagSheenGrad" x1="20" y1="24" x2="44" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 3D Handle (Back & Front Arch) */}
        <path
          d="M23 24V16C23 10.477 27.029 6 32 6C36.971 6 41 10.477 41 16V24"
          stroke="url(#bag3dHandle)"
          strokeWidth="4.2"
          strokeLinecap="round"
        />

        {/* Bag Base Cast Shadow for Alto-Relevo */}
        <path
          d="M14 26H50L54.5 57C54.8 59 53 60.5 51 60.5H13C11 60.5 9.2 59 9.5 57L14 26Z"
          fill="#130720"
          opacity="0.4"
          transform="translate(0, 2)"
        />

        {/* 3D Trapezoid Bag Main Body */}
        <path
          d="M15 24H49L53.5 55.5C53.8 57.5 52.2 59 50.2 59H13.8C11.8 59 10.2 57.5 10.5 55.5L15 24Z"
          fill="url(#bag3dBody)"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />

        {/* Diagonal Specular Sheen across Bag Front */}
        <path
          d="M17 26L47 26L43 38L15 38Z"
          fill="url(#bagSheenGrad)"
        />

        {/* Elegant Center Rib / Emboss */}
        <path
          d="M32 24V59"
          stroke="#7B2CBF"
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />
      </svg>
    </div>
  );
};
