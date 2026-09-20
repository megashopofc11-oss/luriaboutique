import React from "react";
import { motion } from "motion/react";
import { OfficialLogo } from "./OfficialLogo";

export const OpeningHero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-between px-5 pt-12 pb-8 overflow-hidden z-10">
      {/* Top spacing element */}
      <div className="w-full flex justify-center pt-2">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-[#d8bbf5]/40 to-transparent" />
      </div>

      {/* Central Opening Presentation */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center my-auto py-6">
        {/* LOGO OFICIAL - GRANDE E MUITO BEM VALORIZADA */}
        <OfficialLogo size="large" className="mb-8 sm:mb-10" />

        {/* Phrases below the logo with Pure White #FFFFFF and High Presence */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
          className="space-y-3 px-4"
        >
          <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-wide leading-tight text-crisp-shadow">
            <span>Vista o que combina com </span>
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_14px_rgba(216,187,245,0.6)]">
              você.
            </span>
          </p>

          <p className="font-sans-ui text-base sm:text-lg text-[#F5EEFF] tracking-[0.04em] font-light">
            Looks para viver o seu estilo.
          </p>
        </motion.div>
      </div>

      {/* Discreet Animated Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="flex flex-col items-center gap-2 pb-2 select-none"
      >
        <span className="font-sans-ui text-[11px] uppercase tracking-[0.28em] text-[#E8DDF5] font-semibold">
          Deslize para descobrir
        </span>

        <div className="w-4 h-9 rounded-full border border-[#d8bbf5]/50 flex items-start justify-center p-1 bg-[#200e35]/60 backdrop-blur-xs">
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-white to-[#d8bbf5]"
          />
        </div>
      </motion.div>
    </section>
  );
};
