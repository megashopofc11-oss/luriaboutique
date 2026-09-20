import React from "react";
import { motion } from "motion/react";
import { OfficialLogo } from "./OfficialLogo";
import { WhatsApp3DIcon, Instagram3DIcon, GoogleMaps3DIcon } from "./ThreeDIcons";
import { OFFICIAL_LINKS, REAL_PHOTOS } from "../types";

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full pt-20 sm:pt-28 pb-32 sm:pb-36 px-5 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* 2. MELHORIA DO FUNDO: Fotografia da loja perceptível, degradê violeta suave e luz lilás central */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
      >
        {/* Fotografia real da loja com tratamento violeta integrado */}
        <img
          src={REAL_PHOTOS[2].url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-110 saturate-[1.15] opacity-50"
        />

        {/* Matiz violeta suave para harmonizar com o restante do site */}
        <div className="absolute inset-0 bg-[#160728]/55 mix-blend-multiply" />

        {/* Degradê seamless: violeta profundo (topo) → fotografia visível (centro) → violeta profundo (base) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140722] via-[#140722]/30 to-[#0e0318]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0215] via-transparent to-[#140722]/70" />

        {/* Luz lilás muito suave e difusa atrás da região central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vw] sm:w-[540px] h-[520px] rounded-full bg-[#9d4edd]/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Conteúdo Central em Hierarquia Premium Contínua */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* 1. MANTER A LOGO GRANDE NO TOPO - Centralizada, sem card, espaçosa, parte do cenário */}
        <div className="mb-12 sm:mb-16">
          <OfficialLogo size="large" />
        </div>

        {/* 3. TÍTULO MAIS FORTE - "Vista-se para você." (Editorial, Branco Puro, 'você' em itálico) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-4 mb-12 sm:mb-14 px-4"
        >
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.12] text-crisp-shadow">
            <span>Vista-se para </span>
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_18px_rgba(216,187,245,0.75)]">
              você.
            </span>
          </h2>

          <p className="font-sans-ui text-base sm:text-lg md:text-xl text-[#F5EEFF] font-light leading-relaxed max-w-md mx-auto">
            Porque o melhor look é aquele que faz você se sentir incrível.
          </p>
        </motion.div>

        {/* 5, 6, 7 & 8. WHATSAPP 3D + INSTAGRAM 3D LADO A LADO (Ícones Grandes, Alto-Relevo, Microinteração 3D) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="flex items-center justify-center gap-10 sm:gap-14 my-2 select-none"
        >
          {/* WHATSAPP 3D */}
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="group flex flex-col items-center gap-3 focus:outline-hidden"
          >
            <div className="relative">
              {/* 13. Glow verde extremamente discreto atrás */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 rounded-3xl bg-[#25D366]/25 blur-xl group-hover:bg-[#25D366]/40 transition-all duration-300 pointer-events-none"
              />

              {/* 8. Microinteração 3D: toque afunda 2-3px, desktop hover levanta 4px com sutil inclinação */}
              <div className="relative transform-gpu transition-all duration-200 ease-out hover:-translate-y-1 hover:rotate-[-1.5deg] active:translate-y-[3px] active:scale-[0.97]">
                <WhatsApp3DIcon size={64} />
              </div>
            </div>

            <span className="font-sans-ui text-sm sm:text-base font-medium text-white tracking-wide group-hover:text-[#38E87B] transition-colors">
              WhatsApp
            </span>
          </a>

          {/* INSTAGRAM 3D */}
          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acompanhe novidades no Instagram"
            className="group flex flex-col items-center gap-3 focus:outline-hidden"
          >
            <div className="relative">
              {/* 13. Glow roxo/rosa extremamente discreto atrás */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 rounded-3xl bg-[#E1306C]/25 blur-xl group-hover:bg-[#E1306C]/40 transition-all duration-300 pointer-events-none"
              />

              {/* 8. Microinteração 3D: toque afunda 2-3px, desktop hover levanta 4px com sutil inclinação */}
              <div className="relative transform-gpu transition-all duration-200 ease-out hover:-translate-y-1 hover:rotate-[1.5deg] active:translate-y-[3px] active:scale-[0.97]">
                <Instagram3DIcon size={64} />
              </div>
            </div>

            <span className="font-sans-ui text-sm sm:text-base font-medium text-white tracking-wide group-hover:text-[#FCAF45] transition-colors">
              Instagram
            </span>
          </a>
        </motion.div>

        {/* 9. SEPARADOR ELEGANTE - Linha muito fina com brilho delicado no centro */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex items-center justify-center my-12 sm:my-16"
        >
          <div className="relative w-44 sm:w-60 h-[1px] bg-gradient-to-r from-transparent via-[#d8bbf5]/60 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        </motion.div>

        {/* 9 & 10. "VEM VER DE PERTO." & ENDEREÇO COM MUITO MAIS PRESENÇA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="flex flex-col items-center mb-10 text-center px-4"
        >
          {/* Título editorial: VEM VER DE PERTO. */}
          <h3 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight leading-tight text-crisp-shadow mb-5">
            <span>VEM VER </span>
            <span className="font-editorial italic font-normal text-white drop-shadow-[0_2px_18px_rgba(216,187,245,0.75)]">
              DE PERTO.
            </span>
          </h3>

          {/* 10. Endereço: Avenida Presidente Vargas, 1610 em branco, maior e semi-bold */}
          <p className="font-sans-ui text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide text-crisp-shadow mb-1.5">
            {OFFICIAL_LINKS.addressLine1}
          </p>

          {/* Sub-endereço perfeitamente legível */}
          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#F5EEFF] font-light tracking-wider">
            {OFFICIAL_LINKS.addressLine2}
          </p>
        </motion.div>

        {/* 11. GOOGLE MAPS 3D EM DESTAQUE + CTA "COMO CHEGAR" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="flex flex-col items-center gap-5 w-full max-w-[320px]"
        >
          {/* Ícone 3D Google Maps com as 4 cores oficiais, alto-relevo e luz suave branca atrás */}
          <div className="relative group">
            {/* 13. Glow branco discreto */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-white/18 blur-xl group-hover:bg-white/28 transition-all pointer-events-none"
            />

            {/* Microinteração física */}
            <div className="relative transform-gpu transition-all duration-200 hover:-translate-y-1 hover:rotate-[-2deg] active:translate-y-[3px]">
              <GoogleMaps3DIcon size={64} />
            </div>
          </div>

          {/* CTA "COMO CHEGAR" - Fundo branco levemente luminoso com texto violeta e detalhes das cores do Google */}
          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-b from-white to-[#F5EEFF] text-[#140624] font-sans-ui text-sm sm:text-base font-semibold tracking-widest uppercase shadow-[0_12px_28px_rgba(255,255,255,0.22),0_4px_16px_rgba(0,0,0,0.6)] border border-white/90 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(255,255,255,0.32)] active:scale-[0.98] active:translate-y-[2px]"
          >
            {/* 4 detalhes sutis com as cores oficiais do Google */}
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
              <span className="w-2 h-2 rounded-full bg-[#FBBC04]" />
              <span className="w-2 h-2 rounded-full bg-[#34A853]" />
              <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            </span>

            <span>COMO CHEGAR</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
