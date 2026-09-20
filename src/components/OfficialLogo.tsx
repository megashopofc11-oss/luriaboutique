import React from "react";
import { motion } from "motion/react";
import { OFFICIAL_LOGO_URL } from "../types";

interface OfficialLogoProps {
  size?: "large" | "footer";
  className?: string;
  animateOnMount?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  size = "large",
  className = "",
  animateOnMount = true,
}) => {
  const isLarge = size === "large";

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <motion.div
        initial={animateOnMount ? { opacity: 0, scale: 0.95, y: 14 } : false}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative overflow-visible flex items-center justify-center"
      >
        {/* The Official Logo Image - Pure transparent PNG, zero background shadow, zero overlay */}
        <img
          src={OFFICIAL_LOGO_URL}
          alt="Logomarca Oficial"
          loading={isLarge ? "eager" : "lazy"}
          decoding="async"
          className={`relative z-10 w-auto object-contain transition-all duration-700 ${
            isLarge
              ? "max-h-[140px] sm:max-h-[180px] md:max-h-[220px] max-w-[88vw] sm:max-w-[420px]"
              : "max-h-[90px] sm:max-h-[110px] max-w-[70vw] sm:max-w-[320px]"
          }`}
        />
      </motion.div>
    </div>
  );
};
