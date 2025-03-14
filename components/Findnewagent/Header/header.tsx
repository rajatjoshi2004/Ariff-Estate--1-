"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { Button } from "../../ui/button";
import agent from "../../../public/Images/agent.jpg";
import yellow from "../../../public/Images/yellow.png";
import { useLanguage } from "../../../context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const translations = {
  en: {
    lets: "let's",
    discover: "Discover",
    your: "Your Perfect",
    agent: "Real Estate Agent",
    description:
      "Connect with experienced real estate agents who can help you find your dream property. Our agents are carefully selected and have extensive knowledge of the Ethiopian real estate market.",
    location: "Location",
    selectLocation: "Select Location",
    experience: "Experience",
    selectExperience: "Years of Experience",
    rating: "Rating",
    selectRating: "Minimum Rating",
    search: "Search Agents",
  },
  am: {
    lets: "እንደ",
    discover: "ያግኙ",
    your: "ፍጹም የሆነውን",
    agent: "የሪል እስቴት ወኪልዎን",
    description:
      "የህልምዎን ንብረት እንዲያገኙ ሊያግዙዎት ከሚችሉ ልምድ ካላቸው የሪል እስቴት ወኪሎች ጋር ይገናኙ። ወኪሎቻችን በጥንቃቄ የተመረጡ እና በኢትዮጵያ የሪል እስቴት ገበያ ሰፊ እውቀት አላቸው።",
    location: "አካባቢ",
    selectLocation: "አካባቢ ይምረጡ",
    experience: "የስራ ልምድ",
    selectExperience: "የስራ ልምድ በዓመት",
    rating: "ደረጃ",
    selectRating: "ዝቅተኛ ደረጃ",
    search: "ወኪሎችን ይፈልጉ",
  },
};

const locations = [
  { value: "addis-ababa", label: { en: "Addis Ababa", am: "አዲስ አበባ" } },
  { value: "dire-dawa", label: { en: "Dire Dawa", am: "ድሬዳዋ" } },
  { value: "bahir-dar", label: { en: "Bahir Dar", am: "ባህር ዳር" } },
  { value: "hawassa", label: { en: "Hawassa", am: "ሀዋሳ" } },
  { value: "mekelle", label: { en: "Mekelle", am: "መቀሌ" } },
  { value: "adama", label: { en: "Adama", am: "አዳማ" } },
];

const experienceLevels = [
  { value: "1", label: { en: "1+ years", am: "1+ ዓመት" } },
  { value: "3", label: { en: "3+ years", am: "3+ ዓመት" } },
  { value: "5", label: { en: "5+ years", am: "5+ ዓመት" } },
  { value: "10", label: { en: "10+ years", am: "10+ ዓመት" } },
];

const ratings = [
  { value: "4.5", label: { en: "4.5+ stars", am: "4.5+ ኮከብ" } },
  { value: "4.0", label: { en: "4.0+ stars", am: "4.0+ ኮከብ" } },
  { value: "3.5", label: { en: "3.5+ stars", am: "3.5+ ኮከብ" } },
  { value: "3.0", label: { en: "3.0+ stars", am: "3.0+ ኮከብ" } },
];

const Header = () => {
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

        {/* Left side section */}
        <div className="w-full lg:w-6/12 space-y-6 md:space-y-8 mt-6 lg:mt-0 lg:py-12">
          {/* Mobile & Tablet hero text overlay */}
          <div className="lg:hidden absolute top-8 left-4 right-4 z-20 text-white">
            <h2 className="text-[#FF9A01] font-sansationBold text-[1.6rem] md:text-[1.8rem] relative inline-block">
              {t.lets}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight tracking-wide mt-4">
              <span className="relative inline-block group">{t.discover}</span>{" "}
              <span className="font-light">{t.your}</span>
              <br />
              <span className="relative inline-block group">{t.agent}</span>
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
                <i>&#34;</i>
                {t.discover}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>{" "}
              <br className="lg:block hidden" />
              <span className="text-[#454545] font-light">{t.your}</span>
              <br className="lg:block hidden" />
              <span className="text-[#1DA599] relative inline-block group">
                {t.agent}
                <i>&#34;</i>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
            </h3>
            <p className="font-sansationRegular tracking-wide text-[#454545] lg:pr-8 text-base md:text-lg max-w-[500px] leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Right side section */}
        <div className="w-full lg:w-6/12 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] lg:rounded-[2rem]">
            <Image
              src={agent}
              alt="Find Agent"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:from-black/20 lg:to-transparent" />
          </div>
        </div>
      </div>

      {/* Search section - Desktop */}
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
                  <HiOutlineMapPin className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
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
                {locations.map((location) => (
                  <SelectItem
                    key={location.value}
                    value={location.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    {location.label[language]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Experience */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <MdVerified className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">{t.experience}</span>
                  <SelectValue
                    placeholder={t.selectExperience}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                {experienceLevels.map((level) => (
                  <SelectItem
                    key={level.value}
                    value={level.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    {level.label[language]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <BiSearch className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">{t.rating}</span>
                  <SelectValue
                    placeholder={t.selectRating}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                {ratings.map((rating) => (
                  <SelectItem
                    key={rating.value}
                    value={rating.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    {rating.label[language]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Search button */}
        <div className="px-4 md:px-6 py-4">
          <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] font-sansationRegular rounded-xl h-12 md:h-14 px-6 md:px-8 text-base flex items-center gap-3 transition-all duration-300 hover:scale-[0.98] hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A01] to-[#1DA599] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <BiSearch className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.search}</span>
          </Button>
        </div>
      </form>

      {/* Search section - Mobile */}
      <div className="md:hidden px-4 space-y-4 mt-6">
        <Select>
          <SelectTrigger className="w-full border-2 border-[#1DA599]/10 h-14 bg-white hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#1DA599]/10">
                <HiOutlineMapPin className="w-5 h-5 text-[#1DA599]" />
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
          <SelectContent>
            <SelectGroup>
              {locations.map((location) => (
                <SelectItem
                  key={location.value}
                  value={location.value}
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  {location.label[language]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full border-2 border-[#1DA599]/10 h-14 bg-white hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#1DA599]/10">
                <MdVerified className="w-5 h-5 text-[#1DA599]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#1DA599]">{t.experience}</span>
                <SelectValue
                  placeholder={t.selectExperience}
                  className="text-[#454545]"
                />
              </div>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {experienceLevels.map((level) => (
                <SelectItem
                  key={level.value}
                  value={level.value}
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  {level.label[language]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full border-2 border-[#1DA599]/10 h-14 bg-white hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#1DA599]/10">
                <BiSearch className="w-5 h-5 text-[#1DA599]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-[#1DA599]">{t.rating}</span>
                <SelectValue
                  placeholder={t.selectRating}
                  className="text-[#454545]"
                />
              </div>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ratings.map((rating) => (
                <SelectItem
                  key={rating.value}
                  value={rating.value}
                  className="py-3 hover:bg-[#1DA599]/5 cursor-pointer"
                >
                  {rating.label[language]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="w-full bg-gradient-to-r from-[#1DA599] to-[#18877e] font-sansationRegular rounded-xl py-4 text-base flex items-center justify-center gap-2">
          <BiSearch className="w-5 h-5" />
          {t.search}
        </Button>
      </div>
    </div>
  );
};

export default Header;
