import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const scaleLeft = useTransform(scrollY, [0, 500], [1, 1.15]);
  const scaleRight = useTransform(scrollY, [0, 500], [1.05, 1.2]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative h-[95vh] md:h-screen w-full bg-zinc-950 overflow-hidden select-none"
    >
      {/* Top ambient color-fade gradient header area (magenta/purple to blue) */}
      <div 
        id="hero-ambient-header"
        className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-fuchsia-700 via-indigo-600/40 to-transparent opacity-90 z-20 pointer-events-none" 
      />

      {/* Hero Visual panels (clipping based) */}
      <div id="hero-visual-container" className="absolute inset-0 w-full h-full z-0 flex">
        
        {/* Left Panel: Gritty Club Scene (black and white styled) */}
        <div
          id="hero-panel-left"
          onMouseEnter={() => setHoverSide("left")}
          onMouseLeave={() => setHoverSide(null)}
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          style={{
            clipPath: "polygon(0 0, 52% 0, 34% 100%, 0 100%)",
            zIndex: hoverSide === "left" ? 10 : 1,
          }}
        >
          <motion.div 
            id="hero-image-left-wrapper"
            style={{ scale: scaleLeft }} 
            className="w-full h-full relative"
          >
            <img
              src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1200&q=90"
              alt="Nightlife energy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-500 hover:brightness-90"
            />
            {/* Soft dark violet tint on hover */}
            <div className="absolute inset-0 bg-violet-950/25 mix-blend-color-burn" />
          </motion.div>
        </div>

        {/* Diagonal Stripe Divider (gradient from neon green to yellow) */}
        <motion.div
          id="hero-diagonal-stripe"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full pointer-events-none z-15 bg-gradient-to-r from-brand-neon to-brand-yellow"
          style={{
            clipPath: "polygon(50.5% 0, 52.5% 0, 34.5% 100%, 32.5% 100%)",
            boxShadow: "0 0 40px rgba(173, 255, 47, 0.5)",
          }}
        />

        {/* Right Panel: Chic laughing group with cocktails (warm styled) */}
        <div
          id="hero-panel-right"
          onMouseEnter={() => setHoverSide("right")}
          onMouseLeave={() => setHoverSide(null)}
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          style={{
            clipPath: "polygon(52.2% 0, 100% 0, 100% 100%, 34.2% 100%)",
            zIndex: hoverSide === "right" ? 10 : 1,
          }}
        >
          <motion.div 
            id="hero-image-right-wrapper"
            style={{ scale: scaleRight }} 
            className="w-full h-full relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=90"
              alt="Sophisticated Social Cocktails"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-75 contrast-110 transition-all duration-500 hover:brightness-90"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-rose-950/15 mix-blend-color-burn" />
          </motion.div>
        </div>
      </div>

      {/* Text overlay - Centered exactly like the video */}
      <motion.div
        id="hero-content-overlay"
        style={{ y: yText }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 pointer-events-none px-4"
      >
        <div className="max-w-4xl mx-auto flex flex-col space-y-2 md:space-y-4">
          <motion.h1
            id="hero-title-clouds"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            Clouds
          </motion.h1>
          
          <motion.span
            id="hero-title-ampersand"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl text-brand-neon tracking-normal leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] my-2"
          >
            &
          </motion.span>
          
          <motion.h1
            id="hero-title-cocktails"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            Cocktails
          </motion.h1>
        </div>
      </motion.div>

      {/* Subtle indicator to scroll */}
      <div 
        id="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-brand-neon rounded-full"
        />
      </div>
    </div>
  );
}
