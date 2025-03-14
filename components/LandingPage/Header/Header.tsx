"use client";

import Image from "next/image";
import React from "react";
import house from "../../../public/Images/home2.jpg";
import { GoHome } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import yellow from "../../../public/Images/yellow.png";
import projectIcon from "../../../public/Images/project.png";
import companyIcon from "../../../public/Images/company.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { PiBuildings, PiHouseLine, PiWarehouse } from "react-icons/pi";
import { GiVillage, GiIsland } from "react-icons/gi";
import { useLanguage } from "../../../context/LanguageContext";

interface TranslationStrings {
  lets: string;
  discover: string;
  your: string;
  dreamProperty: string;
  ethiopia: string;
  description: string;
  bestProperty: string;
  companiesAlliance: string;
  projectCompleted: string;
  location: string;
  selectLocation: string;
  property: string;
  propertyType: string;
  bedrooms: string;
  selectBedrooms: string;
  search: string;
  studio: string;
  bedroom: string;
  bedrooms_plural: string;
}

const translations: Record<"en" | "am", TranslationStrings> = {
  en: {
    lets: "let's",
    discover: "Discover",
    your: "Your",
    dreamProperty: "Dream Property in",
    ethiopia: "Ethiopia",
    description:
      "Connecting you with properties that match your lifestyle and preferences in the heart of Ethiopia.",
    bestProperty: "Best property we provide",
    companiesAlliance: "Companies Alliance With Us",
    projectCompleted: "Project Completed",
    location: "Location",
    selectLocation: "Select Location",
    property: "Property",
    propertyType: "Property Type",
    bedrooms: "Bedrooms",
    selectBedrooms: "Select Bedrooms",
    search: "Search",
    studio: "Studio",
    bedroom: "Bedroom",
    bedrooms_plural: "Bedrooms",
  },
  am: {
    lets: "እንደ",
    discover: "ያግኙ",
    your: "የእርስዎን",
    dreamProperty: "የህልም ንብረት በ",
    ethiopia: "ኢትዮጵያ",
    description:
      "በኢትዮጵያ ልብ ውስጥ ከእርስዎ የኑሮ ዘይቤ እና ምርጫዎች ጋር የሚዛመዱ ንብረቶችን እናገናኝዎታለን።",
    bestProperty: "እኛ የምናቀርበው ምርጥ ንብረት",
    companiesAlliance: "ከእኛ ጋር የሚተባበሩ ኩባንያዎች",
    projectCompleted: "የተጠናቀቁ ፕሮጀክቶች",
    location: "አካባቢ",
    selectLocation: "አካባቢ ይምረጡ",
    property: "ንብረት",
    propertyType: "የንብረት አይነት",
    bedrooms: "መኝታ ቤቶች",
    selectBedrooms: "መኝታ ቤቶችን ይምረጡ",
    search: "ፈልግ",
    studio: "ስቱዲዮ",
    bedroom: "መኝታ ቤት",
    bedrooms_plural: "መኝታ ቤቶች",
  },
};

interface LocationLabel {
  en: string;
  am: string;
}

interface Location {
  value: string;
  label: LocationLabel;
}

interface PropertyType {
  value: string;
  label: LocationLabel;
  Icon: React.ElementType;
}

interface Bedroom {
  value: string;
  label: string;
  count: string;
}

// Ethiopian cities and regions with translations
const ethiopianLocations: Location[] = [
  { value: "addis-ababa", label: { en: "Addis Ababa", am: "አዲስ አበባ" } },
  { value: "dire-dawa", label: { en: "Dire Dawa", am: "ድሬዳዋ" } },
  { value: "bahir-dar", label: { en: "Bahir Dar", am: "ባህር ዳር" } },
  { value: "hawassa", label: { en: "Hawassa", am: "ሀዋሳ" } },
  { value: "mekelle", label: { en: "Mekelle", am: "መቀሌ" } },
  { value: "adama", label: { en: "Adama", am: "አዳማ" } },
  { value: "gondar", label: { en: "Gondar", am: "ጎንደር" } },
  { value: "jimma", label: { en: "Jimma", am: "ጅማ" } },
  { value: "dessie", label: { en: "Dessie", am: "ደሴ" } },
  { value: "bishoftu", label: { en: "Bishoftu", am: "ቢሾፍቱ" } },
];

