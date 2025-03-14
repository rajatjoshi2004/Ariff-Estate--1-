"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import { Search, MapPin, Home } from "lucide-react";
import yellow from "../../../public/Images/yellow.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";

const translations = {
  en: {
    lets: "let's",
    luxury: "Luxury Properties",
    justForYou: "Just For You.",
    description:
      "Discover handpicked premium properties that offer unmatched comfort, style, and value.",
    propertyType: "Property Type",
    location: "Location",
    search: "Search",
    anyType: "Any Type",
    anyLocation: "Any Location",
    selectLocation: "Select Location",
    selectType: "Select Type",
  },
  am: {
    lets: "እንደ",
    luxury: "ዘመናዊ ንብረቶች",
    justForYou: "ለእርስዎ ብቻ።",
    description:
      "ምንም ያልተገናኘ ምቾት ፣ ስタይል እና ዋጋ የሚሰጡ በእጅ የተመረጡ ፕሪሚየም ንብረቶችን ያግኙ።",
    propertyType: "የንብረት አይነት",
    location: "አካባቢ",
    search: "ፈልግ",
    anyType: "ማንኛውም አይነት",
    anyLocation: "ማንኛውም አካባቢ",
    selectLocation: "አካባቢ ይምረጡ",
    selectType: "አይነት ይምረጡ",
  },
};

const ExclusiveHeader = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full min-h-[80vh] relative">
      <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between relative px-4 md:px-6 lg:px-8">
        {/* Yellow arrow - positioned behind content */}
        <div className="absolute hidden lg:block left-[38%] top-[45%] -z-10">
          <Image
            src={yellow}
            alt="yellow-Icon"
            className="w-[140px] md:w-[160px] lg:w-[180px] -rotate-5 animate-pulse"
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-6/12 space-y-6 md:space-y-8 mt-6 lg:mt-0 lg:py-12">
          {/* Mobile & Tablet hero text overlay */}
          <div className="lg:hidden absolute top-8 left-4 right-4 z-20 text-white">
            <h2 className="text-[#FF9A01] font-sansationBold text-[1.6rem] md:text-[1.8rem] relative inline-block">
              {t.lets}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>
            <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight tracking-wide mt-4">
              <span className="relative inline-block group">{t.luxury}</span>
              <br />
              <span className="font-light">{t.justForYou}</span>
            </h3>
          </div>

          {/* Desktop hero text */}
          <div className="space-y-6 hidden lg:block">
            <h2 className="text-[#FF9A01] font-sansationBold text-[2rem] relative inline-block">
              {t.lets}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2.8rem] lg:text-[3.2rem] font-sansationBold leading-tight tracking-wide">
              <span className="text-[#1DA599] relative inline-block group">
                {t.luxury}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
              <br className="lg:block hidden" />
              <span className="text-[#454545] font-light">{t.justForYou}</span>
            </h3>
            <p className="font-sansationRegular tracking-wide text-[#454545] lg:pr-8 text-base md:text-lg max-w-[500px] leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-6/12 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] lg:rounded-[2rem]">
            <Image
              src="/Images/exclusiveheader.png"
              alt="Luxury Properties"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:from-black/20 lg:to-transparent" />
          </div>
        </div>
      </div>

      {/* Search Filter - Desktop */}
      <form className="mt-6 md:mt-8 hidden md:flex backdrop-blur-lg bg-white/90 rounded-2xl mx-4 lg:mx-8 items-center justify-between font-sansationRegular relative z-50 border-2 border-[#1DA599]/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1DA599]/5 to-transparent pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#1DA599]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#FF9A01]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Location */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">{t.location}</span>
                  <SelectValue
                    placeholder={t.selectLocation}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                <SelectItem
                  value="bole"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  Bole
                </SelectItem>
                <SelectItem
                  value="cmc"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  CMC
                </SelectItem>
                <SelectItem
                  value="summit"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  Summit
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <Home className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">
                    {t.propertyType}
                  </span>
                  <SelectValue
                    placeholder={t.selectType}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                <SelectItem
                  value="apartment"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  Apartment
                </SelectItem>
                <SelectItem
                  value="house"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  House
                </SelectItem>
                <SelectItem
                  value="villa"
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  Villa
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="px-4 md:px-6 py-4">
          <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] font-sansationRegular rounded-xl h-12 md:h-14 px-6 md:px-8 text-base flex items-center gap-3 transition-all duration-300 hover:scale-[0.98] hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A01] to-[#1DA599] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Search className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.search}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExclusiveHeader;
