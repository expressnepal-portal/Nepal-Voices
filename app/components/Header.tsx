"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { House, X, Menu, Facebook, Youtube } from "lucide-react";
import { usePathname } from "next/navigation";
import { Category } from "@/lib/type";
import NepaliDateTime from "./NepaliDateTime";
import Image from "next/image";
import { useMobileMenu } from "./MobileMenuContext"; 
import HeaderAd from "./HeaderAd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const categories: Category[] = [
  { nepali: "समाचार", english: "News", slug: "news" },
  { nepali: "राजनीति", english: "News", slug: "politics" },
  { nepali: "समाज", english: "News", slug: "society" },
  { nepali: "अर्थतन्त्र", english: "अर्थतन्त्र", slug: "economy" },
  { nepali: "विज्ञान प्रविधि", english: "विज्ञान प्रविधि", slug: "technology" },
  { nepali: "कला साहित्य", english: "कला साहित्य", slug: "arts" },
  { nepali: "खेलकुद", english: "खेलकुद", slug: "sports" },
  { nepali: "विश्व", english: "विश्व", slug: "world" },
  { nepali: "Podcast", english: "Podcast", slug: "podcast" },
];

const dropdownCategories: string[] = [
  "news",
  "economy",
  "technology",
  "arts",
  "others",
];

export default function Header() {
  const pathname = usePathname() || "";
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  
  return (
    <header className="bg-white border-b-4 border-nepal-orange fixed top-0 left-0 right-0 z-50 shadow-xl w-full">
      {/* TOP BAR */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative ">
        {/* Logo and Nepali date/time */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-2 relative">
  {/* Top-right social icons */}
  <div className="absolute top-3 right-3 flex items-center gap-3">
    <Link href={""} className="text-gray-600 hover:text-blue-600 transition-colors">
      <Facebook size={15} />
    </Link>
    <Link href={""} className="text-gray-600 hover:text-red-600 transition-colors">
      <Youtube size={15} />
    </Link>
    <Link href={""} className="text-gray-600 hover:text-black transition-colors">X</Link>
  </div>

  {/* Hamburger for mobile */}
  <div className="absolute top-3 left-3 lg:hidden">
    <button
      className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? (
        <X className="w-6 h-6 text-gray-700 scale-[1.4]" />
      ) : (
        <Menu className="w-6 h-6 text-gray-700 scale-[1.4]" />
      )}
    </button>
  </div>

  {/* Centered Logo + Text + Nepali DateTime */}
  <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-4">
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        {/* Logo */}
        <Image
          src="/NVLOGO.png"
          width={50}
          height={50}
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
        {/* Nepal Voices Text */}
        <h1 className={`${playfair.className} font-extrabold tracking-tight
          text-xl sm:text-2xl md:text-3xl lg:text-3xl  max-w-[400px] text-center`}>
          <span className="text-[#CC0001]">Nepal</span>
          <span className="text-[#004AAD]"> Voices</span>
        </h1>
      </div>
    </Link>

    {/* Nepali Date/Time below text */}
    <div className="mt-1 ml-20 text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-md text-center">
      <NepaliDateTime />
    </div>
  </div>
</div>




      </div>

      {/* NAVBAR */}
      <nav className="hidden lg:flex bg-[#004AAD] sticky top-0 z-50 shadow-md">
        <div className="max-w-[1920px] mx-auto flex items-start lg:items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-2">
          
          {/* Hamburger / X icon for mobile */}
          <button
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center lg:hidden shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className={`flex flex-col lg:flex-row lg:items-center lg:gap-8 w-full lg:w-auto transition-all duration-300 ${mobileMenuOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden lg:max-h-full"}`}>
            {/* Home */}
            <Link href="/" className={`flex items-center justify-center w-14 h-10 shrink-0 rounded transition mb-2 lg:mb-0 ${pathname === "/" ? "bg-[#e3110e]" : ""}`}>
              <House className="text-white" />
            </Link>

            {/* Categories */}
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4 w-full">
              {categories.map((item, index) => {
                const isActive = pathname.includes(item.slug || "");
                return (
                  <li key={index} className="relative w-full lg:w-auto">
                    <Link href={`/${item.slug}`}>
                      <button className={`flex items-center justify-between px-4 py-2 h-10 w-full lg:w-auto font-bold text-md md:text-lg rounded transition
                        ${isActive ? "bg-[#e3110e] text-white" : "text-white hover:bg-red-600"} lg:hover:bg-red-600`}>
                        {item.nepali}
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
  className={`fixed top-0 right-0 w-82 sm:w-80 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
    <span className="font-bold text-xl tracking-wide mt-4">
      <Image src="/NVLOGO.png" width={50} height={50} alt="Nepal_Voice" />
    </span>
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="p-2 mt-4 rounded hover:bg-gray-200 transition"
    >
      <X className="w-6 h-6 text-gray-700" />
    </button>
  </div>

  {/* Menu Items */}
  <ul className="flex flex-col gap-2 mt-4 px-2 pl-2">
    {/* Home with House Icon */}
    <li>
      <Link
        href="/"
        onClick={() => setMobileMenuOpen(false)}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-lg font-semibold ${
          pathname === "/"
            ? "bg-clip-text text-transparent bg-linear-to-r from-[#CC0001] to-[#004AAD]" // active like card hover
            : "text-gray-800 hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-[#CC0001] hover:to-[#004AAD]"
        }`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <House className={`w-5 h-5 text-black ` } />
        Home
      </Link>
    </li>

    {/* Categories */}
    {categories.map((cat) => {
      const isActive = pathname.includes(cat.slug);
      return (
        <li key={cat.slug}>
          <Link
            href={`/${cat.slug}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
              isActive
                ? "bg-clip-text text-transparent bg-linear-to-r from-[#CC0001] to-[#004AAD]" // active like card hover
                : "text-gray-800 hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-[#CC0001] hover:to-[#004AAD]"
            }`}
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {cat.nepali}
          </Link>
        </li>
      );
    })}
  </ul>

  {/* Ad Section */}
  <div className="mt-8 px-4">
    {/* <HeaderAd /> */}
  </div>
</div>


    </header>
  );
}
