import React from "react";
import heroimg from "../../../assets/herobuiliding.avif";
import featurehouse from "../../../assets/forhero.avif";
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
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10"></div>

      {/* Orange Accent Overlays */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-orange-300 text-sm font-medium">
                  Premium Real Estate Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Dream Home
                </span>
                <span className="block">Today</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Discover luxury properties, prime locations, and exceptional
                service. Your perfect home is just one click away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore Properties
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30">
                Schedule Viewing
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content – Featured Property */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Featured Listing
            </h3>
            <p className="text-gray-600 mb-4">Luxury home in Lekki, Lagos</p>

            <div className="w-full">
              <Image
                src={featurehouse}
                alt="Featured Property"
                width={600}
                height={300}
                className="rounded-xl object-contain w-full"
                quality={100}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold text-orange-600">
                ₦150M
              </span>
              <span className="text-gray-500">5 Beds • 4 Baths</span>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition hover:from-orange-600 hover:to-orange-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
