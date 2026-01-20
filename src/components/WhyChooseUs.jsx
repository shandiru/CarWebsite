"use client";

import React, { useEffect, useState } from "react";
import {
  FaCar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaHandshake,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      icon: FaCar,
      title: "Mobile Convenience",
      desc: "Professional service delivered to your location - home, office, or anywhere you prefer",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local Expertise",
      desc: "Serving your area with personalized attention and community-focused service",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
    {
      icon: FaMoneyBillWave,
      title: "Transparent Pricing",
      desc: "No hidden fees or surprise charges - what you see is what you pay",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
    {
      icon: FaTools,
      title: "Professional Equipment",
      desc: "Advanced tools and proven techniques for superior results every time",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
    {
      icon: FaClock,
      title: "Flexible Scheduling",
      desc: "Book appointments that fit your busy lifestyle - evenings and weekends available",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
    {
      icon: FaHandshake,
      title: "Trusted Service",
      desc: "Built on reliability, integrity, and commitment to customer satisfaction",
      color: "from-[#E8D5E8] to-[#A28BA2]",
      borderColor: "border-[#E8D5E8]/40",
    },
  ];

  return (
    <section
      id="why"
      className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden text-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"></div>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#E8D5E8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-[#E8D5E8] font-semibold uppercase tracking-widest text-sm mb-3">
            Our Advantages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what sets us apart and makes us the preferred choice for automotive care
          </p>
        </div>

        {/* Main Content - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Large Featured Card */}
          <div 
            className="md:col-span-2 md:row-span-2"
            data-aos="fade-right"
          >
            <div className={`h-full bg-[#1C1B2E]/40 backdrop-blur-md border ${reasons[activeIndex].borderColor} rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-2xl shadow-[#E8D5E8]/5`}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${reasons[activeIndex].color} mb-6 shadow-lg shadow-[#E8D5E8]/20`}>
                {React.createElement(reasons[activeIndex].icon, { className: "text-4xl text-[#1C1B2E]" })}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
                {reasons[activeIndex].title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {reasons[activeIndex].desc}
              </p>

              {/* Progress Indicators */}
              <div className="flex gap-2">
                {reasons.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-12 bg-[#E8D5E8]' : 'w-8 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Small Cards Column */}
          <div className="space-y-6">
            {reasons.slice(0, 2).map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer bg-[#1C1B2E]/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                    activeIndex === idx ? 'border-[#E8D5E8]/50 shadow-lg shadow-[#E8D5E8]/10' : 'border-white/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-xl text-[#1C1B2E]" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{reason.title}</h4>
                  <p className="text-gray-400 text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Grid - Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.slice(2).map((reason, idx) => {
            const Icon = reason.icon;
            const realIdx = idx + 2;
            return (
              <div
                key={realIdx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() => setActiveIndex(realIdx)}
                className={`cursor-pointer group bg-[#1C1B2E]/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  activeIndex === realIdx ? 'border-[#E8D5E8]/50 shadow-lg shadow-[#E8D5E8]/10' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-md shadow-black/50`}>
                  <Icon className="text-2xl text-[#1C1B2E]" />
                </div>
                <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{reason.title}</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{reason.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up">
          {[
            { icon: FaShieldAlt, title: "100% Guaranteed", desc: "Quality work or your money back" },
            { icon: FaStar, title: "5-Star Rated", desc: "Trusted by hundreds of customers" },
            { icon: FaCar, title: "Elite Tuning", desc: "Precision automotive performance" }
          ].map((badge, i) => (
            <div key={i} className="bg-[#1C1B2E]/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:bg-[#1C1B2E]/40 transition-all">
              <badge.icon className="text-4xl text-[#E8D5E8] mx-auto mb-3 opacity-80" />
              <p className="font-bold text-xl mb-1 uppercase tracking-tight">{badge.title}</p>
              <p className="text-gray-500 text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}