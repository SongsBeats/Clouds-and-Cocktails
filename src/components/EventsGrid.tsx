import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Calendar, DollarSign, Globe, Music, Sliders } from "lucide-react";
import { EventItem } from "../types";

interface EventsGridProps {
  events: EventItem[];
  onOpenModal: (event: EventItem) => void;
  onOpenDetails: (event: EventItem) => void;
}

export default function EventsGrid({ events, onOpenModal, onOpenDetails }: EventsGridProps) {
  const [filter, setFilter] = useState<string>("ALL");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter events based on selections
  const filteredEvents = filter === "ALL" 
    ? (isExpanded ? events : events.slice(0, 6)) 
    : events.filter(e => e.tag?.includes(filter));

  return (
    <section id="events" className="relative bg-brand-blue py-20 text-white select-none">
      {/* Blue Header Section with text description exactly like video */}
      <div id="events-header-container" className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          id="events-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-syne font-black text-5xl sm:text-6xl md:text-8xl text-white tracking-tighter uppercase leading-none mb-6"
        >
          What's Going On
        </motion.h2>
        
        <motion.p
          id="events-section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Use this space to promote the business, its products or its services. Help people
          become familiar with the business and its offerings, creating a sense of connection
          and trust. Focus on what makes the business unique and how users can benefit from
          choosing it.
        </motion.p>

        {/* Quick Month Filter Bar */}
        <div id="month-filter-bar" className="flex flex-wrap justify-center gap-3 mt-10">
          {["ALL", "AUG", "SEP", "NOV", "DEC"].map((month) => (
            <button
              key={month}
              id={`filter-btn-${month}`}
              onClick={() => setFilter(month)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all cursor-pointer ${
                filter === month
                  ? "bg-brand-neon text-black font-extrabold border-2 border-brand-neon shadow-[0_0_12px_rgba(173,255,47,0.4)]"
                  : "bg-blue-950/40 text-blue-100 border-2 border-blue-800/50 hover:border-brand-neon/60 hover:text-white"
              }`}
            >
              {month === "ALL" ? "All Dates" : month}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid (3-column layout) */}
      <div id="events-grid-container" className="max-w-7xl mx-auto px-6">
        <motion.div 
          id="events-cards-grid"
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                id={`event-card-item-${event.id}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col group h-full"
              >
                {/* 1. Inner Card Box (highly styled visual container matching the video card layout) */}
                <div
                  id={`inner-card-visual-${event.id}`}
                  className={`aspect-square w-full rounded-none overflow-hidden relative border-4 border-black p-6 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] ${event.themeColor}`}
                >
                  {/* Backdrop Graphic overlay to match video */}
                  {event.bannerImage && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={event.bannerImage}
                        alt={event.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          event.id === "zephyr" ? "grayscale opacity-25 contrast-125" : "opacity-35 grayscale"
                        } group-hover:scale-105 group-hover:opacity-50`}
                      />
                    </div>
                  )}

                  {/* Card Content Top Section */}
                  <div className="z-10 flex justify-between items-start">
                    <span className={`font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded border ${
                      event.themeColor.includes("bg-[#ADFF2F]") 
                        ? "bg-black text-brand-neon border-black" 
                        : "bg-black/50 text-white border-zinc-800"
                    }`}>
                      {event.tag}
                    </span>
                    <span className="font-mono text-xs opacity-85">
                      {event.time}
                    </span>
                  </div>

                  {/* Card Content Middle (Custom styling for specific cards matching video) */}
                  <div className="z-10 my-auto text-center py-4">
                    {event.id === "zephyr" && (
                      <div className="space-y-1">
                        <h3 className="font-syne font-black text-4xl uppercase tracking-tighter text-white">
                          {event.title}
                        </h3>
                        <p className="font-mono text-[11px] text-zinc-400">SOLAR DRIFT × SONG MIRAGE</p>
                      </div>
                    )}

                    {event.id === "vivid-pulse" && (
                      <div className="space-y-1 text-black">
                        <h3 className="font-syne font-black text-3.5xl uppercase tracking-tighter leading-none">
                          VIVID PULSE
                        </h3>
                        <div className="text-[10px] font-mono font-semibold space-y-0.5 pt-2 uppercase">
                          {event.artists?.slice(0, 3).map((a, i) => <div key={i}>{a}</div>)}
                        </div>
                      </div>
                    )}

                    {event.id === "lena-brooks" && (
                      <div className="space-y-1">
                        <h3 className="font-syne font-black text-4xl uppercase tracking-tighter text-brand-yellow">
                          LENA BROOKS
                        </h3>
                        <p className="font-mono text-[11px] text-zinc-300">NEBULA / AVA SINCLAIR</p>
                      </div>
                    )}

                    {event.id === "song-mirage" && (
                      <div className="space-y-1">
                        <h3 className="font-syne font-black text-4xl uppercase tracking-tighter text-white">
                          SONIC MIRAGE
                        </h3>
                        <p className="font-mono text-[11px] text-rose-200">NEBULA × SOLAR DRIFT</p>
                      </div>
                    )}

                    {event.id === "echo" && (
                      <div className="flex flex-col items-center space-y-1">
                        <h3 className="font-syne font-black text-4xl uppercase tracking-tighter text-white border-2 border-white px-3 py-1">
                          ECHO
                        </h3>
                        <div className="flex items-center space-x-1.5 font-mono text-[10px] text-sky-200 uppercase pt-2">
                          <Globe className="w-3.5 h-3.5 text-brand-neon animate-spin-slow" />
                          <span>NEBULA × ARIA</span>
                        </div>
                      </div>
                    )}

                    {event.id === "frostbyte" && (
                      <div className="space-y-1">
                        <h3 className="font-syne font-black text-4xl uppercase tracking-tighter text-orange-200">
                          FROSTBYTE
                        </h3>
                        <p className="font-mono text-[11px] text-orange-100">SUB-ZERO SHOWCASE</p>
                      </div>
                    )}
                  </div>

                  {/* Card Content Bottom */}
                  <div className="z-10 flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="font-mono text-sm font-bold">
                      ${event.price}.00
                    </span>
                    {event.bpm && (
                      <span className="font-mono text-xs text-brand-neon uppercase font-bold">
                        {event.bpm} BPM
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. Card Metadata Info (Below the card box, exactly like video) */}
                <div id={`card-meta-below-${event.id}`} className="mt-5 flex flex-col space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-sans font-extrabold text-xl text-white tracking-tight group-hover:text-brand-neon transition-colors">
                      {event.title}
                    </h4>
                    <span className="font-mono text-xs text-blue-200">
                      {event.date}
                    </span>
                  </div>

                  {/* Action Row exactly matching video styles */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      id={`btn-more-info-${event.id}`}
                      onClick={() => onOpenDetails(event)}
                      className="font-mono text-xs text-zinc-300 hover:text-white uppercase tracking-wider underline underline-offset-4 cursor-pointer"
                    >
                      More Info
                    </button>

                    <button
                      id={`btn-buy-tickets-${event.id}`}
                      onClick={() => onOpenModal(event)}
                      className="bg-blue-800 hover:bg-brand-neon hover:text-black border border-blue-700 hover:border-brand-neon font-sans font-bold text-xs uppercase tracking-wider px-5 py-2 transition-all duration-300 cursor-pointer"
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ALL LINES giant pink banner button under grid (00:19 in the video) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20"
        >
          <button
            id="all-lines-banner-button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-brand-magenta hover:bg-fuchsia-700 text-black hover:text-white font-display font-black text-2xl uppercase tracking-widest py-6 border-4 border-black hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[8px_8px_0px_#000000] cursor-pointer flex justify-center items-center gap-3"
          >
            <span>{isExpanded ? "Collapse List" : "All Lines"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
