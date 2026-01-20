"use client";

import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Tom L",
    text: "TJ Elite turning remapped my Ford focus this weekend. I was not only happy with the Tunning, the customer care afterwards was amazing. The car seems to have more power and less petrol used. I recommend for anyone that is thinking about getting it done to give these guys a call 1st.",
    rating: 5,
    service: "Engine Service",
  },
  {
    name: "Emily Tedman",
    text: "Can’t recommend Toby highly enough, saved me a few times now and all with a smile on his face 🤣. Honestly the nicest most reliable mechanic around. Thank you Toby!",
    rating: 5,
    service: "Carbon Cleaning",
  },
  {
    name: "Annabelle Reid",
    text: "Great company, friendly service, answered all questions with great knowledge. Would recommend!",
    rating: 5,
    service: "Full Service",
  },
  {
    name: "Ashley Reid",
    text: "Does what it says on the tin and with a smile. Top notch service.",
    rating: 5,
    service: "Performance Tune",
  },
];

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden text-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"></div>
      </div>

      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#E8D5E8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#E8D5E8]/10 border border-[#E8D5E8]/30 text-[#E8D5E8] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <FaStar className="text-[#E8D5E8]" />
            Customer Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2]">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from satisfied customers who trust us with their vehicles
          </p>
        </div>

        {/* Main Review Display */}
        <div className="max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <div className="relative bg-[#1C1B2E]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-[#E8D5E8] rounded-2xl flex items-center justify-center opacity-10">
              <FaQuoteLeft className="text-3xl text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, idx) => (
                <FaStar key={idx} className="text-[#E8D5E8] text-2xl" />
              ))}
            </div>

            {/* Review Text */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 min-h-[120px] flex items-center justify-center italic">
                "{reviews[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8D5E8] to-[#1C1B2E] flex items-center justify-center text-[#1C1B2E] text-2xl font-black">
                  {reviews[activeIndex].name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white uppercase tracking-wide">{reviews[activeIndex].name}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#E8D5E8] hover:text-[#1C1B2E] border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <FaChevronLeft className="group-hover:scale-110" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#E8D5E8] hover:text-[#1C1B2E] border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <FaChevronRight className="group-hover:scale-110" />
            </button>

          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToReview(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'w-12 bg-[#E8D5E8]' 
                    : 'w-2 bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          {[
            { label: "Happy Clients", val: "500+" },
            { label: "Average Rating", val: "4.9" },
            { label: "Recommend Us", val: "98%" },
            { label: "Top Rated", val: "5 ⭐" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-[#1C1B2E]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-[#E8D5E8]/30 transition-colors">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5E8] to-[#A28BA2] mb-2">{stat.val}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}