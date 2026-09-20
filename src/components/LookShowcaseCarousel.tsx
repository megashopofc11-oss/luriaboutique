import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { REAL_PHOTOS } from "../types";

export const LookShowcaseCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);

  // Triple the photos array to allow boundless, seamless infinite scrolling
  const items = [...REAL_PHOTOS, ...REAL_PHOTOS, ...REAL_PHOTOS];

  // Dragging and auto-motion physics refs
  const posRef = useRef(0);
  const velRef = useRef(-0.55); // gentle continuous forward speed
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const prevXRef = useRef(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate single set width dynamically to wrap cleanly without jumps
  const singleSetWidthRef = useRef(12 * 240);

  const updateMeasurements = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstCard = trackRef.current.children[0] as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 16; // 1rem = 16px
        singleSetWidthRef.current = REAL_PHOTOS.length * (cardWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, [updateMeasurements]);

  // Center detector to apply 3D focus to the middle card
  const detectCenterCard = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    let closestDist = Infinity;
    let closestIdx = 0;

    const children = trackRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const rect = child.getBoundingClientRect();
      const childCenterX = rect.left + rect.width / 2;
      const dist = Math.abs(containerCenterX - childCenterX);

      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i % REAL_PHOTOS.length;
      }
    }

    setCenterIndex(closestIdx);
  }, []);

  // Continuous animation loop using requestAnimationFrame
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const singleWidth = singleSetWidthRef.current;

      if (!isDraggingRef.current) {
        posRef.current += velRef.current;

        if (posRef.current <= -singleWidth) {
          posRef.current += singleWidth;
        } else if (posRef.current > 0) {
          posRef.current -= singleWidth;
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }

      detectCenterCard();
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [detectCenterCard]);

  // Pointer / Touch Handlers for natural swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsInteracting(true);
    startXRef.current = e.clientX;
    prevXRef.current = e.clientX;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - prevXRef.current;
    prevXRef.current = e.clientX;
    posRef.current += delta;

    const singleWidth = singleSetWidthRef.current;
    if (posRef.current <= -singleWidth) {
      posRef.current += singleWidth;
    } else if (posRef.current > 0) {
      posRef.current -= singleWidth;
    }
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1800);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden z-10 select-none">
      {/* Editorial Titles with 100% pure white, crisp shadow and strong presence */}
      <div className="max-w-xl mx-auto px-6 text-center mb-8 sm:mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal uppercase tracking-tight leading-tight text-crisp-shadow"
        >
          <span>ENCONTRE SEU </span>
          <br className="sm:hidden" />
          <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_16px_rgba(216,187,245,0.65)]">
            PRÓXIMO LOOK.
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans-ui text-base sm:text-lg text-[#F5EEFF] font-light mt-3 tracking-wide"
        >
          Uma seleção para inspirar novas combinações.
        </motion.p>
      </div>

      {/* Side Vignette Fades for cinematic immersion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#140722] via-[#140722]/85 to-transparent z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#140722] via-[#140722]/85 to-transparent z-20"
      />

      {/* Carousel Viewport Container with ~20% smaller cards to reveal background and next looks */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y py-4 ${
          isInteracting ? "select-none" : ""
        }`}
      >
        {/* Moving Ticker Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-3.5 sm:gap-4 w-max will-change-transform"
        >
          {items.map((photo, index) => {
            const rawIndex = index % REAL_PHOTOS.length;
            const isCenter = rawIndex === centerIndex;

            return (
              <div
                key={`${photo.id}-${index}`}
                className={`relative shrink-0 transition-all duration-400 ease-out ${
                  isCenter
                    ? "scale-100 z-20 opacity-100 filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                    : "scale-[0.88] z-10 opacity-70 filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)]"
                }`}
                style={{
                  width: "calc(min(42vw, 175px))",
                  aspectRatio: "3/4.2",
                }}
              >
                {/* Visual Frame - Strictly clean: NO badges, NO text, NO buttons */}
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-[#1c0b30]">
                  <img
                    src={photo.url}
                    alt={photo.altText}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover object-center select-none pointer-events-none filter brightness-95 contrast-105"
                  />

                  {/* Subtle edge inner gloss rim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/20"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
