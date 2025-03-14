"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";

const translations = {
  en: {
    badge: "Exclusive Properties",
    title: "Find Your",
    titleHighlight: "Dream Home",
    description:
      "Discover our handpicked selection of luxury properties in Ethiopia's most desirable locations. Each property is carefully chosen to meet the highest standards of quality and comfort.",
    search: "Search properties...",
    location: "Select Location",
    priceRange: "Price Range",
    beds: "Bedrooms",
    baths: "Bathrooms",
    clearAll: "Clear all",
    apply: "Apply filters",
    locations: ["Addis Ababa", "Bahir Dar", "Hawassa", "Adama"],
    priceRanges: ["5M - 10M", "10M - 15M", "15M - 20M", "20M+"],
    bedOptions: ["1", "2", "3", "4", "5+"],
    bathOptions: ["1", "2", "3", "4+"],
  },
  am: {
    badge: "ልዩ ንብረቶች",
    title: "የህልምዎን",
    titleHighlight: "ቤት ያግኙ",
    description:
      "በኢትዮጵያ በጣም በሚፈለጉ አካባቢዎች የሚገኙ በእጅ የተመረጡ የፍቅር ንብረቶችን ያግኙ። እያንዳንዱ ንብረት ከፍተኛውን የጥራት እና የምቾት ደረጃ እንዲያሟላ በጥንቃቄ ተመርጧል።",
    search: "ንብረቶችን ይፈልጉ...",
    location: "አካባቢ ይምረጡ",
    priceRange: "የዋጋ ክልል",
    beds: "መኝታ ቤቶች",
    baths: "ባኞ ቤቶች",
    clearAll: "ሁሉንም አጽዳ",
    apply: "ማጣሪያዎችን ተግብር",
    locations: ["አዲስ አበባ", "ባህር ዳር", "ሀዋሳ", "አዳማ"],
    priceRanges: ["5ሚ - 10ሚ", "10ሚ - 15ሚ", "15ሚ - 20ሚ", "20ሚ+"],
    bedOptions: ["1", "2", "3", "4", "5+"],
    bathOptions: ["1", "2", "3", "4+"],
  },
};

interface CardHeaderProps {
  language: string;
}

const CardHeader = ({ language }: CardHeaderProps) => {
  const t = translations[language];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    priceRange: "",
    beds: "",
    baths: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      priceRange: "",
      beds: "",
      baths: "",
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
        {/* Left side: heading part */}
        <div className="w-full md:w-5/12 md:sticky md:top-32">
          <div className="space-y-6">
            <div className="inline-block bg-[#1DA599]/10 px-6 py-2 rounded-full">
              <span className="font-sansationRegular text-[#1DA599] text-sm">
                {t.badge}
              </span>
            </div>
            <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight">
              {t.title}{" "}
              <span className="text-[#1DA599]">{t.titleHighlight}</span>
            </h3>
            <p className="font-sansationRegular text-[#454545] text-sm md:text-base leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Right side: filter section */}
        <div className="w-full md:w-6/12">
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            {/* Search Bar */}
            <div className="relative mb-4">
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1DA599] text-xl" />
              <input
                type="text"
                placeholder={t.search}
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-12 pr-4 h-12 rounded-xl border-2 border-[#1DA599]/10 focus:border-[#1DA599] outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "location" ? null : "location"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-[#1DA599] text-lg" />
                    <span className="text-gray-600 truncate">
                      {filters.location || t.location}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={`text-[#1DA599] transition-transform duration-300 ${
                      activeDropdown === "location" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "location" && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                    {t.locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleFilterChange("location", loc)}
                        className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "price" ? null : "price"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <BsCurrencyDollar className="text-[#1DA599] text-lg" />
                    <span className="text-gray-600 truncate">
                      {filters.priceRange || t.priceRange}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={`text-[#1DA599] transition-transform duration-300 ${
                      activeDropdown === "price" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "price" && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                    {t.priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => handleFilterChange("priceRange", range)}
                        className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bedrooms */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "beds" ? null : "beds")
                  }
                  className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <IoBedOutline className="text-[#1DA599] text-lg" />
                    <span className="text-gray-600 truncate">
                      {filters.beds || t.beds}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={`text-[#1DA599] transition-transform duration-300 ${
                      activeDropdown === "beds" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "beds" && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                    {t.bedOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleFilterChange("beds", option)}
                        className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                      >
                        {option} {parseInt(option) === 1 ? "Bed" : "Beds"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bathrooms */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "baths" ? null : "baths"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <LuBath className="text-[#1DA599] text-lg" />
                    <span className="text-gray-600 truncate">
                      {filters.baths || t.baths}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={`text-[#1DA599] transition-transform duration-300 ${
                      activeDropdown === "baths" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "baths" && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                    {t.bathOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleFilterChange("baths", option)}
                        className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                      >
                        {option} {parseInt(option) === 1 ? "Bath" : "Baths"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <Button
                onClick={clearFilters}
                className="flex-1 h-12 text-[#1DA599] bg-[#1DA599]/5 hover:bg-[#1DA599]/10 rounded-xl"
              >
                {t.clearAll}
              </Button>
              <Button className="flex-1 h-12 bg-[#1DA599] hover:bg-[#18877e] text-white rounded-xl">
                {t.apply}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
