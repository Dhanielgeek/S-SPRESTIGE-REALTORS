import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/sandsprestigelogo-removebg-preview.png";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

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
            Providing excellent service in locating your ideal property.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span
                onClick={() => router.push("/#home")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/#sale")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Sale
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/#rent")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Rent
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/#shortlet")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Shortlet/BnB
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/book")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Book and Inspect
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/book")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Asset Valuation
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/book")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Asset Management
              </span>
            </li>
            <li>
              <span
                onClick={() => router.push("/book")}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Facility Management
              </span>
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
            <span className="hover:text-black transition-colors cursor-pointer">
              <FaFacebook />
            </span>
            <span className="hover:text-black transition-colors cursor-pointer">
              <FaTwitter />
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sandsprestige?igsh=Yzd1dnBsaXE2bXB6&utm_source=qr",
                  "_blank"
                )
              }
              className="hover:text-black transition-colors cursor-pointer"
            >
              <FaInstagram />
            </span>

            <span className="hover:text-black transition-colors cursor-pointer">
              <FaLinkedin />
            </span>
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
