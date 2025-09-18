"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const services: Service[] = [
    {
      id: 1,
      title: "Full-Service Management",
      subtitle: " Property Management",
      description:
        "Comprehensive property management services ensuring your investments are well-maintained and profitable. From tenant screening to maintenance coordination, we handle every detail.",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Tenant Management",
        "Maintenance Services",
        "Financial Reporting",
        "Legal Compliance",
      ],
    },
    {
      id: 2,
      title: " Full-Service Management",
      subtitle: "Asset Valuation",
      description:
        "We provide accurate and reliable valuations to help you understand the true worth of your assets. Our team ensures compliance with industry standards and offers insights to support your decision-making.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Professional Valuation Reports",
        "Regulatory Compliance",
        "Risk Assessment",
        "Detailed Market Insights",
      ],
    },
    {
      id: 3,
      title: "Asset Management Maximizing Value",
      subtitle: "Asset Management",
      description:
        "Our asset management service helps you optimize your property portfolio for long-term profitability. We focus on risk mitigation, growth strategies, and sustainable wealth creation.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Portfolio Optimization",
        "Strategic Planning",
        "Performance Monitoring",
        "Risk & Return Balancing",
      ],
    },
    {
      id: 4,
      title: "Seamless Operations",
      subtitle: " Facility Management",
      description:
        "Ensuring your properties run smoothly with top-notch facility management services. From daily operations to long-term maintenance, we guarantee efficiency and value preservation.",
      image:
        "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Preventive Maintenance",
        "Utility Management",
        "Health & Safety Compliance",
        "Operational Efficiency",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= services.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 2 < 0 ? Math.max(0, services.length - 2) : prev - 2
    );
  };

  return (
    <section className="py-20 bg-[#FCFEFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent tracking-tight">
            At S&S Prestige, there’s no room for{" "}
            <span className="underline decoration-black/40">ordinary</span> —
            only <span className="text-black">extraordinary</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With a people-centered culture and a commitment to redefining the
            real estate industry, we deliver transformative experiences, build
            wealth, and guide you to make informed property decisions.
          </p>
        </div>

        {/* Services Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.slice(currentSlide, currentSlide + 2).map((service) => (
              <div
                key={service.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => setSelectedService(service)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-80 flex flex-col justify-end text-white">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight drop-shadow-md">
                      {service.subtitle}
                    </h3>
                    <p className="text-gray-200 text-lg opacity-90">
                      {service.title}
                    </p>
                  </div>

                  {/* Plus Button */}
                  <div className="absolute bottom-8 right-8">
                    <div className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:rotate-180">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-300 border border-gray-300"
              disabled={currentSlide === 0}
            >
              <ChevronLeft
                className={`w-6 h-6 ${
                  currentSlide === 0 ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-300 border border-gray-300"
              disabled={currentSlide + 2 >= services.length}
            >
              <ChevronRight
                className={`w-6 h-6 ${
                  currentSlide + 2 >= services.length
                    ? "text-gray-400"
                    : "text-gray-700"
                }`}
              />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(services.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * 2)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index * 2
                      ? "bg-gray-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header Image */}
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedService.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-1 drop-shadow-lg">
                    {selectedService.subtitle}
                  </h3>
                  <p className="text-gray-200">{selectedService.title}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    What&lsquo;s Included:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gray-900 hover:bg-black text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
                    Get Started
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
