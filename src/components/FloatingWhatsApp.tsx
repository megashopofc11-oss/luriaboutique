import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsApp3DIcon } from "./ThreeDIcons";
import { OFFICIAL_LINKS } from "../types";

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show bubble gently after 3.5 seconds
    const showTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3500);

    // Auto-hide bubble after 5 seconds so it doesn't stay permanently
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 9000);

    // Occasional gentle re-trigger after a while
    const retriggerTimer = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 5000);
    }, 55000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(retriggerTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center select-none">
      {/* Discreet floating message "Posso te ajudar?" */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mr-3 py-2 px-3.5 rounded-2xl bg-[#1d0d30]/95 border border-[#25D366]/40 text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-2"
          >
            <span className="font-sans-ui text-xs sm:text-sm font-medium tracking-wide text-white whitespace-nowrap">
              Posso te ajudar?
            </span>
            <button
              onClick={() => setShowBubble(false)}
              className="text-white/50 hover:text-white text-xs px-0.5"
              aria-label="Fechar mensagem"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D WhatsApp Button */}
      <motion.a
        href={OFFICIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative group block rounded-full focus:outline-hidden"
      >
        {/* Occasional soft ambient pulse behind icon */}
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
          style={{ animationDuration: "3.5s" }}
        />

        <WhatsApp3DIcon size={58} className="relative z-10" />
      </motion.a>
    </div>
  );
};
