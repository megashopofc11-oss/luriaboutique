import React from "react";
import { motion } from "motion/react";
import { ScrollRevealPhoto } from "./ScrollRevealPhoto";
import { REAL_PHOTOS } from "../types";

export const ImpactStatement: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 md:py-44 px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* Scroll-revealed photography appearing smoothly on the right with opacity ~0.60 */}
      <ScrollRevealPhoto
        photoUrl={REAL_PHOTOS[0].url}
        position="right"
        targetOpacity={0.62}
        slideDistance={50}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Main protagonist impact headline: Grand, bold, white, editorial with italic accent */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight uppercase leading-[1.08] text-crisp-shadow"
        >
          <span>SEU </span>
          <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_20px_rgba(216,187,245,0.7)]">
            ESTILO
          </span>
          <br />
          <span>MUDA TUDO.</span>
        </motion.h2>

        {/* High contrast, vivid secondary statement in #F5EEFF / #E8DDF5 */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans-ui text-lg sm:text-2xl text-[#F5EEFF] font-light max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          Peças para combinar com você, seu momento e sua personalidade.
        </motion.p>
      </div>
    </section>
  );
};
