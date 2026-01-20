"use client";

import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTools,
  FaAward,
  FaUserFriends,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const stats = [
    { number: "500+", label: "Happy Customers", icon: FaUserFriends },
    { number: "5+", label: "Years Experience", icon: FaAward },
    { number: "99%", label: "Success Rate", icon: FaCheckCircle },
    { number: "Elite", label: "Performance", icon: FaShieldAlt },
  ];

  const features = [
    {
      icon: FaTools,
      title: "Expert Technicians",
      desc: "Certified professionals with years of high-performance automotive experience"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Mobile Service",
      desc: "We come to you - home, office, or anywhere convenient"
    },
    {
      icon: FaClock,
      title: "Flexible Hours",
      desc: "Evening and weekend appointments available to suit your schedule"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guaranteed",
      desc: "All work backed by our TJ Elite satisfaction guarantee"
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements - Elite Pink and Navy Glows */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D5E8] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1C1B2E] rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Modern Dot Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#E8D5E8_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-[#E8D5E8] font-semibold uppercase tracking-widest text-sm mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Our Service</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E8D5E8] to-transparent mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-[#1C1B2E]/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tight">
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#E8D5E8] to-[#1C1B2E] rounded-full"></div>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                We're dedicated to providing professional automotive services that keep your vehicle running at peak performance. Our mobile approach brings expert care directly to your location, saving you time and hassle.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With cutting-edge equipment and proven techniques, we deliver results that improve engine efficiency, reduce emissions, and extend vehicle lifespan through precision tuning and maintenance.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-[#1C1B2E]/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-[#E8D5E8]">The TJ Elite Difference</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certified technicians",
                  "Elite-tier equipment",
                  "Transparent pricing",
                  "Guaranteed results",
                  "Mobile convenience",
                  "Customised tuning"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#E8D5E8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8D5E8]/20 transition-colors">
                      <FaCheckCircle className="text-[#E8D5E8] text-xs" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div data-aos="fade-left" className="space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#1C1B2E]/40 backdrop-blur-md border border-white/5 hover:border-[#E8D5E8]/30 rounded-2xl p-6 transition-all duration-300 hover:translate-x-2 cursor-default shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8D5E8] to-[#A28BA2] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-3 transition-transform">
                      <Icon className="text-2xl text-[#1C1B2E]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 uppercase tracking-wide group-hover:text-[#E8D5E8] transition-colors">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C1B2E]/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:bg-[#1C1B2E]/40 transition-all duration-300 group shadow-md"
              >
                <Icon className="text-3xl text-[#E8D5E8]/60 mx-auto mb-4 group-hover:scale-110 group-hover:text-[#E8D5E8] transition-all" />
                <p className="text-4xl font-black mb-1 bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2] bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}