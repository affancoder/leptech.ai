"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ChooseYourWorld = () => {
  return (
    <section className="w-full bg-[#f1efe9] pt-16 md:pt-24 pb-20 md:pb-32">
      
      {/* Header */}
      <div className="px-6 sm:px-10 md:px-20 mb-10 md:mb-14 text-left">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium tracking-[0.18em] text-[#111] uppercase">
          CHOOSE YOUR WORLD
        </h2>
        <p className="mt-2 text-[10px] sm:text-[11px] text-[#666] tracking-wider leading-relaxed max-w-md">
          Which story will you write in scent?
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
        
        {/* LEFT (FEATURED) */}
        <div className="relative w-full md:flex-[2.1] h-[320px] sm:h-[380px] md:h-full group overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-700" />

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-0 md:left-0 w-[85%] sm:w-[70%] md:w-[60%] bg-[#f1efe9] p-4 sm:p-6 md:p-7 md:translate-y-[25%] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="relative">
              <h3 className="text-[11px] sm:text-[12px] tracking-[0.15em] text-[#111] uppercase">
                WEDDINGS
              </h3>
              <p className="mt-2 text-[10px] sm:text-[11px] text-[#555] leading-relaxed max-w-[240px]">
                Craft an olfactory memory for your most special day with bespoke fragrances tailored to your love story.
              </p>

              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full border border-[#aaa] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="relative w-full md:flex-[1] h-[260px] sm:h-[300px] md:h-full group overflow-hidden border-t md:border-t-0 md:border-l border-black/[0.06]">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-700" />

          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <h3 className="text-[11px] tracking-[0.14em] text-white uppercase">
              CORPORATE & GIFTING
            </h3>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full md:flex-[1] h-[260px] sm:h-[300px] md:h-full group overflow-hidden border-t md:border-t-0 md:border-l border-black/[0.06]">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-700" />

          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <h3 className="text-[11px] tracking-[0.14em] text-white uppercase">
              HOSPITALITY
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourWorld;