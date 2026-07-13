import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      id="main-nav-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-4 border-b border-zinc-900"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            {/* Minimalist modern C&C logo icon */}
            <div className="w-8 h-8 rounded-full border-2 border-brand-neon flex items-center justify-center bg-black transition-transform group-hover:rotate-12 duration-300">
              <span className="font-display font-black text-xs text-brand-neon tracking-tighter">C</span>
              <span className="font-display font-light text-[9px] text-zinc-400">&amp;</span>
              <span className="font-display font-black text-xs text-brand-neon tracking-tighter">C</span>
            </div>
            <span className="font-display font-extrabold text-sm tracking-widest text-white uppercase hidden sm:inline-block">
              C<span className="text-brand-neon">&amp;</span>CXDXB
            </span>
          </button>
        </div>

        {/* Centered navigation items */}
        <nav id="nav-menu" className="flex items-center space-x-6 md:space-x-12">
          {["Events", "Venue Features", "Gallery"].map((link) => {
            const targetId = link.toLowerCase().replace(" ", "-");
            return (
              <button
                key={link}
                id={`nav-link-${targetId}`}
                onClick={() => scrollToSection(targetId)}
                className="font-sans font-medium text-xs sm:text-sm text-zinc-300 hover:text-brand-neon transition-colors uppercase tracking-widest relative py-1 group cursor-pointer"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full" />
              </button>
            );
          })}
        </nav>

        {/* Right Action Button (Quick Booking) */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("events")}
            className="hidden md:block font-mono text-xs font-black uppercase tracking-wider bg-brand-neon text-black px-4 py-2 rounded-full border border-black hover:bg-black hover:text-brand-neon hover:border-brand-neon transition-all duration-300 cursor-pointer"
          >
            GET PASS
          </button>
        </div>
      </div>
    </motion.header>
  );
}
