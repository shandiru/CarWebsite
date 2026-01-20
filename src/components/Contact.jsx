import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Updated with your provided number
    const number = "447393334935"; 
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Vehicle:* ${form.vehicle}%0A*Message:* ${form.message}`;

    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-600 rounded-full blur-3xl"></div>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

        {/* LEFT — CONTACT INFO */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
              TJ Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Tuning</span>
            </h2>
            <p className="text-red-500 font-semibold tracking-widest uppercase mt-2">& Vehicle Services</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
              <div className="w-3 h-3 bg-red-600 rotate-45"></div>
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Ready to unlock your vehicle's true potential? Reach out for expert tuning and professional servicing tailored to your needs.
          </p>

          <div className="space-y-6 pt-4">
            {/* PHONE */}
            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaPhoneAlt className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+447393334935" className="text-gray-300 hover:text-red-500 transition text-lg font-medium">
                  +44 7393 334935
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaEnvelope className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:Toby@tjelitetuning.co.uk" className="text-gray-300 hover:text-red-500 transition text-lg">
                  Toby@tjelitetuning.co.uk
                </a>
              </div>
            </div>

            {/* HOURS - Updated with your custom times */}
            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaClock className="text-red-500 text-xl" />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Business Hours</p>
                <ul className="text-gray-400 space-y-1 text-sm md:text-base">
                  <li className="flex justify-between max-w-xs"><span>Mon – Fri:</span> <span className="text-gray-300">8:00 AM – 6:00 PM</span></li>
                  <li className="flex justify-between max-w-xs"><span>Saturday:</span> <span className="text-gray-300">9:00 AM – 1:00 PM</span></li>
                  <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-red-500/70 font-medium">Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — WHATSAPP FORM */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl rounded-2xl"></div>
          
          <div className="relative border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold uppercase mb-2 flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                Quick Enquiry
              </h3>
              <p className="text-gray-500">
                Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all"
              />
              <input
                type="text"
                name="vehicle"
                placeholder="Vehicle Make & Model"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help? (Remapping, Servicing, Repairs...)"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all resize-none"
              />

              <button
                onClick={handleSubmit}
                className="relative w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 uppercase tracking-widest font-bold rounded-lg group shadow-lg shadow-red-600/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send to WhatsApp
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}