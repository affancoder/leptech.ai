import React from "react";
import { Mail } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d4d1ca] text-[#2a2a2a] font-mono py-10 px-[60px]">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-10">

          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <span className="text-[16px] italic leading-none">
              leptech.ai
            </span>
          </div>

          {/* Column 2 — Navigation */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-6">
              <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
                Home
              </a>
              <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
                leptech.ai
              </a>
            </div>

            <div className="flex flex-col space-y-6">
              <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
                Weddings
              </a>
              <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity whitespace-nowrap">
                Corporate & Gifting
              </a>
              <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
                Hospitality
              </a>
            </div>
          </div>

          {/* Column 3 — Email contacts */}
          <div className="flex flex-col space-y-6  pl-26">
            <div className="flex items-center gap-2">
              <Mail size={14} strokeWidth={1.5} />
              <span className="text-[11px] tracking-wide">
                enquiries@leptech.ai
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} strokeWidth={1.5} />
              <span className="text-[11px] tracking-wide">
                media@leptech.ai
              </span>
            </div>
          </div>

          {/* Column 4 — Legal */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity">
              Cookies Settings
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#b5b2ab]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-[13px] opacity-70 font-semibold">
              © 2026 leptech.ai. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">

              <FaInstagram className="w-5.5 h-5.5 cursor-pointer hover:opacity-60 transition-opacity" />
              <FaFacebook className="w-5.5 h-5.5 cursor-pointer hover:opacity-60 transition-opacity" />
              <FaTiktok className="w-5.5 h-5.5 cursor-pointer hover:opacity-60 transition-opacity" />
              <FaTwitter className="w-5.5 h-5.5 cursor-pointer hover:opacity-60 transition-opacity" />
              <FaLinkedin className="w-5.5 h-5.5 cursor-pointer hover:opacity-60 transition-opacity" />

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;