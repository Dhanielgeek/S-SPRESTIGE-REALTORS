import React from "react";
<<<<<<< HEAD
import heroimg from "../../../assets/herobuiliding.avif";
=======
// import heroimg from "../../../assets/herobuiliding.avif";
import heroimg from '../../../assets/TallBuilding.jpg'
>>>>>>> 5296d0a (newwspaper)
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "200+", label: "Happy Clients" },
    { number: "5", label: "Years Experience" },
    { number: "15+", label: "Areas Covered" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image - Black & White */}
      <div className="absolute inset-0">
        <Image
          src={heroimg}
          alt="Hero Background"
          fill
          className="object-cover scale-105"
          priority
          quality={100}
        />
      </div>
      {/* Gradient Overlay (lighter) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Tagline */}
        <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/20 rounded-full backdrop-blur-sm mb-8 shadow-lg">
          <span className="text-gray-200 text-sm font-medium tracking-wider uppercase">
            Premium Real Estate Services
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tight">
            Find Your
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mt-2">
            Dream Home
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tight mt-2">
            Today
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          Discover timeless properties, prime locations, and exceptional
          service. Your perfect home is waiting — step into elegance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:scale-105">
            <span className="flex items-center gap-2">Explore Properties</span>
          </button>
          <button className="bg-transparent text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-md hover:scale-105">
            Schedule Viewing
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium tracking-wider uppercase">
                {stat.label}
              </div>
<<<<<<< HEAD
            </div>
          ))}
=======

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
>>>>>>> 5296d0a (newwspaper)
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
