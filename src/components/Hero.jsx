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
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div data-aos="fade-right">
                <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  <FaLeaf className="text-red-500" />
                  Professional Service
                </span>
              </div>

              {/* Main Heading */}
              <div data-aos="fade-right" data-aos-delay="100">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  TJ Elite Tuning 
                  <br />
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    & Vehicle Services 
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p 
                data-aos="fade-right" 
                data-aos-delay="200"
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Offering comprehensive garage/mobile services tailored to meet your automotive needs.
              </p>

              {/* Benefits List */}
              <div 
                data-aos="fade-right" 
                data-aos-delay="300"
                className="space-y-3"
              >
                {[
                  "Improved engine performance",
                  "Better fuel economy",
                  "Reduced harmful emissions",
                  "Extended engine lifespan"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-200">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div 
                data-aos="fade-right" 
                data-aos-delay="400"
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="tel:07752549740"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhoneAlt />
                  <span>Book Now</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/447752549740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-red-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <FaCog className="text-red-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fast Service</h3>
                  <p className="text-gray-400 text-sm">
                    Quick turnaround without compromising quality
                  </p>
                </div>

                {/* Card 2 */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 mt-8"
                >
                  <div className="bg-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <FaTachometerAlt className="text-blue-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance</h3>
                  <p className="text-gray-400 text-sm">
                    Maximize your vehicle's efficiency
                  </p>
                </div>

                {/* Card 3 */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-green-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <FaLeaf className="text-green-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                  <p className="text-gray-400 text-sm">
                    Reduce emissions and environmental impact
                  </p>
                </div>

                {/* Card 4 */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="500"
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 mt-8"
                >
                  <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-purple-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guaranteed</h3>
                  <p className="text-gray-400 text-sm">
                    Professional results you can trust
                  </p>
                </div>

              </div>

              {/* Floating Element */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full blur-2xl animate-pulse"
              ></div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      
    </section>
  );
}