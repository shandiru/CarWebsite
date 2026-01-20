import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTools,
  FaAward,
  FaUserFriends,
  FaShieldAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar
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
    { number: "24/7", label: "Support Available", icon: FaShieldAlt },
  ];

  const features = [
    {
      icon: FaTools,
      title: "Expert Technicians",
      desc: "Certified professionals with years of automotive experience"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Mobile Service",
      desc: "We come to you - home, office, or anywhere convenient"
    },
    {
      icon: FaClock,
      title: "Flexible Hours",
      desc: "Evening and weekend appointments available"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guaranteed",
      desc: "All work backed by our satisfaction guarantee"
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-10 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-red-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Our Service</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-orange-600 rounded-full"></div>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We're dedicated to providing professional automotive services that keep your vehicle running at peak performance. Our mobile approach brings expert care directly to your location, saving you time and hassle.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With cutting-edge equipment and proven techniques, we deliver results that improve engine efficiency, reduce emissions, and extend vehicle lifespan.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {[
                  "Professional certified technicians",
                  "State-of-the-art equipment",
                  "Transparent pricing - no hidden fees",
                  "Satisfaction guaranteed on all services",
                  "Eco-friendly cleaning solutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/40 transition-colors">
                      <FaCheckCircle className="text-red-500 text-sm" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div data-aos="fade-left" className="space-y-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                  className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          data-aos="fade-up"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <Icon className="text-4xl text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}