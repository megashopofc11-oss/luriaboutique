import React from "react";
import { motion } from "motion/react";
import { ScrollRevealPhoto } from "./ScrollRevealPhoto";
import { REAL_PHOTOS } from "../types";

export const EditorialMoments: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden z-10">
      {/* MOMENTO 3: NOVO LOOK. NOVA ENERGIA. */}
      <section className="relative w-full py-24 sm:py-36 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Fotografia real lateral/fundo (esquerda) */}
        <ScrollRevealPhoto
          photoUrl={REAL_PHOTOS[6].url}
          position="left"
          targetOpacity={0.62}
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
            <span>NOVO LOOK. </span>
            <br className="sm:hidden" />
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_18px_rgba(216,187,245,0.65)]">
              NOVA ENERGIA.
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-sans-ui text-base sm:text-xl md:text-2xl text-[#F5EEFF] font-light max-w-lg mx-auto leading-relaxed"
          >
            Renove suas combinações e descubra novas possibilidades.
          </motion.p>
        </div>
      </section>

      {/* Subtle glowing divider */}
      <div className="w-full flex justify-center py-4">
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#d8bbf5]/40 to-transparent" />
      </div>

      {/* MOMENTO 4: DETALHES QUE TRANSFORMAM. */}
      <section className="relative w-full py-24 sm:py-36 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Fotografia real lateral (direita) */}
        <ScrollRevealPhoto
          photoUrl={REAL_PHOTOS[7].url}
          position="right"
          targetOpacity={0.62}
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
            <span>DETALHES QUE </span>
            <br className="sm:hidden" />
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_18px_rgba(216,187,245,0.65)]">
              TRANSFORMAM.
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-sans-ui text-base sm:text-xl md:text-2xl text-[#F5EEFF] font-light max-w-lg mx-auto leading-relaxed"
          >
            Porque cada escolha faz parte do seu estilo.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
