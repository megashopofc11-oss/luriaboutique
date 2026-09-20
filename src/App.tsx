import React, { useEffect } from "react";
import { AliveBackground } from "./components/AliveBackground";
import { OpeningHero } from "./components/OpeningHero";
import { ImpactStatement } from "./components/ImpactStatement";
import { EditorialMomentOne } from "./components/EditorialMomentOne";
import { InspirationSection } from "./components/InspirationSection";
import { EditorialMomentTwo } from "./components/EditorialMomentTwo";
import { LookShowcaseCarousel } from "./components/LookShowcaseCarousel";
import { EditorialMoments } from "./components/EditorialMoments";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { REAL_PHOTOS, OFFICIAL_LOGO_URL } from "./types";

export default function App() {
  useEffect(() => {
    // Eagerly pre-cache logo and all boutique look photos so they appear instantly
    const logoImg = new Image();
    logoImg.src = OFFICIAL_LOGO_URL;

    REAL_PHOTOS.forEach((photo) => {
      const img = new Image();
      img.src = photo.url;
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#140722] text-white selection:bg-[#9d4edd]/35 selection:text-white font-sans-ui overflow-x-hidden">
      {/* Saturated Solid Violet Ambient Background Engine (Zero Camera Zoom) */}
      <AliveBackground />

      {/* Continuous Editorial Narrative */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Opening Hero - Fullscreen Opening with Large Official Logo */}
        <OpeningHero />

        {/* 2. Impact Statement: SEU ESTILO MUDA TUDO. */}
        <ImpactStatement />

        {/* 3. MOMENTO 1: LOOKS PARA CADA MOMENTO. (Lateral Photo Right) */}
        <EditorialMomentOne />

        {/* 4. Asymmetric Inspiration Showcase with 3 Parallax Looks */}
        <InspirationSection />

        {/* 5. MOMENTO 2: SEU ESTILO. SUAS ESCOLHAS. (Lateral Photo Left) */}
        <EditorialMomentTwo />

        {/* 6. Carousel: ENCONTRE SEU PRÓXIMO LOOK (20% Smaller, Clean Auto-Ticker) */}
        <LookShowcaseCarousel />

        {/* 7. MOMENTO 3 (NOVO LOOK. NOVA ENERGIA.) & MOMENTO 4 (DETALHES QUE TRANSFORMAM.) */}
        <EditorialMoments />

        {/* 8. Contact Hub: Quero Meu Look CTA */}
        <ContactSection />

        {/* 9. Encerramento Premium: Logo Oficial + "Vista-se para você" + WhatsApp/Instagram 3D + "Vem Ver de Perto" + Endereço + Google Maps 3D & Como Chegar */}
        <FooterSection />
      </main>

      {/* Persistent Floating 3D WhatsApp with Alto-Relevo & Timed "Posso te ajudar?" */}
      <FloatingWhatsApp />
    </div>
  );
}
