'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavButtonsProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ isMobile = false, closeMenu = () => {} }) => (
  <>
    <button 
      onClick={closeMenu}
      className={`whitespace-nowrap transition-all transform active:scale-95 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black ${
        isMobile 
          ? 'w-full px-8 py-4 font-bold' 
          : 'px-5 py-2.5'
      }`}
    >
      Curate my scent
    </button>
    <button 
      onClick={closeMenu}
      className={`whitespace-nowrap transition-all transform active:scale-95 rounded-full bg-white text-black font-semibold hover:bg-gray-200 shadow-lg ${
        isMobile 
          ? 'w-full px-8 py-4 font-bold shadow-xl' 
          : 'px-6 py-2.5 hover:scale-105'
      }`}
    >
      Lets Chat
    </button>
  </>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md py-3 border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Left Side: Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center flex-shrink-0"
        >
          <a href="#" className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
            Leptech.ai
          </a>
        </motion.div>

        {/* Desktop Buttons Container (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-6 flex-shrink-0"
        >
          <NavButtons />
        </motion.div>

        {/* Mobile Hamburger Toggle (Hidden on Desktop) */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center text-center">
              <NavButtons isMobile closeMenu={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
