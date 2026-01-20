"use client";

import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaArrowRight,
  FaCog,
  FaLeaf,
  FaTachometerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements - Elite Pink & Navy Glows */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,213,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,213,232,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div data-aos="fade-right">
                <span className="inline-flex items-center gap-2 bg-[#E8D5E8]/10 border border-[#E8D5E8]/30 text-[#E8D5E8] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                  <FaTachometerAlt className="text-[#E8D5E8]" />
                  Elite Performance Tuning
                </span>
              </div>

              {/* Main Heading */}
              <div data-aos="fade-right" data-aos-delay="100">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none uppercase text-white">
                  TJ ELITE 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">
                    TUNING
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p 
                data-aos="fade-right" 
                data-aos-delay="200"
                className="text-xl text-gray-400 leading-relaxed max-w-xl font-light"
              >
                Precision mobile and garage services tailored for those who demand excellence in automotive performance.
              </p>

              {/* Benefits List */}
              <div 
                data-aos="fade-right" 
                data-aos-delay="300"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  "Engine Performance",
                  "Fuel Efficiency",
                  "Lower Emissions",
                  "Extended Lifespan"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 group">
                    <FaCheckCircle className="text-[#E8D5E8] group-hover:scale-110 transition-transform" />
                    <span className="text-sm uppercase tracking-wide font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="flex flex-wrap gap-4 pt-6"
              >
                <a
                  href="tel:07752549740"
                  className="group inline-flex items-center gap-3 bg-[#E8D5E8] text-[#1C1B2E] hover:bg-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#E8D5E8]/10 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhoneAlt />
                  <span>BOOK SERVICE</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/447752549740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-[#E8D5E8]/10 border border-[#E8D5E8]/20 text-[#E8D5E8] px-8 py-4 rounded-full text-lg font-bold backdrop-blur-sm transition-all duration-300"
                >
                  <FaWhatsapp />
                  <span>WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                
                {[
                  { icon: FaCog, title: "Precision", desc: "Expert Tuning", color: "from-[#E8D5E8] to-[#A28BA2]", delay: "200" },
                  { icon: FaTachometerAlt, title: "Output", desc: "Max Power", color: "from-white to-[#E8D5E8]", delay: "300", offset: true },
                  { icon: FaLeaf, title: "Eco", desc: "Clean Burn", color: "from-white to-[#E8D5E8]", delay: "400" },
                  { icon: FaCheckCircle, title: "Guaranteed", desc: "Elite Quality", color: "from-[#E8D5E8] to-[#A28BA2]", delay: "500", offset: true }
                ].map((card, idx) => (
                  <div 
                    key={idx}
                    data-aos="fade-up" 
                    data-aos-delay={card.delay}
                    className={`bg-[#1C1B2E]/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 hover:border-[#E8D5E8]/40 transition-all duration-500 group shadow-2xl ${card.offset ? 'mt-8' : ''}`}
                  >
                    <div className={`bg-gradient-to-br ${card.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                      <card.icon className="text-[#1C1B2E] text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 uppercase tracking-tight text-white">{card.title}</h3>
                    <p className="text-gray-500 text-xs font-medium uppercase">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Accent Glow */}
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8D5E8]/10 rounded-full blur-[100px] -z-10 animate-pulse"
              ></div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
    </section>
  );
}