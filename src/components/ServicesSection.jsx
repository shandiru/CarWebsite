"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCarCrash, FaPaintRoller, FaCarSide } from "react-icons/fa";

const generalServices = [
  {
    title: "Vehicle repair",
    desc: "Professional diagnosis and repair of engine, brakes, suspension, and mechanical issues.",
    icon: FaCarCrash,
  },
  {
    title: "Vehicle customisation",
    desc: "Custom upgrades including body kits, paintwork, interiors, and performance enhancements.",
    icon: FaPaintRoller,
  },
  {
    title: "Vehicle service",
    desc: "Complete servicing with oil change, fluid checks, filters, and safety inspection.",
    icon: FaCarSide,
  }
];

export default function ServicesSection() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="services"
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
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Auto Care</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert services to keep your vehicle running at peak performance
          </p>
        </div>

        {/* General Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group relative bg-[#1C1B2E]/30 backdrop-blur-md border border-white/5 hover:border-[#E8D5E8]/40 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8D5E8] to-[#A28BA2] flex items-center justify-center mb-6 shadow-lg shadow-[#E8D5E8]/10 group-hover:shadow-[#E8D5E8]/20 transition-all">
                  <Icon className="text-3xl text-[#1C1B2E]" />
                </div>

                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight group-hover:text-[#E8D5E8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#E8D5E8]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}