import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealPhotoProps {
  photoUrl: string;
  position?: "right" | "left" | "behind-text";
  targetOpacity?: number; // range 0.45 - 0.75
  className?: string;
  parallaxSpeed?: number;
  slideDistance?: number; // 30 - 60px lateral glide
}

export const ScrollRevealPhoto: React.FC<ScrollRevealPhotoProps> = ({
  photoUrl,
  position = "right",
  targetOpacity = 0.62,
  className = "",
  parallaxSpeed = 0.08,
  slideDistance = 45,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateTransform = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element midpoint relative to viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Distance from center of viewport in pixels
      const distFromCenter = elementCenter - viewportCenter;
      const absDist = Math.abs(distFromCenter);
      const maxDistance = windowHeight * 0.75;

      if (absDist < maxDistance) {
        // Smooth bell curve for opacity: 0 at bounds -> targetOpacity (0.45-0.75) at center
        const progress = Math.max(0, 1 - absDist / maxDistance);
        const eased = Math.sin((progress * Math.PI) / 2);
        setOpacity(eased * targetOpacity);

        // Lateral entry/exit translation (30-60px) without any scale/zoom
        // When approaching from bottom (distFromCenter > 0), sits further outside screen
        // When centered (distFromCenter = 0), slides into position (0px shift)
        // When scrolling past (distFromCenter < 0), gently glides further out
        const normalizedShift = (distFromCenter / maxDistance);
        let transX = 0;
        if (position === "right") {
          transX = normalizedShift * slideDistance;
        } else if (position === "left") {
          transX = -normalizedShift * slideDistance;
        }
        setOffsetX(transX);

        // Smooth subtle vertical parallax (no scale)
        const transY = distFromCenter * parallaxSpeed;
        setOffsetY(transY);
      } else {
        setOpacity(0);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateTransform();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateTransform();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetOpacity, parallaxSpeed, slideDistance, position]);

  // Spatial sizing: large photos positioned partially offscreen at the edges
  let positionClasses = "";
  if (position === "right") {
    positionClasses =
      "right-[-14%] sm:right-[-6%] md:right-[-4%] top-1/2 -translate-y-1/2 w-[72vw] sm:w-[380px] md:w-[420px] h-[60vh] sm:h-[500px] md:h-[540px]";
  } else if (position === "left") {
    positionClasses =
      "left-[-14%] sm:left-[-6%] md:left-[-4%] top-1/2 -translate-y-1/2 w-[72vw] sm:w-[380px] md:w-[420px] h-[60vh] sm:h-[500px] md:h-[540px]";
  } else {
    positionClasses =
      "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[85vw] sm:w-[500px] h-[65vh] sm:h-[540px]";
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none transition-opacity duration-300 ease-out will-change-transform ${positionClasses} ${className}`}
      style={{
        opacity,
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
      }}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.65)] border border-white/10">
        <img
          src={photoUrl}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 saturate-95"
        />

        {/* Soft edge blend gradient into deep violet canvas */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#140624]/75 via-transparent to-[#140624]/40 pointer-events-none"
        />

        {/* Side feathering mask */}
        {position === "right" && (
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#140624] to-transparent pointer-events-none"
          />
        )}
        {position === "left" && (
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#140624] to-transparent pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};
