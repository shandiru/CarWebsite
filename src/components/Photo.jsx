"use client";

import React, { useState } from "react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Manually define your EU images
  const euImages = [
    { src: "/EU.jpeg" }, { src: "/EU1.jpeg" }, { src: "/EU2.jpeg" },
    { src: "/EU3.jpeg" }, { src: "/EU4.jpeg" }, { src: "/EU5.jpeg" },
  ];

  // 2. Generate the im2.jpg to im20.png series
  const generatedImages = Array.from({ length: 19 }, (_, i) => {
    const imageNumber = i + 2;
    const extension = (imageNumber >= 16 && imageNumber <= 20) ? 'png' : 'jpg';
    return { src: `/im${imageNumber}.${extension}` };
  });

  const images = [...euImages, ...generatedImages];

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="relative bg-black py-20 px-4 overflow-hidden text-white min-h-screen flex flex-col justify-center">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"></div>
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Work</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-[1px] bg-[#E8D5E8]/30"></div>
          <div className="w-2 h-2 bg-[#E8D5E8] rotate-45"></div>
          <div className="w-16 h-[1px] bg-[#E8D5E8]/30"></div>
        </div>
      </div>

      {/* MAIN CAROUSEL CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto w-full group">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
          
          {/* Main Image */}
          <img
            src={images[currentIndex].src}
            alt={`Car ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#E8D5E8] hover:text-black transition-all z-20 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#E8D5E8] hover:text-black transition-all z-20 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter Overlay */}
          <div className="absolute bottom-4 right-6 bg-black/60 px-4 py-1 rounded-full text-xs font-mono tracking-widest border border-white/10">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* THUMBNAILS STRIP */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth px-2">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                relative flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg cursor-pointer overflow-hidden border-2 transition-all
                ${currentIndex === index ? "border-[#E8D5E8] scale-105 shadow-lg shadow-[#E8D5E8]/20" : "border-transparent opacity-50 hover:opacity-100"}
              `}
            >
              <img src={img.src} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}