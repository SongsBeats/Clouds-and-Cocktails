import React from "react";
import { motion } from "motion/react";
import { Globe, Instagram, Facebook, Twitter, Mail, MapPin, ExternalLink } from "lucide-react";

export default function MarqueeFooter() {
  const marqueeItems = Array(20).fill("C&C x DXB");

  const rows = [
    {
      id: "row-1",
      textColor: "text-rose-600",
      directionClass: "animate-marquee-left",
    },
    {
      id: "row-2",
      textColor: "text-brand-neon",
      directionClass: "animate-marquee-right-fast",
    },
    {
      id: "row-3",
      textColor: "text-sky-500",
      directionClass: "animate-marquee-left-fast",
    },
    {
      id: "row-4",
      textColor: "text-fuchsia-500",
      directionClass: "animate-marquee-right",
    },
  ];

  return (
    <footer id="marquee-footer-section" className="bg-black text-white select-none overflow-hidden">
      {/* 4-Row Alternating Marquee exactly like the video (00:29 - 00:35) */}
      <div id="scrolling-marquee-layers" className="flex flex-col py-16 border-b border-zinc-900 bg-zinc-950/40">
        {rows.map((row) => (
          <div
            key={row.id}
            id={`marquee-row-wrapper-${row.id}`}
            className="relative flex overflow-x-hidden border-y border-zinc-900/30 py-3.5"
          >
            <div
              id={`marquee-row-track-${row.id}`}
              className={`flex whitespace-nowrap will-change-transform ${row.directionClass}`}
            >
              {/* Double up the items so it scrolls seamlessly without gaps */}
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center space-x-6 mx-4 font-display font-black text-5xl md:text-7xl uppercase tracking-wider ${row.textColor}`}
                >
                  <span>{item}</span>
                  <Globe className="w-8 h-8 opacity-70 animate-spin-slow text-white" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Structured Footer for high-fidelity completeness */}
      <div id="footer-structure-container" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-syne font-extrabold text-3xl tracking-widest text-brand-neon">
              CLOUDS & COCKTAILS
            </h3>
            <p className="font-sans text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
              Clouds & Cocktails (C&C) is an avant-garde entertainment space in Dubai. We host
              world-class electronic DJs, experimental audiovisual residencies, and premium mixology events.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-neon hover:border-brand-neon hover:bg-zinc-950 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-neon font-bold">
              OPERATING HOURS
            </h4>
            <ul className="space-y-2 font-sans text-sm text-zinc-400 font-light">
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Wednesday</span>
                <span className="text-white">10:00 PM – 4:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Thursday</span>
                <span className="text-white">11:00 PM – 5:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Friday</span>
                <span className="text-white">11:00 PM – 5:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Saturday</span>
                <span className="text-white">10:00 PM – 4:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Location / Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-neon font-bold">
              THE VENUE
            </h4>
            <div className="space-y-4 font-sans text-sm text-zinc-400 font-light">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-neon mr-2 shrink-0 pt-0.5" />
                <span>
                  Al Quoz Industrial Area 3, Street 15B, Warehouse 4C, Dubai, UAE
                </span>
              </p>
              <p className="flex items-center">
                <span className="text-white font-bold mr-2">Phone:</span>
                <span>+971 4 555 0192</span>
              </p>
              <p className="flex items-center">
                <span className="text-white font-bold mr-2">Email:</span>
                <span>booking@cloudscocktails.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Lower row copyrights */}
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Clouds & Cocktails (C&C x DXB). All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors flex items-center">
              Dubai Nightlife <ExternalLink className="w-3 h-3 ml-1 text-brand-neon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
