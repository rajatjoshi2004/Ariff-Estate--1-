"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { PiBuildings, PiHouseLine, PiWarehouse } from "react-icons/pi";
import { GiVillage, GiIsland } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineConstruction } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Button } from "../../ui/button";
import newDev from "../../../public/Images/new-dev.jpg";
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

interface TranslationStrings {
  lets: string;
  discover: string;
  new: string;
  development: string;
  projects: string;
  ethiopia: string;
  description: string;
  ongoingProjects: string;
  totalUnits: string;
  investmentValue: string;
  location: string;
  selectLocation: string;
  property: string;
  propertyType: string;
  completionDate: string;
  selectCompletion: string;
  search: string;
}

const translations: Record<"en" | "am", TranslationStrings> = {
  en: {
    lets: "let's",
    discover: "Discover",
    new: "New",
    development: "Development",
    projects: "Projects in",
    ethiopia: "Ethiopia",
    description:
      "Explore modern, newly built properties designed for comfort and style. Perfect for buyers seeking the latest in real estate.",
    ongoingProjects: "Ongoing Projects",
    totalUnits: "Total Units",
    investmentValue: "Investment Value",
    location: "Location",
    selectLocation: "Select Location",
    property: "Property",
    propertyType: "Property Type",
    completionDate: "Completion",
    selectCompletion: "Expected Completion",
    search: "Search Projects",
  },
  am: {
    lets: "እንደ",
    discover: "ያግኙ",
    new: "አዲስ",
    development: "የልማት",
    projects: "ፕሮጀክቶች በ",
    ethiopia: "ኢትዮጵያ",
    description:
      "ለምቾት እና ስታይል የተዘጋጁ ዘመናዊ፣ አዲስ የተገነቡ ንብረቶችን ያግኙ። ዘመናዊ የሪል እስቴት ፍለጋ ላሉ ገዢዎች ፍጹም ተስማሚ።",
    ongoingProjects: "በመካሄድ ላይ ያሉ ፕሮጀክቶች",
    totalUnits: "ጠቅላላ ክፍሎች",
    investmentValue: "የኢንቨስትመንት እሴት",
    location: "አካባቢ",
    selectLocation: "አካባቢ ይምረጡ",
    property: "ንብረት",
    propertyType: "የንብረት አይነት",
    completionDate: "የማጠናቀቂያ ጊዜ",
    selectCompletion: "የሚጠበቀው የማጠናቀቂያ ጊዜ",
    search: "ፕሮጀክቶችን ይፈልጉ",
  },
};

// Ethiopian cities and regions with translations
const ethiopianLocations = [
  { value: "addis-ababa", label: { en: "Addis Ababa", am: "አዲስ አበባ" } },
  { value: "dire-dawa", label: { en: "Dire Dawa", am: "ድሬዳዋ" } },
  { value: "bahir-dar", label: { en: "Bahir Dar", am: "ባህር ዳር" } },
  { value: "hawassa", label: { en: "Hawassa", am: "ሀዋሳ" } },
  { value: "mekelle", label: { en: "Mekelle", am: "መቀሌ" } },
  { value: "adama", label: { en: "Adama", am: "አዳማ" } },
];

const propertyTypes = [
  {
    value: "apartment",
    label: { en: "Apartment Complex", am: "የአፓርታማ ኮምፕሌክስ" },
    Icon: PiBuildings,
  },
  {
    value: "residential",
    label: { en: "Residential Compound", am: "የመኖሪያ ኮምፓውንድ" },
    Icon: PiHouseLine,
  },
  {
    value: "mixed-use",
    label: { en: "Mixed-Use Development", am: "ድብልቅ አገልግሎት ግንባታ" },
    Icon: GiVillage,
  },
  {
    value: "commercial",
    label: { en: "Commercial Center", am: "የንግድ ማዕከል" },
    Icon: PiWarehouse,
  },
  {
    value: "community",
    label: { en: "Community Development", am: "የማህበረሰብ ልማት" },
    Icon: GiIsland,
  },
];

