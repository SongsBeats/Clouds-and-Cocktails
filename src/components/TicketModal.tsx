import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, DollarSign, User, Mail, CreditCard, CheckCircle, Ticket as TicketIcon } from "lucide-react";
import { EventItem, Ticket } from "../types";

interface TicketModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookSuccess: (ticket: Ticket) => void;
}

export default function TicketModal({ event, isOpen, onClose, onBookSuccess }: TicketModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<Ticket | null>(null);

  if (!event || !isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;

    setIsSubmitting(true);

    // Simulate standard transaction latency
    setTimeout(() => {
      const refCode = "CNC-" + Math.floor(100000 + Math.random() * 900000);
      const barcodeVal = "CC-DXB-" + Math.random().toString(36).substring(2, 10).toUpperCase();

      const newTicket: Ticket = {
        id: "tkt-" + Date.now(),
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        quantity,
        totalPrice: event.price * quantity,
        buyerName,
        buyerEmail,
        bookingRef: refCode,
        barcodeValue: barcodeVal,
        purchaseDate: new Date().toLocaleDateString()
      };

      setGeneratedTicket(newTicket);
      onBookSuccess(newTicket);
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setQuantity(1);
    setBuyerName("");
    setBuyerEmail("");
    setShowSuccess(false);
    setGeneratedTicket(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative bg-zinc-950 border-4 border-black w-full max-w-lg overflow-hidden text-white z-10 flex flex-col"
        >
          {/* Neon side border highlights */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-neon" />
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-brand-magenta" />

          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {!showSuccess ? (
            /* Booking Entry Flow */
            <form onSubmit={handleBook} className="p-8 flex flex-col space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase text-brand-neon tracking-widest">Reserve Your Spot</span>
                <h3 className="font-display font-black text-2.5xl uppercase tracking-tight text-white leading-none">
                  Book Tickets
                </h3>
              </div>

              {/* Event card preview */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 flex items-center space-x-4">
                <div className="w-16 h-16 shrink-0 bg-zinc-800 overflow-hidden border border-black">
                  <img
                    src={event.bannerImage}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-lg leading-tight text-white uppercase tracking-tight">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-xs text-zinc-400">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 text-brand-neon mr-1" /> {event.date}</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-brand-neon mr-1" /> {event.time}</span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-sans text-sm text-zinc-300 font-medium">Quantity</span>
                  <div className="flex items-center border border-zinc-800 bg-zinc-900 h-10 w-32 justify-between">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center hover:bg-zinc-800 text-zinc-300 transition-colors border-r border-zinc-800 font-mono text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-center flex-grow">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center hover:bg-zinc-800 text-zinc-300 transition-colors border-l border-zinc-800 font-mono text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4.5 h-4.5" />
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="e.g. Liam Brooks"
                      className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-none pl-11 pr-4 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-neon"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4.5 h-4.5" />
                    <input
                      type="email"
                      required
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                      placeholder="liambrooks@gmail.com"
                      className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-none pl-11 pr-4 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-neon"
                    />
                  </div>
                </div>
              </div>

              {/* Total Price summary */}
              <div className="border-t border-zinc-900 pt-4 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Total Price</span>
                <span className="font-display font-black text-2xl text-brand-neon">
                  ${event.price * quantity}.00
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-neon hover:bg-brand-yellow disabled:bg-zinc-800 disabled:text-zinc-600 text-black font-sans font-bold text-sm uppercase tracking-wider py-4 transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Transaction...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4.5 h-4.5" />
                    Confirm & Complete Booking
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Successful Booking View showing ticket */
            <div className="p-8 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-brand-neon/10 rounded-full border border-brand-neon flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-brand-neon" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-black text-2.5xl uppercase tracking-tight text-white leading-none">
                  Booking Confirmed!
                </h3>
                <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Your tickets are active and ready.
                </p>
              </div>

              {/* Printable Ticket Pass Graphic */}
              {generatedTicket && (
                <div className="w-full bg-zinc-900 border-2 border-dashed border-zinc-800 p-6 space-y-6 text-left relative overflow-hidden">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-950 rounded-full border-r border-zinc-800" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-950 rounded-full border-l border-zinc-800" />

                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Event Pass</span>
                      <span className="font-display font-black text-lg text-white uppercase tracking-tight leading-none">
                        {generatedTicket.eventTitle}
                      </span>
                    </div>
                    <TicketIcon className="w-6 h-6 text-brand-neon" />
                  </div>

                  {/* Date details */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase">Date</span>
                      <span className="font-sans font-bold text-white">{generatedTicket.eventDate}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase">Quantity</span>
                      <span className="font-sans font-bold text-white">{generatedTicket.quantity} Passes</span>
                    </div>
                  </div>

                  {/* Holder details */}
                  <div className="grid grid-cols-2 gap-4 text-xs border-t border-zinc-800/60 pt-4">
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase">Holder</span>
                      <span className="font-sans font-medium text-white truncate max-w-[130px] block">
                        {generatedTicket.buyerName}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase">Reference</span>
                      <span className="font-mono font-bold text-brand-yellow">
                        {generatedTicket.bookingRef}
                      </span>
                    </div>
                  </div>

                  {/* Simulated Barcode */}
                  <div className="border-t border-zinc-800/60 pt-4 flex flex-col items-center space-y-2">
                    <div className="w-full h-10 bg-white p-1 flex justify-center items-center">
                      {/* Barcode lines using repeating linear gradient */}
                      <div className="w-full h-full bg-[repeating-linear-gradient(90deg,black,black_2px,white_2px,white_6px,black_6px,black_7px,white_7px,white_10px)]" />
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 tracking-widest">
                      {generatedTicket.barcodeValue}
                    </span>
                  </div>
                </div>
              )}

              <p className="font-sans text-xs text-zinc-500 leading-normal max-w-sm">
                A copy of this digital entry pass was sent to <strong className="text-zinc-300">{buyerEmail}</strong>. Show this barcode on your phone at the gate for rapid scan entry.
              </p>

              <button
                onClick={handleReset}
                className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 font-sans font-bold text-xs uppercase tracking-wider py-3.5 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
