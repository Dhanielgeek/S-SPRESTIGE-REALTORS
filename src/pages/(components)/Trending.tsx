import Image from "next/image";
import React from "react";
import firsthouse from "../../../assets/onehouse.avif";

import type { StaticImageData } from "next/image";

interface Property {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string | StaticImageData;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Luxury Villa",
    location: "Lekki, Lagos",
    description:
      "A stunning 5-bedroom villa with ocean views and modern design.",
    image: firsthouse,
  },
  {
    id: 2,
    name: "Modern Apartment",
    location: "Victoria Island, Lagos",
    description:
      "Spacious 3-bedroom apartment with smart home features and city views.",
    image: firsthouse,
  },
  {
    id: 3,
    name: "Cozy Bungalow",
    location: "Ikeja, Lagos",
    description: "A comfortable family home in a serene neighborhood.",
    image: firsthouse,
  },
  {
    id: 4,
    name: "Beach House",
    location: "Oniru Beach, Lagos",
    description:
      "Enjoy breathtaking sunsets from this exclusive beachfront property.",
    image: firsthouse,
  },
  {
    id: 5,
    name: "Cozy Bungalow",
    location: "Ikeja, Lagos",
    description: "A comfortable family home in a serene neighborhood.",
    image: firsthouse,
  },
  {
    id: 6,
    name: "Luxury Villa",
    location: "Lekki, Lagos",
    description:
      "A stunning 5-bedroom villa with ocean views and modern design.",
    image: firsthouse,
  },
];

const Trending: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Trending Properties
        </h2>

        {/* Mobile: Carousel */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 lg:hidden">
          {properties.map((property) => (
            <div
              key={property.id}
              className="min-w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={property.image}
                fill
                priority
                quality={100}
                alt={property.name}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {property.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 {property.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {property.description}
                </p>
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={property.image}
                alt={property.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {property.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 {property.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {property.description}
                </p>
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