const completionDates = [
  { value: "2017", label: { en: "2017 E.C.", am: "2017 ዓ.ም." } },
  { value: "2018", label: { en: "2018 E.C.", am: "2018 ዓ.ም." } },
  { value: "2019", label: { en: "2019 E.C.", am: "2019 ዓ.ም." } },
  { value: "2020", label: { en: "2020 E.C.", am: "2020 ዓ.ም." } },
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

        {/*-------------- Left side section-------------  */}
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
              <span className="font-light">
                {t.new} {t.development}
              </span>
              <br />
              <span className="font-light">{t.projects}</span>
              <span className="relative inline-block group"> {t.ethiopia}</span>
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
              <span className="text-[#454545] font-light">
                {t.new} {t.development}
              </span>
              <br className="lg:block hidden" />
              <span className="text-[#454545] font-light">{t.projects}</span>
              <br className="lg:block hidden" />
              <span className="text-[#1DA599] relative inline-block group">
                {t.ethiopia}
                <i>&#34;</i>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
            </h3>
            <p className="font-sansationRegular tracking-wide text-[#454545] lg:pr-8 text-base md:text-lg max-w-[500px] leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="font-sansationRegular flex flex-wrap gap-6 md:gap-8 lg:gap-12 w-full pt-4">
            {/*------------- Ongoing Projects -----------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <MdOutlineConstruction className="w-5 h-5 md:w-6 md:h-6 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                50+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.ongoingProjects}
              </span>
            </div>

            {/*------------ Total Units --------------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <BsBuildings className="w-5 h-5 md:w-6 md:h-6 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                2.5K+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.totalUnits}
              </span>
            </div>

            {/*-------------- Investment Value ------------------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <HiOutlineBuildingOffice2 className="w-5 h-5 md:w-6 md:h-6 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                $1B+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.investmentValue}
              </span>
            </div>
          </div>
        </div>

        {/* Right side section  */}
        <div className="w-full lg:w-6/12 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={newDev}
            alt="New Development"
            fill
            priority
            className="object-cover object-center rounded-b-[2rem] lg:rounded-[2rem] shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 lg:from-black/20 lg:to-transparent rounded-b-[2rem] lg:rounded-[2rem]" />
        </div>
      </div>

      {/* property search section  */}
      <form className="mt-6 md:mt-8 hidden md:flex backdrop-blur-lg bg-white/90 rounded-2xl mx-4 lg:mx-8 items-center justify-between font-sansationRegular relative z-50 border-2 border-[#1DA599]/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1DA599]/5 to-transparent pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#1DA599]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#FF9A01]/5 rounded-full blur-3xl pointer-events-none" />

        {/*---------------- select Location ------------- */}
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
                {ethiopianLocations.map((location) => (
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

        {/* --------------------- select property type-----------------  */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <PiBuildings className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">{t.property}</span>
                  <SelectValue
                    placeholder={t.propertyType}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                {propertyTypes.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-[#1DA599]/10">
                        <type.Icon className="w-4 h-4 text-[#1DA599]" />
                      </div>
                      {type.label[language]}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* --------------------- select Completion Date -----------------  */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <IoBedOutline className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">
                    {t.completionDate}
                  </span>
                  <SelectValue
                    placeholder={t.selectCompletion}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-sansationRegular border-2 border-[#1DA599]/10">
              <SelectGroup>
                {completionDates.map((date) => (
                  <SelectItem
                    key={date.value}
                    value={date.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    {date.label[language]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* --------------------- search btn-----------------  */}
        <div className="px-4 md:px-6 py-4">
          <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] font-sansationRegular rounded-xl h-12 md:h-14 px-6 md:px-8 text-base flex items-center gap-3 transition-all duration-300 hover:scale-[0.98] hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A01] to-[#1DA599] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <BiSearch className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.search}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Header;
