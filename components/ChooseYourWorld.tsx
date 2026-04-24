"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ChooseYourWorld = () => {
  return (
    <section className="w-full bg-[#f1efe9] pt-24 pb-32">
      {/* Top Header Area */}
      <div className="px-16 md:px-20 mb-14 text-left">
        <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.15em] text-[#111] uppercase">
          CHOOSE YOUR WORLD
        </h2>
        <p className="mt-2 text-[11px] text-[#666] tracking-wider leading-relaxed">
          Which story will you write in scent?
        </p>
      </div>

      {/* Bottom Panel Layout */}
      <div className="flex flex-col md:flex-row h-[420px] md:h-[500px] w-full">
        {/* LEFT PANEL (FEATURED) */}
        <div className="relative flex-[2.1] h-full overflow-visible group">
          <div className="w-full h-full overflow-hidden">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center transition-transform"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
          
          {/* Overlay Content Block */}
          <div className="absolute bottom-0 left-0 w-[65%] bg-[#f1efe9] px-6 py-6 z-10 translate-y-[20%]">
            <div className="relative">
              <h3 className="text-[12px] tracking-[0.12em] text-[#111] uppercase">
                WEDDINGS
              </h3>
              <p className="mt-2 text-[11px] text-[#555] leading-relaxed max-w-[220px]">
                Craft an olfactory memory for your most special day with bespoke fragrances tailored to your love story.
              </p>
              
              {/* Circular Arrow Button */}
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full border border-[#999] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="relative flex-[1] h-full overflow-hidden group border-l border-black/[0.05]">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[11px] tracking-[0.12em] text-white uppercase">
              CORPORATE & GIFTING
            </h3>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex-[1] h-full overflow-hidden group border-l border-black/[0.05]">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[11px] tracking-[0.12em] text-white uppercase">
              HOSPITALITY
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourWorld;
