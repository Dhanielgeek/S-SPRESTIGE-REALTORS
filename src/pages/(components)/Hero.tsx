import React from "react";
// import heroimg from "../../../assets/herobuiliding.avif";
import heroimg from '../../../assets/TallBuilding.jpg'
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "200+", label: "Happy Clients" },
    { number: "5", label: "Years Experience" },
    { number: "15+", label: "Areas Covered" },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroimg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <span className="text-gray-200 text-sm font-medium tracking-wide">
                  Premium Real Estate Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Find Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                  Dream Home
                </span>
                <span className="block">Today</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Providing excellent service in locating your Ideal property .
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                Explore Properties
              </button>
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-gray-300">
                Schedule Viewing
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content – Featured Property */}
          <div className="bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Featured Listing
            </h3>
            <p className="text-gray-600 mb-4">Luxury home in Lekki, Lagos</p>

            <div className="w-full">
              <Image
                src={heroimg}
                alt="Featured Property"
                width={600}
                height={300}
                className="rounded-xl object-cover w-full"
                quality={100}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold text-gray-900">₦150M</span>
              <span className="text-gray-500">5 Beds • 4 Baths</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 px-6 rounded-lg font-semibold transition hover:bg-gray-900">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
