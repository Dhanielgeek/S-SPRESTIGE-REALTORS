import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/sandsprestigelogo-removebg-preview.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Image
                src={logo}
                alt="S & S Prestige Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900">S & S Prestige</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Committed to delivering excellence in real estate sales, rentals,
            and shortlets. We guide you every step of the way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-black transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#sale" className="hover:text-black transition-colors">
                Sale
              </a>
            </li>
            <li>
              <a href="#rent" className="hover:text-black transition-colors">
                Rent
              </a>
            </li>
            <li>
              <a
                href="#shortlet"
                className="hover:text-black transition-colors"
              >
                Shortlet/BnB
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-black transition-colors">
                Book Online
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-medium">Phone:</span> +234 800 123 4567
            </li>
            <li>
              <span className="font-medium">Email:</span> info@sandsprestige.com
            </li>
            <li>
              <span className="font-medium">Address:</span> 123 Lekki Phase 1,
              Lagos
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-black transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} S & S Prestige Realtors. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
