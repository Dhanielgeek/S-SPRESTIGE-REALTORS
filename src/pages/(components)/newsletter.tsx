
import { Mail } from "lucide-react";
import React from "react";
import houses from "../../../assets/TallBuilding.jpg";
import Image from "next/image";


const Newsletter = () => {
  return (
    <section className="min-h-full bg-[#f3f4f6] flex items-center justify-center px-6 lg:px-16 py-20">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section - Newsletter Form */}
        <div className="bg-[#1a1a1d] p-10 rounded-2xl shadow-xl flex flex-col gap-6">
          <Mail className="w-10 h-10 text-gray-200" />
          <h1 className="text-4xl font-bold text-white leading-tight">
            Stay Updated with{" "}
            <span className="block">Our Latest Properties</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Sign up to receive the latest listings, real estate insights, and
            land updates.
            <span className="block">No spam. Just value.</span>

          </p>
          <div className="flex flex-col gap-4">
            <input
              type="email"

              placeholder="Enter your email address"
              className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-gray-300 text-white placeholder-gray-400 py-2"
            />
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={houses}
            alt="house"
            className="w-full h-[40rem] object-cover rounded-xl"

          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;










