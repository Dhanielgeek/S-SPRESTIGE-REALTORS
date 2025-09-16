import { ChevronDownSquare } from "lucide-react";
import React from "react";
import houses from "../../../assets/HouseBuilding.jpg";
import Image from "next/image";


const Newsletter = () => {
  return (
    <section className="min-h-full bg-[#f3f4f6] flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-10xl w-full py-5 px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-[#1a1a1d] p-10 rounded-2xl shadow-lg flex flex-col gap-6">
          <ChevronDownSquare className="w-10 h-10 text-white" />
          <h1 className="text-4xl font-bold text-white leading-tight">
            Get the latest gist and <span className="block">land updates!</span>
          </h1>
          <p className="text-gray-400 text-sm">
            We won’t spam you! We promise!
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-orange-500 text-white placeholder-gray-400 py-2"
            />
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <div className=" rounded-2xl overflow-hidden bg-amber-400">
          <Image
            src={houses}
            alt="house"
            fill
            className=" object-obtain w-full h-44  rounded-t-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;










