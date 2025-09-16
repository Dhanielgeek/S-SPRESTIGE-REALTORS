import React from "react";
import Image from "next/image";
import featurehouse from "../../../assets/forhero.avif";

const Featurelistings = () => {
  const listings = [
    {
      id: 1,
      title: "Luxury home in Lekki, Lagos",
      price: "₦150M",
      beds: 5,
      baths: 4,
      img: featurehouse,
    },
    {
      id: 2,
      title: "Modern Duplex in Victoria Island",
      price: "₦200M",
      beds: 6,
      baths: 5,
      img: featurehouse,
    },
    {
      id: 3,
      title: "Beachfront Mansion in Banana Island",
      price: "₦450M",
      beds: 8,
      baths: 7,
      img: featurehouse,
    },
    {
      id: 4,
      title: "Cozy Apartment in Ikoyi",
      price: "₦90M",
      beds: 3,
      baths: 2,
      img: featurehouse,
    },
    {
      id: 5,
      title: "Family Home in Ajah",
      price: "₦120M",
      beds: 4,
      baths: 3,
      img: featurehouse,
    },
    {
      id: 6,
      title: "Penthouse in Marina",
      price: "₦300M",
      beds: 6,
      baths: 5,
      img: featurehouse,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Finest Listings, Selected with Care
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {listing.title}
              </h3>

              <div className="w-full">
                <Image
                  src={listing.img}
                  alt={listing.title}
                  width={600}
                  height={300}
                  className="rounded-xl object-cover w-full"
                  quality={100}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">
                  {listing.price}
                </span>
                <span className="text-gray-500">
                  {listing.beds} Beds • {listing.baths} Baths
                </span>
              </div>

              <button className="w-full mt-6 bg-black text-white py-3 px-6 rounded-lg font-semibold transition hover:bg-gray-900">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="lg:hidden flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="min-w-[80%] bg-white backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 snap-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {listing.title}
              </h3>

              <div className="w-full">
                <Image
                  src={listing.img}
                  alt={listing.title}
                  width={600}
                  height={300}
                  className="rounded-xl object-cover w-full"
                  quality={100}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">
                  {listing.price}
                </span>
                <span className="text-gray-500">
                  {listing.beds} Beds • {listing.baths} Baths
                </span>
              </div>

              <button className="w-full mt-6 bg-black text-white py-3 px-6 rounded-lg font-semibold transition hover:bg-gray-900">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurelistings;
