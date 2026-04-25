"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useLowEndDevice } from "@/hooks/useLowEndDevice";

interface Slide {
  heading: string;
  subheading: string;
  cta: string;
}

const videos: string[] = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

const slides: Slide[] = [
  {
    heading: "Build Your Brand",
    subheading:
      "Elevate your digital presence with cutting-edge design and technology.",
    cta: "Get Started",
  },
  {
    heading: "Innovate Faster",
    subheading:
      "Streamline your workflow with our powerful and intuitive platform.",
    cta: "Learn More",
  },
  {
    heading: "Design for Tomorrow",
    subheading:
      "Future-proof your business with scalable solutions built for growth.",
    cta: "Contact Us",
  },
];

const HeroVideoSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (isPaused || !isPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused, isPlaying]);

  // ✅ FIX: force preload all videos
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.load();
    });
  }, []);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Play/Pause toggle
  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // ✅ FIX: control playback safely (mobile fix)
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted = true;
      video.playsInline = true;

      if (index === currentSlide) {
        if (isPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentSlide, isPlaying]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black md:cursor-none group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={togglePlayPause}
    >
      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-md"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center text-white font-bold text-xs uppercase">
              {isPlaying ? "PAUSE" : "PLAY"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Videos */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-black z-[1]" />

        {videos.map((video, index) => (
          <video
            key={video}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video}
            muted
            loop
            playsInline
            preload="auto" // ✅ FIX
            poster="/images/fallback.jpg" // ✅ prevents black screen
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 2 : 0 }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      {/* Hero Content (UNCHANGED) */}
      <div className="absolute bottom-16 left-6 md:bottom-20 md:left-20 z-20 flex flex-col items-start gap-4 max-w-full md:max-w-xl text-left text-white pr-6 md:pr-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 leading-tight tracking-wide">
              BOTTLE THE MOMENT
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 uppercase font-light">
              BESPOKE SCENTS FOR UNFORGETTABLE MEMORIES
            </h2>

            {/* WHITE LINE (kept exactly) */}
            <div className="hidden md:block mt-4">
              <div className="h-[2px] w-full bg-white" />
            </div>

            <p className="text-xs md:text-sm lg:text-base text-white/70 mt-4 mb-8 max-w-lg leading-relaxed font-light">
              Expertly crafted fragrances that bring your stories to life,
              from personal celebrations to corporate gifts
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Navigation Arrows (KEPT) */}
      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur"
        >
          ◀
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur"
        >
          ▶
        </button>
      </div>

      {/* Dots (KEPT) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroVideoSlider;