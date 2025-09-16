import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Payment confirmation and to the issuance of agreement and contract was very fast and I can say S&S Prestige Realtors is a reliable & trustworthy company.",
      author: "Mr Oluwafemi Tifase",
    },
    {
      text: "Working with S&S Prestige Realtors has been an absolute game-changer for our business. Their professionalism and attention to detail is unmatched.",
      author: "Mrs Sarah Johnson",
    },
    {
      text: "The team at S&S Prestige Realtors delivered beyond our expectations. Their innovative solutions and timely delivery made all the difference.",
      author: "Dr Michael Chen",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent tracking-tight mb-16 leading-tight">
          Clients spill the beans; their{" "}
          <span className="text-black">love</span>
          <br />
          for us!
        </h2>

        {/* Testimonial Cards Container */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-64 bg-gray-300 rounded-2xl transform -rotate-12 scale-95 opacity-30"></div>
            <div className="w-80 h-64 bg-gray-400 rounded-2xl transform rotate-6 scale-90 opacity-40 -ml-40"></div>
            <div className="w-80 h-64 bg-gray-300 rounded-2xl transform -rotate-6 scale-95 opacity-30 -ml-40"></div>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative z-10 bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-center">
              <span className="text-black font-semibold text-lg">
                - {testimonials[currentIndex].author}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="group bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full p-4 transform hover:scale-110 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </button>

          <button
            onClick={nextTestimonial}
            className="group bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full p-4 transform hover:scale-110 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-black rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-black rounded-full opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-white rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>
    </div>
  );
};

export default Testimonials;
