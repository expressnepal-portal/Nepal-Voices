"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Logo Component
function Logo({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-14 h-14",
    medium: "w-18 h-18",
    large: "w-24 h-24",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-3xl flex items-center justify-center shadow-md overflow-hidden border border-black`}
    >
      <img
        src="/NVLOGO.png"
        alt="Nepal Voices"
        className="w-[110%] h-[110%] object-contain -m-[5%]"
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#004AAD] border-t-4 border-nepal-orange text-white w-full mt-10 ">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-10 md:py-14 flex flex-col md:flex-row md:justify-around md:items-start gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Logo size="medium" />
          <h3
            className={`${playfair.className} text-2xl md:text-3xl font-bold mt-6 text-center md:text-left`}
          >
            <span className="text-">Nepal</span>
            <span className="text-[#CC0001]"> Voices</span>
          </h3>
          <p className="text-gray-300 mt-2 text-center md:text-left">
            Trusted news from Nepal
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4
            className={`${playfair.className} font-bold mb-4 text-xl md:text-2xl`}
          >
            Quick Links
          </h4>
          <ul className="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-2 md:gap-6 text-center md:text-left">
            {[
              "About Us",
              "Advertise",
              "Privacy Policy",
              "Terms of Service",
              "Accessibility",
              "Contact",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-nepal-orange transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4
            className={`${playfair.className} font-bold text-xl md:text-2xl mb-2`}
          >
            Follow Us
          </h4>
          <div className="flex gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 512 512"
              >
                <path d="M349.33 69.33H162.67C107.03 69.33 69.33 107.03 69.33 162.67v186.66c0 55.64 37.7 93.34 93.34 93.34h186.66c55.64 0 93.34-37.7 93.34-93.34V162.67c0-55.64-37.7-93.34-93.34-93.34zm62.67 280c0 34.53-28.14 62.67-62.67 62.67H162.67c-34.53 0-62.67-28.14-62.67-62.67V162.67c0-34.53 28.14-62.67 62.67-62.67h186.66c34.53 0 62.67 28.14 62.67 62.67v186.66zM256 149.33c-58.84 0-106.67 47.83-106.67 106.67S197.16 362.67 256 362.67 362.67 314.84 362.67 256 314.84 149.33 256 149.33zm0 176c-38.59 0-69.33-30.74-69.33-69.33S217.41 187.67 256 187.67 325.33 218.41 325.33 256 294.59 325.33 256 325.33zm85.33-147.33a24 24 0 1 1-24-24 24 24 0 0 1 24 24z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.05c0-25.35 12.42-50.06 52.24-50.06H293V6.26S261.6 0 231.36 0C141.09 0 89.09 54.42 89.09 154.61V195.3H0v92.66h89.09V512h107.92V288z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.824-42.215-48.267-48.494C458.078 64 288 64 288 64s-170.078 0-213.388 11.589c-23.443 6.279-42 24.844-48.267 48.494C16 167.391 16 256 16 256s0 88.609 10.345 131.917c6.281 23.65 24.824 42.215 48.267 48.494C117.922 448 288 448 288 448s170.078 0 213.388-11.589c23.443-6.279 42-24.844 48.267-48.494C560 344.609 560 256 560 256s0-88.609-10.345-131.917zM232 334V178l142 78-142 78z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 13.32 1.624 20.467 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
