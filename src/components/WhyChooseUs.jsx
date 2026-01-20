import React, { useEffect, useState } from "react";
import {
  FaCar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaHandshake,
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaArrowRight,
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
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-500/50",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local Expertise",
      desc: "Serving your area with personalized attention and community-focused service",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-600/20",
      borderColor: "border-green-500/50",
    },
    {
      icon: FaMoneyBillWave,
      title: "Transparent Pricing",
      desc: "No hidden fees or surprise charges - what you see is what you pay",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "bg-yellow-600/20",
      borderColor: "border-yellow-500/50",
    },
    {
      icon: FaTools,
      title: "Professional Equipment",
      desc: "Advanced tools and proven techniques for superior results every time",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/50",
    },
    {
      icon: FaClock,
      title: "Flexible Scheduling",
      desc: "Book appointments that fit your busy lifestyle - evenings and weekends available",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-500/50",
    },
    {
      icon: FaHandshake,
      title: "Trusted Service",
      desc: "Built on reliability, integrity, and commitment to customer satisfaction",
      color: "from-orange-600 to-orange-700",
      bgColor: "bg-orange-600/20",
      borderColor: "border-orange-500/50",
    },
  ];

  return (
    <section
      id="why"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-red-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Advantages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Choose Us</span>
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
            <div className={`h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border ${reasons[activeIndex].borderColor} rounded-3xl p-8 md:p-12 transition-all duration-500`}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${reasons[activeIndex].color} mb-6`}>
                {React.createElement(reasons[activeIndex].icon, { className: "text-4xl text-white" })}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
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
                      idx === activeIndex ? 'w-12 bg-red-500' : 'w-8 bg-gray-600 hover:bg-gray-500'
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
                  className={`cursor-pointer bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                    activeIndex === idx ? reason.borderColor : 'border-slate-700'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-xl text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
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
                className={`cursor-pointer group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  activeIndex === realIdx ? reason.borderColor : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{reason.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up">
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-3" />
            <p className="font-bold text-xl mb-1">100% Guaranteed</p>
            <p className="text-gray-400 text-sm">Quality work or your money back</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-3" />
            <p className="font-bold text-xl mb-1">5-Star Rated</p>
            <p className="text-gray-400 text-sm">Trusted by hundreds of customers</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center">
            <FaLeaf className="text-4xl text-green-500 mx-auto mb-3" />
            <p className="font-bold text-xl mb-1">Eco-Friendly</p>
            <p className="text-gray-400 text-sm">Environmentally responsible methods</p>
          </div>

        </div>

        {/* CTA Banner */}
        {/* <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl px-8 py-6">
            <p className="text-gray-300 mb-4">
              Experience the difference professional service makes
            </p>
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30">
              <span>Get Started Today</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> */}

      </div>
    </section>
  );
}