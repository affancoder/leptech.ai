"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "/img/lamp1.jpg",
  "/img/lamp2.jpg",
  // "/img/lamp3.jpg",
  "/img/lamp4.jpg",
  "/img/lamp5.jpg",
  "/img/lamp6.jpg",
];

const UniquelyBottled = () => {
  const totalItems = 10;
  const radius = 350; // Radius in pixels for desktop

  return (
    <section className="relative w-full min-h-[110vh] bg-[#f5f5f5] flex items-center justify-center overflow-hidden py-20">
      
      {/* Orbital Wheel Container */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {Array.from({ length: totalItems }).map((_, index) => {
            const angle = (index / totalItems) * 360;
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {/* Individual Card with Counter-Rotation for Content Stability */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="w-32 md:w-40 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg shadow-black/5 cursor-pointer bg-white border border-black/5"
                >
                  <Image
                    src={images[index % images.length]}
                    alt={`Orbital card ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Central Content Block (Static & Centered) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl bg-[#f5f5f5]/80 backdrop-blur-sm p-8 rounded-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold tracking-wide text-[#111] uppercase"
        >
          UNIQUELY BOTTLED
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xs md:text-sm text-[#555] max-w-[420px] leading-relaxed"
        >
          Expertly crafted fragrances that bring your stories to life, from personal celebrations to corporate gifts. Discover the art of bespoke scents designed for unforgettable memories.
        </motion.p>

        {/* CTA Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row items-center gap-4"
        >
          {/* Badge */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
            <span className="text-black font-semibold text-sm">E</span>
          </div>

          {/* Input Field */}
          <div className="relative group">
            <input
              type="text"
              placeholder="HOW CAN YOU ELEVATE YOUR BIG DAY?"
              className="w-[280px] md:w-[320px] h-10 px-4 pr-10 bg-white border border-black/10 rounded-lg text-[10px] md:text-xs tracking-wider uppercase focus:outline-none focus:border-black/30 transition-all placeholder:text-gray-400 shadow-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-black transition-colors cursor-pointer">
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniquelyBottled;
