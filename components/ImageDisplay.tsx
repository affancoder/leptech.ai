"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/img/bg.jpg",
  "/img/bg2.jpg",
  "/img/bg3.jpg",
];

const ImageDisplay = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen py-22 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="relative w-full min-h-[80vh] md:min-h-screen rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">

        {/* Background Image */}
        <Image
          src={images[index]}
          alt="Background"
          fill
          priority
          className="object-cover transition-opacity duration-700 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl text-white px-8 md:px-14">

            <h1 className="text-3xl md:text-5xl font-semibold mb-4 uppercase">
              The Broken Gift
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
              Move beyond predictable favors and corporate gifts to something
              genuinely memorable. Each recipient creates a personal fragrance
              that captures their unique experience or relationship—crafted with
              premium ingredients and presented with an elegance that reflects
              the occasion.
            </p>

            <p className="text-base md:text-lg font-medium">
              How can you elevate your big day?
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="/img/e.png"
                alt="E"
                className="w-6 h-6 object-contain"
              />

              <div className="w-1/3 h-10 border border-white/30 rounded-lg" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageDisplay;