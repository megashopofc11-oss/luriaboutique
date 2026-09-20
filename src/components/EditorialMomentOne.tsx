import React from "react";
import { motion } from "motion/react";
import { ScrollRevealPhoto } from "./ScrollRevealPhoto";
import { REAL_PHOTOS } from "../types";

export const EditorialMomentOne: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* Fotografia entrando pela direita */}
      <ScrollRevealPhoto
        photoUrl={REAL_PHOTOS[1].url}
        position="right"
        targetOpacity={0.65}
        slideDistance={45}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-5">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight uppercase leading-[1.1] text-crisp-shadow"
        >
          <span>LOOKS PARA </span>
          <br className="sm:hidden" />
          <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_18px_rgba(216,187,245,0.65)]">
            CADA MOMENTO.
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans-ui text-base sm:text-xl md:text-2xl text-[#F5EEFF] font-light max-w-lg mx-auto leading-relaxed"
        >
          Do casual ao elegante, encontre combinações para acompanhar o seu estilo.
        </motion.p>
      </div>
    </section>
  );
};