const propertyTypes: PropertyType[] = [
  {
    value: "apartment",
    label: { en: "Apartment", am: "አፓርታማ" },
    Icon: PiBuildings,
  },
  { value: "house", label: { en: "House", am: "ቤት" }, Icon: PiHouseLine },
  { value: "villa", label: { en: "Villa", am: "ቪላ" }, Icon: GiVillage },
  {
    value: "commercial",
    label: { en: "Commercial", am: "ንግድ ቤት" },
    Icon: PiWarehouse,
  },
  { value: "land", label: { en: "Land", am: "መሬት" }, Icon: GiIsland },
];

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getBedrooms = (): Bedroom[] => {
    if (language === "en") {
      return [
        { value: "studio", label: "Studio", count: "Studio" },
        { value: "1", label: "1 Bedroom", count: "1" },
        { value: "2", label: "2 Bedrooms", count: "2" },
        { value: "3", label: "3 Bedrooms", count: "3" },
        { value: "4", label: "4 Bedrooms", count: "4" },
        { value: "5plus", label: "5+ Bedrooms", count: "5+" },
      ];
    }
    return [
      { value: "studio", label: "ስቱዲዮ", count: "ስቱዲዮ" },
      { value: "1", label: "1 መኝታ ቤት", count: "1" },
      { value: "2", label: "2 መኝታ ቤቶች", count: "2" },
      { value: "3", label: "3 መኝታ ቤቶች", count: "3" },
      { value: "4", label: "4 መኝታ ቤቶች", count: "4" },
      { value: "5plus", label: "5+ መኝታ ቤቶች", count: "5+" },
    ];
  };

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
            <h2 className="text-[#FF9A01] font-Sansation text-[1.6rem] md:text-[1.8rem] relative inline-block">
              {t.lets}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2rem] md:text-[2.4rem] font-Sansation leading-tight tracking-wide mt-4">
              <span className="relative inline-block group">
                <i>&#34;</i>
                {t.discover}
              </span>{" "}
              {t.your}
              <span className="font-light"> {t.dreamProperty}</span>
              <span className="relative inline-block group">
                {" "}
                {t.ethiopia}
                <i>&#34;</i>
              </span>
            </h3>
          </div>

          {/* Desktop hero text */}
          <div className="space-y-6 hidden lg:block">
            <h2 className="text-[#FF9A01] font-Sansation text-[2rem] relative inline-block">
              {t.lets}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2.8rem] lg:text-[3.2rem] font-Sansation leading-tight tracking-wide">
              <span className="text-[#1DA599] relative inline-block group">
                <i>&#34;</i>
                {t.discover}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>{" "}
              {t.your} <br className="lg:block hidden" />
              <span className="text-[#454545] font-light">
                {t.dreamProperty}
              </span>
              <br className="lg:block hidden" />
              <span className="text-[#1DA599] relative inline-block group">
                {t.ethiopia}
                <i>&#34;</i>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
            </h3>
            <p className="font-Sansation tracking-wide text-[#454545] lg:pr-8 text-base md:text-lg max-w-[500px] leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="font-Sansation flex flex-wrap gap-6 md:gap-8 lg:gap-12 w-full pt-4">
            {/*------------- properties count-----------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <GoHome className="w-5 h-5 md:w-6 md:h-6 group-hover:text-white transition-colors duration-300" />
                </div>
                378+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.bestProperty}
              </span>
            </div>

            {/*------------ companies count--------------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <Image
                    src={companyIcon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6 group-hover:brightness-200 transition-all duration-300"
                  />
                </div>
                100+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.companiesAlliance}
              </span>
            </div>

            {/*-------------- project count------------------  */}
            <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-[#1DA599] flex items-center gap-3 text-[1.2rem] md:text-[1.4rem] font-medium">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <Image
                    src={projectIcon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6 group-hover:brightness-200 transition-all duration-300"
                  />
                </div>
                336+
              </span>
              <span className="text-[0.8rem] md:text-[0.9rem] tracking-wide text-[#454545] block mt-2">
                {t.projectCompleted}
              </span>
            </div>
          </div>
        </div>

        {/* Right side section  */}
        <div className="w-full lg:w-6/12 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={house}
            alt="Modern House"
            fill
            priority
            className="object-cover object-center rounded-b-[2rem] lg:rounded-[2rem] shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 lg:from-black/20 lg:to-transparent rounded-b-[2rem] lg:rounded-[2rem]" />
        </div>
      </div>

      {/* property search section  */}
      <form className="mt-6 md:mt-8 hidden md:flex backdrop-blur-lg bg-white/90 rounded-2xl mx-4 lg:mx-8 items-center justify-between font-Sansation relative z-50 border-2 border-[#1DA599]/10 overflow-hidden">
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
            <SelectContent className="font-Sansation border-2 border-[#1DA599]/10">
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
            <SelectContent className="font-Sansation border-2 border-[#1DA599]/10">
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

        {/* --------------------- select Bedrooms-----------------  */}
        <div className="flex-1 px-4 md:px-6 py-4 border-r-2 border-[#1DA599]/10 relative group">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 h-12 md:h-14 bg-transparent hover:bg-[#1DA599]/5 transition-colors duration-300 rounded-xl group-hover:rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1DA599]/10 group-hover:bg-[#1DA599] transition-colors duration-300">
                  <IoBedOutline className="w-5 h-5 text-[#1DA599] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-[#1DA599]">{t.bedrooms}</span>
                  <SelectValue
                    placeholder={t.selectBedrooms}
                    className="text-[#454545]"
                  />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="font-Sansation border-2 border-[#1DA599]/10">
              <SelectGroup>
                {getBedrooms().map((bedroom) => (
                  <SelectItem
                    key={bedroom.value}
                    value={bedroom.value}
                    className="py-3 hover:bg-[#1DA599]/5 cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{bedroom.label}</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-[#1DA599]/10 text-[#1DA599] font-medium">
                        {bedroom.count}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* --------------------- search btn-----------------  */}
        <div className="px-4 md:px-6 py-4">
          <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] font-Sansation rounded-xl h-12 md:h-14 px-6 md:px-8 text-base flex items-center gap-3 transition-all duration-300 hover:scale-[0.98] hover:shadow-lg relative overflow-hidden group">
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
