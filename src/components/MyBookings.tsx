import React from "react";
import { motion } from "motion/react";
import { Ticket as TicketIcon, Calendar, QrCode, Trash2, CheckCircle2 } from "lucide-react";
import { Ticket } from "../types";

interface MyBookingsProps {
  tickets: Ticket[];
  onCancelTicket: (id: string) => void;
}

export default function MyBookings({ tickets, onCancelTicket }: MyBookingsProps) {
  if (tickets.length === 0) return null;

  return (
    <div id="active-bookings-dashboard" className="bg-[#05051a] border-b-4 border-black py-12 px-6 text-white select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8 border-b border-zinc-900 pb-4">
          <TicketIcon className="w-6 h-6 text-brand-neon animate-pulse" />
          <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white leading-none">
            My Digital Entry Passes ({tickets.length})
          </h3>
        </div>

        {/* Horizontal scrollable row of passes */}
        <div id="passes-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((tkt) => (
            <motion.div
              key={tkt.id}
              id={`booking-pass-${tkt.id}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border-2 border-dashed border-zinc-800 p-5 space-y-4 relative overflow-hidden"
            >
              {/* Symmetrical tickets notch cutouts */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#05051a] rounded-full border-r border-zinc-800" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#05051a] rounded-full border-l border-zinc-800" />

              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Confirmed Pass</span>
                  <h4 className="font-display font-black text-base text-brand-neon uppercase tracking-tight leading-none pt-1">
                    {tkt.eventTitle}
                  </h4>
                </div>
                <button
                  onClick={() => onCancelTicket(tkt.id)}
                  title="Cancel reservation"
                  className="text-zinc-500 hover:text-red-500 transition-colors shrink-0 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Date details */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase">Date</span>
                  <span className="font-sans font-bold text-white text-xs">{tkt.eventDate}</span>
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase">Quantity</span>
                  <span className="font-sans font-bold text-zinc-200 text-xs">{tkt.quantity} Passes</span>
                </div>
              </div>

              {/* Holder and reference */}
              <div className="grid grid-cols-2 gap-2 text-xs border-t border-zinc-800/60 pt-3">
                <div>
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase">Holder</span>
                  <span className="font-sans font-medium text-white truncate text-xs block max-w-[120px]">
                    {tkt.buyerName}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase">Ref Code</span>
                  <span className="font-mono font-bold text-brand-yellow text-xs">{tkt.bookingRef}</span>
                </div>
              </div>

              {/* Barcode */}
              <div className="border-t border-zinc-800/60 pt-3 flex items-center justify-between">
                <div className="w-2/3 h-8 bg-white p-0.5 flex justify-center items-center">
                  <div className="w-full h-full bg-[repeating-linear-gradient(90deg,black,black_2px,white_2px,white_5px,black_5px,black_6px,white_6px,white_8px)]" />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon shrink-0 animate-pulse" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
