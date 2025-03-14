"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import forRentHero from "../../../public/Images/home.png";

const translations = {
  en: {
    discover: "Discover Rentals",
    title: "Properties For Rent",
    description:
      "Find your ideal rental property from our extensive selection. From modern apartments to luxury homes, discover the perfect place to live in Ethiopia's most sought-after locations.",
    propertiesCount: "Properties Listed",
    newListings: "New Listings",
    verifiedAgents: "Verified Agents",
  },
  am: {
    discover: "የኪራይ ቤቶችን ያግኙ",
    title: "ለኪራይ የቀረቡ ንብረቶች",
    description:
      "ከሰፊው የኪራይ ንብረቶች ስብስብ ውስጥ ተስማሚ የሆነውን ያግኙ። ከዘመናዊ አፓርታማዎች እስከ ፈጣሪ ቤቶች፣ በኢትዮጵያ ውስጥ በጣም በሚፈለጉ ስፍራዎች ፍጹም የሆነውን መኖሪያ ያግኙ።",
    propertiesCount: "የተዘረዘሩ ንብረቶች",
    newListings: "አዲስ ዝርዝሮች",
    verifiedAgents: "የተረጋገጡ ወኪሎች",
  },
};

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="relative w-full min-h-[60vh] flex items-center overflow-hidden rounded-md">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={forRentHero}
          alt="Properties For Rent"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-block bg-[#1DA599]/20 backdrop-blur-sm px-6 py-2 rounded-md mb-6">
            <span className="font-Sansation text-[#1DA599] text-sm">
              {t.discover}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-Sansation text-white leading-tight mb-6">
            {t.title}
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg font-Sansation leading-relaxed mb-12 max-w-2xl">
            {t.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
            <div className="backdrop-blur-md bg-white/10 rounded-md p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <span className="block text-[#1DA599] text-2xl md:text-3xl font-Sansation mb-2">
                1,800+
              </span>
              <span className="text-white/80 text-sm font-Sansation">
                {t.propertiesCount}
              </span>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-md p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <span className="block text-[#1DA599] text-2xl md:text-3xl font-Sansation mb-2">
                120+
              </span>
              <span className="text-white/80 text-sm font-Sansation">
                {t.newListings}
              </span>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-md p-4 border border-white/10 sm:col-span-1 col-span-2 hover:bg-white/20 transition-all duration-300">
              <span className="block text-[#1DA599] text-2xl md:text-3xl font-Sansation mb-2">
                80+
              </span>
              <span className="text-white/80 text-sm font-Sansation">
                {t.verifiedAgents}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
