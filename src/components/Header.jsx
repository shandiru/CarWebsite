import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const waNumber = "447393334935";
  const waHref = `https://wa.me/${waNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-[#E8D5E8]"
          : "bg-gradient-to-b from-black/90 to-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8D5E8] to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO with animated glow */}
          <div className="relative group">
            <div className="absolute -inset-2"></div>
            <div className="relative flex items-center">
              <img
                src="/logo.png"
                alt="Nottingham Carbon Cleaning"
                className="h-20 w-30 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* DESKTOP NAV with unique indicators */}
          <nav className="hidden lg:flex items-center gap-1">
            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <HashLink
                key={item}
                to={`/#${item}`}
                scroll={scrollWithOffset}
                className="relative px-5 py-2 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {/* Top bar indicator */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r  to-[#E8D5E8] group-hover:w-full transition-all duration-300"></span>
                
                {/* Bottom bar indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r to-[#E8D5E8] group-hover:w-full transition-all duration-300"></span>
                
                {/* Text with glow effect */}
                <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">
                  {item}
                </span>

                {/* Background fill on hover */}
                <span className="absolute inset-0 bg-gradient-to-r to-[#E8D5E8]opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
              </HashLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS with enhanced styling */}
          <div className="flex items-center gap-3">

            {/* WHATSAPP with animated border */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 relative group"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-lg opacity-60 group-hover:opacity-100 blur-sm transition duration-300 animate-pulse"></div>
              
              <span className="relative z-10 flex items-center gap-2 px-5 py-2.5 bg-black border border-green-500/50 text-green-400 hover:text-white hover:bg-green-500/20 rounded-lg text-sm font-bold transition-all duration-300">
                <FaWhatsapp className="text-lg group-hover:rotate-12 transition-transform" />
                WhatsApp
              </span>
            </a>

            {/* MOBILE MENU BUTTON with animation */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white border border-red-600/30 rounded-lg hover:bg-red-600/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-black ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-red-600/20 py-6 space-y-2">
            {["home", "about", "services", "gallery", "contact"].map((item, index) => (
              <HashLink
                key={item}
                to={`/#${item}`}
                scroll={scrollWithOffset}
                onClick={() => setIsMenuOpen(false)}
                className="block relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/10 transition-all duration-300">
                  {/* Left accent bar */}
                  <span className="w-0 h-full bg-gradient-to-r from-red-600 to-transparent group-hover:w-1 transition-all duration-300"></span>
                  
                  <span className="uppercase font-bold text-gray-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                    {item}
                  </span>

                  {/* Arrow indicator */}
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </HashLink>
            ))}

            {/* MOBILE ACTIONS with stagger animation */}
            <div className="pt-4 px-4 flex flex-col gap-3">
                    <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 py-3 text-green-400 font-bold rounded-lg group-hover:text-white transition-colors">
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                  WhatsApp
                </span>
                <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-green-500 transition-transform duration-300 rounded-lg"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8D5E8] to-transparent"></div>
    </header>
  );
}