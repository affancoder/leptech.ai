"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Quote {
  text: string;
  author: string;
  role: string;
}

const quotes: Quote[] = [
  {
    text: "THE ESSENCE OF LUXURY IS NOT IN THE POSSESSION, BUT IN THE EXPERIENCE OF SOMETHING TRULY UNIQUE.",
    author: "ALEXANDER VOGUE",
    role: "CREATIVE DIRECTOR",
  },
  {
    text: "TRUE ELEGANCE IS THE ONLY BEAUTY THAT NEVER FADES, ETCHED INTO THE MEMORY OF THOSE WHO WITNESS IT.",
    author: "SOPHIA LOREN",
    role: "BRAND AMBASSADOR",
  },
  {
    text: "WE DON'T JUST CREATE FRAGRANCES; WE BOTTLE THE MOMENTS THAT DEFINE A LIFETIME OF SOPHISTICATION.",
    author: "JULIAN MARC",
    role: "MASTER PERFUMER",
  },
  {
    text: "CRAFTING MEMORIES THROUGH SCENT, WHERE EVERY DROP TELLS A STORY OF UNPARALLELED ARTISTRY.",
    author: "MARCUS CHEN",
    role: "ARTISTIC DIRECTOR",
  },
];

const WIDTH = 45;

const QuoteSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // ✅ Only 2 dots → first half & second half
  const dotMap = [0, Math.floor(quotes.length / 2)];

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* Divider Lines */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-[45%] w-px bg-white/40 z-20"
        style={{ left: `calc(50% - ${WIDTH / 2}vw)` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 h-[45%] w-px bg-white/40 z-20"
        style={{ left: `calc(50% + ${WIDTH / 2}vw)` }}
      />

      {/* Slider */}
      <motion.div
        animate={{
          x: `calc(50vw - ${(activeIndex + 0.5) * WIDTH}vw)`,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-nowrap absolute left-0"
        style={{ width: `${quotes.length * WIDTH}vw` }}
      >
        {quotes.map((quote, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="h-screen flex items-center px-12 md:px-16 lg:px-20 cursor-pointer select-none transition-all duration-700"
              style={{
                width: `${WIDTH}vw`,
                opacity: isActive ? 1 : 0.2,
                transform: isActive ? "scale(1)" : "scale(0.95)",
              }}
            >
              <div className="w-full max-w-[700px]">

                {/* Quote mark */}
                <span className="text-white/40 text-7xl md:text-8xl font-light font-serif mb-6 block leading-none">
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-[#e5e5e5] text-[11px] md:text-xs tracking-[0.3em] leading-relaxed uppercase mb-10 font-mono">
                  {quote.text}
                </p>

                {/* Author */}
                <div className="flex flex-col gap-1">
                  <span className="text-white text-[11px] tracking-widest font-mono uppercase">
                    {quote.author}
                  </span>
                  <span className="text-white/50 text-[9px] tracking-[0.4em] uppercase font-mono">
                    {quote.role}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* ✅ ONLY 2 DOTS */}
      <div className="absolute bottom-12 right-12 flex gap-6 z-30">
        {dotMap.map((targetIndex, i) => {
          const isActive =
            activeIndex >= dotMap[i] &&
            activeIndex < (dotMap[i + 1] ?? quotes.length);

          return (
            <button
              key={i}
              onClick={() => setActiveIndex(targetIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-white"
                  : "bg-transparent border border-white/50 hover:border-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default QuoteSection;