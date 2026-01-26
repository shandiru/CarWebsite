import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">

      {/* ================= TOP BRAND STRIP ================= */}
      <div className="border-b border-gray-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Wrench className="text-[#db9fdb] animate-pulse" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
              TJ <span className="text-[#db9fdb]">Elite Tuning</span> & Vehicle Services
            </h2>
          </div>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base tracking-wide">
            Offering comprehensive garage/mobile services tailored to meet your automotive needs.
          </p>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* SERVICES */}
        <div className="group">
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-[#db9fdb] pb-2 inline-block">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Vehicle repair",
              "Vehicle customisation",
              "Vehicle service",
            ].map((service, i) => (
              <li key={i} className="transform transition-all duration-300 hover:translate-x-2">
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#db9fdb] transition flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#db9fdb] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-[#db9fdb] pb-2 inline-block">
            Get In Touch
          </h3>

          <div className="space-y-5 text-sm text-gray-400">

            <div className="flex gap-3 items-start group hover:text-gray-300 transition-colors">
              <a
                href="https://maps.app.goo.gl/tQSvCPyimv6dmBaXA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start"
              >
                <MapPin size={18} className="text-[#db9fdb] mt-1 flex-shrink-0" />
                <p className="hover:text-[#db9fdb]">
                  The Pigsty at Home Farm,<br />
                  Wadesmill, Ware,<br />
                  United Kingdom
                </p>
              </a>
            </div>


            <div className="flex gap-3 items-center group hover:text-gray-300 transition-colors">
              <Phone size={18} className="text-[#db9fdb] flex-shrink-0" />
              <a href="tel:+447393334935" className="hover:text-[#db9fdb] transition-colors">
                +44 7393 334935
              </a>
            </div>

            <div className="flex gap-3 items-center group hover:text-gray-300 transition-colors">
              <Mail size={18} className="text-[#db9fdb] flex-shrink-0" />
              <a href="mailto:Toby@tjelitetuning.co.uk" className="hover:text-[#db9fdb] transition-colors">
                Toby@tjelitetuning.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL & HOURS */}
        <div>
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-[#db9fdb] pb-2 inline-block">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-8">
            <a
              href="https://www.facebook.com/TJEliteTuning/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11 rounded-lg
                border border-gray-800
                flex items-center justify-center
                text-gray-400
                hover:text-white hover:border-[#db9fdb] hover:bg-[#db9fdb]/10
                transition-all duration-300
                transform hover:scale-110 hover:rotate-6
              "
            >
              <Facebook size={20} />
            </a>
          </div>


        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800 bg-black/50 py-6">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-3 text-sm text-gray-400">
            <Link
              to="/privacy-policy" className="hover:text-[#db9fdb] transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-gray-700">|</span>
            <Link
              to="/terms-conditions" className="hover:text-[#db9fdb] transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500">
            &copy; 2025 TJ Elite Tuning & Vehicle Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}