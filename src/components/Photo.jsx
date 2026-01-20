"use client";

import React, { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Automatically generates images im2.jpg through im15.jpg (skipping im1)
  const images = Array.from({ length: 14 }, (_, i) => ({
    src: `/im${i + 2}.jpg`,
  }));

  return (
    <section
      id="gallery"
      className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden text-white"
    >
      {/* Background Decor - Using Elite Pink and Dark Slate */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"></div>
      </div>

      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#E8D5E8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mb-16">
        <div className="inline-block">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Work</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E8D5E8] to-transparent"></div>
            <div className="w-2 h-2 bg-[#E8D5E8] rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E8D5E8] to-transparent"></div>
          </div>
        </div>
        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
          High-performance tuning and precision vehicle services. Browse our latest projects.
        </p>
      </div>

      {/* MASONRY GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-xl cursor-pointer border border-white/5
                ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
                ${i % 7 === 0 ? "lg:col-span-1 lg:row-span-2" : ""}
              `}
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative h-full overflow-hidden bg-zinc-900">
                <img
                  src={img.src}
                  alt={`TJ Elite Tuning Project`}
                  className={`
                    w-full object-cover transition-all duration-700 group-hover:scale-110
                    ${i % 5 === 0 ? "h-[500px]" : i % 7 === 0 ? "h-[400px]" : "h-[300px]"}
                  `}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute inset-0 bg-[#E8D5E8]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-14 h-14 rounded-full bg-[#E8D5E8] flex items-center justify-center shadow-xl shadow-[#E8D5E8]/20">
                    <svg className="w-6 h-6 text-[#1C1B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#E8D5E8] flex items-center justify-center text-[#1C1B2E] transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
          />
        </div>
      )}

      {/* Stats Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Vehicles Tuned" },
            { number: "100%", label: "Satisfaction" },
            { number: "15+", label: "Years Experience" },
            { number: "Elite", label: "Performance" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 transition-all hover:border-[#E8D5E8]/40">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2] mb-1">
                {stat.number}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}