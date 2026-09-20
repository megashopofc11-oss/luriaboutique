import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { REAL_PHOTOS } from "../types";

export const InspirationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking && sectionRef.current) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
            setScrollY(rect.top);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax offsets (strictly Y-axis translation, zero camera zoom)
  const offset1 = scrollY * 0.05;
  const offset2 = -scrollY * 0.07;
  const offset3 = scrollY * 0.03;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 px-5 flex flex-col items-center justify-center overflow-hidden z-10"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Heading with Pure White #FFFFFF and High Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-3 mb-12 sm:mb-16"
        >
          <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight text-crisp-shadow">
            <span>INSPIRAÇÃO PARA O </span>
            <br className="sm:hidden" />
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_16px_rgba(216,187,245,0.65)]">
              SEU PRÓXIMO LOOK
            </span>
          </h3>
          <p className="font-sans-ui text-base sm:text-xl text-[#F5EEFF] font-light tracking-wide">
            Looks que falam por você.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Photo Composition */}
        <div className="relative w-full max-w-2xl h-[420px] sm:h-[540px] flex items-center justify-center">
          {/* Photo 2 (Partially Behind, Top Right, Speed 2) */}
          <div
            className="absolute top-0 right-2 sm:right-8 w-[48%] sm:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)] border border-white/20 z-10 will-change-transform transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(0, ${offset2}px, 0)`,
            }}
          >
            <img
              src={REAL_PHOTOS[3].url}
              alt="Editorial look"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
            {/* Soft inner vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140624]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 1 (Main / Dominant, Center-Left, Speed 1) */}
          <div
            className="absolute left-4 sm:left-12 top-10 sm:top-12 w-[58%] sm:w-[310px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.75)] border border-white/25 z-20 will-change-transform transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(0, ${offset1}px, 0)`,
            }}
          >
            <img
              src={REAL_PHOTOS[4].url}
              alt="Editorial look principal"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140624]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 3 (Smaller / Front Accent, Bottom Right, Speed 3) */}
          <div
            className="absolute bottom-2 right-6 sm:right-16 w-[40%] sm:w-[210px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.8)] border border-white/30 z-30 will-change-transform transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(0, ${offset3}px, 0)`,
            }}
          >
            <img
              src={REAL_PHOTOS[5].url}
              alt="Editorial look detalhe"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140624]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
