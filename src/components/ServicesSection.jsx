import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCarCrash, FaPaintRoller, FaCarSide } from "react-icons/fa";

const generalServices = [
  {
    title: "Vehicle repair",
    desc: "Professional diagnosis and repair of engine, brakes, suspension, and mechanical issues.",
    price: "45",
    icon: FaCarCrash,
  },
  {
    title: "Vehicle customisation",
    desc: "Custom upgrades including body kits, paintwork, interiors, and performance enhancements.",
    price: "85",
    icon: FaPaintRoller,
  },
  {
    title: "Vehicle service",
    desc: "Complete servicing with oil change, fluid checks, filters, and safety inspection.",
    price: "120",
    icon: FaCarSide,
  }
];

export default function ServicesSection() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const colorMap = {
    blue: "from-blue-600 to-blue-700",
    red: "from-red-600 to-red-700",
    green: "from-green-600 to-green-700",
    purple: "from-purple-600 to-purple-700",
    orange: "from-orange-600 to-orange-700",
  };

  const borderColorMap = {
    blue: "border-blue-500/50",
    red: "border-red-500/50",
    green: "border-green-500/50",
    purple: "border-purple-500/50",
    orange: "border-orange-500/50",
  };

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-10 px-4 sm:px-6 overflow-hidden"
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
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Auto Care</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert services to keep your vehicle running at peak performance
          </p>
        </div>

        {/* General Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}