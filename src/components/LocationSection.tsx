import React from "react";
import { motion } from "motion/react";
import { GoogleMaps3DIcon } from "./ThreeDIcons";
import { OFFICIAL_LINKS } from "../types";

export const LocationSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-32 px-5 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Header in Pure White #FFFFFF with High Contrast */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-editorial text-3xl sm:text-5xl text-white font-normal tracking-tight uppercase mb-10 leading-tight text-crisp-shadow"
        >
          <span>VEM VER </span>
          <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_16px_rgba(216,187,245,0.65)]">
            DE PERTO.
          </span>
        </motion.h3>

        {/* Address Card with 3D Alto-Relevo Google Maps Pin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#25103a] to-[#150724] border-t border-white/20 border-x border-white/10 border-b-[5px] border-[#0c0316] shadow-[0_16px_36px_rgba(0,0,0,0.7)] flex flex-col items-center mb-10"
        >
          {/* 3D Google Maps Pin in Alto-Relevo */}
          <div className="mb-6">
            <GoogleMaps3DIcon size={72} />
          </div>

          {/* Destaque Máximo: Avenida Presidente Vargas, 1610 */}
          <p className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-wide mb-2 leading-snug text-crisp-shadow">
            {OFFICIAL_LINKS.addressLine1}
          </p>

          {/* Sub-endereço claro */}
          <p className="font-sans-ui text-sm sm:text-base text-[#f3e8ff] font-light tracking-wider">
            {OFFICIAL_LINKS.addressLine2}
          </p>
        </motion.div>

        {/* CTA: [ MAPS 3D ] COMO CHEGAR com Alto-Relevo e Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full max-w-[340px]"
        >
          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex items-center justify-center gap-3.5 py-4 px-7 rounded-2xl bg-gradient-to-r from-[#200e35] via-[#2d1248] to-[#200e35] border-t border-white/30 border-x border-white/15 border-b-[5px] border-[#0b0314] text-white shadow-[0_12px_28px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-200 hover:border-b-[6px] hover:-translate-y-0.5 active:translate-y-1 active:border-b-[2px] active:shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            {/* Subtle multi-color glow border inspired by Google colors */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-[#4285F4]/20 via-[#EA4335]/20 via-50% via-[#FBBC05]/20 to-[#34A853]/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Small 3D Google Maps Pin inside button */}
            <GoogleMaps3DIcon size={28} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />

            <span className="font-sans-ui text-base font-bold tracking-wider uppercase text-white whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              COMO CHEGAR
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
