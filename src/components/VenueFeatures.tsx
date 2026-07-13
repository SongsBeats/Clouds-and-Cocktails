import React from "react";
import { motion } from "motion/react";
import { venueFeatures } from "../data";

export default function VenueFeatures() {
  return (
    <section
       id="venue-features"
       className="relative bg-brand-yellow py-24 px-6 border-y-4 border-black select-none"
     >
      <div className="max-w-7xl mx-auto">
        {/* Header Title precisely styled like the video */}
        <div className="border-b-4 border-black pb-8 mb-16">
          <motion.h2
            id="features-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-black text-5xl sm:text-6xl md:text-8xl text-black tracking-tighter uppercase leading-none"
          >
            Venue Features
          </motion.h2>
        </div>

        {/* Features Row - 4 columns on desktop, stacked on mobile */}
        <div id="features-columns-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {venueFeatures.map((feat, idx) => (
            <motion.div
              key={feat.id}
              id={`feature-item-${feat.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-4 group"
            >
              {/* Massive stylized number exactly as seen in the video */}
              <span className="font-syne font-black text-6xl sm:text-7xl lg:text-8xl text-black/20 group-hover:text-black transition-colors duration-300 leading-none">
                {feat.id}
              </span>

              {/* Title and description */}
              <div className="space-y-2 border-t-2 border-black/10 pt-4 group-hover:border-black transition-colors duration-300">
                <h3 className="font-sans font-extrabold text-xl lg:text-2xl text-black tracking-tight leading-snug">
                  {feat.title}
                </h3>
                <p className="font-sans text-sm text-black/75 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
