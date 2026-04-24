"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ChooseYourWorld = () => {
  return (
    <section className="w-full bg-[#e9e6e2] py-20">
      {/* Top Header Area */}
      <div className="px-16 md:px-24 mb-12 text-left">
        <h2 className="text-xl md:text-2xl font-mono tracking-widest text-[#111] uppercase">
          CHOOSE YOUR WORLD
        </h2>
        <p className="mt-2 text-[10px] md:text-xs text-[#555] tracking-wider">
          Which story will you write in scent?
        </p>
      </div>

      {/* Bottom Panel Layout */}
      <div className="flex flex-col md:flex-row h-[500px] md:h-[600px] w-full">
        {/* LEFT PANEL (FEATURED) */}
        <div className="relative flex-[2] h-full overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')" }}
          />
          
          {/* Overlay Box */}
          <div className="absolute bottom-0 left-0 w-full md:w-[70%] bg-[#e9e6e2] p-8 md:p-12 z-10">
            <div className="relative">
              <h3 className="text-xs font-mono tracking-[0.3em] text-[#111] uppercase mb-4">
                WEDDINGS
              </h3>
              <p className="text-[11px] md:text-xs text-[#555] leading-relaxed max-w-[250px] font-mono">
                Craft an olfactory memory for your most special day with bespoke fragrances tailored to your love story.
              </p>
              
              {/* Circular Arrow Button */}
              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="relative flex-[1] h-full overflow-hidden group border-l border-[#e9e6e2]/20">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white uppercase">
              CORPORATE & GIFTING
            </h3>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex-[1] h-full overflow-hidden group border-l border-[#e9e6e2]/20">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white uppercase">
              HOSPITALITY
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourWorld;
