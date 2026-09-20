import React, { useEffect, useState } from "react";

const RISING_BUBBLES = [
  { id: 1, size: 8, left: "4%", animation: "animate-rise-1", duration: "14s", delay: "-2s", opacity: 0.25 },
  { id: 2, size: 14, left: "9%", animation: "animate-rise-2", duration: "19s", delay: "-7s", opacity: 0.22 },
  { id: 3, size: 6, left: "15%", animation: "animate-rise-3", duration: "12s", delay: "-11s", opacity: 0.28 },
  { id: 4, size: 12, left: "21%", animation: "animate-rise-4", duration: "16s", delay: "-4s", opacity: 0.2 },
  { id: 5, size: 8, left: "27%", animation: "animate-rise-1", duration: "13s", delay: "-9s", opacity: 0.26 },
  { id: 6, size: 16, left: "33%", animation: "animate-rise-2", duration: "21s", delay: "-15s", opacity: 0.18 },
  { id: 7, size: 7, left: "38%", animation: "animate-rise-3", duration: "11s", delay: "-1s", opacity: 0.3 },
  { id: 8, size: 10, left: "44%", animation: "animate-rise-4", duration: "15s", delay: "-8s", opacity: 0.24 },
  { id: 9, size: 14, left: "50%", animation: "animate-rise-1", duration: "18s", delay: "-13s", opacity: 0.22 },
  { id: 10, size: 6, left: "56%", animation: "animate-rise-2", duration: "12s", delay: "-5s", opacity: 0.28 },
  { id: 11, size: 11, left: "62%", animation: "animate-rise-3", duration: "17s", delay: "-10s", opacity: 0.2 },
  { id: 12, size: 8, left: "68%", animation: "animate-rise-4", duration: "14s", delay: "-3s", opacity: 0.25 },
  { id: 13, size: 15, left: "74%", animation: "animate-rise-1", duration: "20s", delay: "-16s", opacity: 0.18 },
  { id: 14, size: 9, left: "80%", animation: "animate-rise-2", duration: "13s", delay: "-6s", opacity: 0.26 },
  { id: 15, size: 7, left: "86%", animation: "animate-rise-3", duration: "11s", delay: "-12s", opacity: 0.3 },
  { id: 16, size: 13, left: "92%", animation: "animate-rise-4", duration: "17s", delay: "-4s", opacity: 0.22 },
  { id: 17, size: 6, left: "96%", animation: "animate-rise-1", duration: "12s", delay: "-8s", opacity: 0.28 },
  { id: 18, size: 10, left: "6%", animation: "animate-rise-3", duration: "15s", delay: "-14s", opacity: 0.22 },
  { id: 19, size: 8, left: "18%", animation: "animate-rise-2", duration: "13s", delay: "-1s", opacity: 0.25 },
  { id: 20, size: 12, left: "30%", animation: "animate-rise-4", duration: "18s", delay: "-11s", opacity: 0.2 },
  { id: 21, size: 7, left: "42%", animation: "animate-rise-1", duration: "10s", delay: "-6s", opacity: 0.3 },
  { id: 22, size: 15, left: "58%", animation: "animate-rise-2", duration: "22s", delay: "-17s", opacity: 0.18 },
  { id: 23, size: 9, left: "70%", animation: "animate-rise-3", duration: "14s", delay: "-8s", opacity: 0.24 },
  { id: 24, size: 11, left: "83%", animation: "animate-rise-4", duration: "16s", delay: "-2s", opacity: 0.22 },
  { id: 25, size: 6, left: "89%", animation: "animate-rise-1", duration: "11s", delay: "-9s", opacity: 0.28 },
];

export const AliveBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#130622]"
    >
      {/* CAMADA 1: Fundo Lilás e Violeta Profundo, Sólido com Alta Saturação */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140624] via-[#1d0a33] via-50% to-[#11051f]" />

      {/* Radial depth color anchors - violeta e lavanda ricas, sem tons acinzentados */}
      <div className="absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a135e]/40 via-[#1d0a33]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[700px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#481878]/30 via-[#1a082e]/25 to-transparent" />

      {/* CAMADA 2: Luzes desfocadas extremamente suaves e vivas em movimento lento (SEM ZOOM) */}
      <div
        className="absolute top-[8%] left-[-12%] w-[70vw] h-[70vw] max-w-[550px] max-h-[550px] rounded-full bg-[#6a1b9a]/25 blur-[120px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
      />
      <div
        className="absolute top-[42%] right-[-10%] w-[65vw] h-[65vw] max-w-[500px] max-h-[500px] rounded-full bg-[#8e24aa]/20 blur-[130px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.06}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-[14%] left-[-8%] w-[75vw] h-[75vw] max-w-[580px] max-h-[580px] rounded-full bg-[#511378]/25 blur-[140px] transition-transform duration-1000 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
        }}
      />

      {/* CAMADA 3: Formas fluidas lembrando seda / tecido translúcido */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 mix-blend-screen"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="silkGradVivid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8bbf5" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#7b2cbf" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#140624" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,220 C280,120 450,340 750,220 C900,160 960,290 1000,260 L1000,0 L0,0 Z"
          fill="url(#silkGradVivid)"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
        <path
          d="M0,720 C260,820 440,660 740,760 C900,810 960,700 1000,740 L1000,1000 L0,1000 Z"
          fill="url(#silkGradVivid)"
          style={{
            transform: `translateY(${-scrollY * 0.04}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </svg>

      {/* CAMADA 4: Efeito de Bolinhas Transparentes Pequenas Sempre Subindo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {RISING_BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute bottom-0 ${bubble.animation}`}
            style={{
              left: bubble.left,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
            }}
          >
            <div
              className="rounded-full border border-white/20 relative overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,0.28),0_2px_8px_rgba(0,0,0,0.18)]"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                opacity: bubble.opacity,
                background:
                  "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.24) 0%, rgba(216,187,245,0.03) 55%, transparent 100%)",
              }}
            >
              {/* Micro ponto de luz de reflexo de vidro */}
              <span className="absolute top-[15%] left-[18%] w-[32%] h-[32%] rounded-full bg-white/50 blur-[0.2px]" />
            </div>
          </div>
        ))}
      </div>

      {/* CAMADA 5: Pequenas partículas luminosas com brilho delicado */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-white blur-[0.4px] animate-pulse"
          style={{ animationDuration: "3.2s" }}
        />
        <div
          className="absolute top-[32%] right-[14%] w-2 h-2 rounded-full bg-[#f3e8ff] blur-[0.8px] animate-pulse"
          style={{ animationDuration: "4.5s" }}
        />
        <div
          className="absolute top-[50%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#e9dcfc] blur-[0.5px] animate-pulse"
          style={{ animationDuration: "3.8s" }}
        />
        <div
          className="absolute top-[72%] right-[18%] w-2 h-2 rounded-full bg-white blur-[0.6px] animate-pulse"
          style={{ animationDuration: "5.2s" }}
        />
        <div
          className="absolute top-[88%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#d8bbf5] blur-[0.5px] animate-pulse"
          style={{ animationDuration: "4.1s" }}
        />
      </div>

      {/* CAMADA 6: Elemento desfocado no primeiro plano passando suavemente (SEM ZOOM) */}
      <div
        className="absolute top-[35%] left-[6%] w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#d8bbf5]/10 blur-3xl mix-blend-screen transition-transform duration-1000"
        style={{
          transform: `translate3d(${Math.sin(scrollY * 0.002) * 15}px, ${scrollY * 0.1}px, 0)`,
        }}
      />
    </div>
  );
};
