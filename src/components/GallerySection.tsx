import React, { useState } from "react";
import { motion } from "motion/react";
import { galleryImages } from "../data";
import { Eye, Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Map each gallery item to a specific filter for the x-ray negative hover effect
  const filterClasses: Record<string, string> = {
    g1: "green-negative-filter", // Sneakers on speaker -> neon green negative
    g2: "negative-filter",       // Woman covering face -> classic silver/black negative
    g3: "red-negative-filter",    // Red rave -> vivid red negative
    g4: "blue-negative-filter",   // DJ mixer -> cool blue negative
    g5: "green-negative-filter",  // Crowd dancing -> lime negative
    g6: "red-negative-filter",    // Cocktails -> high contrast red/gold negative
  };

  return (
    <section
      id="gallery"
      className="relative bg-black py-24 px-6 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-8 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-neon bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
              Visual Archives
            </span>
            <motion.h2
              id="gallery-section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-black text-5xl sm:text-6xl md:text-8xl text-white tracking-tighter uppercase leading-none"
            >
              Gallery
            </motion.h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
            Hover over the frames to activate the real-time optical color-inversion filters and negative x-ray channels.
          </p>
        </div>

        {/* Gallery Grid - Responsive Grid layout matching the video transitions */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => {
            const filterClass = filterClasses[img.id] || "negative-filter";
            const isHovered = activeImage === img.id;

            return (
              <motion.div
                key={img.id}
                id={`gallery-item-${img.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveImage(img.id)}
                onMouseLeave={() => setActiveImage(null)}
                className="relative aspect-square border-4 border-zinc-900 bg-zinc-950 overflow-hidden cursor-pointer group"
              >
                {/* Image element with conditional custom CSS filters for negative photo effects! */}
                <img
                  src={img.src}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    isHovered ? filterClass : "grayscale brightness-90 group-hover:scale-105"
                  }`}
                />

                {/* Color blend overlay to intensify the hue */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-30 " + img.hoverColor : "opacity-0"
                  }`}
                />

                {/* Decorative border grid pattern inside */}
                <div className="absolute inset-4 border border-white/5 pointer-events-none z-10" />

                {/* Information Overlay when hovered */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <span className="font-mono text-[10px] text-brand-neon uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Eye className="w-3 h-3" /> Filter Active
                  </span>
                  <h4 className="font-display font-bold text-xl text-white tracking-tight uppercase leading-none">
                    {img.title}
                  </h4>
                  <span className="font-mono text-xs text-zinc-400 mt-1 uppercase">
                    C&C x DXB Archive
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
