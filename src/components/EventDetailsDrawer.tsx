import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, DollarSign, Music, ShieldCheck, MapPin, Beer } from "lucide-react";
import { EventItem } from "../types";

interface EventDetailsDrawerProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTickets: (event: EventItem) => void;
}

export default function EventDetailsDrawer({ event, isOpen, onClose, onBookTickets }: EventDetailsDrawerProps) {
  if (!event || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black"
        />

        {/* Drawer slide-in container */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-zinc-950 border-l border-zinc-900 text-white h-full z-10 flex flex-col shadow-2xl p-8 overflow-y-auto no-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Drawer Content */}
          <div className="space-y-8 pt-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-brand-neon tracking-widest block">Line-Up & Set Times</span>
              <h3 className="font-display font-black text-3.5xl uppercase tracking-tight text-white leading-none">
                {event.title}
              </h3>
            </div>

            {/* Poster image */}
            <div className="aspect-[16/10] bg-zinc-900 overflow-hidden border-2 border-black">
              <img
                src={event.bannerImage}
                alt={event.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90"
              />
            </div>

            {/* Schedule metadata */}
            <div className="grid grid-cols-2 gap-4 border-y border-zinc-900 py-6">
              <div className="space-y-1">
                <span className="flex items-center text-xs font-mono text-zinc-500 uppercase">
                  <Calendar className="w-3.5 h-3.5 text-brand-neon mr-1.5" /> Date
                </span>
                <span className="font-sans font-bold text-sm text-zinc-200">{event.date}</span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center text-xs font-mono text-zinc-500 uppercase">
                  <Clock className="w-3.5 h-3.5 text-brand-neon mr-1.5" /> Time
                </span>
                <span className="font-sans font-bold text-sm text-zinc-200">{event.time}</span>
              </div>
            </div>

            {/* Event Overview Description */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-brand-neon font-bold">Event Overview</h4>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                {event.details || "Prepare for an extraordinary night featuring top DJs, state-of-the-art acoustics, and immersive pixel-mapped light arrays in the main arena."}
              </p>
            </div>

            {/* Artist Detail Schedule list */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-brand-neon font-bold">Line-Up & Set Times</h4>
              <div className="space-y-2.5">
                {event.artists?.map((artist, idx) => {
                  const setHours = ["11:00 PM – 12:30 AM", "12:30 AM – 2:30 AM", "2:30 AM – Close"];
                  const selectedHour = setHours[idx % setHours.length];
                  return (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-900 p-3 flex justify-between items-center">
                      <div className="flex items-center space-x-2.5">
                        <Music className="w-4 h-4 text-brand-yellow shrink-0" />
                        <span className="font-sans font-extrabold text-sm text-zinc-100">{artist}</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500">{selectedHour}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Venue policies */}
            <div className="bg-brand-blue/10 border border-brand-blue/30 p-4 space-y-3">
              <h5 className="font-sans font-extrabold text-xs text-blue-200 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-neon" /> Club Door Policies
              </h5>
              <ul className="list-disc pl-4 text-[11px] text-zinc-400 space-y-1.5 font-light">
                <li>Strictly 21+ only. Hard copy of photo ID or passport is required.</li>
                <li>Dress code: smart chic, cyberpunk elements, or high-octane dark styling. No sports caps or open sandals.</li>
                <li>Rights of admission reserved by venue security management.</li>
              </ul>
            </div>

            {/* Quick Cocktail Spec Preview */}
            <div className="bg-zinc-900/40 border border-zinc-900 p-4 space-y-3">
              <h5 className="font-sans font-extrabold text-xs text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                <Beer className="w-4 h-4 text-brand-yellow" /> Signature Cocktails Featured Tonight
              </h5>
              <div className="text-xs space-y-1 text-zinc-400 font-light">
                <p><strong className="text-zinc-200">The Cloud Nine:</strong> Lavender-infused gin, botanical tonic, vaporized lemon mist. ($18)</p>
                <p><strong className="text-zinc-200">The Neon Horizon:</strong> Smoked mezcal, fresh lime, blue curaçao, jalapeño salt. ($19)</p>
              </div>
            </div>

            {/* Bottom Booking row */}
            <div className="border-t border-zinc-900 pt-6 flex justify-between items-center bg-zinc-950 sticky bottom-0 left-0 w-full">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">Ticket Price</span>
                <span className="font-display font-black text-2xl text-brand-neon">${event.price}.00</span>
              </div>
              <button
                onClick={() => {
                  onBookTickets(event);
                  onClose();
                }}
                className="bg-brand-neon hover:bg-brand-yellow text-black font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-colors cursor-pointer"
              >
                Reserve Ticket
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
