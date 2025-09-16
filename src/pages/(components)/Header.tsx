import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../../../assets/sandsprestigelogo-removebg-preview.png";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [

    { name: "Home", path: "/" },
    { name: "Sale", path: "#sale" },
    { name: "Rent", path: "#rent" },
    { name: "Shortlet/BnB", path: "#shortlet" },
    { name: "Book & Inspection", path: "/book", isButton: true },

  ];

  return (
    <header className="w-full md:h-[13vh] h-[10vh] bg-white shadow-lg border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="md:w-16 md:h-16 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <Image
                src={logo}
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="md:text-2xl text-lg font-bold text-gray-900">
                S&S Prestige
              </span>
              <span className="text-sm text-gray-500 font-medium -mt-1">
                Realtors
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.isButton ? (
                <span
                  key={index}
                  onClick={() => router.push(link.path)}
                  className="cursor-pointer bg-black text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow hover:shadow-lg hover:scale-105"
                >
                  {link.name}
                </span>
              ) : (
                <span
                  key={index}
                  onClick={() =>
                    link.path.startsWith("#")
                      ? (window.location.hash = link.path)
                      : router.push(link.path)
                  }
                  className="cursor-pointer text-gray-700 hover:text-black font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Contact Info (Desktop Only) */}
          <div className="hidden xl:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <FaPhone className="w-4 h-4 text-black" />
              <span className="font-medium">+234 800 123 4567</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-1 text-gray-600">
              <FaEnvelope className="w-4 h-4 text-black" />
              <span className="font-medium">info@s&sprestige.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) =>
            link.isButton ? (
              <span
                key={index}
                onClick={() => {
                  router.push(link.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full cursor-pointer bg-black text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow hover:scale-105"
              >
                {link.name}
              </span>
            ) : (
              <span
                key={index}
                onClick={() => {
                  if (link.path.startsWith("#")) {
                    window.location.hash = link.path;
                  } else {
                    router.push(link.path);
                  }
                  setIsMenuOpen(false);
                }}
                className="block cursor-pointer text-gray-700 hover:text-black font-medium py-2 transition-colors duration-300 border-b border-gray-100"
              >
                {link.name}
              </span>
            )
          )}

          {/* Mobile Contact Info */}
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaPhone className="w-4 h-4 text-black" />
              <span>+234 800 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaEnvelope className="w-4 h-4 text-black" />
              <span>info@s&sprestige.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
