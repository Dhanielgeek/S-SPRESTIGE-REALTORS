/* eslint-disable @typescript-eslint/no-unused-expressions */
import Image from "next/image";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../../assets/sandsprestigelogo-removebg-preview.png";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const router = useRouter();

<<<<<<< HEAD
  const navLinks = [

    { name: "Home", path: "/" },
    { name: "Sale", path: "#sale" },
    { name: "Rent", path: "#rent" },
    { name: "Shortlet/BnB", path: "#shortlet" },
    { name: "Book & Inspection", path: "/book", isButton: true },

=======
  const navLinks: {
    name: string;
    path?: string;
    isButton?: boolean;
    hasDropdown?: boolean;
    subLinks?: { name: string; path: string }[];
  }[] = [
    { name: "Home", path: "/" },
    {
      name: "Property Brokerage",
      hasDropdown: true,
      subLinks: [
        { name: "Property Sale", path: "/property-sale" },
        { name: "Property Lease", path: "/property-lease" },
        { name: "Short Let", path: "/short-let" },
      ],
    },
    { name: "Asset Management", path: "/asset-management" },
    { name: "Facility Management", path: "/facility-management" },
    { name: "Asset Valuation", path: "/asset-valuation" },
    { name: "Book Inspection", path: "/book", isButton: true },
>>>>>>> 2208470 (made changes on the landing again...)
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
              <span className="md:text-xl text-base font-bold text-gray-900">
                S&Sprestige
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium -mt-1">
                RC: <span className="font-semibold text-gray-800">1321744</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) =>
              link.isButton ? (
                <span
                  key={index}
                  onClick={() => link.path && router.push(link.path)}
                  className="cursor-pointer bg-black text-white px-5 py-2 rounded-md text-sm md:text-base font-semibold transition-all duration-300 shadow hover:shadow-lg hover:scale-105"
                >
                  {link.name}
                </span>
              ) : link.hasDropdown && link.subLinks ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsPropertyDropdownOpen(true)}
                  onMouseLeave={() => setIsPropertyDropdownOpen(false)}
                >
                  <span className="cursor-pointer text-gray-700 hover:text-black text-sm md:text-base font-medium transition-colors duration-300 flex items-center space-x-1">
                    <span>{link.name}</span>
                    <FaChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </span>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ${
                      isPropertyDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {link.subLinks.map((subLink, subIndex) => (
                        <span
                          key={subIndex}
                          onClick={() => router.push(subLink.path)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer font-medium"
                        >
                          {subLink.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <span
                  key={index}
                  onClick={() => link.path && router.push(link.path)}
                  className="cursor-pointer text-gray-700 hover:text-black text-sm md:text-base font-medium transition-colors duration-300 relative group"
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
                  link.path && router.push(link.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full cursor-pointer bg-black text-white text-center px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 shadow hover:scale-105"
              >
                {link.name}
              </span>
            ) : link.hasDropdown && link.subLinks ? (
              <div key={index} className="space-y-2">
                <span className="block text-gray-900 font-semibold text-sm md:text-base border-b border-gray-200 pb-2">
                  {link.name}
                </span>
                <div className="pl-4 space-y-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    <span
                      key={subIndex}
                      onClick={() => {
                        router.push(subLink.path);
                        setIsMenuOpen(false);
                      }}
                      className="block cursor-pointer text-gray-600 hover:text-black text-sm md:text-base font-medium py-2 transition-colors duration-300"
                    >
                      {subLink.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <span
                key={index}
                onClick={() => {
                  link.path && router.push(link.path);
                  setIsMenuOpen(false);
                }}
                className="block cursor-pointer text-gray-700 hover:text-black text-sm md:text-base font-medium py-2 transition-colors duration-300 border-b border-gray-100"
              >
                {link.name}
              </span>
            )
          )}

          {/* Mobile Contact Info */}
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <FaPhone className="w-4 h-4 text-black" />
              <span>+234 800 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
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
