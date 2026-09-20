import React from "react";
import { motion } from "motion/react";
import { WhatsApp3DIcon, Instagram3DIcon, FashionBag3DIcon } from "./ThreeDIcons";
import { OFFICIAL_LINKS } from "../types";

export const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-32 px-5 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Contact Headings - Pure White with Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-3 mb-12"
        >
          <h3 className="font-editorial text-3xl sm:text-5xl text-white font-normal uppercase tracking-tight text-crisp-shadow leading-tight">
            <span>GOSTOU DE ALGUM </span>
            <br className="sm:hidden" />
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_16px_rgba(216,187,245,0.65)]">
              LOOK?
            </span>
          </h3>
          <p className="font-sans-ui text-base sm:text-lg text-[#F5EEFF] font-light tracking-wide">
            Fale com a gente ou acompanhe as novidades.
          </p>
        </motion.div>

        {/* WhatsApp & Instagram - Side by Side in ALTO-RELEVO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[360px] mb-12"
        >
          {/* WHATSAPP 3D ALTO-RELEVO BUTTON */}
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#25103a] to-[#150724] border-t border-white/20 border-x border-white/10 border-b-[5px] border-[#0c0316] shadow-[0_14px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(37,211,102,0.15)] transition-all duration-200 hover:border-b-[6px] hover:-translate-y-0.5 active:translate-y-1 active:border-b-[2px] active:shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
          >
            {/* Specular glass reflection sweep on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700" />
            </div>

            <WhatsApp3DIcon size={74} className="mb-3.5" />

            <span className="font-sans-ui text-sm sm:text-base font-semibold text-white tracking-wide group-hover:text-[#38E87B] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              WhatsApp
            </span>
          </a>

          {/* INSTAGRAM 3D ALTO-RELEVO BUTTON */}
          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#25103a] to-[#150724] border-t border-white/20 border-x border-white/10 border-b-[5px] border-[#0c0316] shadow-[0_14px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(225,48,108,0.15)] transition-all duration-200 hover:border-b-[6px] hover:-translate-y-0.5 active:translate-y-1 active:border-b-[2px] active:shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
          >
            {/* Specular glass reflection sweep on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700" />
            </div>

            <Instagram3DIcon size={74} className="mb-3.5" />

            <span className="font-sans-ui text-sm sm:text-base font-semibold text-white tracking-wide group-hover:text-[#FCAF45] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Instagram
            </span>
          </a>
        </motion.div>

        {/* REFORMULATED LARGE CTA: QUERO MEU LOOK (3D ALTO-RELEVO) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="w-full max-w-[360px]"
        >
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full flex items-center justify-center gap-3.5 py-4 sm:py-4.5 px-8 rounded-2xl bg-gradient-to-r from-[#9d4edd] via-[#b388eb] to-[#7b2cbf] text-white font-semibold border-t border-white/40 border-x border-white/20 border-b-[5px] border-[#4a127a] shadow-[0_16px_36px_rgba(157,78,221,0.5),0_6px_16px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-200 hover:border-b-[6px] hover:-translate-y-0.5 active:translate-y-1 active:border-b-[2px] active:shadow-[0_6px_16px_rgba(157,78,221,0.3)]"
          >
            {/* Continuous subtle reflection sweep */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-sweep-light" />
            </div>

            {/* 3D Fashion Bag Icon in ALTO-RELEVO */}
            <FashionBag3DIcon size={28} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />

            {/* Button text: bold, crisp, pure white */}
            <span className="font-sans-ui text-base sm:text-lg font-bold tracking-wider uppercase text-white whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              QUERO MEU LOOK
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
