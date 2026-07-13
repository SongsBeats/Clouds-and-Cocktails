import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { EventItem } from "../types";

interface NewsSectionProps {
  lenaEvent: EventItem;
  onOpenModal: (event: EventItem) => void;
}

export default function NewsSection({ lenaEvent, onOpenModal }: NewsSectionProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <section
      id="news-and-updates"
      className="relative bg-brand-magenta py-20 px-6 overflow-hidden select-none"
    >
      {/* Decorative floating shapes for high-end club feel */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-fuchsia-400 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-neon rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Giant header exactly as seen in the video */}
        <div className="border-b border-fuchsia-800 pb-8 mb-16">
          <motion.h2
            id="news-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-black text-5xl sm:text-6xl md:text-8xl text-brand-neon tracking-tighter uppercase leading-none"
          >
            News And Updates
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info panel */}
          <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1.5"
            >
              <span className="block font-syne font-black text-brand-yellow text-xl sm:text-2xl uppercase tracking-wider">
                Featured:
              </span>
              <h3 className="font-syne font-black text-4xl sm:text-6xl tracking-tighter uppercase leading-none text-white">
                Lena Brooks —
              </h3>
              <h3 className="font-syne font-black text-4xl sm:text-6xl tracking-tighter uppercase leading-none text-white">
                Mon, Sep 17
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-sans font-bold text-lg sm:text-xl text-brand-neon">
                Electrifying Night of Techno Music
              </h4>
              <p className="font-sans text-base text-fuchsia-100 font-light leading-relaxed max-w-md">
                Prepare for an immersive, high-velocity set of dark warehouse techno, deep heavy basslines, and customized live multi-sensory staging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                id="news-buy-tickets-btn"
                onClick={() => onOpenModal(lenaEvent)}
                className="group flex items-center justify-between bg-black text-brand-neon border-2 border-black hover:border-brand-neon font-sans font-black uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[4px_4px_0px_#000000]"
              >
                Buy Tickets
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* High-Fidelity Interactive Follow Button with circle indicator exactly like the video */}
              <button
                id="follow-lena-btn"
                onClick={() => setIsFollowing(!isFollowing)}
                className="group flex items-center bg-black hover:bg-zinc-900 text-white border-2 border-black hover:border-brand-neon font-sans font-black uppercase tracking-wider px-6 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[4px_4px_0px_#000000]"
              >
                <span className={`w-3 h-3 rounded-full mr-2.5 transition-all duration-300 ${isFollowing ? "bg-brand-neon animate-pulse shadow-[0_0_8px_#ADFF2F]" : "bg-zinc-600"}`} />
                <span>{isFollowing ? "Following" : "Follow"}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Poster/Card Panel exactly like the video */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onOpenModal(lenaEvent)}
              className="relative w-full max-w-[420px] bg-emerald-950 border-4 border-black shadow-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image with dark gradient overlay */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={lenaEvent.bannerImage}
                  alt="Lena Brooks"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Neon green jungle overlay mix-blend-color */}
                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay pointer-events-none" />

                {/* Top Left Tag "SEP 17" */}
                <div className="absolute top-6 left-6 bg-[#DFFF00] text-black font-display font-black text-xl px-4 py-2 uppercase tracking-wider border-2 border-black shadow-md">
                  SEP 17
                </div>

                {/* Ambient dark bottom gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent pointer-events-none" />

                {/* Gothic/Serif name exactly like the video */}
                <div className="absolute bottom-6 left-0 w-full text-center px-4">
                  <h4 className="font-display font-black text-4xl sm:text-5xl text-brand-yellow uppercase tracking-wider leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LENA BROOKS
                  </h4>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-black p-5 flex justify-between items-center border-t-2 border-black">
                <div className="text-left">
                  <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest">Featured DJ Set</span>
                  <span className="text-white font-sans font-bold text-sm">Main Warehouse Floor</span>
                </div>
                <span className="text-brand-neon font-mono text-sm border border-brand-neon/30 rounded px-2.5 py-1">
                  140 BPM
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
