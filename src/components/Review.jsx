import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Tom L",
    text: "TJ Elite turning remapped my Ford focus this weekend. I was not only happy with the Tunning, the customer care afterwards was amazing. The car seems to have more power and less petrol used. I recommend for anyone that is thinking about getting it done to give these guys a call 1st. Thanks for a great service and I will be letting my friends and family know about you",
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

export default function Review  () {
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
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/50 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            <FaStar className="text-yellow-500" />
            Customer Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from satisfied customers who trust us with their vehicles
          </p>
        </div>

        {/* Main Review Display */}
        <div className="max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center opacity-20">
              <FaQuoteLeft className="text-3xl text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-500 text-2xl" />
              ))}
            </div>

            {/* Review Text */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 min-h-[120px] flex items-center justify-center">
                "{reviews[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-2xl font-bold">
                  {reviews[activeIndex].name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{reviews[activeIndex].name}</p>
                  {/* <p className="text-sm text-gray-400">{reviews[activeIndex].service}</p> */}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-white" />
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
                    ? 'w-12 bg-gradient-to-r from-yellow-500 to-orange-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid - Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => goToReview(idx)}
              className={`cursor-pointer bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                idx === activeIndex 
                  ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Mini Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>

              {/* Text Preview */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-700">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.service}</p>
                </div>
              </div>

              {/* Active Indicator */}
              {idx === activeIndex && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-yellow-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">500+</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</p>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">4.9</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Average Rating</p>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">98%</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Recommend Us</p>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-2">5 ⭐</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Top Rated</p>
          </div>
        </div>

      </div>
    </section>
  );
}